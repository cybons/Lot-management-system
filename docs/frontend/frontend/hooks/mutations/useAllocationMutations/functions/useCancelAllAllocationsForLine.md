[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useAllocationMutations](../README.md) / useCancelAllAllocationsForLine

# Function: useCancelAllAllocationsForLine()

> **useCancelAllAllocationsForLine**(`_orderLineId`, `options?`): `UseMutationResult`\<`void`, `Error`, `void`\>

Defined in: [src/hooks/mutations/useAllocationMutations.ts:164](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useAllocationMutations.ts#L164)

受注明細の全引当取消フック

## Parameters

### \_orderLineId

`number`

受注明細ID (未使用、将来の実装用)

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

() => `void`

## Returns

`UseMutationResult`\<`void`, `Error`, `void`\>

全引当取消のMutation結果
