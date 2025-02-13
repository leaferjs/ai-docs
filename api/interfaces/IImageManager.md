# Interface: IImageManager

## Table of contents

### Properties

- [map](IImageManager.md#map)
- [recycledList](IImageManager.md#recycledlist)
- [tasker](IImageManager.md#tasker)
- [patternTasker](IImageManager.md#patterntasker)
- [patternLocked](IImageManager.md#patternlocked)
- [isComplete](IImageManager.md#iscomplete)

### Methods

- [get](IImageManager.md#get)
- [recycle](IImageManager.md#recycle)
- [clearRecycled](IImageManager.md#clearrecycled)
- [hasOpacityPixel](IImageManager.md#hasopacitypixel)
- [isFormat](IImageManager.md#isformat)
- [destroy](IImageManager.md#destroy)

## Properties

### map

• **map**: `ILeaferImageMap`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:10](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L10)

___

### recycledList

• **recycledList**: [`ILeaferImage`](ILeaferImage.md)[]

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:11](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L11)

___

### tasker

• **tasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:12](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L12)

___

### patternTasker

• **patternTasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L13)

___

### patternLocked

• `Optional` **patternLocked**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:14](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L14)

___

### isComplete

• `Readonly` **isComplete**: `boolean`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L15)

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

[leafer/packages/interface/src/image/IImageManager.ts:16](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L16)

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

[leafer/packages/interface/src/image/IImageManager.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L17)

___

### clearRecycled

▸ **clearRecycled**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L18)

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

[leafer/packages/interface/src/image/IImageManager.ts:19](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L19)

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

[leafer/packages/interface/src/image/IImageManager.ts:20](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L20)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/image/IImageManager.ts:21](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/image/IImageManager.ts#L21)
