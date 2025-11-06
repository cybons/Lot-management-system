# backend/app/schemas/orders.py
"""
受注関連のPydanticスキーマ（OrderStatusUpdate追加版）
"""

from datetime import date
from typing import List, Optional

from pydantic import BaseModel, Field, constr

from .base import BaseSchema, TimestampMixin


# --- Order ---
class OrderBase(BaseSchema):
    order_no: str
    customer_code: str
    order_date: date
    status: str = "open"


class OrderCreate(OrderBase):
    lines: List["OrderLineCreate"] = Field(default_factory=list)


class OrderUpdate(BaseSchema):
    status: Optional[str] = None


class OrderStatusUpdate(BaseSchema):
    """
    受注ステータス更新用スキーマ
    
    Note:
        constrを使用してstatusが空文字でないことを保証
    """
    status: constr(min_length=1) = Field(
        ...,
        description="新しいステータス（open, allocated, shipped, closed, cancelled）",
        examples=["allocated", "shipped"]
    )


class OrderResponse(OrderBase, TimestampMixin):
    id: int


class OrderWithLinesResponse(OrderResponse):
    lines: List["OrderLineOut"] = Field(default_factory=list)


# --- OrderLine ---
class OrderLineBase(BaseSchema):
    line_no: int
    product_code: str
    quantity: float
    unit: str
    due_date: Optional[date] = None


class OrderLineCreate(OrderLineBase):
    external_unit: Optional[str] = None  # 外部単位（変換用）


class OrderLineResponse(OrderLineBase, TimestampMixin):
    id: int
    order_id: int


class OrderLineOut(BaseSchema):
    id: int
    line_no: int
    product_code: str
    product_name: str
    quantity: float
    unit: str
    due_date: Optional[date] = None


# Pydantic v2のforward reference解決
OrderCreate.model_rebuild()
OrderWithLinesResponse.model_rebuild()
