# Interface: ITextData

## Hierarchy

- `ITextAttrData`

- [`ITextStyleComputedData`](ITextStyleComputedData.md)

- [`IUIData`](IUIData.md)

  ↳ **`ITextData`**

## Implemented by

- [`TextData`](../classes/TextData.md)

## Table of contents

### Properties

- [\_\_leaf](ITextData.md#__leaf)
- [\_\_input](ITextData.md#__input)
- [\_\_middle](ITextData.md#__middle)
- [\_\_single](ITextData.md#__single)
- [id](ITextData.md#id)
- [name](ITextData.md#name)
- [className](ITextData.md#classname)
- [blendMode](ITextData.md#blendmode)
- [opacity](ITextData.md#opacity)
- [visible](ITextData.md#visible)
- [selected](ITextData.md#selected)
- [disabled](ITextData.md#disabled)
- [locked](ITextData.md#locked)
- [zIndex](ITextData.md#zindex)
- [dim](ITextData.md#dim)
- [dimskip](ITextData.md#dimskip)
- [mask](ITextData.md#mask)
- [eraser](ITextData.md#eraser)
- [filter](ITextData.md#filter)
- [x](ITextData.md#x)
- [y](ITextData.md#y)
- [width](ITextData.md#width)
- [height](ITextData.md#height)
- [scaleX](ITextData.md#scalex)
- [scaleY](ITextData.md#scaley)
- [rotation](ITextData.md#rotation)
- [skewX](ITextData.md#skewx)
- [skewY](ITextData.md#skewy)
- [offsetX](ITextData.md#offsetx)
- [offsetY](ITextData.md#offsety)
- [scrollX](ITextData.md#scrollx)
- [scrollY](ITextData.md#scrolly)
- [origin](ITextData.md#origin)
- [around](ITextData.md#around)
- [lazy](ITextData.md#lazy)
- [pixelRatio](ITextData.md#pixelratio)
- [renderSpread](ITextData.md#renderspread)
- [path](ITextData.md#path)
- [windingRule](ITextData.md#windingrule)
- [closed](ITextData.md#closed)
- [flow](ITextData.md#flow)
- [gap](ITextData.md#gap)
- [flowAlign](ITextData.md#flowalign)
- [flowWrap](ITextData.md#flowwrap)
- [itemBox](ITextData.md#itembox)
- [inFlow](ITextData.md#inflow)
- [autoWidth](ITextData.md#autowidth)
- [autoHeight](ITextData.md#autoheight)
- [lockRatio](ITextData.md#lockratio)
- [autoBox](ITextData.md#autobox)
- [widthRange](ITextData.md#widthrange)
- [heightRange](ITextData.md#heightrange)
- [draggable](ITextData.md#draggable)
- [dragBounds](ITextData.md#dragbounds)
- [dragBoundsType](ITextData.md#dragboundstype)
- [editable](ITextData.md#editable)
- [hittable](ITextData.md#hittable)
- [hitFill](ITextData.md#hitfill)
- [hitStroke](ITextData.md#hitstroke)
- [hitBox](ITextData.md#hitbox)
- [hitChildren](ITextData.md#hitchildren)
- [hitSelf](ITextData.md#hitself)
- [hitRadius](ITextData.md#hitradius)
- [button](ITextData.md#button)
- [cursor](ITextData.md#cursor)
- [motionPath](ITextData.md#motionpath)
- [motionPrecision](ITextData.md#motionprecision)
- [motion](ITextData.md#motion)
- [motionRotation](ITextData.md#motionrotation)
- [normalStyle](ITextData.md#normalstyle)
- [data](ITextData.md#data)
- [\_\_childBranchNumber](ITextData.md#__childbranchnumber)
- [\_\_complex](ITextData.md#__complex)
- [\_\_naturalWidth](ITextData.md#__naturalwidth)
- [\_\_naturalHeight](ITextData.md#__naturalheight)
- [\_\_autoWidth](ITextData.md#__autowidth)
- [\_\_autoHeight](ITextData.md#__autoheight)
- [\_\_autoSide](ITextData.md#__autoside)
- [\_\_autoSize](ITextData.md#__autosize)
- [\_\_useNaturalRatio](ITextData.md#__usenaturalratio)
- [\_\_isLinePath](ITextData.md#__islinepath)
- [\_\_blendMode](ITextData.md#__blendmode)
- [\_\_useStroke](ITextData.md#__usestroke)
- [\_\_useArrow](ITextData.md#__usearrow)
- [\_\_useEffect](ITextData.md#__useeffect)
- [\_\_pathInputed](ITextData.md#__pathinputed)
- [\_\_pathForRender](ITextData.md#__pathforrender)
- [\_\_path2DForRender](ITextData.md#__path2dforrender)
- [\_\_pathForArrow](ITextData.md#__pathforarrow)
- [\_\_pathForMotion](ITextData.md#__pathformotion)
- [cornerRadius](ITextData.md#cornerradius)
- [cornerSmoothing](ITextData.md#cornersmoothing)
- [fill](ITextData.md#fill)
- [borderWidth](ITextData.md#borderwidth)
- [borderRadius](ITextData.md#borderradius)
- [stroke](ITextData.md#stroke)
- [startArrow](ITextData.md#startarrow)
- [endArrow](ITextData.md#endarrow)
- [strokeAlign](ITextData.md#strokealign)
- [strokeWidth](ITextData.md#strokewidth)
- [strokeWidths](ITextData.md#strokewidths)
- [strokeWidthFixed](ITextData.md#strokewidthfixed)
- [strokeCap](ITextData.md#strokecap)
- [strokeJoin](ITextData.md#strokejoin)
- [dashPattern](ITextData.md#dashpattern)
- [dashOffset](ITextData.md#dashoffset)
- [miterLimit](ITextData.md#miterlimit)
- [fontFamily](ITextData.md#fontfamily)
- [fontSize](ITextData.md#fontsize)
- [fontWeight](ITextData.md#fontweight)
- [italic](ITextData.md#italic)
- [textCase](ITextData.md#textcase)
- [textDecoration](ITextData.md#textdecoration)
- [letterSpacing](ITextData.md#letterspacing)
- [lineHeight](ITextData.md#lineheight)
- [paraIndent](ITextData.md#paraindent)
- [paraSpacing](ITextData.md#paraspacing)
- [writingMode](ITextData.md#writingmode)
- [textAlign](ITextData.md#textalign)
- [verticalAlign](ITextData.md#verticalalign)
- [autoSizeAlign](ITextData.md#autosizealign)
- [textWrap](ITextData.md#textwrap)
- [textOverflow](ITextData.md#textoverflow)
- [shadow](ITextData.md#shadow)
- [innerShadow](ITextData.md#innershadow)
- [blur](ITextData.md#blur)
- [backgroundBlur](ITextData.md#backgroundblur)
- [grayscale](ITextData.md#grayscale)
- [text](ITextData.md#text)
- [placeholder](ITextData.md#placeholder)
- [padding](ITextData.md#padding)
- [resizeFontSize](ITextData.md#resizefontsize)
- [boxStyle](ITextData.md#boxstyle)
- [textEditing](ITextData.md#textediting)
- [\_\_baseLine](ITextData.md#__baseline)
- [\_\_lineHeight](ITextData.md#__lineheight)
- [\_\_letterSpacing](ITextData.md#__letterspacing)
- [\_\_padding](ITextData.md#__padding)
- [\_\_clipText](ITextData.md#__cliptext)
- [\_\_isPlacehold](ITextData.md#__isplacehold)
- [\_\_textBoxBounds](ITextData.md#__textboxbounds)
- [animation](ITextData.md#animation)
- [animationOut](ITextData.md#animationout)
- [transition](ITextData.md#transition)
- [transitionOut](ITextData.md#transitionout)
- [states](ITextData.md#states)
- [state](ITextData.md#state)
- [hoverStyle](ITextData.md#hoverstyle)
- [pressStyle](ITextData.md#pressstyle)
- [focusStyle](ITextData.md#focusstyle)
- [selectedStyle](ITextData.md#selectedstyle)
- [disabledStyle](ITextData.md#disabledstyle)
- [placeholderStyle](ITextData.md#placeholderstyle)
- [placeholderColor](ITextData.md#placeholdercolor)
- [placeholderDelay](ITextData.md#placeholderdelay)
- [editConfig](ITextData.md#editconfig)
- [editOuter](ITextData.md#editouter)
- [editInner](ITextData.md#editinner)
- [scale](ITextData.md#scale)
- [\_\_isFills](ITextData.md#__isfills)
- [\_\_isStrokes](ITextData.md#__isstrokes)
- [\_\_strokeWidth](ITextData.md#__strokewidth)
- [\_\_maxStrokeWidth](ITextData.md#__maxstrokewidth)
- [\_\_hasMultiStrokeStyle](ITextData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](ITextData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](ITextData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ITextData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ITextData.md#__istransparentfill)
- [\_\_isTransparentStroke](ITextData.md#__istransparentstroke)
- [\_\_isHitPixel](ITextData.md#__ishitpixel)
- [\_\_isCanvas](ITextData.md#__iscanvas)
- [\_\_isFastShadow](ITextData.md#__isfastshadow)
- [\_\_fillAfterStroke](ITextData.md#__fillafterstroke)
- [\_\_drawAfterFill](ITextData.md#__drawafterfill)
- [\_\_clipAfterFill](ITextData.md#__clipafterfill)
- [\_\_hasSurface](ITextData.md#__hassurface)
- [\_\_blendLayer](ITextData.md#__blendlayer)
- [\_\_boxStroke](ITextData.md#__boxstroke)
- [\_\_font](ITextData.md#__font)
- [\_\_textDrawData](ITextData.md#__textdrawdata)
- [\_\_needComputePaint](ITextData.md#__needcomputepaint)

### Methods

- [\_\_get](ITextData.md#__get)
- [\_\_getData](ITextData.md#__getdata)
- [\_\_setInput](ITextData.md#__setinput)
- [\_\_getInput](ITextData.md#__getinput)
- [\_\_removeInput](ITextData.md#__removeinput)
- [\_\_getInputData](ITextData.md#__getinputdata)
- [\_\_setMiddle](ITextData.md#__setmiddle)
- [\_\_getMiddle](ITextData.md#__getmiddle)
- [destroy](ITextData.md#destroy)
- [\_\_checkSingle](ITextData.md#__checksingle)
- [\_\_removeNaturalSize](ITextData.md#__removenaturalsize)
- [\_\_computePaint](ITextData.md#__computepaint)
- [\_\_getRealStrokeWidth](ITextData.md#__getrealstrokewidth)
- [\_\_setPaint](ITextData.md#__setpaint)
- [\_\_removePaint](ITextData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IUIData](IUIData.md).[__leaf](IUIData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[__input](IUIData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[__middle](IUIData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__single](IUIData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IUIData](IUIData.md).[id](IUIData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:330](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L330)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUIData](IUIData.md).[name](IUIData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L331)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUIData](IUIData.md).[className](IUIData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L332)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUIData](IUIData.md).[blendMode](IUIData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:334](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L334)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUIData](IUIData.md).[opacity](IUIData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L335)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUIData](IUIData.md).[visible](IUIData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L336)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[selected](IUIData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L337)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[disabled](IUIData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L338)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[locked](IUIData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L339)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUIData](IUIData.md).[zIndex](IUIData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L340)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IUIData](IUIData.md).[dim](IUIData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:342](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L342)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[dimskip](IUIData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L343)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUIData](IUIData.md).[mask](IUIData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L345)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUIData](IUIData.md).[eraser](IUIData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L346)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IUIData](IUIData.md).[filter](IUIData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L347)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUIData](IUIData.md).[x](IUIData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L350)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUIData](IUIData.md).[y](IUIData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L351)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUIData](IUIData.md).[width](IUIData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L352)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUIData](IUIData.md).[height](IUIData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L353)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUIData](IUIData.md).[scaleX](IUIData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L354)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUIData](IUIData.md).[scaleY](IUIData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L355)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUIData](IUIData.md).[rotation](IUIData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L356)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUIData](IUIData.md).[skewX](IUIData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L357)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUIData](IUIData.md).[skewY](IUIData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L358)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUIData](IUIData.md).[offsetX](IUIData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L360)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUIData](IUIData.md).[offsetY](IUIData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L361)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUIData](IUIData.md).[scrollX](IUIData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L362)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUIData](IUIData.md).[scrollY](IUIData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L363)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIData](IUIData.md).[origin](IUIData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L365)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIData](IUIData.md).[around](IUIData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L366)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[lazy](IUIData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L368)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUIData](IUIData.md).[pixelRatio](IUIData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L369)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IUIData](IUIData.md).[renderSpread](IUIData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L371)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IUIData](IUIData.md).[path](IUIData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L373)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUIData](IUIData.md).[windingRule](IUIData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L374)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[closed](IUIData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L375)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUIData](IUIData.md).[flow](IUIData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L378)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUIData](IUIData.md).[gap](IUIData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L380)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUIData](IUIData.md).[flowAlign](IUIData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L381)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUIData](IUIData.md).[flowWrap](IUIData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L382)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUIData](IUIData.md).[itemBox](IUIData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L383)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[inFlow](IUIData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L385)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIData](IUIData.md).[autoWidth](IUIData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L386)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIData](IUIData.md).[autoHeight](IUIData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L387)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[lockRatio](IUIData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L388)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUIData](IUIData.md).[autoBox](IUIData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L389)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIData](IUIData.md).[widthRange](IUIData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L391)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIData](IUIData.md).[heightRange](IUIData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L392)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUIData](IUIData.md).[draggable](IUIData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L395)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUIData](IUIData.md).[dragBounds](IUIData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L396)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IUIData](IUIData.md).[dragBoundsType](IUIData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L397)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[editable](IUIData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L399)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hittable](IUIData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L401)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIData](IUIData.md).[hitFill](IUIData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:402](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L402)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIData](IUIData.md).[hitStroke](IUIData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L403)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hitBox](IUIData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L404)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hitChildren](IUIData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L405)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hitSelf](IUIData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L406)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUIData](IUIData.md).[hitRadius](IUIData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L407)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[button](IUIData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L409)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUIData](IUIData.md).[cursor](IUIData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L410)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[motionPath](IUIData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:412](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L412)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUIData](IUIData.md).[motionPrecision](IUIData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L413)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIData](IUIData.md).[motion](IUIData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L415)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUIData](IUIData.md).[motionRotation](IUIData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L416)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[normalStyle](IUIData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L418)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[data](IUIData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:421](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L421)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IUIData](IUIData.md).[__childBranchNumber](IUIData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L424)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__complex](IUIData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[__naturalWidth](IUIData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IUIData](IUIData.md).[__naturalHeight](IUIData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoWidth](IUIData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoHeight](IUIData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:431](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L431)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoSide](IUIData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoSize](IUIData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useNaturalRatio](IUIData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isLinePath](IUIData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IUIData](IUIData.md).[__blendMode](IUIData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useStroke](IUIData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L439)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useArrow](IUIData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useEffect](IUIData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IUIData](IUIData.md).[__pathInputed](IUIData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L443)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IUIData](IUIData.md).[__pathForRender](IUIData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IUIData](IUIData.md).[__path2DForRender](IUIData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IUIData](IUIData.md).[__pathForArrow](IUIData.md#__pathforarrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L446)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IUIData](IUIData.md).[__pathForMotion](IUIData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L447)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IUIData](IUIData.md).[cornerRadius](IUIData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUIData](IUIData.md).[cornerSmoothing](IUIData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IUIData](IUIData.md).[fill](IUIData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IUIData](IUIData.md).[borderWidth](IUIData.md#borderwidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IUIData](IUIData.md).[borderRadius](IUIData.md#borderradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IUIData](IUIData.md).[stroke](IUIData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIData](IUIData.md).[startArrow](IUIData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIData](IUIData.md).[endArrow](IUIData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUIData](IUIData.md).[strokeAlign](IUIData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[strokeWidth](IUIData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IUIData](IUIData.md).[strokeWidths](IUIData.md#strokewidths)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IUIData](IUIData.md).[strokeWidthFixed](IUIData.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUIData](IUIData.md).[strokeCap](IUIData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUIData](IUIData.md).[strokeJoin](IUIData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IUIData](IUIData.md).[dashPattern](IUIData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUIData](IUIData.md).[dashOffset](IUIData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUIData](IUIData.md).[miterLimit](IUIData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IUIData](IUIData.md).[fontFamily](IUIData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IUIData](IUIData.md).[fontSize](IUIData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IUIData](IUIData.md).[fontWeight](IUIData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[italic](IUIData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IUIData](IUIData.md).[textCase](IUIData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IUIData](IUIData.md).[textDecoration](IUIData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IUIData](IUIData.md).[letterSpacing](IUIData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IUIData](IUIData.md).[lineHeight](IUIData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IUIData](IUIData.md).[paraIndent](IUIData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IUIData](IUIData.md).[paraSpacing](IUIData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IUIData](IUIData.md).[writingMode](IUIData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IUIData](IUIData.md).[textAlign](IUIData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IUIData](IUIData.md).[verticalAlign](IUIData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[autoSizeAlign](IUIData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IUIData](IUIData.md).[textWrap](IUIData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IUIData](IUIData.md).[textOverflow](IUIData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IUIData](IUIData.md).[shadow](IUIData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IUIData](IUIData.md).[innerShadow](IUIData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IUIData](IUIData.md).[blur](IUIData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IUIData](IUIData.md).[backgroundBlur](IUIData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IUIData](IUIData.md).[grayscale](IUIData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L168)

___

### text

• `Optional` **text**: `string` \| `number`

#### Inherited from

ITextAttrData.text

#### Defined in

[src/ui/packages/interface/src/IUI.ts:212](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L212)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

ITextAttrData.placeholder

#### Defined in

[src/ui/packages/interface/src/IUI.ts:213](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L213)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIData](IUIData.md).[padding](IUIData.md#padding)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:214](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L214)

___

### resizeFontSize

• `Optional` **resizeFontSize**: `boolean`

#### Inherited from

ITextAttrData.resizeFontSize

#### Defined in

[src/ui/packages/interface/src/IUI.ts:215](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L215)

___

### boxStyle

• `Optional` **boxStyle**: [`IBackgroundBoxStyle`](IBackgroundBoxStyle.md)

#### Inherited from

ITextAttrData.boxStyle

#### Defined in

[src/ui/packages/interface/src/IUI.ts:216](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L216)

___

### textEditing

• `Optional` **textEditing**: `boolean`

#### Inherited from

ITextAttrData.textEditing

#### Defined in

[src/ui/packages/interface/src/IUI.ts:217](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L217)

___

### \_\_baseLine

• `Optional` **\_\_baseLine**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:225](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L225)

___

### \_\_lineHeight

• `Optional` **\_\_lineHeight**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:226](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L226)

___

### \_\_letterSpacing

• `Optional` **\_\_letterSpacing**: `number`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:227](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L227)

___

### \_\_padding

• `Optional` **\_\_padding**: `number`[]

#### Defined in

[src/ui/packages/interface/src/IUI.ts:228](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L228)

___

### \_\_clipText

• `Optional` **\_\_clipText**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:229](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L229)

___

### \_\_isPlacehold

• `Optional` **\_\_isPlacehold**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:230](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L230)

___

### \_\_textBoxBounds

• `Optional` **\_\_textBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:231](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L231)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIData](IUIData.md).[animation](IUIData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L452)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIData](IUIData.md).[animationOut](IUIData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L453)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIData](IUIData.md).[transition](IUIData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L455)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIData](IUIData.md).[transitionOut](IUIData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L456)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUIData](IUIData.md).[states](IUIData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L458)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUIData](IUIData.md).[state](IUIData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L459)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[hoverStyle](IUIData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L461)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[pressStyle](IUIData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L462)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[focusStyle](IUIData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L463)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[selectedStyle](IUIData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L464)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[disabledStyle](IUIData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L465)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[placeholderStyle](IUIData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L466)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IUIData](IUIData.md).[placeholderColor](IUIData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L467)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IUIData](IUIData.md).[placeholderDelay](IUIData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L468)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUIData](IUIData.md).[editConfig](IUIData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L470)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUIData](IUIData.md).[editOuter](IUIData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L471)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUIData](IUIData.md).[editInner](IUIData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L472)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUIData](IUIData.md).[scale](IUIData.md#scale)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L481)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isFills](IUIData.md#__isfills)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:484](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L484)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isStrokes](IUIData.md#__isstrokes)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:485](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L485)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[__strokeWidth](IUIData.md#__strokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L487)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[__maxStrokeWidth](IUIData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:488](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L488)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[IUIData](IUIData.md).[__hasMultiStrokeStyle](IUIData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L489)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__hasMultiPaint](IUIData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L490)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isAlphaPixelFill](IUIData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L492)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isAlphaPixelStroke](IUIData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L493)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isTransparentFill](IUIData.md#__istransparentfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L495)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isTransparentStroke](IUIData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L496)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isHitPixel](IUIData.md#__ishitpixel)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L498)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isCanvas](IUIData.md#__iscanvas)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L499)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isFastShadow](IUIData.md#__isfastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:500](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L500)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__fillAfterStroke](IUIData.md#__fillafterstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:502](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L502)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__drawAfterFill](IUIData.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:503](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L503)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__clipAfterFill](IUIData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L504)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__hasSurface](IUIData.md#__hassurface)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:505](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L505)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__blendLayer](IUIData.md#__blendlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:507](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L507)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__boxStroke](IUIData.md#__boxstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:509](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L509)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IUIData](IUIData.md).[__font](IUIData.md#__font)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:512](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L512)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IUIData](IUIData.md).[__textDrawData](IUIData.md#__textdrawdata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:513](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L513)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__needComputePaint](IUIData.md#__needcomputepaint)

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

[IUIData](IUIData.md).[__get](IUIData.md#__get)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[__getData](IUIData.md#__getdata)

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

[IUIData](IUIData.md).[__setInput](IUIData.md#__setinput)

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

[IUIData](IUIData.md).[__getInput](IUIData.md#__getinput)

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

[IUIData](IUIData.md).[__removeInput](IUIData.md#__removeinput)

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

[IUIData](IUIData.md).[__getInputData](IUIData.md#__getinputdata)

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

[IUIData](IUIData.md).[__setMiddle](IUIData.md#__setmiddle)

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

[IUIData](IUIData.md).[__getMiddle](IUIData.md#__getmiddle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[destroy](IUIData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[__checkSingle](IUIData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[__removeNaturalSize](IUIData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[__computePaint](IUIData.md#__computepaint)

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

[IUIData](IUIData.md).[__getRealStrokeWidth](IUIData.md#__getrealstrokewidth)

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

[IUIData](IUIData.md).[__setPaint](IUIData.md#__setpaint)

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

[IUIData](IUIData.md).[__removePaint](IUIData.md#__removepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:520](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L520)
