# Interface: IMatrix

## Hierarchy

- [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

  ↳ **`IMatrix`**

## Implemented by

- [`Matrix`](../classes/Matrix.md)

## Table of contents

### Properties

- [a](IMatrix.md#a)
- [b](IMatrix.md#b)
- [c](IMatrix.md#c)
- [d](IMatrix.md#d)
- [e](IMatrix.md#e)
- [f](IMatrix.md#f)
- [scaleX](IMatrix.md#scalex)
- [scaleY](IMatrix.md#scaley)

### Methods

- [set](IMatrix.md#set)
- [setWith](IMatrix.md#setwith)
- [get](IMatrix.md#get)
- [clone](IMatrix.md#clone)
- [translate](IMatrix.md#translate)
- [translateInner](IMatrix.md#translateinner)
- [scale](IMatrix.md#scale)
- [scaleWith](IMatrix.md#scalewith)
- [scaleOfOuter](IMatrix.md#scaleofouter)
- [scaleOfInner](IMatrix.md#scaleofinner)
- [rotate](IMatrix.md#rotate)
- [rotateOfOuter](IMatrix.md#rotateofouter)
- [rotateOfInner](IMatrix.md#rotateofinner)
- [skew](IMatrix.md#skew)
- [skewOfOuter](IMatrix.md#skewofouter)
- [skewOfInner](IMatrix.md#skewofinner)
- [multiply](IMatrix.md#multiply)
- [multiplyParent](IMatrix.md#multiplyparent)
- [divide](IMatrix.md#divide)
- [divideParent](IMatrix.md#divideparent)
- [invert](IMatrix.md#invert)
- [invertWith](IMatrix.md#invertwith)
- [toOuterPoint](IMatrix.md#toouterpoint)
- [toInnerPoint](IMatrix.md#toinnerpoint)
- [setLayout](IMatrix.md#setlayout)
- [getLayout](IMatrix.md#getlayout)
- [withScale](IMatrix.md#withscale)
- [reset](IMatrix.md#reset)

## Properties

### a

• **a**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[a](IMatrixWithScaleData.md#a)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:162](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L162)

___

### b

• **b**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[b](IMatrixWithScaleData.md#b)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:163](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L163)

___

### c

• **c**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[c](IMatrixWithScaleData.md#c)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:164](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L164)

___

### d

• **d**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[d](IMatrixWithScaleData.md#d)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:165](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L165)

___

### e

• **e**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[e](IMatrixWithScaleData.md#e)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:166](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L166)

___

### f

• **f**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[f](IMatrixWithScaleData.md#f)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:167](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L167)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[scaleX](IMatrixWithScaleData.md#scalex)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:171](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L171)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[scaleY](IMatrixWithScaleData.md#scaley)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:172](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L172)

## Methods

### set

▸ **set**(`a`, `b`, `c`, `d`, `e`, `f`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`IMatrixData`](IMatrixData.md) |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:201](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L201)

___

### setWith

▸ **setWith**(`dataWithScale`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataWithScale` | [`IMatrixWithScaleData`](IMatrixWithScaleData.md) |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:202](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L202)

___

### get

▸ **get**(): [`IMatrixData`](IMatrixData.md)

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:203](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L203)

___

### clone

▸ **clone**(): [`IMatrix`](IMatrix.md)

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:204](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L204)

___

### translate

▸ **translate**(`x`, `y`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:206](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L206)

___

### translateInner

▸ **translateInner**(`x`, `y`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:207](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L207)

___

### scale

▸ **scale**(`x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:209](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L209)

___

### scaleWith

▸ **scaleWith**(`x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:210](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L210)

___

### scaleOfOuter

▸ **scaleOfOuter**(`origin`, `x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:211](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L211)

___

### scaleOfInner

▸ **scaleOfInner**(`origin`, `x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:212](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L212)

___

### rotate

▸ **rotate**(`angle`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:214](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L214)

___

### rotateOfOuter

▸ **rotateOfOuter**(`origin`, `angle`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `angle` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:215](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L215)

___

### rotateOfInner

▸ **rotateOfInner**(`origin`, `angle`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `angle` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:216](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L216)

___

### skew

▸ **skew**(`x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:218](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L218)

___

### skewOfOuter

▸ **skewOfOuter**(`origin`, `x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:219](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L219)

___

### skewOfInner

▸ **skewOfInner**(`origin`, `x`, `y?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:220](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L220)

___

### multiply

▸ **multiply**(`child`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IMatrixData`](IMatrixData.md) |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:222](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L222)

___

### multiplyParent

▸ **multiplyParent**(`parent`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IMatrixData`](IMatrixData.md) |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:223](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L223)

___

### divide

▸ **divide**(`child`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IMatrixData`](IMatrixData.md) |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:225](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L225)

___

### divideParent

▸ **divideParent**(`parent`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IMatrixData`](IMatrixData.md) |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:226](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L226)

___

### invert

▸ **invert**(): [`IMatrix`](IMatrix.md)

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:227](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L227)

___

### invertWith

▸ **invertWith**(): [`IMatrix`](IMatrix.md)

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:228](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L228)

___

### toOuterPoint

▸ **toOuterPoint**(`inner`, `to?`, `distance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:230](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L230)

___

### toInnerPoint

▸ **toInnerPoint**(`outer`, `to?`, `distance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outer` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:231](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L231)

___

### setLayout

▸ **setLayout**(`data`, `origin?`, `around?`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILayoutData`](ILayoutData.md) |
| `origin?` | [`IPointData`](IPointData.md) |
| `around?` | [`IPointData`](IPointData.md) |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:233](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L233)

___

### getLayout

▸ **getLayout**(`origin?`, `around?`, `firstSkewY?`): [`ILayoutData`](ILayoutData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin?` | [`IPointData`](IPointData.md) |
| `around?` | [`IPointData`](IPointData.md) |
| `firstSkewY?` | `boolean` |

#### Returns

[`ILayoutData`](ILayoutData.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:234](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L234)

___

### withScale

▸ **withScale**(`scaleX?`, `scaleY?`): [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX?` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:236](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L236)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:238](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/math/IMath.ts#L238)
