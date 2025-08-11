# Interface: IExportOptions

## Table of contents

### Properties

- [quality](IExportOptions.md#quality)
- [blob](IExportOptions.md#blob)
- [scale](IExportOptions.md#scale)
- [size](IExportOptions.md#size)
- [padding](IExportOptions.md#padding)
- [smooth](IExportOptions.md#smooth)
- [pixelRatio](IExportOptions.md#pixelratio)
- [clip](IExportOptions.md#clip)
- [slice](IExportOptions.md#slice)
- [trim](IExportOptions.md#trim)
- [fill](IExportOptions.md#fill)
- [screenshot](IExportOptions.md#screenshot)
- [relative](IExportOptions.md#relative)
- [json](IExportOptions.md#json)
- [contextSettings](IExportOptions.md#contextsettings)
- [canvas](IExportOptions.md#canvas)
- [onCanvas](IExportOptions.md#oncanvas)

## Properties

### quality

• `Optional` **quality**: `number`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:9](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L9)

___

### blob

• `Optional` **blob**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:10](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L10)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:11](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L11)

___

### size

• `Optional` **size**: `number` \| [`IOptionSizeData`](IOptionSizeData.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:12](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L12)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:13](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L13)

___

### smooth

• `Optional` **smooth**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:14](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L14)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:15](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L15)

___

### clip

• `Optional` **clip**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:16](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L16)

___

### slice

• `Optional` **slice**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:17](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L17)

___

### trim

• `Optional` **trim**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:18](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L18)

___

### fill

• `Optional` **fill**: `string`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:19](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L19)

___

### screenshot

• `Optional` **screenshot**: `boolean` \| [`IBoundsData`](IBoundsData.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:20](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L20)

___

### relative

• `Optional` **relative**: [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:21](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L21)

___

### json

• `Optional` **json**: [`IJSONOptions`](IJSONOptions.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:22](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L22)

___

### contextSettings

• `Optional` **contextSettings**: `ICanvasRenderingContext2DSettings`

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:23](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L23)

___

### canvas

• `Optional` **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:24](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L24)

___

### onCanvas

• `Optional` **onCanvas**: [`IExportOnCanvasFunction`](IExportOnCanvasFunction.md)

#### Defined in

[src/leafer/packages/interface/src/file/IExport.ts:25](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/interface/src/file/IExport.ts#L25)
