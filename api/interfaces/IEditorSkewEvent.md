# Interface: IEditorSkewEvent

## Hierarchy

- [`IEditorEvent`](IEditorEvent.md)

  ↳ **`IEditorSkewEvent`**

## Implemented by

- [`EditorSkewEvent`](../classes/EditorSkewEvent.md)

## Table of contents

### Properties

- [target](IEditorSkewEvent.md#target)
- [editor](IEditorSkewEvent.md#editor)
- [value](IEditorSkewEvent.md#value)
- [oldValue](IEditorSkewEvent.md#oldvalue)
- [list](IEditorSkewEvent.md#list)
- [oldList](IEditorSkewEvent.md#oldlist)
- [worldOrigin](IEditorSkewEvent.md#worldorigin)
- [origin](IEditorSkewEvent.md#origin)
- [transform](IEditorSkewEvent.md#transform)
- [skewX](IEditorSkewEvent.md#skewx)
- [skewY](IEditorSkewEvent.md#skewy)
- [type](IEditorSkewEvent.md#type)
- [current](IEditorSkewEvent.md#current)
- [bubbles](IEditorSkewEvent.md#bubbles)
- [phase](IEditorSkewEvent.md#phase)
- [isStopDefault](IEditorSkewEvent.md#isstopdefault)
- [isStop](IEditorSkewEvent.md#isstop)
- [isStopNow](IEditorSkewEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorSkewEvent.md#stopdefault)
- [stopNow](IEditorSkewEvent.md#stopnow)
- [stop](IEditorSkewEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[target](IEditorEvent.md#target)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L65)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[editor](IEditorEvent.md#editor)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L66)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[value](IEditorEvent.md#value)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L68)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldValue](IEditorEvent.md#oldvalue)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L69)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[list](IEditorEvent.md#list)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L70)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldList](IEditorEvent.md#oldlist)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:71](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L71)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[worldOrigin](IEditorEvent.md#worldorigin)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L73)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[origin](IEditorEvent.md#origin)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L74)

___

### transform

• `Optional` **transform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:113](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L113)

___

### skewX

• `Optional` `Readonly` **skewX**: `number`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:114](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L114)

___

### skewY

• `Optional` `Readonly` **skewY**: `number`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:115](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/interface/src/editor/IEditor.ts#L115)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[type](IEditorEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[current](IEditorEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[bubbles](IEditorEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[phase](IEditorEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopDefault](IEditorEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStop](IEditorEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopNow](IEditorEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopDefault](IEditorEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopNow](IEditorEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stop](IEditorEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEvent.ts#L23)
