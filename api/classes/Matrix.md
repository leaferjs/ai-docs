# Class: Matrix

## Implements

- [`IMatrix`](../interfaces/IMatrix.md)

## Table of contents

### Constructors

- [constructor](Matrix.md#constructor)

### Properties

- [a](Matrix.md#a)
- [b](Matrix.md#b)
- [c](Matrix.md#c)
- [d](Matrix.md#d)
- [e](Matrix.md#e)
- [f](Matrix.md#f)
- [scaleX](Matrix.md#scalex)
- [scaleY](Matrix.md#scaley)

### Methods

- [set](Matrix.md#set)
- [setWith](Matrix.md#setwith)
- [get](Matrix.md#get)
- [clone](Matrix.md#clone)
- [translate](Matrix.md#translate)
- [translateInner](Matrix.md#translateinner)
- [scale](Matrix.md#scale)
- [scaleWith](Matrix.md#scalewith)
- [scaleOfOuter](Matrix.md#scaleofouter)
- [scaleOfInner](Matrix.md#scaleofinner)
- [rotate](Matrix.md#rotate)
- [rotateOfOuter](Matrix.md#rotateofouter)
- [rotateOfInner](Matrix.md#rotateofinner)
- [skew](Matrix.md#skew)
- [skewOfOuter](Matrix.md#skewofouter)
- [skewOfInner](Matrix.md#skewofinner)
- [multiply](Matrix.md#multiply)
- [multiplyParent](Matrix.md#multiplyparent)
- [divide](Matrix.md#divide)
- [divideParent](Matrix.md#divideparent)
- [invert](Matrix.md#invert)
- [invertWith](Matrix.md#invertwith)
- [toOuterPoint](Matrix.md#toouterpoint)
- [toInnerPoint](Matrix.md#toinnerpoint)
- [setLayout](Matrix.md#setlayout)
- [getLayout](Matrix.md#getlayout)
- [withScale](Matrix.md#withscale)
- [reset](Matrix.md#reset)

## Constructors

### constructor

• **new Matrix**(`a?`, `b?`, `c?`, `d?`, `e?`, `f?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `number` \| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Defined in

[leafer/packages/math/src/Matrix.ts:17](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L17)

## Properties

### a

• **a**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[a](../interfaces/IMatrix.md#a)

#### Defined in

[leafer/packages/math/src/Matrix.ts:7](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L7)

___

### b

• **b**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[b](../interfaces/IMatrix.md#b)

#### Defined in

[leafer/packages/math/src/Matrix.ts:8](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L8)

___

### c

• **c**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[c](../interfaces/IMatrix.md#c)

#### Defined in

[leafer/packages/math/src/Matrix.ts:9](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L9)

___

### d

• **d**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[d](../interfaces/IMatrix.md#d)

#### Defined in

[leafer/packages/math/src/Matrix.ts:10](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L10)

___

### e

• **e**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[e](../interfaces/IMatrix.md#e)

#### Defined in

[leafer/packages/math/src/Matrix.ts:11](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L11)

___

### f

• **f**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[f](../interfaces/IMatrix.md#f)

#### Defined in

[leafer/packages/math/src/Matrix.ts:12](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L12)

___

### scaleX

• **scaleX**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleX](../interfaces/IMatrix.md#scalex)

#### Defined in

[leafer/packages/math/src/Matrix.ts:14](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L14)

___

### scaleY

• **scaleY**: `number`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleY](../interfaces/IMatrix.md#scaley)

#### Defined in

[leafer/packages/math/src/Matrix.ts:15](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L15)

## Methods

### set

▸ **set**(`a?`, `b?`, `c?`, `d?`, `e?`, `f?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `number` \| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[set](../interfaces/IMatrix.md#set)

#### Defined in

[leafer/packages/math/src/Matrix.ts:21](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L21)

___

### setWith

▸ **setWith**(`dataWithScale`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataWithScale` | [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[setWith](../interfaces/IMatrix.md#setwith)

#### Defined in

[leafer/packages/math/src/Matrix.ts:26](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L26)

___

### get

▸ **get**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[get](../interfaces/IMatrix.md#get)

#### Defined in

[leafer/packages/math/src/Matrix.ts:33](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L33)

___

### clone

▸ **clone**(): [`IMatrix`](../interfaces/IMatrix.md)

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[clone](../interfaces/IMatrix.md#clone)

#### Defined in

[leafer/packages/math/src/Matrix.ts:38](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L38)

___

### translate

▸ **translate**(`x`, `y`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[translate](../interfaces/IMatrix.md#translate)

#### Defined in

[leafer/packages/math/src/Matrix.ts:43](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L43)

___

### translateInner

▸ **translateInner**(`x`, `y`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[translateInner](../interfaces/IMatrix.md#translateinner)

#### Defined in

[leafer/packages/math/src/Matrix.ts:48](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L48)

___

### scale

▸ **scale**(`x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scale](../interfaces/IMatrix.md#scale)

#### Defined in

[leafer/packages/math/src/Matrix.ts:53](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L53)

___

### scaleWith

▸ **scaleWith**(`x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleWith](../interfaces/IMatrix.md#scalewith)

#### Defined in

[leafer/packages/math/src/Matrix.ts:58](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L58)

___

### scaleOfOuter

▸ **scaleOfOuter**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleOfOuter](../interfaces/IMatrix.md#scaleofouter)

#### Defined in

[leafer/packages/math/src/Matrix.ts:65](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L65)

___

### scaleOfInner

▸ **scaleOfInner**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[scaleOfInner](../interfaces/IMatrix.md#scaleofinner)

#### Defined in

[leafer/packages/math/src/Matrix.ts:69](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L69)

___

### rotate

▸ **rotate**(`angle`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[rotate](../interfaces/IMatrix.md#rotate)

#### Defined in

[leafer/packages/math/src/Matrix.ts:74](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L74)

___

### rotateOfOuter

▸ **rotateOfOuter**(`origin`, `angle`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `angle` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[rotateOfOuter](../interfaces/IMatrix.md#rotateofouter)

#### Defined in

[leafer/packages/math/src/Matrix.ts:79](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L79)

___

### rotateOfInner

▸ **rotateOfInner**(`origin`, `angle`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `angle` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[rotateOfInner](../interfaces/IMatrix.md#rotateofinner)

#### Defined in

[leafer/packages/math/src/Matrix.ts:84](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L84)

___

### skew

▸ **skew**(`x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[skew](../interfaces/IMatrix.md#skew)

#### Defined in

[leafer/packages/math/src/Matrix.ts:90](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L90)

___

### skewOfOuter

▸ **skewOfOuter**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[skewOfOuter](../interfaces/IMatrix.md#skewofouter)

#### Defined in

[leafer/packages/math/src/Matrix.ts:95](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L95)

___

### skewOfInner

▸ **skewOfInner**(`origin`, `x`, `y?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `x` | `number` |
| `y?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[skewOfInner](../interfaces/IMatrix.md#skewofinner)

#### Defined in

[leafer/packages/math/src/Matrix.ts:100](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L100)

___

### multiply

▸ **multiply**(`child`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[multiply](../interfaces/IMatrix.md#multiply)

#### Defined in

[leafer/packages/math/src/Matrix.ts:106](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L106)

___

### multiplyParent

▸ **multiplyParent**(`parent`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[multiplyParent](../interfaces/IMatrix.md#multiplyparent)

#### Defined in

[leafer/packages/math/src/Matrix.ts:111](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L111)

___

### divide

▸ **divide**(`child`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[divide](../interfaces/IMatrix.md#divide)

#### Defined in

[leafer/packages/math/src/Matrix.ts:117](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L117)

___

### divideParent

▸ **divideParent**(`parent`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[divideParent](../interfaces/IMatrix.md#divideparent)

#### Defined in

[leafer/packages/math/src/Matrix.ts:122](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L122)

___

### invert

▸ **invert**(): [`IMatrix`](../interfaces/IMatrix.md)

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[invert](../interfaces/IMatrix.md#invert)

#### Defined in

[leafer/packages/math/src/Matrix.ts:127](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L127)

___

### invertWith

▸ **invertWith**(): [`IMatrix`](../interfaces/IMatrix.md)

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[invertWith](../interfaces/IMatrix.md#invertwith)

#### Defined in

[leafer/packages/math/src/Matrix.ts:132](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L132)

___

### toOuterPoint

▸ **toOuterPoint**(`inner`, `to?`, `distance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[toOuterPoint](../interfaces/IMatrix.md#toouterpoint)

#### Defined in

[leafer/packages/math/src/Matrix.ts:140](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L140)

___

### toInnerPoint

▸ **toInnerPoint**(`outer`, `to?`, `distance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outer` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[toInnerPoint](../interfaces/IMatrix.md#toinnerpoint)

#### Defined in

[leafer/packages/math/src/Matrix.ts:144](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L144)

___

### setLayout

▸ **setLayout**(`data`, `origin?`, `around?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILayoutData`](../interfaces/ILayoutData.md) |
| `origin?` | [`IPointData`](../interfaces/IPointData.md) |
| `around?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[setLayout](../interfaces/IMatrix.md#setlayout)

#### Defined in

[leafer/packages/math/src/Matrix.ts:149](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L149)

___

### getLayout

▸ **getLayout**(`origin?`, `around?`, `firstSkewY?`): [`ILayoutData`](../interfaces/ILayoutData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin?` | [`IPointData`](../interfaces/IPointData.md) |
| `around?` | [`IPointData`](../interfaces/IPointData.md) |
| `firstSkewY?` | `boolean` |

#### Returns

[`ILayoutData`](../interfaces/ILayoutData.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[getLayout](../interfaces/IMatrix.md#getlayout)

#### Defined in

[leafer/packages/math/src/Matrix.ts:154](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L154)

___

### withScale

▸ **withScale**(`scaleX?`, `scaleY?`): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX?` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[withScale](../interfaces/IMatrix.md#withscale)

#### Defined in

[leafer/packages/math/src/Matrix.ts:158](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L158)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[IMatrix](../interfaces/IMatrix.md).[reset](../interfaces/IMatrix.md#reset)

#### Defined in

[leafer/packages/math/src/Matrix.ts:162](https://github.com/leaferjs/leafer/blob/27a24ec/packages/math/src/Matrix.ts#L162)
