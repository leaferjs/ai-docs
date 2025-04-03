# Interface: IPaintImageModule

## Table of contents

### Methods

- [image](IPaintImageModule.md#image)
- [checkImage](IPaintImageModule.md#checkimage)
- [createPattern](IPaintImageModule.md#createpattern)
- [recycleImage](IPaintImageModule.md#recycleimage)
- [createData](IPaintImageModule.md#createdata)
- [getPatternData](IPaintImageModule.md#getpatterndata)
- [fillOrFitMode](IPaintImageModule.md#fillorfitmode)
- [clipMode](IPaintImageModule.md#clipmode)
- [repeatMode](IPaintImageModule.md#repeatmode)

## Methods

### image

▸ **image**(`ui`, `attrName`, `paint`, `boxBounds`, `firstUse`): [`ILeafPaint`](ILeafPaint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `attrName` | `string` |
| `paint` | [`IImagePaint`](IImagePaint.md) |
| `boxBounds` | [`IBoundsData`](IBoundsData.md) |
| `firstUse` | `boolean` |

#### Returns

[`ILeafPaint`](ILeafPaint.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:28](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L28)

___

### checkImage

▸ **checkImage**(`ui`, `canvas`, `paint`, `allowPaint?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `allowPaint?` | `boolean` |

#### Returns

`boolean`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:29](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L29)

___

### createPattern

▸ **createPattern**(`ui`, `paint`, `pixelRatio`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `pixelRatio` | `number` |

#### Returns

`boolean`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:30](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L30)

___

### recycleImage

▸ **recycleImage**(`attrName`, `data`): [`IBooleanMap`](IBooleanMap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | [`IPaintAttr`](../modules.md#ipaintattr) |
| `data` | [`IUIData`](IUIData.md) |

#### Returns

[`IBooleanMap`](IBooleanMap.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:31](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L31)

___

### createData

▸ **createData**(`leafPaint`, `image`, `paint`, `box`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafPaint` | [`ILeafPaint`](ILeafPaint.md) |
| `image` | [`ILeaferImage`](ILeaferImage.md) |
| `paint` | [`IImagePaint`](IImagePaint.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:33](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L33)

___

### getPatternData

▸ **getPatternData**(`paint`, `box`, `image`): [`ILeafPaintPatternData`](ILeafPaintPatternData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`IImagePaint`](IImagePaint.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |
| `image` | [`ILeaferImage`](ILeaferImage.md) |

#### Returns

[`ILeafPaintPatternData`](ILeafPaintPatternData.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:34](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L34)

___

### fillOrFitMode

▸ **fillOrFitMode**(`data`, `box`, `x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeafPaintPatternData`](ILeafPaintPatternData.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `rotation` | `number` |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:35](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L35)

___

### clipMode

▸ **clipMode**(`data`, `box`, `x`, `y`, `scaleX`, `scaleY`, `rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeafPaintPatternData`](ILeafPaintPatternData.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `rotation` | `number` |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:36](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L36)

___

### repeatMode

▸ **repeatMode**(`data`, `box`, `width`, `height`, `x`, `y`, `scaleX`, `scaleY`, `rotation`, `around`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeafPaintPatternData`](ILeafPaintPatternData.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |
| `width` | `number` |
| `height` | `number` |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `rotation` | `number` |
| `around` | [`IAround`](../modules.md#iaround) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:37](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/IPaint.ts#L37)
