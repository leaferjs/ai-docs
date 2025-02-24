# Interface: IEventer

## Hierarchy

- [`ILeafEventer`](ILeafEventer.md)

  ↳ **`IEventer`**

  ↳↳ [`IAnimate`](IAnimate.md)

  ↳↳ [`ILeaf`](ILeaf.md)

  ↳↳ [`IEventTarget`](IEventTarget.md)

## Implemented by

- [`Eventer`](../classes/Eventer.md)

## Table of contents

### Properties

- [innerId](IEventer.md#innerid)
- [\_\_captureMap](IEventer.md#__capturemap)
- [\_\_bubbleMap](IEventer.md#__bubblemap)
- [syncEventer](IEventer.md#synceventer)
- [event](IEventer.md#event)

### Methods

- [destroyEventer](IEventer.md#destroyeventer)
- [on](IEventer.md#on)
- [off](IEventer.md#off)
- [on\_](IEventer.md#on_)
- [off\_](IEventer.md#off_)
- [once](IEventer.md#once)
- [emit](IEventer.md#emit)
- [emitEvent](IEventer.md#emitevent)
- [hasEvent](IEventer.md#hasevent)
- [destroy](IEventer.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L41)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](IEventer.md)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L42)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L43)

## Methods

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafEventer](ILeafEventer.md).[destroyEventer](ILeafEventer.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventMap`](IEventMap.md) |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Overrides

[ILeafEventer](ILeafEventer.md).[on](ILeafEventer.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L45)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Overrides

[ILeafEventer](ILeafEventer.md).[off](ILeafEventer.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L46)

___

### on\_

▸ **on_**(`type`, `listener`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Overrides

[ILeafEventer](ILeafEventer.md).[on_](ILeafEventer.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L47)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](IEventListenerId.md) \| [`IEventListenerId`](IEventListenerId.md)[] |

#### Returns

`void`

#### Overrides

[ILeafEventer](ILeafEventer.md).[off_](ILeafEventer.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L48)

___

### once

▸ **once**(`type`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Overrides

[ILeafEventer](ILeafEventer.md).[once](ILeafEventer.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L49)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](IObject.md) \| [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Overrides

[ILeafEventer](ILeafEventer.md).[emit](ILeafEventer.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L50)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Overrides

[ILeafEventer](ILeafEventer.md).[emitEvent](ILeafEventer.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L51)

___

### hasEvent

▸ **hasEvent**(`type`, `capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `capture?` | `boolean` |

#### Returns

`boolean`

#### Overrides

[ILeafEventer](ILeafEventer.md).[hasEvent](ILeafEventer.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L54)
