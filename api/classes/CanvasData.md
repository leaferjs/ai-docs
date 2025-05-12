# Class: CanvasData

## Hierarchy

- [`RectData`](RectData.md)

  ↳ **`CanvasData`**

## Implements

- [`ICanvasData`](../interfaces/ICanvasData.md)

## Table of contents

### Constructors

- [constructor](CanvasData.md#constructor)

### Properties

- [\_\_input](CanvasData.md#__input)
- [\_\_middle](CanvasData.md#__middle)
- [\_\_single](CanvasData.md#__single)
- [\_\_naturalWidth](CanvasData.md#__naturalwidth)
- [\_\_naturalHeight](CanvasData.md#__naturalheight)
- [\_\_pathForRender](CanvasData.md#__pathforrender)
- [\_\_leaf](CanvasData.md#__leaf)
- [\_\_blendLayer](CanvasData.md#__blendlayer)
- [\_\_isFills](CanvasData.md#__isfills)
- [\_\_isStrokes](CanvasData.md#__isstrokes)
- [\_\_pixelFill](CanvasData.md#__pixelfill)
- [\_\_pixelStroke](CanvasData.md#__pixelstroke)
- [\_\_needComputePaint](CanvasData.md#__needcomputepaint)
- [\_visible](CanvasData.md#_visible)
- [\_width](CanvasData.md#_width)
- [\_height](CanvasData.md#_height)
- [\_fill](CanvasData.md#_fill)
- [\_stroke](CanvasData.md#_stroke)
- [\_path](CanvasData.md#_path)
- [\_shadow](CanvasData.md#_shadow)
- [\_innerShadow](CanvasData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](CanvasData.md#__usenaturalratio)
- [\_\_isLinePath](CanvasData.md#__islinepath)
- [\_\_blendMode](CanvasData.md#__blendmode)
- [\_\_isCanvas](CanvasData.md#__iscanvas)
- [\_\_drawAfterFill](CanvasData.md#__drawafterfill)
- [\_\_boxStroke](CanvasData.md#__boxstroke)
- [scale](CanvasData.md#scale)
- [\_\_strokeWidth](CanvasData.md#__strokewidth)
- [\_\_hasStroke](CanvasData.md#__hasstroke)
- [\_\_hasHalf](CanvasData.md#__hashalf)
- [\_\_hasMultiPaint](CanvasData.md#__hasmultipaint)
- [\_\_clipAfterFill](CanvasData.md#__clipafterfill)
- [\_\_hasSurface](CanvasData.md#__hassurface)
- [\_\_autoWidth](CanvasData.md#__autowidth)
- [\_\_autoHeight](CanvasData.md#__autoheight)
- [\_\_autoSide](CanvasData.md#__autoside)
- [\_\_autoSize](CanvasData.md#__autosize)

### Methods

- [\_\_get](CanvasData.md#__get)
- [\_\_getData](CanvasData.md#__getdata)
- [\_\_setInput](CanvasData.md#__setinput)
- [\_\_getInput](CanvasData.md#__getinput)
- [\_\_removeInput](CanvasData.md#__removeinput)
- [\_\_setMiddle](CanvasData.md#__setmiddle)
- [\_\_getMiddle](CanvasData.md#__getmiddle)
- [\_\_checkSingle](CanvasData.md#__checksingle)
- [\_\_removeNaturalSize](CanvasData.md#__removenaturalsize)
- [destroy](CanvasData.md#destroy)
- [\_\_getInputData](CanvasData.md#__getinputdata)
- [setVisible](CanvasData.md#setvisible)
- [setWidth](CanvasData.md#setwidth)
- [setHeight](CanvasData.md#setheight)
- [setFill](CanvasData.md#setfill)
- [setStroke](CanvasData.md#setstroke)
- [setPath](CanvasData.md#setpath)
- [setShadow](CanvasData.md#setshadow)
- [setInnerShadow](CanvasData.md#setinnershadow)
- [setFilter](CanvasData.md#setfilter)
- [\_\_computePaint](CanvasData.md#__computepaint)

## Constructors

### constructor

• **new CanvasData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[RectData](RectData.md).[constructor](RectData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__input](../interfaces/ICanvasData.md#__input)

#### Inherited from

[RectData](RectData.md).[__input](RectData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__middle](../interfaces/ICanvasData.md#__middle)

#### Inherited from

[RectData](RectData.md).[__middle](RectData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__single](../interfaces/ICanvasData.md#__single)

#### Inherited from

[RectData](RectData.md).[__single](RectData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__naturalWidth](../interfaces/ICanvasData.md#__naturalwidth)

#### Inherited from

[RectData](RectData.md).[__naturalWidth](RectData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__naturalHeight](../interfaces/ICanvasData.md#__naturalheight)

#### Inherited from

[RectData](RectData.md).[__naturalHeight](RectData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__pathForRender](../interfaces/ICanvasData.md#__pathforrender)

#### Inherited from

[RectData](RectData.md).[__pathForRender](RectData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__leaf](../interfaces/ICanvasData.md#__leaf)

#### Inherited from

[RectData](RectData.md).[__leaf](RectData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__blendLayer](../interfaces/ICanvasData.md#__blendlayer)

#### Inherited from

[RectData](RectData.md).[__blendLayer](RectData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isFills](../interfaces/ICanvasData.md#__isfills)

#### Inherited from

[RectData](RectData.md).[__isFills](RectData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isStrokes](../interfaces/ICanvasData.md#__isstrokes)

#### Inherited from

[RectData](RectData.md).[__isStrokes](RectData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__pixelFill](../interfaces/ICanvasData.md#__pixelfill)

#### Inherited from

[RectData](RectData.md).[__pixelFill](RectData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__pixelStroke](../interfaces/ICanvasData.md#__pixelstroke)

#### Inherited from

[RectData](RectData.md).[__pixelStroke](RectData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__needComputePaint](../interfaces/ICanvasData.md#__needcomputepaint)

#### Inherited from

[RectData](RectData.md).[__needComputePaint](RectData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:46](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L46)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[RectData](RectData.md).[_visible](RectData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L48)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[RectData](RectData.md).[_width](RectData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L50)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[RectData](RectData.md).[_height](RectData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:51](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L51)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_fill](RectData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L53)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_stroke](RectData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L54)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[RectData](RectData.md).[_path](RectData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L56)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_shadow](RectData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L58)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_innerShadow](RectData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:59](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L59)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__useNaturalRatio](../interfaces/ICanvasData.md#__usenaturalratio)

#### Inherited from

RectData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isLinePath](../interfaces/ICanvasData.md#__islinepath)

#### Inherited from

RectData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__blendMode](../interfaces/ICanvasData.md#__blendmode)

#### Inherited from

RectData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L24)

___

### \_\_isCanvas

• `get` **__isCanvas**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__isCanvas](../interfaces/ICanvasData.md#__iscanvas)

#### Defined in

[ui/packages/display-module/data/src/CanvasData.ts:8](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/CanvasData.ts#L8)

___

### \_\_drawAfterFill

• `get` **__drawAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__drawAfterFill](../interfaces/ICanvasData.md#__drawafterfill)

#### Defined in

[ui/packages/display-module/data/src/CanvasData.ts:9](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/CanvasData.ts#L9)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__boxStroke](../interfaces/ICanvasData.md#__boxstroke)

#### Inherited from

RectData.\_\_boxStroke

#### Defined in

[ui/packages/display-module/data/src/RectData.ts:7](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/RectData.ts#L7)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[scale](../interfaces/ICanvasData.md#scale)

#### Inherited from

RectData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:15](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L15)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__strokeWidth](../interfaces/ICanvasData.md#__strokewidth)

#### Inherited from

RectData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:22](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L22)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasStroke](../interfaces/ICanvasData.md#__hasstroke)

#### Inherited from

RectData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasHalf](../interfaces/ICanvasData.md#__hashalf)

#### Inherited from

RectData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasMultiPaint](../interfaces/ICanvasData.md#__hasmultipaint)

#### Inherited from

RectData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__clipAfterFill](../interfaces/ICanvasData.md#__clipafterfill)

#### Inherited from

RectData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:43](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L43)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__hasSurface](../interfaces/ICanvasData.md#__hassurface)

#### Inherited from

RectData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoWidth](../interfaces/ICanvasData.md#__autowidth)

#### Inherited from

RectData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L61)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoHeight](../interfaces/ICanvasData.md#__autoheight)

#### Inherited from

RectData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L62)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoSide](../interfaces/ICanvasData.md#__autoside)

#### Inherited from

RectData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L63)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__autoSize](../interfaces/ICanvasData.md#__autosize)

#### Inherited from

RectData.\_\_autoSize

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:64](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L64)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__get](../interfaces/ICanvasData.md#__get)

#### Inherited from

[RectData](RectData.md).[__get](RectData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__getData](../interfaces/ICanvasData.md#__getdata)

#### Inherited from

[RectData](RectData.md).[__getData](RectData.md#__getdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:42](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L42)

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

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__setInput](../interfaces/ICanvasData.md#__setinput)

#### Inherited from

[RectData](RectData.md).[__setInput](RectData.md#__setinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:54](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L54)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__getInput](../interfaces/ICanvasData.md#__getinput)

#### Inherited from

[RectData](RectData.md).[__getInput](RectData.md#__getinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:59](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L59)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__removeInput](../interfaces/ICanvasData.md#__removeinput)

#### Inherited from

[RectData](RectData.md).[__removeInput](RectData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:70](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L70)

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

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__setMiddle](../interfaces/ICanvasData.md#__setmiddle)

#### Inherited from

[RectData](RectData.md).[__setMiddle](RectData.md#__setmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:114](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L114)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__getMiddle](../interfaces/ICanvasData.md#__getmiddle)

#### Inherited from

[RectData](RectData.md).[__getMiddle](RectData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__checkSingle](../interfaces/ICanvasData.md#__checksingle)

#### Inherited from

[RectData](RectData.md).[__checkSingle](RectData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__removeNaturalSize](../interfaces/ICanvasData.md#__removenaturalsize)

#### Inherited from

[RectData](RectData.md).[__removeNaturalSize](RectData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[destroy](../interfaces/ICanvasData.md#destroy)

#### Inherited from

[RectData](RectData.md).[destroy](RectData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:141](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L141)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string`[] \| [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__getInputData](../interfaces/ICanvasData.md#__getinputdata)

#### Overrides

[RectData](RectData.md).[__getInputData](RectData.md#__getinputdata)

#### Defined in

[ui/packages/display-module/data/src/CanvasData.ts:11](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/CanvasData.ts#L11)

___

### setVisible

▸ `Protected` **setVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setVisible](RectData.md#setvisible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:67](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L67)

___

### setWidth

▸ `Protected` **setWidth**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setWidth](RectData.md#setwidth)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:74](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L74)

___

### setHeight

▸ `Protected` **setHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setHeight](RectData.md#setheight)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:82](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L82)

___

### setFill

▸ `Protected` **setFill**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setFill](RectData.md#setfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:91](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L91)

___

### setStroke

▸ `Protected` **setStroke**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setStroke](RectData.md#setstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:110](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L110)

___

### setPath

▸ `Protected` **setPath**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[] |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setPath](RectData.md#setpath)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:129](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L129)

___

### setShadow

▸ `Protected` **setShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setShadow](RectData.md#setshadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:141](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L141)

___

### setInnerShadow

▸ `Protected` **setInnerShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setInnerShadow](RectData.md#setinnershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:145](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L145)

___

### setFilter

▸ `Protected` **setFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[RectData](RectData.md).[setFilter](RectData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:149](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L149)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvasData](../interfaces/ICanvasData.md).[__computePaint](../interfaces/ICanvasData.md#__computepaint)

#### Inherited from

[RectData](RectData.md).[__computePaint](RectData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L156)
