"""Lot repository and service utilities with FEFO support."""

from __future__ import annotations

from datetime import date
from typing import List, Optional, Sequence

from sqlalchemy import Select, select
from sqlalchemy.orm import Session, joinedload

from app.domain.lot import FefoPolicy, LotCandidate, LotNotFoundError, StockValidator
from app.models import Lot, LotCurrentStock, Product, Supplier, Warehouse


class LotRepository:
    """Data-access helpers for lot entities."""

    def __init__(self, db: Session):
        self.db = db

    def find_by_id(self, lot_id: int) -> Lot | None:
        """Return a lot by its primary key."""

        stmt: Select[tuple[Lot]] = (
            select(Lot)
            .options(joinedload(Lot.product), joinedload(Lot.warehouse))
            .where(Lot.id == lot_id)
        )
        return self.db.execute(stmt).scalar_one_or_none()

    def find_available_lots(
        self,
        product_code: str,
        warehouse_code: str | None = None,
        min_quantity: float = 0.0,
    ) -> Sequence[tuple[Lot, LotCurrentStock]]:
        """Fetch lots that have stock remaining for a product."""

        stmt: Select[tuple[Lot, LotCurrentStock]] = (
            select(Lot, LotCurrentStock)
            .join(LotCurrentStock, LotCurrentStock.lot_id == Lot.id)
            .where(
                Lot.product_code == product_code,
                Lot.is_locked.is_(False),
                LotCurrentStock.current_quantity > min_quantity,
            )
        )

        if warehouse_code:
            stmt = stmt.where(Lot.warehouse_code == warehouse_code)

        return self.db.execute(stmt).all()

    def create(
        self,
        supplier_code: str,
        product_code: str,
        lot_number: str,
        warehouse_id: int,
        receipt_date: date | None = None,
        expiry_date: date | None = None,
    ) -> Lot:
        """Create a lot placeholder using known identifiers."""

        warehouse: Warehouse | None = self.db.get(Warehouse, warehouse_id)
        product: Product | None = None
        supplier: Supplier | None = None
        if supplier_code:
            stmt = select(Supplier).where(Supplier.supplier_code == supplier_code)
            supplier = self.db.execute(stmt).scalar_one_or_none()
        if product_code:
            stmt = select(Product).where(Product.product_code == product_code)
            product = self.db.execute(stmt).scalar_one_or_none()

        lot = Lot(
            supplier_id=supplier.id if supplier else None,
            supplier_code=supplier.supplier_code if supplier else supplier_code,
            product_id=product.id if product else None,
            product_code=product.product_code if product else product_code,
            lot_number=lot_number,
            warehouse_id=warehouse_id,
            warehouse_code=warehouse.warehouse_code if warehouse else None,
            receipt_date=receipt_date or date.today(),
            expiry_date=expiry_date,
        )
        self.db.add(lot)
        return lot


class LotService:
    """Business logic for lot operations and FEFO candidate retrieval."""

    def __init__(self, db: Session):
        self.db = db
        self.repository = LotRepository(db)

    def get_lot(self, lot_id: int) -> Lot:
        lot = self.repository.find_by_id(lot_id)
        if not lot:
            raise LotNotFoundError(lot_id)
        return lot

    def get_fefo_candidates(
        self,
        product_code: str,
        warehouse_code: str | None = None,
        exclude_expired: bool = True,
    ) -> List[LotCandidate]:
        lot_stocks = self.repository.find_available_lots(
            product_code=product_code,
            warehouse_code=warehouse_code,
            min_quantity=0.0,
        )

        candidates = [
            LotCandidate(
                lot_id=lot.id,
                lot_code=lot.lot_number,
                lot_number=lot.lot_number,
                product_code=lot.product_code or product_code,
                warehouse_code=lot.warehouse_code
                or (lot.warehouse.warehouse_code if lot.warehouse else ""),
                available_qty=float(stock.current_quantity or 0.0),
                expiry_date=lot.expiry_date,
                receipt_date=lot.receipt_date,
            )
            for lot, stock in lot_stocks
        ]

        if exclude_expired:
            candidates, _ = FefoPolicy.filter_expired_lots(candidates)

        return FefoPolicy.sort_lots_by_fefo(candidates)

    def validate_lot_availability(self, lot_id: int, required_qty: float) -> None:
        lot = self.get_lot(lot_id)

        stmt = select(LotCurrentStock).where(LotCurrentStock.lot_id == lot_id)
        current_stock = self.db.execute(stmt).scalar_one_or_none()

        if current_stock:
            StockValidator.validate_sufficient_stock(
                lot_id, required_qty, current_stock.current_quantity
            )

        StockValidator.validate_not_expired(lot_id, lot.expiry_date)
