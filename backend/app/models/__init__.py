# backend/app/models/__init__.py
"""
Models Package

このパッケージは、アプリケーションのすべてのSQLAlchemyモデルクラスをエクスポートします。
各ファイルで定義されたモデルクラスを一箇所にまとめ、
他のモジュール（APIルート、サービス層等）から簡潔にインポート可能にします。

Usage:
    from app.models import Lot, Order, Product
"""

# 1. 共通のBaseをインポート
from .base_model import Base

# 2. 各ドメインのモデルをすべてインポート
from .masters import (
    Customer,
    DeliveryPlace,
    Product,
    ProductUomConversion,
    Supplier,
    UnitConversion,
    Warehouse,  # 統合された新Warehouse（ID主キー）
)
from .inventory import (
    ExpiryRule,
    Lot,
    LotCurrentStock,
    ReceiptHeader,
    ReceiptLine,
    StockMovement,
    StockMovementReason,
)
from .orders import (
    Allocation,
    Order,
    OrderLine,
    OrderLineWarehouseAllocation,
    NextDivMap,
    PurchaseRequest,
    Shipping,
)
from .logs import InboundSubmission, OcrSubmission, SapSyncLog
from .forecast import (
    Forecast,
)

# 3. 外部に公開するモデルを明示
__all__ = [
    # Base
    "Base",
    # Masters
    "Warehouse",
    "Supplier",
    "DeliveryPlace",
    "Customer",
    "Product",
    "ProductUomConversion",
    "UnitConversion",
    # Inventory
    "Lot",
    "StockMovement",
    "StockMovementReason",
    "LotCurrentStock",
    "ReceiptHeader",
    "ReceiptLine",
    "ExpiryRule",
    # Sales/Orders
    "Order",
    "OrderLine",
    "OrderLineWarehouseAllocation",
    "Allocation",
    "Shipping",
    "PurchaseRequest",
    "NextDivMap",
    # Logs
    "InboundSubmission",
    "OcrSubmission",
    "SapSyncLog",
    # Forecast
    "Forecast",
]
