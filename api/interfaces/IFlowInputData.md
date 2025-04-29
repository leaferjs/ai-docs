# Interface: IFlowInputData

## Hierarchy

- `IFlowAttrData`

- [`IBoxInputData`](IBoxInputData.md)

  ↳ **`IFlowInputData`**

## Table of contents

### Properties

- [id](IFlowInputData.md#id)
- [name](IFlowInputData.md#name)
- [className](IFlowInputData.md#classname)
- [blendMode](IFlowInputData.md#blendmode)
- [opacity](IFlowInputData.md#opacity)
- [visible](IFlowInputData.md#visible)
- [selected](IFlowInputData.md#selected)
- [disabled](IFlowInputData.md#disabled)
- [locked](IFlowInputData.md#locked)
- [zIndex](IFlowInputData.md#zindex)
- [dim](IFlowInputData.md#dim)
- [dimskip](IFlowInputData.md#dimskip)
- [mask](IFlowInputData.md#mask)
- [eraser](IFlowInputData.md#eraser)
- [filter](IFlowInputData.md#filter)
- [x](IFlowInputData.md#x)
- [y](IFlowInputData.md#y)
- [width](IFlowInputData.md#width)
- [height](IFlowInputData.md#height)
- [scaleX](IFlowInputData.md#scalex)
- [scaleY](IFlowInputData.md#scaley)
- [rotation](IFlowInputData.md#rotation)
- [skewX](IFlowInputData.md#skewx)
- [skewY](IFlowInputData.md#skewy)
- [scale](IFlowInputData.md#scale)
- [offsetX](IFlowInputData.md#offsetx)
- [offsetY](IFlowInputData.md#offsety)
- [scrollX](IFlowInputData.md#scrollx)
- [scrollY](IFlowInputData.md#scrolly)
- [origin](IFlowInputData.md#origin)
- [around](IFlowInputData.md#around)
- [lazy](IFlowInputData.md#lazy)
- [pixelRatio](IFlowInputData.md#pixelratio)
- [path](IFlowInputData.md#path)
- [windingRule](IFlowInputData.md#windingrule)
- [closed](IFlowInputData.md#closed)
- [flow](IFlowInputData.md#flow)
- [padding](IFlowInputData.md#padding)
- [gap](IFlowInputData.md#gap)
- [flowAlign](IFlowInputData.md#flowalign)
- [flowWrap](IFlowInputData.md#flowwrap)
- [itemBox](IFlowInputData.md#itembox)
- [inFlow](IFlowInputData.md#inflow)
- [autoWidth](IFlowInputData.md#autowidth)
- [autoHeight](IFlowInputData.md#autoheight)
- [lockRatio](IFlowInputData.md#lockratio)
- [autoBox](IFlowInputData.md#autobox)
- [widthRange](IFlowInputData.md#widthrange)
- [heightRange](IFlowInputData.md#heightrange)
- [draggable](IFlowInputData.md#draggable)
- [dragBounds](IFlowInputData.md#dragbounds)
- [editable](IFlowInputData.md#editable)
- [hittable](IFlowInputData.md#hittable)
- [hitFill](IFlowInputData.md#hitfill)
- [hitStroke](IFlowInputData.md#hitstroke)
- [hitBox](IFlowInputData.md#hitbox)
- [hitChildren](IFlowInputData.md#hitchildren)
- [hitSelf](IFlowInputData.md#hitself)
- [hitRadius](IFlowInputData.md#hitradius)
- [button](IFlowInputData.md#button)
- [cursor](IFlowInputData.md#cursor)
- [motionPath](IFlowInputData.md#motionpath)
- [motionPrecision](IFlowInputData.md#motionprecision)
- [motion](IFlowInputData.md#motion)
- [motionRotation](IFlowInputData.md#motionrotation)
- [normalStyle](IFlowInputData.md#normalstyle)
- [event](IFlowInputData.md#event)
- [data](IFlowInputData.md#data)
- [tag](IFlowInputData.md#tag)
- [cornerRadius](IFlowInputData.md#cornerradius)
- [cornerSmoothing](IFlowInputData.md#cornersmoothing)
- [fill](IFlowInputData.md#fill)
- [stroke](IFlowInputData.md#stroke)
- [strokeAlign](IFlowInputData.md#strokealign)
- [strokeWidth](IFlowInputData.md#strokewidth)
- [strokeWidthFixed](IFlowInputData.md#strokewidthfixed)
- [strokeCap](IFlowInputData.md#strokecap)
- [strokeJoin](IFlowInputData.md#strokejoin)
- [dashPattern](IFlowInputData.md#dashpattern)
- [dashOffset](IFlowInputData.md#dashoffset)
- [miterLimit](IFlowInputData.md#miterlimit)
- [startArrow](IFlowInputData.md#startarrow)
- [endArrow](IFlowInputData.md#endarrow)
- [fontFamily](IFlowInputData.md#fontfamily)
- [fontSize](IFlowInputData.md#fontsize)
- [fontWeight](IFlowInputData.md#fontweight)
- [italic](IFlowInputData.md#italic)
- [textCase](IFlowInputData.md#textcase)
- [textDecoration](IFlowInputData.md#textdecoration)
- [letterSpacing](IFlowInputData.md#letterspacing)
- [lineHeight](IFlowInputData.md#lineheight)
- [paraIndent](IFlowInputData.md#paraindent)
- [paraSpacing](IFlowInputData.md#paraspacing)
- [writingMode](IFlowInputData.md#writingmode)
- [textAlign](IFlowInputData.md#textalign)
- [verticalAlign](IFlowInputData.md#verticalalign)
- [autoSizeAlign](IFlowInputData.md#autosizealign)
- [textWrap](IFlowInputData.md#textwrap)
- [textOverflow](IFlowInputData.md#textoverflow)
- [shadow](IFlowInputData.md#shadow)
- [innerShadow](IFlowInputData.md#innershadow)
- [blur](IFlowInputData.md#blur)
- [backgroundBlur](IFlowInputData.md#backgroundblur)
- [grayscale](IFlowInputData.md#grayscale)
- [overflow](IFlowInputData.md#overflow)
- [resizeChildren](IFlowInputData.md#resizechildren)
- [textBox](IFlowInputData.md#textbox)
- [animation](IFlowInputData.md#animation)
- [animationOut](IFlowInputData.md#animationout)
- [transition](IFlowInputData.md#transition)
- [transitionOut](IFlowInputData.md#transitionout)
- [states](IFlowInputData.md#states)
- [state](IFlowInputData.md#state)
- [hoverStyle](IFlowInputData.md#hoverstyle)
- [pressStyle](IFlowInputData.md#pressstyle)
- [focusStyle](IFlowInputData.md#focusstyle)
- [selectedStyle](IFlowInputData.md#selectedstyle)
- [disabledStyle](IFlowInputData.md#disabledstyle)
- [placeholderStyle](IFlowInputData.md#placeholderstyle)
- [editConfig](IFlowInputData.md#editconfig)
- [editOuter](IFlowInputData.md#editouter)
- [editInner](IFlowInputData.md#editinner)
- [children](IFlowInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[id](IBoxInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[name](IBoxInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[className](IBoxInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[blendMode](IBoxInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[opacity](IBoxInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBoxInputData](IBoxInputData.md).[visible](IBoxInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[selected](IBoxInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[disabled](IBoxInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[locked](IBoxInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[zIndex](IBoxInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dim](IBoxInputData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dimskip](IBoxInputData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[mask](IBoxInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[eraser](IBoxInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[filter](IBoxInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[x](IBoxInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[y](IBoxInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[width](IBoxInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[height](IBoxInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleX](IBoxInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scaleY](IBoxInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[rotation](IBoxInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[skewX](IBoxInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[skewY](IBoxInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scale](IBoxInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[offsetX](IBoxInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[offsetY](IBoxInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollX](IBoxInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[scrollY](IBoxInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[origin](IBoxInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[around](IBoxInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lazy](IBoxInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[pixelRatio](IBoxInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[path](IBoxInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[windingRule](IBoxInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[closed](IBoxInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flow](IBoxInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[padding](IBoxInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[gap](IBoxInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flowAlign](IBoxInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[flowWrap](IBoxInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[itemBox](IBoxInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[inFlow](IBoxInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoWidth](IBoxInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoHeight](IBoxInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lockRatio](IBoxInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoBox](IBoxInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[widthRange](IBoxInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[heightRange](IBoxInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[draggable](IBoxInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dragBounds](IBoxInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editable](IBoxInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hittable](IBoxInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitFill](IBoxInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitStroke](IBoxInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitBox](IBoxInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitChildren](IBoxInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitSelf](IBoxInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hitRadius](IBoxInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[button](IBoxInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cursor](IBoxInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionPath](IBoxInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionPrecision](IBoxInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motion](IBoxInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[motionRotation](IBoxInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[normalStyle](IBoxInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[event](IBoxInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[data](IBoxInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[tag](IBoxInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/display/ILeaf.ts#L314)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cornerRadius](IBoxInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[cornerSmoothing](IBoxInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fill](IBoxInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[stroke](IBoxInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeAlign](IBoxInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeWidth](IBoxInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L58)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeWidthFixed](IBoxInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L59)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeCap](IBoxInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L60)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[strokeJoin](IBoxInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L61)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dashPattern](IBoxInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:62](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L62)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[dashOffset](IBoxInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:63](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L63)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[miterLimit](IBoxInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:64](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L64)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[startArrow](IBoxInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:66](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L66)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[endArrow](IBoxInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L67)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontFamily](IBoxInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L109)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontSize](IBoxInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L110)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[fontWeight](IBoxInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L111)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[italic](IBoxInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L112)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textCase](IBoxInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L113)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textDecoration](IBoxInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:114](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L114)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[letterSpacing](IBoxInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L115)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[lineHeight](IBoxInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L116)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[paraIndent](IBoxInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L118)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[paraSpacing](IBoxInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L119)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[writingMode](IBoxInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L121)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textAlign](IBoxInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:122](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L122)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[verticalAlign](IBoxInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L123)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[autoSizeAlign](IBoxInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L124)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textWrap](IBoxInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:126](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L126)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textOverflow](IBoxInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L127)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[shadow](IBoxInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L160)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[innerShadow](IBoxInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L161)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[blur](IBoxInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:162](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L162)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[backgroundBlur](IBoxInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:163](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L163)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[grayscale](IBoxInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/ICommonAttr.ts#L164)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[overflow](IBoxInputData.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:344](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L344)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[resizeChildren](IBoxInputData.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:345](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L345)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[textBox](IBoxInputData.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:346](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L346)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[animation](IBoxInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:439](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L439)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[animationOut](IBoxInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L440)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[transition](IBoxInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L442)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[transitionOut](IBoxInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L443)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[states](IBoxInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L445)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[state](IBoxInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L446)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[hoverStyle](IBoxInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L448)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[pressStyle](IBoxInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L449)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[focusStyle](IBoxInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L450)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[selectedStyle](IBoxInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L451)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[disabledStyle](IBoxInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L452)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[placeholderStyle](IBoxInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L453)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editConfig](IBoxInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L455)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editOuter](IBoxInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L456)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IBoxInputData](IBoxInputData.md).[editInner](IBoxInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L457)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IBoxInputData](IBoxInputData.md).[children](IBoxInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:506](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/interface/src/IUI.ts#L506)
