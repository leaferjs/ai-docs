# Interface: IImagePaint

## Hierarchy

- [`IPaintBase`](IPaintBase.md)

  ↳ **`IImagePaint`**

## Table of contents

### Properties

- [blendMode](IImagePaint.md#blendmode)
- [visible](IImagePaint.md#visible)
- [opacity](IImagePaint.md#opacity)
- [type](IImagePaint.md#type)
- [url](IImagePaint.md#url)
- [mode](IImagePaint.md#mode)
- [format](IImagePaint.md#format)
- [filters](IImagePaint.md#filters)
- [padding](IImagePaint.md#padding)
- [align](IImagePaint.md#align)
- [offset](IImagePaint.md#offset)
- [size](IImagePaint.md#size)
- [scale](IImagePaint.md#scale)
- [rotation](IImagePaint.md#rotation)
- [skew](IImagePaint.md#skew)
- [repeat](IImagePaint.md#repeat)
- [changeful](IImagePaint.md#changeful)
- [sync](IImagePaint.md#sync)
- [showProgress](IImagePaint.md#showprogress)
- [editing](IImagePaint.md#editing)

## Properties

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IPaintBase](IPaintBase.md).[blendMode](IPaintBase.md#blendmode)

#### Defined in

[ui/packages/interface/src/type/IType.ts:14](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L14)

___

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[visible](IPaintBase.md#visible)

#### Defined in

[ui/packages/interface/src/type/IType.ts:15](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L15)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IPaintBase](IPaintBase.md).[opacity](IPaintBase.md#opacity)

#### Defined in

[ui/packages/interface/src/type/IType.ts:16](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L16)

___

### type

• **type**: ``"image"``

#### Overrides

[IPaintBase](IPaintBase.md).[type](IPaintBase.md#type)

#### Defined in

[ui/packages/interface/src/type/IType.ts:61](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L61)

___

### url

• **url**: `string`

#### Defined in

[ui/packages/interface/src/type/IType.ts:63](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L63)

___

### mode

• `Optional` **mode**: [`IImagePaintMode`](../modules.md#iimagepaintmode)

#### Defined in

[ui/packages/interface/src/type/IType.ts:65](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L65)

___

### format

• `Optional` **format**: [`IExportFileType`](../modules.md#iexportfiletype)

#### Defined in

[ui/packages/interface/src/type/IType.ts:66](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L66)

___

### filters

• `Optional` **filters**: [`IImageFilters`](IImageFilters.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:68](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L68)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[ui/packages/interface/src/type/IType.ts:70](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L70)

___

### align

• `Optional` **align**: [`IDirection`](../modules.md#idirection)

#### Defined in

[ui/packages/interface/src/type/IType.ts:72](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L72)

___

### offset

• `Optional` **offset**: [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:73](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L73)

___

### size

• `Optional` **size**: `number` \| [`IOptionSizeData`](IOptionSizeData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:75](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L75)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:76](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L76)

___

### rotation

• `Optional` **rotation**: `number`

#### Defined in

[ui/packages/interface/src/type/IType.ts:77](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L77)

___

### skew

• `Optional` **skew**: [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:78](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L78)

___

### repeat

• `Optional` **repeat**: [`IRepeat`](../modules.md#irepeat)

#### Defined in

[ui/packages/interface/src/type/IType.ts:80](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L80)

___

### changeful

• `Optional` **changeful**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:82](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L82)

___

### sync

• `Optional` **sync**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:83](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L83)

___

### showProgress

• `Optional` **showProgress**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:84](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L84)

___

### editing

• `Optional` **editing**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:86](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L86)
