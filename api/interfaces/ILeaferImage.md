# Interface: ILeaferImage

## Implemented by

- [`LeaferImage`](../classes/LeaferImage.md)

## Table of contents

### Properties

- [innerId](ILeaferImage.md#innerid)
- [url](ILeaferImage.md#url)
- [view](ILeaferImage.md#view)
- [width](ILeaferImage.md#width)
- [height](ILeaferImage.md#height)
- [isSVG](ILeaferImage.md#issvg)
- [hasAlphaPixel](ILeaferImage.md#hasalphapixel)
- [completed](ILeaferImage.md#completed)
- [ready](ILeaferImage.md#ready)
- [error](ILeaferImage.md#error)
- [loading](ILeaferImage.md#loading)
- [isPlacehold](ILeaferImage.md#isplacehold)
- [progress](ILeaferImage.md#progress)
- [use](ILeaferImage.md#use)
- [config](ILeaferImage.md#config)

### Methods

- [load](ILeaferImage.md#load)
- [unload](ILeaferImage.md#unload)
- [getFull](ILeaferImage.md#getfull)
- [getCanvas](ILeaferImage.md#getcanvas)
- [getPattern](ILeaferImage.md#getpattern)
- [destroy](ILeaferImage.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:35](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L35)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:36](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L36)

___

### view

• **view**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:38](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L38)

___

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:39](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L39)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:40](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L40)

___

### isSVG

• **isSVG**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:42](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L42)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:43](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L43)

___

### completed

• `Readonly` **completed**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:45](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L45)

___

### ready

• **ready**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:46](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L46)

___

### error

• **error**: [`IObject`](IObject.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:47](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L47)

___

### loading

• **loading**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:48](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L48)

___

### isPlacehold

• `Optional` **isPlacehold**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:49](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L49)

___

### progress

• **progress**: [`IProgressData`](IProgressData.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:50](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L50)

___

### use

• **use**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:52](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L52)

___

### config

• **config**: [`ILeaferImageConfig`](ILeaferImageConfig.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:53](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L53)

## Methods

### load

▸ **load**(`onSuccess?`, `onError?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess?` | [`ILeaferImageOnLoaded`](ILeaferImageOnLoaded.md) |
| `onError?` | [`ILeaferImageOnError`](ILeaferImageOnError.md) |

#### Returns

`number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:55](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L55)

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

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:56](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L56)

___

### getFull

▸ **getFull**(`filters?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters?` | [`IObject`](IObject.md) |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:57](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L57)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`, `xGap?`, `yGap?`, `smooth?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `filters?` | [`IObject`](IObject.md) |
| `xGap?` | `number` |
| `yGap?` | `number` |
| `smooth?` | `boolean` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:58](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L58)

___

### getPattern

▸ **getPattern**(`canvas`, `repeat`, `transform?`, `paint?`): `CanvasPattern`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `any` |
| `repeat` | `string` |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `paint?` | [`IObject`](IObject.md) |

#### Returns

`CanvasPattern`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:59](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L59)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:60](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/interface/src/image/ILeaferImage.ts#L60)
