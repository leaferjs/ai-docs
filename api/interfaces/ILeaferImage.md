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
- [hasOpacityPixel](ILeaferImage.md#hasopacitypixel)
- [completed](ILeaferImage.md#completed)
- [ready](ILeaferImage.md#ready)
- [error](ILeaferImage.md#error)
- [loading](ILeaferImage.md#loading)
- [use](ILeaferImage.md#use)
- [config](ILeaferImage.md#config)

### Methods

- [load](ILeaferImage.md#load)
- [unload](ILeaferImage.md#unload)
- [getCanvas](ILeaferImage.md#getcanvas)
- [getPattern](ILeaferImage.md#getpattern)
- [destroy](ILeaferImage.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:31](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L31)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:32](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L32)

___

### view

• **view**: `unknown`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:34](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L34)

___

### width

• **width**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:35](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L35)

___

### height

• **height**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:36](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L36)

___

### isSVG

• **isSVG**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:38](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L38)

___

### hasOpacityPixel

• **hasOpacityPixel**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:39](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L39)

___

### completed

• `Readonly` **completed**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:41](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L41)

___

### ready

• **ready**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:42](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L42)

___

### error

• **error**: [`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:43](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L43)

___

### loading

• **loading**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:44](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L44)

___

### use

• **use**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:46](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L46)

___

### config

• **config**: [`ILeaferImageConfig`](ILeaferImageConfig.md)

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:47](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L47)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:49](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L49)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:50](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L50)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `_filters?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `_filters?` | [`IObject`](IObject.md) |

#### Returns

`unknown`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:51](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L51)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:52](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:53](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/ILeaferImage.ts#L53)
