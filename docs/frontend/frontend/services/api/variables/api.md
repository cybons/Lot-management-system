[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [services/api](../README-1.md) / api

# Variable: api

> `const` **api**: `object`

Defined in: [src/services/api.ts:36](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api.ts#L36)

## Type Declaration

### dragAssignAllocation()

> **dragAssignAllocation**: (`body`) => `Promise`\<[`DragAssignResponse`](../type-aliases/DragAssignResponse.md)\>

ドラッグ&ドロップによる引当実行

#### Parameters

##### body

引当リクエストデータ

###### allocate_qty

`number`

Allocate Qty

###### lot_id

`number`

Lot Id

###### order_line_id

`number`

Order Line Id

#### Returns

`Promise`\<[`DragAssignResponse`](../type-aliases/DragAssignResponse.md)\>

引当結果

### getDashboardStats()

> **getDashboardStats**: () => `Promise`\<[`DashboardStats`](../type-aliases/DashboardStats.md)\>

ダッシュボード統計を取得

#### Returns

`Promise`\<[`DashboardStats`](../type-aliases/DashboardStats.md)\>

ダッシュボード統計情報

### getOrderDetail()

> **getOrderDetail**: (`orderId`) => `Promise`\<\{ `created_at`: `string`; `customer_code`: `string`; `customer_order_no?`: `string` \| `null`; `customer_order_no_last6?`: `string` \| `null`; `delivery_mode?`: `string` \| `null`; `id`: `number`; `lines?`: `object`[]; `order_date`: `string`; `order_no`: `string`; `sap_error_msg?`: `string` \| `null`; `sap_order_id?`: `string` \| `null`; `sap_sent_at?`: `string` \| `null`; `sap_status?`: `string` \| `null`; `status`: `string`; `updated_at?`: `string` \| `null`; \}\>

受注詳細を取得

#### Parameters

##### orderId

`number`

受注ID

#### Returns

`Promise`\<\{ `created_at`: `string`; `customer_code`: `string`; `customer_order_no?`: `string` \| `null`; `customer_order_no_last6?`: `string` \| `null`; `delivery_mode?`: `string` \| `null`; `id`: `number`; `lines?`: `object`[]; `order_date`: `string`; `order_no`: `string`; `sap_error_msg?`: `string` \| `null`; `sap_order_id?`: `string` \| `null`; `sap_sent_at?`: `string` \| `null`; `sap_status?`: `string` \| `null`; `status`: `string`; `updated_at?`: `string` \| `null`; \}\>

受注詳細（明細行を含む）

### getOrders()

> **getOrders**: (`params?`) => `Promise`\<`object`[]\>

受注一覧を取得

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

クエリパラメータ（フィルタ条件など）

#### Returns

`Promise`\<`object`[]\>

受注リスト

### listForecasts()

> **listForecasts**: (`params?`) => `Promise`\<`object`[]\>

Forecast一覧を取得

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

クエリパラメータ（フィルタ条件など）

#### Returns

`Promise`\<`object`[]\>

Forecastリスト

### listLots()

> **listLots**: (`params?`) => `Promise`\<`object`[]\>

ロット一覧を取得

#### Parameters

##### params?

`Record`\<`string`, `unknown`\>

クエリパラメータ（フィルタ条件など）

#### Returns

`Promise`\<`object`[]\>

ロットリスト
