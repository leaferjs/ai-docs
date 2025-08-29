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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:9](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L9)

___

### proxyZoom

• **proxyZoom**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:11](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L11)

___

### contentBounds

• **contentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:15](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L15)

___

### boxBounds

• **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:16](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L16)

___

### strokeBounds

• **strokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:17](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L17)

___

### renderBounds

• **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:18](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L18)

___

### localContentBounds

• **localContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:22](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L22)

___

### localStrokeBounds

• **localStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:24](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L24)

___

### localRenderBounds

• **localRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:25](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L25)

___

### worldContentBounds

• **worldContentBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:29](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L29)

___

### worldBoxBounds

• **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:30](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L30)

___

### worldStrokeBounds

• **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:31](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L31)

___

### childrenBoxBounds

• `Optional` **childrenBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:36](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L36)

___

### childrenStrokeBounds

• `Optional` **childrenStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:37](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L37)

___

### childrenRenderBounds

• `Optional` **childrenRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:38](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L38)

___

### resized

• **resized**: ``"scale"`` \| ``"local"`` \| ``"inner"``

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:41](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L41)

___

### waitAutoLayout

• **waitAutoLayout**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:42](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L42)

___

### matrixChanged

• **matrixChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:45](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L45)

___

### scaleChanged

• **scaleChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:46](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L46)

___

### rotationChanged

• **rotationChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:47](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L47)

___

### boundsChanged

• **boundsChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:50](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L50)

___

### boxChanged

• **boxChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:52](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L52)

___

### strokeChanged

• **strokeChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:53](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L53)

___

### renderChanged

• **renderChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:54](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L54)

___

### localBoxChanged

• **localBoxChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:56](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L56)

___

### surfaceChanged

• **surfaceChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:59](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L59)

___

### opacityChanged

• **opacityChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:60](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L60)

___

### hitCanvasChanged

• **hitCanvasChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:62](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L62)

___

### childrenSortChanged

• `Optional` **childrenSortChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:64](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L64)

___

### stateStyleChanged

• `Optional` **stateStyleChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:65](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L65)

___

### scrollConfigChanged

• `Optional` **scrollConfigChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:68](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L68)

___

### editConfigChanged

• `Optional` **editConfigChanged**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:69](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L69)

___

### affectScaleOrRotation

• **affectScaleOrRotation**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:72](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L72)

___

### affectRotation

• **affectRotation**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:73](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L73)

___

### affectChildrenSort

• `Optional` **affectChildrenSort**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:74](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L74)

___

### strokeSpread

• **strokeSpread**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:76](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L76)

___

### strokeBoxSpread

• **strokeBoxSpread**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:77](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L77)

___

### renderSpread

• **renderSpread**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:78](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L78)

___

### renderShapeSpread

• **renderShapeSpread**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:79](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L79)

___

### a

• **a**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:82](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L82)

___

### b

• **b**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:83](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L83)

___

### c

• **c**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:84](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L84)

___

### d

• **d**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:85](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L85)

___

### e

• **e**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:86](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L86)

___

### f

• **f**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:87](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L87)

___

### x

• **x**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:88](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L88)

___

### y

• **y**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:89](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L89)

___

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:90](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L90)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:91](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L91)

## Methods

### createLocal

▸ **createLocal**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:93](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L93)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:95](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L95)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:97](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L97)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:98](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L98)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:99](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L99)

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

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:100](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L100)

___

### shrinkContent

▸ **shrinkContent**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:103](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L103)

___

### spreadStroke

▸ **spreadStroke**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:104](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L104)

___

### spreadRender

▸ **spreadRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:105](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L105)

___

### shrinkContentCancel

▸ **shrinkContentCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:106](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L106)

___

### spreadStrokeCancel

▸ **spreadStrokeCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:107](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L107)

___

### spreadRenderCancel

▸ **spreadRenderCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:108](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L108)

___

### boxChange

▸ **boxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:111](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L111)

___

### localBoxChange

▸ **localBoxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:112](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L112)

___

### strokeChange

▸ **strokeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:113](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L113)

___

### renderChange

▸ **renderChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:114](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L114)

___

### scaleChange

▸ **scaleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:117](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L117)

___

### rotationChange

▸ **rotationChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:118](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L118)

___

### matrixChange

▸ **matrixChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:119](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L119)

___

### surfaceChange

▸ **surfaceChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:122](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L122)

___

### opacityChange

▸ **opacityChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:123](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L123)

___

### childrenSortChange

▸ **childrenSortChange**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:125](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L125)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/layout/ILeafLayout.ts:127](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/layout/ILeafLayout.ts#L127)
