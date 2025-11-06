\set ON_ERROR_STOP on

BEGIN;

-- サマリ収集用テーブル
DROP TABLE IF EXISTS seed_results;
CREATE TEMP TABLE seed_results(
  stage text PRIMARY KEY,
  inserted_count integer DEFAULT 0,
  updated_count integer DEFAULT 0,
  skipped_count integer DEFAULT 0,
  note text
) ON COMMIT DROP;

-- ステージングテーブル
DROP TABLE IF EXISTS stg_warehouses;
CREATE TEMP TABLE stg_warehouses(
  warehouse_code text,
  warehouse_name text,
  is_active integer
) ON COMMIT DROP;

DROP TABLE IF EXISTS stg_suppliers;
CREATE TEMP TABLE stg_suppliers(
  supplier_code text
) ON COMMIT DROP;

DROP TABLE IF EXISTS stg_products;
CREATE TEMP TABLE stg_products(
  product_code text,
  base_unit text
) ON COMMIT DROP;

DROP TABLE IF EXISTS stg_orders;
CREATE TEMP TABLE stg_orders(
  order_no text,
  customer_code text,
  order_date date
) ON COMMIT DROP;

DROP TABLE IF EXISTS stg_order_lines;
CREATE TEMP TABLE stg_order_lines(
  line_no integer,
  order_no text,
  product_code text,
  quantity numeric,
  unit text,
  due_date date
) ON COMMIT DROP;

DROP TABLE IF EXISTS stg_lots;
CREATE TEMP TABLE stg_lots(
  supplier_code text,
  product_code text,
  lot_number text,
  receipt_date date,
  warehouse_code text,
  lot_unit text
) ON COMMIT DROP;

---------------------------
-- 1) CSV 取り込み
---------------------------
\copy stg_warehouses(warehouse_code, warehouse_name, is_active) FROM '/tmp/seeds/warehouses.csv' CSV HEADER;
\copy stg_suppliers(supplier_code) FROM '/tmp/seeds/suppliers.csv' CSV HEADER;
\copy stg_products(product_code, base_unit) FROM '/tmp/seeds/products.csv' CSV HEADER;
\copy stg_orders(order_no, customer_code, order_date) FROM '/tmp/seeds/order_headers.csv' CSV HEADER;
\copy stg_order_lines(line_no, order_no, product_code, quantity, unit) FROM '/tmp/seeds/order_lines.csv' CSV HEADER;
\copy stg_lots(supplier_code, product_code, lot_number, receipt_date, warehouse_code, lot_unit) FROM '/tmp/seeds/lots_stage.csv' CSV HEADER;

---------------------------
-- 2) マスタ投入
---------------------------
-- warehouses
WITH stage_total AS (
       SELECT COUNT(*) AS cnt FROM stg_warehouses
     ),
     src AS (
       SELECT
         NULLIF(trim(warehouse_code), '') AS warehouse_code,
         NULLIF(trim(warehouse_name), '') AS warehouse_name,
         CASE
           WHEN is_active IN (0, 1) THEN is_active
           WHEN is_active IS NULL THEN 1
           ELSE 1
         END AS is_active
       FROM stg_warehouses
     ),
     upsert AS (
       INSERT INTO warehouses(warehouse_code, warehouse_name, is_active)
       SELECT
         s.warehouse_code,
         COALESCE(s.warehouse_name, s.warehouse_code) AS warehouse_name,
         COALESCE(s.is_active, 1) AS is_active
       FROM src s
       WHERE s.warehouse_code IS NOT NULL
       ON CONFLICT (warehouse_code)
       DO UPDATE SET warehouse_name = EXCLUDED.warehouse_name,
                     is_active     = EXCLUDED.is_active
       RETURNING (xmax = 0) AS inserted
     ),
     agg AS (
       SELECT
         COALESCE(SUM(CASE WHEN inserted THEN 1 ELSE 0 END), 0) AS inserted_count,
         COALESCE(SUM(CASE WHEN inserted THEN 0 ELSE 1 END), 0) AS updated_count
       FROM upsert
     )
INSERT INTO seed_results(stage, inserted_count, updated_count, skipped_count, note)
SELECT
  'warehouses',
  agg.inserted_count,
  agg.updated_count,
  stage_total.cnt - (agg.inserted_count + agg.updated_count) AS skipped_count,
  CASE
    WHEN stage_total.cnt - (agg.inserted_count + agg.updated_count) > 0
      THEN (stage_total.cnt - (agg.inserted_count + agg.updated_count)) || ' rows skipped due to missing warehouse_code'
  END AS note
FROM agg, stage_total;

-- suppliers
WITH stage_total AS (
       SELECT COUNT(*) AS cnt FROM stg_suppliers
     ),
     src AS (
       SELECT NULLIF(trim(supplier_code), '') AS supplier_code
       FROM stg_suppliers
     ),
     upsert AS (
       INSERT INTO suppliers(supplier_code, supplier_name)
       SELECT
         s.supplier_code,
         s.supplier_code AS supplier_name
       FROM src s
       WHERE s.supplier_code IS NOT NULL
       ON CONFLICT (supplier_code)
       DO UPDATE SET supplier_name = EXCLUDED.supplier_name
       RETURNING (xmax = 0) AS inserted
     ),
     agg AS (
       SELECT
         COALESCE(SUM(CASE WHEN inserted THEN 1 ELSE 0 END), 0) AS inserted_count,
         COALESCE(SUM(CASE WHEN inserted THEN 0 ELSE 1 END), 0) AS updated_count
       FROM upsert
     )
INSERT INTO seed_results(stage, inserted_count, updated_count, skipped_count, note)
SELECT
  'suppliers',
  agg.inserted_count,
  agg.updated_count,
  stage_total.cnt - (agg.inserted_count + agg.updated_count) AS skipped_count,
  CASE
    WHEN stage_total.cnt - (agg.inserted_count + agg.updated_count) > 0
      THEN (stage_total.cnt - (agg.inserted_count + agg.updated_count)) || ' rows skipped due to missing supplier_code'
  END AS note
FROM agg, stage_total;

-- products
WITH stage_total AS (
       SELECT COUNT(*) AS cnt FROM stg_products
     ),
     src AS (
       SELECT
         NULLIF(trim(product_code), '') AS product_code,
         NULLIF(trim(base_unit), '')    AS base_unit
       FROM stg_products
     ),
    upsert AS (
      INSERT INTO products(
        product_code,
        product_name,
        internal_unit,
        base_unit,
        supplier_code
      )
      SELECT
        s.product_code,
        s.product_code AS product_name,
        COALESCE(s.base_unit, 'EA') AS internal_unit,
        COALESCE(s.base_unit, 'EA') AS base_unit,
        NULL::text AS supplier_code
      FROM src s
      WHERE s.product_code IS NOT NULL
      ON CONFLICT (product_code)
      DO UPDATE SET product_name  = EXCLUDED.product_name,
                    internal_unit = EXCLUDED.internal_unit,
                    base_unit     = EXCLUDED.base_unit
      RETURNING (xmax = 0) AS inserted
     ),
     agg AS (
       SELECT
         COALESCE(SUM(CASE WHEN inserted THEN 1 ELSE 0 END), 0) AS inserted_count,
         COALESCE(SUM(CASE WHEN inserted THEN 0 ELSE 1 END), 0) AS updated_count
       FROM upsert
     )
INSERT INTO seed_results(stage, inserted_count, updated_count, skipped_count, note)
SELECT
  'products',
  agg.inserted_count,
  agg.updated_count,
  stage_total.cnt - (agg.inserted_count + agg.updated_count) AS skipped_count,
  CASE
    WHEN stage_total.cnt - (agg.inserted_count + agg.updated_count) > 0
      THEN (stage_total.cnt - (agg.inserted_count + agg.updated_count)) || ' rows skipped due to missing product_code'
  END AS note
FROM agg, stage_total;

---------------------------
-- 3) 受注データ
---------------------------
-- orders
WITH stage_total AS (
       SELECT COUNT(*) AS cnt FROM stg_orders
     ),
     src AS (
       SELECT
         NULLIF(trim(order_no), '') AS order_no,
         COALESCE(NULLIF(trim(customer_code), ''), 'UNKNOWN') AS customer_code,
         order_date
       FROM stg_orders
     ),
     upsert AS (
       INSERT INTO orders(order_no, customer_code, order_date)
       SELECT
         s.order_no,
         s.customer_code,
         COALESCE(s.order_date, CURRENT_DATE)
       FROM src s
       WHERE s.order_no IS NOT NULL
       ON CONFLICT (order_no)
       DO UPDATE SET customer_code = EXCLUDED.customer_code,
                     order_date    = EXCLUDED.order_date
       RETURNING (xmax = 0) AS inserted
     ),
     agg AS (
       SELECT
         COALESCE(SUM(CASE WHEN inserted THEN 1 ELSE 0 END), 0) AS inserted_count,
         COALESCE(SUM(CASE WHEN inserted THEN 0 ELSE 1 END), 0) AS updated_count
       FROM upsert
     )
INSERT INTO seed_results(stage, inserted_count, updated_count, skipped_count, note)
SELECT
  'orders',
  agg.inserted_count,
  agg.updated_count,
  stage_total.cnt - (agg.inserted_count + agg.updated_count) AS skipped_count,
  CASE
    WHEN stage_total.cnt - (agg.inserted_count + agg.updated_count) > 0
      THEN (stage_total.cnt - (agg.inserted_count + agg.updated_count)) || ' rows skipped due to missing order_no'
  END AS note
FROM agg, stage_total;

-- 注文番号 -> order_id マッピング
DROP TABLE IF EXISTS order_map;
CREATE TEMP TABLE order_map ON COMMIT DROP AS
SELECT o.order_no, o.id
FROM orders o
JOIN (
  SELECT DISTINCT NULLIF(trim(order_no), '') AS order_no
  FROM (
    SELECT order_no FROM stg_orders
    UNION ALL
    SELECT order_no FROM stg_order_lines
  ) q
  WHERE NULLIF(trim(order_no), '') IS NOT NULL
) s ON s.order_no = o.order_no;

-- order_lines
WITH stage_total AS (
       SELECT COUNT(*) AS cnt FROM stg_order_lines
     ),
     normalized AS (
       SELECT
         NULLIF(trim(ol.order_no), '') AS order_no,
         ol.line_no,
         NULLIF(trim(ol.product_code), '') AS product_code,
         ol.quantity,
         NULLIF(trim(ol.unit), '') AS unit,
         ol.due_date
       FROM stg_order_lines ol
     ),
     missing_order_keys AS (
       SELECT COUNT(*) AS cnt
       FROM normalized
       WHERE order_no IS NULL
     ),
     with_orders AS (
       SELECT
         n.order_no,
         om.id AS order_id,
         n.line_no,
         n.product_code,
         n.quantity,
         n.unit,
         n.due_date
       FROM normalized n
       LEFT JOIN order_map om ON om.order_no = n.order_no
     ),
     missing_orders AS (
       SELECT COUNT(*) AS cnt
       FROM with_orders
       WHERE order_id IS NULL AND order_no IS NOT NULL
     ),
     ordered_lines AS (
       SELECT
         wo.order_id,
         wo.order_no,
         CASE
           WHEN wo.line_no IS NOT NULL THEN wo.line_no
           ELSE ROW_NUMBER() OVER (
                  PARTITION BY wo.order_no
                  ORDER BY COALESCE(wo.product_code, ''), wo.due_date NULLS LAST, COALESCE(wo.unit, ''), COALESCE(wo.quantity, 0)
                )
         END AS line_no,
         wo.product_code,
         COALESCE(wo.quantity, 0)::double precision AS quantity,
         COALESCE(wo.unit, 'EA') AS unit,
         wo.due_date
       FROM with_orders wo
       WHERE wo.order_id IS NOT NULL
     ),
     with_products AS (
       SELECT
         ol.order_id,
         ol.line_no,
         ol.product_code,
         ol.quantity,
         ol.unit,
         ol.due_date,
         p.product_code AS matched_product
       FROM ordered_lines ol
       LEFT JOIN products p ON p.product_code = ol.product_code
     ),
     missing_products AS (
       SELECT COUNT(*) AS cnt
       FROM with_products
       WHERE matched_product IS NULL AND product_code IS NOT NULL
     ),
     valid AS (
       SELECT
         wp.order_id,
         wp.line_no,
         wp.product_code,
         wp.quantity,
         wp.unit,
         wp.due_date
       FROM with_products wp
       WHERE wp.matched_product IS NOT NULL
     ),
     upsert AS (
       INSERT INTO order_lines(order_id, line_no, product_code, quantity, unit, due_date)
       SELECT
         v.order_id,
         v.line_no,
         v.product_code,
         v.quantity,
         v.unit,
         v.due_date
       FROM valid v
       ON CONFLICT (order_id, line_no)
       DO UPDATE SET product_code = EXCLUDED.product_code,
                     quantity     = EXCLUDED.quantity,
                     unit         = EXCLUDED.unit,
                     due_date     = EXCLUDED.due_date
       RETURNING (xmax = 0) AS inserted
     ),
     agg AS (
       SELECT
         COALESCE(SUM(CASE WHEN inserted THEN 1 ELSE 0 END), 0) AS inserted_count,
         COALESCE(SUM(CASE WHEN inserted THEN 0 ELSE 1 END), 0) AS updated_count
       FROM upsert
     ),
     skipped AS (
       SELECT
         stage_total.cnt - (agg.inserted_count + agg.updated_count) AS skipped_count,
         missing_orders.cnt AS missing_orders,
         missing_products.cnt AS missing_products,
         missing_order_keys.cnt AS missing_order_keys
       FROM stage_total, agg, missing_orders, missing_products, missing_order_keys
      )
INSERT INTO seed_results(stage, inserted_count, updated_count, skipped_count, note)
SELECT
  'order_lines',
  agg.inserted_count,
  agg.updated_count,
  skipped.skipped_count,
  CASE
    WHEN skipped.skipped_count > 0 THEN CONCAT_WS('; ',
         CASE WHEN skipped.missing_order_keys > 0 THEN skipped.missing_order_keys || ' rows skipped (order_no missing)' END,
         CASE WHEN skipped.missing_orders > 0 THEN skipped.missing_orders || ' rows skipped (order not found)' END,
         CASE WHEN skipped.missing_products > 0 THEN skipped.missing_products || ' rows skipped (product not found)' END
       )
  END AS note
FROM agg, skipped;

---------------------------
-- 4) ロットデータ
---------------------------
WITH stage_total AS (
       SELECT COUNT(*) AS cnt FROM stg_lots
     ),
     resolved AS (
       SELECT
         NULLIF(trim(l.supplier_code), '') AS supplier_code,
         NULLIF(trim(l.product_code), '')  AS product_code,
         NULLIF(trim(l.lot_number), '')    AS lot_number,
         COALESCE(l.receipt_date, CURRENT_DATE) AS receipt_date,
         NULLIF(trim(l.warehouse_code), '') AS warehouse_code,
         COALESCE(NULLIF(trim(l.lot_unit), ''), 'EA') AS lot_unit,
         w.id AS warehouse_id,
         w.id IS NULL AS missing_warehouse,
         p.product_code IS NULL AS missing_product,
         s.supplier_code IS NULL AS missing_supplier
       FROM stg_lots l
       LEFT JOIN warehouses w ON w.warehouse_code = NULLIF(trim(l.warehouse_code), '')
       LEFT JOIN products   p ON p.product_code   = NULLIF(trim(l.product_code), '')
       LEFT JOIN suppliers  s ON s.supplier_code  = NULLIF(trim(l.supplier_code), '')
     ),
     valid AS (
       SELECT
         r.supplier_code,
         r.product_code,
         r.lot_number,
         r.receipt_date,
         r.warehouse_code,
         r.warehouse_id,
         r.lot_unit
       FROM resolved r
       WHERE r.supplier_code IS NOT NULL
         AND r.product_code IS NOT NULL
         AND r.lot_number IS NOT NULL
         AND r.warehouse_id IS NOT NULL
         AND NOT r.missing_product
         AND NOT r.missing_supplier
     ),
     upsert AS (
       INSERT INTO lots(supplier_code, product_code, lot_number, receipt_date, warehouse_code, warehouse_id, lot_unit)
       SELECT
         v.supplier_code,
         v.product_code,
         v.lot_number,
         v.receipt_date,
         v.warehouse_code,
         v.warehouse_id,
         v.lot_unit
       FROM valid v
       ON CONFLICT ON CONSTRAINT uq_lot_supplier_product_no
       DO UPDATE SET receipt_date = EXCLUDED.receipt_date,
                     warehouse_code = EXCLUDED.warehouse_code,
                     warehouse_id   = EXCLUDED.warehouse_id,
                     lot_unit       = EXCLUDED.lot_unit
       RETURNING (xmax = 0) AS inserted
     ),
     agg AS (
       SELECT
         COALESCE(SUM(CASE WHEN inserted THEN 1 ELSE 0 END), 0) AS inserted_count,
         COALESCE(SUM(CASE WHEN inserted THEN 0 ELSE 1 END), 0) AS updated_count
       FROM upsert
     ),
    missing_summary AS (
      SELECT
        COALESCE(SUM(CASE WHEN missing_warehouse THEN 1 ELSE 0 END), 0) AS missing_warehouse,
        COALESCE(SUM(CASE WHEN missing_product THEN 1 ELSE 0 END), 0)   AS missing_product,
        COALESCE(SUM(CASE WHEN missing_supplier THEN 1 ELSE 0 END), 0)  AS missing_supplier
      FROM resolved
     ),
     skipped AS (
       SELECT
         stage_total.cnt - (agg.inserted_count + agg.updated_count) AS skipped_count,
         missing_summary.missing_warehouse,
         missing_summary.missing_product,
         missing_summary.missing_supplier
       FROM stage_total, agg, missing_summary
     )
INSERT INTO seed_results(stage, inserted_count, updated_count, skipped_count, note)
SELECT
  'lots',
  agg.inserted_count,
  agg.updated_count,
  skipped.skipped_count,
  CASE
    WHEN skipped.skipped_count > 0 THEN CONCAT_WS('; ',
         CASE WHEN skipped.missing_warehouse > 0 THEN skipped.missing_warehouse || ' rows skipped (warehouse not found)' END,
         CASE WHEN skipped.missing_product > 0 THEN skipped.missing_product || ' rows skipped (product not found)' END,
         CASE WHEN skipped.missing_supplier > 0 THEN skipped.missing_supplier || ' rows skipped (supplier not found)' END
       )
  END AS note
FROM agg, skipped;

---------------------------
-- 5) サマリ
---------------------------
SELECT stage, inserted_count, updated_count, skipped_count, COALESCE(note, '') AS note
FROM seed_results
ORDER BY stage;

COMMIT;
