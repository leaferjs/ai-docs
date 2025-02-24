# Interface: IInteraction

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`IInteraction`**

## Implemented by

- [`InteractionBase`](../classes/InteractionBase.md)

## Table of contents

### Properties

- [target](IInteraction.md#target)
- [canvas](IInteraction.md#canvas)
- [selector](IInteraction.md#selector)
- [running](IInteraction.md#running)
- [dragging](IInteraction.md#dragging)
- [transforming](IInteraction.md#transforming)
- [moveMode](IInteraction.md#movemode)
- [canHover](IInteraction.md#canhover)
- [isDragEmpty](IInteraction.md#isdragempty)
- [isMobileDragEmpty](IInteraction.md#ismobiledragempty)
- [isHoldMiddleKey](IInteraction.md#isholdmiddlekey)
- [isHoldRightKey](IInteraction.md#isholdrightkey)
- [isHoldSpaceKey](IInteraction.md#isholdspacekey)
- [config](IInteraction.md#config)
- [m](IInteraction.md#m)
- [p](IInteraction.md#p)
- [cursor](IInteraction.md#cursor)
- [hitRadius](IInteraction.md#hitradius)
- [bottomList](IInteraction.md#bottomlist)
- [shrinkCanvasBounds](IInteraction.md#shrinkcanvasbounds)
- [downData](IInteraction.md#downdata)
- [hoverData](IInteraction.md#hoverdata)
- [downTime](IInteraction.md#downtime)
- [focusData](IInteraction.md#focusdata)

### Methods

- [start](IInteraction.md#start)
- [stop](IInteraction.md#stop)
- [destroy](IInteraction.md#destroy)
- [receive](IInteraction.md#receive)
- [pointerDown](IInteraction.md#pointerdown)
- [pointerMove](IInteraction.md#pointermove)
- [pointerMoveReal](IInteraction.md#pointermovereal)
- [pointerUp](IInteraction.md#pointerup)
- [pointerCancel](IInteraction.md#pointercancel)
- [multiTouch](IInteraction.md#multitouch)
- [menu](IInteraction.md#menu)
- [menuTap](IInteraction.md#menutap)
- [move](IInteraction.md#move)
- [zoom](IInteraction.md#zoom)
- [rotate](IInteraction.md#rotate)
- [keyDown](IInteraction.md#keydown)
- [keyUp](IInteraction.md#keyup)
- [findPath](IInteraction.md#findpath)
- [isRootPath](IInteraction.md#isrootpath)
- [isTreePath](IInteraction.md#istreepath)
- [canMove](IInteraction.md#canmove)
- [isDrag](IInteraction.md#isdrag)
- [isPress](IInteraction.md#ispress)
- [isHover](IInteraction.md#ishover)
- [isFocus](IInteraction.md#isfocus)
- [cancelHover](IInteraction.md#cancelhover)
- [updateDownData](IInteraction.md#updatedowndata)
- [updateHoverData](IInteraction.md#updatehoverdata)
- [updateCursor](IInteraction.md#updatecursor)
- [setCursor](IInteraction.md#setcursor)
- [getLocal](IInteraction.md#getlocal)
- [emit](IInteraction.md#emit)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L14)

___

### canvas

• **canvas**: [`IInteractionCanvas`](IInteractionCanvas.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:15](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L15)

___

### selector

• **selector**: [`ISelector`](ISelector.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L16)

___

### running

• **running**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L18)

___

### dragging

• `Readonly` **dragging**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:20](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L20)

___

### transforming

• `Readonly` **transforming**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:21](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L21)

___

### moveMode

• `Readonly` **moveMode**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:23](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L23)

___

### canHover

• `Readonly` **canHover**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:24](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L24)

___

### isDragEmpty

• `Readonly` **isDragEmpty**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:26](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L26)

___

### isMobileDragEmpty

• `Readonly` **isMobileDragEmpty**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:27](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L27)

___

### isHoldMiddleKey

• `Readonly` **isHoldMiddleKey**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:28](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L28)

___

### isHoldRightKey

• `Readonly` **isHoldRightKey**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:29](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L29)

___

### isHoldSpaceKey

• `Readonly` **isHoldSpaceKey**: `boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:30](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L30)

___

### config

• **config**: [`IInteractionConfig`](IInteractionConfig.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:32](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L32)

___

### m

• `Readonly` **m**: [`IMoveConfig`](IMoveConfig.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:33](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L33)

___

### p

• `Readonly` **p**: [`IPointerConfig`](IPointerConfig.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:34](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L34)

___

### cursor

• **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:36](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L36)

___

### hitRadius

• `Readonly` **hitRadius**: `number`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:37](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L37)

___

### bottomList

• `Optional` **bottomList**: [`IPickBottom`](IPickBottom.md)[]

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:39](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L39)

___

### shrinkCanvasBounds

• **shrinkCanvasBounds**: [`IBounds`](IBounds.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:41](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L41)

___

### downData

• **downData**: [`IPointerEvent`](IPointerEvent.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:43](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L43)

___

### hoverData

• **hoverData**: [`IPointerEvent`](IPointerEvent.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:44](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L44)

___

### downTime

• **downTime**: `number`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:45](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L45)

___

### focusData

• **focusData**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:46](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L46)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/control/IControl.ts#L3)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:4](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/control/IControl.ts#L4)

___

### receive

▸ **receive**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:48](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L48)

___

### pointerDown

▸ **pointerDown**(`data?`, `defaultPath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |
| `defaultPath?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:50](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L50)

___

### pointerMove

▸ **pointerMove**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:51](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L51)

___

### pointerMoveReal

▸ **pointerMoveReal**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:52](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L52)

___

### pointerUp

▸ **pointerUp**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:53](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L53)

___

### pointerCancel

▸ **pointerCancel**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:54](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L54)

___

### multiTouch

▸ **multiTouch**(`data`, `list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIEvent`](IUIEvent.md) |
| `list` | [`IKeepTouchData`](IKeepTouchData.md)[] |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:56](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L56)

___

### menu

▸ **menu**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:58](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L58)

___

### menuTap

▸ **menuTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:59](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L59)

___

### move

▸ **move**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:61](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L61)

___

### zoom

▸ **zoom**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:62](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L62)

___

### rotate

▸ **rotate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:63](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L63)

___

### keyDown

▸ **keyDown**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](IKeyEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:65](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L65)

___

### keyUp

▸ **keyUp**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](IKeyEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:66](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L66)

___

### findPath

▸ **findPath**(`data`, `options?`): [`ILeafList`](ILeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`ILeafList`](ILeafList.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:68](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L68)

___

### isRootPath

▸ **isRootPath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:69](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L69)

___

### isTreePath

▸ **isTreePath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:70](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L70)

___

### canMove

▸ **canMove**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:71](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L71)

___

### isDrag

▸ **isDrag**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:73](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L73)

___

### isPress

▸ **isPress**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:74](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L74)

___

### isHover

▸ **isHover**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:75](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L75)

___

### isFocus

▸ **isFocus**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](ILeaf.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:76](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L76)

___

### cancelHover

▸ **cancelHover**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:78](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L78)

___

### updateDownData

▸ **updateDownData**(`data?`, `options?`, `merge?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](IPointerEvent.md) |
| `options?` | [`IPickOptions`](IPickOptions.md) |
| `merge?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:80](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L80)

___

### updateHoverData

▸ **updateHoverData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:81](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L81)

___

### updateCursor

▸ **updateCursor**(`hoverData?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hoverData?` | [`IPointerEvent`](IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:83](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L83)

___

### setCursor

▸ **setCursor**(`cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:84](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L84)

___

### getLocal

▸ **getLocal**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:86](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L86)

___

### emit

▸ **emit**(`type`, `data`, `path?`, `excludePath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data` | [`IUIEvent`](IUIEvent.md) |
| `path?` | [`ILeafList`](ILeafList.md) |
| `excludePath?` | [`ILeafList`](ILeafList.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/interaction/IInteraction.ts:88](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/interaction/IInteraction.ts#L88)
