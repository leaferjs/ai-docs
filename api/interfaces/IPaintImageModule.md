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

[src/ui/packages/interface/src/module/IPaint.ts:30](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L30)

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

[src/ui/packages/interface/src/module/IPaint.ts:31](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L31)

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

[src/ui/packages/interface/src/module/IPaint.ts:32](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L32)

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

[src/ui/packages/interface/src/module/IPaint.ts:33](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L33)

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

[src/ui/packages/interface/src/module/IPaint.ts:35](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L35)

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

[src/ui/packages/interface/src/module/IPaint.ts:36](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L36)

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

[src/ui/packages/interface/src/module/IPaint.ts:37](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L37)

___

### clipMode

▸ **clipMode**(`data`, `box`, `x`, `y`, `scaleX`, `scaleY`, `rotation`, `skew`, `clipSize?`): `void`

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
| `skew` | [`IPointData`](IPointData.md) |
| `clipSize?` | [`ISizeData`](ISizeData.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:38](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L38)

___

### repeatMode

▸ **repeatMode**(`data`, `box`, `width`, `height`, `x`, `y`, `scaleX`, `scaleY`, `rotation`, `skew`, `align`, `freeTransform?`): `void`

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
| `skew` | [`IPointData`](IPointData.md) |
| `align` | [`IDirection`](../modules.md#idirection) |
| `freeTransform?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:39](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/module/IPaint.ts#L39)
