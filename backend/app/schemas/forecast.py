from datetime import date, datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, field_validator, model_validator

Granularity = Literal["daily", "dekad", "monthly"]


class ForecastBase(BaseModel):
    product_id: str
    client_id: str
    supplier_id: str

    granularity: Granularity
    date_day: Optional[date] = None
    date_dekad_start: Optional[date] = None  # 1/11/21 のみ許可
    year_month: Optional[str] = None  # 'YYYY-MM'

    qty_forecast: int

    version_no: int = 1
    version_issued_at: datetime
    source_system: str = "external"
    is_active: bool = True

    # --- 単独フィールドの簡易チェック ---

    @field_validator("year_month")
    @classmethod
    def validate_year_month(cls, v: Optional[str]) -> Optional[str]:
        if v is None:
            return v
        if len(v) != 7 or v[4] != "-":
            raise ValueError("year_month must be 'YYYY-MM'")
        # 追加で 01-12 の範囲を軽くチェックしてもOK
        mm = v[5:7]
        if mm < "01" or mm > "12":
            raise ValueError("year_month month part must be 01-12")
        return v

    @field_validator("date_dekad_start")
    @classmethod
    def validate_dekad_start(cls, v: Optional[date]) -> Optional[date]:
        if v is None:
            return v
        if v.day not in (1, 11, 21):
            raise ValueError("dekad start must be 1, 11 or 21")
        return v

    # --- 相互排他チェック（Pydantic v2 は model_validator で） ---

    @model_validator(mode="after")
    def validate_period_key_exclusivity(self):
        g = self.granularity
        dd = self.date_day
        dk = self.date_dekad_start
        ym = self.year_month

        if g == "daily":
            if not dd or dk or ym:
                raise ValueError(
                    "daily requires ONLY date_day (date_dekad_start/year_month must be null)"
                )
        elif g == "dekad":
            if not dk or dd or ym:
                raise ValueError(
                    "dekad requires ONLY date_dekad_start (date_day/year_month must be null)"
                )
        elif g == "monthly":
            if not ym or dd or dk:
                raise ValueError(
                    "monthly requires ONLY year_month (date_day/date_dekad_start must be null)"
                )
        return self


class ForecastCreate(ForecastBase):
    # 入力スキーマ。特に追加なし
    pass


class ForecastRead(ForecastBase):
    # 出力スキーマ（ORM → Schema 変換を許可）
    forecast_id: str
    model_config = ConfigDict(from_attributes=True)
