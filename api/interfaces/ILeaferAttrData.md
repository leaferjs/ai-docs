# Interface: ILeaferAttrData

## Hierarchy

- **`ILeaferAttrData`**

  ↳ [`ILeafer`](ILeafer.md)

  ↳ [`ILeaferBase`](ILeaferBase.md)

## Table of contents

### Properties

- [running](ILeaferAttrData.md#running)
- [created](ILeaferAttrData.md#created)
- [ready](ILeaferAttrData.md#ready)
- [viewReady](ILeaferAttrData.md#viewready)
- [imageReady](ILeaferAttrData.md#imageready)
- [viewCompleted](ILeaferAttrData.md#viewcompleted)
- [layoutLocked](ILeaferAttrData.md#layoutlocked)
- [transforming](ILeaferAttrData.md#transforming)
- [view](ILeaferAttrData.md#view)
- [canvas](ILeaferAttrData.md#canvas)
- [renderer](ILeaferAttrData.md#renderer)
- [watcher](ILeaferAttrData.md#watcher)
- [layouter](ILeaferAttrData.md#layouter)
- [selector](ILeaferAttrData.md#selector)
- [interaction](ILeaferAttrData.md#interaction)
- [canvasManager](ILeaferAttrData.md#canvasmanager)
- [hitCanvasManager](ILeaferAttrData.md#hitcanvasmanager)
- [autoLayout](ILeaferAttrData.md#autolayout)
- [lazyBounds](ILeaferAttrData.md#lazybounds)
- [config](ILeaferAttrData.md#config)
- [userConfig](ILeaferAttrData.md#userconfig)
- [cursorPoint](ILeaferAttrData.md#cursorpoint)
- [clientBounds](ILeaferAttrData.md#clientbounds)
- [leafs](ILeaferAttrData.md#leafs)
- [\_\_eventIds](ILeaferAttrData.md#__eventids)
- [\_\_nextRenderWait](ILeaferAttrData.md#__nextrenderwait)

### Methods

- [init](ILeaferAttrData.md#init)
- [start](ILeaferAttrData.md#start)
- [stop](ILeaferAttrData.md#stop)
- [unlockLayout](ILeaferAttrData.md#unlocklayout)
- [lockLayout](ILeaferAttrData.md#locklayout)
- [requestRender](ILeaferAttrData.md#requestrender)
- [updateCursor](ILeaferAttrData.md#updatecursor)
- [resize](ILeaferAttrData.md#resize)
- [waitReady](ILeaferAttrData.md#waitready)
- [waitViewReady](ILeaferAttrData.md#waitviewready)
- [waitViewCompleted](ILeaferAttrData.md#waitviewcompleted)
- [zoom](ILeaferAttrData.md#zoom)
- [getValidMove](ILeaferAttrData.md#getvalidmove)
- [getValidScale](ILeaferAttrData.md#getvalidscale)
- [getWorldPointByClient](ILeaferAttrData.md#getworldpointbyclient)
- [getPagePointByClient](ILeaferAttrData.md#getpagepointbyclient)
- [getClientPointByWorld](ILeaferAttrData.md#getclientpointbyworld)
- [updateClientBounds](ILeaferAttrData.md#updateclientbounds)
- [receiveEvent](ILeaferAttrData.md#receiveevent)

## Properties

### running

• **running**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:32](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L32)

___

### created

• **created**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:33](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L33)

___

### ready

• **ready**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:34](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L34)

___

### viewReady

• **viewReady**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:35](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L35)

___

### imageReady

• **imageReady**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:36](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L36)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:37](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L37)

___

### layoutLocked

• **layoutLocked**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:38](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L38)

___

### transforming

• **transforming**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:40](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L40)

___

### view

• **view**: `unknown`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:42](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L42)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:44](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L44)

___

### renderer

• **renderer**: [`IRenderer`](IRenderer.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:45](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L45)

___

### watcher

• **watcher**: [`IWatcher`](IWatcher.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:47](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L47)

___

### layouter

• **layouter**: [`ILayouter`](ILayouter.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:48](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L48)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:50](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L50)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](IInteraction.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:51](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L51)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](ICanvasManager.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:53](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L53)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](IHitCanvasManager.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:54](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L54)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](IAutoBounds.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:56](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L56)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:57](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L57)

___

### config

• **config**: [`ILeaferConfig`](ILeaferConfig.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:59](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L59)

___

### userConfig

• `Optional` **userConfig**: [`ILeaferConfig`](ILeaferConfig.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:60](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L60)

___

### cursorPoint

• `Readonly` **cursorPoint**: [`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:62](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L62)

___

### clientBounds

• `Readonly` **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:63](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L63)

___

### leafs

• **leafs**: `number`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:64](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L64)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:66](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L66)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](IFunction.md)[]

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:67](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L67)

## Methods

### init

▸ **init**(`userConfig?`, `parentApp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](ILeaferConfig.md) |
| `parentApp?` | [`IAppBase`](IAppBase.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:69](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L69)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:71](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L71)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:72](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L72)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:74](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L74)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:75](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L75)

___

### requestRender

▸ **requestRender**(`change`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `change` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:77](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L77)

___

### updateCursor

▸ **updateCursor**(`cursor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | [`ICursorType`](../modules.md#icursortype) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:79](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L79)

___

### resize

▸ **resize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](IScreenSizeData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:80](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L80)

___

### waitReady

▸ **waitReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:82](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L82)

___

### waitViewReady

▸ **waitViewReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:83](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L83)

___

### waitViewCompleted

▸ **waitViewCompleted**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:84](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L84)

___

### zoom

▸ **zoom**(`zoomType`, `padding?`, `fixedScale?`, `transition?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `padding?` | [`IFourNumber`](../modules.md#ifournumber) |
| `fixedScale?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:86](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L86)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveX` | `number` |
| `moveY` | `number` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:87](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L87)

___

### getValidScale

▸ **getValidScale**(`changeScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeScale` | `number` |

#### Returns

`number`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:88](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L88)

___

### getWorldPointByClient

▸ **getWorldPointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:90](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L90)

___

### getPagePointByClient

▸ **getPagePointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:91](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L91)

___

### getClientPointByWorld

▸ **getClientPointByWorld**(`worldPoint`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldPoint` | [`IPointData`](IPointData.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:92](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L92)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:93](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L93)

___

### receiveEvent

▸ **receiveEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:95](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L95)
