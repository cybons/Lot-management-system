from datetime import datetime, timezone
from typing import List, Optional
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.forecast import Forecast
from app.schemas.forecast import ForecastCreate, ForecastRead
from app.services.forecast_matcher import judge_status, pick_forecast

router = APIRouter(prefix="/forecast", tags=["forecast"])


@router.get("", response_model=List[ForecastRead])
def search_forecast(
    product_id: str,
    client_id: str,
    supplier_id: str,
    granularity: Optional[str] = None,
    date_day: Optional[str] = None,
    date_dekad_start: Optional[str] = None,
    year_month: Optional[str] = None,
    db: Session = Depends(get_db),
):
    q = db.query(Forecast).filter(
        Forecast.product_id == product_id,
        Forecast.client_id == client_id,
        Forecast.supplier_id == supplier_id,
        Forecast.is_active == True,
    )
    if granularity:
        q = q.filter(Forecast.granularity == granularity)
    if date_day:
        q = q.filter(Forecast.date_day == date_day)
    if date_dekad_start:
        q = q.filter(Forecast.date_dekad_start == date_dekad_start)
    if year_month:
        q = q.filter(Forecast.year_month == year_month)
    return q.order_by(Forecast.version_no.desc()).all()


@router.post("/bulk", response_model=List[ForecastRead])
def bulk_insert(items: List[ForecastCreate], db: Session = Depends(get_db)):
    rows = []
    now = datetime.now(timezone.utc)  # UTC推奨（tz付き）
    try:
        for it in items:
            data = it.model_dump()
            row = Forecast(
                forecast_id=str(uuid4()),
                **data,
            )
            # ← この2行を明示的にセット（NOT NULL対策）
            row.created_at = now
            row.updated_at = now

            db.add(row)
            rows.append(row)
        db.commit()
    except IntegrityError as e:
        db.rollback()
        raise HTTPException(
            status_code=409,
            detail=f"Duplicate/constraint violation: {str(e.orig)[:200]}",
        )
    for r in rows:
        db.refresh(r)
    return rows


# 受注ID連携は既存の orders ルートに合わせて実装。ここでは汎用マッチAPIを例示。
@router.get("/match", summary="受注属性を直接指定してマッチする")
def match_forecast(
    product_id: str,
    client_id: str,
    supplier_id: str,
    order_date: str,
    order_qty: int,
    db: Session = Depends(get_db),
):
    from datetime import date

    od = date.fromisoformat(order_date)
    f, g = pick_forecast(db, product_id, client_id, supplier_id, od)
    if not f:
        return {"status": "NONE"}
    diff = order_qty - f.qty_forecast
    status = judge_status(g, diff if diff is not None else None)
    return {
        "forecast_id": f.forecast_id,
        "granularity": g,
        "forecast_qty": f.qty_forecast,
        "version_no": f.version_no,
        "status": status,
        "diff_qty": diff,
    }
