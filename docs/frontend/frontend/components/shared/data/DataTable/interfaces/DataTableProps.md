[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [components/shared/data/DataTable](../README.md) / DataTableProps

# Interface: DataTableProps\<T\>

Defined in: [src/components/shared/data/DataTable.tsx:47](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L47)

## Type Parameters

### T

`T` = `never`

## Properties

### className?

> `optional` **className**: `string`

Defined in: [src/components/shared/data/DataTable.tsx:73](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L73)

テーブルのクラス名

---

### columns

> **columns**: [`Column`](Column.md)\<`T`\>[]

Defined in: [src/components/shared/data/DataTable.tsx:51](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L51)

カラム定義

---

### data

> **data**: `T`[]

Defined in: [src/components/shared/data/DataTable.tsx:49](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L49)

表示データ

---

### emptyMessage?

> `optional` **emptyMessage**: `string`

Defined in: [src/components/shared/data/DataTable.tsx:69](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L69)

空データ時のメッセージ

---

### getRowId()?

> `optional` **getRowId**: (`row`) => `string` \| `number`

Defined in: [src/components/shared/data/DataTable.tsx:63](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L63)

行のID取得関数

#### Parameters

##### row

`T`

#### Returns

`string` \| `number`

---

### isLoading?

> `optional` **isLoading**: `boolean`

Defined in: [src/components/shared/data/DataTable.tsx:71](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L71)

ローディング状態

---

### onRowClick()?

> `optional` **onRowClick**: (`row`) => `void`

Defined in: [src/components/shared/data/DataTable.tsx:65](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L65)

行クリック時のコールバック

#### Parameters

##### row

`T`

#### Returns

`void`

---

### onSelectionChange()?

> `optional` **onSelectionChange**: (`ids`) => `void`

Defined in: [src/components/shared/data/DataTable.tsx:61](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L61)

行選択変更時のコールバック

#### Parameters

##### ids

(`string` \| `number`)[]

#### Returns

`void`

---

### onSortChange()?

> `optional` **onSortChange**: (`sort`) => `void`

Defined in: [src/components/shared/data/DataTable.tsx:55](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L55)

ソート変更時のコールバック

#### Parameters

##### sort

[`SortConfig`](SortConfig.md)

#### Returns

`void`

---

### rowActions()?

> `optional` **rowActions**: (`row`) => `ReactNode`

Defined in: [src/components/shared/data/DataTable.tsx:67](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L67)

行のアクションボタン

#### Parameters

##### row

`T`

#### Returns

`ReactNode`

---

### selectable?

> `optional` **selectable**: `boolean`

Defined in: [src/components/shared/data/DataTable.tsx:57](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L57)

行選択を有効化

---

### selectedIds?

> `optional` **selectedIds**: (`string` \| `number`)[]

Defined in: [src/components/shared/data/DataTable.tsx:59](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L59)

選択された行のID配列

---

### sort?

> `optional` **sort**: [`SortConfig`](SortConfig.md)

Defined in: [src/components/shared/data/DataTable.tsx:53](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L53)

ソート設定
