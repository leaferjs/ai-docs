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
- [onlyScale](IMatrix.md#onlyscale)
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
- [pixelScale](IMatrix.md#pixelscale)
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

[src/leafer/packages/interface/src/math/IMath.ts:163](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L163)

___

### b

• **b**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[b](IMatrixWithScaleData.md#b)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:164](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L164)

___

### c

• **c**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[c](IMatrixWithScaleData.md#c)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:165](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L165)

___

### d

• **d**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[d](IMatrixWithScaleData.md#d)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:166](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L166)

___

### e

• **e**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[e](IMatrixWithScaleData.md#e)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:167](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L167)

___

### f

• **f**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[f](IMatrixWithScaleData.md#f)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:168](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L168)

___

### onlyScale

• `Optional` **onlyScale**: `boolean`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[onlyScale](IMatrixWithScaleData.md#onlyscale)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:169](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L169)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[scaleX](IMatrixWithScaleData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:173](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L173)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

[IMatrixWithScaleData](IMatrixWithScaleData.md).[scaleY](IMatrixWithScaleData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:174](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L174)

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

[src/leafer/packages/interface/src/math/IMath.ts:203](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L203)

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

[src/leafer/packages/interface/src/math/IMath.ts:204](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L204)

___

### get

▸ **get**(): [`IMatrixData`](IMatrixData.md)

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:205](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L205)

___

### clone

▸ **clone**(): [`IMatrix`](IMatrix.md)

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:206](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L206)

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

[src/leafer/packages/interface/src/math/IMath.ts:208](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L208)

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

[src/leafer/packages/interface/src/math/IMath.ts:209](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L209)

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

[src/leafer/packages/interface/src/math/IMath.ts:211](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L211)

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

[src/leafer/packages/interface/src/math/IMath.ts:212](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L212)

___

### pixelScale

▸ **pixelScale**(`pixelRatio`): [`IMatrix`](IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelRatio` | `number` |

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:213](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L213)

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

[src/leafer/packages/interface/src/math/IMath.ts:214](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L214)

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

[src/leafer/packages/interface/src/math/IMath.ts:215](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L215)

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

[src/leafer/packages/interface/src/math/IMath.ts:217](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L217)

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

[src/leafer/packages/interface/src/math/IMath.ts:218](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L218)

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

[src/leafer/packages/interface/src/math/IMath.ts:219](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L219)

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

[src/leafer/packages/interface/src/math/IMath.ts:221](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L221)

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

[src/leafer/packages/interface/src/math/IMath.ts:222](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L222)

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

[src/leafer/packages/interface/src/math/IMath.ts:223](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L223)

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

[src/leafer/packages/interface/src/math/IMath.ts:225](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L225)

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

[src/leafer/packages/interface/src/math/IMath.ts:226](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L226)

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

[src/leafer/packages/interface/src/math/IMath.ts:228](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L228)

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

[src/leafer/packages/interface/src/math/IMath.ts:229](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L229)

___

### invert

▸ **invert**(): [`IMatrix`](IMatrix.md)

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:230](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L230)

___

### invertWith

▸ **invertWith**(): [`IMatrix`](IMatrix.md)

#### Returns

[`IMatrix`](IMatrix.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:231](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L231)

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

[src/leafer/packages/interface/src/math/IMath.ts:233](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L233)

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

[src/leafer/packages/interface/src/math/IMath.ts:234](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L234)

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

[src/leafer/packages/interface/src/math/IMath.ts:236](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L236)

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

[src/leafer/packages/interface/src/math/IMath.ts:237](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L237)

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

[src/leafer/packages/interface/src/math/IMath.ts:239](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L239)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:241](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/math/IMath.ts#L241)
