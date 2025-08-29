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

[src/in/packages/interface/src/editor/IEditor.ts:34](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L34)

___

### mode

• `Readonly` **mode**: [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:35](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L35)

___

### editTarget

• **editTarget**: [`IUI`](IUI.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:36](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L36)

___

### config

• **config**: [`IObject`](IObject.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L37)

___

### editor

• **editor**: [`IEditor`](IEditor.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:39](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L39)

___

### editBox

• **editBox**: [`IEditBox`](IEditBox.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:40](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L40)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:41](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L41)

___

### eventIds

• **eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:43](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L43)

## Methods

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:45](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L45)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:46](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L46)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:49](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L49)

▸ **onLoad**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:52](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L52)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:50](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L50)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:53](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L53)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:55](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L55)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:56](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L56)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:58](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L58)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/interface/src/editor/IEditor.ts:59](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/interface/src/editor/IEditor.ts#L59)
