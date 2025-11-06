from app.main import app


def _has(method: str, path: str) -> bool:
    for r in app.routes:
        if getattr(r, "path", None) == path and method in getattr(r, "methods", set()):
            return True
    return False


def test_core_routes_exist():
    assert _has("GET", "/api/health")
    # 必要なら増やす: assert _has("GET", "/api/docs")
