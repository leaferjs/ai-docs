# Class: InnerEditor

## Hierarchy

- **`InnerEditor`**

  ↳ [`EditTool`](EditTool.md)

  ↳ [`TextEditor`](TextEditor.md)

## Implements

- [`IInnerEditor`](../interfaces/IInnerEditor.md)

## Table of contents

### Constructors

- [constructor](InnerEditor.md#constructor)

### Properties

- [editTarget](InnerEditor.md#edittarget)
- [defaultConfig](InnerEditor.md#defaultconfig)
- [editor](InnerEditor.md#editor)
- [view](InnerEditor.md#view)
- [eventIds](InnerEditor.md#eventids)

### Accessors

- [tag](InnerEditor.md#tag)
- [mode](InnerEditor.md#mode)
- [editBox](InnerEditor.md#editbox)

### Methods

- [registerInnerEditor](InnerEditor.md#registerinnereditor)
- [onCreate](InnerEditor.md#oncreate)
- [create](InnerEditor.md#create)
- [onLoad](InnerEditor.md#onload)
- [load](InnerEditor.md#load)
- [onUpdate](InnerEditor.md#onupdate)
- [update](InnerEditor.md#update)
- [onUnload](InnerEditor.md#onunload)
- [unload](InnerEditor.md#unload)
- [onDestroy](InnerEditor.md#ondestroy)
- [destroy](InnerEditor.md#destroy)

## Constructors

### constructor

• **new InnerEditor**(`editor`): [`InnerEditor`](InnerEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Returns

[`InnerEditor`](InnerEditor.md)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L30)

## Properties

### editTarget

• **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editTarget](../interfaces/IInnerEditor.md#edittarget)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L18)

___

### defaultConfig

• **defaultConfig**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[defaultConfig](../interfaces/IInnerEditor.md#defaultconfig)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L20)

___

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editor](../interfaces/IInnerEditor.md#editor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L22)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[view](../interfaces/IInnerEditor.md#view)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:25](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L25)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[eventIds](../interfaces/IInnerEditor.md#eventids)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:27](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L27)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[tag](../interfaces/IInnerEditor.md#tag)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:14](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L14)

___

### mode

• `get` **mode**(): [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Returns

[`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[mode](../interfaces/IInnerEditor.md#mode)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L16)

___

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[editBox](../interfaces/IInnerEditor.md#editbox)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L23)

## Methods

### registerInnerEditor

▸ **registerInnerEditor**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onCreate](../interfaces/IInnerEditor.md#oncreate)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:36](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L36)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[create](../interfaces/IInnerEditor.md#create)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L37)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onLoad](../interfaces/IInnerEditor.md#onload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:45](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L45)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[load](../interfaces/IInnerEditor.md#load)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:46](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L46)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onUpdate](../interfaces/IInnerEditor.md#onupdate)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:54](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L54)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[update](../interfaces/IInnerEditor.md#update)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:55](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L55)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:57](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L57)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[unload](../interfaces/IInnerEditor.md#unload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:58](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L58)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[onDestroy](../interfaces/IInnerEditor.md#ondestroy)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L66)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IInnerEditor](../interfaces/IInnerEditor.md).[destroy](../interfaces/IInnerEditor.md#destroy)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:67](https://github.com/leaferjs/leafer-in/blob/c070c8d4b81a35b549f8bfc444add60581a19a22/packages/editor/src/tool/InnerEditor.ts#L67)
