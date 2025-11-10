"""Compatibility layer for legacy ``app.db.session`` imports."""

from app.core.database import Base, SessionLocal, drop_db, engine, get_db, init_db


__all__ = [
    "SessionLocal",
    "engine",
    "Base",
    "get_db",
    "init_db",
    "drop_db",
]
