# Class: Renderer

## Implements

- [`IRenderer`](../interfaces/IRenderer.md)

## Table of contents

### Constructors

- [constructor](Renderer.md#constructor)

### Properties

- [target](Renderer.md#target)
- [canvas](Renderer.md#canvas)
- [updateBlocks](Renderer.md#updateblocks)
- [FPS](Renderer.md#fps)
- [totalTimes](Renderer.md#totaltimes)
- [times](Renderer.md#times)
- [running](Renderer.md#running)
- [rendering](Renderer.md#rendering)
- [waitAgain](Renderer.md#waitagain)
- [changed](Renderer.md#changed)
- [ignore](Renderer.md#ignore)
- [config](Renderer.md#config)
- [clipSpread](Renderer.md#clipspread)
- [renderBounds](Renderer.md#renderbounds)
- [renderOptions](Renderer.md#renderoptions)
- [totalBounds](Renderer.md#totalbounds)
- [requestTime](Renderer.md#requesttime)
- [frameTime](Renderer.md#frametime)
- [frames](Renderer.md#frames)
- [\_\_eventIds](Renderer.md#__eventids)

### Accessors

- [needFill](Renderer.md#needfill)

### Methods

- [start](Renderer.md#start)
- [stop](Renderer.md#stop)
- [update](Renderer.md#update)
- [requestLayout](Renderer.md#requestlayout)
- [checkRender](Renderer.md#checkrender)
- [render](Renderer.md#render)
- [renderAgain](Renderer.md#renderagain)
- [renderOnce](Renderer.md#renderonce)
- [partRender](Renderer.md#partrender)
- [clipRender](Renderer.md#cliprender)
- [fullRender](Renderer.md#fullrender)
- [\_\_render](Renderer.md#__render)
- [addBlock](Renderer.md#addblock)
- [mergeBlocks](Renderer.md#mergeblocks)
- [\_\_requestRender](Renderer.md#__requestrender)
- [\_\_onResize](Renderer.md#__onresize)
- [\_\_onLayoutEnd](Renderer.md#__onlayoutend)
- [emitRender](Renderer.md#emitrender)
- [\_\_listenEvents](Renderer.md#__listenevents)
- [\_\_removeListenEvents](Renderer.md#__removelistenevents)
- [destroy](Renderer.md#destroy)

## Constructors

### constructor

• **new Renderer**(`target`, `canvas`, `userConfig?`): [`Renderer`](Renderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `userConfig?` | [`IRendererConfig`](../interfaces/IRendererConfig.md) |

#### Returns

[`Renderer`](Renderer.md)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:42](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L42)

## Properties

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[target](../interfaces/IRenderer.md#target)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:9](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L9)

___

### canvas

• **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[canvas](../interfaces/IRenderer.md#canvas)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:10](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L10)

___

### updateBlocks

• **updateBlocks**: [`IBounds`](../interfaces/IBounds.md)[]

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[updateBlocks](../interfaces/IRenderer.md#updateblocks)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:11](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L11)

___

### FPS

• **FPS**: `number` = `60`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[FPS](../interfaces/IRenderer.md#fps)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:13](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L13)

___

### totalTimes

• **totalTimes**: `number` = `0`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[totalTimes](../interfaces/IRenderer.md#totaltimes)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:14](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L14)

___

### times

• **times**: `number` = `0`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[times](../interfaces/IRenderer.md#times)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:15](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L15)

___

### running

• **running**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[running](../interfaces/IRenderer.md#running)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:17](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L17)

___

### rendering

• **rendering**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[rendering](../interfaces/IRenderer.md#rendering)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:18](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L18)

___

### waitAgain

• **waitAgain**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[waitAgain](../interfaces/IRenderer.md#waitagain)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:20](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L20)

___

### changed

• **changed**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[changed](../interfaces/IRenderer.md#changed)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:21](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L21)

___

### ignore

• **ignore**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[ignore](../interfaces/IRenderer.md#ignore)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:22](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L22)

___

### config

• **config**: [`IRendererConfig`](../interfaces/IRendererConfig.md)

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[config](../interfaces/IRenderer.md#config)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:24](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L24)

___

### clipSpread

▪ `Static` **clipSpread**: `number` = `10`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:29](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L29)

___

### renderBounds

• `Protected` **renderBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:31](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L31)

___

### renderOptions

• `Protected` **renderOptions**: [`IRenderOptions`](../interfaces/IRenderOptions.md)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:32](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L32)

___

### totalBounds

• `Protected` **totalBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:33](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L33)

___

### requestTime

• `Protected` **requestTime**: `number`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:35](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L35)

___

### frameTime

• `Protected` **frameTime**: `number`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:36](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L36)

___

### frames

• `Protected` **frames**: `number`[] = `[]`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:37](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L37)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:38](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L38)

## Accessors

### needFill

• `get` **needFill**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:40](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L40)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[start](../interfaces/IRenderer.md#start)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:49](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L49)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[stop](../interfaces/IRenderer.md#stop)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:54](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L54)

___

### update

▸ **update**(`change?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `change` | `boolean` | `true` |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[update](../interfaces/IRenderer.md#update)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:58](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L58)

___

### requestLayout

▸ **requestLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[requestLayout](../interfaces/IRenderer.md#requestlayout)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:63](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L63)

___

### checkRender

▸ **checkRender**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[checkRender](../interfaces/IRenderer.md#checkrender)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:67](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L67)

___

### render

▸ **render**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[render](../interfaces/IRenderer.md#render)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:84](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L84)

___

### renderAgain

▸ **renderAgain**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[renderAgain](../interfaces/IRenderer.md#renderagain)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:107](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L107)

___

### renderOnce

▸ **renderOnce**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[renderOnce](../interfaces/IRenderer.md#renderonce)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:115](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L115)

___

### partRender

▸ **partRender**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[partRender](../interfaces/IRenderer.md#partrender)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:159](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L159)

___

### clipRender

▸ **clipRender**(`block`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [`IBounds`](../interfaces/IBounds.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[clipRender](../interfaces/IRenderer.md#cliprender)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:167](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L167)

___

### fullRender

▸ **fullRender**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[fullRender](../interfaces/IRenderer.md#fullrender)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:183](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L183)

___

### \_\_render

▸ **__render**(`bounds`, `realBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBounds`](../interfaces/IBounds.md) |
| `realBounds?` | [`IBounds`](../interfaces/IBounds.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:195](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L195)

___

### addBlock

▸ **addBlock**(`block`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [`IBounds`](../interfaces/IBounds.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[addBlock](../interfaces/IRenderer.md#addblock)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:210](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L210)

___

### mergeBlocks

▸ **mergeBlocks**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[mergeBlocks](../interfaces/IRenderer.md#mergeblocks)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:215](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L215)

___

### \_\_requestRender

▸ **__requestRender**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:225](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L225)

___

### \_\_onResize

▸ **__onResize**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`ResizeEvent`](ResizeEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:252](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L252)

___

### \_\_onLayoutEnd

▸ **__onLayoutEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`LayoutEvent`](LayoutEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:269](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L269)

___

### emitRender

▸ **emitRender**(`type`, `bounds?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bounds?` | [`IBounds`](../interfaces/IBounds.md) |
| `options?` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:284](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L284)

___

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:288](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L288)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:299](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L299)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[destroy](../interfaces/IRenderer.md#destroy)

#### Defined in

[src/leafer/packages/partner/renderer/src/Renderer.ts:303](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/partner/renderer/src/Renderer.ts#L303)
