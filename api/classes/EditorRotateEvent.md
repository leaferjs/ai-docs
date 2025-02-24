# Class: EditorRotateEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`EditorRotateEvent`**

## Implements

- [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md)

## Table of contents

### Constructors

- [constructor](EditorRotateEvent.md#constructor)

### Properties

- [SELECT](EditorRotateEvent.md#select)
- [HOVER](EditorRotateEvent.md#hover)
- [target](EditorRotateEvent.md#target)
- [editor](EditorRotateEvent.md#editor)
- [value](EditorRotateEvent.md#value)
- [oldValue](EditorRotateEvent.md#oldvalue)
- [worldOrigin](EditorRotateEvent.md#worldorigin)
- [origin](EditorRotateEvent.md#origin)
- [ROTATE](EditorRotateEvent.md#rotate)
- [rotation](EditorRotateEvent.md#rotation)
- [type](EditorRotateEvent.md#type)
- [current](EditorRotateEvent.md#current)
- [bubbles](EditorRotateEvent.md#bubbles)
- [phase](EditorRotateEvent.md#phase)
- [isStopDefault](EditorRotateEvent.md#isstopdefault)
- [isStop](EditorRotateEvent.md#isstop)
- [isStopNow](EditorRotateEvent.md#isstopnow)

### Accessors

- [list](EditorRotateEvent.md#list)
- [oldList](EditorRotateEvent.md#oldlist)

### Methods

- [stopDefault](EditorRotateEvent.md#stopdefault)
- [stopNow](EditorRotateEvent.md#stopnow)
- [stop](EditorRotateEvent.md#stop)

## Constructors

### constructor

• **new EditorRotateEvent**(`type`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[in/packages/editor/src/event/EditorRotateEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorRotateEvent.ts#L13)

## Properties

### SELECT

▪ `Static` **SELECT**: `string` = `'editor.select'`

#### Inherited from

[EditorEvent](EditorEvent.md).[SELECT](EditorEvent.md#select)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L13)

___

### HOVER

▪ `Static` **HOVER**: `string` = `'editor.hover'`

#### Inherited from

[EditorEvent](EditorEvent.md).[HOVER](EditorEvent.md#hover)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L14)

___

### target

• `Readonly` **target**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[target](../interfaces/IEditorRotateEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:16](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L16)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[editor](../interfaces/IEditorRotateEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L17)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[value](../interfaces/IEditorRotateEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:19](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L19)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[oldValue](../interfaces/IEditorRotateEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L20)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[worldOrigin](../interfaces/IEditorRotateEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:25](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L25)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[origin](../interfaces/IEditorRotateEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:26](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L26)

___

### ROTATE

▪ `Static` **ROTATE**: `string` = `'editor.rotate'`

#### Defined in

[in/packages/editor/src/event/EditorRotateEvent.ts:8](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorRotateEvent.ts#L8)

___

### rotation

• `Readonly` **rotation**: `number`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[rotation](../interfaces/IEditorRotateEvent.md#rotation)

#### Defined in

[in/packages/editor/src/event/EditorRotateEvent.ts:11](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorRotateEvent.ts#L11)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[type](../interfaces/IEditorRotateEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[current](../interfaces/IEditorRotateEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[bubbles](../interfaces/IEditorRotateEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[phase](../interfaces/IEditorRotateEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[isStopDefault](../interfaces/IEditorRotateEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[isStop](../interfaces/IEditorRotateEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[isStopNow](../interfaces/IEditorRotateEvent.md#isstopnow)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopNow](EditorEvent.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L18)

## Accessors

### list

• `get` **list**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[list](../interfaces/IEditorRotateEvent.md#list)

#### Inherited from

EditorEvent.list

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:22](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L22)

___

### oldList

• `get` **oldList**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[oldList](../interfaces/IEditorRotateEvent.md#oldlist)

#### Inherited from

EditorEvent.oldList

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/editor/src/event/EditorEvent.ts#L23)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[stopDefault](../interfaces/IEditorRotateEvent.md#stopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[stopDefault](EditorEvent.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[stopNow](../interfaces/IEditorRotateEvent.md#stopnow)

#### Inherited from

[EditorEvent](EditorEvent.md).[stopNow](EditorEvent.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorRotateEvent](../interfaces/IEditorRotateEvent.md).[stop](../interfaces/IEditorRotateEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/event/src/Event.ts#L36)
