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

[src/ui/packages/interface/src/module/IPaint.ts:45](https://github.com/leaferjs/leafer-ui/blob/6982d3e91dfd04600b4cf106a9b22f4502e5d32b/packages/interface/src/module/IPaint.ts#L45)

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

[src/ui/packages/interface/src/module/IPaint.ts:46](https://github.com/leaferjs/leafer-ui/blob/6982d3e91dfd04600b4cf106a9b22f4502e5d32b/packages/interface/src/module/IPaint.ts#L46)

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

[src/ui/packages/interface/src/module/IPaint.ts:47](https://github.com/leaferjs/leafer-ui/blob/6982d3e91dfd04600b4cf106a9b22f4502e5d32b/packages/interface/src/module/IPaint.ts#L47)

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

[src/ui/packages/interface/src/module/IPaint.ts:48](https://github.com/leaferjs/leafer-ui/blob/6982d3e91dfd04600b4cf106a9b22f4502e5d32b/packages/interface/src/module/IPaint.ts#L48)
