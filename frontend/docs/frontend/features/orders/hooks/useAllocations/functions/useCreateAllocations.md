[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [features/orders/hooks/useAllocations](../README.md) / useCreateAllocations

# Function: useCreateAllocations()

> **useCreateAllocations**(`orderLineId`): `UseMutationResult`\<\{ `allocated_ids?`: `number`[]; `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`LotAllocationRequest`](../../../../../types/aliases/type-aliases/LotAllocationRequest.md), \{ `previousData`: `unknown`; \}\>

Defined in: [src/features/orders/hooks/useAllocations.ts:68](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/hooks/useAllocations.ts#L68)

ロット引当を作成（楽観的更新対応）

## Parameters

### orderLineId

`number` | `undefined`

## Returns

`UseMutationResult`\<\{ `allocated_ids?`: `number`[]; `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`LotAllocationRequest`](../../../../../types/aliases/type-aliases/LotAllocationRequest.md), \{ `previousData`: `unknown`; \}\>
