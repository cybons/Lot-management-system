# backend/app/models/warehouse.py
from __future__ import annotations

from typing import TYPE_CHECKING  # 🔽 [追加]

from sqlalchemy import Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import AuditMixin, Base

if TYPE_CHECKING:
    from .orders import OrderLine  # 🔽 [追加] 型チェック用にインポート


class Warehouse(AuditMixin, Base):
    __tablename__ = "warehouse"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    warehouse_code: Mapped[str] = mapped_column(String(32), unique=True, nullable=False)
    warehouse_name: Mapped[str] = mapped_column(String(128), nullable=False)

    # 🔽 [修正] 逆参照を（念のため）有効化し、フルパス指定
    allocations: Mapped[list["OrderLineWarehouseAllocation"]] = relationship(
        "app.models.warehouse.OrderLineWarehouseAllocation",
        back_populates="warehouse",
        cascade="all, delete-orphan",
    )


class OrderLineWarehouseAllocation(AuditMixin, Base):
    __tablename__ = "order_line_warehouse_allocation"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    order_line_id: Mapped[int] = mapped_column(
        ForeignKey("order_lines.id"), nullable=False
    )
    warehouse_id: Mapped[int] = mapped_column(
        ForeignKey("warehouse.id"), nullable=False
    )
    quantity: Mapped[float] = mapped_column(Float, nullable=False)

    # --- リレーション ---

    # 🔽 [修正] 参照先をフルパスの「文字列」で指定
    warehouse: Mapped["Warehouse"] = relationship(
        "app.models.warehouse.Warehouse", back_populates="allocations"
    )

    # 🔽 [追加] OrderLine への逆参照
    order_line: Mapped["OrderLine"] = relationship(
        "app.models.orders.OrderLine", back_populates="warehouse_allocations"
    )
