# Interface: IExportModule

## Table of contents

### Properties

- [running](IExportModule.md#running)

### Methods

- [export](IExportModule.md#export)

## Properties

### running

• `Optional` **running**: `boolean`

#### Defined in

[ui/packages/interface/src/module/IExport.ts:5](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/module/IExport.ts#L5)

## Methods

### export

▸ **export**(`leaf`, `filename`, `options?`): `Promise`<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`<[`IExportResult`](IExportResult.md)\>

#### Defined in

[ui/packages/interface/src/module/IExport.ts:6](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/module/IExport.ts#L6)
