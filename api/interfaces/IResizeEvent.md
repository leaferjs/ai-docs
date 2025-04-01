# Interface: IResizeEvent

## Hierarchy

- [`IEvent`](IEvent.md)

  ↳ **`IResizeEvent`**

## Implemented by

- [`ResizeEvent`](../classes/ResizeEvent.md)

## Table of contents

### Properties

- [origin](IResizeEvent.md#origin)
- [type](IResizeEvent.md#type)
- [target](IResizeEvent.md#target)
- [current](IResizeEvent.md#current)
- [bubbles](IResizeEvent.md#bubbles)
- [phase](IResizeEvent.md#phase)
- [isStopDefault](IResizeEvent.md#isstopdefault)
- [isStop](IResizeEvent.md#isstop)
- [isStopNow](IResizeEvent.md#isstopnow)
- [width](IResizeEvent.md#width)
- [height](IResizeEvent.md#height)
- [pixelRatio](IResizeEvent.md#pixelratio)
- [bigger](IResizeEvent.md#bigger)
- [smaller](IResizeEvent.md#smaller)
- [samePixelRatio](IResizeEvent.md#samepixelratio)
- [old](IResizeEvent.md#old)

### Methods

- [stopDefault](IResizeEvent.md#stopdefault)
- [stopNow](IResizeEvent.md#stopnow)
- [stop](IResizeEvent.md#stop)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IEvent](IEvent.md).[origin](IEvent.md#origin)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEvent](IEvent.md).[type](IEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[target](IEvent.md#target)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[current](IEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[bubbles](IEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEvent](IEvent.md).[phase](IEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopDefault](IEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStop](IEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopNow](IEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L20)

___

### width

• `Readonly` **width**: `number`

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:48](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L48)

___

### height

• `Readonly` **height**: `number`

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:49](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L49)

___

### pixelRatio

• `Readonly` **pixelRatio**: `number`

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:50](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L50)

___

### bigger

• `Readonly` **bigger**: `boolean`

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:52](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L52)

___

### smaller

• `Readonly` **smaller**: `boolean`

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:53](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L53)

___

### samePixelRatio

• `Readonly` **samePixelRatio**: `boolean`

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:54](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L54)

___

### old

• `Readonly` **old**: [`IScreenSizeData`](IScreenSizeData.md)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:55](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L55)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopDefault](IEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopNow](IEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stop](IEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/event/IEvent.ts#L23)
