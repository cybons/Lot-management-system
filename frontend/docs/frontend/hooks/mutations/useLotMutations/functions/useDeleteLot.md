[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useLotMutations](../README.md) / useDeleteLot

# Function: useDeleteLot()

> **useDeleteLot**(`options?`): `UseMutationResult`\<`void`, `Error`, `number`\>

Defined in: [src/hooks/mutations/useLotMutations.ts:114](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useLotMutations.ts#L114)

ロット削除フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

() => `void`

## Returns

`UseMutationResult`\<`void`, `Error`, `number`\>

ロット削除のMutation結果

## Example

```tsx
const deleteLotMutation = useDeleteLot({
  onSuccess: () => {
    toast.success("ロットを削除しました");
  },
});

await deleteLotMutation.mutateAsync(123);
```
