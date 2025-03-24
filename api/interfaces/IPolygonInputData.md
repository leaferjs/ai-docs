# Interface: IPolygonInputData

## Hierarchy

- `IPolygonAttrData`

- [`IUIBaseInputData`](IUIBaseInputData.md)

  ↳ **`IPolygonInputData`**

  ↳↳ [`IUIInputData`](IUIInputData.md)

## Table of contents

### Properties

- [id](IPolygonInputData.md#id)
- [name](IPolygonInputData.md#name)
- [className](IPolygonInputData.md#classname)
- [blendMode](IPolygonInputData.md#blendmode)
- [opacity](IPolygonInputData.md#opacity)
- [visible](IPolygonInputData.md#visible)
- [selected](IPolygonInputData.md#selected)
- [disabled](IPolygonInputData.md#disabled)
- [locked](IPolygonInputData.md#locked)
- [zIndex](IPolygonInputData.md#zindex)
- [mask](IPolygonInputData.md#mask)
- [eraser](IPolygonInputData.md#eraser)
- [filter](IPolygonInputData.md#filter)
- [x](IPolygonInputData.md#x)
- [y](IPolygonInputData.md#y)
- [width](IPolygonInputData.md#width)
- [height](IPolygonInputData.md#height)
- [scaleX](IPolygonInputData.md#scalex)
- [scaleY](IPolygonInputData.md#scaley)
- [rotation](IPolygonInputData.md#rotation)
- [skewX](IPolygonInputData.md#skewx)
- [skewY](IPolygonInputData.md#skewy)
- [scale](IPolygonInputData.md#scale)
- [offsetX](IPolygonInputData.md#offsetx)
- [offsetY](IPolygonInputData.md#offsety)
- [scrollX](IPolygonInputData.md#scrollx)
- [scrollY](IPolygonInputData.md#scrolly)
- [origin](IPolygonInputData.md#origin)
- [around](IPolygonInputData.md#around)
- [lazy](IPolygonInputData.md#lazy)
- [pixelRatio](IPolygonInputData.md#pixelratio)
- [path](IPolygonInputData.md#path)
- [windingRule](IPolygonInputData.md#windingrule)
- [closed](IPolygonInputData.md#closed)
- [flow](IPolygonInputData.md#flow)
- [padding](IPolygonInputData.md#padding)
- [gap](IPolygonInputData.md#gap)
- [flowAlign](IPolygonInputData.md#flowalign)
- [flowWrap](IPolygonInputData.md#flowwrap)
- [itemBox](IPolygonInputData.md#itembox)
- [inFlow](IPolygonInputData.md#inflow)
- [autoWidth](IPolygonInputData.md#autowidth)
- [autoHeight](IPolygonInputData.md#autoheight)
- [lockRatio](IPolygonInputData.md#lockratio)
- [autoBox](IPolygonInputData.md#autobox)
- [widthRange](IPolygonInputData.md#widthrange)
- [heightRange](IPolygonInputData.md#heightrange)
- [draggable](IPolygonInputData.md#draggable)
- [dragBounds](IPolygonInputData.md#dragbounds)
- [editable](IPolygonInputData.md#editable)
- [hittable](IPolygonInputData.md#hittable)
- [hitFill](IPolygonInputData.md#hitfill)
- [hitStroke](IPolygonInputData.md#hitstroke)
- [hitBox](IPolygonInputData.md#hitbox)
- [hitChildren](IPolygonInputData.md#hitchildren)
- [hitSelf](IPolygonInputData.md#hitself)
- [hitRadius](IPolygonInputData.md#hitradius)
- [button](IPolygonInputData.md#button)
- [cursor](IPolygonInputData.md#cursor)
- [motionPath](IPolygonInputData.md#motionpath)
- [motionPrecision](IPolygonInputData.md#motionprecision)
- [motion](IPolygonInputData.md#motion)
- [motionRotation](IPolygonInputData.md#motionrotation)
- [normalStyle](IPolygonInputData.md#normalstyle)
- [event](IPolygonInputData.md#event)
- [data](IPolygonInputData.md#data)
- [tag](IPolygonInputData.md#tag)
- [noBounds](IPolygonInputData.md#nobounds)
- [cornerRadius](IPolygonInputData.md#cornerradius)
- [cornerSmoothing](IPolygonInputData.md#cornersmoothing)
- [fill](IPolygonInputData.md#fill)
- [stroke](IPolygonInputData.md#stroke)
- [strokeAlign](IPolygonInputData.md#strokealign)
- [strokeWidth](IPolygonInputData.md#strokewidth)
- [strokeWidthFixed](IPolygonInputData.md#strokewidthfixed)
- [strokeCap](IPolygonInputData.md#strokecap)
- [strokeJoin](IPolygonInputData.md#strokejoin)
- [dashPattern](IPolygonInputData.md#dashpattern)
- [dashOffset](IPolygonInputData.md#dashoffset)
- [miterLimit](IPolygonInputData.md#miterlimit)
- [startArrow](IPolygonInputData.md#startarrow)
- [endArrow](IPolygonInputData.md#endarrow)
- [fontFamily](IPolygonInputData.md#fontfamily)
- [fontSize](IPolygonInputData.md#fontsize)
- [fontWeight](IPolygonInputData.md#fontweight)
- [italic](IPolygonInputData.md#italic)
- [textCase](IPolygonInputData.md#textcase)
- [textDecoration](IPolygonInputData.md#textdecoration)
- [letterSpacing](IPolygonInputData.md#letterspacing)
- [lineHeight](IPolygonInputData.md#lineheight)
- [paraIndent](IPolygonInputData.md#paraindent)
- [paraSpacing](IPolygonInputData.md#paraspacing)
- [writingMode](IPolygonInputData.md#writingmode)
- [textAlign](IPolygonInputData.md#textalign)
- [verticalAlign](IPolygonInputData.md#verticalalign)
- [autoSizeAlign](IPolygonInputData.md#autosizealign)
- [textWrap](IPolygonInputData.md#textwrap)
- [textOverflow](IPolygonInputData.md#textoverflow)
- [shadow](IPolygonInputData.md#shadow)
- [innerShadow](IPolygonInputData.md#innershadow)
- [blur](IPolygonInputData.md#blur)
- [backgroundBlur](IPolygonInputData.md#backgroundblur)
- [grayscale](IPolygonInputData.md#grayscale)
- [sides](IPolygonInputData.md#sides)
- [points](IPolygonInputData.md#points)
- [curve](IPolygonInputData.md#curve)
- [animation](IPolygonInputData.md#animation)
- [animationOut](IPolygonInputData.md#animationout)
- [transition](IPolygonInputData.md#transition)
- [transitionOut](IPolygonInputData.md#transitionout)
- [states](IPolygonInputData.md#states)
- [state](IPolygonInputData.md#state)
- [hoverStyle](IPolygonInputData.md#hoverstyle)
- [pressStyle](IPolygonInputData.md#pressstyle)
- [focusStyle](IPolygonInputData.md#focusstyle)
- [selectedStyle](IPolygonInputData.md#selectedstyle)
- [disabledStyle](IPolygonInputData.md#disabledstyle)
- [placeholderStyle](IPolygonInputData.md#placeholderstyle)
- [editConfig](IPolygonInputData.md#editconfig)
- [editOuter](IPolygonInputData.md#editouter)
- [editInner](IPolygonInputData.md#editinner)
- [children](IPolygonInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[id](IUIBaseInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[name](IUIBaseInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[className](IUIBaseInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[blendMode](IUIBaseInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[opacity](IUIBaseInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[visible](IUIBaseInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[selected](IUIBaseInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[disabled](IUIBaseInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[locked](IUIBaseInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[zIndex](IUIBaseInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[mask](IUIBaseInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[eraser](IUIBaseInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[filter](IUIBaseInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[x](IUIBaseInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[y](IUIBaseInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[width](IUIBaseInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[height](IUIBaseInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scaleX](IUIBaseInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scaleY](IUIBaseInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[rotation](IUIBaseInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[skewX](IUIBaseInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[skewY](IUIBaseInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scale](IUIBaseInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[offsetX](IUIBaseInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[offsetY](IUIBaseInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scrollX](IUIBaseInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scrollY](IUIBaseInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[origin](IUIBaseInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[around](IUIBaseInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lazy](IUIBaseInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[pixelRatio](IUIBaseInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[path](IUIBaseInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[windingRule](IUIBaseInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[closed](IUIBaseInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flow](IUIBaseInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[padding](IUIBaseInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[gap](IUIBaseInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flowAlign](IUIBaseInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flowWrap](IUIBaseInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[itemBox](IUIBaseInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[inFlow](IUIBaseInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoWidth](IUIBaseInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoHeight](IUIBaseInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lockRatio](IUIBaseInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoBox](IUIBaseInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[widthRange](IUIBaseInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[heightRange](IUIBaseInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[draggable](IUIBaseInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dragBounds](IUIBaseInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editable](IUIBaseInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hittable](IUIBaseInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitFill](IUIBaseInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitStroke](IUIBaseInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitBox](IUIBaseInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitChildren](IUIBaseInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitSelf](IUIBaseInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitRadius](IUIBaseInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[button](IUIBaseInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cursor](IUIBaseInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionPath](IUIBaseInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionPrecision](IUIBaseInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motion](IUIBaseInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionRotation](IUIBaseInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[normalStyle](IUIBaseInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[event](IUIBaseInputData.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[data](IUIBaseInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L305)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[tag](IUIBaseInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L309)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[noBounds](IUIBaseInputData.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L314)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cornerRadius](IUIBaseInputData.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cornerSmoothing](IUIBaseInputData.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fill](IUIBaseInputData.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[stroke](IUIBaseInputData.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeAlign](IUIBaseInputData.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeWidth](IUIBaseInputData.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L58)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeWidthFixed](IUIBaseInputData.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L59)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeCap](IUIBaseInputData.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L60)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeJoin](IUIBaseInputData.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L61)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dashPattern](IUIBaseInputData.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:62](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L62)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dashOffset](IUIBaseInputData.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:63](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L63)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[miterLimit](IUIBaseInputData.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:64](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L64)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[startArrow](IUIBaseInputData.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:66](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L66)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[endArrow](IUIBaseInputData.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:67](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L67)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontFamily](IUIBaseInputData.md#fontfamily)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L109)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontSize](IUIBaseInputData.md#fontsize)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L110)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontWeight](IUIBaseInputData.md#fontweight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L111)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[italic](IUIBaseInputData.md#italic)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L112)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textCase](IUIBaseInputData.md#textcase)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L113)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textDecoration](IUIBaseInputData.md#textdecoration)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:114](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L114)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[letterSpacing](IUIBaseInputData.md#letterspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L115)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lineHeight](IUIBaseInputData.md#lineheight)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L116)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[paraIndent](IUIBaseInputData.md#paraindent)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L118)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[paraSpacing](IUIBaseInputData.md#paraspacing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L119)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[writingMode](IUIBaseInputData.md#writingmode)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L121)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textAlign](IUIBaseInputData.md#textalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:122](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L122)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[verticalAlign](IUIBaseInputData.md#verticalalign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L123)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoSizeAlign](IUIBaseInputData.md#autosizealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L124)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textWrap](IUIBaseInputData.md#textwrap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:126](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L126)

___

### textOverflow

• `Optional` **textOverflow**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textOverflow](IUIBaseInputData.md#textoverflow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:127](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L127)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[shadow](IUIBaseInputData.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L160)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[innerShadow](IUIBaseInputData.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L161)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[blur](IUIBaseInputData.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:162](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L162)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[backgroundBlur](IUIBaseInputData.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:163](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L163)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[grayscale](IUIBaseInputData.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:164](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/ICommonAttr.ts#L164)

___

### sides

• `Optional` **sides**: `number`

#### Inherited from

IPolygonAttrData.sides

#### Defined in

[ui/packages/interface/src/IUI.ts:161](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L161)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

IPolygonAttrData.points

#### Defined in

[ui/packages/interface/src/IUI.ts:162](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L162)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

IPolygonAttrData.curve

#### Defined in

[ui/packages/interface/src/IUI.ts:163](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L163)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[animation](IUIBaseInputData.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:431](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L431)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[animationOut](IUIBaseInputData.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:432](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L432)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[transition](IUIBaseInputData.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L434)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[transitionOut](IUIBaseInputData.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L435)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[states](IUIBaseInputData.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L437)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[state](IUIBaseInputData.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L438)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hoverStyle](IUIBaseInputData.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L440)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[pressStyle](IUIBaseInputData.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L441)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[focusStyle](IUIBaseInputData.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L442)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[selectedStyle](IUIBaseInputData.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L443)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[disabledStyle](IUIBaseInputData.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L444)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderStyle](IUIBaseInputData.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L445)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editConfig](IUIBaseInputData.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L447)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editOuter](IUIBaseInputData.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L448)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editInner](IUIBaseInputData.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L449)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[children](IUIBaseInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:498](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L498)
