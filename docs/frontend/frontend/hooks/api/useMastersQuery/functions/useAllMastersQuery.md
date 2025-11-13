[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/api/useMastersQuery](../README.md) / useAllMastersQuery

# Function: useAllMastersQuery()

> **useAllMastersQuery**(): `object`

Defined in: [src/hooks/api/useMastersQuery.ts:158](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/api/useMastersQuery.ts#L158)

全マスタデータを一度に取得するフック
(ページ初期化時に使用)

## Returns

`object`

全マスタデータのクエリ結果

### customers

> **customers**: [`Customer`](../../../../utils/validators/master-schemas/type-aliases/Customer.md)[] \| `undefined` = `customersQuery.data`

### error

> **error**: `Error` \| `null`

### isError

> **isError**: `boolean`

### isLoading

> **isLoading**: `boolean`

### products

> **products**: [`Product`](../../../../utils/validators/master-schemas/type-aliases/Product.md)[] \| `undefined` = `productsQuery.data`

### warehouses

> **warehouses**: [`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md)[] \| `undefined` = `warehousesQuery.data`

## Example

```tsx
const { products, customers, warehouses, isLoading } = useAllMastersQuery();
```
