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
- [layout](IPlatform.md#layout)

## Properties

### name

• `Optional` **name**: ``"miniapp"`` \| ``"web"`` \| ``"node"``

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:11](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L11)

___

### os

• `Optional` **os**: ``"Mac"`` \| ``"Windows"`` \| ``"Linux"``

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:12](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L12)

___

### canvas

• `Optional` **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L16)

___

### renderCanvas

• `Optional` **renderCanvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:17](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L17)

___

### canvasType

• `Optional` **canvasType**: [`ICanvasType`](../modules.md#icanvastype)

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L18)

___

### isWorker

• `Optional` **isWorker**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:20](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L20)

___

### isMobile

• `Optional` **isMobile**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:21](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L21)

___

### devicePixelRatio

• `Optional` `Readonly` **devicePixelRatio**: `number`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:23](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L23)

___

### intWheelDeltaY

• `Optional` **intWheelDeltaY**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:25](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L25)

___

### conicGradientSupport

• `Optional` **conicGradientSupport**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:26](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L26)

___

### conicGradientRotate90

• `Optional` **conicGradientRotate90**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:27](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L27)

___

### fullImageShadow

• `Optional` **fullImageShadow**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:28](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L28)

___

### syncDomFont

• `Optional` **syncDomFont**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:29](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L29)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:31](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L31)

___

### origin

• `Optional` **origin**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createCanvas` | (`width`: `number`, `height`: `number`, `format?`: ``"svg"`` \| ``"pdf"``) => `any` |
| `canvasToDataURL` | (`canvas`: `any`, `type?`: [`IExportImageType`](../modules.md#iexportimagetype), `quality?`: `number`) => `string` \| `Promise`<`string`\> |
| `canvasToBolb` | (`canvas`: `any`, `type?`: [`IExportFileType`](../modules.md#iexportfiletype), `quality?`: `number`) => `Promise`<`any`\> |
| `canvasSaveAs` | (`canvas`: `any`, `filename`: `string`, `quality?`: `number`) => `Promise`<`void`\> |
| `download` | (`url`: `string`, `filename`: `string`) => `Promise`<`void`\> |
| `loadImage` | (`url`: `string`) => `Promise`<`any`\> |
| `noRepeat?` | `string` |
| `Image?` | `any` |
| `PointerEvent?` | `any` |
| `DragEvent?` | `any` |

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:34](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L34)

___

### roundRectPatch

• `Optional` **roundRectPatch**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:47](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L47)

___

### ellipseToCurve

• `Optional` **ellipseToCurve**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:48](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L48)

___

### backgrounder

• `Optional` **backgrounder**: `boolean`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:49](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L49)

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

[leafer/packages/interface/src/platform/IPlatform.ts:51](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L51)

___

### miniapp

• `Optional` **miniapp**: [`IMiniapp`](IMiniapp.md)

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:57](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L57)

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
| `crossOrigin` | `string` \| ``false`` |
| `getRealURL` | [`IStringFunction`](IStringFunction.md) |

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:59](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L59)

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

[leafer/packages/interface/src/platform/IPlatform.ts:13](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L13)

___

### requestRender

▸ `Optional` **requestRender**(`render`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `render` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:15](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L15)

___

### layout

▸ `Optional` **layout**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/platform/IPlatform.ts:32](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/platform/IPlatform.ts#L32)
