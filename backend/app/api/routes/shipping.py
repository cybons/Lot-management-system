from fastapi import APIRouter


router = APIRouter(tags=["shipping"])


@router.get("")
def get_shipping_list():
    """
    配送一覧を取得（未実装）.

    TODO: 配送管理機能の実装
    """
    return {"message": "配送管理機能は今後実装予定です"}
