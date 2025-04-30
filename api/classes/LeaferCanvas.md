# Class: LeaferCanvas

## Hierarchy

- [`LeaferCanvasBase`](LeaferCanvasBase.md)

  ↳ **`LeaferCanvas`**

## Table of contents

### Constructors

- [constructor](LeaferCanvas.md#constructor)

### Properties

- [view](LeaferCanvas.md#view)
- [parentView](LeaferCanvas.md#parentview)
- [resizeObserver](LeaferCanvas.md#resizeobserver)
- [autoBounds](LeaferCanvas.md#autobounds)
- [resizeListener](LeaferCanvas.md#resizelistener)
- [windowListener](LeaferCanvas.md#windowlistener)
- [context](LeaferCanvas.md#context)
- [smooth](LeaferCanvas.md#smooth)
- [smoothLevel](LeaferCanvas.md#smoothlevel)
- [opacity](LeaferCanvas.md#opacity)
- [fillStyle](LeaferCanvas.md#fillstyle)
- [strokeStyle](LeaferCanvas.md#strokestyle)
- [strokeWidth](LeaferCanvas.md#strokewidth)
- [strokeCap](LeaferCanvas.md#strokecap)
- [strokeJoin](LeaferCanvas.md#strokejoin)
- [dashOffset](LeaferCanvas.md#dashoffset)
- [miterLimit](LeaferCanvas.md#miterlimit)
- [shadowBlur](LeaferCanvas.md#shadowblur)
- [shadowColor](LeaferCanvas.md#shadowcolor)
- [shadowOffsetX](LeaferCanvas.md#shadowoffsetx)
- [shadowOffsetY](LeaferCanvas.md#shadowoffsety)
- [filter](LeaferCanvas.md#filter)
- [font](LeaferCanvas.md#font)
- [fontKerning](LeaferCanvas.md#fontkerning)
- [fontStretch](LeaferCanvas.md#fontstretch)
- [fontVariantCaps](LeaferCanvas.md#fontvariantcaps)
- [textAlign](LeaferCanvas.md#textalign)
- [textBaseline](LeaferCanvas.md#textbaseline)
- [textRendering](LeaferCanvas.md#textrendering)
- [wordSpacing](LeaferCanvas.md#wordspacing)
- [letterSpacing](LeaferCanvas.md#letterspacing)
- [direction](LeaferCanvas.md#direction)
- [innerId](LeaferCanvas.md#innerid)
- [name](LeaferCanvas.md#name)
- [manager](LeaferCanvas.md#manager)
- [size](LeaferCanvas.md#size)
- [bounds](LeaferCanvas.md#bounds)
- [clientBounds](LeaferCanvas.md#clientbounds)
- [config](LeaferCanvas.md#config)
- [autoLayout](LeaferCanvas.md#autolayout)
- [unreal](LeaferCanvas.md#unreal)
- [recycled](LeaferCanvas.md#recycled)
- [worldTransform](LeaferCanvas.md#worldtransform)
- [savedBlendMode](LeaferCanvas.md#savedblendmode)

### Accessors

- [zIndex](LeaferCanvas.md#zindex)
- [childIndex](LeaferCanvas.md#childindex)
- [backgroundColor](LeaferCanvas.md#backgroundcolor)
- [hittable](LeaferCanvas.md#hittable)
- [blendMode](LeaferCanvas.md#blendmode)
- [dashPattern](LeaferCanvas.md#dashpattern)
- [width](LeaferCanvas.md#width)
- [height](LeaferCanvas.md#height)
- [pixelRatio](LeaferCanvas.md#pixelratio)
- [pixelWidth](LeaferCanvas.md#pixelwidth)
- [pixelHeight](LeaferCanvas.md#pixelheight)
- [pixelSnap](LeaferCanvas.md#pixelsnap)
- [allowBackgroundColor](LeaferCanvas.md#allowbackgroundcolor)

### Methods

- [init](LeaferCanvas.md#init)
- [\_\_createView](LeaferCanvas.md#__createview)
- [\_\_createViewFrom](LeaferCanvas.md#__createviewfrom)
- [setAbsolute](LeaferCanvas.md#setabsolute)
- [updateViewSize](LeaferCanvas.md#updateviewsize)
- [updateClientBounds](LeaferCanvas.md#updateclientbounds)
- [startAutoLayout](LeaferCanvas.md#startautolayout)
- [imitateResizeObserver](LeaferCanvas.md#imitateresizeobserver)
- [checkAutoBounds](LeaferCanvas.md#checkautobounds)
- [stopAutoLayout](LeaferCanvas.md#stopautolayout)
- [emitResize](LeaferCanvas.md#emitresize)
- [unrealCanvas](LeaferCanvas.md#unrealcanvas)
- [destroy](LeaferCanvas.md#destroy)
- [\_\_bindContext](LeaferCanvas.md#__bindcontext)
- [setTransform](LeaferCanvas.md#settransform)
- [resetTransform](LeaferCanvas.md#resettransform)
- [getTransform](LeaferCanvas.md#gettransform)
- [save](LeaferCanvas.md#save)
- [restore](LeaferCanvas.md#restore)
- [transform](LeaferCanvas.md#transform)
- [translate](LeaferCanvas.md#translate)
- [scale](LeaferCanvas.md#scale)
- [rotate](LeaferCanvas.md#rotate)
- [fill](LeaferCanvas.md#fill)
- [stroke](LeaferCanvas.md#stroke)
- [clip](LeaferCanvas.md#clip)
- [fillRect](LeaferCanvas.md#fillrect)
- [strokeRect](LeaferCanvas.md#strokerect)
- [clearRect](LeaferCanvas.md#clearrect)
- [drawImage](LeaferCanvas.md#drawimage)
- [beginPath](LeaferCanvas.md#beginpath)
- [moveTo](LeaferCanvas.md#moveto)
- [lineTo](LeaferCanvas.md#lineto)
- [bezierCurveTo](LeaferCanvas.md#beziercurveto)
- [quadraticCurveTo](LeaferCanvas.md#quadraticcurveto)
- [closePath](LeaferCanvas.md#closepath)
- [arc](LeaferCanvas.md#arc)
- [arcTo](LeaferCanvas.md#arcto)
- [ellipse](LeaferCanvas.md#ellipse)
- [rect](LeaferCanvas.md#rect)
- [roundRect](LeaferCanvas.md#roundrect)
- [createConicGradient](LeaferCanvas.md#createconicgradient)
- [createLinearGradient](LeaferCanvas.md#createlineargradient)
- [createPattern](LeaferCanvas.md#createpattern)
- [createRadialGradient](LeaferCanvas.md#createradialgradient)
- [fillText](LeaferCanvas.md#filltext)
- [measureText](LeaferCanvas.md#measuretext)
- [strokeText](LeaferCanvas.md#stroketext)
- [\_\_createContext](LeaferCanvas.md#__createcontext)
- [export](LeaferCanvas.md#export)
- [toBlob](LeaferCanvas.md#toblob)
- [toDataURL](LeaferCanvas.md#todataurl)
- [saveAs](LeaferCanvas.md#saveas)
- [resize](LeaferCanvas.md#resize)
- [getClientBounds](LeaferCanvas.md#getclientbounds)
- [setCursor](LeaferCanvas.md#setcursor)
- [setWorld](LeaferCanvas.md#setworld)
- [useWorldTransform](LeaferCanvas.md#useworldtransform)
- [setStroke](LeaferCanvas.md#setstroke)
- [setStrokeOptions](LeaferCanvas.md#setstrokeoptions)
- [saveBlendMode](LeaferCanvas.md#saveblendmode)
- [restoreBlendMode](LeaferCanvas.md#restoreblendmode)
- [hitFill](LeaferCanvas.md#hitfill)
- [hitStroke](LeaferCanvas.md#hitstroke)
- [hitPixel](LeaferCanvas.md#hitpixel)
- [setWorldShadow](LeaferCanvas.md#setworldshadow)
- [setWorldBlur](LeaferCanvas.md#setworldblur)
- [copyWorld](LeaferCanvas.md#copyworld)
- [copyWorldToInner](LeaferCanvas.md#copyworldtoinner)
- [copyWorldByReset](LeaferCanvas.md#copyworldbyreset)
- [useGrayscaleAlpha](LeaferCanvas.md#usegrayscalealpha)
- [useMask](LeaferCanvas.md#usemask)
- [useEraser](LeaferCanvas.md#useeraser)
- [fillWorld](LeaferCanvas.md#fillworld)
- [strokeWorld](LeaferCanvas.md#strokeworld)
- [clearWorld](LeaferCanvas.md#clearworld)
- [clipWorld](LeaferCanvas.md#clipworld)
- [clear](LeaferCanvas.md#clear)
- [setTempBounds](LeaferCanvas.md#settempbounds)
- [isSameSize](LeaferCanvas.md#issamesize)
- [getSameCanvas](LeaferCanvas.md#getsamecanvas)
- [recycle](LeaferCanvas.md#recycle)
- [updateRender](LeaferCanvas.md#updaterender)

## Constructors

### constructor

• **new LeaferCanvas**(`config?`, `manager?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](../interfaces/ICanvasManager.md) |

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[constructor](LeaferCanvasBase.md#constructor)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:54](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L54)

## Properties

### view

• **view**: `HTMLCanvasElement`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[view](LeaferCanvasBase.md#view)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L9)

___

### parentView

• **parentView**: `HTMLElement`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[parentView](LeaferCanvasBase.md#parentview)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:10](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L10)

___

### resizeObserver

• `Protected` **resizeObserver**: `ResizeObserver`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:31](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L31)

___

### autoBounds

• `Protected` **autoBounds**: [`IAutoBounds`](../interfaces/IAutoBounds.md)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:32](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L32)

___

### resizeListener

• `Protected` **resizeListener**: [`IResizeEventListener`](../interfaces/IResizeEventListener.md)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:33](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L33)

___

### windowListener

• `Protected` **windowListener**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:34](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L34)

___

### context

• **context**: [`ICanvasContext2D`](../interfaces/ICanvasContext2D.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[context](LeaferCanvasBase.md#context)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:27](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L27)

___

### smooth

• **smooth**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[smooth](LeaferCanvasBase.md#smooth)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:32](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L32)

___

### smoothLevel

• **smoothLevel**: `ImageSmoothingQuality`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[smoothLevel](LeaferCanvasBase.md#smoothlevel)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:35](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L35)

___

### opacity

• **opacity**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[opacity](LeaferCanvasBase.md#opacity)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:38](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L38)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillStyle](LeaferCanvasBase.md#fillstyle)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:50](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L50)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeStyle](LeaferCanvasBase.md#strokestyle)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:53](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L53)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeWidth](LeaferCanvasBase.md#strokewidth)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:57](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L57)

___

### strokeCap

• **strokeCap**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeCap](LeaferCanvasBase.md#strokecap)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:60](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L60)

___

### strokeJoin

• **strokeJoin**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeJoin](LeaferCanvasBase.md#strokejoin)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:63](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L63)

___

### dashOffset

• **dashOffset**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[dashOffset](LeaferCanvasBase.md#dashoffset)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:73](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L73)

___

### miterLimit

• **miterLimit**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[miterLimit](LeaferCanvasBase.md#miterlimit)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:76](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L76)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowBlur](LeaferCanvasBase.md#shadowblur)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:80](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L80)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowColor](LeaferCanvasBase.md#shadowcolor)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:83](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L83)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowOffsetX](LeaferCanvasBase.md#shadowoffsetx)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:86](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L86)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[shadowOffsetY](LeaferCanvasBase.md#shadowoffsety)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:89](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L89)

___

### filter

• **filter**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[filter](LeaferCanvasBase.md#filter)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:92](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L92)

___

### font

• **font**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[font](LeaferCanvasBase.md#font)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:96](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L96)

___

### fontKerning

• **fontKerning**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fontKerning](LeaferCanvasBase.md#fontkerning)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:99](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L99)

___

### fontStretch

• **fontStretch**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fontStretch](LeaferCanvasBase.md#fontstretch)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:102](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L102)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fontVariantCaps](LeaferCanvasBase.md#fontvariantcaps)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:105](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L105)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[textAlign](LeaferCanvasBase.md#textalign)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:109](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L109)

___

### textBaseline

• **textBaseline**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[textBaseline](LeaferCanvasBase.md#textbaseline)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:112](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L112)

___

### textRendering

• **textRendering**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[textRendering](LeaferCanvasBase.md#textrendering)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:115](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L115)

___

### wordSpacing

• **wordSpacing**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[wordSpacing](LeaferCanvasBase.md#wordspacing)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:118](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L118)

___

### letterSpacing

• **letterSpacing**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[letterSpacing](LeaferCanvasBase.md#letterspacing)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:121](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L121)

___

### direction

• **direction**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[direction](LeaferCanvasBase.md#direction)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:125](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L125)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[innerId](LeaferCanvasBase.md#innerid)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L16)

___

### name

• **name**: `string`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[name](LeaferCanvasBase.md#name)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L18)

___

### manager

• **manager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[manager](LeaferCanvasBase.md#manager)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:20](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L20)

___

### size

• **size**: [`IScreenSizeData`](../interfaces/IScreenSizeData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[size](LeaferCanvasBase.md#size)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:22](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L22)

___

### bounds

• **bounds**: [`IBounds`](../interfaces/IBounds.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[bounds](LeaferCanvasBase.md#bounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:36](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L36)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clientBounds](LeaferCanvasBase.md#clientbounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:37](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L37)

___

### config

• **config**: [`ILeaferCanvasConfig`](../interfaces/ILeaferCanvasConfig.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[config](LeaferCanvasBase.md#config)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:39](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L39)

___

### autoLayout

• **autoLayout**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[autoLayout](LeaferCanvasBase.md#autolayout)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:41](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L41)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[unreal](LeaferCanvasBase.md#unreal)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:46](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L46)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[recycled](LeaferCanvasBase.md#recycled)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:48](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L48)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[worldTransform](LeaferCanvasBase.md#worldtransform)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:50](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L50)

___

### savedBlendMode

• `Protected` **savedBlendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[savedBlendMode](LeaferCanvasBase.md#savedblendmode)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:52](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L52)

## Accessors

### zIndex

• `set` **zIndex**(`zIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zIndex` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:12](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L12)

___

### childIndex

• `set` **childIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L18)

___

### backgroundColor

• `get` **backgroundColor**(): `string`

#### Returns

`string`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:61](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L61)

• `set` **backgroundColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:60](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L60)

___

### hittable

• `get` **hittable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:64](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L64)

• `set` **hittable**(`hittable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hittable` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:63](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L63)

___

### blendMode

• `get` **blendMode**(): [`IBlendMode`](../modules.md#iblendmode)

#### Returns

[`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

LeaferCanvasBase.blendMode

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:45](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L45)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Inherited from

LeaferCanvasBase.blendMode

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:40](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L40)

___

### dashPattern

• `get` **dashPattern**(): `number`[]

#### Returns

`number`[]

#### Inherited from

LeaferCanvasBase.dashPattern

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:68](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L68)

• `set` **dashPattern**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number`[] |

#### Returns

`void`

#### Inherited from

LeaferCanvasBase.dashPattern

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:65](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L65)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.width

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:24](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L24)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.height

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:25](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L25)

___

### pixelRatio

• `get` **pixelRatio**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.pixelRatio

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:27](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L27)

___

### pixelWidth

• `get` **pixelWidth**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.pixelWidth

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:28](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L28)

___

### pixelHeight

• `get` **pixelHeight**(): `number`

#### Returns

`number`

#### Inherited from

LeaferCanvasBase.pixelHeight

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:29](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L29)

___

### pixelSnap

• `get` **pixelSnap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LeaferCanvasBase.pixelSnap

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:31](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L31)

• `set` **pixelSnap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

LeaferCanvasBase.pixelSnap

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:32](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L32)

___

### allowBackgroundColor

• `get` **allowBackgroundColor**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LeaferCanvasBase.allowBackgroundColor

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:34](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L34)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[init](LeaferCanvasBase.md#init)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:36](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L36)

___

### \_\_createView

▸ `Protected` **__createView**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:66](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L66)

___

### \_\_createViewFrom

▸ `Protected` **__createViewFrom**(`inputView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputView` | `string` \| `object` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:70](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L70)

___

### setAbsolute

▸ `Protected` **setAbsolute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:105](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L105)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[updateViewSize](LeaferCanvasBase.md#updateviewsize)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:111](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L111)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[updateClientBounds](LeaferCanvasBase.md#updateclientbounds)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:122](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L122)

___

### startAutoLayout

▸ **startAutoLayout**(`autoBounds`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoBounds` | [`IAutoBounds`](../interfaces/IAutoBounds.md) |
| `listener` | [`IResizeEventListener`](../interfaces/IResizeEventListener.md) |

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[startAutoLayout](LeaferCanvasBase.md#startautolayout)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:126](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L126)

___

### imitateResizeObserver

▸ `Protected` **imitateResizeObserver**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:170](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L170)

___

### checkAutoBounds

▸ `Protected` **checkAutoBounds**(`parentSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentSize` | [`ISizeData`](../interfaces/ISizeData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:177](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L177)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[stopAutoLayout](LeaferCanvasBase.md#stopautolayout)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:189](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L189)

___

### emitResize

▸ `Protected` **emitResize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:195](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L195)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[unrealCanvas](LeaferCanvasBase.md#unrealcanvas)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:203](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L203)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[LeaferCanvasBase](LeaferCanvasBase.md).[destroy](LeaferCanvasBase.md#destroy)

#### Defined in

[leafer/packages/canvas/canvas-web/src/LeaferCanvas.ts:213](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas-web/src/LeaferCanvas.ts#L213)

___

### \_\_bindContext

▸ **__bindContext**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[__bindContext](LeaferCanvasBase.md#__bindcontext)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:129](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L129)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setTransform](LeaferCanvasBase.md#settransform)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:141](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L141)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[resetTransform](LeaferCanvasBase.md#resettransform)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:144](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L144)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[getTransform](LeaferCanvasBase.md#gettransform)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:147](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L147)

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[save](LeaferCanvasBase.md#save)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:150](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L150)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[restore](LeaferCanvasBase.md#restore)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:153](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L153)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[transform](LeaferCanvasBase.md#transform)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:155](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L155)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[translate](LeaferCanvasBase.md#translate)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:164](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L164)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[scale](LeaferCanvasBase.md#scale)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:167](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L167)

___

### rotate

▸ **rotate**(`_angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_angle` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[rotate](LeaferCanvasBase.md#rotate)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:170](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L170)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fill](LeaferCanvasBase.md#fill)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:173](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L173)

___

### stroke

▸ **stroke**(`_path2d?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_path2d?` | [`IPath2D`](../interfaces/IPath2D.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[stroke](LeaferCanvasBase.md#stroke)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:176](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L176)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clip](LeaferCanvasBase.md#clip)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:179](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L179)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillRect](LeaferCanvasBase.md#fillrect)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:182](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L182)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeRect](LeaferCanvasBase.md#strokerect)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:185](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L185)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clearRect](LeaferCanvasBase.md#clearrect)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:188](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L188)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[drawImage](LeaferCanvasBase.md#drawimage)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:190](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L190)

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[beginPath](LeaferCanvasBase.md#beginpath)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:224](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L224)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[moveTo](LeaferCanvasBase.md#moveto)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:227](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L227)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[lineTo](LeaferCanvasBase.md#lineto)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:230](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L230)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[bezierCurveTo](LeaferCanvasBase.md#beziercurveto)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:233](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L233)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[quadraticCurveTo](LeaferCanvasBase.md#quadraticcurveto)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:236](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L236)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[closePath](LeaferCanvasBase.md#closepath)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:239](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L239)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[arc](LeaferCanvasBase.md#arc)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:242](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L242)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[arcTo](LeaferCanvasBase.md#arcto)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:245](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L245)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[ellipse](LeaferCanvasBase.md#ellipse)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:248](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L248)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[rect](LeaferCanvasBase.md#rect)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:251](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L251)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[roundRect](LeaferCanvasBase.md#roundrect)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:254](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L254)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createConicGradient](LeaferCanvasBase.md#createconicgradient)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:261](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L261)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createLinearGradient](LeaferCanvasBase.md#createlineargradient)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:264](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L264)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createPattern](LeaferCanvasBase.md#createpattern)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:267](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L267)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[createRadialGradient](LeaferCanvasBase.md#createradialgradient)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:270](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L270)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillText](LeaferCanvasBase.md#filltext)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:274](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L274)

___

### measureText

▸ **measureText**(`_text`): [`ITextMetrics`](../interfaces/ITextMetrics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_text` | `string` |

#### Returns

[`ITextMetrics`](../interfaces/ITextMetrics.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[measureText](LeaferCanvasBase.md#measuretext)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:277](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L277)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeText](LeaferCanvasBase.md#stroketext)

#### Defined in

[leafer/packages/canvas/canvas/src/Canvas.ts:280](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/Canvas.ts#L280)

___

### \_\_createContext

▸ **__createContext**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[__createContext](LeaferCanvasBase.md#__createcontext)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:72](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L72)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[export](LeaferCanvasBase.md#export)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:81](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L81)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[toBlob](LeaferCanvasBase.md#toblob)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:83](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L83)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[toDataURL](LeaferCanvasBase.md#todataurl)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:85](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L85)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[saveAs](LeaferCanvasBase.md#saveas)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:87](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L87)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[resize](LeaferCanvasBase.md#resize)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:91](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L91)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[getClientBounds](LeaferCanvasBase.md#getclientbounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:122](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L122)

___

### setCursor

▸ **setCursor**(`_cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setCursor](LeaferCanvasBase.md#setcursor)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:130](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L130)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setWorld](LeaferCanvasBase.md#setworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:132](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L132)

___

### useWorldTransform

▸ **useWorldTransform**(`worldTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useWorldTransform](LeaferCanvasBase.md#useworldtransform)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:152](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L152)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setStroke](LeaferCanvasBase.md#setstroke)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:158](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L158)

___

### setStrokeOptions

▸ **setStrokeOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ICanvasStrokeOptions`](../interfaces/ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setStrokeOptions](LeaferCanvasBase.md#setstrokeoptions)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:164](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L164)

___

### saveBlendMode

▸ **saveBlendMode**(`blendMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blendMode` | [`IBlendMode`](../modules.md#iblendmode) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[saveBlendMode](LeaferCanvasBase.md#saveblendmode)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:172](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L172)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[restoreBlendMode](LeaferCanvasBase.md#restoreblendmode)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:177](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L177)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[hitFill](LeaferCanvasBase.md#hitfill)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:183](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L183)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[hitStroke](LeaferCanvasBase.md#hitstroke)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:185](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L185)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[hitPixel](LeaferCanvasBase.md#hitpixel)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:187](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L187)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setWorldShadow](LeaferCanvasBase.md#setworldshadow)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:191](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L191)

___

### setWorldBlur

▸ **setWorldBlur**(`blur`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blur` | `number` |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setWorldBlur](LeaferCanvasBase.md#setworldblur)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:199](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L199)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyWorld](LeaferCanvasBase.md#copyworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:205](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L205)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyWorldToInner](LeaferCanvasBase.md#copyworldtoinner)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:217](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L217)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[copyWorldByReset](LeaferCanvasBase.md#copyworldbyreset)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:231](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L231)

___

### useGrayscaleAlpha

▸ **useGrayscaleAlpha**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useGrayscaleAlpha](LeaferCanvasBase.md#usegrayscalealpha)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:237](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L237)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useMask](LeaferCanvasBase.md#usemask)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:251](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L251)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[useEraser](LeaferCanvasBase.md#useeraser)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:255](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L255)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[fillWorld](LeaferCanvasBase.md#fillworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:259](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L259)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[strokeWorld](LeaferCanvasBase.md#strokeworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:267](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L267)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clearWorld](LeaferCanvasBase.md#clearworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:275](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L275)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clipWorld](LeaferCanvasBase.md#clipworld)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:280](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L280)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[clear](LeaferCanvasBase.md#clear)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:288](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L288)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[setTempBounds](LeaferCanvasBase.md#settempbounds)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:296](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L296)

___

### isSameSize

▸ **isSameSize**(`size`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`boolean`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[isSameSize](LeaferCanvasBase.md#issamesize)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:303](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L303)

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

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[getSameCanvas](LeaferCanvasBase.md#getsamecanvas)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:308](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L308)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clearBounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[recycle](LeaferCanvasBase.md#recycle)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:319](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L319)

___

### updateRender

▸ **updateRender**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[LeaferCanvasBase](LeaferCanvasBase.md).[updateRender](LeaferCanvasBase.md#updaterender)

#### Defined in

[leafer/packages/canvas/canvas/src/LeaferCanvasBase.ts:327](https://github.com/leaferjs/leafer/blob/27e942d/packages/canvas/canvas/src/LeaferCanvasBase.ts#L327)
