"""add audit history tables

Revision ID: 5f68d2a452b8
Revises: 3f8a35b39c3d
Create Date: 2025-11-08 23:20:44.717879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5f68d2a452b8'
down_revision = '3f8a35b39c3d'
branch_labels = None
depends_on = None


AUDIT_TARGETS = [
    "allocations",
    "lots",
    "order_lines",
    "orders",
    "products",
    "warehouses",
]

def upgrade() -> None:
    for tbl in AUDIT_TARGETS:
        op.execute(f"""
        CREATE TABLE IF NOT EXISTS public.{tbl}_history (
            id           BIGSERIAL PRIMARY KEY,
            op           TEXT NOT NULL,                         -- 'I'|'U'|'D'
            changed_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
            changed_by   TEXT,
            row_data     JSONB NOT NULL
        );
        CREATE INDEX IF NOT EXISTS ix_{tbl}_history_changed_at ON public.{tbl}_history (changed_at);
        CREATE INDEX IF NOT EXISTS gin_{tbl}_history_row_data ON public.{tbl}_history USING GIN (row_data);
        COMMENT ON TABLE public.{tbl}_history IS '監査履歴（{tbl} 用）';
        COMMENT ON COLUMN public.{tbl}_history.op IS '操作種別: I/U/D';
        COMMENT ON COLUMN public.{tbl}_history.changed_at IS '変更日時（トリガ時刻）';
        COMMENT ON COLUMN public.{tbl}_history.changed_by IS '変更ユーザー（DBユーザー）';
        COMMENT ON COLUMN public.{tbl}_history.row_data IS '変更後(または削除時の旧)レコードJSON';
        """)  # audit_write() が INSERT する4列に合わせる

def downgrade() -> None:
    for tbl in AUDIT_TARGETS:
        op.execute(f"""
        DROP INDEX IF EXISTS gin_{tbl}_history_row_data;
        DROP INDEX IF EXISTS ix_{tbl}_history_changed_at;
        DROP TABLE IF EXISTS public.{tbl}_history;
        """)