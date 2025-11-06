-- 再実行に耐える・CSV不足分を補完する・FK順守する版
SET client_encoding = 'UTF8';
SET search_path = public;

---------------------------
-- 0) 一時ステージング
---------------------------
DROP TABLE IF EXISTS stg_warehouses; 
CREATE TEMP TABLE stg_warehouses(
  warehouse_code text,
  warehouse_name text,
  is_active      boolean
);

DROP TABLE IF EXISTS stg_suppliers;
CREATE TEMP TABLE stg_suppliers(
  supplier_code  text,
  supplier_name  text
);

DROP TABLE IF EXISTS stg_products;
CREATE TEMP TABLE stg_products(
  product_code   text,
  product_name   text,
  base_unit      text,
  unit_price     numeric,
  supplier_code  text
);

DROP TABLE IF EXISTS stg_orders;
CREATE TEMP TABLE stg_orders(
  order_no       text,
  customer_code  text,
  order_date     date
);

DROP TABLE IF EXISTS stg_order_lines;
CREATE TEMP TABLE stg_order_lines(
  order_no       text,
  line_no        integer,
  product_code   text,
  quantity       numeric,
  unit           text,
  due_date       date
);

DROP TABLE IF EXISTS stg_lots;
CREATE TEMP TABLE stg_lots(
  supplier_code  text,
  product_code   text,
  lot_number     text,
  receipt_date   date,
  warehouse_code text,
  lot_unit       text
);

---------------------------
-- 1) CSV 取り込み (ファイル名は現状のまま)
---------------------------
\copy stg_warehouses(warehouse_code,warehouse_name,is_active) FROM '/tmp/seeds/warehouses.csv' CSV HEADER;
\copy stg_suppliers(supplier_code,supplier_name)               FROM '/tmp/seeds/suppliers.csv'  CSV HEADER;
\copy stg_products(product_code,product_name,base_unit,unit_price,supplier_code) FROM '/tmp/seeds/products.csv' CSV HEADER;

-- 旧ファイル名でも OK（orders テーブルに投入します）
\copy stg_orders(order_no,customer_code,order_date)            FROM '/tmp/seeds/order_headers.csv' CSV HEADER;
\copy stg_order_lines(order_no,line_no,product_code,quantity,unit,due_date) FROM '/tmp/seeds/order_lines.csv' CSV HEADER;

\copy stg_lots(supplier_code,product_code,lot_number,receipt_date,warehouse_code,lot_unit) FROM '/tmp/seeds/lots_stage.csv' CSV HEADER;

---------------------------
-- 2) masters UPSERT
---------------------------
-- warehouses: 既存は更新、未存在は挿入
INSERT INTO warehouses(warehouse_code, warehouse_name, is_active)
SELECT
  w.warehouse_code,
  COALESCE(w.warehouse_name, w.warehouse_code) AS warehouse_name,
  COALESCE(w.is_active, true) AS is_active
FROM stg_warehouses w
ON CONFLICT (warehouse_code)
DO UPDATE SET warehouse_name = EXCLUDED.warehouse_name,
              is_active     = EXCLUDED.is_active;

-- suppliers: name が無ければ code を入れる
INSERT INTO suppliers(supplier_code, supplier_name)
SELECT
  s.supplier_code,
  COALESCE(s.supplier_name, s.supplier_code) AS supplier_name
FROM stg_suppliers s
WHERE s.supplier_code IS NOT NULL
ON CONFLICT (supplier_code)
DO UPDATE SET supplier_name = EXCLUDED.supplier_name;

-- products: NOT NULL を補完
INSERT INTO products(product_code, product_name, base_unit, unit_price, supplier_code)
SELECT
  p.product_code,
  COALESCE(p.product_name, p.product_code) AS product_name,
  COALESCE(NULLIF(p.base_unit,''), 'EA')   AS base_unit,
  COALESCE(p.unit_price, 0)                AS unit_price,
  NULLIF(p.supplier_code,'')               AS supplier_code
FROM stg_products p
WHERE p.product_code IS NOT NULL
ON CONFLICT (product_code)
DO UPDATE SET product_name  = EXCLUDED.product_name,
              base_unit    = EXCLUDED.base_unit,
              unit_price   = EXCLUDED.unit_price,
              supplier_code= EXCLUDED.supplier_code;

---------------------------
-- 3) orders / order_lines
---------------------------
-- orders は自然キーを order_no と仮定（必要に応じて修正）
INSERT INTO orders(order_no, customer_code, order_date)
SELECT o.order_no, o.customer_code, COALESCE(o.order_date, CURRENT_DATE)
FROM stg_orders o
WHERE o.order_no IS NOT NULL
ON CONFLICT (order_no)
DO UPDATE SET customer_code = EXCLUDED.customer_code,
              order_date    = EXCLUDED.order_date;

-- line_no が空なら生成（order_no ごとに 1,2,3...）
WITH gen AS (
  SELECT
    ol.order_no,
    COALESCE(ol.line_no, ROW_NUMBER() OVER (PARTITION BY ol.order_no ORDER BY ol.product_code, ol.due_date NULLS LAST)) AS line_no,
    ol.product_code,
    COALESCE(ol.quantity,0) AS quantity,
    COALESCE(NULLIF(ol.unit,''),'EA') AS unit,
    ol.due_date
  FROM stg_order_lines ol
)
INSERT INTO order_lines(order_no, line_no, product_code, quantity, unit, due_date)
SELECT g.order_no, g.line_no, g.product_code, g.quantity, g.unit, g.due_date
FROM gen g
WHERE g.order_no IS NOT NULL AND g.product_code IS NOT NULL
ON CONFLICT (order_no, line_no)
DO UPDATE SET product_code = EXCLUDED.product_code,
              quantity     = EXCLUDED.quantity,
              unit         = EXCLUDED.unit,
              due_date     = EXCLUDED.due_date;

---------------------------
-- 4) lots（コード→ID解決して UPSERT）
---------------------------
-- lots の一意制約は (supplier_code, product_code, lot_number) を想定
-- あなたの制約名が違う場合は ON CONFLICT (...) に合わせて修正してください
INSERT INTO lots(supplier_code, product_code, lot_number, receipt_date, warehouse_id, lot_unit)
SELECT
  l.supplier_code,
  l.product_code,
  l.lot_number,
  COALESCE(l.receipt_date, CURRENT_DATE),
  w.id AS warehouse_id,
  COALESCE(NULLIF(l.lot_unit,''), 'EA') AS lot_unit
FROM stg_lots l
JOIN warehouses w ON w.warehouse_code = l.warehouse_code
JOIN products   p ON p.product_code   = l.product_code
ON CONFLICT (supplier_code, product_code, lot_number)
DO UPDATE SET receipt_date = EXCLUDED.receipt_date,
              warehouse_id = EXCLUDED.warehouse_id,
              lot_unit     = EXCLUDED.lot_unit;

-- 任意：現在庫の初期化例（行が無ければ 0 で用意）
-- INSERT INTO lot_current_stock(lot_id, current_quantity)
-- SELECT id, 0 FROM lots
-- ON CONFLICT (lot_id) DO NOTHING;
