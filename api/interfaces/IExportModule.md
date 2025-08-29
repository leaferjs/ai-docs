# Interface: IExportModule

## Table of contents

### Properties

- [running](IExportModule.md#running)

### Methods

- [export](IExportModule.md#export)
- [syncExport](IExportModule.md#syncexport)

## Properties

### running

• `Optional` **running**: `boolean`

#### Defined in

[src/ui/packages/interface/src/module/IExport.ts:5](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/module/IExport.ts#L5)

## Methods

### export

▸ **export**(`leaf`, `filename`, `options?`): `Promise`\<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](IExportResult.md)\>

#### Defined in

[src/ui/packages/interface/src/module/IExport.ts:6](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/module/IExport.ts#L6)

___

### syncExport

▸ **syncExport**(`leaf`, `filename`, `options?`): [`IExportResult`](IExportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

[`IExportResult`](IExportResult.md)

#### Defined in

[src/ui/packages/interface/src/module/IExport.ts:7](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/module/IExport.ts#L7)
