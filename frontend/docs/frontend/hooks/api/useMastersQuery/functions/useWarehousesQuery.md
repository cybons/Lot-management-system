[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/api/useMastersQuery](../README.md) / useWarehousesQuery

# Function: useWarehousesQuery()

> **useWarehousesQuery**(`options?`): `UseQueryResult`\<[`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md)[], `Error`\>

Defined in: [src/hooks/api/useMastersQuery.ts:70](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/api/useMastersQuery.ts#L70)

倉庫マスタ一覧を取得するフック

## Parameters

### options?

React Query オプション

#### enabled?

`boolean`

#### staleTime?

`number`

## Returns

`UseQueryResult`\<[`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md)[], `Error`\>

倉庫一覧のクエリ結果

## Example

```tsx
const { data: warehouses, isLoading } = useWarehousesQuery();
```
