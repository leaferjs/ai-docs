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

[src/ui/packages/interface/src/module/IPaint.ts:43](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/module/IPaint.ts#L43)

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

[src/ui/packages/interface/src/module/IPaint.ts:44](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/module/IPaint.ts#L44)

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

[src/ui/packages/interface/src/module/IPaint.ts:45](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/module/IPaint.ts#L45)

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

[src/ui/packages/interface/src/module/IPaint.ts:46](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/module/IPaint.ts#L46)
