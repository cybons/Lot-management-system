[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/forecast/api](../README.md) / getForecast

# Function: getForecast()

> **getForecast**(`params?`): `Promise`\<`object`[]\>

Defined in: [src/features/forecast/api.ts:46](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/forecast/api.ts#L46)

予測データ取得（生データ、ページネーション対応）

利用可能なパラメータ:

- skip, limit: ページネーション
- product_id, customer_id: ID検索
- product_code, customer_code: コード検索

## Parameters

### params?

#### customer_code?

`string` \| `null`

#### customer_id?

`string` \| `null`

#### granularity?

`string` \| `null`

#### is_active?

`boolean` \| `null`

#### limit?

`number`

#### product_code?

`string` \| `null`

#### product_id?

`string` \| `null`

#### skip?

`number`

#### version_no?

`number` \| `null`

## Returns

`Promise`\<`object`[]\>
