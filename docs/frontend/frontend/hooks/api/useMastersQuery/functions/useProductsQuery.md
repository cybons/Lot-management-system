[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/api/useMastersQuery](../README.md) / useProductsQuery

# Function: useProductsQuery()

> **useProductsQuery**(`options?`): `UseQueryResult`\<[`Product`](../../../../utils/validators/master-schemas/type-aliases/Product.md)[], `Error`\>

Defined in: [src/hooks/api/useMastersQuery.ts:24](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/api/useMastersQuery.ts#L24)

製品マスタ一覧を取得するフック

## Parameters

### options?

React Query オプション

#### enabled?

`boolean`

#### staleTime?

`number`

## Returns

`UseQueryResult`\<[`Product`](../../../../utils/validators/master-schemas/type-aliases/Product.md)[], `Error`\>

製品一覧のクエリ結果

## Example

```tsx
const { data: products, isLoading } = useProductsQuery();
```
