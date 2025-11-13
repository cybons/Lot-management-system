[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/mutations/useLotMutations](../README.md) / useBulkCreateLots

# Function: useBulkCreateLots()

> **useBulkCreateLots**(`options?`): `UseMutationResult`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md)[], `Error`, `object`[]\>

Defined in: [src/hooks/mutations/useLotMutations.ts:145](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/mutations/useLotMutations.ts#L145)

ロット一括作成フック

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

`UseMutationResult`\<[`LotResponse`](../../../../types/aliases/type-aliases/LotResponse.md)[], `Error`, `object`[]\>

ロット一括作成のMutation結果
