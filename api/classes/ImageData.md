# Class: ImageData

## Hierarchy

- [`RectData`](RectData.md)

  ↳ **`ImageData`**

  ↳↳ [`HTMLTextData`](HTMLTextData.md)

## Implements

- [`IImageData`](../interfaces/IImageData.md)

## Table of contents

### Constructors

- [constructor](ImageData.md#constructor)

### Properties

- [\_\_input](ImageData.md#__input)
- [\_\_middle](ImageData.md#__middle)
- [\_\_single](ImageData.md#__single)
- [\_\_naturalWidth](ImageData.md#__naturalwidth)
- [\_\_naturalHeight](ImageData.md#__naturalheight)
- [\_\_pathForRender](ImageData.md#__pathforrender)
- [\_\_leaf](ImageData.md#__leaf)
- [\_url](ImageData.md#_url)
- [\_\_blendLayer](ImageData.md#__blendlayer)
- [\_\_isFills](ImageData.md#__isfills)
- [\_\_isStrokes](ImageData.md#__isstrokes)
- [\_\_isAlphaPixelFill](ImageData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](ImageData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](ImageData.md#__istransparentfill)
- [\_\_isTransparentStroke](ImageData.md#__istransparentstroke)
- [\_\_needComputePaint](ImageData.md#__needcomputepaint)
- [\_visible](ImageData.md#_visible)
- [\_width](ImageData.md#_width)
- [\_height](ImageData.md#_height)
- [\_fill](ImageData.md#_fill)
- [\_stroke](ImageData.md#_stroke)
- [\_path](ImageData.md#_path)
- [\_shadow](ImageData.md#_shadow)
- [\_innerShadow](ImageData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](ImageData.md#__usenaturalratio)
- [\_\_isLinePath](ImageData.md#__islinepath)
- [\_\_blendMode](ImageData.md#__blendmode)
- [\_\_boxStroke](ImageData.md#__boxstroke)
- [scale](ImageData.md#scale)
- [\_\_strokeWidth](ImageData.md#__strokewidth)
- [\_\_hasStroke](ImageData.md#__hasstroke)
- [\_\_hasHalf](ImageData.md#__hashalf)
- [\_\_hasMultiPaint](ImageData.md#__hasmultipaint)
- [\_\_clipAfterFill](ImageData.md#__clipafterfill)
- [\_\_hasSurface](ImageData.md#__hassurface)
- [\_\_autoWidth](ImageData.md#__autowidth)
- [\_\_autoHeight](ImageData.md#__autoheight)
- [\_\_autoSide](ImageData.md#__autoside)
- [\_\_autoSize](ImageData.md#__autosize)

### Methods

- [\_\_get](ImageData.md#__get)
- [\_\_setInput](ImageData.md#__setinput)
- [\_\_getInput](ImageData.md#__getinput)
- [\_\_removeInput](ImageData.md#__removeinput)
- [\_\_setMiddle](ImageData.md#__setmiddle)
- [\_\_getMiddle](ImageData.md#__getmiddle)
- [\_\_checkSingle](ImageData.md#__checksingle)
- [\_\_removeNaturalSize](ImageData.md#__removenaturalsize)
- [destroy](ImageData.md#destroy)
- [setUrl](ImageData.md#seturl)
- [\_\_setImageFill](ImageData.md#__setimagefill)
- [\_\_getData](ImageData.md#__getdata)
- [\_\_getInputData](ImageData.md#__getinputdata)
- [setVisible](ImageData.md#setvisible)
- [setWidth](ImageData.md#setwidth)
- [setHeight](ImageData.md#setheight)
- [setFill](ImageData.md#setfill)
- [setStroke](ImageData.md#setstroke)
- [setPath](ImageData.md#setpath)
- [setShadow](ImageData.md#setshadow)
- [setInnerShadow](ImageData.md#setinnershadow)
- [setFilter](ImageData.md#setfilter)
- [\_\_computePaint](ImageData.md#__computepaint)
- [\_\_setPaint](ImageData.md#__setpaint)
- [\_\_removePaint](ImageData.md#__removepaint)

## Constructors

### constructor

• **new ImageData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[RectData](RectData.md).[constructor](RectData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__input](../interfaces/IImageData.md#__input)

#### Inherited from

[RectData](RectData.md).[__input](RectData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__middle](../interfaces/IImageData.md#__middle)

#### Inherited from

[RectData](RectData.md).[__middle](RectData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__single](../interfaces/IImageData.md#__single)

#### Inherited from

[RectData](RectData.md).[__single](RectData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__naturalWidth](../interfaces/IImageData.md#__naturalwidth)

#### Inherited from

[RectData](RectData.md).[__naturalWidth](RectData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__naturalHeight](../interfaces/IImageData.md#__naturalheight)

#### Inherited from

[RectData](RectData.md).[__naturalHeight](RectData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__pathForRender](../interfaces/IImageData.md#__pathforrender)

#### Inherited from

[RectData](RectData.md).[__pathForRender](RectData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IImage`](../interfaces/IImage.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__leaf](../interfaces/IImageData.md#__leaf)

#### Overrides

[RectData](RectData.md).[__leaf](RectData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/ImageData.ts:8](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/ImageData.ts#L8)

___

### \_url

• `Protected` **\_url**: `string`

#### Defined in

[ui/packages/display-module/data/src/ImageData.ts:10](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/ImageData.ts#L10)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__blendLayer](../interfaces/IImageData.md#__blendlayer)

#### Inherited from

[RectData](RectData.md).[__blendLayer](RectData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isFills](../interfaces/IImageData.md#__isfills)

#### Inherited from

[RectData](RectData.md).[__isFills](RectData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isStrokes](../interfaces/IImageData.md#__isstrokes)

#### Inherited from

[RectData](RectData.md).[__isStrokes](RectData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isAlphaPixelFill](../interfaces/IImageData.md#__isalphapixelfill)

#### Inherited from

[RectData](RectData.md).[__isAlphaPixelFill](RectData.md#__isalphapixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isAlphaPixelStroke](../interfaces/IImageData.md#__isalphapixelstroke)

#### Inherited from

[RectData](RectData.md).[__isAlphaPixelStroke](RectData.md#__isalphapixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L42)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isTransparentFill](../interfaces/IImageData.md#__istransparentfill)

#### Inherited from

[RectData](RectData.md).[__isTransparentFill](RectData.md#__istransparentfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isTransparentStroke](../interfaces/IImageData.md#__istransparentstroke)

#### Inherited from

[RectData](RectData.md).[__isTransparentStroke](RectData.md#__istransparentstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L45)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__needComputePaint](../interfaces/IImageData.md#__needcomputepaint)

#### Inherited from

[RectData](RectData.md).[__needComputePaint](RectData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L50)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[RectData](RectData.md).[_visible](RectData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L52)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[RectData](RectData.md).[_width](RectData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L54)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[RectData](RectData.md).[_height](RectData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L55)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_fill](RectData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L57)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_stroke](RectData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L58)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[RectData](RectData.md).[_path](RectData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:60](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L60)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_shadow](RectData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L62)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[RectData](RectData.md).[_innerShadow](RectData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L63)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__useNaturalRatio](../interfaces/IImageData.md#__usenaturalratio)

#### Inherited from

RectData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__isLinePath](../interfaces/IImageData.md#__islinepath)

#### Inherited from

RectData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__blendMode](../interfaces/IImageData.md#__blendmode)

#### Inherited from

RectData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L24)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__boxStroke](../interfaces/IImageData.md#__boxstroke)

#### Inherited from

RectData.\_\_boxStroke

#### Defined in

[ui/packages/display-module/data/src/RectData.ts:7](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/RectData.ts#L7)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[scale](../interfaces/IImageData.md#scale)

#### Inherited from

RectData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__strokeWidth](../interfaces/IImageData.md#__strokewidth)

#### Inherited from

RectData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__hasStroke](../interfaces/IImageData.md#__hasstroke)

#### Inherited from

RectData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__hasHalf](../interfaces/IImageData.md#__hashalf)

#### Inherited from

RectData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__hasMultiPaint](../interfaces/IImageData.md#__hasmultipaint)

#### Inherited from

RectData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__clipAfterFill](../interfaces/IImageData.md#__clipafterfill)

#### Inherited from

RectData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L47)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__hasSurface](../interfaces/IImageData.md#__hassurface)

#### Inherited from

RectData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L48)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__autoWidth](../interfaces/IImageData.md#__autowidth)

#### Inherited from

RectData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L65)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__autoHeight](../interfaces/IImageData.md#__autoheight)

#### Inherited from

RectData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L66)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__autoSide](../interfaces/IImageData.md#__autoside)

#### Inherited from

RectData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:67](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L67)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__autoSize](../interfaces/IImageData.md#__autosize)

#### Inherited from

RectData.\_\_autoSize

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

[IImageData](../interfaces/IImageData.md).[__get](../interfaces/IImageData.md#__get)

#### Inherited from

[RectData](RectData.md).[__get](RectData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L34)

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

[IImageData](../interfaces/IImageData.md).[__setInput](../interfaces/IImageData.md#__setinput)

#### Inherited from

[RectData](RectData.md).[__setInput](RectData.md#__setinput)

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

[IImageData](../interfaces/IImageData.md).[__getInput](../interfaces/IImageData.md#__getinput)

#### Inherited from

[RectData](RectData.md).[__getInput](RectData.md#__getinput)

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

[IImageData](../interfaces/IImageData.md).[__removeInput](../interfaces/IImageData.md#__removeinput)

#### Inherited from

[RectData](RectData.md).[__removeInput](RectData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:70](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L70)

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

[IImageData](../interfaces/IImageData.md).[__setMiddle](../interfaces/IImageData.md#__setmiddle)

#### Inherited from

[RectData](RectData.md).[__setMiddle](RectData.md#__setmiddle)

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

[IImageData](../interfaces/IImageData.md).[__getMiddle](../interfaces/IImageData.md#__getmiddle)

#### Inherited from

[RectData](RectData.md).[__getMiddle](RectData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__checkSingle](../interfaces/IImageData.md#__checksingle)

#### Inherited from

[RectData](RectData.md).[__checkSingle](RectData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__removeNaturalSize](../interfaces/IImageData.md#__removenaturalsize)

#### Inherited from

[RectData](RectData.md).[__removeNaturalSize](RectData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[destroy](../interfaces/IImageData.md#destroy)

#### Inherited from

[RectData](RectData.md).[destroy](RectData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:141](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L141)

___

### setUrl

▸ `Protected` **setUrl**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[ui/packages/display-module/data/src/ImageData.ts:12](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/ImageData.ts#L12)

___

### \_\_setImageFill

▸ **__setImageFill**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__setImageFill](../interfaces/IImageData.md#__setimagefill)

#### Defined in

[ui/packages/display-module/data/src/ImageData.ts:17](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/ImageData.ts#L17)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__getData](../interfaces/IImageData.md#__getdata)

#### Overrides

[RectData](RectData.md).[__getData](RectData.md#__getdata)

#### Defined in

[ui/packages/display-module/data/src/ImageData.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/ImageData.ts#L21)

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

[IImageData](../interfaces/IImageData.md).[__getInputData](../interfaces/IImageData.md#__getinputdata)

#### Overrides

[RectData](RectData.md).[__getInputData](RectData.md#__getinputdata)

#### Defined in

[ui/packages/display-module/data/src/ImageData.ts:27](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/ImageData.ts#L27)

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

[RectData](RectData.md).[setWidth](RectData.md#setwidth)

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

[RectData](RectData.md).[setHeight](RectData.md#setheight)

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

[RectData](RectData.md).[setFill](RectData.md#setfill)

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

[RectData](RectData.md).[setStroke](RectData.md#setstroke)

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

[RectData](RectData.md).[setPath](RectData.md#setpath)

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

[RectData](RectData.md).[setShadow](RectData.md#setshadow)

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

[RectData](RectData.md).[setInnerShadow](RectData.md#setinnershadow)

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

[RectData](RectData.md).[setFilter](RectData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:137](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L137)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IImageData](../interfaces/IImageData.md).[__computePaint](../interfaces/IImageData.md#__computepaint)

#### Inherited from

[RectData](RectData.md).[__computePaint](RectData.md#__computepaint)

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

[IImageData](../interfaces/IImageData.md).[__setPaint](../interfaces/IImageData.md#__setpaint)

#### Inherited from

[RectData](RectData.md).[__setPaint](RectData.md#__setpaint)

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

[IImageData](../interfaces/IImageData.md).[__removePaint](../interfaces/IImageData.md#__removepaint)

#### Inherited from

[RectData](RectData.md).[__removePaint](RectData.md#__removepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L163)
