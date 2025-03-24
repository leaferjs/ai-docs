# Interface: IAppInputData

## Hierarchy

- [`ILeaferInputData`](ILeaferInputData.md)

  ↳ **`IAppInputData`**

## Table of contents

### Properties

- [id](IAppInputData.md#id)
- [name](IAppInputData.md#name)
- [className](IAppInputData.md#classname)
- [blendMode](IAppInputData.md#blendmode)
- [opacity](IAppInputData.md#opacity)
- [visible](IAppInputData.md#visible)
- [selected](IAppInputData.md#selected)
- [disabled](IAppInputData.md#disabled)
- [locked](IAppInputData.md#locked)
- [zIndex](IAppInputData.md#zindex)
- [mask](IAppInputData.md#mask)
- [eraser](IAppInputData.md#eraser)
- [filter](IAppInputData.md#filter)
- [x](IAppInputData.md#x)
- [y](IAppInputData.md#y)
- [width](IAppInputData.md#width)
- [height](IAppInputData.md#height)
- [scaleX](IAppInputData.md#scalex)
- [scaleY](IAppInputData.md#scaley)
- [rotation](IAppInputData.md#rotation)
- [skewX](IAppInputData.md#skewx)
- [skewY](IAppInputData.md#skewy)
- [scale](IAppInputData.md#scale)
- [offsetX](IAppInputData.md#offsetx)
- [offsetY](IAppInputData.md#offsety)
- [scrollX](IAppInputData.md#scrollx)
- [scrollY](IAppInputData.md#scrolly)
- [origin](IAppInputData.md#origin)
- [around](IAppInputData.md#around)
- [lazy](IAppInputData.md#lazy)
- [pixelRatio](IAppInputData.md#pixelratio)
- [path](IAppInputData.md#path)
- [windingRule](IAppInputData.md#windingrule)
- [closed](IAppInputData.md#closed)
- [flow](IAppInputData.md#flow)
- [padding](IAppInputData.md#padding)
- [gap](IAppInputData.md#gap)
- [flowAlign](IAppInputData.md#flowalign)
- [flowWrap](IAppInputData.md#flowwrap)
- [itemBox](IAppInputData.md#itembox)
- [inFlow](IAppInputData.md#inflow)
- [autoWidth](IAppInputData.md#autowidth)
- [autoHeight](IAppInputData.md#autoheight)
- [lockRatio](IAppInputData.md#lockratio)
- [autoBox](IAppInputData.md#autobox)
- [widthRange](IAppInputData.md#widthrange)
- [heightRange](IAppInputData.md#heightrange)
- [draggable](IAppInputData.md#draggable)
- [dragBounds](IAppInputData.md#dragbounds)
- [editable](IAppInputData.md#editable)
- [hittable](IAppInputData.md#hittable)
- [hitFill](IAppInputData.md#hitfill)
- [hitStroke](IAppInputData.md#hitstroke)
- [hitBox](IAppInputData.md#hitbox)
- [hitChildren](IAppInputData.md#hitchildren)
- [hitSelf](IAppInputData.md#hitself)
- [hitRadius](IAppInputData.md#hitradius)
- [button](IAppInputData.md#button)
- [cursor](IAppInputData.md#cursor)
- [motionPath](IAppInputData.md#motionpath)
- [motionPrecision](IAppInputData.md#motionprecision)
- [motion](IAppInputData.md#motion)
- [motionRotation](IAppInputData.md#motionrotation)
- [normalStyle](IAppInputData.md#normalstyle)
- [event](IAppInputData.md#event)
- [data](IAppInputData.md#data)
- [tag](IAppInputData.md#tag)
- [noBounds](IAppInputData.md#nobounds)
- [cornerRadius](IAppInputData.md#cornerradius)
- [cornerSmoothing](IAppInputData.md#cornersmoothing)
- [fill](IAppInputData.md#fill)
- [stroke](IAppInputData.md#stroke)
- [strokeAlign](IAppInputData.md#strokealign)
- [strokeWidth](IAppInputData.md#strokewidth)
- [strokeWidthFixed](IAppInputData.md#strokewidthfixed)
- [strokeCap](IAppInputData.md#strokecap)
- [strokeJoin](IAppInputData.md#strokejoin)
- [dashPattern](IAppInputData.md#dashpattern)
- [dashOffset](IAppInputData.md#dashoffset)
- [miterLimit](IAppInputData.md#miterlimit)
- [startArrow](IAppInputData.md#startarrow)
- [endArrow](IAppInputData.md#endarrow)
- [fontFamily](IAppInputData.md#fontfamily)
- [fontSize](IAppInputData.md#fontsize)
- [fontWeight](IAppInputData.md#fontweight)
- [italic](IAppInputData.md#italic)
- [textCase](IAppInputData.md#textcase)
- [textDecoration](IAppInputData.md#textdecoration)
- [letterSpacing](IAppInputData.md#letterspacing)
- [lineHeight](IAppInputData.md#lineheight)
- [paraIndent](IAppInputData.md#paraindent)
- [paraSpacing](IAppInputData.md#paraspacing)
- [writingMode](IAppInputData.md#writingmode)
- [textAlign](IAppInputData.md#textalign)
- [verticalAlign](IAppInputData.md#verticalalign)
- [autoSizeAlign](IAppInputData.md#autosizealign)
- [textWrap](IAppInputData.md#textwrap)
- [textOverflow](IAppInputData.md#textoverflow)
- [shadow](IAppInputData.md#shadow)
- [innerShadow](IAppInputData.md#innershadow)
- [blur](IAppInputData.md#blur)
- [backgroundBlur](IAppInputData.md#backgroundblur)
- [grayscale](IAppInputData.md#grayscale)
- [animation](IAppInputData.md#animation)
- [animationOut](IAppInputData.md#animationout)
- [transition](IAppInputData.md#transition)
- [transitionOut](IAppInputData.md#transitionout)
- [states](IAppInputData.md#states)
- [state](IAppInputData.md#state)
- [hoverStyle](IAppInputData.md#hoverstyle)
- [pressStyle](IAppInputData.md#pressstyle)
- [focusStyle](IAppInputData.md#focusstyle)
- [selectedStyle](IAppInputData.md#selectedstyle)
- [disabledStyle](IAppInputData.md#disabledstyle)
- [placeholderStyle](IAppInputData.md#placeholderstyle)
- [editConfig](IAppInputData.md#editconfig)
- [editOuter](IAppInputData.md#editouter)
- [editInner](IAppInputData.md#editinner)
- [children](IAppInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[id](ILeaferInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[name](ILeaferInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[className](ILeaferInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[blendMode](ILeaferInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[opacity](ILeaferInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[visible](ILeaferInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[selected](ILeaferInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[disabled](ILeaferInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[locked](ILeaferInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[zIndex](ILeaferInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[mask](ILeaferInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[eraser](ILeaferInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[filter](ILeaferInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[x](ILeaferInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[y](ILeaferInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[width](ILeaferInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[height](ILeaferInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[scaleX](ILeaferInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[scaleY](ILeaferInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[rotation](ILeaferInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[skewX](ILeaferInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[skewY](ILeaferInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[scale](ILeaferInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[offsetX](ILeaferInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[offsetY](ILeaferInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[scrollX](ILeaferInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[scrollY](ILeaferInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[origin](ILeaferInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[around](ILeaferInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[lazy](ILeaferInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[pixelRatio](ILeaferInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[path](ILeaferInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[windingRule](ILeaferInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[closed](ILeaferInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[flow](ILeaferInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[padding](ILeaferInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[gap](ILeaferInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[flowAlign](ILeaferInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[flowWrap](ILeaferInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[itemBox](ILeaferInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[inFlow](ILeaferInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[autoWidth](ILeaferInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[autoHeight](ILeaferInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[lockRatio](ILeaferInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[autoBox](ILeaferInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[widthRange](ILeaferInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[heightRange](ILeaferInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[draggable](ILeaferInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[dragBounds](ILeaferInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[editable](ILeaferInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hittable](ILeaferInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hitFill](ILeaferInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hitStroke](ILeaferInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hitBox](ILeaferInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hitChildren](ILeaferInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hitSelf](ILeaferInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hitRadius](ILeaferInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[button](ILeaferInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[cursor](ILeaferInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[motionPath](ILeaferInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[motionPrecision](ILeaferInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[motion](ILeaferInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[motionRotation](ILeaferInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[normalStyle](ILeaferInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[event](ILeaferInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[data](ILeaferInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L305)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[tag](ILeaferInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L309)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[noBounds](ILeaferInputData.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L314)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[cornerRadius](ILeaferInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[cornerSmoothing](ILeaferInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[fill](ILeaferInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[stroke](ILeaferInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[strokeAlign](ILeaferInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[strokeWidth](ILeaferInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L58)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[strokeWidthFixed](ILeaferInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L59)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[strokeCap](ILeaferInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L60)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[strokeJoin](ILeaferInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L61)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[dashPattern](ILeaferInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:62](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L62)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[dashOffset](ILeaferInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:63](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L63)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[miterLimit](ILeaferInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:64](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L64)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[startArrow](ILeaferInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:66](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L66)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[endArrow](ILeaferInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L67)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[fontFamily](ILeaferInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L109)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[fontSize](ILeaferInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L110)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[fontWeight](ILeaferInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L111)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[italic](ILeaferInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L112)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[textCase](ILeaferInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L113)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[textDecoration](ILeaferInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:114](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L114)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[letterSpacing](ILeaferInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L115)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[lineHeight](ILeaferInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L116)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[paraIndent](ILeaferInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L118)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[paraSpacing](ILeaferInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L119)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[writingMode](ILeaferInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L121)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[textAlign](ILeaferInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:122](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L122)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[verticalAlign](ILeaferInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L123)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[autoSizeAlign](ILeaferInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L124)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[textWrap](ILeaferInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:126](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L126)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[textOverflow](ILeaferInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L127)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[shadow](ILeaferInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L160)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[innerShadow](ILeaferInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L161)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[blur](ILeaferInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:162](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L162)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[backgroundBlur](ILeaferInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:163](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L163)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[grayscale](ILeaferInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L164)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[animation](ILeaferInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:431](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L431)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[animationOut](ILeaferInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:432](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L432)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[transition](ILeaferInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L434)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[transitionOut](ILeaferInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L435)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[states](ILeaferInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L437)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[state](ILeaferInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L438)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[hoverStyle](ILeaferInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L440)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[pressStyle](ILeaferInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L441)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[focusStyle](ILeaferInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L442)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[selectedStyle](ILeaferInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L443)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[disabledStyle](ILeaferInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L444)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[placeholderStyle](ILeaferInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L445)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[editConfig](ILeaferInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L447)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[editOuter](ILeaferInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L448)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[editInner](ILeaferInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L449)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[ILeaferInputData](ILeaferInputData.md).[children](ILeaferInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L498)
