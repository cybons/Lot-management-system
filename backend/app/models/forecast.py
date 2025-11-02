from datetime import datetime, timezone

from sqlalchemy import Boolean, CheckConstraint, Column, Date, DateTime, Integer, String

from .base_model import Base


class Forecast(Base):
    __tablename__ = "forecast"  # FK の参照名と完全一致
    id = Column(Integer, primary_key=True)  # 主キー必須

    forecast_id = Column(String(36), nullable=False, unique=True)
    product_id = Column(String(64), nullable=False)
    client_id = Column(String(64), nullable=False)
    supplier_id = Column(String(64), nullable=False)

    granularity = Column(String(16), nullable=False)  # 'daily'|'dekad'|'monthly'
    date_day = Column(Date)
    date_dekad_start = Column(Date)
    year_month = Column(String(7))  # 'YYYY-MM'

    qty_forecast = Column(Integer, nullable=False)

    version_no = Column(Integer, nullable=False, default=1)
    version_issued_at = Column(DateTime(timezone=True), nullable=False)
    source_system = Column(String(32), nullable=False, default="external")
    is_active = Column(Boolean, nullable=False, default=True)

    created_at = Column(
        DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc),  # ← Python側デフォルト
    )

    updated_at = Column(
        DateTime(timezone=True),
        nullable=False,
        default=lambda: datetime.now(timezone.utc),  # ← 生成時
    )

    onupdate = (lambda: datetime.now(timezone.utc),)  # ← UPDATE時に自動更新

    __table_args__ = (
        CheckConstraint(
            "("
            " (granularity='daily'   AND date_day IS NOT NULL     AND date_dekad_start IS NULL AND year_month IS NULL)"
            " OR "
            " (granularity='dekad'   AND date_dekad_start IS NOT NULL AND date_day IS NULL     AND year_month IS NULL)"
            " OR "
            " (granularity='monthly' AND year_month IS NOT NULL   AND date_day IS NULL         AND date_dekad_start IS NULL)"
            ")",
            name="ck_forecast_period_key_exclusivity",
        ),
        CheckConstraint(
            "granularity in ('daily','dekad','monthly')", name="ck_forecast_granularity"
        ),
        CheckConstraint("qty_forecast >= 0", name="ck_forecast_qty_nonneg"),
    )
