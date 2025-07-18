# Interface: IBoxData

## Hierarchy

- `IBoxAttrData`

- [`IGroupData`](IGroupData.md)

  ↳ **`IBoxData`**

  ↳↳ [`IFrameData`](IFrameData.md)

  ↳↳ [`IFlowData`](IFlowData.md)

## Implemented by

- [`BoxData`](../classes/BoxData.md)

## Table of contents

### Properties

- [\_\_leaf](IBoxData.md#__leaf)
- [\_\_input](IBoxData.md#__input)
- [\_\_middle](IBoxData.md#__middle)
- [\_\_single](IBoxData.md#__single)
- [id](IBoxData.md#id)
- [name](IBoxData.md#name)
- [className](IBoxData.md#classname)
- [blendMode](IBoxData.md#blendmode)
- [opacity](IBoxData.md#opacity)
- [visible](IBoxData.md#visible)
- [selected](IBoxData.md#selected)
- [disabled](IBoxData.md#disabled)
- [locked](IBoxData.md#locked)
- [zIndex](IBoxData.md#zindex)
- [dim](IBoxData.md#dim)
- [dimskip](IBoxData.md#dimskip)
- [mask](IBoxData.md#mask)
- [eraser](IBoxData.md#eraser)
- [filter](IBoxData.md#filter)
- [x](IBoxData.md#x)
- [y](IBoxData.md#y)
- [width](IBoxData.md#width)
- [height](IBoxData.md#height)
- [scaleX](IBoxData.md#scalex)
- [scaleY](IBoxData.md#scaley)
- [rotation](IBoxData.md#rotation)
- [skewX](IBoxData.md#skewx)
- [skewY](IBoxData.md#skewy)
- [offsetX](IBoxData.md#offsetx)
- [offsetY](IBoxData.md#offsety)
- [scrollX](IBoxData.md#scrollx)
- [scrollY](IBoxData.md#scrolly)
- [origin](IBoxData.md#origin)
- [around](IBoxData.md#around)
- [lazy](IBoxData.md#lazy)
- [pixelRatio](IBoxData.md#pixelratio)
- [renderSpread](IBoxData.md#renderspread)
- [path](IBoxData.md#path)
- [windingRule](IBoxData.md#windingrule)
- [closed](IBoxData.md#closed)
- [flow](IBoxData.md#flow)
- [padding](IBoxData.md#padding)
- [gap](IBoxData.md#gap)
- [flowAlign](IBoxData.md#flowalign)
- [flowWrap](IBoxData.md#flowwrap)
- [itemBox](IBoxData.md#itembox)
- [inFlow](IBoxData.md#inflow)
- [autoWidth](IBoxData.md#autowidth)
- [autoHeight](IBoxData.md#autoheight)
- [lockRatio](IBoxData.md#lockratio)
- [autoBox](IBoxData.md#autobox)
- [widthRange](IBoxData.md#widthrange)
- [heightRange](IBoxData.md#heightrange)
- [draggable](IBoxData.md#draggable)
- [dragBounds](IBoxData.md#dragbounds)
- [editable](IBoxData.md#editable)
- [hittable](IBoxData.md#hittable)
- [hitFill](IBoxData.md#hitfill)
- [hitStroke](IBoxData.md#hitstroke)
- [hitBox](IBoxData.md#hitbox)
- [hitChildren](IBoxData.md#hitchildren)
- [hitSelf](IBoxData.md#hitself)
- [hitRadius](IBoxData.md#hitradius)
- [button](IBoxData.md#button)
- [cursor](IBoxData.md#cursor)
- [motionPath](IBoxData.md#motionpath)
- [motionPrecision](IBoxData.md#motionprecision)
- [motion](IBoxData.md#motion)
- [motionRotation](IBoxData.md#motionrotation)
- [normalStyle](IBoxData.md#normalstyle)
- [data](IBoxData.md#data)
- [\_\_childBranchNumber](IBoxData.md#__childbranchnumber)
- [\_\_complex](IBoxData.md#__complex)
- [\_\_naturalWidth](IBoxData.md#__naturalwidth)
- [\_\_naturalHeight](IBoxData.md#__naturalheight)
- [\_\_autoWidth](IBoxData.md#__autowidth)
- [\_\_autoHeight](IBoxData.md#__autoheight)
- [\_\_autoSide](IBoxData.md#__autoside)
- [\_\_autoSize](IBoxData.md#__autosize)
- [\_\_useNaturalRatio](IBoxData.md#__usenaturalratio)
- [\_\_isLinePath](IBoxData.md#__islinepath)
- [\_\_blendMode](IBoxData.md#__blendmode)
- [\_\_useStroke](IBoxData.md#__usestroke)
- [\_\_useArrow](IBoxData.md#__usearrow)
- [\_\_useEffect](IBoxData.md#__useeffect)
- [\_\_pathInputed](IBoxData.md#__pathinputed)
- [\_\_pathForRender](IBoxData.md#__pathforrender)
- [\_\_path2DForRender](IBoxData.md#__path2dforrender)
- [\_\_pathForArrow](IBoxData.md#__pathforarrow)
- [\_\_pathForMotion](IBoxData.md#__pathformotion)
- [cornerRadius](IBoxData.md#cornerradius)
- [cornerSmoothing](IBoxData.md#cornersmoothing)
- [fill](IBoxData.md#fill)
- [borderWidth](IBoxData.md#borderwidth)
- [borderRadius](IBoxData.md#borderradius)
- [stroke](IBoxData.md#stroke)
- [startArrow](IBoxData.md#startarrow)
- [endArrow](IBoxData.md#endarrow)
- [strokeAlign](IBoxData.md#strokealign)
- [strokeWidth](IBoxData.md#strokewidth)
- [strokeWidths](IBoxData.md#strokewidths)
- [strokeWidthFixed](IBoxData.md#strokewidthfixed)
- [strokeCap](IBoxData.md#strokecap)
- [strokeJoin](IBoxData.md#strokejoin)
- [dashPattern](IBoxData.md#dashpattern)
- [dashOffset](IBoxData.md#dashoffset)
- [miterLimit](IBoxData.md#miterlimit)
- [fontFamily](IBoxData.md#fontfamily)
- [fontSize](IBoxData.md#fontsize)
- [fontWeight](IBoxData.md#fontweight)
- [italic](IBoxData.md#italic)
- [textCase](IBoxData.md#textcase)
- [textDecoration](IBoxData.md#textdecoration)
- [letterSpacing](IBoxData.md#letterspacing)
- [lineHeight](IBoxData.md#lineheight)
- [paraIndent](IBoxData.md#paraindent)
- [paraSpacing](IBoxData.md#paraspacing)
- [writingMode](IBoxData.md#writingmode)
- [textAlign](IBoxData.md#textalign)
- [verticalAlign](IBoxData.md#verticalalign)
- [autoSizeAlign](IBoxData.md#autosizealign)
- [textWrap](IBoxData.md#textwrap)
- [textOverflow](IBoxData.md#textoverflow)
- [shadow](IBoxData.md#shadow)
- [innerShadow](IBoxData.md#innershadow)
- [blur](IBoxData.md#blur)
- [backgroundBlur](IBoxData.md#backgroundblur)
- [grayscale](IBoxData.md#grayscale)
- [overflow](IBoxData.md#overflow)
- [resizeChildren](IBoxData.md#resizechildren)
- [textBox](IBoxData.md#textbox)
- [animation](IBoxData.md#animation)
- [animationOut](IBoxData.md#animationout)
- [transition](IBoxData.md#transition)
- [transitionOut](IBoxData.md#transitionout)
- [states](IBoxData.md#states)
- [state](IBoxData.md#state)
- [hoverStyle](IBoxData.md#hoverstyle)
- [pressStyle](IBoxData.md#pressstyle)
- [focusStyle](IBoxData.md#focusstyle)
- [selectedStyle](IBoxData.md#selectedstyle)
- [disabledStyle](IBoxData.md#disabledstyle)
- [placeholderStyle](IBoxData.md#placeholderstyle)
- [placeholderColor](IBoxData.md#placeholdercolor)
- [placeholderDelay](IBoxData.md#placeholderdelay)
- [editConfig](IBoxData.md#editconfig)
- [editOuter](IBoxData.md#editouter)
- [editInner](IBoxData.md#editinner)
- [scale](IBoxData.md#scale)
- [\_\_isFills](IBoxData.md#__isfills)
- [\_\_isStrokes](IBoxData.md#__isstrokes)
- [\_\_strokeWidth](IBoxData.md#__strokewidth)
- [\_\_maxStrokeWidth](IBoxData.md#__maxstrokewidth)
- [\_\_hasMultiStrokeStyle](IBoxData.md#__hasmultistrokestyle)
- [\_\_hasMultiPaint](IBoxData.md#__hasmultipaint)
- [\_\_isAlphaPixelFill](IBoxData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](IBoxData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](IBoxData.md#__istransparentfill)
- [\_\_isTransparentStroke](IBoxData.md#__istransparentstroke)
- [\_\_isHitPixel](IBoxData.md#__ishitpixel)
- [\_\_isCanvas](IBoxData.md#__iscanvas)
- [\_\_isFastShadow](IBoxData.md#__isfastshadow)
- [\_\_fillAfterStroke](IBoxData.md#__fillafterstroke)
- [\_\_drawAfterFill](IBoxData.md#__drawafterfill)
- [\_\_clipAfterFill](IBoxData.md#__clipafterfill)
- [\_\_hasSurface](IBoxData.md#__hassurface)
- [\_\_blendLayer](IBoxData.md#__blendlayer)
- [\_\_boxStroke](IBoxData.md#__boxstroke)
- [\_\_font](IBoxData.md#__font)
- [\_\_textDrawData](IBoxData.md#__textdrawdata)
- [\_\_needComputePaint](IBoxData.md#__needcomputepaint)

### Methods

- [\_\_get](IBoxData.md#__get)
- [\_\_getData](IBoxData.md#__getdata)
- [\_\_setInput](IBoxData.md#__setinput)
- [\_\_getInput](IBoxData.md#__getinput)
- [\_\_removeInput](IBoxData.md#__removeinput)
- [\_\_getInputData](IBoxData.md#__getinputdata)
- [\_\_setMiddle](IBoxData.md#__setmiddle)
- [\_\_getMiddle](IBoxData.md#__getmiddle)
- [destroy](IBoxData.md#destroy)
- [\_\_checkSingle](IBoxData.md#__checksingle)
- [\_\_removeNaturalSize](IBoxData.md#__removenaturalsize)
- [\_\_computePaint](IBoxData.md#__computepaint)
- [\_\_getRealStrokeWidth](IBoxData.md#__getrealstrokewidth)
- [\_\_setPaint](IBoxData.md#__setpaint)
- [\_\_removePaint](IBoxData.md#__removepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IGroupData](IGroupData.md).[__leaf](IGroupData.md#__leaf)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IGroupData](IGroupData.md).[__input](IGroupData.md#__input)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IGroupData](IGroupData.md).[__middle](IGroupData.md#__middle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__single](IGroupData.md#__single)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[id](IGroupData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L323)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[name](IGroupData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:324](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L324)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[className](IGroupData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:325](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L325)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IGroupData](IGroupData.md).[blendMode](IGroupData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:327](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L327)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[opacity](IGroupData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:328](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L328)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IGroupData](IGroupData.md).[visible](IGroupData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:329](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[selected](IGroupData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:330](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L330)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[disabled](IGroupData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L331)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[locked](IGroupData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L332)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[zIndex](IGroupData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L333)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[dim](IGroupData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L335)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[dimskip](IGroupData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L336)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IGroupData](IGroupData.md).[mask](IGroupData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L338)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IGroupData](IGroupData.md).[eraser](IGroupData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L339)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IGroupData](IGroupData.md).[filter](IGroupData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L340)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[x](IGroupData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L343)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[y](IGroupData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L344)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[width](IGroupData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L345)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[height](IGroupData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L346)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[scaleX](IGroupData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L347)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[scaleY](IGroupData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L348)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[rotation](IGroupData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L349)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[skewX](IGroupData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L350)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[skewY](IGroupData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L351)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[offsetX](IGroupData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L353)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[offsetY](IGroupData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L354)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[scrollX](IGroupData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L355)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[scrollY](IGroupData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L356)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroupData](IGroupData.md).[origin](IGroupData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L358)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroupData](IGroupData.md).[around](IGroupData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L359)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[lazy](IGroupData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L361)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[pixelRatio](IGroupData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L362)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[renderSpread](IGroupData.md#renderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L364)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IGroupData](IGroupData.md).[path](IGroupData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L366)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IGroupData](IGroupData.md).[windingRule](IGroupData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L367)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[closed](IGroupData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L368)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IGroupData](IGroupData.md).[flow](IGroupData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L371)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroupData](IGroupData.md).[padding](IGroupData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L372)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IGroupData](IGroupData.md).[gap](IGroupData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L373)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IGroupData](IGroupData.md).[flowAlign](IGroupData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L374)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IGroupData](IGroupData.md).[flowWrap](IGroupData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L375)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IGroupData](IGroupData.md).[itemBox](IGroupData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L376)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[inFlow](IGroupData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L378)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroupData](IGroupData.md).[autoWidth](IGroupData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L379)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroupData](IGroupData.md).[autoHeight](IGroupData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L380)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[lockRatio](IGroupData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L381)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IGroupData](IGroupData.md).[autoBox](IGroupData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L382)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroupData](IGroupData.md).[widthRange](IGroupData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L384)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroupData](IGroupData.md).[heightRange](IGroupData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L385)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IGroupData](IGroupData.md).[draggable](IGroupData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L388)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroupData](IGroupData.md).[dragBounds](IGroupData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L389)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[editable](IGroupData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L391)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[hittable](IGroupData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L393)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroupData](IGroupData.md).[hitFill](IGroupData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L394)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroupData](IGroupData.md).[hitStroke](IGroupData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L395)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[hitBox](IGroupData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L396)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[hitChildren](IGroupData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L397)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[hitSelf](IGroupData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L398)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[hitRadius](IGroupData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L399)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[button](IGroupData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L401)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IGroupData](IGroupData.md).[cursor](IGroupData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:402](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L402)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[motionPath](IGroupData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L404)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[motionPrecision](IGroupData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L405)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IGroupData](IGroupData.md).[motion](IGroupData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L407)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[motionRotation](IGroupData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L408)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IGroupData](IGroupData.md).[normalStyle](IGroupData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L410)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IGroupData](IGroupData.md).[data](IGroupData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L413)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__childBranchNumber](IGroupData.md#__childbranchnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L416)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__complex](IGroupData.md#__complex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L417)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__naturalWidth](IGroupData.md#__naturalwidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L419)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__naturalHeight](IGroupData.md#__naturalheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L420)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__autoWidth](IGroupData.md#__autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L422)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__autoHeight](IGroupData.md#__autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__autoSide](IGroupData.md#__autoside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L424)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__autoSize](IGroupData.md#__autosize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__useNaturalRatio](IGroupData.md#__usenaturalratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isLinePath](IGroupData.md#__islinepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[__blendMode](IGroupData.md#__blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__useStroke](IGroupData.md#__usestroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:431](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L431)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__useArrow](IGroupData.md#__usearrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__useEffect](IGroupData.md#__useeffect)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__pathInputed](IGroupData.md#__pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IGroupData](IGroupData.md).[__pathForRender](IGroupData.md#__pathforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IGroupData](IGroupData.md).[__path2DForRender](IGroupData.md#__path2dforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IGroupData](IGroupData.md).[__pathForArrow](IGroupData.md#__pathforarrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IGroupData](IGroupData.md).[__pathForMotion](IGroupData.md#__pathformotion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L439)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[cornerRadius](IGroupData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[cornerSmoothing](IGroupData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IGroupData](IGroupData.md).[fill](IGroupData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IGroupData](IGroupData.md).[borderWidth](IGroupData.md#borderwidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IGroupData](IGroupData.md).[borderRadius](IGroupData.md#borderradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IGroupData](IGroupData.md).[stroke](IGroupData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:65](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L65)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IGroupData](IGroupData.md).[startArrow](IGroupData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L67)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IGroupData](IGroupData.md).[endArrow](IGroupData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:68](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L68)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IGroupData](IGroupData.md).[strokeAlign](IGroupData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[strokeWidth](IGroupData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IGroupData](IGroupData.md).[strokeWidths](IGroupData.md#strokewidths)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[strokeWidthFixed](IGroupData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IGroupData](IGroupData.md).[strokeCap](IGroupData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IGroupData](IGroupData.md).[strokeJoin](IGroupData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IGroupData](IGroupData.md).[dashPattern](IGroupData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[dashOffset](IGroupData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[miterLimit](IGroupData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L80)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[fontFamily](IGroupData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L127)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[fontSize](IGroupData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:128](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L128)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IGroupData](IGroupData.md).[fontWeight](IGroupData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:129](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L129)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[italic](IGroupData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L130)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IGroupData](IGroupData.md).[textCase](IGroupData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L131)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IGroupData](IGroupData.md).[textDecoration](IGroupData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L132)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[letterSpacing](IGroupData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L133)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[lineHeight](IGroupData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L134)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[paraIndent](IGroupData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L136)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[paraSpacing](IGroupData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L137)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IGroupData](IGroupData.md).[writingMode](IGroupData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L139)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IGroupData](IGroupData.md).[textAlign](IGroupData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L140)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IGroupData](IGroupData.md).[verticalAlign](IGroupData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:141](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L141)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[autoSizeAlign](IGroupData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L142)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IGroupData](IGroupData.md).[textWrap](IGroupData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L144)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[textOverflow](IGroupData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L145)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IGroupData](IGroupData.md).[shadow](IGroupData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L164)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IGroupData](IGroupData.md).[innerShadow](IGroupData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:165](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L165)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[blur](IGroupData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:166](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L166)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[backgroundBlur](IGroupData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L167)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[grayscale](IGroupData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L168)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

IBoxAttrData.overflow

#### Defined in

[ui/packages/interface/src/IUI.ts:350](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L350)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

IBoxAttrData.resizeChildren

#### Defined in

[ui/packages/interface/src/IUI.ts:351](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L351)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

IBoxAttrData.textBox

#### Defined in

[ui/packages/interface/src/IUI.ts:352](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L352)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroupData](IGroupData.md).[animation](IGroupData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L449)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroupData](IGroupData.md).[animationOut](IGroupData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L450)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroupData](IGroupData.md).[transition](IGroupData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L452)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroupData](IGroupData.md).[transitionOut](IGroupData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L453)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IGroupData](IGroupData.md).[states](IGroupData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L455)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[state](IGroupData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L456)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroupData](IGroupData.md).[hoverStyle](IGroupData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L458)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroupData](IGroupData.md).[pressStyle](IGroupData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L459)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroupData](IGroupData.md).[focusStyle](IGroupData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L460)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroupData](IGroupData.md).[selectedStyle](IGroupData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L461)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroupData](IGroupData.md).[disabledStyle](IGroupData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L462)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroupData](IGroupData.md).[placeholderStyle](IGroupData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L463)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[placeholderColor](IGroupData.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L464)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[placeholderDelay](IGroupData.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L465)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IGroupData](IGroupData.md).[editConfig](IGroupData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L467)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[editOuter](IGroupData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L468)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[editInner](IGroupData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:469](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L469)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IGroupData](IGroupData.md).[scale](IGroupData.md#scale)

#### Defined in

[ui/packages/interface/src/IUI.ts:478](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L478)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isFills](IGroupData.md#__isfills)

#### Defined in

[ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L481)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isStrokes](IGroupData.md#__isstrokes)

#### Defined in

[ui/packages/interface/src/IUI.ts:482](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L482)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__strokeWidth](IGroupData.md#__strokewidth)

#### Defined in

[ui/packages/interface/src/IUI.ts:484](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L484)

___

### \_\_maxStrokeWidth

• `Readonly` **\_\_maxStrokeWidth**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__maxStrokeWidth](IGroupData.md#__maxstrokewidth)

#### Defined in

[ui/packages/interface/src/IUI.ts:485](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L485)

___

### \_\_hasMultiStrokeStyle

• `Optional` **\_\_hasMultiStrokeStyle**: `number`

#### Inherited from

[IGroupData](IGroupData.md).[__hasMultiStrokeStyle](IGroupData.md#__hasmultistrokestyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:486](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L486)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__hasMultiPaint](IGroupData.md#__hasmultipaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L487)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isAlphaPixelFill](IGroupData.md#__isalphapixelfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L489)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isAlphaPixelStroke](IGroupData.md#__isalphapixelstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L490)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isTransparentFill](IGroupData.md#__istransparentfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L492)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isTransparentStroke](IGroupData.md#__istransparentstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L493)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isHitPixel](IGroupData.md#__ishitpixel)

#### Defined in

[ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L495)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isCanvas](IGroupData.md#__iscanvas)

#### Defined in

[ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L496)

___

### \_\_isFastShadow

• `Optional` **\_\_isFastShadow**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__isFastShadow](IGroupData.md#__isfastshadow)

#### Defined in

[ui/packages/interface/src/IUI.ts:497](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L497)

___

### \_\_fillAfterStroke

• `Optional` **\_\_fillAfterStroke**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__fillAfterStroke](IGroupData.md#__fillafterstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L499)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__drawAfterFill](IGroupData.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:500](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L500)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__clipAfterFill](IGroupData.md#__clipafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:501](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L501)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__hasSurface](IGroupData.md#__hassurface)

#### Defined in

[ui/packages/interface/src/IUI.ts:502](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L502)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__blendLayer](IGroupData.md#__blendlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L504)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__boxStroke](IGroupData.md#__boxstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:506](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L506)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IGroupData](IGroupData.md).[__font](IGroupData.md#__font)

#### Defined in

[ui/packages/interface/src/IUI.ts:509](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L509)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IGroupData](IGroupData.md).[__textDrawData](IGroupData.md#__textdrawdata)

#### Defined in

[ui/packages/interface/src/IUI.ts:510](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L510)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IGroupData](IGroupData.md).[__needComputePaint](IGroupData.md#__needcomputepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:512](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L512)

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

[IGroupData](IGroupData.md).[__get](IGroupData.md#__get)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IGroupData](IGroupData.md).[__getData](IGroupData.md#__getdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L11)

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

[IGroupData](IGroupData.md).[__setInput](IGroupData.md#__setinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L13)

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

[IGroupData](IGroupData.md).[__getInput](IGroupData.md#__getinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L14)

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

[IGroupData](IGroupData.md).[__removeInput](IGroupData.md#__removeinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L15)

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

[IGroupData](IGroupData.md).[__getInputData](IGroupData.md#__getinputdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L16)

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

[IGroupData](IGroupData.md).[__setMiddle](IGroupData.md#__setmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L18)

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

[IGroupData](IGroupData.md).[__getMiddle](IGroupData.md#__getmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IGroupData](IGroupData.md).[destroy](IGroupData.md#destroy)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IGroupData](IGroupData.md).[__checkSingle](IGroupData.md#__checksingle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroupData](IGroupData.md).[__removeNaturalSize](IGroupData.md#__removenaturalsize)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IGroupData](IGroupData.md).[__computePaint](IGroupData.md#__computepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:513](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L513)

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

[IGroupData](IGroupData.md).[__getRealStrokeWidth](IGroupData.md#__getrealstrokewidth)

#### Defined in

[ui/packages/interface/src/IUI.ts:514](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L514)

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

[IGroupData](IGroupData.md).[__setPaint](IGroupData.md#__setpaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:516](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L516)

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

[IGroupData](IGroupData.md).[__removePaint](IGroupData.md#__removepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:517](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L517)
