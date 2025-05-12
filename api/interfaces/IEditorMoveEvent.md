# Interface: IEditorMoveEvent

## Hierarchy

- [`IEditorEvent`](IEditorEvent.md)

  ↳ **`IEditorMoveEvent`**

## Implemented by

- [`EditorMoveEvent`](../classes/EditorMoveEvent.md)

## Table of contents

### Properties

- [target](IEditorMoveEvent.md#target)
- [editor](IEditorMoveEvent.md#editor)
- [value](IEditorMoveEvent.md#value)
- [oldValue](IEditorMoveEvent.md#oldvalue)
- [list](IEditorMoveEvent.md#list)
- [oldList](IEditorMoveEvent.md#oldlist)
- [worldOrigin](IEditorMoveEvent.md#worldorigin)
- [origin](IEditorMoveEvent.md#origin)
- [moveX](IEditorMoveEvent.md#movex)
- [moveY](IEditorMoveEvent.md#movey)
- [type](IEditorMoveEvent.md#type)
- [current](IEditorMoveEvent.md#current)
- [bubbles](IEditorMoveEvent.md#bubbles)
- [phase](IEditorMoveEvent.md#phase)
- [isStopDefault](IEditorMoveEvent.md#isstopdefault)
- [isStop](IEditorMoveEvent.md#isstop)
- [isStopNow](IEditorMoveEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorMoveEvent.md#stopdefault)
- [stopNow](IEditorMoveEvent.md#stopnow)
- [stop](IEditorMoveEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[target](IEditorEvent.md#target)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:62](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L62)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[editor](IEditorEvent.md#editor)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:63](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L63)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[value](IEditorEvent.md#value)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L65)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldValue](IEditorEvent.md#oldvalue)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L66)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[list](IEditorEvent.md#list)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:67](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L67)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldList](IEditorEvent.md#oldlist)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L68)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[worldOrigin](IEditorEvent.md#worldorigin)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L70)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[origin](IEditorEvent.md#origin)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:71](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L71)

___

### moveX

• `Readonly` **moveX**: `number`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:85](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L85)

___

### moveY

• `Readonly` **moveY**: `number`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:86](https://github.com/leaferjs/leafer-in/blob/9ec8da5/packages/interface/src/editor/IEditor.ts#L86)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[type](IEditorEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[current](IEditorEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[bubbles](IEditorEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[phase](IEditorEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopDefault](IEditorEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStop](IEditorEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopNow](IEditorEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopDefault](IEditorEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopNow](IEditorEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stop](IEditorEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEvent.ts#L23)
