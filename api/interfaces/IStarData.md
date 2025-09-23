# Interface: IStarData

## Hierarchy

- `IStarAttrData`

- [`IUIData`](IUIData.md)

  ↳ **`IStarData`**

## Implemented by

- [`StarData`](../classes/StarData.md)

## Table of contents

### Properties

- [\_\_leaf](IStarData.md#__leaf)
- [\_\_input](IStarData.md#__input)
- [\_\_middle](IStarData.md#__middle)
- [\_\_single](IStarData.md#__single)
- [id](IStarData.md#id)
- [name](IStarData.md#name)
- [className](IStarData.md#classname)
- [blendMode](IStarData.md#blendmode)
- [opacity](IStarData.md#opacity)
- [visible](IStarData.md#visible)
- [selected](IStarData.md#selected)
- [disabled](IStarData.md#disabled)
- [locked](IStarData.md#locked)
- [zIndex](IStarData.md#zindex)
- [dim](IStarData.md#dim)
- [dimskip](IStarData.md#dimskip)
- [bright](IStarData.md#bright)
- [mask](IStarData.md#mask)
- [eraser](IStarData.md#eraser)
- [filter](IStarData.md#filter)
- [x](IStarData.md#x)
- [y](IStarData.md#y)
- [width](IStarData.md#width)
- [height](IStarData.md#height)
- [scaleX](IStarData.md#scalex)
- [scaleY](IStarData.md#scaley)
- [rotation](IStarData.md#rotation)
- [skewX](IStarData.md#skewx)
- [skewY](IStarData.md#skewy)
- [offsetX](IStarData.md#offsetx)
- [offsetY](IStarData.md#offsety)
- [scrollX](IStarData.md#scrollx)
- [scrollY](IStarData.md#scrolly)
- [origin](IStarData.md#origin)
- [around](IStarData.md#around)
- [lazy](IStarData.md#lazy)
- [pixelRatio](IStarData.md#pixelratio)
- [renderSpread](IStarData.md#renderspread)
- [path](IStarData.md#path)
- [windingRule](IStarData.md#windingrule)
- [closed](IStarData.md#closed)
- [flow](IStarData.md#flow)
- [padding](IStarData.md#padding)
- [gap](IStarData.md#gap)
- [flowAlign](IStarData.md#flowalign)
- [flowWrap](IStarData.md#flowwrap)
- [itemBox](IStarData.md#itembox)
- [inFlow](IStarData.md#inflow)
- [autoWidth](IStarData.md#autowidth)
- [autoHeight](IStarData.md#autoheight)
- [lockRatio](IStarData.md#lockratio)
- [autoBox](IStarData.md#autobox)
- [widthRange](IStarData.md#widthrange)
- [heightRange](IStarData.md#heightrange)
- [draggable](IStarData.md#draggable)
- [dragBounds](IStarData.md#dragbounds)
- [dragBoundsType](IStarData.md#dragboundstype)
- [editable](IStarData.md#editable)
- [hittable](IStarData.md#hittable)
- [hitFill](IStarData.md#hitfill)
- [hitStroke](IStarData.md#hitstroke)
- [hitBox](IStarData.md#hitbox)
- [hitChildren](IStarData.md#hitchildren)
- [hitSelf](IStarData.md#hitself)
- [hitRadius](IStarData.md#hitradius)
- [button](IStarData.md#button)
- [cursor](IStarData.md#cursor)
- [motionPath](IStarData.md#motionpath)
- [motionPrecision](IStarData.md#motionprecision)
- [motion](IStarData.md#motion)
- [motionRotation](IStarData.md#motionrotation)
- [normalStyle](IStarData.md#normalstyle)
- [data](IStarData.md#data)
- [\_\_childBranchNumber](IStarData.md#__childbranchnumber)
- [\_\_complex](IStarData.md#__complex)
- [\_\_naturalWidth](IStarData.md#__naturalwidth)
- [\_\_naturalHeight](IStarData.md#__naturalheight)
- [\_\_autoWidth](IStarData.md#__autowidth)
- [\_\_autoHeight](IStarData.md#__autoheight)
- [\_\_autoSide](IStarData.md#__autoside)
- [\_\_autoSize](IStarData.md#__autosize)
- [\_\_useNaturalRatio](IStarData.md#__usenaturalratio)
- [\_\_isLinePath](IStarData.md#__islinepath)
- [\_\_blendMode](IStarData.md#__blendmode)
- [\_\_useStroke](IStarData.md#__usestroke)
- [\_\_useArrow](IStarData.md#__usearrow)
- [\_\_useEffect](IStarData.md#__useeffect)
- [\_\_usePathBox](IStarData.md#__usepathbox)
- [\_\_useDim](IStarData.md#__usedim)
- [\_\_pathInputed](IStarData.md#__pathinputed)
- [\_\_pathForRender](IStarData.md#__pathforrender)
- [\_\_path2DForRender](IStarData.md#__path2dforrender)
- [\_\_pathForArrow](IStarData.md#__pathforarrow)
- [\_\_pathForMotion](IStarData.md#__pathformotion)
- [cornerRadius](IStarData.md#cornerradius)
- [cornerSmoothing](IStarData.md#cornersmoothing)
- [fill](IStarData.md#fill)
- [borderWidth](IStarData.md#borderwidth)
- [borderRadius](IStarData.md#borderradius)
- [stroke](IStarData.md#stroke)
- [startArrow](IStarData.md#startarrow)
- [endArrow](IStarData.md#endarrow)
- [strokeAlign](IStarData.md#strokealign)
- [strokeWidth](IStarData.md#strokewidth)
- [strokeWidths](IStarData.md#strokewidths)
- [strokeWidthFixed](IStarData.md#strokewidthfixed)
- [strokeCap](IStarData.md#strokecap)
- [strokeJoin](IStarData.md#strokejoin)
- [dashPattern](IStarData.md#dashpattern)
- [dashOffset](IStarData.md#dashoffset)
- [miterLimit](IStarData.md#miterlimit)
- [fontFamily](IStarData.md#fontfamily)
- [fontSize](IStarData.md#fontsize)
- [fontWeight](IStarData.md#fontweight)
- [italic](IStarData.md#italic)
- [textCase](IStarData.md#textcase)
- [textDecoration](IStarData.md#textdecoration)
- [letterSpacing](IStarData.md#letterspacing)
- [lineHeight](IStarData.md#lineheight)
- [paraIndent](IStarData.md#paraindent)
- [paraSpacing](IStarData.md#paraspacing)
- [writingMode](IStarData.md#writingmode)
- [textAlign](IStarData.md#textalign)
- [verticalAlign](IStarData.md#verticalalign)
- [autoSizeAlign](IStarData.md#autosizealign)
- [textWrap](IStarData.md#textwrap)
- [textOverflow](IStarData.md#textoverflow)
- [shadow](IStarData.md#shadow)
- [innerShadow](IStarData.md#innershadow)
- [blur](IStarData.md#blur)
- [backgroundBlur](IStarData.md#backgroundblur)
- [grayscale](IStarData.md#grayscale)
- [corners](IStarData.md#corners)
- [innerRadius](IStarData.md#innerradius)
- [animation](IStarData.md#animation)
- [animationOut](IStarData.md#animationout)
- [transition](IStarData.md#transition)
- [transitionOut](IStarData.md#transitionout)
- [states](IStarData.md#states)
- [state](IStarData.md#state)
- [hoverStyle](IStarData.md#hoverstyle)
- [pressStyle](IStarData.md#pressstyle)
- [focusStyle](IStarData.md#focusstyle)
- [selectedStyle](IStarData.md#selectedstyle)
- [disabledStyle](IStarData.md#disabledstyle)
- [placeholderStyle](IStarData.md#placeholderstyle)
- [placeholderColor](IStarData.md#placeholdercolor)
- [placeholderDelay](IStarData.md#placeholderdelay)
- [editConfig](IStarData.md#editconfig)
- [editOuter](IStarData.md#editouter)
- [editInner](IStarData.md#editinner)
- [scale](IStarData.md#scale)
- [\_\_isFills](IStarData.md#__isfills)
- [\_\_isStrokes](IStarData.md#__isstrokes)
- [\_\_strokeWidth](IStarData.md#__strokewidth)
- [\_\_maxStrokeWidth](IStarData.md#__maxstrokewidth)
- [\_\_hasMultiStrokeStyle](IStarData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](IStarData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](IStarData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](IStarData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](IStarData.md#__istransparentfill)
- [\_\_isTransparentStroke](IStarData.md#__istransparentstroke)
- [\_\_isHitPixel](IStarData.md#__ishitpixel)
- [\_\_isCanvas](IStarData.md#__iscanvas)
- [\_\_isFastShadow](IStarData.md#__isfastshadow)
- [\_\_fillAfterStroke](IStarData.md#__fillafterstroke)
- [\_\_drawAfterFill](IStarData.md#__drawafterfill)
- [\_\_clipAfterFill](IStarData.md#__clipafterfill)
- [\_\_hasSurface](IStarData.md#__hassurface)
- [\_\_blendLayer](IStarData.md#__blendlayer)
- [\_\_boxStroke](IStarData.md#__boxstroke)
- [\_\_font](IStarData.md#__font)
- [\_\_textDrawData](IStarData.md#__textdrawdata)
- [\_\_needComputePaint](IStarData.md#__needcomputepaint)

### Methods

- [\_\_get](IStarData.md#__get)
- [\_\_getData](IStarData.md#__getdata)
- [\_\_setInput](IStarData.md#__setinput)
- [\_\_getInput](IStarData.md#__getinput)
- [\_\_removeInput](IStarData.md#__removeinput)
- [\_\_getInputData](IStarData.md#__getinputdata)
- [\_\_setMiddle](IStarData.md#__setmiddle)
- [\_\_getMiddle](IStarData.md#__getmiddle)
- [destroy](IStarData.md#destroy)
- [\_\_checkSingle](IStarData.md#__checksingle)
- [\_\_removeNaturalSize](IStarData.md#__removenaturalsize)
- [\_\_computePaint](IStarData.md#__computepaint)
- [\_\_getRealStrokeWidth](IStarData.md#__getrealstrokewidth)
- [\_\_setPaint](IStarData.md#__setpaint)
- [\_\_removePaint](IStarData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IUIData](IUIData.md).[__leaf](IUIData.md#__leaf)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[__input](IUIData.md#__input)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[__middle](IUIData.md#__middle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__single](IUIData.md#__single)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IUIData](IUIData.md).[id](IUIData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L331)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUIData](IUIData.md).[name](IUIData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L332)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUIData](IUIData.md).[className](IUIData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L333)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUIData](IUIData.md).[blendMode](IUIData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L335)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUIData](IUIData.md).[opacity](IUIData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L336)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUIData](IUIData.md).[visible](IUIData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L337)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[selected](IUIData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L338)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[disabled](IUIData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L339)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[locked](IUIData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L340)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUIData](IUIData.md).[zIndex](IUIData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L341)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IUIData](IUIData.md).[dim](IUIData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L343)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[dimskip](IUIData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L344)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[bright](IUIData.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L345)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUIData](IUIData.md).[mask](IUIData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L347)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUIData](IUIData.md).[eraser](IUIData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L348)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IUIData](IUIData.md).[filter](IUIData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L349)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUIData](IUIData.md).[x](IUIData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L352)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUIData](IUIData.md).[y](IUIData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L353)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUIData](IUIData.md).[width](IUIData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L354)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUIData](IUIData.md).[height](IUIData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L355)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUIData](IUIData.md).[scaleX](IUIData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L356)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUIData](IUIData.md).[scaleY](IUIData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L357)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUIData](IUIData.md).[rotation](IUIData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L358)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUIData](IUIData.md).[skewX](IUIData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L359)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUIData](IUIData.md).[skewY](IUIData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L360)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUIData](IUIData.md).[offsetX](IUIData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L362)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUIData](IUIData.md).[offsetY](IUIData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L363)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUIData](IUIData.md).[scrollX](IUIData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L364)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUIData](IUIData.md).[scrollY](IUIData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L365)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIData](IUIData.md).[origin](IUIData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L367)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIData](IUIData.md).[around](IUIData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L368)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[lazy](IUIData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L370)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUIData](IUIData.md).[pixelRatio](IUIData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L371)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIData](IUIData.md).[renderSpread](IUIData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L373)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IUIData](IUIData.md).[path](IUIData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L375)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUIData](IUIData.md).[windingRule](IUIData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L376)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[closed](IUIData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L377)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUIData](IUIData.md).[flow](IUIData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L380)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIData](IUIData.md).[padding](IUIData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L381)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUIData](IUIData.md).[gap](IUIData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L382)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUIData](IUIData.md).[flowAlign](IUIData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L383)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUIData](IUIData.md).[flowWrap](IUIData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L384)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUIData](IUIData.md).[itemBox](IUIData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L385)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[inFlow](IUIData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L387)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIData](IUIData.md).[autoWidth](IUIData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L388)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIData](IUIData.md).[autoHeight](IUIData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L389)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[lockRatio](IUIData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L390)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUIData](IUIData.md).[autoBox](IUIData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L391)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIData](IUIData.md).[widthRange](IUIData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L393)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIData](IUIData.md).[heightRange](IUIData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L394)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUIData](IUIData.md).[draggable](IUIData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L397)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUIData](IUIData.md).[dragBounds](IUIData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L398)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IUIData](IUIData.md).[dragBoundsType](IUIData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L399)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[editable](IUIData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L401)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hittable](IUIData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L403)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIData](IUIData.md).[hitFill](IUIData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L404)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIData](IUIData.md).[hitStroke](IUIData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L405)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hitBox](IUIData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L406)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hitChildren](IUIData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L407)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[hitSelf](IUIData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L408)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUIData](IUIData.md).[hitRadius](IUIData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L409)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[button](IUIData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L411)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUIData](IUIData.md).[cursor](IUIData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:412](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L412)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[motionPath](IUIData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L414)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUIData](IUIData.md).[motionPrecision](IUIData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L415)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIData](IUIData.md).[motion](IUIData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L417)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUIData](IUIData.md).[motionRotation](IUIData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L418)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[normalStyle](IUIData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L420)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[data](IUIData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IUIData](IUIData.md).[__childBranchNumber](IUIData.md#__childbranchnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:426](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L426)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__complex](IUIData.md#__complex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[__naturalWidth](IUIData.md#__naturalwidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IUIData](IUIData.md).[__naturalHeight](IUIData.md#__naturalheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoWidth](IUIData.md#__autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoHeight](IUIData.md#__autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoSide](IUIData.md#__autoside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L434)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__autoSize](IUIData.md#__autosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useNaturalRatio](IUIData.md#__usenaturalratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isLinePath](IUIData.md#__islinepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IUIData](IUIData.md).[__blendMode](IUIData.md#__blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L439)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useStroke](IUIData.md#__usestroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useArrow](IUIData.md#__usearrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useEffect](IUIData.md#__useeffect)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L443)

___

### \_\_usePathBox

• `Optional` **\_\_usePathBox**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__usePathBox](IUIData.md#__usepathbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_useDim

• `Optional` **\_\_useDim**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__useDim](IUIData.md#__usedim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IUIData](IUIData.md).[__pathInputed](IUIData.md#__pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IUIData](IUIData.md).[__pathForRender](IUIData.md#__pathforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L448)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IUIData](IUIData.md).[__path2DForRender](IUIData.md#__path2dforrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L449)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IUIData](IUIData.md).[__pathForArrow](IUIData.md#__pathforarrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L450)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IUIData](IUIData.md).[__pathForMotion](IUIData.md#__pathformotion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/display/ILeaf.ts#L451)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IUIData](IUIData.md).[cornerRadius](IUIData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUIData](IUIData.md).[cornerSmoothing](IUIData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IUIData](IUIData.md).[fill](IUIData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IUIData](IUIData.md).[borderWidth](IUIData.md#borderwidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IUIData](IUIData.md).[borderRadius](IUIData.md#borderradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IUIData](IUIData.md).[stroke](IUIData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IUIData](IUIData.md).[startArrow](IUIData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IUIData](IUIData.md).[endArrow](IUIData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUIData](IUIData.md).[strokeAlign](IUIData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[strokeWidth](IUIData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IUIData](IUIData.md).[strokeWidths](IUIData.md#strokewidths)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IUIData](IUIData.md).[strokeWidthFixed](IUIData.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUIData](IUIData.md).[strokeCap](IUIData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUIData](IUIData.md).[strokeJoin](IUIData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IUIData](IUIData.md).[dashPattern](IUIData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUIData](IUIData.md).[dashOffset](IUIData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUIData](IUIData.md).[miterLimit](IUIData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IUIData](IUIData.md).[fontFamily](IUIData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IUIData](IUIData.md).[fontSize](IUIData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IUIData](IUIData.md).[fontWeight](IUIData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[italic](IUIData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IUIData](IUIData.md).[textCase](IUIData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IUIData](IUIData.md).[textDecoration](IUIData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IUIData](IUIData.md).[letterSpacing](IUIData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IUIData](IUIData.md).[lineHeight](IUIData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IUIData](IUIData.md).[paraIndent](IUIData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IUIData](IUIData.md).[paraSpacing](IUIData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IUIData](IUIData.md).[writingMode](IUIData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IUIData](IUIData.md).[textAlign](IUIData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IUIData](IUIData.md).[verticalAlign](IUIData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[autoSizeAlign](IUIData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IUIData](IUIData.md).[textWrap](IUIData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IUIData](IUIData.md).[textOverflow](IUIData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IUIData](IUIData.md).[shadow](IUIData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IUIData](IUIData.md).[innerShadow](IUIData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IUIData](IUIData.md).[blur](IUIData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IUIData](IUIData.md).[backgroundBlur](IUIData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IUIData](IUIData.md).[grayscale](IUIData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/ICommonAttr.ts#L168)

___

### corners

• `Optional` **corners**: `number`

#### Inherited from

IStarAttrData.corners

#### Defined in

[src/ui/packages/interface/src/IUI.ts:177](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L177)

___

### innerRadius

• `Optional` **innerRadius**: `number`

#### Inherited from

IStarAttrData.innerRadius

#### Defined in

[src/ui/packages/interface/src/IUI.ts:178](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L178)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIData](IUIData.md).[animation](IUIData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L452)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIData](IUIData.md).[animationOut](IUIData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L453)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIData](IUIData.md).[transition](IUIData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L455)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIData](IUIData.md).[transitionOut](IUIData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L456)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUIData](IUIData.md).[states](IUIData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L458)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUIData](IUIData.md).[state](IUIData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L459)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[hoverStyle](IUIData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L461)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[pressStyle](IUIData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L462)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[focusStyle](IUIData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L463)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[selectedStyle](IUIData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L464)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[disabledStyle](IUIData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L465)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIData](IUIData.md).[placeholderStyle](IUIData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L466)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IUIData](IUIData.md).[placeholderColor](IUIData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L467)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IUIData](IUIData.md).[placeholderDelay](IUIData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L468)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUIData](IUIData.md).[editConfig](IUIData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L470)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUIData](IUIData.md).[editOuter](IUIData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L471)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUIData](IUIData.md).[editInner](IUIData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L472)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUIData](IUIData.md).[scale](IUIData.md#scale)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L481)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isFills](IUIData.md#__isfills)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:484](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L484)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isStrokes](IUIData.md#__isstrokes)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:485](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L485)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[__strokeWidth](IUIData.md#__strokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L487)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[IUIData](IUIData.md).[__maxStrokeWidth](IUIData.md#__maxstrokewidth)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:488](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L488)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[IUIData](IUIData.md).[__hasMultiStrokeStyle](IUIData.md#__hasmultistrokestyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L489)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__hasMultiPaint](IUIData.md#__hasmultipaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L490)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isAlphaPixelFill](IUIData.md#__isalphapixelfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L492)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isAlphaPixelStroke](IUIData.md#__isalphapixelstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L493)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isTransparentFill](IUIData.md#__istransparentfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L495)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isTransparentStroke](IUIData.md#__istransparentstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L496)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isHitPixel](IUIData.md#__ishitpixel)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L498)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isCanvas](IUIData.md#__iscanvas)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L499)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__isFastShadow](IUIData.md#__isfastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:500](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L500)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__fillAfterStroke](IUIData.md#__fillafterstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:502](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L502)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__drawAfterFill](IUIData.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:503](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L503)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__clipAfterFill](IUIData.md#__clipafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L504)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__hasSurface](IUIData.md#__hassurface)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:505](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L505)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__blendLayer](IUIData.md#__blendlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:507](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L507)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__boxStroke](IUIData.md#__boxstroke)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:509](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L509)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IUIData](IUIData.md).[__font](IUIData.md#__font)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:512](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L512)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IUIData](IUIData.md).[__textDrawData](IUIData.md#__textdrawdata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:513](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L513)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IUIData](IUIData.md).[__needComputePaint](IUIData.md#__needcomputepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:515](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L515)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IUIData](IUIData.md).[__getData](IUIData.md#__getdata)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L11)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L13)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L14)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L15)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L16)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L18)

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

[src/leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[destroy](IUIData.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[__checkSingle](IUIData.md#__checksingle)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[__removeNaturalSize](IUIData.md#__removenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IUIData](IUIData.md).[__computePaint](IUIData.md#__computepaint)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:516](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L516)

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

[src/ui/packages/interface/src/IUI.ts:517](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L517)

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

[src/ui/packages/interface/src/IUI.ts:519](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L519)

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

[src/ui/packages/interface/src/IUI.ts:520](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/interface/src/IUI.ts#L520)
