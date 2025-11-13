[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/api/useMastersQuery](../README.md) / useWarehouseQuery

# Function: useWarehouseQuery()

> **useWarehouseQuery**(`warehouseCode`): `UseQueryResult`\<[`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md) \| `undefined`, `Error`\>

Defined in: [src/hooks/api/useMastersQuery.ts:128](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/api/useMastersQuery.ts#L128)

特定の倉庫を取得するフック

## Parameters

### warehouseCode

倉庫コード

`string` | `undefined`

## Returns

`UseQueryResult`\<[`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md) \| `undefined`, `Error`\>

倉庫のクエリ結果
