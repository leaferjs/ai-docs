# Interface: IInnerEditor

## Hierarchy

- **`IInnerEditor`**

  ↳ [`IEditTool`](IEditTool.md)

## Implemented by

- [`InnerEditor`](../classes/InnerEditor.md)

## Table of contents

### Properties

- [tag](IInnerEditor.md#tag)
- [mode](IInnerEditor.md#mode)
- [editTarget](IInnerEditor.md#edittarget)
- [config](IInnerEditor.md#config)
- [editor](IInnerEditor.md#editor)
- [editBox](IInnerEditor.md#editbox)
- [view](IInnerEditor.md#view)
- [eventIds](IInnerEditor.md#eventids)

### Methods

- [onCreate](IInnerEditor.md#oncreate)
- [create](IInnerEditor.md#create)
- [onLoad](IInnerEditor.md#onload)
- [load](IInnerEditor.md#load)
- [unload](IInnerEditor.md#unload)
- [onUpdate](IInnerEditor.md#onupdate)
- [update](IInnerEditor.md#update)
- [onDestroy](IInnerEditor.md#ondestroy)
- [destroy](IInnerEditor.md#destroy)

## Properties

### tag

• `Readonly` **tag**: `string`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L37)

___

### mode

• `Readonly` **mode**: [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:38](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L38)

___

### editTarget

• **editTarget**: [`IUI`](IUI.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:39](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L39)

___

### config

• **config**: [`IObject`](IObject.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:40](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L40)

___

### editor

• **editor**: [`IEditor`](IEditor.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:42](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L42)

___

### editBox

• **editBox**: [`IEditBox`](IEditBox.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:43](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L43)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:44](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L44)

___

### eventIds

• **eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:46](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L46)

## Methods

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:48](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L48)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:49](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L49)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:52](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L52)

▸ **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:55](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L55)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:53](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L53)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:56](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L56)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:58](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L58)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:59](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L59)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:61](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L61)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:62](https://github.com/leaferjs/leafer-in/blob/eadc68ccb5f000ecda22ae32aac00d225966d9e9/packages/interface/src/editor/IEditor.ts#L62)
