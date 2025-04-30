# Class: EditTool

## Hierarchy

- [`InnerEditor`](InnerEditor.md)

  ↳ **`EditTool`**

  ↳↳ [`LineEditTool`](LineEditTool.md)

## Implements

- [`IEditTool`](../interfaces/IEditTool.md)

## Table of contents

### Constructors

- [constructor](EditTool.md#constructor)

### Properties

- [editTarget](EditTool.md#edittarget)
- [config](EditTool.md#config)
- [editor](EditTool.md#editor)
- [view](EditTool.md#view)
- [eventIds](EditTool.md#eventids)

### Accessors

- [tag](EditTool.md#tag)
- [editBox](EditTool.md#editbox)

### Methods

- [registerEditTool](EditTool.md#registeredittool)
- [onMove](EditTool.md#onmove)
- [onScale](EditTool.md#onscale)
- [onRotate](EditTool.md#onrotate)
- [onSkew](EditTool.md#onskew)
- [load](EditTool.md#load)
- [update](EditTool.md#update)
- [unload](EditTool.md#unload)
- [registerInnerEditor](EditTool.md#registerinnereditor)
- [onCreate](EditTool.md#oncreate)
- [create](EditTool.md#create)
- [onLoad](EditTool.md#onload)
- [onUpdate](EditTool.md#onupdate)
- [onUnload](EditTool.md#onunload)
- [onDestroy](EditTool.md#ondestroy)
- [destroy](EditTool.md#destroy)

## Constructors

### constructor

• **new EditTool**(`editor`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Inherited from

[InnerEditor](InnerEditor.md).[constructor](InnerEditor.md#constructor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:28](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L28)

## Properties

### editTarget

• **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[editTarget](../interfaces/IEditTool.md#edittarget)

#### Inherited from

[InnerEditor](InnerEditor.md).[editTarget](InnerEditor.md#edittarget)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L16)

___

### config

• **config**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[config](../interfaces/IEditTool.md#config)

#### Inherited from

[InnerEditor](InnerEditor.md).[config](InnerEditor.md#config)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L18)

___

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[editor](../interfaces/IEditTool.md#editor)

#### Inherited from

[InnerEditor](InnerEditor.md).[editor](InnerEditor.md#editor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L20)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[view](../interfaces/IEditTool.md#view)

#### Inherited from

[InnerEditor](InnerEditor.md).[view](InnerEditor.md#view)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L23)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[eventIds](../interfaces/IEditTool.md#eventids)

#### Inherited from

[InnerEditor](InnerEditor.md).[eventIds](InnerEditor.md#eventids)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:25](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L25)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[tag](../interfaces/IEditTool.md#tag)

#### Overrides

InnerEditor.tag

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:15](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L15)

___

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[editBox](../interfaces/IEditTool.md#editbox)

#### Inherited from

InnerEditor.editBox

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:21](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L21)

## Methods

### registerEditTool

▸ `Static` **registerEditTool**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:10](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L10)

___

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onMove](../interfaces/IEditTool.md#onmove)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:20](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L20)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onScale](../interfaces/IEditTool.md#onscale)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:28](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L28)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onRotate](../interfaces/IEditTool.md#onrotate)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:40](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L40)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onSkew](../interfaces/IEditTool.md#onskew)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:52](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L52)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[load](../interfaces/IEditTool.md#load)

#### Overrides

[InnerEditor](InnerEditor.md).[load](InnerEditor.md#load)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:66](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L66)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[update](../interfaces/IEditTool.md#update)

#### Overrides

[InnerEditor](InnerEditor.md).[update](InnerEditor.md#update)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:71](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L71)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[unload](../interfaces/IEditTool.md#unload)

#### Overrides

[InnerEditor](InnerEditor.md).[unload](InnerEditor.md#unload)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:79](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/EditTool.ts#L79)

___

### registerInnerEditor

▸ `Static` **registerInnerEditor**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[registerInnerEditor](InnerEditor.md#registerinnereditor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onCreate](../interfaces/IEditTool.md#oncreate)

#### Inherited from

[InnerEditor](InnerEditor.md).[onCreate](InnerEditor.md#oncreate)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:34](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L34)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[create](../interfaces/IEditTool.md#create)

#### Inherited from

[InnerEditor](InnerEditor.md).[create](InnerEditor.md#create)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:35](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L35)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onLoad](../interfaces/IEditTool.md#onload)

#### Inherited from

[InnerEditor](InnerEditor.md).[onLoad](InnerEditor.md#onload)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:43](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L43)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onUpdate](../interfaces/IEditTool.md#onupdate)

#### Inherited from

[InnerEditor](InnerEditor.md).[onUpdate](InnerEditor.md#onupdate)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:52](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L52)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[onUnload](InnerEditor.md#onunload)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:55](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L55)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[onDestroy](../interfaces/IEditTool.md#ondestroy)

#### Inherited from

[InnerEditor](InnerEditor.md).[onDestroy](InnerEditor.md#ondestroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:64](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L64)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[destroy](../interfaces/IEditTool.md#destroy)

#### Inherited from

[InnerEditor](InnerEditor.md).[destroy](InnerEditor.md#destroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/editor/src/tool/InnerEditor.ts#L65)
