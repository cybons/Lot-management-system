[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [components/shared/form/FormDialog](../README.md) / FormDialogProps

# Interface: FormDialogProps

Defined in: [src/components/shared/form/FormDialog.tsx:27](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L27)

## Properties

### cancelLabel?

> `optional` **cancelLabel**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:43](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L43)

キャンセルボタンのラベル

---

### children

> **children**: `ReactNode`

Defined in: [src/components/shared/form/FormDialog.tsx:39](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L39)

フォームの内容

---

### description?

> `optional` **description**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:31](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L31)

ダイアログの説明

---

### isLoading?

> `optional` **isLoading**: `boolean`

Defined in: [src/components/shared/form/FormDialog.tsx:45](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L45)

ローディング状態

---

### onClose()

> **onClose**: () => `void`

Defined in: [src/components/shared/form/FormDialog.tsx:35](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L35)

ダイアログを閉じる関数

#### Returns

`void`

---

### onSubmit()

> **onSubmit**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/components/shared/form/FormDialog.tsx:37](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L37)

フォームの送信処理

#### Returns

`void` \| `Promise`\<`void`\>

---

### open

> **open**: `boolean`

Defined in: [src/components/shared/form/FormDialog.tsx:33](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L33)

ダイアログの開閉状態

---

### size?

> `optional` **size**: `"sm"` \| `"lg"` \| `"md"` \| `"xl"`

Defined in: [src/components/shared/form/FormDialog.tsx:49](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L49)

ダイアログのサイズ

---

### submitDisabled?

> `optional` **submitDisabled**: `boolean`

Defined in: [src/components/shared/form/FormDialog.tsx:47](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L47)

送信ボタンの無効化

---

### submitLabel?

> `optional` **submitLabel**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:41](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L41)

送信ボタンのラベル

---

### title

> **title**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:29](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L29)

ダイアログのタイトル
