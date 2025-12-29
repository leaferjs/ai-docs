# Class: BoundsEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`BoundsEvent`**

## Implements

- [`IBoundsEvent`](../interfaces/IBoundsEvent.md)

## Table of contents

### Constructors

- [constructor](BoundsEvent.md#constructor)

### Properties

- [RESIZE](BoundsEvent.md#resize)
- [INNER](BoundsEvent.md#inner)
- [LOCAL](BoundsEvent.md#local)
- [WORLD](BoundsEvent.md#world)
- [origin](BoundsEvent.md#origin)
- [type](BoundsEvent.md#type)
- [target](BoundsEvent.md#target)
- [current](BoundsEvent.md#current)
- [bubbles](BoundsEvent.md#bubbles)
- [phase](BoundsEvent.md#phase)
- [isStopDefault](BoundsEvent.md#isstopdefault)
- [isStop](BoundsEvent.md#isstop)
- [isStopNow](BoundsEvent.md#isstopnow)

### Methods

- [checkHas](BoundsEvent.md#checkhas)
- [emitLocal](BoundsEvent.md#emitlocal)
- [emitWorld](BoundsEvent.md#emitworld)
- [stopDefault](BoundsEvent.md#stopdefault)
- [stopNow](BoundsEvent.md#stopnow)
- [stop](BoundsEvent.md#stop)

## Constructors

### constructor

• **new BoundsEvent**(`type`, `target?`): [`BoundsEvent`](BoundsEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `target?` | [`IEventTarget`](../interfaces/IEventTarget.md) |

#### Returns

[`BoundsEvent`](BoundsEvent.md)

#### Inherited from

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[src/leafer/packages/event/src/Event.ts:20](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L20)

## Properties

### RESIZE

▪ `Static` **RESIZE**: `string` = `'bounds.resize'`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:8](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L8)

___

### INNER

▪ `Static` **INNER**: `string` = `'bounds.inner'`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:10](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L10)

___

### LOCAL

▪ `Static` **LOCAL**: `string` = `'bounds.local'`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:12](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L12)

___

### WORLD

▪ `Static` **WORLD**: `string` = `'bounds.world'`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:14](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L14)

___

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[origin](../interfaces/IBoundsEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[type](../interfaces/IBoundsEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[target](../interfaces/IBoundsEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[src/leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[current](../interfaces/IBoundsEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[src/leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[bubbles](../interfaces/IBoundsEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[src/leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[phase](../interfaces/IBoundsEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[isStopDefault](../interfaces/IBoundsEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[isStop](../interfaces/IBoundsEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[isStopNow](../interfaces/IBoundsEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L18)

## Methods

### checkHas

▸ **checkHas**(`leaf`, `type`, `mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`IEventTarget`](../interfaces/IEventTarget.md) |
| `type` | `string` |
| `mode` | ``"off"`` \| ``"on"`` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:17](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L17)

___

### emitLocal

▸ **emitLocal**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:26](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L26)

___

### emitWorld

▸ **emitWorld**(`leaf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/event/src/BoundsEvent.ts:37](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/BoundsEvent.ts#L37)

___

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[stopDefault](../interfaces/IBoundsEvent.md#stopdefault)

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[stopNow](../interfaces/IBoundsEvent.md#stopnow)

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IBoundsEvent](../interfaces/IBoundsEvent.md).[stop](../interfaces/IBoundsEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/event/src/Event.ts#L36)
