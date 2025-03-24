# Interface: IUIInputData

## Hierarchy

- [`IRectInputData`](IRectInputData.md)

- [`IEllipseInputData`](IEllipseInputData.md)

- [`IPolygonInputData`](IPolygonInputData.md)

- [`IStarInputData`](IStarInputData.md)

- [`ILineInputData`](ILineInputData.md)

- [`IPathInputData`](IPathInputData.md)

- [`ITextInputData`](ITextInputData.md)

- [`IImageInputData`](IImageInputData.md)

- [`IGroupInputData`](IGroupInputData.md)

- [`IFrameInputData`](IFrameInputData.md)

- [`IArrowInputData`](IArrowInputData.md)

- [`IGIFInputData`](IGIFInputData.md)

- [`IVideoInputData`](IVideoInputData.md)

- [`IRobotInputData`](IRobotInputData.md)

- [`IUIBaseInputData`](IUIBaseInputData.md)

- [`IObject`](IObject.md)

  ↳ **`IUIInputData`**

  ↳↳ [`IUIJSONData`](IUIJSONData.md)

  ↳↳ [`IStateStyle`](IStateStyle.md)

## Table of contents

### Properties

- [id](IUIInputData.md#id)
- [name](IUIInputData.md#name)
- [className](IUIInputData.md#classname)
- [blendMode](IUIInputData.md#blendmode)
- [opacity](IUIInputData.md#opacity)
- [visible](IUIInputData.md#visible)
- [selected](IUIInputData.md#selected)
- [disabled](IUIInputData.md#disabled)
- [locked](IUIInputData.md#locked)
- [zIndex](IUIInputData.md#zindex)
- [mask](IUIInputData.md#mask)
- [eraser](IUIInputData.md#eraser)
- [filter](IUIInputData.md#filter)
- [x](IUIInputData.md#x)
- [y](IUIInputData.md#y)
- [width](IUIInputData.md#width)
- [height](IUIInputData.md#height)
- [scaleX](IUIInputData.md#scalex)
- [scaleY](IUIInputData.md#scaley)
- [rotation](IUIInputData.md#rotation)
- [skewX](IUIInputData.md#skewx)
- [skewY](IUIInputData.md#skewy)
- [scale](IUIInputData.md#scale)
- [offsetX](IUIInputData.md#offsetx)
- [offsetY](IUIInputData.md#offsety)
- [scrollX](IUIInputData.md#scrollx)
- [scrollY](IUIInputData.md#scrolly)
- [origin](IUIInputData.md#origin)
- [around](IUIInputData.md#around)
- [lazy](IUIInputData.md#lazy)
- [pixelRatio](IUIInputData.md#pixelratio)
- [path](IUIInputData.md#path)
- [windingRule](IUIInputData.md#windingrule)
- [closed](IUIInputData.md#closed)
- [flow](IUIInputData.md#flow)
- [padding](IUIInputData.md#padding)
- [gap](IUIInputData.md#gap)
- [flowAlign](IUIInputData.md#flowalign)
- [flowWrap](IUIInputData.md#flowwrap)
- [itemBox](IUIInputData.md#itembox)
- [inFlow](IUIInputData.md#inflow)
- [autoWidth](IUIInputData.md#autowidth)
- [autoHeight](IUIInputData.md#autoheight)
- [lockRatio](IUIInputData.md#lockratio)
- [autoBox](IUIInputData.md#autobox)
- [widthRange](IUIInputData.md#widthrange)
- [heightRange](IUIInputData.md#heightrange)
- [draggable](IUIInputData.md#draggable)
- [dragBounds](IUIInputData.md#dragbounds)
- [editable](IUIInputData.md#editable)
- [hittable](IUIInputData.md#hittable)
- [hitFill](IUIInputData.md#hitfill)
- [hitStroke](IUIInputData.md#hitstroke)
- [hitBox](IUIInputData.md#hitbox)
- [hitChildren](IUIInputData.md#hitchildren)
- [hitSelf](IUIInputData.md#hitself)
- [hitRadius](IUIInputData.md#hitradius)
- [button](IUIInputData.md#button)
- [cursor](IUIInputData.md#cursor)
- [motionPath](IUIInputData.md#motionpath)
- [motionPrecision](IUIInputData.md#motionprecision)
- [motion](IUIInputData.md#motion)
- [motionRotation](IUIInputData.md#motionrotation)
- [normalStyle](IUIInputData.md#normalstyle)
- [event](IUIInputData.md#event)
- [data](IUIInputData.md#data)
- [tag](IUIInputData.md#tag)
- [noBounds](IUIInputData.md#nobounds)
- [cornerRadius](IUIInputData.md#cornerradius)
- [cornerSmoothing](IUIInputData.md#cornersmoothing)
- [fill](IUIInputData.md#fill)
- [stroke](IUIInputData.md#stroke)
- [strokeAlign](IUIInputData.md#strokealign)
- [strokeWidth](IUIInputData.md#strokewidth)
- [strokeWidthFixed](IUIInputData.md#strokewidthfixed)
- [strokeCap](IUIInputData.md#strokecap)
- [strokeJoin](IUIInputData.md#strokejoin)
- [dashPattern](IUIInputData.md#dashpattern)
- [dashOffset](IUIInputData.md#dashoffset)
- [miterLimit](IUIInputData.md#miterlimit)
- [startArrow](IUIInputData.md#startarrow)
- [endArrow](IUIInputData.md#endarrow)
- [fontFamily](IUIInputData.md#fontfamily)
- [fontSize](IUIInputData.md#fontsize)
- [fontWeight](IUIInputData.md#fontweight)
- [italic](IUIInputData.md#italic)
- [textCase](IUIInputData.md#textcase)
- [textDecoration](IUIInputData.md#textdecoration)
- [letterSpacing](IUIInputData.md#letterspacing)
- [lineHeight](IUIInputData.md#lineheight)
- [paraIndent](IUIInputData.md#paraindent)
- [paraSpacing](IUIInputData.md#paraspacing)
- [writingMode](IUIInputData.md#writingmode)
- [textAlign](IUIInputData.md#textalign)
- [verticalAlign](IUIInputData.md#verticalalign)
- [autoSizeAlign](IUIInputData.md#autosizealign)
- [textWrap](IUIInputData.md#textwrap)
- [textOverflow](IUIInputData.md#textoverflow)
- [shadow](IUIInputData.md#shadow)
- [innerShadow](IUIInputData.md#innershadow)
- [blur](IUIInputData.md#blur)
- [backgroundBlur](IUIInputData.md#backgroundblur)
- [grayscale](IUIInputData.md#grayscale)
- [toPoint](IUIInputData.md#topoint)
- [robot](IUIInputData.md#robot)
- [actions](IUIInputData.md#actions)
- [action](IUIInputData.md#action)
- [now](IUIInputData.md#now)
- [FPS](IUIInputData.md#fps)
- [loop](IUIInputData.md#loop)
- [startAngle](IUIInputData.md#startangle)
- [endAngle](IUIInputData.md#endangle)
- [innerRadius](IUIInputData.md#innerradius)
- [sides](IUIInputData.md#sides)
- [points](IUIInputData.md#points)
- [curve](IUIInputData.md#curve)
- [corners](IUIInputData.md#corners)
- [text](IUIInputData.md#text)
- [resizeFontSize](IUIInputData.md#resizefontsize)
- [url](IUIInputData.md#url)
- [overflow](IUIInputData.md#overflow)
- [resizeChildren](IUIInputData.md#resizechildren)
- [textBox](IUIInputData.md#textbox)
- [animation](IUIInputData.md#animation)
- [animationOut](IUIInputData.md#animationout)
- [transition](IUIInputData.md#transition)
- [transitionOut](IUIInputData.md#transitionout)
- [states](IUIInputData.md#states)
- [state](IUIInputData.md#state)
- [hoverStyle](IUIInputData.md#hoverstyle)
- [pressStyle](IUIInputData.md#pressstyle)
- [focusStyle](IUIInputData.md#focusstyle)
- [selectedStyle](IUIInputData.md#selectedstyle)
- [disabledStyle](IUIInputData.md#disabledstyle)
- [placeholderStyle](IUIInputData.md#placeholderstyle)
- [editConfig](IUIInputData.md#editconfig)
- [editOuter](IUIInputData.md#editouter)
- [editInner](IUIInputData.md#editinner)
- [children](IUIInputData.md#children)

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

### toPoint

• `Optional` **toPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[IArrowInputData](IArrowInputData.md).[toPoint](IArrowInputData.md#topoint)

#### Defined in

[ui/packages/interface/src/IUI.ts:22](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L22)

___

### robot

• `Optional` **robot**: [`IRobotKeyframe`](IRobotKeyframe.md) \| [`IRobotKeyframe`](IRobotKeyframe.md)[]

#### Inherited from

[IRobotInputData](IRobotInputData.md).[robot](IRobotInputData.md#robot)

#### Defined in

[ui/packages/interface/src/IUI.ts:98](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L98)

___

### actions

• `Optional` **actions**: [`IRobotActions`](IRobotActions.md)

#### Inherited from

[IRobotInputData](IRobotInputData.md).[actions](IRobotInputData.md#actions)

#### Defined in

[ui/packages/interface/src/IUI.ts:99](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L99)

___

### action

• `Optional` **action**: `string`

#### Inherited from

[IRobotInputData](IRobotInputData.md).[action](IRobotInputData.md#action)

#### Defined in

[ui/packages/interface/src/IUI.ts:100](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L100)

___

### now

• `Optional` **now**: `number`

#### Inherited from

[IRobotInputData](IRobotInputData.md).[now](IRobotInputData.md#now)

#### Defined in

[ui/packages/interface/src/IUI.ts:101](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L101)

___

### FPS

• `Optional` **FPS**: `number`

#### Inherited from

[IRobotInputData](IRobotInputData.md).[FPS](IRobotInputData.md#fps)

#### Defined in

[ui/packages/interface/src/IUI.ts:102](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L102)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

[IRobotInputData](IRobotInputData.md).[loop](IRobotInputData.md#loop)

#### Defined in

[ui/packages/interface/src/IUI.ts:103](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L103)

___

### startAngle

• `Optional` **startAngle**: `number`

#### Inherited from

[IEllipseInputData](IEllipseInputData.md).[startAngle](IEllipseInputData.md#startangle)

#### Defined in

[ui/packages/interface/src/IUI.ts:148](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L148)

___

### endAngle

• `Optional` **endAngle**: `number`

#### Inherited from

[IEllipseInputData](IEllipseInputData.md).[endAngle](IEllipseInputData.md#endangle)

#### Defined in

[ui/packages/interface/src/IUI.ts:149](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L149)

___

### innerRadius

• `Optional` **innerRadius**: `number`

#### Inherited from

[IStarInputData](IStarInputData.md).[innerRadius](IStarInputData.md#innerradius)

#### Defined in

[ui/packages/interface/src/IUI.ts:150](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L150)

___

### sides

• `Optional` **sides**: `number`

#### Inherited from

[IPolygonInputData](IPolygonInputData.md).[sides](IPolygonInputData.md#sides)

#### Defined in

[ui/packages/interface/src/IUI.ts:161](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L161)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

[IArrowInputData](IArrowInputData.md).[points](IArrowInputData.md#points)

#### Defined in

[ui/packages/interface/src/IUI.ts:162](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L162)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

[IArrowInputData](IArrowInputData.md).[curve](IArrowInputData.md#curve)

#### Defined in

[ui/packages/interface/src/IUI.ts:163](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L163)

___

### corners

• `Optional` **corners**: `number`

#### Inherited from

[IStarInputData](IStarInputData.md).[corners](IStarInputData.md#corners)

#### Defined in

[ui/packages/interface/src/IUI.ts:174](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L174)

___

### text

• `Optional` **text**: `string` \| `number`

#### Inherited from

[ITextInputData](ITextInputData.md).[text](ITextInputData.md#text)

#### Defined in

[ui/packages/interface/src/IUI.ts:209](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L209)

___

### resizeFontSize

• `Optional` **resizeFontSize**: `boolean`

#### Inherited from

[ITextInputData](ITextInputData.md).[resizeFontSize](ITextInputData.md#resizefontsize)

#### Defined in

[ui/packages/interface/src/IUI.ts:211](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L211)

___

### url

• `Optional` **url**: `string`

#### Inherited from

[IVideoInputData](IVideoInputData.md).[url](IVideoInputData.md#url)

#### Defined in

[ui/packages/interface/src/IUI.ts:278](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L278)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IFrameInputData](IFrameInputData.md).[overflow](IFrameInputData.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:337](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L337)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IFrameInputData](IFrameInputData.md).[resizeChildren](IFrameInputData.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:338](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L338)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IFrameInputData](IFrameInputData.md).[textBox](IFrameInputData.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:339](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L339)

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

#### Overrides

[IUIBaseInputData](IUIBaseInputData.md).[children](IUIBaseInputData.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:525](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/interface/src/IUI.ts#L525)
