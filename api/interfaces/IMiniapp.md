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

[src/leafer/packages/interface/src/platform/IPlatform.ts:90](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/interface/src/platform/IPlatform.ts#L90)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:91](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/interface/src/platform/IPlatform.ts#L91)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:92](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/interface/src/platform/IPlatform.ts#L92)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:93](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/interface/src/platform/IPlatform.ts#L93)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:94](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/interface/src/platform/IPlatform.ts#L94)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:95](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/interface/src/platform/IPlatform.ts#L95)
