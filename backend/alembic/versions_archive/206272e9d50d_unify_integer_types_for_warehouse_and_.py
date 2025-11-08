"""unify integer types for warehouse and delivery_place FKs

Revision ID: 206272e9d50d
Revises: 0acb3d7d0cc5
Create Date: 2025-11-07 15:08:25.669467

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '206272e9d50d'
down_revision = '0acb3d7d0cc5'
branch_labels = None
depends_on = None


def upgrade() -> None:
    """
    BigInteger から Integer への型変更
    - warehouses.id (主キー)
    - delivery_places.id (主キー)
    - 上記を参照する全てのFK
    """
    
    # 1. warehouses.id: BigInteger → Integer
    with op.batch_alter_table('warehouses', schema=None) as batch_op:
        batch_op.alter_column(
            'id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=False,
            autoincrement=True,
            postgresql_using='id::integer',
        )
    
    # 2. delivery_places.id: BigInteger → Integer
    with op.batch_alter_table('delivery_places', schema=None) as batch_op:
        batch_op.alter_column(
            'id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=False,
            autoincrement=True,
            postgresql_using='id::integer',
        )
    
    # 3. lots.warehouse_id: BigInteger → Integer (FK to warehouses.id)
    with op.batch_alter_table('lots', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=False,
            postgresql_using='warehouse_id::integer',
        )
    
    # 4. stock_movements.warehouse_id: BigInteger → Integer (FK to warehouses.id)
    with op.batch_alter_table("stock_movements", schema=None) as batch:
       # 既存のFKが warehouse_code を参照しているケースを先に外す
       # 名前はログに出ていた "fk_stock_movements_warehouse"
       batch.drop_constraint("fk_stock_movements_warehouse", type_="foreignkey")

       # 型をIntegerへ（Postgres）
       batch.alter_column(
              "warehouse_id",
              existing_type=sa.BigInteger(),
              type_=sa.Integer(),
              existing_nullable=False,
              postgresql_using="warehouse_id::integer",
       )

       # 参照先を warehouses.id にして再作成（無名でOK）
       batch.create_foreign_key(
              None,                # 生成名はDBに任せる
              "warehouses",        # 参照テーブル
              ["warehouse_id"],    # 子カラム
              ["id"],              # 親カラム（←ここが warehouse_code ではなく id）
              ondelete="RESTRICT", # 必要に応じて（省略可）
       )

    
    # 5. receipt_headers.warehouse_id: BigInteger → Integer (FK to warehouses.id)
    with op.batch_alter_table('receipt_headers', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=False,
            postgresql_using='warehouse_id::integer',
        )
    
    # 6. order_line_warehouse_allocation.warehouse_id: BigInteger → Integer (FK to warehouses.id)
    with op.batch_alter_table('order_line_warehouse_allocation', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=False,
            postgresql_using='warehouse_id::integer',
        )
    
    # 7. allocations.destination_id: BigInteger → Integer (FK to delivery_places.id)
    with op.batch_alter_table('allocations', schema=None) as batch_op:
        batch_op.alter_column(
            'destination_id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=True,
            postgresql_using='destination_id::integer',
        )
    
    # 8. products.delivery_place_id: BigInteger → Integer (FK to delivery_places.id)
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.alter_column(
            'delivery_place_id',
            existing_type=sa.BigInteger(),
            type_=sa.Integer(),
            existing_nullable=True,
            postgresql_using='delivery_place_id::integer',
        )


def downgrade() -> None:
    """
    Integer から BigInteger への型変更（ロールバック用）
    """
    
    # 逆順で戻す
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.alter_column(
            'delivery_place_id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=True,
        )
    
    with op.batch_alter_table('allocations', schema=None) as batch_op:
        batch_op.alter_column(
            'destination_id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=True,
        )
    
    with op.batch_alter_table('order_line_warehouse_allocations', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=False,
        )
    
    with op.batch_alter_table('receipt_headers', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=False,
        )
    
    with op.batch_alter_table('stock_movements', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=False,
        )
    
    with op.batch_alter_table('lots', schema=None) as batch_op:
        batch_op.alter_column(
            'warehouse_id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=False,
        )
    
    with op.batch_alter_table('delivery_places', schema=None) as batch_op:
        batch_op.alter_column(
            'id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=False,
            autoincrement=True,
        )
    
    with op.batch_alter_table('warehouses', schema=None) as batch_op:
        batch_op.alter_column(
            'id',
            existing_type=sa.Integer(),
            type_=sa.BigInteger(),
            existing_nullable=False,
            autoincrement=True,
        )


