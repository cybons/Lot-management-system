# backend/app/services/__init__.py
"""
Services Package - Business Logic Layer.

Refactored: Organized into feature-based subpackages.
"""

# Subpackages
from app.services import allocation, integration, seed

# Legacy imports (for backward compatibility)
from app.services.forecast_service import ForecastService
from app.services.quantity_service import QuantityConversionError, to_internal_qty


__all__ = [
    # Subpackages
    "allocation",
    "seed",
    "integration",
    # Legacy exports
    "ForecastService",
    "QuantityConversionError",
    "to_internal_qty",
]
