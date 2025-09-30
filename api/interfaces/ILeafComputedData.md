# Interface: ILeafComputedData

## Hierarchy

- **`ILeafComputedData`**

  ↳ [`ILeafData`](ILeafData.md)

## Table of contents

### Properties

- [id](ILeafComputedData.md#id)
- [name](ILeafComputedData.md#name)
- [className](ILeafComputedData.md#classname)
- [blendMode](ILeafComputedData.md#blendmode)
- [opacity](ILeafComputedData.md#opacity)
- [visible](ILeafComputedData.md#visible)
- [selected](ILeafComputedData.md#selected)
- [disabled](ILeafComputedData.md#disabled)
- [locked](ILeafComputedData.md#locked)
- [zIndex](ILeafComputedData.md#zindex)
- [dim](ILeafComputedData.md#dim)
- [dimskip](ILeafComputedData.md#dimskip)
- [bright](ILeafComputedData.md#bright)
- [mask](ILeafComputedData.md#mask)
- [eraser](ILeafComputedData.md#eraser)
- [filter](ILeafComputedData.md#filter)
- [x](ILeafComputedData.md#x)
- [y](ILeafComputedData.md#y)
- [width](ILeafComputedData.md#width)
- [height](ILeafComputedData.md#height)
- [scaleX](ILeafComputedData.md#scalex)
- [scaleY](ILeafComputedData.md#scaley)
- [rotation](ILeafComputedData.md#rotation)
- [skewX](ILeafComputedData.md#skewx)
- [skewY](ILeafComputedData.md#skewy)
- [offsetX](ILeafComputedData.md#offsetx)
- [offsetY](ILeafComputedData.md#offsety)
- [scrollX](ILeafComputedData.md#scrollx)
- [scrollY](ILeafComputedData.md#scrolly)
- [origin](ILeafComputedData.md#origin)
- [around](ILeafComputedData.md#around)
- [lazy](ILeafComputedData.md#lazy)
- [pixelRatio](ILeafComputedData.md#pixelratio)
- [renderSpread](ILeafComputedData.md#renderspread)
- [path](ILeafComputedData.md#path)
- [windingRule](ILeafComputedData.md#windingrule)
- [closed](ILeafComputedData.md#closed)
- [flow](ILeafComputedData.md#flow)
- [padding](ILeafComputedData.md#padding)
- [gap](ILeafComputedData.md#gap)
- [flowAlign](ILeafComputedData.md#flowalign)
- [flowWrap](ILeafComputedData.md#flowwrap)
- [itemBox](ILeafComputedData.md#itembox)
- [inFlow](ILeafComputedData.md#inflow)
- [autoWidth](ILeafComputedData.md#autowidth)
- [autoHeight](ILeafComputedData.md#autoheight)
- [lockRatio](ILeafComputedData.md#lockratio)
- [autoBox](ILeafComputedData.md#autobox)
- [widthRange](ILeafComputedData.md#widthrange)
- [heightRange](ILeafComputedData.md#heightrange)
- [draggable](ILeafComputedData.md#draggable)
- [dragBounds](ILeafComputedData.md#dragbounds)
- [dragBoundsType](ILeafComputedData.md#dragboundstype)
- [editable](ILeafComputedData.md#editable)
- [hittable](ILeafComputedData.md#hittable)
- [hitFill](ILeafComputedData.md#hitfill)
- [hitStroke](ILeafComputedData.md#hitstroke)
- [hitBox](ILeafComputedData.md#hitbox)
- [hitChildren](ILeafComputedData.md#hitchildren)
- [hitSelf](ILeafComputedData.md#hitself)
- [hitRadius](ILeafComputedData.md#hitradius)
- [button](ILeafComputedData.md#button)
- [cursor](ILeafComputedData.md#cursor)
- [motionPath](ILeafComputedData.md#motionpath)
- [motionPrecision](ILeafComputedData.md#motionprecision)
- [motion](ILeafComputedData.md#motion)
- [motionRotation](ILeafComputedData.md#motionrotation)
- [normalStyle](ILeafComputedData.md#normalstyle)
- [data](ILeafComputedData.md#data)
- [\_\_childBranchNumber](ILeafComputedData.md#__childbranchnumber)
- [\_\_complex](ILeafComputedData.md#__complex)
- [\_\_naturalWidth](ILeafComputedData.md#__naturalwidth)
- [\_\_naturalHeight](ILeafComputedData.md#__naturalheight)
- [\_\_autoWidth](ILeafComputedData.md#__autowidth)
- [\_\_autoHeight](ILeafComputedData.md#__autoheight)
- [\_\_autoSide](ILeafComputedData.md#__autoside)
- [\_\_autoSize](ILeafComputedData.md#__autosize)
- [\_\_useNaturalRatio](ILeafComputedData.md#__usenaturalratio)
- [\_\_isLinePath](ILeafComputedData.md#__islinepath)
- [\_\_blendMode](ILeafComputedData.md#__blendmode)
- [\_\_useStroke](ILeafComputedData.md#__usestroke)
- [\_\_useArrow](ILeafComputedData.md#__usearrow)
- [\_\_useEffect](ILeafComputedData.md#__useeffect)
- [\_\_usePathBox](ILeafComputedData.md#__usepathbox)
- [\_\_useDim](ILeafComputedData.md#__usedim)
- [\_\_pathInputed](ILeafComputedData.md#__pathinputed)
- [\_\_pathForRender](ILeafComputedData.md#__pathforrender)
- [\_\_path2DForRender](ILeafComputedData.md#__path2dforrender)
- [\_\_pathForArrow](ILeafComputedData.md#__pathforarrow)
- [\_\_pathForMotion](ILeafComputedData.md#__pathformotion)

## Properties

### id

• `Optional` **id**: `string`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L331)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L332)

___

### className

• `Optional` **className**: `string`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L333)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L335)

___

### opacity

• `Optional` **opacity**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L336)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:337](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L337)

___

### selected

• `Optional` **selected**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L338)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L339)

___

### locked

• `Optional` **locked**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L340)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:341](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L341)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L343)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L344)

___

### bright

• `Optional` **bright**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L345)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L347)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L348)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L349)

___

### x

• `Optional` **x**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:352](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L352)

___

### y

• `Optional` **y**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L353)

___

### width

• `Optional` **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L354)

___

### height

• `Optional` **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L355)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L356)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:357](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L357)

___

### rotation

• `Optional` **rotation**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L358)

___

### skewX

• `Optional` **skewX**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L359)

___

### skewY

• `Optional` **skewY**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:360](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L360)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L362)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:363](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L363)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L364)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:365](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L365)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L367)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L368)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:370](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L370)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L371)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L373)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L375)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L376)

___

### closed

• `Optional` **closed**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:377](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L377)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L380)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L381)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L382)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:383](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L383)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L384)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L385)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:387](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L387)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L388)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L389)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:390](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L390)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L391)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L393)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L394)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L397)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L398)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L399)

___

### editable

• `Optional` **editable**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L401)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:403](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L403)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L404)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L405)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:406](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L406)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L407)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L408)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:409](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L409)

___

### button

• `Optional` **button**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:411](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L411)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:412](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L412)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:414](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L414)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:415](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L415)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L417)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:418](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L418)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L420)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:426](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L426)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L434)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L439)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L443)

___

### \_\_usePathBox

• `Optional` **\_\_usePathBox**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L444)

___

### \_\_useDim

• `Optional` **\_\_useDim**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L445)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L448)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L449)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L450)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/display/ILeaf.ts#L451)
