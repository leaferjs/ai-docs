# Interface: IUIJSONData

## Hierarchy

- [`IUIInputData`](IUIInputData.md)

  ↳ **`IUIJSONData`**

## Table of contents

### Properties

- [id](IUIJSONData.md#id)
- [name](IUIJSONData.md#name)
- [className](IUIJSONData.md#classname)
- [blendMode](IUIJSONData.md#blendmode)
- [opacity](IUIJSONData.md#opacity)
- [visible](IUIJSONData.md#visible)
- [selected](IUIJSONData.md#selected)
- [disabled](IUIJSONData.md#disabled)
- [locked](IUIJSONData.md#locked)
- [zIndex](IUIJSONData.md#zindex)
- [dim](IUIJSONData.md#dim)
- [dimskip](IUIJSONData.md#dimskip)
- [mask](IUIJSONData.md#mask)
- [eraser](IUIJSONData.md#eraser)
- [filter](IUIJSONData.md#filter)
- [x](IUIJSONData.md#x)
- [y](IUIJSONData.md#y)
- [width](IUIJSONData.md#width)
- [height](IUIJSONData.md#height)
- [scaleX](IUIJSONData.md#scalex)
- [scaleY](IUIJSONData.md#scaley)
- [rotation](IUIJSONData.md#rotation)
- [skewX](IUIJSONData.md#skewx)
- [skewY](IUIJSONData.md#skewy)
- [scale](IUIJSONData.md#scale)
- [offsetX](IUIJSONData.md#offsetx)
- [offsetY](IUIJSONData.md#offsety)
- [scrollX](IUIJSONData.md#scrollx)
- [scrollY](IUIJSONData.md#scrolly)
- [origin](IUIJSONData.md#origin)
- [around](IUIJSONData.md#around)
- [lazy](IUIJSONData.md#lazy)
- [pixelRatio](IUIJSONData.md#pixelratio)
- [path](IUIJSONData.md#path)
- [windingRule](IUIJSONData.md#windingrule)
- [closed](IUIJSONData.md#closed)
- [flow](IUIJSONData.md#flow)
- [padding](IUIJSONData.md#padding)
- [gap](IUIJSONData.md#gap)
- [flowAlign](IUIJSONData.md#flowalign)
- [flowWrap](IUIJSONData.md#flowwrap)
- [itemBox](IUIJSONData.md#itembox)
- [inFlow](IUIJSONData.md#inflow)
- [autoWidth](IUIJSONData.md#autowidth)
- [autoHeight](IUIJSONData.md#autoheight)
- [lockRatio](IUIJSONData.md#lockratio)
- [autoBox](IUIJSONData.md#autobox)
- [widthRange](IUIJSONData.md#widthrange)
- [heightRange](IUIJSONData.md#heightrange)
- [draggable](IUIJSONData.md#draggable)
- [dragBounds](IUIJSONData.md#dragbounds)
- [editable](IUIJSONData.md#editable)
- [hittable](IUIJSONData.md#hittable)
- [hitFill](IUIJSONData.md#hitfill)
- [hitStroke](IUIJSONData.md#hitstroke)
- [hitBox](IUIJSONData.md#hitbox)
- [hitChildren](IUIJSONData.md#hitchildren)
- [hitSelf](IUIJSONData.md#hitself)
- [hitRadius](IUIJSONData.md#hitradius)
- [button](IUIJSONData.md#button)
- [cursor](IUIJSONData.md#cursor)
- [motionPath](IUIJSONData.md#motionpath)
- [motionPrecision](IUIJSONData.md#motionprecision)
- [motion](IUIJSONData.md#motion)
- [motionRotation](IUIJSONData.md#motionrotation)
- [normalStyle](IUIJSONData.md#normalstyle)
- [event](IUIJSONData.md#event)
- [data](IUIJSONData.md#data)
- [tag](IUIJSONData.md#tag)
- [cornerRadius](IUIJSONData.md#cornerradius)
- [cornerSmoothing](IUIJSONData.md#cornersmoothing)
- [fill](IUIJSONData.md#fill)
- [stroke](IUIJSONData.md#stroke)
- [strokeAlign](IUIJSONData.md#strokealign)
- [strokeWidth](IUIJSONData.md#strokewidth)
- [strokeWidthFixed](IUIJSONData.md#strokewidthfixed)
- [strokeCap](IUIJSONData.md#strokecap)
- [strokeJoin](IUIJSONData.md#strokejoin)
- [dashPattern](IUIJSONData.md#dashpattern)
- [dashOffset](IUIJSONData.md#dashoffset)
- [miterLimit](IUIJSONData.md#miterlimit)
- [startArrow](IUIJSONData.md#startarrow)
- [endArrow](IUIJSONData.md#endarrow)
- [fontFamily](IUIJSONData.md#fontfamily)
- [fontSize](IUIJSONData.md#fontsize)
- [fontWeight](IUIJSONData.md#fontweight)
- [italic](IUIJSONData.md#italic)
- [textCase](IUIJSONData.md#textcase)
- [textDecoration](IUIJSONData.md#textdecoration)
- [letterSpacing](IUIJSONData.md#letterspacing)
- [lineHeight](IUIJSONData.md#lineheight)
- [paraIndent](IUIJSONData.md#paraindent)
- [paraSpacing](IUIJSONData.md#paraspacing)
- [writingMode](IUIJSONData.md#writingmode)
- [textAlign](IUIJSONData.md#textalign)
- [verticalAlign](IUIJSONData.md#verticalalign)
- [autoSizeAlign](IUIJSONData.md#autosizealign)
- [textWrap](IUIJSONData.md#textwrap)
- [textOverflow](IUIJSONData.md#textoverflow)
- [shadow](IUIJSONData.md#shadow)
- [innerShadow](IUIJSONData.md#innershadow)
- [blur](IUIJSONData.md#blur)
- [backgroundBlur](IUIJSONData.md#backgroundblur)
- [grayscale](IUIJSONData.md#grayscale)
- [toPoint](IUIJSONData.md#topoint)
- [robot](IUIJSONData.md#robot)
- [actions](IUIJSONData.md#actions)
- [action](IUIJSONData.md#action)
- [now](IUIJSONData.md#now)
- [FPS](IUIJSONData.md#fps)
- [loop](IUIJSONData.md#loop)
- [startAngle](IUIJSONData.md#startangle)
- [endAngle](IUIJSONData.md#endangle)
- [innerRadius](IUIJSONData.md#innerradius)
- [sides](IUIJSONData.md#sides)
- [points](IUIJSONData.md#points)
- [curve](IUIJSONData.md#curve)
- [corners](IUIJSONData.md#corners)
- [text](IUIJSONData.md#text)
- [placeholder](IUIJSONData.md#placeholder)
- [resizeFontSize](IUIJSONData.md#resizefontsize)
- [boxStyle](IUIJSONData.md#boxstyle)
- [textEditing](IUIJSONData.md#textediting)
- [url](IUIJSONData.md#url)
- [overflow](IUIJSONData.md#overflow)
- [resizeChildren](IUIJSONData.md#resizechildren)
- [textBox](IUIJSONData.md#textbox)
- [animation](IUIJSONData.md#animation)
- [animationOut](IUIJSONData.md#animationout)
- [transition](IUIJSONData.md#transition)
- [transitionOut](IUIJSONData.md#transitionout)
- [states](IUIJSONData.md#states)
- [state](IUIJSONData.md#state)
- [hoverStyle](IUIJSONData.md#hoverstyle)
- [pressStyle](IUIJSONData.md#pressstyle)
- [focusStyle](IUIJSONData.md#focusstyle)
- [selectedStyle](IUIJSONData.md#selectedstyle)
- [disabledStyle](IUIJSONData.md#disabledstyle)
- [placeholderStyle](IUIJSONData.md#placeholderstyle)
- [placeholderColor](IUIJSONData.md#placeholdercolor)
- [placeholderDelay](IUIJSONData.md#placeholderdelay)
- [editConfig](IUIJSONData.md#editconfig)
- [editOuter](IUIJSONData.md#editouter)
- [editInner](IUIJSONData.md#editinner)
- [children](IUIJSONData.md#children)
- [matrix](IUIJSONData.md#matrix)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[id](IUIInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[name](IUIInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[className](IUIInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUIInputData](IUIInputData.md).[blendMode](IUIInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[opacity](IUIInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUIInputData](IUIInputData.md).[visible](IUIInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[selected](IUIInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[disabled](IUIInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[locked](IUIInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[zIndex](IUIInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[dim](IUIInputData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[dimskip](IUIInputData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUIInputData](IUIInputData.md).[mask](IUIInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUIInputData](IUIInputData.md).[eraser](IUIInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[filter](IUIInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[x](IUIInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[y](IUIInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[width](IUIInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[height](IUIInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[scaleX](IUIInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[scaleY](IUIInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[rotation](IUIInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[skewX](IUIInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[skewY](IUIInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[scale](IUIInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[offsetX](IUIInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[offsetY](IUIInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[scrollX](IUIInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[scrollY](IUIInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIInputData](IUIInputData.md).[origin](IUIInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIInputData](IUIInputData.md).[around](IUIInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[lazy](IUIInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[pixelRatio](IUIInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[path](IUIInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUIInputData](IUIInputData.md).[windingRule](IUIInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[closed](IUIInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUIInputData](IUIInputData.md).[flow](IUIInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIInputData](IUIInputData.md).[padding](IUIInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[gap](IUIInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUIInputData](IUIInputData.md).[flowAlign](IUIInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUIInputData](IUIInputData.md).[flowWrap](IUIInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUIInputData](IUIInputData.md).[itemBox](IUIInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[inFlow](IUIInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIInputData](IUIInputData.md).[autoWidth](IUIInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIInputData](IUIInputData.md).[autoHeight](IUIInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[lockRatio](IUIInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[autoBox](IUIInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[widthRange](IUIInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[heightRange](IUIInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUIInputData](IUIInputData.md).[draggable](IUIInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[dragBounds](IUIInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[editable](IUIInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[hittable](IUIInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIInputData](IUIInputData.md).[hitFill](IUIInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIInputData](IUIInputData.md).[hitStroke](IUIInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[hitBox](IUIInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[hitChildren](IUIInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[hitSelf](IUIInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[hitRadius](IUIInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[button](IUIInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[cursor](IUIInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[motionPath](IUIInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[motionPrecision](IUIInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[motion](IUIInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[motionRotation](IUIInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[normalStyle](IUIInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[event](IUIInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[data](IUIInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[tag](IUIInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L314)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIInputData](IUIInputData.md).[cornerRadius](IUIInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[cornerSmoothing](IUIInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IUIInputData](IUIInputData.md).[fill](IUIInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IUIInputData](IUIInputData.md).[stroke](IUIInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUIInputData](IUIInputData.md).[strokeAlign](IUIInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIInputData](IUIInputData.md).[strokeWidth](IUIInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L58)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[strokeWidthFixed](IUIInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L59)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUIInputData](IUIInputData.md).[strokeCap](IUIInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L60)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUIInputData](IUIInputData.md).[strokeJoin](IUIInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L61)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IUIInputData](IUIInputData.md).[dashPattern](IUIInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:62](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L62)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[dashOffset](IUIInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:63](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L63)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[miterLimit](IUIInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:64](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L64)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIInputData](IUIInputData.md).[startArrow](IUIInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:66](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L66)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIInputData](IUIInputData.md).[endArrow](IUIInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L67)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[fontFamily](IUIInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L109)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[fontSize](IUIInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L110)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IUIInputData](IUIInputData.md).[fontWeight](IUIInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L111)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[italic](IUIInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L112)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IUIInputData](IUIInputData.md).[textCase](IUIInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L113)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IUIInputData](IUIInputData.md).[textDecoration](IUIInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:114](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L114)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[letterSpacing](IUIInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L115)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[lineHeight](IUIInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L116)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[paraIndent](IUIInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L118)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[paraSpacing](IUIInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L119)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IUIInputData](IUIInputData.md).[writingMode](IUIInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L121)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IUIInputData](IUIInputData.md).[textAlign](IUIInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:122](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L122)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IUIInputData](IUIInputData.md).[verticalAlign](IUIInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L123)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[autoSizeAlign](IUIInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L124)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IUIInputData](IUIInputData.md).[textWrap](IUIInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:126](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L126)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[textOverflow](IUIInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L127)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[shadow](IUIInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L160)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[innerShadow](IUIInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L161)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[blur](IUIInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:162](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L162)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[backgroundBlur](IUIInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:163](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L163)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[grayscale](IUIInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L164)

___

### toPoint

• `Optional` **toPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[toPoint](IUIInputData.md#topoint)

#### Defined in

[ui/packages/interface/src/IUI.ts:23](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L23)

___

### robot

• `Optional` **robot**: [`IRobotKeyframe`](IRobotKeyframe.md) \| [`IRobotKeyframe`](IRobotKeyframe.md)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[robot](IUIInputData.md#robot)

#### Defined in

[ui/packages/interface/src/IUI.ts:99](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L99)

___

### actions

• `Optional` **actions**: [`IRobotActions`](IRobotActions.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[actions](IUIInputData.md#actions)

#### Defined in

[ui/packages/interface/src/IUI.ts:100](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L100)

___

### action

• `Optional` **action**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[action](IUIInputData.md#action)

#### Defined in

[ui/packages/interface/src/IUI.ts:101](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L101)

___

### now

• `Optional` **now**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[now](IUIInputData.md#now)

#### Defined in

[ui/packages/interface/src/IUI.ts:102](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L102)

___

### FPS

• `Optional` **FPS**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[FPS](IUIInputData.md#fps)

#### Defined in

[ui/packages/interface/src/IUI.ts:103](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L103)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[loop](IUIInputData.md#loop)

#### Defined in

[ui/packages/interface/src/IUI.ts:104](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L104)

___

### startAngle

• `Optional` **startAngle**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[startAngle](IUIInputData.md#startangle)

#### Defined in

[ui/packages/interface/src/IUI.ts:149](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L149)

___

### endAngle

• `Optional` **endAngle**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[endAngle](IUIInputData.md#endangle)

#### Defined in

[ui/packages/interface/src/IUI.ts:150](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L150)

___

### innerRadius

• `Optional` **innerRadius**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[innerRadius](IUIInputData.md#innerradius)

#### Defined in

[ui/packages/interface/src/IUI.ts:151](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L151)

___

### sides

• `Optional` **sides**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[sides](IUIInputData.md#sides)

#### Defined in

[ui/packages/interface/src/IUI.ts:162](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L162)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[points](IUIInputData.md#points)

#### Defined in

[ui/packages/interface/src/IUI.ts:163](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L163)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[curve](IUIInputData.md#curve)

#### Defined in

[ui/packages/interface/src/IUI.ts:164](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L164)

___

### corners

• `Optional` **corners**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[corners](IUIInputData.md#corners)

#### Defined in

[ui/packages/interface/src/IUI.ts:175](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L175)

___

### text

• `Optional` **text**: `string` \| `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[text](IUIInputData.md#text)

#### Defined in

[ui/packages/interface/src/IUI.ts:210](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L210)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[placeholder](IUIInputData.md#placeholder)

#### Defined in

[ui/packages/interface/src/IUI.ts:211](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L211)

___

### resizeFontSize

• `Optional` **resizeFontSize**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[resizeFontSize](IUIInputData.md#resizefontsize)

#### Defined in

[ui/packages/interface/src/IUI.ts:213](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L213)

___

### boxStyle

• `Optional` **boxStyle**: [`IBackgroundBoxStyle`](IBackgroundBoxStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[boxStyle](IUIInputData.md#boxstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:214](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L214)

___

### textEditing

• `Optional` **textEditing**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[textEditing](IUIInputData.md#textediting)

#### Defined in

[ui/packages/interface/src/IUI.ts:215](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L215)

___

### url

• `Optional` **url**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[url](IUIInputData.md#url)

#### Defined in

[ui/packages/interface/src/IUI.ts:288](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L288)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IUIInputData](IUIInputData.md).[overflow](IUIInputData.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:347](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L347)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[resizeChildren](IUIInputData.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:348](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L348)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IUIInputData](IUIInputData.md).[textBox](IUIInputData.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:349](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L349)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[animation](IUIInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L445)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[animationOut](IUIInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L446)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIInputData](IUIInputData.md).[transition](IUIInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L448)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIInputData](IUIInputData.md).[transitionOut](IUIInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L449)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[states](IUIInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L451)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[state](IUIInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L452)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[hoverStyle](IUIInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L454)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[pressStyle](IUIInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L455)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[focusStyle](IUIInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L456)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[selectedStyle](IUIInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L457)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[disabledStyle](IUIInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L458)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[placeholderStyle](IUIInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L459)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[placeholderColor](IUIInputData.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L460)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IUIInputData](IUIInputData.md).[placeholderDelay](IUIInputData.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L461)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUIInputData](IUIInputData.md).[editConfig](IUIInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L463)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[editOuter](IUIInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L464)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUIInputData](IUIInputData.md).[editInner](IUIInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L465)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IUIInputData](IUIInputData.md).[children](IUIInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:543](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L543)

___

### matrix

• `Optional` **matrix**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[ui/packages/interface/src/IUI.ts:547](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L547)
