# Class: Layouter

## Implements

- [`ILayouter`](../interfaces/ILayouter.md)

## Table of contents

### Constructors

- [constructor](Layouter.md#constructor)

### Properties

- [target](Layouter.md#target)
- [layoutedBlocks](Layouter.md#layoutedblocks)
- [extraBlock](Layouter.md#extrablock)
- [totalTimes](Layouter.md#totaltimes)
- [times](Layouter.md#times)
- [disabled](Layouter.md#disabled)
- [running](Layouter.md#running)
- [layouting](Layouter.md#layouting)
- [waitAgain](Layouter.md#waitagain)
- [config](Layouter.md#config)
- [\_\_updatedList](Layouter.md#__updatedlist)
- [\_\_levelList](Layouter.md#__levellist)
- [\_\_eventIds](Layouter.md#__eventids)

### Methods

- [start](Layouter.md#start)
- [stop](Layouter.md#stop)
- [disable](Layouter.md#disable)
- [layout](Layouter.md#layout)
- [layoutAgain](Layouter.md#layoutagain)
- [layoutOnce](Layouter.md#layoutonce)
- [partLayout](Layouter.md#partlayout)
- [fullLayout](Layouter.md#fulllayout)
- [fullLayout](Layouter.md#fulllayout-1)
- [addExtra](Layouter.md#addextra)
- [createBlock](Layouter.md#createblock)
- [getBlocks](Layouter.md#getblocks)
- [addBlocks](Layouter.md#addblocks)
- [\_\_onReceiveWatchData](Layouter.md#__onreceivewatchdata)
- [\_\_listenEvents](Layouter.md#__listenevents)
- [\_\_removeListenEvents](Layouter.md#__removelistenevents)
- [destroy](Layouter.md#destroy)

## Constructors

### constructor

• **new Layouter**(`target`, `userConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `userConfig?` | [`ILayouterConfig`](../interfaces/ILayouterConfig.md) |

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:33](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L33)

## Properties

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[target](../interfaces/ILayouter.md#target)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:14](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L14)

___

### layoutedBlocks

• **layoutedBlocks**: [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)[]

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[layoutedBlocks](../interfaces/ILayouter.md#layoutedblocks)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L15)

___

### extraBlock

• **extraBlock**: [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[extraBlock](../interfaces/ILayouter.md#extrablock)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:16](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L16)

___

### totalTimes

• **totalTimes**: `number` = `0`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[totalTimes](../interfaces/ILayouter.md#totaltimes)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L18)

___

### times

• **times**: `number`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[times](../interfaces/ILayouter.md#times)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:19](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L19)

___

### disabled

• **disabled**: `boolean`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[disabled](../interfaces/ILayouter.md#disabled)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:21](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L21)

___

### running

• **running**: `boolean`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[running](../interfaces/ILayouter.md#running)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:22](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L22)

___

### layouting

• **layouting**: `boolean`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[layouting](../interfaces/ILayouter.md#layouting)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:23](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L23)

___

### waitAgain

• **waitAgain**: `boolean`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[waitAgain](../interfaces/ILayouter.md#waitagain)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:25](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L25)

___

### config

• **config**: [`ILayouterConfig`](../interfaces/ILayouterConfig.md) = `{}`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[config](../interfaces/ILayouter.md#config)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:27](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L27)

___

### \_\_updatedList

• `Protected` **\_\_updatedList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:29](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L29)

___

### \_\_levelList

• `Protected` **\_\_levelList**: [`LeafLevelList`](LeafLevelList.md)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:30](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L30)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:31](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L31)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[start](../interfaces/ILayouter.md#start)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:39](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L39)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[stop](../interfaces/ILayouter.md#stop)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:44](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L44)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[disable](../interfaces/ILayouter.md#disable)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:48](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L48)

___

### layout

▸ **layout**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[layout](../interfaces/ILayouter.md#layout)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:54](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L54)

___

### layoutAgain

▸ **layoutAgain**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[layoutAgain](../interfaces/ILayouter.md#layoutagain)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:70](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L70)

___

### layoutOnce

▸ **layoutOnce**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[layoutOnce](../interfaces/ILayouter.md#layoutonce)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:78](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L78)

___

### partLayout

▸ **partLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[partLayout](../interfaces/ILayouter.md#partlayout)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:103](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L103)

___

### fullLayout

▸ **fullLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[fullLayout](../interfaces/ILayouter.md#fulllayout)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:133](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L133)

___

### fullLayout

▸ `Static` **fullLayout**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:153](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L153)

___

### addExtra

▸ **addExtra**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[addExtra](../interfaces/ILayouter.md#addextra)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:165](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L165)

___

### createBlock

▸ **createBlock**(`data`): [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

[`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[createBlock](../interfaces/ILayouter.md#createblock)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:173](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L173)

___

### getBlocks

▸ **getBlocks**(`list`): [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

[`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)[]

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[getBlocks](../interfaces/ILayouter.md#getblocks)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:177](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L177)

___

### addBlocks

▸ **addBlocks**(`current`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`ILayoutBlockData`](../interfaces/ILayoutBlockData.md)[] |

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[addBlocks](../interfaces/ILayouter.md#addblocks)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:181](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L181)

___

### \_\_onReceiveWatchData

▸ `Protected` **__onReceiveWatchData**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`WatchEvent`](WatchEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:185](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L185)

___

### \_\_listenEvents

▸ `Protected` **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:189](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L189)

___

### \_\_removeListenEvents

▸ `Protected` **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:198](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L198)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILayouter](../interfaces/ILayouter.md).[destroy](../interfaces/ILayouter.md#destroy)

#### Defined in

[leafer/packages/partner/layouter/src/Layouter.ts:202](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/layouter/src/Layouter.ts#L202)
