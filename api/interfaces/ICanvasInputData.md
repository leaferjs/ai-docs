# Interface: ICanvasInputData

## Hierarchy

- `ICanvasAttrData`

- [`IUIBaseInputData`](IUIBaseInputData.md)

  ↳ **`ICanvasInputData`**

## Table of contents

### Properties

- [id](ICanvasInputData.md#id)
- [name](ICanvasInputData.md#name)
- [className](ICanvasInputData.md#classname)
- [blendMode](ICanvasInputData.md#blendmode)
- [opacity](ICanvasInputData.md#opacity)
- [visible](ICanvasInputData.md#visible)
- [selected](ICanvasInputData.md#selected)
- [disabled](ICanvasInputData.md#disabled)
- [locked](ICanvasInputData.md#locked)
- [zIndex](ICanvasInputData.md#zindex)
- [dim](ICanvasInputData.md#dim)
- [dimskip](ICanvasInputData.md#dimskip)
- [mask](ICanvasInputData.md#mask)
- [eraser](ICanvasInputData.md#eraser)
- [filter](ICanvasInputData.md#filter)
- [x](ICanvasInputData.md#x)
- [y](ICanvasInputData.md#y)
- [width](ICanvasInputData.md#width)
- [height](ICanvasInputData.md#height)
- [scaleX](ICanvasInputData.md#scalex)
- [scaleY](ICanvasInputData.md#scaley)
- [rotation](ICanvasInputData.md#rotation)
- [skewX](ICanvasInputData.md#skewx)
- [skewY](ICanvasInputData.md#skewy)
- [scale](ICanvasInputData.md#scale)
- [offsetX](ICanvasInputData.md#offsetx)
- [offsetY](ICanvasInputData.md#offsety)
- [scrollX](ICanvasInputData.md#scrollx)
- [scrollY](ICanvasInputData.md#scrolly)
- [origin](ICanvasInputData.md#origin)
- [around](ICanvasInputData.md#around)
- [lazy](ICanvasInputData.md#lazy)
- [pixelRatio](ICanvasInputData.md#pixelratio)
- [renderSpread](ICanvasInputData.md#renderspread)
- [path](ICanvasInputData.md#path)
- [windingRule](ICanvasInputData.md#windingrule)
- [closed](ICanvasInputData.md#closed)
- [flow](ICanvasInputData.md#flow)
- [padding](ICanvasInputData.md#padding)
- [gap](ICanvasInputData.md#gap)
- [flowAlign](ICanvasInputData.md#flowalign)
- [flowWrap](ICanvasInputData.md#flowwrap)
- [itemBox](ICanvasInputData.md#itembox)
- [inFlow](ICanvasInputData.md#inflow)
- [autoWidth](ICanvasInputData.md#autowidth)
- [autoHeight](ICanvasInputData.md#autoheight)
- [lockRatio](ICanvasInputData.md#lockratio)
- [autoBox](ICanvasInputData.md#autobox)
- [widthRange](ICanvasInputData.md#widthrange)
- [heightRange](ICanvasInputData.md#heightrange)
- [draggable](ICanvasInputData.md#draggable)
- [dragBounds](ICanvasInputData.md#dragbounds)
- [editable](ICanvasInputData.md#editable)
- [hittable](ICanvasInputData.md#hittable)
- [hitFill](ICanvasInputData.md#hitfill)
- [hitStroke](ICanvasInputData.md#hitstroke)
- [hitBox](ICanvasInputData.md#hitbox)
- [hitChildren](ICanvasInputData.md#hitchildren)
- [hitSelf](ICanvasInputData.md#hitself)
- [hitRadius](ICanvasInputData.md#hitradius)
- [button](ICanvasInputData.md#button)
- [cursor](ICanvasInputData.md#cursor)
- [motionPath](ICanvasInputData.md#motionpath)
- [motionPrecision](ICanvasInputData.md#motionprecision)
- [motion](ICanvasInputData.md#motion)
- [motionRotation](ICanvasInputData.md#motionrotation)
- [normalStyle](ICanvasInputData.md#normalstyle)
- [event](ICanvasInputData.md#event)
- [data](ICanvasInputData.md#data)
- [tag](ICanvasInputData.md#tag)
- [cornerRadius](ICanvasInputData.md#cornerradius)
- [cornerSmoothing](ICanvasInputData.md#cornersmoothing)
- [fill](ICanvasInputData.md#fill)
- [stroke](ICanvasInputData.md#stroke)
- [startArrow](ICanvasInputData.md#startarrow)
- [endArrow](ICanvasInputData.md#endarrow)
- [strokeAlign](ICanvasInputData.md#strokealign)
- [strokeWidth](ICanvasInputData.md#strokewidth)
- [strokeWidthFixed](ICanvasInputData.md#strokewidthfixed)
- [strokeCap](ICanvasInputData.md#strokecap)
- [strokeJoin](ICanvasInputData.md#strokejoin)
- [dashPattern](ICanvasInputData.md#dashpattern)
- [dashOffset](ICanvasInputData.md#dashoffset)
- [miterLimit](ICanvasInputData.md#miterlimit)
- [fontFamily](ICanvasInputData.md#fontfamily)
- [fontSize](ICanvasInputData.md#fontsize)
- [fontWeight](ICanvasInputData.md#fontweight)
- [italic](ICanvasInputData.md#italic)
- [textCase](ICanvasInputData.md#textcase)
- [textDecoration](ICanvasInputData.md#textdecoration)
- [letterSpacing](ICanvasInputData.md#letterspacing)
- [lineHeight](ICanvasInputData.md#lineheight)
- [paraIndent](ICanvasInputData.md#paraindent)
- [paraSpacing](ICanvasInputData.md#paraspacing)
- [writingMode](ICanvasInputData.md#writingmode)
- [textAlign](ICanvasInputData.md#textalign)
- [verticalAlign](ICanvasInputData.md#verticalalign)
- [autoSizeAlign](ICanvasInputData.md#autosizealign)
- [textWrap](ICanvasInputData.md#textwrap)
- [textOverflow](ICanvasInputData.md#textoverflow)
- [shadow](ICanvasInputData.md#shadow)
- [innerShadow](ICanvasInputData.md#innershadow)
- [blur](ICanvasInputData.md#blur)
- [backgroundBlur](ICanvasInputData.md#backgroundblur)
- [grayscale](ICanvasInputData.md#grayscale)
- [smooth](ICanvasInputData.md#smooth)
- [safeResize](ICanvasInputData.md#saferesize)
- [contextSettings](ICanvasInputData.md#contextsettings)
- [url](ICanvasInputData.md#url)
- [animation](ICanvasInputData.md#animation)
- [animationOut](ICanvasInputData.md#animationout)
- [transition](ICanvasInputData.md#transition)
- [transitionOut](ICanvasInputData.md#transitionout)
- [states](ICanvasInputData.md#states)
- [state](ICanvasInputData.md#state)
- [hoverStyle](ICanvasInputData.md#hoverstyle)
- [pressStyle](ICanvasInputData.md#pressstyle)
- [focusStyle](ICanvasInputData.md#focusstyle)
- [selectedStyle](ICanvasInputData.md#selectedstyle)
- [disabledStyle](ICanvasInputData.md#disabledstyle)
- [placeholderStyle](ICanvasInputData.md#placeholderstyle)
- [placeholderColor](ICanvasInputData.md#placeholdercolor)
- [placeholderDelay](ICanvasInputData.md#placeholderdelay)
- [editConfig](ICanvasInputData.md#editconfig)
- [editOuter](ICanvasInputData.md#editouter)
- [editInner](ICanvasInputData.md#editinner)
- [children](ICanvasInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[id](IUIBaseInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[name](IUIBaseInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[className](IUIBaseInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[blendMode](IUIBaseInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[opacity](IUIBaseInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[visible](IUIBaseInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[selected](IUIBaseInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[disabled](IUIBaseInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[locked](IUIBaseInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[zIndex](IUIBaseInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dim](IUIBaseInputData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dimskip](IUIBaseInputData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[mask](IUIBaseInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[eraser](IUIBaseInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[filter](IUIBaseInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[x](IUIBaseInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[y](IUIBaseInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[width](IUIBaseInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[height](IUIBaseInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scaleX](IUIBaseInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scaleY](IUIBaseInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[rotation](IUIBaseInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[skewX](IUIBaseInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[skewY](IUIBaseInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scale](IUIBaseInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[offsetX](IUIBaseInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[offsetY](IUIBaseInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scrollX](IUIBaseInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scrollY](IUIBaseInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[origin](IUIBaseInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[around](IUIBaseInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lazy](IUIBaseInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[pixelRatio](IUIBaseInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L259)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[renderSpread](IUIBaseInputData.md#renderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L261)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[path](IUIBaseInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L263)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[windingRule](IUIBaseInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L264)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[closed](IUIBaseInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L265)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flow](IUIBaseInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L268)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[padding](IUIBaseInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L269)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[gap](IUIBaseInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L270)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flowAlign](IUIBaseInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L271)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flowWrap](IUIBaseInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L272)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[itemBox](IUIBaseInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L273)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[inFlow](IUIBaseInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L275)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoWidth](IUIBaseInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L276)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoHeight](IUIBaseInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L277)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lockRatio](IUIBaseInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L278)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoBox](IUIBaseInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L279)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[widthRange](IUIBaseInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L281)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[heightRange](IUIBaseInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L282)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[draggable](IUIBaseInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L285)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dragBounds](IUIBaseInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L286)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editable](IUIBaseInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L288)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hittable](IUIBaseInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L290)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitFill](IUIBaseInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L291)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitStroke](IUIBaseInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L292)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitBox](IUIBaseInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L293)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitChildren](IUIBaseInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L294)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitSelf](IUIBaseInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L295)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitRadius](IUIBaseInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L296)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[button](IUIBaseInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L298)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cursor](IUIBaseInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionPath](IUIBaseInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L301)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionPrecision](IUIBaseInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L302)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motion](IUIBaseInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L304)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionRotation](IUIBaseInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L305)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[normalStyle](IUIBaseInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L307)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[event](IUIBaseInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L309)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[data](IUIBaseInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L312)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[tag](IUIBaseInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:316](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L316)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cornerRadius](IUIBaseInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cornerSmoothing](IUIBaseInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fill](IUIBaseInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[stroke](IUIBaseInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L47)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[startArrow](IUIBaseInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L49)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[endArrow](IUIBaseInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:50](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L50)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeAlign](IUIBaseInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeWidth](IUIBaseInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeWidthFixed](IUIBaseInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeCap](IUIBaseInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeJoin](IUIBaseInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dashPattern](IUIBaseInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dashOffset](IUIBaseInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[miterLimit](IUIBaseInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L61)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontFamily](IUIBaseInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:106](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L106)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontSize](IUIBaseInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:107](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L107)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontWeight](IUIBaseInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:108](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L108)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[italic](IUIBaseInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L109)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textCase](IUIBaseInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L110)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textDecoration](IUIBaseInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L111)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[letterSpacing](IUIBaseInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L112)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lineHeight](IUIBaseInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L113)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[paraIndent](IUIBaseInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L115)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[paraSpacing](IUIBaseInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L116)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[writingMode](IUIBaseInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L118)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textAlign](IUIBaseInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L119)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[verticalAlign](IUIBaseInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:120](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L120)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoSizeAlign](IUIBaseInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L121)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textWrap](IUIBaseInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L123)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textOverflow](IUIBaseInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L124)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[shadow](IUIBaseInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L157)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[innerShadow](IUIBaseInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:158](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L158)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[blur](IUIBaseInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:159](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L159)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[backgroundBlur](IUIBaseInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L160)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[grayscale](IUIBaseInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L161)

___

### smooth

• `Optional` **smooth**: `boolean`

#### Inherited from

ICanvasAttrData.smooth

#### Defined in

[ui/packages/interface/src/IUI.ts:303](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L303)

___

### safeResize

• `Optional` **safeResize**: `boolean`

#### Inherited from

ICanvasAttrData.safeResize

#### Defined in

[ui/packages/interface/src/IUI.ts:304](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L304)

___

### contextSettings

• `Optional` **contextSettings**: `ICanvasRenderingContext2DSettings`

#### Inherited from

ICanvasAttrData.contextSettings

#### Defined in

[ui/packages/interface/src/IUI.ts:305](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L305)

___

### url

• `Optional` **url**: `string`

#### Inherited from

ICanvasAttrData.url

#### Defined in

[ui/packages/interface/src/IUI.ts:306](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L306)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[animation](IUIBaseInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L449)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[animationOut](IUIBaseInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L450)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[transition](IUIBaseInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L452)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[transitionOut](IUIBaseInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L453)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[states](IUIBaseInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L455)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[state](IUIBaseInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L456)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hoverStyle](IUIBaseInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L458)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[pressStyle](IUIBaseInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L459)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[focusStyle](IUIBaseInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L460)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[selectedStyle](IUIBaseInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L461)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[disabledStyle](IUIBaseInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L462)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderStyle](IUIBaseInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L463)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderColor](IUIBaseInputData.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L464)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderDelay](IUIBaseInputData.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L465)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editConfig](IUIBaseInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L467)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editOuter](IUIBaseInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L468)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editInner](IUIBaseInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:469](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L469)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[children](IUIBaseInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:524](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L524)
