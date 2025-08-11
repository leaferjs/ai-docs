# Class: TransformTool

## Implements

- [`ITransformTool`](../interfaces/ITransformTool.md)

## Table of contents

### Constructors

- [constructor](TransformTool.md#constructor)

### Properties

- [editBox](TransformTool.md#editbox)
- [editTool](TransformTool.md#edittool)

### Methods

- [onMove](TransformTool.md#onmove)
- [onScale](TransformTool.md#onscale)
- [onRotate](TransformTool.md#onrotate)
- [onSkew](TransformTool.md#onskew)
- [move](TransformTool.md#move)
- [scaleWithDrag](TransformTool.md#scalewithdrag)
- [scaleOf](TransformTool.md#scaleof)
- [flip](TransformTool.md#flip)
- [rotateOf](TransformTool.md#rotateof)
- [skewOf](TransformTool.md#skewof)
- [doMove](TransformTool.md#domove)
- [doScale](TransformTool.md#doscale)
- [doRotate](TransformTool.md#dorotate)
- [doSkew](TransformTool.md#doskew)
- [checkTransform](TransformTool.md#checktransform)
- [getWorldOrigin](TransformTool.md#getworldorigin)
- [getChangedTransform](TransformTool.md#getchangedtransform)
- [emitEvent](TransformTool.md#emitevent)

## Constructors

### constructor

• **new TransformTool**(): [`TransformTool`](TransformTool.md)

#### Returns

[`TransformTool`](TransformTool.md)

## Properties

### editBox

• **editBox**: [`IEditBox`](../interfaces/IEditBox.md)

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[editBox](../interfaces/ITransformTool.md#editbox)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:17](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L17)

___

### editTool

• `Optional` **editTool**: [`IEditTool`](../interfaces/IEditTool.md)

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[editTool](../interfaces/ITransformTool.md#edittool)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:19](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L19)

## Methods

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) \| [`MoveEvent`](MoveEvent.md) |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[onMove](../interfaces/ITransformTool.md#onmove)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:24](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L24)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) \| [`ZoomEvent`](ZoomEvent.md) |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[onScale](../interfaces/ITransformTool.md#onscale)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:60](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L60)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) \| [`RotateEvent`](RotateEvent.md) |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[onRotate](../interfaces/ITransformTool.md#onrotate)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:86](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L86)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[onSkew](../interfaces/ITransformTool.md#onskew)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:113](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L113)

___

### move

▸ **move**(`x`, `y?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) | `undefined` |
| `y` | `number` | `0` |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[move](../interfaces/ITransformTool.md#move)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:127](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L127)

___

### scaleWithDrag

▸ **scaleWithDrag**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:149](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L149)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `_resize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) | `undefined` |
| `scaleX` | `number` | `undefined` |
| `scaleY` | `number` | `scaleX` |
| `_resize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[scaleOf](../interfaces/ITransformTool.md#scaleof)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:168](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L168)

___

### flip

▸ **flip**(`axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`IAxis`](../modules.md#iaxis) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:190](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L190)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[rotateOf](../interfaces/ITransformTool.md#rotateof)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:205](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L205)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `_resize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) | `undefined` |
| `skewX` | `number` | `undefined` |
| `skewY` | `number` | `0` |
| `_resize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[skewOf](../interfaces/ITransformTool.md#skewof)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:227](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L227)

___

### doMove

▸ **doMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:252](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L252)

___

### doScale

▸ **doScale**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:256](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L256)

___

### doRotate

▸ **doRotate**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:260](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L260)

___

### doSkew

▸ **doSkew**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:264](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L264)

___

### checkTransform

▸ **checkTransform**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"moveable"`` \| ``"resizeable"`` \| ``"rotateable"`` \| ``"skewable"`` |

#### Returns

`boolean`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:270](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L270)

___

### getWorldOrigin

▸ **getWorldOrigin**(`origin`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:275](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L275)

___

### getChangedTransform

▸ **getChangedTransform**(`func`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:280](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L280)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/tool/TransformTool.ts:291](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/tool/TransformTool.ts#L291)
