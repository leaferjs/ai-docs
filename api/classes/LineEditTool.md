# Class: LineEditTool

## Hierarchy

- [`EditTool`](EditTool.md)

  ↳ **`LineEditTool`**

## Table of contents

### Constructors

- [constructor](LineEditTool.md#constructor)

### Properties

- [editTarget](LineEditTool.md#edittarget)
- [config](LineEditTool.md#config)
- [editor](LineEditTool.md#editor)
- [view](LineEditTool.md#view)
- [eventIds](LineEditTool.md#eventids)
- [scaleOfEvent](LineEditTool.md#scaleofevent)

### Accessors

- [editBox](LineEditTool.md#editbox)
- [tag](LineEditTool.md#tag)

### Methods

- [registerEditTool](LineEditTool.md#registeredittool)
- [onMove](LineEditTool.md#onmove)
- [onScale](LineEditTool.md#onscale)
- [onRotate](LineEditTool.md#onrotate)
- [load](LineEditTool.md#load)
- [update](LineEditTool.md#update)
- [unload](LineEditTool.md#unload)
- [registerInnerEditor](LineEditTool.md#registerinnereditor)
- [onCreate](LineEditTool.md#oncreate)
- [create](LineEditTool.md#create)
- [onLoad](LineEditTool.md#onload)
- [onUnload](LineEditTool.md#onunload)
- [onDestroy](LineEditTool.md#ondestroy)
- [destroy](LineEditTool.md#destroy)
- [onScaleWithDrag](LineEditTool.md#onscalewithdrag)
- [getInnerMove](LineEditTool.md#getinnermove)
- [getFromToByPath](LineEditTool.md#getfromtobypath)
- [getFromToByPoints](LineEditTool.md#getfromtobypoints)
- [dragPoint](LineEditTool.md#dragpoint)
- [onSkew](LineEditTool.md#onskew)
- [onUpdate](LineEditTool.md#onupdate)

## Constructors

### constructor

• **new LineEditTool**(`editor`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Inherited from

[EditTool](EditTool.md).[constructor](EditTool.md#constructor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:28](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L28)

## Properties

### editTarget

• **editTarget**: [`IUI`](../interfaces/IUI.md)

#### Inherited from

[EditTool](EditTool.md).[editTarget](EditTool.md#edittarget)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:16](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L16)

___

### config

• **config**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[EditTool](EditTool.md).[config](EditTool.md#config)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:18](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L18)

___

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Inherited from

[EditTool](EditTool.md).[editor](EditTool.md#editor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:20](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L20)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Inherited from

[EditTool](EditTool.md).[view](EditTool.md#view)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:23](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L23)

___

### eventIds

• **eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Inherited from

[EditTool](EditTool.md).[eventIds](EditTool.md#eventids)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:25](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L25)

___

### scaleOfEvent

• **scaleOfEvent**: `boolean` = `true`

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:17](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L17)

## Accessors

### editBox

• `get` **editBox**(): [`IEditBox`](../interfaces/IEditBox.md)

#### Returns

[`IEditBox`](../interfaces/IEditBox.md)

#### Inherited from

EditTool.editBox

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:21](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L21)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Overrides

EditTool.tag

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:15](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L15)

## Methods

### registerEditTool

▸ `Static` **registerEditTool**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[registerEditTool](EditTool.md#registeredittool)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:10](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L10)

___

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md) |

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onMove](EditTool.md#onmove)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:20](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L20)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onScale](EditTool.md#onscale)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:30](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L30)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onRotate](EditTool.md#onrotate)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:45](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L45)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[load](EditTool.md#load)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:77](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L77)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[update](EditTool.md#update)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:82](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L82)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[unload](EditTool.md#unload)

#### Defined in

[in/packages/editor/src/tool/EditTool.ts:90](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/EditTool.ts#L90)

___

### registerInnerEditor

▸ `Static` **registerInnerEditor**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[registerInnerEditor](EditTool.md#registerinnereditor)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:9](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L9)

___

### onCreate

▸ **onCreate**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onCreate](EditTool.md#oncreate)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:34](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L34)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[create](EditTool.md#create)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:35](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L35)

___

### onLoad

▸ **onLoad**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onLoad](EditTool.md#onload)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:43](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L43)

___

### onUnload

▸ **onUnload**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onUnload](EditTool.md#onunload)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:55](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L55)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[onDestroy](EditTool.md#ondestroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:64](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L64)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EditTool](EditTool.md).[destroy](EditTool.md#destroy)

#### Defined in

[in/packages/editor/src/tool/InnerEditor.ts:65](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/InnerEditor.ts#L65)

___

### onScaleWithDrag

▸ **onScaleWithDrag**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:19](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L19)

___

### getInnerMove

▸ **getInnerMove**(`ui`, `event`, `lockRatio`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](../interfaces/IUI.md) |
| `event` | [`IDragEvent`](../interfaces/IDragEvent.md) |
| `lockRatio` | `boolean` \| ``"corner"`` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:66](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L66)

___

### getFromToByPath

▸ **getFromToByPath**(`path`): [`IFromToData`](../interfaces/IFromToData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

[`IFromToData`](../interfaces/IFromToData.md)

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:72](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L72)

___

### getFromToByPoints

▸ **getFromToByPoints**(`originPoints`): [`IFromToData`](../interfaces/IFromToData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `originPoints` | `number`[] \| [`IPointData`](../interfaces/IPointData.md)[] |

#### Returns

[`IFromToData`](../interfaces/IFromToData.md)

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:79](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L79)

___

### dragPoint

▸ **dragPoint**(`fromPoint`, `toPoint`, `isDragFrom`, `around`, `movePoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `toPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `isDragFrom` | `boolean` |
| `around` | [`IAround`](../modules.md#iaround) |
| `movePoint` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:88](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L88)

___

### onSkew

▸ **onSkew**(`_e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md) |

#### Returns

`void`

#### Overrides

[EditTool](EditTool.md).[onSkew](EditTool.md#onskew)

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:99](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L99)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[EditTool](EditTool.md).[onUpdate](EditTool.md#onupdate)

#### Defined in

[in/packages/editor/src/tool/LineEditTool.ts:103](https://github.com/leaferjs/leafer-in/blob/c5ba51f/packages/editor/src/tool/LineEditTool.ts#L103)
