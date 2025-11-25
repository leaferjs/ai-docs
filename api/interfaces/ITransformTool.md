# Interface: ITransformTool

## Hierarchy

- **`ITransformTool`**

  ↳ [`IEditorBase`](IEditorBase.md)

## Implemented by

- [`TransformTool`](../classes/TransformTool.md)

## Table of contents

### Properties

- [editBox](ITransformTool.md#editbox)
- [editTool](ITransformTool.md#edittool)

### Methods

- [onMove](ITransformTool.md#onmove)
- [onScale](ITransformTool.md#onscale)
- [onRotate](ITransformTool.md#onrotate)
- [onSkew](ITransformTool.md#onskew)
- [move](ITransformTool.md#move)
- [scaleOf](ITransformTool.md#scaleof)
- [rotateOf](ITransformTool.md#rotateof)
- [skewOf](ITransformTool.md#skewof)

## Properties

### editBox

• **editBox**: [`IEditBoxBase`](IEditBoxBase.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:82](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L82)

___

### editTool

• `Optional` **editTool**: [`IObject`](IObject.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:83](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L83)

## Methods

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) \| [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:85](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L85)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) \| [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:86](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L86)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) \| [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:87](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L87)

___

### onSkew

▸ **onSkew**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IDragEvent`](IDragEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:88](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L88)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:90](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L90)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:91](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L91)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:92](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L92)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:93](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/interface/src/editor/IEditor.ts#L93)
