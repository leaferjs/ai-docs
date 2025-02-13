# Interface: IEditorEvent

## Hierarchy

- [`IEvent`](IEvent.md)

  ↳ **`IEditorEvent`**

  ↳↳ [`IInnerEditorEvent`](IInnerEditorEvent.md)

  ↳↳ [`IEditorGroupEvent`](IEditorGroupEvent.md)

  ↳↳ [`IEditorMoveEvent`](IEditorMoveEvent.md)

  ↳↳ [`IEditorScaleEvent`](IEditorScaleEvent.md)

  ↳↳ [`IEditorRotateEvent`](IEditorRotateEvent.md)

  ↳↳ [`IEditorSkewEvent`](IEditorSkewEvent.md)

## Implemented by

- [`EditorEvent`](../classes/EditorEvent.md)

## Table of contents

### Properties

- [target](IEditorEvent.md#target)
- [editor](IEditorEvent.md#editor)
- [value](IEditorEvent.md#value)
- [oldValue](IEditorEvent.md#oldvalue)
- [list](IEditorEvent.md#list)
- [oldList](IEditorEvent.md#oldlist)
- [worldOrigin](IEditorEvent.md#worldorigin)
- [origin](IEditorEvent.md#origin)
- [type](IEditorEvent.md#type)
- [current](IEditorEvent.md#current)
- [bubbles](IEditorEvent.md#bubbles)
- [phase](IEditorEvent.md#phase)
- [isStopDefault](IEditorEvent.md#isstopdefault)
- [isStop](IEditorEvent.md#isstop)
- [isStopNow](IEditorEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorEvent.md#stopdefault)
- [stopNow](IEditorEvent.md#stopnow)
- [stop](IEditorEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Overrides

[IEvent](IEvent.md).[target](IEvent.md#target)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:64](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L64)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L65)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:67](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L67)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L68)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L69)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L70)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:72](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L72)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Overrides

[IEvent](IEvent.md).[origin](IEvent.md#origin)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/interface/src/editor/IEditor.ts#L73)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEvent](IEvent.md).[type](IEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEvent](IEvent.md).[current](IEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[bubbles](IEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEvent](IEvent.md).[phase](IEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopDefault](IEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStop](IEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEvent](IEvent.md).[isStopNow](IEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopDefault](IEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stopNow](IEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEvent](IEvent.md).[stop](IEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEvent.ts#L23)
