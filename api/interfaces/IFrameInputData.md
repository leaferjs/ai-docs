# Interface: IFrameInputData

## Hierarchy

- [`IBoxInputData`](IBoxInputData.md)

  ↳ **`IFrameInputData`**

  ↳↳ [`IUIInputData`](IUIInputData.md)

## Table of contents

### Properties

- [id](IFrameInputData.md#id)
- [name](IFrameInputData.md#name)
- [className](IFrameInputData.md#classname)
- [blendMode](IFrameInputData.md#blendmode)
- [opacity](IFrameInputData.md#opacity)
- [visible](IFrameInputData.md#visible)
- [selected](IFrameInputData.md#selected)
- [disabled](IFrameInputData.md#disabled)
- [locked](IFrameInputData.md#locked)
- [zIndex](IFrameInputData.md#zindex)
- [mask](IFrameInputData.md#mask)
- [eraser](IFrameInputData.md#eraser)
- [filter](IFrameInputData.md#filter)
- [x](IFrameInputData.md#x)
- [y](IFrameInputData.md#y)
- [width](IFrameInputData.md#width)
- [height](IFrameInputData.md#height)
- [scaleX](IFrameInputData.md#scalex)
- [scaleY](IFrameInputData.md#scaley)
- [rotation](IFrameInputData.md#rotation)
- [skewX](IFrameInputData.md#skewx)
- [skewY](IFrameInputData.md#skewy)
- [scale](IFrameInputData.md#scale)
- [offsetX](IFrameInputData.md#offsetx)
- [offsetY](IFrameInputData.md#offsety)
- [scrollX](IFrameInputData.md#scrollx)
- [scrollY](IFrameInputData.md#scrolly)
- [origin](IFrameInputData.md#origin)
- [around](IFrameInputData.md#around)
- [lazy](IFrameInputData.md#lazy)
- [pixelRatio](IFrameInputData.md#pixelratio)
- [path](IFrameInputData.md#path)
- [windingRule](IFrameInputData.md#windingrule)
- [closed](IFrameInputData.md#closed)
- [flow](IFrameInputData.md#flow)
- [padding](IFrameInputData.md#padding)
- [gap](IFrameInputData.md#gap)
- [flowAlign](IFrameInputData.md#flowalign)
- [flowWrap](IFrameInputData.md#flowwrap)
- [itemBox](IFrameInputData.md#itembox)
- [inFlow](IFrameInputData.md#inflow)
- [autoWidth](IFrameInputData.md#autowidth)
- [autoHeight](IFrameInputData.md#autoheight)
- [lockRatio](IFrameInputData.md#lockratio)
- [autoBox](IFrameInputData.md#autobox)
- [widthRange](IFrameInputData.md#widthrange)
- [heightRange](IFrameInputData.md#heightrange)
- [draggable](IFrameInputData.md#draggable)
- [dragBounds](IFrameInputData.md#dragbounds)
- [editable](IFrameInputData.md#editable)
- [hittable](IFrameInputData.md#hittable)
- [hitFill](IFrameInputData.md#hitfill)
- [hitStroke](IFrameInputData.md#hitstroke)
- [hitBox](IFrameInputData.md#hitbox)
- [hitChildren](IFrameInputData.md#hitchildren)
- [hitSelf](IFrameInputData.md#hitself)
- [hitRadius](IFrameInputData.md#hitradius)
- [button](IFrameInputData.md#button)
- [cursor](IFrameInputData.md#cursor)
- [motionPath](IFrameInputData.md#motionpath)
- [motionPrecision](IFrameInputData.md#motionprecision)
- [motion](IFrameInputData.md#motion)
- [motionRotation](IFrameInputData.md#motionrotation)
- [normalStyle](IFrameInputData.md#normalstyle)
- [event](IFrameInputData.md#event)
- [data](IFrameInputData.md#data)
- [tag](IFrameInputData.md#tag)
- [noBounds](IFrameInputData.md#nobounds)
- [cornerRadius](IFrameInputData.md#cornerradius)
- [cornerSmoothing](IFrameInputData.md#cornersmoothing)
- [fill](IFrameInputData.md#fill)
- [stroke](IFrameInputData.md#stroke)
- [strokeAlign](IFrameInputData.md#strokealign)
- [strokeWidth](IFrameInputData.md#strokewidth)
- [strokeWidthFixed](IFrameInputData.md#strokewidthfixed)
- [strokeCap](IFrameInputData.md#strokecap)
- [strokeJoin](IFrameInputData.md#strokejoin)
- [dashPattern](IFrameInputData.md#dashpattern)
- [dashOffset](IFrameInputData.md#dashoffset)
- [miterLimit](IFrameInputData.md#miterlimit)
- [startArrow](IFrameInputData.md#startarrow)
- [endArrow](IFrameInputData.md#endarrow)
- [fontFamily](IFrameInputData.md#fontfamily)
- [fontSize](IFrameInputData.md#fontsize)
- [fontWeight](IFrameInputData.md#fontweight)
- [italic](IFrameInputData.md#italic)
- [textCase](IFrameInputData.md#textcase)
- [textDecoration](IFrameInputData.md#textdecoration)
- [letterSpacing](IFrameInputData.md#letterspacing)
- [lineHeight](IFrameInputData.md#lineheight)
- [paraIndent](IFrameInputData.md#paraindent)
- [paraSpacing](IFrameInputData.md#paraspacing)
- [writingMode](IFrameInputData.md#writingmode)
- [textAlign](IFrameInputData.md#textalign)
- [verticalAlign](IFrameInputData.md#verticalalign)
- [autoSizeAlign](IFrameInputData.md#autosizealign)
- [textWrap](IFrameInputData.md#textwrap)
- [textOverflow](IFrameInputData.md#textoverflow)
- [shadow](IFrameInputData.md#shadow)
- [innerShadow](IFrameInputData.md#innershadow)
- [blur](IFrameInputData.md#blur)
- [backgroundBlur](IFrameInputData.md#backgroundblur)
- [grayscale](IFrameInputData.md#grayscale)
- [overflow](IFrameInputData.md#overflow)
- [resizeChildren](IFrameInputData.md#resizechildren)
- [textBox](IFrameInputData.md#textbox)
- [animation](IFrameInputData.md#animation)
- [animationOut](IFrameInputData.md#animationout)
- [transition](IFrameInputData.md#transition)
- [transitionOut](IFrameInputData.md#transitionout)
- [states](IFrameInputData.md#states)
- [state](IFrameInputData.md#state)
- [hoverStyle](IFrameInputData.md#hoverstyle)
- [pressStyle](IFrameInputData.md#pressstyle)
- [focusStyle](IFrameInputData.md#focusstyle)
- [selectedStyle](IFrameInputData.md#selectedstyle)
- [disabledStyle](IFrameInputData.md#disabledstyle)
- [placeholderStyle](IFrameInputData.md#placeholderstyle)
- [editConfig](IFrameInputData.md#editconfig)
- [editOuter](IFrameInputData.md#editouter)
- [editInner](IFrameInputData.md#editinner)
- [children](IFrameInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[id](IBoxInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[name](IBoxInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[className](IBoxInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[blendMode](IBoxInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[opacity](IBoxInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBoxInputData](IBoxInputData.md).[visible](IBoxInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[selected](IBoxInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[disabled](IBoxInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[locked](IBoxInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[zIndex](IBoxInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[mask](IBoxInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[eraser](IBoxInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[filter](IBoxInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[x](IBoxInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[y](IBoxInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[width](IBoxInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[height](IBoxInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleX](IBoxInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleY](IBoxInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[rotation](IBoxInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[skewX](IBoxInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[skewY](IBoxInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scale](IBoxInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[offsetX](IBoxInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[offsetY](IBoxInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollX](IBoxInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollY](IBoxInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[origin](IBoxInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[around](IBoxInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lazy](IBoxInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[pixelRatio](IBoxInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[path](IBoxInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[windingRule](IBoxInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[closed](IBoxInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flow](IBoxInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[padding](IBoxInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[gap](IBoxInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flowAlign](IBoxInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flowWrap](IBoxInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[itemBox](IBoxInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[inFlow](IBoxInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoWidth](IBoxInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoHeight](IBoxInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lockRatio](IBoxInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoBox](IBoxInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[widthRange](IBoxInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[heightRange](IBoxInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[draggable](IBoxInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dragBounds](IBoxInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editable](IBoxInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hittable](IBoxInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitFill](IBoxInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitStroke](IBoxInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitBox](IBoxInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitChildren](IBoxInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitSelf](IBoxInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitRadius](IBoxInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[button](IBoxInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cursor](IBoxInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionPath](IBoxInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionPrecision](IBoxInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motion](IBoxInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionRotation](IBoxInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[normalStyle](IBoxInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[event](IBoxInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[data](IBoxInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L305)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[tag](IBoxInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L309)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[noBounds](IBoxInputData.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L314)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cornerRadius](IBoxInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cornerSmoothing](IBoxInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fill](IBoxInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[stroke](IBoxInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeAlign](IBoxInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeWidth](IBoxInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L58)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeWidthFixed](IBoxInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L59)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeCap](IBoxInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L60)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeJoin](IBoxInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L61)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dashPattern](IBoxInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:62](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L62)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dashOffset](IBoxInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:63](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L63)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[miterLimit](IBoxInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:64](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L64)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[startArrow](IBoxInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:66](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L66)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[endArrow](IBoxInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L67)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontFamily](IBoxInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L109)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontSize](IBoxInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L110)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontWeight](IBoxInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L111)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[italic](IBoxInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L112)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textCase](IBoxInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L113)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textDecoration](IBoxInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:114](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L114)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[letterSpacing](IBoxInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L115)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lineHeight](IBoxInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L116)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[paraIndent](IBoxInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L118)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[paraSpacing](IBoxInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L119)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[writingMode](IBoxInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L121)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textAlign](IBoxInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:122](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L122)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[verticalAlign](IBoxInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L123)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoSizeAlign](IBoxInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L124)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textWrap](IBoxInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:126](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L126)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textOverflow](IBoxInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L127)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[shadow](IBoxInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L160)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[innerShadow](IBoxInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L161)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[blur](IBoxInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:162](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L162)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[backgroundBlur](IBoxInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:163](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L163)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[grayscale](IBoxInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L164)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[overflow](IBoxInputData.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:338](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L338)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[resizeChildren](IBoxInputData.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:339](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L339)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textBox](IBoxInputData.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:340](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L340)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[animation](IBoxInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:432](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L432)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[animationOut](IBoxInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:433](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L433)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[transition](IBoxInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L435)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[transitionOut](IBoxInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:436](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L436)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[states](IBoxInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L438)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[state](IBoxInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:439](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L439)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hoverStyle](IBoxInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L441)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[pressStyle](IBoxInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L442)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[focusStyle](IBoxInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L443)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[selectedStyle](IBoxInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L444)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[disabledStyle](IBoxInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L445)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[placeholderStyle](IBoxInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L446)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editConfig](IBoxInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L448)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editOuter](IBoxInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L449)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editInner](IBoxInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L450)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[children](IBoxInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:499](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L499)
