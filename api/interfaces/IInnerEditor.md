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
- [editConfig](IInnerEditor.md#editconfig)
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

[src/in/packages/interface/src/editor/IEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L37)

___

### mode

• `Readonly` **mode**: [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:38](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L38)

___

### editTarget

• **editTarget**: [`IUI`](IUI.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:39](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L39)

___

### config

• **config**: [`IObject`](IObject.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:40](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L40)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:41](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L41)

___

### editor

• **editor**: [`IEditor`](IEditor.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:43](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L43)

___

### editBox

• **editBox**: [`IEditBox`](IEditBox.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:44](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L44)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:45](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L45)

___

### eventIds

• **eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:47](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L47)

## Methods

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:49](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L49)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:50](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L50)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:53](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L53)

▸ **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:56](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L56)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:54](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L54)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:57](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L57)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:59](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L59)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:60](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L60)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:62](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L62)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:63](https://github.com/leaferjs/leafer-in/blob/bad6df38974c34c13b280ee22983611d4a4b42d1/packages/interface/src/editor/IEditor.ts#L63)
