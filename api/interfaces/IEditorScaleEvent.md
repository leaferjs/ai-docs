# Interface: IEditorScaleEvent

## Hierarchy

- [`IEditorEvent`](IEditorEvent.md)

  ↳ **`IEditorScaleEvent`**

## Implemented by

- [`EditorScaleEvent`](../classes/EditorScaleEvent.md)

## Table of contents

### Properties

- [target](IEditorScaleEvent.md#target)
- [editor](IEditorScaleEvent.md#editor)
- [value](IEditorScaleEvent.md#value)
- [oldValue](IEditorScaleEvent.md#oldvalue)
- [list](IEditorScaleEvent.md#list)
- [oldList](IEditorScaleEvent.md#oldlist)
- [worldOrigin](IEditorScaleEvent.md#worldorigin)
- [origin](IEditorScaleEvent.md#origin)
- [scaleX](IEditorScaleEvent.md#scalex)
- [scaleY](IEditorScaleEvent.md#scaley)
- [transform](IEditorScaleEvent.md#transform)
- [direction](IEditorScaleEvent.md#direction)
- [lockRatio](IEditorScaleEvent.md#lockratio)
- [around](IEditorScaleEvent.md#around)
- [drag](IEditorScaleEvent.md#drag)
- [type](IEditorScaleEvent.md#type)
- [current](IEditorScaleEvent.md#current)
- [bubbles](IEditorScaleEvent.md#bubbles)
- [phase](IEditorScaleEvent.md#phase)
- [isStopDefault](IEditorScaleEvent.md#isstopdefault)
- [isStop](IEditorScaleEvent.md#isstop)
- [isStopNow](IEditorScaleEvent.md#isstopnow)

### Methods

- [stopDefault](IEditorScaleEvent.md#stopdefault)
- [stopNow](IEditorScaleEvent.md#stopnow)
- [stop](IEditorScaleEvent.md#stop)

## Properties

### target

• `Optional` `Readonly` **target**: [`IUI`](IUI.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[target](IEditorEvent.md#target)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L65)

___

### editor

• `Optional` `Readonly` **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[editor](IEditorEvent.md#editor)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L66)

___

### value

• `Optional` `Readonly` **value**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[value](IEditorEvent.md#value)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L68)

___

### oldValue

• `Optional` `Readonly` **oldValue**: [`IUI`](IUI.md) \| [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldValue](IEditorEvent.md#oldvalue)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L69)

___

### list

• `Optional` `Readonly` **list**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[list](IEditorEvent.md#list)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L70)

___

### oldList

• `Optional` `Readonly` **oldList**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditorEvent](IEditorEvent.md).[oldList](IEditorEvent.md#oldlist)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:71](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L71)

___

### worldOrigin

• `Optional` `Readonly` **worldOrigin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[worldOrigin](IEditorEvent.md#worldorigin)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L73)

___

### origin

• `Optional` `Readonly` **origin**: [`IPointData`](IPointData.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[origin](IEditorEvent.md#origin)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L74)

___

### scaleX

• `Optional` `Readonly` **scaleX**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:94](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L94)

___

### scaleY

• `Optional` `Readonly` **scaleY**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:95](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L95)

___

### transform

• `Optional` **transform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:96](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L96)

___

### direction

• `Optional` `Readonly` **direction**: `number`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:98](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L98)

___

### lockRatio

• `Optional` `Readonly` **lockRatio**: `boolean` \| ``"corner"``

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:99](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L99)

___

### around

• `Optional` `Readonly` **around**: [`IAround`](../modules.md#iaround)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:100](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L100)

___

### drag

• `Optional` **drag**: [`IDragEvent`](IDragEvent.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:102](https://github.com/leaferjs/leafer-in/blob/61e3541a1482c36f21ba863f3588c543f87d21aa/packages/interface/src/editor/IEditor.ts#L102)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[type](IEditorEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L11)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IEditorEvent](IEditorEvent.md).[current](IEditorEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[bubbles](IEditorEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[phase](IEditorEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopDefault](IEditorEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStop](IEditorEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[isStopNow](IEditorEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L20)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopDefault](IEditorEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stopNow](IEditorEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IEditorEvent](IEditorEvent.md).[stop](IEditorEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEvent.ts#L23)
