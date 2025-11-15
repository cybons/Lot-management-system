"""
OCR submission service - unified OCR order processing logic.

Refactored: Consolidates duplicate OCR processing from integration_router and submissions_router.
"""

from __future__ import annotations

import logging
from datetime import datetime

from sqlalchemy.orm import Session

from app.models.masters_models import Customer, Product
from app.models.orders_models import Order, OrderLine
from app.schemas.integration_schema import OcrOrderRecord, SubmissionRequest, SubmissionResponse
from app.services.quantity_service import QuantityConversionError, to_internal_qty


logger = logging.getLogger(__name__)

# Optional forecast matching
try:
    from app.services.forecast_service import ForecastService

    FORECAST_AVAILABLE = True
except ImportError:
    FORECAST_AVAILABLE = False
    logger.warning("⚠️ ForecastService not available - forecast matching will be skipped")


# ============================
# Helper Functions
# ============================


def parse_ocr_payload(submission: SubmissionRequest) -> list[OcrOrderRecord]:
    """
    Parse OCR payload from submission request.

    Args:
        submission: Submission request

    Returns:
        List of OCR order records

    Raises:
        ValueError: If payload parsing fails
    """
    try:
        records_data = submission.payload.get("records", [])
        if not records_data:
            raise ValueError("payload に 'records' が含まれていません")

        return [OcrOrderRecord(**rec) for rec in records_data]
    except Exception as e:
        raise ValueError(f"payload のパース失敗: {str(e)}") from e


def validate_customer_exists(db: Session, customer_code: str) -> Customer:
    """
    Validate customer exists.

    Args:
        db: Database session
        customer_code: Customer code

    Returns:
        Customer entity

    Raises:
        ValueError: If customer not found
    """
    customer = db.query(Customer).filter(Customer.customer_code == customer_code).first()
    if not customer:
        raise ValueError(f"得意先コード {customer_code} が見つかりません")
    return customer


def check_order_duplicate(db: Session, order_no: str) -> bool:
    """
    Check if order already exists.

    Args:
        db: Database session
        order_no: Order number

    Returns:
        True if duplicate, False otherwise
    """
    existing = db.query(Order).filter(Order.order_number == order_no).first()
    return existing is not None


def create_order_from_record(
    db: Session,
    record: OcrOrderRecord,
    customer: Customer,
) -> Order:
    """
    Create order header from OCR record.

    Args:
        db: Database session
        record: OCR order record
        customer: Customer entity

    Returns:
        Created order
    """
    order = Order(
        order_number=record.order_no,
        customer_id=customer.id,
        delivery_place_id=customer.id,  # TODO: Get from request if available
        order_date=record.order_date if record.order_date else None,
        status="pending",
    )
    db.add(order)
    db.flush()
    return order


def process_order_line(
    db: Session,
    order: Order,
    line_data,
    matcher,
) -> tuple[bool, str | None]:
    """
    Process single order line from OCR data.

    Args:
        db: Database session
        order: Parent order
        line_data: Line data from OCR
        matcher: Forecast matcher (optional)

    Returns:
        Tuple of (success, error_message)
    """
    # Validate product exists
    product = db.query(Product).filter(Product.maker_part_code == line_data.product_code).first()
    if not product:
        return False, f"製品コード {line_data.product_code} が見つかりません"

    # Convert quantity
    try:
        internal_qty = to_internal_qty(
            product=product,
            qty_external=line_data.quantity,
            external_unit=line_data.external_unit,
        )
    except QuantityConversionError as exc:
        return False, str(exc)

    # Create order line
    order_line = OrderLine(
        order_id=order.id,
        product_id=product.id,
        order_quantity=float(internal_qty),
        unit=product.base_unit,
        delivery_date=line_data.due_date,
    )
    db.add(order_line)
    db.flush()

    # Optional forecast matching
    if matcher and order.order_date:
        try:
            matcher.apply_forecast_to_order_line(
                order_line=order_line,
                product_code=line_data.product_code,
                customer_code=order.customer.customer_code if order.customer else "",
                order_date=order.order_date,
            )
        except Exception as e:
            logger.warning(
                f"⚠️ Forecast matching failed for order {order.order_number} line {line_data.line_no}: {e}"
            )

    return True, None


def process_ocr_record(
    db: Session,
    record: OcrOrderRecord,
    matcher,
) -> tuple[int, int, list[str]]:
    """
    Process single OCR record (order with lines).

    Args:
        db: Database session
        record: OCR order record
        matcher: Forecast matcher (optional)

    Returns:
        Tuple of (created_orders, created_lines, errors)
    """
    errors = []

    # Check duplicate
    if check_order_duplicate(db, record.order_no):
        errors.append(f"受注番号 {record.order_no} は既に存在します")
        return 0, 0, errors

    # Validate customer
    try:
        customer = validate_customer_exists(db, record.customer_code)
    except ValueError as e:
        errors.append(str(e))
        return 0, 0, errors

    # Create order header
    order = create_order_from_record(db, record, customer)
    created_orders = 1
    created_lines = 0

    # Process order lines
    for line in record.lines:
        success, error = process_order_line(db, order, line, matcher)
        if success:
            created_lines += 1
        else:
            errors.append(f"受注 {record.order_no} 明細 {line.line_no}: {error}")

    return created_orders, created_lines, errors


def build_ocr_response(
    submission_id: str,
    source: str,
    total_records: int,
    processed_records: int,
    failed_records: int,
    skipped_records: int,
    created_orders: int,
    created_lines: int,
    error_details: list[str],
) -> SubmissionResponse:
    """
    Build submission response.

    Args:
        submission_id: Submission ID
        source: Submission source
        total_records: Total records
        processed_records: Successfully processed records
        failed_records: Failed records
        skipped_records: Skipped records
        created_orders: Created orders count
        created_lines: Created lines count
        error_details: List of error messages

    Returns:
        Submission response
    """
    status = (
        "success" if failed_records == 0 else ("partial" if processed_records > 0 else "failed")
    )

    return SubmissionResponse(
        status=status,
        submission_id=submission_id,
        source=source,
        created_records=created_orders,
        total_records=total_records,
        processed_records=processed_records,
        failed_records=failed_records,
        skipped_records=skipped_records,
        error_details="\n".join(error_details) if error_details else None,
        submitted_at=datetime.now(),
    )


# ============================
# Main Service Function
# ============================


def process_ocr_submission(
    db: Session,
    submission: SubmissionRequest,
) -> SubmissionResponse:
    """
    Process OCR submission (unified logic).

    Replaces:
    - integration_router.submit_ocr_data
    - submissions_router._process_ocr_submission

    Args:
        db: Database session
        submission: Submission request

    Returns:
        Submission response

    Raises:
        ValueError: If payload parsing fails
    """
    submission_id = f"{datetime.now().strftime('%Y%m%d-%H%M%S')}-{submission.source}"

    # Parse payload
    records = parse_ocr_payload(submission)

    # Initialize counters
    total_records = len(records)
    processed_records = 0
    failed_records = 0
    skipped_records = 0
    created_orders = 0
    created_lines = 0
    error_details = []

    # Initialize forecast matcher
    forecast_matcher = ForecastService(db) if FORECAST_AVAILABLE else None

    # Process each record
    for record in records:
        try:
            orders, lines, errors = process_ocr_record(db, record, forecast_matcher)

            if errors and orders == 0:
                if "既に存在します" in errors[0]:
                    skipped_records += 1
                else:
                    failed_records += 1
                error_details.extend(errors)
            else:
                processed_records += 1
                created_orders += orders
                created_lines += lines
                if errors:
                    error_details.extend(errors)

        except Exception as e:
            failed_records += 1
            error_details.append(f"受注 {record.order_no}: {str(e)}")

    # Commit transaction
    db.commit()

    # Log result
    logger.info(
        f"OCR取込完了 (submissions API): {processed_records}/{total_records} 件成功, "
        f"{failed_records} 件失敗, {skipped_records} 件スキップ"
    )

    # Build response
    return build_ocr_response(
        submission_id=submission_id,
        source=submission.source,
        total_records=total_records,
        processed_records=processed_records,
        failed_records=failed_records,
        skipped_records=skipped_records,
        created_orders=created_orders,
        created_lines=created_lines,
        error_details=error_details,
    )
