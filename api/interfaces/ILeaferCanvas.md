# Interface: ILeaferCanvas

## Hierarchy

- [`ICanvasAttr`](ICanvasAttr.md)

- `ICanvasMethod`

- [`IPathDrawer`](IPathDrawer.md)

  ↳ **`ILeaferCanvas`**

  ↳↳ [`IHitCanvas`](IHitCanvas.md)

  ↳↳ [`IInteractionCanvas`](IInteractionCanvas.md)

## Implemented by

- [`LeaferCanvasBase`](../classes/LeaferCanvasBase.md)

## Table of contents

### Properties

- [strokeAlign](ILeaferCanvas.md#strokealign)
- [strokeCap](ILeaferCanvas.md#strokecap)
- [strokeJoin](ILeaferCanvas.md#strokejoin)
- [dashPattern](ILeaferCanvas.md#dashpattern)
- [dashOffset](ILeaferCanvas.md#dashoffset)
- [miterLimit](ILeaferCanvas.md#miterlimit)
- [smooth](ILeaferCanvas.md#smooth)
- [smoothLevel](ILeaferCanvas.md#smoothlevel)
- [opacity](ILeaferCanvas.md#opacity)
- [blendMode](ILeaferCanvas.md#blendmode)
- [fillStyle](ILeaferCanvas.md#fillstyle)
- [strokeStyle](ILeaferCanvas.md#strokestyle)
- [strokeWidth](ILeaferCanvas.md#strokewidth)
- [shadowBlur](ILeaferCanvas.md#shadowblur)
- [shadowColor](ILeaferCanvas.md#shadowcolor)
- [shadowOffsetX](ILeaferCanvas.md#shadowoffsetx)
- [shadowOffsetY](ILeaferCanvas.md#shadowoffsety)
- [filter](ILeaferCanvas.md#filter)
- [font](ILeaferCanvas.md#font)
- [fontKerning](ILeaferCanvas.md#fontkerning)
- [fontStretch](ILeaferCanvas.md#fontstretch)
- [fontVariantCaps](ILeaferCanvas.md#fontvariantcaps)
- [textAlign](ILeaferCanvas.md#textalign)
- [textBaseline](ILeaferCanvas.md#textbaseline)
- [textRendering](ILeaferCanvas.md#textrendering)
- [wordSpacing](ILeaferCanvas.md#wordspacing)
- [letterSpacing](ILeaferCanvas.md#letterspacing)
- [direction](ILeaferCanvas.md#direction)
- [innerId](ILeaferCanvas.md#innerid)
- [name](ILeaferCanvas.md#name)
- [manager](ILeaferCanvas.md#manager)
- [width](ILeaferCanvas.md#width)
- [height](ILeaferCanvas.md#height)
- [pixelRatio](ILeaferCanvas.md#pixelratio)
- [pixelWidth](ILeaferCanvas.md#pixelwidth)
- [pixelHeight](ILeaferCanvas.md#pixelheight)
- [allowBackgroundColor](ILeaferCanvas.md#allowbackgroundcolor)
- [backgroundColor](ILeaferCanvas.md#backgroundcolor)
- [hittable](ILeaferCanvas.md#hittable)
- [zIndex](ILeaferCanvas.md#zindex)
- [childIndex](ILeaferCanvas.md#childindex)
- [bounds](ILeaferCanvas.md#bounds)
- [clientBounds](ILeaferCanvas.md#clientbounds)
- [config](ILeaferCanvas.md#config)
- [autoLayout](ILeaferCanvas.md#autolayout)
- [view](ILeaferCanvas.md#view)
- [parentView](ILeaferCanvas.md#parentview)
- [unreal](ILeaferCanvas.md#unreal)
- [context](ILeaferCanvas.md#context)
- [recycled](ILeaferCanvas.md#recycled)
- [worldTransform](ILeaferCanvas.md#worldtransform)

### Methods

- [save](ILeaferCanvas.md#save)
- [restore](ILeaferCanvas.md#restore)
- [fill](ILeaferCanvas.md#fill)
- [stroke](ILeaferCanvas.md#stroke)
- [clip](ILeaferCanvas.md#clip)
- [fillRect](ILeaferCanvas.md#fillrect)
- [strokeRect](ILeaferCanvas.md#strokerect)
- [clearRect](ILeaferCanvas.md#clearrect)
- [transform](ILeaferCanvas.md#transform)
- [translate](ILeaferCanvas.md#translate)
- [scale](ILeaferCanvas.md#scale)
- [rotate](ILeaferCanvas.md#rotate)
- [drawImage](ILeaferCanvas.md#drawimage)
- [setTransform](ILeaferCanvas.md#settransform)
- [getTransform](ILeaferCanvas.md#gettransform)
- [resetTransform](ILeaferCanvas.md#resettransform)
- [createConicGradient](ILeaferCanvas.md#createconicgradient)
- [createLinearGradient](ILeaferCanvas.md#createlineargradient)
- [createPattern](ILeaferCanvas.md#createpattern)
- [createRadialGradient](ILeaferCanvas.md#createradialgradient)
- [fillText](ILeaferCanvas.md#filltext)
- [measureText](ILeaferCanvas.md#measuretext)
- [strokeText](ILeaferCanvas.md#stroketext)
- [saveBlendMode](ILeaferCanvas.md#saveblendmode)
- [restoreBlendMode](ILeaferCanvas.md#restoreblendmode)
- [hitFill](ILeaferCanvas.md#hitfill)
- [hitStroke](ILeaferCanvas.md#hitstroke)
- [hitPixel](ILeaferCanvas.md#hitpixel)
- [setStroke](ILeaferCanvas.md#setstroke)
- [setStrokeOptions](ILeaferCanvas.md#setstrokeoptions)
- [setWorld](ILeaferCanvas.md#setworld)
- [useWorldTransform](ILeaferCanvas.md#useworldtransform)
- [setWorldShadow](ILeaferCanvas.md#setworldshadow)
- [setWorldBlur](ILeaferCanvas.md#setworldblur)
- [copyWorld](ILeaferCanvas.md#copyworld)
- [copyWorldByReset](ILeaferCanvas.md#copyworldbyreset)
- [copyWorldToInner](ILeaferCanvas.md#copyworldtoinner)
- [useGrayscaleAlpha](ILeaferCanvas.md#usegrayscalealpha)
- [useMask](ILeaferCanvas.md#usemask)
- [useEraser](ILeaferCanvas.md#useeraser)
- [fillWorld](ILeaferCanvas.md#fillworld)
- [strokeWorld](ILeaferCanvas.md#strokeworld)
- [clipWorld](ILeaferCanvas.md#clipworld)
- [clearWorld](ILeaferCanvas.md#clearworld)
- [clear](ILeaferCanvas.md#clear)
- [init](ILeaferCanvas.md#init)
- [export](ILeaferCanvas.md#export)
- [toBlob](ILeaferCanvas.md#toblob)
- [toDataURL](ILeaferCanvas.md#todataurl)
- [saveAs](ILeaferCanvas.md#saveas)
- [startAutoLayout](ILeaferCanvas.md#startautolayout)
- [stopAutoLayout](ILeaferCanvas.md#stopautolayout)
- [resize](ILeaferCanvas.md#resize)
- [updateViewSize](ILeaferCanvas.md#updateviewsize)
- [updateClientBounds](ILeaferCanvas.md#updateclientbounds)
- [getClientBounds](ILeaferCanvas.md#getclientbounds)
- [isSameSize](ILeaferCanvas.md#issamesize)
- [getSameCanvas](ILeaferCanvas.md#getsamecanvas)
- [recycle](ILeaferCanvas.md#recycle)
- [updateRender](ILeaferCanvas.md#updaterender)
- [unrealCanvas](ILeaferCanvas.md#unrealcanvas)
- [destroy](ILeaferCanvas.md#destroy)
- [beginPath](ILeaferCanvas.md#beginpath)
- [moveTo](ILeaferCanvas.md#moveto)
- [lineTo](ILeaferCanvas.md#lineto)
- [bezierCurveTo](ILeaferCanvas.md#beziercurveto)
- [quadraticCurveTo](ILeaferCanvas.md#quadraticcurveto)
- [closePath](ILeaferCanvas.md#closepath)
- [arc](ILeaferCanvas.md#arc)
- [arcTo](ILeaferCanvas.md#arcto)
- [ellipse](ILeaferCanvas.md#ellipse)
- [rect](ILeaferCanvas.md#rect)
- [roundRect](ILeaferCanvas.md#roundrect)

## Properties

### strokeAlign

• `Optional` **strokeAlign**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeAlign](ICanvasAttr.md#strokealign)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:26](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L26)

___

### strokeCap

• `Optional` **strokeCap**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeCap](ICanvasAttr.md#strokecap)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:28](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L28)

___

### strokeJoin

• `Optional` **strokeJoin**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeJoin](ICanvasAttr.md#strokejoin)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:29](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L29)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[dashPattern](ICanvasAttr.md#dashpattern)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:30](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L30)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[dashOffset](ICanvasAttr.md#dashoffset)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:31](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L31)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[miterLimit](ICanvasAttr.md#miterlimit)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:32](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L32)

___

### smooth

• **smooth**: `boolean`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[smooth](ICanvasAttr.md#smooth)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:42](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L42)

___

### smoothLevel

• **smoothLevel**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[smoothLevel](ICanvasAttr.md#smoothlevel)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:43](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L43)

___

### opacity

• **opacity**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[opacity](ICanvasAttr.md#opacity)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:44](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L44)

___

### blendMode

• **blendMode**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[blendMode](ICanvasAttr.md#blendmode)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:45](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L45)

___

### fillStyle

• **fillStyle**: `string` \| `object`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fillStyle](ICanvasAttr.md#fillstyle)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:47](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L47)

___

### strokeStyle

• **strokeStyle**: `string` \| `object`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeStyle](ICanvasAttr.md#strokestyle)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:49](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L49)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[strokeWidth](ICanvasAttr.md#strokewidth)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:50](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L50)

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowBlur](ICanvasAttr.md#shadowblur)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:52](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L52)

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowColor](ICanvasAttr.md#shadowcolor)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:53](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L53)

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowOffsetX](ICanvasAttr.md#shadowoffsetx)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:54](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L54)

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[shadowOffsetY](ICanvasAttr.md#shadowoffsety)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:55](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L55)

___

### filter

• **filter**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[filter](ICanvasAttr.md#filter)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:57](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L57)

___

### font

• **font**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[font](ICanvasAttr.md#font)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:59](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L59)

___

### fontKerning

• **fontKerning**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fontKerning](ICanvasAttr.md#fontkerning)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:60](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L60)

___

### fontStretch

• **fontStretch**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fontStretch](ICanvasAttr.md#fontstretch)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:61](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L61)

___

### fontVariantCaps

• **fontVariantCaps**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[fontVariantCaps](ICanvasAttr.md#fontvariantcaps)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:62](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L62)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[textAlign](ICanvasAttr.md#textalign)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:64](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L64)

___

### textBaseline

• **textBaseline**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[textBaseline](ICanvasAttr.md#textbaseline)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:65](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L65)

___

### textRendering

• **textRendering**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[textRendering](ICanvasAttr.md#textrendering)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:66](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L66)

___

### wordSpacing

• **wordSpacing**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[wordSpacing](ICanvasAttr.md#wordspacing)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:67](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L67)

___

### letterSpacing

• **letterSpacing**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[letterSpacing](ICanvasAttr.md#letterspacing)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:68](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L68)

___

### direction

• **direction**: `string`

#### Inherited from

[ICanvasAttr](ICanvasAttr.md).[direction](ICanvasAttr.md#direction)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:70](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L70)

___

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:147](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L147)

___

### name

• **name**: `string`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:148](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L148)

___

### manager

• **manager**: [`ICanvasManager`](ICanvasManager.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:150](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L150)

___

### width

• **width**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:152](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L152)

___

### height

• **height**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:153](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L153)

___

### pixelRatio

• **pixelRatio**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:155](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L155)

___

### pixelWidth

• `Readonly` **pixelWidth**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:156](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L156)

___

### pixelHeight

• `Readonly` **pixelHeight**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:157](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L157)

___

### allowBackgroundColor

• `Optional` `Readonly` **allowBackgroundColor**: `boolean`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:159](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L159)

___

### backgroundColor

• `Optional` **backgroundColor**: `string`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:160](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L160)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:161](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L161)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:163](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L163)

___

### childIndex

• `Optional` **childIndex**: `number`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:164](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L164)

___

### bounds

• **bounds**: [`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:166](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L166)

___

### clientBounds

• **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:167](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L167)

___

### config

• **config**: [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:169](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L169)

___

### autoLayout

• **autoLayout**: `boolean`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:171](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L171)

___

### view

• **view**: `any`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:173](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L173)

___

### parentView

• **parentView**: `any`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:174](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L174)

___

### unreal

• `Optional` **unreal**: `boolean`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:176](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L176)

___

### context

• **context**: [`ICanvasContext2D`](ICanvasContext2D.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:178](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L178)

___

### recycled

• `Optional` **recycled**: `boolean`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:180](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L180)

___

### worldTransform

• **worldTransform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:182](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L182)

## Methods

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.save

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:74](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L74)

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.restore

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:75](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L75)

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

ICanvasMethod.fill

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:77](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L77)

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

ICanvasMethod.stroke

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:78](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L78)

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

ICanvasMethod.clip

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:79](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L79)

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

ICanvasMethod.fillRect

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:81](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L81)

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

ICanvasMethod.strokeRect

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:82](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L82)

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

ICanvasMethod.clearRect

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:83](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L83)

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

ICanvasMethod.transform

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:85](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L85)

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

ICanvasMethod.translate

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:86](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L86)

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

ICanvasMethod.scale

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:87](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L87)

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

ICanvasMethod.rotate

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:88](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L88)

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

ICanvasMethod.drawImage

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:90](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L90)

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

ICanvasMethod.drawImage

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:91](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L91)

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

ICanvasMethod.drawImage

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:92](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L92)

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

ICanvasMethod.setTransform

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:94](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L94)

___

### getTransform

▸ **getTransform**(): [`IMatrixData`](IMatrixData.md)

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

ICanvasMethod.getTransform

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:95](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L95)

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.resetTransform

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:96](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L96)

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

ICanvasMethod.createConicGradient

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:98](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L98)

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

ICanvasMethod.createLinearGradient

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:99](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L99)

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

ICanvasMethod.createPattern

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:100](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L100)

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

ICanvasMethod.createRadialGradient

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:101](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L101)

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

ICanvasMethod.fillText

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:105](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L105)

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

ICanvasMethod.measureText

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:106](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L106)

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

ICanvasMethod.strokeText

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:107](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L107)

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

ICanvasMethod.saveBlendMode

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:111](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L111)

___

### restoreBlendMode

▸ **restoreBlendMode**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.restoreBlendMode

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:112](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L112)

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

ICanvasMethod.hitFill

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:114](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L114)

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

ICanvasMethod.hitStroke

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:115](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L115)

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

ICanvasMethod.hitPixel

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:116](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L116)

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

ICanvasMethod.setStroke

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:119](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L119)

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

ICanvasMethod.setStrokeOptions

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:120](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L120)

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

ICanvasMethod.setWorld

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:122](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L122)

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

ICanvasMethod.useWorldTransform

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:123](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L123)

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

ICanvasMethod.setWorldShadow

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:125](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L125)

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

ICanvasMethod.setWorldBlur

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:126](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L126)

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

ICanvasMethod.copyWorld

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:128](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L128)

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

ICanvasMethod.copyWorldByReset

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:129](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L129)

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

ICanvasMethod.copyWorldToInner

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:130](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L130)

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

ICanvasMethod.useGrayscaleAlpha

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:132](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L132)

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

ICanvasMethod.useMask

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:133](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L133)

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

ICanvasMethod.useEraser

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:134](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L134)

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

ICanvasMethod.fillWorld

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:136](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L136)

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

ICanvasMethod.strokeWorld

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:137](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L137)

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

ICanvasMethod.clipWorld

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:138](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L138)

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

ICanvasMethod.clearWorld

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:139](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L139)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

ICanvasMethod.clear

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:141](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L141)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:184](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L184)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:186](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L186)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:187](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L187)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:188](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L188)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:189](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L189)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:191](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L191)

___

### stopAutoLayout

▸ **stopAutoLayout**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:192](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L192)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:194](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L194)

___

### updateViewSize

▸ **updateViewSize**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:195](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L195)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:196](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L196)

___

### getClientBounds

▸ **getClientBounds**(`update?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `update?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:197](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L197)

___

### isSameSize

▸ **isSameSize**(`options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:200](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L200)

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

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:201](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L201)

___

### recycle

▸ **recycle**(`clearBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clearBounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:202](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L202)

___

### updateRender

▸ **updateRender**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:204](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L204)

___

### unrealCanvas

▸ **unrealCanvas**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:205](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L205)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/canvas/ILeaferCanvas.ts:206](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/canvas/ILeaferCanvas.ts#L206)

___

### beginPath

▸ `Optional` **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[beginPath](IPathDrawer.md#beginpath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:4](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L4)

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

[IPathDrawer](IPathDrawer.md).[moveTo](IPathDrawer.md#moveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:6](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L6)

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

[IPathDrawer](IPathDrawer.md).[lineTo](IPathDrawer.md#lineto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:7](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L7)

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

[IPathDrawer](IPathDrawer.md).[bezierCurveTo](IPathDrawer.md#beziercurveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:8](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L8)

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

[IPathDrawer](IPathDrawer.md).[quadraticCurveTo](IPathDrawer.md#quadraticcurveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:9](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L9)

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[IPathDrawer](IPathDrawer.md).[closePath](IPathDrawer.md#closepath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:10](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L10)

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

[IPathDrawer](IPathDrawer.md).[arc](IPathDrawer.md#arc)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:12](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L12)

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

[IPathDrawer](IPathDrawer.md).[arcTo](IPathDrawer.md#arcto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:13](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L13)

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

[IPathDrawer](IPathDrawer.md).[ellipse](IPathDrawer.md#ellipse)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:14](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L14)

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

[IPathDrawer](IPathDrawer.md).[rect](IPathDrawer.md#rect)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:16](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L16)

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

[IPathDrawer](IPathDrawer.md).[roundRect](IPathDrawer.md#roundrect)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:17](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/path/IPathDrawer.ts#L17)
