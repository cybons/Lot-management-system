"""add check: order_line_warehouse_allocation.quantity > 0

Revision ID: 5d9ef798173e
Revises: 841f25ede35c
Create Date: 2025-11-06 05:54:00.128745

"""

from alembic import op

# revision identifiers, used by Alembic.
revision = "5d9ef798173e"
down_revision = "841f25ede35c"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_check_constraint(
        "ck_olwa_quantity_positive",
        "order_line_warehouse_allocation",
        "quantity > 0",
    )


def downgrade() -> None:
    op.drop_constraint(
        "ck_olwa_quantity_positive",
        "order_line_warehouse_allocation",
        type_="check",
    )
