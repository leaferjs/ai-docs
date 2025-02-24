# Interface: ILayoutBlockData

## Table of contents

### Properties

- [updatedList](ILayoutBlockData.md#updatedlist)
- [updatedBounds](ILayoutBlockData.md#updatedbounds)
- [beforeBounds](ILayoutBlockData.md#beforebounds)
- [afterBounds](ILayoutBlockData.md#afterbounds)

### Methods

- [setBefore](ILayoutBlockData.md#setbefore)
- [setAfter](ILayoutBlockData.md#setafter)
- [merge](ILayoutBlockData.md#merge)
- [destroy](ILayoutBlockData.md#destroy)

## Properties

### updatedList

• **updatedList**: [`ILeafList`](ILeafList.md)

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L13)

___

### updatedBounds

• **updatedBounds**: [`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L14)

___

### beforeBounds

• **beforeBounds**: [`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L16)

___

### afterBounds

• **afterBounds**: [`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:17](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L17)

## Methods

### setBefore

▸ `Optional` **setBefore**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:19](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L19)

___

### setAfter

▸ `Optional` **setAfter**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:20](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L20)

___

### merge

▸ `Optional` **merge**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILayoutBlockData`](ILayoutBlockData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:21](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L21)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layouter/ILayouter.ts:22](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/layouter/ILayouter.ts#L22)
