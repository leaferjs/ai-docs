# Interface: IFilterModule

## Table of contents

### Properties

- [list](IFilterModule.md#list)

### Methods

- [register](IFilterModule.md#register)
- [apply](IFilterModule.md#apply)
- [getSpread](IFilterModule.md#getspread)

## Properties

### list

• **list**: `IFilterProcessorMap`

#### Defined in

[ui/packages/interface/src/module/IFilter.ts:8](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/module/IFilter.ts#L8)

## Methods

### register

▸ **register**(`name`, `filterProcessor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `filterProcessor` | [`IFilterProcessor`](IFilterProcessor.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IFilter.ts:9](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/module/IFilter.ts#L9)

___

### apply

▸ **apply**(`filters`, `ui`, `bounds`, `currentCanvas`, `originCanvas`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`IFilter`](IFilter.md)[] |
| `ui` | [`IUI`](IUI.md) |
| `bounds` | [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md) |
| `currentCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `originCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape` | [`ICachedShape`](ICachedShape.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/IFilter.ts:10](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/module/IFilter.ts#L10)

___

### getSpread

▸ **getSpread**(`filters`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`IFilter`](IFilter.md)[] |

#### Returns

`number`

#### Defined in

[ui/packages/interface/src/module/IFilter.ts:11](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/module/IFilter.ts#L11)
