# Class: GroupData

## Hierarchy

- [`UIData`](UIData.md)

  ↳ **`GroupData`**

  ↳↳ [`BoxData`](BoxData.md)

  ↳↳ [`LeaferData`](LeaferData.md)

  ↳↳ [`PenData`](PenData.md)

## Implements

- [`IGroupData`](../interfaces/IGroupData.md)

## Table of contents

### Constructors

- [constructor](GroupData.md#constructor)

### Properties

- [\_\_input](GroupData.md#__input)
- [\_\_middle](GroupData.md#__middle)
- [\_\_single](GroupData.md#__single)
- [\_\_naturalWidth](GroupData.md#__naturalwidth)
- [\_\_naturalHeight](GroupData.md#__naturalheight)
- [\_\_pathForRender](GroupData.md#__pathforrender)
- [\_\_leaf](GroupData.md#__leaf)
- [\_\_blendLayer](GroupData.md#__blendlayer)
- [\_\_isFills](GroupData.md#__isfills)
- [\_\_isStrokes](GroupData.md#__isstrokes)
- [\_\_pixelFill](GroupData.md#__pixelfill)
- [\_\_pixelStroke](GroupData.md#__pixelstroke)
- [\_\_needComputePaint](GroupData.md#__needcomputepaint)
- [\_visible](GroupData.md#_visible)
- [\_width](GroupData.md#_width)
- [\_height](GroupData.md#_height)
- [\_fill](GroupData.md#_fill)
- [\_stroke](GroupData.md#_stroke)
- [\_path](GroupData.md#_path)
- [\_shadow](GroupData.md#_shadow)
- [\_innerShadow](GroupData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](GroupData.md#__usenaturalratio)
- [\_\_isLinePath](GroupData.md#__islinepath)
- [\_\_blendMode](GroupData.md#__blendmode)
- [scale](GroupData.md#scale)
- [\_\_strokeWidth](GroupData.md#__strokewidth)
- [\_\_hasStroke](GroupData.md#__hasstroke)
- [\_\_hasHalf](GroupData.md#__hashalf)
- [\_\_hasMultiPaint](GroupData.md#__hasmultipaint)
- [\_\_clipAfterFill](GroupData.md#__clipafterfill)
- [\_\_hasSurface](GroupData.md#__hassurface)
- [\_\_autoWidth](GroupData.md#__autowidth)
- [\_\_autoHeight](GroupData.md#__autoheight)
- [\_\_autoSide](GroupData.md#__autoside)
- [\_\_autoSize](GroupData.md#__autosize)

### Methods

- [\_\_get](GroupData.md#__get)
- [\_\_getData](GroupData.md#__getdata)
- [\_\_setInput](GroupData.md#__setinput)
- [\_\_getInput](GroupData.md#__getinput)
- [\_\_removeInput](GroupData.md#__removeinput)
- [\_\_getInputData](GroupData.md#__getinputdata)
- [\_\_setMiddle](GroupData.md#__setmiddle)
- [\_\_getMiddle](GroupData.md#__getmiddle)
- [\_\_checkSingle](GroupData.md#__checksingle)
- [\_\_removeNaturalSize](GroupData.md#__removenaturalsize)
- [destroy](GroupData.md#destroy)
- [setVisible](GroupData.md#setvisible)
- [setWidth](GroupData.md#setwidth)
- [setHeight](GroupData.md#setheight)
- [setFill](GroupData.md#setfill)
- [setStroke](GroupData.md#setstroke)
- [setPath](GroupData.md#setpath)
- [setShadow](GroupData.md#setshadow)
- [setInnerShadow](GroupData.md#setinnershadow)
- [setFilter](GroupData.md#setfilter)
- [\_\_computePaint](GroupData.md#__computepaint)

## Constructors

### constructor

• **new GroupData**(`leaf`)

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

[IGroupData](../interfaces/IGroupData.md).[__input](../interfaces/IGroupData.md#__input)

#### Inherited from

[UIData](UIData.md).[__input](UIData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__middle](../interfaces/IGroupData.md#__middle)

#### Inherited from

[UIData](UIData.md).[__middle](UIData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__single](../interfaces/IGroupData.md#__single)

#### Inherited from

[UIData](UIData.md).[__single](UIData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__naturalWidth](../interfaces/IGroupData.md#__naturalwidth)

#### Inherited from

[UIData](UIData.md).[__naturalWidth](UIData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__naturalHeight](../interfaces/IGroupData.md#__naturalheight)

#### Inherited from

[UIData](UIData.md).[__naturalHeight](UIData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__pathForRender](../interfaces/IGroupData.md#__pathforrender)

#### Inherited from

[UIData](UIData.md).[__pathForRender](UIData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__leaf](../interfaces/IGroupData.md#__leaf)

#### Inherited from

[UIData](UIData.md).[__leaf](UIData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__blendLayer](../interfaces/IGroupData.md#__blendlayer)

#### Inherited from

[UIData](UIData.md).[__blendLayer](UIData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__isFills](../interfaces/IGroupData.md#__isfills)

#### Inherited from

[UIData](UIData.md).[__isFills](UIData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__isStrokes](../interfaces/IGroupData.md#__isstrokes)

#### Inherited from

[UIData](UIData.md).[__isStrokes](UIData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__pixelFill](../interfaces/IGroupData.md#__pixelfill)

#### Inherited from

[UIData](UIData.md).[__pixelFill](UIData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__pixelStroke](../interfaces/IGroupData.md#__pixelstroke)

#### Inherited from

[UIData](UIData.md).[__pixelStroke](UIData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[__needComputePaint](../interfaces/IGroupData.md#__needcomputepaint)

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

[IGroupData](../interfaces/IGroupData.md).[__useNaturalRatio](../interfaces/IGroupData.md#__usenaturalratio)

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

[IGroupData](../interfaces/IGroupData.md).[__isLinePath](../interfaces/IGroupData.md#__islinepath)

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

[IGroupData](../interfaces/IGroupData.md).[__blendMode](../interfaces/IGroupData.md#__blendmode)

#### Inherited from

UIData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IGroupData](../interfaces/IGroupData.md).[scale](../interfaces/IGroupData.md#scale)

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

[IGroupData](../interfaces/IGroupData.md).[__strokeWidth](../interfaces/IGroupData.md#__strokewidth)

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

[IGroupData](../interfaces/IGroupData.md).[__hasStroke](../interfaces/IGroupData.md#__hasstroke)

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

[IGroupData](../interfaces/IGroupData.md).[__hasHalf](../interfaces/IGroupData.md#__hashalf)

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

[IGroupData](../interfaces/IGroupData.md).[__hasMultiPaint](../interfaces/IGroupData.md#__hasmultipaint)

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

[IGroupData](../interfaces/IGroupData.md).[__clipAfterFill](../interfaces/IGroupData.md#__clipafterfill)

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

[IGroupData](../interfaces/IGroupData.md).[__hasSurface](../interfaces/IGroupData.md#__hassurface)

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

[IGroupData](../interfaces/IGroupData.md).[__autoWidth](../interfaces/IGroupData.md#__autowidth)

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

[IGroupData](../interfaces/IGroupData.md).[__autoHeight](../interfaces/IGroupData.md#__autoheight)

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

[IGroupData](../interfaces/IGroupData.md).[__autoSide](../interfaces/IGroupData.md#__autoside)

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

[IGroupData](../interfaces/IGroupData.md).[__autoSize](../interfaces/IGroupData.md#__autosize)

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

[IGroupData](../interfaces/IGroupData.md).[__get](../interfaces/IGroupData.md#__get)

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

[IGroupData](../interfaces/IGroupData.md).[__getData](../interfaces/IGroupData.md#__getdata)

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

[IGroupData](../interfaces/IGroupData.md).[__setInput](../interfaces/IGroupData.md#__setinput)

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

[IGroupData](../interfaces/IGroupData.md).[__getInput](../interfaces/IGroupData.md#__getinput)

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

[IGroupData](../interfaces/IGroupData.md).[__removeInput](../interfaces/IGroupData.md#__removeinput)

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

[IGroupData](../interfaces/IGroupData.md).[__getInputData](../interfaces/IGroupData.md#__getinputdata)

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

[IGroupData](../interfaces/IGroupData.md).[__setMiddle](../interfaces/IGroupData.md#__setmiddle)

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

[IGroupData](../interfaces/IGroupData.md).[__getMiddle](../interfaces/IGroupData.md#__getmiddle)

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

[IGroupData](../interfaces/IGroupData.md).[__checkSingle](../interfaces/IGroupData.md#__checksingle)

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

[IGroupData](../interfaces/IGroupData.md).[__removeNaturalSize](../interfaces/IGroupData.md#__removenaturalsize)

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

[IGroupData](../interfaces/IGroupData.md).[destroy](../interfaces/IGroupData.md#destroy)

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

[IGroupData](../interfaces/IGroupData.md).[__computePaint](../interfaces/IGroupData.md#__computepaint)

#### Inherited from

[UIData](UIData.md).[__computePaint](UIData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L156)
