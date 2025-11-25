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

• **new LeaferImage**(`config`): [`LeaferImage`](LeaferImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md) |

#### Returns

[`LeaferImage`](LeaferImage.md)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:39](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L39)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[innerId](../interfaces/ILeaferImage.md#innerid)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:14](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L14)

___

### view

• **view**: `any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[view](../interfaces/ILeaferImage.md#view)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:17](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L17)

___

### width

• **width**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[width](../interfaces/ILeaferImage.md#width)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:19](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L19)

___

### height

• **height**: `number`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[height](../interfaces/ILeaferImage.md#height)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:20](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L20)

___

### isSVG

• **isSVG**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[isSVG](../interfaces/ILeaferImage.md#issvg)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:22](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L22)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[hasAlphaPixel](../interfaces/ILeaferImage.md#hasalphapixel)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:23](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L23)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[ready](../interfaces/ILeaferImage.md#ready)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:27](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L27)

___

### error

• **error**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[error](../interfaces/ILeaferImage.md#error)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:28](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L28)

___

### loading

• **loading**: `boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[loading](../interfaces/ILeaferImage.md#loading)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:29](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L29)

___

### use

• **use**: `number` = `0`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[use](../interfaces/ILeaferImage.md#use)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:31](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L31)

___

### config

• **config**: [`ILeaferImageConfig`](../interfaces/ILeaferImageConfig.md)

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[config](../interfaces/ILeaferImage.md#config)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:33](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L33)

___

### waitComplete

• `Protected` **waitComplete**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:35](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L35)

___

### cache

• `Protected` **cache**: [`ILeaferImageCacheCanvas`](../interfaces/ILeaferImageCacheCanvas.md)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:37](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L37)

## Accessors

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[url](../interfaces/ILeaferImage.md#url)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:15](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L15)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[completed](../interfaces/ILeaferImage.md#completed)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:25](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L25)

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

[src/leafer/packages/image/image/src/LeaferImage.ts:51](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L51)

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

[src/leafer/packages/image/image/src/LeaferImage.ts:64](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L64)

___

### setView

▸ **setView**(`img`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `img` | `any` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:73](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L73)

___

### onComplete

▸ **onComplete**(`isSuccess`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:81](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L81)

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

[src/leafer/packages/image/image/src/LeaferImage.ts:97](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L97)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`, `xGap?`, `yGap?`, `smooth?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `filters?` | [`IObject`](../interfaces/IObject.md) |
| `xGap?` | `number` |
| `yGap?` | `number` |
| `smooth?` | `boolean` |

#### Returns

`any`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[getCanvas](../interfaces/ILeaferImage.md#getcanvas)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:101](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L101)

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

[src/leafer/packages/image/image/src/LeaferImage.ts:118](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L118)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaferImage](../interfaces/ILeaferImage.md).[destroy](../interfaces/ILeaferImage.md#destroy)

#### Defined in

[src/leafer/packages/image/image/src/LeaferImage.ts:125](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/image/image/src/LeaferImage.ts#L125)
