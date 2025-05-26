# Interface: IRobotInputData

## Hierarchy

- `IRobotAttrData`

- [`IRectInputData`](IRectInputData.md)

  ↳ **`IRobotInputData`**

  ↳↳ [`IUIInputData`](IUIInputData.md)

## Table of contents

### Properties

- [id](IRobotInputData.md#id)
- [name](IRobotInputData.md#name)
- [className](IRobotInputData.md#classname)
- [blendMode](IRobotInputData.md#blendmode)
- [opacity](IRobotInputData.md#opacity)
- [visible](IRobotInputData.md#visible)
- [selected](IRobotInputData.md#selected)
- [disabled](IRobotInputData.md#disabled)
- [locked](IRobotInputData.md#locked)
- [zIndex](IRobotInputData.md#zindex)
- [dim](IRobotInputData.md#dim)
- [dimskip](IRobotInputData.md#dimskip)
- [mask](IRobotInputData.md#mask)
- [eraser](IRobotInputData.md#eraser)
- [filter](IRobotInputData.md#filter)
- [x](IRobotInputData.md#x)
- [y](IRobotInputData.md#y)
- [width](IRobotInputData.md#width)
- [height](IRobotInputData.md#height)
- [scaleX](IRobotInputData.md#scalex)
- [scaleY](IRobotInputData.md#scaley)
- [rotation](IRobotInputData.md#rotation)
- [skewX](IRobotInputData.md#skewx)
- [skewY](IRobotInputData.md#skewy)
- [scale](IRobotInputData.md#scale)
- [offsetX](IRobotInputData.md#offsetx)
- [offsetY](IRobotInputData.md#offsety)
- [scrollX](IRobotInputData.md#scrollx)
- [scrollY](IRobotInputData.md#scrolly)
- [origin](IRobotInputData.md#origin)
- [around](IRobotInputData.md#around)
- [lazy](IRobotInputData.md#lazy)
- [pixelRatio](IRobotInputData.md#pixelratio)
- [path](IRobotInputData.md#path)
- [windingRule](IRobotInputData.md#windingrule)
- [closed](IRobotInputData.md#closed)
- [flow](IRobotInputData.md#flow)
- [padding](IRobotInputData.md#padding)
- [gap](IRobotInputData.md#gap)
- [flowAlign](IRobotInputData.md#flowalign)
- [flowWrap](IRobotInputData.md#flowwrap)
- [itemBox](IRobotInputData.md#itembox)
- [inFlow](IRobotInputData.md#inflow)
- [autoWidth](IRobotInputData.md#autowidth)
- [autoHeight](IRobotInputData.md#autoheight)
- [lockRatio](IRobotInputData.md#lockratio)
- [autoBox](IRobotInputData.md#autobox)
- [widthRange](IRobotInputData.md#widthrange)
- [heightRange](IRobotInputData.md#heightrange)
- [draggable](IRobotInputData.md#draggable)
- [dragBounds](IRobotInputData.md#dragbounds)
- [editable](IRobotInputData.md#editable)
- [hittable](IRobotInputData.md#hittable)
- [hitFill](IRobotInputData.md#hitfill)
- [hitStroke](IRobotInputData.md#hitstroke)
- [hitBox](IRobotInputData.md#hitbox)
- [hitChildren](IRobotInputData.md#hitchildren)
- [hitSelf](IRobotInputData.md#hitself)
- [hitRadius](IRobotInputData.md#hitradius)
- [button](IRobotInputData.md#button)
- [cursor](IRobotInputData.md#cursor)
- [motionPath](IRobotInputData.md#motionpath)
- [motionPrecision](IRobotInputData.md#motionprecision)
- [motion](IRobotInputData.md#motion)
- [motionRotation](IRobotInputData.md#motionrotation)
- [normalStyle](IRobotInputData.md#normalstyle)
- [event](IRobotInputData.md#event)
- [data](IRobotInputData.md#data)
- [tag](IRobotInputData.md#tag)
- [cornerRadius](IRobotInputData.md#cornerradius)
- [cornerSmoothing](IRobotInputData.md#cornersmoothing)
- [fill](IRobotInputData.md#fill)
- [stroke](IRobotInputData.md#stroke)
- [strokeAlign](IRobotInputData.md#strokealign)
- [strokeWidth](IRobotInputData.md#strokewidth)
- [strokeWidthFixed](IRobotInputData.md#strokewidthfixed)
- [strokeCap](IRobotInputData.md#strokecap)
- [strokeJoin](IRobotInputData.md#strokejoin)
- [dashPattern](IRobotInputData.md#dashpattern)
- [dashOffset](IRobotInputData.md#dashoffset)
- [miterLimit](IRobotInputData.md#miterlimit)
- [startArrow](IRobotInputData.md#startarrow)
- [endArrow](IRobotInputData.md#endarrow)
- [fontFamily](IRobotInputData.md#fontfamily)
- [fontSize](IRobotInputData.md#fontsize)
- [fontWeight](IRobotInputData.md#fontweight)
- [italic](IRobotInputData.md#italic)
- [textCase](IRobotInputData.md#textcase)
- [textDecoration](IRobotInputData.md#textdecoration)
- [letterSpacing](IRobotInputData.md#letterspacing)
- [lineHeight](IRobotInputData.md#lineheight)
- [paraIndent](IRobotInputData.md#paraindent)
- [paraSpacing](IRobotInputData.md#paraspacing)
- [writingMode](IRobotInputData.md#writingmode)
- [textAlign](IRobotInputData.md#textalign)
- [verticalAlign](IRobotInputData.md#verticalalign)
- [autoSizeAlign](IRobotInputData.md#autosizealign)
- [textWrap](IRobotInputData.md#textwrap)
- [textOverflow](IRobotInputData.md#textoverflow)
- [shadow](IRobotInputData.md#shadow)
- [innerShadow](IRobotInputData.md#innershadow)
- [blur](IRobotInputData.md#blur)
- [backgroundBlur](IRobotInputData.md#backgroundblur)
- [grayscale](IRobotInputData.md#grayscale)
- [robot](IRobotInputData.md#robot)
- [actions](IRobotInputData.md#actions)
- [action](IRobotInputData.md#action)
- [now](IRobotInputData.md#now)
- [FPS](IRobotInputData.md#fps)
- [loop](IRobotInputData.md#loop)
- [animation](IRobotInputData.md#animation)
- [animationOut](IRobotInputData.md#animationout)
- [transition](IRobotInputData.md#transition)
- [transitionOut](IRobotInputData.md#transitionout)
- [states](IRobotInputData.md#states)
- [state](IRobotInputData.md#state)
- [hoverStyle](IRobotInputData.md#hoverstyle)
- [pressStyle](IRobotInputData.md#pressstyle)
- [focusStyle](IRobotInputData.md#focusstyle)
- [selectedStyle](IRobotInputData.md#selectedstyle)
- [disabledStyle](IRobotInputData.md#disabledstyle)
- [placeholderStyle](IRobotInputData.md#placeholderstyle)
- [placeholderColor](IRobotInputData.md#placeholdercolor)
- [placeholderDelay](IRobotInputData.md#placeholderdelay)
- [editConfig](IRobotInputData.md#editconfig)
- [editOuter](IRobotInputData.md#editouter)
- [editInner](IRobotInputData.md#editinner)
- [children](IRobotInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[id](IRectInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[name](IRectInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[className](IRectInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRectInputData](IRectInputData.md).[blendMode](IRectInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[opacity](IRectInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRectInputData](IRectInputData.md).[visible](IRectInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[selected](IRectInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[disabled](IRectInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[locked](IRectInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[zIndex](IRectInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[dim](IRectInputData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[dimskip](IRectInputData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRectInputData](IRectInputData.md).[mask](IRectInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRectInputData](IRectInputData.md).[eraser](IRectInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[filter](IRectInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[x](IRectInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[y](IRectInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[width](IRectInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[height](IRectInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[scaleX](IRectInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[scaleY](IRectInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[rotation](IRectInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[skewX](IRectInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[skewY](IRectInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[scale](IRectInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[offsetX](IRectInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[offsetY](IRectInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[scrollX](IRectInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[scrollY](IRectInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectInputData](IRectInputData.md).[origin](IRectInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRectInputData](IRectInputData.md).[around](IRectInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[lazy](IRectInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[pixelRatio](IRectInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[path](IRectInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRectInputData](IRectInputData.md).[windingRule](IRectInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[closed](IRectInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRectInputData](IRectInputData.md).[flow](IRectInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectInputData](IRectInputData.md).[padding](IRectInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[gap](IRectInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRectInputData](IRectInputData.md).[flowAlign](IRectInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRectInputData](IRectInputData.md).[flowWrap](IRectInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRectInputData](IRectInputData.md).[itemBox](IRectInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[inFlow](IRectInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectInputData](IRectInputData.md).[autoWidth](IRectInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRectInputData](IRectInputData.md).[autoHeight](IRectInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[lockRatio](IRectInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[autoBox](IRectInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[widthRange](IRectInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[heightRange](IRectInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRectInputData](IRectInputData.md).[draggable](IRectInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[dragBounds](IRectInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[editable](IRectInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[hittable](IRectInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectInputData](IRectInputData.md).[hitFill](IRectInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRectInputData](IRectInputData.md).[hitStroke](IRectInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[hitBox](IRectInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[hitChildren](IRectInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[hitSelf](IRectInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[hitRadius](IRectInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[button](IRectInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[cursor](IRectInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[motionPath](IRectInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[motionPrecision](IRectInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[motion](IRectInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[motionRotation](IRectInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[normalStyle](IRectInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[event](IRectInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[data](IRectInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[tag](IRectInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L314)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectInputData](IRectInputData.md).[cornerRadius](IRectInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[cornerSmoothing](IRectInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IRectInputData](IRectInputData.md).[fill](IRectInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IRectInputData](IRectInputData.md).[stroke](IRectInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRectInputData](IRectInputData.md).[strokeAlign](IRectInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRectInputData](IRectInputData.md).[strokeWidth](IRectInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L58)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[strokeWidthFixed](IRectInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L59)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRectInputData](IRectInputData.md).[strokeCap](IRectInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L60)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRectInputData](IRectInputData.md).[strokeJoin](IRectInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L61)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IRectInputData](IRectInputData.md).[dashPattern](IRectInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:62](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L62)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[dashOffset](IRectInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L63)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[miterLimit](IRectInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:64](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L64)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectInputData](IRectInputData.md).[startArrow](IRectInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:66](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L66)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRectInputData](IRectInputData.md).[endArrow](IRectInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L67)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[fontFamily](IRectInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L109)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[fontSize](IRectInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L110)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IRectInputData](IRectInputData.md).[fontWeight](IRectInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L111)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[italic](IRectInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L112)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IRectInputData](IRectInputData.md).[textCase](IRectInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L113)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IRectInputData](IRectInputData.md).[textDecoration](IRectInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:114](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L114)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[letterSpacing](IRectInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L115)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[lineHeight](IRectInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L116)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[paraIndent](IRectInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L118)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[paraSpacing](IRectInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L119)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IRectInputData](IRectInputData.md).[writingMode](IRectInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L121)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IRectInputData](IRectInputData.md).[textAlign](IRectInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:122](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L122)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IRectInputData](IRectInputData.md).[verticalAlign](IRectInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L123)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IRectInputData](IRectInputData.md).[autoSizeAlign](IRectInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L124)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IRectInputData](IRectInputData.md).[textWrap](IRectInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:126](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L126)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[textOverflow](IRectInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L127)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[shadow](IRectInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L160)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[innerShadow](IRectInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L161)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[blur](IRectInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:162](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L162)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[backgroundBlur](IRectInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L163)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[grayscale](IRectInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L164)

___

### robot

• `Optional` **robot**: [`IRobotKeyframe`](IRobotKeyframe.md) \| [`IRobotKeyframe`](IRobotKeyframe.md)[]

#### Inherited from

IRobotAttrData.robot

#### Defined in

[ui/packages/interface/src/IUI.ts:99](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L99)

___

### actions

• `Optional` **actions**: [`IRobotActions`](IRobotActions.md)

#### Inherited from

IRobotAttrData.actions

#### Defined in

[ui/packages/interface/src/IUI.ts:100](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L100)

___

### action

• `Optional` **action**: `string`

#### Inherited from

IRobotAttrData.action

#### Defined in

[ui/packages/interface/src/IUI.ts:101](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L101)

___

### now

• `Optional` **now**: `number`

#### Inherited from

IRobotAttrData.now

#### Defined in

[ui/packages/interface/src/IUI.ts:102](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L102)

___

### FPS

• `Optional` **FPS**: `number`

#### Inherited from

IRobotAttrData.FPS

#### Defined in

[ui/packages/interface/src/IUI.ts:103](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L103)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

IRobotAttrData.loop

#### Defined in

[ui/packages/interface/src/IUI.ts:104](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L104)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[animation](IRectInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L445)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[animationOut](IRectInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L446)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectInputData](IRectInputData.md).[transition](IRectInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L448)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRectInputData](IRectInputData.md).[transitionOut](IRectInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L449)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[states](IRectInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L451)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[state](IRectInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L452)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[hoverStyle](IRectInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L454)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[pressStyle](IRectInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L455)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[focusStyle](IRectInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L456)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[selectedStyle](IRectInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L457)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[disabledStyle](IRectInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L458)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[placeholderStyle](IRectInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L459)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[placeholderColor](IRectInputData.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L460)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IRectInputData](IRectInputData.md).[placeholderDelay](IRectInputData.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L461)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRectInputData](IRectInputData.md).[editConfig](IRectInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L463)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[editOuter](IRectInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L464)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRectInputData](IRectInputData.md).[editInner](IRectInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L465)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IRectInputData](IRectInputData.md).[children](IRectInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:519](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L519)
