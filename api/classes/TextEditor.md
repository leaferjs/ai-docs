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

[in/packages/editor/src/tool/InnerEditor.ts:28](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L28)

## Properties

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Inherited from

[InnerEditor](InnerEditor.md).[editor](InnerEditor.md#editor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L20)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Inherited from

[InnerEditor](InnerEditor.md).[view](InnerEditor.md#view)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L23)

___

### editTarget

• **editTarget**: [`IText`](../interfaces/IText.md)

#### Overrides

[InnerEditor](InnerEditor.md).[editTarget](InnerEditor.md#edittarget)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:11](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L11)

___

### editDom

• **editDom**: `HTMLDivElement`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:13](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L13)

___

### textScale

• **textScale**: `number`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:14](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L14)

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

[in/packages/text-editor/src/TextEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L16)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Overrides

[InnerEditor](InnerEditor.md).[eventIds](InnerEditor.md#eventids)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L20)

___

### inBody

• `Protected` **inBody**: `boolean`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L22)

___

### isHTMLText

• `Protected` **isHTMLText**: `boolean`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L23)

___

### \_keyEvent

• `Protected` **\_keyEvent**: `boolean`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:24](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L24)

## Accessors

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Inherited from

InnerEditor.editBox

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:21](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L21)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Overrides

InnerEditor.tag

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:10](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L10)

## Methods

### registerInnerEditor

▸ `Static` **registerInnerEditor**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[registerInnerEditor](InnerEditor.md#registerinnereditor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[onCreate](InnerEditor.md#oncreate)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:34](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L34)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[create](InnerEditor.md#create)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:35](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L35)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[load](InnerEditor.md#load)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:44](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L44)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[update](InnerEditor.md#update)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:53](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L53)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[unload](InnerEditor.md#unload)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:56](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L56)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[onDestroy](InnerEditor.md#ondestroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:64](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L64)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[destroy](InnerEditor.md#destroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L65)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Overrides

[InnerEditor](InnerEditor.md).[onLoad](InnerEditor.md#onload)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:26](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L26)

___

### onInput

▸ `Protected` **onInput**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:91](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L91)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:96](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L96)

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

[in/packages/text-editor/src/TextEditor.ts:100](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L100)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[InnerEditor](InnerEditor.md).[onUpdate](InnerEditor.md#onupdate)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:119](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L119)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Overrides

[InnerEditor](InnerEditor.md).[onUnload](InnerEditor.md#onunload)

#### Defined in

[in/packages/text-editor/src/TextEditor.ts:172](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/text-editor/src/TextEditor.ts#L172)
