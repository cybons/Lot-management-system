[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [lib/admin-api](../README.md) / FullSampleDataRequest

# Interface: FullSampleDataRequest

Defined in: [src/lib/admin-api.ts:24](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/admin-api.ts#L24)

## Properties

### lots?

> `optional` **lots**: `object`[]

Defined in: [src/lib/admin-api.ts:30](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/admin-api.ts#L30)

#### expiry_date?

> `optional` **expiry_date**: `string` \| `null`

#### lot_number

> **lot_number**: `string`

#### product_code

> **product_code**: `string`

#### receipt_date

> **receipt_date**: `string`

#### supplier_code

> **supplier_code**: `string`

#### warehouse_code

> **warehouse_code**: `string`

---

### orders?

> `optional` **orders**: `object`[]

Defined in: [src/lib/admin-api.ts:52](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/admin-api.ts#L52)

#### customer_code

> **customer_code**: `string`

#### lines

> **lines**: `object`[]

#### order_date?

> `optional` **order_date**: `string` \| `null`

#### order_no

> **order_no**: `string`

---

### products?

> `optional` **products**: `object`[]

Defined in: [src/lib/admin-api.ts:25](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/admin-api.ts#L25)

#### product_code

> **product_code**: `string`

#### product_name

> **product_name**: `string`

#### requires_lot_number

> **requires_lot_number**: `boolean`

---

### receipts?

> `optional` **receipts**: `object`[]

Defined in: [src/lib/admin-api.ts:38](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/admin-api.ts#L38)

#### lines

> **lines**: `object`[]

#### receipt_date

> **receipt_date**: `string`

#### receipt_no

> **receipt_no**: `string`

#### supplier_code

> **supplier_code**: `string`

#### warehouse_code

> **warehouse_code**: `string`
