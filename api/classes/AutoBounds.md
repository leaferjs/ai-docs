# Class: AutoBounds

## Implements

- [`IAutoBounds`](../interfaces/IAutoBounds.md)

## Table of contents

### Constructors

- [constructor](AutoBounds.md#constructor)

### Properties

- [top](AutoBounds.md#top)
- [right](AutoBounds.md#right)
- [bottom](AutoBounds.md#bottom)
- [left](AutoBounds.md#left)
- [width](AutoBounds.md#width)
- [height](AutoBounds.md#height)

### Methods

- [set](AutoBounds.md#set)
- [copy](AutoBounds.md#copy)
- [getBoundsFrom](AutoBounds.md#getboundsfrom)

## Constructors

### constructor

• **new AutoBounds**(`top?`, `right?`, `bottom?`, `left?`, `width?`, `height?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `top?` | `number` \| [`IAutoBoundsData`](../interfaces/IAutoBoundsData.md) |
| `right?` | `number` |
| `bottom?` | `number` |
| `left?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L15)

## Properties

### top

• **top**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[top](../interfaces/IAutoBounds.md#top)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:7](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L7)

___

### right

• **right**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[right](../interfaces/IAutoBounds.md#right)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:8](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L8)

___

### bottom

• **bottom**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[bottom](../interfaces/IAutoBounds.md#bottom)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L9)

___

### left

• **left**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[left](../interfaces/IAutoBounds.md#left)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:10](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L10)

___

### width

• **width**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[width](../interfaces/IAutoBounds.md#width)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:12](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L12)

___

### height

• **height**: `number`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[height](../interfaces/IAutoBounds.md#height)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L13)

## Methods

### set

▸ **set**(`top?`, `right?`, `bottom?`, `left?`, `width?`, `height?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `top` | `number` | `0` |
| `right` | `number` | `0` |
| `bottom` | `number` | `0` |
| `left` | `number` | `0` |
| `width` | `number` | `0` |
| `height` | `number` | `0` |

#### Returns

`void`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[set](../interfaces/IAutoBounds.md#set)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:19](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L19)

___

### copy

▸ **copy**(`autoSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoSize` | [`IAutoBoundsData`](../interfaces/IAutoBoundsData.md) |

#### Returns

`void`

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[copy](../interfaces/IAutoBounds.md#copy)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:28](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L28)

___

### getBoundsFrom

▸ **getBoundsFrom**(`parent`): [`IBounds`](../interfaces/IBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

[`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IAutoBounds](../interfaces/IAutoBounds.md).[getBoundsFrom](../interfaces/IAutoBounds.md#getboundsfrom)

#### Defined in

[leafer/packages/math/src/AutoBounds.ts:33](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/math/src/AutoBounds.ts#L33)
