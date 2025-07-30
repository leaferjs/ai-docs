# Class: DragEvent

## Hierarchy

- [`PointerEvent`](PointerEvent.md)

  ↳ **`DragEvent`**

  ↳↳ [`MoveEvent`](MoveEvent.md)

  ↳↳ [`SwipeEvent`](SwipeEvent.md)

## Implements

- [`IDragEvent`](../interfaces/IDragEvent.md)

## Table of contents

### Constructors

- [constructor](DragEvent.md#constructor)

### Properties

- [origin](DragEvent.md#origin)
- [type](DragEvent.md#type)
- [phase](DragEvent.md#phase)
- [isStopDefault](DragEvent.md#isstopdefault)
- [isStop](DragEvent.md#isstop)
- [isStopNow](DragEvent.md#isstopnow)
- [BEFORE\_DRAG](DragEvent.md#before_drag)
- [START](DragEvent.md#start)
- [DRAG](DragEvent.md#drag)
- [END](DragEvent.md#end)
- [OVER](DragEvent.md#over)
- [OUT](DragEvent.md#out)
- [ENTER](DragEvent.md#enter)
- [LEAVE](DragEvent.md#leave)
- [moveX](DragEvent.md#movex)
- [moveY](DragEvent.md#movey)
- [totalX](DragEvent.md#totalx)
- [totalY](DragEvent.md#totaly)
- [list](DragEvent.md#list)
- [data](DragEvent.md#data)
- [POINTER](DragEvent.md#pointer)
- [BEFORE\_DOWN](DragEvent.md#before_down)
- [BEFORE\_MOVE](DragEvent.md#before_move)
- [BEFORE\_UP](DragEvent.md#before_up)
- [DOWN](DragEvent.md#down)
- [MOVE](DragEvent.md#move)
- [UP](DragEvent.md#up)
- [TAP](DragEvent.md#tap)
- [DOUBLE\_TAP](DragEvent.md#double_tap)
- [CLICK](DragEvent.md#click)
- [DOUBLE\_CLICK](DragEvent.md#double_click)
- [LONG\_PRESS](DragEvent.md#long_press)
- [LONG\_TAP](DragEvent.md#long_tap)
- [MENU](DragEvent.md#menu)
- [MENU\_TAP](DragEvent.md#menu_tap)
- [width](DragEvent.md#width)
- [height](DragEvent.md#height)
- [pointerType](DragEvent.md#pointertype)
- [multiTouch](DragEvent.md#multitouch)
- [pressure](DragEvent.md#pressure)
- [tangentialPressure](DragEvent.md#tangentialpressure)
- [tiltX](DragEvent.md#tiltx)
- [tiltY](DragEvent.md#tilty)
- [twist](DragEvent.md#twist)
- [x](DragEvent.md#x)
- [y](DragEvent.md#y)
- [path](DragEvent.md#path)
- [throughPath](DragEvent.md#throughpath)
- [altKey](DragEvent.md#altkey)
- [ctrlKey](DragEvent.md#ctrlkey)
- [shiftKey](DragEvent.md#shiftkey)
- [metaKey](DragEvent.md#metakey)
- [buttons](DragEvent.md#buttons)
- [target](DragEvent.md#target)
- [current](DragEvent.md#current)
- [bubbles](DragEvent.md#bubbles)

### Accessors

- [spaceKey](DragEvent.md#spacekey)
- [left](DragEvent.md#left)
- [right](DragEvent.md#right)
- [middle](DragEvent.md#middle)

### Methods

- [stopDefault](DragEvent.md#stopdefault)
- [stopNow](DragEvent.md#stopnow)
- [stop](DragEvent.md#stop)
- [setList](DragEvent.md#setlist)
- [setData](DragEvent.md#setdata)
- [getValidMove](DragEvent.md#getvalidmove)
- [limitMove](DragEvent.md#limitmove)
- [getMoveInDragBounds](DragEvent.md#getmoveindragbounds)
- [getPageMove](DragEvent.md#getpagemove)
- [getInnerMove](DragEvent.md#getinnermove)
- [getLocalMove](DragEvent.md#getlocalmove)
- [getPageTotal](DragEvent.md#getpagetotal)
- [getInnerTotal](DragEvent.md#getinnertotal)
- [getLocalTotal](DragEvent.md#getlocaltotal)
- [getPageBounds](DragEvent.md#getpagebounds)
- [assignMove](DragEvent.md#assignmove)
- [isHoldKeys](DragEvent.md#isholdkeys)
- [getBoxPoint](DragEvent.md#getboxpoint)
- [getInnerPoint](DragEvent.md#getinnerpoint)
- [getLocalPoint](DragEvent.md#getlocalpoint)
- [getPagePoint](DragEvent.md#getpagepoint)
- [getInner](DragEvent.md#getinner)
- [getLocal](DragEvent.md#getlocal)
- [getPage](DragEvent.md#getpage)
- [changeName](DragEvent.md#changename)

## Constructors

### constructor

• **new DragEvent**(`params`): [`DragEvent`](DragEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`DragEvent`](DragEvent.md)

#### Inherited from

[PointerEvent](PointerEvent.md).[constructor](PointerEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L31)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[origin](../interfaces/IDragEvent.md#origin)

#### Inherited from

[PointerEvent](PointerEvent.md).[origin](PointerEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[type](../interfaces/IDragEvent.md#type)

#### Inherited from

[PointerEvent](PointerEvent.md).[type](PointerEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[phase](../interfaces/IDragEvent.md#phase)

#### Inherited from

[PointerEvent](PointerEvent.md).[phase](PointerEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[isStopDefault](../interfaces/IDragEvent.md#isstopdefault)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStopDefault](PointerEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[isStop](../interfaces/IDragEvent.md#isstop)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStop](PointerEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[isStopNow](../interfaces/IDragEvent.md#isstopnow)

#### Inherited from

[PointerEvent](PointerEvent.md).[isStopNow](PointerEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L18)

___

### BEFORE\_DRAG

▪ `Static` **BEFORE\_DRAG**: `string` = `'drag.before_drag'`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L12)

___

### START

▪ `Static` **START**: `string` = `'drag.start'`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L14)

___

### DRAG

▪ `Static` **DRAG**: `string` = `'drag'`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:15](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L15)

___

### END

▪ `Static` **END**: `string` = `'drag.end'`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L16)

___

### OVER

▪ `Static` **OVER**: `string` = `'drag.over'`

#### Overrides

[PointerEvent](PointerEvent.md).[OVER](PointerEvent.md#over)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L18)

___

### OUT

▪ `Static` **OUT**: `string` = `'drag.out'`

#### Overrides

[PointerEvent](PointerEvent.md).[OUT](PointerEvent.md#out)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L19)

___

### ENTER

▪ `Static` **ENTER**: `string` = `'drag.enter'`

#### Overrides

[PointerEvent](PointerEvent.md).[ENTER](PointerEvent.md#enter)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:21](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L21)

___

### LEAVE

▪ `Static` **LEAVE**: `string` = `'drag.leave'`

#### Overrides

[PointerEvent](PointerEvent.md).[LEAVE](PointerEvent.md#leave)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L22)

___

### moveX

• `Readonly` **moveX**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[moveX](../interfaces/IDragEvent.md#movex)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L24)

___

### moveY

• `Readonly` **moveY**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[moveY](../interfaces/IDragEvent.md#movey)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L25)

___

### totalX

• `Readonly` **totalX**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[totalX](../interfaces/IDragEvent.md#totalx)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L26)

___

### totalY

• `Readonly` **totalY**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[totalY](../interfaces/IDragEvent.md#totaly)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L27)

___

### list

▪ `Static` **list**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L29)

___

### data

▪ `Static` **data**: [`IObject`](../interfaces/IObject.md)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L30)

___

### POINTER

▪ `Static` **POINTER**: `string` = `'pointer'`

#### Inherited from

[PointerEvent](PointerEvent.md).[POINTER](PointerEvent.md#pointer)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L10)

___

### BEFORE\_DOWN

▪ `Static` **BEFORE\_DOWN**: `string` = `'pointer.before_down'`

#### Inherited from

[PointerEvent](PointerEvent.md).[BEFORE_DOWN](PointerEvent.md#before_down)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L12)

___

### BEFORE\_MOVE

▪ `Static` **BEFORE\_MOVE**: `string` = `'pointer.before_move'`

#### Inherited from

[PointerEvent](PointerEvent.md).[BEFORE_MOVE](PointerEvent.md#before_move)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L13)

___

### BEFORE\_UP

▪ `Static` **BEFORE\_UP**: `string` = `'pointer.before_up'`

#### Inherited from

[PointerEvent](PointerEvent.md).[BEFORE_UP](PointerEvent.md#before_up)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L14)

___

### DOWN

▪ `Static` **DOWN**: `string` = `'pointer.down'`

#### Inherited from

[PointerEvent](PointerEvent.md).[DOWN](PointerEvent.md#down)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L16)

___

### MOVE

▪ `Static` **MOVE**: `string` = `'pointer.move'`

#### Inherited from

[PointerEvent](PointerEvent.md).[MOVE](PointerEvent.md#move)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L17)

___

### UP

▪ `Static` **UP**: `string` = `'pointer.up'`

#### Inherited from

[PointerEvent](PointerEvent.md).[UP](PointerEvent.md#up)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L18)

___

### TAP

▪ `Static` **TAP**: `string` = `'tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[TAP](PointerEvent.md#tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:26](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L26)

___

### DOUBLE\_TAP

▪ `Static` **DOUBLE\_TAP**: `string` = `'double_tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[DOUBLE_TAP](PointerEvent.md#double_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L27)

___

### CLICK

▪ `Static` **CLICK**: `string` = `'click'`

#### Inherited from

[PointerEvent](PointerEvent.md).[CLICK](PointerEvent.md#click)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L29)

___

### DOUBLE\_CLICK

▪ `Static` **DOUBLE\_CLICK**: `string` = `'double_click'`

#### Inherited from

[PointerEvent](PointerEvent.md).[DOUBLE_CLICK](PointerEvent.md#double_click)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:30](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L30)

___

### LONG\_PRESS

▪ `Static` **LONG\_PRESS**: `string` = `'long_press'`

#### Inherited from

[PointerEvent](PointerEvent.md).[LONG_PRESS](PointerEvent.md#long_press)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L32)

___

### LONG\_TAP

▪ `Static` **LONG\_TAP**: `string` = `'long_tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[LONG_TAP](PointerEvent.md#long_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:33](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L33)

___

### MENU

▪ `Static` **MENU**: `string` = `'pointer.menu'`

#### Inherited from

[PointerEvent](PointerEvent.md).[MENU](PointerEvent.md#menu)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:35](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L35)

___

### MENU\_TAP

▪ `Static` **MENU\_TAP**: `string` = `'pointer.menu_tap'`

#### Inherited from

[PointerEvent](PointerEvent.md).[MENU_TAP](PointerEvent.md#menu_tap)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L36)

___

### width

• `Readonly` **width**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[width](../interfaces/IDragEvent.md#width)

#### Inherited from

[PointerEvent](PointerEvent.md).[width](PointerEvent.md#width)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:38](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L38)

___

### height

• `Readonly` **height**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[height](../interfaces/IDragEvent.md#height)

#### Inherited from

[PointerEvent](PointerEvent.md).[height](PointerEvent.md#height)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:39](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L39)

___

### pointerType

• `Readonly` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[pointerType](../interfaces/IDragEvent.md#pointertype)

#### Inherited from

[PointerEvent](PointerEvent.md).[pointerType](PointerEvent.md#pointertype)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L40)

___

### multiTouch

• `Optional` `Readonly` **multiTouch**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[multiTouch](../interfaces/IDragEvent.md#multitouch)

#### Inherited from

[PointerEvent](PointerEvent.md).[multiTouch](PointerEvent.md#multitouch)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L41)

___

### pressure

• `Readonly` **pressure**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[pressure](../interfaces/IDragEvent.md#pressure)

#### Inherited from

[PointerEvent](PointerEvent.md).[pressure](PointerEvent.md#pressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:42](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L42)

___

### tangentialPressure

• `Optional` `Readonly` **tangentialPressure**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[tangentialPressure](../interfaces/IDragEvent.md#tangentialpressure)

#### Inherited from

[PointerEvent](PointerEvent.md).[tangentialPressure](PointerEvent.md#tangentialpressure)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:43](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L43)

___

### tiltX

• `Optional` `Readonly` **tiltX**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[tiltX](../interfaces/IDragEvent.md#tiltx)

#### Inherited from

[PointerEvent](PointerEvent.md).[tiltX](PointerEvent.md#tiltx)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L44)

___

### tiltY

• `Optional` `Readonly` **tiltY**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[tiltY](../interfaces/IDragEvent.md#tilty)

#### Inherited from

[PointerEvent](PointerEvent.md).[tiltY](PointerEvent.md#tilty)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L45)

___

### twist

• `Optional` `Readonly` **twist**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[twist](../interfaces/IDragEvent.md#twist)

#### Inherited from

[PointerEvent](PointerEvent.md).[twist](PointerEvent.md#twist)

#### Defined in

[src/ui/packages/event/src/PointerEvent.ts:46](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/PointerEvent.ts#L46)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[x](../interfaces/IDragEvent.md#x)

#### Inherited from

[PointerEvent](PointerEvent.md).[x](PointerEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[y](../interfaces/IDragEvent.md#y)

#### Inherited from

[PointerEvent](PointerEvent.md).[y](PointerEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[path](../interfaces/IDragEvent.md#path)

#### Inherited from

[PointerEvent](PointerEvent.md).[path](PointerEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[throughPath](../interfaces/IDragEvent.md#throughpath)

#### Inherited from

[PointerEvent](PointerEvent.md).[throughPath](PointerEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[altKey](../interfaces/IDragEvent.md#altkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[altKey](PointerEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[ctrlKey](../interfaces/IDragEvent.md#ctrlkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[ctrlKey](PointerEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[shiftKey](../interfaces/IDragEvent.md#shiftkey)

#### Inherited from

[PointerEvent](PointerEvent.md).[shiftKey](PointerEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[metaKey](../interfaces/IDragEvent.md#metakey)

#### Inherited from

[PointerEvent](PointerEvent.md).[metaKey](PointerEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[buttons](../interfaces/IDragEvent.md#buttons)

#### Inherited from

[PointerEvent](PointerEvent.md).[buttons](PointerEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[target](../interfaces/IDragEvent.md#target)

#### Inherited from

[PointerEvent](PointerEvent.md).[target](PointerEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[current](../interfaces/IDragEvent.md#current)

#### Inherited from

[PointerEvent](PointerEvent.md).[current](PointerEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[bubbles](../interfaces/IDragEvent.md#bubbles)

#### Inherited from

[PointerEvent](PointerEvent.md).[bubbles](PointerEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L29)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[spaceKey](../interfaces/IDragEvent.md#spacekey)

#### Inherited from

PointerEvent.spaceKey

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[left](../interfaces/IDragEvent.md#left)

#### Inherited from

PointerEvent.left

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[right](../interfaces/IDragEvent.md#right)

#### Inherited from

PointerEvent.right

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[middle](../interfaces/IDragEvent.md#middle)

#### Inherited from

PointerEvent.middle

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[stopDefault](../interfaces/IDragEvent.md#stopdefault)

#### Inherited from

[PointerEvent](PointerEvent.md).[stopDefault](PointerEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[stopNow](../interfaces/IDragEvent.md#stopnow)

#### Inherited from

[PointerEvent](PointerEvent.md).[stopNow](PointerEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[stop](../interfaces/IDragEvent.md#stop)

#### Inherited from

[PointerEvent](PointerEvent.md).[stop](PointerEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/event/src/Event.ts#L36)

___

### setList

▸ **setList**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:32](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L32)

___

### setData

▸ **setData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L36)

___

### getValidMove

▸ **getValidMove**(`leaf`, `start`, `total`, `checkLimit?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) | `undefined` |
| `start` | [`IPointData`](../interfaces/IPointData.md) | `undefined` |
| `total` | [`IPointData`](../interfaces/IPointData.md) | `undefined` |
| `checkLimit` | `boolean` | `true` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L40)

___

### limitMove

▸ **limitMove**(`leaf`, `move`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |
| `move` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:47](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L47)

___

### getMoveInDragBounds

▸ **getMoveInDragBounds**(`childBox`, `dragBounds`, `move`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `childBox` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `dragBounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `move` | [`IPointData`](../interfaces/IPointData.md) |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:54](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L54)

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

[IDragEvent](../interfaces/IDragEvent.md).[getPageMove](../interfaces/IDragEvent.md#getpagemove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:75](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L75)

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

[IDragEvent](../interfaces/IDragEvent.md).[getInnerMove](../interfaces/IDragEvent.md#getinnermove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:80](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L80)

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

[IDragEvent](../interfaces/IDragEvent.md).[getLocalMove](../interfaces/IDragEvent.md#getlocalmove)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:86](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L86)

___

### getPageTotal

▸ **getPageTotal**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[getPageTotal](../interfaces/IDragEvent.md#getpagetotal)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:92](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L92)

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

[IDragEvent](../interfaces/IDragEvent.md).[getInnerTotal](../interfaces/IDragEvent.md#getinnertotal)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:96](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L96)

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

[IDragEvent](../interfaces/IDragEvent.md).[getLocalTotal](../interfaces/IDragEvent.md#getlocaltotal)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:100](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L100)

___

### getPageBounds

▸ **getPageBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[getPageBounds](../interfaces/IDragEvent.md#getpagebounds)

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:104](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L104)

___

### assignMove

▸ **assignMove**(`total`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/event/src/DragEvent.ts:111](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/DragEvent.ts#L111)

___

### isHoldKeys

▸ **isHoldKeys**(`shortcutKeys?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortcutKeys?` | [`IShortcutKeysCheck`](../interfaces/IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

#### Returns

`boolean`

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[isHoldKeys](../interfaces/IDragEvent.md#isholdkeys)

#### Inherited from

[PointerEvent](PointerEvent.md).[isHoldKeys](PointerEvent.md#isholdkeys)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:37](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L37)

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

[IDragEvent](../interfaces/IDragEvent.md).[getBoxPoint](../interfaces/IDragEvent.md#getboxpoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getBoxPoint](PointerEvent.md#getboxpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L41)

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

[IDragEvent](../interfaces/IDragEvent.md).[getInnerPoint](../interfaces/IDragEvent.md#getinnerpoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getInnerPoint](PointerEvent.md#getinnerpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L45)

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

[IDragEvent](../interfaces/IDragEvent.md).[getLocalPoint](../interfaces/IDragEvent.md#getlocalpoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getLocalPoint](PointerEvent.md#getlocalpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:49](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L49)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[getPagePoint](../interfaces/IDragEvent.md#getpagepoint)

#### Inherited from

[PointerEvent](PointerEvent.md).[getPagePoint](PointerEvent.md#getpagepoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:53](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L53)

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

[IDragEvent](../interfaces/IDragEvent.md).[getInner](../interfaces/IDragEvent.md#getinner)

#### Inherited from

[PointerEvent](PointerEvent.md).[getInner](PointerEvent.md#getinner)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:58](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L58)

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

[IDragEvent](../interfaces/IDragEvent.md).[getLocal](../interfaces/IDragEvent.md#getlocal)

#### Inherited from

[PointerEvent](PointerEvent.md).[getLocal](PointerEvent.md#getlocal)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:59](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L59)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IDragEvent](../interfaces/IDragEvent.md).[getPage](../interfaces/IDragEvent.md#getpage)

#### Inherited from

[PointerEvent](PointerEvent.md).[getPage](PointerEvent.md#getpage)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:60](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L60)

___

### changeName

▸ **changeName**(`oldName`, `newName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldName` | `string` |
| `newName` | `string` |

#### Returns

`void`

#### Inherited from

[PointerEvent](PointerEvent.md).[changeName](PointerEvent.md#changename)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:63](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/event/src/UIEvent.ts#L63)
