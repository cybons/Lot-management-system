import pytest
from httpx import AsyncClient

from app.main import app


@pytest.mark.asyncio
async def test_order_validation_error():
    payload = {"customer_code": "C001", "lines": []}
    async with AsyncClient(app=app, base_url="http://test") as c:
        r = await c.post("/api/orders", json=payload)
        assert r.status_code == 422
        body = r.json()
        assert body["title"] == "Validation Error"
