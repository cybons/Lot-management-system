[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/api/useMastersQuery](../README.md) / useCustomersQuery

# Function: useCustomersQuery()

> **useCustomersQuery**(`options?`): `UseQueryResult`\<[`Customer`](../../../../utils/validators/master-schemas/type-aliases/Customer.md)[], `Error`\>

Defined in: [src/hooks/api/useMastersQuery.ts:47](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/api/useMastersQuery.ts#L47)

得意先マスタ一覧を取得するフック

## Parameters

### options?

React Query オプション

#### enabled?

`boolean`

#### staleTime?

`number`

## Returns

`UseQueryResult`\<[`Customer`](../../../../utils/validators/master-schemas/type-aliases/Customer.md)[], `Error`\>

得意先一覧のクエリ結果

## Example

```tsx
const { data: customers, isLoading } = useCustomersQuery();
```
