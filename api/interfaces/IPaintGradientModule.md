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

[src/ui/packages/interface/src/module/IPaint.ts:52](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/module/IPaint.ts#L52)

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

[src/ui/packages/interface/src/module/IPaint.ts:53](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/module/IPaint.ts#L53)

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

[src/ui/packages/interface/src/module/IPaint.ts:54](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/module/IPaint.ts#L54)

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

[src/ui/packages/interface/src/module/IPaint.ts:55](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/module/IPaint.ts#L55)
