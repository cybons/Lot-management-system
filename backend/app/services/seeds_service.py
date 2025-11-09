# backend/app/services/seeds_service.py
from __future__ import annotations
from datetime import datetime, timedelta
from random import Random
from typing import Tuple, List

from faker import Faker
from sqlalchemy.orm import Session

from app.schemas.admin_seeds import SeedRequest, SeedResponse, SeedSummary
from app.models.masters import Customer, Product, Warehouse  # 例: 実際のモデル名に合わせて
from app.models.inventory import Lot                         # 例
from app.models.orders import Order, OrderLine, Allocation   # 例

def _choose(rng: Random, seq):
    return seq[rng.randrange(0, len(seq))]

def create_seed_data(db: Session, req: SeedRequest) -> SeedResponse:
    seed = req.seed if req.seed is not None else 42
    faker = Faker("ja_JP")
    faker.seed_instance(seed)
    rng = Random(seed)

    created_customers: List[Customer] = []
    created_products: List[Product] = []
    created_warehouses: List[Warehouse] = []
    created_lots: List[Lot] = []
    created_orders: List[Order] = []
    created_lines: List[OrderLine] = []
    created_allocs: List[Allocation] = []

    # 1) masters
    for _ in range(req.customers):
        c = Customer(
            code=f"C{faker.unique.numerify('####')}",
            name=faker.company(),
            created_at=datetime.utcnow(),
        )
        created_customers.append(c)
        if not req.dry_run:
            db.add(c)

    for _ in range(req.products):
        p = Product(
            code=f"P{faker.unique.numerify('#####')}",
            name=faker.bs().title(),
            unit="PCS",
            created_at=datetime.utcnow(),
        )
        created_products.append(p)
        if not req.dry_run:
            db.add(p)

    for _ in range(req.warehouses):
        w = Warehouse(
            code=f"W{faker.unique.numerify('##')}",
            name=f"{faker.city()}倉庫",
            created_at=datetime.utcnow(),
        )
        created_warehouses.append(w)
        if not req.dry_run:
            db.add(w)

    if not req.dry_run:
        db.flush()  # IDs 発番

    # 2) lots（在庫）
    for _ in range(req.lots):
        prod = _choose(rng, created_products) if created_products else None
        wh = _choose(rng, created_warehouses) if created_warehouses else None
        qty = rng.randint(5, 200)
        days = rng.randint(0, 360)
        l = Lot(
            product_id=prod.id if prod else None,
            warehouse_id=wh.id if wh else None,
            lot_no=faker.unique.bothify(text="LOT-########"),
            qty=qty,
            expiry_date=datetime.utcnow().date() + timedelta(days=360 - days),
            created_at=datetime.utcnow(),
        )
        created_lots.append(l)
        if not req.dry_run:
            db.add(l)

    if not req.dry_run:
        db.flush()

    # 3) orders & lines
    for _ in range(req.orders):
        cust = _choose(rng, created_customers) if created_customers else None
        wh = _choose(rng, created_warehouses) if created_warehouses else None
        o = Order(
            customer_id=cust.id if cust else None,
            warehouse_id=wh.id if wh else None,
            order_no=faker.unique.bothify(text="SO-########"),
            order_date=datetime.utcnow().date() - timedelta(days=rng.randint(0, 14)),
            created_at=datetime.utcnow(),
        )
        created_orders.append(o)
        if not req.dry_run:
            db.add(o)
        if not req.dry_run:
            db.flush()

        # ライン数 1-3
        for _line in range(rng.randint(1, 3)):
            prod = _choose(rng, created_products) if created_products else None
            req_qty = rng.randint(1, 50)
            line = OrderLine(
                order_id=o.id if not req.dry_run else None,
                product_id=prod.id if prod else None,
                requested_qty=req_qty,
                created_at=datetime.utcnow(),
            )
            created_lines.append(line)
            if not req.dry_run:
                db.add(line)
        if not req.dry_run:
            db.flush()

    # 4) allocations（ざっくり割当: ラインごとに在庫から割当）
    if not req.dry_run and created_lines and created_lots:
        lot_idx = 0
        for line in created_lines:
            remain = line.requested_qty
            while remain > 0 and lot_idx < len(created_lots):
                stock = created_lots[lot_idx]
                if stock.qty <= 0:
                    lot_idx += 1
                    continue
                use = min(remain, stock.qty)
                alloc = Allocation(
                    order_line_id=line.id,
                    lot_id=stock.id,
                    qty=use,
                    created_at=datetime.utcnow(),
                )
                created_allocs.append(alloc)
                db.add(alloc)
                stock.qty -= use
                remain -= use
            db.flush()

    if req.dry_run:
        # 何も書き込まない（プレビュー用）
        pass
    else:
        db.commit()

    return SeedResponse(
        dry_run=req.dry_run,
        seed=seed,
        summary=SeedSummary(
            customers=len(created_customers),
            products=len(created_products),
            warehouses=len(created_warehouses),
            lots=len(created_lots),
            orders=len(created_orders),
            order_lines=len(created_lines),
            allocations=len(created_allocs),
        ),
    )
