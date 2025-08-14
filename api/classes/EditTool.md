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
- [mode](EditTool.md#mode)
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

• **new EditTool**(`editor`): [`EditTool`](EditTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Returns

[`EditTool`](EditTool.md)

#### Inherited from

[InnerEditor](InnerEditor.md).[constructor](InnerEditor.md#constructor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L30)

## Properties

### editTarget

• **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[editTarget](../interfaces/IEditTool.md#edittarget)

#### Inherited from

[InnerEditor](InnerEditor.md).[editTarget](InnerEditor.md#edittarget)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L18)

___

### config

• **config**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[config](../interfaces/IEditTool.md#config)

#### Inherited from

[InnerEditor](InnerEditor.md).[config](InnerEditor.md#config)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L20)

___

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[editor](../interfaces/IEditTool.md#editor)

#### Inherited from

[InnerEditor](InnerEditor.md).[editor](InnerEditor.md#editor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:22](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L22)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[view](../interfaces/IEditTool.md#view)

#### Inherited from

[InnerEditor](InnerEditor.md).[view](InnerEditor.md#view)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:25](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L25)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[eventIds](../interfaces/IEditTool.md#eventids)

#### Inherited from

[InnerEditor](InnerEditor.md).[eventIds](InnerEditor.md#eventids)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:27](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L27)

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

[src/in/packages/editor/src/tool/EditTool.ts:15](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L15)

___

### mode

• `get` **mode**(): [`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Returns

[`IInnerEditorMode`](../modules.md#iinnereditormode)

#### Implementation of

[IEditTool](../interfaces/IEditTool.md).[mode](../interfaces/IEditTool.md#mode)

#### Inherited from

InnerEditor.mode

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L16)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L23)

## Methods

### registerEditTool

▸ **registerEditTool**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/EditTool.ts:10](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L10)

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

[src/in/packages/editor/src/tool/EditTool.ts:20](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L20)

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

[src/in/packages/editor/src/tool/EditTool.ts:28](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L28)

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

[src/in/packages/editor/src/tool/EditTool.ts:40](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L40)

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

[src/in/packages/editor/src/tool/EditTool.ts:52](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L52)

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

[src/in/packages/editor/src/tool/EditTool.ts:66](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L66)

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

[src/in/packages/editor/src/tool/EditTool.ts:71](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L71)

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

[src/in/packages/editor/src/tool/EditTool.ts:76](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/EditTool.ts#L76)

___

### registerInnerEditor

▸ **registerInnerEditor**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[registerInnerEditor](InnerEditor.md#registerinnereditor)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L9)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:36](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L36)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L37)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:45](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L45)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:54](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L54)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Inherited from

[InnerEditor](InnerEditor.md).[onUnload](InnerEditor.md#onunload)

#### Defined in

[src/in/packages/editor/src/tool/InnerEditor.ts:57](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L57)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:66](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L66)

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

[src/in/packages/editor/src/tool/InnerEditor.ts:67](https://github.com/leaferjs/leafer-in/blob/3155efb1f01ad5366bc45f4623d731c4f4d0a397/packages/editor/src/tool/InnerEditor.ts#L67)
