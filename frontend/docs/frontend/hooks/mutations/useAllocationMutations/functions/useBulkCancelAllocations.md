[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useAllocationMutations](../README.md) / useBulkCancelAllocations

# Function: useBulkCancelAllocations()

> **useBulkCancelAllocations**(`options?`): `UseMutationResult`\<`void`, `Error`, `number`[]\>

Defined in: [src/hooks/mutations/useAllocationMutations.ts:126](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useAllocationMutations.ts#L126)

複数ロット引当一括取消フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onProgress?

(`current`, `total`) => `void`

#### onSuccess?

() => `void`

## Returns

`UseMutationResult`\<`void`, `Error`, `number`[]\>

複数ロット引当一括取消のMutation結果
