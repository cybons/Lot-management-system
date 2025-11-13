[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [types/api](../README.md) / operations

# Interface: operations

Defined in: [src/types/api.d.ts:2451](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2451)

## Properties

### activate_version_api_forecast_activate_post

> **activate_version_api_forecast_activate_post**: `object`

Defined in: [src/types/api.d.ts:4153](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4153)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.deactivate_others

> **deactivate_others**: `boolean`

Deactivate Others

###### Default

```ts
true;
```

##### requestBody.content.application/json.version_no

> **version_no**: `number`

Version No

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.activated_version

> **activated_version**: `number`

Activated Version

##### responses.200.content.application/json.deactivated_versions

> **deactivated_versions**: `number`[]

Deactivated Versions

###### Default

```ts
[];
```

##### responses.200.content.application/json.message

> **message**: `string`

Message

##### responses.200.content.application/json.success

> **success**: `boolean`

Success

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### allocate_order_api_allocations_orders\_\_order_id\_\_allocate_post

> **allocate_order_api_allocations_orders\_\_order_id\_\_allocate_post**: `object`

Defined in: [src/types/api.d.ts:3615](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3615)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.order_id

> **order_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_allocation_ids?

> `optional` **created_allocation_ids**: `number`[]

Created Allocation Ids

##### responses.200.content.application/json.order_id

> **order_id**: `number`

Order Id

##### responses.200.content.application/json.preview

> **preview**: `object`

##### responses.200.content.application/json.preview.lines?

> `optional` **lines**: `object`[]

Lines

##### responses.200.content.application/json.preview.order_id

> **order_id**: `number`

Order Id

##### responses.200.content.application/json.preview.warnings?

> `optional` **warnings**: `string`[]

Warnings

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### bulk_import_forecasts_api_forecast_bulk_post

> **bulk_import_forecasts_api_forecast_bulk_post**: `object`

Defined in: [src/types/api.d.ts:4100](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4100)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.deactivate_old_version

> **deactivate_old_version**: `boolean`

Deactivate Old Version

###### Default

```ts
true;
```

##### requestBody.content.application/json.forecasts

> **forecasts**: `object`[]

Forecasts

##### requestBody.content.application/json.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### requestBody.content.application/json.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### requestBody.content.application/json.version_no

> **version_no**: `number`

Version No

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.error_count

> **error_count**: `number`

Error Count

##### responses.201.content.application/json.error_details?

> `optional` **error_details**: `string` \| `null`

Error Details

##### responses.201.content.application/json.imported_count

> **imported_count**: `number`

Imported Count

##### responses.201.content.application/json.message

> **message**: `string`

Message

##### responses.201.content.application/json.skipped_count

> **skipped_count**: `number`

Skipped Count

##### responses.201.content.application/json.success

> **success**: `boolean`

Success

##### responses.201.content.application/json.version_no

> **version_no**: `number`

Version No

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### bulk_load_masters_api_masters_bulk_load_post

> **bulk_load_masters_api_masters_bulk_load_post**: `object`

Defined in: [src/types/api.d.ts:3093](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3093)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.customers?

> `optional` **customers**: `object`[]

Customers

##### requestBody.content.application/json.products?

> `optional` **products**: `object`[]

Products

##### requestBody.content.application/json.suppliers?

> `optional` **suppliers**: `object`[]

Suppliers

##### requestBody.content.application/json.warehouses?

> `optional` **warehouses**: `object`[]

Warehouses

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created?

> `optional` **created**: `object`

Created

###### Index Signature

\[`key`: `string`\]: `string`[]

##### responses.200.content.application/json.warnings?

> `optional` **warnings**: `string`[]

Warnings

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### cancel_order_api_orders\_\_order_id\_\_cancel_delete

> **cancel_order_api_orders\_\_order_id\_\_cancel_delete**: `object`

Defined in: [src/types/api.d.ts:3491](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3491)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.order_id

> **order_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_customer_api_masters_customers_post

> **create_customer_api_masters_customers_post**: `object`

Defined in: [src/types/api.d.ts:2645](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2645)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### requestBody.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### requestBody.content.application/json.customer_name

> **customer_name**: `string`

Customer Name

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.201.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### responses.201.content.application/json.customer_name

> **customer_name**: `string`

Customer Name

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_forecast_api_forecast_post

> **create_forecast_api_forecast_post**: `object`

Defined in: [src/types/api.d.ts:3972](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3972)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.customer_id

> **customer_id**: `string`

Customer Id

##### requestBody.content.application/json.date_day?

> `optional` **date_day**: `string` \| `null`

Date Day

##### requestBody.content.application/json.date_dekad_start?

> `optional` **date_dekad_start**: `string` \| `null`

Date Dekad Start

##### requestBody.content.application/json.granularity

> **granularity**: `"daily"` \| `"dekad"` \| `"monthly"`

Granularity

##### requestBody.content.application/json.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### requestBody.content.application/json.product_id

> **product_id**: `string`

Product Id

##### requestBody.content.application/json.qty_forecast

> **qty_forecast**: `number`

Qty Forecast

##### requestBody.content.application/json.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### requestBody.content.application/json.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### requestBody.content.application/json.version_no

> **version_no**: `number`

Version No

###### Default

```ts
1;
```

##### requestBody.content.application/json.year_month?

> `optional` **year_month**: `string` \| `null`

Year Month

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.201.content.application/json.customer_id

> **customer_id**: `string`

Customer Id

##### responses.201.content.application/json.date_day?

> `optional` **date_day**: `string` \| `null`

Date Day

##### responses.201.content.application/json.date_dekad_start?

> `optional` **date_dekad_start**: `string` \| `null`

Date Dekad Start

##### responses.201.content.application/json.forecast_id?

> `optional` **forecast_id**: `number` \| `null`

Forecast Id

##### responses.201.content.application/json.granularity

> **granularity**: `"daily"` \| `"dekad"` \| `"monthly"`

Granularity

##### responses.201.content.application/json.id

> **id**: `number`

Id

##### responses.201.content.application/json.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### responses.201.content.application/json.product_id

> **product_id**: `string`

Product Id

##### responses.201.content.application/json.qty_forecast

> **qty_forecast**: `number`

Qty Forecast

##### responses.201.content.application/json.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### responses.201.content.application/json.supplier_id?

> `optional` **supplier_id**: `string` \| `null`

Supplier Id

##### responses.201.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.201.content.application/json.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### responses.201.content.application/json.version_no

> **version_no**: `number`

Version No

###### Default

```ts
1;
```

##### responses.201.content.application/json.year_month?

> `optional` **year_month**: `string` \| `null`

Year Month

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_lot_api_lots_post

> **create_lot_api_lots_post**: `object`

Defined in: [src/types/api.d.ts:3164](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3164)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### requestBody.content.application/json.inventory_unit?

> `optional` **inventory_unit**: `string` \| `null`

Inventory Unit

##### requestBody.content.application/json.kanban_class?

> `optional` **kanban_class**: `string` \| `null`

Kanban Class

##### requestBody.content.application/json.lot_number

> **lot_number**: `string`

Lot Number

##### requestBody.content.application/json.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### requestBody.content.application/json.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### requestBody.content.application/json.product_code

> **product_code**: `string`

Product Code

##### requestBody.content.application/json.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### requestBody.content.application/json.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### requestBody.content.application/json.receipt_date

> **receipt_date**: `string`

Receipt Date
Format: date

##### requestBody.content.application/json.received_by?

> `optional` **received_by**: `string` \| `null`

Received By

##### requestBody.content.application/json.sales_unit?

> `optional` **sales_unit**: `string` \| `null`

Sales Unit

##### requestBody.content.application/json.source_doc?

> `optional` **source_doc**: `string` \| `null`

Source Doc

##### requestBody.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### requestBody.content.application/json.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### requestBody.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.201.content.application/json.current_quantity

> **current_quantity**: `number`

Current Quantity

###### Default

```ts
0;
```

##### responses.201.content.application/json.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### responses.201.content.application/json.id

> **id**: `number`

Id

##### responses.201.content.application/json.inventory_unit?

> `optional` **inventory_unit**: `string` \| `null`

Inventory Unit

##### responses.201.content.application/json.kanban_class?

> `optional` **kanban_class**: `string` \| `null`

Kanban Class

##### responses.201.content.application/json.last_updated?

> `optional` **last_updated**: `string` \| `null`

Last Updated

##### responses.201.content.application/json.lot_number

> **lot_number**: `string`

Lot Number

##### responses.201.content.application/json.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### responses.201.content.application/json.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### responses.201.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.201.content.application/json.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

##### responses.201.content.application/json.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### responses.201.content.application/json.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### responses.201.content.application/json.receipt_date

> **receipt_date**: `string`

Receipt Date
Format: date

##### responses.201.content.application/json.received_by?

> `optional` **received_by**: `string` \| `null`

Received By

##### responses.201.content.application/json.sales_unit?

> `optional` **sales_unit**: `string` \| `null`

Sales Unit

##### responses.201.content.application/json.source_doc?

> `optional` **source_doc**: `string` \| `null`

Source Doc

##### responses.201.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### responses.201.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.201.content.application/json.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### responses.201.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_order_api_orders_post

> **create_order_api_orders_post**: `object`

Defined in: [src/types/api.d.ts:3392](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3392)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### requestBody.content.application/json.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### requestBody.content.application/json.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### requestBody.content.application/json.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### requestBody.content.application/json.lines?

> `optional` **lines**: `object`[]

Lines

##### requestBody.content.application/json.order_date

> **order_date**: `string`

Order Date
Format: date

##### requestBody.content.application/json.order_no

> **order_no**: `string`

Order No

##### requestBody.content.application/json.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### requestBody.content.application/json.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### requestBody.content.application/json.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### requestBody.content.application/json.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### requestBody.content.application/json.status

> **status**: `string`

Status

###### Default

```ts
open;
```

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.201.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### responses.201.content.application/json.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### responses.201.content.application/json.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### responses.201.content.application/json.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### responses.201.content.application/json.id

> **id**: `number`

Id

##### responses.201.content.application/json.lines?

> `optional` **lines**: `object`[]

Lines

##### responses.201.content.application/json.order_date

> **order_date**: `string`

Order Date
Format: date

##### responses.201.content.application/json.order_no

> **order_no**: `string`

Order No

##### responses.201.content.application/json.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### responses.201.content.application/json.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### responses.201.content.application/json.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### responses.201.content.application/json.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### responses.201.content.application/json.status

> **status**: `string`

Status

###### Default

```ts
open;
```

##### responses.201.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_product_api_masters_products_post

> **create_product_api_masters_products_post**: `object`

Defined in: [src/types/api.d.ts:2485](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2485)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### requestBody.content.application/json.base_unit

> **base_unit**: `string`

Base Unit

###### Default

```ts
EA;
```

##### requestBody.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### requestBody.content.application/json.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### requestBody.content.application/json.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### requestBody.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### requestBody.content.application/json.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### requestBody.content.application/json.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### requestBody.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### requestBody.content.application/json.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### requestBody.content.application/json.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### requestBody.content.application/json.packaging_qty

> **packaging_qty**: `string` \| `number`

Packaging Qty

##### requestBody.content.application/json.packaging_unit

> **packaging_unit**: `string`

Packaging Unit

##### requestBody.content.application/json.product_code

> **product_code**: `string`

Product Code

##### requestBody.content.application/json.product_name

> **product_name**: `string`

Product Name

##### requestBody.content.application/json.requires_lot_number

> **requires_lot_number**: `boolean`

Requires Lot Number

###### Default

```ts
true;
```

##### requestBody.content.application/json.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### requestBody.content.application/json.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### requestBody.content.application/json.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### requestBody.content.application/json.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### responses.201.content.application/json.base_unit

> **base_unit**: `string`

Base Unit

###### Default

```ts
EA;
```

##### responses.201.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### responses.201.content.application/json.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### responses.201.content.application/json.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### responses.201.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### responses.201.content.application/json.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### responses.201.content.application/json.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### responses.201.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### responses.201.content.application/json.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### responses.201.content.application/json.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### responses.201.content.application/json.packaging_qty

> **packaging_qty**: `string`

Packaging Qty

##### responses.201.content.application/json.packaging_unit

> **packaging_unit**: `string`

Packaging Unit

##### responses.201.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.201.content.application/json.product_name

> **product_name**: `string`

Product Name

##### responses.201.content.application/json.requires_lot_number

> **requires_lot_number**: `boolean`

Requires Lot Number

###### Default

```ts
true;
```

##### responses.201.content.application/json.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### responses.201.content.application/json.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### responses.201.content.application/json.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### responses.201.content.application/json.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_product_api_products_post

> **create_product_api_products_post**: `object`

Defined in: [src/types/api.d.ts:4252](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4252)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### requestBody.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### requestBody.content.application/json.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### requestBody.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### requestBody.content.application/json.product_code

> **product_code**: `string`

Product Code

##### requestBody.content.application/json.product_name

> **product_name**: `string`

Product Name

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.201.content.application/json.customer_part_no

> **customer_part_no**: `string` \| `null`

Customer Part No

##### responses.201.content.application/json.id

> **id**: `number`

Id

##### responses.201.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### responses.201.content.application/json.is_active

> **is_active**: `boolean`

Is Active

##### responses.201.content.application/json.maker_item_code

> **maker_item_code**: `string` \| `null`

Maker Item Code

##### responses.201.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.201.content.application/json.product_name

> **product_name**: `string`

Product Name

##### responses.201.content.application/json.updated_at

> **updated_at**: `string`

Updated At
Format: date-time

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_stock_movement_api_lots_movements_post

> **create_stock_movement_api_lots_movements_post**: `object`

Defined in: [src/types/api.d.ts:3323](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3323)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.batch_id?

> `optional` **batch_id**: `string` \| `null`

Batch Id

##### requestBody.content.application/json.created_by

> **created_by**: `string`

Created By

###### Default

```ts
system;
```

##### requestBody.content.application/json.lot_id?

> `optional` **lot_id**: `number` \| `null`

Lot Id

##### requestBody.content.application/json.product_id

> **product_id**: `string`

Product Id

##### requestBody.content.application/json.quantity_delta

> **quantity_delta**: `number`

Quantity Delta

##### requestBody.content.application/json.reason

> **reason**: `string`

Reason

##### requestBody.content.application/json.source_id?

> `optional` **source_id**: `number` \| `null`

Source Id

##### requestBody.content.application/json.source_table?

> `optional` **source_table**: `string` \| `null`

Source Table

##### requestBody.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.batch_id?

> `optional` **batch_id**: `string` \| `null`

Batch Id

##### responses.201.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.201.content.application/json.created_by

> **created_by**: `string`

Created By

###### Default

```ts
system;
```

##### responses.201.content.application/json.id

> **id**: `number`

Id

##### responses.201.content.application/json.lot_id?

> `optional` **lot_id**: `number` \| `null`

Lot Id

##### responses.201.content.application/json.occurred_at

> **occurred_at**: `string`

Occurred At
Format: date-time

##### responses.201.content.application/json.product_id

> **product_id**: `string`

Product Id

##### responses.201.content.application/json.quantity_delta

> **quantity_delta**: `number`

Quantity Delta

##### responses.201.content.application/json.reason

> **reason**: `string`

Reason

##### responses.201.content.application/json.source_id?

> `optional` **source_id**: `number` \| `null`

Source Id

##### responses.201.content.application/json.source_table?

> `optional` **source_table**: `string` \| `null`

Source Table

##### responses.201.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.201.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_supplier_api_masters_suppliers_post

> **create_supplier_api_masters_suppliers_post**: `object`

Defined in: [src/types/api.d.ts:2805](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2805)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### requestBody.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### requestBody.content.application/json.supplier_name

> **supplier_name**: `string`

Supplier Name

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.201.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### responses.201.content.application/json.supplier_name

> **supplier_name**: `string`

Supplier Name

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### create_warehouse_api_masters_warehouses_post

> **create_warehouse_api_masters_warehouses_post**: `object`

Defined in: [src/types/api.d.ts:2965](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2965)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### requestBody.content.application/json.is_active

> **is_active**: `number`

Is Active

###### Default

```ts
1;
```

##### requestBody.content.application/json.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### requestBody.content.application/json.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

#### responses

> **responses**: `object`

##### responses.201

> **201**: `object`

###### Description

Successful Response

##### responses.201.content

> **content**: `object`

##### responses.201.content.application/json

> **application/json**: `object`

##### responses.201.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.201.content.application/json.is_active

> **is_active**: `number`

Is Active

###### Default

```ts
1;
```

##### responses.201.content.application/json.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### responses.201.content.application/json.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

##### responses.201.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_allocation_api_allocations\_\_allocation_id\_\_delete

> **delete_allocation_api_allocations\_\_allocation_id\_\_delete**: `object`

Defined in: [src/types/api.d.ts:3553](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3553)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.allocation_id

> **allocation_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_customer_api_masters_customers\_\_customer_code\_\_delete

> **delete_customer_api_masters_customers\_\_customer_code\_\_delete**: `object`

Defined in: [src/types/api.d.ts:2744](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2744)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.customer_code

> **customer_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_forecast_api_forecast\_\_forecast_id\_\_delete

> **delete_forecast_api_forecast\_\_forecast_id\_\_delete**: `object`

Defined in: [src/types/api.d.ts:4071](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4071)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.forecast_id

> **forecast_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_lot_api_lots\_\_lot_id\_\_delete

> **delete_lot_api_lots\_\_lot_id\_\_delete**: `object`

Defined in: [src/types/api.d.ts:3263](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3263)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.lot_id

> **lot_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_product_api_masters_products\_\_product_code\_\_delete

> **delete_product_api_masters_products\_\_product_code\_\_delete**: `object`

Defined in: [src/types/api.d.ts:2584](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2584)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.product_code

> **product_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_product_api_products\_\_product_id\_\_delete

> **delete_product_api_products\_\_product_id\_\_delete**: `object`

Defined in: [src/types/api.d.ts:4316](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4316)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.product_id

> **product_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_supplier_api_masters_suppliers\_\_supplier_code\_\_delete

> **delete_supplier_api_masters_suppliers\_\_supplier_code\_\_delete**: `object`

Defined in: [src/types/api.d.ts:2904](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2904)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.supplier_code

> **supplier_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### delete_warehouse_api_masters_warehouses\_\_warehouse_code\_\_delete

> **delete_warehouse_api_masters_warehouses\_\_warehouse_code\_\_delete**: `object`

Defined in: [src/types/api.d.ts:3064](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3064)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.warehouse_code

> **warehouse_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.204

> **204**: `object`

###### Description

Successful Response

##### responses.204.content?

> `optional` **content**: `undefined`

##### responses.204.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### drag_assign_allocation_api_allocations_drag_assign_post

> **drag_assign_allocation_api_allocations_drag_assign_post**: `object`

Defined in: [src/types/api.d.ts:3520](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3520)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.allocate_qty

> **allocate_qty**: `number`

Allocate Qty

##### requestBody.content.application/json.lot_id

> **lot_id**: `number`

Lot Id

##### requestBody.content.application/json.order_line_id

> **order_line_id**: `number`

Order Line Id

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `unknown`

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_customer_api_masters_customers\_\_customer_code\_\_get

> **get_customer_api_masters_customers\_\_customer_code\_\_get**: `object`

Defined in: [src/types/api.d.ts:2678](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2678)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.customer_code

> **customer_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.200.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### responses.200.content.application/json.customer_name

> **customer_name**: `string`

Customer Name

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_dashboard_stats_api_admin_stats_get

> **get_dashboard_stats_api_admin_stats_get**: `object`

Defined in: [src/types/api.d.ts:3776](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3776)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.total_orders

> **total_orders**: `number`

Total Orders

##### responses.200.content.application/json.total_stock

> **total_stock**: `number`

Total Stock

##### responses.200.content.application/json.unallocated_orders

> **unallocated_orders**: `number`

Unallocated Orders

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_forecast_api_forecast\_\_forecast_id\_\_get

> **get_forecast_api_forecast\_\_forecast_id\_\_get**: `object`

Defined in: [src/types/api.d.ts:4005](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4005)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.forecast_id

> **forecast_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.customer_id

> **customer_id**: `string`

Customer Id

##### responses.200.content.application/json.date_day?

> `optional` **date_day**: `string` \| `null`

Date Day

##### responses.200.content.application/json.date_dekad_start?

> `optional` **date_dekad_start**: `string` \| `null`

Date Dekad Start

##### responses.200.content.application/json.forecast_id?

> `optional` **forecast_id**: `number` \| `null`

Forecast Id

##### responses.200.content.application/json.granularity

> **granularity**: `"daily"` \| `"dekad"` \| `"monthly"`

Granularity

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### responses.200.content.application/json.product_id

> **product_id**: `string`

Product Id

##### responses.200.content.application/json.qty_forecast

> **qty_forecast**: `number`

Qty Forecast

##### responses.200.content.application/json.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### responses.200.content.application/json.supplier_id?

> `optional` **supplier_id**: `string` \| `null`

Supplier Id

##### responses.200.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.200.content.application/json.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### responses.200.content.application/json.version_no

> **version_no**: `number`

Version No

###### Default

```ts
1;
```

##### responses.200.content.application/json.year_month?

> `optional` **year_month**: `string` \| `null`

Year Month

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_lot_api_lots\_\_lot_id\_\_get

> **get_lot_api_lots\_\_lot_id\_\_get**: `object`

Defined in: [src/types/api.d.ts:3197](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3197)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.lot_id

> **lot_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.current_quantity

> **current_quantity**: `number`

Current Quantity

###### Default

```ts
0;
```

##### responses.200.content.application/json.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.inventory_unit?

> `optional` **inventory_unit**: `string` \| `null`

Inventory Unit

##### responses.200.content.application/json.kanban_class?

> `optional` **kanban_class**: `string` \| `null`

Kanban Class

##### responses.200.content.application/json.last_updated?

> `optional` **last_updated**: `string` \| `null`

Last Updated

##### responses.200.content.application/json.lot_number

> **lot_number**: `string`

Lot Number

##### responses.200.content.application/json.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### responses.200.content.application/json.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### responses.200.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.200.content.application/json.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

##### responses.200.content.application/json.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### responses.200.content.application/json.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### responses.200.content.application/json.receipt_date

> **receipt_date**: `string`

Receipt Date
Format: date

##### responses.200.content.application/json.received_by?

> `optional` **received_by**: `string` \| `null`

Received By

##### responses.200.content.application/json.sales_unit?

> `optional` **sales_unit**: `string` \| `null`

Sales Unit

##### responses.200.content.application/json.source_doc?

> `optional` **source_doc**: `string` \| `null`

Source Doc

##### responses.200.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### responses.200.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.200.content.application/json.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### responses.200.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_order_api_orders\_\_order_id\_\_get

> **get_order_api_orders\_\_order_id\_\_get**: `object`

Defined in: [src/types/api.d.ts:3425](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3425)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.order_id

> **order_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### responses.200.content.application/json.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### responses.200.content.application/json.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### responses.200.content.application/json.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.lines?

> `optional` **lines**: `object`[]

Lines

##### responses.200.content.application/json.order_date

> **order_date**: `string`

Order Date
Format: date

##### responses.200.content.application/json.order_no

> **order_no**: `string`

Order No

##### responses.200.content.application/json.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### responses.200.content.application/json.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### responses.200.content.application/json.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### responses.200.content.application/json.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### responses.200.content.application/json.status

> **status**: `string`

Status

###### Default

```ts
open;
```

##### responses.200.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_product_api_masters_products\_\_product_code\_\_get

> **get_product_api_masters_products\_\_product_code\_\_get**: `object`

Defined in: [src/types/api.d.ts:2518](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2518)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.product_code

> **product_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### responses.200.content.application/json.base_unit

> **base_unit**: `string`

Base Unit

###### Default

```ts
EA;
```

##### responses.200.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### responses.200.content.application/json.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### responses.200.content.application/json.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### responses.200.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### responses.200.content.application/json.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### responses.200.content.application/json.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### responses.200.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### responses.200.content.application/json.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### responses.200.content.application/json.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### responses.200.content.application/json.packaging_qty

> **packaging_qty**: `string`

Packaging Qty

##### responses.200.content.application/json.packaging_unit

> **packaging_unit**: `string`

Packaging Unit

##### responses.200.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.200.content.application/json.product_name

> **product_name**: `string`

Product Name

##### responses.200.content.application/json.requires_lot_number

> **requires_lot_number**: `boolean`

Requires Lot Number

###### Default

```ts
true;
```

##### responses.200.content.application/json.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### responses.200.content.application/json.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### responses.200.content.application/json.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### responses.200.content.application/json.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_product_api_products\_\_product_id\_\_get

> **get_product_api_products\_\_product_id\_\_get**: `object`

Defined in: [src/types/api.d.ts:4285](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4285)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.product_id

> **product_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.customer_part_no

> **customer_part_no**: `string` \| `null`

Customer Part No

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### responses.200.content.application/json.is_active

> **is_active**: `boolean`

Is Active

##### responses.200.content.application/json.maker_item_code

> **maker_item_code**: `string` \| `null`

Maker Item Code

##### responses.200.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.200.content.application/json.product_name

> **product_name**: `string`

Product Name

##### responses.200.content.application/json.updated_at

> **updated_at**: `string`

Updated At
Format: date-time

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_supplier_api_masters_suppliers\_\_supplier_code\_\_get

> **get_supplier_api_masters_suppliers\_\_supplier_code\_\_get**: `object`

Defined in: [src/types/api.d.ts:2838](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2838)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.supplier_code

> **supplier_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.200.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### responses.200.content.application/json.supplier_name

> **supplier_name**: `string`

Supplier Name

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### get_warehouse_api_masters_warehouses\_\_warehouse_code\_\_get

> **get_warehouse_api_masters_warehouses\_\_warehouse_code\_\_get**: `object`

Defined in: [src/types/api.d.ts:2998](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2998)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.warehouse_code

> **warehouse_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.200.content.application/json.is_active

> **is_active**: `number`

Is Active

###### Default

```ts
1;
```

##### responses.200.content.application/json.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### responses.200.content.application/json.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### health_api_health_get

> **health_api_health_get**: `object`

Defined in: [src/types/api.d.ts:4440](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4440)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `unknown`

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### healthz_api_healthz_get

> **healthz_api_healthz_get**: `object`

Defined in: [src/types/api.d.ts:4400](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4400)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `unknown`

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_customers_api_masters_customers_get

> **list_customers_api_masters_customers_get**: `object`

Defined in: [src/types/api.d.ts:2613](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2613)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.skip?

> `optional` **skip**: `number`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_forecast_summary_api_forecast_list_get

> **list_forecast_summary_api_forecast_list_get**: `object`

Defined in: [src/types/api.d.ts:3901](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3901)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.product_code?

> `optional` **product_code**: `string` \| `null`

##### parameters.query.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.items

> **items**: `object`[]

Items

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_forecasts_api_forecast_get

> **list_forecasts_api_forecast_get**: `object`

Defined in: [src/types/api.d.ts:3933](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3933)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.customer_code?

> `optional` **customer_code**: `string` \| `null`

##### parameters.query.customer_id?

> `optional` **customer_id**: `string` \| `null`

##### parameters.query.granularity?

> `optional` **granularity**: `string` \| `null`

##### parameters.query.is_active?

> `optional` **is_active**: `boolean` \| `null`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.product_code?

> `optional` **product_code**: `string` \| `null`

##### parameters.query.product_id?

> `optional` **product_id**: `string` \| `null`

##### parameters.query.skip?

> `optional` **skip**: `number`

##### parameters.query.version_no?

> `optional` **version_no**: `number` \| `null`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_lot_movements_api_lots\_\_lot_id\_\_movements_get

> **list_lot_movements_api_lots\_\_lot_id\_\_movements_get**: `object`

Defined in: [src/types/api.d.ts:3292](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3292)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.lot_id

> **lot_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_lots_api_lots_get

> **list_lots_api_lots_get**: `object`

Defined in: [src/types/api.d.ts:3126](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3126)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.expiry_from?

> `optional` **expiry_from**: `string` \| `null`

##### parameters.query.expiry_to?

> `optional` **expiry_to**: `string` \| `null`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.product_code?

> `optional` **product_code**: `string` \| `null`

##### parameters.query.skip?

> `optional` **skip**: `number`

##### parameters.query.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

##### parameters.query.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

##### parameters.query.with_stock?

> `optional` **with_stock**: `boolean`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_ocr_submissions_api_integration_ai_ocr_submissions_get

> **list_ocr_submissions_api_integration_ai_ocr_submissions_get**: `object`

Defined in: [src/types/api.d.ts:3679](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3679)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.skip?

> `optional` **skip**: `number`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_orders_api_orders_get

> **list_orders_api_orders_get**: `object`

Defined in: [src/types/api.d.ts:3356](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3356)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.customer_code?

> `optional` **customer_code**: `string` \| `null`

##### parameters.query.date_from?

> `optional` **date_from**: `string` \| `null`

##### parameters.query.date_to?

> `optional` **date_to**: `string` \| `null`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.skip?

> `optional` **skip**: `number`

##### parameters.query.status?

> `optional` **status**: `string` \| `null`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_presets_api_admin_presets_get

> **list_presets_api_admin_presets_get**: `object`

Defined in: [src/types/api.d.ts:3849](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3849)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.presets

> **presets**: `string`[]

Presets

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_products_api_masters_products_get

> **list_products_api_masters_products_get**: `object`

Defined in: [src/types/api.d.ts:2452](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2452)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.search?

> `optional` **search**: `string` \| `null`

##### parameters.query.skip?

> `optional` **skip**: `number`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_products_api_products_get

> **list_products_api_products_get**: `object`

Defined in: [src/types/api.d.ts:4219](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4219)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.page?

> `optional` **page**: `number`

##### parameters.query.per_page?

> `optional` **per_page**: `number`

##### parameters.query.q?

> `optional` **q**: `string` \| `null`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.items

> **items**: `object`[]

Items

##### responses.200.content.application/json.page

> **page**: `number`

Page

##### responses.200.content.application/json.per_page

> **per_page**: `number`

Per Page

##### responses.200.content.application/json.total

> **total**: `number`

Total

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_sap_logs_api_integration_sap_logs_get

> **list_sap_logs_api_integration_sap_logs_get**: `object`

Defined in: [src/types/api.d.ts:3744](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3744)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.skip?

> `optional` **skip**: `number`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_suppliers_api_masters_suppliers_get

> **list_suppliers_api_masters_suppliers_get**: `object`

Defined in: [src/types/api.d.ts:2773](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2773)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.skip?

> `optional` **skip**: `number`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_versions_api_forecast_versions_get

> **list_versions_api_forecast_versions_get**: `object`

Defined in: [src/types/api.d.ts:4133](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4133)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.versions

> **versions**: `object`[]

Versions

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_warehouses_api_masters_warehouses_get

> **list_warehouses_api_masters_warehouses_get**: `object`

Defined in: [src/types/api.d.ts:2933](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2933)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `object`

##### parameters.query.limit?

> `optional` **limit**: `number`

##### parameters.query.skip?

> `optional` **skip**: `number`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`[]

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### list_warehouses_api_warehouse_alloc_warehouses_get

> **list_warehouses_api_warehouse_alloc_warehouses_get**: `object`

Defined in: [src/types/api.d.ts:4380](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4380)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.items

> **items**: `object`[]

Items

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### load_full_sample_data_api_admin_load_full_sample_data_post

> **load_full_sample_data_api_admin_load_full_sample_data_post**: `object`

Defined in: [src/types/api.d.ts:3816](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3816)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.lots?

> `optional` **lots**: `object`[] \| `null`

Lots

##### requestBody.content.application/json.orders?

> `optional` **orders**: `object`[] \| `null`

Orders

##### requestBody.content.application/json.products?

> `optional` **products**: `object`[] \| `null`

Products

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.data?

> `optional` **data**: `Record`\<`string`, `never`\> \| `null`

Data

##### responses.200.content.application/json.message?

> `optional` **message**: `string` \| `null`

Message

##### responses.200.content.application/json.success

> **success**: `boolean`

Success

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### load_preset_api_admin_load_preset_post

> **load_preset_api_admin_load_preset_post**: `object`

Defined in: [src/types/api.d.ts:3869](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3869)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query

> **query**: `object`

##### parameters.query.name

> **name**: `string`

###### Description

プリセット名

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.preset

> **preset**: `string`

Preset

##### responses.200.content.application/json.result

> **result**: `object`

##### responses.200.content.application/json.result.created?

> `optional` **created**: `object`

Created

###### Index Signature

\[`key`: `string`\]: `string`[]

##### responses.200.content.application/json.result.warnings?

> `optional` **warnings**: `string`[]

Warnings

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### match_forecasts_api_forecast_match_post

> **match_forecasts_api_forecast_match_post**: `object`

Defined in: [src/types/api.d.ts:4186](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4186)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.date_from?

> `optional` **date_from**: `string` \| `null`

Date From

##### requestBody.content.application/json.date_to?

> `optional` **date_to**: `string` \| `null`

Date To

##### requestBody.content.application/json.force_rematch

> **force_rematch**: `boolean`

Force Rematch

###### Default

```ts
false;
```

##### requestBody.content.application/json.order_id?

> `optional` **order_id**: `number` \| `null`

Order Id

##### requestBody.content.application/json.order_ids?

> `optional` **order_ids**: `number`[] \| `null`

Order Ids

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.matched_lines

> **matched_lines**: `number`

Matched Lines

##### responses.200.content.application/json.message

> **message**: `string`

Message

##### responses.200.content.application/json.results

> **results**: `object`[]

Results

###### Default

```ts
[];
```

##### responses.200.content.application/json.success

> **success**: `boolean`

Success

##### responses.200.content.application/json.total_lines

> **total_lines**: `number`

Total Lines

##### responses.200.content.application/json.unmatched_lines

> **unmatched_lines**: `number`

Unmatched Lines

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### preview_allocations_api_allocations_preview_post

> **preview_allocations_api_allocations_preview_post**: `object`

Defined in: [src/types/api.d.ts:3582](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3582)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.order_id

> **order_id**: `number`

Order Id

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.lines?

> `optional` **lines**: `object`[]

Lines

##### responses.200.content.application/json.order_id

> **order_id**: `number`

Order Id

##### responses.200.content.application/json.warnings?

> `optional` **warnings**: `string`[]

Warnings

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### readyz_api_readyz_get

> **readyz_api_readyz_get**: `object`

Defined in: [src/types/api.d.ts:4420](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4420)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `unknown`

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### register_to_sap_api_integration_sap_register_post

> **register_to_sap_api_integration_sap_register_post**: `object`

Defined in: [src/types/api.d.ts:3711](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3711)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.options

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

##### requestBody.content.application/json.target

> **target**: `object`

##### requestBody.content.application/json.target.type

> **type**: `string`

Type

##### requestBody.content.application/json.target.value

> **value**: `unknown`

Value

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.error_message?

> `optional` **error_message**: `string` \| `null`

Error Message

##### responses.200.content.application/json.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### responses.200.content.application/json.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### responses.200.content.application/json.sent

> **sent**: `number`

Sent

##### responses.200.content.application/json.status

> **status**: `string`

Status

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### reset_database_api_admin_reset_database_post

> **reset_database_api_admin_reset_database_post**: `object`

Defined in: [src/types/api.d.ts:3796](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3796)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.data?

> `optional` **data**: `Record`\<`string`, `never`\> \| `null`

Data

##### responses.200.content.application/json.message?

> `optional` **message**: `string` \| `null`

Message

##### responses.200.content.application/json.success

> **success**: `boolean`

Success

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### root\_\_get

> **root\_\_get**: `object`

Defined in: [src/types/api.d.ts:4493](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4493)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody?

> `optional` **requestBody**: `undefined`

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `unknown`

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### submit_ocr_data_api_integration_ai_ocr_submit_post

> **submit_ocr_data_api_integration_ai_ocr_submit_post**: `object`

Defined in: [src/types/api.d.ts:3646](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3646)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.file_name?

> `optional` **file_name**: `string` \| `null`

File Name

##### requestBody.content.application/json.operator?

> `optional` **operator**: `string` \| `null`

Operator

##### requestBody.content.application/json.records

> **records**: `object`[]

Records

##### requestBody.content.application/json.schema_version

> **schema_version**: `string`

Schema Version

###### Default

```ts
1.0.0
```

##### requestBody.content.application/json.source

> **source**: `string`

Source

###### Default

```ts
PAD;
```

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_lines

> **created_lines**: `number`

Created Lines

##### responses.200.content.application/json.created_orders

> **created_orders**: `number`

Created Orders

##### responses.200.content.application/json.error_details?

> `optional` **error_details**: `string` \| `null`

Error Details

##### responses.200.content.application/json.failed_records

> **failed_records**: `number`

Failed Records

##### responses.200.content.application/json.processed_records

> **processed_records**: `number`

Processed Records

##### responses.200.content.application/json.skipped_records

> **skipped_records**: `number`

Skipped Records

##### responses.200.content.application/json.status

> **status**: `string`

Status

##### responses.200.content.application/json.submission_id

> **submission_id**: `string`

Submission Id

##### responses.200.content.application/json.total_records

> **total_records**: `number`

Total Records

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_customer_api_masters_customers\_\_customer_code\_\_put

> **update_customer_api_masters_customers\_\_customer_code\_\_put**: `object`

Defined in: [src/types/api.d.ts:2709](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2709)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.customer_code

> **customer_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### requestBody.content.application/json.customer_name?

> `optional` **customer_name**: `string` \| `null`

Customer Name

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.200.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### responses.200.content.application/json.customer_name

> **customer_name**: `string`

Customer Name

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_forecast_api_forecast\_\_forecast_id\_\_put

> **update_forecast_api_forecast\_\_forecast_id\_\_put**: `object`

Defined in: [src/types/api.d.ts:4036](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4036)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.forecast_id

> **forecast_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.is_active?

> `optional` **is_active**: `boolean` \| `null`

Is Active

##### requestBody.content.application/json.qty_forecast?

> `optional` **qty_forecast**: `number` \| `null`

Qty Forecast

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.customer_id

> **customer_id**: `string`

Customer Id

##### responses.200.content.application/json.date_day?

> `optional` **date_day**: `string` \| `null`

Date Day

##### responses.200.content.application/json.date_dekad_start?

> `optional` **date_dekad_start**: `string` \| `null`

Date Dekad Start

##### responses.200.content.application/json.forecast_id?

> `optional` **forecast_id**: `number` \| `null`

Forecast Id

##### responses.200.content.application/json.granularity

> **granularity**: `"daily"` \| `"dekad"` \| `"monthly"`

Granularity

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.is_active

> **is_active**: `boolean`

Is Active

###### Default

```ts
true;
```

##### responses.200.content.application/json.product_id

> **product_id**: `string`

Product Id

##### responses.200.content.application/json.qty_forecast

> **qty_forecast**: `number`

Qty Forecast

##### responses.200.content.application/json.source_system

> **source_system**: `string`

Source System

###### Default

```ts
external;
```

##### responses.200.content.application/json.supplier_id?

> `optional` **supplier_id**: `string` \| `null`

Supplier Id

##### responses.200.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.200.content.application/json.version_issued_at

> **version_issued_at**: `string`

Version Issued At
Format: date-time

##### responses.200.content.application/json.version_no

> **version_no**: `number`

Version No

###### Default

```ts
1;
```

##### responses.200.content.application/json.year_month?

> `optional` **year_month**: `string` \| `null`

Year Month

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_lot_api_lots\_\_lot_id\_\_put

> **update_lot_api_lots\_\_lot_id\_\_put**: `object`

Defined in: [src/types/api.d.ts:3228](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3228)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.lot_id

> **lot_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### requestBody.content.application/json.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### requestBody.content.application/json.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### requestBody.content.application/json.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### requestBody.content.application/json.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### requestBody.content.application/json.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### requestBody.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.current_quantity

> **current_quantity**: `number`

Current Quantity

###### Default

```ts
0;
```

##### responses.200.content.application/json.expiry_date?

> `optional` **expiry_date**: `string` \| `null`

Expiry Date

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.inventory_unit?

> `optional` **inventory_unit**: `string` \| `null`

Inventory Unit

##### responses.200.content.application/json.kanban_class?

> `optional` **kanban_class**: `string` \| `null`

Kanban Class

##### responses.200.content.application/json.last_updated?

> `optional` **last_updated**: `string` \| `null`

Last Updated

##### responses.200.content.application/json.lot_number

> **lot_number**: `string`

Lot Number

##### responses.200.content.application/json.lot_unit?

> `optional` **lot_unit**: `string` \| `null`

Lot Unit

##### responses.200.content.application/json.mfg_date?

> `optional` **mfg_date**: `string` \| `null`

Mfg Date

##### responses.200.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.200.content.application/json.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

##### responses.200.content.application/json.qc_certificate_file?

> `optional` **qc_certificate_file**: `string` \| `null`

Qc Certificate File

##### responses.200.content.application/json.qc_certificate_status?

> `optional` **qc_certificate_status**: `string` \| `null`

Qc Certificate Status

##### responses.200.content.application/json.receipt_date

> **receipt_date**: `string`

Receipt Date
Format: date

##### responses.200.content.application/json.received_by?

> `optional` **received_by**: `string` \| `null`

Received By

##### responses.200.content.application/json.sales_unit?

> `optional` **sales_unit**: `string` \| `null`

Sales Unit

##### responses.200.content.application/json.source_doc?

> `optional` **source_doc**: `string` \| `null`

Source Doc

##### responses.200.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### responses.200.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.200.content.application/json.warehouse_code?

> `optional` **warehouse_code**: `string` \| `null`

Warehouse Code

##### responses.200.content.application/json.warehouse_id?

> `optional` **warehouse_id**: `number` \| `null`

Warehouse Id

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_order_status_api_orders\_\_order_id\_\_status_patch

> **update_order_status_api_orders\_\_order_id\_\_status_patch**: `object`

Defined in: [src/types/api.d.ts:3456](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3456)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.order_id

> **order_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.status

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

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.customer_code

> **customer_code**: `string`

Customer Code

##### responses.200.content.application/json.customer_order_no?

> `optional` **customer_order_no**: `string` \| `null`

Customer Order No

##### responses.200.content.application/json.customer_order_no_last6?

> `optional` **customer_order_no_last6**: `string` \| `null`

Customer Order No Last6

##### responses.200.content.application/json.delivery_mode?

> `optional` **delivery_mode**: `string` \| `null`

Delivery Mode

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.order_date

> **order_date**: `string`

Order Date
Format: date

##### responses.200.content.application/json.order_no

> **order_no**: `string`

Order No

##### responses.200.content.application/json.sap_error_msg?

> `optional` **sap_error_msg**: `string` \| `null`

Sap Error Msg

##### responses.200.content.application/json.sap_order_id?

> `optional` **sap_order_id**: `string` \| `null`

Sap Order Id

##### responses.200.content.application/json.sap_sent_at?

> `optional` **sap_sent_at**: `string` \| `null`

Sap Sent At

##### responses.200.content.application/json.sap_status?

> `optional` **sap_status**: `string` \| `null`

Sap Status

##### responses.200.content.application/json.status

> **status**: `string`

Status

###### Default

```ts
open;
```

##### responses.200.content.application/json.updated_at?

> `optional` **updated_at**: `string` \| `null`

Updated At

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_product_api_masters_products\_\_product_code\_\_put

> **update_product_api_masters_products\_\_product_code\_\_put**: `object`

Defined in: [src/types/api.d.ts:2549](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2549)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.product_code

> **product_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### requestBody.content.application/json.base_unit?

> `optional` **base_unit**: `string` \| `null`

Base Unit

##### requestBody.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### requestBody.content.application/json.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### requestBody.content.application/json.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### requestBody.content.application/json.internal_unit?

> `optional` **internal_unit**: `string` \| `null`

Internal Unit

##### requestBody.content.application/json.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### requestBody.content.application/json.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### requestBody.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### requestBody.content.application/json.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### requestBody.content.application/json.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### requestBody.content.application/json.packaging_qty?

> `optional` **packaging_qty**: `string` \| `number` \| `null`

Packaging Qty

##### requestBody.content.application/json.packaging_unit?

> `optional` **packaging_unit**: `string` \| `null`

Packaging Unit

##### requestBody.content.application/json.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

##### requestBody.content.application/json.requires_lot_number?

> `optional` **requires_lot_number**: `boolean` \| `null`

Requires Lot Number

##### requestBody.content.application/json.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### requestBody.content.application/json.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### requestBody.content.application/json.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### requestBody.content.application/json.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.assemble_div?

> `optional` **assemble_div**: `string` \| `null`

Assemble Div

##### responses.200.content.application/json.base_unit

> **base_unit**: `string`

Base Unit

###### Default

```ts
EA;
```

##### responses.200.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### responses.200.content.application/json.delivery_place_id?

> `optional` **delivery_place_id**: `number` \| `null`

Delivery Place Id

##### responses.200.content.application/json.delivery_place_name?

> `optional` **delivery_place_name**: `string` \| `null`

Delivery Place Name

##### responses.200.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### responses.200.content.application/json.ji_ku_text?

> `optional` **ji_ku_text**: `string` \| `null`

Ji Ku Text

##### responses.200.content.application/json.kumitsuke_ku_text?

> `optional` **kumitsuke_ku_text**: `string` \| `null`

Kumitsuke Ku Text

##### responses.200.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### responses.200.content.application/json.next_div?

> `optional` **next_div**: `string` \| `null`

Next Div

##### responses.200.content.application/json.packaging?

> `optional` **packaging**: `string` \| `null`

Packaging

##### responses.200.content.application/json.packaging_qty

> **packaging_qty**: `string`

Packaging Qty

##### responses.200.content.application/json.packaging_unit

> **packaging_unit**: `string`

Packaging Unit

##### responses.200.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.200.content.application/json.product_name

> **product_name**: `string`

Product Name

##### responses.200.content.application/json.requires_lot_number

> **requires_lot_number**: `boolean`

Requires Lot Number

###### Default

```ts
true;
```

##### responses.200.content.application/json.shelf_life_days?

> `optional` **shelf_life_days**: `number` \| `null`

Shelf Life Days

##### responses.200.content.application/json.shipping_warehouse_name?

> `optional` **shipping_warehouse_name**: `string` \| `null`

Shipping Warehouse Name

##### responses.200.content.application/json.supplier_code?

> `optional` **supplier_code**: `string` \| `null`

Supplier Code

##### responses.200.content.application/json.supplier_item_code?

> `optional` **supplier_item_code**: `string` \| `null`

Supplier Item Code

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_product_api_products\_\_product_id\_\_patch

> **update_product_api_products\_\_product_id\_\_patch**: `object`

Defined in: [src/types/api.d.ts:4345](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4345)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.product_id

> **product_id**: `number`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.customer_part_no?

> `optional` **customer_part_no**: `string` \| `null`

Customer Part No

##### requestBody.content.application/json.internal_unit?

> `optional` **internal_unit**: `string` \| `null`

Internal Unit

##### requestBody.content.application/json.is_active?

> `optional` **is_active**: `boolean` \| `null`

Is Active

##### requestBody.content.application/json.maker_item_code?

> `optional` **maker_item_code**: `string` \| `null`

Maker Item Code

##### requestBody.content.application/json.product_code?

> `optional` **product_code**: `string` \| `null`

Product Code

##### requestBody.content.application/json.product_name?

> `optional` **product_name**: `string` \| `null`

Product Name

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.created_at

> **created_at**: `string`

Created At
Format: date-time

##### responses.200.content.application/json.customer_part_no

> **customer_part_no**: `string` \| `null`

Customer Part No

##### responses.200.content.application/json.id

> **id**: `number`

Id

##### responses.200.content.application/json.internal_unit

> **internal_unit**: `string`

Internal Unit

##### responses.200.content.application/json.is_active

> **is_active**: `boolean`

Is Active

##### responses.200.content.application/json.maker_item_code

> **maker_item_code**: `string` \| `null`

Maker Item Code

##### responses.200.content.application/json.product_code

> **product_code**: `string`

Product Code

##### responses.200.content.application/json.product_name

> **product_name**: `string`

Product Name

##### responses.200.content.application/json.updated_at

> **updated_at**: `string`

Updated At
Format: date-time

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_supplier_api_masters_suppliers\_\_supplier_code\_\_put

> **update_supplier_api_masters_suppliers\_\_supplier_code\_\_put**: `object`

Defined in: [src/types/api.d.ts:2869](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L2869)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.supplier_code

> **supplier_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### requestBody.content.application/json.supplier_name?

> `optional` **supplier_name**: `string` \| `null`

Supplier Name

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.200.content.application/json.supplier_code

> **supplier_code**: `string`

Supplier Code

##### responses.200.content.application/json.supplier_name

> **supplier_name**: `string`

Supplier Name

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### update_warehouse_api_masters_warehouses\_\_warehouse_code\_\_put

> **update_warehouse_api_masters_warehouses\_\_warehouse_code\_\_put**: `object`

Defined in: [src/types/api.d.ts:3029](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L3029)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path

> **path**: `object`

##### parameters.path.warehouse_code

> **warehouse_code**: `string`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### requestBody.content.application/json.is_active

> **is_active**: `number` \| `null`

Is Active

###### Default

```ts
1;
```

##### requestBody.content.application/json.warehouse_name?

> `optional` **warehouse_name**: `string` \| `null`

Warehouse Name

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.address?

> `optional` **address**: `string` \| `null`

Address

##### responses.200.content.application/json.is_active

> **is_active**: `number`

Is Active

###### Default

```ts
1;
```

##### responses.200.content.application/json.warehouse_code

> **warehouse_code**: `string`

Warehouse Code

##### responses.200.content.application/json.warehouse_name

> **warehouse_name**: `string`

Warehouse Name

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

---

### validate_order_stock_api_orders_validate_post

> **validate_order_stock_api_orders_validate_post**: `object`

Defined in: [src/types/api.d.ts:4460](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/types/api.d.ts#L4460)

#### parameters

> **parameters**: `object`

##### parameters.cookie?

> `optional` **cookie**: `undefined`

##### parameters.header?

> `optional` **header**: `undefined`

##### parameters.path?

> `optional` **path**: `undefined`

##### parameters.query?

> `optional` **query**: `undefined`

#### requestBody

> **requestBody**: `object`

##### requestBody.content

> **content**: `object`

##### requestBody.content.application/json

> **application/json**: `object`

##### requestBody.content.application/json.lines

> **lines**: `object`[]

Lines

##### requestBody.content.application/json.ship_date?

> `optional` **ship_date**: `string` \| `null`

Ship Date

#### responses

> **responses**: `object`

##### responses.200

> **200**: `object`

###### Description

Successful Response

##### responses.200.content

> **content**: `object`

##### responses.200.content.application/json

> **application/json**: `object`

##### responses.200.content.application/json.data?

> `optional` **data**: \{ `available`: `number`; `details`: \{ `per_lot?`: `object`[]; `ship_date?`: `string` \| `null`; `warehouse_code`: `string`; \}; `product_code`: `string`; `required`: `number`; \} \| `null`

###### Type Declaration

\{ `available`: `number`; `details`: \{ `per_lot?`: `object`[]; `ship_date?`: `string` \| `null`; `warehouse_code`: `string`; \}; `product_code`: `string`; `required`: `number`; \}

`null`

##### responses.200.content.application/json.message

> **message**: `string`

Message

##### responses.200.content.application/json.ok

> **ok**: `boolean`

Ok

##### responses.200.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`

##### responses.422

> **422**: `object`

###### Description

Validation Error

##### responses.422.content

> **content**: `object`

##### responses.422.content.application/json

> **application/json**: `object`

##### responses.422.content.application/json.detail?

> `optional` **detail**: `object`[]

Detail

##### responses.422.headers

> **headers**: `object`

###### Index Signature

\[`name`: `string`\]: `unknown`
