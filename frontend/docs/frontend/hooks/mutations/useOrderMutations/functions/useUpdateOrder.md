[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useOrderMutations](../README.md) / useUpdateOrder

# Function: useUpdateOrder()

> **useUpdateOrder**(`orderId`, `options?`): `UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md), `Error`, `Partial`\<[`OrderCreate`](../../../../utils/validators/order-schemas/type-aliases/OrderCreate.md)\>\>

Defined in: [src/hooks/mutations/useOrderMutations.ts:70](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useOrderMutations.ts#L70)

受注更新フック

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

`UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md), `Error`, `Partial`\<[`OrderCreate`](../../../../utils/validators/order-schemas/type-aliases/OrderCreate.md)\>\>

受注更新のMutation結果

## Example

```tsx
const updateOrderMutation = useUpdateOrder(123, {
  onSuccess: () => {
    toast.success("受注を更新しました");
  },
});

await updateOrderMutation.mutateAsync(updatedData);
```
