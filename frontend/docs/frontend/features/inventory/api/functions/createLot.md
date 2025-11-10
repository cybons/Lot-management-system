[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/inventory/api](../README.md) / createLot

# Function: createLot()

> **createLot**(`data`): `Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>

Defined in: [src/features/inventory/api.ts:46](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/inventory/api.ts#L46)

ロット新規作成

## Parameters

### data

#### expiry_date?

`string` \| `null`

Expiry Date

#### inventory_unit?

`string` \| `null`

Inventory Unit

#### kanban_class?

`string` \| `null`

Kanban Class

#### lot_number

`string`

Lot Number

#### lot_unit?

`string` \| `null`

Lot Unit

#### mfg_date?

`string` \| `null`

Mfg Date

#### product_code

`string`

Product Code

#### qc_certificate_file?

`string` \| `null`

Qc Certificate File

#### qc_certificate_status?

`string` \| `null`

Qc Certificate Status

#### receipt_date

`string`

Receipt Date
Format: date

#### received_by?

`string` \| `null`

Received By

#### sales_unit?

`string` \| `null`

Sales Unit

#### source_doc?

`string` \| `null`

Source Doc

#### supplier_code

`string`

Supplier Code

#### warehouse_code?

`string` \| `null`

Warehouse Code

#### warehouse_id?

`number` \| `null`

Warehouse Id

## Returns

`Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>
