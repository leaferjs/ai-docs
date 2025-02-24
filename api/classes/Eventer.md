# Class: Eventer

## Hierarchy

- **`Eventer`**

  ↳ [`Animate`](Animate.md)

## Implements

- [`IEventer`](../interfaces/IEventer.md)

## Table of contents

### Constructors

- [constructor](Eventer.md#constructor)

### Properties

- [innerId](Eventer.md#innerid)
- [\_\_captureMap](Eventer.md#__capturemap)
- [\_\_bubbleMap](Eventer.md#__bubblemap)
- [syncEventer](Eventer.md#synceventer)

### Accessors

- [event](Eventer.md#event)

### Methods

- [on](Eventer.md#on)
- [off](Eventer.md#off)
- [on\_](Eventer.md#on_)
- [off\_](Eventer.md#off_)
- [once](Eventer.md#once)
- [emit](Eventer.md#emit)
- [emitEvent](Eventer.md#emitevent)
- [hasEvent](Eventer.md#hasevent)
- [destroy](Eventer.md#destroy)

## Constructors

### constructor

• **new Eventer**()

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[innerId](../interfaces/IEventer.md#innerid)

#### Defined in

[leafer/packages/event/src/Eventer.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L9)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__captureMap](../interfaces/IEventer.md#__capturemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:11](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L11)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__bubbleMap](../interfaces/IEventer.md#__bubblemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L13)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[syncEventer](../interfaces/IEventer.md#synceventer)

#### Defined in

[leafer/packages/event/src/Eventer.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L15)

## Accessors

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventMap`](../interfaces/IEventMap.md) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[event](../interfaces/IEventer.md#event)

#### Defined in

[leafer/packages/event/src/Eventer.ts:17](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L17)

## Methods

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventMap`](../interfaces/IEventMap.md) |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[on](../interfaces/IEventer.md#on)

#### Defined in

[leafer/packages/event/src/Eventer.ts:20](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L20)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[off](../interfaces/IEventer.md#off)

#### Defined in

[leafer/packages/event/src/Eventer.ts:57](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L57)

___

### on\_

▸ **on_**(`type`, `listener`, `bind?`, `options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[on_](../interfaces/IEventer.md#on_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:100](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L100)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[off_](../interfaces/IEventer.md#off_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:106](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L106)

___

### once

▸ **once**(`type`, `listener`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](../interfaces/IFunction.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[once](../interfaces/IEventer.md#once)

#### Defined in

[leafer/packages/event/src/Eventer.ts:113](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L113)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](../interfaces/IObject.md) \| [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[emit](../interfaces/IEventer.md#emit)

#### Defined in

[leafer/packages/event/src/Eventer.ts:117](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L117)

___

### emitEvent

▸ **emitEvent**(`event`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[emitEvent](../interfaces/IEventer.md#emitevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:139](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L139)

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

#### Implementation of

[IEventer](../interfaces/IEventer.md).[hasEvent](../interfaces/IEventer.md#hasevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:144](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L144)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[destroy](../interfaces/IEventer.md#destroy)

#### Defined in

[leafer/packages/event/src/Eventer.ts:152](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Eventer.ts#L152)
