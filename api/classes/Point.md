# Class: Point

## Implements

- [`IPoint`](../interfaces/IPoint.md)

## Table of contents

### Constructors

- [constructor](Point.md#constructor)

### Properties

- [x](Point.md#x)
- [y](Point.md#y)

### Methods

- [set](Point.md#set)
- [get](Point.md#get)
- [clone](Point.md#clone)
- [move](Point.md#move)
- [scale](Point.md#scale)
- [scaleOf](Point.md#scaleof)
- [rotate](Point.md#rotate)
- [rotateOf](Point.md#rotateof)
- [getRotation](Point.md#getrotation)
- [toInnerOf](Point.md#toinnerof)
- [toOuterOf](Point.md#toouterof)
- [getCenter](Point.md#getcenter)
- [getDistance](Point.md#getdistance)
- [getDistancePoint](Point.md#getdistancepoint)
- [getAngle](Point.md#getangle)
- [getAtan2](Point.md#getatan2)
- [reset](Point.md#reset)

## Constructors

### constructor

• **new Point**(`x?`, `y?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |

#### Defined in

[leafer/packages/math/src/Point.ts:9](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L9)

## Properties

### x

• **x**: `number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[x](../interfaces/IPoint.md#x)

#### Defined in

[leafer/packages/math/src/Point.ts:6](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L6)

___

### y

• **y**: `number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[y](../interfaces/IPoint.md#y)

#### Defined in

[leafer/packages/math/src/Point.ts:7](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L7)

## Methods

### set

▸ **set**(`x?`, `y?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[set](../interfaces/IPoint.md#set)

#### Defined in

[leafer/packages/math/src/Point.ts:13](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L13)

___

### get

▸ **get**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[get](../interfaces/IPoint.md#get)

#### Defined in

[leafer/packages/math/src/Point.ts:18](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L18)

___

### clone

▸ **clone**(): [`IPoint`](../interfaces/IPoint.md)

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[clone](../interfaces/IPoint.md#clone)

#### Defined in

[leafer/packages/math/src/Point.ts:24](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L24)

___

### move

▸ **move**(`x`, `y?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[move](../interfaces/IPoint.md#move)

#### Defined in

[leafer/packages/math/src/Point.ts:29](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L29)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[scale](../interfaces/IPoint.md#scale)

#### Defined in

[leafer/packages/math/src/Point.ts:34](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L34)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[scaleOf](../interfaces/IPoint.md#scaleof)

#### Defined in

[leafer/packages/math/src/Point.ts:39](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L39)

___

### rotate

▸ **rotate**(`rotation`, `origin?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `number` |
| `origin?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[rotate](../interfaces/IPoint.md#rotate)

#### Defined in

[leafer/packages/math/src/Point.ts:44](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L44)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `rotation` | `number` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[rotateOf](../interfaces/IPoint.md#rotateof)

#### Defined in

[leafer/packages/math/src/Point.ts:49](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L49)

___

### getRotation

▸ **getRotation**(`origin`, `to`, `toOrigin?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `to` | [`IPointData`](../interfaces/IPointData.md) |
| `toOrigin?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getRotation](../interfaces/IPoint.md#getrotation)

#### Defined in

[leafer/packages/math/src/Point.ts:54](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L54)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[toInnerOf](../interfaces/IPoint.md#toinnerof)

#### Defined in

[leafer/packages/math/src/Point.ts:59](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L59)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[toOuterOf](../interfaces/IPoint.md#toouterof)

#### Defined in

[leafer/packages/math/src/Point.ts:64](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L64)

___

### getCenter

▸ **getCenter**(`to`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getCenter](../interfaces/IPoint.md#getcenter)

#### Defined in

[leafer/packages/math/src/Point.ts:70](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L70)

___

### getDistance

▸ **getDistance**(`to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getDistance](../interfaces/IPoint.md#getdistance)

#### Defined in

[leafer/packages/math/src/Point.ts:74](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L74)

___

### getDistancePoint

▸ **getDistancePoint**(`to`, `distance`, `changeTo?`): [`IPoint`](../interfaces/IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |
| `distance` | `number` |
| `changeTo?` | `boolean` |

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getDistancePoint](../interfaces/IPoint.md#getdistancepoint)

#### Defined in

[leafer/packages/math/src/Point.ts:78](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L78)

___

### getAngle

▸ **getAngle**(`to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getAngle](../interfaces/IPoint.md#getangle)

#### Defined in

[leafer/packages/math/src/Point.ts:82](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L82)

___

### getAtan2

▸ **getAtan2**(`to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/IPoint.md).[getAtan2](../interfaces/IPoint.md#getatan2)

#### Defined in

[leafer/packages/math/src/Point.ts:86](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L86)

___

### reset

▸ **reset**(): [`IPoint`](../interfaces/IPoint.md)

#### Returns

[`IPoint`](../interfaces/IPoint.md)

#### Implementation of

[IPoint](../interfaces/IPoint.md).[reset](../interfaces/IPoint.md#reset)

#### Defined in

[leafer/packages/math/src/Point.ts:91](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/math/src/Point.ts#L91)
