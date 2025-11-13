[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [services/api/lot-service](../README.md) / listLotsWithStock

# Function: listLotsWithStock()

> **listLotsWithStock**(`params?`): `Promise`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md)[]\>

Defined in: [src/services/api/lot-service.ts:54](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api/lot-service.ts#L54)

在庫のあるロットのみを取得

## Parameters

### params?

`Omit`\<\{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \}, `"has_stock"`\>

## Returns

`Promise`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md)[]\>
