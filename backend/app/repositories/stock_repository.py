# backend/app/repositories/stock_repository.py
"""Repository helpers for stock validation and FIFO lot retrieval."""

from __future__ import annotations

from collections.abc import Sequence
from datetime import date

from sqlalchemy import Select, or_, select
from sqlalchemy.orm import Session

from app.models import Lot, Warehouse


class StockRepository:
    """Stock access helpers dedicated to order validation use cases."""

    def __init__(self, db: Session):
        self._db = db

    def find_fifo_lots_for_allocation(
        self,
        product_code: str,
        warehouse_code: str,
        ship_date: date | None,
        for_update: bool = True,
    ) -> list[Lot]:
        """
        Fetch candidate lots in FIFO order with optional row locking.

        v2.2: Removed joinedload(Lot.current_stock) - no longer needed.
        """
        stmt: Select[tuple[Lot]] = (
            select(Lot)
            .join(Lot.warehouse)
            .where(Lot.product_code == product_code)
            .where(Warehouse.warehouse_code == warehouse_code)
        )

        if hasattr(Lot, "is_active"):
            stmt = stmt.where(Lot.is_active == True)  # noqa: E712

        if hasattr(Lot, "is_locked"):
            stmt = stmt.where(Lot.is_locked == False)  # noqa: E712

        expiry_column = getattr(Lot, "expiry_date", None)
        if ship_date is not None and expiry_column is not None:
            stmt = stmt.where(or_(expiry_column.is_(None), expiry_column >= ship_date))

        received_column = getattr(Lot, "receipt_date", None) or getattr(Lot, "received_at", None)
        if received_column is not None:
            stmt = stmt.order_by(received_column.asc(), Lot.id.asc())
        else:
            stmt = stmt.order_by(Lot.id.asc())

        bind = self._db.get_bind()
        dialect_name = bind.dialect.name if bind is not None else ""
        if for_update and dialect_name in {"postgresql", "mysql"}:
            stmt = stmt.with_for_update(skip_locked=True, of=Lot)

        result: Sequence[Lot] = self._db.execute(stmt).scalars().all()
        return list(result)

    @staticmethod
    def calc_available_qty(lot: Lot) -> int:
        """
        Calculate allocatable quantity for a lot.

        v2.2: Use Lot model directly - current_quantity - allocated_quantity.
        """
        current_qty = float(getattr(lot, "current_quantity", 0) or 0)
        allocated_qty = float(getattr(lot, "allocated_quantity", 0) or 0)

        available = current_qty - allocated_qty
        return max(0, int(round(available)))
