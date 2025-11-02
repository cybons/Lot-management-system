# backend/app/models/warehouse.py
from __future__ import annotations

from sqlalchemy import Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import Base  # ⬅️ [修正] .base から .base_model に変更


class Warehouse(Base):
    __tablename__ = "warehouse"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    warehouse_code: Mapped[str] = mapped_column(String(32), unique=True, nullable=False)
    warehouse_name: Mapped[str] = mapped_column(String(128), nullable=False)

    # 逆参照は不要なら省略可
    # allocations: Mapped[list["OrderLineWarehouseAllocation"]] = relationship(
    #     back_populates="warehouse", cascade="all, delete-orphan"
    # )


class OrderLineWarehouseAllocation(Base):
    __tablename__ = "order_line_warehouse_allocation"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    order_line_id: Mapped[int] = mapped_column(
        ForeignKey("order_lines.id"),
        nullable=False,  # ⬅️ [修正] order_line -> order_lines
    )
    warehouse_id: Mapped[int] = mapped_column(
        ForeignKey("warehouse.id"), nullable=False
    )
    quantity: Mapped[float] = mapped_column(Float, nullable=False)

    # リレーション
    warehouse: Mapped["Warehouse"] = relationship("Warehouse")
    # order_line 側に back_populates を生やす（次のStepで）
