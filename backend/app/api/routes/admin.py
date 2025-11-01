"""
管理機能のAPIエンドポイント
ヘルスチェック、データベースリセット等
"""

import traceback  # エラー詳細表示用にインポート

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.core.config import settings
from app.models import (
    Lot,
    LotCurrentStock,
    Order,
    OrderLine,
    Product,
    ReceiptHeader,
    ReceiptLine,
    StockMovement,
)
from app.schemas import FullSampleDataRequest, ResponseBase

router = APIRouter(prefix="/admin", tags=["admin"])

# ... (health_check, reset_database は変更なし) ...


@router.post("/load-full-sample-data", response_model=ResponseBase)
def load_full_sample_data(data: FullSampleDataRequest, db: Session = Depends(get_db)):
    """
    一括サンプルデータ投入

    マスタ -> ロット -> 入荷 -> 受注 の順でデータを投入する
    本番環境では無効化されます
    """
    if settings.ENVIRONMENT == "production":
        raise HTTPException(
            status_code=403, detail="本番環境ではサンプルデータの投入はできません"
        )

    # 既存のマスタデータを投入 (SETUP_GUIDE.md にあるもの)
    try:
        # サンプルマスタデータ
        sample_masters = """
        INSERT OR IGNORE INTO warehouses (warehouse_code, warehouse_name) VALUES
        ('WH001', '第一倉庫'), ('WH002', '第二倉庫');
        INSERT OR IGNORE INTO suppliers (supplier_code, supplier_name) VALUES
        ('SUP001', 'サプライヤーA'), ('SUP002', 'サプライヤーB');
        INSERT OR IGNORE INTO customers (customer_code, customer_name) VALUES
        ('CUS001', '得意先A'), ('CUS002', '得意先B');
        """
        for statement in sample_masters.split(";"):
            if statement.strip():
                db.execute(text(statement))
        db.commit()

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"サンプルマスタ投入中にエラー: {e}\n{traceback.format_exc()}",
        )

    counts = {
        "products": 0,
        "lots": 0,
        "receipts": 0,
        "orders": 0,
    }

    try:
        # 1. 製品 (Products)
        if data.products:
            for p_data in data.products:
                existing = (
                    db.query(Product)
                    .filter_by(product_code=p_data.product_code)
                    .first()
                )
                if not existing:
                    db_product = Product(**p_data.model_dump())
                    db.add(db_product)
                    counts["products"] += 1
            db.commit()

        # 2. ロット (Lots) - この時点では在庫0
        if data.lots:
            for l_data in data.lots:
                db_lot = Lot(**l_data.model_dump())
                db.add(db_lot)
                db.flush()  # lot.id を確定させる

                # 在庫サマリテーブルも初期化
                current_stock = LotCurrentStock(lot_id=db_lot.id, current_quantity=0.0)
                db.add(current_stock)
                counts["lots"] += 1
            db.commit()

        # 3. 入荷 (Receipts) - 在庫を増やす
        if data.receipts:
            for r_data in data.receipts:
                # ヘッダ作成
                db_header = ReceiptHeader(
                    receipt_no=r_data.receipt_no,
                    supplier_code=r_data.supplier_code,
                    warehouse_code=r_data.warehouse_code,
                    receipt_date=r_data.receipt_date,
                )
                db.add(db_header)
                db.flush()

                # 明細作成 & 在庫計上
                for line in r_data.lines:
                    db_line = ReceiptLine(
                        header_id=db_header.id,
                        line_no=line.line_no,
                        product_code=line.product_code,
                        lot_id=line.lot_id,
                        quantity=line.quantity,
                        unit=line.unit,
                    )
                    db.add(db_line)

                    # 在庫変動
                    movement = StockMovement(
                        lot_id=line.lot_id,
                        movement_type="receipt",
                        quantity=line.quantity,
                        related_id=f"receipt_{db_header.id}_line_{line.line_no}",
                    )
                    db.add(movement)

                    # 現在在庫更新
                    stock = (
                        db.query(LotCurrentStock).filter_by(lot_id=line.lot_id).first()
                    )
                    if stock:
                        stock.current_quantity += line.quantity
                    else:
                        stock = LotCurrentStock(
                            lot_id=line.lot_id, current_quantity=line.quantity
                        )
                        db.add(stock)

                counts["receipts"] += 1
            db.commit()

        # 4. 受注 (Orders) - OCR取込のロジックを簡易的に再現
        if data.orders:
            for o_data in data.orders:
                db_order = Order(
                    order_no=o_data.order_no,
                    customer_code=o_data.customer_code,
                    order_date=o_data.order_date if o_data.order_date else None,
                    status="open",
                )
                db.add(db_order)
                db.flush()

                for line in o_data.lines:
                    db_line = OrderLine(order_id=db_order.id, **line.model_dump())
                    db.add(db_line)
                counts["orders"] += 1
            db.commit()

        return ResponseBase(
            success=True, message="サンプルデータを正常に投入しました", data=counts
        )

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"サンプルデータ投入中にエラーが発生しました: {e}\n{traceback.format_exc()}",
        )
