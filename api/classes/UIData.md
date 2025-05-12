# Class: UIData

## Hierarchy

- [`LeafData`](LeafData.md)

  ↳ **`UIData`**

  ↳↳ [`GroupData`](GroupData.md)

  ↳↳ [`LineData`](LineData.md)

  ↳↳ [`RectData`](RectData.md)

  ↳↳ [`EllipseData`](EllipseData.md)

  ↳↳ [`PolygonData`](PolygonData.md)

  ↳↳ [`StarData`](StarData.md)

  ↳↳ [`PathData`](PathData.md)

  ↳↳ [`TextData`](TextData.md)

  ↳↳ [`RobotData`](RobotData.md)

## Implements

- [`IUIData`](../interfaces/IUIData.md)

## Table of contents

### Constructors

- [constructor](UIData.md#constructor)

### Properties

- [\_\_input](UIData.md#__input)
- [\_\_middle](UIData.md#__middle)
- [\_\_single](UIData.md#__single)
- [\_\_naturalWidth](UIData.md#__naturalwidth)
- [\_\_naturalHeight](UIData.md#__naturalheight)
- [\_\_pathForRender](UIData.md#__pathforrender)
- [\_\_leaf](UIData.md#__leaf)
- [\_\_blendLayer](UIData.md#__blendlayer)
- [\_\_isFills](UIData.md#__isfills)
- [\_\_isStrokes](UIData.md#__isstrokes)
- [\_\_pixelFill](UIData.md#__pixelfill)
- [\_\_pixelStroke](UIData.md#__pixelstroke)
- [\_\_needComputePaint](UIData.md#__needcomputepaint)
- [\_visible](UIData.md#_visible)
- [\_width](UIData.md#_width)
- [\_height](UIData.md#_height)
- [\_fill](UIData.md#_fill)
- [\_stroke](UIData.md#_stroke)
- [\_path](UIData.md#_path)
- [\_shadow](UIData.md#_shadow)
- [\_innerShadow](UIData.md#_innershadow)

### Accessors

- [\_\_useNaturalRatio](UIData.md#__usenaturalratio)
- [\_\_isLinePath](UIData.md#__islinepath)
- [\_\_blendMode](UIData.md#__blendmode)
- [scale](UIData.md#scale)
- [\_\_strokeWidth](UIData.md#__strokewidth)
- [\_\_hasStroke](UIData.md#__hasstroke)
- [\_\_hasHalf](UIData.md#__hashalf)
- [\_\_hasMultiPaint](UIData.md#__hasmultipaint)
- [\_\_clipAfterFill](UIData.md#__clipafterfill)
- [\_\_hasSurface](UIData.md#__hassurface)
- [\_\_autoWidth](UIData.md#__autowidth)
- [\_\_autoHeight](UIData.md#__autoheight)
- [\_\_autoSide](UIData.md#__autoside)
- [\_\_autoSize](UIData.md#__autosize)

### Methods

- [\_\_get](UIData.md#__get)
- [\_\_getData](UIData.md#__getdata)
- [\_\_setInput](UIData.md#__setinput)
- [\_\_getInput](UIData.md#__getinput)
- [\_\_removeInput](UIData.md#__removeinput)
- [\_\_getInputData](UIData.md#__getinputdata)
- [\_\_setMiddle](UIData.md#__setmiddle)
- [\_\_getMiddle](UIData.md#__getmiddle)
- [\_\_checkSingle](UIData.md#__checksingle)
- [\_\_removeNaturalSize](UIData.md#__removenaturalsize)
- [destroy](UIData.md#destroy)
- [setVisible](UIData.md#setvisible)
- [setWidth](UIData.md#setwidth)
- [setHeight](UIData.md#setheight)
- [setFill](UIData.md#setfill)
- [setStroke](UIData.md#setstroke)
- [setPath](UIData.md#setpath)
- [setShadow](UIData.md#setshadow)
- [setInnerShadow](UIData.md#setinnershadow)
- [setFilter](UIData.md#setfilter)
- [\_\_computePaint](UIData.md#__computepaint)

## Constructors

### constructor

• **new UIData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[LeafData](LeafData.md).[constructor](LeafData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__input](../interfaces/IUIData.md#__input)

#### Inherited from

[LeafData](LeafData.md).[__input](LeafData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__middle](../interfaces/IUIData.md#__middle)

#### Inherited from

[LeafData](LeafData.md).[__middle](LeafData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__single](../interfaces/IUIData.md#__single)

#### Inherited from

[LeafData](LeafData.md).[__single](LeafData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__naturalWidth](../interfaces/IUIData.md#__naturalwidth)

#### Inherited from

[LeafData](LeafData.md).[__naturalWidth](LeafData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__naturalHeight](../interfaces/IUIData.md#__naturalheight)

#### Inherited from

[LeafData](LeafData.md).[__naturalHeight](LeafData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__pathForRender](../interfaces/IUIData.md#__pathforrender)

#### Inherited from

[LeafData](LeafData.md).[__pathForRender](LeafData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__leaf](../interfaces/IUIData.md#__leaf)

#### Overrides

[LeafData](LeafData.md).[__leaf](LeafData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L13)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__blendLayer](../interfaces/IUIData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L17)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isFills](../interfaces/IUIData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:19](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L19)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isStrokes](../interfaces/IUIData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_pixelFill

• `Optional` **\_\_pixelFill**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__pixelFill](../interfaces/IUIData.md#__pixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L40)

___

### \_\_pixelStroke

• `Optional` **\_\_pixelStroke**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__pixelStroke](../interfaces/IUIData.md#__pixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__needComputePaint](../interfaces/IUIData.md#__needcomputepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:46](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L46)

___

### \_visible

• `Protected` `Optional` **\_visible**: `boolean`

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L48)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:50](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L50)

___

### \_height

• `Protected` `Optional` **\_height**: `number`

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:51](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L51)

___

### \_fill

• `Protected` `Optional` **\_fill**: [`IValue`](../modules.md#ivalue)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:53](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L53)

___

### \_stroke

• `Protected` `Optional` **\_stroke**: [`IValue`](../modules.md#ivalue)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:54](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L54)

___

### \_path

• `Protected` **\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:56](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L56)

___

### \_shadow

• `Protected` `Optional` **\_shadow**: [`IValue`](../modules.md#ivalue)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:58](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L58)

___

### \_innerShadow

• `Protected` `Optional` **\_innerShadow**: [`IValue`](../modules.md#ivalue)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:59](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L59)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__useNaturalRatio](../interfaces/IUIData.md#__usenaturalratio)

#### Inherited from

LeafData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__isLinePath](../interfaces/IUIData.md#__islinepath)

#### Inherited from

LeafData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__blendMode](../interfaces/IUIData.md#__blendmode)

#### Inherited from

LeafData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[scale](../interfaces/IUIData.md#scale)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:15](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L15)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__strokeWidth](../interfaces/IUIData.md#__strokewidth)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:22](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L22)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasStroke](../interfaces/IUIData.md#__hasstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:32](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L32)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasHalf](../interfaces/IUIData.md#__hashalf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasMultiPaint](../interfaces/IUIData.md#__hasmultipaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__clipAfterFill](../interfaces/IUIData.md#__clipafterfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:43](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L43)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__hasSurface](../interfaces/IUIData.md#__hassurface)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoWidth](../interfaces/IUIData.md#__autowidth)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:61](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L61)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoHeight](../interfaces/IUIData.md#__autoheight)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:62](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L62)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoSide](../interfaces/IUIData.md#__autoside)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:63](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L63)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__autoSize](../interfaces/IUIData.md#__autosize)

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

[IUIData](../interfaces/IUIData.md).[__get](../interfaces/IUIData.md#__get)

#### Inherited from

[LeafData](LeafData.md).[__get](LeafData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__getData](../interfaces/IUIData.md#__getdata)

#### Inherited from

[LeafData](LeafData.md).[__getData](LeafData.md#__getdata)

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

[IUIData](../interfaces/IUIData.md).[__setInput](../interfaces/IUIData.md#__setinput)

#### Inherited from

[LeafData](LeafData.md).[__setInput](LeafData.md#__setinput)

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

[IUIData](../interfaces/IUIData.md).[__getInput](../interfaces/IUIData.md#__getinput)

#### Inherited from

[LeafData](LeafData.md).[__getInput](LeafData.md#__getinput)

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

[IUIData](../interfaces/IUIData.md).[__removeInput](../interfaces/IUIData.md#__removeinput)

#### Inherited from

[LeafData](LeafData.md).[__removeInput](LeafData.md#__removeinput)

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

[IUIData](../interfaces/IUIData.md).[__getInputData](../interfaces/IUIData.md#__getinputdata)

#### Inherited from

[LeafData](LeafData.md).[__getInputData](LeafData.md#__getinputdata)

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

[IUIData](../interfaces/IUIData.md).[__setMiddle](../interfaces/IUIData.md#__setmiddle)

#### Inherited from

[LeafData](LeafData.md).[__setMiddle](LeafData.md#__setmiddle)

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

[IUIData](../interfaces/IUIData.md).[__getMiddle](../interfaces/IUIData.md#__getmiddle)

#### Inherited from

[LeafData](LeafData.md).[__getMiddle](LeafData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__checkSingle](../interfaces/IUIData.md#__checksingle)

#### Inherited from

[LeafData](LeafData.md).[__checkSingle](LeafData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__removeNaturalSize](../interfaces/IUIData.md#__removenaturalsize)

#### Inherited from

[LeafData](LeafData.md).[__removeNaturalSize](LeafData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/fd13609/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[destroy](../interfaces/IUIData.md#destroy)

#### Inherited from

[LeafData](LeafData.md).[destroy](LeafData.md#destroy)

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

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:149](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L149)

___

### \_\_computePaint

▸ **__computePaint**(): `void`

#### Returns

`void`

#### Implementation of

[IUIData](../interfaces/IUIData.md).[__computePaint](../interfaces/IUIData.md#__computepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/display-module/data/src/UIData.ts#L156)
