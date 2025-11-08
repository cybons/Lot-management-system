"""append-only audit & pluralize

Revision ID: eac415ca24ef
Revises: 206272e9d50d
Create Date: 2025-11-07 19:31:07.593541

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eac415ca24ef'
down_revision = '206272e9d50d'
branch_labels = None
depends_on = None


TARGET_TABLES = [
    "warehouses", "products", "lots",
    "orders", "order_lines", "allocations",
    # 必要に応じて追加: "receipts", "stock_movements", ...
]

def upgrade():
    bind = op.get_bind()

    # 1) 旧テーブル warehouse → warehouses（存在時のみ）
    bind.execute(sa.text("""
    DO $$
    BEGIN
      IF to_regclass('public.warehouse') IS NOT NULL
         AND to_regclass('public.warehouses') IS NULL THEN
        ALTER TABLE warehouse RENAME TO warehouses;
      END IF;
    END $$;
    """))

    # 2) 共通関数（1回だけ）
    bind.execute(sa.text("""
    CREATE OR REPLACE FUNCTION audit_write()
    RETURNS trigger AS $$
    DECLARE
      v_op text;
      v_row jsonb;
      v_user text;
    BEGIN
      v_user := current_user;
      IF TG_OP = 'INSERT' THEN v_op := 'I'; v_row := to_jsonb(NEW);
      ELSIF TG_OP = 'UPDATE' THEN v_op := 'U'; v_row := to_jsonb(NEW);
      ELSE v_op := 'D'; v_row := to_jsonb(OLD);
      END IF;

      EXECUTE format('INSERT INTO %I.%I_history(op, changed_at, changed_by, row_data)
                      VALUES ($1, now(), $2, $3)', TG_TABLE_SCHEMA, TG_TABLE_NAME)
      USING v_op, v_user, v_row;

      RETURN COALESCE(NEW, OLD);
    END
    $$ LANGUAGE plpgsql;
    """))

    # 3) 各テーブルの *_history とトリガ作成
    for t in TARGET_TABLES:
      op.execute(sa.text(f"""
      DO $$
      BEGIN
        IF to_regclass('public.{t}_history') IS NULL THEN
          CREATE TABLE {t}_history (
            id           bigserial PRIMARY KEY,
            op           char(1) NOT NULL,            -- I/U/D
            changed_at   timestamptz NOT NULL DEFAULT now(),
            changed_by   text,
            row_data     jsonb NOT NULL
          );
        END IF;

        -- トリガは3種（I/U/D）。既存なら作らない。
        IF NOT EXISTS (
          SELECT 1 FROM pg_trigger WHERE tgname = '{t}_audit_ins'
        ) THEN
          CREATE TRIGGER {t}_audit_ins
            AFTER INSERT ON {t}
            FOR EACH ROW EXECUTE FUNCTION audit_write();
        END IF;

        IF NOT EXISTS (
          SELECT 1 FROM pg_trigger WHERE tgname = '{t}_audit_upd'
        ) THEN
          CREATE TRIGGER {t}_audit_upd
            AFTER UPDATE ON {t}
            FOR EACH ROW EXECUTE FUNCTION audit_write();
        END IF;

        IF NOT EXISTS (
          SELECT 1 FROM pg_trigger WHERE tgname = '{t}_audit_del'
        ) THEN
          CREATE TRIGGER {t}_audit_del
            AFTER DELETE ON {t}
            FOR EACH ROW EXECUTE FUNCTION audit_write();
        END IF;
      END $$;
      """))

def downgrade():
    # 監査は運用保護のため基本は残置を推奨（必要なら明示的にDROPを実装）
    pass