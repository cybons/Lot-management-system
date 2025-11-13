[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [lib/api-client](../README.md) / api

# Variable: api

> `const` **api**: `object`

Defined in: [src/lib/api-client.ts:19](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/api-client.ts#L19)

## Type Declaration

### createLot()

> **createLot**: (`data`) => `Promise`\<[`LotResponse`](../../../types/aliases/type-aliases/LotResponse.md)\>

#### Parameters

##### data

[`LotCreate`](../../../types/aliases/type-aliases/LotCreate.md)

#### Returns

`Promise`\<[`LotResponse`](../../../types/aliases/type-aliases/LotResponse.md)\>

### getLot()

> **getLot**: (`id`) => `Promise`\<[`LotResponse`](../../../types/aliases/type-aliases/LotResponse.md)\>

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`LotResponse`](../../../types/aliases/type-aliases/LotResponse.md)\>

### getLots()

> **getLots**: () => `Promise`\<[`LotResponse`](../../../types/aliases/type-aliases/LotResponse.md)[]\>

#### Returns

`Promise`\<[`LotResponse`](../../../types/aliases/type-aliases/LotResponse.md)[]\>

### getOrder()

> **getOrder**: (`orderId`) => `Promise`\<[`OrderResponse`](../../../types/aliases/type-aliases/OrderResponse.md)\>

#### Parameters

##### orderId

`number`

#### Returns

`Promise`\<[`OrderResponse`](../../../types/aliases/type-aliases/OrderResponse.md)\>

### getOrders()

> **getOrders**: (`params?`) => `Promise`\<[`OrderResponse`](../../../types/aliases/type-aliases/OrderResponse.md)[]\>

#### Parameters

##### params?

[`OrdersListParams`](../../../types/aliases/type-aliases/OrdersListParams.md)

#### Returns

`Promise`\<[`OrderResponse`](../../../types/aliases/type-aliases/OrderResponse.md)[]\>

### getProducts()

> **getProducts**: () => `Promise`\<[`Product`](../../../types/aliases/type-aliases/Product.md)[]\>

#### Returns

`Promise`\<[`Product`](../../../types/aliases/type-aliases/Product.md)[]\>

### getSuppliers()

> **getSuppliers**: () => `Promise`\<[`Supplier`](../../../types/aliases/type-aliases/Supplier.md)[]\>

#### Returns

`Promise`\<[`Supplier`](../../../types/aliases/type-aliases/Supplier.md)[]\>

### getWarehouses()

> **getWarehouses**: () => `Promise`\<[`Warehouse`](../../../types/aliases/type-aliases/Warehouse.md)[]\>

#### Returns

`Promise`\<[`Warehouse`](../../../types/aliases/type-aliases/Warehouse.md)[]\>
