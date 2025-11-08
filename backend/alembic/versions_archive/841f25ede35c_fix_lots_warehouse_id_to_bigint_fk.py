"""fix lots.warehouse_id to bigint fk (safe swap)"""

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision = "841f25ede35c"  # ← 既存のまま
down_revision = "711c8f038ab9"  # ← 既存のまま
branch_labels = None
depends_on = None


def upgrade() -> None:
    # --- (A) warehouses.id を用意（無ければ作る） ---
    op.execute("""
    DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.columns
             WHERE table_name='warehouses' AND column_name='id'
        ) THEN
            -- id 追加（シーケンスとDEFAULTが付く）
            ALTER TABLE warehouses ADD COLUMN id BIGSERIAL;

            -- 既存行に値を埋める（DEFAULTでは既存はNULLのため手動で採番）
            UPDATE warehouses
               SET id = nextval(pg_get_serial_sequence('warehouses','id'))
             WHERE id IS NULL;

            -- NOT NULL と一意制約（FKの参照先にできるように）
            ALTER TABLE warehouses ALTER COLUMN id SET NOT NULL;
            CREATE UNIQUE INDEX IF NOT EXISTS uq_warehouses_id ON warehouses(id);
        END IF;
    END$$;
    """)
    # 0) 万一の古いFKを掃除（存在しなくてもOK）
    op.execute("ALTER TABLE lots DROP CONSTRAINT IF EXISTS fk_lots_warehouse;")
    op.execute("ALTER TABLE lots DROP CONSTRAINT IF EXISTS fk_lots_warehouse_id__warehouses_id;")
    op.execute("DROP INDEX IF EXISTS ix_lots_warehouse_id;")

    # 1) 一時列（bigint）を追加
    op.add_column(
        "lots",
        sa.Column(
            "warehouse_id_tmp",
            sa.BigInteger(),
            nullable=True,
            comment="warehouses.id へ移行用一時列",
        ),
    )

    # 2) 既存の lots.warehouse_id（= 倉庫コード テキスト想定）から warehouses.id へ移し替え
    #    ※ lots.warehouse_id に "倉庫コード" が入っている前提
    op.execute("""
        UPDATE lots AS l
        SET warehouse_id_tmp = w.id
        FROM warehouses AS w
        WHERE l.warehouse_id = w.warehouse_code
    """)

    # 3) 移し替え漏れチェック（NULLが残る＝紐付け失敗レコード）
    #    → 見つかったら後で手で埋めるか、ここで既定IDに寄せるなど方針次第。
    #    ここでは存在の有無だけログ用にSELECT。エラーにしたい場合は NOT NULL 直前で検査してRAISEでも可。
    # op.execute("SELECT COUNT(*) FROM lots WHERE warehouse_id_tmp IS NULL;")

    # 4) 旧列を退避リネーム（型変換ではなく列入れ替え）
    op.alter_column("lots", "warehouse_id", new_column_name="warehouse_code_old")

    # 5) 新列を正式名にリネーム
    op.alter_column("lots", "warehouse_id_tmp", new_column_name="warehouse_id")

    # 6) インデックス作成（必要なら）
    op.create_index("ix_lots_warehouse_id", "lots", ["warehouse_id"], unique=False)

    # 7) FK を warehouses.id に張る（ondelete 方針は必要に応じて）
    op.create_foreign_key(
        "fk_lots_warehouse_id__warehouses_id",
        source_table="lots",
        referent_table="warehouses",
        local_cols=["warehouse_id"],
        remote_cols=["id"],
        ondelete="RESTRICT",
    )

    # 8) （任意）全件埋まっているなら NOT NULL に格上げ
    # op.execute("ALTER TABLE lots ALTER COLUMN warehouse_id SET NOT NULL;")

    # 9) （任意）古い退避列を削除（運用が落ち着いてから別リビジョンで消すのも可）
    # op.drop_column("lots", "warehouse_code_old")


def downgrade() -> None:
    # 逆順：FK/Index撤去 → 列名戻す
    op.drop_constraint("fk_lots_warehouse_id__warehouses_id", "lots", type_="foreignkey")
    op.drop_index("ix_lots_warehouse_id", table_name="lots")

    op.alter_column("lots", "warehouse_id", new_column_name="warehouse_id_tmp")
    op.alter_column("lots", "warehouse_code_old", new_column_name="warehouse_id")

    op.drop_column("lots", "warehouse_id_tmp")
