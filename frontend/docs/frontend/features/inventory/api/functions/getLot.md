[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/inventory/api](../README.md) / getLot

# Function: getLot()

> **getLot**(`id`): `Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>

Defined in: [src/features/inventory/api.ts:41](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/inventory/api.ts#L41)

ロット詳細取得

## Parameters

### id

`number`

## Returns

`Promise`\<\{ `created_at`: `string`; `current_quantity`: `number`; `expiry_date?`: `string` \| `null`; `id`: `number`; `inventory_unit?`: `string` \| `null`; `kanban_class?`: `string` \| `null`; `last_updated?`: `string` \| `null`; `lot_number`: `string`; `lot_unit?`: `string` \| `null`; `mfg_date?`: `string` \| `null`; `product_code`: `string`; `product_name?`: `string` \| `null`; `qc_certificate_file?`: `string` \| `null`; `qc_certificate_status?`: `string` \| `null`; `receipt_date`: `string`; `received_by?`: `string` \| `null`; `sales_unit?`: `string` \| `null`; `source_doc?`: `string` \| `null`; `supplier_code`: `string`; `updated_at?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; `warehouse_id?`: `number` \| `null`; \}\>
