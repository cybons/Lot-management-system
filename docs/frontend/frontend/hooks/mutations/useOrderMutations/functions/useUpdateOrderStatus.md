[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useOrderMutations](../README.md) / useUpdateOrderStatus

# Function: useUpdateOrderStatus()

> **useUpdateOrderStatus**(`orderId`, `options?`): `UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md), `Error`, `string`\>

Defined in: [src/hooks/mutations/useOrderMutations.ts:161](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useOrderMutations.ts#L161)

受注ステータス更新フック
(簡易版 - ステータスのみ更新)

## Parameters

### orderId

`number`

更新対象の受注ID

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md), `Error`, `string`\>

受注ステータス更新のMutation結果

## Example

```tsx
const updateStatusMutation = useUpdateOrderStatus(123, {
  onSuccess: () => {
    toast.success("ステータスを更新しました");
  },
});

await updateStatusMutation.mutateAsync("shipped");
```
