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

• **new TransformTool**()

## Properties

### editBox

• **editBox**: [`IEditBox`](../interfaces/IEditBox.md)

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[editBox](../interfaces/ITransformTool.md#editbox)

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:17](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L17)

___

### editTool

• `Optional` **editTool**: [`IEditTool`](../interfaces/IEditTool.md)

#### Implementation of

[ITransformTool](../interfaces/ITransformTool.md).[editTool](../interfaces/ITransformTool.md#edittool)

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:19](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L19)

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

[in/packages/editor/src/tool/TransformTool.ts:24](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L24)

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

[in/packages/editor/src/tool/TransformTool.ts:52](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L52)

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

[in/packages/editor/src/tool/TransformTool.ts:78](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L78)

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

[in/packages/editor/src/tool/TransformTool.ts:112](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L112)

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

[in/packages/editor/src/tool/TransformTool.ts:126](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L126)

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

[in/packages/editor/src/tool/TransformTool.ts:148](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L148)

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

[in/packages/editor/src/tool/TransformTool.ts:167](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L167)

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

[in/packages/editor/src/tool/TransformTool.ts:189](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L189)

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

[in/packages/editor/src/tool/TransformTool.ts:204](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L204)

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

[in/packages/editor/src/tool/TransformTool.ts:226](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L226)

___

### doMove

▸ `Protected` **doMove**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorMoveEvent`](../interfaces/IEditorMoveEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:251](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L251)

___

### doScale

▸ `Protected` **doScale**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:255](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L255)

___

### doRotate

▸ `Protected` **doRotate**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorRotateEvent`](../interfaces/IEditorRotateEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:259](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L259)

___

### doSkew

▸ `Protected` **doSkew**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEditorSkewEvent`](../interfaces/IEditorSkewEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:263](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L263)

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

[in/packages/editor/src/tool/TransformTool.ts:269](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L269)

___

### getWorldOrigin

▸ `Protected` **getWorldOrigin**(`origin`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:274](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L274)

___

### getChangedTransform

▸ `Protected` **getChangedTransform**(`func`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Defined in

[in/packages/editor/src/tool/TransformTool.ts:279](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L279)

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

[in/packages/editor/src/tool/TransformTool.ts:290](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/tool/TransformTool.ts#L290)
