# API endpoints for Lots
from fastapi import APIRouter

router = APIRouter()

@router.get("/lots")
def get_lots():
return [{"id": 1, "name": "Lot A"}]
