# Interface: ICanvasData

## Hierarchy

- `ICanvasAttrData`

- [`IRectData`](IRectData.md)

  ↳ **`ICanvasData`**

## Implemented by

- [`CanvasData`](../classes/CanvasData.md)

## Table of contents

### Properties

- [\_\_leaf](ICanvasData.md#__leaf)
- [\_\_input](ICanvasData.md#__input)
- [\_\_middle](ICanvasData.md#__middle)
- [\_\_single](ICanvasData.md#__single)
- [id](ICanvasData.md#id)
- [name](ICanvasData.md#name)
- [className](ICanvasData.md#classname)
- [blendMode](ICanvasData.md#blendmode)
- [opacity](ICanvasData.md#opacity)
- [visible](ICanvasData.md#visible)
- [selected](ICanvasData.md#selected)
- [disabled](ICanvasData.md#disabled)
- [locked](ICanvasData.md#locked)
- [zIndex](ICanvasData.md#zindex)
- [dim](ICanvasData.md#dim)
- [dimskip](ICanvasData.md#dimskip)
- [mask](ICanvasData.md#mask)
- [eraser](ICanvasData.md#eraser)
- [filter](ICanvasData.md#filter)
- [x](ICanvasData.md#x)
- [y](ICanvasData.md#y)
- [width](ICanvasData.md#width)
- [height](ICanvasData.md#height)
- [scaleX](ICanvasData.md#scalex)
- [scaleY](ICanvasData.md#scaley)
- [rotation](ICanvasData.md#rotation)
- [skewX](ICanvasData.md#skewx)
- [skewY](ICanvasData.md#skewy)
- [offsetX](ICanvasData.md#offsetx)
- [offsetY](ICanvasData.md#offsety)
- [scrollX](ICanvasData.md#scrollx)
- [scrollY](ICanvasData.md#scrolly)
- [origin](ICanvasData.md#origin)
- [around](ICanvasData.md#around)
- [lazy](ICanvasData.md#lazy)
- [pixelRatio](ICanvasData.md#pixelratio)
- [renderSpread](ICanvasData.md#renderspread)
- [path](ICanvasData.md#path)
- [windingRule](ICanvasData.md#windingrule)
- [closed](ICanvasData.md#closed)
- [flow](ICanvasData.md#flow)
- [padding](ICanvasData.md#padding)
- [gap](ICanvasData.md#gap)
- [flowAlign](ICanvasData.md#flowalign)
- [flowWrap](ICanvasData.md#flowwrap)
- [itemBox](ICanvasData.md#itembox)
- [inFlow](ICanvasData.md#inflow)
- [autoWidth](ICanvasData.md#autowidth)
- [autoHeight](ICanvasData.md#autoheight)
- [lockRatio](ICanvasData.md#lockratio)
- [autoBox](ICanvasData.md#autobox)
- [widthRange](ICanvasData.md#widthrange)
- [heightRange](ICanvasData.md#heightrange)
- [draggable](ICanvasData.md#draggable)
- [dragBounds](ICanvasData.md#dragbounds)
- [dragBoundsType](ICanvasData.md#dragboundstype)
- [editable](ICanvasData.md#editable)
- [hittable](ICanvasData.md#hittable)
- [hitFill](ICanvasData.md#hitfill)
- [hitStroke](ICanvasData.md#hitstroke)
- [hitBox](ICanvasData.md#hitbox)
- [hitChildren](ICanvasData.md#hitchildren)
- [hitSelf](ICanvasData.md#hitself)
- [hitRadius](ICanvasData.md#hitradius)
- [button](ICanvasData.md#button)
- [cursor](ICanvasData.md#cursor)
- [motionPath](ICanvasData.md#motionpath)
- [motionPrecision](ICanvasData.md#motionprecision)
- [motion](ICanvasData.md#motion)
- [motionRotation](ICanvasData.md#motionrotation)
- [normalStyle](ICanvasData.md#normalstyle)
- [data](ICanvasData.md#data)
- [\_\_childBranchNumber](ICanvasData.md#__childbranchnumber)
- [\_\_complex](ICanvasData.md#__complex)
- [\_\_naturalWidth](ICanvasData.md#__naturalwidth)
- [\_\_naturalHeight](ICanvasData.md#__naturalheight)
- [\_\_autoWidth](ICanvasData.md#__autowidth)
- [\_\_autoHeight](ICanvasData.md#__autoheight)
- [\_\_autoSide](ICanvasData.md#__autoside)
- [\_\_autoSize](ICanvasData.md#__autosize)
- [\_\_useNaturalRatio](ICanvasData.md#__usenaturalratio)
- [\_\_isLinePath](ICanvasData.md#__islinepath)
- [\_\_blendMode](ICanvasData.md#__blendmode)
- [\_\_useStroke](ICanvasData.md#__usestroke)
- [\_\_useArrow](ICanvasData.md#__usearrow)
- [\_\_useEffect](ICanvasData.md#__useeffect)
- [\_\_pathInputed](ICanvasData.md#__pathinputed)
- [\_\_pathForRender](ICanvasData.md#__pathforrender)
- [\_\_path2DForRender](ICanvasData.md#__path2dforrender)
- [\_\_pathForArrow](ICanvasData.md#__pathforarrow)
- [\_\_pathForMotion](ICanvasData.md#__pathformotion)
- [cornerRadius](ICanvasData.md#cornerradius)
- [cornerSmoothing](ICanvasData.md#cornersmoothing)
- [fill](ICanvasData.md#fill)
- [borderWidth](ICanvasData.md#borderwidth)
- [borderRadius](ICanvasData.md#borderradius)
- [stroke](ICanvasData.md#stroke)
- [startArrow](ICanvasData.md#startarrow)
- [endArrow](ICanvasData.md#endarrow)
- [strokeAlign](ICanvasData.md#strokealign)
- [strokeWidth](ICanvasData.md#strokewidth)
- [strokeWidths](ICanvasData.md#strokewidths)
- [strokeWidthFixed](ICanvasData.md#strokewidthfixed)
- [strokeCap](ICanvasData.md#strokecap)
- [strokeJoin](ICanvasData.md#strokejoin)
- [dashPattern](ICanvasData.md#dashpattern)
- [dashOffset](ICanvasData.md#dashoffset)
- [miterLimit](ICanvasData.md#miterlimit)
- [fontFamily](ICanvasData.md#fontfamily)
- [fontSize](ICanvasData.md#fontsize)
- [fontWeight](ICanvasData.md#fontweight)
- [italic](ICanvasData.md#italic)
- [textCase](ICanvasData.md#textcase)
- [textDecoration](ICanvasData.md#textdecoration)
- [letterSpacing](ICanvasData.md#letterspacing)
- [lineHeight](ICanvasData.md#lineheight)
- [paraIndent](ICanvasData.md#paraindent)
- [paraSpacing](ICanvasData.md#paraspacing)
- [writingMode](ICanvasData.md#writingmode)
- [textAlign](ICanvasData.md#textalign)
- [verticalAlign](ICanvasData.md#verticalalign)
- [autoSizeAlign](ICanvasData.md#autosizealign)
- [textWrap](ICanvasData.md#textwrap)
- [textOverflow](ICanvasData.md#textoverflow)
- [shadow](ICanvasData.md#shadow)
- [innerShadow](ICanvasData.md#innershadow)
- [blur](ICanvasData.md#blur)
- [backgroundBlur](ICanvasData.md#backgroundblur)
- [grayscale](ICanvasData.md#grayscale)
- [smooth](ICanvasData.md#smooth)
- [safeResize](ICanvasData.md#saferesize)
- [contextSettings](ICanvasData.md#contextsettings)
- [url](ICanvasData.md#url)
- [animation](ICanvasData.md#animation)
- [animationOut](ICanvasData.md#animationout)
- [transition](ICanvasData.md#transition)
- [transitionOut](ICanvasData.md#transitionout)
- [states](ICanvasData.md#states)
- [state](ICanvasData.md#state)
- [hoverStyle](ICanvasData.md#hoverstyle)
- [pressStyle](ICanvasData.md#pressstyle)
- [focusStyle](ICanvasData.md#focusstyle)
- [selectedStyle](ICanvasData.md#selectedstyle)
- [disabledStyle](ICanvasData.md#disabledstyle)
- [placeholderStyle](ICanvasData.md#placeholderstyle)
- [placeholderColor](ICanvasData.md#placeholdercolor)
- [placeholderDelay](ICanvasData.md#placeholderdelay)
- [editConfig](ICanvasData.md#editconfig)
- [editOuter](ICanvasData.md#editouter)
- [editInner](ICanvasData.md#editinner)
- [scale](ICanvasData.md#scale)
- [\_\_isFills](ICanvasData.md#__isfills)
- [\_\_isStrokes](ICanvasData.md#__isstrokes)
- [\_\_strokeWidth](ICanvasData.md#__strokewidth)
- [\_\_maxStrokeWidth](ICanvasData.md#__maxstrokewidth)
- [\_\_hasMultiStrokeStyle](ICanvasData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](ICanvasData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](ICanvasData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ICanvasData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ICanvasData.md#__istransparentfill)
- [\_\_isTransparentStroke](ICanvasData.md#__istransparentstroke)
- [\_\_isHitPixel](ICanvasData.md#__ishitpixel)
- [\_\_isCanvas](ICanvasData.md#__iscanvas)
- [\_\_isFastShadow](ICanvasData.md#__isfastshadow)
- [\_\_fillAfterStroke](ICanvasData.md#__fillafterstroke)
- [\_\_drawAfterFill](ICanvasData.md#__drawafterfill)
- [\_\_clipAfterFill](ICanvasData.md#__clipafterfill)
- [\_\_hasSurface](ICanvasData.md#__hassurface)
- [\_\_blendLayer](ICanvasData.md#__blendlayer)
- [\_\_boxStroke](ICanvasData.md#__boxstroke)
- [\_\_font](ICanvasData.md#__font)
- [\_\_textDrawData](ICanvasData.md#__textdrawdata)
- [\_\_needComputePaint](ICanvasData.md#__needcomputepaint)

### Methods

- [\_\_get](ICanvasData.md#__get)
- [\_\_getData](ICanvasData.md#__getdata)
- [\_\_setInput](ICanvasData.md#__setinput)
- [\_\_getInput](ICanvasData.md#__getinput)
- [\_\_removeInput](ICanvasData.md#__removeinput)
- [\_\_getInputData](ICanvasData.md#__getinputdata)
- [\_\_setMiddle](ICanvasData.md#__setmiddle)
- [\_\_getMiddle](ICanvasData.md#__getmiddle)
- [destroy](ICanvasData.md#destroy)
- [\_\_checkSingle](ICanvasData.md#__checksingle)
- [\_\_removeNaturalSize](ICanvasData.md#__removenaturalsize)
- [\_\_computePaint](ICanvasData.md#__computepaint)
- [\_\_getRealStrokeWidth](ICanvasData.md#__getrealstrokewidth)
- [\_\_setPaint](ICanvasData.md#__setpaint)
- [\_\_removePaint](ICanvasData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRectData](IRectData.md).[__leaf](IRectData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__input](IRectData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__middle](IRectData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__single](IRectData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IRectData](IRectData.md).[id](IRectData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:330](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L330)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRectData](IRectData.md).[name](IRectData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L331)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRectData](IRectData.md).[className](IRectData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L332)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRectData](IRectData.md).[blendMode](IRectData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:334](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L334)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRectData](IRectData.md).[opacity](IRectData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L335)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRectData](IRectData.md).[visible](IRectData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L336)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[selected](IRectData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L337)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[disabled](IRectData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L338)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[locked](IRectData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L339)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRectData](IRectData.md).[zIndex](IRectData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L340)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[dim](IRectData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:342](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L342)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[dimskip](IRectData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L343)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRectData](IRectData.md).[mask](IRectData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L345)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRectData](IRectData.md).[eraser](IRectData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L346)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IRectData](IRectData.md).[filter](IRectData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L347)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRectData](IRectData.md).[x](IRectData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L350)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRectData](IRectData.md).[y](IRectData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L351)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRectData](IRectData.md).[width](IRectData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L352)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRectData](IRectData.md).[height](IRectData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L353)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleX](IRectData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L354)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleY](IRectData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L355)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRectData](IRectData.md).[rotation](IRectData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L356)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewX](IRectData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L357)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewY](IRectData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L358)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetX](IRectData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L360)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetY](IRectData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L361)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollX](IRectData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L362)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollY](IRectData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L363)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[origin](IRectData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L365)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[around](IRectData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L366)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lazy](IRectData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L368)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRectData](IRectData.md).[pixelRatio](IRectData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L369)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IRectData](IRectData.md).[renderSpread](IRectData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L371)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[path](IRectData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L373)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRectData](IRectData.md).[windingRule](IRectData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L374)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[closed](IRectData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L375)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRectData](IRectData.md).[flow](IRectData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L378)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectData](IRectData.md).[padding](IRectData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L379)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRectData](IRectData.md).[gap](IRectData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L380)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRectData](IRectData.md).[flowAlign](IRectData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L381)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRectData](IRectData.md).[flowWrap](IRectData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L382)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRectData](IRectData.md).[itemBox](IRectData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L383)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[inFlow](IRectData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L385)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoWidth](IRectData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L386)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoHeight](IRectData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L387)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lockRatio](IRectData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L388)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRectData](IRectData.md).[autoBox](IRectData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L389)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[widthRange](IRectData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L391)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[heightRange](IRectData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L392)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRectData](IRectData.md).[draggable](IRectData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L395)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRectData](IRectData.md).[dragBounds](IRectData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L396)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IRectData](IRectData.md).[dragBoundsType](IRectData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L397)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[editable](IRectData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L399)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hittable](IRectData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L401)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitFill](IRectData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:402](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L402)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitStroke](IRectData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L403)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitBox](IRectData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L404)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitChildren](IRectData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L405)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitSelf](IRectData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L406)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[hitRadius](IRectData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L407)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[button](IRectData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L409)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRectData](IRectData.md).[cursor](IRectData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L410)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionPath](IRectData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:412](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L412)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRectData](IRectData.md).[motionPrecision](IRectData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L413)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectData](IRectData.md).[motion](IRectData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L415)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionRotation](IRectData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L416)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[normalStyle](IRectData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L418)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[data](IRectData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:421](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L421)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IRectData](IRectData.md).[__childBranchNumber](IRectData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L424)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__complex](IRectData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalWidth](IRectData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalHeight](IRectData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoWidth](IRectData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoHeight](IRectData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:431](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L431)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSide](IRectData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSize](IRectData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useNaturalRatio](IRectData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isLinePath](IRectData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IRectData](IRectData.md).[__blendMode](IRectData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useStroke](IRectData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L439)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useArrow](IRectData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useEffect](IRectData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IRectData](IRectData.md).[__pathInputed](IRectData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L443)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForRender](IRectData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IRectData](IRectData.md).[__path2DForRender](IRectData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForArrow](IRectData.md#__pathforarrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L446)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRectData](IRectData.md).[__pathForMotion](IRectData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L447)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerRadius](IRectData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerSmoothing](IRectData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[fill](IRectData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderWidth](IRectData.md#borderwidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderRadius](IRectData.md#borderradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[stroke](IRectData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectData](IRectData.md).[startArrow](IRectData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectData](IRectData.md).[endArrow](IRectData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRectData](IRectData.md).[strokeAlign](IRectData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[strokeWidth](IRectData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[strokeWidths](IRectData.md#strokewidths)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IRectData](IRectData.md).[strokeWidthFixed](IRectData.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRectData](IRectData.md).[strokeCap](IRectData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRectData](IRectData.md).[strokeJoin](IRectData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[dashPattern](IRectData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRectData](IRectData.md).[dashOffset](IRectData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRectData](IRectData.md).[miterLimit](IRectData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IRectData](IRectData.md).[fontFamily](IRectData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IRectData](IRectData.md).[fontSize](IRectData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IRectData](IRectData.md).[fontWeight](IRectData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[italic](IRectData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IRectData](IRectData.md).[textCase](IRectData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IRectData](IRectData.md).[textDecoration](IRectData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[letterSpacing](IRectData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[lineHeight](IRectData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraIndent](IRectData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraSpacing](IRectData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IRectData](IRectData.md).[writingMode](IRectData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IRectData](IRectData.md).[textAlign](IRectData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IRectData](IRectData.md).[verticalAlign](IRectData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[autoSizeAlign](IRectData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IRectData](IRectData.md).[textWrap](IRectData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IRectData](IRectData.md).[textOverflow](IRectData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[shadow](IRectData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[innerShadow](IRectData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IRectData](IRectData.md).[blur](IRectData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IRectData](IRectData.md).[backgroundBlur](IRectData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IRectData](IRectData.md).[grayscale](IRectData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L168)

___

### smooth

• `Optional` **smooth**: `boolean`

#### Inherited from

ICanvasAttrData.smooth

#### Defined in

[src/ui/packages/interface/src/IUI.ts:304](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L304)

___

### safeResize

• `Optional` **safeResize**: `boolean`

#### Inherited from

ICanvasAttrData.safeResize

#### Defined in

[src/ui/packages/interface/src/IUI.ts:305](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L305)

___

### contextSettings

• `Optional` **contextSettings**: `ICanvasRenderingContext2DSettings`

#### Inherited from

ICanvasAttrData.contextSettings

#### Defined in

[src/ui/packages/interface/src/IUI.ts:306](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L306)

___

### url

• `Optional` **url**: `string`

#### Inherited from

ICanvasAttrData.url

#### Defined in

[src/ui/packages/interface/src/IUI.ts:307](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L307)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animation](IRectData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L452)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animationOut](IRectData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L453)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transition](IRectData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L455)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transitionOut](IRectData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L456)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRectData](IRectData.md).[states](IRectData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L458)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRectData](IRectData.md).[state](IRectData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L459)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[hoverStyle](IRectData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L461)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[pressStyle](IRectData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L462)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[focusStyle](IRectData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L463)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[selectedStyle](IRectData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L464)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[disabledStyle](IRectData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L465)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[placeholderStyle](IRectData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L466)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IRectData](IRectData.md).[placeholderColor](IRectData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L467)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IRectData](IRectData.md).[placeholderDelay](IRectData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L468)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRectData](IRectData.md).[editConfig](IRectData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L470)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRectData](IRectData.md).[editOuter](IRectData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L471)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRectData](IRectData.md).[editInner](IRectData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L472)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRectData](IRectData.md).[scale](IRectData.md#scale)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L481)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isFills](IRectData.md#__isfills)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:484](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L484)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isStrokes](IRectData.md#__isstrokes)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:485](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L485)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__strokeWidth](IRectData.md#__strokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L487)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__maxStrokeWidth](IRectData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:488](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L488)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[IRectData](IRectData.md).[__hasMultiStrokeStyle](IRectData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L489)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasMultiPaint](IRectData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L490)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isAlphaPixelFill](IRectData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L492)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isAlphaPixelStroke](IRectData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L493)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isTransparentFill](IRectData.md#__istransparentfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L495)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isTransparentStroke](IRectData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L496)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isHitPixel](IRectData.md#__ishitpixel)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L498)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isCanvas](IRectData.md#__iscanvas)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L499)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isFastShadow](IRectData.md#__isfastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:500](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L500)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__fillAfterStroke](IRectData.md#__fillafterstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:502](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L502)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__drawAfterFill](IRectData.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:503](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L503)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__clipAfterFill](IRectData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L504)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasSurface](IRectData.md#__hassurface)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:505](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L505)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__blendLayer](IRectData.md#__blendlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:507](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L507)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__boxStroke](IRectData.md#__boxstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:509](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L509)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IRectData](IRectData.md).[__font](IRectData.md#__font)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:512](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L512)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IRectData](IRectData.md).[__textDrawData](IRectData.md#__textdrawdata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:513](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L513)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__needComputePaint](IRectData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:515](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L515)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IRectData](IRectData.md).[__get](IRectData.md#__get)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__getData](IRectData.md#__getdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L11)

___

### \_\_setInput

▸ **__setInput**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__setInput](IRectData.md#__setinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L13)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IRectData](IRectData.md).[__getInput](IRectData.md#__getinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L14)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__removeInput](IRectData.md#__removeinput)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L15)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string`[] \| [`IObject`](IObject.md) |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__getInputData](IRectData.md#__getinputdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L16)

___

### \_\_setMiddle

▸ **__setMiddle**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__setMiddle](IRectData.md#__setmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L18)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IRectData](IRectData.md).[__getMiddle](IRectData.md#__getmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[destroy](IRectData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__checkSingle](IRectData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__removeNaturalSize](IRectData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__computePaint](IRectData.md#__computepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:516](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L516)

___

### \_\_getRealStrokeWidth

▸ **__getRealStrokeWidth**(`childStyle?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childStyle?` | [`IStrokeComputedStyle`](IStrokeComputedStyle.md) |

#### Returns

`number`

#### Inherited from

[IRectData](IRectData.md).[__getRealStrokeWidth](IRectData.md#__getrealstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:517](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L517)

___

### \_\_setPaint

▸ **__setPaint**(`attrName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | ``"fill"`` \| ``"stroke"`` |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__setPaint](IRectData.md#__setpaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:519](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L519)

___

### \_\_removePaint

▸ **__removePaint**(`attrName`, `removeInput?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | ``"fill"`` \| ``"stroke"`` |
| `removeInput?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__removePaint](IRectData.md#__removepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:520](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L520)
