# Interface: IImagePaint

## Hierarchy

- [`IPaintBase`](IPaintBase.md)

  ↳ **`IImagePaint`**

  ↳↳ [`IStrokeImagePaint`](IStrokeImagePaint.md)

## Table of contents

### Properties

- [blendMode](IImagePaint.md#blendmode)
- [visible](IImagePaint.md#visible)
- [opacity](IImagePaint.md#opacity)
- [style](IImagePaint.md#style)
- [editing](IImagePaint.md#editing)
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
- [clipSize](IImagePaint.md#clipsize)
- [repeat](IImagePaint.md#repeat)
- [scaleFixed](IImagePaint.md#scalefixed)
- [changeful](IImagePaint.md#changeful)
- [sync](IImagePaint.md#sync)
- [showProgress](IImagePaint.md#showprogress)

## Properties

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IPaintBase](IPaintBase.md).[blendMode](IPaintBase.md#blendmode)

#### Defined in

[ui/packages/interface/src/type/IType.ts:17](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L17)

___

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[visible](IPaintBase.md#visible)

#### Defined in

[ui/packages/interface/src/type/IType.ts:18](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L18)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IPaintBase](IPaintBase.md).[opacity](IPaintBase.md#opacity)

#### Defined in

[ui/packages/interface/src/type/IType.ts:19](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L19)

___

### style

• `Optional` **style**: [`IStrokeStyle`](IStrokeStyle.md)

#### Inherited from

[IPaintBase](IPaintBase.md).[style](IPaintBase.md#style)

#### Defined in

[ui/packages/interface/src/type/IType.ts:21](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L21)

___

### editing

• `Optional` **editing**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[editing](IPaintBase.md#editing)

#### Defined in

[ui/packages/interface/src/type/IType.ts:22](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L22)

___

### type

• **type**: ``"image"``

#### Overrides

[IPaintBase](IPaintBase.md).[type](IPaintBase.md#type)

#### Defined in

[ui/packages/interface/src/type/IType.ts:72](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L72)

___

### url

• **url**: `string`

#### Defined in

[ui/packages/interface/src/type/IType.ts:74](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L74)

___

### mode

• `Optional` **mode**: [`IImagePaintMode`](../modules.md#iimagepaintmode)

#### Defined in

[ui/packages/interface/src/type/IType.ts:76](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L76)

___

### format

• `Optional` **format**: [`IExportFileType`](../modules.md#iexportfiletype)

#### Defined in

[ui/packages/interface/src/type/IType.ts:77](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L77)

___

### filters

• `Optional` **filters**: [`IImageFilters`](IImageFilters.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L79)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[ui/packages/interface/src/type/IType.ts:81](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L81)

___

### align

• `Optional` **align**: [`IDirection`](../modules.md#idirection)

#### Defined in

[ui/packages/interface/src/type/IType.ts:83](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L83)

___

### offset

• `Optional` **offset**: [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:84](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L84)

___

### size

• `Optional` **size**: `number` \| [`IOptionSizeData`](IOptionSizeData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:86](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L86)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:87](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L87)

___

### rotation

• `Optional` **rotation**: `number`

#### Defined in

[ui/packages/interface/src/type/IType.ts:88](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L88)

___

### skew

• `Optional` **skew**: [`IPointData`](IPointData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:89](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L89)

___

### clipSize

• `Optional` **clipSize**: [`ISizeData`](ISizeData.md)

#### Defined in

[ui/packages/interface/src/type/IType.ts:91](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L91)

___

### repeat

• `Optional` **repeat**: [`IRepeat`](../modules.md#irepeat)

#### Defined in

[ui/packages/interface/src/type/IType.ts:93](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L93)

___

### scaleFixed

• `Optional` **scaleFixed**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:94](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L94)

___

### changeful

• `Optional` **changeful**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:96](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L96)

___

### sync

• `Optional` **sync**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:97](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L97)

___

### showProgress

• `Optional` **showProgress**: `boolean`

#### Defined in

[ui/packages/interface/src/type/IType.ts:98](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/interface/src/type/IType.ts#L98)
