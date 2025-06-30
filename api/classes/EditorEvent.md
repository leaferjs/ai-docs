# Class: EditorEvent

## Hierarchy

- [`Event`](Event.md)

  ↳ **`EditorEvent`**

  ↳↳ [`EditorMoveEvent`](EditorMoveEvent.md)

  ↳↳ [`EditorScaleEvent`](EditorScaleEvent.md)

  ↳↳ [`EditorRotateEvent`](EditorRotateEvent.md)

  ↳↳ [`EditorSkewEvent`](EditorSkewEvent.md)

  ↳↳ [`EditorGroupEvent`](EditorGroupEvent.md)

  ↳↳ [`InnerEditorEvent`](InnerEditorEvent.md)

## Implements

- [`IEditorEvent`](../interfaces/IEditorEvent.md)

## Table of contents

### Constructors

- [constructor](EditorEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](EditorEvent.md#before_select)
- [SELECT](EditorEvent.md#select)
- [AFTER\_SELECT](EditorEvent.md#after_select)
- [BEFORE\_HOVER](EditorEvent.md#before_hover)
- [HOVER](EditorEvent.md#hover)
- [target](EditorEvent.md#target)
- [editor](EditorEvent.md#editor)
- [value](EditorEvent.md#value)
- [oldValue](EditorEvent.md#oldvalue)
- [worldOrigin](EditorEvent.md#worldorigin)
- [origin](EditorEvent.md#origin)
- [type](EditorEvent.md#type)
- [current](EditorEvent.md#current)
- [bubbles](EditorEvent.md#bubbles)
- [phase](EditorEvent.md#phase)
- [isStopDefault](EditorEvent.md#isstopdefault)
- [isStop](EditorEvent.md#isstop)
- [isStopNow](EditorEvent.md#isstopnow)

### Accessors

- [list](EditorEvent.md#list)
- [oldList](EditorEvent.md#oldlist)

### Methods

- [stopDefault](EditorEvent.md#stopdefault)
- [stopNow](EditorEvent.md#stopnow)
- [stop](EditorEvent.md#stop)

## Constructors

### constructor

• **new EditorEvent**(`type`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | [`IEditorEvent`](../interfaces/IEditorEvent.md) |

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:32](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L32)

## Properties

### BEFORE\_SELECT

▪ `Static` **BEFORE\_SELECT**: `string` = `'editor.before_select'`

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L13)

___

### SELECT

▪ `Static` **SELECT**: `string` = `'editor.select'`

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L14)

___

### AFTER\_SELECT

▪ `Static` **AFTER\_SELECT**: `string` = `'editor.after_select'`

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:15](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L15)

___

### BEFORE\_HOVER

▪ `Static` **BEFORE\_HOVER**: `string` = `'editor.before_hover'`

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L17)

___

### HOVER

▪ `Static` **HOVER**: `string` = `'editor.hover'`

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:18](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L18)

___

### target

• `Readonly` **target**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[target](../interfaces/IEditorEvent.md#target)

#### Overrides

[Event](Event.md).[target](Event.md#target)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L20)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[editor](../interfaces/IEditorEvent.md#editor)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:21](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L21)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[value](../interfaces/IEditorEvent.md#value)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L23)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[oldValue](../interfaces/IEditorEvent.md#oldvalue)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:24](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L24)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[worldOrigin](../interfaces/IEditorEvent.md#worldorigin)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L29)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[origin](../interfaces/IEditorEvent.md#origin)

#### Overrides

[Event](Event.md).[origin](Event.md#origin)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:30](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L30)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[type](../interfaces/IEditorEvent.md#type)

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[current](../interfaces/IEditorEvent.md#current)

#### Inherited from

[Event](Event.md).[current](Event.md#current)

#### Defined in

[leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[bubbles](../interfaces/IEditorEvent.md#bubbles)

#### Inherited from

[Event](Event.md).[bubbles](Event.md#bubbles)

#### Defined in

[leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[phase](../interfaces/IEditorEvent.md#phase)

#### Inherited from

[Event](Event.md).[phase](Event.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[isStopDefault](../interfaces/IEditorEvent.md#isstopdefault)

#### Inherited from

[Event](Event.md).[isStopDefault](Event.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[isStop](../interfaces/IEditorEvent.md#isstop)

#### Inherited from

[Event](Event.md).[isStop](Event.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[isStopNow](../interfaces/IEditorEvent.md#isstopnow)

#### Inherited from

[Event](Event.md).[isStopNow](Event.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L18)

## Accessors

### list

• `get` **list**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[list](../interfaces/IEditorEvent.md#list)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:26](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L26)

___

### oldList

• `get` **oldList**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[oldList](../interfaces/IEditorEvent.md#oldlist)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:27](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/event/EditorEvent.ts#L27)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[stopDefault](../interfaces/IEditorEvent.md#stopdefault)

#### Inherited from

[Event](Event.md).[stopDefault](Event.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[stopNow](../interfaces/IEditorEvent.md#stopnow)

#### Inherited from

[Event](Event.md).[stopNow](Event.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorEvent](../interfaces/IEditorEvent.md).[stop](../interfaces/IEditorEvent.md#stop)

#### Inherited from

[Event](Event.md).[stop](Event.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/event/src/Event.ts#L36)
