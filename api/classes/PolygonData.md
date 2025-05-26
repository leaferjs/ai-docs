# Class: PolygonData

## Hierarchy

- [`UIData`](UIData.md)

  ↳ **`PolygonData`**

## Implements

- [`IPolygonData`](../interfaces/IPolygonData.md)

## Table of contents

### Constructors

- [constructor](PolygonData.md#constructor)

### Properties

- [\_\_input](PolygonData.md#__input)
- [\_\_middle](PolygonData.md#__middle)
- [\_\_single](PolygonData.md#__single)
- [\_\_naturalWidth](PolygonData.md#__naturalwidth)
- [\_\_naturalHeight](PolygonData.md#__naturalheight)
- [\_\_pathForRender](PolygonData.md#__pathforrender)
- [\_\_leaf](PolygonData.md#__leaf)
- [\_\_blendLayer](PolygonData.md#__blendlayer)
- [\_\_isFills](PolygonData.md#__isfills)
- [\_\_isStrokes](PolygonData.md#__isstrokes)
- [\_\_isAlphaPixelFill](PolygonData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](PolygonData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](PolygonData.md#__istransparentfill)
- [\_\_isTransparentStroke](PolygonData.md#__istransparentstroke)
- [\_\_needComputePaint](PolygonData.md#__needcomputepaint)
- [\_visible](PolygonData.md#_visible)
- [\_width](PolygonData.md#_width)
- [\_height](PolygonData.md#_height)
- [\_fill](PolygonData.md#_fill)
- [\_stroke](PolygonData.md#_stroke)
- [\_path](PolygonData.md#_path)
- [\_shadow](PolygonData.md#_shadow)
- [\_innerShadow](PolygonData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](PolygonData.md#__usenaturalratio)
- [\_\_isLinePath](PolygonData.md#__islinepath)
- [\_\_blendMode](PolygonData.md#__blendmode)
- [scale](PolygonData.md#scale)
- [\_\_strokeWidth](PolygonData.md#__strokewidth)
- [\_\_hasStroke](PolygonData.md#__hasstroke)
- [\_\_hasHalf](PolygonData.md#__hashalf)
- [\_\_hasMultiPaint](PolygonData.md#__hasmultipaint)
- [\_\_clipAfterFill](PolygonData.md#__clipafterfill)
- [\_\_hasSurface](PolygonData.md#__hassurface)
- [\_\_autoWidth](PolygonData.md#__autowidth)
- [\_\_autoHeight](PolygonData.md#__autoheight)
- [\_\_autoSide](PolygonData.md#__autoside)
- [\_\_autoSize](PolygonData.md#__autosize)

### Methods

- [\_\_get](PolygonData.md#__get)
- [\_\_getData](PolygonData.md#__getdata)
- [\_\_setInput](PolygonData.md#__setinput)
- [\_\_getInput](PolygonData.md#__getinput)
- [\_\_removeInput](PolygonData.md#__removeinput)
- [\_\_getInputData](PolygonData.md#__getinputdata)
- [\_\_setMiddle](PolygonData.md#__setmiddle)
- [\_\_getMiddle](PolygonData.md#__getmiddle)
- [\_\_checkSingle](PolygonData.md#__checksingle)
- [\_\_removeNaturalSize](PolygonData.md#__removenaturalsize)
- [destroy](PolygonData.md#destroy)
- [setVisible](PolygonData.md#setvisible)
- [setWidth](PolygonData.md#setwidth)
- [setHeight](PolygonData.md#setheight)
- [setFill](PolygonData.md#setfill)
- [setStroke](PolygonData.md#setstroke)
- [setPath](PolygonData.md#setpath)
- [setShadow](PolygonData.md#setshadow)
- [setInnerShadow](PolygonData.md#setinnershadow)
- [setFilter](PolygonData.md#setfilter)
- [\_\_computePaint](PolygonData.md#__computepaint)
- [\_\_setPaint](PolygonData.md#__setpaint)
- [\_\_removePaint](PolygonData.md#__removepaint)

## Constructors

### constructor

• **new PolygonData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[UIData](UIData.md).[constructor](UIData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__input](../interfaces/IPolygonData.md#__input)

#### Inherited from

[UIData](UIData.md).[__input](UIData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__middle](../interfaces/IPolygonData.md#__middle)

#### Inherited from

[UIData](UIData.md).[__middle](UIData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__single](../interfaces/IPolygonData.md#__single)

#### Inherited from

[UIData](UIData.md).[__single](UIData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__naturalWidth](../interfaces/IPolygonData.md#__naturalwidth)

#### Inherited from

[UIData](UIData.md).[__naturalWidth](UIData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__naturalHeight](../interfaces/IPolygonData.md#__naturalheight)

#### Inherited from

[UIData](UIData.md).[__naturalHeight](UIData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__pathForRender](../interfaces/IPolygonData.md#__pathforrender)

#### Inherited from

[UIData](UIData.md).[__pathForRender](UIData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__leaf](../interfaces/IPolygonData.md#__leaf)

#### Inherited from

[UIData](UIData.md).[__leaf](UIData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__blendLayer](../interfaces/IPolygonData.md#__blendlayer)

#### Inherited from

[UIData](UIData.md).[__blendLayer](UIData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isFills](../interfaces/IPolygonData.md#__isfills)

#### Inherited from

[UIData](UIData.md).[__isFills](UIData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isStrokes](../interfaces/IPolygonData.md#__isstrokes)

#### Inherited from

[UIData](UIData.md).[__isStrokes](UIData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isAlphaPixelFill](../interfaces/IPolygonData.md#__isalphapixelfill)

#### Inherited from

[UIData](UIData.md).[__isAlphaPixelFill](UIData.md#__isalphapixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isAlphaPixelStroke](../interfaces/IPolygonData.md#__isalphapixelstroke)

#### Inherited from

[UIData](UIData.md).[__isAlphaPixelStroke](UIData.md#__isalphapixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L42)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isTransparentFill](../interfaces/IPolygonData.md#__istransparentfill)

#### Inherited from

[UIData](UIData.md).[__isTransparentFill](UIData.md#__istransparentfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isTransparentStroke](../interfaces/IPolygonData.md#__istransparentstroke)

#### Inherited from

[UIData](UIData.md).[__isTransparentStroke](UIData.md#__istransparentstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L45)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__needComputePaint](../interfaces/IPolygonData.md#__needcomputepaint)

#### Inherited from

[UIData](UIData.md).[__needComputePaint](UIData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L50)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[UIData](UIData.md).[_visible](UIData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L52)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[UIData](UIData.md).[_width](UIData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L54)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[UIData](UIData.md).[_height](UIData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L55)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_fill](UIData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L57)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_stroke](UIData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L58)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[UIData](UIData.md).[_path](UIData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:60](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L60)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_shadow](UIData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L62)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_innerShadow](UIData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L63)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__useNaturalRatio](../interfaces/IPolygonData.md#__usenaturalratio)

#### Inherited from

UIData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__isLinePath](../interfaces/IPolygonData.md#__islinepath)

#### Inherited from

UIData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__blendMode](../interfaces/IPolygonData.md#__blendmode)

#### Inherited from

UIData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[scale](../interfaces/IPolygonData.md#scale)

#### Inherited from

UIData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__strokeWidth](../interfaces/IPolygonData.md#__strokewidth)

#### Inherited from

UIData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__hasStroke](../interfaces/IPolygonData.md#__hasstroke)

#### Inherited from

UIData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__hasHalf](../interfaces/IPolygonData.md#__hashalf)

#### Inherited from

UIData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__hasMultiPaint](../interfaces/IPolygonData.md#__hasmultipaint)

#### Inherited from

UIData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__clipAfterFill](../interfaces/IPolygonData.md#__clipafterfill)

#### Inherited from

UIData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L47)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__hasSurface](../interfaces/IPolygonData.md#__hassurface)

#### Inherited from

UIData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L48)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__autoWidth](../interfaces/IPolygonData.md#__autowidth)

#### Inherited from

UIData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L65)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__autoHeight](../interfaces/IPolygonData.md#__autoheight)

#### Inherited from

UIData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L66)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__autoSide](../interfaces/IPolygonData.md#__autoside)

#### Inherited from

UIData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:67](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L67)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__autoSize](../interfaces/IPolygonData.md#__autosize)

#### Inherited from

UIData.\_\_autoSize

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

[IPolygonData](../interfaces/IPolygonData.md).[__get](../interfaces/IPolygonData.md#__get)

#### Inherited from

[UIData](UIData.md).[__get](UIData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__getData](../interfaces/IPolygonData.md#__getdata)

#### Inherited from

[UIData](UIData.md).[__getData](UIData.md#__getdata)

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

[IPolygonData](../interfaces/IPolygonData.md).[__setInput](../interfaces/IPolygonData.md#__setinput)

#### Inherited from

[UIData](UIData.md).[__setInput](UIData.md#__setinput)

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

[IPolygonData](../interfaces/IPolygonData.md).[__getInput](../interfaces/IPolygonData.md#__getinput)

#### Inherited from

[UIData](UIData.md).[__getInput](UIData.md#__getinput)

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

[IPolygonData](../interfaces/IPolygonData.md).[__removeInput](../interfaces/IPolygonData.md#__removeinput)

#### Inherited from

[UIData](UIData.md).[__removeInput](UIData.md#__removeinput)

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

[IPolygonData](../interfaces/IPolygonData.md).[__getInputData](../interfaces/IPolygonData.md#__getinputdata)

#### Inherited from

[UIData](UIData.md).[__getInputData](UIData.md#__getinputdata)

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

[IPolygonData](../interfaces/IPolygonData.md).[__setMiddle](../interfaces/IPolygonData.md#__setmiddle)

#### Inherited from

[UIData](UIData.md).[__setMiddle](UIData.md#__setmiddle)

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

[IPolygonData](../interfaces/IPolygonData.md).[__getMiddle](../interfaces/IPolygonData.md#__getmiddle)

#### Inherited from

[UIData](UIData.md).[__getMiddle](UIData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__checkSingle](../interfaces/IPolygonData.md#__checksingle)

#### Inherited from

[UIData](UIData.md).[__checkSingle](UIData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__removeNaturalSize](../interfaces/IPolygonData.md#__removenaturalsize)

#### Inherited from

[UIData](UIData.md).[__removeNaturalSize](UIData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[destroy](../interfaces/IPolygonData.md#destroy)

#### Inherited from

[UIData](UIData.md).[destroy](UIData.md#destroy)

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

[UIData](UIData.md).[setVisible](UIData.md#setvisible)

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

[UIData](UIData.md).[setWidth](UIData.md#setwidth)

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

[UIData](UIData.md).[setHeight](UIData.md#setheight)

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

[UIData](UIData.md).[setFill](UIData.md#setfill)

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

[UIData](UIData.md).[setStroke](UIData.md#setstroke)

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

[UIData](UIData.md).[setPath](UIData.md#setpath)

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

[UIData](UIData.md).[setShadow](UIData.md#setshadow)

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

[UIData](UIData.md).[setInnerShadow](UIData.md#setinnershadow)

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

[UIData](UIData.md).[setFilter](UIData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:137](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L137)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IPolygonData](../interfaces/IPolygonData.md).[__computePaint](../interfaces/IPolygonData.md#__computepaint)

#### Inherited from

[UIData](UIData.md).[__computePaint](UIData.md#__computepaint)

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

[IPolygonData](../interfaces/IPolygonData.md).[__setPaint](../interfaces/IPolygonData.md#__setpaint)

#### Inherited from

[UIData](UIData.md).[__setPaint](UIData.md#__setpaint)

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

[IPolygonData](../interfaces/IPolygonData.md).[__removePaint](../interfaces/IPolygonData.md#__removepaint)

#### Inherited from

[UIData](UIData.md).[__removePaint](UIData.md#__removepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L163)
