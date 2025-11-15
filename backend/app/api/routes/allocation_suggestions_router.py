"""Allocation suggestions API (Phase 3-4: v2.2.1)."""

import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.models import Lot, LotCurrentStock, OrderLine
from app.schemas.allocations_schema import (
    AllocationSuggestionManualRequest,
    AllocationSuggestionManualResponse,
    FefoLineAllocation,
    FefoLotAllocation,
    FefoPreviewRequest,
    FefoPreviewResponse,
)
from app.services.allocations_service import preview_fefo_allocation


logger = logging.getLogger(__name__)
router = APIRouter(prefix="/allocation-suggestions", tags=["allocation-suggestions"])


@router.post("/manual", response_model=AllocationSuggestionManualResponse)
def create_manual_suggestion(
    request: AllocationSuggestionManualRequest, db: Session = Depends(get_db)
):
    """
    手動仮引当（v2.2.1準拠）.

    ユーザーが手動でロットを割り当てるケース（ドラッグ＆ドロップ操作など）。
    レスポンスのみで返し、DBには保存しない（プレビュー方式）。

    Args:
        request: 手動引当リクエスト（order_line_id, lot_id, quantity）
        db: データベースセッション

    Returns:
        AllocationSuggestionManualResponse: 仮引当プレビュー結果

    Note:
        - DB に `allocation_suggestions` レコードは作成しない
        - 在庫チェックのみ実施し、実際の引当は `/allocations/commit` で確定
    """
    # 受注明細の確認
    order_line = db.query(OrderLine).filter(OrderLine.id == request.order_line_id).first()
    if not order_line:
        raise HTTPException(status_code=404, detail="受注明細が見つかりません")

    # ロットの確認
    lot = db.query(Lot).filter(Lot.id == request.lot_id).first()
    if not lot:
        raise HTTPException(status_code=404, detail="ロットが見つかりません")

    # 在庫確認
    stock = db.query(LotCurrentStock).filter(LotCurrentStock.lot_id == request.lot_id).first()
    current_qty = float(stock.current_quantity if stock else 0.0)
    if current_qty < request.quantity:
        raise HTTPException(
            status_code=400,
            detail=f"在庫不足: ロット {lot.lot_number} の利用可能数量 {current_qty} < 要求数量 {request.quantity}",
        )

    # プレビュー結果を返す（DB保存なし）
    logger.info(
        f"手動仮引当プレビュー: order_line_id={request.order_line_id}, "
        f"lot_id={request.lot_id}, quantity={request.quantity}"
    )

    return AllocationSuggestionManualResponse(
        order_line_id=request.order_line_id,
        lot_id=request.lot_id,
        lot_number=lot.lot_number,
        suggested_quantity=request.quantity,
        available_quantity=current_qty,
        product_id=order_line.product_id,
        product_code=order_line.product_code,
        warehouse_id=getattr(lot, "warehouse_id", None),
        expiry_date=lot.expiry_date,
        status="preview",
        message="手動仮引当プレビュー成功。確定するには /allocations/commit を呼び出してください。",
    )


@router.post("/fefo", response_model=FefoPreviewResponse)
def create_fefo_suggestion(request: FefoPreviewRequest, db: Session = Depends(get_db)):
    """
    FEFO仮引当（v2.2.1準拠）.

    FEFOロジックに基づいて、指定された注文に対する「推奨引当案」を一括生成。
    レスポンスのみで返し、DBには保存しない（プレビュー方式）。

    Args:
        request: FEFO引当リクエスト（order_id）
        db: データベースセッション

    Returns:
        FefoPreviewResponse: FEFO引当プレビュー結果

    Note:
        - DB に `allocation_suggestions` レコードは作成しない
        - 実際の引当は `/allocations/commit` で確定
    """
    try:
        # 既存のFEFOプレビューサービスを再利用
        result = preview_fefo_allocation(db, request.order_id)
    except ValueError as exc:
        message = str(exc)
        status_code = 404 if "not found" in message.lower() else 400
        raise HTTPException(status_code=status_code, detail=message)

    # サービス結果をレスポンススキーマに変換
    lines = []
    for line in result.lines:
        lot_items = [
            FefoLotAllocation(
                lot_id=alloc.lot_id,
                lot_number=alloc.lot_number,
                allocate_qty=alloc.allocate_qty,
                expiry_date=alloc.expiry_date,
                receipt_date=alloc.receipt_date,
            )
            for alloc in line.allocations
        ]
        lines.append(
            FefoLineAllocation(
                order_line_id=line.order_line_id,
                product_code=line.product_code,
                required_qty=line.required_qty,
                already_allocated_qty=line.already_allocated_qty,
                allocations=lot_items,
                next_div=line.next_div,
                warnings=line.warnings,
            )
        )

    logger.info(
        f"FEFO仮引当プレビュー: order_id={request.order_id}, 明細数={len(lines)}, "
        f"警告数={len(result.warnings)}"
    )

    return FefoPreviewResponse(order_id=result.order_id, lines=lines, warnings=result.warnings)
