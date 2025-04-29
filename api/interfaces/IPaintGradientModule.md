# Interface: IPaintGradientModule

## Table of contents

### Methods

- [linearGradient](IPaintGradientModule.md#lineargradient)
- [radialGradient](IPaintGradientModule.md#radialgradient)
- [conicGradient](IPaintGradientModule.md#conicgradient)
- [getTransform](IPaintGradientModule.md#gettransform)

## Methods

### linearGradient

▸ **linearGradient**(`paint`, `box`): [`ILeafPaint`](ILeafPaint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`IGradientPaint`](IGradientPaint.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |

#### Returns

[`ILeafPaint`](ILeafPaint.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:41](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/module/IPaint.ts#L41)

___

### radialGradient

▸ **radialGradient**(`paint`, `box`): [`ILeafPaint`](ILeafPaint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`IGradientPaint`](IGradientPaint.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |

#### Returns

[`ILeafPaint`](ILeafPaint.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:42](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/module/IPaint.ts#L42)

___

### conicGradient

▸ **conicGradient**(`paint`, `box`): [`ILeafPaint`](ILeafPaint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paint` | [`IGradientPaint`](IGradientPaint.md) |
| `box` | [`IBoundsData`](IBoundsData.md) |

#### Returns

[`ILeafPaint`](ILeafPaint.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:43](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/module/IPaint.ts#L43)

___

### getTransform

▸ **getTransform**(`box`, `from`, `to`, `stretch`, `rotate90`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IBoundsData`](IBoundsData.md) |
| `from` | [`IPointData`](IPointData.md) |
| `to` | [`IPointData`](IPointData.md) |
| `stretch` | `number` |
| `rotate90` | `boolean` |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[ui/packages/interface/src/module/IPaint.ts:44](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/module/IPaint.ts#L44)
