# Interface: IEditorRotateEvent

## Hierarchy

- [`IEditorEvent`](IEditorEvent.md)

  ↳ **`IEditorRotateEvent`**

## Implemented by

- [`EditorRotateEvent`](../classes/EditorRotateEvent.md)

## Table of contents

### Properties

- [target](IEditorRotateEvent.md#target)
- [editor](IEditorRotateEvent.md#editor)
- [value](IEditorRotateEvent.md#value)
- [oldValue](IEditorRotateEvent.md#oldvalue)
- [list](IEditorRotateEvent.md#list)
- [oldList](IEditorRotateEvent.md#oldlist)
- [worldOrigin](IEditorRotateEvent.md#worldorigin)
- [origin](IEditorRotateEvent.md#origin)
- [transform](IEditorRotateEvent.md#transform)
- [rotation](IEditorRotateEvent.md#rotation)
- [type](IEditorRotateEvent.md#type)
- [current](IEditorRotateEvent.md#current)
- [bubbles](IEditorRotateEvent.md#bubbles)
- [phase](IEditorRotateEvent.md#phase)
- [isStopDefault](IEditorRotateEvent.md#isstopdefault)
- [isStop](IEditorRotateEvent.md#isstop)
- [isStopNow](IEditorRotateEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorRotateEvent.md#stopdefault)
- [stopNow](IEditorRotateEvent.md#stopnow)
- [stop](IEditorRotateEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[target](IEditorEvent.md#target)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L65)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[editor](IEditorEvent.md#editor)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L66)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[value](IEditorEvent.md#value)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L68)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldValue](IEditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L69)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[list](IEditorEvent.md#list)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L70)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldList](IEditorEvent.md#oldlist)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:71](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L71)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[worldOrigin](IEditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L73)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[origin](IEditorEvent.md#origin)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L74)

___

### transform

• `Optional` **transform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:107](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L107)

___

### rotation

• `Optional` `Readonly` **rotation**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:108](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/interface/src/editor/IEditor.ts#L108)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[type](IEditorEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[current](IEditorEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[bubbles](IEditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[phase](IEditorEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopDefault](IEditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStop](IEditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopNow](IEditorEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopDefault](IEditorEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopNow](IEditorEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stop](IEditorEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/event/IEvent.ts#L23)
