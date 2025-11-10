[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useOrderMutations](../README.md) / useCreateOrder

# Function: useCreateOrder()

> **useCreateOrder**(`options?`): `UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md), `Error`, [`OrderCreate`](../../../../utils/validators/order-schemas/type-aliases/OrderCreate.md)\>

Defined in: [src/hooks/mutations/useOrderMutations.ts:30](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useOrderMutations.ts#L30)

受注作成フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md), `Error`, [`OrderCreate`](../../../../utils/validators/order-schemas/type-aliases/OrderCreate.md)\>

受注作成のMutation結果

## Example

```tsx
const createOrderMutation = useCreateOrder({
  onSuccess: () => {
    toast.success("受注を作成しました");
  },
});

await createOrderMutation.mutateAsync(newOrderData);
```
