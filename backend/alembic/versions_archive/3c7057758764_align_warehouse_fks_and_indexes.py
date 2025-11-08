import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision = "3c7057758764"
down_revision = "5d9ef798173e"
branch_labels = None
depends_on = None


def upgrade():
    bind = op.get_bind()
    insp = sa.inspect(bind)

    # --- 1) receipt_headers: warehouse_code -> warehouse_id
    cols = {c["name"] for c in insp.get_columns("receipt_headers")}
    if "warehouse_id" not in cols:
        op.add_column(
            "receipt_headers",
            sa.Column("warehouse_id", sa.BigInteger(), nullable=True),
        )

        # バックフィル（codeからidへ）
        op.execute("""
            UPDATE receipt_headers rh
            SET warehouse_id = w.id
            FROM warehouses w
            WHERE w.warehouse_code = rh.warehouse_code
        """)

        # 未マッチがないか確認（NULLが残るとNOT NULLにできない）
        # ここでNULLが残る場合は、いったんNULL許容のままにするか、手当する
        # op.execute("...ロギング用INSERT SELECT ...") 等も可

        # FK 付与（必要なら ON UPDATE/DELETE 方針に合わせて調整）
        op.create_foreign_key(
            "fk_receipt_headers_warehouse_id",
            source_table="receipt_headers",
            referent_table="warehouses",
            local_cols=["warehouse_id"],
            remote_cols=["id"],
            ondelete="RESTRICT",
        )

        # 全て紐づけできている前提ならNOT NULL
        op.execute("""
            ALTER TABLE receipt_headers
            ALTER COLUMN warehouse_id SET NOT NULL
        """)

        # 旧インデックス/制約があればdropしてから…
        # op.drop_constraint("fk_receipt_headers_warehouse_code", "receipt_headers", type_="foreignkey")
        # 旧カラムを消すならここで
        op.drop_column("receipt_headers", "warehouse_code")

    # --- 2) 他のテーブルも同様に揃える（例：stock_movements 等）
    # DatatypeMismatchが出ていたテーブルは、同じ手順で code→id に置換
    for tbl in ("stock_movements", "receipt_lines", "lots", "order_headers", "order_lines"):
        if insp.has_table(tbl):
            tcols = {c["name"] for c in insp.get_columns(tbl)}
            if "warehouse_code" in tcols and "warehouse_id" not in tcols:
                op.add_column(tbl, sa.Column("warehouse_id", sa.BigInteger(), nullable=True))
                op.execute(f"""
                    UPDATE {tbl} t
                    SET warehouse_id = w.id
                    FROM warehouses w
                    WHERE w.warehouse_code = t.warehouse_code
                """)
                op.create_foreign_key(
                    f"fk_{tbl}_warehouse_id",
                    source_table=tbl,
                    referent_table="warehouses",
                    local_cols=["warehouse_id"],
                    remote_cols=["id"],
                    ondelete="RESTRICT",
                )
                # 必要ならNOT NULL化（NULL残存が無いことを確認できる時だけ）
                op.execute(f"""
                    ALTER TABLE {tbl}
                    ALTER COLUMN warehouse_id SET NOT NULL
                """)
                op.drop_column(tbl, "warehouse_code")


def downgrade():
    # 可能なら逆変換（id→code）を記述。
    # 省略例：warehouse_code を復元してコピーし、FK/列を戻す
    bind = op.get_bind()
    insp = sa.inspect(bind)

    def revert_table(tbl):
        tcols = {c["name"] for c in insp.get_columns(tbl)}
        if "warehouse_id" in tcols and "warehouse_code" not in tcols:
            op.add_column(tbl, sa.Column("warehouse_code", sa.String(length=50), nullable=True))
            op.execute(f"""
                UPDATE {tbl} t
                SET warehouse_code = w.warehouse_code
                FROM warehouses w
                WHERE w.id = t.warehouse_id
            """)
            # 旧制約を戻すならここに
            op.drop_constraint(f"fk_{tbl}_warehouse_id", tbl, type_="foreignkey")
            op.drop_column(tbl, "warehouse_id")

    for tbl in (
        "receipt_headers",
        "stock_movements",
        "receipt_lines",
        "lots",
        "order_headers",
        "order_lines",
    ):
        if insp.has_table(tbl):
            revert_table(tbl)
