[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [types/api](../README.md) / components

# Interface: components

Defined in: [src/types/api.d.ts:1075](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L1075)

## Properties

### headers

> **headers**: `never`

Defined in: [src/types/api.d.ts:2447](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2447)

---

### parameters

> **parameters**: `never`

Defined in: [src/types/api.d.ts:2445](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2445)

---

### pathItems

> **pathItems**: `never`

Defined in: [src/types/api.d.ts:2448](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2448)

---

### requestBodies

> **requestBodies**: `never`

Defined in: [src/types/api.d.ts:2446](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2446)

---

### responses

> **responses**: `never`

Defined in: [src/types/api.d.ts:2444](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2444)

---

### schemas

> **schemas**: `object`

Defined in: [src/types/api.d.ts:1076](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L1076)

#### AdminPresetListResponse

> **AdminPresetListResponse**: `object`

AdminPresetListResponse

##### Description

プリセット名の一覧レスポンス。

##### AdminPresetListResponse.presets

> **presets**: `string`[]

Presets

#### AdminPresetLoadResponse

> **AdminPresetLoadResponse**: `object`

AdminPresetLoadResponse

##### Description

プリセット投入結果。

##### AdminPresetLoadResponse.preset

> **preset**: `string`

Preset

##### AdminPresetLoadResponse.result

> **result**: `object`

##### AdminPresetLoadResponse.result.created?

> `optional` **created**: `object`

Created

###### Index Signature

\[`key`: `string`\]: `string`[]

##### AdminPresetLoadResponse.result.warnings?

> `optional` **warnings**: `string`[]

Warnings

#### app\_\_schemas\_\_masters\_\_ProductCreate

> **app\_\_schemas\_\_masters\_\_ProductCreate**: `object`

ProductCreate

##### app\_\_schemas\_\_masters\_\_ProductCreate.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### app\_\_schemas\_\_masters\_\_ProductCreate.base_unit

> **base_unit**: `string`

Base Unit

###### Default

```ts
EA;
```

##### app\_\_schemas\_\_masters\_\_ProductCreate.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### app\_\_schemas\_\_masters\_\_ProductCreate.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### app\_\_schemas\_\_masters\_\_ProductCreate.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### app\_\_schemas\_\_masters\_\_ProductCreate.internal_unit

> **internal_unit**: `string`

Internal Unit

##### app\_\_schemas\_\_masters\_\_ProductCreate.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### app\_\_schemas\_\_masters\_\_ProductCreate.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### app\_\_schemas\_\_masters\_\_ProductCreate.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### app\_\_schemas\_\_masters\_\_ProductCreate.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### app\_\_schemas\_\_masters\_\_ProductCreate.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### app\_\_schemas\_\_masters\_\_ProductCreate.packaging_qty

> **packaging_qty**: `string` \| `number`

Packaging Qty

##### app\_\_schemas\_\_masters\_\_ProductCreate.packaging_unit

> **packaging_unit**: `string`

Packaging Unit

##### app\_\_schemas\_\_masters\_\_ProductCreate.product_code

> **product_code**: `string`

Product Code

##### app\_\_schemas\_\_masters\_\_ProductCreate.product_name

> **product_name**: `string`

Product Name

##### app\_\_schemas\_\_masters\_\_ProductCreate.requires_lot_number

> **requires_lot_number**: `boolean`

Requires Lot Number

###### Default

```ts
true;
```

##### app\_\_schemas\_\_masters\_\_ProductCreate.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### app\_\_schemas\_\_masters\_\_ProductCreate.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### app\_\_schemas\_\_masters\_\_ProductCreate.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### app\_\_schemas\_\_masters\_\_ProductCreate.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

#### app\_\_schemas\_\_masters\_\_ProductUpdate

> **app\_\_schemas\_\_masters\_\_ProductUpdate**: `object`

ProductUpdate

##### app\_\_schemas\_\_masters\_\_ProductUpdate.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### app\_\_schemas\_\_masters\_\_ProductUpdate.base_unit?

> `optional` **base_unit**: `string` \| `null`

Base Unit

##### app\_\_schemas\_\_masters\_\_ProductUpdate.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### app\_\_schemas\_\_masters\_\_ProductUpdate.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### app\_\_schemas\_\_masters\_\_ProductUpdate.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### app\_\_schemas\_\_masters\_\_ProductUpdate.internal_unit?

> `optional` **internal_unit**: `string` \| `null`

Internal Unit

##### app\_\_schemas\_\_masters\_\_ProductUpdate.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### app\_\_schemas\_\_masters\_\_ProductUpdate.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### app\_\_schemas\_\_masters\_\_ProductUpdate.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### app\_\_schemas\_\_masters\_\_ProductUpdate.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### app\_\_schemas\_\_masters\_\_ProductUpdate.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### app\_\_schemas\_\_masters\_\_ProductUpdate.packaging_qty?

> `optional` **packaging_qty**: `string` \| `number` \| `null`

Packaging Qty

##### app\_\_schemas\_\_masters\_\_ProductUpdate.packaging_unit?

> `optional` **packaging_unit**: `string` \| `null`

Packaging Unit

##### app\_\_schemas\_\_masters\_\_ProductUpdate.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

##### app\_\_schemas\_\_masters\_\_ProductUpdate.requires_lot_number?

> `optional` **requires_lot_number**: `boolean` \| `null`

Requires Lot Number

##### app\_\_schemas\_\_masters\_\_ProductUpdate.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### app\_\_schemas\_\_masters\_\_ProductUpdate.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### app\_\_schemas\_\_masters\_\_ProductUpdate.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### app\_\_schemas\_\_masters\_\_ProductUpdate.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

#### app\_\_schemas\_\_products\_\_ProductCreate

> **app\_\_schemas\_\_products\_\_ProductCreate**: `object`

ProductCreate

##### Description

Payload to create a product.

##### app\_\_schemas\_\_products\_\_ProductCreate.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### app\_\_schemas\_\_products\_\_ProductCreate.internal_unit

> **internal_unit**: `string`

Internal Unit

##### app\_\_schemas\_\_products\_\_ProductCreate.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### app\_\_schemas\_\_products\_\_ProductCreate.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### app\_\_schemas\_\_products\_\_ProductCreate.product_code

> **product_code**: `string`

Product Code

##### app\_\_schemas\_\_products\_\_ProductCreate.product_name

> **product_name**: `string`

Product Name

#### app\_\_schemas\_\_products\_\_ProductUpdate

> **app\_\_schemas\_\_products\_\_ProductUpdate**: `object`

ProductUpdate

##### Description

Payload to partially update a product.

##### app\_\_schemas\_\_products\_\_ProductUpdate.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### app\_\_schemas\_\_products\_\_ProductUpdate.internal_unit?

> `optional` **internal_unit**: `string` \| `null`

Internal Unit

##### app\_\_schemas\_\_products\_\_ProductUpdate.is_active?

> `optional` **is_active**: `boolean` \| `null`

Is Active

##### app\_\_schemas\_\_products\_\_ProductUpdate.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### app\_\_schemas\_\_products\_\_ProductUpdate.product_code?

> `optional` **product_code**: `string` \| `null`

Product Code

##### app\_\_schemas\_\_products\_\_ProductUpdate.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

#### CustomerCreate

> **CustomerCreate**: `object`

CustomerCreate

##### CustomerCreate.address?

> `optional` **address**: `string` \| `null`

Address

##### CustomerCreate.customer_code

> **customer_code**: `string`

Customer Code

##### CustomerCreate.customer_name

> **customer_name**: `string`

Customer Name

#### CustomerResponse

> **CustomerResponse**: `object`

CustomerResponse

##### CustomerResponse.address?

> `optional` **address**: `string` \| `null`

Address

##### CustomerResponse.customer_code

> **customer_code**: `string`

Customer Code

##### CustomerResponse.customer_name

> **customer_name**: `string`

Customer Name

#### CustomerUpdate

> **CustomerUpdate**: `object`

CustomerUpdate

##### CustomerUpdate.address?

> `optional` **address**: `string` \| `null`

Address

##### CustomerUpdate.customer_name?

> `optional` **customer_name**: `string` \| `null`

Customer Name

#### DashboardStatsResponse

> **DashboardStatsResponse**: `object`

DashboardStatsResponse

##### Description

ダッシュボード統計レスポンス

##### DashboardStatsResponse.total_orders

> **total_orders**: `number`

Total Orders

##### DashboardStatsResponse.total_stock

> **total_stock**: `number`

Total Stock

##### DashboardStatsResponse.unallocated_orders

> **unallocated_orders**: `number`

Unallocated Orders

#### DragAssignRequest

> **DragAssignRequest**: `object`

DragAssignRequest

##### DragAssignRequest.allocate_qty

> **allocate_qty**: `number`

Allocate Qty

##### DragAssignRequest.lot_id

> **lot_id**: `number`

Lot Id

##### DragAssignRequest.order_line_id

> **order_line_id**: `number`

Order Line Id

#### FefoCommitResponse

> **FefoCommitResponse**: `object`

FefoCommitResponse

##### FefoCommitResponse.created_allocation_ids?

> `optional` **created_allocation_ids**: `number`[]

Created Allocation Ids

##### FefoCommitResponse.order_id

> **order_id**: `number`

Order Id

##### FefoCommitResponse.preview

> **preview**: `object`

##### FefoCommitResponse.preview.lines?

> `optional` **lines**: `object`[]

Lines

##### FefoCommitResponse.preview.order_id

> **order_id**: `number`

Order Id

##### FefoCommitResponse.preview.warnings?

> `optional` **warnings**: `string`[]

Warnings

#### FefoLineAllocation

> **FefoLineAllocation**: `object`

FefoLineAllocation

##### FefoLineAllocation.allocations?

> `optional` **allocations**: `object`[]

Allocations

##### FefoLineAllocation.already_allocated_qty

> **already_allocated_qty**: `number`

Already Allocated Qty

##### FefoLineAllocation.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### FefoLineAllocation.order_line_id

> **order_line_id**: `number`

Order Line Id

##### FefoLineAllocation.product_code

> **product_code**: `string`

Product Code

##### FefoLineAllocation.required_qty

> **required_qty**: `number`

Required Qty

##### FefoLineAllocation.warnings?

> `optional` **warnings**: `string`[]

Warnings

#### FefoLotAllocation

> **FefoLotAllocation**: `object`

FefoLotAllocation

##### FefoLotAllocation.allocate_qty

> **allocate_qty**: `number`

Allocate Qty

##### FefoLotAllocation.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### FefoLotAllocation.lot_id

> **lot_id**: `number`

Lot Id

##### FefoLotAllocation.lot_number

> **lot_number**: `string`

Lot Number

##### FefoLotAllocation.receipt_date?

> `optional` **receipt_date**: `string` \| `null`

Receipt Date

#### FefoPreviewRequest

> **FefoPreviewRequest**: `object`

FefoPreviewRequest

##### FefoPreviewRequest.order_id

> **order_id**: `number`

Order Id

#### FefoPreviewResponse

> **FefoPreviewResponse**: `object`

FefoPreviewResponse

##### FefoPreviewResponse.lines?

> `optional` **lines**: `object`[]

Lines

##### FefoPreviewResponse.order_id

> **order_id**: `number`

Order Id

##### FefoPreviewResponse.warnings?

> `optional` **warnings**: `string`[]

Warnings

#### ForecastActivateRequest

> **ForecastActivateRequest**: `object`

ForecastActivateRequest

##### Description

バージョンアクティブ化リクエスト

##### ForecastActivateRequest.deactivate_others

> **deactivate_others**: `boolean`

Deactivate Others

###### Default

```ts
true;
```

##### ForecastActivateRequest.version_no

> **version_no**: `number`

Version No

#### ForecastActivateResponse

> **ForecastActivateResponse**: `object`

ForecastActivateResponse

##### Description

バージョンアクティブ化レスポンス

##### ForecastActivateResponse.activated_version

> **activated_version**: `number`

Activated Version

##### ForecastActivateResponse.deactivated_versions

> **deactivated_versions**: `number`[]

Deactivated Versions

###### Default

```ts
[];
```

##### ForecastActivateResponse.message

> **message**: `string`

Message

##### ForecastActivateResponse.success

> **success**: `boolean`

Success

#### ForecastBulkImportRequest

> **ForecastBulkImportRequest**: `object`

ForecastBulkImportRequest

##### Description

一括インポートリクエスト

##### ForecastBulkImportRequest.deactivate_old_version

> **deactivate_old_version**: `boolean`

Deactivate Old Version

###### Default

```ts
true;
```

##### ForecastBulkImportRequest.forecasts

> **forecasts**: `object`[]

Forecasts

##### ForecastBulkImportRequest.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### ForecastBulkImportRequest.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### ForecastBulkImportRequest.version_no

> **version_no**: `number`

Version No

#### ForecastBulkImportResponse

> **ForecastBulkImportResponse**: `object`

ForecastBulkImportResponse

##### Description

一括インポートレスポンス

##### ForecastBulkImportResponse.error_count

> **error_count**: `number`

Error Count

##### ForecastBulkImportResponse.error_details?

> `optional` **error_details**: `string` \| `null`

Error Details

##### ForecastBulkImportResponse.imported_count

> **imported_count**: `number`

Imported Count

##### ForecastBulkImportResponse.message

> **message**: `string`

Message

##### ForecastBulkImportResponse.skipped_count

> **skipped_count**: `number`

Skipped Count

##### ForecastBulkImportResponse.success

> **success**: `boolean`

Success

##### ForecastBulkImportResponse.version_no

> **version_no**: `number`

Version No

#### ForecastCreate

> **ForecastCreate**: `object`

ForecastCreate

##### Description

フォーキャスト作成リクエスト

##### ForecastCreate.customer_id

> **customer_id**: `string`

Customer Id

##### ForecastCreate.date_day?

> `optional` **date_day**: `string` \| `null`

Date Day

##### ForecastCreate.date_dekad_start?

> `optional` **date_dekad_start**: `string` \| `null`

Date Dekad Start

##### ForecastCreate.granularity

> **granularity**: `"daily"` \| `"dekad"` \| `"monthly"`

Granularity

##### ForecastCreate.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### ForecastCreate.product_id

> **product_id**: `string`

Product Id

##### ForecastCreate.qty_forecast

> **qty_forecast**: `number`

Qty Forecast

##### ForecastCreate.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### ForecastCreate.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### ForecastCreate.version_no

> **version_no**: `number`

Version No

###### Default

```ts
1;
```

##### ForecastCreate.year_month?

> `optional` **year_month**: `string` \| `null`

Year Month

#### ForecastItemOut

> **ForecastItemOut**: `object`

ForecastItemOut

##### Description

Forecast一覧（フロント表示用）

##### ForecastItemOut.customer_code

> **customer_code**: `string`

Customer Code

##### ForecastItemOut.customer_name

> **customer_name**: `string` \| `null`

Customer Name

###### Default

```ts
得意先A(ダミー);
```

##### ForecastItemOut.daily_data?

> `optional` **daily_data**: \{\[`key`: `string`\]: `number`; \} \| `null`

Daily Data

##### ForecastItemOut.dekad_data?

> `optional` **dekad_data**: \{\[`key`: `string`\]: `number`; \} \| `null`

Dekad Data

##### ForecastItemOut.dekad_summary?

> `optional` **dekad_summary**: \{\[`key`: `string`\]: `number`; \} \| `null`

Dekad Summary

##### ForecastItemOut.granularity

> **granularity**: `string`

Granularity

##### ForecastItemOut.id

> **id**: `number`

Id

##### ForecastItemOut.monthly_data?

> `optional` **monthly_data**: \{\[`key`: `string`\]: `number`; \} \| `null`

Monthly Data

##### ForecastItemOut.product_code

> **product_code**: `string`

Product Code

##### ForecastItemOut.product_name

> **product_name**: `string`

Product Name

##### ForecastItemOut.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### ForecastItemOut.supplier_name

> **supplier_name**: `string` \| `null`

Supplier Name

###### Default

```ts
サプライヤーB(ダミー);
```

##### ForecastItemOut.unit

> **unit**: `string`

Unit

###### Default

```ts
EA;
```

##### ForecastItemOut.updated_at

> **updated_at**: `string`

Updated At
Format: date-time

##### ForecastItemOut.version_history

> **version_history**: `Record`\<`string`, `never`\>[]

Version History

###### Default

```ts
[];
```

##### ForecastItemOut.version_no

> **version_no**: `number`

Version No

#### ForecastListResponse

> **ForecastListResponse**: `object`

ForecastListResponse

##### ForecastListResponse.items

> **items**: `object`[]

Items

#### ForecastMatchRequest

> **ForecastMatchRequest**: `object`

ForecastMatchRequest

##### Description

マッチングリクエスト

##### ForecastMatchRequest.date_from?

> `optional` **date_from**: `string` \| `null`

Date From

##### ForecastMatchRequest.date_to?

> `optional` **date_to**: `string` \| `null`

Date To

##### ForecastMatchRequest.force_rematch

> **force_rematch**: `boolean`

Force Rematch

###### Default

```ts
false;
```

##### ForecastMatchRequest.order_id?

> `optional` **order_id**: `number` \| `null`

Order Id

##### ForecastMatchRequest.order_ids?

> `optional` **order_ids**: `number`[] \| `null`

Order Ids

#### ForecastMatchResponse

> **ForecastMatchResponse**: `object`

ForecastMatchResponse

##### Description

マッチングレスポンス

##### ForecastMatchResponse.matched_lines

> **matched_lines**: `number`

Matched Lines

##### ForecastMatchResponse.message

> **message**: `string`

Message

##### ForecastMatchResponse.results

> **results**: `object`[]

Results

###### Default

```ts
[];
```

##### ForecastMatchResponse.success

> **success**: `boolean`

Success

##### ForecastMatchResponse.total_lines

> **total_lines**: `number`

Total Lines

##### ForecastMatchResponse.unmatched_lines

> **unmatched_lines**: `number`

Unmatched Lines

#### ForecastMatchResult

> **ForecastMatchResult**: `object`

ForecastMatchResult

##### Description

個別マッチング結果

##### ForecastMatchResult.forecast_granularity?

> `optional` **forecast_granularity**: `string` \| `null`

Forecast Granularity

##### ForecastMatchResult.forecast_id?

> `optional` **forecast_id**: `number` \| `null`

Forecast Id

##### ForecastMatchResult.forecast_match_status?

> `optional` **forecast_match_status**: `string` \| `null`

Forecast Match Status

##### ForecastMatchResult.forecast_qty?

> `optional` **forecast_qty**: `number` \| `null`

Forecast Qty

##### ForecastMatchResult.line_no

> **line_no**: `number`

Line No

##### ForecastMatchResult.matched

> **matched**: `boolean`

Matched

##### ForecastMatchResult.order_line_id

> **order_line_id**: `number`

Order Line Id

##### ForecastMatchResult.order_no

> **order_no**: `string`

Order No

##### ForecastMatchResult.product_code

> **product_code**: `string`

Product Code

#### ForecastResponse

> **ForecastResponse**: `object`

ForecastResponse

##### Description

フォーキャストレスポンス

##### ForecastResponse.created_at

> **created_at**: `string`

Created At
Format: date-time

##### ForecastResponse.customer_id

> **customer_id**: `string`

Customer Id

##### ForecastResponse.date_day?

> `optional` **date_day**: `string` \| `null`

Date Day

##### ForecastResponse.date_dekad_start?

> `optional` **date_dekad_start**: `string` \| `null`

Date Dekad Start

##### ForecastResponse.forecast_id?

> `optional` **forecast_id**: `number` \| `null`

Forecast Id

##### ForecastResponse.granularity

> **granularity**: `"daily"` \| `"dekad"` \| `"monthly"`

Granularity

##### ForecastResponse.id

> **id**: `number`

Id

##### ForecastResponse.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### ForecastResponse.product_id

> **product_id**: `string`

Product Id

##### ForecastResponse.qty_forecast

> **qty_forecast**: `number`

Qty Forecast

##### ForecastResponse.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### ForecastResponse.supplier_id?

> `optional` **supplier_id**: `string` \| `null`

Supplier Id

##### ForecastResponse.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### ForecastResponse.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### ForecastResponse.version_no

> **version_no**: `number`

Version No

###### Default

```ts
1;
```

##### ForecastResponse.year_month?

> `optional` **year_month**: `string` \| `null`

Year Month

#### ForecastUpdate

> **ForecastUpdate**: `object`

ForecastUpdate

##### Description

フォーキャスト更新リクエスト

##### ForecastUpdate.is_active?

> `optional` **is_active**: `boolean` \| `null`

Is Active

##### ForecastUpdate.qty_forecast?

> `optional` **qty_forecast**: `number` \| `null`

Qty Forecast

#### ForecastVersionInfo

> **ForecastVersionInfo**: `object`

ForecastVersionInfo

##### Description

バージョン情報

##### ForecastVersionInfo.forecast_count

> **forecast_count**: `number`

Forecast Count

##### ForecastVersionInfo.is_active

> **is_active**: `boolean`

Is Active

##### ForecastVersionInfo.source_system

> **source_system**: `string`

Source System

##### ForecastVersionInfo.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### ForecastVersionInfo.version_no

> **version_no**: `number`

Version No

#### ForecastVersionListResponse

> **ForecastVersionListResponse**: `object`

ForecastVersionListResponse

##### Description

バージョン一覧レスポンス

##### ForecastVersionListResponse.versions

> **versions**: `object`[]

Versions

#### FullSampleDataRequest

> **FullSampleDataRequest**: `object`

FullSampleDataRequest

##### Description

一括サンプルデータ投入リクエスト

    注意: 投入順序が重要 (マスタ -> ロット -> 受注)

##### FullSampleDataRequest.lots?

> `optional` **lots**: `object`[] \| `null`

Lots

##### FullSampleDataRequest.orders?

> `optional` **orders**: `object`[] \| `null`

Orders

##### FullSampleDataRequest.products?

> `optional` **products**: `object`[] \| `null`

Products

#### HTTPValidationError

> **HTTPValidationError**: `object`

HTTPValidationError

##### HTTPValidationError.detail?

> `optional` **detail**: `object`[]

Detail

#### LotCreate

> **LotCreate**: `object`

LotCreate

##### LotCreate.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### LotCreate.inventory_unit?

> `optional` **inventory_unit**: `string` \| `null`

Inventory Unit

##### LotCreate.kanban_class?

> `optional` **kanban_class**: `string` \| `null`

Kanban Class

##### LotCreate.lot_number

> **lot_number**: `string`

Lot Number

##### LotCreate.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### LotCreate.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### LotCreate.product_code

> **product_code**: `string`

Product Code

##### LotCreate.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### LotCreate.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### LotCreate.receipt_date

> **receipt_date**: `string`

Receipt Date
Format: date

##### LotCreate.received_by?

> `optional` **received_by**: `string` \| `null`

Received By

##### LotCreate.sales_unit?

> `optional` **sales_unit**: `string` \| `null`

Sales Unit

##### LotCreate.source_doc?

> `optional` **source_doc**: `string` \| `null`

Source Doc

##### LotCreate.supplier_code

> **supplier_code**: `string`

Supplier Code

##### LotCreate.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### LotCreate.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### LotResponse

> **LotResponse**: `object`

LotResponse

##### LotResponse.created_at

> **created_at**: `string`

Created At
Format: date-time

##### LotResponse.current_quantity

> **current_quantity**: `number`

Current Quantity

###### Default

```ts
0;
```

##### LotResponse.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### LotResponse.id

> **id**: `number`

Id

##### LotResponse.inventory_unit?

> `optional` **inventory_unit**: `string` \| `null`

Inventory Unit

##### LotResponse.kanban_class?

> `optional` **kanban_class**: `string` \| `null`

Kanban Class

##### LotResponse.last_updated?

> `optional` **last_updated**: `string` \| `null`

Last Updated

##### LotResponse.lot_number

> **lot_number**: `string`

Lot Number

##### LotResponse.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### LotResponse.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### LotResponse.product_code

> **product_code**: `string`

Product Code

##### LotResponse.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

##### LotResponse.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### LotResponse.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### LotResponse.receipt_date

> **receipt_date**: `string`

Receipt Date
Format: date

##### LotResponse.received_by?

> `optional` **received_by**: `string` \| `null`

Received By

##### LotResponse.sales_unit?

> `optional` **sales_unit**: `string` \| `null`

Sales Unit

##### LotResponse.source_doc?

> `optional` **source_doc**: `string` \| `null`

Source Doc

##### LotResponse.supplier_code

> **supplier_code**: `string`

Supplier Code

##### LotResponse.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### LotResponse.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### LotResponse.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### LotUpdate

> **LotUpdate**: `object`

LotUpdate

##### LotUpdate.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### LotUpdate.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### LotUpdate.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### LotUpdate.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### LotUpdate.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### LotUpdate.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### LotUpdate.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### MasterBulkLoadRequest

> **MasterBulkLoadRequest**: `object`

MasterBulkLoadRequest

##### Description

Bulk load payload for master data.

##### MasterBulkLoadRequest.customers?

> `optional` **customers**: `object`[]

Customers

##### MasterBulkLoadRequest.products?

> `optional` **products**: `object`[]

Products

##### MasterBulkLoadRequest.suppliers?

> `optional` **suppliers**: `object`[]

Suppliers

##### MasterBulkLoadRequest.warehouses?

> `optional` **warehouses**: `object`[]

Warehouses

#### MasterBulkLoadResponse

> **MasterBulkLoadResponse**: `object`

MasterBulkLoadResponse

##### Description

Bulk load result summary.

##### MasterBulkLoadResponse.created?

> `optional` **created**: `object`

Created

###### Index Signature

\[`key`: `string`\]: `string`[]

##### MasterBulkLoadResponse.warnings?

> `optional` **warnings**: `string`[]

Warnings

#### OcrOrderRecord

> **OcrOrderRecord**: `object`

OcrOrderRecord

##### Description

OCR受注レコード

##### OcrOrderRecord.customer_code

> **customer_code**: `string`

Customer Code

##### OcrOrderRecord.lines

> **lines**: `object`[]

Lines

##### OcrOrderRecord.order_date?

> `optional` **order_date**: `string` \| `null`

Order Date

##### OcrOrderRecord.order_no

> **order_no**: `string`

Order No

#### OcrSubmissionRequest

> **OcrSubmissionRequest**: `object`

OcrSubmissionRequest

##### Description

OCR取込リクエスト

##### OcrSubmissionRequest.file_name?

> `optional` **file_name**: `string` \| `null`

File Name

##### OcrSubmissionRequest.operator?

> `optional` **operator**: `string` \| `null`

Operator

##### OcrSubmissionRequest.records

> **records**: `object`[]

Records

##### OcrSubmissionRequest.schema_version

> **schema_version**: `string`

Schema Version

###### Default

```ts
1.0.0
```

##### OcrSubmissionRequest.source

> **source**: `string`

Source

###### Default

```ts
PAD;
```

#### OcrSubmissionResponse

> **OcrSubmissionResponse**: `object`

OcrSubmissionResponse

##### Description

OCR取込レスポンス

##### OcrSubmissionResponse.created_lines

> **created_lines**: `number`

Created Lines

##### OcrSubmissionResponse.created_orders

> **created_orders**: `number`

Created Orders

##### OcrSubmissionResponse.error_details?

> `optional` **error_details**: `string` \| `null`

Error Details

##### OcrSubmissionResponse.failed_records

> **failed_records**: `number`

Failed Records

##### OcrSubmissionResponse.processed_records

> **processed_records**: `number`

Processed Records

##### OcrSubmissionResponse.skipped_records

> **skipped_records**: `number`

Skipped Records

##### OcrSubmissionResponse.status

> **status**: `string`

Status

##### OcrSubmissionResponse.submission_id

> **submission_id**: `string`

Submission Id

##### OcrSubmissionResponse.total_records

> **total_records**: `number`

Total Records

#### OrderCreate

> **OrderCreate**: `object`

OrderCreate

##### OrderCreate.customer_code

> **customer_code**: `string`

Customer Code

##### OrderCreate.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### OrderCreate.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### OrderCreate.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### OrderCreate.lines?

> `optional` **lines**: `object`[]

Lines

##### OrderCreate.order_date

> **order_date**: `string`

Order Date
Format: date

##### OrderCreate.order_no

> **order_no**: `string`

Order No

##### OrderCreate.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### OrderCreate.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### OrderCreate.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### OrderCreate.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### OrderCreate.status

> **status**: `string`

Status

###### Default

```ts
open;
```

#### OrderLineCreate

> **OrderLineCreate**: `object`

OrderLineCreate

##### OrderLineCreate.destination_id?

> `optional` **destination_id**: `number` \| `null`

Destination Id

##### OrderLineCreate.due_date?

> `optional` **due_date**: `string` \| `null`

Due Date

##### OrderLineCreate.external_unit?

> `optional` **external_unit**: `string` \| `null`

External Unit

##### OrderLineCreate.line_no

> **line_no**: `number`

Line No

##### OrderLineCreate.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### OrderLineCreate.product_code

> **product_code**: `string`

Product Code

##### OrderLineCreate.quantity

> **quantity**: `number`

Quantity

##### OrderLineCreate.unit

> **unit**: `string`

Unit

#### OrderLineDemandSchema

> **OrderLineDemandSchema**: `object`

OrderLineDemandSchema

##### OrderLineDemandSchema.product_code

> **product_code**: `string`

Product Code

##### OrderLineDemandSchema.quantity

> **quantity**: `number`

Quantity

##### OrderLineDemandSchema.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

#### OrderLineOut

> **OrderLineOut**: `object`

OrderLineOut

##### OrderLineOut.allocated_lots?

> `optional` **allocated_lots**: `Record`\<`string`, `never`\>[]

Allocated Lots

##### OrderLineOut.allocated_qty?

> `optional` **allocated_qty**: `number` \| `null`

Allocated Qty

##### OrderLineOut.customer_code?

> `optional` **customer_code**: `string` \| `null`

Customer Code

##### OrderLineOut.due_date?

> `optional` **due_date**: `string` \| `null`

Due Date

##### OrderLineOut.id

> **id**: `number`

Id

##### OrderLineOut.line_no?

> `optional` **line_no**: `number` \| `null`

Line No

##### OrderLineOut.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### OrderLineOut.product_code

> **product_code**: `string`

Product Code

##### OrderLineOut.product_name

> **product_name**: `string`

Product Name

##### OrderLineOut.quantity

> **quantity**: `number`

Quantity

##### OrderLineOut.related_lots?

> `optional` **related_lots**: `Record`\<`string`, `never`\>[]

Related Lots

##### OrderLineOut.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### OrderLineOut.unit

> **unit**: `string`

Unit

##### OrderLineOut.warehouse_allocations?

> `optional` **warehouse_allocations**: `object`[]

Warehouse Allocations

#### OrderResponse

> **OrderResponse**: `object`

OrderResponse

##### OrderResponse.created_at

> **created_at**: `string`

Created At
Format: date-time

##### OrderResponse.customer_code

> **customer_code**: `string`

Customer Code

##### OrderResponse.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### OrderResponse.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### OrderResponse.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### OrderResponse.id

> **id**: `number`

Id

##### OrderResponse.order_date

> **order_date**: `string`

Order Date
Format: date

##### OrderResponse.order_no

> **order_no**: `string`

Order No

##### OrderResponse.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### OrderResponse.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### OrderResponse.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### OrderResponse.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### OrderResponse.status

> **status**: `string`

Status

###### Default

```ts
open;
```

##### OrderResponse.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

#### OrderStatusUpdate

> **OrderStatusUpdate**: `object`

OrderStatusUpdate

##### Description

受注ステータス更新用スキーマ

    Note:
        constrを使用してstatusが空文字でないことを保証

##### OrderStatusUpdate.status

> **status**: `string`

Status

###### Description

新しいステータス（open, allocated, shipped, closed, cancelled）

###### Examples

```ts
allocated;
```

```ts
shipped;
```

#### OrderValidationDetails

> **OrderValidationDetails**: `object`

OrderValidationDetails

##### OrderValidationDetails.per_lot?

> `optional` **per_lot**: `object`[]

Per Lot

##### OrderValidationDetails.ship_date?

> `optional` **ship_date**: `string` \| `null`

Ship Date

##### OrderValidationDetails.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

#### OrderValidationErrorData

> **OrderValidationErrorData**: `object`

OrderValidationErrorData

##### OrderValidationErrorData.available

> **available**: `number`

Available

##### OrderValidationErrorData.details

> **details**: `object`

##### OrderValidationErrorData.details.per_lot?

> `optional` **per_lot**: `object`[]

Per Lot

##### OrderValidationErrorData.details.ship_date?

> `optional` **ship_date**: `string` \| `null`

Ship Date

##### OrderValidationErrorData.details.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### OrderValidationErrorData.product_code

> **product_code**: `string`

Product Code

##### OrderValidationErrorData.required

> **required**: `number`

Required

#### OrderValidationLotAvailability

> **OrderValidationLotAvailability**: `object`

OrderValidationLotAvailability

##### OrderValidationLotAvailability.available

> **available**: `number`

Available

##### OrderValidationLotAvailability.lot_id

> **lot_id**: `number`

Lot Id

#### OrderValidationRequest

> **OrderValidationRequest**: `object`

OrderValidationRequest

##### OrderValidationRequest.lines

> **lines**: `object`[]

Lines

##### OrderValidationRequest.ship_date?

> `optional` **ship_date**: `string` \| `null`

Ship Date

#### OrderValidationResponse

> **OrderValidationResponse**: `object`

OrderValidationResponse

##### OrderValidationResponse.data?

> `optional` **data**: \{ `available`: `number`; `details`: \{ `per_lot?`: `object`[]; `ship_date?`: `string` \| `null`; `warehouse_code`: `string`; \}; `product_code`: `string`; `required`: `number`; \} \| `null`

###### Type Declaration

\{ `available`: `number`; `details`: \{ `per_lot?`: `object`[]; `ship_date?`: `string` \| `null`; `warehouse_code`: `string`; \}; `product_code`: `string`; `required`: `number`; \}

`null`

##### OrderValidationResponse.message

> **message**: `string`

Message

##### OrderValidationResponse.ok

> **ok**: `boolean`

Ok

#### OrderWithLinesResponse

> **OrderWithLinesResponse**: `object`

OrderWithLinesResponse

##### OrderWithLinesResponse.created_at

> **created_at**: `string`

Created At
Format: date-time

##### OrderWithLinesResponse.customer_code

> **customer_code**: `string`

Customer Code

##### OrderWithLinesResponse.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### OrderWithLinesResponse.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### OrderWithLinesResponse.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### OrderWithLinesResponse.id

> **id**: `number`

Id

##### OrderWithLinesResponse.lines?

> `optional` **lines**: `object`[]

Lines

##### OrderWithLinesResponse.order_date

> **order_date**: `string`

Order Date
Format: date

##### OrderWithLinesResponse.order_no

> **order_no**: `string`

Order No

##### OrderWithLinesResponse.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### OrderWithLinesResponse.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### OrderWithLinesResponse.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### OrderWithLinesResponse.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### OrderWithLinesResponse.status

> **status**: `string`

Status

###### Default

```ts
open;
```

##### OrderWithLinesResponse.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

#### Page_ProductOut\_

> **Page_ProductOut\_**: `object`

Page[ProductOut]

##### Page_ProductOut\_.items

> **items**: `object`[]

Items

##### Page_ProductOut\_.page

> **page**: `number`

Page

##### Page_ProductOut\_.per_page

> **per_page**: `number`

Per Page

##### Page_ProductOut\_.total

> **total**: `number`

Total

#### ProductOut

> **ProductOut**: `object`

ProductOut

##### Description

Product response model.

##### ProductOut.created_at

> **created_at**: `string`

Created At
Format: date-time

##### ProductOut.customer_part_no

> **customer_part_no**: `string` \| `null`

Customer Part No

##### ProductOut.id

> **id**: `number`

Id

##### ProductOut.internal_unit

> **internal_unit**: `string`

Internal Unit

##### ProductOut.is_active

> **is_active**: `boolean`

Is Active

##### ProductOut.maker_item_code

> **maker_item_code**: `string` \| `null`

Maker Item Code

##### ProductOut.product_code

> **product_code**: `string`

Product Code

##### ProductOut.product_name

> **product_name**: `string`

Product Name

##### ProductOut.updated_at

> **updated_at**: `string`

Updated At
Format: date-time

#### ProductResponse

> **ProductResponse**: `object`

ProductResponse

##### ProductResponse.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### ProductResponse.base_unit

> **base_unit**: `string`

Base Unit

###### Default

```ts
EA;
```

##### ProductResponse.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### ProductResponse.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### ProductResponse.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### ProductResponse.internal_unit

> **internal_unit**: `string`

Internal Unit

##### ProductResponse.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### ProductResponse.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### ProductResponse.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### ProductResponse.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### ProductResponse.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### ProductResponse.packaging_qty

> **packaging_qty**: `string`

Packaging Qty

##### ProductResponse.packaging_unit

> **packaging_unit**: `string`

Packaging Unit

##### ProductResponse.product_code

> **product_code**: `string`

Product Code

##### ProductResponse.product_name

> **product_name**: `string`

Product Name

##### ProductResponse.requires_lot_number

> **requires_lot_number**: `boolean`

Requires Lot Number

###### Default

```ts
true;
```

##### ProductResponse.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### ProductResponse.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### ProductResponse.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### ProductResponse.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

#### ResponseBase

> **ResponseBase**: `object`

ResponseBase

##### Description

API共通レスポンス

##### ResponseBase.data?

> `optional` **data**: `Record`\<`string`, `never`\> \| `null`

Data

##### ResponseBase.message?

> `optional` **message**: `string` \| `null`

Message

##### ResponseBase.success

> **success**: `boolean`

Success

#### SapRegisterOptions

> **SapRegisterOptions**: `object`

SapRegisterOptions

##### Description

SAP送信オプション

##### SapRegisterOptions.retry

> **retry**: `number`

Retry

###### Default

```ts
1;
```

##### SapRegisterOptions.timeout_sec

> **timeout_sec**: `number`

Timeout Sec

###### Default

```ts
30;
```

#### SapRegisterRequest

> **SapRegisterRequest**: `object`

SapRegisterRequest

##### Description

SAP送信リクエスト

##### SapRegisterRequest.options

> **options**: \{ `retry`: `number`; `timeout_sec`: `number`; \} \| `null`

###### Type Declaration

\{ `retry`: `number`; `timeout_sec`: `number`; \}

`null`

###### Default

```ts
{
             *       "retry": 1,
             *       "timeout_sec": 30
             *     }
```

##### SapRegisterRequest.target

> **target**: `object`

##### SapRegisterRequest.target.type

> **type**: `string`

Type

##### SapRegisterRequest.target.value

> **value**: `unknown`

Value

#### SapRegisterResponse

> **SapRegisterResponse**: `object`

SapRegisterResponse

##### Description

SAP送信レスポンス

##### SapRegisterResponse.error_message?

> `optional` **error_message**: `string` \| `null`

Error Message

##### SapRegisterResponse.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### SapRegisterResponse.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### SapRegisterResponse.sent

> **sent**: `number`

Sent

##### SapRegisterResponse.status

> **status**: `string`

Status

#### SapRegisterTarget

> **SapRegisterTarget**: `object`

SapRegisterTarget

##### Description

SAP送信対象指定

##### SapRegisterTarget.type

> **type**: `string`

Type

##### SapRegisterTarget.value

> **value**: `unknown`

Value

#### SapSyncLogResponse

> **SapSyncLogResponse**: `object`

SapSyncLogResponse

##### Description

SAP連携ログレスポンス

##### SapSyncLogResponse.executed_at

> **executed_at**: `string`

Executed At
Format: date-time

##### SapSyncLogResponse.id

> **id**: `number`

Id

##### SapSyncLogResponse.order_id?

> `optional` **order_id**: `number` \| `null`

Order Id

##### SapSyncLogResponse.payload?

> `optional` **payload**: `string` \| `null`

Payload

##### SapSyncLogResponse.result?

> `optional` **result**: `string` \| `null`

Result

##### SapSyncLogResponse.status

> **status**: `string`

Status

#### StockMovementCreate

> **StockMovementCreate**: `object`

StockMovementCreate

##### StockMovementCreate.batch_id?

> `optional` **batch_id**: `string` \| `null`

Batch Id

##### StockMovementCreate.created_by

> **created_by**: `string`

Created By

###### Default

```ts
system;
```

##### StockMovementCreate.lot_id?

> `optional` **lot_id**: `number` \| `null`

Lot Id

##### StockMovementCreate.product_id

> **product_id**: `string`

Product Id

##### StockMovementCreate.quantity_delta

> **quantity_delta**: `number`

Quantity Delta

##### StockMovementCreate.reason

> **reason**: `string`

Reason

##### StockMovementCreate.source_id?

> `optional` **source_id**: `number` \| `null`

Source Id

##### StockMovementCreate.source_table?

> `optional` **source_table**: `string` \| `null`

Source Table

##### StockMovementCreate.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### StockMovementResponse

> **StockMovementResponse**: `object`

StockMovementResponse

##### StockMovementResponse.batch_id?

> `optional` **batch_id**: `string` \| `null`

Batch Id

##### StockMovementResponse.created_at

> **created_at**: `string`

Created At
Format: date-time

##### StockMovementResponse.created_by

> **created_by**: `string`

Created By

###### Default

```ts
system;
```

##### StockMovementResponse.id

> **id**: `number`

Id

##### StockMovementResponse.lot_id?

> `optional` **lot_id**: `number` \| `null`

Lot Id

##### StockMovementResponse.occurred_at

> **occurred_at**: `string`

Occurred At
Format: date-time

##### StockMovementResponse.product_id

> **product_id**: `string`

Product Id

##### StockMovementResponse.quantity_delta

> **quantity_delta**: `number`

Quantity Delta

##### StockMovementResponse.reason

> **reason**: `string`

Reason

##### StockMovementResponse.source_id?

> `optional` **source_id**: `number` \| `null`

Source Id

##### StockMovementResponse.source_table?

> `optional` **source_table**: `string` \| `null`

Source Table

##### StockMovementResponse.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### StockMovementResponse.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### SupplierCreate

> **SupplierCreate**: `object`

SupplierCreate

##### SupplierCreate.address?

> `optional` **address**: `string` \| `null`

Address

##### SupplierCreate.supplier_code

> **supplier_code**: `string`

Supplier Code

##### SupplierCreate.supplier_name

> **supplier_name**: `string`

Supplier Name

#### SupplierResponse

> **SupplierResponse**: `object`

SupplierResponse

##### SupplierResponse.address?

> `optional` **address**: `string` \| `null`

Address

##### SupplierResponse.supplier_code

> **supplier_code**: `string`

Supplier Code

##### SupplierResponse.supplier_name

> **supplier_name**: `string`

Supplier Name

#### SupplierUpdate

> **SupplierUpdate**: `object`

SupplierUpdate

##### SupplierUpdate.address?

> `optional` **address**: `string` \| `null`

Address

##### SupplierUpdate.supplier_name?

> `optional` **supplier_name**: `string` \| `null`

Supplier Name

#### ValidationError

> **ValidationError**: `object`

ValidationError

##### ValidationError.loc

> **loc**: (`string` \| `number`)[]

Location

##### ValidationError.msg

> **msg**: `string`

Message

##### ValidationError.type

> **type**: `string`

Error Type

#### WarehouseAllocOut

> **WarehouseAllocOut**: `object`

WarehouseAllocOut

##### WarehouseAllocOut.quantity

> **quantity**: `number`

Quantity

##### WarehouseAllocOut.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

#### WarehouseCreate

> **WarehouseCreate**: `object`

WarehouseCreate

##### WarehouseCreate.address?

> `optional` **address**: `string` \| `null`

Address

##### WarehouseCreate.is_active

> **is_active**: `number`

Is Active

###### Default

```ts
1;
```

##### WarehouseCreate.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### WarehouseCreate.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

#### WarehouseListResponse

> **WarehouseListResponse**: `object`

WarehouseListResponse

##### WarehouseListResponse.items

> **items**: `object`[]

Items

#### WarehouseOut

> **WarehouseOut**: `object`

WarehouseOut

##### WarehouseOut.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### WarehouseOut.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

#### WarehouseResponse

> **WarehouseResponse**: `object`

WarehouseResponse

##### WarehouseResponse.address?

> `optional` **address**: `string` \| `null`

Address

##### WarehouseResponse.is_active

> **is_active**: `number`

Is Active

###### Default

```ts
1;
```

##### WarehouseResponse.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### WarehouseResponse.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

#### WarehouseUpdate

> **WarehouseUpdate**: `object`

WarehouseUpdate

##### WarehouseUpdate.address?

> `optional` **address**: `string` \| `null`

Address

##### WarehouseUpdate.is_active

> **is_active**: `number` \| `null`

Is Active

###### Default

```ts
1;
```

##### WarehouseUpdate.warehouse_name?

> `optional` **warehouse_name**: `string` \| `null`

Warehouse Name
