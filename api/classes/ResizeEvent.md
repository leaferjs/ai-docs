# Class: ResizeEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`ResizeEvent`**

## Implements

- [`IResizeEvent`](../interfaces/IResizeEvent.md)

## Table of contents

### Constructors

- [constructor](ResizeEvent.md#constructor)

### Properties

- [origin](ResizeEvent.md#origin)
- [type](ResizeEvent.md#type)
- [target](ResizeEvent.md#target)
- [current](ResizeEvent.md#current)
- [bubbles](ResizeEvent.md#bubbles)
- [phase](ResizeEvent.md#phase)
- [isStopDefault](ResizeEvent.md#isstopdefault)
- [isStop](ResizeEvent.md#isstop)
- [isStopNow](ResizeEvent.md#isstopnow)
- [RESIZE](ResizeEvent.md#resize)
- [resizingKeys](ResizeEvent.md#resizingkeys)
- [width](ResizeEvent.md#width)
- [height](ResizeEvent.md#height)
- [pixelRatio](ResizeEvent.md#pixelratio)
- [old](ResizeEvent.md#old)

### Accessors

- [bigger](ResizeEvent.md#bigger)
- [smaller](ResizeEvent.md#smaller)
- [samePixelRatio](ResizeEvent.md#samepixelratio)

### Methods

- [stopDefault](ResizeEvent.md#stopdefault)
- [stopNow](ResizeEvent.md#stopnow)
- [stop](ResizeEvent.md#stop)
- [isResizing](ResizeEvent.md#isresizing)

## Constructors

### constructor

• **new ResizeEvent**(`size`, `oldSize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `string` \| [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |
| `oldSize?` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:33](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L33)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[origin](../interfaces/IResizeEvent.md#origin)

#### Inherited from

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[type](../interfaces/IResizeEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L9)

___

### target

• `Readonly` **target**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[target](../interfaces/IResizeEvent.md#target)

#### Inherited from

[Event](Event.md).[target](Event.md#target)

#### Defined in

[leafer/packages/event/src/Event.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L10)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[current](../interfaces/IResizeEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[bubbles](../interfaces/IResizeEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[phase](../interfaces/IResizeEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[isStopDefault](../interfaces/IResizeEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[isStop](../interfaces/IResizeEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[isStopNow](../interfaces/IResizeEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L18)

___

### RESIZE

▪ `Static` **RESIZE**: `string` = `'resize'`

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:8](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L8)

___

### resizingKeys

▪ `Static` **resizingKeys**: [`INumberMap`](../interfaces/INumberMap.md)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L10)

___

### width

• `Readonly` **width**: `number`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[width](../interfaces/IResizeEvent.md#width)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L12)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[height](../interfaces/IResizeEvent.md#height)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L13)

___

### pixelRatio

• `Readonly` **pixelRatio**: `number`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[pixelRatio](../interfaces/IResizeEvent.md#pixelratio)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:14](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L14)

___

### old

• `Readonly` **old**: [`IScreenSizeData`](../interfaces/IScreenSizeData.md)

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[old](../interfaces/IResizeEvent.md#old)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:31](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L31)

## Accessors

### bigger

• `get` **bigger**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[bigger](../interfaces/IResizeEvent.md#bigger)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:16](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L16)

___

### smaller

• `get` **smaller**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[smaller](../interfaces/IResizeEvent.md#smaller)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:22](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L22)

___

### samePixelRatio

• `get` **samePixelRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[samePixelRatio](../interfaces/IResizeEvent.md#samepixelratio)

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:26](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L26)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[stopDefault](../interfaces/IResizeEvent.md#stopdefault)

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[stopNow](../interfaces/IResizeEvent.md#stopnow)

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IResizeEvent](../interfaces/IResizeEvent.md).[stop](../interfaces/IResizeEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/Event.ts#L36)

___

### isResizing

▸ `Static` **isResizing**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/event/src/ResizeEvent.ts:43](https://github.com/leaferjs/leafer/blob/985f85e/packages/event/src/ResizeEvent.ts#L43)
