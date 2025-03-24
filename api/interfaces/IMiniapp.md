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

[leafer/packages/interface/src/platform/IPlatform.ts:78](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/platform/IPlatform.ts#L78)

___

### getBounds

▸ **getBounds**(`select`): `Promise`<[`IBoundsData`](IBoundsData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | [`IMiniappSelect`](IMiniappSelect.md) |

#### Returns

`Promise`<[`IBoundsData`](IBoundsData.md)\>

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:79](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/platform/IPlatform.ts#L79)

___

### getSizeView

▸ **getSizeView**(`select`): `Promise`<[`IMiniappSizeView`](IMiniappSizeView.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `select` | [`IMiniappSelect`](IMiniappSelect.md) |

#### Returns

`Promise`<[`IMiniappSizeView`](IMiniappSizeView.md)\>

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:80](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/platform/IPlatform.ts#L80)

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

[leafer/packages/interface/src/platform/IPlatform.ts:81](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/platform/IPlatform.ts#L81)

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

[leafer/packages/interface/src/platform/IPlatform.ts:82](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/platform/IPlatform.ts#L82)

___

### saveToAlbum

▸ **saveToAlbum**(`path`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:83](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/platform/IPlatform.ts#L83)
