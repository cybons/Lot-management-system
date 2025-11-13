[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [components/shared/data/DataTable](../README.md) / Column

# Interface: Column\<T\>

Defined in: [src/components/shared/data/DataTable.tsx:23](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L23)

## Type Parameters

### T

`T` = `never`

## Properties

### accessor()?

> `optional` **accessor**: (`row`) => `never`

Defined in: [src/components/shared/data/DataTable.tsx:29](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L29)

セルの値を取得する関数

#### Parameters

##### row

`T`

#### Returns

`never`

---

### align?

> `optional` **align**: `"center"` \| `"left"` \| `"right"`

Defined in: [src/components/shared/data/DataTable.tsx:37](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L37)

テキスト配置

---

### cell()?

> `optional` **cell**: (`row`) => `ReactNode`

Defined in: [src/components/shared/data/DataTable.tsx:31](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L31)

セルのレンダリング関数(カスタム表示)

#### Parameters

##### row

`T`

#### Returns

`ReactNode`

---

### className?

> `optional` **className**: `string`

Defined in: [src/components/shared/data/DataTable.tsx:39](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L39)

カラムのクラス名

---

### header

> **header**: `string`

Defined in: [src/components/shared/data/DataTable.tsx:27](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L27)

カラムヘッダー表示名

---

### id

> **id**: `string`

Defined in: [src/components/shared/data/DataTable.tsx:25](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L25)

カラムID

---

### sortable?

> `optional` **sortable**: `boolean`

Defined in: [src/components/shared/data/DataTable.tsx:33](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L33)

ソート可能かどうか

---

### width?

> `optional` **width**: `string`

Defined in: [src/components/shared/data/DataTable.tsx:35](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/DataTable.tsx#L35)

カラム幅(CSS)
