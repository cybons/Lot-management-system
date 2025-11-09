"""Initial schema base (imported SQL)

Revision ID: 4b2a45018747
Revises: 
Create Date: 2025-11-09 23:10:27.566953

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4b2a45018747'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Import all models to ensure they're registered with Base.metadata
    from app.models import (
        Base,
        Warehouse,
        Supplier,
        Customer,
        Product,
        Lot,
        StockMovement,
        Order,
        OrderLine,
        Allocation,
    )

    # Use Alembic's connection to create tables
    # This is idempotent - create_all will skip existing tables
    from sqlalchemy import MetaData
    from sqlalchemy.schema import CreateTable

    # Get the current connection from Alembic's context
    conn = op.get_bind()

    # Create all tables using the metadata
    # Note: This uses op.get_bind() which is the proper way in Alembic
    Base.metadata.create_all(bind=conn)


def downgrade() -> None:
    # Drop all tables in reverse order
    # Import models to get metadata
    from app.models import Base

    # Get the current connection from Alembic's context
    conn = op.get_bind()

    # Drop all tables using the metadata
    Base.metadata.drop_all(bind=conn)
