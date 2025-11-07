# Interface: IPlatform

## Table of contents

### Properties

- [name](IPlatform.md#name)
- [os](IPlatform.md#os)
- [canvas](IPlatform.md#canvas)
- [renderCanvas](IPlatform.md#rendercanvas)
- [canvasType](IPlatform.md#canvastype)
- [isWorker](IPlatform.md#isworker)
- [isMobile](IPlatform.md#ismobile)
- [devicePixelRatio](IPlatform.md#devicepixelratio)
- [intWheelDeltaY](IPlatform.md#intwheeldeltay)
- [conicGradientSupport](IPlatform.md#conicgradientsupport)
- [conicGradientRotate90](IPlatform.md#conicgradientrotate90)
- [fullImageShadow](IPlatform.md#fullimageshadow)
- [syncDomFont](IPlatform.md#syncdomfont)
- [selector](IPlatform.md#selector)
- [origin](IPlatform.md#origin)
- [roundRectPatch](IPlatform.md#roundrectpatch)
- [ellipseToCurve](IPlatform.md#ellipsetocurve)
- [backgrounder](IPlatform.md#backgrounder)
- [event](IPlatform.md#event)
- [miniapp](IPlatform.md#miniapp)
- [image](IPlatform.md#image)

### Methods

- [toURL](IPlatform.md#tourl)
- [requestRender](IPlatform.md#requestrender)
- [getSelector](IPlatform.md#getselector)
- [layout](IPlatform.md#layout)
- [render](IPlatform.md#render)

## Properties

### name

• `Optional` **name**: ``"miniapp"`` \| ``"web"`` \| ``"node"``

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:15](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L15)

___

### os

• `Optional` **os**: ``"Mac"`` \| ``"Windows"`` \| ``"Linux"``

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:16](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L16)

___

### canvas

• `Optional` **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:20](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L20)

___

### renderCanvas

• `Optional` **renderCanvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:21](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L21)

___

### canvasType

• `Optional` **canvasType**: [`ICanvasType`](../modules.md#icanvastype)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:22](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L22)

___

### isWorker

• `Optional` **isWorker**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:24](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L24)

___

### isMobile

• `Optional` **isMobile**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:25](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L25)

___

### devicePixelRatio

• `Optional` `Readonly` **devicePixelRatio**: `number`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:27](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L27)

___

### intWheelDeltaY

• `Optional` **intWheelDeltaY**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:29](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L29)

___

### conicGradientSupport

• `Optional` **conicGradientSupport**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:30](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L30)

___

### conicGradientRotate90

• `Optional` **conicGradientRotate90**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:31](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L31)

___

### fullImageShadow

• `Optional` **fullImageShadow**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:32](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L32)

___

### syncDomFont

• `Optional` **syncDomFont**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:33](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L33)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:35](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L35)

___

### origin

• `Optional` **origin**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createCanvas` | (`width`: `number`, `height`: `number`, `format?`: ``"svg"`` \| ``"pdf"``) => `any` |
| `canvasToDataURL` | (`canvas`: `any`, `type?`: [`IExportImageType`](../modules.md#iexportimagetype), `quality?`: `number`) => `string` \| `Promise`\<`string`\> |
| `canvasToBolb` | (`canvas`: `any`, `type?`: [`IExportFileType`](../modules.md#iexportfiletype), `quality?`: `number`) => `Promise`\<`any`\> |
| `canvasSaveAs` | (`canvas`: `any`, `filename`: `string`, `quality?`: `number`) => `Promise`\<`void`\> |
| `download` | (`url`: `string`, `filename`: `string`) => `Promise`\<`void`\> |
| `loadImage` | (`url`: `string`, `crossOrigin?`: [`IImageCrossOrigin`](../modules.md#iimagecrossorigin), `leaferImage?`: [`ILeaferImage`](ILeaferImage.md)) => `Promise`\<`any`\> |
| `noRepeat?` | `string` |
| `Image?` | `any` |
| `PointerEvent?` | `any` |
| `DragEvent?` | `any` |

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:40](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L40)

___

### roundRectPatch

• `Optional` **roundRectPatch**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:53](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L53)

___

### ellipseToCurve

• `Optional` **ellipseToCurve**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:54](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L54)

___

### backgrounder

• `Optional` **backgrounder**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:55](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L55)

___

### event

• `Optional` **event**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stopDefault` | (`origin`: [`IObject`](IObject.md)) => `void` |
| `stopNow` | (`origin`: [`IObject`](IObject.md)) => `void` |
| `stop` | (`origin`: [`IObject`](IObject.md)) => `void` |

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:57](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L57)

___

### miniapp

• `Optional` **miniapp**: [`IMiniapp`](IMiniapp.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:63](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L63)

___

### image

• **image**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hitCanvasSize` | `number` |
| `maxCacheSize` | `number` |
| `maxPatternSize` | `number` |
| `prefix?` | `string` |
| `suffix?` | `string` |
| `crossOrigin` | [`IImageCrossOrigin`](../modules.md#iimagecrossorigin) |
| `isLarge` | (`size`: [`ISizeData`](ISizeData.md), `scaleX?`: `number`, `scaleY?`: `number`, `largeSize?`: `number`) => `boolean` |
| `isSuperLarge` | (`size`: [`ISizeData`](ISizeData.md), `scaleX?`: `number`, `scaleY?`: `number`) => `boolean` |
| `getRealURL` | [`IStringFunction`](IStringFunction.md) |
| `resize` | (`image`: `any`, `width`: `number`, `height`: `number`, `xGap?`: `number`, `yGap?`: `number`, `clip?`: [`IBoundsData`](IBoundsData.md), `smooth?`: `boolean`, `opacity?`: `number`, `filters?`: [`IObject`](IObject.md)) => `any` |
| `setPatternTransform` | (`pattern`: `CanvasPattern`, `transform?`: [`IMatrixData`](IMatrixData.md), `paint?`: [`IObject`](IObject.md)) => `void` |

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:65](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L65)

## Methods

### toURL

▸ **toURL**(`text`, `fileType?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `fileType?` | ``"svg"`` \| ``"text"`` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:17](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L17)

___

### requestRender

▸ **requestRender**(`render`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:19](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L19)

___

### getSelector

▸ **getSelector**(`leaf`): [`ISelector`](ISelector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

[`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:36](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L36)

___

### layout

▸ **layout**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:37](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L37)

___

### render

▸ **render**(`target`, `canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/platform/IPlatform.ts:38](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/platform/IPlatform.ts#L38)
