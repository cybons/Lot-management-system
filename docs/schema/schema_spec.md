# スキーマ仕様書（最終）

*対象: /docs/schema/er_diagram.svg に対応した Postgres スキーマ*

## 共通
- 数量型は原則 `NUMERIC(15,4)`、`lot_current_stock.current_quantity` は集計のため `double precision`
- 監査系: `created_at, updated_at, created_by, updated_by, deleted_at, revision`

## テーブル定義

### customers
- 説明: 得意先マスタ
- カラム:
  - `customer_code` text NOT NULL … 得意先コード（PK/UK）
  - `customer_name` text NOT NULL … 得意先名称
  - `address` text … 住所
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `id` integer NOT NULL … 主キー（自動採番）

### suppliers
- 説明: 仕入先マスタ
- カラム:
  - `supplier_code` text NOT NULL … 仕入先コード（PK/UK）
  - `supplier_name` text NOT NULL … 仕入先名称
  - `address` text … 住所
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `id` integer NOT NULL … 主キー（自動採番）

### products
- 説明: 商品マスタ
- カラム:
  - `product_code` text NOT NULL … 製品コード（社内品番, PK/UK）
  - `product_name` text NOT NULL … 製品名称
  - `customer_part_no` text … 先方品番（得意先側品番）
  - `maker_item_code` text … メーカー品番（製造元品番）
  - `internal_unit` text NOT NULL … 内部管理単位（在庫基準単位）
  - `assemble_div` text … 組立区分（将来拡張）
  - `next_div` text … NEXT区分（得意先出荷時の区分、必要に応じ使用）
  - `shelf_life_days` integer … 想定賞味/有効日数
  - `requires_lot_number` integer … ロット必須フラグ（0/1）
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `base_unit` character varying(10) DEFAULT 'EA'::character varying NOT NULL … 基本単位（例: EA）
  - `packaging_qty` numeric(10,2) DEFAULT '1'::numeric NOT NULL … 包装数量（1箱あたり数量等）
  - `packaging_unit` character varying(20) DEFAULT 'EA'::character varying NOT NULL … 包装単位
  - `supplier_item_code` character varying … 仕入先側の品番
  - `delivery_place_id` integer … デフォルト納入場所ID（FK: delivery_places.id）
  - `ji_ku_text` character varying … 事業区分テキスト（任意メタ）
  - `kumitsuke_ku_text` character varying … 組付区分テキスト（任意メタ）
  - `delivery_place_name` character varying
  - `shipping_warehouse_name` character varying
  - `id` integer NOT NULL … 主キー（自動採番）
  - `supplier_id` integer … 主要仕入先ID（FK: suppliers.id）

### warehouses
- 説明: 倉庫マスタ（保管拠点）
- カラム:
  - `warehouse_code` text NOT NULL … 倉庫コード（UK）
  - `warehouse_name` text NOT NULL … 倉庫名称
  - `address` text … 住所
  - `is_active` boolean DEFAULT true NOT NULL … 有効フラグ（1=有効,0=無効）
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `id` integer NOT NULL … 主キー（自動採番）

### delivery_places
- 説明: 納入場所マスタ（配送先情報）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `delivery_place_code` character varying NOT NULL … 納入場所コード（UK）
  - `delivery_place_name` character varying NOT NULL … 納入場所名称
  - `address` character varying … 住所
  - `postal_code` character varying … 郵便番号
  - `is_active` boolean DEFAULT true NOT NULL … 有効フラグ（1=有効,0=無効）
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号

### orders
- 説明: 受注ヘッダ
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `order_no` text NOT NULL … 受注番号（外部連携ID等）
  - `order_date` date NOT NULL … 受注日
  - `status` text NOT NULL … 受注ステータス
  - `sap_order_id` text … SAP側受注番号（登録後）
  - `sap_status` text … SAP連携状態
  - `sap_sent_at` timestamp without time zone … SAP送信日時
  - `sap_error_msg` text … SAP連携エラー内容
  - `created_at` timestamp without time zone … レコード作成日時
  - `updated_at` timestamp without time zone … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `customer_order_no` text … 先方注文番号（原票）
  - `delivery_mode` text
  - `customer_id` integer … 得意先ID（FK: customers.id）
  - `customer_order_no_last6` character varying(6) GENERATED ALWAYS AS ("right"(customer_order_no, 6)) STORED
- CHECK制約:
  - CONSTRAINT ck_orders_delivery_mode CHECK (((delivery_mode IS NULL) OR (delivery_mode = ANY (ARRAY['normal'::text, 'express'::text, 'pickup'::text]))))
  - CONSTRAINT ck_orders_status CHECK ((status = ANY (ARRAY['draft'::text, 'confirmed'::text, 'shipped'::text, 'closed'::text])))

### order_lines
- 説明: 受注明細
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `order_id` integer NOT NULL … 受注ID（FK: orders.id）
  - `line_no` integer NOT NULL … 明細行番号
  - `quantity` numeric(15,4) NOT NULL … 受注数量
  - `unit` text … 単位
  - `created_at` timestamp without time zone … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `product_id` integer … 製品ID（将来変更用：FK想定）

### order_line_warehouse_allocation
- 説明: 受注明細×倉庫の引当（複数倉庫対応中間）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `order_line_id` integer NOT NULL … 受注明細ID（FK: order_lines.id）
  - `warehouse_id` integer NOT NULL … 倉庫ID（FK: warehouses.id）
  - `quantity` numeric(15,4) NOT NULL … 倉庫別引当数量
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
- CHECK制約:
  - CONSTRAINT ck_olwa_quantity_positive CHECK (((quantity)::double precision > (0)::double precision))

### lots
- 説明: ロットマスタ（入庫実績由来のトレーサビリティ情報）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `lot_number` text NOT NULL … ロット番号（手動/外部入力）
  - `receipt_date` date NOT NULL … 入庫日
  - `mfg_date` date … 製造日
  - `expiry_date` date … 有効期限
  - `kanban_class` text … かんばん区分
  - `sales_unit` text
  - `inventory_unit` text
  - `received_by` text … 入庫担当者
  - `source_doc` text
  - `qc_certificate_status` text
  - `qc_certificate_file` text
  - `created_at` timestamp without time zone … レコード作成日時
  - `updated_at` timestamp without time zone … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `warehouse_code_old` text
  - `lot_unit` character varying(10)
  - `is_locked` boolean DEFAULT false NOT NULL
  - `lock_reason` text
  - `inspection_date` date
  - `inspection_result` text
  - `warehouse_id` integer … 保管倉庫ID（FK: warehouses.id）
  - `product_id` integer … 製品ID（FK: products.id）
  - `supplier_id` integer … 仕入先ID（FK: suppliers.id）

### stock_movements
- 説明: 在庫移動履歴（入出庫/移動/調整/廃棄）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `lot_id` integer … ロットID（FK: lots.id）
  - `reason` text NOT NULL … 移動理由（inbound/outbound/transfer/adjustment/scrap）
  - `quantity_delta` numeric(15,4) NOT NULL … 数量増減（正=入庫、負=出庫）
  - `occurred_at` timestamp without time zone … 発生日時
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `warehouse_id` integer NOT NULL … 倉庫ID（FK: warehouses.id）
  - `source_table` character varying(50) … 参照元テーブル名（追跡用）
  - `source_id` integer … 参照元レコードID（追跡用）
  - `batch_id` character varying(100) … バッチ処理単位の識別子
  - `product_id` integer NOT NULL … 製品ID（FK候補：products.product_code/id）

### allocations
- 説明: 受注明細へのロット引当情報
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `order_line_id` integer NOT NULL … 受注明細ID（FK: order_lines.id）
  - `lot_id` integer NOT NULL … ロットID（FK: lots.id）
  - `allocated_qty` double precision NOT NULL … 引当数量
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `destination_id` integer … 納入場所ID（FK: delivery_places.id）

### forecasts
- 説明: 需要予測（DELFOR等のEDI受信データ）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `forecast_id` character varying(36) NOT NULL … 外部予測ID（一意）
  - `granularity` character varying(16) NOT NULL … 粒度（daily/weekly/dekadなど）
  - `date_day` date … 日次キー（granularity=daily時）
  - `date_dekad_start` date … 旬開始日キー（granularity=dekad時）
  - `year_month` character varying(7) … 月次キー（YYYY-MM, granularity=monthly時）
  - `qty_forecast` integer NOT NULL … 予測数量
  - `version_no` integer NOT NULL … 版番号（同一期間内の差替管理）
  - `version_issued_at` timestamp with time zone NOT NULL … 版の発行日時（受信基準時刻）
  - `source_system` character varying(32) NOT NULL … 受信元システム識別子
  - `is_active` boolean NOT NULL … 有効版フラグ
  - `created_at` timestamp with time zone NOT NULL … レコード作成日時
  - `updated_at` timestamp with time zone NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `product_id` integer NOT NULL … 製品ID/または製品コード
  - `customer_id` integer NOT NULL … 得意先ID（FK: customers.*）/または得意先コード
- CHECK制約:
  - CONSTRAINT ck_forecast_granularity CHECK (((granularity)::text = ANY (ARRAY[('daily'::character varying)::text, ('dekad'::character varying)::text, ('monthly'::character varying)::text])))
  - CONSTRAINT ck_forecast_period_key_exclusivity CHECK (((((granularity)::text = 'daily'::text) AND (date_day IS NOT NULL) AND (date_dekad_start IS NULL) AND (year_month IS NULL)) OR (((granularity)::text = 'dekad'::text) AND (date_dekad_start IS NOT NULL) AND (date_day IS NULL) AND (year_month IS NULL)) OR (((granularity)::text = 'monthly'::text) AND (year_month IS NOT NULL) AND (date_day IS NULL) AND (date_dekad_start IS NULL))))
  - CONSTRAINT ck_forecast_qty_nonneg CHECK ((qty_forecast >= 0))

### expiry_rules
- 説明: 有効期限ルール定義（製品/仕入先ごと）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `rule_type` text NOT NULL … ルール種別（days/fixed_date）
  - `days` integer … 有効日数（製造日から）
  - `fixed_date` date … 固定日付
  - `is_active` boolean DEFAULT true NOT NULL … 有効フラグ
  - `priority` integer NOT NULL … 優先順位（小さいほど優先）
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `product_id` integer … 製品ID（FK: products.id / NULL=全製品）
  - `supplier_id` integer … 仕入先ID（FK: suppliers.id / NULL=全仕入先）

### unit_conversions
- 説明: 単位換算マスタ（入出力単位 ⇔ 内部単位）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `from_unit` character varying(10) NOT NULL … 変換元単位
  - `to_unit` character varying(10) NOT NULL … 変換先単位
  - `factor` numeric(10,4) NOT NULL … 換算係数（1 from_unit = factor to_unit）
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `product_id` integer NOT NULL … 製品ID（FK: products.id / NULL=グローバル定義）

### inbound_submissions
- 説明: 外部入力の受信単位（OCR/EDI/手動等）のトラッキング
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `submission_id` text … 受信側の一意識別子（重複防止）
  - `source_uri` text … 受信ソースURI（ファイル名/パス/URL等）
  - `source` character varying(20) DEFAULT 'ocr'::character varying NOT NULL … 入力経路（ocr/manual/edi等）
  - `operator` text … 操作者（ユーザーIDまたはロボ名）
  - `submission_date` timestamp without time zone … 受信日時
  - `status` text … 処理状態（pending/success/failed等）
  - `total_records` integer … 受信レコード総数
  - `processed_records` integer … 処理済み件数
  - `failed_records` integer … 失敗件数
  - `skipped_records` integer … スキップ件数
  - `error_details` text … エラー詳細（テキスト/JSON可）
  - `created_at` timestamp without time zone … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
- CHECK制約:
  - CONSTRAINT ck_inbound_submissions_source CHECK (((source)::text = ANY (ARRAY[('ocr'::character varying)::text, ('manual'::character varying)::text, ('edi'::character varying)::text])))

### sap_sync_logs
- 説明: SAP連携の実行ログ（送信ペイロードと結果）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `order_id` integer … 対象受注ID（FK: orders.id）
  - `payload` text … 送信ペイロード（JSON文字列）
  - `result` text … 応答内容（JSON文字列）
  - `status` text … 連携状態（pending/success/failed/retry等）
  - `executed_at` timestamp without time zone … 連携実行日時
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号

### lot_current_stock
- 説明: ロット別現在庫数（1ロット=1行の集計値）
- カラム:
  - `lot_id` integer NOT NULL … ロットID（PK/FK: lots.id）
  - `current_quantity` double precision NOT NULL … 現在庫数量（入庫-出庫-引当の計算結果）
  - `last_updated` timestamp without time zone … 最終更新日時
  - `created_at` timestamp without time zone DEFAULT now() NOT NULL … レコード作成日時
  - `updated_at` timestamp without time zone DEFAULT now() NOT NULL … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号

### purchase_requests
- 説明: 購買依頼（補充や手配の内部起票）
- カラム:
  - `id` integer NOT NULL … 主キー（自動採番）
  - `requested_qty` double precision NOT NULL … 依頼数量
  - `unit` text … 単位
  - `reason_code` text NOT NULL … 依頼理由コード
  - `src_order_line_id` integer … 起点受注明細ID（FK: order_lines.id）
  - `requested_date` date … 依頼日
  - `desired_receipt_date` date … 希望入庫日
  - `status` text … 状態
  - `sap_po_id` text … SAP発注番号（連携後）
  - `notes` text … 備考
  - `created_at` timestamp without time zone … レコード作成日時
  - `updated_at` timestamp without time zone … レコード更新日時
  - `created_by` character varying(50) … 作成者
  - `updated_by` character varying(50) … 更新者
  - `deleted_at` timestamp without time zone … 論理削除日時
  - `revision` integer DEFAULT 1 NOT NULL … 楽観的ロック用リビジョン番号
  - `product_id` integer … 製品ID（FK: products.id）
  - `supplier_id` integer … 仕入先ID（FK: suppliers.id）

### alembic_version
- 説明: Alembicの現在リビジョンを保持する内部管理テーブル
- カラム:
  - `version_num` character varying(32) NOT NULL … Alembic リビジョン番号（現在HEAD）

