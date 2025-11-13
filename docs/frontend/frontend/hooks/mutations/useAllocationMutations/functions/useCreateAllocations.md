[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useAllocationMutations](../README.md) / useCreateAllocations

# Function: useCreateAllocations()

> **useCreateAllocations**(`options?`): `UseMutationResult`\<[`AllocationResult`](../../../../features/allocations/api/type-aliases/AllocationResult.md), `Error`, [`CreateAllocationPayload`](../../../../features/allocations/api/type-aliases/CreateAllocationPayload.md)\>

Defined in: [src/hooks/mutations/useAllocationMutations.ts:38](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useAllocationMutations.ts#L38)

ロット引当作成フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`AllocationResult`](../../../../features/allocations/api/type-aliases/AllocationResult.md), `Error`, [`CreateAllocationPayload`](../../../../features/allocations/api/type-aliases/CreateAllocationPayload.md)\>

ロット引当作成のMutation結果

## Example

```tsx
const allocateMutation = useCreateAllocations({
  onSuccess: () => {
    toast.success("引当を実行しました");
  },
});

await allocateMutation.mutateAsync({
  order_line_id: 123,
  product_code: "P001",
  allocations: [{ lot_id: 1, warehouse_code: "W01", quantity: 100 }],
});
```
