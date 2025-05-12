# Class: LeaferData

## Hierarchy

- [`GroupData`](GroupData.md)

  ↳ **`LeaferData`**

## Implements

- [`ILeaferData`](../interfaces/ILeaferData.md)

## Table of contents

### Constructors

- [constructor](LeaferData.md#constructor)

### Properties

- [\_\_input](LeaferData.md#__input)
- [\_\_middle](LeaferData.md#__middle)
- [\_\_single](LeaferData.md#__single)
- [\_\_naturalWidth](LeaferData.md#__naturalwidth)
- [\_\_naturalHeight](LeaferData.md#__naturalheight)
- [\_\_pathForRender](LeaferData.md#__pathforrender)
- [\_\_leaf](LeaferData.md#__leaf)
- [\_\_blendLayer](LeaferData.md#__blendlayer)
- [\_\_isFills](LeaferData.md#__isfills)
- [\_\_isStrokes](LeaferData.md#__isstrokes)
- [\_\_pixelFill](LeaferData.md#__pixelfill)
- [\_\_pixelStroke](LeaferData.md#__pixelstroke)
- [\_\_needComputePaint](LeaferData.md#__needcomputepaint)
- [\_visible](LeaferData.md#_visible)
- [\_width](LeaferData.md#_width)
- [\_height](LeaferData.md#_height)
- [\_fill](LeaferData.md#_fill)
- [\_stroke](LeaferData.md#_stroke)
- [\_path](LeaferData.md#_path)
- [\_shadow](LeaferData.md#_shadow)
- [\_innerShadow](LeaferData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](LeaferData.md#__usenaturalratio)
- [\_\_isLinePath](LeaferData.md#__islinepath)
- [\_\_blendMode](LeaferData.md#__blendmode)
- [scale](LeaferData.md#scale)
- [\_\_strokeWidth](LeaferData.md#__strokewidth)
- [\_\_hasStroke](LeaferData.md#__hasstroke)
- [\_\_hasHalf](LeaferData.md#__hashalf)
- [\_\_hasMultiPaint](LeaferData.md#__hasmultipaint)
- [\_\_clipAfterFill](LeaferData.md#__clipafterfill)
- [\_\_hasSurface](LeaferData.md#__hassurface)
- [\_\_autoWidth](LeaferData.md#__autowidth)
- [\_\_autoHeight](LeaferData.md#__autoheight)
- [\_\_autoSide](LeaferData.md#__autoside)
- [\_\_autoSize](LeaferData.md#__autosize)

### Methods

- [\_\_get](LeaferData.md#__get)
- [\_\_getData](LeaferData.md#__getdata)
- [\_\_setInput](LeaferData.md#__setinput)
- [\_\_getInput](LeaferData.md#__getinput)
- [\_\_removeInput](LeaferData.md#__removeinput)
- [\_\_setMiddle](LeaferData.md#__setmiddle)
- [\_\_getMiddle](LeaferData.md#__getmiddle)
- [\_\_checkSingle](LeaferData.md#__checksingle)
- [\_\_removeNaturalSize](LeaferData.md#__removenaturalsize)
- [destroy](LeaferData.md#destroy)
- [\_\_getInputData](LeaferData.md#__getinputdata)
- [setVisible](LeaferData.md#setvisible)
- [setWidth](LeaferData.md#setwidth)
- [setHeight](LeaferData.md#setheight)
- [setFill](LeaferData.md#setfill)
- [setStroke](LeaferData.md#setstroke)
- [setPath](LeaferData.md#setpath)
- [setShadow](LeaferData.md#setshadow)
- [setInnerShadow](LeaferData.md#setinnershadow)
- [setFilter](LeaferData.md#setfilter)
- [\_\_computePaint](LeaferData.md#__computepaint)

## Constructors

### constructor

• **new LeaferData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[GroupData](GroupData.md).[constructor](GroupData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__input](../interfaces/ILeaferData.md#__input)

#### Inherited from

[GroupData](GroupData.md).[__input](GroupData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__middle](../interfaces/ILeaferData.md#__middle)

#### Inherited from

[GroupData](GroupData.md).[__middle](GroupData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__single](../interfaces/ILeaferData.md#__single)

#### Inherited from

[GroupData](GroupData.md).[__single](GroupData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__naturalWidth](../interfaces/ILeaferData.md#__naturalwidth)

#### Inherited from

[GroupData](GroupData.md).[__naturalWidth](GroupData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__naturalHeight](../interfaces/ILeaferData.md#__naturalheight)

#### Inherited from

[GroupData](GroupData.md).[__naturalHeight](GroupData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__pathForRender](../interfaces/ILeaferData.md#__pathforrender)

#### Inherited from

[GroupData](GroupData.md).[__pathForRender](GroupData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__leaf](../interfaces/ILeaferData.md#__leaf)

#### Inherited from

[GroupData](GroupData.md).[__leaf](GroupData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__blendLayer](../interfaces/ILeaferData.md#__blendlayer)

#### Inherited from

[GroupData](GroupData.md).[__blendLayer](GroupData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__isFills](../interfaces/ILeaferData.md#__isfills)

#### Inherited from

[GroupData](GroupData.md).[__isFills](GroupData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__isStrokes](../interfaces/ILeaferData.md#__isstrokes)

#### Inherited from

[GroupData](GroupData.md).[__isStrokes](GroupData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__pixelFill](../interfaces/ILeaferData.md#__pixelfill)

#### Inherited from

[GroupData](GroupData.md).[__pixelFill](GroupData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__pixelStroke](../interfaces/ILeaferData.md#__pixelstroke)

#### Inherited from

[GroupData](GroupData.md).[__pixelStroke](GroupData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__needComputePaint](../interfaces/ILeaferData.md#__needcomputepaint)

#### Inherited from

[GroupData](GroupData.md).[__needComputePaint](GroupData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:46](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L46)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[GroupData](GroupData.md).[_visible](GroupData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L48)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[GroupData](GroupData.md).[_width](GroupData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L50)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[GroupData](GroupData.md).[_height](GroupData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:51](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L51)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_fill](GroupData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L53)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_stroke](GroupData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L54)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[GroupData](GroupData.md).[_path](GroupData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L56)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_shadow](GroupData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L58)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_innerShadow](GroupData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:59](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L59)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__useNaturalRatio](../interfaces/ILeaferData.md#__usenaturalratio)

#### Inherited from

GroupData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__isLinePath](../interfaces/ILeaferData.md#__islinepath)

#### Inherited from

GroupData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__blendMode](../interfaces/ILeaferData.md#__blendmode)

#### Inherited from

GroupData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[scale](../interfaces/ILeaferData.md#scale)

#### Inherited from

GroupData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:15](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L15)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__strokeWidth](../interfaces/ILeaferData.md#__strokewidth)

#### Inherited from

GroupData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:22](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L22)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__hasStroke](../interfaces/ILeaferData.md#__hasstroke)

#### Inherited from

GroupData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__hasHalf](../interfaces/ILeaferData.md#__hashalf)

#### Inherited from

GroupData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__hasMultiPaint](../interfaces/ILeaferData.md#__hasmultipaint)

#### Inherited from

GroupData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__clipAfterFill](../interfaces/ILeaferData.md#__clipafterfill)

#### Inherited from

GroupData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:43](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L43)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__hasSurface](../interfaces/ILeaferData.md#__hassurface)

#### Inherited from

GroupData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__autoWidth](../interfaces/ILeaferData.md#__autowidth)

#### Inherited from

GroupData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L61)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__autoHeight](../interfaces/ILeaferData.md#__autoheight)

#### Inherited from

GroupData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L62)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__autoSide](../interfaces/ILeaferData.md#__autoside)

#### Inherited from

GroupData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L63)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__autoSize](../interfaces/ILeaferData.md#__autosize)

#### Inherited from

GroupData.\_\_autoSize

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

[ILeaferData](../interfaces/ILeaferData.md).[__get](../interfaces/ILeaferData.md#__get)

#### Inherited from

[GroupData](GroupData.md).[__get](GroupData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__getData](../interfaces/ILeaferData.md#__getdata)

#### Inherited from

[GroupData](GroupData.md).[__getData](GroupData.md#__getdata)

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

[ILeaferData](../interfaces/ILeaferData.md).[__setInput](../interfaces/ILeaferData.md#__setinput)

#### Inherited from

[GroupData](GroupData.md).[__setInput](GroupData.md#__setinput)

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

[ILeaferData](../interfaces/ILeaferData.md).[__getInput](../interfaces/ILeaferData.md#__getinput)

#### Inherited from

[GroupData](GroupData.md).[__getInput](GroupData.md#__getinput)

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

[ILeaferData](../interfaces/ILeaferData.md).[__removeInput](../interfaces/ILeaferData.md#__removeinput)

#### Inherited from

[GroupData](GroupData.md).[__removeInput](GroupData.md#__removeinput)

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

[ILeaferData](../interfaces/ILeaferData.md).[__setMiddle](../interfaces/ILeaferData.md#__setmiddle)

#### Inherited from

[GroupData](GroupData.md).[__setMiddle](GroupData.md#__setmiddle)

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

[ILeaferData](../interfaces/ILeaferData.md).[__getMiddle](../interfaces/ILeaferData.md#__getmiddle)

#### Inherited from

[GroupData](GroupData.md).[__getMiddle](GroupData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__checkSingle](../interfaces/ILeaferData.md#__checksingle)

#### Inherited from

[GroupData](GroupData.md).[__checkSingle](GroupData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__removeNaturalSize](../interfaces/ILeaferData.md#__removenaturalsize)

#### Inherited from

[GroupData](GroupData.md).[__removeNaturalSize](GroupData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[destroy](../interfaces/ILeaferData.md#destroy)

#### Inherited from

[GroupData](GroupData.md).[destroy](GroupData.md#destroy)

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

[ILeaferData](../interfaces/ILeaferData.md).[__getInputData](../interfaces/ILeaferData.md#__getinputdata)

#### Overrides

[GroupData](GroupData.md).[__getInputData](GroupData.md#__getinputdata)

#### Defined in

[ui/packages/display-module/data/src/LeaferData.ts:9](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/LeaferData.ts#L9)

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

[GroupData](GroupData.md).[setVisible](GroupData.md#setvisible)

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

[GroupData](GroupData.md).[setWidth](GroupData.md#setwidth)

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

[GroupData](GroupData.md).[setHeight](GroupData.md#setheight)

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

[GroupData](GroupData.md).[setFill](GroupData.md#setfill)

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

[GroupData](GroupData.md).[setStroke](GroupData.md#setstroke)

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

[GroupData](GroupData.md).[setPath](GroupData.md#setpath)

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

[GroupData](GroupData.md).[setShadow](GroupData.md#setshadow)

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

[GroupData](GroupData.md).[setInnerShadow](GroupData.md#setinnershadow)

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

[GroupData](GroupData.md).[setFilter](GroupData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:149](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L149)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferData](../interfaces/ILeaferData.md).[__computePaint](../interfaces/ILeaferData.md#__computepaint)

#### Inherited from

[GroupData](GroupData.md).[__computePaint](GroupData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L156)
