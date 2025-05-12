# Interface: IRobotData

## Hierarchy

- `IRobotAttrData`

- [`IRectData`](IRectData.md)

  ↳ **`IRobotData`**

## Table of contents

### Properties

- [\_\_leaf](IRobotData.md#__leaf)
- [\_\_input](IRobotData.md#__input)
- [\_\_middle](IRobotData.md#__middle)
- [\_\_single](IRobotData.md#__single)
- [\_\_hasMultiPaint](IRobotData.md#__hasmultipaint)
- [id](IRobotData.md#id)
- [name](IRobotData.md#name)
- [className](IRobotData.md#classname)
- [blendMode](IRobotData.md#blendmode)
- [opacity](IRobotData.md#opacity)
- [visible](IRobotData.md#visible)
- [selected](IRobotData.md#selected)
- [disabled](IRobotData.md#disabled)
- [locked](IRobotData.md#locked)
- [zIndex](IRobotData.md#zindex)
- [dim](IRobotData.md#dim)
- [dimskip](IRobotData.md#dimskip)
- [mask](IRobotData.md#mask)
- [eraser](IRobotData.md#eraser)
- [filter](IRobotData.md#filter)
- [x](IRobotData.md#x)
- [y](IRobotData.md#y)
- [width](IRobotData.md#width)
- [height](IRobotData.md#height)
- [scaleX](IRobotData.md#scalex)
- [scaleY](IRobotData.md#scaley)
- [rotation](IRobotData.md#rotation)
- [skewX](IRobotData.md#skewx)
- [skewY](IRobotData.md#skewy)
- [offsetX](IRobotData.md#offsetx)
- [offsetY](IRobotData.md#offsety)
- [scrollX](IRobotData.md#scrollx)
- [scrollY](IRobotData.md#scrolly)
- [origin](IRobotData.md#origin)
- [around](IRobotData.md#around)
- [lazy](IRobotData.md#lazy)
- [pixelRatio](IRobotData.md#pixelratio)
- [path](IRobotData.md#path)
- [windingRule](IRobotData.md#windingrule)
- [closed](IRobotData.md#closed)
- [flow](IRobotData.md#flow)
- [padding](IRobotData.md#padding)
- [gap](IRobotData.md#gap)
- [flowAlign](IRobotData.md#flowalign)
- [flowWrap](IRobotData.md#flowwrap)
- [itemBox](IRobotData.md#itembox)
- [inFlow](IRobotData.md#inflow)
- [autoWidth](IRobotData.md#autowidth)
- [autoHeight](IRobotData.md#autoheight)
- [lockRatio](IRobotData.md#lockratio)
- [autoBox](IRobotData.md#autobox)
- [widthRange](IRobotData.md#widthrange)
- [heightRange](IRobotData.md#heightrange)
- [draggable](IRobotData.md#draggable)
- [dragBounds](IRobotData.md#dragbounds)
- [editable](IRobotData.md#editable)
- [hittable](IRobotData.md#hittable)
- [hitFill](IRobotData.md#hitfill)
- [hitStroke](IRobotData.md#hitstroke)
- [hitBox](IRobotData.md#hitbox)
- [hitChildren](IRobotData.md#hitchildren)
- [hitSelf](IRobotData.md#hitself)
- [hitRadius](IRobotData.md#hitradius)
- [button](IRobotData.md#button)
- [cursor](IRobotData.md#cursor)
- [motionPath](IRobotData.md#motionpath)
- [motionPrecision](IRobotData.md#motionprecision)
- [motion](IRobotData.md#motion)
- [motionRotation](IRobotData.md#motionrotation)
- [normalStyle](IRobotData.md#normalstyle)
- [data](IRobotData.md#data)
- [\_\_childBranchNumber](IRobotData.md#__childbranchnumber)
- [\_\_complex](IRobotData.md#__complex)
- [\_\_naturalWidth](IRobotData.md#__naturalwidth)
- [\_\_naturalHeight](IRobotData.md#__naturalheight)
- [\_\_autoWidth](IRobotData.md#__autowidth)
- [\_\_autoHeight](IRobotData.md#__autoheight)
- [\_\_autoSide](IRobotData.md#__autoside)
- [\_\_autoSize](IRobotData.md#__autosize)
- [\_\_useNaturalRatio](IRobotData.md#__usenaturalratio)
- [\_\_isLinePath](IRobotData.md#__islinepath)
- [\_\_blendMode](IRobotData.md#__blendmode)
- [\_\_useArrow](IRobotData.md#__usearrow)
- [\_\_useEffect](IRobotData.md#__useeffect)
- [\_\_pathInputed](IRobotData.md#__pathinputed)
- [\_\_pathForRender](IRobotData.md#__pathforrender)
- [\_\_path2DForRender](IRobotData.md#__path2dforrender)
- [\_\_pathForArrow](IRobotData.md#__pathforarrow)
- [\_\_pathForMotion](IRobotData.md#__pathformotion)
- [cornerRadius](IRobotData.md#cornerradius)
- [cornerSmoothing](IRobotData.md#cornersmoothing)
- [fill](IRobotData.md#fill)
- [borderWidth](IRobotData.md#borderwidth)
- [borderRadius](IRobotData.md#borderradius)
- [stroke](IRobotData.md#stroke)
- [strokeAlign](IRobotData.md#strokealign)
- [strokeWidth](IRobotData.md#strokewidth)
- [strokeWidths](IRobotData.md#strokewidths)
- [strokeWidthFixed](IRobotData.md#strokewidthfixed)
- [strokeCap](IRobotData.md#strokecap)
- [strokeJoin](IRobotData.md#strokejoin)
- [dashPattern](IRobotData.md#dashpattern)
- [dashOffset](IRobotData.md#dashoffset)
- [miterLimit](IRobotData.md#miterlimit)
- [startArrow](IRobotData.md#startarrow)
- [endArrow](IRobotData.md#endarrow)
- [fontFamily](IRobotData.md#fontfamily)
- [fontSize](IRobotData.md#fontsize)
- [fontWeight](IRobotData.md#fontweight)
- [italic](IRobotData.md#italic)
- [textCase](IRobotData.md#textcase)
- [textDecoration](IRobotData.md#textdecoration)
- [letterSpacing](IRobotData.md#letterspacing)
- [lineHeight](IRobotData.md#lineheight)
- [paraIndent](IRobotData.md#paraindent)
- [paraSpacing](IRobotData.md#paraspacing)
- [writingMode](IRobotData.md#writingmode)
- [textAlign](IRobotData.md#textalign)
- [verticalAlign](IRobotData.md#verticalalign)
- [autoSizeAlign](IRobotData.md#autosizealign)
- [textWrap](IRobotData.md#textwrap)
- [textOverflow](IRobotData.md#textoverflow)
- [shadow](IRobotData.md#shadow)
- [innerShadow](IRobotData.md#innershadow)
- [blur](IRobotData.md#blur)
- [backgroundBlur](IRobotData.md#backgroundblur)
- [grayscale](IRobotData.md#grayscale)
- [robot](IRobotData.md#robot)
- [actions](IRobotData.md#actions)
- [action](IRobotData.md#action)
- [now](IRobotData.md#now)
- [FPS](IRobotData.md#fps)
- [loop](IRobotData.md#loop)
- [animation](IRobotData.md#animation)
- [animationOut](IRobotData.md#animationout)
- [transition](IRobotData.md#transition)
- [transitionOut](IRobotData.md#transitionout)
- [states](IRobotData.md#states)
- [state](IRobotData.md#state)
- [hoverStyle](IRobotData.md#hoverstyle)
- [pressStyle](IRobotData.md#pressstyle)
- [focusStyle](IRobotData.md#focusstyle)
- [selectedStyle](IRobotData.md#selectedstyle)
- [disabledStyle](IRobotData.md#disabledstyle)
- [placeholderStyle](IRobotData.md#placeholderstyle)
- [placeholderColor](IRobotData.md#placeholdercolor)
- [editConfig](IRobotData.md#editconfig)
- [editOuter](IRobotData.md#editouter)
- [editInner](IRobotData.md#editinner)
- [scale](IRobotData.md#scale)
- [\_\_isFills](IRobotData.md#__isfills)
- [\_\_isStrokes](IRobotData.md#__isstrokes)
- [\_\_strokeWidth](IRobotData.md#__strokewidth)
- [\_\_hasStroke](IRobotData.md#__hasstroke)
- [\_\_hasHalf](IRobotData.md#__hashalf)
- [\_\_pixelFill](IRobotData.md#__pixelfill)
- [\_\_pixelStroke](IRobotData.md#__pixelstroke)
- [\_\_isHitPixel](IRobotData.md#__ishitpixel)
- [\_\_isCanvas](IRobotData.md#__iscanvas)
- [\_\_opacityFill](IRobotData.md#__opacityfill)
- [\_\_opacityStroke](IRobotData.md#__opacitystroke)
- [\_\_drawAfterFill](IRobotData.md#__drawafterfill)
- [\_\_clipAfterFill](IRobotData.md#__clipafterfill)
- [\_\_hasSurface](IRobotData.md#__hassurface)
- [\_\_blendLayer](IRobotData.md#__blendlayer)
- [\_\_boxStroke](IRobotData.md#__boxstroke)
- [\_\_font](IRobotData.md#__font)
- [\_\_textDrawData](IRobotData.md#__textdrawdata)
- [\_\_needComputePaint](IRobotData.md#__needcomputepaint)

### Methods

- [\_\_get](IRobotData.md#__get)
- [\_\_getData](IRobotData.md#__getdata)
- [\_\_setInput](IRobotData.md#__setinput)
- [\_\_getInput](IRobotData.md#__getinput)
- [\_\_removeInput](IRobotData.md#__removeinput)
- [\_\_getInputData](IRobotData.md#__getinputdata)
- [\_\_setMiddle](IRobotData.md#__setmiddle)
- [\_\_getMiddle](IRobotData.md#__getmiddle)
- [destroy](IRobotData.md#destroy)
- [\_\_checkSingle](IRobotData.md#__checksingle)
- [\_\_removeNaturalSize](IRobotData.md#__removenaturalsize)
- [\_\_computePaint](IRobotData.md#__computepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRectData](IRectData.md).[__leaf](IRectData.md#__leaf)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__input](IRectData.md#__input)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__middle](IRectData.md#__middle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__single](IRectData.md#__single)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasMultiPaint](IRectData.md#__hasmultipaint)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:31](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L31)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IRectData](IRectData.md).[id](IRectData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:321](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L321)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRectData](IRectData.md).[name](IRectData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:322](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L322)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRectData](IRectData.md).[className](IRectData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L323)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRectData](IRectData.md).[blendMode](IRectData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:325](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L325)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRectData](IRectData.md).[opacity](IRectData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:326](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L326)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRectData](IRectData.md).[visible](IRectData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:327](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L327)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[selected](IRectData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:328](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L328)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[disabled](IRectData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:329](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L329)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[locked](IRectData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:330](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L330)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRectData](IRectData.md).[zIndex](IRectData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L331)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[dim](IRectData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L333)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[dimskip](IRectData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:334](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L334)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRectData](IRectData.md).[mask](IRectData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L336)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRectData](IRectData.md).[eraser](IRectData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L337)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IRectData](IRectData.md).[filter](IRectData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L338)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRectData](IRectData.md).[x](IRectData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L341)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRectData](IRectData.md).[y](IRectData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:342](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L342)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRectData](IRectData.md).[width](IRectData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L343)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRectData](IRectData.md).[height](IRectData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L344)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleX](IRectData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L345)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scaleY](IRectData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L346)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRectData](IRectData.md).[rotation](IRectData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L347)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewX](IRectData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L348)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRectData](IRectData.md).[skewY](IRectData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L349)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetX](IRectData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L351)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRectData](IRectData.md).[offsetY](IRectData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L352)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollX](IRectData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L353)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRectData](IRectData.md).[scrollY](IRectData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L354)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[origin](IRectData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L356)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectData](IRectData.md).[around](IRectData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L357)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lazy](IRectData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L359)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRectData](IRectData.md).[pixelRatio](IRectData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L360)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[path](IRectData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L362)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRectData](IRectData.md).[windingRule](IRectData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L363)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[closed](IRectData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L364)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRectData](IRectData.md).[flow](IRectData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L367)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectData](IRectData.md).[padding](IRectData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L368)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRectData](IRectData.md).[gap](IRectData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L369)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRectData](IRectData.md).[flowAlign](IRectData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L370)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRectData](IRectData.md).[flowWrap](IRectData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L371)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRectData](IRectData.md).[itemBox](IRectData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L372)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[inFlow](IRectData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L374)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoWidth](IRectData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L375)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectData](IRectData.md).[autoHeight](IRectData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L376)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[lockRatio](IRectData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L377)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRectData](IRectData.md).[autoBox](IRectData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L378)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[widthRange](IRectData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L380)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectData](IRectData.md).[heightRange](IRectData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L381)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRectData](IRectData.md).[draggable](IRectData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L384)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRectData](IRectData.md).[dragBounds](IRectData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L385)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[editable](IRectData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L387)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hittable](IRectData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L389)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitFill](IRectData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L390)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectData](IRectData.md).[hitStroke](IRectData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L391)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitBox](IRectData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L392)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitChildren](IRectData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L393)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[hitSelf](IRectData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L394)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[hitRadius](IRectData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L395)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[button](IRectData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L397)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRectData](IRectData.md).[cursor](IRectData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L398)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionPath](IRectData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:400](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L400)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRectData](IRectData.md).[motionPrecision](IRectData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L401)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectData](IRectData.md).[motion](IRectData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L403)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRectData](IRectData.md).[motionRotation](IRectData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L404)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[normalStyle](IRectData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L406)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[data](IRectData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L409)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IRectData](IRectData.md).[__childBranchNumber](IRectData.md#__childbranchnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:412](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L412)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__complex](IRectData.md#__complex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L413)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalWidth](IRectData.md#__naturalwidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L415)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[__naturalHeight](IRectData.md#__naturalheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L416)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoWidth](IRectData.md#__autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L418)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoHeight](IRectData.md#__autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L419)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSide](IRectData.md#__autoside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L420)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__autoSize](IRectData.md#__autosize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:421](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L421)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useNaturalRatio](IRectData.md#__usenaturalratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isLinePath](IRectData.md#__islinepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L424)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IRectData](IRectData.md).[__blendMode](IRectData.md#__blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useArrow](IRectData.md#__usearrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__useEffect](IRectData.md#__useeffect)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IRectData](IRectData.md).[__pathInputed](IRectData.md#__pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForRender](IRectData.md#__pathforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:431](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L431)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IRectData](IRectData.md).[__path2DForRender](IRectData.md#__path2dforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRectData](IRectData.md).[__pathForArrow](IRectData.md#__pathforarrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRectData](IRectData.md).[__pathForMotion](IRectData.md#__pathformotion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L434)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerRadius](IRectData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRectData](IRectData.md).[cornerSmoothing](IRectData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[fill](IRectData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderWidth](IRectData.md#borderwidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IRectData](IRectData.md).[borderRadius](IRectData.md#borderradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IRectData](IRectData.md).[stroke](IRectData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:70](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L70)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRectData](IRectData.md).[strokeAlign](IRectData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[strokeWidth](IRectData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[strokeWidths](IRectData.md#strokewidths)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[strokeWidthFixed](IRectData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRectData](IRectData.md).[strokeCap](IRectData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRectData](IRectData.md).[strokeJoin](IRectData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IRectData](IRectData.md).[dashPattern](IRectData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRectData](IRectData.md).[dashOffset](IRectData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRectData](IRectData.md).[miterLimit](IRectData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L80)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectData](IRectData.md).[startArrow](IRectData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:82](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L82)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectData](IRectData.md).[endArrow](IRectData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:83](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L83)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IRectData](IRectData.md).[fontFamily](IRectData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L130)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IRectData](IRectData.md).[fontSize](IRectData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L131)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IRectData](IRectData.md).[fontWeight](IRectData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L132)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[italic](IRectData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L133)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IRectData](IRectData.md).[textCase](IRectData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L134)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IRectData](IRectData.md).[textDecoration](IRectData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:135](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L135)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[letterSpacing](IRectData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L136)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IRectData](IRectData.md).[lineHeight](IRectData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L137)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraIndent](IRectData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L139)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IRectData](IRectData.md).[paraSpacing](IRectData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L140)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IRectData](IRectData.md).[writingMode](IRectData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L142)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IRectData](IRectData.md).[textAlign](IRectData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:143](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L143)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IRectData](IRectData.md).[verticalAlign](IRectData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L144)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[autoSizeAlign](IRectData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L145)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IRectData](IRectData.md).[textWrap](IRectData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:147](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L147)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IRectData](IRectData.md).[textOverflow](IRectData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:148](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L148)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[shadow](IRectData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L167)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IRectData](IRectData.md).[innerShadow](IRectData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L168)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IRectData](IRectData.md).[blur](IRectData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:169](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L169)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IRectData](IRectData.md).[backgroundBlur](IRectData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:170](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L170)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IRectData](IRectData.md).[grayscale](IRectData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:171](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L171)

___

### robot

• `Optional` **robot**: [`IRobotKeyframe`](IRobotKeyframe.md) \| [`IRobotKeyframe`](IRobotKeyframe.md)[]

#### Inherited from

IRobotAttrData.robot

#### Defined in

[ui/packages/interface/src/IUI.ts:99](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L99)

___

### actions

• `Optional` **actions**: [`IRobotActions`](IRobotActions.md)

#### Inherited from

IRobotAttrData.actions

#### Defined in

[ui/packages/interface/src/IUI.ts:100](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L100)

___

### action

• `Optional` **action**: `string`

#### Inherited from

IRobotAttrData.action

#### Defined in

[ui/packages/interface/src/IUI.ts:101](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L101)

___

### now

• `Optional` **now**: `number`

#### Inherited from

IRobotAttrData.now

#### Defined in

[ui/packages/interface/src/IUI.ts:102](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L102)

___

### FPS

• `Optional` **FPS**: `number`

#### Inherited from

IRobotAttrData.FPS

#### Defined in

[ui/packages/interface/src/IUI.ts:103](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L103)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

IRobotAttrData.loop

#### Defined in

[ui/packages/interface/src/IUI.ts:104](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L104)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animation](IRectData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L444)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectData](IRectData.md).[animationOut](IRectData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L445)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transition](IRectData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L447)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectData](IRectData.md).[transitionOut](IRectData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L448)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRectData](IRectData.md).[states](IRectData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L450)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRectData](IRectData.md).[state](IRectData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L451)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[hoverStyle](IRectData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L453)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[pressStyle](IRectData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L454)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[focusStyle](IRectData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L455)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[selectedStyle](IRectData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L456)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[disabledStyle](IRectData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L457)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectData](IRectData.md).[placeholderStyle](IRectData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L458)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IRectData](IRectData.md).[placeholderColor](IRectData.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L459)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRectData](IRectData.md).[editConfig](IRectData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L461)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRectData](IRectData.md).[editOuter](IRectData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L462)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRectData](IRectData.md).[editInner](IRectData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L463)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRectData](IRectData.md).[scale](IRectData.md#scale)

#### Defined in

[ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L472)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isFills](IRectData.md#__isfills)

#### Defined in

[ui/packages/interface/src/IUI.ts:475](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L475)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isStrokes](IRectData.md#__isstrokes)

#### Defined in

[ui/packages/interface/src/IUI.ts:476](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L476)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IRectData](IRectData.md).[__strokeWidth](IRectData.md#__strokewidth)

#### Defined in

[ui/packages/interface/src/IUI.ts:478](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L478)

___

### \_\_hasStroke

• `Readonly` **\_\_hasStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasStroke](IRectData.md#__hasstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:479](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L479)

___

### \_\_hasHalf

• `Readonly` **\_\_hasHalf**: `number`

#### Inherited from

[IRectData](IRectData.md).[__hasHalf](IRectData.md#__hashalf)

#### Defined in

[ui/packages/interface/src/IUI.ts:480](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L480)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__pixelFill](IRectData.md#__pixelfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:483](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L483)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__pixelStroke](IRectData.md#__pixelstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:484](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L484)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isHitPixel](IRectData.md#__ishitpixel)

#### Defined in

[ui/packages/interface/src/IUI.ts:486](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L486)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__isCanvas](IRectData.md#__iscanvas)

#### Defined in

[ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L487)

___

### \_\_opacityFill

• `Optional` **\_\_opacityFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__opacityFill](IRectData.md#__opacityfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L489)

___

### \_\_opacityStroke

• `Optional` **\_\_opacityStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__opacityStroke](IRectData.md#__opacitystroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L490)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__drawAfterFill](IRectData.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:492](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L492)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__clipAfterFill](IRectData.md#__clipafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:493](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L493)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__hasSurface](IRectData.md#__hassurface)

#### Defined in

[ui/packages/interface/src/IUI.ts:494](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L494)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__blendLayer](IRectData.md#__blendlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:496](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L496)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__boxStroke](IRectData.md#__boxstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L498)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IRectData](IRectData.md).[__font](IRectData.md#__font)

#### Defined in

[ui/packages/interface/src/IUI.ts:501](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L501)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IRectData](IRectData.md).[__textDrawData](IRectData.md#__textdrawdata)

#### Defined in

[ui/packages/interface/src/IUI.ts:502](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L502)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IRectData](IRectData.md).[__needComputePaint](IRectData.md#__needcomputepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:504](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L504)

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

[leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IRectData](IRectData.md).[__getData](IRectData.md#__getdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L11)

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

[leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L13)

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

[leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L14)

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

[leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L15)

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

[leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L16)

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

[leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L18)

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

[leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[destroy](IRectData.md#destroy)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__checkSingle](IRectData.md#__checksingle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__removeNaturalSize](IRectData.md#__removenaturalsize)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IRectData](IRectData.md).[__computePaint](IRectData.md#__computepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:505](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L505)
