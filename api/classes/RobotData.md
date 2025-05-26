# Class: RobotData

## Hierarchy

- [`UIData`](UIData.md)

  ↳ **`RobotData`**

## Table of contents

### Constructors

- [constructor](RobotData.md#constructor)

### Properties

- [\_robot](RobotData.md#_robot)
- [\_action](RobotData.md#_action)
- [\_\_input](RobotData.md#__input)
- [\_\_middle](RobotData.md#__middle)
- [\_\_single](RobotData.md#__single)
- [\_\_naturalWidth](RobotData.md#__naturalwidth)
- [\_\_naturalHeight](RobotData.md#__naturalheight)
- [\_\_pathForRender](RobotData.md#__pathforrender)
- [\_\_leaf](RobotData.md#__leaf)
- [\_\_blendLayer](RobotData.md#__blendlayer)
- [\_\_isFills](RobotData.md#__isfills)
- [\_\_isStrokes](RobotData.md#__isstrokes)
- [\_\_isAlphaPixelFill](RobotData.md#__isalphapixelfill)
- [\_\_isAlphaPixelStroke](RobotData.md#__isalphapixelstroke)
- [\_\_isTransparentFill](RobotData.md#__istransparentfill)
- [\_\_isTransparentStroke](RobotData.md#__istransparentstroke)
- [\_\_needComputePaint](RobotData.md#__needcomputepaint)
- [\_visible](RobotData.md#_visible)
- [\_width](RobotData.md#_width)
- [\_height](RobotData.md#_height)
- [\_fill](RobotData.md#_fill)
- [\_stroke](RobotData.md#_stroke)
- [\_path](RobotData.md#_path)
- [\_shadow](RobotData.md#_shadow)
- [\_innerShadow](RobotData.md#_innershadow)

### Accessors

- [\_\_drawAfterFill](RobotData.md#__drawafterfill)
- [\_\_useNaturalRatio](RobotData.md#__usenaturalratio)
- [\_\_isLinePath](RobotData.md#__islinepath)
- [\_\_blendMode](RobotData.md#__blendmode)
- [scale](RobotData.md#scale)
- [\_\_strokeWidth](RobotData.md#__strokewidth)
- [\_\_hasStroke](RobotData.md#__hasstroke)
- [\_\_hasHalf](RobotData.md#__hashalf)
- [\_\_hasMultiPaint](RobotData.md#__hasmultipaint)
- [\_\_clipAfterFill](RobotData.md#__clipafterfill)
- [\_\_hasSurface](RobotData.md#__hassurface)
- [\_\_autoWidth](RobotData.md#__autowidth)
- [\_\_autoHeight](RobotData.md#__autoheight)
- [\_\_autoSide](RobotData.md#__autoside)
- [\_\_autoSize](RobotData.md#__autosize)

### Methods

- [setRobot](RobotData.md#setrobot)
- [setAction](RobotData.md#setaction)
- [\_\_get](RobotData.md#__get)
- [\_\_getData](RobotData.md#__getdata)
- [\_\_setInput](RobotData.md#__setinput)
- [\_\_getInput](RobotData.md#__getinput)
- [\_\_removeInput](RobotData.md#__removeinput)
- [\_\_getInputData](RobotData.md#__getinputdata)
- [\_\_setMiddle](RobotData.md#__setmiddle)
- [\_\_getMiddle](RobotData.md#__getmiddle)
- [\_\_checkSingle](RobotData.md#__checksingle)
- [\_\_removeNaturalSize](RobotData.md#__removenaturalsize)
- [destroy](RobotData.md#destroy)
- [setVisible](RobotData.md#setvisible)
- [setWidth](RobotData.md#setwidth)
- [setHeight](RobotData.md#setheight)
- [setFill](RobotData.md#setfill)
- [setStroke](RobotData.md#setstroke)
- [setPath](RobotData.md#setpath)
- [setShadow](RobotData.md#setshadow)
- [setInnerShadow](RobotData.md#setinnershadow)
- [setFilter](RobotData.md#setfilter)
- [\_\_computePaint](RobotData.md#__computepaint)
- [\_\_setPaint](RobotData.md#__setpaint)
- [\_\_removePaint](RobotData.md#__removepaint)

## Constructors

### constructor

• **new RobotData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Inherited from

[UIData](UIData.md).[constructor](UIData.md#constructor)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L30)

## Properties

### \_robot

• `Protected` **\_robot**: [`IRobotKeyframe`](../interfaces/IRobotKeyframe.md) \| [`IRobotKeyframe`](../interfaces/IRobotKeyframe.md)[]

#### Defined in

[in/packages/robot/src/data/RobotData.ts:9](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/robot/src/data/RobotData.ts#L9)

___

### \_action

• `Protected` **\_action**: `string`

#### Defined in

[in/packages/robot/src/data/RobotData.ts:10](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/robot/src/data/RobotData.ts#L10)

___

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[UIData](UIData.md).[__input](UIData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[UIData](UIData.md).[__middle](UIData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Inherited from

[UIData](UIData.md).[__single](UIData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Inherited from

[UIData](UIData.md).[__naturalWidth](UIData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Inherited from

[UIData](UIData.md).[__naturalHeight](UIData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[UIData](UIData.md).[__pathForRender](UIData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_leaf

• **\_\_leaf**: [`IUI`](../interfaces/IUI.md)

#### Inherited from

[UIData](UIData.md).[__leaf](UIData.md#__leaf)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:14](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L14)

___

### \_\_blendLayer

• `Optional` **\_\_blendLayer**: `boolean`

#### Inherited from

[UIData](UIData.md).[__blendLayer](UIData.md#__blendlayer)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:18](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L18)

___

### \_\_isFills

• `Optional` **\_\_isFills**: `boolean`

#### Inherited from

[UIData](UIData.md).[__isFills](UIData.md#__isfills)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:20](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L20)

___

### \_\_isStrokes

• `Optional` **\_\_isStrokes**: `boolean`

#### Inherited from

[UIData](UIData.md).[__isStrokes](UIData.md#__isstrokes)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L21)

___

### \_\_isAlphaPixelFill

• `Optional` **\_\_isAlphaPixelFill**: `boolean`

#### Inherited from

[UIData](UIData.md).[__isAlphaPixelFill](UIData.md#__isalphapixelfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:41](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L41)

___

### \_\_isAlphaPixelStroke

• `Optional` **\_\_isAlphaPixelStroke**: `boolean`

#### Inherited from

[UIData](UIData.md).[__isAlphaPixelStroke](UIData.md#__isalphapixelstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L42)

___

### \_\_isTransparentFill

• `Optional` **\_\_isTransparentFill**: `boolean`

#### Inherited from

[UIData](UIData.md).[__isTransparentFill](UIData.md#__istransparentfill)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L44)

___

### \_\_isTransparentStroke

• `Optional` **\_\_isTransparentStroke**: `boolean`

#### Inherited from

[UIData](UIData.md).[__isTransparentStroke](UIData.md#__istransparentstroke)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L45)

___

### \_\_needComputePaint

• **\_\_needComputePaint**: `boolean`

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

### \_\_drawAfterFill

• `get` **__drawAfterFill**(): `boolean`

#### Returns

`boolean`

#### Defined in

[in/packages/robot/src/data/RobotData.ts:7](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/robot/src/data/RobotData.ts#L7)

___

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_useNaturalRatio

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L17)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_isLinePath

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L19)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Inherited from

UIData.\_\_blendMode

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:24](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Inherited from

UIData.scale

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:16](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L16)

___

### \_\_strokeWidth

• `get` **__strokeWidth**(): `number`

#### Returns

`number`

#### Inherited from

UIData.\_\_strokeWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L23)

___

### \_\_hasStroke

• `get` **__hasStroke**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_hasStroke

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:33](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L33)

___

### \_\_hasHalf

• `get` **__hasHalf**(): `number`

#### Returns

`number`

#### Inherited from

UIData.\_\_hasHalf

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L34)

___

### \_\_hasMultiPaint

• `get` **__hasMultiPaint**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_hasMultiPaint

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:35](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L35)

___

### \_\_clipAfterFill

• `get` **__clipAfterFill**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_clipAfterFill

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:47](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L47)

___

### \_\_hasSurface

• `get` **__hasSurface**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_hasSurface

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L48)

___

### \_\_autoWidth

• `get` **__autoWidth**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_autoWidth

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L65)

___

### \_\_autoHeight

• `get` **__autoHeight**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_autoHeight

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:66](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L66)

___

### \_\_autoSide

• `get` **__autoSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_autoSide

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:67](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L67)

___

### \_\_autoSize

• `get` **__autoSize**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIData.\_\_autoSize

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:68](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L68)

## Methods

### setRobot

▸ `Protected` **setRobot**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IRobotKeyframe`](../interfaces/IRobotKeyframe.md) \| [`IRobotKeyframe`](../interfaces/IRobotKeyframe.md)[] |

#### Returns

`void`

#### Defined in

[in/packages/robot/src/data/RobotData.ts:12](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/robot/src/data/RobotData.ts#L12)

___

### setAction

▸ `Protected` **setAction**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[in/packages/robot/src/data/RobotData.ts:17](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/robot/src/data/RobotData.ts#L17)

___

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[UIData](UIData.md).[__get](UIData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L34)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

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

#### Inherited from

[UIData](UIData.md).[__getMiddle](UIData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:119](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L119)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Inherited from

[UIData](UIData.md).[__checkSingle](UIData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:123](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L123)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[UIData](UIData.md).[__removeNaturalSize](UIData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:137](https://github.com/leaferjs/leafer/blob/985f85e/packages/display-module/data/src/LeafData.ts#L137)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

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

#### Inherited from

[UIData](UIData.md).[__removePaint](UIData.md#__removepaint)

#### Defined in

[ui/packages/display-module/data/src/UIData.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display-module/data/src/UIData.ts#L163)
