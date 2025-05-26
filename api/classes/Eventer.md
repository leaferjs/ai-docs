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
- [\_\_hasLocalEvent](Eventer.md#__haslocalevent)
- [\_\_hasWorldEvent](Eventer.md#__hasworldevent)
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

[leafer/packages/event/src/Eventer.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L12)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__captureMap](../interfaces/IEventer.md#__capturemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:14](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L14)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__bubbleMap](../interfaces/IEventer.md#__bubblemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:16](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L16)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__hasLocalEvent](../interfaces/IEventer.md#__haslocalevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:18](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L18)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[__hasWorldEvent](../interfaces/IEventer.md#__hasworldevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L19)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[syncEventer](../interfaces/IEventer.md#synceventer)

#### Defined in

[leafer/packages/event/src/Eventer.ts:21](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L21)

## Accessors

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[event](../interfaces/IEventer.md#event)

#### Defined in

[leafer/packages/event/src/Eventer.ts:23](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L23)

## Methods

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[on](../interfaces/IEventer.md#on)

#### Defined in

[leafer/packages/event/src/Eventer.ts:26](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L26)

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

[leafer/packages/event/src/Eventer.ts:66](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L66)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IEventer](../interfaces/IEventer.md).[on_](../interfaces/IEventer.md#on_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:110](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L110)

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

[leafer/packages/event/src/Eventer.ts:116](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L116)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `captureOrBind?` | `boolean` \| [`IObject`](../interfaces/IObject.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[once](../interfaces/IEventer.md#once)

#### Defined in

[leafer/packages/event/src/Eventer.ts:126](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L126)

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

[leafer/packages/event/src/Eventer.ts:133](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L133)

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

[leafer/packages/event/src/Eventer.ts:155](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L155)

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

[leafer/packages/event/src/Eventer.ts:160](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L160)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEventer](../interfaces/IEventer.md).[destroy](../interfaces/IEventer.md#destroy)

#### Defined in

[leafer/packages/event/src/Eventer.ts:168](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Eventer.ts#L168)
