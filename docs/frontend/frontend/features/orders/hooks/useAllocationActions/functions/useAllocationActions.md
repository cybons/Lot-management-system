[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [features/orders/hooks/useAllocationActions](../README.md) / useAllocationActions

# Function: useAllocationActions()

> **useAllocationActions**(`lineId?`, `productCode?`, `customerCode?`): `object`

Defined in: [src/features/orders/hooks/useAllocationActions.ts:12](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/hooks/useAllocationActions.ts#L12)

引当操作をまとめたカスタムフック

## Parameters

### lineId?

`number`

### productCode?

`string`

### customerCode?

`string`

## Returns

`object`

### cancelAlloc

> **cancelAlloc**: `UseMutationResult`\<\{ `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`AllocationCancelRequest`](../../../../../types/aliases/type-aliases/AllocationCancelRequest.md), `unknown`\>

### candidatesQ

> **candidatesQ**: `UseQueryResult`\<[`LotCandidateResponse`](../../../../../types/aliases/type-aliases/LotCandidateResponse.md), `Error`\>

### createAlloc

> **createAlloc**: `UseMutationResult`\<\{ `allocated_ids?`: `number`[]; `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`LotAllocationRequest`](../../../../../types/aliases/type-aliases/LotAllocationRequest.md), \{ `previousData`: `unknown`; \}\>

### enabled

> **enabled**: `boolean`

### saveWareAlloc

> **saveWareAlloc**: `UseMutationResult`\<\{ `message?`: `string`; `success?`: `boolean`; \}, `Error`, [`WarehouseAlloc`](../../../../../types/aliases/type-aliases/WarehouseAlloc.md)[], \{ `previousData`: `unknown`; \}\>
