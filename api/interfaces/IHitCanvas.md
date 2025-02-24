# Interface: IHitCanvas

## Hierarchy

- [`ILeaferCanvas`](ILeaferCanvas.md)

  ↳ **`IHitCanvas`**

## Table of contents

### Properties

- [strokeAlign](IHitCanvas.md#strokealign)
- [strokeCap](IHitCanvas.md#strokecap)
- [strokeJoin](IHitCanvas.md#strokejoin)
- [dashPattern](IHitCanvas.md#dashpattern)
- [dashOffset](IHitCanvas.md#dashoffset)
- [miterLimit](IHitCanvas.md#miterlimit)
- [smooth](IHitCanvas.md#smooth)
- [smoothLevel](IHitCanvas.md#smoothlevel)
- [opacity](IHitCanvas.md#opacity)
- [blendMode](IHitCanvas.md#blendmode)
- [fillStyle](IHitCanvas.md#fillstyle)
- [strokeStyle](IHitCanvas.md#strokestyle)
- [strokeWidth](IHitCanvas.md#strokewidth)
- [shadowBlur](IHitCanvas.md#shadowblur)
- [shadowColor](IHitCanvas.md#shadowcolor)
- [shadowOffsetX](IHitCanvas.md#shadowoffsetx)
- [shadowOffsetY](IHitCanvas.md#shadowoffsety)
- [filter](IHitCanvas.md#filter)
- [font](IHitCanvas.md#font)
- [fontKerning](IHitCanvas.md#fontkerning)
- [fontStretch](IHitCanvas.md#fontstretch)
- [fontVariantCaps](IHitCanvas.md#fontvariantcaps)
- [textAlign](IHitCanvas.md#textalign)
- [textBaseline](IHitCanvas.md#textbaseline)
- [textRendering](IHitCanvas.md#textrendering)
- [wordSpacing](IHitCanvas.md#wordspacing)
- [letterSpacing](IHitCanvas.md#letterspacing)
- [direction](IHitCanvas.md#direction)
- [innerId](IHitCanvas.md#innerid)
- [name](IHitCanvas.md#name)
- [manager](IHitCanvas.md#manager)
- [width](IHitCanvas.md#width)
- [height](IHitCanvas.md#height)
- [pixelRatio](IHitCanvas.md#pixelratio)
- [pixelWidth](IHitCanvas.md#pixelwidth)
- [pixelHeight](IHitCanvas.md#pixelheight)
- [allowBackgroundColor](IHitCanvas.md#allowbackgroundcolor)
- [backgroundColor](IHitCanvas.md#backgroundcolor)
- [hittable](IHitCanvas.md#hittable)
- [zIndex](IHitCanvas.md#zindex)
- [childIndex](IHitCanvas.md#childindex)
- [bounds](IHitCanvas.md#bounds)
- [clientBounds](IHitCanvas.md#clientbounds)
- [config](IHitCanvas.md#config)
- [autoLayout](IHitCanvas.md#autolayout)
- [view](IHitCanvas.md#view)
- [parentView](IHitCanvas.md#parentview)
- [unreal](IHitCanvas.md#unreal)
- [context](IHitCanvas.md#context)
- [recycled](IHitCanvas.md#recycled)
- [worldTransform](IHitCanvas.md#worldtransform)
- [hitScale](IHitCanvas.md#hitscale)

### Methods

- [save](IHitCanvas.md#save)
- [restore](IHitCanvas.md#restore)
- [fill](IHitCanvas.md#fill)
- [stroke](IHitCanvas.md#stroke)
- [clip](IHitCanvas.md#clip)
- [fillRect](IHitCanvas.md#fillrect)
- [strokeRect](IHitCanvas.md#strokerect)
- [clearRect](IHitCanvas.md#clearrect)
- [transform](IHitCanvas.md#transform)
- [translate](IHitCanvas.md#translate)
- [scale](IHitCanvas.md#scale)
- [rotate](IHitCanvas.md#rotate)
- [drawImage](IHitCanvas.md#drawimage)
- [setTransform](IHitCanvas.md#settransform)
- [getTransform](IHitCanvas.md#gettransform)
- [resetTransform](IHitCanvas.md#resettransform)
- [createConicGradient](IHitCanvas.md#createconicgradient)
- [createLinearGradient](IHitCanvas.md#createlineargradient)
- [createPattern](IHitCanvas.md#createpattern)
- [createRadialGradient](IHitCanvas.md#createradialgradient)
- [fillText](IHitCanvas.md#filltext)
- [measureText](IHitCanvas.md#measuretext)
- [strokeText](IHitCanvas.md#stroketext)
- [saveBlendMode](IHitCanvas.md#saveblendmode)
- [restoreBlendMode](IHitCanvas.md#restoreblendmode)
- [hitFill](IHitCanvas.md#hitfill)
- [hitStroke](IHitCanvas.md#hitstroke)
- [hitPixel](IHitCanvas.md#hitpixel)
- [setStroke](IHitCanvas.md#setstroke)
- [setStrokeOptions](IHitCanvas.md#setstrokeoptions)
- [setWorld](IHitCanvas.md#setworld)
- [useWorldTransform](IHitCanvas.md#useworldtransform)
- [setWorldShadow](IHitCanvas.md#setworldshadow)
- [setWorldBlur](IHitCanvas.md#setworldblur)
- [copyWorld](IHitCanvas.md#copyworld)
- [copyWorldByReset](IHitCanvas.md#copyworldbyreset)
- [copyWorldToInner](IHitCanvas.md#copyworldtoinner)
- [useGrayscaleAlpha](IHitCanvas.md#usegrayscalealpha)
- [useMask](IHitCanvas.md#usemask)
- [useEraser](IHitCanvas.md#useeraser)
- [fillWorld](IHitCanvas.md#fillworld)
- [strokeWorld](IHitCanvas.md#strokeworld)
- [clipWorld](IHitCanvas.md#clipworld)
- [clearWorld](IHitCanvas.md#clearworld)
- [clear](IHitCanvas.md#clear)
- [init](IHitCanvas.md#init)
- [export](IHitCanvas.md#export)
- [toBlob](IHitCanvas.md#toblob)
- [toDataURL](IHitCanvas.md#todataurl)
- [saveAs](IHitCanvas.md#saveas)
- [startAutoLayout](IHitCanvas.md#startautolayout)
- [stopAutoLayout](IHitCanvas.md#stopautolayout)
- [resize](IHitCanvas.md#resize)
- [updateViewSize](IHitCanvas.md#updateviewsize)
- [updateClientBounds](IHitCanvas.md#updateclientbounds)
- [getClientBounds](IHitCanvas.md#getclientbounds)
- [isSameSize](IHitCanvas.md#issamesize)
- [getSameCanvas](IHitCanvas.md#getsamecanvas)
- [recycle](IHitCanvas.md#recycle)
- [updateRender](IHitCanvas.md#updaterender)
- [unrealCanvas](IHitCanvas.md#unrealcanvas)
- [destroy](IHitCanvas.md#destroy)
- [beginPath](IHitCanvas.md#beginpath)
- [moveTo](IHitCanvas.md#moveto)
- [lineTo](IHitCanvas.md#lineto)
- [bezierCurveTo](IHitCanvas.md#beziercurveto)
- [quadraticCurveTo](IHitCanvas.md#quadraticcurveto)
- [closePath](IHitCanvas.md#closepath)
- [arc](IHitCanvas.md#arc)
- [arcTo](IHitCanvas.md#arcto)
- [ellipse](IHitCanvas.md#ellipse)
- [rect](IHitCanvas.md#rect)
- [roundRect](IHitCanvas.md#roundrect)

## Properties

### strokeAlign

• `Optional` **strokeAlign**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeAlign](ILeaferCanvas.md#strokealign)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:26](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L26)

___

### strokeCap

• `Optional` **strokeCap**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeCap](ILeaferCanvas.md#strokecap)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:28](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L28)

___

### strokeJoin

• `Optional` **strokeJoin**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeJoin](ILeaferCanvas.md#strokejoin)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:29](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L29)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[dashPattern](ILeaferCanvas.md#dashpattern)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:30](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L30)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[dashOffset](ILeaferCanvas.md#dashoffset)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:31](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L31)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[miterLimit](ILeaferCanvas.md#miterlimit)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:32](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L32)

___

### smooth

• **smooth**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[smooth](ILeaferCanvas.md#smooth)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:42](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L42)

___

### smoothLevel

• **smoothLevel**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[smoothLevel](ILeaferCanvas.md#smoothlevel)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:43](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L43)

___

### opacity

• **opacity**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[opacity](ILeaferCanvas.md#opacity)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:44](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L44)

___

### blendMode

• **blendMode**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[blendMode](ILeaferCanvas.md#blendmode)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:45](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L45)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillStyle](ILeaferCanvas.md#fillstyle)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:47](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L47)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeStyle](ILeaferCanvas.md#strokestyle)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:49](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L49)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeWidth](ILeaferCanvas.md#strokewidth)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:50](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L50)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowBlur](ILeaferCanvas.md#shadowblur)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:52](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L52)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowColor](ILeaferCanvas.md#shadowcolor)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:53](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L53)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowOffsetX](ILeaferCanvas.md#shadowoffsetx)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:54](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L54)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[shadowOffsetY](ILeaferCanvas.md#shadowoffsety)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:55](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L55)

___

### filter

• **filter**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[filter](ILeaferCanvas.md#filter)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:57](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L57)

___

### font

• **font**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[font](ILeaferCanvas.md#font)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:59](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L59)

___

### fontKerning

• **fontKerning**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fontKerning](ILeaferCanvas.md#fontkerning)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:60](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L60)

___

### fontStretch

• **fontStretch**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fontStretch](ILeaferCanvas.md#fontstretch)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:61](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L61)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fontVariantCaps](ILeaferCanvas.md#fontvariantcaps)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:62](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L62)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[textAlign](ILeaferCanvas.md#textalign)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:64](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L64)

___

### textBaseline

• **textBaseline**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[textBaseline](ILeaferCanvas.md#textbaseline)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:65](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L65)

___

### textRendering

• **textRendering**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[textRendering](ILeaferCanvas.md#textrendering)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:66](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L66)

___

### wordSpacing

• **wordSpacing**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[wordSpacing](ILeaferCanvas.md#wordspacing)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:67](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L67)

___

### letterSpacing

• **letterSpacing**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[letterSpacing](ILeaferCanvas.md#letterspacing)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:68](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L68)

___

### direction

• **direction**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[direction](ILeaferCanvas.md#direction)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:70](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L70)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[innerId](ILeaferCanvas.md#innerid)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:147](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L147)

___

### name

• **name**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[name](ILeaferCanvas.md#name)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:148](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L148)

___

### manager

• **manager**: [`ICanvasManager`](ICanvasManager.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[manager](ILeaferCanvas.md#manager)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:150](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L150)

___

### width

• **width**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[width](ILeaferCanvas.md#width)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:152](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L152)

___

### height

• **height**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[height](ILeaferCanvas.md#height)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:153](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L153)

___

### pixelRatio

• **pixelRatio**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelRatio](ILeaferCanvas.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:155](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L155)

___

### pixelWidth

• `Readonly` **pixelWidth**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelWidth](ILeaferCanvas.md#pixelwidth)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:156](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L156)

___

### pixelHeight

• `Readonly` **pixelHeight**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[pixelHeight](ILeaferCanvas.md#pixelheight)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:157](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L157)

___

### allowBackgroundColor

• `Optional` `Readonly` **allowBackgroundColor**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[allowBackgroundColor](ILeaferCanvas.md#allowbackgroundcolor)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:159](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L159)

___

### backgroundColor

• `Optional` **backgroundColor**: `string`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[backgroundColor](ILeaferCanvas.md#backgroundcolor)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:160](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L160)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hittable](ILeaferCanvas.md#hittable)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:161](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L161)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[zIndex](ILeaferCanvas.md#zindex)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:163](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L163)

___

### childIndex

• `Optional` **childIndex**: `number`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[childIndex](ILeaferCanvas.md#childindex)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:164](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L164)

___

### bounds

• **bounds**: [`IBounds`](IBounds.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[bounds](ILeaferCanvas.md#bounds)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:166](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L166)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clientBounds](ILeaferCanvas.md#clientbounds)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:167](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L167)

___

### config

• **config**: [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[config](ILeaferCanvas.md#config)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:169](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L169)

___

### autoLayout

• **autoLayout**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[autoLayout](ILeaferCanvas.md#autolayout)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:171](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L171)

___

### view

• **view**: `any`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[view](ILeaferCanvas.md#view)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:173](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L173)

___

### parentView

• **parentView**: `any`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[parentView](ILeaferCanvas.md#parentview)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:174](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L174)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[unreal](ILeaferCanvas.md#unreal)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:176](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L176)

___

### context

• **context**: [`ICanvasContext2D`](ICanvasContext2D.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[context](ILeaferCanvas.md#context)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:178](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L178)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[recycled](ILeaferCanvas.md#recycled)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:180](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L180)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[worldTransform](ILeaferCanvas.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:182](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L182)

___

### hitScale

• `Optional` **hitScale**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:211](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L211)

## Methods

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[save](ILeaferCanvas.md#save)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:74](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L74)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[restore](ILeaferCanvas.md#restore)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:75](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L75)

___

### fill

▸ **fill**(`path?`, `rule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`IWindingRule`](../modules.md#iwindingrule) \| [`IPath2D`](IPath2D.md) |
| `rule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fill](ILeaferCanvas.md#fill)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:77](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L77)

___

### stroke

▸ **stroke**(`path?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`IPath2D`](IPath2D.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[stroke](ILeaferCanvas.md#stroke)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:78](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L78)

___

### clip

▸ **clip**(`path?`, `rule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | [`IWindingRule`](../modules.md#iwindingrule) \| [`IPath2D`](IPath2D.md) |
| `rule?` | [`IWindingRule`](../modules.md#iwindingrule) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clip](ILeaferCanvas.md#clip)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:79](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L79)

___

### fillRect

▸ **fillRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillRect](ILeaferCanvas.md#fillrect)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:81](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L81)

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeRect](ILeaferCanvas.md#strokerect)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:82](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L82)

___

### clearRect

▸ **clearRect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clearRect](ILeaferCanvas.md#clearrect)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:83](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L83)

___

### transform

▸ **transform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`IMatrixData`](IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[transform](ILeaferCanvas.md#transform)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:85](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L85)

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[translate](ILeaferCanvas.md#translate)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:86](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L86)

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[scale](ILeaferCanvas.md#scale)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:87](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L87)

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[rotate](ILeaferCanvas.md#rotate)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:88](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L88)

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[drawImage](ILeaferCanvas.md#drawimage)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:90](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L90)

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[drawImage](ILeaferCanvas.md#drawimage)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:91](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L91)

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[drawImage](ILeaferCanvas.md#drawimage)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:92](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L92)

___

### setTransform

▸ **setTransform**(`a`, `b?`, `c?`, `d?`, `e?`, `f?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` \| [`IMatrixData`](IMatrixData.md) |
| `b?` | `number` |
| `c?` | `number` |
| `d?` | `number` |
| `e?` | `number` |
| `f?` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setTransform](ILeaferCanvas.md#settransform)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:94](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L94)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](IMatrixData.md)

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[getTransform](ILeaferCanvas.md#gettransform)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:95](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L95)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[resetTransform](ILeaferCanvas.md#resettransform)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:96](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L96)

___

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startAngle` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createConicGradient](ILeaferCanvas.md#createconicgradient)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:98](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L98)

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createLinearGradient](ILeaferCanvas.md#createlineargradient)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:99](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L99)

___

### createPattern

▸ **createPattern**(`image`, `repetition`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `CanvasImageSource` |
| `repetition` | `string` |

#### Returns

`CanvasPattern`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createPattern](ILeaferCanvas.md#createpattern)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:100](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L100)

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): `CanvasGradient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

`CanvasGradient`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[createRadialGradient](ILeaferCanvas.md#createradialgradient)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:101](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L101)

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillText](ILeaferCanvas.md#filltext)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:105](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L105)

___

### measureText

▸ **measureText**(`text`): [`ITextMetrics`](ITextMetrics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`ITextMetrics`](ITextMetrics.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[measureText](ILeaferCanvas.md#measuretext)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:106](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L106)

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeText](ILeaferCanvas.md#stroketext)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:107](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L107)

___

### saveBlendMode

▸ **saveBlendMode**(`blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[saveBlendMode](ILeaferCanvas.md#saveblendmode)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:111](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L111)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[restoreBlendMode](ILeaferCanvas.md#restoreblendmode)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:112](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L112)

___

### hitFill

▸ **hitFill**(`point`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |
| `fillRule?` | `string` |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hitFill](ILeaferCanvas.md#hitfill)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:114](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L114)

___

### hitStroke

▸ **hitStroke**(`point`, `strokeWidth?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IPointData`](IPointData.md) |
| `strokeWidth?` | `number` |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hitStroke](ILeaferCanvas.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:115](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L115)

___

### hitPixel

▸ **hitPixel**(`radiusPoint`, `offset?`, `scale?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radiusPoint` | [`IRadiusPointData`](IRadiusPointData.md) |
| `offset?` | [`IPointData`](IPointData.md) |
| `scale?` | `number` |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[hitPixel](ILeaferCanvas.md#hitpixel)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:116](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L116)

___

### setStroke

▸ **setStroke**(`strokeStyle`, `strokeWidth`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strokeStyle` | `string` \| `object` |
| `strokeWidth` | `number` |
| `options?` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setStroke](ILeaferCanvas.md#setstroke)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:119](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L119)

___

### setStrokeOptions

▸ **setStrokeOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ICanvasStrokeOptions`](ICanvasStrokeOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setStrokeOptions](ILeaferCanvas.md#setstrokeoptions)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:120](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L120)

___

### setWorld

▸ **setWorld**(`matrix`, `parentMatrix?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](IMatrixData.md) |
| `parentMatrix?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[setWorld](ILeaferCanvas.md#setworld)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:122](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L122)

___

### useWorldTransform

▸ **useWorldTransform**(`worldTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](IMatrixData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useWorldTransform](ILeaferCanvas.md#useworldtransform)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:123](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L123)

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

[ILeaferCanvas](ILeaferCanvas.md).[setWorldShadow](ILeaferCanvas.md#setworldshadow)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:125](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L125)

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

[ILeaferCanvas](ILeaferCanvas.md).[setWorldBlur](ILeaferCanvas.md#setworldblur)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:126](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L126)

___

### copyWorld

▸ **copyWorld**(`canvas`, `fromBounds?`, `toBounds?`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](IBoundsData.md) |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[copyWorld](ILeaferCanvas.md#copyworld)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:128](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L128)

___

### copyWorldByReset

▸ **copyWorldByReset**(`canvas`, `from?`, `to?`, `blendMode?`, `onlyResetTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `from?` | [`IBoundsData`](IBoundsData.md) |
| `to?` | [`IBoundsData`](IBoundsData.md) |
| `blendMode?` | `string` |
| `onlyResetTransform?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[copyWorldByReset](ILeaferCanvas.md#copyworldbyreset)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:129](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L129)

___

### copyWorldToInner

▸ **copyWorldToInner**(`canvas`, `fromWorld`, `toInnerBounds`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromWorld` | [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md) |
| `toInnerBounds` | [`IBoundsData`](IBoundsData.md) |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[copyWorldToInner](ILeaferCanvas.md#copyworldtoinner)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:130](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L130)

___

### useGrayscaleAlpha

▸ **useGrayscaleAlpha**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useGrayscaleAlpha](ILeaferCanvas.md#usegrayscalealpha)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:132](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L132)

___

### useMask

▸ **useMask**(`maskCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useMask](ILeaferCanvas.md#usemask)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:133](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L133)

___

### useEraser

▸ **useEraser**(`eraserCanvas`, `fromBounds?`, `toBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eraserCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromBounds?` | [`IBoundsData`](IBoundsData.md) |
| `toBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[useEraser](ILeaferCanvas.md#useeraser)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:134](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L134)

___

### fillWorld

▸ **fillWorld**(`bounds`, `color`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `color` | `string` \| `object` |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[fillWorld](ILeaferCanvas.md#fillworld)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:136](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L136)

___

### strokeWorld

▸ **strokeWorld**(`bounds`, `color`, `blendMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `color` | `string` \| `object` |
| `blendMode?` | `string` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[strokeWorld](ILeaferCanvas.md#strokeworld)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:137](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L137)

___

### clipWorld

▸ **clipWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clipWorld](ILeaferCanvas.md#clipworld)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:138](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L138)

___

### clearWorld

▸ **clearWorld**(`bounds`, `ceilPixel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |
| `ceilPixel?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clearWorld](ILeaferCanvas.md#clearworld)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:139](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L139)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[clear](ILeaferCanvas.md#clear)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:141](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L141)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[init](ILeaferCanvas.md#init)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:184](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L184)

___

### export

▸ **export**(`filename`, `options?`): `string` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`string` \| `Promise`<`any`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[export](ILeaferCanvas.md#export)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:186](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L186)

___

### toBlob

▸ **toBlob**(`type?`, `quality?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[toBlob](ILeaferCanvas.md#toblob)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:187](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L187)

___

### toDataURL

▸ **toDataURL**(`type?`, `quality?`): `string` \| `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `quality?` | `number` |

#### Returns

`string` \| `Promise`<`string`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[toDataURL](ILeaferCanvas.md#todataurl)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:188](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L188)

___

### saveAs

▸ **saveAs**(`filename`, `quality?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[saveAs](ILeaferCanvas.md#saveas)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:189](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L189)

___

### startAutoLayout

▸ **startAutoLayout**(`autoBounds`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoBounds` | [`IAutoBounds`](IAutoBounds.md) |
| `listener` | [`IResizeEventListener`](IResizeEventListener.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[startAutoLayout](ILeaferCanvas.md#startautolayout)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:191](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L191)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[stopAutoLayout](ILeaferCanvas.md#stopautolayout)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:192](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L192)

___

### resize

▸ **resize**(`size`, `safeResize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](IScreenSizeData.md) |
| `safeResize?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[resize](ILeaferCanvas.md#resize)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:194](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L194)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[updateViewSize](ILeaferCanvas.md#updateviewsize)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:195](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L195)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[updateClientBounds](ILeaferCanvas.md#updateclientbounds)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:196](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L196)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[getClientBounds](ILeaferCanvas.md#getclientbounds)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:197](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L197)

___

### isSameSize

▸ **isSameSize**(`options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[isSameSize](ILeaferCanvas.md#issamesize)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:200](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L200)

___

### getSameCanvas

▸ **getSameCanvas**(`useSameWorldTransform?`, `useSameSmooth?`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `useSameWorldTransform?` | `boolean` |
| `useSameSmooth?` | `boolean` |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[getSameCanvas](ILeaferCanvas.md#getsamecanvas)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:201](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L201)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clearBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[recycle](ILeaferCanvas.md#recycle)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:202](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L202)

___

### updateRender

▸ **updateRender**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[updateRender](ILeaferCanvas.md#updaterender)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:204](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L204)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[unrealCanvas](ILeaferCanvas.md#unrealcanvas)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:205](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L205)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[destroy](ILeaferCanvas.md#destroy)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:206](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/canvas/ILeaferCanvas.ts#L206)

___

### beginPath

▸ `Optional` **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[beginPath](ILeaferCanvas.md#beginpath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:3](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L3)

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[moveTo](ILeaferCanvas.md#moveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:5](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L5)

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[lineTo](ILeaferCanvas.md#lineto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:6](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L6)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[bezierCurveTo](ILeaferCanvas.md#beziercurveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:7](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L7)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[quadraticCurveTo](ILeaferCanvas.md#quadraticcurveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:8](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L8)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[closePath](ILeaferCanvas.md#closepath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L9)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[arc](ILeaferCanvas.md#arc)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:11](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L11)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[arcTo](ILeaferCanvas.md#arcto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:12](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L12)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `anticlockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[ellipse](ILeaferCanvas.md#ellipse)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L13)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[rect](ILeaferCanvas.md#rect)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L15)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `radius?` | `number` \| `number`[] |

#### Returns

`void`

#### Inherited from

[ILeaferCanvas](ILeaferCanvas.md).[roundRect](ILeaferCanvas.md#roundrect)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/path/IPathDrawer.ts#L16)
