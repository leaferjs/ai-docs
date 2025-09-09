# Interface: IColorConvertModule

## Table of contents

### Methods

- [string](IColorConvertModule.md#string)
- [object](IColorConvertModule.md#object)
- [hasTransparent](IColorConvertModule.md#hastransparent)

## Methods

### string

▸ **string**(`color`, `opacity?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`IColor`](../modules.md#icolor) |
| `opacity?` | `number` |

#### Returns

`string`

#### Defined in

[src/ui/packages/interface/src/module/IColorConvert.ts:4](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IColorConvert.ts#L4)

___

### object

▸ **object**(`color`, `opacity?`): [`IRGBA`](IRGBA.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`IColor`](../modules.md#icolor) |
| `opacity?` | `number` |

#### Returns

[`IRGBA`](IRGBA.md)

#### Defined in

[src/ui/packages/interface/src/module/IColorConvert.ts:5](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IColorConvert.ts#L5)

___

### hasTransparent

▸ **hasTransparent**(`color`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IColorConvert.ts:6](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IColorConvert.ts#L6)
