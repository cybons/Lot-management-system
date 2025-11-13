[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useLotMutations](../README.md) / useUpdateLotStatus

# Function: useUpdateLotStatus()

> **useUpdateLotStatus**(`lotId`, `options?`): `UseMutationResult`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md), `Error`, \{ `expiry_date?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; \}\>

Defined in: [src/hooks/mutations/useLotMutations.ts:187](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useLotMutations.ts#L187)

ロットステータス更新フック
(簡易版 - ステータスのみ更新)

## Parameters

### lotId

`number`

更新対象のロットID

### options?

Mutation オプション

#### onError?

(`error`) => `void`

#### onSuccess?

(`data`) => `void`

## Returns

`UseMutationResult`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md), `Error`, \{ `expiry_date?`: `string` \| `null`; `warehouse_code?`: `string` \| `null`; \}\>

ロットステータス更新のMutation結果
