# Interface: IUIData

## Hierarchy

- `IUIAttrData`

- `IUIComputedData`

- [`ILeafData`](ILeafData.md)

  ↳ **`IUIData`**

  ↳↳ [`ILineData`](ILineData.md)

  ↳↳ [`IRectData`](IRectData.md)

  ↳↳ [`IEllipseData`](IEllipseData.md)

  ↳↳ [`IPolygonData`](IPolygonData.md)

  ↳↳ [`IStarData`](IStarData.md)

  ↳↳ [`IPathData`](IPathData.md)

  ↳↳ [`ITextData`](ITextData.md)

  ↳↳ [`IGroupData`](IGroupData.md)

## Implemented by

- [`UIData`](../classes/UIData.md)

## Table of contents

### Properties

- [\_\_leaf](IUIData.md#__leaf)
- [\_\_input](IUIData.md#__input)
- [\_\_middle](IUIData.md#__middle)
- [\_\_single](IUIData.md#__single)
- [\_\_hasMultiPaint](IUIData.md#__hasmultipaint)
- [id](IUIData.md#id)
- [name](IUIData.md#name)
- [className](IUIData.md#classname)
- [blendMode](IUIData.md#blendmode)
- [opacity](IUIData.md#opacity)
- [visible](IUIData.md#visible)
- [selected](IUIData.md#selected)
- [disabled](IUIData.md#disabled)
- [locked](IUIData.md#locked)
- [zIndex](IUIData.md#zindex)
- [mask](IUIData.md#mask)
- [eraser](IUIData.md#eraser)
- [x](IUIData.md#x)
- [y](IUIData.md#y)
- [width](IUIData.md#width)
- [height](IUIData.md#height)
- [scaleX](IUIData.md#scalex)
- [scaleY](IUIData.md#scaley)
- [rotation](IUIData.md#rotation)
- [skewX](IUIData.md#skewx)
- [skewY](IUIData.md#skewy)
- [offsetX](IUIData.md#offsetx)
- [offsetY](IUIData.md#offsety)
- [scrollX](IUIData.md#scrollx)
- [scrollY](IUIData.md#scrolly)
- [origin](IUIData.md#origin)
- [around](IUIData.md#around)
- [lazy](IUIData.md#lazy)
- [pixelRatio](IUIData.md#pixelratio)
- [path](IUIData.md#path)
- [windingRule](IUIData.md#windingrule)
- [closed](IUIData.md#closed)
- [flow](IUIData.md#flow)
- [padding](IUIData.md#padding)
- [gap](IUIData.md#gap)
- [flowAlign](IUIData.md#flowalign)
- [flowWrap](IUIData.md#flowwrap)
- [itemBox](IUIData.md#itembox)
- [inFlow](IUIData.md#inflow)
- [autoWidth](IUIData.md#autowidth)
- [autoHeight](IUIData.md#autoheight)
- [lockRatio](IUIData.md#lockratio)
- [autoBox](IUIData.md#autobox)
- [widthRange](IUIData.md#widthrange)
- [heightRange](IUIData.md#heightrange)
- [draggable](IUIData.md#draggable)
- [dragBounds](IUIData.md#dragbounds)
- [editable](IUIData.md#editable)
- [hittable](IUIData.md#hittable)
- [hitFill](IUIData.md#hitfill)
- [hitStroke](IUIData.md#hitstroke)
- [hitBox](IUIData.md#hitbox)
- [hitChildren](IUIData.md#hitchildren)
- [hitSelf](IUIData.md#hitself)
- [hitRadius](IUIData.md#hitradius)
- [button](IUIData.md#button)
- [cursor](IUIData.md#cursor)
- [motionPath](IUIData.md#motionpath)
- [motionPrecision](IUIData.md#motionprecision)
- [motion](IUIData.md#motion)
- [motionRotation](IUIData.md#motionrotation)
- [normalStyle](IUIData.md#normalstyle)
- [data](IUIData.md#data)
- [\_\_childBranchNumber](IUIData.md#__childbranchnumber)
- [\_\_complex](IUIData.md#__complex)
- [\_\_naturalWidth](IUIData.md#__naturalwidth)
- [\_\_naturalHeight](IUIData.md#__naturalheight)
- [\_\_autoWidth](IUIData.md#__autowidth)
- [\_\_autoHeight](IUIData.md#__autoheight)
- [\_\_autoSide](IUIData.md#__autoside)
- [\_\_autoSize](IUIData.md#__autosize)
- [\_\_useNaturalRatio](IUIData.md#__usenaturalratio)
- [\_\_isLinePath](IUIData.md#__islinepath)
- [\_\_blendMode](IUIData.md#__blendmode)
- [\_\_useArrow](IUIData.md#__usearrow)
- [\_\_useEffect](IUIData.md#__useeffect)
- [\_\_pathInputed](IUIData.md#__pathinputed)
- [\_\_pathForRender](IUIData.md#__pathforrender)
- [\_\_path2DForRender](IUIData.md#__path2dforrender)
- [\_\_pathForArrow](IUIData.md#__pathforarrow)
- [\_\_pathForMotion](IUIData.md#__pathformotion)
- [cornerRadius](IUIData.md#cornerradius)
- [cornerSmoothing](IUIData.md#cornersmoothing)
- [fill](IUIData.md#fill)
- [borderWidth](IUIData.md#borderwidth)
- [borderRadius](IUIData.md#borderradius)
- [stroke](IUIData.md#stroke)
- [strokeAlign](IUIData.md#strokealign)
- [strokeWidth](IUIData.md#strokewidth)
- [strokeWidths](IUIData.md#strokewidths)
- [strokeWidthFixed](IUIData.md#strokewidthfixed)
- [strokeCap](IUIData.md#strokecap)
- [strokeJoin](IUIData.md#strokejoin)
- [dashPattern](IUIData.md#dashpattern)
- [dashOffset](IUIData.md#dashoffset)
- [miterLimit](IUIData.md#miterlimit)
- [startArrow](IUIData.md#startarrow)
- [endArrow](IUIData.md#endarrow)
- [fontFamily](IUIData.md#fontfamily)
- [fontSize](IUIData.md#fontsize)
- [fontWeight](IUIData.md#fontweight)
- [italic](IUIData.md#italic)
- [textCase](IUIData.md#textcase)
- [textDecoration](IUIData.md#textdecoration)
- [letterSpacing](IUIData.md#letterspacing)
- [lineHeight](IUIData.md#lineheight)
- [paraIndent](IUIData.md#paraindent)
- [paraSpacing](IUIData.md#paraspacing)
- [writingMode](IUIData.md#writingmode)
- [textAlign](IUIData.md#textalign)
- [verticalAlign](IUIData.md#verticalalign)
- [autoSizeAlign](IUIData.md#autosizealign)
- [textWrap](IUIData.md#textwrap)
- [textOverflow](IUIData.md#textoverflow)
- [shadow](IUIData.md#shadow)
- [innerShadow](IUIData.md#innershadow)
- [blur](IUIData.md#blur)
- [backgroundBlur](IUIData.md#backgroundblur)
- [grayscale](IUIData.md#grayscale)
- [animation](IUIData.md#animation)
- [animationOut](IUIData.md#animationout)
- [transition](IUIData.md#transition)
- [transitionOut](IUIData.md#transitionout)
- [states](IUIData.md#states)
- [state](IUIData.md#state)
- [hoverStyle](IUIData.md#hoverstyle)
- [pressStyle](IUIData.md#pressstyle)
- [focusStyle](IUIData.md#focusstyle)
- [selectedStyle](IUIData.md#selectedstyle)
- [disabledStyle](IUIData.md#disabledstyle)
- [placeholderStyle](IUIData.md#placeholderstyle)
- [scale](IUIData.md#scale)
- [\_\_isFills](IUIData.md#__isfills)
- [\_\_isStrokes](IUIData.md#__isstrokes)
- [\_\_strokeWidth](IUIData.md#__strokewidth)
- [\_\_hasStroke](IUIData.md#__hasstroke)
- [\_\_pixelFill](IUIData.md#__pixelfill)
- [\_\_pixelStroke](IUIData.md#__pixelstroke)
- [\_\_isHitPixel](IUIData.md#__ishitpixel)
- [\_\_isCanvas](IUIData.md#__iscanvas)
- [\_\_opacityFill](IUIData.md#__opacityfill)
- [\_\_opacityStroke](IUIData.md#__opacitystroke)
- [\_\_drawAfterFill](IUIData.md#__drawafterfill)
- [\_\_clipAfterFill](IUIData.md#__clipafterfill)
- [\_\_hasSurface](IUIData.md#__hassurface)
- [\_\_isOverflow](IUIData.md#__isoverflow)
- [\_\_blendLayer](IUIData.md#__blendlayer)
- [\_\_boxStroke](IUIData.md#__boxstroke)
- [\_\_font](IUIData.md#__font)
- [\_\_textDrawData](IUIData.md#__textdrawdata)
- [\_\_needComputePaint](IUIData.md#__needcomputepaint)

### Methods

- [\_\_get](IUIData.md#__get)
- [\_\_getData](IUIData.md#__getdata)
- [\_\_setInput](IUIData.md#__setinput)
- [\_\_getInput](IUIData.md#__getinput)
- [\_\_removeInput](IUIData.md#__removeinput)
- [\_\_getInputData](IUIData.md#__getinputdata)
- [\_\_setMiddle](IUIData.md#__setmiddle)
- [\_\_getMiddle](IUIData.md#__getmiddle)
- [destroy](IUIData.md#destroy)
- [\_\_checkSingle](IUIData.md#__checksingle)
- [\_\_removeNaturalSize](IUIData.md#__removenaturalsize)
- [\_\_computePaint](IUIData.md#__computepaint)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeafData](ILeafData.md).[__leaf](ILeafData.md#__leaf)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[__input](ILeafData.md#__input)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[__middle](ILeafData.md#__middle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__single](ILeafData.md#__single)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__hasMultiPaint](ILeafData.md#__hasmultipaint)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:31](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L31)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[id](ILeafData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L315)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[name](ILeafData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:316](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L316)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[className](ILeafData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L317)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeafData](ILeafData.md).[blendMode](ILeafData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:319](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L319)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[opacity](ILeafData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L320)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeafData](ILeafData.md).[visible](ILeafData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:321](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L321)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[selected](ILeafData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:322](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L322)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[disabled](ILeafData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L323)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[locked](ILeafData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:324](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L324)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[zIndex](ILeafData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:325](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L325)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeafData](ILeafData.md).[mask](ILeafData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:327](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L327)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeafData](ILeafData.md).[eraser](ILeafData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:328](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L328)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[x](ILeafData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L331)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[y](ILeafData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L332)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[width](ILeafData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L333)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[height](ILeafData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:334](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L334)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scaleX](ILeafData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L335)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scaleY](ILeafData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L336)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[rotation](ILeafData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L337)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[skewX](ILeafData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L338)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[skewY](ILeafData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L339)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[offsetX](ILeafData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L341)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[offsetY](ILeafData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:342](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L342)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scrollX](ILeafData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L343)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[scrollY](ILeafData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L344)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafData](ILeafData.md).[origin](ILeafData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L346)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafData](ILeafData.md).[around](ILeafData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L347)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[lazy](ILeafData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L349)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[pixelRatio](ILeafData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L350)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafData](ILeafData.md).[path](ILeafData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L352)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeafData](ILeafData.md).[windingRule](ILeafData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L353)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[closed](ILeafData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L354)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeafData](ILeafData.md).[flow](ILeafData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L357)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafData](ILeafData.md).[padding](ILeafData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L358)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeafData](ILeafData.md).[gap](ILeafData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L359)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeafData](ILeafData.md).[flowAlign](ILeafData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L360)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeafData](ILeafData.md).[flowWrap](ILeafData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L361)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeafData](ILeafData.md).[itemBox](ILeafData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L362)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[inFlow](ILeafData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L364)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafData](ILeafData.md).[autoWidth](ILeafData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L365)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafData](ILeafData.md).[autoHeight](ILeafData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L366)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[lockRatio](ILeafData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L367)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeafData](ILeafData.md).[autoBox](ILeafData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L368)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafData](ILeafData.md).[widthRange](ILeafData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L370)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafData](ILeafData.md).[heightRange](ILeafData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L371)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeafData](ILeafData.md).[draggable](ILeafData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L374)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafData](ILeafData.md).[dragBounds](ILeafData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L375)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[editable](ILeafData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L377)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hittable](ILeafData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L379)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafData](ILeafData.md).[hitFill](ILeafData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L380)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafData](ILeafData.md).[hitStroke](ILeafData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L381)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hitBox](ILeafData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L382)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hitChildren](ILeafData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L383)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[hitSelf](ILeafData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L384)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[hitRadius](ILeafData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L385)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[button](ILeafData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L387)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeafData](ILeafData.md).[cursor](ILeafData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L388)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[motionPath](ILeafData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L390)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[motionPrecision](ILeafData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L391)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeafData](ILeafData.md).[motion](ILeafData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L393)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[motionRotation](ILeafData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L394)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[normalStyle](ILeafData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L396)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[data](ILeafData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L399)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__childBranchNumber](ILeafData.md#__childbranchnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:402](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L402)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__complex](ILeafData.md#__complex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L403)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__naturalWidth](ILeafData.md#__naturalwidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L405)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__naturalHeight](ILeafData.md#__naturalheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L406)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoWidth](ILeafData.md#__autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L408)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoHeight](ILeafData.md#__autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L409)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoSide](ILeafData.md#__autoside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L410)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__autoSize](ILeafData.md#__autosize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L411)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useNaturalRatio](ILeafData.md#__usenaturalratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L413)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__isLinePath](ILeafData.md#__islinepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L414)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[ILeafData](ILeafData.md).[__blendMode](ILeafData.md#__blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L415)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useArrow](ILeafData.md#__usearrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L417)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[ILeafData](ILeafData.md).[__useEffect](ILeafData.md#__useeffect)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L418)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[ILeafData](ILeafData.md).[__pathInputed](ILeafData.md#__pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L420)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafData](ILeafData.md).[__pathForRender](ILeafData.md#__pathforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:421](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L421)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[ILeafData](ILeafData.md).[__path2DForRender](ILeafData.md#__path2dforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L422)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafData](ILeafData.md).[__pathForArrow](ILeafData.md#__pathforarrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeafData](ILeafData.md).[__pathForMotion](ILeafData.md#__pathformotion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L424)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

#### Inherited from

IUIComputedData.cornerRadius

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:17](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L17)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

IUIComputedData.cornerSmoothing

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:18](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L18)

___

### fill

• `Optional` **fill**: `string` \| [`ILeafPaint`](ILeafPaint.md)[]

#### Inherited from

IUIComputedData.fill

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:29](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L29)

___

### borderWidth

• `Optional` **borderWidth**: `number` \| `number`[]

#### Inherited from

IUIComputedData.borderWidth

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:34](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L34)

___

### borderRadius

• `Optional` **borderRadius**: `number` \| `number`[]

#### Inherited from

IUIComputedData.borderRadius

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:35](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L35)

___

### stroke

• `Optional` **stroke**: `string` \| [`ILeafStrokePaint`](ILeafStrokePaint.md)[]

#### Inherited from

IUIComputedData.stroke

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:70](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L70)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

IUIComputedData.strokeAlign

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:72](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Inherited from

IUIComputedData.strokeWidth

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:73](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L73)

___

### strokeWidths

• `Optional` **strokeWidths**: `number`[]

#### Inherited from

IUIComputedData.strokeWidths

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:74](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L74)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

IUIComputedData.strokeWidthFixed

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:75](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L75)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

IUIComputedData.strokeCap

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:76](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L76)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

IUIComputedData.strokeJoin

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:77](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L77)

___

### dashPattern

• `Optional` **dashPattern**: `number`[]

#### Inherited from

IUIComputedData.dashPattern

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:78](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L78)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

IUIComputedData.dashOffset

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:79](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L79)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

IUIComputedData.miterLimit

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:80](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L80)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

IUIComputedData.startArrow

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:82](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L82)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

IUIComputedData.endArrow

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:83](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L83)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

IUIComputedData.fontFamily

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:130](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L130)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

IUIComputedData.fontSize

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:131](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L131)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

IUIComputedData.fontWeight

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:132](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L132)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

IUIComputedData.italic

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:133](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L133)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

IUIComputedData.textCase

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:134](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L134)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

IUIComputedData.textDecoration

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:135](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L135)

___

### letterSpacing

• `Optional` **letterSpacing**: `number`

#### Inherited from

IUIComputedData.letterSpacing

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:136](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L136)

___

### lineHeight

• `Optional` **lineHeight**: `number`

#### Inherited from

IUIComputedData.lineHeight

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:137](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L137)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

IUIComputedData.paraIndent

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:139](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L139)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

IUIComputedData.paraSpacing

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:140](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L140)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

IUIComputedData.writingMode

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:142](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L142)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

IUIComputedData.textAlign

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:143](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L143)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

IUIComputedData.verticalAlign

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:144](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L144)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

IUIComputedData.autoSizeAlign

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:145](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L145)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

IUIComputedData.textWrap

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:147](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L147)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

IUIComputedData.textOverflow

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:148](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L148)

___

### shadow

• `Optional` **shadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

IUIComputedData.shadow

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:167](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L167)

___

### innerShadow

• `Optional` **innerShadow**: [`ILeafShadowEffect`](ILeafShadowEffect.md)[]

#### Inherited from

IUIComputedData.innerShadow

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:168](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L168)

___

### blur

• `Optional` **blur**: `number`

#### Inherited from

IUIComputedData.blur

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:169](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L169)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number`

#### Inherited from

IUIComputedData.backgroundBlur

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:170](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L170)

___

### grayscale

• `Optional` **grayscale**: `number`

#### Inherited from

IUIComputedData.grayscale

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:171](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/ICommonAttr.ts#L171)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

IUIAttrData.animation

#### Defined in

[ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L434)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

IUIAttrData.animationOut

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L435)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

IUIAttrData.transition

#### Defined in

[ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L437)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

IUIAttrData.transitionOut

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L438)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

IUIAttrData.states

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L440)

___

### state

• `Optional` **state**: `string`

#### Inherited from

IUIAttrData.state

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L441)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.hoverStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L443)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.pressStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L444)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.focusStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L445)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.selectedStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L446)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.disabledStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L447)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.placeholderStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L448)

___

### scale

• `Readonly` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L457)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L460)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L461)

___

### \_\_strokeWidth

• `Readonly` **\_\_strokeWidth**: `number`

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L463)

___

### \_\_hasStroke

• `Readonly` **\_\_hasStroke**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L464)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L467)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L468)

___

### \_\_isHitPixel

• `Optional` **\_\_isHitPixel**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L470)

___

### \_\_isCanvas

• `Optional` **\_\_isCanvas**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L471)

___

### \_\_opacityFill

• `Optional` **\_\_opacityFill**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:473](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L473)

___

### \_\_opacityStroke

• `Optional` **\_\_opacityStroke**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:474](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L474)

___

### \_\_drawAfterFill

• `Optional` **\_\_drawAfterFill**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:476](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L476)

___

### \_\_clipAfterFill

• `Optional` `Readonly` **\_\_clipAfterFill**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:477](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L477)

___

### \_\_hasSurface

• `Optional` `Readonly` **\_\_hasSurface**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:478](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L478)

___

### \_\_isOverflow

• `Optional` **\_\_isOverflow**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:480](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L480)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:481](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L481)

___

### \_\_boxStroke

• `Optional` **\_\_boxStroke**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:483](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L483)

___

### \_\_font

• `Optional` **\_\_font**: `string`

#### Defined in

[ui/packages/interface/src/IUI.ts:486](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L486)

___

### \_\_textDrawData

• `Optional` **\_\_textDrawData**: [`ITextDrawData`](ITextDrawData.md)

#### Defined in

[ui/packages/interface/src/IUI.ts:487](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L487)

___

### \_\_needComputePaint

• `Optional` **\_\_needComputePaint**: `boolean`

#### Defined in

[ui/packages/interface/src/IUI.ts:489](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L489)

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

[ILeafData](ILeafData.md).[__get](ILeafData.md#__get)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[ILeafData](ILeafData.md).[__getData](ILeafData.md#__getdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L11)

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

[ILeafData](ILeafData.md).[__setInput](ILeafData.md#__setinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L13)

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

[ILeafData](ILeafData.md).[__getInput](ILeafData.md#__getinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L14)

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

[ILeafData](ILeafData.md).[__removeInput](ILeafData.md#__removeinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L15)

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

[ILeafData](ILeafData.md).[__getInputData](ILeafData.md#__getinputdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L16)

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

[ILeafData](ILeafData.md).[__setMiddle](ILeafData.md#__setmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L18)

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

[ILeafData](ILeafData.md).[__getMiddle](ILeafData.md#__getmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafData](ILeafData.md).[destroy](ILeafData.md#destroy)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafData](ILeafData.md).[__checkSingle](ILeafData.md#__checksingle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafData](ILeafData.md).[__removeNaturalSize](ILeafData.md#__removenaturalsize)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/data/ILeafData.ts#L33)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/IUI.ts:490](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/IUI.ts#L490)
