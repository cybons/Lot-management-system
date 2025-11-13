[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [features/orders/hooks/useAllocations](../README.md) / useCandidateLots

# Function: useCandidateLots()

> **useCandidateLots**(`orderLineId`, `productCode?`, `customerCode?`): `UseQueryResult`\<[`LotCandidateResponse`](../../../../../types/aliases/type-aliases/LotCandidateResponse.md), `Error`\>

Defined in: [src/features/orders/hooks/useAllocations.ts:17](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/hooks/useAllocations.ts#L17)

ロット候補を取得（品番一致フィルタ対応）

## Parameters

### orderLineId

`number` | `undefined`

### productCode?

`string`

### customerCode?

`string`

## Returns

`UseQueryResult`\<[`LotCandidateResponse`](../../../../../types/aliases/type-aliases/LotCandidateResponse.md), `Error`\>
