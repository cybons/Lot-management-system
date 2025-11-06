import logging
import uuid
from typing import Any, Dict

from fastapi import Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

logger = logging.getLogger(__name__)

PROBLEM_TYPE = "about:blank"


def _problem(detail: str, title: str, status: int, instance: str) -> Dict[str, Any]:
    return {
        "type": PROBLEM_TYPE,
        "title": title,
        "status": status,
        "detail": detail,
        "instance": instance,
    }


async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    body = _problem(
        detail=str(exc.detail),
        title="HTTP Error",
        status=exc.status_code,
        instance=str(request.url.path),
    )
    return JSONResponse(status_code=exc.status_code, content=body)


async def validation_exception_handler(request: Request, exc: RequestValidationError):
    body = _problem(
        detail=exc.errors(),
        title="Validation Error",
        status=422,
        instance=str(request.url.path),
    )
    return JSONResponse(status_code=422, content=body)


async def generic_exception_handler(request: Request, exc: Exception):
    req_id = request.headers.get("x-request-id", str(uuid.uuid4()))
    logger.exception("Unhandled error (request_id=%s)", req_id)
    body = _problem(
        detail="Internal Server Error",
        title="Unexpected Error",
        status=500,
        instance=str(request.url.path),
    )
    return JSONResponse(status_code=500, content=body)
