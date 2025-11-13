[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [services/api/query-keys](../README.md) / lotKeys

# Variable: lotKeys

> `const` **lotKeys**: `object`

Defined in: [src/services/api/query-keys.ts:26](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api/query-keys.ts#L26)

ロット関連のクエリキー

## Type Declaration

### all

> **all**: readonly \[`"lots"`\]

### byProduct()

> **byProduct**: (`productCode`) => readonly \[`"lots"`, `"list"`, \{ `product_code`: `string`; \}\]

#### Parameters

##### productCode

`string`

#### Returns

readonly \[`"lots"`, `"list"`, \{ `product_code`: `string`; \}\]

### bySupplier()

> **bySupplier**: (`supplierCode`) => readonly \[`"lots"`, `"list"`, \{ `supplier_code`: `string`; \}\]

#### Parameters

##### supplierCode

`string`

#### Returns

readonly \[`"lots"`, `"list"`, \{ `supplier_code`: `string`; \}\]

### detail()

> **detail**: (`id`) => readonly \[`"lots"`, `"detail"`, `number`\]

#### Parameters

##### id

`number`

#### Returns

readonly \[`"lots"`, `"detail"`, `number`\]

### details()

> **details**: () => readonly \[`"lots"`, `"detail"`\]

#### Returns

readonly \[`"lots"`, `"detail"`\]

### list()

> **list**: (`params?`) => readonly \[`"lots"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

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

readonly \[`"lots"`, `"list"`, \{ `has_stock?`: `boolean`; `limit?`: `number`; `lot_number?`: `string`; `product_code?`: `string`; `skip?`: `number`; `supplier_code?`: `string`; `warehouse_code?`: `string`; \} \| `undefined`\]

### lists()

> **lists**: () => readonly \[`"lots"`, `"list"`\]

#### Returns

readonly \[`"lots"`, `"list"`\]

### withStock()

> **withStock**: () => readonly \[`"lots"`, `"list"`, \{ `has_stock`: `true`; \}\]

#### Returns

readonly \[`"lots"`, `"list"`, \{ `has_stock`: `true`; \}\]
