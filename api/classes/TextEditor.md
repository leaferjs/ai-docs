# Class: TextEditor

## Hierarchy

- [`InnerEditor`](InnerEditor.md)

  ↳ **`TextEditor`**

## Table of contents

### Constructors

- [constructor](TextEditor.md#constructor)

### Properties

- [editor](TextEditor.md#editor)
- [view](TextEditor.md#view)
- [editTarget](TextEditor.md#edittarget)
- [editDom](TextEditor.md#editdom)
- [textScale](TextEditor.md#textscale)
- [config](TextEditor.md#config)
- [eventIds](TextEditor.md#eventids)
- [inBody](TextEditor.md#inbody)
- [isHTMLText](TextEditor.md#ishtmltext)
- [\_keyEvent](TextEditor.md#_keyevent)

### Accessors

- [mode](TextEditor.md#mode)
- [editBox](TextEditor.md#editbox)
- [tag](TextEditor.md#tag)

### Methods

- [registerInnerEditor](TextEditor.md#registerinnereditor)
- [onCreate](TextEditor.md#oncreate)
- [create](TextEditor.md#create)
- [load](TextEditor.md#load)
- [update](TextEditor.md#update)
- [unload](TextEditor.md#unload)
- [onDestroy](TextEditor.md#ondestroy)
- [destroy](TextEditor.md#destroy)
- [onLoad](TextEditor.md#onload)
- [onInput](TextEditor.md#oninput)
- [onFocus](TextEditor.md#onfocus)
- [onKeydown](TextEditor.md#onkeydown)
- [onPaste](TextEditor.md#onpaste)
- [onUpdate](TextEditor.md#onupdate)
- [onUnload](TextEditor.md#onunload)

## Constructors

### constructor

• **new TextEditor**(`editor`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Inherited from

[InnerEditor](InnerEditor.md).[constructor](InnerEditor.md#constructor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L30)

## Properties

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Inherited from

[InnerEditor](InnerEditor.md).[editor](InnerEditor.md#editor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L22)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Inherited from

[InnerEditor](InnerEditor.md).[view](InnerEditor.md#view)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:25](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L25)

___

### editTarget

• **editTarget**: [`IText`](../interfaces/IText.md)

#### Overrides

[InnerEditor](InnerEditor.md).[editTarget](InnerEditor.md#edittarget)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:11](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L11)

___

### editDom

• **editDom**: `HTMLDivElement`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:13](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L13)

___

### textScale

• **textScale**: `number`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:14](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L14)

___

### config

• **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `selectAll` | `boolean` |

#### Overrides

[InnerEditor](InnerEditor.md).[config](InnerEditor.md#config)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L16)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Overrides

[InnerEditor](InnerEditor.md).[eventIds](InnerEditor.md#eventids)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L20)

___

### inBody

• `Protected` **inBody**: `boolean`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L22)

___

### isHTMLText

• `Protected` **isHTMLText**: `boolean`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L23)

___

### \_keyEvent

• `Protected` **\_keyEvent**: `boolean`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:24](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L24)

## Accessors

### mode

• `get` **mode**(): [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Returns

[`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Inherited from

InnerEditor.mode

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L16)

___

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Inherited from

InnerEditor.editBox

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L23)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Overrides

InnerEditor.tag

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:10](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L10)

## Methods

### registerInnerEditor

▸ `Static` **registerInnerEditor**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[registerInnerEditor](InnerEditor.md#registerinnereditor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[onCreate](InnerEditor.md#oncreate)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:36](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L36)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[create](InnerEditor.md#create)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L37)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[load](InnerEditor.md#load)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:46](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L46)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[update](InnerEditor.md#update)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:55](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L55)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[unload](InnerEditor.md#unload)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:58](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L58)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[onDestroy](InnerEditor.md#ondestroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L66)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[destroy](InnerEditor.md#destroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:67](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/editor/src/tool/InnerEditor.ts#L67)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Overrides

[InnerEditor](InnerEditor.md).[onLoad](InnerEditor.md#onload)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:26](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L26)

___

### onInput

▸ `Protected` **onInput**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:93](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L93)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:98](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L98)

___

### onKeydown

▸ `Protected` **onKeydown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:102](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L102)

___

### onPaste

▸ `Protected` **onPaste**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ClipboardEvent` |

#### Returns

`void`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:123](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L123)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[InnerEditor](InnerEditor.md).[onUpdate](InnerEditor.md#onupdate)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:158](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L158)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Overrides

[InnerEditor](InnerEditor.md).[onUnload](InnerEditor.md#onunload)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:213](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/text-editor/src/TextEditor.ts#L213)
