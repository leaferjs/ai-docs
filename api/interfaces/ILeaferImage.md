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
- [getFull](ILeaferImage.md#getfull)
- [getCanvas](ILeaferImage.md#getcanvas)
- [getPattern](ILeaferImage.md#getpattern)
- [destroy](ILeaferImage.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:33](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L33)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:34](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L34)

___

### view

• **view**: `any`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:36](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L36)

___

### width

• **width**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:37](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L37)

___

### height

• **height**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:38](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L38)

___

### isSVG

• **isSVG**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:40](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L40)

___

### hasOpacityPixel

• **hasOpacityPixel**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:41](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L41)

___

### completed

• `Readonly` **completed**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:43](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L43)

___

### ready

• **ready**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:44](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L44)

___

### error

• **error**: [`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:45](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L45)

___

### loading

• **loading**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:46](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L46)

___

### use

• **use**: `number`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:48](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L48)

___

### config

• **config**: [`ILeaferImageConfig`](ILeaferImageConfig.md)

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:49](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L49)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:51](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L51)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:52](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L52)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:53](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L53)

___

### getCanvas

▸ **getCanvas**(`width`, `height`, `opacity?`, `filters?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `opacity?` | `number` |
| `filters?` | [`IObject`](IObject.md) |

#### Returns

`any`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:54](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L54)

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

[leafer/packages/interface/src/image/ILeaferImage.ts:55](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L55)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/ILeaferImage.ts:56](https://github.com/leaferjs/leafer/blob/27a24ec/packages/interface/src/image/ILeaferImage.ts#L56)
