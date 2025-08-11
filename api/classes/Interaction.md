# Class: Interaction

## Hierarchy

- [`InteractionBase`](InteractionBase.md)

  ↳ **`Interaction`**

## Table of contents

### Constructors

- [constructor](Interaction.md#constructor)

### Properties

- [view](Interaction.md#view)
- [viewEvents](Interaction.md#viewevents)
- [windowEvents](Interaction.md#windowevents)
- [usePointer](Interaction.md#usepointer)
- [useMultiTouch](Interaction.md#usemultitouch)
- [useTouch](Interaction.md#usetouch)
- [touchTimer](Interaction.md#touchtimer)
- [touches](Interaction.md#touches)
- [lastGestureScale](Interaction.md#lastgesturescale)
- [lastGestureRotation](Interaction.md#lastgesturerotation)
- [target](Interaction.md#target)
- [canvas](Interaction.md#canvas)
- [selector](Interaction.md#selector)
- [running](Interaction.md#running)
- [config](Interaction.md#config)
- [cursor](Interaction.md#cursor)
- [bottomList](Interaction.md#bottomlist)
- [shrinkCanvasBounds](Interaction.md#shrinkcanvasbounds)
- [downData](Interaction.md#downdata)
- [hoverData](Interaction.md#hoverdata)
- [focusData](Interaction.md#focusdata)
- [downTime](Interaction.md#downtime)
- [overPath](Interaction.md#overpath)
- [enterPath](Interaction.md#enterpath)
- [waitMenuTap](Interaction.md#waitmenutap)
- [waitRightTap](Interaction.md#waitrighttap)
- [waitTap](Interaction.md#waittap)
- [longPressTimer](Interaction.md#longpresstimer)
- [longPressed](Interaction.md#longpressed)
- [tapCount](Interaction.md#tapcount)
- [tapTimer](Interaction.md#taptimer)
- [dragger](Interaction.md#dragger)
- [transformer](Interaction.md#transformer)
- [\_\_eventIds](Interaction.md#__eventids)
- [defaultPath](Interaction.md#defaultpath)
- [downKeyMap](Interaction.md#downkeymap)

### Accessors

- [notPointer](Interaction.md#notpointer)
- [notTouch](Interaction.md#nottouch)
- [notMouse](Interaction.md#notmouse)
- [dragging](Interaction.md#dragging)
- [transforming](Interaction.md#transforming)
- [moveMode](Interaction.md#movemode)
- [canHover](Interaction.md#canhover)
- [isDragEmpty](Interaction.md#isdragempty)
- [isMobileDragEmpty](Interaction.md#ismobiledragempty)
- [isHoldMiddleKey](Interaction.md#isholdmiddlekey)
- [isHoldRightKey](Interaction.md#isholdrightkey)
- [isHoldSpaceKey](Interaction.md#isholdspacekey)
- [m](Interaction.md#m)
- [p](Interaction.md#p)
- [hitRadius](Interaction.md#hitradius)

### Methods

- [\_\_listenEvents](Interaction.md#__listenevents)
- [\_\_removeListenEvents](Interaction.md#__removelistenevents)
- [getTouches](Interaction.md#gettouches)
- [preventDefaultPointer](Interaction.md#preventdefaultpointer)
- [preventDefaultWheel](Interaction.md#preventdefaultwheel)
- [preventWindowPointer](Interaction.md#preventwindowpointer)
- [onKeyDown](Interaction.md#onkeydown)
- [onKeyUp](Interaction.md#onkeyup)
- [onContextMenu](Interaction.md#oncontextmenu)
- [onScroll](Interaction.md#onscroll)
- [onPointerDown](Interaction.md#onpointerdown)
- [onPointerMove](Interaction.md#onpointermove)
- [onPointerLeave](Interaction.md#onpointerleave)
- [onPointerUp](Interaction.md#onpointerup)
- [onPointerCancel](Interaction.md#onpointercancel)
- [onMouseDown](Interaction.md#onmousedown)
- [onMouseMove](Interaction.md#onmousemove)
- [onMouseUp](Interaction.md#onmouseup)
- [onMouseCancel](Interaction.md#onmousecancel)
- [onTouchStart](Interaction.md#ontouchstart)
- [onTouchMove](Interaction.md#ontouchmove)
- [onTouchEnd](Interaction.md#ontouchend)
- [onTouchCancel](Interaction.md#ontouchcancel)
- [multiTouchStart](Interaction.md#multitouchstart)
- [multiTouchMove](Interaction.md#multitouchmove)
- [multiTouchEnd](Interaction.md#multitouchend)
- [getKeepTouchList](Interaction.md#getkeeptouchlist)
- [getLocalTouchs](Interaction.md#getlocaltouchs)
- [onWheel](Interaction.md#onwheel)
- [onGesturestart](Interaction.md#ongesturestart)
- [onGesturechange](Interaction.md#ongesturechange)
- [onGestureend](Interaction.md#ongestureend)
- [setCursor](Interaction.md#setcursor)
- [eachCursor](Interaction.md#eachcursor)
- [destroy](Interaction.md#destroy)
- [start](Interaction.md#start)
- [stop](Interaction.md#stop)
- [receive](Interaction.md#receive)
- [pointerDown](Interaction.md#pointerdown)
- [pointerMove](Interaction.md#pointermove)
- [pointerMoveReal](Interaction.md#pointermovereal)
- [pointerUp](Interaction.md#pointerup)
- [pointerCancel](Interaction.md#pointercancel)
- [menu](Interaction.md#menu)
- [menuTap](Interaction.md#menutap)
- [createTransformer](Interaction.md#createtransformer)
- [move](Interaction.md#move)
- [zoom](Interaction.md#zoom)
- [rotate](Interaction.md#rotate)
- [transformEnd](Interaction.md#transformend)
- [wheel](Interaction.md#wheel)
- [multiTouch](Interaction.md#multitouch)
- [keyDown](Interaction.md#keydown)
- [keyUp](Interaction.md#keyup)
- [pointerHover](Interaction.md#pointerhover)
- [pointerOverOrOut](Interaction.md#pointeroverorout)
- [pointerEnterOrLeave](Interaction.md#pointerenterorleave)
- [touchLeave](Interaction.md#touchleave)
- [tap](Interaction.md#tap)
- [findPath](Interaction.md#findpath)
- [isRootPath](Interaction.md#isrootpath)
- [isTreePath](Interaction.md#istreepath)
- [checkPath](Interaction.md#checkpath)
- [canMove](Interaction.md#canmove)
- [isDrag](Interaction.md#isdrag)
- [isPress](Interaction.md#ispress)
- [isHover](Interaction.md#ishover)
- [isFocus](Interaction.md#isfocus)
- [cancelHover](Interaction.md#cancelhover)
- [updateDownData](Interaction.md#updatedowndata)
- [updateHoverData](Interaction.md#updatehoverdata)
- [updateCursor](Interaction.md#updatecursor)
- [getLocal](Interaction.md#getlocal)
- [emitTap](Interaction.md#emittap)
- [emitDoubleTap](Interaction.md#emitdoubletap)
- [pointerWaitCancel](Interaction.md#pointerwaitcancel)
- [tapWait](Interaction.md#tapwait)
- [tapWaitCancel](Interaction.md#tapwaitcancel)
- [longPressWait](Interaction.md#longpresswait)
- [longTap](Interaction.md#longtap)
- [longPressWaitCancel](Interaction.md#longpresswaitcancel)
- [\_\_onResize](Interaction.md#__onresize)
- [emit](Interaction.md#emit)

## Constructors

### constructor

• **new Interaction**(`target`, `canvas`, `selector`, `userConfig?`): [`Interaction`](Interaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `canvas` | [`IInteractionCanvas`](../interfaces/IInteractionCanvas.md) |
| `selector` | [`ISelector`](../interfaces/ISelector.md) |
| `userConfig?` | [`IInteractionConfig`](../interfaces/IInteractionConfig.md) |

#### Returns

[`Interaction`](Interaction.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[constructor](InteractionBase.md#constructor)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:70](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L70)

## Properties

### view

• `Protected` **view**: `HTMLElement`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:20](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L20)

___

### viewEvents

• `Protected` **viewEvents**: [`IObject`](../interfaces/IObject.md)

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:22](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L22)

___

### windowEvents

• `Protected` **windowEvents**: [`IObject`](../interfaces/IObject.md)

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:23](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L23)

___

### usePointer

• `Protected` **usePointer**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:25](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L25)

___

### useMultiTouch

• `Protected` **useMultiTouch**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:26](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L26)

___

### useTouch

• `Protected` **useTouch**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:27](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L27)

___

### touchTimer

• `Protected` **touchTimer**: `any`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:33](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L33)

___

### touches

• `Protected` `Optional` **touches**: `Touch`[]

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:34](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L34)

___

### lastGestureScale

• `Protected` **lastGestureScale**: `number`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:35](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L35)

___

### lastGestureRotation

• `Protected` **lastGestureRotation**: `number`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:36](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L36)

___

### target

• **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[target](InteractionBase.md#target)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:16](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L16)

___

### canvas

• **canvas**: [`IInteractionCanvas`](../interfaces/IInteractionCanvas.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[canvas](InteractionBase.md#canvas)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:17](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L17)

___

### selector

• **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[selector](InteractionBase.md#selector)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:18](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L18)

___

### running

• **running**: `boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[running](InteractionBase.md#running)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:20](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L20)

___

### config

• **config**: [`IInteractionConfig`](../interfaces/IInteractionConfig.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[config](InteractionBase.md#config)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:34](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L34)

___

### cursor

• **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[InteractionBase](InteractionBase.md).[cursor](InteractionBase.md#cursor)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:38](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L38)

___

### bottomList

• `Optional` **bottomList**: [`IPickBottom`](../interfaces/IPickBottom.md)[]

#### Inherited from

[InteractionBase](InteractionBase.md).[bottomList](InteractionBase.md#bottomlist)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:41](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L41)

___

### shrinkCanvasBounds

• **shrinkCanvasBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[shrinkCanvasBounds](InteractionBase.md#shrinkcanvasbounds)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:43](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L43)

___

### downData

• **downData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[downData](InteractionBase.md#downdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:45](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L45)

___

### hoverData

• **hoverData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[hoverData](InteractionBase.md#hoverdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:46](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L46)

___

### focusData

• **focusData**: [`ILeaf`](../interfaces/ILeaf.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[focusData](InteractionBase.md#focusdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:47](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L47)

___

### downTime

• **downTime**: `number`

#### Inherited from

[InteractionBase](InteractionBase.md).[downTime](InteractionBase.md#downtime)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:49](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L49)

___

### overPath

• `Protected` **overPath**: [`LeafList`](LeafList.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[overPath](InteractionBase.md#overpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:51](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L51)

___

### enterPath

• `Protected` **enterPath**: [`LeafList`](LeafList.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[enterPath](InteractionBase.md#enterpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:52](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L52)

___

### waitMenuTap

• `Protected` **waitMenuTap**: `boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[waitMenuTap](InteractionBase.md#waitmenutap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:54](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L54)

___

### waitRightTap

• `Protected` **waitRightTap**: `boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[waitRightTap](InteractionBase.md#waitrighttap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:55](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L55)

___

### waitTap

• `Protected` **waitTap**: `boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[waitTap](InteractionBase.md#waittap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:56](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L56)

___

### longPressTimer

• `Protected` **longPressTimer**: `any`

#### Inherited from

[InteractionBase](InteractionBase.md).[longPressTimer](InteractionBase.md#longpresstimer)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:57](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L57)

___

### longPressed

• `Protected` **longPressed**: `boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[longPressed](InteractionBase.md#longpressed)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:58](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L58)

___

### tapCount

• `Protected` **tapCount**: `number` = `0`

#### Inherited from

[InteractionBase](InteractionBase.md).[tapCount](InteractionBase.md#tapcount)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:59](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L59)

___

### tapTimer

• `Protected` **tapTimer**: `any`

#### Inherited from

[InteractionBase](InteractionBase.md).[tapTimer](InteractionBase.md#taptimer)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:60](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L60)

___

### dragger

• **dragger**: [`Dragger`](Dragger.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[dragger](InteractionBase.md#dragger)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:62](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L62)

___

### transformer

• **transformer**: [`ITransformer`](../interfaces/ITransformer.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[transformer](InteractionBase.md#transformer)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:63](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L63)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[]

#### Inherited from

[InteractionBase](InteractionBase.md).[__eventIds](InteractionBase.md#__eventids)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:65](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L65)

___

### defaultPath

• `Protected` **defaultPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Inherited from

[InteractionBase](InteractionBase.md).[defaultPath](InteractionBase.md#defaultpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:66](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L66)

___

### downKeyMap

• `Protected` **downKeyMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md) = `{}`

#### Inherited from

[InteractionBase](InteractionBase.md).[downKeyMap](InteractionBase.md#downkeymap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:68](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L68)

## Accessors

### notPointer

• `get` **notPointer**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:29](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L29)

___

### notTouch

• `get` **notTouch**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:30](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L30)

___

### notMouse

• `get` **notMouse**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:31](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L31)

___

### dragging

• `get` **dragging**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.dragging

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:22](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L22)

___

### transforming

• `get` **transforming**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.transforming

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:23](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L23)

___

### moveMode

• `get` **moveMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.moveMode

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:25](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L25)

___

### canHover

• `get` **canHover**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.canHover

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:26](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L26)

___

### isDragEmpty

• `get` **isDragEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.isDragEmpty

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:28](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L28)

___

### isMobileDragEmpty

• `get` **isMobileDragEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.isMobileDragEmpty

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:29](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L29)

___

### isHoldMiddleKey

• `get` **isHoldMiddleKey**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.isHoldMiddleKey

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:30](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L30)

___

### isHoldRightKey

• `get` **isHoldRightKey**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.isHoldRightKey

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:31](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L31)

___

### isHoldSpaceKey

• `get` **isHoldSpaceKey**(): `boolean`

#### Returns

`boolean`

#### Inherited from

InteractionBase.isHoldSpaceKey

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:32](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L32)

___

### m

• `get` **m**(): [`IMoveConfig`](../interfaces/IMoveConfig.md)

#### Returns

[`IMoveConfig`](../interfaces/IMoveConfig.md)

#### Inherited from

InteractionBase.m

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:35](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L35)

___

### p

• `get` **p**(): [`IPointerConfig`](../interfaces/IPointerConfig.md)

#### Returns

[`IPointerConfig`](../interfaces/IPointerConfig.md)

#### Inherited from

InteractionBase.p

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:36](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L36)

___

### hitRadius

• `get` **hitRadius**(): `number`

#### Returns

`number`

#### Inherited from

InteractionBase.hitRadius

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:39](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L39)

## Methods

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Overrides

[InteractionBase](InteractionBase.md).[__listenEvents](InteractionBase.md#__listenevents)

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:38](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L38)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Overrides

[InteractionBase](InteractionBase.md).[__removeListenEvents](InteractionBase.md#__removelistenevents)

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:90](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L90)

___

### getTouches

▸ **getTouches**(`touches`): `Touch`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `touches` | `TouchList` |

#### Returns

`Touch`[]

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:106](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L106)

___

### preventDefaultPointer

▸ **preventDefaultPointer**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `UIEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:115](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L115)

___

### preventDefaultWheel

▸ **preventDefaultWheel**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `UIEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:120](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L120)

___

### preventWindowPointer

▸ **preventWindowPointer**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `UIEvent` |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:125](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L125)

___

### onKeyDown

▸ **onKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:130](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L130)

___

### onKeyUp

▸ **onKeyUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:134](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L134)

___

### onContextMenu

▸ **onContextMenu**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `PointerEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:140](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L140)

___

### onScroll

▸ **onScroll**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:145](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L145)

___

### onPointerDown

▸ **onPointerDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `PointerEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:150](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L150)

___

### onPointerMove

▸ **onPointerMove**(`e`, `isLeave?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `PointerEvent` |
| `isLeave?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:158](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L158)

___

### onPointerLeave

▸ **onPointerLeave**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `PointerEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:165](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L165)

___

### onPointerUp

▸ **onPointerUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `PointerEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:169](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L169)

___

### onPointerCancel

▸ **onPointerCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:175](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L175)

___

### onMouseDown

▸ **onMouseDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:182](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L182)

___

### onMouseMove

▸ **onMouseMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:189](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L189)

___

### onMouseUp

▸ **onMouseUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:194](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L194)

___

### onMouseCancel

▸ **onMouseCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:200](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L200)

___

### onTouchStart

▸ **onTouchStart**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:207](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L207)

___

### onTouchMove

▸ **onTouchMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:224](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L224)

___

### onTouchEnd

▸ **onTouchEnd**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:232](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L232)

___

### onTouchCancel

▸ **onTouchCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:244](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L244)

___

### multiTouchStart

▸ **multiTouchStart**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:251](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L251)

___

### multiTouchMove

▸ **multiTouchMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:257](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L257)

___

### multiTouchEnd

▸ **multiTouchEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:269](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L269)

___

### getKeepTouchList

▸ **getKeepTouchList**(`old`, `touches`): [`IKeepTouchData`](../interfaces/IKeepTouchData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `old` | `Touch`[] |
| `touches` | `Touch`[] |

#### Returns

[`IKeepTouchData`](../interfaces/IKeepTouchData.md)[]

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:275](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L275)

___

### getLocalTouchs

▸ **getLocalTouchs**(`points`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `Touch`[] |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:285](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L285)

___

### onWheel

▸ **onWheel**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:291](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L291)

___

### onGesturestart

▸ **onGesturestart**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `IGestureEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:303](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L303)

___

### onGesturechange

▸ **onGesturechange**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `IGestureEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:311](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L311)

___

### onGestureend

▸ **onGestureend**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `IGestureEvent` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:328](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L328)

___

### setCursor

▸ **setCursor**(`cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] |

#### Returns

`void`

#### Overrides

[InteractionBase](InteractionBase.md).[setCursor](InteractionBase.md#setcursor)

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:337](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L337)

___

### eachCursor

▸ **eachCursor**(`cursor`, `list`, `level?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cursor` | [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[] | `undefined` |
| `list` | [`ICursorType`](../modules.md#icursortype)[] | `undefined` |
| `level` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:345](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L345)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[InteractionBase](InteractionBase.md).[destroy](InteractionBase.md#destroy)

#### Defined in

[src/ui/packages/interaction/interaction-web/src/Interaction.ts:359](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction-web/src/Interaction.ts#L359)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[start](InteractionBase.md#start)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:84](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L84)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[stop](InteractionBase.md#stop)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:88](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L88)

___

### receive

▸ **receive**(`_event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event` | `any` |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[receive](InteractionBase.md#receive)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:93](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L93)

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

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerDown](InteractionBase.md#pointerdown)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:96](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L96)

___

### pointerMove

▸ **pointerMove**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerMove](InteractionBase.md#pointermove)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:120](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L120)

___

### pointerMoveReal

▸ **pointerMoveReal**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerMoveReal](InteractionBase.md#pointermovereal)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:134](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L134)

___

### pointerUp

▸ **pointerUp**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerUp](InteractionBase.md#pointerup)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:164](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L164)

___

### pointerCancel

▸ **pointerCancel**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerCancel](InteractionBase.md#pointercancel)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:195](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L195)

___

### menu

▸ **menu**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[menu](InteractionBase.md#menu)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:203](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L203)

___

### menuTap

▸ **menuTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[menuTap](InteractionBase.md#menutap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:210](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L210)

___

### createTransformer

▸ **createTransformer**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[createTransformer](InteractionBase.md#createtransformer)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:219](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L219)

___

### move

▸ **move**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IMoveEvent`](../interfaces/IMoveEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[move](InteractionBase.md#move)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:221](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L221)

___

### zoom

▸ **zoom**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IZoomEvent`](../interfaces/IZoomEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[zoom](InteractionBase.md#zoom)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:223](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L223)

___

### rotate

▸ **rotate**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IRotateEvent`](../interfaces/IRotateEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[rotate](InteractionBase.md#rotate)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:225](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L225)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[transformEnd](InteractionBase.md#transformend)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:227](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L227)

___

### wheel

▸ **wheel**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IWheelEvent`](../interfaces/IWheelEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[wheel](InteractionBase.md#wheel)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:229](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L229)

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

#### Inherited from

[InteractionBase](InteractionBase.md).[multiTouch](InteractionBase.md#multitouch)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:231](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L231)

___

### keyDown

▸ **keyDown**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[keyDown](InteractionBase.md#keydown)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:237](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L237)

___

### keyUp

▸ **keyUp**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[keyUp](InteractionBase.md#keyup)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:256](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L256)

___

### pointerHover

▸ **pointerHover**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerHover](InteractionBase.md#pointerhover)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:271](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L271)

___

### pointerOverOrOut

▸ **pointerOverOrOut**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerOverOrOut](InteractionBase.md#pointeroverorout)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:279](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L279)

___

### pointerEnterOrLeave

▸ **pointerEnterOrLeave**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerEnterOrLeave](InteractionBase.md#pointerenterorleave)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:294](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L294)

___

### touchLeave

▸ **touchLeave**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[touchLeave](InteractionBase.md#touchleave)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:309](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L309)

___

### tap

▸ **tap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[tap](InteractionBase.md#tap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:318](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L318)

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

#### Inherited from

[InteractionBase](InteractionBase.md).[findPath](InteractionBase.md#findpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:358](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L358)

___

### isRootPath

▸ **isRootPath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[isRootPath](InteractionBase.md#isrootpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:368](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L368)

___

### isTreePath

▸ **isTreePath**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[isTreePath](InteractionBase.md#istreepath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:372](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L372)

___

### checkPath

▸ **checkPath**(`data`, `useDefaultPath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `useDefaultPath?` | `boolean` |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[checkPath](InteractionBase.md#checkpath)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:378](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L378)

___

### canMove

▸ **canMove**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[canMove](InteractionBase.md#canmove)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:382](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L382)

___

### isDrag

▸ **isDrag**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[isDrag](InteractionBase.md#isdrag)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:387](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L387)

___

### isPress

▸ **isPress**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[isPress](InteractionBase.md#ispress)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:391](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L391)

___

### isHover

▸ **isHover**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[isHover](InteractionBase.md#ishover)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:395](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L395)

___

### isFocus

▸ **isFocus**(`leaf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[isFocus](InteractionBase.md#isfocus)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:399](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L399)

___

### cancelHover

▸ **cancelHover**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[cancelHover](InteractionBase.md#cancelhover)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:404](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L404)

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

#### Inherited from

[InteractionBase](InteractionBase.md).[updateDownData](InteractionBase.md#updatedowndata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:413](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L413)

___

### updateHoverData

▸ **updateHoverData**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[updateHoverData](InteractionBase.md#updatehoverdata)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:422](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L422)

___

### updateCursor

▸ **updateCursor**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[updateCursor](InteractionBase.md#updatecursor)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:429](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L429)

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

#### Inherited from

[InteractionBase](InteractionBase.md).[getLocal](InteractionBase.md#getlocal)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:459](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L459)

___

### emitTap

▸ **emitTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[emitTap](InteractionBase.md#emittap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:473](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L473)

___

### emitDoubleTap

▸ **emitDoubleTap**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[emitDoubleTap](InteractionBase.md#emitdoubletap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:478](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L478)

___

### pointerWaitCancel

▸ **pointerWaitCancel**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[pointerWaitCancel](InteractionBase.md#pointerwaitcancel)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:483](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L483)

___

### tapWait

▸ **tapWait**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[tapWait](InteractionBase.md#tapwait)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:488](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L488)

___

### tapWaitCancel

▸ **tapWaitCancel**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[tapWaitCancel](InteractionBase.md#tapwaitcancel)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:493](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L493)

___

### longPressWait

▸ **longPressWait**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[longPressWait](InteractionBase.md#longpresswait)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:501](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L501)

___

### longTap

▸ **longTap**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`boolean`

#### Inherited from

[InteractionBase](InteractionBase.md).[longTap](InteractionBase.md#longtap)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:509](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L509)

___

### longPressWaitCancel

▸ **longPressWaitCancel**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[longPressWaitCancel](InteractionBase.md#longpresswaitcancel)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:519](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L519)

___

### \_\_onResize

▸ **__onResize**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionBase](InteractionBase.md).[__onResize](InteractionBase.md#__onresize)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:526](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L526)

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

#### Inherited from

[InteractionBase](InteractionBase.md).[emit](InteractionBase.md#emit)

#### Defined in

[src/ui/packages/interaction/interaction/src/Interaction.ts:544](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/interaction/interaction/src/Interaction.ts#L544)
