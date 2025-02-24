# Class: Bounds

## Implements

- [`IBounds`](../interfaces/IBounds.md)

## Table of contents

### Constructors

- [constructor](Bounds.md#constructor)

### Properties

- [x](Bounds.md#x)
- [y](Bounds.md#y)
- [width](Bounds.md#width)
- [height](Bounds.md#height)

### Accessors

- [minX](Bounds.md#minx)
- [minY](Bounds.md#miny)
- [maxX](Bounds.md#maxx)
- [maxY](Bounds.md#maxy)

### Methods

- [set](Bounds.md#set)
- [get](Bounds.md#get)
- [clone](Bounds.md#clone)
- [move](Bounds.md#move)
- [scale](Bounds.md#scale)
- [scaleOf](Bounds.md#scaleof)
- [toOuterOf](Bounds.md#toouterof)
- [toInnerOf](Bounds.md#toinnerof)
- [getFitMatrix](Bounds.md#getfitmatrix)
- [spread](Bounds.md#spread)
- [shrink](Bounds.md#shrink)
- [ceil](Bounds.md#ceil)
- [unsign](Bounds.md#unsign)
- [float](Bounds.md#float)
- [add](Bounds.md#add)
- [addList](Bounds.md#addlist)
- [setList](Bounds.md#setlist)
- [addListWithFn](Bounds.md#addlistwithfn)
- [setListWithFn](Bounds.md#setlistwithfn)
- [setPoint](Bounds.md#setpoint)
- [setPoints](Bounds.md#setpoints)
- [addPoint](Bounds.md#addpoint)
- [getPoints](Bounds.md#getpoints)
- [hitPoint](Bounds.md#hitpoint)
- [hitRadiusPoint](Bounds.md#hitradiuspoint)
- [hit](Bounds.md#hit)
- [includes](Bounds.md#includes)
- [intersect](Bounds.md#intersect)
- [getIntersect](Bounds.md#getintersect)
- [isSame](Bounds.md#issame)
- [isEmpty](Bounds.md#isempty)
- [reset](Bounds.md#reset)

## Constructors

### constructor

• **new Bounds**(`x?`, `y?`, `width?`, `height?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| [`IBoundsData`](../interfaces/IBoundsData.md) |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Defined in

[leafer/packages/math/src/Bounds.ts:17](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L17)

## Properties

### x

• **x**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[x](../interfaces/IBounds.md#x)

#### Defined in

[leafer/packages/math/src/Bounds.ts:7](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L7)

___

### y

• **y**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[y](../interfaces/IBounds.md#y)

#### Defined in

[leafer/packages/math/src/Bounds.ts:8](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L8)

___

### width

• **width**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[width](../interfaces/IBounds.md#width)

#### Defined in

[leafer/packages/math/src/Bounds.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L9)

___

### height

• **height**: `number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[height](../interfaces/IBounds.md#height)

#### Defined in

[leafer/packages/math/src/Bounds.ts:10](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L10)

## Accessors

### minX

• `get` **minX**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[minX](../interfaces/IBounds.md#minx)

#### Defined in

[leafer/packages/math/src/Bounds.ts:12](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L12)

___

### minY

• `get` **minY**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[minY](../interfaces/IBounds.md#miny)

#### Defined in

[leafer/packages/math/src/Bounds.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L13)

___

### maxX

• `get` **maxX**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[maxX](../interfaces/IBounds.md#maxx)

#### Defined in

[leafer/packages/math/src/Bounds.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L14)

___

### maxY

• `get` **maxY**(): `number`

#### Returns

`number`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[maxY](../interfaces/IBounds.md#maxy)

#### Defined in

[leafer/packages/math/src/Bounds.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L15)

## Methods

### set

▸ **set**(`x?`, `y?`, `width?`, `height?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| [`IBoundsData`](../interfaces/IBoundsData.md) |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[set](../interfaces/IBounds.md#set)

#### Defined in

[leafer/packages/math/src/Bounds.ts:21](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L21)

___

### get

▸ **get**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[get](../interfaces/IBounds.md#get)

#### Defined in

[leafer/packages/math/src/Bounds.ts:26](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L26)

___

### clone

▸ **clone**(): [`IBounds`](../interfaces/IBounds.md)

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[clone](../interfaces/IBounds.md#clone)

#### Defined in

[leafer/packages/math/src/Bounds.ts:31](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L31)

___

### move

▸ **move**(`x`, `y`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[move](../interfaces/IBounds.md#move)

#### Defined in

[leafer/packages/math/src/Bounds.ts:36](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L36)

___

### scale

▸ **scale**(`scaleX`, `scaleY?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[scale](../interfaces/IBounds.md#scale)

#### Defined in

[leafer/packages/math/src/Bounds.ts:41](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L41)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[scaleOf](../interfaces/IBounds.md#scaleof)

#### Defined in

[leafer/packages/math/src/Bounds.ts:46](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L46)

___

### toOuterOf

▸ **toOuterOf**(`matrix`, `to?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[toOuterOf](../interfaces/IBounds.md#toouterof)

#### Defined in

[leafer/packages/math/src/Bounds.ts:51](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L51)

___

### toInnerOf

▸ **toInnerOf**(`matrix`, `to?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `to?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[toInnerOf](../interfaces/IBounds.md#toinnerof)

#### Defined in

[leafer/packages/math/src/Bounds.ts:56](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L56)

___

### getFitMatrix

▸ **getFitMatrix**(`put`, `baseScale?`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `put` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `baseScale?` | `number` |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getFitMatrix](../interfaces/IBounds.md#getfitmatrix)

#### Defined in

[leafer/packages/math/src/Bounds.ts:61](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L61)

___

### spread

▸ **spread**(`fourNumber`, `side?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fourNumber` | [`IFourNumber`](../modules.md#ifournumber) |
| `side?` | [`ISide`](../modules.md#iside) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[spread](../interfaces/IBounds.md#spread)

#### Defined in

[leafer/packages/math/src/Bounds.ts:65](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L65)

___

### shrink

▸ **shrink**(`fourNumber`, `side?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fourNumber` | [`IFourNumber`](../modules.md#ifournumber) |
| `side?` | [`ISide`](../modules.md#iside) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[shrink](../interfaces/IBounds.md#shrink)

#### Defined in

[leafer/packages/math/src/Bounds.ts:70](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L70)

___

### ceil

▸ **ceil**(): [`IBounds`](../interfaces/IBounds.md)

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[ceil](../interfaces/IBounds.md#ceil)

#### Defined in

[leafer/packages/math/src/Bounds.ts:75](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L75)

___

### unsign

▸ **unsign**(): [`IBounds`](../interfaces/IBounds.md)

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[unsign](../interfaces/IBounds.md#unsign)

#### Defined in

[leafer/packages/math/src/Bounds.ts:80](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L80)

___

### float

▸ **float**(`maxLength?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLength?` | `number` |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[float](../interfaces/IBounds.md#float)

#### Defined in

[leafer/packages/math/src/Bounds.ts:85](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L85)

___

### add

▸ **add**(`bounds`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[add](../interfaces/IBounds.md#add)

#### Defined in

[leafer/packages/math/src/Bounds.ts:91](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L91)

___

### addList

▸ **addList**(`boundsList`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundsList` | [`IBoundsData`](../interfaces/IBoundsData.md)[] |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[addList](../interfaces/IBounds.md#addlist)

#### Defined in

[leafer/packages/math/src/Bounds.ts:96](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L96)

___

### setList

▸ **setList**(`boundsList`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundsList` | [`IBoundsData`](../interfaces/IBoundsData.md)[] |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setList](../interfaces/IBounds.md#setlist)

#### Defined in

[leafer/packages/math/src/Bounds.ts:101](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L101)

___

### addListWithFn

▸ **addListWithFn**(`list`, `boundsDataFn`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IObject`](../interfaces/IObject.md)[] |
| `boundsDataFn` | [`IBoundsDataFn`](../interfaces/IBoundsDataFn.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[addListWithFn](../interfaces/IBounds.md#addlistwithfn)

#### Defined in

[leafer/packages/math/src/Bounds.ts:106](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L106)

___

### setListWithFn

▸ **setListWithFn**(`list`, `boundsDataFn`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IObject`](../interfaces/IObject.md)[] |
| `boundsDataFn` | [`IBoundsDataFn`](../interfaces/IBoundsDataFn.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setListWithFn](../interfaces/IBounds.md#setlistwithfn)

#### Defined in

[leafer/packages/math/src/Bounds.ts:111](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L111)

___

### setPoint

▸ **setPoint**(`point`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setPoint](../interfaces/IBounds.md#setpoint)

#### Defined in

[leafer/packages/math/src/Bounds.ts:117](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L117)

___

### setPoints

▸ **setPoints**(`points`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`IPointData`](../interfaces/IPointData.md)[] |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[setPoints](../interfaces/IBounds.md#setpoints)

#### Defined in

[leafer/packages/math/src/Bounds.ts:122](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L122)

___

### addPoint

▸ **addPoint**(`point`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[addPoint](../interfaces/IBounds.md#addpoint)

#### Defined in

[leafer/packages/math/src/Bounds.ts:127](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L127)

___

### getPoints

▸ **getPoints**(): [`IPointData`](../interfaces/IPointData.md)[]

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getPoints](../interfaces/IBounds.md#getpoints)

#### Defined in

[leafer/packages/math/src/Bounds.ts:132](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L132)

___

### hitPoint

▸ **hitPoint**(`point`, `pointMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](../interfaces/IPointData.md) |
| `pointMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[hitPoint](../interfaces/IBounds.md#hitpoint)

#### Defined in

[leafer/packages/math/src/Bounds.ts:138](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L138)

___

### hitRadiusPoint

▸ **hitRadiusPoint**(`point`, `pointMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `pointMatrix?` | [`IMatrixWithLayoutData`](../interfaces/IMatrixWithLayoutData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[hitRadiusPoint](../interfaces/IBounds.md#hitradiuspoint)

#### Defined in

[leafer/packages/math/src/Bounds.ts:142](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L142)

___

### hit

▸ **hit**(`bounds`, `boundsMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[hit](../interfaces/IBounds.md#hit)

#### Defined in

[leafer/packages/math/src/Bounds.ts:146](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L146)

___

### includes

▸ **includes**(`bounds`, `boundsMatrix?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[includes](../interfaces/IBounds.md#includes)

#### Defined in

[leafer/packages/math/src/Bounds.ts:150](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L150)

___

### intersect

▸ **intersect**(`bounds`, `boundsMatrix?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[intersect](../interfaces/IBounds.md#intersect)

#### Defined in

[leafer/packages/math/src/Bounds.ts:155](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L155)

___

### getIntersect

▸ **getIntersect**(`bounds`, `boundsMatrix?`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `boundsMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IBounds](../interfaces/IBounds.md).[getIntersect](../interfaces/IBounds.md#getintersect)

#### Defined in

[leafer/packages/math/src/Bounds.ts:160](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L160)

___

### isSame

▸ **isSame**(`bounds`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[isSame](../interfaces/IBounds.md#issame)

#### Defined in

[leafer/packages/math/src/Bounds.ts:165](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L165)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[isEmpty](../interfaces/IBounds.md#isempty)

#### Defined in

[leafer/packages/math/src/Bounds.ts:169](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L169)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[IBounds](../interfaces/IBounds.md).[reset](../interfaces/IBounds.md#reset)

#### Defined in

[leafer/packages/math/src/Bounds.ts:173](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/Bounds.ts#L173)
