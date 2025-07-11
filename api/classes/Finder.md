# Class: Finder

## Implements

- [`IFinder`](../interfaces/IFinder.md)

## Table of contents

### Constructors

- [constructor](Finder.md#constructor)

### Properties

- [target](Finder.md#target)
- [innerIdMap](Finder.md#inneridmap)
- [idMap](Finder.md#idmap)
- [findLeaf](Finder.md#findleaf)
- [methods](Finder.md#methods)
- [\_\_eventIds](Finder.md#__eventids)

### Methods

- [getBy](Finder.md#getby)
- [getByInnerId](Finder.md#getbyinnerid)
- [getById](Finder.md#getbyid)
- [getByClassName](Finder.md#getbyclassname)
- [getByTag](Finder.md#getbytag)
- [getByMethod](Finder.md#getbymethod)
- [eachFind](Finder.md#eachfind)
- [toChildren](Finder.md#tochildren)
- [\_\_onRemoveChild](Finder.md#__onremovechild)
- [\_\_checkIdChange](Finder.md#__checkidchange)
- [\_\_listenEvents](Finder.md#__listenevents)
- [\_\_removeListenEvents](Finder.md#__removelistenevents)
- [destroy](Finder.md#destroy)

## Constructors

### constructor

• **new Finder**(`target`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Defined in

[in/packages/find/src/Finder.ts:28](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L28)

## Properties

### target

• `Optional` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Defined in

[in/packages/find/src/Finder.ts:10](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L10)

___

### innerIdMap

• `Protected` **innerIdMap**: [`ILeafMap`](../interfaces/ILeafMap.md) = `{}`

#### Defined in

[in/packages/find/src/Finder.ts:12](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L12)

___

### idMap

• `Protected` **idMap**: [`ILeafMap`](../interfaces/ILeafMap.md) = `{}`

#### Defined in

[in/packages/find/src/Finder.ts:13](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L13)

___

### findLeaf

• `Protected` **findLeaf**: [`ILeaf`](../interfaces/ILeaf.md)

#### Defined in

[in/packages/find/src/Finder.ts:15](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L15)

___

### methods

• `Protected` **methods**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | (`leaf`: [`ILeaf`](../interfaces/ILeaf.md), `name`: `string`) => ``0`` \| ``1`` |
| `innerId` | (`leaf`: [`ILeaf`](../interfaces/ILeaf.md), `innerId`: `number`) => ``0`` \| ``1`` |
| `className` | (`leaf`: [`ILeaf`](../interfaces/ILeaf.md), `name`: `string`) => ``0`` \| ``1`` |
| `tag` | (`leaf`: [`ILeaf`](../interfaces/ILeaf.md), `name`: `string`) => ``0`` \| ``1`` |
| `tags` | (`leaf`: [`ILeaf`](../interfaces/ILeaf.md), `nameMap`: [`IBooleanMap`](../interfaces/IBooleanMap.md)) => ``0`` \| ``1`` |

#### Defined in

[in/packages/find/src/Finder.ts:17](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L17)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[in/packages/find/src/Finder.ts:25](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L25)

## Methods

### getBy

▸ **getBy**(`condition`, `branch?`, `one?`, `options?`): [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `branch?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `one?` | `boolean` |
| `options?` | `any` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IFinder](../interfaces/IFinder.md).[getBy](../interfaces/IFinder.md#getby)

#### Defined in

[in/packages/find/src/Finder.ts:32](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L32)

___

### getByInnerId

▸ **getByInnerId**(`innerId`, `branch?`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `innerId` | `number` |
| `branch?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IFinder](../interfaces/IFinder.md).[getByInnerId](../interfaces/IFinder.md#getbyinnerid)

#### Defined in

[in/packages/find/src/Finder.ts:62](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L62)

___

### getById

▸ **getById**(`id`, `branch?`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `branch?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IFinder](../interfaces/IFinder.md).[getById](../interfaces/IFinder.md#getbyid)

#### Defined in

[in/packages/find/src/Finder.ts:69](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L69)

___

### getByClassName

▸ **getByClassName**(`className`, `branch?`): [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | `string` |
| `branch?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IFinder](../interfaces/IFinder.md).[getByClassName](../interfaces/IFinder.md#getbyclassname)

#### Defined in

[in/packages/find/src/Finder.ts:76](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L76)

___

### getByTag

▸ **getByTag**(`tag`, `branch?`): [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `branch?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IFinder](../interfaces/IFinder.md).[getByTag](../interfaces/IFinder.md#getbytag)

#### Defined in

[in/packages/find/src/Finder.ts:80](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L80)

___

### getByMethod

▸ **getByMethod**(`method`, `branch?`, `one?`, `options?`): [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`IFindMethod`](../interfaces/IFindMethod.md) |
| `branch?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `one?` | `boolean` |
| `options?` | `any` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IFinder](../interfaces/IFinder.md).[getByMethod](../interfaces/IFinder.md#getbymethod)

#### Defined in

[in/packages/find/src/Finder.ts:84](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L84)

___

### eachFind

▸ `Protected` **eachFind**(`children`, `method`, `list?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`ILeaf`](../interfaces/ILeaf.md)[] |
| `method` | [`IFindMethod`](../interfaces/IFindMethod.md) |
| `list?` | [`ILeaf`](../interfaces/ILeaf.md)[] |
| `options?` | `any` |

#### Returns

`void`

#### Defined in

[in/packages/find/src/Finder.ts:91](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L91)

___

### toChildren

▸ `Protected` **toChildren**(`branch`): [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `branch` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)[]

#### Defined in

[in/packages/find/src/Finder.ts:108](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L108)

___

### \_\_onRemoveChild

▸ `Protected` **__onRemoveChild**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ChildEvent`](ChildEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/find/src/Finder.ts:114](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L114)

___

### \_\_checkIdChange

▸ `Protected` **__checkIdChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`PropertyEvent`](PropertyEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/find/src/Finder.ts:120](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L120)

___

### \_\_listenEvents

▸ `Protected` **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/find/src/Finder.ts:128](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L128)

___

### \_\_removeListenEvents

▸ `Protected` **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/find/src/Finder.ts:135](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L135)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IFinder](../interfaces/IFinder.md).[destroy](../interfaces/IFinder.md#destroy)

#### Defined in

[in/packages/find/src/Finder.ts:140](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/find/src/Finder.ts#L140)
