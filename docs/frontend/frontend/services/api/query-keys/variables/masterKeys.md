[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [services/api/query-keys](../README.md) / masterKeys

# Variable: masterKeys

> `const` **masterKeys**: `object`

Defined in: [src/services/api/query-keys.ts:58](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api/query-keys.ts#L58)

マスタ関連のクエリキー

## Type Declaration

### customers

> `readonly` **customers**: `object`

#### customers.all

> `readonly` **all**: readonly \[`"masters"`, `"customers"`\] = `base`

#### customers.detail()

> `readonly` **detail**: (`code`) => readonly \[`"masters"`, `"customers"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"customers"`, `"detail"`, `string`\]

#### customers.details()

> **details**: () => readonly \[`"masters"`, `"customers"`, `"detail"`\]

##### Returns

readonly \[`"masters"`, `"customers"`, `"detail"`\]

#### customers.list()

> `readonly` **list**: (`params?`) => readonly \[`"masters"`, `"customers"`, `"list"`\] \| readonly \[`"masters"`, `"customers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Parameters

###### params?

`Record`\<`string`, `unknown`\>

##### Returns

readonly \[`"masters"`, `"customers"`, `"list"`\] \| readonly \[`"masters"`, `"customers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### customers.lists()

> **lists**: () => readonly \[`"masters"`, `"customers"`, `"list"`\]

##### Returns

readonly \[`"masters"`, `"customers"`, `"list"`\]

### products

> `readonly` **products**: `object`

#### products.all

> `readonly` **all**: readonly \[`"masters"`, `"products"`\] = `base`

#### products.detail()

> `readonly` **detail**: (`code`) => readonly \[`"masters"`, `"products"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"products"`, `"detail"`, `string`\]

#### products.details()

> **details**: () => readonly \[`"masters"`, `"products"`, `"detail"`\]

##### Returns

readonly \[`"masters"`, `"products"`, `"detail"`\]

#### products.list()

> `readonly` **list**: (`params?`) => readonly \[`"masters"`, `"products"`, `"list"`\] \| readonly \[`"masters"`, `"products"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Parameters

###### params?

`Record`\<`string`, `unknown`\>

##### Returns

readonly \[`"masters"`, `"products"`, `"list"`\] \| readonly \[`"masters"`, `"products"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### products.lists()

> **lists**: () => readonly \[`"masters"`, `"products"`, `"list"`\]

##### Returns

readonly \[`"masters"`, `"products"`, `"list"`\]

### suppliers

> `readonly` **suppliers**: `object`

#### suppliers.all

> `readonly` **all**: readonly \[`"masters"`, `"suppliers"`\] = `base`

#### suppliers.detail()

> `readonly` **detail**: (`code`) => readonly \[`"masters"`, `"suppliers"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"suppliers"`, `"detail"`, `string`\]

#### suppliers.details()

> **details**: () => readonly \[`"masters"`, `"suppliers"`, `"detail"`\]

##### Returns

readonly \[`"masters"`, `"suppliers"`, `"detail"`\]

#### suppliers.list()

> `readonly` **list**: (`params?`) => readonly \[`"masters"`, `"suppliers"`, `"list"`\] \| readonly \[`"masters"`, `"suppliers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Parameters

###### params?

`Record`\<`string`, `unknown`\>

##### Returns

readonly \[`"masters"`, `"suppliers"`, `"list"`\] \| readonly \[`"masters"`, `"suppliers"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### suppliers.lists()

> **lists**: () => readonly \[`"masters"`, `"suppliers"`, `"list"`\]

##### Returns

readonly \[`"masters"`, `"suppliers"`, `"list"`\]

### warehouses

> `readonly` **warehouses**: `object`

#### warehouses.all

> `readonly` **all**: readonly \[`"masters"`, `"warehouses"`\] = `base`

#### warehouses.detail()

> `readonly` **detail**: (`code`) => readonly \[`"masters"`, `"warehouses"`, `"detail"`, `string`\]

##### Parameters

###### code

`string`

##### Returns

readonly \[`"masters"`, `"warehouses"`, `"detail"`, `string`\]

#### warehouses.details()

> **details**: () => readonly \[`"masters"`, `"warehouses"`, `"detail"`\]

##### Returns

readonly \[`"masters"`, `"warehouses"`, `"detail"`\]

#### warehouses.list()

> `readonly` **list**: (`params?`) => readonly \[`"masters"`, `"warehouses"`, `"list"`\] \| readonly \[`"masters"`, `"warehouses"`, `"list"`, `Record`\<`string`, `unknown`\>\]

##### Parameters

###### params?

`Record`\<`string`, `unknown`\>

##### Returns

readonly \[`"masters"`, `"warehouses"`, `"list"`\] \| readonly \[`"masters"`, `"warehouses"`, `"list"`, `Record`\<`string`, `unknown`\>\]

#### warehouses.lists()

> **lists**: () => readonly \[`"masters"`, `"warehouses"`, `"list"`\]

##### Returns

readonly \[`"masters"`, `"warehouses"`, `"list"`\]
