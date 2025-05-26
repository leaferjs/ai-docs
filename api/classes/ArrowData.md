# Class: ArrowData

## Hierarchy

- [`LineData`](LineData.md)

  ↳ **`ArrowData`**

## Implements

- [`IArrowData`](../interfaces/IArrowData.md)

## Table of contents

### Constructors

- [constructor](ArrowData.md#constructor)

### Properties

- [\_\_input](ArrowData.md#__input)
- [\_\_middle](ArrowData.md#__middle)
- [\_\_single](ArrowData.md#__single)
- [\_\_naturalWidth](ArrowData.md#__naturalwidth)
- [\_\_naturalHeight](ArrowData.md#__naturalheight)
- [\_\_pathForRender](ArrowData.md#__pathforrender)
- [\_\_leaf](ArrowData.md#__leaf)
- [\_\_blendLayer](ArrowData.md#__blendlayer)
- [\_\_isFills](ArrowData.md#__isfills)
- [\_\_isStrokes](ArrowData.md#__isstrokes)
- [\_\_isAlphaPixelFill](ArrowData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ArrowData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ArrowData.md#__istransparentfill)
- [\_\_isTransparentStroke](ArrowData.md#__istransparentstroke)
- [\_\_needComputePaint](ArrowData.md#__needcomputepaint)
- [\_visible](ArrowData.md#_visible)
- [\_width](ArrowData.md#_width)
- [\_height](ArrowData.md#_height)
- [\_fill](ArrowData.md#_fill)
- [\_stroke](ArrowData.md#_stroke)
- [\_path](ArrowData.md#_path)
- [\_shadow](ArrowData.md#_shadow)
- [\_innerShadow](ArrowData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](ArrowData.md#__usenaturalratio)
- [\_\_isLinePath](ArrowData.md#__islinepath)
- [\_\_blendMode](ArrowData.md#__blendmode)
- [scale](ArrowData.md#scale)
- [\_\_strokeWidth](ArrowData.md#__strokewidth)
- [\_\_hasStroke](ArrowData.md#__hasstroke)
- [\_\_hasHalf](ArrowData.md#__hashalf)
- [\_\_hasMultiPaint](ArrowData.md#__hasmultipaint)
- [\_\_clipAfterFill](ArrowData.md#__clipafterfill)
- [\_\_hasSurface](ArrowData.md#__hassurface)
- [\_\_autoWidth](ArrowData.md#__autowidth)
- [\_\_autoHeight](ArrowData.md#__autoheight)
- [\_\_autoSide](ArrowData.md#__autoside)
- [\_\_autoSize](ArrowData.md#__autosize)

### Methods

- [\_\_get](ArrowData.md#__get)
- [\_\_getData](ArrowData.md#__getdata)
- [\_\_setInput](ArrowData.md#__setinput)
- [\_\_getInput](ArrowData.md#__getinput)
- [\_\_removeInput](ArrowData.md#__removeinput)
- [\_\_getInputData](ArrowData.md#__getinputdata)
- [\_\_setMiddle](ArrowData.md#__setmiddle)
- [\_\_getMiddle](ArrowData.md#__getmiddle)
- [\_\_checkSingle](ArrowData.md#__checksingle)
- [\_\_removeNaturalSize](ArrowData.md#__removenaturalsize)
- [destroy](ArrowData.md#destroy)
- [setVisible](ArrowData.md#setvisible)
- [setWidth](ArrowData.md#setwidth)
- [setHeight](ArrowData.md#setheight)
- [setFill](ArrowData.md#setfill)
- [setStroke](ArrowData.md#setstroke)
- [setPath](ArrowData.md#setpath)
- [setShadow](ArrowData.md#setshadow)
- [setInnerShadow](ArrowData.md#setinnershadow)
- [setFilter](ArrowData.md#setfilter)
- [\_\_computePaint](ArrowData.md#__computepaint)
- [\_\_setPaint](ArrowData.md#__setpaint)
- [\_\_removePaint](ArrowData.md#__removepaint)

## Constructors

### constructor

• **new ArrowData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[LineData](LineData.md).[constructor](LineData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__input](../interfaces/IArrowData.md#__input)

#### Inherited from

[LineData](LineData.md).[__input](LineData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__middle](../interfaces/IArrowData.md#__middle)

#### Inherited from

[LineData](LineData.md).[__middle](LineData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__single](../interfaces/IArrowData.md#__single)

#### Inherited from

[LineData](LineData.md).[__single](LineData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__naturalWidth](../interfaces/IArrowData.md#__naturalwidth)

#### Inherited from

[LineData](LineData.md).[__naturalWidth](LineData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__naturalHeight](../interfaces/IArrowData.md#__naturalheight)

#### Inherited from

[LineData](LineData.md).[__naturalHeight](LineData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__pathForRender](../interfaces/IArrowData.md#__pathforrender)

#### Inherited from

[LineData](LineData.md).[__pathForRender](LineData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__leaf](../interfaces/IArrowData.md#__leaf)

#### Inherited from

[LineData](LineData.md).[__leaf](LineData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__blendLayer](../interfaces/IArrowData.md#__blendlayer)

#### Inherited from

[LineData](LineData.md).[__blendLayer](LineData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isFills](../interfaces/IArrowData.md#__isfills)

#### Inherited from

[LineData](LineData.md).[__isFills](LineData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isStrokes](../interfaces/IArrowData.md#__isstrokes)

#### Inherited from

[LineData](LineData.md).[__isStrokes](LineData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isAlphaPixelFill](../interfaces/IArrowData.md#__isalphapixelfill)

#### Inherited from

[LineData](LineData.md).[__isAlphaPixelFill](LineData.md#__isalphapixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isAlphaPixelStroke](../interfaces/IArrowData.md#__isalphapixelstroke)

#### Inherited from

[LineData](LineData.md).[__isAlphaPixelStroke](LineData.md#__isalphapixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L42)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isTransparentFill](../interfaces/IArrowData.md#__istransparentfill)

#### Inherited from

[LineData](LineData.md).[__isTransparentFill](LineData.md#__istransparentfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isTransparentStroke](../interfaces/IArrowData.md#__istransparentstroke)

#### Inherited from

[LineData](LineData.md).[__isTransparentStroke](LineData.md#__istransparentstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L45)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__needComputePaint](../interfaces/IArrowData.md#__needcomputepaint)

#### Inherited from

[LineData](LineData.md).[__needComputePaint](LineData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L50)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[LineData](LineData.md).[_visible](LineData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L52)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[LineData](LineData.md).[_width](LineData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L54)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[LineData](LineData.md).[_height](LineData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L55)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[LineData](LineData.md).[_fill](LineData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L57)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[LineData](LineData.md).[_stroke](LineData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L58)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[LineData](LineData.md).[_path](LineData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:60](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L60)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[LineData](LineData.md).[_shadow](LineData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L62)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[LineData](LineData.md).[_innerShadow](LineData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L63)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__useNaturalRatio](../interfaces/IArrowData.md#__usenaturalratio)

#### Inherited from

LineData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__isLinePath](../interfaces/IArrowData.md#__islinepath)

#### Inherited from

LineData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__blendMode](../interfaces/IArrowData.md#__blendmode)

#### Inherited from

LineData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[scale](../interfaces/IArrowData.md#scale)

#### Inherited from

LineData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__strokeWidth](../interfaces/IArrowData.md#__strokewidth)

#### Inherited from

LineData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__hasStroke](../interfaces/IArrowData.md#__hasstroke)

#### Inherited from

LineData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__hasHalf](../interfaces/IArrowData.md#__hashalf)

#### Inherited from

LineData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__hasMultiPaint](../interfaces/IArrowData.md#__hasmultipaint)

#### Inherited from

LineData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__clipAfterFill](../interfaces/IArrowData.md#__clipafterfill)

#### Inherited from

LineData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L47)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__hasSurface](../interfaces/IArrowData.md#__hassurface)

#### Inherited from

LineData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L48)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__autoWidth](../interfaces/IArrowData.md#__autowidth)

#### Inherited from

LineData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L65)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__autoHeight](../interfaces/IArrowData.md#__autoheight)

#### Inherited from

LineData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L66)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__autoSide](../interfaces/IArrowData.md#__autoside)

#### Inherited from

LineData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:67](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L67)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__autoSize](../interfaces/IArrowData.md#__autosize)

#### Inherited from

LineData.\_\_autoSize

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:68](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L68)

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

[IArrowData](../interfaces/IArrowData.md).[__get](../interfaces/IArrowData.md#__get)

#### Inherited from

[LineData](LineData.md).[__get](LineData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__getData](../interfaces/IArrowData.md#__getdata)

#### Inherited from

[LineData](LineData.md).[__getData](LineData.md#__getdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:42](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L42)

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

[IArrowData](../interfaces/IArrowData.md).[__setInput](../interfaces/IArrowData.md#__setinput)

#### Inherited from

[LineData](LineData.md).[__setInput](LineData.md#__setinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:54](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L54)

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

[IArrowData](../interfaces/IArrowData.md).[__getInput](../interfaces/IArrowData.md#__getinput)

#### Inherited from

[LineData](LineData.md).[__getInput](LineData.md#__getinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:59](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L59)

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

[IArrowData](../interfaces/IArrowData.md).[__removeInput](../interfaces/IArrowData.md#__removeinput)

#### Inherited from

[LineData](LineData.md).[__removeInput](LineData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:70](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L70)

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

[IArrowData](../interfaces/IArrowData.md).[__getInputData](../interfaces/IArrowData.md#__getinputdata)

#### Inherited from

[LineData](LineData.md).[__getInputData](LineData.md#__getinputdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:74](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L74)

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

[IArrowData](../interfaces/IArrowData.md).[__setMiddle](../interfaces/IArrowData.md#__setmiddle)

#### Inherited from

[LineData](LineData.md).[__setMiddle](LineData.md#__setmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:114](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L114)

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

[IArrowData](../interfaces/IArrowData.md).[__getMiddle](../interfaces/IArrowData.md#__getmiddle)

#### Inherited from

[LineData](LineData.md).[__getMiddle](LineData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__checkSingle](../interfaces/IArrowData.md#__checksingle)

#### Inherited from

[LineData](LineData.md).[__checkSingle](LineData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__removeNaturalSize](../interfaces/IArrowData.md#__removenaturalsize)

#### Inherited from

[LineData](LineData.md).[__removeNaturalSize](LineData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[destroy](../interfaces/IArrowData.md#destroy)

#### Inherited from

[LineData](LineData.md).[destroy](LineData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:141](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L141)

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

[LineData](LineData.md).[setVisible](LineData.md#setvisible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:71](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L71)

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

[LineData](LineData.md).[setWidth](LineData.md#setwidth)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:78](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L78)

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

[LineData](LineData.md).[setHeight](LineData.md#setheight)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:86](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L86)

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

[LineData](LineData.md).[setFill](LineData.md#setfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:95](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L95)

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

[LineData](LineData.md).[setStroke](LineData.md#setstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:106](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L106)

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

[LineData](LineData.md).[setPath](LineData.md#setpath)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:117](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L117)

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

[LineData](LineData.md).[setShadow](LineData.md#setshadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:129](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L129)

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

[LineData](LineData.md).[setInnerShadow](LineData.md#setinnershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:133](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L133)

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

[LineData](LineData.md).[setFilter](LineData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:137](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L137)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__computePaint](../interfaces/IArrowData.md#__computepaint)

#### Inherited from

[LineData](LineData.md).[__computePaint](LineData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:144](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L144)

___

### \_\_setPaint

▸ **__setPaint**(`attrName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | ``"fill"`` \| ``"stroke"`` |
| `value` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__setPaint](../interfaces/IArrowData.md#__setpaint)

#### Inherited from

[LineData](LineData.md).[__setPaint](LineData.md#__setpaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:151](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L151)

___

### \_\_removePaint

▸ **__removePaint**(`attrName`, `removeInput?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | ``"fill"`` \| ``"stroke"`` |
| `removeInput?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IArrowData](../interfaces/IArrowData.md).[__removePaint](../interfaces/IArrowData.md#__removepaint)

#### Inherited from

[LineData](LineData.md).[__removePaint](LineData.md#__removepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L163)
