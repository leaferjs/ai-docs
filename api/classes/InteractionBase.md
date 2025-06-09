# Class: InteractionBase

## Hierarchy

- **`InteractionBase`**

  ↳ [`Interaction`](Interaction.md)

## Implements

- [`IInteraction`](../interfaces/IInteraction.md)

## Table of contents

### Constructors

- [constructor](InteractionBase.md#constructor)

### Properties

- [target](InteractionBase.md#target)
- [canvas](InteractionBase.md#canvas)
- [selector](InteractionBase.md#selector)
- [running](InteractionBase.md#running)
- [config](InteractionBase.md#config)
- [cursor](InteractionBase.md#cursor)
- [bottomList](InteractionBase.md#bottomlist)
- [shrinkCanvasBounds](InteractionBase.md#shrinkcanvasbounds)
- [downData](InteractionBase.md#downdata)
- [hoverData](InteractionBase.md#hoverdata)
- [focusData](InteractionBase.md#focusdata)
- [downTime](InteractionBase.md#downtime)
- [overPath](InteractionBase.md#overpath)
- [enterPath](InteractionBase.md#enterpath)
- [waitMenuTap](InteractionBase.md#waitmenutap)
- [waitRightTap](InteractionBase.md#waitrighttap)
- [waitTap](InteractionBase.md#waittap)
- [longPressTimer](InteractionBase.md#longpresstimer)
- [longPressed](InteractionBase.md#longpressed)
- [tapCount](InteractionBase.md#tapcount)
- [tapTimer](InteractionBase.md#taptimer)
- [dragger](InteractionBase.md#dragger)
- [transformer](InteractionBase.md#transformer)
- [\_\_eventIds](InteractionBase.md#__eventids)
- [defaultPath](InteractionBase.md#defaultpath)
- [downKeyMap](InteractionBase.md#downkeymap)

### Accessors

- [dragging](InteractionBase.md#dragging)
- [transforming](InteractionBase.md#transforming)
- [moveMode](InteractionBase.md#movemode)
- [canHover](InteractionBase.md#canhover)
- [isDragEmpty](InteractionBase.md#isdragempty)
- [isMobileDragEmpty](InteractionBase.md#ismobiledragempty)
- [isHoldMiddleKey](InteractionBase.md#isholdmiddlekey)
- [isHoldRightKey](InteractionBase.md#isholdrightkey)
- [isHoldSpaceKey](InteractionBase.md#isholdspacekey)
- [m](InteractionBase.md#m)
- [p](InteractionBase.md#p)
- [hitRadius](InteractionBase.md#hitradius)

### Methods

- [start](InteractionBase.md#start)
- [stop](InteractionBase.md#stop)
- [receive](InteractionBase.md#receive)
- [pointerDown](InteractionBase.md#pointerdown)
- [pointerMove](InteractionBase.md#pointermove)
- [pointerMoveReal](InteractionBase.md#pointermovereal)
- [pointerUp](InteractionBase.md#pointerup)
- [pointerCancel](InteractionBase.md#pointercancel)
- [menu](InteractionBase.md#menu)
- [menuTap](InteractionBase.md#menutap)
- [createTransformer](InteractionBase.md#createtransformer)
- [move](InteractionBase.md#move)
- [zoom](InteractionBase.md#zoom)
- [rotate](InteractionBase.md#rotate)
- [transformEnd](InteractionBase.md#transformend)
- [wheel](InteractionBase.md#wheel)
- [multiTouch](InteractionBase.md#multitouch)
- [keyDown](InteractionBase.md#keydown)
- [keyUp](InteractionBase.md#keyup)
- [pointerHover](InteractionBase.md#pointerhover)
- [pointerOverOrOut](InteractionBase.md#pointeroverorout)
- [pointerEnterOrLeave](InteractionBase.md#pointerenterorleave)
- [touchLeave](InteractionBase.md#touchleave)
- [tap](InteractionBase.md#tap)
- [findPath](InteractionBase.md#findpath)
- [isRootPath](InteractionBase.md#isrootpath)
- [isTreePath](InteractionBase.md#istreepath)
- [checkPath](InteractionBase.md#checkpath)
- [canMove](InteractionBase.md#canmove)
- [isDrag](InteractionBase.md#isdrag)
- [isPress](InteractionBase.md#ispress)
- [isHover](InteractionBase.md#ishover)
- [isFocus](InteractionBase.md#isfocus)
- [cancelHover](InteractionBase.md#cancelhover)
- [updateDownData](InteractionBase.md#updatedowndata)
- [updateHoverData](InteractionBase.md#updatehoverdata)
- [updateCursor](InteractionBase.md#updatecursor)
- [setCursor](InteractionBase.md#setcursor)
- [getLocal](InteractionBase.md#getlocal)
- [emitTap](InteractionBase.md#emittap)
- [emitDoubleTap](InteractionBase.md#emitdoubletap)
- [pointerWaitCancel](InteractionBase.md#pointerwaitcancel)
- [tapWait](InteractionBase.md#tapwait)
- [tapWaitCancel](InteractionBase.md#tapwaitcancel)
- [longPressWait](InteractionBase.md#longpresswait)
- [longTap](InteractionBase.md#longtap)
- [longPressWaitCancel](InteractionBase.md#longpresswaitcancel)
- [\_\_onResize](InteractionBase.md#__onresize)
- [\_\_listenEvents](InteractionBase.md#__listenevents)
- [\_\_removeListenEvents](InteractionBase.md#__removelistenevents)
- [emit](InteractionBase.md#emit)
- [destroy](InteractionBase.md#destroy)

## Constructors

### constructor

• **new InteractionBase**(`target`, `canvas`, `selector`, `userConfig?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `canvas` | [`IInteractionCanvas`](../interfaces/IInteractionCanvas.md) |
| `selector` | [`ISelector`](../interfaces/ISelector.md) |
| `userConfig?` | [`IInteractionConfig`](../interfaces/IInteractionConfig.md) |

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:70](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L70)

## Properties

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[target](../interfaces/IInteraction.md#target)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:16](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L16)

___

### canvas

• **canvas**: [`IInteractionCanvas`](../interfaces/IInteractionCanvas.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[canvas](../interfaces/IInteraction.md#canvas)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:17](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L17)

___

### selector

• **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[selector](../interfaces/IInteraction.md#selector)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:18](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L18)

___

### running

• **running**: `boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[running](../interfaces/IInteraction.md#running)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:20](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L20)

___

### config

• **config**: [`IInteractionConfig`](../interfaces/IInteractionConfig.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[config](../interfaces/IInteraction.md#config)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:34](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L34)

___

### cursor

• **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[cursor](../interfaces/IInteraction.md#cursor)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:38](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L38)

___

### bottomList

• `Optional` **bottomList**: [`IPickBottom`](../interfaces/IPickBottom.md)[]

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[bottomList](../interfaces/IInteraction.md#bottomlist)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:41](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L41)

___

### shrinkCanvasBounds

• **shrinkCanvasBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[shrinkCanvasBounds](../interfaces/IInteraction.md#shrinkcanvasbounds)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:43](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L43)

___

### downData

• **downData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[downData](../interfaces/IInteraction.md#downdata)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:45](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L45)

___

### hoverData

• **hoverData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[hoverData](../interfaces/IInteraction.md#hoverdata)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:46](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L46)

___

### focusData

• **focusData**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[focusData](../interfaces/IInteraction.md#focusdata)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:47](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L47)

___

### downTime

• **downTime**: `number`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[downTime](../interfaces/IInteraction.md#downtime)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:49](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L49)

___

### overPath

• `Protected` **overPath**: [`LeafList`](LeafList.md)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:51](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L51)

___

### enterPath

• `Protected` **enterPath**: [`LeafList`](LeafList.md)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:52](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L52)

___

### waitMenuTap

• `Protected` **waitMenuTap**: `boolean`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:54](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L54)

___

### waitRightTap

• `Protected` **waitRightTap**: `boolean`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:55](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L55)

___

### waitTap

• `Protected` **waitTap**: `boolean`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:56](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L56)

___

### longPressTimer

• `Protected` **longPressTimer**: `any`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:57](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L57)

___

### longPressed

• `Protected` **longPressed**: `boolean`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:58](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L58)

___

### tapCount

• `Protected` **tapCount**: `number` = `0`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:59](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L59)

___

### tapTimer

• `Protected` **tapTimer**: `any`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:60](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L60)

___

### dragger

• **dragger**: [`Dragger`](Dragger.md)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:62](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L62)

___

### transformer

• **transformer**: [`ITransformer`](../interfaces/ITransformer.md)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:63](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L63)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:65](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L65)

___

### defaultPath

• `Protected` **defaultPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:66](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L66)

___

### downKeyMap

• `Protected` **downKeyMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md) = `{}`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:68](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L68)

## Accessors

### dragging

• `get` **dragging**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[dragging](../interfaces/IInteraction.md#dragging)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:22](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L22)

___

### transforming

• `get` **transforming**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[transforming](../interfaces/IInteraction.md#transforming)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:23](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L23)

___

### moveMode

• `get` **moveMode**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[moveMode](../interfaces/IInteraction.md#movemode)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:25](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L25)

___

### canHover

• `get` **canHover**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[canHover](../interfaces/IInteraction.md#canhover)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L26)

___

### isDragEmpty

• `get` **isDragEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isDragEmpty](../interfaces/IInteraction.md#isdragempty)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:28](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L28)

___

### isMobileDragEmpty

• `get` **isMobileDragEmpty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isMobileDragEmpty](../interfaces/IInteraction.md#ismobiledragempty)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:29](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L29)

___

### isHoldMiddleKey

• `get` **isHoldMiddleKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHoldMiddleKey](../interfaces/IInteraction.md#isholdmiddlekey)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:30](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L30)

___

### isHoldRightKey

• `get` **isHoldRightKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHoldRightKey](../interfaces/IInteraction.md#isholdrightkey)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:31](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L31)

___

### isHoldSpaceKey

• `get` **isHoldSpaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHoldSpaceKey](../interfaces/IInteraction.md#isholdspacekey)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:32](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L32)

___

### m

• `get` **m**(): [`IMoveConfig`](../interfaces/IMoveConfig.md)

#### Returns

[`IMoveConfig`](../interfaces/IMoveConfig.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[m](../interfaces/IInteraction.md#m)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:35](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L35)

___

### p

• `get` **p**(): [`IPointerConfig`](../interfaces/IPointerConfig.md)

#### Returns

[`IPointerConfig`](../interfaces/IPointerConfig.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[p](../interfaces/IInteraction.md#p)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:36](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L36)

___

### hitRadius

• `get` **hitRadius**(): `number`

#### Returns

`number`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[hitRadius](../interfaces/IInteraction.md#hitradius)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:39](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L39)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[start](../interfaces/IInteraction.md#start)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:84](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L84)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[stop](../interfaces/IInteraction.md#stop)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:88](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L88)

___

### receive

▸ **receive**(`_event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event` | `any` |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[receive](../interfaces/IInteraction.md#receive)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:93](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L93)

___

### pointerDown

▸ **pointerDown**(`data?`, `useDefaultPath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `useDefaultPath?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerDown](../interfaces/IInteraction.md#pointerdown)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:96](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L96)

___

### pointerMove

▸ **pointerMove**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerMove](../interfaces/IInteraction.md#pointermove)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:120](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L120)

___

### pointerMoveReal

▸ **pointerMoveReal**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerMoveReal](../interfaces/IInteraction.md#pointermovereal)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:134](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L134)

___

### pointerUp

▸ **pointerUp**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerUp](../interfaces/IInteraction.md#pointerup)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:164](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L164)

___

### pointerCancel

▸ **pointerCancel**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[pointerCancel](../interfaces/IInteraction.md#pointercancel)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:195](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L195)

___

### menu

▸ **menu**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[menu](../interfaces/IInteraction.md#menu)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:203](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L203)

___

### menuTap

▸ **menuTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[menuTap](../interfaces/IInteraction.md#menutap)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:210](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L210)

___

### createTransformer

▸ **createTransformer**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:219](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L219)

___

### move

▸ **move**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IMoveEvent`](../interfaces/IMoveEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[move](../interfaces/IInteraction.md#move)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:221](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L221)

___

### zoom

▸ **zoom**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IZoomEvent`](../interfaces/IZoomEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[zoom](../interfaces/IInteraction.md#zoom)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:223](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L223)

___

### rotate

▸ **rotate**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IRotateEvent`](../interfaces/IRotateEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[rotate](../interfaces/IInteraction.md#rotate)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:225](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L225)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:227](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L227)

___

### wheel

▸ **wheel**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IWheelEvent`](../interfaces/IWheelEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:229](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L229)

___

### multiTouch

▸ **multiTouch**(`_data`, `_list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IUIEvent`](../interfaces/IUIEvent.md) |
| `_list` | [`IKeepTouchData`](../interfaces/IKeepTouchData.md)[] |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[multiTouch](../interfaces/IInteraction.md#multitouch)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:231](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L231)

___

### keyDown

▸ **keyDown**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[keyDown](../interfaces/IInteraction.md#keydown)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:237](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L237)

___

### keyUp

▸ **keyUp**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[keyUp](../interfaces/IInteraction.md#keyup)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:254](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L254)

___

### pointerHover

▸ `Protected` **pointerHover**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:267](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L267)

___

### pointerOverOrOut

▸ `Protected` **pointerOverOrOut**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:275](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L275)

___

### pointerEnterOrLeave

▸ `Protected` **pointerEnterOrLeave**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:290](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L290)

___

### touchLeave

▸ `Protected` **touchLeave**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:305](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L305)

___

### tap

▸ `Protected` **tap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:314](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L314)

___

### findPath

▸ **findPath**(`data`, `options?`): [`ILeafList`](../interfaces/ILeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[findPath](../interfaces/IInteraction.md#findpath)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:354](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L354)

___

### isRootPath

▸ **isRootPath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isRootPath](../interfaces/IInteraction.md#isrootpath)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:364](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L364)

___

### isTreePath

▸ **isTreePath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isTreePath](../interfaces/IInteraction.md#istreepath)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:368](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L368)

___

### checkPath

▸ `Protected` **checkPath**(`data`, `useDefaultPath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `useDefaultPath?` | `boolean` |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:374](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L374)

___

### canMove

▸ **canMove**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[canMove](../interfaces/IInteraction.md#canmove)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:378](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L378)

___

### isDrag

▸ **isDrag**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isDrag](../interfaces/IInteraction.md#isdrag)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:383](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L383)

___

### isPress

▸ **isPress**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isPress](../interfaces/IInteraction.md#ispress)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:387](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L387)

___

### isHover

▸ **isHover**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isHover](../interfaces/IInteraction.md#ishover)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:391](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L391)

___

### isFocus

▸ **isFocus**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[isFocus](../interfaces/IInteraction.md#isfocus)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:395](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L395)

___

### cancelHover

▸ **cancelHover**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[cancelHover](../interfaces/IInteraction.md#cancelhover)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:400](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L400)

___

### updateDownData

▸ **updateDownData**(`data?`, `options?`, `merge?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |
| `merge?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[updateDownData](../interfaces/IInteraction.md#updatedowndata)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:409](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L409)

___

### updateHoverData

▸ **updateHoverData**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[updateHoverData](../interfaces/IInteraction.md#updatehoverdata)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:418](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L418)

___

### updateCursor

▸ **updateCursor**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[updateCursor](../interfaces/IInteraction.md#updatecursor)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:425](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L425)

___

### setCursor

▸ **setCursor**(`cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[setCursor](../interfaces/IInteraction.md#setcursor)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:451](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L451)

___

### getLocal

▸ **getLocal**(`clientPoint`, `updateClient?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](../interfaces/IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[getLocal](../interfaces/IInteraction.md#getlocal)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:455](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L455)

___

### emitTap

▸ `Protected` **emitTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:463](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L463)

___

### emitDoubleTap

▸ `Protected` **emitDoubleTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:468](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L468)

___

### pointerWaitCancel

▸ **pointerWaitCancel**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:473](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L473)

___

### tapWait

▸ `Protected` **tapWait**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:478](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L478)

___

### tapWaitCancel

▸ `Protected` **tapWaitCancel**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:483](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L483)

___

### longPressWait

▸ `Protected` **longPressWait**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:491](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L491)

___

### longTap

▸ `Protected` **longTap**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:499](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L499)

___

### longPressWaitCancel

▸ `Protected` **longPressWaitCancel**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:509](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L509)

___

### \_\_onResize

▸ `Protected` **__onResize**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:516](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L516)

___

### \_\_listenEvents

▸ `Protected` **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:522](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L522)

___

### \_\_removeListenEvents

▸ `Protected` **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:528](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L528)

___

### emit

▸ **emit**(`type`, `data`, `path?`, `excludePath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data` | [`IUIEvent`](../interfaces/IUIEvent.md) |
| `path?` | [`ILeafList`](../interfaces/ILeafList.md) |
| `excludePath?` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[emit](../interfaces/IInteraction.md#emit)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:534](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L534)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IInteraction](../interfaces/IInteraction.md).[destroy](../interfaces/IInteraction.md#destroy)

#### Defined in

[ui/packages/interaction/interaction/src/Interaction.ts:539](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interaction/interaction/src/Interaction.ts#L539)
