# Interface: IPaintImageModule

## Table of contents

### Methods

- [image](IPaintImageModule.md#image)
- [checkImage](IPaintImageModule.md#checkimage)
- [drawImage](IPaintImageModule.md#drawimage)
- [getImageRenderScaleData](IPaintImageModule.md#getimagerenderscaledata)
- [recycleImage](IPaintImageModule.md#recycleimage)
- [createPatternTask](IPaintImageModule.md#createpatterntask)
- [createPattern](IPaintImageModule.md#createpattern)
- [getPatternFixScale](IPaintImageModule.md#getpatternfixscale)
- [createData](IPaintImageModule.md#createdata)
- [getPatternData](IPaintImageModule.md#getpatterndata)
- [stretchMode](IPaintImageModule.md#stretchmode)
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

[src/ui/packages/interface/src/module/IPaint.ts:31](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L31)

___

### checkImage

▸ **checkImage**(`paint`, `allowDraw`, `ui`, `canvas`, `renderOptions`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `allowDraw` | `boolean` |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:33](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L33)

___

### drawImage

▸ **drawImage**(`paint`, `imageScaleX`, `imageScaleY`, `ui`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `imageScaleX` | `number` |
| `imageScaleY` | `number` |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:34](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L34)

___

### getImageRenderScaleData

▸ **getImageRenderScaleData**(`paint`, `ui`, `canvas?`, `renderOptions?`): [`IScaleData`](IScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `ui` | [`IUI`](IUI.md) |
| `canvas?` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions?` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

[`IScaleData`](IScaleData.md)

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:35](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L35)

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

[src/ui/packages/interface/src/module/IPaint.ts:36](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L36)

___

### createPatternTask

▸ **createPatternTask**(`paint`, `ui`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:38](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L38)

___

### createPattern

▸ **createPattern**(`paint`, `ui`, `canvas`, `renderOptions`, `resolve?`, `task?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `ui` | [`IUI`](IUI.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |
| `resolve?` | [`IFunction`](IFunction.md) |
| `task?` | [`ITaskItem`](ITaskItem.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:39](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L39)

___

### getPatternFixScale

▸ **getPatternFixScale**(`paint`, `imageScaleX`, `imageScaleY`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`ILeafPaint`](ILeafPaint.md) |
| `imageScaleX` | `number` |
| `imageScaleY` | `number` |

#### Returns

`number`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:40](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L40)

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

[src/ui/packages/interface/src/module/IPaint.ts:42](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L42)

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

[src/ui/packages/interface/src/module/IPaint.ts:43](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L43)

___

### stretchMode

▸ **stretchMode**(`data`, `box`, `scaleX`, `scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeafPaintPatternData`](ILeafPaintPatternData.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |
| `scaleX` | `number` |
| `scaleY` | `number` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:45](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L45)

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

[src/ui/packages/interface/src/module/IPaint.ts:46](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L46)

___

### clipMode

▸ **clipMode**(`data`, `box`, `x`, `y`, `scaleX`, `scaleY`, `rotation`, `skew`, `clipScaleX?`, `clipScaleY?`): `void`

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
| `clipScaleX?` | `number` |
| `clipScaleY?` | `number` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPaint.ts:47](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L47)

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

[src/ui/packages/interface/src/module/IPaint.ts:48](https://github.com/leaferjs/leafer-ui/blob/841f5222d8c7066c5e971f71c312b821c5f5ad63/packages/interface/src/module/IPaint.ts#L48)
