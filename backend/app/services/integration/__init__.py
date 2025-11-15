"""Integration services subpackage."""

from app.services.integration.ocr_submission_service import process_ocr_submission


__all__ = [
    "process_ocr_submission",
]
