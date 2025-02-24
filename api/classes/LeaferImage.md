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
- [setView](LeaferImage.md#setview)
- [onComplete](LeaferImage.md#oncomplete)
- [getFull](LeaferImage.md#getfull)
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

[leafer/packages/image/image/src/LeaferImage.ts:38](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L38)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[innerId](../interfaces/ILeaferImage.md#innerid)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L13)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[view](../interfaces/ILeaferImage.md#view)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L16)

___

### width

• **width**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[width](../interfaces/ILeaferImage.md#width)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L18)

___

### height

• **height**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[height](../interfaces/ILeaferImage.md#height)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:19](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L19)

___

### isSVG

• **isSVG**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[isSVG](../interfaces/ILeaferImage.md#issvg)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:21](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L21)

___

### hasOpacityPixel

• **hasOpacityPixel**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[hasOpacityPixel](../interfaces/ILeaferImage.md#hasopacitypixel)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:22](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L22)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[ready](../interfaces/ILeaferImage.md#ready)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:26](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L26)

___

### error

• **error**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[error](../interfaces/ILeaferImage.md#error)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:27](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L27)

___

### loading

• **loading**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[loading](../interfaces/ILeaferImage.md#loading)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:28](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L28)

___

### use

• **use**: `number` = `0`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[use](../interfaces/ILeaferImage.md#use)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:30](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L30)

___

### config

• **config**: [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[config](../interfaces/ILeaferImage.md#config)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:32](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L32)

___

### waitComplete

• `Protected` **waitComplete**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:34](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L34)

___

### cache

• `Protected` **cache**: [`ILeaferImageCacheCanvas`](../interfaces/ILeaferImageCacheCanvas.md)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:36](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L36)

## Accessors

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[url](../interfaces/ILeaferImage.md#url)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L14)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[completed](../interfaces/ILeaferImage.md#completed)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:24](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L24)

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

[leafer/packages/image/image/src/LeaferImage.ts:50](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L50)

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

[leafer/packages/image/image/src/LeaferImage.ts:62](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L62)

___

### setView

▸ `Protected` **setView**(`img`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `img` | `any` |

#### Returns

`void`

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:71](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L71)

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

[leafer/packages/image/image/src/LeaferImage.ts:79](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L79)

___

### getFull

▸ **getFull**(`_filters?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filters?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getFull](../interfaces/ILeaferImage.md#getfull)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:95](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L95)

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

[leafer/packages/image/image/src/LeaferImage.ts:99](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L99)

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

[leafer/packages/image/image/src/LeaferImage.ts:119](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L119)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[destroy](../interfaces/ILeaferImage.md#destroy)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:131](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/image/image/src/LeaferImage.ts#L131)
