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

[src/ui/packages/interface/src/editor/IEditor.ts:72](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L72)

___

### editTool

• `Optional` **editTool**: [`IObject`](IObject.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L73)

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

[src/ui/packages/interface/src/editor/IEditor.ts:75](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L75)

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

[src/ui/packages/interface/src/editor/IEditor.ts:76](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L76)

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

[src/ui/packages/interface/src/editor/IEditor.ts:77](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L77)

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

[src/ui/packages/interface/src/editor/IEditor.ts:78](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L78)

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

[src/ui/packages/interface/src/editor/IEditor.ts:80](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L80)

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

[src/ui/packages/interface/src/editor/IEditor.ts:81](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L81)

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

[src/ui/packages/interface/src/editor/IEditor.ts:82](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L82)

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

[src/ui/packages/interface/src/editor/IEditor.ts:83](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/editor/IEditor.ts#L83)
