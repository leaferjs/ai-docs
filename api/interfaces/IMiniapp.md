# Interface: IMiniapp

## Table of contents

### Methods

- [select](IMiniapp.md#select)
- [getBounds](IMiniapp.md#getbounds)
- [getSizeView](IMiniapp.md#getsizeview)
- [onWindowResize](IMiniapp.md#onwindowresize)
- [offWindowResize](IMiniapp.md#offwindowresize)
- [saveToAlbum](IMiniapp.md#savetoalbum)

## Methods

### select

▸ **select**(`name`): [`IMiniappSelect`](IMiniappSelect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IMiniappSelect`](IMiniappSelect.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:94](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/platform/IPlatform.ts#L94)

___

### getBounds

▸ **getBounds**(`select`): `Promise`\<[`IBoundsData`](IBoundsData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | [`IMiniappSelect`](IMiniappSelect.md) |

#### Returns

`Promise`\<[`IBoundsData`](IBoundsData.md)\>

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:95](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/platform/IPlatform.ts#L95)

___

### getSizeView

▸ **getSizeView**(`select`): `Promise`\<[`IMiniappSizeView`](IMiniappSizeView.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | [`IMiniappSelect`](IMiniappSelect.md) |

#### Returns

`Promise`\<[`IMiniappSizeView`](IMiniappSizeView.md)\>

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:96](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/platform/IPlatform.ts#L96)

___

### onWindowResize

▸ **onWindowResize**(`fun`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:97](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/platform/IPlatform.ts#L97)

___

### offWindowResize

▸ **offWindowResize**(`fun`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:98](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/platform/IPlatform.ts#L98)

___

### saveToAlbum

▸ **saveToAlbum**(`path`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:99](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/platform/IPlatform.ts#L99)
