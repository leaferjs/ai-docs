# Interface: IPicker

## Implemented by

- [`Picker`](../classes/Picker.md)

## Table of contents

### Methods

- [getByPoint](IPicker.md#getbypoint)
- [hitPoint](IPicker.md#hitpoint)
- [destroy](IPicker.md#destroy)

## Methods

### getByPoint

▸ **getByPoint**(`hitPoint`, `hitRadius`, `options?`): [`IPickResult`](IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`IPickResult`](IPickResult.md)

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:66](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/selector/ISelector.ts#L66)

___

### hitPoint

▸ **hitPoint**(`hitPoint`, `hitRadius`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:67](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/selector/ISelector.ts#L67)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/selector/ISelector.ts:68](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/selector/ISelector.ts#L68)
