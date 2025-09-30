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
- [childrenBoxBounds](ILeafLayout.md#childrenboxbounds)
- [childrenStrokeBounds](ILeafLayout.md#childrenstrokebounds)
- [childrenRenderBounds](ILeafLayout.md#childrenrenderbounds)
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
- [scrollConfigChanged](ILeafLayout.md#scrollconfigchanged)
- [editConfigChanged](ILeafLayout.md#editconfigchanged)
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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:10](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L10)

___

### proxyZoom

• **proxyZoom**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:12](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L12)

___

### contentBounds

• **contentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:16](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L16)

___

### boxBounds

• **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:17](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L17)

___

### strokeBounds

• **strokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:18](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L18)

___

### renderBounds

• **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:19](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L19)

___

### localContentBounds

• **localContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:23](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L23)

___

### localStrokeBounds

• **localStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:25](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L25)

___

### localRenderBounds

• **localRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:26](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L26)

___

### worldContentBounds

• **worldContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:30](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L30)

___

### worldBoxBounds

• **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:31](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L31)

___

### worldStrokeBounds

• **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:32](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L32)

___

### childrenBoxBounds

• `Optional` **childrenBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:37](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L37)

___

### childrenStrokeBounds

• `Optional` **childrenStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:38](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L38)

___

### childrenRenderBounds

• `Optional` **childrenRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:39](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L39)

___

### resized

• **resized**: ``"scale"`` \| ``"local"`` \| ``"inner"``

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:42](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L42)

___

### waitAutoLayout

• **waitAutoLayout**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:43](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L43)

___

### matrixChanged

• **matrixChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:46](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L46)

___

### scaleChanged

• **scaleChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:47](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L47)

___

### rotationChanged

• **rotationChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:48](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L48)

___

### boundsChanged

• **boundsChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:51](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L51)

___

### boxChanged

• **boxChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:53](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L53)

___

### strokeChanged

• **strokeChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:54](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L54)

___

### renderChanged

• **renderChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:55](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L55)

___

### localBoxChanged

• **localBoxChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:57](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L57)

___

### surfaceChanged

• **surfaceChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:60](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L60)

___

### opacityChanged

• **opacityChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:61](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L61)

___

### hitCanvasChanged

• **hitCanvasChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:63](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L63)

___

### childrenSortChanged

• `Optional` **childrenSortChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:65](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L65)

___

### stateStyleChanged

• `Optional` **stateStyleChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:66](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L66)

___

### scrollConfigChanged

• `Optional` **scrollConfigChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:69](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L69)

___

### editConfigChanged

• `Optional` **editConfigChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:70](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L70)

___

### affectScaleOrRotation

• **affectScaleOrRotation**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:73](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L73)

___

### affectRotation

• **affectRotation**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:74](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L74)

___

### affectChildrenSort

• `Optional` **affectChildrenSort**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:75](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L75)

___

### strokeSpread

• **strokeSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:77](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L77)

___

### strokeBoxSpread

• **strokeBoxSpread**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:78](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L78)

___

### renderSpread

• **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:79](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L79)

___

### renderShapeSpread

• **renderShapeSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:80](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L80)

___

### a

• **a**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:83](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L83)

___

### b

• **b**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:84](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L84)

___

### c

• **c**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:85](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L85)

___

### d

• **d**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:86](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L86)

___

### e

• **e**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:87](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L87)

___

### f

• **f**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:88](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L88)

___

### x

• **x**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:89](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L89)

___

### y

• **y**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:90](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L90)

___

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:91](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L91)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:92](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L92)

## Methods

### createLocal

▸ **createLocal**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:94](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L94)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:96](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L96)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:98](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L98)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:99](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L99)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:100](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L100)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:101](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L101)

___

### shrinkContent

▸ **shrinkContent**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:104](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L104)

___

### spreadStroke

▸ **spreadStroke**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:105](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L105)

___

### spreadRender

▸ **spreadRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:106](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L106)

___

### shrinkContentCancel

▸ **shrinkContentCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:107](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L107)

___

### spreadStrokeCancel

▸ **spreadStrokeCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:108](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L108)

___

### spreadRenderCancel

▸ **spreadRenderCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:109](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L109)

___

### boxChange

▸ **boxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:112](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L112)

___

### localBoxChange

▸ **localBoxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:113](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L113)

___

### strokeChange

▸ **strokeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:114](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L114)

___

### renderChange

▸ **renderChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:115](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L115)

___

### scaleChange

▸ **scaleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:118](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L118)

___

### rotationChange

▸ **rotationChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:119](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L119)

___

### matrixChange

▸ **matrixChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:120](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L120)

___

### surfaceChange

▸ **surfaceChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:123](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L123)

___

### opacityChange

▸ **opacityChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:124](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L124)

___

### childrenSortChange

▸ **childrenSortChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:126](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L126)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:128](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/layout/ILeafLayout.ts#L128)
