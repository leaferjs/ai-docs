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

• **new PathCreator**(`path?`): [`PathCreator`](PathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

[`PathCreator`](PathCreator.md)

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:17](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L17)

## Properties

### \_\_path

• **\_\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[__path](../interfaces/IPathCreator.md#__path)

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:15](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L15)

## Accessors

### path

• `get` **path**(): [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Returns

[`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[path](../interfaces/IPathCreator.md#path)

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:13](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L13)

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

[src/leafer/packages/path/src/PathCreator.ts:12](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L12)

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

[src/leafer/packages/path/src/PathCreator.ts:21](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L21)

___

### beginPath

▸ **beginPath**(): [`PathCreator`](PathCreator.md)

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[beginPath](../interfaces/IPathCreator.md#beginpath)

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:30](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L30)

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

[src/leafer/packages/path/src/PathCreator.ts:38](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L38)

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

[src/leafer/packages/path/src/PathCreator.ts:44](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L44)

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

[src/leafer/packages/path/src/PathCreator.ts:50](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L50)

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

[src/leafer/packages/path/src/PathCreator.ts:56](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L56)

___

### closePath

▸ **closePath**(): [`PathCreator`](PathCreator.md)

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[closePath](../interfaces/IPathCreator.md#closepath)

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:62](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L62)

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

[src/leafer/packages/path/src/PathCreator.ts:70](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L70)

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

[src/leafer/packages/path/src/PathCreator.ts:76](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L76)

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

[src/leafer/packages/path/src/PathCreator.ts:82](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L82)

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

[src/leafer/packages/path/src/PathCreator.ts:88](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L88)

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

[src/leafer/packages/path/src/PathCreator.ts:94](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L94)

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

[src/leafer/packages/path/src/PathCreator.ts:102](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L102)

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

[src/leafer/packages/path/src/PathCreator.ts:108](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L108)

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

[src/leafer/packages/path/src/PathCreator.ts:114](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L114)

___

### clearPath

▸ **clearPath**(): [`PathCreator`](PathCreator.md)

#### Returns

[`PathCreator`](PathCreator.md)

#### Implementation of

[IPathCreator](../interfaces/IPathCreator.md).[clearPath](../interfaces/IPathCreator.md#clearpath)

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:120](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L120)

___

### paint

▸ **paint**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/path/src/PathCreator.ts:124](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/path/src/PathCreator.ts#L124)
