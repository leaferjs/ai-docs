# Interface: ILayoutEvent

## Hierarchy

- [`IEvent`](IEvent.md)

  ↳ **`ILayoutEvent`**

## Implemented by

- [`LayoutEvent`](../classes/LayoutEvent.md)

## Table of contents

### Properties

- [origin](ILayoutEvent.md#origin)
- [type](ILayoutEvent.md#type)
- [target](ILayoutEvent.md#target)
- [current](ILayoutEvent.md#current)
- [bubbles](ILayoutEvent.md#bubbles)
- [phase](ILayoutEvent.md#phase)
- [isStopDefault](ILayoutEvent.md#isstopdefault)
- [isStop](ILayoutEvent.md#isstop)
- [isStopNow](ILayoutEvent.md#isstopnow)
- [data](ILayoutEvent.md#data)
- [times](ILayoutEvent.md#times)

### Methods

- [stopDefault](ILayoutEvent.md#stopdefault)
- [stopNow](ILayoutEvent.md#stopnow)
- [stop](ILayoutEvent.md#stop)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IEvent](IEvent.md).[origin](IEvent.md#origin)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEvent](IEvent.md).[type](IEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[target](IEvent.md#target)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[current](IEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[bubbles](IEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEvent](IEvent.md).[phase](IEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopDefault](IEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStop](IEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopNow](IEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L20)

___

### data

• `Readonly` **data**: [`ILayoutBlockData`](ILayoutBlockData.md)[]

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:77](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L77)

___

### times

• `Readonly` **times**: `number`

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:78](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L78)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopDefault](IEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopNow](IEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stop](IEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/event/IEvent.ts#L23)
