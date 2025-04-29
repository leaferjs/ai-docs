# Class: LeaferCanvasBase

## Hierarchy

- `Canvas`

  ↳ **`LeaferCanvasBase`**

  ↳↳ [`LeaferCanvas`](LeaferCanvas.md)

## Implements

- [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

## Table of contents

### Constructors

- [constructor](LeaferCanvasBase.md#constructor)

### Properties

- [context](LeaferCanvasBase.md#context)
- [smooth](LeaferCanvasBase.md#smooth)
- [smoothLevel](LeaferCanvasBase.md#smoothlevel)
- [opacity](LeaferCanvasBase.md#opacity)
- [fillStyle](LeaferCanvasBase.md#fillstyle)
- [strokeStyle](LeaferCanvasBase.md#strokestyle)
- [strokeWidth](LeaferCanvasBase.md#strokewidth)
- [strokeCap](LeaferCanvasBase.md#strokecap)
- [strokeJoin](LeaferCanvasBase.md#strokejoin)
- [dashOffset](LeaferCanvasBase.md#dashoffset)
- [miterLimit](LeaferCanvasBase.md#miterlimit)
- [shadowBlur](LeaferCanvasBase.md#shadowblur)
- [shadowColor](LeaferCanvasBase.md#shadowcolor)
- [shadowOffsetX](LeaferCanvasBase.md#shadowoffsetx)
- [shadowOffsetY](LeaferCanvasBase.md#shadowoffsety)
- [filter](LeaferCanvasBase.md#filter)
- [font](LeaferCanvasBase.md#font)
- [fontKerning](LeaferCanvasBase.md#fontkerning)
- [fontStretch](LeaferCanvasBase.md#fontstretch)
- [fontVariantCaps](LeaferCanvasBase.md#fontvariantcaps)
- [textAlign](LeaferCanvasBase.md#textalign)
- [textBaseline](LeaferCanvasBase.md#textbaseline)
- [textRendering](LeaferCanvasBase.md#textrendering)
- [wordSpacing](LeaferCanvasBase.md#wordspacing)
- [letterSpacing](LeaferCanvasBase.md#letterspacing)
- [direction](LeaferCanvasBase.md#direction)
- [innerId](LeaferCanvasBase.md#innerid)
- [name](LeaferCanvasBase.md#name)
- [manager](LeaferCanvasBase.md#manager)
- [size](LeaferCanvasBase.md#size)
- [bounds](LeaferCanvasBase.md#bounds)
- [clientBounds](LeaferCanvasBase.md#clientbounds)
- [config](LeaferCanvasBase.md#config)
- [autoLayout](LeaferCanvasBase.md#autolayout)
- [view](LeaferCanvasBase.md#view)
- [parentView](LeaferCanvasBase.md#parentview)
- [unreal](LeaferCanvasBase.md#unreal)
- [recycled](LeaferCanvasBase.md#recycled)
- [worldTransform](LeaferCanvasBase.md#worldtransform)
- [savedBlendMode](LeaferCanvasBase.md#savedblendmode)

### Accessors

- [blendMode](LeaferCanvasBase.md#blendmode)
- [dashPattern](LeaferCanvasBase.md#dashpattern)
- [width](LeaferCanvasBase.md#width)
- [height](LeaferCanvasBase.md#height)
- [pixelRatio](LeaferCanvasBase.md#pixelratio)
- [pixelWidth](LeaferCanvasBase.md#pixelwidth)
- [pixelHeight](LeaferCanvasBase.md#pixelheight)
- [pixelSnap](LeaferCanvasBase.md#pixelsnap)
- [allowBackgroundColor](LeaferCanvasBase.md#allowbackgroundcolor)

### Methods

- [\_\_bindContext](LeaferCanvasBase.md#__bindcontext)
- [setTransform](LeaferCanvasBase.md#settransform)
- [resetTransform](LeaferCanvasBase.md#resettransform)
- [getTransform](LeaferCanvasBase.md#gettransform)
- [save](LeaferCanvasBase.md#save)
- [restore](LeaferCanvasBase.md#restore)
- [transform](LeaferCanvasBase.md#transform)
- [translate](LeaferCanvasBase.md#translate)
- [scale](LeaferCanvasBase.md#scale)
- [rotate](LeaferCanvasBase.md#rotate)
- [fill](LeaferCanvasBase.md#fill)
- [stroke](LeaferCanvasBase.md#stroke)
- [clip](LeaferCanvasBase.md#clip)
- [fillRect](LeaferCanvasBase.md#fillrect)
- [strokeRect](LeaferCanvasBase.md#strokerect)
- [clearRect](LeaferCanvasBase.md#clearrect)
- [drawImage](LeaferCanvasBase.md#drawimage)
- [beginPath](LeaferCanvasBase.md#beginpath)
- [moveTo](LeaferCanvasBase.md#moveto)
- [lineTo](LeaferCanvasBase.md#lineto)
- [bezierCurveTo](LeaferCanvasBase.md#beziercurveto)
- [quadraticCurveTo](LeaferCanvasBase.md#quadraticcurveto)
- [closePath](LeaferCanvasBase.md#closepath)
- [arc](LeaferCanvasBase.md#arc)
- [arcTo](LeaferCanvasBase.md#arcto)
- [ellipse](LeaferCanvasBase.md#ellipse)
- [rect](LeaferCanvasBase.md#rect)
- [roundRect](LeaferCanvasBase.md#roundrect)
- [createConicGradient](LeaferCanvasBase.md#createconicgradient)
- [createLinearGradient](LeaferCanvasBase.md#createlineargradient)
- [createPattern](LeaferCanvasBase.md#createpattern)
- [createRadialGradient](LeaferCanvasBase.md#createradialgradient)
- [fillText](LeaferCanvasBase.md#filltext)
- [measureText](LeaferCanvasBase.md#measuretext)
- [strokeText](LeaferCanvasBase.md#stroketext)
- [init](LeaferCanvasBase.md#init)
- [\_\_createContext](LeaferCanvasBase.md#__createcontext)
- [export](LeaferCanvasBase.md#export)
- [toBlob](LeaferCanvasBase.md#toblob)
- [toDataURL](LeaferCanvasBase.md#todataurl)
- [saveAs](LeaferCanvasBase.md#saveas)
- [resize](LeaferCanvasBase.md#resize)
- [updateViewSize](LeaferCanvasBase.md#updateviewsize)
- [updateClientBounds](LeaferCanvasBase.md#updateclientbounds)
- [getClientBounds](LeaferCanvasBase.md#getclientbounds)
- [startAutoLayout](LeaferCanvasBase.md#startautolayout)
- [stopAutoLayout](LeaferCanvasBase.md#stopautolayout)
- [setCursor](LeaferCanvasBase.md#setcursor)
- [setWorld](LeaferCanvasBase.md#setworld)
- [useWorldTransform](LeaferCanvasBase.md#useworldtransform)
- [setStroke](LeaferCanvasBase.md#setstroke)
- [setStrokeOptions](LeaferCanvasBase.md#setstrokeoptions)
- [saveBlendMode](LeaferCanvasBase.md#saveblendmode)
- [restoreBlendMode](LeaferCanvasBase.md#restoreblendmode)
- [hitFill](LeaferCanvasBase.md#hitfill)
- [hitStroke](LeaferCanvasBase.md#hitstroke)
- [hitPixel](LeaferCanvasBase.md#hitpixel)
- [setWorldShadow](LeaferCanvasBase.md#setworldshadow)
- [setWorldBlur](LeaferCanvasBase.md#setworldblur)
- [copyWorld](LeaferCanvasBase.md#copyworld)
- [copyWorldToInner](LeaferCanvasBase.md#copyworldtoinner)
- [copyWorldByReset](LeaferCanvasBase.md#copyworldbyreset)
- [useGrayscaleAlpha](LeaferCanvasBase.md#usegrayscalealpha)
- [useMask](LeaferCanvasBase.md#usemask)
- [useEraser](LeaferCanvasBase.md#useeraser)
- [fillWorld](LeaferCanvasBase.md#fillworld)
- [strokeWorld](LeaferCanvasBase.md#strokeworld)
- [clearWorld](LeaferCanvasBase.md#clearworld)
- [clipWorld](LeaferCanvasBase.md#clipworld)
- [clear](LeaferCanvasBase.md#clear)
- [setTempBounds](LeaferCanvasBase.md#settempbounds)
- [isSameSize](LeaferCanvasBase.md#issamesize)
- [getSameCanvas](LeaferCanvasBase.md#getsamecanvas)
- [recycle](LeaferCanvasBase.md#recycle)
- [updateRender](LeaferCanvasBase.md#updaterender)
- [unrealCanvas](LeaferCanvasBase.md#unrealcanvas)
- [destroy](LeaferCanvasBase.md#destroy)

## Constructors

### constructor

• **new LeaferCanvasBase**(`config?`, `manager?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](../interfaces/ICanvasManager.md) |

#### Overrides

Canvas.constructor

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:54](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L54)

## Properties

### context

• **context**: [`ICanvasContext2D`](../interfaces/ICanvasContext2D.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[context](../interfaces/ILeaferCanvas.md#context)

#### Inherited from

Canvas.context

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:27](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L27)

___

### smooth

• **smooth**: `boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[smooth](../interfaces/ILeaferCanvas.md#smooth)

#### Inherited from

Canvas.smooth

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:32](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L32)

___

### smoothLevel

• **smoothLevel**: `ImageSmoothingQuality`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[smoothLevel](../interfaces/ILeaferCanvas.md#smoothlevel)

#### Inherited from

Canvas.smoothLevel

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:35](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L35)

___

### opacity

• **opacity**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[opacity](../interfaces/ILeaferCanvas.md#opacity)

#### Inherited from

Canvas.opacity

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:38](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L38)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fillStyle](../interfaces/ILeaferCanvas.md#fillstyle)

#### Inherited from

Canvas.fillStyle

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:50](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L50)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeStyle](../interfaces/ILeaferCanvas.md#strokestyle)

#### Inherited from

Canvas.strokeStyle

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:53](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L53)

___

### strokeWidth

• **strokeWidth**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeWidth](../interfaces/ILeaferCanvas.md#strokewidth)

#### Inherited from

Canvas.strokeWidth

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:57](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L57)

___

### strokeCap

• **strokeCap**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeCap](../interfaces/ILeaferCanvas.md#strokecap)

#### Inherited from

Canvas.strokeCap

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:60](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L60)

___

### strokeJoin

• **strokeJoin**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeJoin](../interfaces/ILeaferCanvas.md#strokejoin)

#### Inherited from

Canvas.strokeJoin

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:63](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L63)

___

### dashOffset

• **dashOffset**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[dashOffset](../interfaces/ILeaferCanvas.md#dashoffset)

#### Inherited from

Canvas.dashOffset

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:73](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L73)

___

### miterLimit

• **miterLimit**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[miterLimit](../interfaces/ILeaferCanvas.md#miterlimit)

#### Inherited from

Canvas.miterLimit

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:76](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L76)

___

### shadowBlur

• **shadowBlur**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[shadowBlur](../interfaces/ILeaferCanvas.md#shadowblur)

#### Inherited from

Canvas.shadowBlur

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:80](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L80)

___

### shadowColor

• **shadowColor**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[shadowColor](../interfaces/ILeaferCanvas.md#shadowcolor)

#### Inherited from

Canvas.shadowColor

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:83](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L83)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[shadowOffsetX](../interfaces/ILeaferCanvas.md#shadowoffsetx)

#### Inherited from

Canvas.shadowOffsetX

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:86](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L86)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[shadowOffsetY](../interfaces/ILeaferCanvas.md#shadowoffsety)

#### Inherited from

Canvas.shadowOffsetY

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:89](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L89)

___

### filter

• **filter**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[filter](../interfaces/ILeaferCanvas.md#filter)

#### Inherited from

Canvas.filter

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:92](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L92)

___

### font

• **font**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[font](../interfaces/ILeaferCanvas.md#font)

#### Inherited from

Canvas.font

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:96](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L96)

___

### fontKerning

• **fontKerning**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fontKerning](../interfaces/ILeaferCanvas.md#fontkerning)

#### Inherited from

Canvas.fontKerning

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:99](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L99)

___

### fontStretch

• **fontStretch**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fontStretch](../interfaces/ILeaferCanvas.md#fontstretch)

#### Inherited from

Canvas.fontStretch

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:102](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L102)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fontVariantCaps](../interfaces/ILeaferCanvas.md#fontvariantcaps)

#### Inherited from

Canvas.fontVariantCaps

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:105](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L105)

___

### textAlign

• **textAlign**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[textAlign](../interfaces/ILeaferCanvas.md#textalign)

#### Inherited from

Canvas.textAlign

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:109](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L109)

___

### textBaseline

• **textBaseline**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[textBaseline](../interfaces/ILeaferCanvas.md#textbaseline)

#### Inherited from

Canvas.textBaseline

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:112](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L112)

___

### textRendering

• **textRendering**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[textRendering](../interfaces/ILeaferCanvas.md#textrendering)

#### Inherited from

Canvas.textRendering

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:115](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L115)

___

### wordSpacing

• **wordSpacing**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[wordSpacing](../interfaces/ILeaferCanvas.md#wordspacing)

#### Inherited from

Canvas.wordSpacing

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:118](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L118)

___

### letterSpacing

• **letterSpacing**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[letterSpacing](../interfaces/ILeaferCanvas.md#letterspacing)

#### Inherited from

Canvas.letterSpacing

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:121](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L121)

___

### direction

• **direction**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[direction](../interfaces/ILeaferCanvas.md#direction)

#### Inherited from

Canvas.direction

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:125](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L125)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[innerId](../interfaces/ILeaferCanvas.md#innerid)

#### Overrides

Canvas.innerId

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:16](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L16)

___

### name

• **name**: `string`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[name](../interfaces/ILeaferCanvas.md#name)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:18](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L18)

___

### manager

• **manager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[manager](../interfaces/ILeaferCanvas.md#manager)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:20](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L20)

___

### size

• **size**: [`IScreenSizeData`](../interfaces/IScreenSizeData.md)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:22](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L22)

___

### bounds

• **bounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[bounds](../interfaces/ILeaferCanvas.md#bounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:36](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L36)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[clientBounds](../interfaces/ILeaferCanvas.md#clientbounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:37](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L37)

___

### config

• **config**: [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[config](../interfaces/ILeaferCanvas.md#config)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:39](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L39)

___

### autoLayout

• **autoLayout**: `boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[autoLayout](../interfaces/ILeaferCanvas.md#autolayout)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:41](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L41)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[view](../interfaces/ILeaferCanvas.md#view)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:43](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L43)

___

### parentView

• **parentView**: `any`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[parentView](../interfaces/ILeaferCanvas.md#parentview)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:44](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L44)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[unreal](../interfaces/ILeaferCanvas.md#unreal)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:46](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L46)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[recycled](../interfaces/ILeaferCanvas.md#recycled)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:48](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L48)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[worldTransform](../interfaces/ILeaferCanvas.md#worldtransform)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:50](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L50)

___

### savedBlendMode

• `Protected` **savedBlendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:52](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L52)

## Accessors

### blendMode

• `get` **blendMode**(): [`IBlendMode`](../modules.md#iblendmode)

#### Returns

[`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[blendMode](../interfaces/ILeaferCanvas.md#blendmode)

#### Inherited from

Canvas.blendMode

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:45](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L45)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[blendMode](../interfaces/ILeaferCanvas.md#blendmode)

#### Inherited from

Canvas.blendMode

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:40](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L40)

___

### dashPattern

• `get` **dashPattern**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[dashPattern](../interfaces/ILeaferCanvas.md#dashpattern)

#### Inherited from

Canvas.dashPattern

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:68](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L68)

• `set` **dashPattern**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number`[] |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[dashPattern](../interfaces/ILeaferCanvas.md#dashpattern)

#### Inherited from

Canvas.dashPattern

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:65](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L65)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[width](../interfaces/ILeaferCanvas.md#width)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:24](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L24)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[height](../interfaces/ILeaferCanvas.md#height)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:25](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L25)

___

### pixelRatio

• `get` **pixelRatio**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[pixelRatio](../interfaces/ILeaferCanvas.md#pixelratio)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:27](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L27)

___

### pixelWidth

• `get` **pixelWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[pixelWidth](../interfaces/ILeaferCanvas.md#pixelwidth)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:28](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L28)

___

### pixelHeight

• `get` **pixelHeight**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[pixelHeight](../interfaces/ILeaferCanvas.md#pixelheight)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:29](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L29)

___

### pixelSnap

• `get` **pixelSnap**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[pixelSnap](../interfaces/ILeaferCanvas.md#pixelsnap)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:31](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L31)

• `set` **pixelSnap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[pixelSnap](../interfaces/ILeaferCanvas.md#pixelsnap)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:32](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L32)

___

### allowBackgroundColor

• `get` **allowBackgroundColor**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[allowBackgroundColor](../interfaces/ILeaferCanvas.md#allowbackgroundcolor)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:34](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L34)

## Methods

### \_\_bindContext

▸ **__bindContext**(): `void`

#### Returns

`void`

#### Inherited from

Canvas.\_\_bindContext

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:129](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L129)

___

### setTransform

▸ **setTransform**(`_a`, `_b?`, `_c?`, `_d?`, `_e?`, `_f?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_a` | `number` \| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `_b?` | `number` |
| `_c?` | `number` |
| `_d?` | `number` |
| `_e?` | `number` |
| `_f?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[setTransform](../interfaces/ILeaferCanvas.md#settransform)

#### Inherited from

Canvas.setTransform

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:141](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L141)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[resetTransform](../interfaces/ILeaferCanvas.md#resettransform)

#### Inherited from

Canvas.resetTransform

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:144](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L144)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[getTransform](../interfaces/ILeaferCanvas.md#gettransform)

#### Inherited from

Canvas.getTransform

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:147](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L147)

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[save](../interfaces/ILeaferCanvas.md#save)

#### Inherited from

Canvas.save

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:150](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L150)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[restore](../interfaces/ILeaferCanvas.md#restore)

#### Inherited from

Canvas.restore

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:153](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L153)

___

### transform

▸ **transform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`IMatrixData`](../interfaces/IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[transform](../interfaces/ILeaferCanvas.md#transform)

#### Inherited from

Canvas.transform

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:155](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L155)

___

### translate

▸ **translate**(`_x`, `_y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[translate](../interfaces/ILeaferCanvas.md#translate)

#### Inherited from

Canvas.translate

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:164](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L164)

___

### scale

▸ **scale**(`_x`, `_y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[scale](../interfaces/ILeaferCanvas.md#scale)

#### Inherited from

Canvas.scale

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:167](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L167)

___

### rotate

▸ **rotate**(`_angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_angle` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[rotate](../interfaces/ILeaferCanvas.md#rotate)

#### Inherited from

Canvas.rotate

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:170](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L170)

___

### fill

▸ **fill**(`_path2d?`, `_rule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_path2d?` | [`IWindingRule`](../modules.md#iwindingrule) \| [`IPath2D`](../interfaces/IPath2D.md) |
| `_rule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fill](../interfaces/ILeaferCanvas.md#fill)

#### Inherited from

Canvas.fill

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:173](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L173)

___

### stroke

▸ **stroke**(`_path2d?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_path2d?` | [`IPath2D`](../interfaces/IPath2D.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[stroke](../interfaces/ILeaferCanvas.md#stroke)

#### Inherited from

Canvas.stroke

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:176](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L176)

___

### clip

▸ **clip**(`_path2d?`, `_rule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_path2d?` | [`IWindingRule`](../modules.md#iwindingrule) \| [`IPath2D`](../interfaces/IPath2D.md) |
| `_rule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[clip](../interfaces/ILeaferCanvas.md#clip)

#### Inherited from

Canvas.clip

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:179](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L179)

___

### fillRect

▸ **fillRect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fillRect](../interfaces/ILeaferCanvas.md#fillrect)

#### Inherited from

Canvas.fillRect

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:182](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L182)

___

### strokeRect

▸ **strokeRect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeRect](../interfaces/ILeaferCanvas.md#strokerect)

#### Inherited from

Canvas.strokeRect

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:185](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L185)

___

### clearRect

▸ **clearRect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[clearRect](../interfaces/ILeaferCanvas.md#clearrect)

#### Inherited from

Canvas.clearRect

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:188](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L188)

___

### drawImage

▸ **drawImage**(`image`, `sx`, `sy`, `sw?`, `sh?`, `dx?`, `dy?`, `dw?`, `dh?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `sx` | `number` |
| `sy` | `number` |
| `sw?` | `number` |
| `sh?` | `number` |
| `dx?` | `number` |
| `dy?` | `number` |
| `dw?` | `number` |
| `dh?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[drawImage](../interfaces/ILeaferCanvas.md#drawimage)

#### Inherited from

Canvas.drawImage

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:190](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L190)

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[beginPath](../interfaces/ILeaferCanvas.md#beginpath)

#### Inherited from

Canvas.beginPath

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:224](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L224)

___

### moveTo

▸ **moveTo**(`_x`, `_y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[moveTo](../interfaces/ILeaferCanvas.md#moveto)

#### Inherited from

Canvas.moveTo

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:227](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L227)

___

### lineTo

▸ **lineTo**(`_x`, `_y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[lineTo](../interfaces/ILeaferCanvas.md#lineto)

#### Inherited from

Canvas.lineTo

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:230](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L230)

___

### bezierCurveTo

▸ **bezierCurveTo**(`_cp1x`, `_cp1y`, `_cp2x`, `_cp2y`, `_x`, `_y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cp1x` | `number` |
| `_cp1y` | `number` |
| `_cp2x` | `number` |
| `_cp2y` | `number` |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[bezierCurveTo](../interfaces/ILeaferCanvas.md#beziercurveto)

#### Inherited from

Canvas.bezierCurveTo

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:233](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L233)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`_cpx`, `_cpy`, `_x`, `_y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cpx` | `number` |
| `_cpy` | `number` |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[quadraticCurveTo](../interfaces/ILeaferCanvas.md#quadraticcurveto)

#### Inherited from

Canvas.quadraticCurveTo

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:236](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L236)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[closePath](../interfaces/ILeaferCanvas.md#closepath)

#### Inherited from

Canvas.closePath

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:239](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L239)

___

### arc

▸ **arc**(`_x`, `_y`, `_radius`, `_startAngle`, `_endAngle`, `_anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_radius` | `number` |
| `_startAngle` | `number` |
| `_endAngle` | `number` |
| `_anticlockwise?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[arc](../interfaces/ILeaferCanvas.md#arc)

#### Inherited from

Canvas.arc

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:242](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L242)

___

### arcTo

▸ **arcTo**(`_x1`, `_y1`, `_x2`, `_y2`, `_radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x1` | `number` |
| `_y1` | `number` |
| `_x2` | `number` |
| `_y2` | `number` |
| `_radius` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[arcTo](../interfaces/ILeaferCanvas.md#arcto)

#### Inherited from

Canvas.arcTo

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:245](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L245)

___

### ellipse

▸ **ellipse**(`_x`, `_y`, `_radiusX`, `_radiusY`, `_rotation`, `_startAngle`, `_endAngle`, `_anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_radiusX` | `number` |
| `_radiusY` | `number` |
| `_rotation` | `number` |
| `_startAngle` | `number` |
| `_endAngle` | `number` |
| `_anticlockwise?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[ellipse](../interfaces/ILeaferCanvas.md#ellipse)

#### Inherited from

Canvas.ellipse

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:248](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L248)

___

### rect

▸ **rect**(`_x`, `_y`, `_width`, `_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[rect](../interfaces/ILeaferCanvas.md#rect)

#### Inherited from

Canvas.rect

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:251](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L251)

___

### roundRect

▸ **roundRect**(`_x`, `_y`, `_width`, `_height`, `_radius?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |
| `_radius?` | `number` \| `number`[] |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[roundRect](../interfaces/ILeaferCanvas.md#roundrect)

#### Inherited from

Canvas.roundRect

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:254](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L254)

___

### createConicGradient

▸ **createConicGradient**(`_startAngle`, `_x`, `_y`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_startAngle` | `number` |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

`CanvasGradient`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[createConicGradient](../interfaces/ILeaferCanvas.md#createconicgradient)

#### Inherited from

Canvas.createConicGradient

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:261](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L261)

___

### createLinearGradient

▸ **createLinearGradient**(`_x0`, `_y0`, `_x1`, `_y1`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x0` | `number` |
| `_y0` | `number` |
| `_x1` | `number` |
| `_y1` | `number` |

#### Returns

`CanvasGradient`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[createLinearGradient](../interfaces/ILeaferCanvas.md#createlineargradient)

#### Inherited from

Canvas.createLinearGradient

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:264](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L264)

___

### createPattern

▸ **createPattern**(`_image`, `_repetition`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_image` | `CanvasImageSource` |
| `_repetition` | `string` |

#### Returns

`CanvasPattern`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[createPattern](../interfaces/ILeaferCanvas.md#createpattern)

#### Inherited from

Canvas.createPattern

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:267](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L267)

___

### createRadialGradient

▸ **createRadialGradient**(`_x0`, `_y0`, `_r0`, `_x1`, `_y1`, `_r1`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x0` | `number` |
| `_y0` | `number` |
| `_r0` | `number` |
| `_x1` | `number` |
| `_y1` | `number` |
| `_r1` | `number` |

#### Returns

`CanvasGradient`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[createRadialGradient](../interfaces/ILeaferCanvas.md#createradialgradient)

#### Inherited from

Canvas.createRadialGradient

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:270](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L270)

___

### fillText

▸ **fillText**(`_text`, `_x`, `_y`, `_maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_text` | `string` |
| `_x` | `number` |
| `_y` | `number` |
| `_maxWidth?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fillText](../interfaces/ILeaferCanvas.md#filltext)

#### Inherited from

Canvas.fillText

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:274](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L274)

___

### measureText

▸ **measureText**(`_text`): [`ITextMetrics`](../interfaces/ITextMetrics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_text` | `string` |

#### Returns

[`ITextMetrics`](../interfaces/ITextMetrics.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[measureText](../interfaces/ILeaferCanvas.md#measuretext)

#### Inherited from

Canvas.measureText

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:277](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L277)

___

### strokeText

▸ **strokeText**(`_text`, `_x`, `_y`, `_maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_text` | `string` |
| `_x` | `number` |
| `_y` | `number` |
| `_maxWidth?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeText](../interfaces/ILeaferCanvas.md#stroketext)

#### Inherited from

Canvas.strokeText

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:280](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/Canvas.ts#L280)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[init](../interfaces/ILeaferCanvas.md#init)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:70](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L70)

___

### \_\_createContext

▸ **__createContext**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:72](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L72)

___

### export

▸ **export**(`_filename`, `_options?`): `string` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_options?` | `number` \| `boolean` \| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

`string` \| `Promise`<`any`\>

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[export](../interfaces/ILeaferCanvas.md#export)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:81](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L81)

___

### toBlob

▸ **toBlob**(`_type?`, `_quality?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `_quality?` | `number` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[toBlob](../interfaces/ILeaferCanvas.md#toblob)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:83](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L83)

___

### toDataURL

▸ **toDataURL**(`_type?`, `_quality?`): `string` \| `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | [`IExportImageType`](../modules.md#iexportimagetype) |
| `_quality?` | `number` |

#### Returns

`string` \| `Promise`<`string`\>

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[toDataURL](../interfaces/ILeaferCanvas.md#todataurl)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:85](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L85)

___

### saveAs

▸ **saveAs**(`_filename`, `_quality?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_quality?` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[saveAs](../interfaces/ILeaferCanvas.md#saveas)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:87](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L87)

___

### resize

▸ **resize**(`size`, `safeResize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) | `undefined` |
| `safeResize` | `boolean` | `true` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[resize](../interfaces/ILeaferCanvas.md#resize)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:91](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L91)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[updateViewSize](../interfaces/ILeaferCanvas.md#updateviewsize)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:120](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L120)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[updateClientBounds](../interfaces/ILeaferCanvas.md#updateclientbounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:121](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L121)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[getClientBounds](../interfaces/ILeaferCanvas.md#getclientbounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:122](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L122)

___

### startAutoLayout

▸ **startAutoLayout**(`_autoBounds`, `_listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_autoBounds` | [`IAutoBounds`](../interfaces/IAutoBounds.md) |
| `_listener` | [`IResizeEventListener`](../interfaces/IResizeEventListener.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[startAutoLayout](../interfaces/ILeaferCanvas.md#startautolayout)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:127](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L127)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[stopAutoLayout](../interfaces/ILeaferCanvas.md#stopautolayout)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:128](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L128)

___

### setCursor

▸ **setCursor**(`_cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:130](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L130)

___

### setWorld

▸ **setWorld**(`matrix`, `parentMatrix?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixWithOptionHalfData`](../interfaces/IMatrixWithOptionHalfData.md) |
| `parentMatrix?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[setWorld](../interfaces/ILeaferCanvas.md#setworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:132](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L132)

___

### useWorldTransform

▸ **useWorldTransform**(`worldTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[useWorldTransform](../interfaces/ILeaferCanvas.md#useworldtransform)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:152](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L152)

___

### setStroke

▸ **setStroke**(`color`, `strokeWidth`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` \| `object` |
| `strokeWidth` | `number` |
| `options?` | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[setStroke](../interfaces/ILeaferCanvas.md#setstroke)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:158](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L158)

___

### setStrokeOptions

▸ **setStrokeOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[setStrokeOptions](../interfaces/ILeaferCanvas.md#setstrokeoptions)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:164](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L164)

___

### saveBlendMode

▸ **saveBlendMode**(`blendMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blendMode` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[saveBlendMode](../interfaces/ILeaferCanvas.md#saveblendmode)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:172](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L172)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[restoreBlendMode](../interfaces/ILeaferCanvas.md#restoreblendmode)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:177](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L177)

___

### hitFill

▸ **hitFill**(`_point`, `_fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`IPointData`](../interfaces/IPointData.md) |
| `_fillRule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[hitFill](../interfaces/ILeaferCanvas.md#hitfill)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:183](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L183)

___

### hitStroke

▸ **hitStroke**(`_point`, `_strokeWidth?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`IPointData`](../interfaces/IPointData.md) |
| `_strokeWidth?` | `number` |

#### Returns

`boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[hitStroke](../interfaces/ILeaferCanvas.md#hitstroke)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:185](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L185)

___

### hitPixel

▸ **hitPixel**(`_radiusPoint`, `_offset?`, `_scale?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_radiusPoint` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) | `undefined` |
| `_offset?` | [`IPointData`](../interfaces/IPointData.md) | `undefined` |
| `_scale` | `number` | `1` |

#### Returns

`boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[hitPixel](../interfaces/ILeaferCanvas.md#hitpixel)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:187](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L187)

___

### setWorldShadow

▸ **setWorldShadow**(`x`, `y`, `blur`, `color?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `blur` | `number` |
| `color?` | `string` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[setWorldShadow](../interfaces/ILeaferCanvas.md#setworldshadow)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:191](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L191)

___

### setWorldBlur

▸ **setWorldBlur**(`blur`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blur` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[setWorldBlur](../interfaces/ILeaferCanvas.md#setworldblur)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:199](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L199)

___

### copyWorld

▸ **copyWorld**(`canvas`, `from?`, `to?`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `from?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `to?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[copyWorld](../interfaces/ILeaferCanvas.md#copyworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:205](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L205)

___

### copyWorldToInner

▸ **copyWorldToInner**(`canvas`, `fromWorld`, `toInnerBounds`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `fromWorld` | [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md) |
| `toInnerBounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[copyWorldToInner](../interfaces/ILeaferCanvas.md#copyworldtoinner)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:217](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L217)

___

### copyWorldByReset

▸ **copyWorldByReset**(`canvas`, `from?`, `to?`, `blendMode?`, `onlyResetTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `from?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `to?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode) |
| `onlyResetTransform?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[copyWorldByReset](../interfaces/ILeaferCanvas.md#copyworldbyreset)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:231](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L231)

___

### useGrayscaleAlpha

▸ **useGrayscaleAlpha**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[useGrayscaleAlpha](../interfaces/ILeaferCanvas.md#usegrayscalealpha)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:237](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L237)

___

### useMask

▸ **useMask**(`maskCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskCanvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[useMask](../interfaces/ILeaferCanvas.md#usemask)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:251](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L251)

___

### useEraser

▸ **useEraser**(`eraserCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eraserCanvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[useEraser](../interfaces/ILeaferCanvas.md#useeraser)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:255](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L255)

___

### fillWorld

▸ **fillWorld**(`bounds`, `color`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `color` | `string` \| `object` |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[fillWorld](../interfaces/ILeaferCanvas.md#fillworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:259](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L259)

___

### strokeWorld

▸ **strokeWorld**(`bounds`, `color`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `color` | `string` \| `object` |
| `blendMode?` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[strokeWorld](../interfaces/ILeaferCanvas.md#strokeworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:267](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L267)

___

### clearWorld

▸ **clearWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[clearWorld](../interfaces/ILeaferCanvas.md#clearworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:275](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L275)

___

### clipWorld

▸ **clipWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[clipWorld](../interfaces/ILeaferCanvas.md#clipworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:280](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L280)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[clear](../interfaces/ILeaferCanvas.md#clear)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:288](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L288)

___

### setTempBounds

▸ `Protected` **setTempBounds**(`bounds`, `ceil?`, `intersect?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `ceil?` | `boolean` |
| `intersect?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:296](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L296)

___

### isSameSize

▸ **isSameSize**(`size`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`boolean`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[isSameSize](../interfaces/ILeaferCanvas.md#issamesize)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:303](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L303)

___

### getSameCanvas

▸ **getSameCanvas**(`useSameWorldTransform?`, `useSameSmooth?`): [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `useSameWorldTransform?` | `boolean` |
| `useSameSmooth?` | `boolean` |

#### Returns

[`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[getSameCanvas](../interfaces/ILeaferCanvas.md#getsamecanvas)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:308](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L308)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clearBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[recycle](../interfaces/ILeaferCanvas.md#recycle)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:319](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L319)

___

### updateRender

▸ **updateRender**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[updateRender](../interfaces/ILeaferCanvas.md#updaterender)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:327](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L327)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[unrealCanvas](../interfaces/ILeaferCanvas.md#unrealcanvas)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:329](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L329)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferCanvas](../interfaces/ILeaferCanvas.md).[destroy](../interfaces/ILeaferCanvas.md#destroy)

#### Overrides

Canvas.destroy

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:331](https://github.com/leaferjs/leafer/blob/27a24ec/packages/canvas/canvas/src/LeaferCanvasBase.ts#L331)
