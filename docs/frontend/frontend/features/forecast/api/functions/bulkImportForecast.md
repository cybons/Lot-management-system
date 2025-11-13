[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/forecast/api](../README.md) / bulkImportForecast

# Function: bulkImportForecast()

> **bulkImportForecast**(`data`): `Promise`\<\{ `error_count`: `number`; `error_details?`: `string` \| `null`; `imported_count`: `number`; `message`: `string`; `skipped_count`: `number`; `success`: `boolean`; `version_no`: `number`; \}\>

Defined in: [src/features/forecast/api.ts:64](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/forecast/api.ts#L64)

予測一括インポート

## Parameters

### data

#### deactivate_old_version

`boolean`

Deactivate Old Version

**Default**

```ts
true;
```

#### forecasts

`object`[]

Forecasts

#### source_system

`string`

Source System

**Default**

```ts
external;
```

#### version_issued_at

`string`

Version Issued At
Format: date-time

#### version_no

`number`

Version No

## Returns

`Promise`\<\{ `error_count`: `number`; `error_details?`: `string` \| `null`; `imported_count`: `number`; `message`: `string`; `skipped_count`: `number`; `success`: `boolean`; `version_no`: `number`; \}\>
