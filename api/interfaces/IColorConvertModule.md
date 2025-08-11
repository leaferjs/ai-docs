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

[src/ui/packages/interface/src/module/IColorConvert.ts:4](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interface/src/module/IColorConvert.ts#L4)

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

[src/ui/packages/interface/src/module/IColorConvert.ts:5](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interface/src/module/IColorConvert.ts#L5)

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

[src/ui/packages/interface/src/module/IColorConvert.ts:6](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interface/src/module/IColorConvert.ts#L6)
