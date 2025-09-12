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

[src/leafer/packages/interface/src/platform/IPlatform.ts:84](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/platform/IPlatform.ts#L84)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:85](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/platform/IPlatform.ts#L85)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:86](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/platform/IPlatform.ts#L86)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:87](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/platform/IPlatform.ts#L87)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:88](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/platform/IPlatform.ts#L88)

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

[src/leafer/packages/interface/src/platform/IPlatform.ts:89](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/platform/IPlatform.ts#L89)
