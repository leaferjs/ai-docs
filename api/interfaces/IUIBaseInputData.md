# Interface: IUIBaseInputData

## Hierarchy

- `IUIAttrData`

- `IFillInputData`

- [`IStrokeInputData`](IStrokeInputData.md)

- [`ITextStyleInputData`](ITextStyleInputData.md)

- `ICornerRadiusInputData`

- [`IEffectInputData`](IEffectInputData.md)

- [`ILeafInputData`](ILeafInputData.md)

  ↳ **`IUIBaseInputData`**

  ↳↳ [`ILineInputData`](ILineInputData.md)

  ↳↳ [`IRectInputData`](IRectInputData.md)

  ↳↳ [`IEllipseInputData`](IEllipseInputData.md)

  ↳↳ [`IPolygonInputData`](IPolygonInputData.md)

  ↳↳ [`IStarInputData`](IStarInputData.md)

  ↳↳ [`IPathInputData`](IPathInputData.md)

  ↳↳ [`ITextInputData`](ITextInputData.md)

  ↳↳ [`IImageInputData`](IImageInputData.md)

  ↳↳ [`ICanvasInputData`](ICanvasInputData.md)

  ↳↳ [`IGroupInputData`](IGroupInputData.md)

  ↳↳ [`IUIInputData`](IUIInputData.md)

## Table of contents

### Properties

- [id](IUIBaseInputData.md#id)
- [name](IUIBaseInputData.md#name)
- [className](IUIBaseInputData.md#classname)
- [blendMode](IUIBaseInputData.md#blendmode)
- [opacity](IUIBaseInputData.md#opacity)
- [visible](IUIBaseInputData.md#visible)
- [selected](IUIBaseInputData.md#selected)
- [disabled](IUIBaseInputData.md#disabled)
- [locked](IUIBaseInputData.md#locked)
- [zIndex](IUIBaseInputData.md#zindex)
- [dim](IUIBaseInputData.md#dim)
- [dimskip](IUIBaseInputData.md#dimskip)
- [mask](IUIBaseInputData.md#mask)
- [eraser](IUIBaseInputData.md#eraser)
- [filter](IUIBaseInputData.md#filter)
- [x](IUIBaseInputData.md#x)
- [y](IUIBaseInputData.md#y)
- [width](IUIBaseInputData.md#width)
- [height](IUIBaseInputData.md#height)
- [scaleX](IUIBaseInputData.md#scalex)
- [scaleY](IUIBaseInputData.md#scaley)
- [rotation](IUIBaseInputData.md#rotation)
- [skewX](IUIBaseInputData.md#skewx)
- [skewY](IUIBaseInputData.md#skewy)
- [scale](IUIBaseInputData.md#scale)
- [offsetX](IUIBaseInputData.md#offsetx)
- [offsetY](IUIBaseInputData.md#offsety)
- [scrollX](IUIBaseInputData.md#scrollx)
- [scrollY](IUIBaseInputData.md#scrolly)
- [origin](IUIBaseInputData.md#origin)
- [around](IUIBaseInputData.md#around)
- [lazy](IUIBaseInputData.md#lazy)
- [pixelRatio](IUIBaseInputData.md#pixelratio)
- [renderSpread](IUIBaseInputData.md#renderspread)
- [path](IUIBaseInputData.md#path)
- [windingRule](IUIBaseInputData.md#windingrule)
- [closed](IUIBaseInputData.md#closed)
- [flow](IUIBaseInputData.md#flow)
- [padding](IUIBaseInputData.md#padding)
- [gap](IUIBaseInputData.md#gap)
- [flowAlign](IUIBaseInputData.md#flowalign)
- [flowWrap](IUIBaseInputData.md#flowwrap)
- [itemBox](IUIBaseInputData.md#itembox)
- [inFlow](IUIBaseInputData.md#inflow)
- [autoWidth](IUIBaseInputData.md#autowidth)
- [autoHeight](IUIBaseInputData.md#autoheight)
- [lockRatio](IUIBaseInputData.md#lockratio)
- [autoBox](IUIBaseInputData.md#autobox)
- [widthRange](IUIBaseInputData.md#widthrange)
- [heightRange](IUIBaseInputData.md#heightrange)
- [draggable](IUIBaseInputData.md#draggable)
- [dragBounds](IUIBaseInputData.md#dragbounds)
- [editable](IUIBaseInputData.md#editable)
- [hittable](IUIBaseInputData.md#hittable)
- [hitFill](IUIBaseInputData.md#hitfill)
- [hitStroke](IUIBaseInputData.md#hitstroke)
- [hitBox](IUIBaseInputData.md#hitbox)
- [hitChildren](IUIBaseInputData.md#hitchildren)
- [hitSelf](IUIBaseInputData.md#hitself)
- [hitRadius](IUIBaseInputData.md#hitradius)
- [button](IUIBaseInputData.md#button)
- [cursor](IUIBaseInputData.md#cursor)
- [motionPath](IUIBaseInputData.md#motionpath)
- [motionPrecision](IUIBaseInputData.md#motionprecision)
- [motion](IUIBaseInputData.md#motion)
- [motionRotation](IUIBaseInputData.md#motionrotation)
- [normalStyle](IUIBaseInputData.md#normalstyle)
- [event](IUIBaseInputData.md#event)
- [data](IUIBaseInputData.md#data)
- [tag](IUIBaseInputData.md#tag)
- [cornerRadius](IUIBaseInputData.md#cornerradius)
- [cornerSmoothing](IUIBaseInputData.md#cornersmoothing)
- [fill](IUIBaseInputData.md#fill)
- [stroke](IUIBaseInputData.md#stroke)
- [startArrow](IUIBaseInputData.md#startarrow)
- [endArrow](IUIBaseInputData.md#endarrow)
- [strokeAlign](IUIBaseInputData.md#strokealign)
- [strokeWidth](IUIBaseInputData.md#strokewidth)
- [strokeWidthFixed](IUIBaseInputData.md#strokewidthfixed)
- [strokeCap](IUIBaseInputData.md#strokecap)
- [strokeJoin](IUIBaseInputData.md#strokejoin)
- [dashPattern](IUIBaseInputData.md#dashpattern)
- [dashOffset](IUIBaseInputData.md#dashoffset)
- [miterLimit](IUIBaseInputData.md#miterlimit)
- [fontFamily](IUIBaseInputData.md#fontfamily)
- [fontSize](IUIBaseInputData.md#fontsize)
- [fontWeight](IUIBaseInputData.md#fontweight)
- [italic](IUIBaseInputData.md#italic)
- [textCase](IUIBaseInputData.md#textcase)
- [textDecoration](IUIBaseInputData.md#textdecoration)
- [letterSpacing](IUIBaseInputData.md#letterspacing)
- [lineHeight](IUIBaseInputData.md#lineheight)
- [paraIndent](IUIBaseInputData.md#paraindent)
- [paraSpacing](IUIBaseInputData.md#paraspacing)
- [writingMode](IUIBaseInputData.md#writingmode)
- [textAlign](IUIBaseInputData.md#textalign)
- [verticalAlign](IUIBaseInputData.md#verticalalign)
- [autoSizeAlign](IUIBaseInputData.md#autosizealign)
- [textWrap](IUIBaseInputData.md#textwrap)
- [textOverflow](IUIBaseInputData.md#textoverflow)
- [shadow](IUIBaseInputData.md#shadow)
- [innerShadow](IUIBaseInputData.md#innershadow)
- [blur](IUIBaseInputData.md#blur)
- [backgroundBlur](IUIBaseInputData.md#backgroundblur)
- [grayscale](IUIBaseInputData.md#grayscale)
- [animation](IUIBaseInputData.md#animation)
- [animationOut](IUIBaseInputData.md#animationout)
- [transition](IUIBaseInputData.md#transition)
- [transitionOut](IUIBaseInputData.md#transitionout)
- [states](IUIBaseInputData.md#states)
- [state](IUIBaseInputData.md#state)
- [hoverStyle](IUIBaseInputData.md#hoverstyle)
- [pressStyle](IUIBaseInputData.md#pressstyle)
- [focusStyle](IUIBaseInputData.md#focusstyle)
- [selectedStyle](IUIBaseInputData.md#selectedstyle)
- [disabledStyle](IUIBaseInputData.md#disabledstyle)
- [placeholderStyle](IUIBaseInputData.md#placeholderstyle)
- [placeholderColor](IUIBaseInputData.md#placeholdercolor)
- [placeholderDelay](IUIBaseInputData.md#placeholderdelay)
- [editConfig](IUIBaseInputData.md#editconfig)
- [editOuter](IUIBaseInputData.md#editouter)
- [editInner](IUIBaseInputData.md#editinner)
- [children](IUIBaseInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[id](ILeafInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[name](ILeafInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[className](ILeafInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[blendMode](ILeafInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[opacity](ILeafInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeafInputData](ILeafInputData.md).[visible](ILeafInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[selected](ILeafInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[disabled](ILeafInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[locked](ILeafInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[zIndex](ILeafInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[dim](ILeafInputData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[dimskip](ILeafInputData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[mask](ILeafInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[eraser](ILeafInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeafInputData](ILeafInputData.md).[filter](ILeafInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[x](ILeafInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[y](ILeafInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[width](ILeafInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[height](ILeafInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scaleX](ILeafInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scaleY](ILeafInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[rotation](ILeafInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[skewX](ILeafInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[skewY](ILeafInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scale](ILeafInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[offsetX](ILeafInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[offsetY](ILeafInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scrollX](ILeafInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scrollY](ILeafInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[origin](ILeafInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[around](ILeafInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[lazy](ILeafInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[pixelRatio](ILeafInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L259)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[renderSpread](ILeafInputData.md#renderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L261)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeafInputData](ILeafInputData.md).[path](ILeafInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L263)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[windingRule](ILeafInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L264)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[closed](ILeafInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L265)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[flow](ILeafInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L268)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[padding](ILeafInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L269)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[gap](ILeafInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L270)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[flowAlign](ILeafInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L271)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[flowWrap](ILeafInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L272)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[itemBox](ILeafInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L273)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[inFlow](ILeafInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L275)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[autoWidth](ILeafInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L276)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[autoHeight](ILeafInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L277)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[lockRatio](ILeafInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L278)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[autoBox](ILeafInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L279)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[widthRange](ILeafInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L281)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[heightRange](ILeafInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L282)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[draggable](ILeafInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L285)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[dragBounds](ILeafInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L286)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[editable](ILeafInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L288)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hittable](ILeafInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L290)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitFill](ILeafInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L291)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitStroke](ILeafInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L292)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitBox](ILeafInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L293)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitChildren](ILeafInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L294)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitSelf](ILeafInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L295)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitRadius](ILeafInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L296)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[button](ILeafInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L298)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeafInputData](ILeafInputData.md).[cursor](ILeafInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motionPath](ILeafInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L301)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motionPrecision](ILeafInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L302)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motion](ILeafInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L304)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motionRotation](ILeafInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L305)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[normalStyle](ILeafInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L307)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[event](ILeafInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L309)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[data](ILeafInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L312)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[tag](ILeafInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:316](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L316)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

ICornerRadiusInputData.cornerRadius

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

ICornerRadiusInputData.cornerSmoothing

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

IFillInputData.fill

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[stroke](IStrokeInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L47)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[startArrow](IStrokeInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L49)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[endArrow](IStrokeInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:50](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L50)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[strokeAlign](IStrokeInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[strokeWidth](IStrokeInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[strokeWidthFixed](IStrokeInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[strokeCap](IStrokeInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[strokeJoin](IStrokeInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[dashPattern](IStrokeInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[dashOffset](IStrokeInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IStrokeInputData](IStrokeInputData.md).[miterLimit](IStrokeInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L61)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[fontFamily](ITextStyleInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:106](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L106)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[fontSize](ITextStyleInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:107](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L107)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[fontWeight](ITextStyleInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:108](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L108)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[italic](ITextStyleInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L109)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[textCase](ITextStyleInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L110)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[textDecoration](ITextStyleInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L111)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[letterSpacing](ITextStyleInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L112)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[lineHeight](ITextStyleInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L113)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[paraIndent](ITextStyleInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L115)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[paraSpacing](ITextStyleInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L116)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[writingMode](ITextStyleInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L118)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[textAlign](ITextStyleInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L119)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[verticalAlign](ITextStyleInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:120](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L120)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[autoSizeAlign](ITextStyleInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L121)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[textWrap](ITextStyleInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L123)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[ITextStyleInputData](ITextStyleInputData.md).[textOverflow](ITextStyleInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L124)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IEffectInputData](IEffectInputData.md).[shadow](IEffectInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L157)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IEffectInputData](IEffectInputData.md).[innerShadow](IEffectInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:158](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L158)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IEffectInputData](IEffectInputData.md).[blur](IEffectInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:159](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L159)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IEffectInputData](IEffectInputData.md).[backgroundBlur](IEffectInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L160)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IEffectInputData](IEffectInputData.md).[grayscale](IEffectInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/ICommonAttr.ts#L161)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

IUIAttrData.animation

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L449)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

IUIAttrData.animationOut

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L450)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

IUIAttrData.transition

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L452)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

IUIAttrData.transitionOut

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L453)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

IUIAttrData.states

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L455)

___

### state

• `Optional` **state**: `string`

#### Inherited from

IUIAttrData.state

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L456)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.hoverStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L458)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.pressStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L459)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.focusStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L460)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.selectedStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L461)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.disabledStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L462)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

IUIAttrData.placeholderStyle

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L463)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

IUIAttrData.placeholderColor

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L464)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

IUIAttrData.placeholderDelay

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L465)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

IUIAttrData.editConfig

#### Defined in

[ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L467)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

IUIAttrData.editOuter

#### Defined in

[ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L468)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

IUIAttrData.editInner

#### Defined in

[ui/packages/interface/src/IUI.ts:469](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L469)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Overrides

[ILeafInputData](ILeafInputData.md).[children](ILeafInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:524](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/IUI.ts#L524)
