# Class: SwipeEvent

## Hierarchy

- [`DragEvent`](DragEvent.md)

  ↳ **`SwipeEvent`**

## Implements

- [`ISwipeEvent`](../interfaces/ISwipeEvent.md)

## Table of contents

### Constructors

- [constructor](SwipeEvent.md#constructor)

### Properties

- [origin](SwipeEvent.md#origin)
- [type](SwipeEvent.md#type)
- [phase](SwipeEvent.md#phase)
- [isStopDefault](SwipeEvent.md#isstopdefault)
- [isStop](SwipeEvent.md#isstop)
- [isStopNow](SwipeEvent.md#isstopnow)
- [BEFORE\_DRAG](SwipeEvent.md#before_drag)
- [START](SwipeEvent.md#start)
- [DRAG](SwipeEvent.md#drag)
- [END](SwipeEvent.md#end)
- [OVER](SwipeEvent.md#over)
- [OUT](SwipeEvent.md#out)
- [ENTER](SwipeEvent.md#enter)
- [LEAVE](SwipeEvent.md#leave)
- [moveX](SwipeEvent.md#movex)
- [moveY](SwipeEvent.md#movey)
- [totalX](SwipeEvent.md#totalx)
- [totalY](SwipeEvent.md#totaly)
- [list](SwipeEvent.md#list)
- [data](SwipeEvent.md#data)
- [POINTER](SwipeEvent.md#pointer)
- [BEFORE\_DOWN](SwipeEvent.md#before_down)
- [BEFORE\_MOVE](SwipeEvent.md#before_move)
- [BEFORE\_UP](SwipeEvent.md#before_up)
- [MOVE](SwipeEvent.md#move)
- [TAP](SwipeEvent.md#tap)
- [DOUBLE\_TAP](SwipeEvent.md#double_tap)
- [CLICK](SwipeEvent.md#click)
- [DOUBLE\_CLICK](SwipeEvent.md#double_click)
- [LONG\_PRESS](SwipeEvent.md#long_press)
- [LONG\_TAP](SwipeEvent.md#long_tap)
- [MENU](SwipeEvent.md#menu)
- [MENU\_TAP](SwipeEvent.md#menu_tap)
- [width](SwipeEvent.md#width)
- [height](SwipeEvent.md#height)
- [pointerType](SwipeEvent.md#pointertype)
- [multiTouch](SwipeEvent.md#multitouch)
- [pressure](SwipeEvent.md#pressure)
- [tangentialPressure](SwipeEvent.md#tangentialpressure)
- [tiltX](SwipeEvent.md#tiltx)
- [tiltY](SwipeEvent.md#tilty)
- [twist](SwipeEvent.md#twist)
- [SWIPE](SwipeEvent.md#swipe)
- [LEFT](SwipeEvent.md#left)
- [RIGHT](SwipeEvent.md#right)
- [UP](SwipeEvent.md#up)
- [DOWN](SwipeEvent.md#down)
- [speed](SwipeEvent.md#speed)
- [direction](SwipeEvent.md#direction)
- [x](SwipeEvent.md#x)
- [y](SwipeEvent.md#y)
- [path](SwipeEvent.md#path)
- [throughPath](SwipeEvent.md#throughpath)
- [altKey](SwipeEvent.md#altkey)
- [ctrlKey](SwipeEvent.md#ctrlkey)
- [shiftKey](SwipeEvent.md#shiftkey)
- [metaKey](SwipeEvent.md#metakey)
- [buttons](SwipeEvent.md#buttons)
- [target](SwipeEvent.md#target)
- [current](SwipeEvent.md#current)
- [bubbles](SwipeEvent.md#bubbles)

### Accessors

- [spaceKey](SwipeEvent.md#spacekey)
- [left](SwipeEvent.md#left-1)
- [right](SwipeEvent.md#right-1)
- [middle](SwipeEvent.md#middle)

### Methods

- [stopDefault](SwipeEvent.md#stopdefault)
- [stopNow](SwipeEvent.md#stopnow)
- [stop](SwipeEvent.md#stop)
- [setList](SwipeEvent.md#setlist)
- [setData](SwipeEvent.md#setdata)
- [getValidMove](SwipeEvent.md#getvalidmove)
- [getMoveInDragBounds](SwipeEvent.md#getmoveindragbounds)
- [getPageMove](SwipeEvent.md#getpagemove)
- [getInnerMove](SwipeEvent.md#getinnermove)
- [getLocalMove](SwipeEvent.md#getlocalmove)
- [getPageTotal](SwipeEvent.md#getpagetotal)
- [getInnerTotal](SwipeEvent.md#getinnertotal)
- [getLocalTotal](SwipeEvent.md#getlocaltotal)
- [getPageBounds](SwipeEvent.md#getpagebounds)
- [assignMove](SwipeEvent.md#assignmove)
- [getBoxPoint](SwipeEvent.md#getboxpoint)
- [getInnerPoint](SwipeEvent.md#getinnerpoint)
- [getLocalPoint](SwipeEvent.md#getlocalpoint)
- [getPagePoint](SwipeEvent.md#getpagepoint)
- [getInner](SwipeEvent.md#getinner)
- [getLocal](SwipeEvent.md#getlocal)
- [getPage](SwipeEvent.md#getpage)
- [changeName](SwipeEvent.md#changename)

## Constructors

### constructor

• **new SwipeEvent**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Inherited from

[DragEvent](DragEvent.md).[constructor](DragEvent.md#constructor)

#### Defined in

[ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L31)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[origin](../interfaces/ISwipeEvent.md#origin)

#### Inherited from

[DragEvent](DragEvent.md).[origin](DragEvent.md#origin)

#### Defined in

[leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[type](../interfaces/ISwipeEvent.md#type)

#### Inherited from

[DragEvent](DragEvent.md).[type](DragEvent.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[phase](../interfaces/ISwipeEvent.md#phase)

#### Inherited from

[DragEvent](DragEvent.md).[phase](DragEvent.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[isStopDefault](../interfaces/ISwipeEvent.md#isstopdefault)

#### Inherited from

[DragEvent](DragEvent.md).[isStopDefault](DragEvent.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[isStop](../interfaces/ISwipeEvent.md#isstop)

#### Inherited from

[DragEvent](DragEvent.md).[isStop](DragEvent.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[isStopNow](../interfaces/ISwipeEvent.md#isstopnow)

#### Inherited from

[DragEvent](DragEvent.md).[isStopNow](DragEvent.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L18)

___

### BEFORE\_DRAG

▪ `Static` **BEFORE\_DRAG**: `string` = `'drag.before_drag'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_DRAG](DragEvent.md#before_drag)

#### Defined in

[ui/packages/event/src/DragEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L12)

___

### START

▪ `Static` **START**: `string` = `'drag.start'`

#### Inherited from

[DragEvent](DragEvent.md).[START](DragEvent.md#start)

#### Defined in

[ui/packages/event/src/DragEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L14)

___

### DRAG

▪ `Static` **DRAG**: `string` = `'drag'`

#### Inherited from

[DragEvent](DragEvent.md).[DRAG](DragEvent.md#drag)

#### Defined in

[ui/packages/event/src/DragEvent.ts:15](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L15)

___

### END

▪ `Static` **END**: `string` = `'drag.end'`

#### Inherited from

[DragEvent](DragEvent.md).[END](DragEvent.md#end)

#### Defined in

[ui/packages/event/src/DragEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L16)

___

### OVER

▪ `Static` **OVER**: `string` = `'drag.over'`

#### Inherited from

[DragEvent](DragEvent.md).[OVER](DragEvent.md#over)

#### Defined in

[ui/packages/event/src/DragEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L18)

___

### OUT

▪ `Static` **OUT**: `string` = `'drag.out'`

#### Inherited from

[DragEvent](DragEvent.md).[OUT](DragEvent.md#out)

#### Defined in

[ui/packages/event/src/DragEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L19)

___

### ENTER

▪ `Static` **ENTER**: `string` = `'drag.enter'`

#### Inherited from

[DragEvent](DragEvent.md).[ENTER](DragEvent.md#enter)

#### Defined in

[ui/packages/event/src/DragEvent.ts:21](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L21)

___

### LEAVE

▪ `Static` **LEAVE**: `string` = `'drag.leave'`

#### Inherited from

[DragEvent](DragEvent.md).[LEAVE](DragEvent.md#leave)

#### Defined in

[ui/packages/event/src/DragEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L22)

___

### moveX

• `Readonly` **moveX**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[moveX](../interfaces/ISwipeEvent.md#movex)

#### Inherited from

[DragEvent](DragEvent.md).[moveX](DragEvent.md#movex)

#### Defined in

[ui/packages/event/src/DragEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L24)

___

### moveY

• `Readonly` **moveY**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[moveY](../interfaces/ISwipeEvent.md#movey)

#### Inherited from

[DragEvent](DragEvent.md).[moveY](DragEvent.md#movey)

#### Defined in

[ui/packages/event/src/DragEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L25)

___

### totalX

• `Readonly` **totalX**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[totalX](../interfaces/ISwipeEvent.md#totalx)

#### Inherited from

[DragEvent](DragEvent.md).[totalX](DragEvent.md#totalx)

#### Defined in

[ui/packages/event/src/DragEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L26)

___

### totalY

• `Readonly` **totalY**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[totalY](../interfaces/ISwipeEvent.md#totaly)

#### Inherited from

[DragEvent](DragEvent.md).[totalY](DragEvent.md#totaly)

#### Defined in

[ui/packages/event/src/DragEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L27)

___

### list

▪ `Static` **list**: [`ILeafList`](../interfaces/ILeafList.md)

#### Inherited from

[DragEvent](DragEvent.md).[list](DragEvent.md#list)

#### Defined in

[ui/packages/event/src/DragEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L29)

___

### data

▪ `Static` **data**: [`IObject`](../interfaces/IObject.md)

#### Inherited from

[DragEvent](DragEvent.md).[data](DragEvent.md#data)

#### Defined in

[ui/packages/event/src/DragEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L30)

___

### POINTER

▪ `Static` **POINTER**: `string` = `'pointer'`

#### Inherited from

[DragEvent](DragEvent.md).[POINTER](DragEvent.md#pointer)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L10)

___

### BEFORE\_DOWN

▪ `Static` **BEFORE\_DOWN**: `string` = `'pointer.before_down'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_DOWN](DragEvent.md#before_down)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L12)

___

### BEFORE\_MOVE

▪ `Static` **BEFORE\_MOVE**: `string` = `'pointer.before_move'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_MOVE](DragEvent.md#before_move)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L13)

___

### BEFORE\_UP

▪ `Static` **BEFORE\_UP**: `string` = `'pointer.before_up'`

#### Inherited from

[DragEvent](DragEvent.md).[BEFORE_UP](DragEvent.md#before_up)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L14)

___

### MOVE

▪ `Static` **MOVE**: `string` = `'pointer.move'`

#### Inherited from

[DragEvent](DragEvent.md).[MOVE](DragEvent.md#move)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L17)

___

### TAP

▪ `Static` **TAP**: `string` = `'tap'`

#### Inherited from

[DragEvent](DragEvent.md).[TAP](DragEvent.md#tap)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L26)

___

### DOUBLE\_TAP

▪ `Static` **DOUBLE\_TAP**: `string` = `'double_tap'`

#### Inherited from

[DragEvent](DragEvent.md).[DOUBLE_TAP](DragEvent.md#double_tap)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L27)

___

### CLICK

▪ `Static` **CLICK**: `string` = `'click'`

#### Inherited from

[DragEvent](DragEvent.md).[CLICK](DragEvent.md#click)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L29)

___

### DOUBLE\_CLICK

▪ `Static` **DOUBLE\_CLICK**: `string` = `'double_click'`

#### Inherited from

[DragEvent](DragEvent.md).[DOUBLE_CLICK](DragEvent.md#double_click)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L30)

___

### LONG\_PRESS

▪ `Static` **LONG\_PRESS**: `string` = `'long_press'`

#### Inherited from

[DragEvent](DragEvent.md).[LONG_PRESS](DragEvent.md#long_press)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L32)

___

### LONG\_TAP

▪ `Static` **LONG\_TAP**: `string` = `'long_tap'`

#### Inherited from

[DragEvent](DragEvent.md).[LONG_TAP](DragEvent.md#long_tap)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L33)

___

### MENU

▪ `Static` **MENU**: `string` = `'pointer.menu'`

#### Inherited from

[DragEvent](DragEvent.md).[MENU](DragEvent.md#menu)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:35](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L35)

___

### MENU\_TAP

▪ `Static` **MENU\_TAP**: `string` = `'pointer.menu_tap'`

#### Inherited from

[DragEvent](DragEvent.md).[MENU_TAP](DragEvent.md#menu_tap)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L36)

___

### width

• `Readonly` **width**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[width](../interfaces/ISwipeEvent.md#width)

#### Inherited from

[DragEvent](DragEvent.md).[width](DragEvent.md#width)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:38](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L38)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[height](../interfaces/ISwipeEvent.md#height)

#### Inherited from

[DragEvent](DragEvent.md).[height](DragEvent.md#height)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L39)

___

### pointerType

• `Readonly` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[pointerType](../interfaces/ISwipeEvent.md#pointertype)

#### Inherited from

[DragEvent](DragEvent.md).[pointerType](DragEvent.md#pointertype)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L40)

___

### multiTouch

• `Optional` `Readonly` **multiTouch**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[multiTouch](../interfaces/ISwipeEvent.md#multitouch)

#### Inherited from

[DragEvent](DragEvent.md).[multiTouch](DragEvent.md#multitouch)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L41)

___

### pressure

• `Readonly` **pressure**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[pressure](../interfaces/ISwipeEvent.md#pressure)

#### Inherited from

[DragEvent](DragEvent.md).[pressure](DragEvent.md#pressure)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:42](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L42)

___

### tangentialPressure

• `Optional` `Readonly` **tangentialPressure**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[tangentialPressure](../interfaces/ISwipeEvent.md#tangentialpressure)

#### Inherited from

[DragEvent](DragEvent.md).[tangentialPressure](DragEvent.md#tangentialpressure)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L43)

___

### tiltX

• `Optional` `Readonly` **tiltX**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[tiltX](../interfaces/ISwipeEvent.md#tiltx)

#### Inherited from

[DragEvent](DragEvent.md).[tiltX](DragEvent.md#tiltx)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L44)

___

### tiltY

• `Optional` `Readonly` **tiltY**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[tiltY](../interfaces/ISwipeEvent.md#tilty)

#### Inherited from

[DragEvent](DragEvent.md).[tiltY](DragEvent.md#tilty)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L45)

___

### twist

• `Optional` `Readonly` **twist**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[twist](../interfaces/ISwipeEvent.md#twist)

#### Inherited from

[DragEvent](DragEvent.md).[twist](DragEvent.md#twist)

#### Defined in

[ui/packages/event/src/PointerEvent.ts:46](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/PointerEvent.ts#L46)

___

### SWIPE

▪ `Static` **SWIPE**: `string` = `'swipe'`

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L10)

___

### LEFT

▪ `Static` **LEFT**: `string` = `'swipe.left'`

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L12)

___

### RIGHT

▪ `Static` **RIGHT**: `string` = `'swipe.right'`

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L13)

___

### UP

▪ `Static` **UP**: `string` = `'swipe.up'`

#### Overrides

[DragEvent](DragEvent.md).[UP](DragEvent.md#up)

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L14)

___

### DOWN

▪ `Static` **DOWN**: `string` = `'swipe.down'`

#### Overrides

[DragEvent](DragEvent.md).[DOWN](DragEvent.md#down)

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:15](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L15)

___

### speed

• `Readonly` **speed**: `number`

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L17)

___

### direction

• `Readonly` **direction**: `string`

#### Defined in

[ui/packages/event/src/SwipeEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/SwipeEvent.ts#L18)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[x](../interfaces/ISwipeEvent.md#x)

#### Inherited from

[DragEvent](DragEvent.md).[x](DragEvent.md#x)

#### Defined in

[ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[y](../interfaces/ISwipeEvent.md#y)

#### Inherited from

[DragEvent](DragEvent.md).[y](DragEvent.md#y)

#### Defined in

[ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[path](../interfaces/ISwipeEvent.md#path)

#### Inherited from

[DragEvent](DragEvent.md).[path](DragEvent.md#path)

#### Defined in

[ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[throughPath](../interfaces/ISwipeEvent.md#throughpath)

#### Inherited from

[DragEvent](DragEvent.md).[throughPath](DragEvent.md#throughpath)

#### Defined in

[ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[altKey](../interfaces/ISwipeEvent.md#altkey)

#### Inherited from

[DragEvent](DragEvent.md).[altKey](DragEvent.md#altkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[ctrlKey](../interfaces/ISwipeEvent.md#ctrlkey)

#### Inherited from

[DragEvent](DragEvent.md).[ctrlKey](DragEvent.md#ctrlkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[shiftKey](../interfaces/ISwipeEvent.md#shiftkey)

#### Inherited from

[DragEvent](DragEvent.md).[shiftKey](DragEvent.md#shiftkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[metaKey](../interfaces/ISwipeEvent.md#metakey)

#### Inherited from

[DragEvent](DragEvent.md).[metaKey](DragEvent.md#metakey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[buttons](../interfaces/ISwipeEvent.md#buttons)

#### Inherited from

[DragEvent](DragEvent.md).[buttons](DragEvent.md#buttons)

#### Defined in

[ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[target](../interfaces/ISwipeEvent.md#target)

#### Inherited from

[DragEvent](DragEvent.md).[target](DragEvent.md#target)

#### Defined in

[ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[current](../interfaces/ISwipeEvent.md#current)

#### Inherited from

[DragEvent](DragEvent.md).[current](DragEvent.md#current)

#### Defined in

[ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[bubbles](../interfaces/ISwipeEvent.md#bubbles)

#### Inherited from

[DragEvent](DragEvent.md).[bubbles](DragEvent.md#bubbles)

#### Defined in

[ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L29)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[spaceKey](../interfaces/ISwipeEvent.md#spacekey)

#### Inherited from

DragEvent.spaceKey

#### Defined in

[ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[left](../interfaces/ISwipeEvent.md#left)

#### Inherited from

DragEvent.left

#### Defined in

[ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[right](../interfaces/ISwipeEvent.md#right)

#### Inherited from

DragEvent.right

#### Defined in

[ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[middle](../interfaces/ISwipeEvent.md#middle)

#### Inherited from

DragEvent.middle

#### Defined in

[ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[stopDefault](../interfaces/ISwipeEvent.md#stopdefault)

#### Inherited from

[DragEvent](DragEvent.md).[stopDefault](DragEvent.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[stopNow](../interfaces/ISwipeEvent.md#stopnow)

#### Inherited from

[DragEvent](DragEvent.md).[stopNow](DragEvent.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[stop](../interfaces/ISwipeEvent.md#stop)

#### Inherited from

[DragEvent](DragEvent.md).[stop](DragEvent.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Event.ts#L36)

___

### setList

▸ `Static` **setList**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[setList](DragEvent.md#setlist)

#### Defined in

[ui/packages/event/src/DragEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L32)

___

### setData

▸ `Static` **setData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[setData](DragEvent.md#setdata)

#### Defined in

[ui/packages/event/src/DragEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L36)

___

### getValidMove

▸ `Static` **getValidMove**(`leaf`, `start`, `total`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |
| `start` | [`IPointData`](../interfaces/IPointData.md) |
| `total` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Inherited from

[DragEvent](DragEvent.md).[getValidMove](DragEvent.md#getvalidmove)

#### Defined in

[ui/packages/event/src/DragEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L40)

___

### getMoveInDragBounds

▸ `Static` **getMoveInDragBounds**(`childBox`, `dragBounds`, `move`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `childBox` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `dragBounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `move` | [`IPointData`](../interfaces/IPointData.md) |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Inherited from

[DragEvent](DragEvent.md).[getMoveInDragBounds](DragEvent.md#getmoveindragbounds)

#### Defined in

[ui/packages/event/src/DragEvent.ts:50](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L50)

___

### getPageMove

▸ **getPageMove**(`total?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `total?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getPageMove](../interfaces/ISwipeEvent.md#getpagemove)

#### Inherited from

[DragEvent](DragEvent.md).[getPageMove](DragEvent.md#getpagemove)

#### Defined in

[ui/packages/event/src/DragEvent.ts:71](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L71)

___

### getInnerMove

▸ **getInnerMove**(`relative?`, `total?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `total?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getInnerMove](../interfaces/ISwipeEvent.md#getinnermove)

#### Inherited from

[DragEvent](DragEvent.md).[getInnerMove](DragEvent.md#getinnermove)

#### Defined in

[ui/packages/event/src/DragEvent.ts:76](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L76)

___

### getLocalMove

▸ **getLocalMove**(`relative?`, `total?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `total?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getLocalMove](../interfaces/ISwipeEvent.md#getlocalmove)

#### Inherited from

[DragEvent](DragEvent.md).[getLocalMove](DragEvent.md#getlocalmove)

#### Defined in

[ui/packages/event/src/DragEvent.ts:82](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L82)

___

### getPageTotal

▸ **getPageTotal**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getPageTotal](../interfaces/ISwipeEvent.md#getpagetotal)

#### Inherited from

[DragEvent](DragEvent.md).[getPageTotal](DragEvent.md#getpagetotal)

#### Defined in

[ui/packages/event/src/DragEvent.ts:88](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L88)

___

### getInnerTotal

▸ **getInnerTotal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getInnerTotal](../interfaces/ISwipeEvent.md#getinnertotal)

#### Inherited from

[DragEvent](DragEvent.md).[getInnerTotal](DragEvent.md#getinnertotal)

#### Defined in

[ui/packages/event/src/DragEvent.ts:92](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L92)

___

### getLocalTotal

▸ **getLocalTotal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getLocalTotal](../interfaces/ISwipeEvent.md#getlocaltotal)

#### Inherited from

[DragEvent](DragEvent.md).[getLocalTotal](DragEvent.md#getlocaltotal)

#### Defined in

[ui/packages/event/src/DragEvent.ts:96](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L96)

___

### getPageBounds

▸ **getPageBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getPageBounds](../interfaces/ISwipeEvent.md#getpagebounds)

#### Inherited from

[DragEvent](DragEvent.md).[getPageBounds](DragEvent.md#getpagebounds)

#### Defined in

[ui/packages/event/src/DragEvent.ts:100](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L100)

___

### assignMove

▸ `Protected` **assignMove**(`total`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `boolean` |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[assignMove](DragEvent.md#assignmove)

#### Defined in

[ui/packages/event/src/DragEvent.ts:107](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/DragEvent.ts#L107)

___

### getBoxPoint

▸ **getBoxPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getBoxPoint](../interfaces/ISwipeEvent.md#getboxpoint)

#### Inherited from

[DragEvent](DragEvent.md).[getBoxPoint](DragEvent.md#getboxpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L36)

___

### getInnerPoint

▸ **getInnerPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getInnerPoint](../interfaces/ISwipeEvent.md#getinnerpoint)

#### Inherited from

[DragEvent](DragEvent.md).[getInnerPoint](DragEvent.md#getinnerpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L40)

___

### getLocalPoint

▸ **getLocalPoint**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getLocalPoint](../interfaces/ISwipeEvent.md#getlocalpoint)

#### Inherited from

[DragEvent](DragEvent.md).[getLocalPoint](DragEvent.md#getlocalpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L44)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getPagePoint](../interfaces/ISwipeEvent.md#getpagepoint)

#### Inherited from

[DragEvent](DragEvent.md).[getPagePoint](DragEvent.md#getpagepoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L48)

___

### getInner

▸ **getInner**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getInner](../interfaces/ISwipeEvent.md#getinner)

#### Inherited from

[DragEvent](DragEvent.md).[getInner](DragEvent.md#getinner)

#### Defined in

[ui/packages/event/src/UIEvent.ts:53](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L53)

___

### getLocal

▸ **getLocal**(`relative?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getLocal](../interfaces/ISwipeEvent.md#getlocal)

#### Inherited from

[DragEvent](DragEvent.md).[getLocal](DragEvent.md#getlocal)

#### Defined in

[ui/packages/event/src/UIEvent.ts:54](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L54)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ISwipeEvent](../interfaces/ISwipeEvent.md).[getPage](../interfaces/ISwipeEvent.md#getpage)

#### Inherited from

[DragEvent](DragEvent.md).[getPage](DragEvent.md#getpage)

#### Defined in

[ui/packages/event/src/UIEvent.ts:55](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L55)

___

### changeName

▸ `Static` **changeName**(`oldName`, `newName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldName` | `string` |
| `newName` | `string` |

#### Returns

`void`

#### Inherited from

[DragEvent](DragEvent.md).[changeName](DragEvent.md#changename)

#### Defined in

[ui/packages/event/src/UIEvent.ts:58](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/event/src/UIEvent.ts#L58)
