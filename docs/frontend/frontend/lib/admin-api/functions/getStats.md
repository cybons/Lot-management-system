[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [lib/admin-api](../README.md) / getStats

# Function: getStats()

> **getStats**(): `Promise`\<[`DashboardStats`](../type-aliases/DashboardStats.md)\>

Defined in: [src/lib/admin-api.ts:18](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/lib/admin-api.ts#L18)

管理ダッシュボード等「自分だけが触れる」前提のエンドポイント群。
JWT は lib/http.ts 側で自動付与されます（localStorage "access_token" or "jwt"）。

## Returns

`Promise`\<[`DashboardStats`](../type-aliases/DashboardStats.md)\>
