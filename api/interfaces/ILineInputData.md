# Interface: ILineInputData

## Hierarchy

- `ILineAttrData`

- [`IUIBaseInputData`](IUIBaseInputData.md)

  ↳ **`ILineInputData`**

  ↳↳ [`IArrowInputData`](IArrowInputData.md)

  ↳↳ [`IUIInputData`](IUIInputData.md)

## Table of contents

### Properties

- [id](ILineInputData.md#id)
- [name](ILineInputData.md#name)
- [className](ILineInputData.md#classname)
- [blendMode](ILineInputData.md#blendmode)
- [opacity](ILineInputData.md#opacity)
- [visible](ILineInputData.md#visible)
- [selected](ILineInputData.md#selected)
- [disabled](ILineInputData.md#disabled)
- [locked](ILineInputData.md#locked)
- [zIndex](ILineInputData.md#zindex)
- [dim](ILineInputData.md#dim)
- [dimskip](ILineInputData.md#dimskip)
- [mask](ILineInputData.md#mask)
- [eraser](ILineInputData.md#eraser)
- [filter](ILineInputData.md#filter)
- [x](ILineInputData.md#x)
- [y](ILineInputData.md#y)
- [width](ILineInputData.md#width)
- [height](ILineInputData.md#height)
- [scaleX](ILineInputData.md#scalex)
- [scaleY](ILineInputData.md#scaley)
- [rotation](ILineInputData.md#rotation)
- [skewX](ILineInputData.md#skewx)
- [skewY](ILineInputData.md#skewy)
- [scale](ILineInputData.md#scale)
- [offsetX](ILineInputData.md#offsetx)
- [offsetY](ILineInputData.md#offsety)
- [scrollX](ILineInputData.md#scrollx)
- [scrollY](ILineInputData.md#scrolly)
- [origin](ILineInputData.md#origin)
- [around](ILineInputData.md#around)
- [lazy](ILineInputData.md#lazy)
- [pixelRatio](ILineInputData.md#pixelratio)
- [renderSpread](ILineInputData.md#renderspread)
- [path](ILineInputData.md#path)
- [windingRule](ILineInputData.md#windingrule)
- [closed](ILineInputData.md#closed)
- [flow](ILineInputData.md#flow)
- [padding](ILineInputData.md#padding)
- [gap](ILineInputData.md#gap)
- [flowAlign](ILineInputData.md#flowalign)
- [flowWrap](ILineInputData.md#flowwrap)
- [itemBox](ILineInputData.md#itembox)
- [inFlow](ILineInputData.md#inflow)
- [autoWidth](ILineInputData.md#autowidth)
- [autoHeight](ILineInputData.md#autoheight)
- [lockRatio](ILineInputData.md#lockratio)
- [autoBox](ILineInputData.md#autobox)
- [widthRange](ILineInputData.md#widthrange)
- [heightRange](ILineInputData.md#heightrange)
- [draggable](ILineInputData.md#draggable)
- [dragBounds](ILineInputData.md#dragbounds)
- [dragBoundsType](ILineInputData.md#dragboundstype)
- [editable](ILineInputData.md#editable)
- [hittable](ILineInputData.md#hittable)
- [hitFill](ILineInputData.md#hitfill)
- [hitStroke](ILineInputData.md#hitstroke)
- [hitBox](ILineInputData.md#hitbox)
- [hitChildren](ILineInputData.md#hitchildren)
- [hitSelf](ILineInputData.md#hitself)
- [hitRadius](ILineInputData.md#hitradius)
- [button](ILineInputData.md#button)
- [cursor](ILineInputData.md#cursor)
- [motionPath](ILineInputData.md#motionpath)
- [motionPrecision](ILineInputData.md#motionprecision)
- [motion](ILineInputData.md#motion)
- [motionRotation](ILineInputData.md#motionrotation)
- [normalStyle](ILineInputData.md#normalstyle)
- [event](ILineInputData.md#event)
- [data](ILineInputData.md#data)
- [tag](ILineInputData.md#tag)
- [cornerRadius](ILineInputData.md#cornerradius)
- [cornerSmoothing](ILineInputData.md#cornersmoothing)
- [fill](ILineInputData.md#fill)
- [stroke](ILineInputData.md#stroke)
- [startArrow](ILineInputData.md#startarrow)
- [endArrow](ILineInputData.md#endarrow)
- [strokeAlign](ILineInputData.md#strokealign)
- [strokeWidth](ILineInputData.md#strokewidth)
- [strokeWidthFixed](ILineInputData.md#strokewidthfixed)
- [strokeCap](ILineInputData.md#strokecap)
- [strokeJoin](ILineInputData.md#strokejoin)
- [dashPattern](ILineInputData.md#dashpattern)
- [dashOffset](ILineInputData.md#dashoffset)
- [miterLimit](ILineInputData.md#miterlimit)
- [fontFamily](ILineInputData.md#fontfamily)
- [fontSize](ILineInputData.md#fontsize)
- [fontWeight](ILineInputData.md#fontweight)
- [italic](ILineInputData.md#italic)
- [textCase](ILineInputData.md#textcase)
- [textDecoration](ILineInputData.md#textdecoration)
- [letterSpacing](ILineInputData.md#letterspacing)
- [lineHeight](ILineInputData.md#lineheight)
- [paraIndent](ILineInputData.md#paraindent)
- [paraSpacing](ILineInputData.md#paraspacing)
- [writingMode](ILineInputData.md#writingmode)
- [textAlign](ILineInputData.md#textalign)
- [verticalAlign](ILineInputData.md#verticalalign)
- [autoSizeAlign](ILineInputData.md#autosizealign)
- [textWrap](ILineInputData.md#textwrap)
- [textOverflow](ILineInputData.md#textoverflow)
- [shadow](ILineInputData.md#shadow)
- [innerShadow](ILineInputData.md#innershadow)
- [blur](ILineInputData.md#blur)
- [backgroundBlur](ILineInputData.md#backgroundblur)
- [grayscale](ILineInputData.md#grayscale)
- [toPoint](ILineInputData.md#topoint)
- [points](ILineInputData.md#points)
- [curve](ILineInputData.md#curve)
- [animation](ILineInputData.md#animation)
- [animationOut](ILineInputData.md#animationout)
- [transition](ILineInputData.md#transition)
- [transitionOut](ILineInputData.md#transitionout)
- [states](ILineInputData.md#states)
- [state](ILineInputData.md#state)
- [hoverStyle](ILineInputData.md#hoverstyle)
- [pressStyle](ILineInputData.md#pressstyle)
- [focusStyle](ILineInputData.md#focusstyle)
- [selectedStyle](ILineInputData.md#selectedstyle)
- [disabledStyle](ILineInputData.md#disabledstyle)
- [placeholderStyle](ILineInputData.md#placeholderstyle)
- [placeholderColor](ILineInputData.md#placeholdercolor)
- [placeholderDelay](ILineInputData.md#placeholderdelay)
- [editConfig](ILineInputData.md#editconfig)
- [editOuter](ILineInputData.md#editouter)
- [editInner](ILineInputData.md#editinner)
- [children](ILineInputData.md#children)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[id](IUIBaseInputData.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L223)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[name](IUIBaseInputData.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L224)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[className](IUIBaseInputData.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L225)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[blendMode](IUIBaseInputData.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L227)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[opacity](IUIBaseInputData.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L229)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[visible](IUIBaseInputData.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L230)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[selected](IUIBaseInputData.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L231)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[disabled](IUIBaseInputData.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L232)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[locked](IUIBaseInputData.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L233)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[zIndex](IUIBaseInputData.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L234)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dim](IUIBaseInputData.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L236)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dimskip](IUIBaseInputData.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L237)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[mask](IUIBaseInputData.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L239)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[eraser](IUIBaseInputData.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L240)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[filter](IUIBaseInputData.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[x](IUIBaseInputData.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[y](IUIBaseInputData.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[width](IUIBaseInputData.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[height](IUIBaseInputData.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scaleX](IUIBaseInputData.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scaleY](IUIBaseInputData.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L249)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[rotation](IUIBaseInputData.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L250)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[skewX](IUIBaseInputData.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L251)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[skewY](IUIBaseInputData.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L252)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scale](IUIBaseInputData.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L254)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[offsetX](IUIBaseInputData.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L256)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[offsetY](IUIBaseInputData.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L257)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scrollX](IUIBaseInputData.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[scrollY](IUIBaseInputData.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L259)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[origin](IUIBaseInputData.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L261)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[around](IUIBaseInputData.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L262)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lazy](IUIBaseInputData.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L264)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[pixelRatio](IUIBaseInputData.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L265)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[renderSpread](IUIBaseInputData.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L267)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[path](IUIBaseInputData.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L269)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[windingRule](IUIBaseInputData.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L270)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[closed](IUIBaseInputData.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L271)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flow](IUIBaseInputData.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L274)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[padding](IUIBaseInputData.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L275)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[gap](IUIBaseInputData.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L276)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flowAlign](IUIBaseInputData.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L277)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[flowWrap](IUIBaseInputData.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L278)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[itemBox](IUIBaseInputData.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L279)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[inFlow](IUIBaseInputData.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L281)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoWidth](IUIBaseInputData.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L282)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoHeight](IUIBaseInputData.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L283)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lockRatio](IUIBaseInputData.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L284)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoBox](IUIBaseInputData.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L285)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[widthRange](IUIBaseInputData.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L287)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[heightRange](IUIBaseInputData.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L288)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[draggable](IUIBaseInputData.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L291)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dragBounds](IUIBaseInputData.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dragBoundsType](IUIBaseInputData.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L293)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editable](IUIBaseInputData.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L295)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hittable](IUIBaseInputData.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L297)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitFill](IUIBaseInputData.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L298)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitStroke](IUIBaseInputData.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L299)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitBox](IUIBaseInputData.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L300)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitChildren](IUIBaseInputData.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L301)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitSelf](IUIBaseInputData.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L302)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hitRadius](IUIBaseInputData.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L303)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[button](IUIBaseInputData.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L305)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cursor](IUIBaseInputData.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L306)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionPath](IUIBaseInputData.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:308](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L308)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionPrecision](IUIBaseInputData.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L309)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motion](IUIBaseInputData.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:311](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L311)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[motionRotation](IUIBaseInputData.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L312)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[normalStyle](IUIBaseInputData.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L314)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[event](IUIBaseInputData.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:316](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L316)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[data](IUIBaseInputData.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:319](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L319)

___

### tag

• `Optional` **tag**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[tag](IUIBaseInputData.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/56c6de6d1ac5072088c765b725fa724d56b9e5ef/packages/interface/src/display/ILeaf.ts#L323)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cornerRadius](IUIBaseInputData.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:13](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L13)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[cornerSmoothing](IUIBaseInputData.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:14](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L14)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fill](IUIBaseInputData.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:26](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L26)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[stroke](IUIBaseInputData.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L47)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[startArrow](IUIBaseInputData.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L49)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[endArrow](IUIBaseInputData.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:50](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L50)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeAlign](IUIBaseInputData.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeWidth](IUIBaseInputData.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeWidthFixed](IUIBaseInputData.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeCap](IUIBaseInputData.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[strokeJoin](IUIBaseInputData.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dashPattern](IUIBaseInputData.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[dashOffset](IUIBaseInputData.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[miterLimit](IUIBaseInputData.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L61)

___

### fontFamily

• `Optional` **fontFamily**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontFamily](IUIBaseInputData.md#fontfamily)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:106](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L106)

___

### fontSize

• `Optional` **fontSize**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontSize](IUIBaseInputData.md#fontsize)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:107](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L107)

___

### fontWeight

• `Optional` **fontWeight**: [`IFontWeight`](../modules.md#ifontweight)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[fontWeight](IUIBaseInputData.md#fontweight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:108](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L108)

___

### italic

• `Optional` **italic**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[italic](IUIBaseInputData.md#italic)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:109](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L109)

___

### textCase

• `Optional` **textCase**: [`ITextCase`](../modules.md#itextcase)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textCase](IUIBaseInputData.md#textcase)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:110](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L110)

___

### textDecoration

• `Optional` **textDecoration**: [`ITextDecoration`](../modules.md#itextdecoration)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textDecoration](IUIBaseInputData.md#textdecoration)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:111](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L111)

___

### letterSpacing

• `Optional` **letterSpacing**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[letterSpacing](IUIBaseInputData.md#letterspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:112](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L112)

___

### lineHeight

• `Optional` **lineHeight**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[lineHeight](IUIBaseInputData.md#lineheight)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:113](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L113)

___

### paraIndent

• `Optional` **paraIndent**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[paraIndent](IUIBaseInputData.md#paraindent)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:115](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L115)

___

### paraSpacing

• `Optional` **paraSpacing**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[paraSpacing](IUIBaseInputData.md#paraspacing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:116](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L116)

___

### writingMode

• `Optional` **writingMode**: [`IWritingMode`](../modules.md#iwritingmode)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[writingMode](IUIBaseInputData.md#writingmode)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:118](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L118)

___

### textAlign

• `Optional` **textAlign**: [`ITextAlign`](../modules.md#itextalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textAlign](IUIBaseInputData.md#textalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:119](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L119)

___

### verticalAlign

• `Optional` **verticalAlign**: [`IVerticalAlign`](../modules.md#iverticalalign)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[verticalAlign](IUIBaseInputData.md#verticalalign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:120](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L120)

___

### autoSizeAlign

• `Optional` **autoSizeAlign**: `boolean`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[autoSizeAlign](IUIBaseInputData.md#autosizealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:121](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L121)

___

### textWrap

• `Optional` **textWrap**: [`ITextWrap`](../modules.md#itextwrap)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textWrap](IUIBaseInputData.md#textwrap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:123](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L123)

___

### textOverflow

• `Optional` **textOverflow**: [`ITextOverflow`](../modules.md#itextoverflow)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[textOverflow](IUIBaseInputData.md#textoverflow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:124](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L124)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[shadow](IUIBaseInputData.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L157)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[innerShadow](IUIBaseInputData.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:158](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L158)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[blur](IUIBaseInputData.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:159](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L159)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[backgroundBlur](IUIBaseInputData.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:160](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L160)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[grayscale](IUIBaseInputData.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:161](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/ICommonAttr.ts#L161)

___

### toPoint

• `Optional` **toPoint**: [`IPointData`](IPointData.md)

#### Inherited from

ILineAttrData.toPoint

#### Defined in

[src/ui/packages/interface/src/IUI.ts:25](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L25)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

ILineAttrData.points

#### Defined in

[src/ui/packages/interface/src/IUI.ts:26](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L26)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

ILineAttrData.curve

#### Defined in

[src/ui/packages/interface/src/IUI.ts:27](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L27)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[animation](IUIBaseInputData.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L452)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[animationOut](IUIBaseInputData.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L453)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[transition](IUIBaseInputData.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L455)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[transitionOut](IUIBaseInputData.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L456)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[states](IUIBaseInputData.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L458)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[state](IUIBaseInputData.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L459)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[hoverStyle](IUIBaseInputData.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L461)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[pressStyle](IUIBaseInputData.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L462)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[focusStyle](IUIBaseInputData.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L463)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[selectedStyle](IUIBaseInputData.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L464)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[disabledStyle](IUIBaseInputData.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L465)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderStyle](IUIBaseInputData.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L466)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderColor](IUIBaseInputData.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L467)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[placeholderDelay](IUIBaseInputData.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L468)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editConfig](IUIBaseInputData.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L470)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editOuter](IUIBaseInputData.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L471)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[editInner](IUIBaseInputData.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L472)

___

### children

• `Optional` **children**: [`IUIInputData`](IUIInputData.md)[]

#### Inherited from

[IUIBaseInputData](IUIBaseInputData.md).[children](IUIBaseInputData.md#children)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:527](https://github.com/leaferjs/leafer-ui/blob/bf25826307b66b28129b03872bb2832c8787db48/packages/interface/src/IUI.ts#L527)
