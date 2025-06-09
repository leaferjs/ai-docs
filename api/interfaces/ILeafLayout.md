# Interface: ILeafLayout

## Implemented by

- [`LeafLayout`](../classes/LeafLayout.md)

## Table of contents

### Properties

- [leaf](ILeafLayout.md#leaf)
- [proxyZoom](ILeafLayout.md#proxyzoom)
- [contentBounds](ILeafLayout.md#contentbounds)
- [boxBounds](ILeafLayout.md#boxbounds)
- [strokeBounds](ILeafLayout.md#strokebounds)
- [renderBounds](ILeafLayout.md#renderbounds)
- [localContentBounds](ILeafLayout.md#localcontentbounds)
- [localStrokeBounds](ILeafLayout.md#localstrokebounds)
- [localRenderBounds](ILeafLayout.md#localrenderbounds)
- [worldContentBounds](ILeafLayout.md#worldcontentbounds)
- [worldBoxBounds](ILeafLayout.md#worldboxbounds)
- [worldStrokeBounds](ILeafLayout.md#worldstrokebounds)
- [resized](ILeafLayout.md#resized)
- [waitAutoLayout](ILeafLayout.md#waitautolayout)
- [matrixChanged](ILeafLayout.md#matrixchanged)
- [scaleChanged](ILeafLayout.md#scalechanged)
- [rotationChanged](ILeafLayout.md#rotationchanged)
- [boundsChanged](ILeafLayout.md#boundschanged)
- [boxChanged](ILeafLayout.md#boxchanged)
- [strokeChanged](ILeafLayout.md#strokechanged)
- [renderChanged](ILeafLayout.md#renderchanged)
- [localBoxChanged](ILeafLayout.md#localboxchanged)
- [surfaceChanged](ILeafLayout.md#surfacechanged)
- [opacityChanged](ILeafLayout.md#opacitychanged)
- [hitCanvasChanged](ILeafLayout.md#hitcanvaschanged)
- [childrenSortChanged](ILeafLayout.md#childrensortchanged)
- [stateStyleChanged](ILeafLayout.md#statestylechanged)
- [affectScaleOrRotation](ILeafLayout.md#affectscaleorrotation)
- [affectRotation](ILeafLayout.md#affectrotation)
- [affectChildrenSort](ILeafLayout.md#affectchildrensort)
- [strokeSpread](ILeafLayout.md#strokespread)
- [strokeBoxSpread](ILeafLayout.md#strokeboxspread)
- [renderSpread](ILeafLayout.md#renderspread)
- [renderShapeSpread](ILeafLayout.md#rendershapespread)
- [a](ILeafLayout.md#a)
- [b](ILeafLayout.md#b)
- [c](ILeafLayout.md#c)
- [d](ILeafLayout.md#d)
- [e](ILeafLayout.md#e)
- [f](ILeafLayout.md#f)
- [x](ILeafLayout.md#x)
- [y](ILeafLayout.md#y)
- [width](ILeafLayout.md#width)
- [height](ILeafLayout.md#height)

### Methods

- [createLocal](ILeafLayout.md#createlocal)
- [update](ILeafLayout.md#update)
- [getTransform](ILeafLayout.md#gettransform)
- [getBounds](ILeafLayout.md#getbounds)
- [getLayoutBounds](ILeafLayout.md#getlayoutbounds)
- [getLayoutPoints](ILeafLayout.md#getlayoutpoints)
- [shrinkContent](ILeafLayout.md#shrinkcontent)
- [spreadStroke](ILeafLayout.md#spreadstroke)
- [spreadRender](ILeafLayout.md#spreadrender)
- [shrinkContentCancel](ILeafLayout.md#shrinkcontentcancel)
- [spreadStrokeCancel](ILeafLayout.md#spreadstrokecancel)
- [spreadRenderCancel](ILeafLayout.md#spreadrendercancel)
- [boxChange](ILeafLayout.md#boxchange)
- [localBoxChange](ILeafLayout.md#localboxchange)
- [strokeChange](ILeafLayout.md#strokechange)
- [renderChange](ILeafLayout.md#renderchange)
- [scaleChange](ILeafLayout.md#scalechange)
- [rotationChange](ILeafLayout.md#rotationchange)
- [matrixChange](ILeafLayout.md#matrixchange)
- [surfaceChange](ILeafLayout.md#surfacechange)
- [opacityChange](ILeafLayout.md#opacitychange)
- [childrenSortChange](ILeafLayout.md#childrensortchange)
- [destroy](ILeafLayout.md#destroy)

## Properties

### leaf

• **leaf**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:9](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L9)

___

### proxyZoom

• **proxyZoom**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:11](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L11)

___

### contentBounds

• **contentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:15](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L15)

___

### boxBounds

• **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:16](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L16)

___

### strokeBounds

• **strokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:17](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L17)

___

### renderBounds

• **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:18](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L18)

___

### localContentBounds

• **localContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:22](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L22)

___

### localStrokeBounds

• **localStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:24](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L24)

___

### localRenderBounds

• **localRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:25](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L25)

___

### worldContentBounds

• **worldContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:29](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L29)

___

### worldBoxBounds

• **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:30](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L30)

___

### worldStrokeBounds

• **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:31](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L31)

___

### resized

• **resized**: ``"scale"`` \| ``"local"`` \| ``"inner"``

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:35](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L35)

___

### waitAutoLayout

• **waitAutoLayout**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:36](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L36)

___

### matrixChanged

• **matrixChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:39](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L39)

___

### scaleChanged

• **scaleChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:40](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L40)

___

### rotationChanged

• **rotationChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:41](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L41)

___

### boundsChanged

• **boundsChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:44](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L44)

___

### boxChanged

• **boxChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:46](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L46)

___

### strokeChanged

• **strokeChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:47](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L47)

___

### renderChanged

• **renderChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:48](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L48)

___

### localBoxChanged

• **localBoxChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:50](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L50)

___

### surfaceChanged

• **surfaceChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:53](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L53)

___

### opacityChanged

• **opacityChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:54](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L54)

___

### hitCanvasChanged

• **hitCanvasChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L56)

___

### childrenSortChanged

• `Optional` **childrenSortChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:58](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L58)

___

### stateStyleChanged

• `Optional` **stateStyleChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:59](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L59)

___

### affectScaleOrRotation

• **affectScaleOrRotation**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:62](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L62)

___

### affectRotation

• **affectRotation**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:63](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L63)

___

### affectChildrenSort

• `Optional` **affectChildrenSort**: `boolean`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:64](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L64)

___

### strokeSpread

• **strokeSpread**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:66](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L66)

___

### strokeBoxSpread

• **strokeBoxSpread**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:67](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L67)

___

### renderSpread

• **renderSpread**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:68](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L68)

___

### renderShapeSpread

• **renderShapeSpread**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:69](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L69)

___

### a

• **a**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:72](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L72)

___

### b

• **b**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:73](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L73)

___

### c

• **c**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:74](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L74)

___

### d

• **d**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:75](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L75)

___

### e

• **e**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:76](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L76)

___

### f

• **f**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:77](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L77)

___

### x

• **x**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:78](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L78)

___

### y

• **y**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:79](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L79)

___

### width

• **width**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:80](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L80)

___

### height

• **height**: `number`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:81](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L81)

## Methods

### createLocal

▸ **createLocal**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:83](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L83)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:85](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L85)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:87](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L87)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:88](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L88)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:89](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L89)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](IPointData.md)[]

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:90](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L90)

___

### shrinkContent

▸ **shrinkContent**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:93](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L93)

___

### spreadStroke

▸ **spreadStroke**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:94](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L94)

___

### spreadRender

▸ **spreadRender**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:95](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L95)

___

### shrinkContentCancel

▸ **shrinkContentCancel**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:96](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L96)

___

### spreadStrokeCancel

▸ **spreadStrokeCancel**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:97](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L97)

___

### spreadRenderCancel

▸ **spreadRenderCancel**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:98](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L98)

___

### boxChange

▸ **boxChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:101](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L101)

___

### localBoxChange

▸ **localBoxChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:102](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L102)

___

### strokeChange

▸ **strokeChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:103](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L103)

___

### renderChange

▸ **renderChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:104](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L104)

___

### scaleChange

▸ **scaleChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:107](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L107)

___

### rotationChange

▸ **rotationChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:108](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L108)

___

### matrixChange

▸ **matrixChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:109](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L109)

___

### surfaceChange

▸ **surfaceChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:112](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L112)

___

### opacityChange

▸ **opacityChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:113](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L113)

___

### childrenSortChange

▸ **childrenSortChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:115](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L115)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/layout/ILeafLayout.ts:117](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/layout/ILeafLayout.ts#L117)
