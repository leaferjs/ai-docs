# Class: ChildEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`ChildEvent`**

## Implements

- [`IChildEvent`](../interfaces/IChildEvent.md)

## Table of contents

### Constructors

- [constructor](ChildEvent.md#constructor)

### Properties

- [ADD](ChildEvent.md#add)
- [REMOVE](ChildEvent.md#remove)
- [CREATED](ChildEvent.md#created)
- [MOUNTED](ChildEvent.md#mounted)
- [UNMOUNTED](ChildEvent.md#unmounted)
- [DESTROY](ChildEvent.md#destroy)
- [parent](ChildEvent.md#parent)
- [child](ChildEvent.md#child)
- [origin](ChildEvent.md#origin)
- [type](ChildEvent.md#type)
- [target](ChildEvent.md#target)
- [current](ChildEvent.md#current)
- [bubbles](ChildEvent.md#bubbles)
- [phase](ChildEvent.md#phase)
- [isStopDefault](ChildEvent.md#isstopdefault)
- [isStop](ChildEvent.md#isstop)
- [isStopNow](ChildEvent.md#isstopnow)

### Methods

- [stopDefault](ChildEvent.md#stopdefault)
- [stopNow](ChildEvent.md#stopnow)
- [stop](ChildEvent.md#stop)

## Constructors

### constructor

• **new ChildEvent**(`type`, `child?`, `parent?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `child?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `parent?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:19](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L19)

## Properties

### ADD

▪ `Static` **ADD**: `string` = `'child.add'`

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:8](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L8)

___

### REMOVE

▪ `Static` **REMOVE**: `string` = `'child.remove'`

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:9](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L9)

___

### CREATED

▪ `Static` **CREATED**: `string` = `'created'`

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:11](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L11)

___

### MOUNTED

▪ `Static` **MOUNTED**: `string` = `'mounted'`

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:12](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L12)

___

### UNMOUNTED

▪ `Static` **UNMOUNTED**: `string` = `'unmounted'`

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:13](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L13)

___

### DESTROY

▪ `Static` **DESTROY**: `string` = `'destroy'`

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:14](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L14)

___

### parent

• `Optional` `Readonly` **parent**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[parent](../interfaces/IChildEvent.md#parent)

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:16](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L16)

___

### child

• `Optional` `Readonly` **child**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[child](../interfaces/IChildEvent.md#child)

#### Defined in

[leafer/packages/event/src/ChildEvent.ts:17](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/ChildEvent.ts#L17)

___

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[origin](../interfaces/IChildEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[type](../interfaces/IChildEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[target](../interfaces/IChildEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[current](../interfaces/IChildEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[bubbles](../interfaces/IChildEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[phase](../interfaces/IChildEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[isStopDefault](../interfaces/IChildEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[isStop](../interfaces/IChildEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[isStopNow](../interfaces/IChildEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L18)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[stopDefault](../interfaces/IChildEvent.md#stopdefault)

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[stopNow](../interfaces/IChildEvent.md#stopnow)

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IChildEvent](../interfaces/IChildEvent.md).[stop](../interfaces/IChildEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L36)
