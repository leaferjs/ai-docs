# Interface: IResource

## Table of contents

### Properties

- [map](IResource.md#map)
- [tasker](IResource.md#tasker)
- [isComplete](IResource.md#iscomplete)

### Methods

- [set](IResource.md#set)
- [get](IResource.md#get)
- [remove](IResource.md#remove)
- [setImage](IResource.md#setimage)
- [loadImage](IResource.md#loadimage)
- [destroy](IResource.md#destroy)

## Properties

### map

• **map**: `any`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:9](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L9)

___

### tasker

• **tasker**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:10](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L10)

___

### isComplete

• `Readonly` **isComplete**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:11](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L11)

## Methods

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:13](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L13)

___

### get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:14](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L14)

___

### remove

▸ **remove**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:15](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L15)

___

### setImage

▸ **setImage**(`key`, `value`, `format?`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` \| [`IObject`](IObject.md) \| [`ILeaferCanvas`](ILeaferCanvas.md) \| [`ILeaferImage`](ILeaferImage.md) |
| `format?` | [`IExportFileType`](../modules.md#iexportfiletype) |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:17](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L17)

___

### loadImage

▸ **loadImage**(`key`, `format?`): `Promise`\<[`ILeaferImage`](ILeaferImage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `format?` | [`IExportFileType`](../modules.md#iexportfiletype) |

#### Returns

`Promise`\<[`ILeaferImage`](ILeaferImage.md)\>

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:18](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L18)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/file/IResource.ts:20](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/file/IResource.ts#L20)
