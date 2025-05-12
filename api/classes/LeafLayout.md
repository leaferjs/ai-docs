# Class: LeafLayout

## Implements

- [`ILeafLayout`](../interfaces/ILeafLayout.md)

## Table of contents

### Constructors

- [constructor](LeafLayout.md#constructor)

### Properties

- [leaf](LeafLayout.md#leaf)
- [proxyZoom](LeafLayout.md#proxyzoom)
- [boxBounds](LeafLayout.md#boxbounds)
- [\_contentBounds](LeafLayout.md#_contentbounds)
- [\_strokeBounds](LeafLayout.md#_strokebounds)
- [\_renderBounds](LeafLayout.md#_renderbounds)
- [\_localContentBounds](LeafLayout.md#_localcontentbounds)
- [\_localStrokeBounds](LeafLayout.md#_localstrokebounds)
- [\_localRenderBounds](LeafLayout.md#_localrenderbounds)
- [\_worldContentBounds](LeafLayout.md#_worldcontentbounds)
- [\_worldBoxBounds](LeafLayout.md#_worldboxbounds)
- [\_worldStrokeBounds](LeafLayout.md#_worldstrokebounds)
- [resized](LeafLayout.md#resized)
- [waitAutoLayout](LeafLayout.md#waitautolayout)
- [matrixChanged](LeafLayout.md#matrixchanged)
- [scaleChanged](LeafLayout.md#scalechanged)
- [rotationChanged](LeafLayout.md#rotationchanged)
- [boundsChanged](LeafLayout.md#boundschanged)
- [boxChanged](LeafLayout.md#boxchanged)
- [strokeChanged](LeafLayout.md#strokechanged)
- [renderChanged](LeafLayout.md#renderchanged)
- [localBoxChanged](LeafLayout.md#localboxchanged)
- [surfaceChanged](LeafLayout.md#surfacechanged)
- [opacityChanged](LeafLayout.md#opacitychanged)
- [hitCanvasChanged](LeafLayout.md#hitcanvaschanged)
- [childrenSortChanged](LeafLayout.md#childrensortchanged)
- [stateStyleChanged](LeafLayout.md#statestylechanged)
- [affectScaleOrRotation](LeafLayout.md#affectscaleorrotation)
- [affectRotation](LeafLayout.md#affectrotation)
- [affectChildrenSort](LeafLayout.md#affectchildrensort)
- [strokeSpread](LeafLayout.md#strokespread)
- [strokeBoxSpread](LeafLayout.md#strokeboxspread)
- [renderSpread](LeafLayout.md#renderspread)
- [renderShapeSpread](LeafLayout.md#rendershapespread)

### Accessors

- [contentBounds](LeafLayout.md#contentbounds)
- [strokeBounds](LeafLayout.md#strokebounds)
- [renderBounds](LeafLayout.md#renderbounds)
- [localContentBounds](LeafLayout.md#localcontentbounds)
- [localStrokeBounds](LeafLayout.md#localstrokebounds)
- [localRenderBounds](LeafLayout.md#localrenderbounds)
- [worldContentBounds](LeafLayout.md#worldcontentbounds)
- [worldBoxBounds](LeafLayout.md#worldboxbounds)
- [worldStrokeBounds](LeafLayout.md#worldstrokebounds)
- [a](LeafLayout.md#a)
- [b](LeafLayout.md#b)
- [c](LeafLayout.md#c)
- [d](LeafLayout.md#d)
- [e](LeafLayout.md#e)
- [f](LeafLayout.md#f)
- [x](LeafLayout.md#x)
- [y](LeafLayout.md#y)
- [width](LeafLayout.md#width)
- [height](LeafLayout.md#height)

### Methods

- [createLocal](LeafLayout.md#createlocal)
- [update](LeafLayout.md#update)
- [getTransform](LeafLayout.md#gettransform)
- [getBounds](LeafLayout.md#getbounds)
- [getInnerBounds](LeafLayout.md#getinnerbounds)
- [getLocalBounds](LeafLayout.md#getlocalbounds)
- [getWorldBounds](LeafLayout.md#getworldbounds)
- [getLayoutBounds](LeafLayout.md#getlayoutbounds)
- [getLayoutPoints](LeafLayout.md#getlayoutpoints)
- [shrinkContent](LeafLayout.md#shrinkcontent)
- [spreadStroke](LeafLayout.md#spreadstroke)
- [spreadRender](LeafLayout.md#spreadrender)
- [shrinkContentCancel](LeafLayout.md#shrinkcontentcancel)
- [spreadStrokeCancel](LeafLayout.md#spreadstrokecancel)
- [spreadRenderCancel](LeafLayout.md#spreadrendercancel)
- [boxChange](LeafLayout.md#boxchange)
- [localBoxChange](LeafLayout.md#localboxchange)
- [strokeChange](LeafLayout.md#strokechange)
- [renderChange](LeafLayout.md#renderchange)
- [scaleChange](LeafLayout.md#scalechange)
- [rotationChange](LeafLayout.md#rotationchange)
- [\_scaleOrRotationChange](LeafLayout.md#_scaleorrotationchange)
- [matrixChange](LeafLayout.md#matrixchange)
- [surfaceChange](LeafLayout.md#surfacechange)
- [opacityChange](LeafLayout.md#opacitychange)
- [childrenSortChange](LeafLayout.md#childrensortchange)
- [destroy](LeafLayout.md#destroy)

## Constructors

### constructor

• **new LeafLayout**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:104](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L104)

## Properties

### leaf

• **leaf**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[leaf](../interfaces/ILeafLayout.md#leaf)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:14](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L14)

___

### proxyZoom

• **proxyZoom**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[proxyZoom](../interfaces/ILeafLayout.md#proxyzoom)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:16](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L16)

___

### boxBounds

• **boxBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boxBounds](../interfaces/ILeafLayout.md#boxbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:22](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L22)

___

### \_contentBounds

• **\_contentBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:27](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L27)

___

### \_strokeBounds

• **\_strokeBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:28](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L28)

___

### \_renderBounds

• **\_renderBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:29](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L29)

___

### \_localContentBounds

• `Protected` `Optional` **\_localContentBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:38](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L38)

___

### \_localStrokeBounds

• `Protected` `Optional` **\_localStrokeBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:39](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L39)

___

### \_localRenderBounds

• `Protected` `Optional` **\_localRenderBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:40](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L40)

___

### \_worldContentBounds

• `Protected` **\_worldContentBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:49](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L49)

___

### \_worldBoxBounds

• `Protected` **\_worldBoxBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:50](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L50)

___

### \_worldStrokeBounds

• `Protected` **\_worldStrokeBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:51](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L51)

___

### resized

• **resized**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[resized](../interfaces/ILeafLayout.md#resized)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:55](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L55)

___

### waitAutoLayout

• **waitAutoLayout**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[waitAutoLayout](../interfaces/ILeafLayout.md#waitautolayout)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:56](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L56)

___

### matrixChanged

• **matrixChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[matrixChanged](../interfaces/ILeafLayout.md#matrixchanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:59](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L59)

___

### scaleChanged

• **scaleChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[scaleChanged](../interfaces/ILeafLayout.md#scalechanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:60](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L60)

___

### rotationChanged

• **rotationChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[rotationChanged](../interfaces/ILeafLayout.md#rotationchanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:61](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L61)

___

### boundsChanged

• **boundsChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boundsChanged](../interfaces/ILeafLayout.md#boundschanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:64](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L64)

___

### boxChanged

• **boxChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boxChanged](../interfaces/ILeafLayout.md#boxchanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:66](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L66)

___

### strokeChanged

• **strokeChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeChanged](../interfaces/ILeafLayout.md#strokechanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:67](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L67)

___

### renderChanged

• **renderChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderChanged](../interfaces/ILeafLayout.md#renderchanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:68](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L68)

___

### localBoxChanged

• **localBoxChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localBoxChanged](../interfaces/ILeafLayout.md#localboxchanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:70](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L70)

___

### surfaceChanged

• **surfaceChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[surfaceChanged](../interfaces/ILeafLayout.md#surfacechanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:73](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L73)

___

### opacityChanged

• **opacityChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[opacityChanged](../interfaces/ILeafLayout.md#opacitychanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:74](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L74)

___

### hitCanvasChanged

• **hitCanvasChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[hitCanvasChanged](../interfaces/ILeafLayout.md#hitcanvaschanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:76](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L76)

___

### childrenSortChanged

• `Optional` **childrenSortChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[childrenSortChanged](../interfaces/ILeafLayout.md#childrensortchanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:78](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L78)

___

### stateStyleChanged

• `Optional` **stateStyleChanged**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[stateStyleChanged](../interfaces/ILeafLayout.md#statestylechanged)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:79](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L79)

___

### affectScaleOrRotation

• **affectScaleOrRotation**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[affectScaleOrRotation](../interfaces/ILeafLayout.md#affectscaleorrotation)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:82](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L82)

___

### affectRotation

• **affectRotation**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[affectRotation](../interfaces/ILeafLayout.md#affectrotation)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:83](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L83)

___

### affectChildrenSort

• `Optional` **affectChildrenSort**: `boolean`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[affectChildrenSort](../interfaces/ILeafLayout.md#affectchildrensort)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:84](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L84)

___

### strokeSpread

• **strokeSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeSpread](../interfaces/ILeafLayout.md#strokespread)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:86](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L86)

___

### strokeBoxSpread

• **strokeBoxSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeBoxSpread](../interfaces/ILeafLayout.md#strokeboxspread)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:87](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L87)

___

### renderSpread

• **renderSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderSpread](../interfaces/ILeafLayout.md#renderspread)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:88](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L88)

___

### renderShapeSpread

• **renderShapeSpread**: `number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderShapeSpread](../interfaces/ILeafLayout.md#rendershapespread)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:89](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L89)

## Accessors

### contentBounds

• `get` **contentBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[contentBounds](../interfaces/ILeafLayout.md#contentbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:20](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L20)

• `set` **contentBounds**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[contentBounds](../interfaces/ILeafLayout.md#contentbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:21](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L21)

___

### strokeBounds

• `get` **strokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeBounds](../interfaces/ILeafLayout.md#strokebounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:23](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L23)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderBounds](../interfaces/ILeafLayout.md#renderbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L24)

• `set` **renderBounds**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderBounds](../interfaces/ILeafLayout.md#renderbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:25](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L25)

___

### localContentBounds

• `get` **localContentBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localContentBounds](../interfaces/ILeafLayout.md#localcontentbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:33](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L33)

___

### localStrokeBounds

• `get` **localStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localStrokeBounds](../interfaces/ILeafLayout.md#localstrokebounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:35](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L35)

___

### localRenderBounds

• `get` **localRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localRenderBounds](../interfaces/ILeafLayout.md#localrenderbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:36](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L36)

___

### worldContentBounds

• `get` **worldContentBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[worldContentBounds](../interfaces/ILeafLayout.md#worldcontentbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:44](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L44)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[worldBoxBounds](../interfaces/ILeafLayout.md#worldboxbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:45](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L45)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[worldStrokeBounds](../interfaces/ILeafLayout.md#worldstrokebounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:46](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L46)

___

### a

• `get` **a**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[a](../interfaces/ILeafLayout.md#a)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:92](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L92)

___

### b

• `get` **b**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[b](../interfaces/ILeafLayout.md#b)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:93](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L93)

___

### c

• `get` **c**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[c](../interfaces/ILeafLayout.md#c)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:94](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L94)

___

### d

• `get` **d**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[d](../interfaces/ILeafLayout.md#d)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:95](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L95)

___

### e

• `get` **e**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[e](../interfaces/ILeafLayout.md#e)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:96](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L96)

___

### f

• `get` **f**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[f](../interfaces/ILeafLayout.md#f)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:97](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L97)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[x](../interfaces/ILeafLayout.md#x)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:98](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L98)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[y](../interfaces/ILeafLayout.md#y)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:99](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L99)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[width](../interfaces/ILeafLayout.md#width)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:100](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L100)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[height](../interfaces/ILeafLayout.md#height)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:101](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L101)

## Methods

### createLocal

▸ **createLocal**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[createLocal](../interfaces/ILeafLayout.md#createlocal)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:114](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L114)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[update](../interfaces/ILeafLayout.md#update)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:120](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L120)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getTransform](../interfaces/ILeafLayout.md#gettransform)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:136](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L136)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) | `undefined` |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getBounds](../interfaces/ILeafLayout.md#getbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:153](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L153)

___

### getInnerBounds

▸ **getInnerBounds**(`type?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`IBoundsType`](../modules.md#iboundstype) | `'box'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:169](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L169)

___

### getLocalBounds

▸ **getLocalBounds**(`type?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`IBoundsType`](../modules.md#iboundstype) | `'box'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:182](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L182)

___

### getWorldBounds

▸ **getWorldBounds**(`type?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`IBoundsType`](../modules.md#iboundstype) | `'box'` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:195](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L195)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) | `undefined` |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |
| `unscale?` | `boolean` | `undefined` |

#### Returns

[`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getLayoutBounds](../interfaces/ILeafLayout.md#getlayoutbounds)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:208](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L208)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) | `undefined` |
| `relative` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) | `'world'` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[getLayoutPoints](../interfaces/ILeafLayout.md#getlayoutpoints)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:252](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L252)

___

### shrinkContent

▸ **shrinkContent**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[shrinkContent](../interfaces/ILeafLayout.md#shrinkcontent)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:276](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L276)

___

### spreadStroke

▸ **spreadStroke**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadStroke](../interfaces/ILeafLayout.md#spreadstroke)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:281](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L281)

___

### spreadRender

▸ **spreadRender**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadRender](../interfaces/ILeafLayout.md#spreadrender)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:287](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L287)

___

### shrinkContentCancel

▸ **shrinkContentCancel**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[shrinkContentCancel](../interfaces/ILeafLayout.md#shrinkcontentcancel)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:293](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L293)

___

### spreadStrokeCancel

▸ **spreadStrokeCancel**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadStrokeCancel](../interfaces/ILeafLayout.md#spreadstrokecancel)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:297](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L297)

___

### spreadRenderCancel

▸ **spreadRenderCancel**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[spreadRenderCancel](../interfaces/ILeafLayout.md#spreadrendercancel)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:303](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L303)

___

### boxChange

▸ **boxChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[boxChange](../interfaces/ILeafLayout.md#boxchange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:311](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L311)

___

### localBoxChange

▸ **localBoxChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[localBoxChange](../interfaces/ILeafLayout.md#localboxchange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:317](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L317)

___

### strokeChange

▸ **strokeChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[strokeChange](../interfaces/ILeafLayout.md#strokechange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:322](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L322)

___

### renderChange

▸ **renderChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[renderChange](../interfaces/ILeafLayout.md#renderchange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:329](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L329)

___

### scaleChange

▸ **scaleChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[scaleChange](../interfaces/ILeafLayout.md#scalechange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:338](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L338)

___

### rotationChange

▸ **rotationChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[rotationChange](../interfaces/ILeafLayout.md#rotationchange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:343](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L343)

___

### \_scaleOrRotationChange

▸ `Protected` **_scaleOrRotationChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:349](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L349)

___

### matrixChange

▸ **matrixChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[matrixChange](../interfaces/ILeafLayout.md#matrixchange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:355](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L355)

___

### surfaceChange

▸ **surfaceChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[surfaceChange](../interfaces/ILeafLayout.md#surfacechange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:363](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L363)

___

### opacityChange

▸ **opacityChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[opacityChange](../interfaces/ILeafLayout.md#opacitychange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:367](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L367)

___

### childrenSortChange

▸ **childrenSortChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[childrenSortChange](../interfaces/ILeafLayout.md#childrensortchange)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:372](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L372)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafLayout](../interfaces/ILeafLayout.md).[destroy](../interfaces/ILeafLayout.md#destroy)

#### Defined in

[leafer/packages/display-module/layout/src/LeafLayout.ts:379](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/layout/src/LeafLayout.ts#L379)
