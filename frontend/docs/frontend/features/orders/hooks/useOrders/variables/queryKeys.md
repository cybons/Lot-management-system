[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [features/orders/hooks/useOrders](../README.md) / queryKeys

# Variable: queryKeys

> `const` **queryKeys**: `object`

Defined in: [src/features/orders/hooks/useOrders.ts:8](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/hooks/useOrders.ts#L8)

## Type Declaration

### order()

> **order**: (`id`) => readonly \[`"orders"`, `"detail"`, `number`\]

#### Parameters

##### id

`number`

#### Returns

readonly \[`"orders"`, `"detail"`, `number`\]

### orders()

> **orders**: (`params`) => readonly \[`"orders"`, [`OrdersListParams`](../../../../../types/aliases/type-aliases/OrdersListParams.md)\]

#### Parameters

##### params

[`OrdersListParams`](../../../../../types/aliases/type-aliases/OrdersListParams.md)

#### Returns

readonly \[`"orders"`, [`OrdersListParams`](../../../../../types/aliases/type-aliases/OrdersListParams.md)\]

### withAlloc()

> **withAlloc**: () => readonly \[`"orders"`, `"with-alloc"`\]

#### Returns

readonly \[`"orders"`, `"with-alloc"`\]
