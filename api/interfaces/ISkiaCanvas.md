# Interface: ISkiaCanvas

## Table of contents

### Methods

- [toBuffer](ISkiaCanvas.md#tobuffer)
- [toBufferSync](ISkiaCanvas.md#tobuffersync)
- [toDataURL](ISkiaCanvas.md#todataurl)
- [toDataURLSync](ISkiaCanvas.md#todataurlsync)
- [saveAs](ISkiaCanvas.md#saveas)
- [saveAsSync](ISkiaCanvas.md#saveassync)

## Methods

### toBuffer

▸ **toBuffer**(`format`, `config`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:7](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ISkiaCanvas.ts#L7)

___

### toBufferSync

▸ **toBufferSync**(`format`, `config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportFileType`](../modules.md#iexportfiletype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:8](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ISkiaCanvas.ts#L8)

___

### toDataURL

▸ **toDataURL**(`format`, `config`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportImageType`](../modules.md#iexportimagetype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:9](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ISkiaCanvas.ts#L9)

___

### toDataURLSync

▸ **toDataURLSync**(`format`, `config`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`IExportImageType`](../modules.md#iexportimagetype) |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:10](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ISkiaCanvas.ts#L10)

___

### saveAs

▸ **saveAs**(`filename`, `config`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:11](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ISkiaCanvas.ts#L11)

___

### saveAsSync

▸ **saveAsSync**(`filename`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `config` | [`ISkiaCanvasExportConfig`](ISkiaCanvasExportConfig.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:12](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ISkiaCanvas.ts#L12)
