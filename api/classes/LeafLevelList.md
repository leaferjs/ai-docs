# Class: LeafLevelList

## Implements

- [`ILeafLevelList`](../interfaces/ILeafLevelList.md)

## Table of contents

### Constructors

- [constructor](LeafLevelList.md#constructor)

### Properties

- [levelMap](LeafLevelList.md#levelmap)
- [keys](LeafLevelList.md#keys)
- [levels](LeafLevelList.md#levels)
- [\_length](LeafLevelList.md#_length)

### Accessors

- [length](LeafLevelList.md#length)

### Methods

- [has](LeafLevelList.md#has)
- [without](LeafLevelList.md#without)
- [sort](LeafLevelList.md#sort)
- [addList](LeafLevelList.md#addlist)
- [add](LeafLevelList.md#add)
- [forEach](LeafLevelList.md#foreach)
- [reset](LeafLevelList.md#reset)
- [destroy](LeafLevelList.md#destroy)

## Constructors

### constructor

• **new LeafLevelList**(`item?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:12](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L12)

## Properties

### levelMap

• **levelMap**: [`ILeafArrayMap`](../interfaces/ILeafArrayMap.md)

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[levelMap](../interfaces/ILeafLevelList.md#levelmap)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:5](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L5)

___

### keys

• **keys**: [`INumberMap`](../interfaces/INumberMap.md)

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[keys](../interfaces/ILeafLevelList.md#keys)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:6](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L6)

___

### levels

• **levels**: `number`[]

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[levels](../interfaces/ILeafLevelList.md#levels)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:7](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L7)

___

### \_length

• `Private` **\_length**: `number` = `0`

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:10](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L10)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[length](../interfaces/ILeafLevelList.md#length)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L9)

## Methods

### has

▸ **has**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[has](../interfaces/ILeafLevelList.md#has)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:17](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L17)

___

### without

▸ **without**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[without](../interfaces/ILeafLevelList.md#without)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:21](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L21)

___

### sort

▸ **sort**(`reverse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reverse?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[sort](../interfaces/ILeafLevelList.md#sort)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:25](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L25)

___

### addList

▸ **addList**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[addList](../interfaces/ILeafLevelList.md#addlist)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:34](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L34)

___

### add

▸ **add**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[add](../interfaces/ILeafLevelList.md#add)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:38](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L38)

___

### forEach

▸ **forEach**(`itemCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemCallback` | [`ILeafListItemCallback`](../modules.md#ileaflistitemcallback) |

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[forEach](../interfaces/ILeafLevelList.md#foreach)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:52](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L52)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[reset](../interfaces/ILeafLevelList.md#reset)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:62](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L62)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLevelList](../interfaces/ILeafLevelList.md).[destroy](../interfaces/ILeafLevelList.md#destroy)

#### Defined in

[leafer/packages/list/src/LeafLevelList.ts:69](https://github.com/leaferjs/leafer/blob/27e942d/packages/list/src/LeafLevelList.ts#L69)
