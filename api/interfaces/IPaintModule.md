# Interface: IPaintModule

## Table of contents

### Methods

- [compute](IPaintModule.md#compute)
- [fill](IPaintModule.md#fill)
- [fills](IPaintModule.md#fills)
- [fillText](IPaintModule.md#filltext)
- [stroke](IPaintModule.md#stroke)
- [strokes](IPaintModule.md#strokes)
- [strokeText](IPaintModule.md#stroketext)
- [drawTextStroke](IPaintModule.md#drawtextstroke)
- [shape](IPaintModule.md#shape)

## Methods

### compute

▸ **compute**(`attrName`, `ui`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | [`IPaintAttr`](../modules.md#ipaintattr) |
| `ui` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:10](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L10)

___

### fill

▸ **fill**(`fill`, `ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | `string` |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:12](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L12)

___

### fills

▸ **fills**(`fills`, `ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fills` | [`ILeafPaint`](ILeafPaint.md)[] |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:13](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L13)

___

### fillText

▸ **fillText**(`ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:15](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L15)

___

### stroke

▸ **stroke**(`stroke`, `ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stroke` | `string` |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:17](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L17)

___

### strokes

▸ **strokes**(`strokes`, `ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strokes` | [`ILeafPaint`](ILeafPaint.md)[] |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:18](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L18)

___

### strokeText

▸ **strokeText**(`stroke`, `ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stroke` | `string` \| [`ILeafPaint`](ILeafPaint.md)[] |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:20](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L20)

___

### drawTextStroke

▸ **drawTextStroke**(`ui`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:21](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L21)

___

### shape

▸ **shape**(`ui`, `current`, `renderOptions`): [`ICachedShape`](ICachedShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

[`ICachedShape`](ICachedShape.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:23](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/module/IPaint.ts#L23)
