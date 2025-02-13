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
- [renderBounds](Renderer.md#renderbounds)
- [renderOptions](Renderer.md#renderoptions)
- [totalBounds](Renderer.md#totalbounds)
- [requestTime](Renderer.md#requesttime)
- [\_\_eventIds](Renderer.md#__eventids)

### Accessors

- [needFill](Renderer.md#needfill)

### Methods

- [start](Renderer.md#start)
- [stop](Renderer.md#stop)
- [update](Renderer.md#update)
- [requestLayout](Renderer.md#requestlayout)
- [render](Renderer.md#render)
- [renderAgain](Renderer.md#renderagain)
- [renderOnce](Renderer.md#renderonce)
- [partRender](Renderer.md#partrender)
- [clipRender](Renderer.md#cliprender)
- [fullRender](Renderer.md#fullrender)
- [\_\_render](Renderer.md#__render)
- [renderHitView](Renderer.md#renderhitview)
- [renderBoundsView](Renderer.md#renderboundsview)
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

• **new Renderer**(`target`, `canvas`, `userConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `userConfig?` | [`IRendererConfig`](../interfaces/IRendererConfig.md) |

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:38](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L38)

## Properties

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[target](../interfaces/IRenderer.md#target)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L9)

___

### canvas

• **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[canvas](../interfaces/IRenderer.md#canvas)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:10](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L10)

___

### updateBlocks

• **updateBlocks**: [`IBounds`](../interfaces/IBounds.md)[]

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[updateBlocks](../interfaces/IRenderer.md#updateblocks)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:11](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L11)

___

### FPS

• **FPS**: `number` = `60`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[FPS](../interfaces/IRenderer.md#fps)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L13)

___

### totalTimes

• **totalTimes**: `number` = `0`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[totalTimes](../interfaces/IRenderer.md#totaltimes)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:14](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L14)

___

### times

• **times**: `number` = `0`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[times](../interfaces/IRenderer.md#times)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L15)

___

### running

• **running**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[running](../interfaces/IRenderer.md#running)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L17)

___

### rendering

• **rendering**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[rendering](../interfaces/IRenderer.md#rendering)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L18)

___

### waitAgain

• **waitAgain**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[waitAgain](../interfaces/IRenderer.md#waitagain)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:20](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L20)

___

### changed

• **changed**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[changed](../interfaces/IRenderer.md#changed)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:21](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L21)

___

### ignore

• **ignore**: `boolean`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[ignore](../interfaces/IRenderer.md#ignore)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:22](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L22)

___

### config

• **config**: [`IRendererConfig`](../interfaces/IRendererConfig.md)

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[config](../interfaces/IRenderer.md#config)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:24](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L24)

___

### renderBounds

• `Protected` **renderBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:29](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L29)

___

### renderOptions

• `Protected` **renderOptions**: [`IRenderOptions`](../interfaces/IRenderOptions.md)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:30](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L30)

___

### totalBounds

• `Protected` **totalBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:31](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L31)

___

### requestTime

• `Protected` **requestTime**: `number`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:33](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L33)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:34](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L34)

## Accessors

### needFill

• `Protected` `get` **needFill**(): `boolean`

#### Returns

`boolean`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:36](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L36)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[start](../interfaces/IRenderer.md#start)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:45](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L45)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[stop](../interfaces/IRenderer.md#stop)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:50](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L50)

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

[leafer/packages/partner/renderer/src/Renderer.ts:54](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L54)

___

### requestLayout

▸ **requestLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[requestLayout](../interfaces/IRenderer.md#requestlayout)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:59](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L59)

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

[leafer/packages/partner/renderer/src/Renderer.ts:63](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L63)

___

### renderAgain

▸ **renderAgain**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[renderAgain](../interfaces/IRenderer.md#renderagain)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:87](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L87)

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

[leafer/packages/partner/renderer/src/Renderer.ts:95](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L95)

___

### partRender

▸ **partRender**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[partRender](../interfaces/IRenderer.md#partrender)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:139](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L139)

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

[leafer/packages/partner/renderer/src/Renderer.ts:147](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L147)

___

### fullRender

▸ **fullRender**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[fullRender](../interfaces/IRenderer.md#fullrender)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:171](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L171)

___

### \_\_render

▸ `Protected` **__render**(`bounds`, `includes?`, `realBounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBounds`](../interfaces/IBounds.md) |
| `includes?` | `boolean` |
| `realBounds?` | [`IBounds`](../interfaces/IBounds.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:183](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L183)

___

### renderHitView

▸ **renderHitView**(`_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[renderHitView](../interfaces/IRenderer.md#renderhitview)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:200](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L200)

___

### renderBoundsView

▸ **renderBoundsView**(`_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[renderBoundsView](../interfaces/IRenderer.md#renderboundsview)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:202](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L202)

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

[leafer/packages/partner/renderer/src/Renderer.ts:204](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L204)

___

### mergeBlocks

▸ **mergeBlocks**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[mergeBlocks](../interfaces/IRenderer.md#mergeblocks)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:209](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L209)

___

### \_\_requestRender

▸ `Protected` **__requestRender**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:219](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L219)

___

### \_\_onResize

▸ `Protected` **__onResize**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`ResizeEvent`](ResizeEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:234](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L234)

___

### \_\_onLayoutEnd

▸ `Protected` **__onLayoutEnd**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`LayoutEvent`](LayoutEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:251](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L251)

___

### emitRender

▸ `Protected` **emitRender**(`type`, `bounds?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bounds?` | [`IBounds`](../interfaces/IBounds.md) |
| `options?` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:266](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L266)

___

### \_\_listenEvents

▸ `Protected` **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:270](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L270)

___

### \_\_removeListenEvents

▸ `Protected` **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:280](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L280)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IRenderer](../interfaces/IRenderer.md).[destroy](../interfaces/IRenderer.md#destroy)

#### Defined in

[leafer/packages/partner/renderer/src/Renderer.ts:284](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/renderer/src/Renderer.ts#L284)
