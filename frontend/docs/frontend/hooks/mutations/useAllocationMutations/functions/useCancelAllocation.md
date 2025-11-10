[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useAllocationMutations](../README.md) / useCancelAllocation

# Function: useCancelAllocation()

> **useCancelAllocation**(`options?`): `UseMutationResult`\<`void`, `Error`, `number`\>

Defined in: [src/hooks/mutations/useAllocationMutations.ts:95](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useAllocationMutations.ts#L95)

ロット引当取消フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

() => `void`

## Returns

`UseMutationResult`\<`void`, `Error`, `number`\>

ロット引当取消のMutation結果

## Example

```tsx
const cancelMutation = useCancelAllocation({
  onSuccess: () => {
    toast.success("引当を取り消しました");
  },
});

await cancelMutation.mutateAsync(123);
```
