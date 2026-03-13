# Interface: IImagePaint

## Hierarchy

- [`IPaintBase`](IPaintBase.md)

- [`IFilmOptions`](IFilmOptions.md)

  ↳ **`IImagePaint`**

  ↳↳ [`IStrokeImagePaint`](IStrokeImagePaint.md)

## Table of contents

### Properties

- [nowIndex](IImagePaint.md#nowindex)
- [pauseIndex](IImagePaint.md#pauseindex)
- [loop](IImagePaint.md#loop)
- [speed](IImagePaint.md#speed)
- [autoplay](IImagePaint.md#autoplay)
- [blendMode](IImagePaint.md#blendmode)
- [visible](IImagePaint.md#visible)
- [opacity](IImagePaint.md#opacity)
- [style](IImagePaint.md#style)
- [editing](IImagePaint.md#editing)
- [scaleFixed](IImagePaint.md#scalefixed)
- [type](IImagePaint.md#type)
- [url](IImagePaint.md#url)
- [lod](IImagePaint.md#lod)
- [mode](IImagePaint.md#mode)
- [format](IImagePaint.md#format)
- [filter](IImagePaint.md#filter)
- [padding](IImagePaint.md#padding)
- [align](IImagePaint.md#align)
- [offset](IImagePaint.md#offset)
- [size](IImagePaint.md#size)
- [scale](IImagePaint.md#scale)
- [rotation](IImagePaint.md#rotation)
- [skew](IImagePaint.md#skew)
- [freeTransform](IImagePaint.md#freetransform)
- [clipSize](IImagePaint.md#clipsize)
- [repeat](IImagePaint.md#repeat)
- [gap](IImagePaint.md#gap)
- [interlace](IImagePaint.md#interlace)
- [changeful](IImagePaint.md#changeful)
- [sync](IImagePaint.md#sync)
- [showProgress](IImagePaint.md#showprogress)

## Properties

### nowIndex

• `Optional` **nowIndex**: `number`

#### Inherited from

[IFilmOptions](IFilmOptions.md).[nowIndex](IFilmOptions.md#nowindex)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:52](https://github.com/leaferjs/leafer/blob/2dd3aed10b347ac75f7a82b60063601188ec448b/packages/interface/src/image/ILeaferFilm.ts#L52)

___

### pauseIndex

• `Optional` **pauseIndex**: `number`

#### Inherited from

[IFilmOptions](IFilmOptions.md).[pauseIndex](IFilmOptions.md#pauseindex)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:53](https://github.com/leaferjs/leafer/blob/2dd3aed10b347ac75f7a82b60063601188ec448b/packages/interface/src/image/ILeaferFilm.ts#L53)

___

### loop

• `Optional` **loop**: `number`

#### Inherited from

[IFilmOptions](IFilmOptions.md).[loop](IFilmOptions.md#loop)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:54](https://github.com/leaferjs/leafer/blob/2dd3aed10b347ac75f7a82b60063601188ec448b/packages/interface/src/image/ILeaferFilm.ts#L54)

___

### speed

• `Optional` **speed**: `number`

#### Inherited from

[IFilmOptions](IFilmOptions.md).[speed](IFilmOptions.md#speed)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:55](https://github.com/leaferjs/leafer/blob/2dd3aed10b347ac75f7a82b60063601188ec448b/packages/interface/src/image/ILeaferFilm.ts#L55)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[IFilmOptions](IFilmOptions.md).[autoplay](IFilmOptions.md#autoplay)

#### Defined in

[src/leafer/packages/interface/src/image/ILeaferFilm.ts:56](https://github.com/leaferjs/leafer/blob/2dd3aed10b347ac75f7a82b60063601188ec448b/packages/interface/src/image/ILeaferFilm.ts#L56)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IPaintBase](IPaintBase.md).[blendMode](IPaintBase.md#blendmode)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:17](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L17)

___

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[visible](IPaintBase.md#visible)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:18](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L18)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IPaintBase](IPaintBase.md).[opacity](IPaintBase.md#opacity)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:19](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L19)

___

### style

• `Optional` **style**: [`IStrokeStyle`](IStrokeStyle.md)

#### Inherited from

[IPaintBase](IPaintBase.md).[style](IPaintBase.md#style)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:21](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L21)

___

### editing

• `Optional` **editing**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[editing](IPaintBase.md#editing)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:22](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L22)

___

### scaleFixed

• `Optional` **scaleFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IPaintBase](IPaintBase.md).[scaleFixed](IPaintBase.md#scalefixed)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:23](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L23)

___

### type

• **type**: [`IMultimediaType`](../modules.md#imultimediatype)

#### Overrides

[IPaintBase](IPaintBase.md).[type](IPaintBase.md#type)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:74](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L74)

___

### url

• **url**: `string`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:76](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L76)

___

### lod

• `Optional` **lod**: [`IImageLOD`](IImageLOD.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:77](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L77)

___

### mode

• `Optional` **mode**: [`IImagePaintMode`](../modules.md#iimagepaintmode)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:79](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L79)

___

### format

• `Optional` **format**: [`IExportFileType`](../modules.md#iexportfiletype)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:80](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L80)

___

### filter

• `Optional` **filter**: [`IImageFilters`](../modules.md#iimagefilters)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:82](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L82)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:84](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L84)

___

### align

• `Optional` **align**: [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:86](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L86)

___

### offset

• `Optional` **offset**: [`IPointData`](IPointData.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:87](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L87)

___

### size

• `Optional` **size**: `number` \| [`IOptionSizeData`](IOptionSizeData.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:89](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L89)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:90](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L90)

___

### rotation

• `Optional` **rotation**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:91](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L91)

___

### skew

• `Optional` **skew**: [`IPointData`](IPointData.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:92](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L92)

___

### freeTransform

• `Optional` **freeTransform**: `boolean`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:94](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L94)

___

### clipSize

• `Optional` **clipSize**: [`ISizeData`](ISizeData.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:96](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L96)

___

### repeat

• `Optional` **repeat**: [`IRepeat`](../modules.md#irepeat)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:98](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L98)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:99](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L99)

___

### interlace

• `Optional` **interlace**: `number` \| [`IPercentData`](IPercentData.md) \| [`IInterlace`](IInterlace.md)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:100](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L100)

___

### changeful

• `Optional` **changeful**: `boolean`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:102](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L102)

___

### sync

• `Optional` **sync**: `boolean`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:103](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L103)

___

### showProgress

• `Optional` **showProgress**: `string` \| `boolean`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:104](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/type/IType.ts#L104)
