# Class: BoxData

## Hierarchy

- [`GroupData`](GroupData.md)

  ↳ **`BoxData`**

  ↳↳ [`FrameData`](FrameData.md)

## Implements

- [`IBoxData`](../interfaces/IBoxData.md)

## Table of contents

### Constructors

- [constructor](BoxData.md#constructor)

### Properties

- [\_\_input](BoxData.md#__input)
- [\_\_middle](BoxData.md#__middle)
- [\_\_single](BoxData.md#__single)
- [\_\_naturalWidth](BoxData.md#__naturalwidth)
- [\_\_naturalHeight](BoxData.md#__naturalheight)
- [\_\_pathForRender](BoxData.md#__pathforrender)
- [\_\_leaf](BoxData.md#__leaf)
- [\_\_blendLayer](BoxData.md#__blendlayer)
- [\_\_isFills](BoxData.md#__isfills)
- [\_\_isStrokes](BoxData.md#__isstrokes)
- [\_\_isAlphaPixelFill](BoxData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](BoxData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](BoxData.md#__istransparentfill)
- [\_\_isTransparentStroke](BoxData.md#__istransparentstroke)
- [\_\_needComputePaint](BoxData.md#__needcomputepaint)
- [\_visible](BoxData.md#_visible)
- [\_width](BoxData.md#_width)
- [\_height](BoxData.md#_height)
- [\_fill](BoxData.md#_fill)
- [\_stroke](BoxData.md#_stroke)
- [\_path](BoxData.md#_path)
- [\_shadow](BoxData.md#_shadow)
- [\_innerShadow](BoxData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](BoxData.md#__usenaturalratio)
- [\_\_isLinePath](BoxData.md#__islinepath)
- [\_\_blendMode](BoxData.md#__blendmode)
- [\_\_boxStroke](BoxData.md#__boxstroke)
- [\_\_drawAfterFill](BoxData.md#__drawafterfill)
- [\_\_clipAfterFill](BoxData.md#__clipafterfill)
- [scale](BoxData.md#scale)
- [\_\_strokeWidth](BoxData.md#__strokewidth)
- [\_\_hasStroke](BoxData.md#__hasstroke)
- [\_\_hasHalf](BoxData.md#__hashalf)
- [\_\_hasMultiPaint](BoxData.md#__hasmultipaint)
- [\_\_hasSurface](BoxData.md#__hassurface)
- [\_\_autoWidth](BoxData.md#__autowidth)
- [\_\_autoHeight](BoxData.md#__autoheight)
- [\_\_autoSide](BoxData.md#__autoside)
- [\_\_autoSize](BoxData.md#__autosize)

### Methods

- [\_\_get](BoxData.md#__get)
- [\_\_getData](BoxData.md#__getdata)
- [\_\_setInput](BoxData.md#__setinput)
- [\_\_getInput](BoxData.md#__getinput)
- [\_\_removeInput](BoxData.md#__removeinput)
- [\_\_getInputData](BoxData.md#__getinputdata)
- [\_\_setMiddle](BoxData.md#__setmiddle)
- [\_\_getMiddle](BoxData.md#__getmiddle)
- [\_\_checkSingle](BoxData.md#__checksingle)
- [\_\_removeNaturalSize](BoxData.md#__removenaturalsize)
- [destroy](BoxData.md#destroy)
- [setVisible](BoxData.md#setvisible)
- [setWidth](BoxData.md#setwidth)
- [setHeight](BoxData.md#setheight)
- [setFill](BoxData.md#setfill)
- [setStroke](BoxData.md#setstroke)
- [setPath](BoxData.md#setpath)
- [setShadow](BoxData.md#setshadow)
- [setInnerShadow](BoxData.md#setinnershadow)
- [setFilter](BoxData.md#setfilter)
- [\_\_computePaint](BoxData.md#__computepaint)
- [\_\_setPaint](BoxData.md#__setpaint)
- [\_\_removePaint](BoxData.md#__removepaint)

## Constructors

### constructor

• **new BoxData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[GroupData](GroupData.md).[constructor](GroupData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__input](../interfaces/IBoxData.md#__input)

#### Inherited from

[GroupData](GroupData.md).[__input](GroupData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__middle](../interfaces/IBoxData.md#__middle)

#### Inherited from

[GroupData](GroupData.md).[__middle](GroupData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__single](../interfaces/IBoxData.md#__single)

#### Inherited from

[GroupData](GroupData.md).[__single](GroupData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__naturalWidth](../interfaces/IBoxData.md#__naturalwidth)

#### Inherited from

[GroupData](GroupData.md).[__naturalWidth](GroupData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__naturalHeight](../interfaces/IBoxData.md#__naturalheight)

#### Inherited from

[GroupData](GroupData.md).[__naturalHeight](GroupData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__pathForRender](../interfaces/IBoxData.md#__pathforrender)

#### Inherited from

[GroupData](GroupData.md).[__pathForRender](GroupData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__leaf](../interfaces/IBoxData.md#__leaf)

#### Inherited from

[GroupData](GroupData.md).[__leaf](GroupData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__blendLayer](../interfaces/IBoxData.md#__blendlayer)

#### Inherited from

[GroupData](GroupData.md).[__blendLayer](GroupData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isFills](../interfaces/IBoxData.md#__isfills)

#### Inherited from

[GroupData](GroupData.md).[__isFills](GroupData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isStrokes](../interfaces/IBoxData.md#__isstrokes)

#### Inherited from

[GroupData](GroupData.md).[__isStrokes](GroupData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isAlphaPixelFill](../interfaces/IBoxData.md#__isalphapixelfill)

#### Inherited from

[GroupData](GroupData.md).[__isAlphaPixelFill](GroupData.md#__isalphapixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isAlphaPixelStroke](../interfaces/IBoxData.md#__isalphapixelstroke)

#### Inherited from

[GroupData](GroupData.md).[__isAlphaPixelStroke](GroupData.md#__isalphapixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L42)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isTransparentFill](../interfaces/IBoxData.md#__istransparentfill)

#### Inherited from

[GroupData](GroupData.md).[__isTransparentFill](GroupData.md#__istransparentfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isTransparentStroke](../interfaces/IBoxData.md#__istransparentstroke)

#### Inherited from

[GroupData](GroupData.md).[__isTransparentStroke](GroupData.md#__istransparentstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L45)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__needComputePaint](../interfaces/IBoxData.md#__needcomputepaint)

#### Inherited from

[GroupData](GroupData.md).[__needComputePaint](GroupData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L50)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[GroupData](GroupData.md).[_visible](GroupData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L52)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[GroupData](GroupData.md).[_width](GroupData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L54)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[GroupData](GroupData.md).[_height](GroupData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L55)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_fill](GroupData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L57)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_stroke](GroupData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L58)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[GroupData](GroupData.md).[_path](GroupData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:60](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L60)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_shadow](GroupData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L62)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[GroupData](GroupData.md).[_innerShadow](GroupData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L63)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__useNaturalRatio](../interfaces/IBoxData.md#__usenaturalratio)

#### Inherited from

GroupData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__isLinePath](../interfaces/IBoxData.md#__islinepath)

#### Inherited from

GroupData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__blendMode](../interfaces/IBoxData.md#__blendmode)

#### Inherited from

GroupData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L24)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__boxStroke](../interfaces/IBoxData.md#__boxstroke)

#### Defined in

[ui/packages/display-module/data/src/BoxData.ts:8](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/BoxData.ts#L8)

___

### \_\_drawAfterFill

• `get` **__drawAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__drawAfterFill](../interfaces/IBoxData.md#__drawafterfill)

#### Defined in

[ui/packages/display-module/data/src/BoxData.ts:11](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/BoxData.ts#L11)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__clipAfterFill](../interfaces/IBoxData.md#__clipafterfill)

#### Overrides

GroupData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/BoxData.ts:13](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/BoxData.ts#L13)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[scale](../interfaces/IBoxData.md#scale)

#### Inherited from

GroupData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__strokeWidth](../interfaces/IBoxData.md#__strokewidth)

#### Inherited from

GroupData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__hasStroke](../interfaces/IBoxData.md#__hasstroke)

#### Inherited from

GroupData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__hasHalf](../interfaces/IBoxData.md#__hashalf)

#### Inherited from

GroupData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__hasMultiPaint](../interfaces/IBoxData.md#__hasmultipaint)

#### Inherited from

GroupData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__hasSurface](../interfaces/IBoxData.md#__hassurface)

#### Inherited from

GroupData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L48)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__autoWidth](../interfaces/IBoxData.md#__autowidth)

#### Inherited from

GroupData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L65)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__autoHeight](../interfaces/IBoxData.md#__autoheight)

#### Inherited from

GroupData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L66)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__autoSide](../interfaces/IBoxData.md#__autoside)

#### Inherited from

GroupData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:67](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L67)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__autoSize](../interfaces/IBoxData.md#__autosize)

#### Inherited from

GroupData.\_\_autoSize

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

[IBoxData](../interfaces/IBoxData.md).[__get](../interfaces/IBoxData.md#__get)

#### Inherited from

[GroupData](GroupData.md).[__get](GroupData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__getData](../interfaces/IBoxData.md#__getdata)

#### Inherited from

[GroupData](GroupData.md).[__getData](GroupData.md#__getdata)

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

[IBoxData](../interfaces/IBoxData.md).[__setInput](../interfaces/IBoxData.md#__setinput)

#### Inherited from

[GroupData](GroupData.md).[__setInput](GroupData.md#__setinput)

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

[IBoxData](../interfaces/IBoxData.md).[__getInput](../interfaces/IBoxData.md#__getinput)

#### Inherited from

[GroupData](GroupData.md).[__getInput](GroupData.md#__getinput)

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

[IBoxData](../interfaces/IBoxData.md).[__removeInput](../interfaces/IBoxData.md#__removeinput)

#### Inherited from

[GroupData](GroupData.md).[__removeInput](GroupData.md#__removeinput)

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

[IBoxData](../interfaces/IBoxData.md).[__getInputData](../interfaces/IBoxData.md#__getinputdata)

#### Inherited from

[GroupData](GroupData.md).[__getInputData](GroupData.md#__getinputdata)

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

[IBoxData](../interfaces/IBoxData.md).[__setMiddle](../interfaces/IBoxData.md#__setmiddle)

#### Inherited from

[GroupData](GroupData.md).[__setMiddle](GroupData.md#__setmiddle)

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

[IBoxData](../interfaces/IBoxData.md).[__getMiddle](../interfaces/IBoxData.md#__getmiddle)

#### Inherited from

[GroupData](GroupData.md).[__getMiddle](GroupData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__checkSingle](../interfaces/IBoxData.md#__checksingle)

#### Inherited from

[GroupData](GroupData.md).[__checkSingle](GroupData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__removeNaturalSize](../interfaces/IBoxData.md#__removenaturalsize)

#### Inherited from

[GroupData](GroupData.md).[__removeNaturalSize](GroupData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[destroy](../interfaces/IBoxData.md#destroy)

#### Inherited from

[GroupData](GroupData.md).[destroy](GroupData.md#destroy)

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

[GroupData](GroupData.md).[setVisible](GroupData.md#setvisible)

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

[GroupData](GroupData.md).[setWidth](GroupData.md#setwidth)

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

[GroupData](GroupData.md).[setHeight](GroupData.md#setheight)

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

[GroupData](GroupData.md).[setFill](GroupData.md#setfill)

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

[GroupData](GroupData.md).[setStroke](GroupData.md#setstroke)

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

[GroupData](GroupData.md).[setPath](GroupData.md#setpath)

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

[GroupData](GroupData.md).[setShadow](GroupData.md#setshadow)

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

[GroupData](GroupData.md).[setInnerShadow](GroupData.md#setinnershadow)

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

[GroupData](GroupData.md).[setFilter](GroupData.md#setfilter)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:137](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L137)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IBoxData](../interfaces/IBoxData.md).[__computePaint](../interfaces/IBoxData.md#__computepaint)

#### Inherited from

[GroupData](GroupData.md).[__computePaint](GroupData.md#__computepaint)

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

[IBoxData](../interfaces/IBoxData.md).[__setPaint](../interfaces/IBoxData.md#__setpaint)

#### Inherited from

[GroupData](GroupData.md).[__setPaint](GroupData.md#__setpaint)

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

[IBoxData](../interfaces/IBoxData.md).[__removePaint](../interfaces/IBoxData.md#__removepaint)

#### Inherited from

[GroupData](GroupData.md).[__removePaint](GroupData.md#__removepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L163)
