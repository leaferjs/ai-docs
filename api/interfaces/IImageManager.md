# Interface: IImageManager

## Table of contents

### Properties

- [maxRecycled](IImageManager.md#maxrecycled)
- [recycledList](IImageManager.md#recycledlist)
- [patternTasker](IImageManager.md#patterntasker)
- [patternLocked](IImageManager.md#patternlocked)

### Methods

- [get](IImageManager.md#get)
- [recycle](IImageManager.md#recycle)
- [clearRecycled](IImageManager.md#clearrecycled)
- [hasOpacityPixel](IImageManager.md#hasopacitypixel)
- [isFormat](IImageManager.md#isformat)
- [destroy](IImageManager.md#destroy)

## Properties

### maxRecycled

• **maxRecycled**: `number`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:7](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L7)

___

### recycledList

• **recycledList**: [`ILeaferImage`](ILeaferImage.md)[]

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:8](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L8)

___

### patternTasker

• **patternTasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:10](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L10)

___

### patternLocked

• `Optional` **patternLocked**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:11](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L11)

## Methods

### get

▸ **get**(`config`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:13](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L13)

___

### recycle

▸ **recycle**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`ILeaferImage`](ILeaferImage.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:14](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L14)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:15](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L15)

___

### hasOpacityPixel

▸ **hasOpacityPixel**(`config`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:16](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L16)

___

### isFormat

▸ **isFormat**(`format`, `config`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `config` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:17](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L17)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:19](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/image/IImageManager.ts#L19)
