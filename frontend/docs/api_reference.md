<!-- Generator: Widdershins v4.0.1 -->

<h1 id="lot-management-api">Lot Management API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

材料ロット管理システム - バックエンドAPI

<h1 id="lot-management-api-default">Default</h1>

## Root

<a id="opIdroot__get"></a>

> Code samples

`GET /`

ルートエンドポイント

> Example responses

> 200 Response

```json
null
```

<h3 id="root-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | Inline |

<h3 id="root-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-masters">masters</h1>

## List Products

<a id="opIdlist_products_api_masters_products_get"></a>

> Code samples

`GET /api/masters/products`

Return a paginated list of products.

<h3 id="list-products-parameters">Parameters</h3>

| Name   | In    | Type    | Required | Description |
| ------ | ----- | ------- | -------- | ----------- |
| skip   | query | integer | false    | none        |
| limit  | query | integer | false    | none        |
| search | query | any     | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "product_code": "string",
    "product_name": "string",
    "supplier_code": "string",
    "customer_part_no": "string",
    "maker_item_code": "string",
    "supplier_item_code": "string",
    "packaging_qty": "string",
    "packaging_unit": "string",
    "internal_unit": "string",
    "base_unit": "EA",
    "packaging": "string",
    "assemble_div": "string",
    "next_div": "string",
    "ji_ku_text": "string",
    "kumitsuke_ku_text": "string",
    "shelf_life_days": 0,
    "requires_lot_number": true,
    "delivery_place_id": 0,
    "delivery_place_name": "string",
    "shipping_warehouse_name": "string"
  }
]
```

<h3 id="list-products-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-products-responseschema">Response Schema</h3>

Status Code **200**

_Response List Products Api Masters Products Get_

| Name                                            | Type                                        | Required | Restrictions | Description |
| ----------------------------------------------- | ------------------------------------------- | -------- | ------------ | ----------- |
| Response List Products Api Masters Products Get | [[ProductResponse](#schemaproductresponse)] | false    | none         | none        |
| » ProductResponse                               | [ProductResponse](#schemaproductresponse)   | false    | none         | none        |
| »» product_code                                 | string                                      | true     | none         | none        |
| »» product_name                                 | string                                      | true     | none         | none        |
| »» supplier_code                                | any                                         | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| »» customer_part_no | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name               | Type | Required | Restrictions | Description |
| ------------------ | ---- | -------- | ------------ | ----------- |
| »» maker_item_code | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                  | Type | Required | Restrictions | Description |
| --------------------- | ---- | -------- | ------------ | ----------- |
| »» supplier_item_code | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| »» packaging_qty  | string | true     | none         | none        |
| »» packaging_unit | string | true     | none         | none        |
| »» internal_unit  | string | true     | none         | none        |
| »» base_unit      | string | false    | none         | none        |
| »» packaging      | any    | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »» assemble_div | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| »» next_div | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| »» ji_ku_text | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                 | Type | Required | Restrictions | Description |
| -------------------- | ---- | -------- | ------------ | ----------- |
| »» kumitsuke_ku_text | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name               | Type | Required | Restrictions | Description |
| ------------------ | ---- | -------- | ------------ | ----------- |
| »» shelf_life_days | any  | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                   | Type    | Required | Restrictions | Description |
| ---------------------- | ------- | -------- | ------------ | ----------- |
| »» requires_lot_number | boolean | false    | none         | none        |
| »» delivery_place_id   | any     | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                   | Type | Required | Restrictions | Description |
| ---------------------- | ---- | -------- | ------------ | ----------- |
| »» delivery_place_name | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                       | Type | Required | Restrictions | Description |
| -------------------------- | ---- | -------- | ------------ | ----------- |
| »» shipping_warehouse_name | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Product

<a id="opIdcreate_product_api_masters_products_post"></a>

> Code samples

`POST /api/masters/products`

Create a new product.

> Body parameter

```json
{
  "product_code": "string",
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": 0,
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "EA",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

<h3 id="create-product-parameters">Parameters</h3>

| Name                      | In   | Type                                                                                  | Required | Description |
| ------------------------- | ---- | ------------------------------------------------------------------------------------- | -------- | ----------- |
| body                      | body | [app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate) | true     | none        |
| » product_code            | body | string                                                                                | true     | none        |
| » product_name            | body | string                                                                                | true     | none        |
| » supplier_code           | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » customer_part_no        | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » maker_item_code         | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » supplier_item_code      | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » packaging_qty           | body | any                                                                                   | true     | none        |
| »» _anonymous_            | body | number                                                                                | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| » packaging_unit          | body | string                                                                                | true     | none        |
| » internal_unit           | body | string                                                                                | true     | none        |
| » base_unit               | body | string                                                                                | false    | none        |
| » packaging               | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » assemble_div            | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » next_div                | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » ji_ku_text              | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » kumitsuke_ku_text       | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » shelf_life_days         | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | integer                                                                               | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » requires_lot_number     | body | boolean                                                                               | false    | none        |
| » delivery_place_id       | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | integer                                                                               | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » delivery_place_name     | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » shipping_warehouse_name | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |

> Example responses

> 201 Response

```json
{
  "product_code": "string",
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": "string",
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "EA",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

<h3 id="create-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [ProductResponse](#schemaproductresponse)         |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Product

<a id="opIdget_product_api_masters_products__product_code__get"></a>

> Code samples

`GET /api/masters/products/{product_code}`

Fetch a product by its code.

<h3 id="get-product-parameters">Parameters</h3>

| Name         | In   | Type   | Required | Description |
| ------------ | ---- | ------ | -------- | ----------- |
| product_code | path | string | true     | none        |

> Example responses

> 200 Response

```json
{
  "product_code": "string",
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": "string",
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "EA",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

<h3 id="get-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ProductResponse](#schemaproductresponse)         |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Product

<a id="opIdupdate_product_api_masters_products__product_code__put"></a>

> Code samples

`PUT /api/masters/products/{product_code}`

Update an existing product.

> Body parameter

```json
{
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": 0,
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "string",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

<h3 id="update-product-parameters">Parameters</h3>

| Name                      | In   | Type                                                                                  | Required | Description |
| ------------------------- | ---- | ------------------------------------------------------------------------------------- | -------- | ----------- |
| product_code              | path | string                                                                                | true     | none        |
| body                      | body | [app**schemas**masters\_\_ProductUpdate](#schemaapp__schemas__masters__productupdate) | true     | none        |
| » product_name            | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » supplier_code           | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » customer_part_no        | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » maker_item_code         | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » supplier_item_code      | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » packaging_qty           | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | number                                                                                | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » packaging_unit          | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » internal_unit           | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » base_unit               | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » packaging               | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » assemble_div            | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » next_div                | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » ji_ku_text              | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » kumitsuke_ku_text       | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » shelf_life_days         | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | integer                                                                               | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » requires_lot_number     | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | boolean                                                                               | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » delivery_place_id       | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | integer                                                                               | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » delivery_place_name     | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |
| » shipping_warehouse_name | body | any                                                                                   | false    | none        |
| »» _anonymous_            | body | string                                                                                | false    | none        |
| »» _anonymous_            | body | null                                                                                  | false    | none        |

> Example responses

> 200 Response

```json
{
  "product_code": "string",
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": "string",
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "EA",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

<h3 id="update-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ProductResponse](#schemaproductresponse)         |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Product

<a id="opIddelete_product_api_masters_products__product_code__delete"></a>

> Code samples

`DELETE /api/masters/products/{product_code}`

Delete a product by its code.

<h3 id="delete-product-parameters">Parameters</h3>

| Name         | In   | Type   | Required | Description |
| ------------ | ---- | ------ | -------- | ----------- |
| product_code | path | string | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## List Customers

<a id="opIdlist_customers_api_masters_customers_get"></a>

> Code samples

`GET /api/masters/customers`

Return customers.

<h3 id="list-customers-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description |
| ----- | ----- | ------- | -------- | ----------- |
| skip  | query | integer | false    | none        |
| limit | query | integer | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "customer_code": "string",
    "customer_name": "string",
    "address": "string"
  }
]
```

<h3 id="list-customers-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-customers-responseschema">Response Schema</h3>

Status Code **200**

_Response List Customers Api Masters Customers Get_

| Name                                              | Type                                          | Required | Restrictions | Description |
| ------------------------------------------------- | --------------------------------------------- | -------- | ------------ | ----------- |
| Response List Customers Api Masters Customers Get | [[CustomerResponse](#schemacustomerresponse)] | false    | none         | none        |
| » CustomerResponse                                | [CustomerResponse](#schemacustomerresponse)   | false    | none         | none        |
| »» customer_code                                  | string                                        | true     | none         | none        |
| »» customer_name                                  | string                                        | true     | none         | none        |
| »» address                                        | any                                           | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Customer

<a id="opIdcreate_customer_api_masters_customers_post"></a>

> Code samples

`POST /api/masters/customers`

Create a new customer.

> Body parameter

```json
{
  "customer_code": "string",
  "customer_name": "string",
  "address": "string"
}
```

<h3 id="create-customer-parameters">Parameters</h3>

| Name            | In   | Type                                    | Required | Description |
| --------------- | ---- | --------------------------------------- | -------- | ----------- |
| body            | body | [CustomerCreate](#schemacustomercreate) | true     | none        |
| » customer_code | body | string                                  | true     | none        |
| » customer_name | body | string                                  | true     | none        |
| » address       | body | any                                     | false    | none        |
| »» _anonymous_  | body | string                                  | false    | none        |
| »» _anonymous_  | body | null                                    | false    | none        |

> Example responses

> 201 Response

```json
{
  "customer_code": "string",
  "customer_name": "string",
  "address": "string"
}
```

<h3 id="create-customer-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [CustomerResponse](#schemacustomerresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Customer

<a id="opIdget_customer_api_masters_customers__customer_code__get"></a>

> Code samples

`GET /api/masters/customers/{customer_code}`

Fetch a customer by code.

<h3 id="get-customer-parameters">Parameters</h3>

| Name          | In   | Type   | Required | Description |
| ------------- | ---- | ------ | -------- | ----------- |
| customer_code | path | string | true     | none        |

> Example responses

> 200 Response

```json
{
  "customer_code": "string",
  "customer_name": "string",
  "address": "string"
}
```

<h3 id="get-customer-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [CustomerResponse](#schemacustomerresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Customer

<a id="opIdupdate_customer_api_masters_customers__customer_code__put"></a>

> Code samples

`PUT /api/masters/customers/{customer_code}`

Update a customer.

> Body parameter

```json
{
  "customer_name": "string",
  "address": "string"
}
```

<h3 id="update-customer-parameters">Parameters</h3>

| Name            | In   | Type                                    | Required | Description |
| --------------- | ---- | --------------------------------------- | -------- | ----------- |
| customer_code   | path | string                                  | true     | none        |
| body            | body | [CustomerUpdate](#schemacustomerupdate) | true     | none        |
| » customer_name | body | any                                     | false    | none        |
| »» _anonymous_  | body | string                                  | false    | none        |
| »» _anonymous_  | body | null                                    | false    | none        |
| » address       | body | any                                     | false    | none        |
| »» _anonymous_  | body | string                                  | false    | none        |
| »» _anonymous_  | body | null                                    | false    | none        |

> Example responses

> 200 Response

```json
{
  "customer_code": "string",
  "customer_name": "string",
  "address": "string"
}
```

<h3 id="update-customer-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [CustomerResponse](#schemacustomerresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Customer

<a id="opIddelete_customer_api_masters_customers__customer_code__delete"></a>

> Code samples

`DELETE /api/masters/customers/{customer_code}`

Delete a customer.

<h3 id="delete-customer-parameters">Parameters</h3>

| Name          | In   | Type   | Required | Description |
| ------------- | ---- | ------ | -------- | ----------- |
| customer_code | path | string | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-customer-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## List Suppliers

<a id="opIdlist_suppliers_api_masters_suppliers_get"></a>

> Code samples

`GET /api/masters/suppliers`

List suppliers.

<h3 id="list-suppliers-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description |
| ----- | ----- | ------- | -------- | ----------- |
| skip  | query | integer | false    | none        |
| limit | query | integer | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "supplier_code": "string",
    "supplier_name": "string",
    "address": "string"
  }
]
```

<h3 id="list-suppliers-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-suppliers-responseschema">Response Schema</h3>

Status Code **200**

_Response List Suppliers Api Masters Suppliers Get_

| Name                                              | Type                                          | Required | Restrictions | Description |
| ------------------------------------------------- | --------------------------------------------- | -------- | ------------ | ----------- |
| Response List Suppliers Api Masters Suppliers Get | [[SupplierResponse](#schemasupplierresponse)] | false    | none         | none        |
| » SupplierResponse                                | [SupplierResponse](#schemasupplierresponse)   | false    | none         | none        |
| »» supplier_code                                  | string                                        | true     | none         | none        |
| »» supplier_name                                  | string                                        | true     | none         | none        |
| »» address                                        | any                                           | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Supplier

<a id="opIdcreate_supplier_api_masters_suppliers_post"></a>

> Code samples

`POST /api/masters/suppliers`

Create supplier.

> Body parameter

```json
{
  "supplier_code": "string",
  "supplier_name": "string",
  "address": "string"
}
```

<h3 id="create-supplier-parameters">Parameters</h3>

| Name            | In   | Type                                    | Required | Description |
| --------------- | ---- | --------------------------------------- | -------- | ----------- |
| body            | body | [SupplierCreate](#schemasuppliercreate) | true     | none        |
| » supplier_code | body | string                                  | true     | none        |
| » supplier_name | body | string                                  | true     | none        |
| » address       | body | any                                     | false    | none        |
| »» _anonymous_  | body | string                                  | false    | none        |
| »» _anonymous_  | body | null                                    | false    | none        |

> Example responses

> 201 Response

```json
{
  "supplier_code": "string",
  "supplier_name": "string",
  "address": "string"
}
```

<h3 id="create-supplier-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [SupplierResponse](#schemasupplierresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Supplier

<a id="opIdget_supplier_api_masters_suppliers__supplier_code__get"></a>

> Code samples

`GET /api/masters/suppliers/{supplier_code}`

Get supplier by code.

<h3 id="get-supplier-parameters">Parameters</h3>

| Name          | In   | Type   | Required | Description |
| ------------- | ---- | ------ | -------- | ----------- |
| supplier_code | path | string | true     | none        |

> Example responses

> 200 Response

```json
{
  "supplier_code": "string",
  "supplier_name": "string",
  "address": "string"
}
```

<h3 id="get-supplier-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [SupplierResponse](#schemasupplierresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Supplier

<a id="opIdupdate_supplier_api_masters_suppliers__supplier_code__put"></a>

> Code samples

`PUT /api/masters/suppliers/{supplier_code}`

Update supplier.

> Body parameter

```json
{
  "supplier_name": "string",
  "address": "string"
}
```

<h3 id="update-supplier-parameters">Parameters</h3>

| Name            | In   | Type                                    | Required | Description |
| --------------- | ---- | --------------------------------------- | -------- | ----------- |
| supplier_code   | path | string                                  | true     | none        |
| body            | body | [SupplierUpdate](#schemasupplierupdate) | true     | none        |
| » supplier_name | body | any                                     | false    | none        |
| »» _anonymous_  | body | string                                  | false    | none        |
| »» _anonymous_  | body | null                                    | false    | none        |
| » address       | body | any                                     | false    | none        |
| »» _anonymous_  | body | string                                  | false    | none        |
| »» _anonymous_  | body | null                                    | false    | none        |

> Example responses

> 200 Response

```json
{
  "supplier_code": "string",
  "supplier_name": "string",
  "address": "string"
}
```

<h3 id="update-supplier-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [SupplierResponse](#schemasupplierresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Supplier

<a id="opIddelete_supplier_api_masters_suppliers__supplier_code__delete"></a>

> Code samples

`DELETE /api/masters/suppliers/{supplier_code}`

Delete supplier.

<h3 id="delete-supplier-parameters">Parameters</h3>

| Name          | In   | Type   | Required | Description |
| ------------- | ---- | ------ | -------- | ----------- |
| supplier_code | path | string | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-supplier-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## List Warehouses

<a id="opIdlist_warehouses_api_masters_warehouses_get"></a>

> Code samples

`GET /api/masters/warehouses`

List warehouses.

<h3 id="list-warehouses-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description |
| ----- | ----- | ------- | -------- | ----------- |
| skip  | query | integer | false    | none        |
| limit | query | integer | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "warehouse_code": "string",
    "warehouse_name": "string",
    "address": "string",
    "is_active": 1
  }
]
```

<h3 id="list-warehouses-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-warehouses-responseschema">Response Schema</h3>

Status Code **200**

_Response List Warehouses Api Masters Warehouses Get_

| Name                                                | Type                                            | Required | Restrictions | Description |
| --------------------------------------------------- | ----------------------------------------------- | -------- | ------------ | ----------- |
| Response List Warehouses Api Masters Warehouses Get | [[WarehouseResponse](#schemawarehouseresponse)] | false    | none         | none        |
| » WarehouseResponse                                 | [WarehouseResponse](#schemawarehouseresponse)   | false    | none         | none        |
| »» warehouse_code                                   | string                                          | true     | none         | none        |
| »» warehouse_name                                   | string                                          | true     | none         | none        |
| »» address                                          | any                                             | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name         | Type    | Required | Restrictions | Description |
| ------------ | ------- | -------- | ------------ | ----------- |
| »» is_active | integer | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Warehouse

<a id="opIdcreate_warehouse_api_masters_warehouses_post"></a>

> Code samples

`POST /api/masters/warehouses`

Create warehouse.

> Body parameter

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

<h3 id="create-warehouse-parameters">Parameters</h3>

| Name             | In   | Type                                      | Required | Description |
| ---------------- | ---- | ----------------------------------------- | -------- | ----------- |
| body             | body | [WarehouseCreate](#schemawarehousecreate) | true     | none        |
| » warehouse_code | body | string                                    | true     | none        |
| » warehouse_name | body | string                                    | true     | none        |
| » address        | body | any                                       | false    | none        |
| »» _anonymous_   | body | string                                    | false    | none        |
| »» _anonymous_   | body | null                                      | false    | none        |
| » is_active      | body | integer                                   | false    | none        |

> Example responses

> 201 Response

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

<h3 id="create-warehouse-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [WarehouseResponse](#schemawarehouseresponse)     |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Warehouse

<a id="opIdget_warehouse_api_masters_warehouses__warehouse_code__get"></a>

> Code samples

`GET /api/masters/warehouses/{warehouse_code}`

Get warehouse by code.

<h3 id="get-warehouse-parameters">Parameters</h3>

| Name           | In   | Type   | Required | Description |
| -------------- | ---- | ------ | -------- | ----------- |
| warehouse_code | path | string | true     | none        |

> Example responses

> 200 Response

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

<h3 id="get-warehouse-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [WarehouseResponse](#schemawarehouseresponse)     |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Warehouse

<a id="opIdupdate_warehouse_api_masters_warehouses__warehouse_code__put"></a>

> Code samples

`PUT /api/masters/warehouses/{warehouse_code}`

Update warehouse.

> Body parameter

```json
{
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

<h3 id="update-warehouse-parameters">Parameters</h3>

| Name             | In   | Type                                      | Required | Description |
| ---------------- | ---- | ----------------------------------------- | -------- | ----------- |
| warehouse_code   | path | string                                    | true     | none        |
| body             | body | [WarehouseUpdate](#schemawarehouseupdate) | true     | none        |
| » warehouse_name | body | any                                       | false    | none        |
| »» _anonymous_   | body | string                                    | false    | none        |
| »» _anonymous_   | body | null                                      | false    | none        |
| » address        | body | any                                       | false    | none        |
| »» _anonymous_   | body | string                                    | false    | none        |
| »» _anonymous_   | body | null                                      | false    | none        |
| » is_active      | body | any                                       | false    | none        |
| »» _anonymous_   | body | integer                                   | false    | none        |
| »» _anonymous_   | body | null                                      | false    | none        |

> Example responses

> 200 Response

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

<h3 id="update-warehouse-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [WarehouseResponse](#schemawarehouseresponse)     |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Warehouse

<a id="opIddelete_warehouse_api_masters_warehouses__warehouse_code__delete"></a>

> Code samples

`DELETE /api/masters/warehouses/{warehouse_code}`

Delete warehouse.

<h3 id="delete-warehouse-parameters">Parameters</h3>

| Name           | In   | Type   | Required | Description |
| -------------- | ---- | ------ | -------- | ----------- |
| warehouse_code | path | string | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-warehouse-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Bulk Load Masters

<a id="opIdbulk_load_masters_api_masters_bulk_load_post"></a>

> Code samples

`POST /api/masters/bulk-load`

Create or update masters in bulk.

> Body parameter

```json
{
  "warehouses": [
    {
      "warehouse_code": "string",
      "warehouse_name": "string",
      "address": "string",
      "is_active": 1
    }
  ],
  "suppliers": [
    {
      "supplier_code": "string",
      "supplier_name": "string",
      "address": "string"
    }
  ],
  "customers": [
    {
      "customer_code": "string",
      "customer_name": "string",
      "address": "string"
    }
  ],
  "products": [
    {
      "product_code": "string",
      "product_name": "string",
      "supplier_code": "string",
      "customer_part_no": "string",
      "maker_item_code": "string",
      "supplier_item_code": "string",
      "packaging_qty": 0,
      "packaging_unit": "string",
      "internal_unit": "string",
      "base_unit": "EA",
      "packaging": "string",
      "assemble_div": "string",
      "next_div": "string",
      "ji_ku_text": "string",
      "kumitsuke_ku_text": "string",
      "shelf_life_days": 0,
      "requires_lot_number": true,
      "delivery_place_id": 0,
      "delivery_place_name": "string",
      "shipping_warehouse_name": "string"
    }
  ]
}
```

<h3 id="bulk-load-masters-parameters">Parameters</h3>

| Name                        | In   | Type                                                                                    | Required | Description |
| --------------------------- | ---- | --------------------------------------------------------------------------------------- | -------- | ----------- |
| body                        | body | [MasterBulkLoadRequest](#schemamasterbulkloadrequest)                                   | true     | none        |
| » warehouses                | body | [[WarehouseCreate](#schemawarehousecreate)]                                             | false    | none        |
| »» WarehouseCreate          | body | [WarehouseCreate](#schemawarehousecreate)                                               | false    | none        |
| »»» warehouse_code          | body | string                                                                                  | true     | none        |
| »»» warehouse_name          | body | string                                                                                  | true     | none        |
| »»» address                 | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» is_active               | body | integer                                                                                 | false    | none        |
| » suppliers                 | body | [[SupplierCreate](#schemasuppliercreate)]                                               | false    | none        |
| »» SupplierCreate           | body | [SupplierCreate](#schemasuppliercreate)                                                 | false    | none        |
| »»» supplier_code           | body | string                                                                                  | true     | none        |
| »»» supplier_name           | body | string                                                                                  | true     | none        |
| »»» address                 | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| » customers                 | body | [[CustomerCreate](#schemacustomercreate)]                                               | false    | none        |
| »» CustomerCreate           | body | [CustomerCreate](#schemacustomercreate)                                                 | false    | none        |
| »»» customer_code           | body | string                                                                                  | true     | none        |
| »»» customer_name           | body | string                                                                                  | true     | none        |
| »»» address                 | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| » products                  | body | [[app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate)] | false    | none        |
| »» ProductCreate            | body | [app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate)   | false    | none        |
| »»» product_code            | body | string                                                                                  | true     | none        |
| »»» product_name            | body | string                                                                                  | true     | none        |
| »»» supplier_code           | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» customer_part_no        | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» maker_item_code         | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» supplier_item_code      | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» packaging_qty           | body | any                                                                                     | true     | none        |
| »»»» _anonymous_            | body | number                                                                                  | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»» packaging_unit          | body | string                                                                                  | true     | none        |
| »»» internal_unit           | body | string                                                                                  | true     | none        |
| »»» base_unit               | body | string                                                                                  | false    | none        |
| »»» packaging               | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» assemble_div            | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» next_div                | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» ji_ku_text              | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» kumitsuke_ku_text       | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» shelf_life_days         | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | integer                                                                                 | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» requires_lot_number     | body | boolean                                                                                 | false    | none        |
| »»» delivery_place_id       | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | integer                                                                                 | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» delivery_place_name     | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |
| »»» shipping_warehouse_name | body | any                                                                                     | false    | none        |
| »»»» _anonymous_            | body | string                                                                                  | false    | none        |
| »»»» _anonymous_            | body | null                                                                                    | false    | none        |

> Example responses

> 200 Response

```json
{
  "created": {
    "property1": ["string"],
    "property2": ["string"]
  },
  "warnings": ["string"]
}
```

<h3 id="bulk-load-masters-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                  |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [MasterBulkLoadResponse](#schemamasterbulkloadresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)       |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-lots">lots</h1>

## List Lots

<a id="opIdlist_lots_api_lots_get"></a>

> Code samples

`GET /api/lots`

ロット一覧取得

Args:
skip: スキップ件数
limit: 取得件数
product_code: 製品コードでフィルタ
supplier_code: 仕入先コードでフィルタ
warehouse_code: 倉庫コードでフィルタ
expiry_from: 有効期限開始日
expiry_to: 有効期限終了日
with_stock: 在庫あり(>0)のみ取得

<h3 id="list-lots-parameters">Parameters</h3>

| Name           | In    | Type    | Required | Description |
| -------------- | ----- | ------- | -------- | ----------- |
| skip           | query | integer | false    | none        |
| limit          | query | integer | false    | none        |
| product_code   | query | any     | false    | none        |
| supplier_code  | query | any     | false    | none        |
| warehouse_code | query | any     | false    | none        |
| expiry_from    | query | any     | false    | none        |
| expiry_to      | query | any     | false    | none        |
| with_stock     | query | boolean | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2019-08-24T14:15:22Z",
    "updated_at": "2019-08-24T14:15:22Z",
    "supplier_code": "string",
    "product_code": "string",
    "lot_number": "string",
    "receipt_date": "2019-08-24",
    "mfg_date": "2019-08-24",
    "expiry_date": "2019-08-24",
    "warehouse_code": "string",
    "warehouse_id": 0,
    "lot_unit": "string",
    "kanban_class": "string",
    "sales_unit": "string",
    "inventory_unit": "string",
    "received_by": "string",
    "source_doc": "string",
    "qc_certificate_status": "string",
    "qc_certificate_file": "string",
    "id": 0,
    "current_quantity": 0,
    "last_updated": "2019-08-24T14:15:22Z",
    "product_name": "string"
  }
]
```

<h3 id="list-lots-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-lots-responseschema">Response Schema</h3>

Status Code **200**

_Response List Lots Api Lots Get_

| Name                            | Type                                | Required | Restrictions | Description |
| ------------------------------- | ----------------------------------- | -------- | ------------ | ----------- |
| Response List Lots Api Lots Get | [[LotResponse](#schemalotresponse)] | false    | none         | none        |
| » LotResponse                   | [LotResponse](#schemalotresponse)   | false    | none         | none        |
| »» created_at                   | string(date-time)                   | true     | none         | none        |
| »» updated_at                   | any                                 | false    | none         | none        |

_anyOf_

| Name            | Type              | Required | Restrictions | Description |
| --------------- | ----------------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date-time) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name             | Type         | Required | Restrictions | Description |
| ---------------- | ------------ | -------- | ------------ | ----------- |
| »» supplier_code | string       | true     | none         | none        |
| »» product_code  | string       | true     | none         | none        |
| »» lot_number    | string       | true     | none         | none        |
| »» receipt_date  | string(date) | true     | none         | none        |
| »» mfg_date      | any          | false    | none         | none        |

_anyOf_

| Name            | Type         | Required | Restrictions | Description |
| --------------- | ------------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| »» expiry_date | any  | false    | none         | none        |

_anyOf_

| Name            | Type         | Required | Restrictions | Description |
| --------------- | ------------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name              | Type | Required | Restrictions | Description |
| ----------------- | ---- | -------- | ------------ | ----------- |
| »» warehouse_code | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »» warehouse_id | any  | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| »» lot_unit | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »» kanban_class | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| »» sales_unit | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name              | Type | Required | Restrictions | Description |
| ----------------- | ---- | -------- | ------------ | ----------- |
| »» inventory_unit | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| »» received_by | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| »» source_doc | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                     | Type | Required | Restrictions | Description |
| ------------------------ | ---- | -------- | ------------ | ----------- |
| »» qc_certificate_status | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                   | Type | Required | Restrictions | Description |
| ---------------------- | ---- | -------- | ------------ | ----------- |
| »» qc_certificate_file | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                | Type    | Required | Restrictions | Description |
| ------------------- | ------- | -------- | ------------ | ----------- |
| »» id               | integer | true     | none         | none        |
| »» current_quantity | number  | false    | none         | none        |
| »» last_updated     | any     | false    | none         | none        |

_anyOf_

| Name            | Type              | Required | Restrictions | Description |
| --------------- | ----------------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date-time) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »» product_name | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Lot

<a id="opIdcreate_lot_api_lots_post"></a>

> Code samples

`POST /api/lots`

ロット新規登録

- ロットマスタ登録
- 現在在庫テーブル初期化

> Body parameter

```json
{
  "supplier_code": "string",
  "product_code": "string",
  "lot_number": "string",
  "receipt_date": "2019-08-24",
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "kanban_class": "string",
  "sales_unit": "string",
  "inventory_unit": "string",
  "received_by": "string",
  "source_doc": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string"
}
```

<h3 id="create-lot-parameters">Parameters</h3>

| Name                    | In   | Type                          | Required | Description |
| ----------------------- | ---- | ----------------------------- | -------- | ----------- |
| body                    | body | [LotCreate](#schemalotcreate) | true     | none        |
| » supplier_code         | body | string                        | true     | none        |
| » product_code          | body | string                        | true     | none        |
| » lot_number            | body | string                        | true     | none        |
| » receipt_date          | body | string(date)                  | true     | none        |
| » mfg_date              | body | any                           | false    | none        |
| »» _anonymous_          | body | string(date)                  | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » expiry_date           | body | any                           | false    | none        |
| »» _anonymous_          | body | string(date)                  | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » warehouse_code        | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » warehouse_id          | body | any                           | false    | none        |
| »» _anonymous_          | body | integer                       | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » lot_unit              | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » kanban_class          | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » sales_unit            | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » inventory_unit        | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » received_by           | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » source_doc            | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » qc_certificate_status | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » qc_certificate_file   | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |

> Example responses

> 201 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "supplier_code": "string",
  "product_code": "string",
  "lot_number": "string",
  "receipt_date": "2019-08-24",
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "kanban_class": "string",
  "sales_unit": "string",
  "inventory_unit": "string",
  "received_by": "string",
  "source_doc": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string",
  "id": 0,
  "current_quantity": 0,
  "last_updated": "2019-08-24T14:15:22Z",
  "product_name": "string"
}
```

<h3 id="create-lot-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [LotResponse](#schemalotresponse)                 |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Lot

<a id="opIdget_lot_api_lots__lot_id__get"></a>

> Code samples

`GET /api/lots/{lot_id}`

ロット詳細取得

<h3 id="get-lot-parameters">Parameters</h3>

| Name   | In   | Type    | Required | Description |
| ------ | ---- | ------- | -------- | ----------- |
| lot_id | path | integer | true     | none        |

> Example responses

> 200 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "supplier_code": "string",
  "product_code": "string",
  "lot_number": "string",
  "receipt_date": "2019-08-24",
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "kanban_class": "string",
  "sales_unit": "string",
  "inventory_unit": "string",
  "received_by": "string",
  "source_doc": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string",
  "id": 0,
  "current_quantity": 0,
  "last_updated": "2019-08-24T14:15:22Z",
  "product_name": "string"
}
```

<h3 id="get-lot-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [LotResponse](#schemalotresponse)                 |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Lot

<a id="opIdupdate_lot_api_lots__lot_id__put"></a>

> Code samples

`PUT /api/lots/{lot_id}`

ロット更新

> Body parameter

```json
{
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string"
}
```

<h3 id="update-lot-parameters">Parameters</h3>

| Name                    | In   | Type                          | Required | Description |
| ----------------------- | ---- | ----------------------------- | -------- | ----------- |
| lot_id                  | path | integer                       | true     | none        |
| body                    | body | [LotUpdate](#schemalotupdate) | true     | none        |
| » mfg_date              | body | any                           | false    | none        |
| »» _anonymous_          | body | string(date)                  | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » expiry_date           | body | any                           | false    | none        |
| »» _anonymous_          | body | string(date)                  | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » warehouse_code        | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » warehouse_id          | body | any                           | false    | none        |
| »» _anonymous_          | body | integer                       | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » lot_unit              | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » qc_certificate_status | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |
| » qc_certificate_file   | body | any                           | false    | none        |
| »» _anonymous_          | body | string                        | false    | none        |
| »» _anonymous_          | body | null                          | false    | none        |

> Example responses

> 200 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "supplier_code": "string",
  "product_code": "string",
  "lot_number": "string",
  "receipt_date": "2019-08-24",
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "kanban_class": "string",
  "sales_unit": "string",
  "inventory_unit": "string",
  "received_by": "string",
  "source_doc": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string",
  "id": 0,
  "current_quantity": 0,
  "last_updated": "2019-08-24T14:15:22Z",
  "product_name": "string"
}
```

<h3 id="update-lot-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [LotResponse](#schemalotresponse)                 |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Lot

<a id="opIddelete_lot_api_lots__lot_id__delete"></a>

> Code samples

`DELETE /api/lots/{lot_id}`

ロット削除

<h3 id="delete-lot-parameters">Parameters</h3>

| Name   | In   | Type    | Required | Description |
| ------ | ---- | ------- | -------- | ----------- |
| lot_id | path | integer | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-lot-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## List Lot Movements

<a id="opIdlist_lot_movements_api_lots__lot_id__movements_get"></a>

> Code samples

`GET /api/lots/{lot_id}/movements`

ロットの在庫変動履歴取得

<h3 id="list-lot-movements-parameters">Parameters</h3>

| Name   | In   | Type    | Required | Description |
| ------ | ---- | ------- | -------- | ----------- |
| lot_id | path | integer | true     | none        |

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2019-08-24T14:15:22Z",
    "updated_at": "2019-08-24T14:15:22Z",
    "product_id": "string",
    "warehouse_id": 0,
    "lot_id": 0,
    "quantity_delta": 0,
    "reason": "string",
    "source_table": "string",
    "source_id": 0,
    "batch_id": "string",
    "created_by": "system",
    "id": 0,
    "occurred_at": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="list-lot-movements-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-lot-movements-responseschema">Response Schema</h3>

Status Code **200**

_Response List Lot Movements Api Lots Lot Id Movements Get_

| Name                                                      | Type                                                    | Required | Restrictions | Description |
| --------------------------------------------------------- | ------------------------------------------------------- | -------- | ------------ | ----------- |
| Response List Lot Movements Api Lots Lot Id Movements Get | [[StockMovementResponse](#schemastockmovementresponse)] | false    | none         | none        |
| » StockMovementResponse                                   | [StockMovementResponse](#schemastockmovementresponse)   | false    | none         | none        |
| »» created_at                                             | string(date-time)                                       | true     | none         | none        |
| »» updated_at                                             | any                                                     | false    | none         | none        |

_anyOf_

| Name            | Type              | Required | Restrictions | Description |
| --------------- | ----------------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date-time) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »» product_id   | string | true     | none         | none        |
| »» warehouse_id | any    | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| »» lot_id | any  | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| »» quantity_delta | number | true     | none         | none        |
| »» reason         | string | true     | none         | none        |
| »» source_table   | any    | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| »» source_id | any  | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| »» batch_id | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type              | Required | Restrictions | Description |
| -------------- | ----------------- | -------- | ------------ | ----------- |
| »» created_by  | string            | false    | none         | none        |
| »» id          | integer           | true     | none         | none        |
| »» occurred_at | string(date-time) | true     | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Stock Movement

<a id="opIdcreate_stock_movement_api_lots_movements_post"></a>

> Code samples

`POST /api/lots/movements`

在庫変動記録

- 在庫変動履歴追加
- 現在在庫更新

> Body parameter

```json
{
  "product_id": "string",
  "warehouse_id": 0,
  "lot_id": 0,
  "quantity_delta": 0,
  "reason": "string",
  "source_table": "string",
  "source_id": 0,
  "batch_id": "string",
  "created_by": "system"
}
```

<h3 id="create-stock-movement-parameters">Parameters</h3>

| Name             | In   | Type                                              | Required | Description |
| ---------------- | ---- | ------------------------------------------------- | -------- | ----------- |
| body             | body | [StockMovementCreate](#schemastockmovementcreate) | true     | none        |
| » product_id     | body | string                                            | true     | none        |
| » warehouse_id   | body | any                                               | false    | none        |
| »» _anonymous_   | body | integer                                           | false    | none        |
| »» _anonymous_   | body | null                                              | false    | none        |
| » lot_id         | body | any                                               | false    | none        |
| »» _anonymous_   | body | integer                                           | false    | none        |
| »» _anonymous_   | body | null                                              | false    | none        |
| » quantity_delta | body | number                                            | true     | none        |
| » reason         | body | string                                            | true     | none        |
| » source_table   | body | any                                               | false    | none        |
| »» _anonymous_   | body | string                                            | false    | none        |
| »» _anonymous_   | body | null                                              | false    | none        |
| » source_id      | body | any                                               | false    | none        |
| »» _anonymous_   | body | integer                                           | false    | none        |
| »» _anonymous_   | body | null                                              | false    | none        |
| » batch_id       | body | any                                               | false    | none        |
| »» _anonymous_   | body | string                                            | false    | none        |
| »» _anonymous_   | body | null                                              | false    | none        |
| » created_by     | body | string                                            | false    | none        |

> Example responses

> 201 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "product_id": "string",
  "warehouse_id": 0,
  "lot_id": 0,
  "quantity_delta": 0,
  "reason": "string",
  "source_table": "string",
  "source_id": 0,
  "batch_id": "string",
  "created_by": "system",
  "id": 0,
  "occurred_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="create-stock-movement-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                |
| ------ | ------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [StockMovementResponse](#schemastockmovementresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)     |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-orders">orders</h1>

## List Orders

<a id="opIdlist_orders_api_orders_get"></a>

> Code samples

`GET /api/orders`

受注一覧取得（読み取り専用）

トランザクション不要のため、通常のSessionを使用

Note:
例外はグローバルハンドラで処理されるため、
ここではHTTPExceptionを投げない

<h3 id="list-orders-parameters">Parameters</h3>

| Name          | In    | Type    | Required | Description |
| ------------- | ----- | ------- | -------- | ----------- |
| skip          | query | integer | false    | none        |
| limit         | query | integer | false    | none        |
| status        | query | any     | false    | none        |
| customer_code | query | any     | false    | none        |
| date_from     | query | any     | false    | none        |
| date_to       | query | any     | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2019-08-24T14:15:22Z",
    "updated_at": "2019-08-24T14:15:22Z",
    "order_no": "string",
    "customer_code": "string",
    "order_date": "2019-08-24",
    "status": "open",
    "customer_order_no": "string",
    "customer_order_no_last6": "string",
    "delivery_mode": "string",
    "sap_order_id": "string",
    "sap_status": "string",
    "sap_sent_at": "2019-08-24T14:15:22Z",
    "sap_error_msg": "string",
    "id": 0
  }
]
```

<h3 id="list-orders-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-orders-responseschema">Response Schema</h3>

Status Code **200**

_Response List Orders Api Orders Get_

| Name                                | Type                                    | Required | Restrictions | Description |
| ----------------------------------- | --------------------------------------- | -------- | ------------ | ----------- |
| Response List Orders Api Orders Get | [[OrderResponse](#schemaorderresponse)] | false    | none         | none        |
| » OrderResponse                     | [OrderResponse](#schemaorderresponse)   | false    | none         | none        |
| »» created_at                       | string(date-time)                       | true     | none         | none        |
| »» updated_at                       | any                                     | false    | none         | none        |

_anyOf_

| Name            | Type              | Required | Restrictions | Description |
| --------------- | ----------------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date-time) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                 | Type         | Required | Restrictions | Description |
| -------------------- | ------------ | -------- | ------------ | ----------- |
| »» order_no          | string       | true     | none         | none        |
| »» customer_code     | string       | true     | none         | none        |
| »» order_date        | string(date) | true     | none         | none        |
| »» status            | string       | false    | none         | none        |
| »» customer_order_no | any          | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                       | Type | Required | Restrictions | Description |
| -------------------------- | ---- | -------- | ------------ | ----------- |
| »» customer_order_no_last6 | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| »» delivery_mode | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »» sap_order_id | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| »» sap_status | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| »» sap_sent_at | any  | false    | none         | none        |

_anyOf_

| Name            | Type              | Required | Restrictions | Description |
| --------------- | ----------------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date-time) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| »» sap_error_msg | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name  | Type    | Required | Restrictions | Description |
| ----- | ------- | -------- | ------------ | ----------- |
| »» id | integer | true     | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Create Order

<a id="opIdcreate_order_api_orders_post"></a>

> Code samples

`POST /api/orders`

受注作成

【修正#5】UnitOfWorkを依存注入で取得（SessionLocal直参照を回避）

トランザクション管理: - 成功時: UnitOfWorkが自動commit - 例外発生時: UnitOfWorkが自動rollback

例外処理: - DuplicateOrderError → 409 Conflict - OrderValidationError → 422 Unprocessable Entity - ProductNotFoundError → 404 Not Found - OrderDomainError → 400 Bad Request
上記はすべてグローバルハンドラで変換される

> Body parameter

```json
{
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "lines": [
    {
      "line_no": 0,
      "product_code": "string",
      "quantity": 0,
      "unit": "string",
      "due_date": "2019-08-24",
      "next_div": "string",
      "destination_id": 0,
      "external_unit": "string"
    }
  ]
}
```

<h3 id="create-order-parameters">Parameters</h3>

| Name                      | In   | Type                                        | Required | Description |
| ------------------------- | ---- | ------------------------------------------- | -------- | ----------- |
| body                      | body | [OrderCreate](#schemaordercreate)           | true     | none        |
| » order_no                | body | string                                      | true     | none        |
| » customer_code           | body | string                                      | true     | none        |
| » order_date              | body | string(date)                                | true     | none        |
| » status                  | body | string                                      | false    | none        |
| » customer_order_no       | body | any                                         | false    | none        |
| »» _anonymous_            | body | string                                      | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » customer_order_no_last6 | body | any                                         | false    | none        |
| »» _anonymous_            | body | string                                      | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » delivery_mode           | body | any                                         | false    | none        |
| »» _anonymous_            | body | string                                      | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » sap_order_id            | body | any                                         | false    | none        |
| »» _anonymous_            | body | string                                      | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » sap_status              | body | any                                         | false    | none        |
| »» _anonymous_            | body | string                                      | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » sap_sent_at             | body | any                                         | false    | none        |
| »» _anonymous_            | body | string(date-time)                           | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » sap_error_msg           | body | any                                         | false    | none        |
| »» _anonymous_            | body | string                                      | false    | none        |
| »» _anonymous_            | body | null                                        | false    | none        |
| » lines                   | body | [[OrderLineCreate](#schemaorderlinecreate)] | false    | none        |
| »» OrderLineCreate        | body | [OrderLineCreate](#schemaorderlinecreate)   | false    | none        |
| »»» line_no               | body | integer                                     | true     | none        |
| »»» product_code          | body | string                                      | true     | none        |
| »»» quantity              | body | number                                      | true     | none        |
| »»» unit                  | body | string                                      | true     | none        |
| »»» due_date              | body | any                                         | false    | none        |
| »»»» _anonymous_          | body | string(date)                                | false    | none        |
| »»»» _anonymous_          | body | null                                        | false    | none        |
| »»» next_div              | body | any                                         | false    | none        |
| »»»» _anonymous_          | body | string                                      | false    | none        |
| »»»» _anonymous_          | body | null                                        | false    | none        |
| »»» destination_id        | body | any                                         | false    | none        |
| »»»» _anonymous_          | body | integer                                     | false    | none        |
| »»»» _anonymous_          | body | null                                        | false    | none        |
| »»» external_unit         | body | any                                         | false    | none        |
| »»»» _anonymous_          | body | string                                      | false    | none        |
| »»»» _anonymous_          | body | null                                        | false    | none        |

> Example responses

> 201 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "id": 0,
  "lines": [
    {
      "id": 0,
      "line_no": 0,
      "product_code": "string",
      "product_name": "string",
      "customer_code": "string",
      "supplier_code": "string",
      "quantity": 0,
      "unit": "string",
      "due_date": "2019-08-24",
      "warehouse_allocations": [
        {
          "warehouse_code": "string",
          "quantity": 0
        }
      ],
      "related_lots": [{}],
      "allocated_lots": [{}],
      "allocated_qty": 0,
      "next_div": "string"
    }
  ]
}
```

<h3 id="create-order-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                  |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [OrderWithLinesResponse](#schemaorderwithlinesresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)       |

<aside class="success">
This operation does not require authentication
</aside>

## Get Order

<a id="opIdget_order_api_orders__order_id__get"></a>

> Code samples

`GET /api/orders/{order_id}`

受注詳細取得（読み取り専用、明細含む）

トランザクション不要のため、通常のSessionを使用

Note: - OrderNotFoundError → 404はグローバルハンドラが処理

<h3 id="get-order-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| order_id | path | integer | true     | none        |

> Example responses

> 200 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "id": 0,
  "lines": [
    {
      "id": 0,
      "line_no": 0,
      "product_code": "string",
      "product_name": "string",
      "customer_code": "string",
      "supplier_code": "string",
      "quantity": 0,
      "unit": "string",
      "due_date": "2019-08-24",
      "warehouse_allocations": [
        {
          "warehouse_code": "string",
          "quantity": 0
        }
      ],
      "related_lots": [{}],
      "allocated_lots": [{}],
      "allocated_qty": 0,
      "next_div": "string"
    }
  ]
}
```

<h3 id="get-order-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                  |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [OrderWithLinesResponse](#schemaorderwithlinesresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)       |

<aside class="success">
This operation does not require authentication
</aside>

## Update Order Status

<a id="opIdupdate_order_status_api_orders__order_id__status_patch"></a>

> Code samples

`PATCH /api/orders/{order_id}/status`

受注ステータス更新

【修正#2】dict入力を廃止し、OrderStatusUpdateスキーマを使用
【修正#5】UnitOfWorkを依存注入で取得

Args:
order_id: 受注ID
body: ステータス更新データ（Schema検証済み）
uow: UnitOfWork（依存注入）

トランザクション管理: - 成功時: UnitOfWorkが自動commit - 例外発生時: UnitOfWorkが自動rollback

例外処理: - OrderNotFoundError → 404 Not Found - InvalidOrderStatusError → 400 Bad Request
上記はグローバルハンドラで変換される

> Body parameter

```json
{
  "status": "allocated"
}
```

<h3 id="update-order-status-parameters">Parameters</h3>

| Name     | In   | Type                                          | Required | Description                                                     |
| -------- | ---- | --------------------------------------------- | -------- | --------------------------------------------------------------- |
| order_id | path | integer                                       | true     | none                                                            |
| body     | body | [OrderStatusUpdate](#schemaorderstatusupdate) | true     | none                                                            |
| » status | body | string                                        | true     | 新しいステータス（open, allocated, shipped, closed, cancelled） |

> Example responses

> 200 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "id": 0
}
```

<h3 id="update-order-status-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [OrderResponse](#schemaorderresponse)             |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Cancel Order

<a id="opIdcancel_order_api_orders__order_id__cancel_delete"></a>

> Code samples

`DELETE /api/orders/{order_id}/cancel`

受注キャンセル

【修正#5】UnitOfWorkを依存注入で取得

トランザクション管理: - 成功時: UnitOfWorkが自動commit - 例外発生時: UnitOfWorkが自動rollback

例外処理: - OrderNotFoundError → 404 Not Found - InvalidOrderStatusError → 400 Bad Request
上記はグローバルハンドラで変換される

Returns:
None (204 No Content)

<h3 id="cancel-order-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| order_id | path | integer | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="cancel-order-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## 受注在庫検証

<a id="opIdvalidate_order_stock_api_orders_validate_post"></a>

> Code samples

`POST /api/orders/validate`

> Body parameter

```json
{
  "lines": [
    {
      "product_code": "string",
      "warehouse_code": "string",
      "quantity": 0
    }
  ],
  "ship_date": "2019-08-24"
}
```

<h3 id="受注在庫検証-parameters">Parameters</h3>

| Name                     | In   | Type                                                    | Required | Description |
| ------------------------ | ---- | ------------------------------------------------------- | -------- | ----------- |
| body                     | body | [OrderValidationRequest](#schemaordervalidationrequest) | true     | none        |
| » lines                  | body | [[OrderLineDemandSchema](#schemaorderlinedemandschema)] | true     | none        |
| »» OrderLineDemandSchema | body | [OrderLineDemandSchema](#schemaorderlinedemandschema)   | false    | none        |
| »»» product_code         | body | string                                                  | true     | none        |
| »»» warehouse_code       | body | string                                                  | true     | none        |
| »»» quantity             | body | integer                                                 | true     | none        |
| » ship_date              | body | any                                                     | false    | none        |
| »» _anonymous_           | body | string(date)                                            | false    | none        |
| »» _anonymous_           | body | null                                                    | false    | none        |

> Example responses

> 200 Response

```json
{
  "ok": true,
  "message": "string",
  "data": {
    "product_code": "string",
    "required": 0,
    "available": 0,
    "details": {
      "warehouse_code": "string",
      "per_lot": [
        {
          "lot_id": 0,
          "available": 0
        }
      ],
      "ship_date": "2019-08-24"
    }
  }
}
```

<h3 id="受注在庫検証-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                    |
| ------ | ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [OrderValidationResponse](#schemaordervalidationresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)         |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-allocations">allocations</h1>

## Drag Assign Allocation

<a id="opIddrag_assign_allocation_api_allocations_drag_assign_post"></a>

> Code samples

`POST /api/allocations/drag-assign`

互換エンドポイント: ドラッグ引当
※元々 orders.py に存在したものを再実装（URL・I/O変更なし）

> Body parameter

```json
{
  "order_line_id": 0,
  "lot_id": 0,
  "allocate_qty": 0
}
```

<h3 id="drag-assign-allocation-parameters">Parameters</h3>

| Name            | In   | Type                                          | Required | Description |
| --------------- | ---- | --------------------------------------------- | -------- | ----------- |
| body            | body | [DragAssignRequest](#schemadragassignrequest) | true     | none        |
| » order_line_id | body | integer                                       | true     | none        |
| » lot_id        | body | integer                                       | true     | none        |
| » allocate_qty  | body | number                                        | true     | none        |

> Example responses

> 200 Response

```json
null
```

<h3 id="drag-assign-allocation-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="drag-assign-allocation-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## Delete Allocation

<a id="opIddelete_allocation_api_allocations__allocation_id__delete"></a>

> Code samples

`DELETE /api/allocations/{allocation_id}`

引当取消（DELETE API, ソフトキャンセル対応）

<h3 id="delete-allocation-parameters">Parameters</h3>

| Name          | In   | Type    | Required | Description |
| ------------- | ---- | ------- | -------- | ----------- |
| allocation_id | path | integer | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-allocation-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Preview Allocations

<a id="opIdpreview_allocations_api_allocations_preview_post"></a>

> Code samples

`POST /api/allocations/preview`

在庫を変更しない FEFO 引当プレビュー

> Body parameter

```json
{
  "order_id": 0
}
```

<h3 id="preview-allocations-parameters">Parameters</h3>

| Name       | In   | Type                                            | Required | Description |
| ---------- | ---- | ----------------------------------------------- | -------- | ----------- |
| body       | body | [FefoPreviewRequest](#schemafefopreviewrequest) | true     | none        |
| » order_id | body | integer                                         | true     | none        |

> Example responses

> 200 Response

```json
{
  "order_id": 0,
  "lines": [
    {
      "order_line_id": 0,
      "product_code": "string",
      "required_qty": 0,
      "already_allocated_qty": 0,
      "allocations": [
        {
          "lot_id": 0,
          "lot_number": "string",
          "allocate_qty": 0,
          "expiry_date": "2019-08-24",
          "receipt_date": "2019-08-24"
        }
      ],
      "next_div": "string",
      "warnings": ["string"]
    }
  ],
  "warnings": ["string"]
}
```

<h3 id="preview-allocations-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [FefoPreviewResponse](#schemafefopreviewresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Allocate Order

<a id="opIdallocate_order_api_allocations_orders__order_id__allocate_post"></a>

> Code samples

`POST /api/allocations/orders/{order_id}/allocate`

注文ID単位でのFEFO引当確定

<h3 id="allocate-order-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| order_id | path | integer | true     | none        |

> Example responses

> 200 Response

```json
{
  "order_id": 0,
  "created_allocation_ids": [0],
  "preview": {
    "order_id": 0,
    "lines": [
      {
        "order_line_id": 0,
        "product_code": "string",
        "required_qty": 0,
        "already_allocated_qty": 0,
        "allocations": [
          {
            "lot_id": 0,
            "lot_number": "string",
            "allocate_qty": 0,
            "expiry_date": "2019-08-24",
            "receipt_date": "2019-08-24"
          }
        ],
        "next_div": "string",
        "warnings": ["string"]
      }
    ],
    "warnings": ["string"]
  }
}
```

<h3 id="allocate-order-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [FefoCommitResponse](#schemafefocommitresponse)   |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-integration">integration</h1>

## Submit Ocr Data

<a id="opIdsubmit_ocr_data_api_integration_ai_ocr_submit_post"></a>

> Code samples

`POST /api/integration/ai-ocr/submit`

AI-OCR受注データ取込

処理フロー:

1. OCR取込ログ作成
2. 各受注レコードについて:
   - 得意先・製品のマスタチェック
   - 受注ヘッダ作成
   - 受注明細作成
   - (オプション) フォーキャストマッチング
3. 結果サマリ返却

> Body parameter

```json
{
  "source": "PAD",
  "schema_version": "1.0.0",
  "file_name": "string",
  "operator": "string",
  "records": [
    {
      "order_no": "string",
      "customer_code": "string",
      "order_date": "string",
      "lines": [
        {
          "line_no": 0,
          "product_code": "string",
          "quantity": 0,
          "unit": "string",
          "due_date": "2019-08-24",
          "next_div": "string",
          "destination_id": 0,
          "external_unit": "string"
        }
      ]
    }
  ]
}
```

<h3 id="submit-ocr-data-parameters">Parameters</h3>

| Name                 | In   | Type                                                | Required | Description       |
| -------------------- | ---- | --------------------------------------------------- | -------- | ----------------- |
| body                 | body | [OcrSubmissionRequest](#schemaocrsubmissionrequest) | true     | none              |
| » source             | body | string                                              | false    | none              |
| » schema_version     | body | string                                              | false    | none              |
| » file_name          | body | any                                                 | false    | none              |
| »» _anonymous_       | body | string                                              | false    | none              |
| »» _anonymous_       | body | null                                                | false    | none              |
| » operator           | body | any                                                 | false    | none              |
| »» _anonymous_       | body | string                                              | false    | none              |
| »» _anonymous_       | body | null                                                | false    | none              |
| » records            | body | [[OcrOrderRecord](#schemaocrorderrecord)]           | true     | [OCR受注レコード] |
| »» OcrOrderRecord    | body | [OcrOrderRecord](#schemaocrorderrecord)             | false    | OCR受注レコード   |
| »»» order_no         | body | string                                              | true     | none              |
| »»» customer_code    | body | string                                              | true     | none              |
| »»» order_date       | body | any                                                 | false    | none              |
| »»»» _anonymous_     | body | string                                              | false    | none              |
| »»»» _anonymous_     | body | null                                                | false    | none              |
| »»» lines            | body | [[OrderLineCreate](#schemaorderlinecreate)]         | true     | none              |
| »»»» OrderLineCreate | body | [OrderLineCreate](#schemaorderlinecreate)           | false    | none              |
| »»»»» line_no        | body | integer                                             | true     | none              |
| »»»»» product_code   | body | string                                              | true     | none              |
| »»»»» quantity       | body | number                                              | true     | none              |
| »»»»» unit           | body | string                                              | true     | none              |
| »»»»» due_date       | body | any                                                 | false    | none              |
| »»»»»» _anonymous_   | body | string(date)                                        | false    | none              |
| »»»»»» _anonymous_   | body | null                                                | false    | none              |
| »»»»» next_div       | body | any                                                 | false    | none              |
| »»»»»» _anonymous_   | body | string                                              | false    | none              |
| »»»»»» _anonymous_   | body | null                                                | false    | none              |
| »»»»» destination_id | body | any                                                 | false    | none              |
| »»»»»» _anonymous_   | body | integer                                             | false    | none              |
| »»»»»» _anonymous_   | body | null                                                | false    | none              |
| »»»»» external_unit  | body | any                                                 | false    | none              |
| »»»»»» _anonymous_   | body | string                                              | false    | none              |
| »»»»»» _anonymous_   | body | null                                                | false    | none              |

> Example responses

> 200 Response

```json
{
  "status": "string",
  "submission_id": "string",
  "created_orders": 0,
  "created_lines": 0,
  "total_records": 0,
  "processed_records": 0,
  "failed_records": 0,
  "skipped_records": 0,
  "error_details": "string"
}
```

<h3 id="submit-ocr-data-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                |
| ------ | ------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [OcrSubmissionResponse](#schemaocrsubmissionresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)     |

<aside class="success">
This operation does not require authentication
</aside>

## List Ocr Submissions

<a id="opIdlist_ocr_submissions_api_integration_ai_ocr_submissions_get"></a>

> Code samples

`GET /api/integration/ai-ocr/submissions`

OCR取込ログ一覧取得

<h3 id="list-ocr-submissions-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description |
| ----- | ----- | ------- | -------- | ----------- |
| skip  | query | integer | false    | none        |
| limit | query | integer | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "status": "string",
    "submission_id": "string",
    "created_orders": 0,
    "created_lines": 0,
    "total_records": 0,
    "processed_records": 0,
    "failed_records": 0,
    "skipped_records": 0,
    "error_details": "string"
  }
]
```

<h3 id="list-ocr-submissions-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-ocr-submissions-responseschema">Response Schema</h3>

Status Code **200**

_Response List Ocr Submissions Api Integration Ai Ocr Submissions Get_

| Name                                                                 | Type                                                    | Required | Restrictions | Description         |
| -------------------------------------------------------------------- | ------------------------------------------------------- | -------- | ------------ | ------------------- |
| Response List Ocr Submissions Api Integration Ai Ocr Submissions Get | [[OcrSubmissionResponse](#schemaocrsubmissionresponse)] | false    | none         | [OCR取込レスポンス] |
| » OcrSubmissionResponse                                              | [OcrSubmissionResponse](#schemaocrsubmissionresponse)   | false    | none         | OCR取込レスポンス   |
| »» status                                                            | string                                                  | true     | none         | none                |
| »» submission_id                                                     | string                                                  | true     | none         | none                |
| »» created_orders                                                    | integer                                                 | true     | none         | none                |
| »» created_lines                                                     | integer                                                 | true     | none         | none                |
| »» total_records                                                     | integer                                                 | true     | none         | none                |
| »» processed_records                                                 | integer                                                 | true     | none         | none                |
| »» failed_records                                                    | integer                                                 | true     | none         | none                |
| »» skipped_records                                                   | integer                                                 | true     | none         | none                |
| »» error_details                                                     | any                                                     | false    | none         | none                |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## Register To Sap

<a id="opIdregister_to_sap_api_integration_sap_register_post"></a>

> Code samples

`POST /api/integration/sap/register`

SAP連携(手動送信)

注意: 実際のSAP APIは実装されていません。
これはモック実装です。

> Body parameter

```json
{
  "target": {
    "type": "string",
    "value": null
  },
  "options": {
    "retry": 1,
    "timeout_sec": 30
  }
}
```

<h3 id="register-to-sap-parameters">Parameters</h3>

| Name            | In   | Type                                            | Required | Description       |
| --------------- | ---- | ----------------------------------------------- | -------- | ----------------- |
| body            | body | [SapRegisterRequest](#schemasapregisterrequest) | true     | none              |
| » target        | body | [SapRegisterTarget](#schemasapregistertarget)   | true     | SAP送信対象指定   |
| »» type         | body | string                                          | true     | none              |
| »» value        | body | any                                             | true     | none              |
| » options       | body | any                                             | false    | none              |
| »» _anonymous_  | body | [SapRegisterOptions](#schemasapregisteroptions) | false    | SAP送信オプション |
| »»» retry       | body | integer                                         | false    | none              |
| »»» timeout_sec | body | integer                                         | false    | none              |
| »» _anonymous_  | body | null                                            | false    | none              |

> Example responses

> 200 Response

```json
{
  "status": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sent": 0,
  "error_message": "string"
}
```

<h3 id="register-to-sap-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [SapRegisterResponse](#schemasapregisterresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## List Sap Logs

<a id="opIdlist_sap_logs_api_integration_sap_logs_get"></a>

> Code samples

`GET /api/integration/sap/logs`

SAP連携ログ一覧取得

<h3 id="list-sap-logs-parameters">Parameters</h3>

| Name  | In    | Type    | Required | Description |
| ----- | ----- | ------- | -------- | ----------- |
| skip  | query | integer | false    | none        |
| limit | query | integer | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "order_id": 0,
    "payload": "string",
    "result": "string",
    "status": "string",
    "executed_at": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="list-sap-logs-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-sap-logs-responseschema">Response Schema</h3>

Status Code **200**

_Response List Sap Logs Api Integration Sap Logs Get_

| Name                                                | Type                                              | Required | Restrictions | Description             |
| --------------------------------------------------- | ------------------------------------------------- | -------- | ------------ | ----------------------- |
| Response List Sap Logs Api Integration Sap Logs Get | [[SapSyncLogResponse](#schemasapsynclogresponse)] | false    | none         | [SAP連携ログレスポンス] |
| » SapSyncLogResponse                                | [SapSyncLogResponse](#schemasapsynclogresponse)   | false    | none         | SAP連携ログレスポンス   |
| »» id                                               | integer                                           | true     | none         | none                    |
| »» order_id                                         | any                                               | false    | none         | none                    |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| »» payload | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| »» result | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type              | Required | Restrictions | Description |
| -------------- | ----------------- | -------- | ------------ | ----------- |
| »» status      | string            | true     | none         | none        |
| »» executed_at | string(date-time) | true     | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-admin">admin</h1>

## Get Dashboard Stats

<a id="opIdget_dashboard_stats_api_admin_stats_get"></a>

> Code samples

`GET /api/admin/stats`

ダッシュボード用の統計情報を返す

> Example responses

> 200 Response

```json
{
  "total_stock": 0,
  "total_orders": 0,
  "unallocated_orders": 0
}
```

<h3 id="get-dashboard-stats-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema                                                  |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | [DashboardStatsResponse](#schemadashboardstatsresponse) |

<aside class="success">
This operation does not require authentication
</aside>

## Reset Database

<a id="opIdreset_database_api_admin_reset_database_post"></a>

> Code samples

`POST /api/admin/reset-database`

データベースリセット（開発環境のみ）
新スキーマに対応したマスタデータを投入

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "data": {}
}
```

<h3 id="reset-database-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema                              |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | [ResponseBase](#schemaresponsebase) |

<aside class="success">
This operation does not require authentication
</aside>

## Load Full Sample Data

<a id="opIdload_full_sample_data_api_admin_load_full_sample_data_post"></a>

> Code samples

`POST /api/admin/load-full-sample-data`

一括サンプルデータ投入（新スキーマ対応版）

処理順序:

1. 製品マスタ
2. ロット登録
3. 受注登録

> Body parameter

```json
{
  "products": [
    {
      "product_code": "string",
      "product_name": "string",
      "supplier_code": "string",
      "customer_part_no": "string",
      "maker_item_code": "string",
      "supplier_item_code": "string",
      "packaging_qty": 0,
      "packaging_unit": "string",
      "internal_unit": "string",
      "base_unit": "EA",
      "packaging": "string",
      "assemble_div": "string",
      "next_div": "string",
      "ji_ku_text": "string",
      "kumitsuke_ku_text": "string",
      "shelf_life_days": 0,
      "requires_lot_number": true,
      "delivery_place_id": 0,
      "delivery_place_name": "string",
      "shipping_warehouse_name": "string"
    }
  ],
  "lots": [
    {
      "supplier_code": "string",
      "product_code": "string",
      "lot_number": "string",
      "receipt_date": "2019-08-24",
      "mfg_date": "2019-08-24",
      "expiry_date": "2019-08-24",
      "warehouse_code": "string",
      "warehouse_id": 0,
      "lot_unit": "string",
      "kanban_class": "string",
      "sales_unit": "string",
      "inventory_unit": "string",
      "received_by": "string",
      "source_doc": "string",
      "qc_certificate_status": "string",
      "qc_certificate_file": "string"
    }
  ],
  "orders": [
    {
      "order_no": "string",
      "customer_code": "string",
      "order_date": "string",
      "lines": [
        {
          "line_no": 0,
          "product_code": "string",
          "quantity": 0,
          "unit": "string",
          "due_date": "2019-08-24",
          "next_div": "string",
          "destination_id": 0,
          "external_unit": "string"
        }
      ]
    }
  ]
}
```

<h3 id="load-full-sample-data-parameters">Parameters</h3>

| Name                         | In   | Type                                                                                    | Required | Description       |
| ---------------------------- | ---- | --------------------------------------------------------------------------------------- | -------- | ----------------- |
| body                         | body | [FullSampleDataRequest](#schemafullsampledatarequest)                                   | true     | none              |
| » products                   | body | any                                                                                     | false    | none              |
| »» _anonymous_               | body | [[app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate)] | false    | none              |
| »»» ProductCreate            | body | [app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate)   | false    | none              |
| »»»» product_code            | body | string                                                                                  | true     | none              |
| »»»» product_name            | body | string                                                                                  | true     | none              |
| »»»» supplier_code           | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» customer_part_no        | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» maker_item_code         | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» supplier_item_code      | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» packaging_qty           | body | any                                                                                     | true     | none              |
| »»»»» _anonymous_            | body | number                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»» packaging_unit          | body | string                                                                                  | true     | none              |
| »»»» internal_unit           | body | string                                                                                  | true     | none              |
| »»»» base_unit               | body | string                                                                                  | false    | none              |
| »»»» packaging               | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» assemble_div            | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» next_div                | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» ji_ku_text              | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» kumitsuke_ku_text       | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» shelf_life_days         | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | integer                                                                                 | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» requires_lot_number     | body | boolean                                                                                 | false    | none              |
| »»»» delivery_place_id       | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | integer                                                                                 | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» delivery_place_name     | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» shipping_warehouse_name | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »» _anonymous_               | body | null                                                                                    | false    | none              |
| » lots                       | body | any                                                                                     | false    | none              |
| »» _anonymous_               | body | [[LotCreate](#schemalotcreate)]                                                         | false    | none              |
| »»» LotCreate                | body | [LotCreate](#schemalotcreate)                                                           | false    | none              |
| »»»» supplier_code           | body | string                                                                                  | true     | none              |
| »»»» product_code            | body | string                                                                                  | true     | none              |
| »»»» lot_number              | body | string                                                                                  | true     | none              |
| »»»» receipt_date            | body | string(date)                                                                            | true     | none              |
| »»»» mfg_date                | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string(date)                                                                            | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» expiry_date             | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string(date)                                                                            | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» warehouse_code          | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» warehouse_id            | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | integer                                                                                 | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» lot_unit                | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» kanban_class            | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» sales_unit              | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» inventory_unit          | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» received_by             | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» source_doc              | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» qc_certificate_status   | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» qc_certificate_file     | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »» _anonymous_               | body | null                                                                                    | false    | none              |
| » orders                     | body | any                                                                                     | false    | none              |
| »» _anonymous_               | body | [[OcrOrderRecord](#schemaocrorderrecord)]                                               | false    | [OCR受注レコード] |
| »»» OcrOrderRecord           | body | [OcrOrderRecord](#schemaocrorderrecord)                                                 | false    | OCR受注レコード   |
| »»»» order_no                | body | string                                                                                  | true     | none              |
| »»»» customer_code           | body | string                                                                                  | true     | none              |
| »»»» order_date              | body | any                                                                                     | false    | none              |
| »»»»» _anonymous_            | body | string                                                                                  | false    | none              |
| »»»»» _anonymous_            | body | null                                                                                    | false    | none              |
| »»»» lines                   | body | [[OrderLineCreate](#schemaorderlinecreate)]                                             | true     | none              |
| »»»»» OrderLineCreate        | body | [OrderLineCreate](#schemaorderlinecreate)                                               | false    | none              |
| »»»»»» line_no               | body | integer                                                                                 | true     | none              |
| »»»»»» product_code          | body | string                                                                                  | true     | none              |
| »»»»»» quantity              | body | number                                                                                  | true     | none              |
| »»»»»» unit                  | body | string                                                                                  | true     | none              |
| »»»»»» due_date              | body | any                                                                                     | false    | none              |
| »»»»»»» _anonymous_          | body | string(date)                                                                            | false    | none              |
| »»»»»»» _anonymous_          | body | null                                                                                    | false    | none              |
| »»»»»» next_div              | body | any                                                                                     | false    | none              |
| »»»»»»» _anonymous_          | body | string                                                                                  | false    | none              |
| »»»»»»» _anonymous_          | body | null                                                                                    | false    | none              |
| »»»»»» destination_id        | body | any                                                                                     | false    | none              |
| »»»»»»» _anonymous_          | body | integer                                                                                 | false    | none              |
| »»»»»»» _anonymous_          | body | null                                                                                    | false    | none              |
| »»»»»» external_unit         | body | any                                                                                     | false    | none              |
| »»»»»»» _anonymous_          | body | string                                                                                  | false    | none              |
| »»»»»»» _anonymous_          | body | null                                                                                    | false    | none              |
| »» _anonymous_               | body | null                                                                                    | false    | none              |

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "data": {}
}
```

<h3 id="load-full-sample-data-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ResponseBase](#schemaresponsebase)               |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## List Presets

<a id="opIdlist_presets_api_admin_presets_get"></a>

> Code samples

`GET /api/admin/presets`

Return available preset names.

> Example responses

> 200 Response

```json
{
  "presets": ["string"]
}
```

<h3 id="list-presets-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema                                                    |
| ------ | ------------------------------------------------------- | ------------------- | --------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | [AdminPresetListResponse](#schemaadminpresetlistresponse) |

<aside class="success">
This operation does not require authentication
</aside>

## Load Preset

<a id="opIdload_preset_api_admin_load_preset_post"></a>

> Code samples

`POST /api/admin/load-preset`

Load a preset JSON file and bulk insert masters.

<h3 id="load-preset-parameters">Parameters</h3>

| Name | In    | Type   | Required | Description  |
| ---- | ----- | ------ | -------- | ------------ |
| name | query | string | true     | プリセット名 |

> Example responses

> 200 Response

```json
{
  "preset": "string",
  "result": {
    "created": {
      "property1": ["string"],
      "property2": ["string"]
    },
    "warnings": ["string"]
  }
}
```

<h3 id="load-preset-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                    |
| ------ | ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [AdminPresetLoadResponse](#schemaadminpresetloadresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)         |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-forecast">forecast</h1>

## List Forecast Summary

<a id="opIdlist_forecast_summary_api_forecast_list_get"></a>

> Code samples

`GET /api/forecast/list`

Forecast一覧（フロント表示用）

<h3 id="list-forecast-summary-parameters">Parameters</h3>

| Name          | In    | Type | Required | Description |
| ------------- | ----- | ---- | -------- | ----------- |
| product_code  | query | any  | false    | none        |
| supplier_code | query | any  | false    | none        |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 0,
      "product_code": "string",
      "product_name": "string",
      "customer_code": "string",
      "supplier_code": "string",
      "granularity": "string",
      "version_no": 0,
      "updated_at": "2019-08-24T14:15:22Z",
      "daily_data": {
        "property1": 0,
        "property2": 0
      },
      "dekad_data": {
        "property1": 0,
        "property2": 0
      },
      "monthly_data": {
        "property1": 0,
        "property2": 0
      },
      "dekad_summary": {
        "property1": 0,
        "property2": 0
      },
      "customer_name": "得意先A (ダミー)",
      "supplier_name": "サプライヤーB (ダミー)",
      "unit": "EA",
      "version_history": []
    }
  ]
}
```

<h3 id="list-forecast-summary-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                              |
| ------ | ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ForecastListResponse](#schemaforecastlistresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)   |

<aside class="success">
This operation does not require authentication
</aside>

## List Forecasts

<a id="opIdlist_forecasts_api_forecast_get"></a>

> Code samples

`GET /api/forecast`

フォーキャスト一覧取得 (生データ)

<h3 id="list-forecasts-parameters">Parameters</h3>

| Name          | In    | Type    | Required | Description |
| ------------- | ----- | ------- | -------- | ----------- |
| skip          | query | integer | false    | none        |
| limit         | query | integer | false    | none        |
| product_id    | query | any     | false    | none        |
| customer_id   | query | any     | false    | none        |
| product_code  | query | any     | false    | none        |
| customer_code | query | any     | false    | none        |
| granularity   | query | any     | false    | none        |
| is_active     | query | any     | false    | none        |
| version_no    | query | any     | false    | none        |

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2019-08-24T14:15:22Z",
    "updated_at": "2019-08-24T14:15:22Z",
    "product_id": "string",
    "customer_id": "string",
    "granularity": "daily",
    "qty_forecast": 0,
    "version_no": 1,
    "source_system": "external",
    "is_active": true,
    "date_day": "2019-08-24",
    "date_dekad_start": "2019-08-24",
    "year_month": "string",
    "id": 0,
    "forecast_id": 0,
    "supplier_id": "string",
    "version_issued_at": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="list-forecasts-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | Inline                                            |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<h3 id="list-forecasts-responseschema">Response Schema</h3>

Status Code **200**

_Response List Forecasts Api Forecast Get_

| Name                                     | Type                                          | Required | Restrictions | Description                |
| ---------------------------------------- | --------------------------------------------- | -------- | ------------ | -------------------------- |
| Response List Forecasts Api Forecast Get | [[ForecastResponse](#schemaforecastresponse)] | false    | none         | [フォーキャストレスポンス] |
| » ForecastResponse                       | [ForecastResponse](#schemaforecastresponse)   | false    | none         | フォーキャストレスポンス   |
| »» created_at                            | string(date-time)                             | true     | none         | none                       |
| »» updated_at                            | any                                           | false    | none         | none                       |

_anyOf_

| Name            | Type              | Required | Restrictions | Description |
| --------------- | ----------------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date-time) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name             | Type    | Required | Restrictions | Description |
| ---------------- | ------- | -------- | ------------ | ----------- |
| »» product_id    | string  | true     | none         | none        |
| »» customer_id   | string  | true     | none         | none        |
| »» granularity   | string  | true     | none         | none        |
| »» qty_forecast  | integer | true     | none         | none        |
| »» version_no    | integer | false    | none         | none        |
| »» source_system | string  | false    | none         | none        |
| »» is_active     | boolean | false    | none         | none        |
| »» date_day      | any     | false    | none         | none        |

_anyOf_

| Name            | Type         | Required | Restrictions | Description |
| --------------- | ------------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| »» date_dekad_start | any  | false    | none         | none        |

_anyOf_

| Name            | Type         | Required | Restrictions | Description |
| --------------- | ------------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string(date) | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| »» year_month | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type    | Required | Restrictions | Description |
| -------------- | ------- | -------- | ------------ | ----------- |
| »» id          | integer | true     | none         | none        |
| »» forecast_id | any     | false    | none         | none        |

_anyOf_

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| »»» _anonymous_ | integer | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| »» supplier_id | any  | false    | none         | none        |

_anyOf_

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| »»» _anonymous_ | string | false    | none         | none        |

_or_

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| »»» _anonymous_ | null | false    | none         | none        |

_continued_

| Name                 | Type              | Required | Restrictions | Description |
| -------------------- | ----------------- | -------- | ------------ | ----------- |
| »» version_issued_at | string(date-time) | true     | none         | none        |

#### Enumerated Values

| Property    | Value   |
| ----------- | ------- |
| granularity | daily   |
| granularity | dekad   |
| granularity | monthly |

<aside class="success">
This operation does not require authentication
</aside>

## Create Forecast

<a id="opIdcreate_forecast_api_forecast_post"></a>

> Code samples

`POST /api/forecast`

フォーキャスト単一登録

> Body parameter

```json
{
  "product_id": "string",
  "customer_id": "string",
  "granularity": "daily",
  "qty_forecast": 0,
  "version_no": 1,
  "source_system": "external",
  "is_active": true,
  "date_day": "2019-08-24",
  "date_dekad_start": "2019-08-24",
  "year_month": "string",
  "version_issued_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="create-forecast-parameters">Parameters</h3>

| Name                | In   | Type                                    | Required | Description |
| ------------------- | ---- | --------------------------------------- | -------- | ----------- |
| body                | body | [ForecastCreate](#schemaforecastcreate) | true     | none        |
| » product_id        | body | string                                  | true     | none        |
| » customer_id       | body | string                                  | true     | none        |
| » granularity       | body | string                                  | true     | none        |
| » qty_forecast      | body | integer                                 | true     | none        |
| » version_no        | body | integer                                 | false    | none        |
| » source_system     | body | string                                  | false    | none        |
| » is_active         | body | boolean                                 | false    | none        |
| » date_day          | body | any                                     | false    | none        |
| »» _anonymous_      | body | string(date)                            | false    | none        |
| »» _anonymous_      | body | null                                    | false    | none        |
| » date_dekad_start  | body | any                                     | false    | none        |
| »» _anonymous_      | body | string(date)                            | false    | none        |
| »» _anonymous_      | body | null                                    | false    | none        |
| » year_month        | body | any                                     | false    | none        |
| »» _anonymous_      | body | string                                  | false    | none        |
| »» _anonymous_      | body | null                                    | false    | none        |
| » version_issued_at | body | string(date-time)                       | true     | none        |

#### Enumerated Values

| Parameter     | Value   |
| ------------- | ------- |
| » granularity | daily   |
| » granularity | dekad   |
| » granularity | monthly |

> Example responses

> 201 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "product_id": "string",
  "customer_id": "string",
  "granularity": "daily",
  "qty_forecast": 0,
  "version_no": 1,
  "source_system": "external",
  "is_active": true,
  "date_day": "2019-08-24",
  "date_dekad_start": "2019-08-24",
  "year_month": "string",
  "id": 0,
  "forecast_id": 0,
  "supplier_id": "string",
  "version_issued_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="create-forecast-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [ForecastResponse](#schemaforecastresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Forecast

<a id="opIdget_forecast_api_forecast__forecast_id__get"></a>

> Code samples

`GET /api/forecast/{forecast_id}`

フォーキャスト詳細取得

<h3 id="get-forecast-parameters">Parameters</h3>

| Name        | In   | Type    | Required | Description |
| ----------- | ---- | ------- | -------- | ----------- |
| forecast_id | path | integer | true     | none        |

> Example responses

> 200 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "product_id": "string",
  "customer_id": "string",
  "granularity": "daily",
  "qty_forecast": 0,
  "version_no": 1,
  "source_system": "external",
  "is_active": true,
  "date_day": "2019-08-24",
  "date_dekad_start": "2019-08-24",
  "year_month": "string",
  "id": 0,
  "forecast_id": 0,
  "supplier_id": "string",
  "version_issued_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="get-forecast-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ForecastResponse](#schemaforecastresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Forecast

<a id="opIdupdate_forecast_api_forecast__forecast_id__put"></a>

> Code samples

`PUT /api/forecast/{forecast_id}`

フォーキャスト更新

> Body parameter

```json
{
  "qty_forecast": 0,
  "is_active": true
}
```

<h3 id="update-forecast-parameters">Parameters</h3>

| Name           | In   | Type                                    | Required | Description |
| -------------- | ---- | --------------------------------------- | -------- | ----------- |
| forecast_id    | path | integer                                 | true     | none        |
| body           | body | [ForecastUpdate](#schemaforecastupdate) | true     | none        |
| » qty_forecast | body | any                                     | false    | none        |
| »» _anonymous_ | body | integer                                 | false    | none        |
| »» _anonymous_ | body | null                                    | false    | none        |
| » is_active    | body | any                                     | false    | none        |
| »» _anonymous_ | body | boolean                                 | false    | none        |
| »» _anonymous_ | body | null                                    | false    | none        |

> Example responses

> 200 Response

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "product_id": "string",
  "customer_id": "string",
  "granularity": "daily",
  "qty_forecast": 0,
  "version_no": 1,
  "source_system": "external",
  "is_active": true,
  "date_day": "2019-08-24",
  "date_dekad_start": "2019-08-24",
  "year_month": "string",
  "id": 0,
  "forecast_id": 0,
  "supplier_id": "string",
  "version_issued_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="update-forecast-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ForecastResponse](#schemaforecastresponse)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Forecast

<a id="opIddelete_forecast_api_forecast__forecast_id__delete"></a>

> Code samples

`DELETE /api/forecast/{forecast_id}`

フォーキャスト削除

<h3 id="delete-forecast-parameters">Parameters</h3>

| Name        | In   | Type    | Required | Description |
| ----------- | ---- | ------- | -------- | ----------- |
| forecast_id | path | integer | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-forecast-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Bulk Import Forecasts

<a id="opIdbulk_import_forecasts_api_forecast_bulk_post"></a>

> Code samples

`POST /api/forecast/bulk`

フォーキャスト一括登録

> Body parameter

```json
{
  "version_no": 0,
  "version_issued_at": "2019-08-24T14:15:22Z",
  "source_system": "external",
  "deactivate_old_version": true,
  "forecasts": [
    {
      "product_id": "string",
      "customer_id": "string",
      "granularity": "daily",
      "qty_forecast": 0,
      "version_no": 1,
      "source_system": "external",
      "is_active": true,
      "date_day": "2019-08-24",
      "date_dekad_start": "2019-08-24",
      "year_month": "string",
      "version_issued_at": "2019-08-24T14:15:22Z"
    }
  ]
}
```

<h3 id="bulk-import-forecasts-parameters">Parameters</h3>

| Name                     | In   | Type                                                          | Required | Description                    |
| ------------------------ | ---- | ------------------------------------------------------------- | -------- | ------------------------------ |
| body                     | body | [ForecastBulkImportRequest](#schemaforecastbulkimportrequest) | true     | none                           |
| » version_no             | body | integer                                                       | true     | none                           |
| » version_issued_at      | body | string(date-time)                                             | true     | none                           |
| » source_system          | body | string                                                        | false    | none                           |
| » deactivate_old_version | body | boolean                                                       | false    | none                           |
| » forecasts              | body | [[ForecastCreate](#schemaforecastcreate)]                     | true     | [フォーキャスト作成リクエスト] |
| »» ForecastCreate        | body | [ForecastCreate](#schemaforecastcreate)                       | false    | フォーキャスト作成リクエスト   |
| »»» product_id           | body | string                                                        | true     | none                           |
| »»» customer_id          | body | string                                                        | true     | none                           |
| »»» granularity          | body | string                                                        | true     | none                           |
| »»» qty_forecast         | body | integer                                                       | true     | none                           |
| »»» version_no           | body | integer                                                       | false    | none                           |
| »»» source_system        | body | string                                                        | false    | none                           |
| »»» is_active            | body | boolean                                                       | false    | none                           |
| »»» date_day             | body | any                                                           | false    | none                           |
| »»»» _anonymous_         | body | string(date)                                                  | false    | none                           |
| »»»» _anonymous_         | body | null                                                          | false    | none                           |
| »»» date_dekad_start     | body | any                                                           | false    | none                           |
| »»»» _anonymous_         | body | string(date)                                                  | false    | none                           |
| »»»» _anonymous_         | body | null                                                          | false    | none                           |
| »»» year_month           | body | any                                                           | false    | none                           |
| »»»» _anonymous_         | body | string                                                        | false    | none                           |
| »»»» _anonymous_         | body | null                                                          | false    | none                           |
| »»» version_issued_at    | body | string(date-time)                                             | true     | none                           |

#### Enumerated Values

| Parameter       | Value   |
| --------------- | ------- |
| »»» granularity | daily   |
| »»» granularity | dekad   |
| »»» granularity | monthly |

> Example responses

> 201 Response

```json
{
  "success": true,
  "message": "string",
  "version_no": 0,
  "imported_count": 0,
  "skipped_count": 0,
  "error_count": 0,
  "error_details": "string"
}
```

<h3 id="bulk-import-forecasts-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                          |
| ------ | ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [ForecastBulkImportResponse](#schemaforecastbulkimportresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)               |

<aside class="success">
This operation does not require authentication
</aside>

## List Versions

<a id="opIdlist_versions_api_forecast_versions_get"></a>

> Code samples

`GET /api/forecast/versions`

フォーキャストバージョン一覧取得

> Example responses

> 200 Response

```json
{
  "versions": [
    {
      "version_no": 0,
      "version_issued_at": "2019-08-24T14:15:22Z",
      "is_active": true,
      "forecast_count": 0,
      "source_system": "string"
    }
  ]
}
```

<h3 id="list-versions-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema                                                            |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | [ForecastVersionListResponse](#schemaforecastversionlistresponse) |

<aside class="success">
This operation does not require authentication
</aside>

## Activate Version

<a id="opIdactivate_version_api_forecast_activate_post"></a>

> Code samples

`POST /api/forecast/activate`

指定バージョンをアクティブ化

> Body parameter

```json
{
  "version_no": 0,
  "deactivate_others": true
}
```

<h3 id="activate-version-parameters">Parameters</h3>

| Name                | In   | Type                                                      | Required | Description |
| ------------------- | ---- | --------------------------------------------------------- | -------- | ----------- |
| body                | body | [ForecastActivateRequest](#schemaforecastactivaterequest) | true     | none        |
| » version_no        | body | integer                                                   | true     | none        |
| » deactivate_others | body | boolean                                                   | false    | none        |

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "activated_version": 0,
  "deactivated_versions": []
}
```

<h3 id="activate-version-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                      |
| ------ | ------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ForecastActivateResponse](#schemaforecastactivateresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)           |

<aside class="success">
This operation does not require authentication
</aside>

## Match Forecasts

<a id="opIdmatch_forecasts_api_forecast_match_post"></a>

> Code samples

`POST /api/forecast/match`

フォーキャストと受注明細の手動マッチング

> Body parameter

```json
{
  "order_id": 0,
  "order_ids": [0],
  "date_from": "2019-08-24",
  "date_to": "2019-08-24",
  "force_rematch": false
}
```

<h3 id="match-forecasts-parameters">Parameters</h3>

| Name            | In   | Type                                                | Required | Description |
| --------------- | ---- | --------------------------------------------------- | -------- | ----------- |
| body            | body | [ForecastMatchRequest](#schemaforecastmatchrequest) | true     | none        |
| » order_id      | body | any                                                 | false    | none        |
| »» _anonymous_  | body | integer                                             | false    | none        |
| »» _anonymous_  | body | null                                                | false    | none        |
| » order_ids     | body | any                                                 | false    | none        |
| »» _anonymous_  | body | [integer]                                           | false    | none        |
| »» _anonymous_  | body | null                                                | false    | none        |
| » date_from     | body | any                                                 | false    | none        |
| »» _anonymous_  | body | string(date)                                        | false    | none        |
| »» _anonymous_  | body | null                                                | false    | none        |
| » date_to       | body | any                                                 | false    | none        |
| »» _anonymous_  | body | string(date)                                        | false    | none        |
| »» _anonymous_  | body | null                                                | false    | none        |
| » force_rematch | body | boolean                                             | false    | none        |

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "total_lines": 0,
  "matched_lines": 0,
  "unmatched_lines": 0,
  "results": []
}
```

<h3 id="match-forecasts-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                                |
| ------ | ------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ForecastMatchResponse](#schemaforecastmatchresponse) |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror)     |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-products">products</h1>

## List Products

<a id="opIdlist_products_api_products_get"></a>

> Code samples

`GET /api/products`

List products with pagination and optional fuzzy search.

<h3 id="list-products-parameters">Parameters</h3>

| Name     | In    | Type    | Required | Description |
| -------- | ----- | ------- | -------- | ----------- |
| page     | query | integer | false    | none        |
| per_page | query | integer | false    | none        |
| q        | query | any     | false    | none        |

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 0,
      "product_code": "string",
      "product_name": "string",
      "internal_unit": "string",
      "customer_part_no": "string",
      "maker_item_code": "string",
      "is_active": true,
      "created_at": "2019-08-24T14:15:22Z",
      "updated_at": "2019-08-24T14:15:22Z"
    }
  ],
  "total": 0,
  "page": 0,
  "per_page": 0
}
```

<h3 id="list-products-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [Page*ProductOut*](#schemapage_productout_)       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Create Product

<a id="opIdcreate_product_api_products_post"></a>

> Code samples

`POST /api/products`

Create a new product.

> Body parameter

```json
{
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true
}
```

<h3 id="create-product-parameters">Parameters</h3>

| Name               | In   | Type                                                                                    | Required | Description |
| ------------------ | ---- | --------------------------------------------------------------------------------------- | -------- | ----------- |
| body               | body | [app**schemas**products\_\_ProductCreate](#schemaapp__schemas__products__productcreate) | true     | none        |
| » product_code     | body | string                                                                                  | true     | none        |
| » product_name     | body | string                                                                                  | true     | none        |
| » internal_unit    | body | string                                                                                  | true     | none        |
| » customer_part_no | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » maker_item_code  | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » is_active        | body | boolean                                                                                 | false    | none        |

> Example responses

> 201 Response

```json
{
  "id": 0,
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true,
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="create-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)             | Successful Response | [ProductOut](#schemaproductout)                   |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Get Product

<a id="opIdget_product_api_products__product_id__get"></a>

> Code samples

`GET /api/products/{product_id}`

Retrieve a single product.

<h3 id="get-product-parameters">Parameters</h3>

| Name       | In   | Type    | Required | Description |
| ---------- | ---- | ------- | -------- | ----------- |
| product_id | path | integer | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true,
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="get-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ProductOut](#schemaproductout)                   |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Update Product

<a id="opIdupdate_product_api_products__product_id__patch"></a>

> Code samples

`PATCH /api/products/{product_id}`

Partially update a product.

> Body parameter

```json
{
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true
}
```

<h3 id="update-product-parameters">Parameters</h3>

| Name               | In   | Type                                                                                    | Required | Description |
| ------------------ | ---- | --------------------------------------------------------------------------------------- | -------- | ----------- |
| product_id         | path | integer                                                                                 | true     | none        |
| body               | body | [app**schemas**products\_\_ProductUpdate](#schemaapp__schemas__products__productupdate) | true     | none        |
| » product_code     | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » product_name     | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » internal_unit    | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » customer_part_no | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » maker_item_code  | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | string                                                                                  | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |
| » is_active        | body | any                                                                                     | false    | none        |
| »» _anonymous_     | body | boolean                                                                                 | false    | none        |
| »» _anonymous_     | body | null                                                                                    | false    | none        |

> Example responses

> 200 Response

```json
{
  "id": 0,
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true,
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z"
}
```

<h3 id="update-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Successful Response | [ProductOut](#schemaproductout)                   |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

## Delete Product

<a id="opIddelete_product_api_products__product_id__delete"></a>

> Code samples

`DELETE /api/products/{product_id}`

Delete a product.

<h3 id="delete-product-parameters">Parameters</h3>

| Name       | In   | Type    | Required | Description |
| ---------- | ---- | ------- | -------- | ----------- |
| product_id | path | integer | true     | none        |

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="delete-product-responses">Responses</h3>

| Status | Meaning                                                                  | Description         | Schema                                            |
| ------ | ------------------------------------------------------------------------ | ------------------- | ------------------------------------------------- |
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)          | Successful Response | None                                              |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3) | Validation Error    | [HTTPValidationError](#schemahttpvalidationerror) |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-warehouse-alloc">warehouse-alloc</h1>

## List Warehouses

<a id="opIdlist_warehouses_api_warehouse_alloc_warehouses_get"></a>

> Code samples

`GET /api/warehouse-alloc/warehouses`

配分対象の倉庫一覧（新しいwarehouseテーブル）を取得

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "warehouse_code": "string",
      "warehouse_name": "string"
    }
  ]
}
```

<h3 id="list-warehouses-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema                                                |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | [WarehouseListResponse](#schemawarehouselistresponse) |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="lot-management-api-health">health</h1>

## Healthz

<a id="opIdhealthz_api_healthz_get"></a>

> Code samples

`GET /api/healthz`

> Example responses

> 200 Response

```json
null
```

<h3 id="healthz-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | Inline |

<h3 id="healthz-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## Readyz

<a id="opIdreadyz_api_readyz_get"></a>

> Code samples

`GET /api/readyz`

> Example responses

> 200 Response

```json
null
```

<h3 id="readyz-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | Inline |

<h3 id="readyz-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## Health

<a id="opIdhealth_api_health_get"></a>

> Code samples

`GET /api/health`

> Example responses

> 200 Response

```json
null
```

<h3 id="health-responses">Responses</h3>

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful Response | Inline |

<h3 id="health-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AdminPresetListResponse">AdminPresetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminpresetlistresponse"></a>
<a id="schema_AdminPresetListResponse"></a>
<a id="tocSadminpresetlistresponse"></a>
<a id="tocsadminpresetlistresponse"></a>

```json
{
  "presets": ["string"]
}
```

AdminPresetListResponse

### Properties

| Name    | Type     | Required | Restrictions | Description |
| ------- | -------- | -------- | ------------ | ----------- |
| presets | [string] | true     | none         | none        |

<h2 id="tocS_AdminPresetLoadResponse">AdminPresetLoadResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadminpresetloadresponse"></a>
<a id="schema_AdminPresetLoadResponse"></a>
<a id="tocSadminpresetloadresponse"></a>
<a id="tocsadminpresetloadresponse"></a>

```json
{
  "preset": "string",
  "result": {
    "created": {
      "property1": ["string"],
      "property2": ["string"]
    },
    "warnings": ["string"]
  }
}
```

AdminPresetLoadResponse

### Properties

| Name   | Type                                                    | Required | Restrictions | Description               |
| ------ | ------------------------------------------------------- | -------- | ------------ | ------------------------- |
| preset | string                                                  | true     | none         | none                      |
| result | [MasterBulkLoadResponse](#schemamasterbulkloadresponse) | true     | none         | Bulk load result summary. |

<h2 id="tocS_CustomerCreate">CustomerCreate</h2>
<!-- backwards compatibility -->
<a id="schemacustomercreate"></a>
<a id="schema_CustomerCreate"></a>
<a id="tocScustomercreate"></a>
<a id="tocscustomercreate"></a>

```json
{
  "customer_code": "string",
  "customer_name": "string",
  "address": "string"
}
```

CustomerCreate

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| customer_code | string | true     | none         | none        |
| customer_name | string | true     | none         | none        |
| address       | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_CustomerResponse">CustomerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerresponse"></a>
<a id="schema_CustomerResponse"></a>
<a id="tocScustomerresponse"></a>
<a id="tocscustomerresponse"></a>

```json
{
  "customer_code": "string",
  "customer_name": "string",
  "address": "string"
}
```

CustomerResponse

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| customer_code | string | true     | none         | none        |
| customer_name | string | true     | none         | none        |
| address       | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_CustomerUpdate">CustomerUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacustomerupdate"></a>
<a id="schema_CustomerUpdate"></a>
<a id="tocScustomerupdate"></a>
<a id="tocscustomerupdate"></a>

```json
{
  "customer_name": "string",
  "address": "string"
}
```

CustomerUpdate

### Properties

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| customer_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name    | Type | Required | Restrictions | Description |
| ------- | ---- | -------- | ------------ | ----------- |
| address | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_DashboardStatsResponse">DashboardStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadashboardstatsresponse"></a>
<a id="schema_DashboardStatsResponse"></a>
<a id="tocSdashboardstatsresponse"></a>
<a id="tocsdashboardstatsresponse"></a>

```json
{
  "total_stock": 0,
  "total_orders": 0,
  "unallocated_orders": 0
}
```

DashboardStatsResponse

### Properties

| Name               | Type    | Required | Restrictions | Description |
| ------------------ | ------- | -------- | ------------ | ----------- |
| total_stock        | number  | true     | none         | none        |
| total_orders       | integer | true     | none         | none        |
| unallocated_orders | integer | true     | none         | none        |

<h2 id="tocS_DragAssignRequest">DragAssignRequest</h2>
<!-- backwards compatibility -->
<a id="schemadragassignrequest"></a>
<a id="schema_DragAssignRequest"></a>
<a id="tocSdragassignrequest"></a>
<a id="tocsdragassignrequest"></a>

```json
{
  "order_line_id": 0,
  "lot_id": 0,
  "allocate_qty": 0
}
```

DragAssignRequest

### Properties

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| order_line_id | integer | true     | none         | none        |
| lot_id        | integer | true     | none         | none        |
| allocate_qty  | number  | true     | none         | none        |

<h2 id="tocS_FefoCommitResponse">FefoCommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemafefocommitresponse"></a>
<a id="schema_FefoCommitResponse"></a>
<a id="tocSfefocommitresponse"></a>
<a id="tocsfefocommitresponse"></a>

```json
{
  "order_id": 0,
  "created_allocation_ids": [0],
  "preview": {
    "order_id": 0,
    "lines": [
      {
        "order_line_id": 0,
        "product_code": "string",
        "required_qty": 0,
        "already_allocated_qty": 0,
        "allocations": [
          {
            "lot_id": 0,
            "lot_number": "string",
            "allocate_qty": 0,
            "expiry_date": "2019-08-24",
            "receipt_date": "2019-08-24"
          }
        ],
        "next_div": "string",
        "warnings": ["string"]
      }
    ],
    "warnings": ["string"]
  }
}
```

FefoCommitResponse

### Properties

| Name                   | Type                                              | Required | Restrictions | Description |
| ---------------------- | ------------------------------------------------- | -------- | ------------ | ----------- |
| order_id               | integer                                           | true     | none         | none        |
| created_allocation_ids | [integer]                                         | false    | none         | none        |
| preview                | [FefoPreviewResponse](#schemafefopreviewresponse) | true     | none         | none        |

<h2 id="tocS_FefoLineAllocation">FefoLineAllocation</h2>
<!-- backwards compatibility -->
<a id="schemafefolineallocation"></a>
<a id="schema_FefoLineAllocation"></a>
<a id="tocSfefolineallocation"></a>
<a id="tocsfefolineallocation"></a>

```json
{
  "order_line_id": 0,
  "product_code": "string",
  "required_qty": 0,
  "already_allocated_qty": 0,
  "allocations": [
    {
      "lot_id": 0,
      "lot_number": "string",
      "allocate_qty": 0,
      "expiry_date": "2019-08-24",
      "receipt_date": "2019-08-24"
    }
  ],
  "next_div": "string",
  "warnings": ["string"]
}
```

FefoLineAllocation

### Properties

| Name                  | Type                                            | Required | Restrictions | Description |
| --------------------- | ----------------------------------------------- | -------- | ------------ | ----------- |
| order_line_id         | integer                                         | true     | none         | none        |
| product_code          | string                                          | true     | none         | none        |
| required_qty          | number                                          | true     | none         | none        |
| already_allocated_qty | number                                          | true     | none         | none        |
| allocations           | [[FefoLotAllocation](#schemafefolotallocation)] | false    | none         | none        |
| next_div              | any                                             | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type     | Required | Restrictions | Description |
| -------- | -------- | -------- | ------------ | ----------- |
| warnings | [string] | false    | none         | none        |

<h2 id="tocS_FefoLotAllocation">FefoLotAllocation</h2>
<!-- backwards compatibility -->
<a id="schemafefolotallocation"></a>
<a id="schema_FefoLotAllocation"></a>
<a id="tocSfefolotallocation"></a>
<a id="tocsfefolotallocation"></a>

```json
{
  "lot_id": 0,
  "lot_number": "string",
  "allocate_qty": 0,
  "expiry_date": "2019-08-24",
  "receipt_date": "2019-08-24"
}
```

FefoLotAllocation

### Properties

| Name         | Type    | Required | Restrictions | Description |
| ------------ | ------- | -------- | ------------ | ----------- |
| lot_id       | integer | true     | none         | none        |
| lot_number   | string  | true     | none         | none        |
| allocate_qty | number  | true     | none         | none        |
| expiry_date  | any     | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| receipt_date | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_FefoPreviewRequest">FefoPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemafefopreviewrequest"></a>
<a id="schema_FefoPreviewRequest"></a>
<a id="tocSfefopreviewrequest"></a>
<a id="tocsfefopreviewrequest"></a>

```json
{
  "order_id": 0
}
```

FefoPreviewRequest

### Properties

| Name     | Type    | Required | Restrictions | Description |
| -------- | ------- | -------- | ------------ | ----------- |
| order_id | integer | true     | none         | none        |

<h2 id="tocS_FefoPreviewResponse">FefoPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemafefopreviewresponse"></a>
<a id="schema_FefoPreviewResponse"></a>
<a id="tocSfefopreviewresponse"></a>
<a id="tocsfefopreviewresponse"></a>

```json
{
  "order_id": 0,
  "lines": [
    {
      "order_line_id": 0,
      "product_code": "string",
      "required_qty": 0,
      "already_allocated_qty": 0,
      "allocations": [
        {
          "lot_id": 0,
          "lot_number": "string",
          "allocate_qty": 0,
          "expiry_date": "2019-08-24",
          "receipt_date": "2019-08-24"
        }
      ],
      "next_div": "string",
      "warnings": ["string"]
    }
  ],
  "warnings": ["string"]
}
```

FefoPreviewResponse

### Properties

| Name     | Type                                              | Required | Restrictions | Description |
| -------- | ------------------------------------------------- | -------- | ------------ | ----------- |
| order_id | integer                                           | true     | none         | none        |
| lines    | [[FefoLineAllocation](#schemafefolineallocation)] | false    | none         | none        |
| warnings | [string]                                          | false    | none         | none        |

<h2 id="tocS_ForecastActivateRequest">ForecastActivateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforecastactivaterequest"></a>
<a id="schema_ForecastActivateRequest"></a>
<a id="tocSforecastactivaterequest"></a>
<a id="tocsforecastactivaterequest"></a>

```json
{
  "version_no": 0,
  "deactivate_others": true
}
```

ForecastActivateRequest

### Properties

| Name              | Type    | Required | Restrictions | Description |
| ----------------- | ------- | -------- | ------------ | ----------- |
| version_no        | integer | true     | none         | none        |
| deactivate_others | boolean | false    | none         | none        |

<h2 id="tocS_ForecastActivateResponse">ForecastActivateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastactivateresponse"></a>
<a id="schema_ForecastActivateResponse"></a>
<a id="tocSforecastactivateresponse"></a>
<a id="tocsforecastactivateresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "activated_version": 0,
  "deactivated_versions": []
}
```

ForecastActivateResponse

### Properties

| Name                 | Type      | Required | Restrictions | Description |
| -------------------- | --------- | -------- | ------------ | ----------- |
| success              | boolean   | true     | none         | none        |
| message              | string    | true     | none         | none        |
| activated_version    | integer   | true     | none         | none        |
| deactivated_versions | [integer] | false    | none         | none        |

<h2 id="tocS_ForecastBulkImportRequest">ForecastBulkImportRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforecastbulkimportrequest"></a>
<a id="schema_ForecastBulkImportRequest"></a>
<a id="tocSforecastbulkimportrequest"></a>
<a id="tocsforecastbulkimportrequest"></a>

```json
{
  "version_no": 0,
  "version_issued_at": "2019-08-24T14:15:22Z",
  "source_system": "external",
  "deactivate_old_version": true,
  "forecasts": [
    {
      "product_id": "string",
      "customer_id": "string",
      "granularity": "daily",
      "qty_forecast": 0,
      "version_no": 1,
      "source_system": "external",
      "is_active": true,
      "date_day": "2019-08-24",
      "date_dekad_start": "2019-08-24",
      "year_month": "string",
      "version_issued_at": "2019-08-24T14:15:22Z"
    }
  ]
}
```

ForecastBulkImportRequest

### Properties

| Name                   | Type                                      | Required | Restrictions | Description                    |
| ---------------------- | ----------------------------------------- | -------- | ------------ | ------------------------------ |
| version_no             | integer                                   | true     | none         | none                           |
| version_issued_at      | string(date-time)                         | true     | none         | none                           |
| source_system          | string                                    | false    | none         | none                           |
| deactivate_old_version | boolean                                   | false    | none         | none                           |
| forecasts              | [[ForecastCreate](#schemaforecastcreate)] | true     | none         | [フォーキャスト作成リクエスト] |

<h2 id="tocS_ForecastBulkImportResponse">ForecastBulkImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastbulkimportresponse"></a>
<a id="schema_ForecastBulkImportResponse"></a>
<a id="tocSforecastbulkimportresponse"></a>
<a id="tocsforecastbulkimportresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "version_no": 0,
  "imported_count": 0,
  "skipped_count": 0,
  "error_count": 0,
  "error_details": "string"
}
```

ForecastBulkImportResponse

### Properties

| Name           | Type    | Required | Restrictions | Description |
| -------------- | ------- | -------- | ------------ | ----------- |
| success        | boolean | true     | none         | none        |
| message        | string  | true     | none         | none        |
| version_no     | integer | true     | none         | none        |
| imported_count | integer | true     | none         | none        |
| skipped_count  | integer | true     | none         | none        |
| error_count    | integer | true     | none         | none        |
| error_details  | any     | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_ForecastCreate">ForecastCreate</h2>
<!-- backwards compatibility -->
<a id="schemaforecastcreate"></a>
<a id="schema_ForecastCreate"></a>
<a id="tocSforecastcreate"></a>
<a id="tocsforecastcreate"></a>

```json
{
  "product_id": "string",
  "customer_id": "string",
  "granularity": "daily",
  "qty_forecast": 0,
  "version_no": 1,
  "source_system": "external",
  "is_active": true,
  "date_day": "2019-08-24",
  "date_dekad_start": "2019-08-24",
  "year_month": "string",
  "version_issued_at": "2019-08-24T14:15:22Z"
}
```

ForecastCreate

### Properties

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| product_id    | string  | true     | none         | none        |
| customer_id   | string  | true     | none         | none        |
| granularity   | string  | true     | none         | none        |
| qty_forecast  | integer | true     | none         | none        |
| version_no    | integer | false    | none         | none        |
| source_system | string  | false    | none         | none        |
| is_active     | boolean | false    | none         | none        |
| date_day      | any     | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| date_dekad_start | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| year_month | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type              | Required | Restrictions | Description |
| ----------------- | ----------------- | -------- | ------------ | ----------- |
| version_issued_at | string(date-time) | true     | none         | none        |

#### Enumerated Values

| Property    | Value   |
| ----------- | ------- |
| granularity | daily   |
| granularity | dekad   |
| granularity | monthly |

<h2 id="tocS_ForecastItemOut">ForecastItemOut</h2>
<!-- backwards compatibility -->
<a id="schemaforecastitemout"></a>
<a id="schema_ForecastItemOut"></a>
<a id="tocSforecastitemout"></a>
<a id="tocsforecastitemout"></a>

```json
{
  "id": 0,
  "product_code": "string",
  "product_name": "string",
  "customer_code": "string",
  "supplier_code": "string",
  "granularity": "string",
  "version_no": 0,
  "updated_at": "2019-08-24T14:15:22Z",
  "daily_data": {
    "property1": 0,
    "property2": 0
  },
  "dekad_data": {
    "property1": 0,
    "property2": 0
  },
  "monthly_data": {
    "property1": 0,
    "property2": 0
  },
  "dekad_summary": {
    "property1": 0,
    "property2": 0
  },
  "customer_name": "得意先A (ダミー)",
  "supplier_name": "サプライヤーB (ダミー)",
  "unit": "EA",
  "version_history": []
}
```

ForecastItemOut

### Properties

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| id            | integer | true     | none         | none        |
| product_code  | string  | true     | none         | none        |
| product_name  | string  | true     | none         | none        |
| customer_code | string  | true     | none         | none        |
| supplier_code | any     | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type              | Required | Restrictions | Description |
| ----------- | ----------------- | -------- | ------------ | ----------- |
| granularity | string            | true     | none         | none        |
| version_no  | integer           | true     | none         | none        |
| updated_at  | string(date-time) | true     | none         | none        |
| daily_data  | any               | false    | none         | none        |

anyOf

| Name                        | Type   | Required | Restrictions | Description |
| --------------------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_               | object | false    | none         | none        |
| »» **additionalProperties** | number | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| dekad_data | any  | false    | none         | none        |

anyOf

| Name                        | Type   | Required | Restrictions | Description |
| --------------------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_               | object | false    | none         | none        |
| »» **additionalProperties** | number | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| monthly_data | any  | false    | none         | none        |

anyOf

| Name                        | Type   | Required | Restrictions | Description |
| --------------------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_               | object | false    | none         | none        |
| »» **additionalProperties** | number | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| dekad_summary | any  | false    | none         | none        |

anyOf

| Name                        | Type   | Required | Restrictions | Description |
| --------------------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_               | object | false    | none         | none        |
| »» **additionalProperties** | number | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| customer_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| supplier_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type     | Required | Restrictions | Description |
| --------------- | -------- | -------- | ------------ | ----------- |
| unit            | string   | false    | none         | none        |
| version_history | [object] | false    | none         | none        |

<h2 id="tocS_ForecastListResponse">ForecastListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastlistresponse"></a>
<a id="schema_ForecastListResponse"></a>
<a id="tocSforecastlistresponse"></a>
<a id="tocsforecastlistresponse"></a>

```json
{
  "items": [
    {
      "id": 0,
      "product_code": "string",
      "product_name": "string",
      "customer_code": "string",
      "supplier_code": "string",
      "granularity": "string",
      "version_no": 0,
      "updated_at": "2019-08-24T14:15:22Z",
      "daily_data": {
        "property1": 0,
        "property2": 0
      },
      "dekad_data": {
        "property1": 0,
        "property2": 0
      },
      "monthly_data": {
        "property1": 0,
        "property2": 0
      },
      "dekad_summary": {
        "property1": 0,
        "property2": 0
      },
      "customer_name": "得意先A (ダミー)",
      "supplier_name": "サプライヤーB (ダミー)",
      "unit": "EA",
      "version_history": []
    }
  ]
}
```

ForecastListResponse

### Properties

| Name  | Type                                        | Required | Restrictions | Description                      |
| ----- | ------------------------------------------- | -------- | ------------ | -------------------------------- |
| items | [[ForecastItemOut](#schemaforecastitemout)] | true     | none         | [Forecast一覧（フロント表示用）] |

<h2 id="tocS_ForecastMatchRequest">ForecastMatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforecastmatchrequest"></a>
<a id="schema_ForecastMatchRequest"></a>
<a id="tocSforecastmatchrequest"></a>
<a id="tocsforecastmatchrequest"></a>

```json
{
  "order_id": 0,
  "order_ids": [0],
  "date_from": "2019-08-24",
  "date_to": "2019-08-24",
  "force_rematch": false
}
```

ForecastMatchRequest

### Properties

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| order_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| order_ids | any  | false    | none         | none        |

anyOf

| Name          | Type      | Required | Restrictions | Description |
| ------------- | --------- | -------- | ------------ | ----------- |
| » _anonymous_ | [integer] | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| date_from | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name    | Type | Required | Restrictions | Description |
| ------- | ---- | -------- | ------------ | ----------- |
| date_to | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| force_rematch | boolean | false    | none         | none        |

<h2 id="tocS_ForecastMatchResponse">ForecastMatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastmatchresponse"></a>
<a id="schema_ForecastMatchResponse"></a>
<a id="tocSforecastmatchresponse"></a>
<a id="tocsforecastmatchresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "total_lines": 0,
  "matched_lines": 0,
  "unmatched_lines": 0,
  "results": []
}
```

ForecastMatchResponse

### Properties

| Name            | Type                                                | Required | Restrictions | Description          |
| --------------- | --------------------------------------------------- | -------- | ------------ | -------------------- |
| success         | boolean                                             | true     | none         | none                 |
| message         | string                                              | true     | none         | none                 |
| total_lines     | integer                                             | true     | none         | none                 |
| matched_lines   | integer                                             | true     | none         | none                 |
| unmatched_lines | integer                                             | true     | none         | none                 |
| results         | [[ForecastMatchResult](#schemaforecastmatchresult)] | false    | none         | [個別マッチング結果] |

<h2 id="tocS_ForecastMatchResult">ForecastMatchResult</h2>
<!-- backwards compatibility -->
<a id="schemaforecastmatchresult"></a>
<a id="schema_ForecastMatchResult"></a>
<a id="tocSforecastmatchresult"></a>
<a id="tocsforecastmatchresult"></a>

```json
{
  "order_line_id": 0,
  "order_no": "string",
  "line_no": 0,
  "product_code": "string",
  "matched": true,
  "forecast_id": 0,
  "forecast_granularity": "string",
  "forecast_match_status": "string",
  "forecast_qty": 0
}
```

ForecastMatchResult

### Properties

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| order_line_id | integer | true     | none         | none        |
| order_no      | string  | true     | none         | none        |
| line_no       | integer | true     | none         | none        |
| product_code  | string  | true     | none         | none        |
| matched       | boolean | true     | none         | none        |
| forecast_id   | any     | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                 | Type | Required | Restrictions | Description |
| -------------------- | ---- | -------- | ------------ | ----------- |
| forecast_granularity | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                  | Type | Required | Restrictions | Description |
| --------------------- | ---- | -------- | ------------ | ----------- |
| forecast_match_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| forecast_qty | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | number | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_ForecastResponse">ForecastResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastresponse"></a>
<a id="schema_ForecastResponse"></a>
<a id="tocSforecastresponse"></a>
<a id="tocsforecastresponse"></a>

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "product_id": "string",
  "customer_id": "string",
  "granularity": "daily",
  "qty_forecast": 0,
  "version_no": 1,
  "source_system": "external",
  "is_active": true,
  "date_day": "2019-08-24",
  "date_dekad_start": "2019-08-24",
  "year_month": "string",
  "id": 0,
  "forecast_id": 0,
  "supplier_id": "string",
  "version_issued_at": "2019-08-24T14:15:22Z"
}
```

ForecastResponse

### Properties

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| created_at | string(date-time) | true     | none         | none        |
| updated_at | any               | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| product_id    | string  | true     | none         | none        |
| customer_id   | string  | true     | none         | none        |
| granularity   | string  | true     | none         | none        |
| qty_forecast  | integer | true     | none         | none        |
| version_no    | integer | false    | none         | none        |
| source_system | string  | false    | none         | none        |
| is_active     | boolean | false    | none         | none        |
| date_day      | any     | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| date_dekad_start | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| year_month | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type    | Required | Restrictions | Description |
| ----------- | ------- | -------- | ------------ | ----------- |
| id          | integer | true     | none         | none        |
| forecast_id | any     | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| supplier_id | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type              | Required | Restrictions | Description |
| ----------------- | ----------------- | -------- | ------------ | ----------- |
| version_issued_at | string(date-time) | true     | none         | none        |

#### Enumerated Values

| Property    | Value   |
| ----------- | ------- |
| granularity | daily   |
| granularity | dekad   |
| granularity | monthly |

<h2 id="tocS_ForecastUpdate">ForecastUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaforecastupdate"></a>
<a id="schema_ForecastUpdate"></a>
<a id="tocSforecastupdate"></a>
<a id="tocsforecastupdate"></a>

```json
{
  "qty_forecast": 0,
  "is_active": true
}
```

ForecastUpdate

### Properties

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| qty_forecast | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| is_active | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | boolean | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_ForecastVersionInfo">ForecastVersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaforecastversioninfo"></a>
<a id="schema_ForecastVersionInfo"></a>
<a id="tocSforecastversioninfo"></a>
<a id="tocsforecastversioninfo"></a>

```json
{
  "version_no": 0,
  "version_issued_at": "2019-08-24T14:15:22Z",
  "is_active": true,
  "forecast_count": 0,
  "source_system": "string"
}
```

ForecastVersionInfo

### Properties

| Name              | Type              | Required | Restrictions | Description |
| ----------------- | ----------------- | -------- | ------------ | ----------- |
| version_no        | integer           | true     | none         | none        |
| version_issued_at | string(date-time) | true     | none         | none        |
| is_active         | boolean           | true     | none         | none        |
| forecast_count    | integer           | true     | none         | none        |
| source_system     | string            | true     | none         | none        |

<h2 id="tocS_ForecastVersionListResponse">ForecastVersionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecastversionlistresponse"></a>
<a id="schema_ForecastVersionListResponse"></a>
<a id="tocSforecastversionlistresponse"></a>
<a id="tocsforecastversionlistresponse"></a>

```json
{
  "versions": [
    {
      "version_no": 0,
      "version_issued_at": "2019-08-24T14:15:22Z",
      "is_active": true,
      "forecast_count": 0,
      "source_system": "string"
    }
  ]
}
```

ForecastVersionListResponse

### Properties

| Name     | Type                                                | Required | Restrictions | Description      |
| -------- | --------------------------------------------------- | -------- | ------------ | ---------------- |
| versions | [[ForecastVersionInfo](#schemaforecastversioninfo)] | true     | none         | [バージョン情報] |

<h2 id="tocS_FullSampleDataRequest">FullSampleDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemafullsampledatarequest"></a>
<a id="schema_FullSampleDataRequest"></a>
<a id="tocSfullsampledatarequest"></a>
<a id="tocsfullsampledatarequest"></a>

```json
{
  "products": [
    {
      "product_code": "string",
      "product_name": "string",
      "supplier_code": "string",
      "customer_part_no": "string",
      "maker_item_code": "string",
      "supplier_item_code": "string",
      "packaging_qty": 0,
      "packaging_unit": "string",
      "internal_unit": "string",
      "base_unit": "EA",
      "packaging": "string",
      "assemble_div": "string",
      "next_div": "string",
      "ji_ku_text": "string",
      "kumitsuke_ku_text": "string",
      "shelf_life_days": 0,
      "requires_lot_number": true,
      "delivery_place_id": 0,
      "delivery_place_name": "string",
      "shipping_warehouse_name": "string"
    }
  ],
  "lots": [
    {
      "supplier_code": "string",
      "product_code": "string",
      "lot_number": "string",
      "receipt_date": "2019-08-24",
      "mfg_date": "2019-08-24",
      "expiry_date": "2019-08-24",
      "warehouse_code": "string",
      "warehouse_id": 0,
      "lot_unit": "string",
      "kanban_class": "string",
      "sales_unit": "string",
      "inventory_unit": "string",
      "received_by": "string",
      "source_doc": "string",
      "qc_certificate_status": "string",
      "qc_certificate_file": "string"
    }
  ],
  "orders": [
    {
      "order_no": "string",
      "customer_code": "string",
      "order_date": "string",
      "lines": [
        {
          "line_no": 0,
          "product_code": "string",
          "quantity": 0,
          "unit": "string",
          "due_date": "2019-08-24",
          "next_div": "string",
          "destination_id": 0,
          "external_unit": "string"
        }
      ]
    }
  ]
}
```

FullSampleDataRequest

### Properties

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| products | any  | false    | none         | none        |

anyOf

| Name          | Type                                                                                    | Required | Restrictions | Description |
| ------------- | --------------------------------------------------------------------------------------- | -------- | ------------ | ----------- |
| » _anonymous_ | [[app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate)] | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name | Type | Required | Restrictions | Description |
| ---- | ---- | -------- | ------------ | ----------- |
| lots | any  | false    | none         | none        |

anyOf

| Name          | Type                            | Required | Restrictions | Description |
| ------------- | ------------------------------- | -------- | ------------ | ----------- |
| » _anonymous_ | [[LotCreate](#schemalotcreate)] | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name   | Type | Required | Restrictions | Description |
| ------ | ---- | -------- | ------------ | ----------- |
| orders | any  | false    | none         | none        |

anyOf

| Name          | Type                                      | Required | Restrictions | Description       |
| ------------- | ----------------------------------------- | -------- | ------------ | ----------------- |
| » _anonymous_ | [[OcrOrderRecord](#schemaocrorderrecord)] | false    | none         | [OCR受注レコード] |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": ["string"],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

HTTPValidationError

### Properties

| Name   | Type                                        | Required | Restrictions | Description |
| ------ | ------------------------------------------- | -------- | ------------ | ----------- |
| detail | [[ValidationError](#schemavalidationerror)] | false    | none         | none        |

<h2 id="tocS_LotCreate">LotCreate</h2>
<!-- backwards compatibility -->
<a id="schemalotcreate"></a>
<a id="schema_LotCreate"></a>
<a id="tocSlotcreate"></a>
<a id="tocslotcreate"></a>

```json
{
  "supplier_code": "string",
  "product_code": "string",
  "lot_number": "string",
  "receipt_date": "2019-08-24",
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "kanban_class": "string",
  "sales_unit": "string",
  "inventory_unit": "string",
  "received_by": "string",
  "source_doc": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string"
}
```

LotCreate

### Properties

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| supplier_code | string       | true     | none         | none        |
| product_code  | string       | true     | none         | none        |
| lot_number    | string       | true     | none         | none        |
| receipt_date  | string(date) | true     | none         | none        |
| mfg_date      | any          | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| expiry_date | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| warehouse_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| warehouse_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| lot_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| kanban_class | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| sales_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| inventory_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| received_by | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| source_doc | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                  | Type | Required | Restrictions | Description |
| --------------------- | ---- | -------- | ------------ | ----------- |
| qc_certificate_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| qc_certificate_file | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_LotResponse">LotResponse</h2>
<!-- backwards compatibility -->
<a id="schemalotresponse"></a>
<a id="schema_LotResponse"></a>
<a id="tocSlotresponse"></a>
<a id="tocslotresponse"></a>

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "supplier_code": "string",
  "product_code": "string",
  "lot_number": "string",
  "receipt_date": "2019-08-24",
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "kanban_class": "string",
  "sales_unit": "string",
  "inventory_unit": "string",
  "received_by": "string",
  "source_doc": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string",
  "id": 0,
  "current_quantity": 0,
  "last_updated": "2019-08-24T14:15:22Z",
  "product_name": "string"
}
```

LotResponse

### Properties

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| created_at | string(date-time) | true     | none         | none        |
| updated_at | any               | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| supplier_code | string       | true     | none         | none        |
| product_code  | string       | true     | none         | none        |
| lot_number    | string       | true     | none         | none        |
| receipt_date  | string(date) | true     | none         | none        |
| mfg_date      | any          | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| expiry_date | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| warehouse_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| warehouse_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| lot_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| kanban_class | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| sales_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| inventory_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| received_by | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| source_doc | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                  | Type | Required | Restrictions | Description |
| --------------------- | ---- | -------- | ------------ | ----------- |
| qc_certificate_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| qc_certificate_file | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type    | Required | Restrictions | Description |
| ---------------- | ------- | -------- | ------------ | ----------- |
| id               | integer | true     | none         | none        |
| current_quantity | number  | false    | none         | none        |
| last_updated     | any     | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| product_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_LotUpdate">LotUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalotupdate"></a>
<a id="schema_LotUpdate"></a>
<a id="tocSlotupdate"></a>
<a id="tocslotupdate"></a>

```json
{
  "mfg_date": "2019-08-24",
  "expiry_date": "2019-08-24",
  "warehouse_code": "string",
  "warehouse_id": 0,
  "lot_unit": "string",
  "qc_certificate_status": "string",
  "qc_certificate_file": "string"
}
```

LotUpdate

### Properties

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| mfg_date | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| expiry_date | any  | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| warehouse_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| warehouse_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| lot_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                  | Type | Required | Restrictions | Description |
| --------------------- | ---- | -------- | ------------ | ----------- |
| qc_certificate_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| qc_certificate_file | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_MasterBulkLoadRequest">MasterBulkLoadRequest</h2>
<!-- backwards compatibility -->
<a id="schemamasterbulkloadrequest"></a>
<a id="schema_MasterBulkLoadRequest"></a>
<a id="tocSmasterbulkloadrequest"></a>
<a id="tocsmasterbulkloadrequest"></a>

```json
{
  "warehouses": [
    {
      "warehouse_code": "string",
      "warehouse_name": "string",
      "address": "string",
      "is_active": 1
    }
  ],
  "suppliers": [
    {
      "supplier_code": "string",
      "supplier_name": "string",
      "address": "string"
    }
  ],
  "customers": [
    {
      "customer_code": "string",
      "customer_name": "string",
      "address": "string"
    }
  ],
  "products": [
    {
      "product_code": "string",
      "product_name": "string",
      "supplier_code": "string",
      "customer_part_no": "string",
      "maker_item_code": "string",
      "supplier_item_code": "string",
      "packaging_qty": 0,
      "packaging_unit": "string",
      "internal_unit": "string",
      "base_unit": "EA",
      "packaging": "string",
      "assemble_div": "string",
      "next_div": "string",
      "ji_ku_text": "string",
      "kumitsuke_ku_text": "string",
      "shelf_life_days": 0,
      "requires_lot_number": true,
      "delivery_place_id": 0,
      "delivery_place_name": "string",
      "shipping_warehouse_name": "string"
    }
  ]
}
```

MasterBulkLoadRequest

### Properties

| Name       | Type                                                                                    | Required | Restrictions | Description |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ------------ | ----------- |
| warehouses | [[WarehouseCreate](#schemawarehousecreate)]                                             | false    | none         | none        |
| suppliers  | [[SupplierCreate](#schemasuppliercreate)]                                               | false    | none         | none        |
| customers  | [[CustomerCreate](#schemacustomercreate)]                                               | false    | none         | none        |
| products   | [[app**schemas**masters\_\_ProductCreate](#schemaapp__schemas__masters__productcreate)] | false    | none         | none        |

<h2 id="tocS_MasterBulkLoadResponse">MasterBulkLoadResponse</h2>
<!-- backwards compatibility -->
<a id="schemamasterbulkloadresponse"></a>
<a id="schema_MasterBulkLoadResponse"></a>
<a id="tocSmasterbulkloadresponse"></a>
<a id="tocsmasterbulkloadresponse"></a>

```json
{
  "created": {
    "property1": ["string"],
    "property2": ["string"]
  },
  "warnings": ["string"]
}
```

MasterBulkLoadResponse

### Properties

| Name                       | Type     | Required | Restrictions | Description |
| -------------------------- | -------- | -------- | ------------ | ----------- |
| created                    | object   | false    | none         | none        |
| » **additionalProperties** | [string] | false    | none         | none        |
| warnings                   | [string] | false    | none         | none        |

<h2 id="tocS_OcrOrderRecord">OcrOrderRecord</h2>
<!-- backwards compatibility -->
<a id="schemaocrorderrecord"></a>
<a id="schema_OcrOrderRecord"></a>
<a id="tocSocrorderrecord"></a>
<a id="tocsocrorderrecord"></a>

```json
{
  "order_no": "string",
  "customer_code": "string",
  "order_date": "string",
  "lines": [
    {
      "line_no": 0,
      "product_code": "string",
      "quantity": 0,
      "unit": "string",
      "due_date": "2019-08-24",
      "next_div": "string",
      "destination_id": 0,
      "external_unit": "string"
    }
  ]
}
```

OcrOrderRecord

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| order_no      | string | true     | none         | none        |
| customer_code | string | true     | none         | none        |
| order_date    | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name  | Type                                        | Required | Restrictions | Description |
| ----- | ------------------------------------------- | -------- | ------------ | ----------- |
| lines | [[OrderLineCreate](#schemaorderlinecreate)] | true     | none         | none        |

<h2 id="tocS_OcrSubmissionRequest">OcrSubmissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaocrsubmissionrequest"></a>
<a id="schema_OcrSubmissionRequest"></a>
<a id="tocSocrsubmissionrequest"></a>
<a id="tocsocrsubmissionrequest"></a>

```json
{
  "source": "PAD",
  "schema_version": "1.0.0",
  "file_name": "string",
  "operator": "string",
  "records": [
    {
      "order_no": "string",
      "customer_code": "string",
      "order_date": "string",
      "lines": [
        {
          "line_no": 0,
          "product_code": "string",
          "quantity": 0,
          "unit": "string",
          "due_date": "2019-08-24",
          "next_div": "string",
          "destination_id": 0,
          "external_unit": "string"
        }
      ]
    }
  ]
}
```

OcrSubmissionRequest

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| source         | string | false    | none         | none        |
| schema_version | string | false    | none         | none        |
| file_name      | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| operator | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name    | Type                                      | Required | Restrictions | Description       |
| ------- | ----------------------------------------- | -------- | ------------ | ----------------- |
| records | [[OcrOrderRecord](#schemaocrorderrecord)] | true     | none         | [OCR受注レコード] |

<h2 id="tocS_OcrSubmissionResponse">OcrSubmissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaocrsubmissionresponse"></a>
<a id="schema_OcrSubmissionResponse"></a>
<a id="tocSocrsubmissionresponse"></a>
<a id="tocsocrsubmissionresponse"></a>

```json
{
  "status": "string",
  "submission_id": "string",
  "created_orders": 0,
  "created_lines": 0,
  "total_records": 0,
  "processed_records": 0,
  "failed_records": 0,
  "skipped_records": 0,
  "error_details": "string"
}
```

OcrSubmissionResponse

### Properties

| Name              | Type    | Required | Restrictions | Description |
| ----------------- | ------- | -------- | ------------ | ----------- |
| status            | string  | true     | none         | none        |
| submission_id     | string  | true     | none         | none        |
| created_orders    | integer | true     | none         | none        |
| created_lines     | integer | true     | none         | none        |
| total_records     | integer | true     | none         | none        |
| processed_records | integer | true     | none         | none        |
| failed_records    | integer | true     | none         | none        |
| skipped_records   | integer | true     | none         | none        |
| error_details     | any     | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_OrderCreate">OrderCreate</h2>
<!-- backwards compatibility -->
<a id="schemaordercreate"></a>
<a id="schema_OrderCreate"></a>
<a id="tocSordercreate"></a>
<a id="tocsordercreate"></a>

```json
{
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "lines": [
    {
      "line_no": 0,
      "product_code": "string",
      "quantity": 0,
      "unit": "string",
      "due_date": "2019-08-24",
      "next_div": "string",
      "destination_id": 0,
      "external_unit": "string"
    }
  ]
}
```

OrderCreate

### Properties

| Name              | Type         | Required | Restrictions | Description |
| ----------------- | ------------ | -------- | ------------ | ----------- |
| order_no          | string       | true     | none         | none        |
| customer_code     | string       | true     | none         | none        |
| order_date        | string(date) | true     | none         | none        |
| status            | string       | false    | none         | none        |
| customer_order_no | any          | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                    | Type | Required | Restrictions | Description |
| ----------------------- | ---- | -------- | ------------ | ----------- |
| customer_order_no_last6 | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| delivery_mode | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| sap_order_id | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| sap_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| sap_sent_at | any  | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| sap_error_msg | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name  | Type                                        | Required | Restrictions | Description |
| ----- | ------------------------------------------- | -------- | ------------ | ----------- |
| lines | [[OrderLineCreate](#schemaorderlinecreate)] | false    | none         | none        |

<h2 id="tocS_OrderLineCreate">OrderLineCreate</h2>
<!-- backwards compatibility -->
<a id="schemaorderlinecreate"></a>
<a id="schema_OrderLineCreate"></a>
<a id="tocSorderlinecreate"></a>
<a id="tocsorderlinecreate"></a>

```json
{
  "line_no": 0,
  "product_code": "string",
  "quantity": 0,
  "unit": "string",
  "due_date": "2019-08-24",
  "next_div": "string",
  "destination_id": 0,
  "external_unit": "string"
}
```

OrderLineCreate

### Properties

| Name         | Type    | Required | Restrictions | Description |
| ------------ | ------- | -------- | ------------ | ----------- |
| line_no      | integer | true     | none         | none        |
| product_code | string  | true     | none         | none        |
| quantity     | number  | true     | none         | none        |
| unit         | string  | true     | none         | none        |
| due_date     | any     | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| next_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| destination_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| external_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_OrderLineDemandSchema">OrderLineDemandSchema</h2>
<!-- backwards compatibility -->
<a id="schemaorderlinedemandschema"></a>
<a id="schema_OrderLineDemandSchema"></a>
<a id="tocSorderlinedemandschema"></a>
<a id="tocsorderlinedemandschema"></a>

```json
{
  "product_code": "string",
  "warehouse_code": "string",
  "quantity": 0
}
```

OrderLineDemandSchema

### Properties

| Name           | Type    | Required | Restrictions | Description |
| -------------- | ------- | -------- | ------------ | ----------- |
| product_code   | string  | true     | none         | none        |
| warehouse_code | string  | true     | none         | none        |
| quantity       | integer | true     | none         | none        |

<h2 id="tocS_OrderLineOut">OrderLineOut</h2>
<!-- backwards compatibility -->
<a id="schemaorderlineout"></a>
<a id="schema_OrderLineOut"></a>
<a id="tocSorderlineout"></a>
<a id="tocsorderlineout"></a>

```json
{
  "id": 0,
  "line_no": 0,
  "product_code": "string",
  "product_name": "string",
  "customer_code": "string",
  "supplier_code": "string",
  "quantity": 0,
  "unit": "string",
  "due_date": "2019-08-24",
  "warehouse_allocations": [
    {
      "warehouse_code": "string",
      "quantity": 0
    }
  ],
  "related_lots": [{}],
  "allocated_lots": [{}],
  "allocated_qty": 0,
  "next_div": "string"
}
```

OrderLineOut

### Properties

| Name    | Type    | Required | Restrictions | Description |
| ------- | ------- | -------- | ------------ | ----------- |
| id      | integer | true     | none         | none        |
| line_no | any     | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| product_code  | string | true     | none         | none        |
| product_name  | string | true     | none         | none        |
| customer_code | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| supplier_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type   | Required | Restrictions | Description |
| -------- | ------ | -------- | ------------ | ----------- |
| quantity | number | true     | none         | none        |
| unit     | string | true     | none         | none        |
| due_date | any    | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                  | Type                                            | Required | Restrictions | Description |
| --------------------- | ----------------------------------------------- | -------- | ------------ | ----------- |
| warehouse_allocations | [[WarehouseAllocOut](#schemawarehouseallocout)] | false    | none         | none        |
| related_lots          | [object]                                        | false    | none         | none        |
| allocated_lots        | [object]                                        | false    | none         | none        |
| allocated_qty         | any                                             | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | number | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| next_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_OrderResponse">OrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorderresponse"></a>
<a id="schema_OrderResponse"></a>
<a id="tocSorderresponse"></a>
<a id="tocsorderresponse"></a>

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "id": 0
}
```

OrderResponse

### Properties

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| created_at | string(date-time) | true     | none         | none        |
| updated_at | any               | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type         | Required | Restrictions | Description |
| ----------------- | ------------ | -------- | ------------ | ----------- |
| order_no          | string       | true     | none         | none        |
| customer_code     | string       | true     | none         | none        |
| order_date        | string(date) | true     | none         | none        |
| status            | string       | false    | none         | none        |
| customer_order_no | any          | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                    | Type | Required | Restrictions | Description |
| ----------------------- | ---- | -------- | ------------ | ----------- |
| customer_order_no_last6 | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| delivery_mode | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| sap_order_id | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| sap_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| sap_sent_at | any  | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| sap_error_msg | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name | Type    | Required | Restrictions | Description |
| ---- | ------- | -------- | ------------ | ----------- |
| id   | integer | true     | none         | none        |

<h2 id="tocS_OrderStatusUpdate">OrderStatusUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaorderstatusupdate"></a>
<a id="schema_OrderStatusUpdate"></a>
<a id="tocSorderstatusupdate"></a>
<a id="tocsorderstatusupdate"></a>

```json
{
  "status": "allocated"
}
```

OrderStatusUpdate

### Properties

| Name   | Type   | Required | Restrictions | Description                                                     |
| ------ | ------ | -------- | ------------ | --------------------------------------------------------------- |
| status | string | true     | none         | 新しいステータス（open, allocated, shipped, closed, cancelled） |

<h2 id="tocS_OrderValidationDetails">OrderValidationDetails</h2>
<!-- backwards compatibility -->
<a id="schemaordervalidationdetails"></a>
<a id="schema_OrderValidationDetails"></a>
<a id="tocSordervalidationdetails"></a>
<a id="tocsordervalidationdetails"></a>

```json
{
  "warehouse_code": "string",
  "per_lot": [
    {
      "lot_id": 0,
      "available": 0
    }
  ],
  "ship_date": "2019-08-24"
}
```

OrderValidationDetails

### Properties

| Name           | Type                                                                      | Required | Restrictions | Description |
| -------------- | ------------------------------------------------------------------------- | -------- | ------------ | ----------- |
| warehouse_code | string                                                                    | true     | none         | none        |
| per_lot        | [[OrderValidationLotAvailability](#schemaordervalidationlotavailability)] | false    | none         | none        |
| ship_date      | any                                                                       | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_OrderValidationErrorData">OrderValidationErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaordervalidationerrordata"></a>
<a id="schema_OrderValidationErrorData"></a>
<a id="tocSordervalidationerrordata"></a>
<a id="tocsordervalidationerrordata"></a>

```json
{
  "product_code": "string",
  "required": 0,
  "available": 0,
  "details": {
    "warehouse_code": "string",
    "per_lot": [
      {
        "lot_id": 0,
        "available": 0
      }
    ],
    "ship_date": "2019-08-24"
  }
}
```

OrderValidationErrorData

### Properties

| Name         | Type                                                    | Required | Restrictions | Description |
| ------------ | ------------------------------------------------------- | -------- | ------------ | ----------- |
| product_code | string                                                  | true     | none         | none        |
| required     | integer                                                 | true     | none         | none        |
| available    | integer                                                 | true     | none         | none        |
| details      | [OrderValidationDetails](#schemaordervalidationdetails) | true     | none         | none        |

<h2 id="tocS_OrderValidationLotAvailability">OrderValidationLotAvailability</h2>
<!-- backwards compatibility -->
<a id="schemaordervalidationlotavailability"></a>
<a id="schema_OrderValidationLotAvailability"></a>
<a id="tocSordervalidationlotavailability"></a>
<a id="tocsordervalidationlotavailability"></a>

```json
{
  "lot_id": 0,
  "available": 0
}
```

OrderValidationLotAvailability

### Properties

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| lot_id    | integer | true     | none         | none        |
| available | integer | true     | none         | none        |

<h2 id="tocS_OrderValidationRequest">OrderValidationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaordervalidationrequest"></a>
<a id="schema_OrderValidationRequest"></a>
<a id="tocSordervalidationrequest"></a>
<a id="tocsordervalidationrequest"></a>

```json
{
  "lines": [
    {
      "product_code": "string",
      "warehouse_code": "string",
      "quantity": 0
    }
  ],
  "ship_date": "2019-08-24"
}
```

OrderValidationRequest

### Properties

| Name      | Type                                                    | Required | Restrictions | Description |
| --------- | ------------------------------------------------------- | -------- | ------------ | ----------- |
| lines     | [[OrderLineDemandSchema](#schemaorderlinedemandschema)] | true     | none         | none        |
| ship_date | any                                                     | false    | none         | none        |

anyOf

| Name          | Type         | Required | Restrictions | Description |
| ------------- | ------------ | -------- | ------------ | ----------- |
| » _anonymous_ | string(date) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_OrderValidationResponse">OrderValidationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaordervalidationresponse"></a>
<a id="schema_OrderValidationResponse"></a>
<a id="tocSordervalidationresponse"></a>
<a id="tocsordervalidationresponse"></a>

```json
{
  "ok": true,
  "message": "string",
  "data": {
    "product_code": "string",
    "required": 0,
    "available": 0,
    "details": {
      "warehouse_code": "string",
      "per_lot": [
        {
          "lot_id": 0,
          "available": 0
        }
      ],
      "ship_date": "2019-08-24"
    }
  }
}
```

OrderValidationResponse

### Properties

| Name    | Type    | Required | Restrictions | Description |
| ------- | ------- | -------- | ------------ | ----------- |
| ok      | boolean | true     | none         | none        |
| message | string  | true     | none         | none        |
| data    | any     | false    | none         | none        |

anyOf

| Name          | Type                                                        | Required | Restrictions | Description |
| ------------- | ----------------------------------------------------------- | -------- | ------------ | ----------- |
| » _anonymous_ | [OrderValidationErrorData](#schemaordervalidationerrordata) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_OrderWithLinesResponse">OrderWithLinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorderwithlinesresponse"></a>
<a id="schema_OrderWithLinesResponse"></a>
<a id="tocSorderwithlinesresponse"></a>
<a id="tocsorderwithlinesresponse"></a>

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "order_no": "string",
  "customer_code": "string",
  "order_date": "2019-08-24",
  "status": "open",
  "customer_order_no": "string",
  "customer_order_no_last6": "string",
  "delivery_mode": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sap_sent_at": "2019-08-24T14:15:22Z",
  "sap_error_msg": "string",
  "id": 0,
  "lines": [
    {
      "id": 0,
      "line_no": 0,
      "product_code": "string",
      "product_name": "string",
      "customer_code": "string",
      "supplier_code": "string",
      "quantity": 0,
      "unit": "string",
      "due_date": "2019-08-24",
      "warehouse_allocations": [
        {
          "warehouse_code": "string",
          "quantity": 0
        }
      ],
      "related_lots": [{}],
      "allocated_lots": [{}],
      "allocated_qty": 0,
      "next_div": "string"
    }
  ]
}
```

OrderWithLinesResponse

### Properties

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| created_at | string(date-time) | true     | none         | none        |
| updated_at | any               | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type         | Required | Restrictions | Description |
| ----------------- | ------------ | -------- | ------------ | ----------- |
| order_no          | string       | true     | none         | none        |
| customer_code     | string       | true     | none         | none        |
| order_date        | string(date) | true     | none         | none        |
| status            | string       | false    | none         | none        |
| customer_order_no | any          | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                    | Type | Required | Restrictions | Description |
| ----------------------- | ---- | -------- | ------------ | ----------- |
| customer_order_no_last6 | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| delivery_mode | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| sap_order_id | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| sap_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type | Required | Restrictions | Description |
| ----------- | ---- | -------- | ------------ | ----------- |
| sap_sent_at | any  | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| sap_error_msg | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name  | Type                                  | Required | Restrictions | Description |
| ----- | ------------------------------------- | -------- | ------------ | ----------- |
| id    | integer                               | true     | none         | none        |
| lines | [[OrderLineOut](#schemaorderlineout)] | false    | none         | none        |

<h2 id="tocS_Page_ProductOut_">Page_ProductOut_</h2>
<!-- backwards compatibility -->
<a id="schemapage_productout_"></a>
<a id="schema_Page_ProductOut_"></a>
<a id="tocSpage_productout_"></a>
<a id="tocspage_productout_"></a>

```json
{
  "items": [
    {
      "id": 0,
      "product_code": "string",
      "product_name": "string",
      "internal_unit": "string",
      "customer_part_no": "string",
      "maker_item_code": "string",
      "is_active": true,
      "created_at": "2019-08-24T14:15:22Z",
      "updated_at": "2019-08-24T14:15:22Z"
    }
  ],
  "total": 0,
  "page": 0,
  "per_page": 0
}
```

Page[ProductOut]

### Properties

| Name     | Type                              | Required | Restrictions | Description               |
| -------- | --------------------------------- | -------- | ------------ | ------------------------- |
| items    | [[ProductOut](#schemaproductout)] | true     | none         | [Product response model.] |
| total    | integer                           | true     | none         | none                      |
| page     | integer                           | true     | none         | none                      |
| per_page | integer                           | true     | none         | none                      |

<h2 id="tocS_ProductOut">ProductOut</h2>
<!-- backwards compatibility -->
<a id="schemaproductout"></a>
<a id="schema_ProductOut"></a>
<a id="tocSproductout"></a>
<a id="tocsproductout"></a>

```json
{
  "id": 0,
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true,
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z"
}
```

ProductOut

### Properties

| Name             | Type    | Required | Restrictions | Description |
| ---------------- | ------- | -------- | ------------ | ----------- |
| id               | integer | true     | none         | none        |
| product_code     | string  | true     | none         | none        |
| product_name     | string  | true     | none         | none        |
| internal_unit    | string  | true     | none         | none        |
| customer_part_no | any     | true     | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| maker_item_code | any  | true     | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| is_active  | boolean           | true     | none         | none        |
| created_at | string(date-time) | true     | none         | none        |
| updated_at | string(date-time) | true     | none         | none        |

<h2 id="tocS_ProductResponse">ProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductresponse"></a>
<a id="schema_ProductResponse"></a>
<a id="tocSproductresponse"></a>
<a id="tocsproductresponse"></a>

```json
{
  "product_code": "string",
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": "string",
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "EA",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

ProductResponse

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| product_code  | string | true     | none         | none        |
| product_name  | string | true     | none         | none        |
| supplier_code | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| customer_part_no | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| maker_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name               | Type | Required | Restrictions | Description |
| ------------------ | ---- | -------- | ------------ | ----------- |
| supplier_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| packaging_qty  | string | true     | none         | none        |
| packaging_unit | string | true     | none         | none        |
| internal_unit  | string | true     | none         | none        |
| base_unit      | string | false    | none         | none        |
| packaging      | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| assemble_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| next_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| ji_ku_text | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type | Required | Restrictions | Description |
| ----------------- | ---- | -------- | ------------ | ----------- |
| kumitsuke_ku_text | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| shelf_life_days | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type    | Required | Restrictions | Description |
| ------------------- | ------- | -------- | ------------ | ----------- |
| requires_lot_number | boolean | false    | none         | none        |
| delivery_place_id   | any     | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| delivery_place_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                    | Type | Required | Restrictions | Description |
| ----------------------- | ---- | -------- | ------------ | ----------- |
| shipping_warehouse_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_ResponseBase">ResponseBase</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebase"></a>
<a id="schema_ResponseBase"></a>
<a id="tocSresponsebase"></a>
<a id="tocsresponsebase"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {}
}
```

ResponseBase

### Properties

| Name    | Type    | Required | Restrictions | Description |
| ------- | ------- | -------- | ------------ | ----------- |
| success | boolean | true     | none         | none        |
| message | any     | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name | Type | Required | Restrictions | Description |
| ---- | ---- | -------- | ------------ | ----------- |
| data | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | object | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_SapRegisterOptions">SapRegisterOptions</h2>
<!-- backwards compatibility -->
<a id="schemasapregisteroptions"></a>
<a id="schema_SapRegisterOptions"></a>
<a id="tocSsapregisteroptions"></a>
<a id="tocssapregisteroptions"></a>

```json
{
  "retry": 1,
  "timeout_sec": 30
}
```

SapRegisterOptions

### Properties

| Name        | Type    | Required | Restrictions | Description |
| ----------- | ------- | -------- | ------------ | ----------- |
| retry       | integer | false    | none         | none        |
| timeout_sec | integer | false    | none         | none        |

<h2 id="tocS_SapRegisterRequest">SapRegisterRequest</h2>
<!-- backwards compatibility -->
<a id="schemasapregisterrequest"></a>
<a id="schema_SapRegisterRequest"></a>
<a id="tocSsapregisterrequest"></a>
<a id="tocssapregisterrequest"></a>

```json
{
  "target": {
    "type": "string",
    "value": null
  },
  "options": {
    "retry": 1,
    "timeout_sec": 30
  }
}
```

SapRegisterRequest

### Properties

| Name    | Type                                          | Required | Restrictions | Description     |
| ------- | --------------------------------------------- | -------- | ------------ | --------------- |
| target  | [SapRegisterTarget](#schemasapregistertarget) | true     | none         | SAP送信対象指定 |
| options | any                                           | false    | none         | none            |

anyOf

| Name          | Type                                            | Required | Restrictions | Description       |
| ------------- | ----------------------------------------------- | -------- | ------------ | ----------------- |
| » _anonymous_ | [SapRegisterOptions](#schemasapregisteroptions) | false    | none         | SAP送信オプション |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_SapRegisterResponse">SapRegisterResponse</h2>
<!-- backwards compatibility -->
<a id="schemasapregisterresponse"></a>
<a id="schema_SapRegisterResponse"></a>
<a id="tocSsapregisterresponse"></a>
<a id="tocssapregisterresponse"></a>

```json
{
  "status": "string",
  "sap_order_id": "string",
  "sap_status": "string",
  "sent": 0,
  "error_message": "string"
}
```

SapRegisterResponse

### Properties

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| status       | string | true     | none         | none        |
| sap_order_id | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| sap_status | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| sent          | integer | true     | none         | none        |
| error_message | any     | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_SapRegisterTarget">SapRegisterTarget</h2>
<!-- backwards compatibility -->
<a id="schemasapregistertarget"></a>
<a id="schema_SapRegisterTarget"></a>
<a id="tocSsapregistertarget"></a>
<a id="tocssapregistertarget"></a>

```json
{
  "type": "string",
  "value": null
}
```

SapRegisterTarget

### Properties

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| type  | string | true     | none         | none        |
| value | any    | true     | none         | none        |

<h2 id="tocS_SapSyncLogResponse">SapSyncLogResponse</h2>
<!-- backwards compatibility -->
<a id="schemasapsynclogresponse"></a>
<a id="schema_SapSyncLogResponse"></a>
<a id="tocSsapsynclogresponse"></a>
<a id="tocssapsynclogresponse"></a>

```json
{
  "id": 0,
  "order_id": 0,
  "payload": "string",
  "result": "string",
  "status": "string",
  "executed_at": "2019-08-24T14:15:22Z"
}
```

SapSyncLogResponse

### Properties

| Name     | Type    | Required | Restrictions | Description |
| -------- | ------- | -------- | ------------ | ----------- |
| id       | integer | true     | none         | none        |
| order_id | any     | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name    | Type | Required | Restrictions | Description |
| ------- | ---- | -------- | ------------ | ----------- |
| payload | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name   | Type | Required | Restrictions | Description |
| ------ | ---- | -------- | ------------ | ----------- |
| result | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type              | Required | Restrictions | Description |
| ----------- | ----------------- | -------- | ------------ | ----------- |
| status      | string            | true     | none         | none        |
| executed_at | string(date-time) | true     | none         | none        |

<h2 id="tocS_StockMovementCreate">StockMovementCreate</h2>
<!-- backwards compatibility -->
<a id="schemastockmovementcreate"></a>
<a id="schema_StockMovementCreate"></a>
<a id="tocSstockmovementcreate"></a>
<a id="tocsstockmovementcreate"></a>

```json
{
  "product_id": "string",
  "warehouse_id": 0,
  "lot_id": 0,
  "quantity_delta": 0,
  "reason": "string",
  "source_table": "string",
  "source_id": 0,
  "batch_id": "string",
  "created_by": "system"
}
```

StockMovementCreate

### Properties

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| product_id   | string | true     | none         | none        |
| warehouse_id | any    | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name   | Type | Required | Restrictions | Description |
| ------ | ---- | -------- | ------------ | ----------- |
| lot_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| quantity_delta | number | true     | none         | none        |
| reason         | string | true     | none         | none        |
| source_table   | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| source_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| batch_id | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type   | Required | Restrictions | Description |
| ---------- | ------ | -------- | ------------ | ----------- |
| created_by | string | false    | none         | none        |

<h2 id="tocS_StockMovementResponse">StockMovementResponse</h2>
<!-- backwards compatibility -->
<a id="schemastockmovementresponse"></a>
<a id="schema_StockMovementResponse"></a>
<a id="tocSstockmovementresponse"></a>
<a id="tocsstockmovementresponse"></a>

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "product_id": "string",
  "warehouse_id": 0,
  "lot_id": 0,
  "quantity_delta": 0,
  "reason": "string",
  "source_table": "string",
  "source_id": 0,
  "batch_id": "string",
  "created_by": "system",
  "id": 0,
  "occurred_at": "2019-08-24T14:15:22Z"
}
```

StockMovementResponse

### Properties

| Name       | Type              | Required | Restrictions | Description |
| ---------- | ----------------- | -------- | ------------ | ----------- |
| created_at | string(date-time) | true     | none         | none        |
| updated_at | any               | false    | none         | none        |

anyOf

| Name          | Type              | Required | Restrictions | Description |
| ------------- | ----------------- | -------- | ------------ | ----------- |
| » _anonymous_ | string(date-time) | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| product_id   | string | true     | none         | none        |
| warehouse_id | any    | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name   | Type | Required | Restrictions | Description |
| ------ | ---- | -------- | ------------ | ----------- |
| lot_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| quantity_delta | number | true     | none         | none        |
| reason         | string | true     | none         | none        |
| source_table   | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| source_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| batch_id | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name        | Type              | Required | Restrictions | Description |
| ----------- | ----------------- | -------- | ------------ | ----------- |
| created_by  | string            | false    | none         | none        |
| id          | integer           | true     | none         | none        |
| occurred_at | string(date-time) | true     | none         | none        |

<h2 id="tocS_SupplierCreate">SupplierCreate</h2>
<!-- backwards compatibility -->
<a id="schemasuppliercreate"></a>
<a id="schema_SupplierCreate"></a>
<a id="tocSsuppliercreate"></a>
<a id="tocssuppliercreate"></a>

```json
{
  "supplier_code": "string",
  "supplier_name": "string",
  "address": "string"
}
```

SupplierCreate

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| supplier_code | string | true     | none         | none        |
| supplier_name | string | true     | none         | none        |
| address       | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_SupplierResponse">SupplierResponse</h2>
<!-- backwards compatibility -->
<a id="schemasupplierresponse"></a>
<a id="schema_SupplierResponse"></a>
<a id="tocSsupplierresponse"></a>
<a id="tocssupplierresponse"></a>

```json
{
  "supplier_code": "string",
  "supplier_name": "string",
  "address": "string"
}
```

SupplierResponse

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| supplier_code | string | true     | none         | none        |
| supplier_name | string | true     | none         | none        |
| address       | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_SupplierUpdate">SupplierUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasupplierupdate"></a>
<a id="schema_SupplierUpdate"></a>
<a id="tocSsupplierupdate"></a>
<a id="tocssupplierupdate"></a>

```json
{
  "supplier_name": "string",
  "address": "string"
}
```

SupplierUpdate

### Properties

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| supplier_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name    | Type | Required | Restrictions | Description |
| ------- | ---- | -------- | ------------ | ----------- |
| address | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": ["string"],
  "msg": "string",
  "type": "string"
}
```

ValidationError

### Properties

| Name | Type    | Required | Restrictions | Description |
| ---- | ------- | -------- | ------------ | ----------- |
| loc  | [anyOf] | true     | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

continued

| Name | Type   | Required | Restrictions | Description |
| ---- | ------ | -------- | ------------ | ----------- |
| msg  | string | true     | none         | none        |
| type | string | true     | none         | none        |

<h2 id="tocS_WarehouseAllocOut">WarehouseAllocOut</h2>
<!-- backwards compatibility -->
<a id="schemawarehouseallocout"></a>
<a id="schema_WarehouseAllocOut"></a>
<a id="tocSwarehouseallocout"></a>
<a id="tocswarehouseallocout"></a>

```json
{
  "warehouse_code": "string",
  "quantity": 0
}
```

WarehouseAllocOut

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| warehouse_code | string | true     | none         | none        |
| quantity       | number | true     | none         | none        |

<h2 id="tocS_WarehouseCreate">WarehouseCreate</h2>
<!-- backwards compatibility -->
<a id="schemawarehousecreate"></a>
<a id="schema_WarehouseCreate"></a>
<a id="tocSwarehousecreate"></a>
<a id="tocswarehousecreate"></a>

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

WarehouseCreate

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| warehouse_code | string | true     | none         | none        |
| warehouse_name | string | true     | none         | none        |
| address        | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| is_active | integer | false    | none         | none        |

<h2 id="tocS_WarehouseListResponse">WarehouseListResponse</h2>
<!-- backwards compatibility -->
<a id="schemawarehouselistresponse"></a>
<a id="schema_WarehouseListResponse"></a>
<a id="tocSwarehouselistresponse"></a>
<a id="tocswarehouselistresponse"></a>

```json
{
  "items": [
    {
      "warehouse_code": "string",
      "warehouse_name": "string"
    }
  ]
}
```

WarehouseListResponse

### Properties

| Name  | Type                                  | Required | Restrictions | Description |
| ----- | ------------------------------------- | -------- | ------------ | ----------- |
| items | [[WarehouseOut](#schemawarehouseout)] | true     | none         | none        |

<h2 id="tocS_WarehouseOut">WarehouseOut</h2>
<!-- backwards compatibility -->
<a id="schemawarehouseout"></a>
<a id="schema_WarehouseOut"></a>
<a id="tocSwarehouseout"></a>
<a id="tocswarehouseout"></a>

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string"
}
```

WarehouseOut

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| warehouse_code | string | true     | none         | none        |
| warehouse_name | string | true     | none         | none        |

<h2 id="tocS_WarehouseResponse">WarehouseResponse</h2>
<!-- backwards compatibility -->
<a id="schemawarehouseresponse"></a>
<a id="schema_WarehouseResponse"></a>
<a id="tocSwarehouseresponse"></a>
<a id="tocswarehouseresponse"></a>

```json
{
  "warehouse_code": "string",
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

WarehouseResponse

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| warehouse_code | string | true     | none         | none        |
| warehouse_name | string | true     | none         | none        |
| address        | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| is_active | integer | false    | none         | none        |

<h2 id="tocS_WarehouseUpdate">WarehouseUpdate</h2>
<!-- backwards compatibility -->
<a id="schemawarehouseupdate"></a>
<a id="schema_WarehouseUpdate"></a>
<a id="tocSwarehouseupdate"></a>
<a id="tocswarehouseupdate"></a>

```json
{
  "warehouse_name": "string",
  "address": "string",
  "is_active": 1
}
```

WarehouseUpdate

### Properties

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| warehouse_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name    | Type | Required | Restrictions | Description |
| ------- | ---- | -------- | ------------ | ----------- |
| address | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| is_active | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_app__schemas__masters__ProductCreate">app__schemas__masters__ProductCreate</h2>
<!-- backwards compatibility -->
<a id="schemaapp__schemas__masters__productcreate"></a>
<a id="schema_app__schemas__masters__ProductCreate"></a>
<a id="tocSapp__schemas__masters__productcreate"></a>
<a id="tocsapp__schemas__masters__productcreate"></a>

```json
{
  "product_code": "string",
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": 0,
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "EA",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

ProductCreate

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| product_code  | string | true     | none         | none        |
| product_name  | string | true     | none         | none        |
| supplier_code | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| customer_part_no | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| maker_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name               | Type | Required | Restrictions | Description |
| ------------------ | ---- | -------- | ------------ | ----------- |
| supplier_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| packaging_qty | any  | true     | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | number | false    | none         | none        |

or

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

continued

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| packaging_unit | string | true     | none         | none        |
| internal_unit  | string | true     | none         | none        |
| base_unit      | string | false    | none         | none        |
| packaging      | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| assemble_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| next_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| ji_ku_text | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type | Required | Restrictions | Description |
| ----------------- | ---- | -------- | ------------ | ----------- |
| kumitsuke_ku_text | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| shelf_life_days | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type    | Required | Restrictions | Description |
| ------------------- | ------- | -------- | ------------ | ----------- |
| requires_lot_number | boolean | false    | none         | none        |
| delivery_place_id   | any     | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| delivery_place_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                    | Type | Required | Restrictions | Description |
| ----------------------- | ---- | -------- | ------------ | ----------- |
| shipping_warehouse_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_app__schemas__masters__ProductUpdate">app__schemas__masters__ProductUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapp__schemas__masters__productupdate"></a>
<a id="schema_app__schemas__masters__ProductUpdate"></a>
<a id="tocSapp__schemas__masters__productupdate"></a>
<a id="tocsapp__schemas__masters__productupdate"></a>

```json
{
  "product_name": "string",
  "supplier_code": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "supplier_item_code": "string",
  "packaging_qty": 0,
  "packaging_unit": "string",
  "internal_unit": "string",
  "base_unit": "string",
  "packaging": "string",
  "assemble_div": "string",
  "next_div": "string",
  "ji_ku_text": "string",
  "kumitsuke_ku_text": "string",
  "shelf_life_days": 0,
  "requires_lot_number": true,
  "delivery_place_id": 0,
  "delivery_place_name": "string",
  "shipping_warehouse_name": "string"
}
```

ProductUpdate

### Properties

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| product_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| supplier_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| customer_part_no | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| maker_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name               | Type | Required | Restrictions | Description |
| ------------------ | ---- | -------- | ------------ | ----------- |
| supplier_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| packaging_qty | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | number | false    | none         | none        |

or

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name           | Type | Required | Restrictions | Description |
| -------------- | ---- | -------- | ------------ | ----------- |
| packaging_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| internal_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| base_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| packaging | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| assemble_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name     | Type | Required | Restrictions | Description |
| -------- | ---- | -------- | ------------ | ----------- |
| next_div | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name       | Type | Required | Restrictions | Description |
| ---------- | ---- | -------- | ------------ | ----------- |
| ji_ku_text | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type | Required | Restrictions | Description |
| ----------------- | ---- | -------- | ------------ | ----------- |
| kumitsuke_ku_text | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| shelf_life_days | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| requires_lot_number | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | boolean | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name              | Type | Required | Restrictions | Description |
| ----------------- | ---- | -------- | ------------ | ----------- |
| delivery_place_id | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | integer | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                | Type | Required | Restrictions | Description |
| ------------------- | ---- | -------- | ------------ | ----------- |
| delivery_place_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name                    | Type | Required | Restrictions | Description |
| ----------------------- | ---- | -------- | ------------ | ----------- |
| shipping_warehouse_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

<h2 id="tocS_app__schemas__products__ProductCreate">app__schemas__products__ProductCreate</h2>
<!-- backwards compatibility -->
<a id="schemaapp__schemas__products__productcreate"></a>
<a id="schema_app__schemas__products__ProductCreate"></a>
<a id="tocSapp__schemas__products__productcreate"></a>
<a id="tocsapp__schemas__products__productcreate"></a>

```json
{
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true
}
```

ProductCreate

### Properties

| Name             | Type   | Required | Restrictions | Description |
| ---------------- | ------ | -------- | ------------ | ----------- |
| product_code     | string | true     | none         | none        |
| product_name     | string | true     | none         | none        |
| internal_unit    | string | true     | none         | none        |
| customer_part_no | any    | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| maker_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| is_active | boolean | false    | none         | none        |

<h2 id="tocS_app__schemas__products__ProductUpdate">app__schemas__products__ProductUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaapp__schemas__products__productupdate"></a>
<a id="schema_app__schemas__products__ProductUpdate"></a>
<a id="tocSapp__schemas__products__productupdate"></a>
<a id="tocsapp__schemas__products__productupdate"></a>

```json
{
  "product_code": "string",
  "product_name": "string",
  "internal_unit": "string",
  "customer_part_no": "string",
  "maker_item_code": "string",
  "is_active": true
}
```

ProductUpdate

### Properties

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| product_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name         | Type | Required | Restrictions | Description |
| ------------ | ---- | -------- | ------------ | ----------- |
| product_name | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| internal_unit | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name             | Type | Required | Restrictions | Description |
| ---------------- | ---- | -------- | ------------ | ----------- |
| customer_part_no | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name            | Type | Required | Restrictions | Description |
| --------------- | ---- | -------- | ------------ | ----------- |
| maker_item_code | any  | false    | none         | none        |

anyOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |

continued

| Name      | Type | Required | Restrictions | Description |
| --------- | ---- | -------- | ------------ | ----------- |
| is_active | any  | false    | none         | none        |

anyOf

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| » _anonymous_ | boolean | false    | none         | none        |

or

| Name          | Type | Required | Restrictions | Description |
| ------------- | ---- | -------- | ------------ | ----------- |
| » _anonymous_ | null | false    | none         | none        |
