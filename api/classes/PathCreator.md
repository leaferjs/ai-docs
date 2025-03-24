# Class: PathCreator

## Implements

- [`IPathCreator`](../interfaces/IPathCreator.md)

## Table of contents

### Constructors

- [constructor](PathCreator.md#constructor)

### Properties

- [\_\_path](PathCreator.md#__path)

### Accessors

- [path](PathCreator.md#path)

### Methods

- [set](PathCreator.md#set)
- [beginPath](PathCreator.md#beginpath)
- [moveTo](PathCreator.md#moveto)
- [lineTo](PathCreator.md#lineto)
- [bezierCurveTo](PathCreator.md#beziercurveto)
- [quadraticCurveTo](PathCreator.md#quadraticcurveto)
- [closePath](PathCreator.md#closepath)
- [rect](PathCreator.md#rect)
- [roundRect](PathCreator.md#roundrect)
- [ellipse](PathCreator.md#ellipse)
- [arc](PathCreator.md#arc)
- [arcTo](PathCreator.md#arcto)
- [drawEllipse](PathCreator.md#drawellipse)
- [drawArc](PathCreator.md#drawarc)
- [drawPoints](PathCreator.md#drawpoints)
- [clearPath](PathCreator.md#clearpath)
- [paint](PathCreator.md#paint)

## Constructors

### constructor

• **new PathCreator**(`path?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Defined in

[leafer/packages/path/src/PathCreator.ts:15](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L15)

## Properties

### \_\_path

• **\_\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[__path](../interfaces/IPathCreator.md#__path)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:13](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L13)

## Accessors

### path

• `get` **path**(): [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Returns

[`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[path](../interfaces/IPathCreator.md#path)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:11](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L11)

• `set` **path**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

`void`

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[path](../interfaces/IPathCreator.md#path)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:10](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L10)

## Methods

### set

▸ **set**(`path?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

[`PathCreator`](PathCreator.md)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:19](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L19)

___

### beginPath

▸ **beginPath**(): [`PathCreator`](PathCreator.md)

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[beginPath](../interfaces/IPathCreator.md#beginpath)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:28](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L28)

___

### moveTo

▸ **moveTo**(`x`, `y`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[moveTo](../interfaces/IPathCreator.md#moveto)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:36](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L36)

___

### lineTo

▸ **lineTo**(`x`, `y`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[lineTo](../interfaces/IPathCreator.md#lineto)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:42](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L42)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[bezierCurveTo](../interfaces/IPathCreator.md#beziercurveto)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:48](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L48)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[quadraticCurveTo](../interfaces/IPathCreator.md#quadraticcurveto)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:54](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L54)

___

### closePath

▸ **closePath**(): [`PathCreator`](PathCreator.md)

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[closePath](../interfaces/IPathCreator.md#closepath)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:60](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L60)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[rect](../interfaces/IPathCreator.md#rect)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:68](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L68)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `cornerRadius`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `cornerRadius` | `number` \| `number`[] |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[roundRect](../interfaces/IPathCreator.md#roundrect)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:74](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L74)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation?`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[ellipse](../interfaces/IPathCreator.md#ellipse)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:80](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L80)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[arc](../interfaces/IPathCreator.md#arc)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:86](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L86)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[arcTo](../interfaces/IPathCreator.md#arcto)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:92](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L92)

___

### drawEllipse

▸ **drawEllipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation?`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[drawEllipse](../interfaces/IPathCreator.md#drawellipse)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:100](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L100)

___

### drawArc

▸ **drawArc**(`x`, `y`, `radius`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[drawArc](../interfaces/IPathCreator.md#drawarc)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:106](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L106)

___

### drawPoints

▸ **drawPoints**(`points`, `curve?`, `close?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number`[] \| [`IPointData`](../interfaces/IPointData.md)[] |
| `curve?` | `number` \| `boolean` |
| `close?` | `boolean` |

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[drawPoints](../interfaces/IPathCreator.md#drawpoints)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:112](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L112)

___

### clearPath

▸ **clearPath**(): [`PathCreator`](PathCreator.md)

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[clearPath](../interfaces/IPathCreator.md#clearpath)

#### Defined in

[leafer/packages/path/src/PathCreator.ts:118](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L118)

___

### paint

▸ **paint**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/path/src/PathCreator.ts:122](https://github.com/leaferjs/leafer/blob/a165a56/packages/path/src/PathCreator.ts#L122)
