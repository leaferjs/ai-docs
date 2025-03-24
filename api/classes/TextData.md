# Class: TextData

## Hierarchy

- [`UIData`](UIData.md)

  ↳ **`TextData`**

## Implements

- [`ITextData`](../interfaces/ITextData.md)

## Table of contents

### Constructors

- [constructor](TextData.md#constructor)

### Properties

- [\_\_input](TextData.md#__input)
- [\_\_middle](TextData.md#__middle)
- [\_\_single](TextData.md#__single)
- [\_\_naturalWidth](TextData.md#__naturalwidth)
- [\_\_naturalHeight](TextData.md#__naturalheight)
- [\_\_pathForRender](TextData.md#__pathforrender)
- [\_fontWeight](TextData.md#_fontweight)
- [\_\_leaf](TextData.md#__leaf)
- [\_\_blendLayer](TextData.md#__blendlayer)
- [\_\_isFills](TextData.md#__isfills)
- [\_\_isStrokes](TextData.md#__isstrokes)
- [\_\_pixelFill](TextData.md#__pixelfill)
- [\_\_pixelStroke](TextData.md#__pixelstroke)
- [\_\_needComputePaint](TextData.md#__needcomputepaint)
- [\_visible](TextData.md#_visible)
- [\_width](TextData.md#_width)
- [\_height](TextData.md#_height)
- [\_fill](TextData.md#_fill)
- [\_stroke](TextData.md#_stroke)
- [\_path](TextData.md#_path)
- [\_shadow](TextData.md#_shadow)
- [\_innerShadow](TextData.md#_innershadow)

### Accessors

- [\_\_isLinePath](TextData.md#__islinepath)
- [\_\_blendMode](TextData.md#__blendmode)
- [\_\_useNaturalRatio](TextData.md#__usenaturalratio)
- [scale](TextData.md#scale)
- [\_\_strokeWidth](TextData.md#__strokewidth)
- [\_\_hasStroke](TextData.md#__hasstroke)
- [\_\_hasMultiPaint](TextData.md#__hasmultipaint)
- [\_\_clipAfterFill](TextData.md#__clipafterfill)
- [\_\_hasSurface](TextData.md#__hassurface)
- [\_\_autoWidth](TextData.md#__autowidth)
- [\_\_autoHeight](TextData.md#__autoheight)
- [\_\_autoSide](TextData.md#__autoside)
- [\_\_autoSize](TextData.md#__autosize)

### Methods

- [\_\_get](TextData.md#__get)
- [\_\_getData](TextData.md#__getdata)
- [\_\_setInput](TextData.md#__setinput)
- [\_\_getInput](TextData.md#__getinput)
- [\_\_removeInput](TextData.md#__removeinput)
- [\_\_getInputData](TextData.md#__getinputdata)
- [\_\_setMiddle](TextData.md#__setmiddle)
- [\_\_getMiddle](TextData.md#__getmiddle)
- [\_\_checkSingle](TextData.md#__checksingle)
- [\_\_removeNaturalSize](TextData.md#__removenaturalsize)
- [destroy](TextData.md#destroy)
- [setFontWeight](TextData.md#setfontweight)
- [setVisible](TextData.md#setvisible)
- [setWidth](TextData.md#setwidth)
- [setHeight](TextData.md#setheight)
- [setFill](TextData.md#setfill)
- [setStroke](TextData.md#setstroke)
- [setPath](TextData.md#setpath)
- [setShadow](TextData.md#setshadow)
- [setInnerShadow](TextData.md#setinnershadow)
- [setFilter](TextData.md#setfilter)
- [\_\_computePaint](TextData.md#__computepaint)

## Constructors

### constructor

• **new TextData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[UIData](UIData.md).[constructor](UIData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__input](../interfaces/ITextData.md#__input)

#### Inherited from

[UIData](UIData.md).[__input](UIData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__middle](../interfaces/ITextData.md#__middle)

#### Inherited from

[UIData](UIData.md).[__middle](UIData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__single](../interfaces/ITextData.md#__single)

#### Inherited from

[UIData](UIData.md).[__single](UIData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__naturalWidth](../interfaces/ITextData.md#__naturalwidth)

#### Inherited from

[UIData](UIData.md).[__naturalWidth](UIData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__naturalHeight](../interfaces/ITextData.md#__naturalheight)

#### Inherited from

[UIData](UIData.md).[__naturalHeight](UIData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__pathForRender](../interfaces/ITextData.md#__pathforrender)

#### Inherited from

[UIData](UIData.md).[__pathForRender](UIData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L15)

___

### \_fontWeight

• `Protected` `Optional` **\_fontWeight**: `number`

#### Defined in

[ui/packages/display-module/data/src/TextData.ts:22](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/TextData.ts#L22)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__leaf](../interfaces/ITextData.md#__leaf)

#### Inherited from

[UIData](UIData.md).[__leaf](UIData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__blendLayer](../interfaces/ITextData.md#__blendlayer)

#### Inherited from

[UIData](UIData.md).[__blendLayer](UIData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__isFills](../interfaces/ITextData.md#__isfills)

#### Inherited from

[UIData](UIData.md).[__isFills](UIData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__isStrokes](../interfaces/ITextData.md#__isstrokes)

#### Inherited from

[UIData](UIData.md).[__isStrokes](UIData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__pixelFill](../interfaces/ITextData.md#__pixelfill)

#### Inherited from

[UIData](UIData.md).[__pixelFill](UIData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:39](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L39)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__pixelStroke](../interfaces/ITextData.md#__pixelstroke)

#### Inherited from

[UIData](UIData.md).[__pixelStroke](UIData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__needComputePaint](../interfaces/ITextData.md#__needcomputepaint)

#### Inherited from

[UIData](UIData.md).[__needComputePaint](UIData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L45)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Inherited from

[UIData](UIData.md).[_visible](UIData.md#_visible)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L47)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Inherited from

[UIData](UIData.md).[_width](UIData.md#_width)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:49](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L49)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Inherited from

[UIData](UIData.md).[_height](UIData.md#_height)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L50)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_fill](UIData.md#_fill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:52](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L52)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_stroke](UIData.md#_stroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L53)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[UIData](UIData.md).[_path](UIData.md#_path)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:55](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L55)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_shadow](UIData.md#_shadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:57](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L57)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Inherited from

[UIData](UIData.md).[_innerShadow](UIData.md#_innershadow)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L58)

## Accessors

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__isLinePath](../interfaces/ITextData.md#__islinepath)

#### Inherited from

UIData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__blendMode](../interfaces/ITextData.md#__blendmode)

#### Inherited from

UIData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L24)

___

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__useNaturalRatio](../interfaces/ITextData.md#__usenaturalratio)

#### Overrides

UIData.\_\_useNaturalRatio

#### Defined in

[ui/packages/display-module/data/src/TextData.ts:20](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/TextData.ts#L20)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ITextData](../interfaces/ITextData.md).[scale](../interfaces/ITextData.md#scale)

#### Inherited from

UIData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:15](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L15)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__strokeWidth](../interfaces/ITextData.md#__strokewidth)

#### Inherited from

UIData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:22](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L22)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__hasStroke](../interfaces/ITextData.md#__hasstroke)

#### Inherited from

UIData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__hasMultiPaint](../interfaces/ITextData.md#__hasmultipaint)

#### Inherited from

UIData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__clipAfterFill](../interfaces/ITextData.md#__clipafterfill)

#### Inherited from

UIData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L42)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__hasSurface](../interfaces/ITextData.md#__hassurface)

#### Inherited from

UIData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:43](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L43)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__autoWidth](../interfaces/ITextData.md#__autowidth)

#### Inherited from

UIData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:60](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L60)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__autoHeight](../interfaces/ITextData.md#__autoheight)

#### Inherited from

UIData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L61)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__autoSide](../interfaces/ITextData.md#__autoside)

#### Inherited from

UIData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L62)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__autoSize](../interfaces/ITextData.md#__autosize)

#### Inherited from

UIData.\_\_autoSize

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L63)

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

[ITextData](../interfaces/ITextData.md).[__get](../interfaces/ITextData.md#__get)

#### Inherited from

[UIData](UIData.md).[__get](UIData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__getData](../interfaces/ITextData.md#__getdata)

#### Inherited from

[UIData](UIData.md).[__getData](UIData.md#__getdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:42](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L42)

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

[ITextData](../interfaces/ITextData.md).[__setInput](../interfaces/ITextData.md#__setinput)

#### Inherited from

[UIData](UIData.md).[__setInput](UIData.md#__setinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:54](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L54)

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

[ITextData](../interfaces/ITextData.md).[__getInput](../interfaces/ITextData.md#__getinput)

#### Inherited from

[UIData](UIData.md).[__getInput](UIData.md#__getinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:59](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L59)

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

[ITextData](../interfaces/ITextData.md).[__removeInput](../interfaces/ITextData.md#__removeinput)

#### Inherited from

[UIData](UIData.md).[__removeInput](UIData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:70](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L70)

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

[ITextData](../interfaces/ITextData.md).[__getInputData](../interfaces/ITextData.md#__getinputdata)

#### Inherited from

[UIData](UIData.md).[__getInputData](UIData.md#__getinputdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:74](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L74)

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

[ITextData](../interfaces/ITextData.md).[__setMiddle](../interfaces/ITextData.md#__setmiddle)

#### Inherited from

[UIData](UIData.md).[__setMiddle](UIData.md#__setmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:114](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L114)

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

[ITextData](../interfaces/ITextData.md).[__getMiddle](../interfaces/ITextData.md#__getmiddle)

#### Inherited from

[UIData](UIData.md).[__getMiddle](UIData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__checkSingle](../interfaces/ITextData.md#__checksingle)

#### Inherited from

[UIData](UIData.md).[__checkSingle](UIData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__removeNaturalSize](../interfaces/ITextData.md#__removenaturalsize)

#### Inherited from

[UIData](UIData.md).[__removeNaturalSize](UIData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[destroy](../interfaces/ITextData.md#destroy)

#### Inherited from

[UIData](UIData.md).[destroy](UIData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:141](https://github.com/leaferjs/leafer/blob/a165a56/packages/display-module/data/src/LeafData.ts#L141)

___

### setFontWeight

▸ **setFontWeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IFontWeight`](../modules.md#ifontweight) |

#### Returns

`void`

#### Defined in

[ui/packages/display-module/data/src/TextData.ts:24](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/TextData.ts#L24)

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

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L66)

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

[ui/packages/display-module/data/src/UIData.ts:73](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L73)

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

[ui/packages/display-module/data/src/UIData.ts:81](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L81)

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

[ui/packages/display-module/data/src/UIData.ts:90](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L90)

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

[ui/packages/display-module/data/src/UIData.ts:108](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L108)

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

[ui/packages/display-module/data/src/UIData.ts:126](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L126)

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

[ui/packages/display-module/data/src/UIData.ts:138](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L138)

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

[ui/packages/display-module/data/src/UIData.ts:142](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L142)

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

[ui/packages/display-module/data/src/UIData.ts:146](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L146)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[ITextData](../interfaces/ITextData.md).[__computePaint](../interfaces/ITextData.md#__computepaint)

#### Inherited from

[UIData](UIData.md).[__computePaint](UIData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:153](https://github.com/leaferjs/leafer-ui/blob/c3451ed/packages/display-module/data/src/UIData.ts#L153)
