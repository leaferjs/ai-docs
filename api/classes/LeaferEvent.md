# Class: LeaferEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`LeaferEvent`**

## Implements

- [`ILeaferEvent`](../interfaces/ILeaferEvent.md)

## Table of contents

### Constructors

- [constructor](LeaferEvent.md#constructor)

### Properties

- [origin](LeaferEvent.md#origin)
- [type](LeaferEvent.md#type)
- [target](LeaferEvent.md#target)
- [current](LeaferEvent.md#current)
- [bubbles](LeaferEvent.md#bubbles)
- [phase](LeaferEvent.md#phase)
- [isStopDefault](LeaferEvent.md#isstopdefault)
- [isStop](LeaferEvent.md#isstop)
- [isStopNow](LeaferEvent.md#isstopnow)
- [START](LeaferEvent.md#start)
- [BEFORE\_READY](LeaferEvent.md#before_ready)
- [READY](LeaferEvent.md#ready)
- [AFTER\_READY](LeaferEvent.md#after_ready)
- [VIEW\_READY](LeaferEvent.md#view_ready)
- [VIEW\_COMPLETED](LeaferEvent.md#view_completed)
- [STOP](LeaferEvent.md#stop-1)
- [RESTART](LeaferEvent.md#restart)
- [END](LeaferEvent.md#end)

### Methods

- [stopDefault](LeaferEvent.md#stopdefault)
- [stopNow](LeaferEvent.md#stopnow)
- [stop](LeaferEvent.md#stop)

## Constructors

### constructor

• **new LeaferEvent**(`type`, `target?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `target?` | [`IEventTarget`](../interfaces/IEventTarget.md) |

#### Inherited from

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[leafer/packages/event/src/Event.ts:20](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L20)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L18)

___

### START

▪ `Static` **START**: `string` = `'leafer.start'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:8](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L8)

___

### BEFORE\_READY

▪ `Static` **BEFORE\_READY**: `string` = `'leafer.before_ready'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:10](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L10)

___

### READY

▪ `Static` **READY**: `string` = `'leafer.ready'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:11](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L11)

___

### AFTER\_READY

▪ `Static` **AFTER\_READY**: `string` = `'leafer.after_ready'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:12](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L12)

___

### VIEW\_READY

▪ `Static` **VIEW\_READY**: `string` = `'leafer.view_ready'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:14](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L14)

___

### VIEW\_COMPLETED

▪ `Static` **VIEW\_COMPLETED**: `string` = `'leafer.view_completed'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L16)

___

### STOP

▪ `Static` **STOP**: `string` = `'leafer.stop'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L18)

___

### RESTART

▪ `Static` **RESTART**: `string` = `'leafer.restart'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:19](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L19)

___

### END

▪ `Static` **END**: `string` = `'leafer.end'`

#### Defined in

[leafer/packages/event/src/LeaferEvent.ts:21](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/LeaferEvent.ts#L21)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L36)
