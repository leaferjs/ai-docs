# Interface: IAutoBounds

## Hierarchy

- [`IAutoBoundsData`](IAutoBoundsData.md)

  ↳ **`IAutoBounds`**

## Implemented by

- [`AutoBounds`](../classes/AutoBounds.md)

## Table of contents

### Properties

- [top](IAutoBounds.md#top)
- [right](IAutoBounds.md#right)
- [bottom](IAutoBounds.md#bottom)
- [left](IAutoBounds.md#left)
- [width](IAutoBounds.md#width)
- [height](IAutoBounds.md#height)

### Methods

- [set](IAutoBounds.md#set)
- [copy](IAutoBounds.md#copy)
- [getBoundsFrom](IAutoBounds.md#getboundsfrom)

## Properties

### top

• `Optional` **top**: `number`

#### Inherited from

[IAutoBoundsData](IAutoBoundsData.md).[top](IAutoBoundsData.md#top)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:135](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L135)

___

### right

• `Optional` **right**: `number`

#### Inherited from

[IAutoBoundsData](IAutoBoundsData.md).[right](IAutoBoundsData.md#right)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:136](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L136)

___

### bottom

• `Optional` **bottom**: `number`

#### Inherited from

[IAutoBoundsData](IAutoBoundsData.md).[bottom](IAutoBoundsData.md#bottom)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:137](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L137)

___

### left

• `Optional` **left**: `number`

#### Inherited from

[IAutoBoundsData](IAutoBoundsData.md).[left](IAutoBoundsData.md#left)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:138](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L138)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IAutoBoundsData](IAutoBoundsData.md).[width](IAutoBoundsData.md#width)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:143](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L143)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IAutoBoundsData](IAutoBoundsData.md).[height](IAutoBoundsData.md#height)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:144](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L144)

## Methods

### set

▸ **set**(`top?`, `right?`, `bottom?`, `left?`, `width?`, `height?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `top?` | `number` |
| `right?` | `number` |
| `bottom?` | `number` |
| `left?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:149](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L149)

___

### copy

▸ **copy**(`auto`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `auto` | [`IAutoBoundsData`](IAutoBoundsData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:150](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L150)

___

### getBoundsFrom

▸ **getBoundsFrom**(`parent`): [`IBounds`](IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ISizeData`](ISizeData.md) |

#### Returns

[`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/math/IMath.ts:151](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/math/IMath.ts#L151)
