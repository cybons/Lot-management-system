[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useLotMutations](../README.md) / useCreateLot

# Function: useCreateLot()

> **useCreateLot**(`options?`): `UseMutationResult`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md), `Error`, \{ `expiry_date?`: `string` \| `null`; `initial_quantity?`: `number`; `lot_number`: `string`; `product_code`: `string`; `receipt_date`: `string`; `supplier_code`: `string`; `warehouse_code?`: `string` \| `null`; \}\>

Defined in: [src/hooks/mutations/useLotMutations.ts:31](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useLotMutations.ts#L31)

ロット作成フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md), `Error`, \{ `expiry_date?`: `string` \| `null`; `initial_quantity?`: `number`; `lot_number`: `string`; `product_code`: `string`; `receipt_date`: `string`; `supplier_code`: `string`; `warehouse_code?`: `string` \| `null`; \}\>

ロット作成のMutation結果

## Example

```tsx
const createLotMutation = useCreateLot({
  onSuccess: () => {
    toast.success("ロットを作成しました");
  },
});

await createLotMutation.mutateAsync(newLotData);
```
