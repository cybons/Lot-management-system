"""
管理機能のAPIエンドポイント - サンプルデータ投入修正版（パッチ適用済）
"""

import logging
import traceback
from datetime import date
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.core.config import settings
from app.core.database import drop_db, init_db
from app.models import (
    Allocation,
    Customer,
    Lot,
    LotCurrentStock,
    Order,
    OrderLine,
    Product,
    ReceiptHeader,
    ReceiptLine,
    StockMovement,
    StockMovementReason,
    Supplier,
    Warehouse,  # 統合された新Warehouse
)
from app.schemas import (
    DashboardStatsResponse,
    FullSampleDataRequest,
    ResponseBase,
)

router = APIRouter(prefix="/admin", tags=["admin"])
logger = logging.getLogger(__name__)


@router.get("/stats", response_model=DashboardStatsResponse)
def get_dashboard_stats(db: Session = Depends(get_db)):
    """ダッシュボード用の統計情報を返す"""

    total_stock = (
        db.query(
            func.coalesce(func.sum(LotCurrentStock.current_quantity), 0.0)
        ).scalar()
        or 0.0
    )

    total_orders = db.query(func.count(Order.id)).scalar() or 0

    unallocated_subquery = (
        db.query(OrderLine.order_id)
        .outerjoin(Allocation, Allocation.order_line_id == OrderLine.id)
        .group_by(OrderLine.id, OrderLine.order_id, OrderLine.quantity)
        .having(
            func.coalesce(func.sum(Allocation.allocated_qty), 0)
            < func.coalesce(OrderLine.quantity, 0)
        )
        .subquery()
    )

    unallocated_orders = (
        db.query(func.count(func.distinct(unallocated_subquery.c.order_id))).scalar()
        or 0
    )

    return DashboardStatsResponse(
        total_stock=float(total_stock),
        total_orders=int(total_orders),
        unallocated_orders=int(unallocated_orders),
    )


@router.post("/reset-database", response_model=ResponseBase)
def reset_database(db: Session = Depends(get_db)):
    """
    データベースリセット（開発環境のみ）
    新スキーマに対応したマスタデータを投入
    """
    if settings.ENVIRONMENT == "production":
        raise HTTPException(
            status_code=403, detail="本番環境ではデータベースのリセットはできません"
        )

    try:
        drop_db()
        init_db()

        # [修正] 新warehouseテーブルへのマスタ投入（ORM経由でAuditMixinの自動設定を有効にする）
        warehouses = [
            Warehouse(warehouse_code="WH001", warehouse_name="第一倉庫", is_active=1),
            Warehouse(warehouse_code="WH002", warehouse_name="第二倉庫", is_active=1),
            Warehouse(
                warehouse_code="WH003", warehouse_name="第三倉庫（予備）", is_active=1
            ),
        ]

        suppliers = [
            Supplier(supplier_code="SUP001", supplier_name="サプライヤーA"),
            Supplier(supplier_code="SUP002", supplier_name="サプライヤーB"),
            Supplier(supplier_code="SUP003", supplier_name="サプライヤーC"),
        ]

        customers = [
            Customer(customer_code="CUS001", customer_name="得意先A"),
            Customer(customer_code="CUS002", customer_name="得意先B"),
            Customer(customer_code="CUS003", customer_name="得意先C"),
        ]

        db.add_all([*warehouses, *suppliers, *customers])
        db.commit()

        return ResponseBase(
            success=True,
            message="データベースをリセットしました（新スキーマ対応）",
        )

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500, detail=f"DBリセット失敗: {e}\n{traceback.format_exc()}"
        )


@router.post("/load-full-sample-data", response_model=ResponseBase)
def load_full_sample_data(data: FullSampleDataRequest, db: Session = Depends(get_db)):
    """
    一括サンプルデータ投入（新スキーマ対応版）

    処理順序:
    1. 製品マスタ
    2. ロット登録
    3. 入荷伝票作成（在庫変動も自動）
    4. 受注登録
    """
    if settings.ENVIRONMENT == "production":
        raise HTTPException(
            status_code=403, detail="本番環境ではサンプルデータの投入はできません"
        )

    counts = {
        "products": 0,
        "lots": 0,
        "receipts": 0,
        "orders": 0,
    }

    validation_warnings: list[str] = []

    try:
        # ==== 1. 製品マスタ ====
        if data.products:
            for p in data.products:
                existing_product = (
                    db.query(Product).filter_by(product_code=p.product_code).first()
                )
                if existing_product:
                    continue

                db_product = Product(
                    product_code=p.product_code,
                    product_name=p.product_name,
                    internal_unit=p.internal_unit or "EA",
                    base_unit=getattr(p, "base_unit", "EA") or "EA",
                    requires_lot_number=p.requires_lot_number,
                )
                db.add(db_product)
                counts["products"] += 1

            db.commit()

        # ==== 2. ロット登録 ====
        if data.lots:
            # 【追加】必要なサプライヤーマスタを自動作成
            supplier_codes_needed = {lot_data.supplier_code for lot_data in data.lots}
            if supplier_codes_needed:
                existing_suppliers = (
                    db.query(Supplier)
                    .filter(Supplier.supplier_code.in_(supplier_codes_needed))
                    .all()
                )
                existing_supplier_codes = {s.supplier_code for s in existing_suppliers}
                for supplier_code in supplier_codes_needed:
                    if supplier_code not in existing_supplier_codes:
                        new_supplier = Supplier(
                            supplier_code=supplier_code,
                            supplier_name=f"サプライヤー_{supplier_code}（自動作成）",
                        )
                        db.add(new_supplier)
                        validation_warnings.append(
                            f"サプライヤーマスタ '{supplier_code}' が存在しないため自動作成しました"
                        )
                db.commit()

            # 既存のロット登録処理
            for lot_data in data.lots:
                # warehouse_codeからwarehouse_idを取得
                warehouse = (
                    db.query(Warehouse)
                    .filter_by(warehouse_code=lot_data.warehouse_code)
                    .first()
                )

                if not warehouse:
                    validation_warnings.append(
                        f"倉庫コード '{lot_data.warehouse_code}' が見つかりません"
                    )
                    continue

                existing_lot = (
                    db.query(Lot)
                    .filter_by(
                        supplier_code=lot_data.supplier_code,
                        product_code=lot_data.product_code,
                        lot_number=lot_data.lot_number,
                    )
                    .first()
                )

                if existing_lot:
                    continue

                # 日付変換
                receipt_date_obj = _parse_iso_date(
                    lot_data.receipt_date, f"lot {lot_data.lot_number}", "receipt_date"
                )
                expiry_date_obj = (
                    _parse_iso_date(
                        lot_data.expiry_date,
                        f"lot {lot_data.lot_number}",
                        "expiry_date",
                    )
                    if hasattr(lot_data, "expiry_date")
                    else None
                )

                db_lot = Lot(
                    supplier_code=lot_data.supplier_code,
                    product_code=lot_data.product_code,
                    lot_number=lot_data.lot_number,
                    receipt_date=receipt_date_obj or date.today(),
                    expiry_date=expiry_date_obj,
                    warehouse_id=warehouse.id,  # IDを使用
                    lot_unit=getattr(lot_data, "lot_unit", "EA"),
                )
                db.add(db_lot)
                db.flush()

                # 現在在庫の初期化
                db_current_stock = LotCurrentStock(
                    lot_id=db_lot.id,
                    current_quantity=0.0,
                )
                db.add(db_current_stock)

                counts["lots"] += 1

            db.commit()

        # ==== 3. 入荷伝票 ====
        if data.receipts:
            for receipt_data in data.receipts:
                # warehouse_codeからwarehouse_idを取得
                warehouse = (
                    db.query(Warehouse)
                    .filter_by(warehouse_code=receipt_data.warehouse_code)
                    .first()
                )

                if not warehouse:
                    validation_warnings.append(
                        f"入荷伝票 {receipt_data.receipt_no}: 倉庫コード '{receipt_data.warehouse_code}' が見つかりません"
                    )
                    continue

                existing_receipt = (
                    db.query(ReceiptHeader)
                    .filter_by(receipt_no=receipt_data.receipt_no)
                    .first()
                )

                if existing_receipt:
                    continue

                receipt_date_obj = _parse_iso_date(
                    receipt_data.receipt_date,
                    f"receipt {receipt_data.receipt_no}",
                    "receipt_date",
                )

                db_receipt = ReceiptHeader(
                    receipt_no=receipt_data.receipt_no,
                    supplier_code=receipt_data.supplier_code,
                    warehouse_id=warehouse.id,  # IDを使用
                    receipt_date=receipt_date_obj or date.today(),
                    notes=getattr(receipt_data, "notes", None),
                )
                db.add(db_receipt)
                db.flush()

                # 明細行
                for line_data in receipt_data.lines:
                    db_line = ReceiptLine(
                        header_id=db_receipt.id,
                        line_no=line_data.line_no,
                        product_code=line_data.product_code,
                        lot_id=line_data.lot_id,
                        quantity=line_data.quantity,
                        unit=line_data.unit,
                    )
                    db.add(db_line)

                    # 在庫変動記録
                    db_movement = StockMovement(
                        lot_id=line_data.lot_id,
                        warehouse_id=warehouse.id,  # IDを使用
                        movement_type=StockMovementReason.RECEIPT,
                        quantity=line_data.quantity,
                        related_id=receipt_data.receipt_no,
                    )
                    db.add(db_movement)

                    # 現在在庫更新
                    current_stock = (
                        db.query(LotCurrentStock)
                        .filter_by(lot_id=line_data.lot_id)
                        .first()
                    )
                    if current_stock:
                        current_stock.current_quantity += line_data.quantity

                counts["receipts"] += 1

            db.commit()

        # ==== 4. 受注登録 ====
        if data.orders:
            # 【追加】受注データに必要な顧客マスタを自動作成
            customer_codes_needed = {
                order_data.customer_code for order_data in data.orders
            }
            if customer_codes_needed:
                existing_customers = (
                    db.query(Customer)
                    .filter(Customer.customer_code.in_(customer_codes_needed))
                    .all()
                )
                existing_customer_codes = {c.customer_code for c in existing_customers}
                for customer_code in customer_codes_needed:
                    if customer_code not in existing_customer_codes:
                        new_customer = Customer(
                            customer_code=customer_code,
                            customer_name=f"顧客_{customer_code}（自動作成）",
                        )
                        db.add(new_customer)
                        validation_warnings.append(
                            f"顧客マスタ '{customer_code}' が存在しないため自動作成しました"
                        )
                db.commit()

            # 既存の受注投入処理
            for order_data in data.orders:
                existing_order = (
                    db.query(Order).filter_by(order_no=order_data.order_no).first()
                )

                if existing_order:
                    continue

                order_date_obj = (
                    _parse_iso_date(
                        order_data.order_date,
                        f"order {order_data.order_no}",
                        "order_date",
                    )
                    if hasattr(order_data, "order_date")
                    else date.today()
                )

                db_order = Order(
                    order_no=order_data.order_no,
                    customer_code=order_data.customer_code,
                    order_date=order_date_obj,
                    status="open",
                )
                db.add(db_order)
                db.flush()

                for line_data in order_data.lines:
                    due_date_obj = (
                        _parse_iso_date(
                            line_data.due_date,
                            f"order {order_data.order_no} line {line_data.line_no}",
                            "due_date",
                        )
                        if hasattr(line_data, "due_date")
                        else None
                    )

                    db_line = OrderLine(
                        order_id=db_order.id,
                        line_no=line_data.line_no,
                        product_code=line_data.product_code,
                        quantity=line_data.quantity,
                        unit=line_data.unit,
                        due_date=due_date_obj,
                    )
                    db.add(db_line)

                counts["orders"] += 1

            db.commit()

        response_payload = {"counts": counts}
        if validation_warnings:
            response_payload["warnings"] = validation_warnings
            for msg in validation_warnings:
                logger.warning("[sample-data] %s", msg)

        return ResponseBase(
            success=True,
            message="サンプルデータを正常に投入しました",
            data=response_payload,
        )

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"サンプルデータ投入中にエラーが発生しました: {e}\n{traceback.format_exc()}",
        )


def _parse_iso_date(value, context: str, field: str) -> Optional[date]:
    """
    入力値をdateに変換し、失敗した場合は警告を記録する
    """
    if value is None:
        return None

    if isinstance(value, date):
        return value

    if isinstance(value, str):
        raw = value.strip()
        if not raw or raw in {"-", "--"}:
            return None
        try:
            return date.fromisoformat(raw)
        except ValueError:
            logger.warning(
                f"[{context}] {field} が日付形式 (YYYY-MM-DD) ではありません: '{value}'"
            )
            return None

    logger.warning(
        f"[{context}] {field} を日付に変換できませんでした (値種別: {type(value).__name__})"
    )
    return None
