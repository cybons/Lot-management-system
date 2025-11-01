# backend/app/schemas/__init__.py
"""
Schemas Package
Pydantic スキーマの集約
"""

from .admin import (
    FullSampleDataRequest,
)
from .base import BaseSchema, ResponseBase, TimestampMixin
from .integration import (
    # OCR
    OcrOrderRecord,
    OcrSubmissionRequest,
    OcrSubmissionResponse,
    SapRegisterOptions,
    SapRegisterRequest,
    SapRegisterResponse,
    # SAP
    SapRegisterTarget,
    SapSyncLogResponse,
)
from .inventory import (
    # ExpiryRule
    ExpiryRuleBase,
    ExpiryRuleCreate,
    ExpiryRuleResponse,
    ExpiryRuleUpdate,
    # Lot
    LotBase,
    LotCreate,
    # LotCurrentStock
    LotCurrentStockResponse,
    LotResponse,
    LotUpdate,
    ReceiptCreateRequest,
    # Receipt
    ReceiptHeaderBase,
    ReceiptHeaderCreate,
    ReceiptHeaderResponse,
    ReceiptLineBase,
    ReceiptLineCreate,
    ReceiptLineResponse,
    ReceiptResponse,
    # StockMovement
    StockMovementBase,
    StockMovementCreate,
    StockMovementResponse,
)
from .masters import (
    # Customer
    CustomerBase,
    CustomerCreate,
    CustomerResponse,
    CustomerUpdate,
    # Product
    ProductBase,
    ProductCreate,
    ProductResponse,
    # ProductUomConversion
    ProductUomConversionBase,
    ProductUomConversionCreate,
    ProductUomConversionResponse,
    ProductUomConversionUpdate,
    ProductUpdate,
    # Supplier
    SupplierBase,
    SupplierCreate,
    SupplierResponse,
    SupplierUpdate,
    # Warehouse
    WarehouseBase,
    WarehouseCreate,
    WarehouseResponse,
    WarehouseUpdate,
)
from .sales import (
    # Allocation
    AllocationBase,
    AllocationCreate,
    AllocationResponse,
    DragAssignRequest,
    DragAssignResponse,
    # Order
    OrderBase,
    OrderCreate,
    # OrderLine
    OrderLineBase,
    OrderLineCreate,
    OrderLineResponse,
    OrderResponse,
    OrderUpdate,
    OrderWithLinesResponse,
    # PurchaseRequest
    PurchaseRequestBase,
    PurchaseRequestCreate,
    PurchaseRequestResponse,
    PurchaseRequestUpdate,
    # Shipping
    ShippingBase,
    ShippingCreate,
    ShippingResponse,
    ShippingUpdate,
)

__all__ = [
    # Base
    "BaseSchema",
    "TimestampMixin",
    "ResponseBase",
    # Masters
    "WarehouseBase",
    "WarehouseCreate",
    "WarehouseUpdate",
    "WarehouseResponse",
    "SupplierBase",
    "SupplierCreate",
    "SupplierUpdate",
    "SupplierResponse",
    "CustomerBase",
    "CustomerCreate",
    "CustomerUpdate",
    "CustomerResponse",
    "ProductBase",
    "ProductCreate",
    "ProductUpdate",
    "ProductResponse",
    "ProductUomConversionBase",
    "ProductUomConversionCreate",
    "ProductUomConversionUpdate",
    "ProductUomConversionResponse",
    # Inventory
    "LotBase",
    "LotCreate",
    "LotUpdate",
    "LotResponse",
    "StockMovementBase",
    "StockMovementCreate",
    "StockMovementResponse",
    "LotCurrentStockResponse",
    "ReceiptHeaderBase",
    "ReceiptHeaderCreate",
    "ReceiptHeaderResponse",
    "ReceiptLineBase",
    "ReceiptLineCreate",
    "ReceiptLineResponse",
    "ReceiptCreateRequest",
    "ReceiptResponse",
    "ExpiryRuleBase",
    "ExpiryRuleCreate",
    "ExpiryRuleUpdate",
    "ExpiryRuleResponse",
    # Sales
    "OrderBase",
    "OrderCreate",
    "OrderUpdate",
    "OrderResponse",
    "OrderWithLinesResponse",
    "OrderLineBase",
    "OrderLineCreate",
    "OrderLineResponse",
    "AllocationBase",
    "AllocationCreate",
    "AllocationResponse",
    "DragAssignRequest",
    "DragAssignResponse",
    "ShippingBase",
    "ShippingCreate",
    "ShippingUpdate",
    "ShippingResponse",
    "PurchaseRequestBase",
    "PurchaseRequestCreate",
    "PurchaseRequestUpdate",
    "PurchaseRequestResponse",
    # Integration
    "OcrOrderRecord",
    "OcrSubmissionRequest",
    "OcrSubmissionResponse",
    "SapRegisterTarget",
    "SapRegisterOptions",
    "SapRegisterRequest",
    "SapRegisterResponse",
    "SapSyncLogResponse",
    # Admin
    "FullSampleDataRequest",
]
