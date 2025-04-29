# Interface: IImageEvent

## Hierarchy

- [`IEvent`](IEvent.md)

  ↳ **`IImageEvent`**

## Implemented by

- [`ImageEvent`](../classes/ImageEvent.md)

## Table of contents

### Properties

- [origin](IImageEvent.md#origin)
- [type](IImageEvent.md#type)
- [target](IImageEvent.md#target)
- [current](IImageEvent.md#current)
- [bubbles](IImageEvent.md#bubbles)
- [phase](IImageEvent.md#phase)
- [isStopDefault](IImageEvent.md#isstopdefault)
- [isStop](IImageEvent.md#isstop)
- [isStopNow](IImageEvent.md#isstopnow)
- [image](IImageEvent.md#image)
- [attrName](IImageEvent.md#attrname)
- [attrValue](IImageEvent.md#attrvalue)
- [error](IImageEvent.md#error)

### Methods

- [stopDefault](IImageEvent.md#stopdefault)
- [stopNow](IImageEvent.md#stopnow)
- [stop](IImageEvent.md#stop)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IEvent](IEvent.md).[origin](IEvent.md#origin)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEvent](IEvent.md).[type](IEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[target](IEvent.md#target)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[current](IEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[bubbles](IEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEvent](IEvent.md).[phase](IEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopDefault](IEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStop](IEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopNow](IEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L20)

___

### image

• `Optional` **image**: [`ILeaferImage`](ILeaferImage.md)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:101](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IUIEvent.ts#L101)

___

### attrName

• `Optional` **attrName**: `string`

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:102](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IUIEvent.ts#L102)

___

### attrValue

• `Optional` **attrValue**: [`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:103](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IUIEvent.ts#L103)

___

### error

• `Optional` **error**: `string` \| [`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:104](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IUIEvent.ts#L104)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopDefault](IEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopNow](IEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stop](IEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/event/IEvent.ts#L23)
