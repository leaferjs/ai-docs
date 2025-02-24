# Interface: IEditTool

## Hierarchy

- [`IInnerEditor`](IInnerEditor.md)

  ↳ **`IEditTool`**

## Implemented by

- [`EditTool`](../classes/EditTool.md)

## Table of contents

### Properties

- [tag](IEditTool.md#tag)
- [editTarget](IEditTool.md#edittarget)
- [config](IEditTool.md#config)
- [editor](IEditTool.md#editor)
- [editBox](IEditTool.md#editbox)
- [view](IEditTool.md#view)
- [eventIds](IEditTool.md#eventids)

### Methods

- [onMove](IEditTool.md#onmove)
- [onScale](IEditTool.md#onscale)
- [onScaleWithDrag](IEditTool.md#onscalewithdrag)
- [onRotate](IEditTool.md#onrotate)
- [onSkew](IEditTool.md#onskew)
- [onCreate](IEditTool.md#oncreate)
- [create](IEditTool.md#create)
- [onLoad](IEditTool.md#onload)
- [load](IEditTool.md#load)
- [unload](IEditTool.md#unload)
- [onUpdate](IEditTool.md#onupdate)
- [update](IEditTool.md#update)
- [onDestroy](IEditTool.md#ondestroy)
- [destroy](IEditTool.md#destroy)

## Properties

### tag

• **tag**: `string`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[tag](IInnerEditor.md#tag)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:36](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L36)

___

### editTarget

• **editTarget**: [`IUI`](IUI.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editTarget](IInnerEditor.md#edittarget)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:37](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L37)

___

### config

• **config**: [`IObject`](IObject.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[config](IInnerEditor.md#config)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:38](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L38)

___

### editor

• **editor**: [`IEditor`](IEditor.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editor](IInnerEditor.md#editor)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:40](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L40)

___

### editBox

• **editBox**: [`IEditBox`](IEditBox.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[editBox](IInnerEditor.md#editbox)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:41](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L41)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Inherited from

[IInnerEditor](IInnerEditor.md).[view](IInnerEditor.md#view)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:42](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L42)

___

### eventIds

• **eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Inherited from

[IInnerEditor](IInnerEditor.md).[eventIds](IInnerEditor.md#eventids)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:44](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L44)

## Methods

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorMoveEvent`](IEditorMoveEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:28](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L28)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:29](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L29)

___

### onScaleWithDrag

▸ `Optional` **onScaleWithDrag**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:30](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L30)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorRotateEvent`](IEditorRotateEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:31](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L31)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorSkewEvent`](IEditorSkewEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:32](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L32)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onCreate](IInnerEditor.md#oncreate)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:46](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L46)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[create](IInnerEditor.md#create)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:47](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L47)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onLoad](IInnerEditor.md#onload)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:50](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L50)

▸ **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onLoad](IInnerEditor.md#onload)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:53](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L53)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[load](IInnerEditor.md#load)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:51](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L51)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[unload](IInnerEditor.md#unload)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:54](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L54)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onUpdate](IInnerEditor.md#onupdate)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:56](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L56)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[update](IInnerEditor.md#update)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:57](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L57)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[onDestroy](IInnerEditor.md#ondestroy)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:59](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L59)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IInnerEditor](IInnerEditor.md).[destroy](IInnerEditor.md#destroy)

#### Defined in

[in/packages/interface/src/editor/IEditor.ts:60](https://github.com/leaferjs/leafer-in/blob/db8cfc9/packages/interface/src/editor/IEditor.ts#L60)
