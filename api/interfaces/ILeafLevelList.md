# Interface: ILeafLevelList

## Implemented by

- [`LeafLevelList`](../classes/LeafLevelList.md)

## Table of contents

### Properties

- [levelMap](ILeafLevelList.md#levelmap)
- [keys](ILeafLevelList.md#keys)
- [levels](ILeafLevelList.md#levels)
- [length](ILeafLevelList.md#length)

### Methods

- [has](ILeafLevelList.md#has)
- [without](ILeafLevelList.md#without)
- [sort](ILeafLevelList.md#sort)
- [addList](ILeafLevelList.md#addlist)
- [add](ILeafLevelList.md#add)
- [forEach](ILeafLevelList.md#foreach)
- [reset](ILeafLevelList.md#reset)
- [destroy](ILeafLevelList.md#destroy)

## Properties

### levelMap

• **levelMap**: [`ILeafArrayMap`](ILeafArrayMap.md)

#### Defined in

[leafer/packages/interface/src/data/IList.ts:36](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L36)

___

### keys

• **keys**: [`INumberMap`](INumberMap.md)

#### Defined in

[leafer/packages/interface/src/data/IList.ts:37](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L37)

___

### levels

• **levels**: `number`[]

#### Defined in

[leafer/packages/interface/src/data/IList.ts:38](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L38)

___

### length

• `Readonly` **length**: `number`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:39](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L39)

## Methods

### has

▸ **has**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:40](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L40)

___

### without

▸ **without**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:41](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L41)

___

### sort

▸ **sort**(`reverse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reverse?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:42](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L42)

___

### addList

▸ **addList**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](ILeaf.md)[] |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:43](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L43)

___

### add

▸ **add**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:44](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L44)

___

### forEach

▸ **forEach**(`itemCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemCallback` | [`ILeafListItemCallback`](../modules.md#ileaflistitemcallback) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:45](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L45)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:46](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L46)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/IList.ts:47](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/IList.ts#L47)
