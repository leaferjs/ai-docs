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

[ui/packages/interface/src/editor/IEditor.ts:65](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L65)

___

### editTool

• `Optional` **editTool**: [`IObject`](IObject.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:66](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L66)

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

[ui/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L68)

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

[ui/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L69)

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

[ui/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L70)

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

[ui/packages/interface/src/editor/IEditor.ts:71](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L71)

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

[ui/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L73)

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

[ui/packages/interface/src/editor/IEditor.ts:74](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L74)

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

[ui/packages/interface/src/editor/IEditor.ts:75](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L75)

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

[ui/packages/interface/src/editor/IEditor.ts:76](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L76)
