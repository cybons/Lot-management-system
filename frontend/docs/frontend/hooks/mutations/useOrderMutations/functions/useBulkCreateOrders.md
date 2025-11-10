[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useOrderMutations](../README.md) / useBulkCreateOrders

# Function: useBulkCreateOrders()

> **useBulkCreateOrders**(`options?`): `UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md)[], `Error`, [`OrderCreate`](../../../../utils/validators/order-schemas/type-aliases/OrderCreate.md)[]\>

Defined in: [src/hooks/mutations/useOrderMutations.ts:192](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useOrderMutations.ts#L192)

受注一括作成フック

## Parameters

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onProgress?

(`current`, `total`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`OrderDetail`](../../../../utils/validators/order-schemas/type-aliases/OrderDetail.md)[], `Error`, [`OrderCreate`](../../../../utils/validators/order-schemas/type-aliases/OrderCreate.md)[]\>

受注一括作成のMutation結果
