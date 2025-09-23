# Interface: IPoint

## Hierarchy

- [`IPointData`](IPointData.md)

  ↳ **`IPoint`**

## Implemented by

- [`Point`](../classes/Point.md)

## Table of contents

### Properties

- [x](IPoint.md#x)
- [y](IPoint.md#y)

### Methods

- [set](IPoint.md#set)
- [get](IPoint.md#get)
- [clone](IPoint.md#clone)
- [move](IPoint.md#move)
- [scale](IPoint.md#scale)
- [scaleOf](IPoint.md#scaleof)
- [rotate](IPoint.md#rotate)
- [rotateOf](IPoint.md#rotateof)
- [getRotation](IPoint.md#getrotation)
- [toInnerOf](IPoint.md#toinnerof)
- [toOuterOf](IPoint.md#toouterof)
- [getCenter](IPoint.md#getcenter)
- [getDistance](IPoint.md#getdistance)
- [getDistancePoint](IPoint.md#getdistancepoint)
- [getAngle](IPoint.md#getangle)
- [getAtan2](IPoint.md#getatan2)
- [reset](IPoint.md#reset)

## Properties

### x

• **x**: `number`

#### Inherited from

[IPointData](IPointData.md).[x](IPointData.md#x)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:5](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L5)

___

### y

• **y**: `number`

#### Inherited from

[IPointData](IPointData.md).[y](IPointData.md#y)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:6](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L6)

## Methods

### set

▸ **set**(`x?`, `y?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:33](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L33)

___

### get

▸ **get**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:34](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L34)

___

### clone

▸ **clone**(): [`IPoint`](IPoint.md)

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:35](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L35)

___

### move

▸ **move**(`x`, `y?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:37](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L37)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:38](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L38)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:39](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L39)

___

### rotate

▸ **rotate**(`rotation`, `origin?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `number` |
| `origin?` | [`IPointData`](IPointData.md) |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:40](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L40)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `rotation` | `number` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:41](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L41)

___

### getRotation

▸ **getRotation**(`origin`, `to`, `toOrigin?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) |
| `to` | [`IPointData`](IPointData.md) |
| `toOrigin?` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:42](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L42)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `to?` | [`IPointData`](IPointData.md) |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:44](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L44)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `to?` | [`IPointData`](IPointData.md) |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:45](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L45)

___

### getCenter

▸ **getCenter**(`to`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:47](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L47)

___

### getDistance

▸ **getDistance**(`to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:48](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L48)

___

### getDistancePoint

▸ **getDistancePoint**(`to`, `distance`, `changeTo?`): [`IPoint`](IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](IPointData.md) |
| `distance` | `number` |
| `changeTo?` | `boolean` |

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:49](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L49)

___

### getAngle

▸ **getAngle**(`to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:51](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L51)

___

### getAtan2

▸ **getAtan2**(`to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](IPointData.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:52](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L52)

___

### reset

▸ **reset**(): [`IPoint`](IPoint.md)

#### Returns

[`IPoint`](IPoint.md)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:54](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/math/IMath.ts#L54)
