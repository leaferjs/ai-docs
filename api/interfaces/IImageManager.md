# Interface: IImageManager

## Table of contents

### Properties

- [patternTasker](IImageManager.md#patterntasker)
- [patternLocked](IImageManager.md#patternlocked)
- [recycledList](IImageManager.md#recycledlist)

### Methods

- [get](IImageManager.md#get)
- [recycle](IImageManager.md#recycle)
- [clearRecycled](IImageManager.md#clearrecycled)
- [hasOpacityPixel](IImageManager.md#hasopacitypixel)
- [isFormat](IImageManager.md#isformat)
- [destroy](IImageManager.md#destroy)

## Properties

### patternTasker

• **patternTasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:7](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L7)

___

### patternLocked

• `Optional` **patternLocked**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:8](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L8)

___

### recycledList

• **recycledList**: [`ILeaferImage`](ILeaferImage.md)[]

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L9)

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

[leafer/packages/interface/src/image/IImageManager.ts:11](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L11)

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

[leafer/packages/interface/src/image/IImageManager.ts:12](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L12)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L13)

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

[leafer/packages/interface/src/image/IImageManager.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L14)

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

[leafer/packages/interface/src/image/IImageManager.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L15)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:17](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/image/IImageManager.ts#L17)
