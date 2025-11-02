# backend/app/models/__init__.py
"""
Models Package

この__init__.pyは、app.modelsパッケージの「窓口」として機能します。
各ファイルで定義されたモデルクラスをインポートし、
他のモジュール(APIルートなど)が
`from app.models import Lot, Order, Product`
のように簡単にアクセスできるようにします。
"""

# 1. 共通のBaseをインポートする
from .base_model import Base
from .forecast import (
    Forecast,
)
from .inventory import (
    ExpiryRule,
    Lot,
    LotCurrentStock,
    ReceiptHeader,
    ReceiptLine,
    StockMovement,
)
from .logs import (
    OcrSubmission,
    SapSyncLog,
)

# 2. 各ドメインのモデルをすべてインポートする
from .masters import (
    Customer,
    Product,
    ProductUomConversion,
    Supplier,
    Warehouse,
)
from .sales import (
    Allocation,
    Order,
    OrderLine,
    PurchaseRequest,
    Shipping,
)

# 3. 外部に公開するモデルを明示
__all__ = [
    "Base",
    # Masters
    "Warehouse",
    "Supplier",
    "Customer",
    "Product",
    "ProductUomConversion",
    # Inventory
    "Lot",
    "StockMovement",
    "LotCurrentStock",
    "ReceiptHeader",
    "ReceiptLine",
    "ExpiryRule",
    # Sales
    "Order",
    "OrderLine",
    "Allocation",
    "Shipping",
    "PurchaseRequest",
    # Logs
    "OcrSubmission",
    "SapSyncLog",
    # Forecast
    "Forecast",
]
