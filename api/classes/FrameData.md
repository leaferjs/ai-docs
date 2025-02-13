# Class: FrameData

## Hierarchy

- [`BoxData`](BoxData.md)

  ↳ **`FrameData`**

## Implements

- [`IFrameData`](../interfaces/IFrameData.md)

## Table of contents

### Constructors

- [constructor](FrameData.md#constructor)

### Properties

- [\_\_input](FrameData.md#__input)
- [\_\_middle](FrameData.md#__middle)
- [\_\_single](FrameData.md#__single)
- [\_\_naturalWidth](FrameData.md#__naturalwidth)
- [\_\_naturalHeight](FrameData.md#__naturalheight)
- [\_\_pathForRender](FrameData.md#__pathforrender)
- [\_\_leaf](FrameData.md#__leaf)
- [\_\_blendLayer](FrameData.md#__blendlayer)
- [\_\_isFills](FrameData.md#__isfills)
- [\_\_isStrokes](FrameData.md#__isstrokes)
- [\_\_pixelFill](FrameData.md#__pixelfill)
- [\_\_pixelStroke](FrameData.md#__pixelstroke)
- [\_\_needComputePaint](FrameData.md#__needcomputepaint)
- [\_visible](FrameData.md#_visible)
- [\_width](FrameData.md#_width)
- [\_height](FrameData.md#_height)
- [\_fill](FrameData.md#_fill)
- [\_stroke](FrameData.md#_stroke)
- [\_path](FrameData.md#_path)
- [\_shadow](FrameData.md#_shadow)
- [\_innerShadow](FrameData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](FrameData.md#__usenaturalratio)
- [\_\_isLinePath](FrameData.md#__islinepath)
- [\_\_blendMode](FrameData.md#__blendmode)
- [\_\_boxStroke](FrameData.md#__boxstroke)
- [\_\_drawAfterFill](FrameData.md#__drawafterfill)
- [\_\_clipAfterFill](FrameData.md#__clipafterfill)
- [scale](FrameData.md#scale)
- [\_\_strokeWidth](FrameData.md#__strokewidth)
- [\_\_hasStroke](FrameData.md#__hasstroke)
- [\_\_hasMultiPaint](FrameData.md#__hasmultipaint)
- [\_\_hasSurface](FrameData.md#__hassurface)
- [\_\_autoWidth](FrameData.md#__autowidth)
- [\_\_autoHeight](FrameData.md#__autoheight)
- [\_\_autoSide](FrameData.md#__autoside)
- [\_\_autoSize](FrameData.md#__autosize)

### Methods

- [\_\_get](FrameData.md#__get)
- [\_\_getData](FrameData.md#__getdata)
- [\_\_setInput](FrameData.md#__setinput)
- [\_\_getInput](FrameData.md#__getinput)
- [\_\_removeInput](FrameData.md#__removeinput)
- [\_\_getInputData](FrameData.md#__getinputdata)
- [\_\_setMiddle](FrameData.md#__setmiddle)
- [\_\_getMiddle](FrameData.md#__getmiddle)
- [\_\_checkSingle](FrameData.md#__checksingle)
- [\_\_removeNaturalSize](FrameData.md#__removenaturalsize)
- [destroy](FrameData.md#destroy)
- [setVisible](FrameData.md#setvisible)
- [setWidth](FrameData.md#setwidth)
- [setHeight](FrameData.md#setheight)
- [setFill](FrameData.md#setfill)
- [setStroke](FrameData.md#setstroke)
- [setPath](FrameData.md#setpath)
- [setShadow](FrameData.md#setshadow)
- [setInnerShadow](FrameData.md#setinnershadow)
- [\_\_computePaint](FrameData.md#__computepaint)

## Constructors

### constructor

• **new FrameData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[BoxData](BoxData.md).[constructor](BoxData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__input](../interfaces/IFrameData.md#__input)

#### Inherited from

[BoxData](BoxData.md).[__input](BoxData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__middle](../interfaces/IFrameData.md#__middle)

#### Inherited from

[BoxData](BoxData.md).[__middle](BoxData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__single](../interfaces/IFrameData.md#__single)

#### Inherited from

[BoxData](BoxData.md).[__single](BoxData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__naturalWidth](../interfaces/IFrameData.md#__naturalwidth)

#### Inherited from

[BoxData](BoxData.md).[__naturalWidth](BoxData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__naturalHeight](../interfaces/IFrameData.md#__naturalheight)

#### Inherited from

[BoxData](BoxData.md).[__naturalHeight](BoxData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__pathForRender](../interfaces/IFrameData.md#__pathforrender)

#### Inherited from

[BoxData](BoxData.md).[__pathForRender](BoxData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__leaf](../interfaces/IFrameData.md#__leaf)

#### Inherited from

[BoxData](BoxData.md).[__leaf](BoxData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__blendLayer](../interfaces/IFrameData.md#__blendlayer)

#### Inherited from

[BoxData](BoxData.md).[__blendLayer](BoxData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__isFills](../interfaces/IFrameData.md#__isfills)

#### Inherited from

[BoxData](BoxData.md).[__isFills](BoxData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__isStrokes](../interfaces/IFrameData.md#__isstrokes)

#### Inherited from

[BoxData](BoxData.md).[__isStrokes](BoxData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__pixelFill](../interfaces/IFrameData.md#__pixelfill)

#### Inherited from

[BoxData](BoxData.md).[__pixelFill](BoxData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:39](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L39)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__pixelStroke](../interfaces/IFrameData.md#__pixelstroke)

#### Inherited from

[BoxData](BoxData.md).[__pixelStroke](BoxData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__needComputePaint](../interfaces/IFrameData.md#__needcomputepaint)

#### Inherited from

[BoxData](BoxData.md).[__needComputePaint](BoxData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L45)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[BoxData](BoxData.md).[_visible](BoxData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L47)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[BoxData](BoxData.md).[_width](BoxData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:49](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L49)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[BoxData](BoxData.md).[_height](BoxData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L50)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_fill](BoxData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L52)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_stroke](BoxData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L53)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[BoxData](BoxData.md).[_path](BoxData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L55)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_shadow](BoxData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L57)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[BoxData](BoxData.md).[_innerShadow](BoxData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L58)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__useNaturalRatio](../interfaces/IFrameData.md#__usenaturalratio)

#### Inherited from

BoxData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__isLinePath](../interfaces/IFrameData.md#__islinepath)

#### Inherited from

BoxData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__blendMode](../interfaces/IFrameData.md#__blendmode)

#### Inherited from

BoxData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L24)

___

### \_\_boxStroke

• `get` **__boxStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__boxStroke](../interfaces/IFrameData.md#__boxstroke)

#### Inherited from

BoxData.\_\_boxStroke

#### Defined in

[ui/packages/display-module/data/src/BoxData.ts:8](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/BoxData.ts#L8)

___

### \_\_drawAfterFill

• `get` **__drawAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__drawAfterFill](../interfaces/IFrameData.md#__drawafterfill)

#### Inherited from

BoxData.\_\_drawAfterFill

#### Defined in

[ui/packages/display-module/data/src/BoxData.ts:11](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/BoxData.ts#L11)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__clipAfterFill](../interfaces/IFrameData.md#__clipafterfill)

#### Inherited from

BoxData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/BoxData.ts:13](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/BoxData.ts#L13)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[scale](../interfaces/IFrameData.md#scale)

#### Inherited from

BoxData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:15](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L15)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__strokeWidth](../interfaces/IFrameData.md#__strokewidth)

#### Inherited from

BoxData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:22](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L22)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__hasStroke](../interfaces/IFrameData.md#__hasstroke)

#### Inherited from

BoxData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__hasMultiPaint](../interfaces/IFrameData.md#__hasmultipaint)

#### Inherited from

BoxData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__hasSurface](../interfaces/IFrameData.md#__hassurface)

#### Inherited from

BoxData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:43](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L43)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__autoWidth](../interfaces/IFrameData.md#__autowidth)

#### Inherited from

BoxData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:60](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L60)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__autoHeight](../interfaces/IFrameData.md#__autoheight)

#### Inherited from

BoxData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L61)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__autoSide](../interfaces/IFrameData.md#__autoside)

#### Inherited from

BoxData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L62)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__autoSize](../interfaces/IFrameData.md#__autosize)

#### Inherited from

BoxData.\_\_autoSize

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L63)

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

[IFrameData](../interfaces/IFrameData.md).[__get](../interfaces/IFrameData.md#__get)

#### Inherited from

[BoxData](BoxData.md).[__get](BoxData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__getData](../interfaces/IFrameData.md#__getdata)

#### Inherited from

[BoxData](BoxData.md).[__getData](BoxData.md#__getdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:42](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L42)

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

[IFrameData](../interfaces/IFrameData.md).[__setInput](../interfaces/IFrameData.md#__setinput)

#### Inherited from

[BoxData](BoxData.md).[__setInput](BoxData.md#__setinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:54](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L54)

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

[IFrameData](../interfaces/IFrameData.md).[__getInput](../interfaces/IFrameData.md#__getinput)

#### Inherited from

[BoxData](BoxData.md).[__getInput](BoxData.md#__getinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:59](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L59)

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

[IFrameData](../interfaces/IFrameData.md).[__removeInput](../interfaces/IFrameData.md#__removeinput)

#### Inherited from

[BoxData](BoxData.md).[__removeInput](BoxData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:70](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L70)

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

[IFrameData](../interfaces/IFrameData.md).[__getInputData](../interfaces/IFrameData.md#__getinputdata)

#### Inherited from

[BoxData](BoxData.md).[__getInputData](BoxData.md#__getinputdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:74](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L74)

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

[IFrameData](../interfaces/IFrameData.md).[__setMiddle](../interfaces/IFrameData.md#__setmiddle)

#### Inherited from

[BoxData](BoxData.md).[__setMiddle](BoxData.md#__setmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:114](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L114)

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

[IFrameData](../interfaces/IFrameData.md).[__getMiddle](../interfaces/IFrameData.md#__getmiddle)

#### Inherited from

[BoxData](BoxData.md).[__getMiddle](BoxData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__checkSingle](../interfaces/IFrameData.md#__checksingle)

#### Inherited from

[BoxData](BoxData.md).[__checkSingle](BoxData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__removeNaturalSize](../interfaces/IFrameData.md#__removenaturalsize)

#### Inherited from

[BoxData](BoxData.md).[__removeNaturalSize](BoxData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[destroy](../interfaces/IFrameData.md#destroy)

#### Inherited from

[BoxData](BoxData.md).[destroy](BoxData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:141](https://github.com/leaferjs/leafer/blob/a596007/packages/display-module/data/src/LeafData.ts#L141)

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

[BoxData](BoxData.md).[setVisible](BoxData.md#setvisible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L66)

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

[BoxData](BoxData.md).[setWidth](BoxData.md#setwidth)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:73](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L73)

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

[BoxData](BoxData.md).[setHeight](BoxData.md#setheight)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:81](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L81)

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

[BoxData](BoxData.md).[setFill](BoxData.md#setfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:90](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L90)

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

[BoxData](BoxData.md).[setStroke](BoxData.md#setstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:108](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L108)

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

[BoxData](BoxData.md).[setPath](BoxData.md#setpath)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:126](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L126)

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

[BoxData](BoxData.md).[setShadow](BoxData.md#setshadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:138](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L138)

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

[BoxData](BoxData.md).[setInnerShadow](BoxData.md#setinnershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:146](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L146)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IFrameData](../interfaces/IFrameData.md).[__computePaint](../interfaces/IFrameData.md#__computepaint)

#### Inherited from

[BoxData](BoxData.md).[__computePaint](BoxData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:156](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display-module/data/src/UIData.ts#L156)
