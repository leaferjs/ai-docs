# Class: EditorSkewEvent

## Hierarchy

- [`EditorEvent`](EditorEvent.md)

  ↳ **`EditorSkewEvent`**

## Implements

- [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md)

## Table of contents

### Constructors

- [constructor](EditorSkewEvent.md#constructor)

### Properties

- [BEFORE\_SELECT](EditorSkewEvent.md#before_select)
- [SELECT](EditorSkewEvent.md#select)
- [BEFORE\_HOVER](EditorSkewEvent.md#before_hover)
- [HOVER](EditorSkewEvent.md#hover)
- [target](EditorSkewEvent.md#target)
- [editor](EditorSkewEvent.md#editor)
- [value](EditorSkewEvent.md#value)
- [oldValue](EditorSkewEvent.md#oldvalue)
- [worldOrigin](EditorSkewEvent.md#worldorigin)
- [origin](EditorSkewEvent.md#origin)
- [BEFORE\_SKEW](EditorSkewEvent.md#before_skew)
- [SKEW](EditorSkewEvent.md#skew)
- [skewX](EditorSkewEvent.md#skewx)
- [skewY](EditorSkewEvent.md#skewy)
- [type](EditorSkewEvent.md#type)
- [current](EditorSkewEvent.md#current)
- [bubbles](EditorSkewEvent.md#bubbles)
- [phase](EditorSkewEvent.md#phase)
- [isStopDefault](EditorSkewEvent.md#isstopdefault)
- [isStop](EditorSkewEvent.md#isstop)
- [isStopNow](EditorSkewEvent.md#isstopnow)

### Accessors

- [list](EditorSkewEvent.md#list)
- [oldList](EditorSkewEvent.md#oldlist)

### Methods

- [stopDefault](EditorSkewEvent.md#stopdefault)
- [stopNow](EditorSkewEvent.md#stopnow)
- [stop](EditorSkewEvent.md#stop)

## Constructors

### constructor

• **new EditorSkewEvent**(`type`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md) |

#### Overrides

[EditorEvent](EditorEvent.md).[constructor](EditorEvent.md#constructor)

#### Defined in

[in/packages/editor/src/event/EditorSkewEvent.ts:15](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorSkewEvent.ts#L15)

## Properties

### BEFORE\_SELECT

▪ `Static` **BEFORE\_SELECT**: `string` = `'editor.before_select'`

#### Inherited from

[EditorEvent](EditorEvent.md).[BEFORE_SELECT](EditorEvent.md#before_select)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L13)

___

### SELECT

▪ `Static` **SELECT**: `string` = `'editor.select'`

#### Inherited from

[EditorEvent](EditorEvent.md).[SELECT](EditorEvent.md#select)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:14](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L14)

___

### BEFORE\_HOVER

▪ `Static` **BEFORE\_HOVER**: `string` = `'editor.before_hover'`

#### Inherited from

[EditorEvent](EditorEvent.md).[BEFORE_HOVER](EditorEvent.md#before_hover)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:16](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L16)

___

### HOVER

▪ `Static` **HOVER**: `string` = `'editor.hover'`

#### Inherited from

[EditorEvent](EditorEvent.md).[HOVER](EditorEvent.md#hover)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:17](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L17)

___

### target

• `Readonly` **target**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[target](../interfaces/IEditorSkewEvent.md#target)

#### Inherited from

[EditorEvent](EditorEvent.md).[target](EditorEvent.md#target)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:19](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L19)

___

### editor

• `Readonly` **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[editor](../interfaces/IEditorSkewEvent.md#editor)

#### Inherited from

[EditorEvent](EditorEvent.md).[editor](EditorEvent.md#editor)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:20](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L20)

___

### value

• `Readonly` **value**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[value](../interfaces/IEditorSkewEvent.md#value)

#### Inherited from

[EditorEvent](EditorEvent.md).[value](EditorEvent.md#value)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:22](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L22)

___

### oldValue

• `Readonly` **oldValue**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[oldValue](../interfaces/IEditorSkewEvent.md#oldvalue)

#### Inherited from

[EditorEvent](EditorEvent.md).[oldValue](EditorEvent.md#oldvalue)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:23](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L23)

___

### worldOrigin

• `Readonly` **worldOrigin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[worldOrigin](../interfaces/IEditorSkewEvent.md#worldorigin)

#### Inherited from

[EditorEvent](EditorEvent.md).[worldOrigin](EditorEvent.md#worldorigin)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:28](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L28)

___

### origin

• `Readonly` **origin**: [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[origin](../interfaces/IEditorSkewEvent.md#origin)

#### Inherited from

[EditorEvent](EditorEvent.md).[origin](EditorEvent.md#origin)

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:29](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L29)

___

### BEFORE\_SKEW

▪ `Static` **BEFORE\_SKEW**: `string` = `'editor.before_skew'`

#### Defined in

[in/packages/editor/src/event/EditorSkewEvent.ts:8](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorSkewEvent.ts#L8)

___

### SKEW

▪ `Static` **SKEW**: `string` = `'editor.skew'`

#### Defined in

[in/packages/editor/src/event/EditorSkewEvent.ts:9](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorSkewEvent.ts#L9)

___

### skewX

• `Readonly` **skewX**: `number`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[skewX](../interfaces/IEditorSkewEvent.md#skewx)

#### Defined in

[in/packages/editor/src/event/EditorSkewEvent.ts:12](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorSkewEvent.ts#L12)

___

### skewY

• `Readonly` **skewY**: `number`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[skewY](../interfaces/IEditorSkewEvent.md#skewy)

#### Defined in

[in/packages/editor/src/event/EditorSkewEvent.ts:13](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorSkewEvent.ts#L13)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[type](../interfaces/IEditorSkewEvent.md#type)

#### Inherited from

[EditorEvent](EditorEvent.md).[type](EditorEvent.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L9)

___

### current

• `Readonly` **current**: [`IEventTarget`](../interfaces/IEventTarget.md)

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[current](../interfaces/IEditorSkewEvent.md#current)

#### Inherited from

[EditorEvent](EditorEvent.md).[current](EditorEvent.md#current)

#### Defined in

[leafer/packages/event/src/Event.ts:11](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L11)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `false`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[bubbles](../interfaces/IEditorSkewEvent.md#bubbles)

#### Inherited from

[EditorEvent](EditorEvent.md).[bubbles](EditorEvent.md#bubbles)

#### Defined in

[leafer/packages/event/src/Event.ts:13](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L13)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[phase](../interfaces/IEditorSkewEvent.md#phase)

#### Inherited from

[EditorEvent](EditorEvent.md).[phase](EditorEvent.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[isStopDefault](../interfaces/IEditorSkewEvent.md#isstopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopDefault](EditorEvent.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[isStop](../interfaces/IEditorSkewEvent.md#isstop)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStop](EditorEvent.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[isStopNow](../interfaces/IEditorSkewEvent.md#isstopnow)

#### Inherited from

[EditorEvent](EditorEvent.md).[isStopNow](EditorEvent.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L18)

## Accessors

### list

• `get` **list**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[list](../interfaces/IEditorSkewEvent.md#list)

#### Inherited from

EditorEvent.list

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:25](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L25)

___

### oldList

• `get` **oldList**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[oldList](../interfaces/IEditorSkewEvent.md#oldlist)

#### Inherited from

EditorEvent.oldList

#### Defined in

[in/packages/editor/src/event/EditorEvent.ts:26](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/event/EditorEvent.ts#L26)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[stopDefault](../interfaces/IEditorSkewEvent.md#stopdefault)

#### Inherited from

[EditorEvent](EditorEvent.md).[stopDefault](EditorEvent.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[stopNow](../interfaces/IEditorSkewEvent.md#stopnow)

#### Inherited from

[EditorEvent](EditorEvent.md).[stopNow](EditorEvent.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IEditorSkewEvent](../interfaces/IEditorSkewEvent.md).[stop](../interfaces/IEditorSkewEvent.md#stop)

#### Inherited from

[EditorEvent](EditorEvent.md).[stop](EditorEvent.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/8d161c2/packages/event/src/Event.ts#L36)
