"""Forecast models aligned with ``forecast_headers`` and ``forecast_lines`` tables."""

from __future__ import annotations

from datetime import date, datetime
from decimal import Decimal
from enum import Enum as PyEnum
from typing import TYPE_CHECKING

from sqlalchemy import (
    BigInteger,
    CheckConstraint,
    Date,
    DateTime,
    ForeignKey,
    Index,
    Numeric,
    String,
    UniqueConstraint,
    func,
    text,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base_model import Base


if TYPE_CHECKING:  # pragma: no cover - for type checkers only
    from .masters_models import Customer, DeliveryPlace, Product


class ForecastStatus(str, PyEnum):
    """Represents the lifecycle of a forecast header."""

    ACTIVE = "active"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class ForecastHeader(Base):
    """Forecast header information for a customer and delivery place."""

    __tablename__ = "forecast_headers"

    id: Mapped[int] = mapped_column("forecast_id", BigInteger, primary_key=True)
    customer_id: Mapped[int] = mapped_column(
        BigInteger,
        ForeignKey("customers.customer_id", ondelete="RESTRICT"),
        nullable=False,
    )
    delivery_place_id: Mapped[int] = mapped_column(
        BigInteger,
        ForeignKey("delivery_places.delivery_place_id", ondelete="RESTRICT"),
        nullable=False,
    )
    forecast_number: Mapped[str] = mapped_column(String(50), nullable=False)
    forecast_start_date: Mapped[date] = mapped_column(Date, nullable=False)
    forecast_end_date: Mapped[date] = mapped_column(Date, nullable=False)
    status: Mapped[ForecastStatus] = mapped_column(
        String(20), nullable=False, server_default=text("'active'")
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime, nullable=False, server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        server_default=func.now(),
        onupdate=func.now(),
    )

    __table_args__ = (
        UniqueConstraint("forecast_number", name="forecast_headers_forecast_number_key"),
        CheckConstraint(
            "status IN ('active','completed','cancelled')",
            name="chk_forecast_headers_status",
        ),
        Index("idx_forecast_headers_customer", "customer_id"),
        Index(
            "idx_forecast_headers_delivery_place",
            "delivery_place_id",
        ),
        Index(
            "idx_forecast_headers_dates",
            "forecast_start_date",
            "forecast_end_date",
        ),
    )

    customer: Mapped[Customer] = relationship("Customer", back_populates="forecast_headers")
    delivery_place: Mapped[DeliveryPlace] = relationship(
        "DeliveryPlace", back_populates="forecast_headers"
    )
    lines: Mapped[list[ForecastLine]] = relationship(
        "ForecastLine", back_populates="header", cascade="all, delete-orphan"
    )


class ForecastLine(Base):
    """Daily forecast quantities associated with a forecast header."""

    __tablename__ = "forecast_lines"

    id: Mapped[int] = mapped_column("forecast_line_id", BigInteger, primary_key=True)
    forecast_id: Mapped[int] = mapped_column(
        BigInteger,
        ForeignKey("forecast_headers.forecast_id", ondelete="CASCADE"),
        nullable=False,
    )
    product_id: Mapped[int] = mapped_column(
        BigInteger,
        ForeignKey("products.product_id", ondelete="RESTRICT"),
        nullable=False,
    )
    delivery_date: Mapped[date] = mapped_column(Date, nullable=False)
    forecast_quantity: Mapped[Decimal] = mapped_column(Numeric(15, 3), nullable=False)
    unit: Mapped[str] = mapped_column(String(20), nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime, nullable=False, server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        server_default=func.now(),
        onupdate=func.now(),
    )

    __table_args__ = (
        Index("idx_forecast_lines_header", "forecast_id"),
        Index("idx_forecast_lines_product", "product_id"),
        Index("idx_forecast_lines_date", "delivery_date"),
    )

    header: Mapped[ForecastHeader] = relationship("ForecastHeader", back_populates="lines")
    product: Mapped[Product] = relationship("Product", back_populates="forecast_lines")


# Backward compatibility alias until dependent code is refactored.
Forecast = ForecastHeader
