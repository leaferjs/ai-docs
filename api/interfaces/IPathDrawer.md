# Interface: IPathDrawer

## Hierarchy

- **`IPathDrawer`**

  ↳ [`ILeaferCanvas`](ILeaferCanvas.md)

  ↳ [`IPathCreator`](IPathCreator.md)

## Table of contents

### Methods

- [beginPath](IPathDrawer.md#beginpath)
- [moveTo](IPathDrawer.md#moveto)
- [lineTo](IPathDrawer.md#lineto)
- [bezierCurveTo](IPathDrawer.md#beziercurveto)
- [quadraticCurveTo](IPathDrawer.md#quadraticcurveto)
- [closePath](IPathDrawer.md#closepath)
- [arc](IPathDrawer.md#arc)
- [arcTo](IPathDrawer.md#arcto)
- [ellipse](IPathDrawer.md#ellipse)
- [rect](IPathDrawer.md#rect)
- [roundRect](IPathDrawer.md#roundrect)

## Methods

### beginPath

▸ `Optional` **beginPath**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:3](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L3)

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:5](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L5)

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:6](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L6)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): `void`

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

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:7](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L7)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:8](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L8)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L9)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:11](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L11)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:12](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L12)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L13)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L15)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `radius?` | `number` \| `number`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:16](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/path/IPathDrawer.ts#L16)
