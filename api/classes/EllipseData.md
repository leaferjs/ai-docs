# Class: EllipseData

## Hierarchy

- [`UIData`](UIData.md)

  ↳ **`EllipseData`**

## Implements

- [`IEllipseData`](../interfaces/IEllipseData.md)

## Table of contents

### Constructors

- [constructor](EllipseData.md#constructor)

### Properties

- [\_\_input](EllipseData.md#__input)
- [\_\_middle](EllipseData.md#__middle)
- [\_\_single](EllipseData.md#__single)
- [\_\_naturalWidth](EllipseData.md#__naturalwidth)
- [\_\_naturalHeight](EllipseData.md#__naturalheight)
- [\_\_pathForRender](EllipseData.md#__pathforrender)
- [\_\_leaf](EllipseData.md#__leaf)
- [\_\_blendLayer](EllipseData.md#__blendlayer)
- [\_\_isFills](EllipseData.md#__isfills)
- [\_\_isStrokes](EllipseData.md#__isstrokes)
- [\_\_pixelFill](EllipseData.md#__pixelfill)
- [\_\_pixelStroke](EllipseData.md#__pixelstroke)
- [\_\_needComputePaint](EllipseData.md#__needcomputepaint)
- [\_visible](EllipseData.md#_visible)
- [\_width](EllipseData.md#_width)
- [\_height](EllipseData.md#_height)
- [\_fill](EllipseData.md#_fill)
- [\_stroke](EllipseData.md#_stroke)
- [\_path](EllipseData.md#_path)
- [\_shadow](EllipseData.md#_shadow)
- [\_innerShadow](EllipseData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](EllipseData.md#__usenaturalratio)
- [\_\_isLinePath](EllipseData.md#__islinepath)
- [\_\_blendMode](EllipseData.md#__blendmode)
- [\_\_boxStroke](EllipseData.md#__boxstroke)
- [scale](EllipseData.md#scale)
- [\_\_strokeWidth](EllipseData.md#__strokewidth)
- [\_\_hasStroke](EllipseData.md#__hasstroke)
- [\_\_hasHalf](EllipseData.md#__hashalf)
- [\_\_hasMultiPaint](EllipseData.md#__hasmultipaint)
- [\_\_clipAfterFill](EllipseData.md#__clipafterfill)
- [\_\_hasSurface](EllipseData.md#__hassurface)
- [\_\_autoWidth](EllipseData.md#__autowidth)
- [\_\_autoHeight](EllipseData.md#__autoheight)
- [\_\_autoSide](EllipseData.md#__autoside)
- [\_\_autoSize](EllipseData.md#__autosize)

### Methods

- [\_\_get](EllipseData.md#__get)
- [\_\_getData](EllipseData.md#__getdata)
- [\_\_setInput](EllipseData.md#__setinput)
- [\_\_getInput](EllipseData.md#__getinput)
- [\_\_removeInput](EllipseData.md#__removeinput)
- [\_\_getInputData](EllipseData.md#__getinputdata)
- [\_\_setMiddle](EllipseData.md#__setmiddle)
- [\_\_getMiddle](EllipseData.md#__getmiddle)
- [\_\_checkSingle](EllipseData.md#__checksingle)
- [\_\_removeNaturalSize](EllipseData.md#__removenaturalsize)
- [destroy](EllipseData.md#destroy)
- [setVisible](EllipseData.md#setvisible)
- [setWidth](EllipseData.md#setwidth)
- [setHeight](EllipseData.md#setheight)
- [setFill](EllipseData.md#setfill)
- [setStroke](EllipseData.md#setstroke)
- [setPath](EllipseData.md#setpath)
- [setShadow](EllipseData.md#setshadow)
- [setInnerShadow](EllipseData.md#setinnershadow)
- [setFilter](EllipseData.md#setfilter)
- [\_\_computePaint](EllipseData.md#__computepaint)

## Constructors

### constructor

• **new EllipseData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[UIData](UIData.md).[constructor](UIData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__input](../interfaces/IEllipseData.md#__input)

#### Inherited from

[UIData](UIData.md).[__input](UIData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__middle](../interfaces/IEllipseData.md#__middle)

#### Inherited from

[UIData](UIData.md).[__middle](UIData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__single](../interfaces/IEllipseData.md#__single)

#### Inherited from

[UIData](UIData.md).[__single](UIData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__naturalWidth](../interfaces/IEllipseData.md#__naturalwidth)

#### Inherited from

[UIData](UIData.md).[__naturalWidth](UIData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__naturalHeight](../interfaces/IEllipseData.md#__naturalheight)

#### Inherited from

[UIData](UIData.md).[__naturalHeight](UIData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__pathForRender](../interfaces/IEllipseData.md#__pathforrender)

#### Inherited from

[UIData](UIData.md).[__pathForRender](UIData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__leaf](../interfaces/IEllipseData.md#__leaf)

#### Inherited from

[UIData](UIData.md).[__leaf](UIData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__blendLayer](../interfaces/IEllipseData.md#__blendlayer)

#### Inherited from

[UIData](UIData.md).[__blendLayer](UIData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__isFills](../interfaces/IEllipseData.md#__isfills)

#### Inherited from

[UIData](UIData.md).[__isFills](UIData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__isStrokes](../interfaces/IEllipseData.md#__isstrokes)

#### Inherited from

[UIData](UIData.md).[__isStrokes](UIData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__pixelFill](../interfaces/IEllipseData.md#__pixelfill)

#### Inherited from

[UIData](UIData.md).[__pixelFill](UIData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__pixelStroke](../interfaces/IEllipseData.md#__pixelstroke)

#### Inherited from

[UIData](UIData.md).[__pixelStroke](UIData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__needComputePaint](../interfaces/IEllipseData.md#__needcomputepaint)

#### Inherited from

[UIData](UIData.md).[__needComputePaint](UIData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:46](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L46)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[UIData](UIData.md).[_visible](UIData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L48)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[UIData](UIData.md).[_width](UIData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L50)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[UIData](UIData.md).[_height](UIData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:51](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L51)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_fill](UIData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L53)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_stroke](UIData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L54)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[UIData](UIData.md).[_path](UIData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L56)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_shadow](UIData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L58)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_innerShadow](UIData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:59](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L59)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__useNaturalRatio](../interfaces/IEllipseData.md#__usenaturalratio)

#### Inherited from

UIData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__isLinePath](../interfaces/IEllipseData.md#__islinepath)

#### Inherited from

UIData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__blendMode](../interfaces/IEllipseData.md#__blendmode)

#### Inherited from

UIData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L24)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__boxStroke](../interfaces/IEllipseData.md#__boxstroke)

#### Defined in

[ui/packages/display-module/data/src/EllipseData.ts:7](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/EllipseData.ts#L7)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[scale](../interfaces/IEllipseData.md#scale)

#### Inherited from

UIData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:15](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L15)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__strokeWidth](../interfaces/IEllipseData.md#__strokewidth)

#### Inherited from

UIData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:22](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L22)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__hasStroke](../interfaces/IEllipseData.md#__hasstroke)

#### Inherited from

UIData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__hasHalf](../interfaces/IEllipseData.md#__hashalf)

#### Inherited from

UIData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__hasMultiPaint](../interfaces/IEllipseData.md#__hasmultipaint)

#### Inherited from

UIData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__clipAfterFill](../interfaces/IEllipseData.md#__clipafterfill)

#### Inherited from

UIData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:43](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L43)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__hasSurface](../interfaces/IEllipseData.md#__hassurface)

#### Inherited from

UIData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__autoWidth](../interfaces/IEllipseData.md#__autowidth)

#### Inherited from

UIData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L61)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__autoHeight](../interfaces/IEllipseData.md#__autoheight)

#### Inherited from

UIData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L62)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__autoSide](../interfaces/IEllipseData.md#__autoside)

#### Inherited from

UIData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L63)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__autoSize](../interfaces/IEllipseData.md#__autosize)

#### Inherited from

UIData.\_\_autoSize

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

[IEllipseData](../interfaces/IEllipseData.md).[__get](../interfaces/IEllipseData.md#__get)

#### Inherited from

[UIData](UIData.md).[__get](UIData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__getData](../interfaces/IEllipseData.md#__getdata)

#### Inherited from

[UIData](UIData.md).[__getData](UIData.md#__getdata)

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

[IEllipseData](../interfaces/IEllipseData.md).[__setInput](../interfaces/IEllipseData.md#__setinput)

#### Inherited from

[UIData](UIData.md).[__setInput](UIData.md#__setinput)

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

[IEllipseData](../interfaces/IEllipseData.md).[__getInput](../interfaces/IEllipseData.md#__getinput)

#### Inherited from

[UIData](UIData.md).[__getInput](UIData.md#__getinput)

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

[IEllipseData](../interfaces/IEllipseData.md).[__removeInput](../interfaces/IEllipseData.md#__removeinput)

#### Inherited from

[UIData](UIData.md).[__removeInput](UIData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:70](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L70)

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

[IEllipseData](../interfaces/IEllipseData.md).[__getInputData](../interfaces/IEllipseData.md#__getinputdata)

#### Inherited from

[UIData](UIData.md).[__getInputData](UIData.md#__getinputdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:74](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L74)

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

[IEllipseData](../interfaces/IEllipseData.md).[__setMiddle](../interfaces/IEllipseData.md#__setmiddle)

#### Inherited from

[UIData](UIData.md).[__setMiddle](UIData.md#__setmiddle)

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

[IEllipseData](../interfaces/IEllipseData.md).[__getMiddle](../interfaces/IEllipseData.md#__getmiddle)

#### Inherited from

[UIData](UIData.md).[__getMiddle](UIData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__checkSingle](../interfaces/IEllipseData.md#__checksingle)

#### Inherited from

[UIData](UIData.md).[__checkSingle](UIData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__removeNaturalSize](../interfaces/IEllipseData.md#__removenaturalsize)

#### Inherited from

[UIData](UIData.md).[__removeNaturalSize](UIData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[destroy](../interfaces/IEllipseData.md#destroy)

#### Inherited from

[UIData](UIData.md).[destroy](UIData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:141](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L141)

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

[UIData](UIData.md).[setVisible](UIData.md#setvisible)

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

[UIData](UIData.md).[setWidth](UIData.md#setwidth)

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

[UIData](UIData.md).[setHeight](UIData.md#setheight)

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

[UIData](UIData.md).[setFill](UIData.md#setfill)

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

[UIData](UIData.md).[setStroke](UIData.md#setstroke)

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

[UIData](UIData.md).[setPath](UIData.md#setpath)

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

[UIData](UIData.md).[setShadow](UIData.md#setshadow)

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

[UIData](UIData.md).[setInnerShadow](UIData.md#setinnershadow)

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

[UIData](UIData.md).[setFilter](UIData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:149](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L149)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IEllipseData](../interfaces/IEllipseData.md).[__computePaint](../interfaces/IEllipseData.md#__computepaint)

#### Inherited from

[UIData](UIData.md).[__computePaint](UIData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L156)
