[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [lib/api](../README.md) / api

# Variable: api

> `const` **api**: `object`

Defined in: [src/lib/api.ts:8](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/api.ts#L8)

## Type Declaration

### bulkImportForecast()

> **bulkImportForecast**: (`data`) => `Promise`\<\{ `error_count`: `number`; `error_details?`: `string` \| `null`; `imported_count`: `number`; `message`: `string`; `skipped_count`: `number`; `success`: `boolean`; `version_no`: `number`; \}\>

予測一括インポート

#### Parameters

##### data

###### deactivate_old_version

`boolean`

Deactivate Old Version

**Default**

```ts
true;
```

###### forecasts

`object`[]

Forecasts

###### source_system

`string`

Source System

**Default**

```ts
external;
```

###### version_issued_at

`string`

Version Issued At
Format: date-time

###### version_no

`number`

Version No

#### Returns

`Promise`\<\{ `error_count`: `number`; `error_details?`: `string` \| `null`; `imported_count`: `number`; `message`: `string`; `skipped_count`: `number`; `success`: `boolean`; `version_no`: `number`; \}\>

### cancelLotAllocations()

> **cancelLotAllocations**: (`orderLineId`, `request`) => `Promise`\<\{ `message?`: `string`; `success?`: `boolean`; \}\>

ロット引当キャンセル

#### Parameters

##### orderLineId

`number`

##### request

###### allocation_ids?

`number`[]

###### order_line_id?

`number`

#### Returns

`Promise`\<\{ `message?`: `string`; `success?`: `boolean`; \}\>

### createLot()

> **createLot**: (`data`) => `Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>

ロット新規作成

#### Parameters

##### data

###### expiry_date?

`string` \| `null`

Expiry Date

###### inventory_unit?

`string` \| `null`

Inventory Unit

###### kanban_class?

`string` \| `null`

Kanban Class

###### lot_number

`string`

Lot Number

###### lot_unit?

`string` \| `null`

Lot Unit

###### mfg_date?

`string` \| `null`

Mfg Date

###### product_code

`string`

Product Code

###### qc_certificate_file?

`string` \| `null`

Qc Certificate File

###### qc_certificate_status?

`string` \| `null`

Qc Certificate Status

###### receipt_date

`string`

Receipt Date
Format: date

###### received_by?

`string` \| `null`

Received By

###### sales_unit?

`string` \| `null`

Sales Unit

###### source_doc?

`string` \| `null`

Source Doc

###### supplier_code

`string`

Supplier Code

###### warehouse_code?

`string` \| `null`

Warehouse Code

###### warehouse_id?

`number` \| `null`

Warehouse Id

#### Returns

`Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>

### createLotAllocations()

> **createLotAllocations**: (`orderLineId`, `request`) => `Promise`\<\{ `allocated_ids?`: `number`[]; `message?`: `string`; `success?`: `boolean`; \}\>

ロット引当実行

#### Parameters

##### orderLineId

`number`

##### request

###### allocations

`object`[]

#### Returns

`Promise`\<\{ `allocated_ids?`: `number`[]; `message?`: `string`; `success?`: `boolean`; \}\>

### getCandidateLots()

> **getCandidateLots**: (`orderLineId`, `params?`) => `Promise`\<\{ `items`: `object`[]; `warnings?`: `string`[]; \}\>

引当候補ロット取得

#### Parameters

##### orderLineId

`number`

##### params?

###### customer_code?

`string`

###### product_code?

`string`

#### Returns

`Promise`\<\{ `items`: `object`[]; `warnings?`: `string`[]; \}\>

### getForecast()

> **getForecast**: (`params?`) => `Promise`\<`object`[]\>

予測データ取得（生データ、ページネーション対応）

利用可能なパラメータ:

- skip, limit: ページネーション
- product_id, customer_id: ID検索
- product_code, customer_code: コード検索

#### Parameters

##### params?

###### customer_code?

`string` \| `null`

###### customer_id?

`string` \| `null`

###### granularity?

`string` \| `null`

###### is_active?

`boolean` \| `null`

###### limit?

`number`

###### product_code?

`string` \| `null`

###### product_id?

`string` \| `null`

###### skip?

`number`

###### version_no?

`number` \| `null`

#### Returns

`Promise`\<`object`[]\>

### ~~getForecastByCodes()~~

> **getForecastByCodes**: (`productCode`, `customerCode`) => `Promise`\<`object`[]\>

予測データ取得（製品・得意先で検索）

#### Parameters

##### productCode

`string`

##### customerCode

`string`

#### Returns

`Promise`\<`object`[]\>

#### Deprecated

Use getForecast() with params instead

### getForecastList()

> **getForecastList**: (`params?`) => `Promise`\<\{ `items`: `object`[]; \}\>

予測サマリー一覧取得（フロント表示用）

利用可能なパラメータ:

- product_code: 製品コードフィルタ
- supplier_code: 仕入先コードフィルタ

#### Parameters

##### params?

###### product_code?

`string` \| `null`

###### supplier_code?

`string` \| `null`

#### Returns

`Promise`\<\{ `items`: `object`[]; \}\>

### getLot()

> **getLot**: (`id`) => `Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>

ロット詳細取得

#### Parameters

##### id

`number`

#### Returns

`Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>

### getLots()

> **getLots**: (`params?`) => `Promise`\<`object`[]\>

ロット一覧取得

#### Parameters

##### params?

クエリパラメータ（製品、倉庫、期限などでフィルタ可能）

###### expiry_from?

`string` \| `null`

###### expiry_to?

`string` \| `null`

###### limit?

`number`

###### product_code?

`string` \| `null`

###### skip?

`number`

###### supplier_code?

`string` \| `null`

###### warehouse_code?

`string` \| `null`

###### with_stock?

`boolean`

#### Returns

`Promise`\<`object`[]\>

ロット一覧

### getOrder()

> **getOrder**: (`orderId`) => `Promise`\<\{ `created_at`: `string`; `customer_code`: `string`; `customer_order_no?`: `string` \| `null`; `customer_order_no_last6?`: `string` \| `null`; `delivery_mode?`: `string` \| `null`; `id`: `number`; `lines?`: `object`[]; `order_date`: `string`; `order_no`: `string`; `sap_error_msg?`: `string` \| `null`; `sap_order_id?`: `string` \| `null`; `sap_sent_at?`: `string` \| `null`; `sap_status?`: `string` \| `null`; `status`: `string`; `updated_at?`: `string` \| `null`; \}\>

受注詳細取得

#### Parameters

##### orderId

`number`

#### Returns

`Promise`\<\{ `created_at`: `string`; `customer_code`: `string`; `customer_order_no?`: `string` \| `null`; `customer_order_no_last6?`: `string` \| `null`; `delivery_mode?`: `string` \| `null`; `id`: `number`; `lines?`: `object`[]; `order_date`: `string`; `order_no`: `string`; `sap_error_msg?`: `string` \| `null`; `sap_order_id?`: `string` \| `null`; `sap_sent_at?`: `string` \| `null`; `sap_status?`: `string` \| `null`; `status`: `string`; `updated_at?`: `string` \| `null`; \}\>

### getOrders()

> **getOrders**: (`params?`) => `Promise`\<`object`[]\>

受注一覧取得

利用可能なパラメータ:

- skip, limit: ページネーション
- status: ステータスフィルタ
- customer_code: 得意先コードフィルタ
- date_from, date_to: 日付範囲フィルタ

#### Parameters

##### params?

###### customer_code?

`string` \| `null`

###### date_from?

`string` \| `null`

###### date_to?

`string` \| `null`

###### limit?

`number`

###### skip?

`number`

###### status?

`string` \| `null`

#### Returns

`Promise`\<`object`[]\>

### getOrdersWithAllocations()

> **getOrdersWithAllocations**: () => `Promise`\<`unknown`\>

引当情報付き受注一覧取得

#### Returns

`Promise`\<`unknown`\>

### getProducts()

> **getProducts**: () => `Promise`\<[`Product`](../../../types/aliases/type-aliases/Product.md)[]\>

#### Returns

`Promise`\<[`Product`](../../../types/aliases/type-aliases/Product.md)[]\>

### getStats()

> **getStats**: () => `Promise`\<[`DashboardStats`](../../admin-api/type-aliases/DashboardStats.md)\>

管理ダッシュボード等「自分だけが触れる」前提のエンドポイント群。
JWT は lib/http.ts 側で自動付与されます（localStorage "access_token" or "jwt"）。

#### Returns

`Promise`\<[`DashboardStats`](../../admin-api/type-aliases/DashboardStats.md)\>

### getSuppliers()

> **getSuppliers**: () => `Promise`\<[`Supplier`](../../../types/aliases/type-aliases/Supplier.md)[]\>

#### Returns

`Promise`\<[`Supplier`](../../../types/aliases/type-aliases/Supplier.md)[]\>

### getWarehouseAllocList()

> **getWarehouseAllocList**: () => `Promise`\<\{ `items`: `object`[]; \}\>

倉庫別引当情報取得

#### Returns

`Promise`\<\{ `items`: `object`[]; \}\>

### getWarehouses()

> **getWarehouses**: () => `Promise`\<[`Warehouse`](../../../types/aliases/type-aliases/Warehouse.md)[]\>

#### Returns

`Promise`\<[`Warehouse`](../../../types/aliases/type-aliases/Warehouse.md)[]\>

### loadFullSampleData()

> **loadFullSampleData**: (`payload`) => `Promise`\<\{ `message`: `string`; `success`: `boolean`; \}\>

#### Parameters

##### payload

[`FullSampleDataRequest`](../../admin-api/interfaces/FullSampleDataRequest.md)

#### Returns

`Promise`\<\{ `message`: `string`; `success`: `boolean`; \}\>

### reMatchOrder()

> **reMatchOrder**: (`orderId`) => `Promise`\<\{ `created_allocation_ids?`: `number`[]; `order_id`: `number`; `preview`: \{ `lines?`: `object`[]; `order_id`: `number`; `warnings?`: `string`[]; \}; \}\>

FEFO再マッチング実行

#### Parameters

##### orderId

`number`

#### Returns

`Promise`\<\{ `created_allocation_ids?`: `number`[]; `order_id`: `number`; `preview`: \{ `lines?`: `object`[]; `order_id`: `number`; `warnings?`: `string`[]; \}; \}\>

### resetDatabase()

> **resetDatabase**: () => `Promise`\<[`ResetResponse`](../../admin-api/type-aliases/ResetResponse.md)\>

#### Returns

`Promise`\<[`ResetResponse`](../../admin-api/type-aliases/ResetResponse.md)\>

### saveWarehouseAllocations()

> **saveWarehouseAllocations**: (`orderLineId`, `allocations`) => `Promise`\<\{ `message?`: `string`; `success?`: `boolean`; \}\>

倉庫別引当保存

#### Parameters

##### orderLineId

`number`

##### allocations

`object`[]

#### Returns

`Promise`\<\{ `message?`: `string`; `success?`: `boolean`; \}\>

### updateOrderLineStatus()

> **updateOrderLineStatus**: (`orderLineId`, `newStatus`) => `Promise`\<\{ `message`: `string`; `new_status`: `string`; `order_line_id`: `number`; `success`: `boolean`; \}\>

受注明細ステータス更新

#### Parameters

##### orderLineId

`number`

##### newStatus

`string`

#### Returns

`Promise`\<\{ `message`: `string`; `new_status`: `string`; `order_line_id`: `number`; `success`: `boolean`; \}\>
