# backend/app/schemas/__init__.py
"""
Schemas Package
Pydantic スキーマの集約（OrderStatusUpdate追加版）
"""

# ... 他のインポート省略 ...

from .orders import (
    # Order
    OrderBase,
    OrderCreate,
    OrderResponse,
    OrderStatusUpdate,  # ← 追加
    OrderUpdate,
    OrderWithLinesResponse,
    # OrderLine
    OrderLineBase,
    OrderLineCreate,
    OrderLineOut,
    OrderLineResponse,
    # ... その他省略 ...
)

__all__ = [
    # ... 他のエクスポート省略 ...
    "OrderBase",
    "OrderCreate",
    "OrderResponse",
    "OrderStatusUpdate",  # ← 追加
    "OrderUpdate",
    "OrderWithLinesResponse",
    "OrderLineBase",
    "OrderLineCreate",
    "OrderLineOut",
    "OrderLineResponse",
    # ... その他省略 ...
]
