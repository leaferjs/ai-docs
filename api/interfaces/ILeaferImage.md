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
- [largeThumb](ILeaferImage.md#largethumb)
- [levels](ILeaferImage.md#levels)
- [levelsRange](ILeaferImage.md#levelsrange)
- [minLevel](ILeaferImage.md#minlevel)
- [progress](ILeaferImage.md#progress)
- [use](ILeaferImage.md#use)
- [config](ILeaferImage.md#config)

### Methods

- [load](ILeaferImage.md#load)
- [unload](ILeaferImage.md#unload)
- [getFull](ILeaferImage.md#getfull)
- [getCanvas](ILeaferImage.md#getcanvas)
- [getPattern](ILeaferImage.md#getpattern)
- [clearLevels](ILeaferImage.md#clearlevels)
- [destroy](ILeaferImage.md#destroy)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:61](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L61)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:62](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L62)

___

### view

• **view**: `any`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:64](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L64)

___

### width

• **width**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:65](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L65)

___

### height

• **height**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:66](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L66)

___

### isSVG

• **isSVG**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:68](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L68)

___

### hasAlphaPixel

• **hasAlphaPixel**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:69](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L69)

___

### completed

• `Readonly` **completed**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:71](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L71)

___

### ready

• **ready**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:72](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L72)

___

### error

• **error**: [`IObject`](IObject.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:73](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L73)

___

### loading

• **loading**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:74](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L74)

___

### isPlacehold

• `Optional` **isPlacehold**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:76](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L76)

___

### largeThumb

• `Optional` **largeThumb**: [`ILeaferImageLevel`](ILeaferImageLevel.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:78](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L78)

___

### levels

• `Optional` **levels**: [`ILeaferImageLevel`](ILeaferImageLevel.md)[]

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:79](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L79)

___

### levelsRange

• `Optional` **levelsRange**: [`IRangeSize`](IRangeSize.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:80](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L80)

___

### minLevel

• `Optional` **minLevel**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:81](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L81)

___

### progress

• `Optional` **progress**: [`IProgressData`](IProgressData.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:83](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L83)

___

### use

• **use**: `number`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:85](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L85)

___

### config

• **config**: [`ILeaferImageConfig`](ILeaferImageConfig.md)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:86](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L86)

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

[src/leafer/packages/interface/src/image/ILeaferImage.ts:88](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L88)

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

[src/leafer/packages/interface/src/image/ILeaferImage.ts:89](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L89)

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

[src/leafer/packages/interface/src/image/ILeaferImage.ts:90](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L90)

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

[src/leafer/packages/interface/src/image/ILeaferImage.ts:91](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L91)

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

[src/leafer/packages/interface/src/image/ILeaferImage.ts:92](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L92)

___

### clearLevels

▸ **clearLevels**(`checkUse?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checkUse?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:94](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L94)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferImage.ts:95](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/image/ILeaferImage.ts#L95)
