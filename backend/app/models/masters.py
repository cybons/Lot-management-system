# backend/app/models/masters.py
"""
マスタテーブルのモデル定義（統合版）
倉庫、仕入先、得意先、製品
"""

from __future__ import annotations

from typing import TYPE_CHECKING

from sqlalchemy import (
    BigInteger,
    Boolean,
    Column,
    Float,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.orm import Mapped, relationship, synonym

from .base_model import AuditMixin, Base

# 型チェック時のみインポート（循環インポート回避）
if TYPE_CHECKING:
    from .inventory import Lot, StockMovement, ReceiptHeader
    from .orders import OrderLineWarehouseAllocation


class Warehouse(AuditMixin, Base):
    """
    倉庫マスタ（統合版）
    - IDを主キーとする新スキーマに統一
    - warehouse_codeはユニーク制約
    """

    __tablename__ = "warehouses"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    warehouse_code = Column(String(32), unique=True, nullable=False, index=True)
    warehouse_name = Column(String(128), nullable=False)
    address = Column(Text, nullable=True)
    is_active = Column(Integer, default=1)

    # リレーション
    # 🔧 修正: foreign_keys を明示
    stock_movements: Mapped[list["StockMovement"]] = relationship(
        "StockMovement",
        back_populates="warehouse",
        foreign_keys="StockMovement.warehouse_id",
        lazy="noload",
    )
    receipt_headers: Mapped[list["ReceiptHeader"]] = relationship(
        "ReceiptHeader",
        back_populates="warehouse",
        foreign_keys="ReceiptHeader.warehouse_id",
        lazy="noload",
    )
    warehouse_allocations: Mapped[list["OrderLineWarehouseAllocation"]] = relationship(
        "OrderLineWarehouseAllocation",
        back_populates="warehouse",
        lazy="noload",
    )
    lots: Mapped[list["Lot"]] = relationship(
        "Lot",
        back_populates="warehouse",
        foreign_keys="Lot.warehouse_id",
        lazy="noload",
    )


class Supplier(AuditMixin, Base):
    """仕入先マスタ"""

    __tablename__ = "suppliers"

    supplier_code = Column(Text, primary_key=True)
    supplier_name = Column(Text, nullable=False)
    address = Column(Text, nullable=True)

    # リレーション
    lots = relationship("Lot", back_populates="supplier", lazy="noload")
    products = relationship("Product", back_populates="supplier", lazy="selectin")
    expiry_rules = relationship("ExpiryRule", back_populates="supplier", lazy="selectin")


class Customer(AuditMixin, Base):
    """得意先マスタ"""

    __tablename__ = "customers"

    customer_code = Column(Text, primary_key=True)
    customer_name = Column(Text, nullable=False)
    address = Column(Text, nullable=True)

    # リレーション
    orders = relationship("Order", back_populates="customer", lazy="noload")


class DeliveryPlace(AuditMixin, Base):
    """納入場所マスタ"""

    __tablename__ = "delivery_places"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    place_code = Column(String(64), unique=True, nullable=False, index=True)
    place_name = Column(String(256), nullable=False)
    address = Column(Text, nullable=True)
    is_active = Column(Integer, nullable=False, default=1)

    # リレーション
    allocations = relationship("Allocation", back_populates="destination", lazy="noload")


class Product(AuditMixin, Base):
    """製品マスタ"""

    __tablename__ = "products"

    product_code = Column(Text, primary_key=True)
    product_name = Column(Text, nullable=False)
    supplier_code = Column(Text, ForeignKey("suppliers.supplier_code"), nullable=True)

    # 包装関連
    packaging_qty = Column(Numeric(15, 4), nullable=False, default=1.0)
    packaging_unit = Column(Text, nullable=False, default="EA")
    internal_unit = Column(Text, nullable=False, default="EA")
    base_unit = Column(Text, nullable=False, default="EA")

    # 製品情報
    customer_part_no = Column(Text, nullable=True)
    maker_item_code = Column(Text, nullable=True)
    supplier_item_code = Column(Text, nullable=True)
    packaging = Column(Text, nullable=True)
    assemble_div = Column(Text, nullable=True)
    next_div = Column(Text, nullable=True)
    ji_ku_text = Column(Text, nullable=True)
    kumitsuke_ku_text = Column(Text, nullable=True)
    shelf_life_days = Column(Integer, nullable=True)
    requires_lot_number = Column(Integer, nullable=False, default=1)

    # 納入場所情報
    delivery_place_id = Column(BigInteger, ForeignKey("delivery_places.id"), nullable=True)
    delivery_place_name = Column(Text, nullable=True)
    shipping_warehouse_name = Column(Text, nullable=True)

    # リレーション
    supplier = relationship("Supplier", back_populates="products", lazy="joined")
    lots = relationship("Lot", back_populates="product", lazy="noload")
    uom_conversions = relationship("ProductUomConversion", back_populates="product", lazy="selectin")
    expiry_rules = relationship("ExpiryRule", back_populates="product", lazy="selectin")
    order_lines = relationship("OrderLine", back_populates="product", lazy="noload")


class ProductUomConversion(AuditMixin, Base):
    """製品単位変換マスタ"""

    __tablename__ = "product_uom_conversions"

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_code = Column(Text, ForeignKey("products.product_code"), nullable=False)
    source_unit = Column(Text, nullable=False)
    source_value = Column(Float, nullable=False, default=1.0)
    internal_unit_value = Column(Float, nullable=False)

    __table_args__ = (
        UniqueConstraint("product_code", "source_unit", name="uq_product_uom"),
        {"keep_existing": True},
    )

    # リレーション
    product = relationship("Product", back_populates="uom_conversions", lazy="joined")


class UnitConversion(AuditMixin, Base):
    """単位変換マスタ（グローバル）"""

    __tablename__ = "unit_conversions"

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Text, ForeignKey("products.product_code"), nullable=True)
    from_unit = Column(Text, nullable=False)
    to_unit = Column(Text, nullable=False)
    conversion_factor = Column(Float, nullable=False)

    __table_args__ = (
        UniqueConstraint("product_id", "from_unit", "to_unit", name="uq_unit_conversion"),
    )
