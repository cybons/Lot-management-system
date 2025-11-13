[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/orders/api](../README.md) / reMatchOrder

# Function: reMatchOrder()

> **reMatchOrder**(`orderId`): `Promise`\<\{ `created_allocation_ids?`: `number`[]; `order_id`: `number`; `preview`: \{ `lines?`: `object`[]; `order_id`: `number`; `warnings?`: `string`[]; \}; \}\>

Defined in: [src/features/orders/api.ts:49](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/api.ts#L49)

FEFO再マッチング実行

## Parameters

### orderId

`number`

## Returns

`Promise`\<\{ `created_allocation_ids?`: `number`[]; `order_id`: `number`; `preview`: \{ `lines?`: `object`[]; `order_id`: `number`; `warnings?`: `string`[]; \}; \}\>
