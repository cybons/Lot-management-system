# backend/app/core/errors.py
"""
グローバル例外ハンドラ
ドメイン例外をHTTPレスポンスに変換（Problem+JSON準拠）
"""

import logging
import traceback
from typing import Dict, Type

from fastapi import Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.domain.order import (
    DuplicateOrderError,
    InvalidOrderStatusError,
    OrderDomainError,
    OrderNotFoundError,
    OrderValidationError,
)
from app.services.order_service import ProductNotFoundError

logger = logging.getLogger(__name__)


# ドメイン例外 → HTTPステータスコードのマッピング
DOMAIN_EXCEPTION_MAP: Dict[Type[Exception], int] = {
    OrderNotFoundError: status.HTTP_404_NOT_FOUND,
    ProductNotFoundError: status.HTTP_404_NOT_FOUND,
    DuplicateOrderError: status.HTTP_409_CONFLICT,
    InvalidOrderStatusError: status.HTTP_400_BAD_REQUEST,
    OrderValidationError: status.HTTP_422_UNPROCESSABLE_ENTITY,
    OrderDomainError: status.HTTP_400_BAD_REQUEST,
}


def _problem_json(
    title: str,
    status_code: int,
    detail: str,
    instance: str,
    **kwargs
) -> dict:
    """
    Problem+JSON形式のレスポンスを生成
    
    RFC 7807: https://tools.ietf.org/html/rfc7807
    """
    problem = {
        "type": "about:blank",
        "title": title,
        "status": status_code,
        "detail": detail,
        "instance": instance,
    }
    problem.update(kwargs)
    return problem


async def domain_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    """
    ドメイン例外をHTTPレスポンスに変換
    
    Args:
        request: FastAPIリクエスト
        exc: 発生した例外
        
    Returns:
        JSONResponse（Problem+JSON形式）
    """
    # ドメイン例外のマッピングをチェック
    for exc_type, status_code in DOMAIN_EXCEPTION_MAP.items():
        if isinstance(exc, exc_type):
            detail = getattr(exc, "message", str(exc))
            
            logger.warning(
                f"Domain exception: {exc_type.__name__}",
                extra={
                    "exception_type": exc_type.__name__,
                    "detail": detail,
                    "path": request.url.path,
                }
            )
            
            return JSONResponse(
                status_code=status_code,
                content=_problem_json(
                    title=exc_type.__name__,
                    status=status_code,
                    detail=detail,
                    instance=str(request.url.path),
                ),
            )
    
    # マッピングに存在しない例外は上位へ
    raise exc


async def http_exception_handler(request: Request, exc: StarletteHTTPException) -> JSONResponse:
    """
    HTTPExceptionをProblem+JSON形式に変換
    
    Args:
        request: FastAPIリクエスト
        exc: HTTPException
        
    Returns:
        JSONResponse（Problem+JSON形式）
    """
    return JSONResponse(
        status_code=exc.status_code,
        content=_problem_json(
            title="HTTP Error",
            status=exc.status_code,
            detail=exc.detail,
            instance=str(request.url.path),
        ),
        headers=exc.headers,
    )


async def validation_exception_handler(request: Request, exc: RequestValidationError) -> JSONResponse:
    """
    バリデーションエラーをProblem+JSON形式に変換
    
    Args:
        request: FastAPIリクエスト
        exc: RequestValidationError
        
    Returns:
        JSONResponse（Problem+JSON形式）
    """
    errors = exc.errors()
    
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=_problem_json(
            title="Validation Error",
            status=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="リクエストの検証に失敗しました",
            instance=str(request.url.path),
            errors=errors,
        ),
    )


async def generic_exception_handler(request: Request, exc: Exception) -> JSONResponse:
    """
    予期しない例外をProblem+JSON形式に変換
    
    Args:
        request: FastAPIリクエスト
        exc: Exception
        
    Returns:
        JSONResponse（Problem+JSON形式）
    """
    logger.error(
        f"Unhandled exception: {type(exc).__name__}",
        extra={
            "exception_type": type(exc).__name__,
            "exception_message": str(exc),
            "path": request.url.path,
            "traceback": traceback.format_exc(),
        }
    )
    
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content=_problem_json(
            title="Internal Server Error",
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="サーバー内部でエラーが発生しました",
            instance=str(request.url.path),
        ),
    )
