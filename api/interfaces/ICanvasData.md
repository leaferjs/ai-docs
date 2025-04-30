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
- [\_\_hasMultiPaint](ICanvasData.md#__hasmultipaint)
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
- [strokeAlign](ICanvasData.md#strokealign)
- [strokeWidth](ICanvasData.md#strokewidth)
- [strokeWidths](ICanvasData.md#strokewidths)
- [strokeWidthFixed](ICanvasData.md#strokewidthfixed)
- [strokeCap](ICanvasData.md#strokecap)
- [strokeJoin](ICanvasData.md#strokejoin)
- [dashPattern](ICanvasData.md#dashpattern)
- [dashOffset](ICanvasData.md#dashoffset)
- [miterLimit](ICanvasData.md#miterlimit)
- [startArrow](ICanvasData.md#startarrow)
- [endArrow](ICanvasData.md#endarrow)
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
- [editConfig](ICanvasData.md#editconfig)
- [editOuter](ICanvasData.md#editouter)
- [editInner](ICanvasData.md#editinner)
- [scale](ICanvasData.md#scale)
- [\_\_isFills](ICanvasData.md#__isfills)
- [\_\_isStrokes](ICanvasData.md#__isstrokes)
- [\_\_strokeWidth](ICanvasData.md#__strokewidth)
- [\_\_hasStroke](ICanvasData.md#__hasstroke)
- [\_\_hasHalf](ICanvasData.md#__hashalf)
- [\_\_pixelFill](ICanvasData.md#__pixelfill)
- [\_\_pixelStroke](ICanvasData.md#__pixelstroke)
- [\_\_isHitPixel](ICanvasData.md#__ishitpixel)
- [\_\_isCanvas](ICanvasData.md#__iscanvas)
- [\_\_opacityFill](ICanvasData.md#__opacityfill)
- [\_\_opacityStroke](ICanvasData.md#__opacitystroke)
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

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRectData](IRectData.md).[__leaf](IRectData.md#__leaf)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__input](IRectData.md#__input)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__middle](IRectData.md#__middle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__single](IRectData.md#__single)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasMultiPaint](IRectData.md#__hasmultipaint)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:31](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L31)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IRectData](IRectData.md).[id](IRectData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:321](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L321)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRectData](IRectData.md).[name](IRectData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:322](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L322)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRectData](IRectData.md).[className](IRectData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L323)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRectData](IRectData.md).[blendMode](IRectData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:325](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L325)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRectData](IRectData.md).[opacity](IRectData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:326](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L326)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRectData](IRectData.md).[visible](IRectData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:327](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L327)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[selected](IRectData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:328](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L328)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[disabled](IRectData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:329](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L329)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[locked](IRectData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:330](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L330)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRectData](IRectData.md).[zIndex](IRectData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L331)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[dim](IRectData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L333)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[dimskip](IRectData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:334](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L334)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRectData](IRectData.md).[mask](IRectData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L336)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRectData](IRectData.md).[eraser](IRectData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L337)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IRectData](IRectData.md).[filter](IRectData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L338)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRectData](IRectData.md).[x](IRectData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L341)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRectData](IRectData.md).[y](IRectData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:342](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L342)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRectData](IRectData.md).[width](IRectData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L343)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRectData](IRectData.md).[height](IRectData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L344)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleX](IRectData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L345)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleY](IRectData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L346)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRectData](IRectData.md).[rotation](IRectData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L347)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewX](IRectData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L348)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewY](IRectData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L349)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetX](IRectData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L351)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetY](IRectData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L352)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollX](IRectData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L353)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollY](IRectData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L354)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[origin](IRectData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L356)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[around](IRectData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L357)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lazy](IRectData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L359)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRectData](IRectData.md).[pixelRatio](IRectData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L360)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[path](IRectData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L362)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRectData](IRectData.md).[windingRule](IRectData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L363)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[closed](IRectData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L364)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRectData](IRectData.md).[flow](IRectData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L367)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectData](IRectData.md).[padding](IRectData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L368)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRectData](IRectData.md).[gap](IRectData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L369)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRectData](IRectData.md).[flowAlign](IRectData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L370)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRectData](IRectData.md).[flowWrap](IRectData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L371)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRectData](IRectData.md).[itemBox](IRectData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L372)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[inFlow](IRectData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L374)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoWidth](IRectData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L375)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoHeight](IRectData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L376)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lockRatio](IRectData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L377)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRectData](IRectData.md).[autoBox](IRectData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L378)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[widthRange](IRectData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L380)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[heightRange](IRectData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L381)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRectData](IRectData.md).[draggable](IRectData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L384)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRectData](IRectData.md).[dragBounds](IRectData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L385)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[editable](IRectData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L387)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hittable](IRectData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L389)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitFill](IRectData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L390)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitStroke](IRectData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L391)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitBox](IRectData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L392)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitChildren](IRectData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L393)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitSelf](IRectData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L394)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[hitRadius](IRectData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L395)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[button](IRectData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L397)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRectData](IRectData.md).[cursor](IRectData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L398)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionPath](IRectData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:400](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L400)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRectData](IRectData.md).[motionPrecision](IRectData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L401)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectData](IRectData.md).[motion](IRectData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L403)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionRotation](IRectData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L404)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[normalStyle](IRectData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L406)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[data](IRectData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L409)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IRectData](IRectData.md).[__childBranchNumber](IRectData.md#__childbranchnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:412](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L412)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__complex](IRectData.md#__complex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L413)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalWidth](IRectData.md#__naturalwidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L415)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalHeight](IRectData.md#__naturalheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L416)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoWidth](IRectData.md#__autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L418)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoHeight](IRectData.md#__autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L419)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSide](IRectData.md#__autoside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L420)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSize](IRectData.md#__autosize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:421](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L421)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useNaturalRatio](IRectData.md#__usenaturalratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isLinePath](IRectData.md#__islinepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L424)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IRectData](IRectData.md).[__blendMode](IRectData.md#__blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useArrow](IRectData.md#__usearrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useEffect](IRectData.md#__useeffect)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IRectData](IRectData.md).[__pathInputed](IRectData.md#__pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForRender](IRectData.md#__pathforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:431](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L431)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IRectData](IRectData.md).[__path2DForRender](IRectData.md#__path2dforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForArrow](IRectData.md#__pathforarrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRectData](IRectData.md).[__pathForMotion](IRectData.md#__pathformotion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/display/ILeaf.ts#L434)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerRadius](IRectData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerSmoothing](IRectData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[fill](IRectData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderWidth](IRectData.md#borderwidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderRadius](IRectData.md#borderradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[stroke](IRectData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:70](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L70)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRectData](IRectData.md).[strokeAlign](IRectData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[strokeWidth](IRectData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[strokeWidths](IRectData.md#strokewidths)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[strokeWidthFixed](IRectData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRectData](IRectData.md).[strokeCap](IRectData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRectData](IRectData.md).[strokeJoin](IRectData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[dashPattern](IRectData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRectData](IRectData.md).[dashOffset](IRectData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRectData](IRectData.md).[miterLimit](IRectData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L80)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectData](IRectData.md).[startArrow](IRectData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:82](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L82)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectData](IRectData.md).[endArrow](IRectData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:83](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L83)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IRectData](IRectData.md).[fontFamily](IRectData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L130)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IRectData](IRectData.md).[fontSize](IRectData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L131)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IRectData](IRectData.md).[fontWeight](IRectData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L132)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[italic](IRectData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L133)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IRectData](IRectData.md).[textCase](IRectData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L134)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IRectData](IRectData.md).[textDecoration](IRectData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:135](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L135)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[letterSpacing](IRectData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L136)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[lineHeight](IRectData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L137)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraIndent](IRectData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L139)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraSpacing](IRectData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L140)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IRectData](IRectData.md).[writingMode](IRectData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L142)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IRectData](IRectData.md).[textAlign](IRectData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:143](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L143)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IRectData](IRectData.md).[verticalAlign](IRectData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L144)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[autoSizeAlign](IRectData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L145)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IRectData](IRectData.md).[textWrap](IRectData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:147](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L147)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IRectData](IRectData.md).[textOverflow](IRectData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:148](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L148)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[shadow](IRectData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L167)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[innerShadow](IRectData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L168)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IRectData](IRectData.md).[blur](IRectData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:169](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L169)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IRectData](IRectData.md).[backgroundBlur](IRectData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:170](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L170)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IRectData](IRectData.md).[grayscale](IRectData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:171](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/ICommonAttr.ts#L171)

___

### smooth

• `Optional` **smooth**: `boolean`

#### Inherited from

ICanvasAttrData.smooth

#### Defined in

[ui/packages/interface/src/IUI.ts:299](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L299)

___

### safeResize

• `Optional` **safeResize**: `boolean`

#### Inherited from

ICanvasAttrData.safeResize

#### Defined in

[ui/packages/interface/src/IUI.ts:300](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L300)

___

### contextSettings

• `Optional` **contextSettings**: `ICanvasRenderingContext2DSettings`

#### Inherited from

ICanvasAttrData.contextSettings

#### Defined in

[ui/packages/interface/src/IUI.ts:301](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L301)

___

### url

• `Optional` **url**: `string`

#### Inherited from

ICanvasAttrData.url

#### Defined in

[ui/packages/interface/src/IUI.ts:302](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L302)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animation](IRectData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:439](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L439)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animationOut](IRectData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L440)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transition](IRectData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L442)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transitionOut](IRectData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L443)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRectData](IRectData.md).[states](IRectData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L445)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRectData](IRectData.md).[state](IRectData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L446)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[hoverStyle](IRectData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L448)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[pressStyle](IRectData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L449)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[focusStyle](IRectData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L450)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[selectedStyle](IRectData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L451)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[disabledStyle](IRectData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L452)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[placeholderStyle](IRectData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L453)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRectData](IRectData.md).[editConfig](IRectData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L455)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRectData](IRectData.md).[editOuter](IRectData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L456)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRectData](IRectData.md).[editInner](IRectData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L457)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRectData](IRectData.md).[scale](IRectData.md#scale)

#### Defined in

[ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L466)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isFills](IRectData.md#__isfills)

#### Defined in

[ui/packages/interface/src/IUI.ts:469](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L469)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isStrokes](IRectData.md#__isstrokes)

#### Defined in

[ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L470)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__strokeWidth](IRectData.md#__strokewidth)

#### Defined in

[ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L472)

___

### \_\_hasStroke

• `Readonly` **\_\_hasStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasStroke](IRectData.md#__hasstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:473](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L473)

___

### \_\_hasHalf

• `Readonly` **\_\_hasHalf**: `number`

#### Inherited from

[IRectData](IRectData.md).[__hasHalf](IRectData.md#__hashalf)

#### Defined in

[ui/packages/interface/src/IUI.ts:474](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L474)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__pixelFill](IRectData.md#__pixelfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:477](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L477)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__pixelStroke](IRectData.md#__pixelstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:478](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L478)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isHitPixel](IRectData.md#__ishitpixel)

#### Defined in

[ui/packages/interface/src/IUI.ts:480](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L480)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isCanvas](IRectData.md#__iscanvas)

#### Defined in

[ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L481)

___

### \_\_opacityFill

• `Optional` **\_\_opacityFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__opacityFill](IRectData.md#__opacityfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:483](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L483)

___

### \_\_opacityStroke

• `Optional` **\_\_opacityStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__opacityStroke](IRectData.md#__opacitystroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:484](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L484)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__drawAfterFill](IRectData.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:486](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L486)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__clipAfterFill](IRectData.md#__clipafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L487)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasSurface](IRectData.md#__hassurface)

#### Defined in

[ui/packages/interface/src/IUI.ts:488](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L488)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__blendLayer](IRectData.md#__blendlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L490)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__boxStroke](IRectData.md#__boxstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L492)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IRectData](IRectData.md).[__font](IRectData.md#__font)

#### Defined in

[ui/packages/interface/src/IUI.ts:495](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L495)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IRectData](IRectData.md).[__textDrawData](IRectData.md#__textdrawdata)

#### Defined in

[ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L496)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__needComputePaint](IRectData.md#__needcomputepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L498)

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

[leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__getData](IRectData.md#__getdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L11)

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

[leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L13)

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

[leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L14)

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

[leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L15)

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

[leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L16)

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

[leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L18)

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

[leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[destroy](IRectData.md#destroy)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__checkSingle](IRectData.md#__checksingle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__removeNaturalSize](IRectData.md#__removenaturalsize)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__computePaint](IRectData.md#__computepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/interface/src/IUI.ts#L499)
