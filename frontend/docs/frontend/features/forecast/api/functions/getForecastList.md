[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/forecast/api](../README.md) / getForecastList

# Function: getForecastList()

> **getForecastList**(`params?`): `Promise`\<\{ `items`: `object`[]; \}\>

Defined in: [src/features/forecast/api.ts:27](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/forecast/api.ts#L27)

予測サマリー一覧取得（フロント表示用）

利用可能なパラメータ:

- product_code: 製品コードフィルタ
- supplier_code: 仕入先コードフィルタ

## Parameters

### params?

#### product_code?

`string` \| `null`

#### supplier_code?

`string` \| `null`

## Returns

`Promise`\<\{ `items`: `object`[]; \}\>
