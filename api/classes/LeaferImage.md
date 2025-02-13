# Class: LeaferImage

## Implements

- [`ILeaferImage`](../interfaces/ILeaferImage.md)

## Table of contents

### Constructors

- [constructor](LeaferImage.md#constructor)

### Properties

- [innerId](LeaferImage.md#innerid)
- [view](LeaferImage.md#view)
- [width](LeaferImage.md#width)
- [height](LeaferImage.md#height)
- [isSVG](LeaferImage.md#issvg)
- [hasOpacityPixel](LeaferImage.md#hasopacitypixel)
- [ready](LeaferImage.md#ready)
- [error](LeaferImage.md#error)
- [loading](LeaferImage.md#loading)
- [use](LeaferImage.md#use)
- [config](LeaferImage.md#config)
- [waitComplete](LeaferImage.md#waitcomplete)
- [cache](LeaferImage.md#cache)

### Accessors

- [url](LeaferImage.md#url)
- [completed](LeaferImage.md#completed)

### Methods

- [load](LeaferImage.md#load)
- [unload](LeaferImage.md#unload)
- [onComplete](LeaferImage.md#oncomplete)
- [getCanvas](LeaferImage.md#getcanvas)
- [getPattern](LeaferImage.md#getpattern)
- [destroy](LeaferImage.md#destroy)

## Constructors

### constructor

• **new LeaferImage**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md) |

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:37](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L37)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[innerId](../interfaces/ILeaferImage.md#innerid)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:12](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L12)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[view](../interfaces/ILeaferImage.md#view)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L15)

___

### width

• **width**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[width](../interfaces/ILeaferImage.md#width)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L17)

___

### height

• **height**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[height](../interfaces/ILeaferImage.md#height)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L18)

___

### isSVG

• **isSVG**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[isSVG](../interfaces/ILeaferImage.md#issvg)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:20](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L20)

___

### hasOpacityPixel

• **hasOpacityPixel**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[hasOpacityPixel](../interfaces/ILeaferImage.md#hasopacitypixel)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:21](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L21)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[ready](../interfaces/ILeaferImage.md#ready)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:25](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L25)

___

### error

• **error**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[error](../interfaces/ILeaferImage.md#error)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:26](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L26)

___

### loading

• **loading**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[loading](../interfaces/ILeaferImage.md#loading)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:27](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L27)

___

### use

• **use**: `number` = `0`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[use](../interfaces/ILeaferImage.md#use)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:29](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L29)

___

### config

• **config**: [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[config](../interfaces/ILeaferImage.md#config)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:31](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L31)

___

### waitComplete

• `Protected` **waitComplete**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:33](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L33)

___

### cache

• `Protected` **cache**: [`ILeaferImageCacheCanvas`](../interfaces/ILeaferImageCacheCanvas.md)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:35](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L35)

## Accessors

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[url](../interfaces/ILeaferImage.md#url)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L13)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[completed](../interfaces/ILeaferImage.md#completed)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:23](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L23)

## Methods

### load

▸ **load**(`onSuccess?`, `onError?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess?` | [`IFunction`](../interfaces/IFunction.md) |
| `onError?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[load](../interfaces/ILeaferImage.md#load)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:44](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L44)

___

### unload

▸ **unload**(`index`, `stopEvent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `stopEvent?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[unload](../interfaces/ILeaferImage.md#unload)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:62](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L62)

___

### onComplete

▸ `Protected` **onComplete**(`isSuccess`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:71](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L71)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `_filters?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `_filters?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getCanvas](../interfaces/ILeaferImage.md#getcanvas)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:87](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L87)

___

### getPattern

▸ **getPattern**(`canvas`, `repeat`, `transform?`, `paint?`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `repeat` | `string` |
| `transform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `paint?` | [`ILeaferImagePatternPaint`](../interfaces/ILeaferImagePatternPaint.md) |

#### Returns

`CanvasPattern`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getPattern](../interfaces/ILeaferImage.md#getpattern)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:107](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L107)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[destroy](../interfaces/ILeaferImage.md#destroy)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:119](https://github.com/leaferjs/leafer/blob/a596007/packages/image/image/src/LeaferImage.ts#L119)
