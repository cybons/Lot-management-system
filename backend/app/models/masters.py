# backend/app/models/masters.py
"""マスタテーブルのモデル定義."""

from sqlalchemy import (
    Column,
    Float,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.orm import relationship

from .base_model import AuditMixin, Base


class Warehouse(AuditMixin, Base):
    """倉庫マスタ"""

    __tablename__ = "warehouses"

    warehouse_code = Column(Text, primary_key=True)
    warehouse_name = Column(Text, nullable=False)
    address = Column(Text)
    is_active = Column(Integer, default=1)

    # リレーション
    # 🔽 [修正] 参照先をフルパスで明記
    lots = relationship(
        "app.models.inventory.Lot",
        back_populates="warehouse",
        foreign_keys="app.models.inventory.Lot.warehouse_id",
    )
    stock_movements = relationship(
        "app.models.inventory.StockMovement", back_populates="warehouse"
    )


class Supplier(AuditMixin, Base):
    """仕入先マスタ"""

    __tablename__ = "suppliers"

    supplier_code = Column(Text, primary_key=True)
    supplier_name = Column(Text, nullable=False)
    address = Column(Text)

    # リレーション
    # 🔽 [修正] 参照先をフルパスで明記
    lots = relationship("app.models.inventory.Lot", back_populates="supplier")
    purchase_requests = relationship("PurchaseRequest", back_populates="supplier")


class Customer(AuditMixin, Base):
    """得意先マスタ"""

    __tablename__ = "customers"

    customer_code = Column(Text, primary_key=True)
    customer_name = Column(Text, nullable=False)
    address = Column(Text)

    # リレーション
    orders = relationship("Order", back_populates="customer")


class Product(AuditMixin, Base):
    """製品マスタ"""

    __tablename__ = "products"

    product_code = Column(Text, primary_key=True)
    product_name = Column(Text, nullable=False)
    customer_part_no = Column(Text)
    maker_part_no = Column(Text)
    internal_unit = Column(Text, nullable=False, default="EA")  # 内部管理単位
    base_unit = Column(String(10), nullable=False, default="EA")
    packaging = Column(Text)
    assemble_div = Column(Text)
    next_div = Column(Text)
    shelf_life_days = Column(Integer)
    requires_lot_number = Column(Integer, default=1)

    # リレーション
    # 🔽 [修正] 参照先をフルパスで明記
    lots = relationship("app.models.inventory.Lot", back_populates="product")
    conversions = relationship(
        "ProductUomConversion", back_populates="product", cascade="all, delete-orphan"
    )
    unit_conversions = relationship(
        "UnitConversion", back_populates="product", cascade="all, delete-orphan"
    )
    order_lines = relationship("OrderLine", back_populates="product")
    # 🔽 [修正] 参照先をフルパスで明記
    receipt_lines = relationship(
        "app.models.inventory.ReceiptLine", back_populates="product"
    )
    stock_movements = relationship(
        "app.models.inventory.StockMovement", back_populates="product"
    )


class ProductUomConversion(AuditMixin, Base):
    """製品単位換算テーブル"""

    __tablename__ = "product_uom_conversions"

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_code = Column(Text, ForeignKey("products.product_code"), nullable=False)
    source_unit = Column(Text, nullable=False)  # 変換元単位 (例: "CASE")
    source_value = Column(Float, nullable=False, default=1.0)  # 変換元の値 (例: 1)
    internal_unit_value = Column(Float, nullable=False)  # 内部単位での値 (例: 10 EA)

    # リレーション
    product = relationship("Product", back_populates="conversions")

    __table_args__ = (
        UniqueConstraint("product_code", "source_unit", name="uq_product_unit"),
    )


class UnitConversion(AuditMixin, Base):
    """製品単位換算マスタ(新仕様)."""

    __tablename__ = "unit_conversions"

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Text, ForeignKey("products.product_code"), nullable=False)
    from_unit = Column(String(10), nullable=False)
    to_unit = Column(String(10), nullable=False)
    factor = Column(Numeric(10, 4), nullable=False)

    product = relationship("Product", back_populates="unit_conversions")

    __table_args__ = (
        UniqueConstraint("product_id", "from_unit", "to_unit", name="uq_product_units"),
    )
