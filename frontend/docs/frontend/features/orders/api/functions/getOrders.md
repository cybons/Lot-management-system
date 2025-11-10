[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/orders/api](../README.md) / getOrders

# Function: getOrders()

> **getOrders**(`params?`): `Promise`\<`object`[]\>

Defined in: [src/features/orders/api.ts:25](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/api.ts#L25)

受注一覧取得

利用可能なパラメータ:

- skip, limit: ページネーション
- status: ステータスフィルタ
- customer_code: 得意先コードフィルタ
- date_from, date_to: 日付範囲フィルタ

## Parameters

### params?

#### customer_code?

`string` \| `null`

#### date_from?

`string` \| `null`

#### date_to?

`string` \| `null`

#### limit?

`number`

#### skip?

`number`

#### status?

`string` \| `null`

## Returns

`Promise`\<`object`[]\>
