# Interface: ILeafData

## Hierarchy

- [`IDataProcessor`](IDataProcessor.md)

- [`ILeafComputedData`](ILeafComputedData.md)

  ↳ **`ILeafData`**

  ↳↳ [`IUIData`](IUIData.md)

## Implemented by

- [`LeafData`](../classes/LeafData.md)

## Table of contents

### Properties

- [\_\_leaf](ILeafData.md#__leaf)
- [\_\_input](ILeafData.md#__input)
- [\_\_middle](ILeafData.md#__middle)
- [\_\_single](ILeafData.md#__single)
- [\_\_hasMultiPaint](ILeafData.md#__hasmultipaint)
- [id](ILeafData.md#id)
- [name](ILeafData.md#name)
- [className](ILeafData.md#classname)
- [blendMode](ILeafData.md#blendmode)
- [opacity](ILeafData.md#opacity)
- [visible](ILeafData.md#visible)
- [selected](ILeafData.md#selected)
- [disabled](ILeafData.md#disabled)
- [locked](ILeafData.md#locked)
- [zIndex](ILeafData.md#zindex)
- [dim](ILeafData.md#dim)
- [dimskip](ILeafData.md#dimskip)
- [mask](ILeafData.md#mask)
- [eraser](ILeafData.md#eraser)
- [filter](ILeafData.md#filter)
- [x](ILeafData.md#x)
- [y](ILeafData.md#y)
- [width](ILeafData.md#width)
- [height](ILeafData.md#height)
- [scaleX](ILeafData.md#scalex)
- [scaleY](ILeafData.md#scaley)
- [rotation](ILeafData.md#rotation)
- [skewX](ILeafData.md#skewx)
- [skewY](ILeafData.md#skewy)
- [offsetX](ILeafData.md#offsetx)
- [offsetY](ILeafData.md#offsety)
- [scrollX](ILeafData.md#scrollx)
- [scrollY](ILeafData.md#scrolly)
- [origin](ILeafData.md#origin)
- [around](ILeafData.md#around)
- [lazy](ILeafData.md#lazy)
- [pixelRatio](ILeafData.md#pixelratio)
- [renderSpread](ILeafData.md#renderspread)
- [path](ILeafData.md#path)
- [windingRule](ILeafData.md#windingrule)
- [closed](ILeafData.md#closed)
- [flow](ILeafData.md#flow)
- [padding](ILeafData.md#padding)
- [gap](ILeafData.md#gap)
- [flowAlign](ILeafData.md#flowalign)
- [flowWrap](ILeafData.md#flowwrap)
- [itemBox](ILeafData.md#itembox)
- [inFlow](ILeafData.md#inflow)
- [autoWidth](ILeafData.md#autowidth)
- [autoHeight](ILeafData.md#autoheight)
- [lockRatio](ILeafData.md#lockratio)
- [autoBox](ILeafData.md#autobox)
- [widthRange](ILeafData.md#widthrange)
- [heightRange](ILeafData.md#heightrange)
- [draggable](ILeafData.md#draggable)
- [dragBounds](ILeafData.md#dragbounds)
- [editable](ILeafData.md#editable)
- [hittable](ILeafData.md#hittable)
- [hitFill](ILeafData.md#hitfill)
- [hitStroke](ILeafData.md#hitstroke)
- [hitBox](ILeafData.md#hitbox)
- [hitChildren](ILeafData.md#hitchildren)
- [hitSelf](ILeafData.md#hitself)
- [hitRadius](ILeafData.md#hitradius)
- [button](ILeafData.md#button)
- [cursor](ILeafData.md#cursor)
- [motionPath](ILeafData.md#motionpath)
- [motionPrecision](ILeafData.md#motionprecision)
- [motion](ILeafData.md#motion)
- [motionRotation](ILeafData.md#motionrotation)
- [normalStyle](ILeafData.md#normalstyle)
- [data](ILeafData.md#data)
- [\_\_childBranchNumber](ILeafData.md#__childbranchnumber)
- [\_\_complex](ILeafData.md#__complex)
- [\_\_naturalWidth](ILeafData.md#__naturalwidth)
- [\_\_naturalHeight](ILeafData.md#__naturalheight)
- [\_\_autoWidth](ILeafData.md#__autowidth)
- [\_\_autoHeight](ILeafData.md#__autoheight)
- [\_\_autoSide](ILeafData.md#__autoside)
- [\_\_autoSize](ILeafData.md#__autosize)
- [\_\_useNaturalRatio](ILeafData.md#__usenaturalratio)
- [\_\_isLinePath](ILeafData.md#__islinepath)
- [\_\_blendMode](ILeafData.md#__blendmode)
- [\_\_useStroke](ILeafData.md#__usestroke)
- [\_\_useArrow](ILeafData.md#__usearrow)
- [\_\_useEffect](ILeafData.md#__useeffect)
- [\_\_pathInputed](ILeafData.md#__pathinputed)
- [\_\_pathForRender](ILeafData.md#__pathforrender)
- [\_\_path2DForRender](ILeafData.md#__path2dforrender)
- [\_\_pathForArrow](ILeafData.md#__pathforarrow)
- [\_\_pathForMotion](ILeafData.md#__pathformotion)

### Methods

- [\_\_get](ILeafData.md#__get)
- [\_\_getData](ILeafData.md#__getdata)
- [\_\_setInput](ILeafData.md#__setinput)
- [\_\_getInput](ILeafData.md#__getinput)
- [\_\_removeInput](ILeafData.md#__removeinput)
- [\_\_getInputData](ILeafData.md#__getinputdata)
- [\_\_setMiddle](ILeafData.md#__setmiddle)
- [\_\_getMiddle](ILeafData.md#__getmiddle)
- [destroy](ILeafData.md#destroy)
- [\_\_checkSingle](ILeafData.md#__checksingle)
- [\_\_removeNaturalSize](ILeafData.md#__removenaturalsize)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__leaf](IDataProcessor.md#__leaf)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:6](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](IObject.md)

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__input](IDataProcessor.md#__input)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:7](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](IObject.md)

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__middle](IDataProcessor.md#__middle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:8](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L8)

___

### \_\_single

• `Optional` **\_\_single**: `boolean`

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:30](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L30)

___

### \_\_hasMultiPaint

• `Optional` `Readonly` **\_\_hasMultiPaint**: `boolean`

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:31](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L31)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[id](ILeafComputedData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:323](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L323)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[name](ILeafComputedData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:324](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L324)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[className](ILeafComputedData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:325](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L325)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[blendMode](ILeafComputedData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:327](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L327)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[opacity](ILeafComputedData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:328](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L328)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[visible](ILeafComputedData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:329](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[selected](ILeafComputedData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:330](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L330)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[disabled](ILeafComputedData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:331](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L331)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[locked](ILeafComputedData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:332](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L332)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[zIndex](ILeafComputedData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:333](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L333)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[dim](ILeafComputedData.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:335](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L335)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[dimskip](ILeafComputedData.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:336](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L336)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[mask](ILeafComputedData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:338](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L338)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[eraser](ILeafComputedData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:339](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L339)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[filter](ILeafComputedData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:340](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L340)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[x](ILeafComputedData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:343](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L343)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[y](ILeafComputedData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:344](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L344)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[width](ILeafComputedData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:345](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L345)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[height](ILeafComputedData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:346](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L346)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[scaleX](ILeafComputedData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:347](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L347)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[scaleY](ILeafComputedData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:348](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L348)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[rotation](ILeafComputedData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:349](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L349)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[skewX](ILeafComputedData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:350](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L350)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[skewY](ILeafComputedData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:351](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L351)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[offsetX](ILeafComputedData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:353](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L353)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[offsetY](ILeafComputedData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:354](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L354)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[scrollX](ILeafComputedData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:355](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L355)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[scrollY](ILeafComputedData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:356](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L356)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[origin](ILeafComputedData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:358](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L358)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[around](ILeafComputedData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:359](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L359)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[lazy](ILeafComputedData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:361](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L361)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[pixelRatio](ILeafComputedData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:362](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L362)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[renderSpread](ILeafComputedData.md#renderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:364](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L364)

___

### path

• `Optional` **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[path](ILeafComputedData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:366](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L366)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[windingRule](ILeafComputedData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:367](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L367)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[closed](ILeafComputedData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:368](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L368)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[flow](ILeafComputedData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:371](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L371)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[padding](ILeafComputedData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:372](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L372)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[gap](ILeafComputedData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:373](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L373)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[flowAlign](ILeafComputedData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:374](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L374)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[flowWrap](ILeafComputedData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:375](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L375)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[itemBox](ILeafComputedData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:376](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L376)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[inFlow](ILeafComputedData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:378](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L378)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[autoWidth](ILeafComputedData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:379](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L379)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[autoHeight](ILeafComputedData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:380](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L380)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[lockRatio](ILeafComputedData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:381](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L381)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[autoBox](ILeafComputedData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:382](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L382)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[widthRange](ILeafComputedData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:384](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L384)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[heightRange](ILeafComputedData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:385](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L385)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[draggable](ILeafComputedData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:388](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L388)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[dragBounds](ILeafComputedData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:389](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L389)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[editable](ILeafComputedData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:391](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L391)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hittable](ILeafComputedData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:393](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L393)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hitFill](ILeafComputedData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:394](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L394)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hitStroke](ILeafComputedData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:395](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L395)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hitBox](ILeafComputedData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:396](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L396)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hitChildren](ILeafComputedData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:397](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L397)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hitSelf](ILeafComputedData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:398](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L398)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[hitRadius](ILeafComputedData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:399](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L399)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[button](ILeafComputedData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:401](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L401)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[cursor](ILeafComputedData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:402](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L402)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[motionPath](ILeafComputedData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:404](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L404)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[motionPrecision](ILeafComputedData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:405](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L405)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[motion](ILeafComputedData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:407](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L407)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[motionRotation](ILeafComputedData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:408](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L408)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[normalStyle](ILeafComputedData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:410](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L410)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[data](ILeafComputedData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:413](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L413)

___

### \_\_childBranchNumber

• `Optional` **\_\_childBranchNumber**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__childBranchNumber](ILeafComputedData.md#__childbranchnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:416](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L416)

___

### \_\_complex

• `Optional` **\_\_complex**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__complex](ILeafComputedData.md#__complex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:417](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L417)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__naturalWidth](ILeafComputedData.md#__naturalwidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:419](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L419)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__naturalHeight](ILeafComputedData.md#__naturalheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:420](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L420)

___

### \_\_autoWidth

• `Optional` `Readonly` **\_\_autoWidth**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__autoWidth](ILeafComputedData.md#__autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:422](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L422)

___

### \_\_autoHeight

• `Optional` `Readonly` **\_\_autoHeight**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__autoHeight](ILeafComputedData.md#__autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:423](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L423)

___

### \_\_autoSide

• `Optional` `Readonly` **\_\_autoSide**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__autoSide](ILeafComputedData.md#__autoside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:424](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L424)

___

### \_\_autoSize

• `Optional` `Readonly` **\_\_autoSize**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__autoSize](ILeafComputedData.md#__autosize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:425](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L425)

___

### \_\_useNaturalRatio

• `Readonly` **\_\_useNaturalRatio**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__useNaturalRatio](ILeafComputedData.md#__usenaturalratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:427](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L427)

___

### \_\_isLinePath

• `Readonly` **\_\_isLinePath**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__isLinePath](ILeafComputedData.md#__islinepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_blendMode

• `Readonly` **\_\_blendMode**: `string`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__blendMode](ILeafComputedData.md#__blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L429)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__useStroke](ILeafComputedData.md#__usestroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:431](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L431)

___

### \_\_useArrow

• `Optional` **\_\_useArrow**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__useArrow](ILeafComputedData.md#__usearrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_useEffect

• `Optional` **\_\_useEffect**: `boolean`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__useEffect](ILeafComputedData.md#__useeffect)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_pathInputed

• `Optional` **\_\_pathInputed**: `number`

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__pathInputed](ILeafComputedData.md#__pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__pathForRender](ILeafComputedData.md#__pathforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L436)

___

### \_\_path2DForRender

• `Optional` **\_\_path2DForRender**: [`IPath2D`](IPath2D.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__path2DForRender](ILeafComputedData.md#__path2dforrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_pathForArrow

• `Optional` **\_\_pathForArrow**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__pathForArrow](ILeafComputedData.md#__pathforarrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_pathForMotion

• `Optional` **\_\_pathForMotion**: [`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeafComputedData](ILeafComputedData.md).[__pathForMotion](ILeafComputedData.md#__pathformotion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/ILeaf.ts#L439)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__get](IDataProcessor.md#__get)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:10](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L10)

___

### \_\_getData

▸ **__getData**(): [`IObject`](IObject.md)

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__getData](IDataProcessor.md#__getdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:11](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L11)

___

### \_\_setInput

▸ **__setInput**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__setInput](IDataProcessor.md#__setinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:13](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L13)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__getInput](IDataProcessor.md#__getinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:14](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L14)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__removeInput](IDataProcessor.md#__removeinput)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:15](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L15)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string`[] \| [`IObject`](IObject.md) |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__getInputData](IDataProcessor.md#__getinputdata)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:16](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L16)

___

### \_\_setMiddle

▸ **__setMiddle**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__setMiddle](IDataProcessor.md#__setmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:18](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L18)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[__getMiddle](IDataProcessor.md#__getmiddle)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:19](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L19)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IDataProcessor](IDataProcessor.md).[destroy](IDataProcessor.md#destroy)

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:21](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L21)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:32](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L32)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/data/ILeafData.ts:33](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/data/ILeafData.ts#L33)
