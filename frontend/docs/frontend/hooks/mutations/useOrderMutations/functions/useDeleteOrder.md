[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useOrderMutations](../README.md) / useDeleteOrder

# Function: useDeleteOrder()

> **useDeleteOrder**(`options?`): `UseMutationResult`\<`void`, `Error`, `number`\>

Defined in: [src/hooks/mutations/useOrderMutations.ts:115](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useOrderMutations.ts#L115)

受注削除フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

() => `void`

## Returns

`UseMutationResult`\<`void`, `Error`, `number`\>

受注削除のMutation結果

## Example

```tsx
const deleteOrderMutation = useDeleteOrder({
  onSuccess: () => {
    toast.success("受注を削除しました");
  },
});

await deleteOrderMutation.mutateAsync(123);
```
