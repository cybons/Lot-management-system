[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [services/api/query-keys](../README.md) / QUERY_KEYS

# Variable: QUERY_KEYS

> `const` **QUERY_KEYS**: `object`

Defined in: [src/services/api/query-keys.ts:65](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api/query-keys.ts#L65)

## Type Declaration

### lots

> `readonly` **lots**: `object` = `lotKeys`

#### lots.all

> **all**: readonly \[`"lots"`\]

#### lots.byProduct()

> **byProduct**: (`productCode`) => readonly \[`"lots"`, `"list"`, \{ `product_code`: `string`; \}\]

##### Parameters

###### productCode

`string`

##### Returns

readonly \[`"lots"`, `"list"`, \{ `product_code`: `string`; \}\]

#### lots.bySupplier()

> **bySupplier**: (`supplierCode`) => readonly \[`"lots"`, `"list"`, \{ `supplier_code`: `string`; \}\]

##### Parameters

###### supplierCode

`string`

##### Returns

readonly \[`"lots"`, `"list"`, \{ `supplier_code`: `string`; \}\]

#### lots.detail()

> **detail**: (`id`) => readonly \[`"lots"`, `"detail"`, `number`\]

##### Parameters

###### id

`number`

##### Returns

readonly \[`"lots"`, `"detail"`, `number`\]

#### lots.details()

> **details**: () => readonly \[`"lots"`, `"detail"`\]

##### Returns

readonly \[`"lots"`, `"detail"`\]

#### lots.list()

> **list**: (`params?`) => readonly \[`"lots"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

##### Parameters

###### params?

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

##### Returns

readonly \[`"lots"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

#### lots.lists()

> **lists**: () => readonly \[`"lots"`, `"list"`\]

##### Returns

readonly \[`"lots"`, `"list"`\]

#### lots.withStock()

> **withStock**: () => readonly \[`"lots"`, `"list"`, \{ `has_stock`: `true`; \}\]

##### Returns

readonly \[`"lots"`, `"list"`, \{ `has_stock`: `true`; \}\]

### masters

> `readonly` **masters**: `object`

#### masters.customer()

> `readonly` **customer**: (`code`) => readonly \[`"masters"`, `"customers"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"customers"`, `"detail"`, `string`\]

#### masters.customers()

> `readonly` **customers**: () => readonly \[`"masters"`, `"customers"`, `"list"`\] \| readonly \[`"masters"`, `"customers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Returns

readonly \[`"masters"`, `"customers"`, `"list"`\] \| readonly \[`"masters"`, `"customers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### masters.product()

> `readonly` **product**: (`code`) => readonly \[`"masters"`, `"products"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"products"`, `"detail"`, `string`\]

#### masters.products()

> `readonly` **products**: () => readonly \[`"masters"`, `"products"`, `"list"`\] \| readonly \[`"masters"`, `"products"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Returns

readonly \[`"masters"`, `"products"`, `"list"`\] \| readonly \[`"masters"`, `"products"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### masters.supplier()

> `readonly` **supplier**: (`code`) => readonly \[`"masters"`, `"suppliers"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"suppliers"`, `"detail"`, `string`\]

#### masters.suppliers()

> `readonly` **suppliers**: () => readonly \[`"masters"`, `"suppliers"`, `"list"`\] \| readonly \[`"masters"`, `"suppliers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Returns

readonly \[`"masters"`, `"suppliers"`, `"list"`\] \| readonly \[`"masters"`, `"suppliers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### masters.warehouse()

> `readonly` **warehouse**: (`code`) => readonly \[`"masters"`, `"warehouses"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"warehouses"`, `"detail"`, `string`\]

#### masters.warehouses()

> `readonly` **warehouses**: () => readonly \[`"masters"`, `"warehouses"`, `"list"`\] \| readonly \[`"masters"`, `"warehouses"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Returns

readonly \[`"masters"`, `"warehouses"`, `"list"`\] \| readonly \[`"masters"`, `"warehouses"`, `"list"`, `Record`\<`string`, `unknown`\>\]

### orders

> `readonly` **orders**: `object` = `orderKeys`

#### orders.all

> **all**: readonly \[`"orders"`\]

#### orders.allocated()

> **allocated**: () => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

##### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### orders.byCustomer()

> **byCustomer**: (`customerCode`) => readonly \[`"orders"`, `"list"`, \{ `customer_code`: `string`; \}\]

##### Parameters

###### customerCode

`string`

##### Returns

readonly \[`"orders"`, `"list"`, \{ `customer_code`: `string`; \}\]

#### orders.byStatus()

> **byStatus**: (`status`) => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

##### Parameters

###### status

`string`

##### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### orders.detail()

> **detail**: (`id`) => readonly \[`"orders"`, `"detail"`, `number`\]

##### Parameters

###### id

`number`

##### Returns

readonly \[`"orders"`, `"detail"`, `number`\]

#### orders.details()

> **details**: () => readonly \[`"orders"`, `"detail"`\]

##### Returns

readonly \[`"orders"`, `"detail"`\]

#### orders.list()

> **list**: (`params?`) => readonly \[`"orders"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

##### Parameters

###### params?

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

##### Returns

readonly \[`"orders"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

#### orders.lists()

> **lists**: () => readonly \[`"orders"`, `"list"`\]

##### Returns

readonly \[`"orders"`, `"list"`\]

#### orders.pending()

> **pending**: () => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

##### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

#### orders.shipped()

> **shipped**: () => readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]

##### Returns

readonly \[`"orders"`, `"list"`, \{ `status`: `string`; \}\]
