"""Unify quantities to NUMERIC(15,4)

Revision ID: 952dcae456fb
Revises: 664ac90c10f4
Create Date: 2025-11-08 18:28:08.917797

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '952dcae456fb'
down_revision = '664ac90c10f4'
branch_labels = None
depends_on = None


def upgrade():
    op.execute("""
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
         WHERE table_schema='public' AND table_name='order_lines'
           AND column_name='quantity' AND data_type <> 'numeric'
      ) THEN
        ALTER TABLE public.order_lines
          ALTER COLUMN quantity TYPE numeric(15,4) USING ROUND(quantity::numeric, 4),
          ALTER COLUMN quantity SET NOT NULL;
      END IF;

      IF EXISTS (
        SELECT 1 FROM information_schema.columns
         WHERE table_schema='public' AND table_name='order_line_warehouse_allocation'
           AND column_name='quantity' AND data_type <> 'numeric'
      ) THEN
        ALTER TABLE public.order_line_warehouse_allocation
          ALTER COLUMN quantity TYPE numeric(15,4) USING ROUND(quantity::numeric, 4),
          ALTER COLUMN quantity SET NOT NULL;
      END IF;
    END
    $$;
    """)

def downgrade():
    op.execute("""
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
         WHERE table_schema='public' AND table_name='order_lines'
           AND column_name='quantity' AND data_type = 'numeric'
      ) THEN
        ALTER TABLE public.order_lines
          ALTER COLUMN quantity TYPE double precision USING quantity::double precision,
          ALTER COLUMN quantity DROP NOT NULL;
      END IF;

      IF EXISTS (
        SELECT 1 FROM information_schema.columns
         WHERE table_schema='public' AND table_name='order_line_warehouse_allocation'
           AND column_name='quantity' AND data_type = 'numeric'
      ) THEN
        ALTER TABLE public.order_line_warehouse_allocation
          ALTER COLUMN quantity TYPE double precision USING quantity::double precision,
          ALTER COLUMN quantity DROP NOT NULL;
      END IF;
    END
    $$;
    """)