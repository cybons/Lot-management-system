[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useAllocationMutations](../README.md) / useAutoAllocate

# Function: useAutoAllocate()

> **useAutoAllocate**(`options?`): `UseMutationResult`\<[`AllocationResult`](../../../../features/allocations/api/type-aliases/AllocationResult.md), `Error`, \{ `order_line_id`: `number`; `product_code`: `string`; `quantity`: `number`; \}\>

Defined in: [src/hooks/mutations/useAllocationMutations.ts:218](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useAllocationMutations.ts#L218)

引当の自動実行フック
(FEFO方式で自動引当)

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`AllocationResult`](../../../../features/allocations/api/type-aliases/AllocationResult.md), `Error`, \{ `order_line_id`: `number`; `product_code`: `string`; `quantity`: `number`; \}\>

自動引当のMutation結果

## Example

```tsx
const autoAllocateMutation = useAutoAllocate({
  onSuccess: () => {
    toast.success("自動引当が完了しました");
  },
});

await autoAllocateMutation.mutateAsync({
  order_line_id: 123,
  product_code: "P001",
  quantity: 500,
});
```
