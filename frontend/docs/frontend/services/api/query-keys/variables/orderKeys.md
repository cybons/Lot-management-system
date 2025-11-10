[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [services/api/query-keys](../README.md) / orderKeys

# Variable: orderKeys

> `const` **orderKeys**: `object`

Defined in: [src/services/api/query-keys.ts:41](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api/query-keys.ts#L41)

受注関連のクエリキー

## Type Declaration

### all

> **all**: readonly \[`"orders"`\]

### allocated()

> **allocated**: () => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

### byCustomer()

> **byCustomer**: (`customerCode`) => readonly \[`"orders"`, `"list"`, \{ `customer_code`: `string`; \}\]

#### Parameters

##### customerCode

`string`

#### Returns

readonly \[`"orders"`, `"list"`, \{ `customer_code`: `string`; \}\]

### byStatus()

> **byStatus**: (`status`) => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### Parameters

##### status

`string`

#### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

### detail()

> **detail**: (`id`) => readonly \[`"orders"`, `"detail"`, `number`\]

#### Parameters

##### id

`number`

#### Returns

readonly \[`"orders"`, `"detail"`, `number`\]

### details()

> **details**: () => readonly \[`"orders"`, `"detail"`\]

#### Returns

readonly \[`"orders"`, `"detail"`\]

### list()

> **list**: (`params?`) => readonly \[`"orders"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

#### Parameters

##### params?

###### has_stock?

`boolean` = `...`

###### limit?

`number` = `...`

###### lot_number?

`string` = `...`

###### product_code?

`string` = `...`

###### skip?

`number` = `...`

###### supplier_code?

`string` = `...`

###### warehouse_code?

`string` = `...`

#### Returns

readonly \[`"orders"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

### lists()

> **lists**: () => readonly \[`"orders"`, `"list"`\]

#### Returns

readonly \[`"orders"`, `"list"`\]

### pending()

> **pending**: () => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

### shipped()

> **shipped**: () => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]
