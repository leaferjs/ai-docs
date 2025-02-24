# Interface: IFrameData

## Hierarchy

- [`IBoxData`](IBoxData.md)

  ↳ **`IFrameData`**

## Implemented by

- [`FrameData`](../classes/FrameData.md)

## Table of contents

### Properties

- [\_\_leaf](IFrameData.md#__leaf)
- [\_\_input](IFrameData.md#__input)
- [\_\_middle](IFrameData.md#__middle)
- [\_\_single](IFrameData.md#__single)
- [\_\_hasMultiPaint](IFrameData.md#__hasmultipaint)
- [id](IFrameData.md#id)
- [name](IFrameData.md#name)
- [className](IFrameData.md#classname)
- [blendMode](IFrameData.md#blendmode)
- [opacity](IFrameData.md#opacity)
- [visible](IFrameData.md#visible)
- [selected](IFrameData.md#selected)
- [disabled](IFrameData.md#disabled)
- [locked](IFrameData.md#locked)
- [zIndex](IFrameData.md#zindex)
- [mask](IFrameData.md#mask)
- [eraser](IFrameData.md#eraser)
- [filter](IFrameData.md#filter)
- [x](IFrameData.md#x)
- [y](IFrameData.md#y)
- [width](IFrameData.md#width)
- [height](IFrameData.md#height)
- [scaleX](IFrameData.md#scalex)
- [scaleY](IFrameData.md#scaley)
- [rotation](IFrameData.md#rotation)
- [skewX](IFrameData.md#skewx)
- [skewY](IFrameData.md#skewy)
- [offsetX](IFrameData.md#offsetx)
- [offsetY](IFrameData.md#offsety)
- [scrollX](IFrameData.md#scrollx)
- [scrollY](IFrameData.md#scrolly)
- [origin](IFrameData.md#origin)
- [around](IFrameData.md#around)
- [lazy](IFrameData.md#lazy)
- [pixelRatio](IFrameData.md#pixelratio)
- [path](IFrameData.md#path)
- [windingRule](IFrameData.md#windingrule)
- [closed](IFrameData.md#closed)
- [flow](IFrameData.md#flow)
- [padding](IFrameData.md#padding)
- [gap](IFrameData.md#gap)
- [flowAlign](IFrameData.md#flowalign)
- [flowWrap](IFrameData.md#flowwrap)
- [itemBox](IFrameData.md#itembox)
- [inFlow](IFrameData.md#inflow)
- [autoWidth](IFrameData.md#autowidth)
- [autoHeight](IFrameData.md#autoheight)
- [lockRatio](IFrameData.md#lockratio)
- [autoBox](IFrameData.md#autobox)
- [widthRange](IFrameData.md#widthrange)
- [heightRange](IFrameData.md#heightrange)
- [draggable](IFrameData.md#draggable)
- [dragBounds](IFrameData.md#dragbounds)
- [editable](IFrameData.md#editable)
- [hittable](IFrameData.md#hittable)
- [hitFill](IFrameData.md#hitfill)
- [hitStroke](IFrameData.md#hitstroke)
- [hitBox](IFrameData.md#hitbox)
- [hitChildren](IFrameData.md#hitchildren)
- [hitSelf](IFrameData.md#hitself)
- [hitRadius](IFrameData.md#hitradius)
- [button](IFrameData.md#button)
- [cursor](IFrameData.md#cursor)
- [motionPath](IFrameData.md#motionpath)
- [motionPrecision](IFrameData.md#motionprecision)
- [motion](IFrameData.md#motion)
- [motionRotation](IFrameData.md#motionrotation)
- [normalStyle](IFrameData.md#normalstyle)
- [data](IFrameData.md#data)
- [\_\_childBranchNumber](IFrameData.md#__childbranchnumber)
- [\_\_complex](IFrameData.md#__complex)
- [\_\_naturalWidth](IFrameData.md#__naturalwidth)
- [\_\_naturalHeight](IFrameData.md#__naturalheight)
- [\_\_autoWidth](IFrameData.md#__autowidth)
- [\_\_autoHeight](IFrameData.md#__autoheight)
- [\_\_autoSide](IFrameData.md#__autoside)
- [\_\_autoSize](IFrameData.md#__autosize)
- [\_\_useNaturalRatio](IFrameData.md#__usenaturalratio)
- [\_\_isLinePath](IFrameData.md#__islinepath)
- [\_\_blendMode](IFrameData.md#__blendmode)
- [\_\_useArrow](IFrameData.md#__usearrow)
- [\_\_useEffect](IFrameData.md#__useeffect)
- [\_\_pathInputed](IFrameData.md#__pathinputed)
- [\_\_pathForRender](IFrameData.md#__pathforrender)
- [\_\_path2DForRender](IFrameData.md#__path2dforrender)
- [\_\_pathForArrow](IFrameData.md#__pathforarrow)
- [\_\_pathForMotion](IFrameData.md#__pathformotion)
- [cornerRadius](IFrameData.md#cornerradius)
- [cornerSmoothing](IFrameData.md#cornersmoothing)
- [fill](IFrameData.md#fill)
- [borderWidth](IFrameData.md#borderwidth)
- [borderRadius](IFrameData.md#borderradius)
- [stroke](IFrameData.md#stroke)
- [strokeAlign](IFrameData.md#strokealign)
- [strokeWidth](IFrameData.md#strokewidth)
- [strokeWidths](IFrameData.md#strokewidths)
- [strokeWidthFixed](IFrameData.md#strokewidthfixed)
- [strokeCap](IFrameData.md#strokecap)
- [strokeJoin](IFrameData.md#strokejoin)
- [dashPattern](IFrameData.md#dashpattern)
- [dashOffset](IFrameData.md#dashoffset)
- [miterLimit](IFrameData.md#miterlimit)
- [startArrow](IFrameData.md#startarrow)
- [endArrow](IFrameData.md#endarrow)
- [fontFamily](IFrameData.md#fontfamily)
- [fontSize](IFrameData.md#fontsize)
- [fontWeight](IFrameData.md#fontweight)
- [italic](IFrameData.md#italic)
- [textCase](IFrameData.md#textcase)
- [textDecoration](IFrameData.md#textdecoration)
- [letterSpacing](IFrameData.md#letterspacing)
- [lineHeight](IFrameData.md#lineheight)
- [paraIndent](IFrameData.md#paraindent)
- [paraSpacing](IFrameData.md#paraspacing)
- [writingMode](IFrameData.md#writingmode)
- [textAlign](IFrameData.md#textalign)
- [verticalAlign](IFrameData.md#verticalalign)
- [autoSizeAlign](IFrameData.md#autosizealign)
- [textWrap](IFrameData.md#textwrap)
- [textOverflow](IFrameData.md#textoverflow)
- [shadow](IFrameData.md#shadow)
- [innerShadow](IFrameData.md#innershadow)
- [blur](IFrameData.md#blur)
- [backgroundBlur](IFrameData.md#backgroundblur)
- [grayscale](IFrameData.md#grayscale)
- [overflow](IFrameData.md#overflow)
- [resizeChildren](IFrameData.md#resizechildren)
- [textBox](IFrameData.md#textbox)
- [animation](IFrameData.md#animation)
- [animationOut](IFrameData.md#animationout)
- [transition](IFrameData.md#transition)
- [transitionOut](IFrameData.md#transitionout)
- [states](IFrameData.md#states)
- [state](IFrameData.md#state)
- [hoverStyle](IFrameData.md#hoverstyle)
- [pressStyle](IFrameData.md#pressstyle)
- [focusStyle](IFrameData.md#focusstyle)
- [selectedStyle](IFrameData.md#selectedstyle)
- [disabledStyle](IFrameData.md#disabledstyle)
- [placeholderStyle](IFrameData.md#placeholderstyle)
- [scale](IFrameData.md#scale)
- [\_\_isFills](IFrameData.md#__isfills)
- [\_\_isStrokes](IFrameData.md#__isstrokes)
- [\_\_strokeWidth](IFrameData.md#__strokewidth)
- [\_\_hasStroke](IFrameData.md#__hasstroke)
- [\_\_pixelFill](IFrameData.md#__pixelfill)
- [\_\_pixelStroke](IFrameData.md#__pixelstroke)
- [\_\_isHitPixel](IFrameData.md#__ishitpixel)
- [\_\_isCanvas](IFrameData.md#__iscanvas)
- [\_\_opacityFill](IFrameData.md#__opacityfill)
- [\_\_opacityStroke](IFrameData.md#__opacitystroke)
- [\_\_drawAfterFill](IFrameData.md#__drawafterfill)
- [\_\_clipAfterFill](IFrameData.md#__clipafterfill)
- [\_\_hasSurface](IFrameData.md#__hassurface)
- [\_\_isOverflow](IFrameData.md#__isoverflow)
- [\_\_blendLayer](IFrameData.md#__blendlayer)
- [\_\_boxStroke](IFrameData.md#__boxstroke)
- [\_\_font](IFrameData.md#__font)
- [\_\_textDrawData](IFrameData.md#__textdrawdata)
- [\_\_needComputePaint](IFrameData.md#__needcomputepaint)

### Methods

- [\_\_get](IFrameData.md#__get)
- [\_\_getData](IFrameData.md#__getdata)
- [\_\_setInput](IFrameData.md#__setinput)
- [\_\_getInput](IFrameData.md#__getinput)
- [\_\_removeInput](IFrameData.md#__removeinput)
- [\_\_getInputData](IFrameData.md#__getinputdata)
- [\_\_setMiddle](IFrameData.md#__setmiddle)
- [\_\_getMiddle](IFrameData.md#__getmiddle)
- [destroy](IFrameData.md#destroy)
- [\_\_checkSingle](IFrameData.md#__checksingle)
- [\_\_removeNaturalSize](IFrameData.md#__removenaturalsize)
- [\_\_computePaint](IFrameData.md#__computepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IBoxData](IBoxData.md).[__leaf](IBoxData.md#__leaf)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__input](IBoxData.md#__input)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__middle](IBoxData.md#__middle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__single](IBoxData.md#__single)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__hasMultiPaint](IBoxData.md#__hasmultipaint)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:31](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L31)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[id](IBoxData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:319](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L319)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[name](IBoxData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L320)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[className](IBoxData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:321](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L321)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBoxData](IBoxData.md).[blendMode](IBoxData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L323)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[opacity](IBoxData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:324](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L324)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBoxData](IBoxData.md).[visible](IBoxData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:325](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L325)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[selected](IBoxData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:326](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L326)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[disabled](IBoxData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:327](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L327)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[locked](IBoxData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:328](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L328)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[zIndex](IBoxData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:329](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L329)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBoxData](IBoxData.md).[mask](IBoxData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L331)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBoxData](IBoxData.md).[eraser](IBoxData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L332)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[filter](IBoxData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L333)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[x](IBoxData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L336)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[y](IBoxData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L337)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[width](IBoxData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L338)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[height](IBoxData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L339)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scaleX](IBoxData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L340)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scaleY](IBoxData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L341)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[rotation](IBoxData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:342](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L342)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[skewX](IBoxData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L343)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[skewY](IBoxData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L344)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[offsetX](IBoxData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L346)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[offsetY](IBoxData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L347)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scrollX](IBoxData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L348)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[scrollY](IBoxData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L349)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxData](IBoxData.md).[origin](IBoxData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L351)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxData](IBoxData.md).[around](IBoxData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L352)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[lazy](IBoxData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L354)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[pixelRatio](IBoxData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L355)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IBoxData](IBoxData.md).[path](IBoxData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L357)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBoxData](IBoxData.md).[windingRule](IBoxData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L358)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[closed](IBoxData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L359)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBoxData](IBoxData.md).[flow](IBoxData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L362)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxData](IBoxData.md).[padding](IBoxData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L363)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBoxData](IBoxData.md).[gap](IBoxData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L364)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBoxData](IBoxData.md).[flowAlign](IBoxData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L365)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBoxData](IBoxData.md).[flowWrap](IBoxData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L366)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBoxData](IBoxData.md).[itemBox](IBoxData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L367)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[inFlow](IBoxData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:369](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L369)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxData](IBoxData.md).[autoWidth](IBoxData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L370)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxData](IBoxData.md).[autoHeight](IBoxData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L371)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[lockRatio](IBoxData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L372)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBoxData](IBoxData.md).[autoBox](IBoxData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L373)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxData](IBoxData.md).[widthRange](IBoxData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L375)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxData](IBoxData.md).[heightRange](IBoxData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L376)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBoxData](IBoxData.md).[draggable](IBoxData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L379)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBoxData](IBoxData.md).[dragBounds](IBoxData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L380)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[editable](IBoxData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L382)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hittable](IBoxData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L384)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxData](IBoxData.md).[hitFill](IBoxData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L385)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxData](IBoxData.md).[hitStroke](IBoxData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:386](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L386)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hitBox](IBoxData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L387)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hitChildren](IBoxData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L388)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[hitSelf](IBoxData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L389)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[hitRadius](IBoxData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L390)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[button](IBoxData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:392](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L392)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBoxData](IBoxData.md).[cursor](IBoxData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L393)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[motionPath](IBoxData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L395)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[motionPrecision](IBoxData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L396)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxData](IBoxData.md).[motion](IBoxData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L398)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[motionRotation](IBoxData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L399)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[normalStyle](IBoxData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L401)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[data](IBoxData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L404)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__childBranchNumber](IBoxData.md#__childbranchnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L407)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__complex](IBoxData.md#__complex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L408)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__naturalWidth](IBoxData.md#__naturalwidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L410)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__naturalHeight](IBoxData.md#__naturalheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L411)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoWidth](IBoxData.md#__autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L413)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoHeight](IBoxData.md#__autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L414)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoSide](IBoxData.md#__autoside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L415)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__autoSize](IBoxData.md#__autosize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L416)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useNaturalRatio](IBoxData.md#__usenaturalratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L418)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isLinePath](IBoxData.md#__islinepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L419)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[__blendMode](IBoxData.md#__blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L420)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useArrow](IBoxData.md#__usearrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L422)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__useEffect](IBoxData.md#__useeffect)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__pathInputed](IBoxData.md#__pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IBoxData](IBoxData.md).[__pathForRender](IBoxData.md#__pathforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:426](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L426)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[IBoxData](IBoxData.md).[__path2DForRender](IBoxData.md#__path2dforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IBoxData](IBoxData.md).[__pathForArrow](IBoxData.md#__pathforarrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__pathForMotion](IBoxData.md#__pathformotion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L429)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[cornerRadius](IBoxData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[cornerSmoothing](IBoxData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[fill](IBoxData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[borderWidth](IBoxData.md#borderwidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[borderRadius](IBoxData.md#borderradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[stroke](IBoxData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:70](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L70)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBoxData](IBoxData.md).[strokeAlign](IBoxData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[strokeWidth](IBoxData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[strokeWidths](IBoxData.md#strokewidths)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[strokeWidthFixed](IBoxData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBoxData](IBoxData.md).[strokeCap](IBoxData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBoxData](IBoxData.md).[strokeJoin](IBoxData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

[IBoxData](IBoxData.md).[dashPattern](IBoxData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[dashOffset](IBoxData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[miterLimit](IBoxData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L80)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBoxData](IBoxData.md).[startArrow](IBoxData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:82](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L82)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBoxData](IBoxData.md).[endArrow](IBoxData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:83](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L83)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[fontFamily](IBoxData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L130)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[fontSize](IBoxData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L131)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IBoxData](IBoxData.md).[fontWeight](IBoxData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L132)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[italic](IBoxData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L133)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IBoxData](IBoxData.md).[textCase](IBoxData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L134)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IBoxData](IBoxData.md).[textDecoration](IBoxData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:135](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L135)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[letterSpacing](IBoxData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L136)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[lineHeight](IBoxData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L137)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[paraIndent](IBoxData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L139)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[paraSpacing](IBoxData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L140)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IBoxData](IBoxData.md).[writingMode](IBoxData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L142)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IBoxData](IBoxData.md).[textAlign](IBoxData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:143](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L143)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IBoxData](IBoxData.md).[verticalAlign](IBoxData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L144)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[autoSizeAlign](IBoxData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L145)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IBoxData](IBoxData.md).[textWrap](IBoxData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:147](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L147)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[textOverflow](IBoxData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:148](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L148)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[shadow](IBoxData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L167)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

[IBoxData](IBoxData.md).[innerShadow](IBoxData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L168)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[blur](IBoxData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:169](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L169)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[backgroundBlur](IBoxData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:170](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L170)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[grayscale](IBoxData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:171](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L171)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBoxData](IBoxData.md).[overflow](IBoxData.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:337](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L337)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[resizeChildren](IBoxData.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:338](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L338)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[textBox](IBoxData.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:339](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L339)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxData](IBoxData.md).[animation](IBoxData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L434)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxData](IBoxData.md).[animationOut](IBoxData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L435)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxData](IBoxData.md).[transition](IBoxData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L437)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxData](IBoxData.md).[transitionOut](IBoxData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L438)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBoxData](IBoxData.md).[states](IBoxData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L440)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[state](IBoxData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L441)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[hoverStyle](IBoxData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L443)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[pressStyle](IBoxData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L444)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[focusStyle](IBoxData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L445)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[selectedStyle](IBoxData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L446)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[disabledStyle](IBoxData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L447)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxData](IBoxData.md).[placeholderStyle](IBoxData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L448)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBoxData](IBoxData.md).[scale](IBoxData.md#scale)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L457)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isFills](IBoxData.md#__isfills)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L460)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isStrokes](IBoxData.md#__isstrokes)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L461)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Inherited from

[IBoxData](IBoxData.md).[__strokeWidth](IBoxData.md#__strokewidth)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L463)

___

### \_\_hasStroke

• `Readonly` **\_\_hasStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__hasStroke](IBoxData.md#__hasstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L464)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__pixelFill](IBoxData.md#__pixelfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L467)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__pixelStroke](IBoxData.md#__pixelstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L468)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isHitPixel](IBoxData.md#__ishitpixel)

#### Defined in

[ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L470)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isCanvas](IBoxData.md#__iscanvas)

#### Defined in

[ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L471)

___

### \_\_opacityFill

• `Optional` **\_\_opacityFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__opacityFill](IBoxData.md#__opacityfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:473](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L473)

___

### \_\_opacityStroke

• `Optional` **\_\_opacityStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__opacityStroke](IBoxData.md#__opacitystroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:474](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L474)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__drawAfterFill](IBoxData.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:476](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L476)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__clipAfterFill](IBoxData.md#__clipafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:477](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L477)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__hasSurface](IBoxData.md#__hassurface)

#### Defined in

[ui/packages/interface/src/IUI.ts:478](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L478)

___

### \_\_isOverflow

• `Optional` **\_\_isOverflow**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__isOverflow](IBoxData.md#__isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:480](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L480)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__blendLayer](IBoxData.md#__blendlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L481)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__boxStroke](IBoxData.md#__boxstroke)

#### Defined in

[ui/packages/interface/src/IUI.ts:483](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L483)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Inherited from

[IBoxData](IBoxData.md).[__font](IBoxData.md#__font)

#### Defined in

[ui/packages/interface/src/IUI.ts:486](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L486)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Inherited from

[IBoxData](IBoxData.md).[__textDrawData](IBoxData.md#__textdrawdata)

#### Defined in

[ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L487)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Inherited from

[IBoxData](IBoxData.md).[__needComputePaint](IBoxData.md#__needcomputepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L489)

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

[IBoxData](IBoxData.md).[__get](IBoxData.md#__get)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IBoxData](IBoxData.md).[__getData](IBoxData.md#__getdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L11)

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

[IBoxData](IBoxData.md).[__setInput](IBoxData.md#__setinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L13)

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

[IBoxData](IBoxData.md).[__getInput](IBoxData.md#__getinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L14)

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

[IBoxData](IBoxData.md).[__removeInput](IBoxData.md#__removeinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L15)

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

[IBoxData](IBoxData.md).[__getInputData](IBoxData.md#__getinputdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L16)

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

[IBoxData](IBoxData.md).[__setMiddle](IBoxData.md#__setmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L18)

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

[IBoxData](IBoxData.md).[__getMiddle](IBoxData.md#__getmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[destroy](IBoxData.md#destroy)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__checkSingle](IBoxData.md#__checksingle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__removeNaturalSize](IBoxData.md#__removenaturalsize)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Inherited from

[IBoxData](IBoxData.md).[__computePaint](IBoxData.md#__computepaint)

#### Defined in

[ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L490)
