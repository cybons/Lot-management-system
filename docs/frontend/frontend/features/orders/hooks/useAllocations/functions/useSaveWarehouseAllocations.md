[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [features/orders/hooks/useAllocations](../README.md) / useSaveWarehouseAllocations

# Function: useSaveWarehouseAllocations()

> **useSaveWarehouseAllocations**(`orderLineId`): `UseMutationResult`\<\{ `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`WarehouseAlloc`](../../../../../types/aliases/type-aliases/WarehouseAlloc.md)[], \{ `previousData`: `unknown`; \}\>

Defined in: [src/features/orders/hooks/useAllocations.ts:156](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/hooks/useAllocations.ts#L156)

倉庫別配分を保存（楽観的更新対応）

## Parameters

### orderLineId

`number` | `undefined`

## Returns

`UseMutationResult`\<\{ `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`WarehouseAlloc`](../../../../../types/aliases/type-aliases/WarehouseAlloc.md)[], \{ `previousData`: `unknown`; \}\>
