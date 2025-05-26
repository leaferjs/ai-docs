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
- [hasAlphaPixel](LeaferImage.md#hasalphapixel)
- [ready](LeaferImage.md#ready)
- [error](LeaferImage.md#error)
- [loading](LeaferImage.md#loading)
- [progress](LeaferImage.md#progress)
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
- [onProgress](LeaferImage.md#onprogress)
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

[leafer/packages/image/image/src/LeaferImage.ts:40](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L40)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[innerId](../interfaces/ILeaferImage.md#innerid)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:13](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L13)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[view](../interfaces/ILeaferImage.md#view)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:16](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L16)

___

### width

• **width**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[width](../interfaces/ILeaferImage.md#width)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:18](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L18)

___

### height

• **height**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[height](../interfaces/ILeaferImage.md#height)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:19](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L19)

___

### isSVG

• **isSVG**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[isSVG](../interfaces/ILeaferImage.md#issvg)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:21](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L21)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[hasAlphaPixel](../interfaces/ILeaferImage.md#hasalphapixel)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:22](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L22)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[ready](../interfaces/ILeaferImage.md#ready)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:26](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L26)

___

### error

• **error**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[error](../interfaces/ILeaferImage.md#error)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:27](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L27)

___

### loading

• **loading**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[loading](../interfaces/ILeaferImage.md#loading)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:28](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L28)

___

### progress

• **progress**: [`IProgressData`](../interfaces/IProgressData.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[progress](../interfaces/ILeaferImage.md#progress)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L30)

___

### use

• **use**: `number` = `0`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[use](../interfaces/ILeaferImage.md#use)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:32](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L32)

___

### config

• **config**: [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[config](../interfaces/ILeaferImage.md#config)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L34)

___

### waitComplete

• `Protected` **waitComplete**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:36](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L36)

___

### cache

• `Protected` **cache**: [`ILeaferImageCacheCanvas`](../interfaces/ILeaferImageCacheCanvas.md)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:38](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L38)

## Accessors

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[url](../interfaces/ILeaferImage.md#url)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:14](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L14)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[completed](../interfaces/ILeaferImage.md#completed)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:24](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L24)

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

[leafer/packages/image/image/src/LeaferImage.ts:52](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L52)

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

[leafer/packages/image/image/src/LeaferImage.ts:66](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L66)

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

[leafer/packages/image/image/src/LeaferImage.ts:75](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L75)

___

### onProgress

▸ `Protected` **onProgress**(`progress`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | [`IProgressData`](../interfaces/IProgressData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:83](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L83)

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

[leafer/packages/image/image/src/LeaferImage.ts:87](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L87)

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

[leafer/packages/image/image/src/LeaferImage.ts:103](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L103)

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

[leafer/packages/image/image/src/LeaferImage.ts:107](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L107)

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

[leafer/packages/image/image/src/LeaferImage.ts:127](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L127)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[destroy](../interfaces/ILeaferImage.md#destroy)

#### Defined in

[leafer/packages/image/image/src/LeaferImage.ts:139](https://github.com/leaferjs/leafer/blob/985f85e/packages/image/image/src/LeaferImage.ts#L139)
