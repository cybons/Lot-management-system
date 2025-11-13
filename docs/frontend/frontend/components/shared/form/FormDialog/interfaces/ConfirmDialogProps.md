[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [components/shared/form/FormDialog](../README.md) / ConfirmDialogProps

# Interface: ConfirmDialogProps

Defined in: [src/components/shared/form/FormDialog.tsx:127](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L127)

## Properties

### cancelLabel?

> `optional` **cancelLabel**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:141](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L141)

キャンセルボタンのラベル

---

### confirmLabel?

> `optional` **confirmLabel**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:139](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L139)

確認ボタンのラベル

---

### confirmVariant?

> `optional` **confirmVariant**: `"default"` \| `"destructive"`

Defined in: [src/components/shared/form/FormDialog.tsx:143](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L143)

確認ボタンのバリアント

---

### description

> **description**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:131](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L131)

ダイアログの説明

---

### isLoading?

> `optional` **isLoading**: `boolean`

Defined in: [src/components/shared/form/FormDialog.tsx:145](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L145)

ローディング状態

---

### onClose()

> **onClose**: () => `void`

Defined in: [src/components/shared/form/FormDialog.tsx:135](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L135)

ダイアログを閉じる関数

#### Returns

`void`

---

### onConfirm()

> **onConfirm**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/components/shared/form/FormDialog.tsx:137](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L137)

確認時の処理

#### Returns

`void` \| `Promise`\<`void`\>

---

### open

> **open**: `boolean`

Defined in: [src/components/shared/form/FormDialog.tsx:133](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L133)

ダイアログの開閉状態

---

### title

> **title**: `string`

Defined in: [src/components/shared/form/FormDialog.tsx:129](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/form/FormDialog.tsx#L129)

ダイアログのタイトル
