# Class: LeafList

## Implements

- [`ILeafList`](../interfaces/ILeafList.md)

## Table of contents

### Constructors

- [constructor](LeafList.md#constructor)

### Properties

- [list](LeafList.md#list)
- [keys](LeafList.md#keys)

### Accessors

- [length](LeafList.md#length)

### Methods

- [has](LeafList.md#has)
- [indexAt](LeafList.md#indexat)
- [indexOf](LeafList.md#indexof)
- [add](LeafList.md#add)
- [addAt](LeafList.md#addat)
- [addList](LeafList.md#addlist)
- [remove](LeafList.md#remove)
- [sort](LeafList.md#sort)
- [forEach](LeafList.md#foreach)
- [clone](LeafList.md#clone)
- [update](LeafList.md#update)
- [reset](LeafList.md#reset)
- [destroy](LeafList.md#destroy)

## Constructors

### constructor

• **new LeafList**(`item?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Defined in

[leafer/packages/list/src/LeafList.ts:10](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L10)

## Properties

### list

• **list**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[list](../interfaces/ILeafList.md#list)

#### Defined in

[leafer/packages/list/src/LeafList.ts:5](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L5)

___

### keys

• **keys**: [`INumberMap`](../interfaces/INumberMap.md)

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[keys](../interfaces/ILeafList.md#keys)

#### Defined in

[leafer/packages/list/src/LeafList.ts:6](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L6)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[length](../interfaces/ILeafList.md#length)

#### Defined in

[leafer/packages/list/src/LeafList.ts:8](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L8)

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

[ILeafList](../interfaces/ILeafList.md).[has](../interfaces/ILeafList.md#has)

#### Defined in

[leafer/packages/list/src/LeafList.ts:15](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L15)

___

### indexAt

▸ **indexAt**(`index`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[indexAt](../interfaces/ILeafList.md#indexat)

#### Defined in

[leafer/packages/list/src/LeafList.ts:19](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L19)

___

### indexOf

▸ **indexOf**(`leaf`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`number`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[indexOf](../interfaces/ILeafList.md#indexof)

#### Defined in

[leafer/packages/list/src/LeafList.ts:23](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L23)

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

[ILeafList](../interfaces/ILeafList.md).[add](../interfaces/ILeafList.md#add)

#### Defined in

[leafer/packages/list/src/LeafList.ts:29](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L29)

___

### addAt

▸ **addAt**(`leaf`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[addAt](../interfaces/ILeafList.md#addat)

#### Defined in

[leafer/packages/list/src/LeafList.ts:37](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L37)

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

[ILeafList](../interfaces/ILeafList.md).[addList](../interfaces/ILeafList.md#addlist)

#### Defined in

[leafer/packages/list/src/LeafList.ts:52](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L52)

___

### remove

▸ **remove**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[remove](../interfaces/ILeafList.md#remove)

#### Defined in

[leafer/packages/list/src/LeafList.ts:57](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L57)

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

[ILeafList](../interfaces/ILeafList.md).[sort](../interfaces/ILeafList.md#sort)

#### Defined in

[leafer/packages/list/src/LeafList.ts:73](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L73)

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

[ILeafList](../interfaces/ILeafList.md).[forEach](../interfaces/ILeafList.md#foreach)

#### Defined in

[leafer/packages/list/src/LeafList.ts:82](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L82)

___

### clone

▸ **clone**(): [`ILeafList`](../interfaces/ILeafList.md)

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[clone](../interfaces/ILeafList.md#clone)

#### Defined in

[leafer/packages/list/src/LeafList.ts:86](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L86)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[update](../interfaces/ILeafList.md#update)

#### Defined in

[leafer/packages/list/src/LeafList.ts:94](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L94)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[reset](../interfaces/ILeafList.md#reset)

#### Defined in

[leafer/packages/list/src/LeafList.ts:100](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L100)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafList](../interfaces/ILeafList.md).[destroy](../interfaces/ILeafList.md#destroy)

#### Defined in

[leafer/packages/list/src/LeafList.ts:105](https://github.com/leaferjs/leafer/blob/8db572e/packages/list/src/LeafList.ts#L105)
