# Interface: ISwipeEvent

## Hierarchy

- [`IDragEvent`](IDragEvent.md)

  ↳ **`ISwipeEvent`**

## Implemented by

- [`SwipeEvent`](../classes/SwipeEvent.md)

## Table of contents

### Properties

- [origin](ISwipeEvent.md#origin)
- [type](ISwipeEvent.md#type)
- [target](ISwipeEvent.md#target)
- [current](ISwipeEvent.md#current)
- [bubbles](ISwipeEvent.md#bubbles)
- [phase](ISwipeEvent.md#phase)
- [isStopDefault](ISwipeEvent.md#isstopdefault)
- [isStop](ISwipeEvent.md#isstop)
- [isStopNow](ISwipeEvent.md#isstopnow)
- [x](ISwipeEvent.md#x)
- [y](ISwipeEvent.md#y)
- [altKey](ISwipeEvent.md#altkey)
- [ctrlKey](ISwipeEvent.md#ctrlkey)
- [shiftKey](ISwipeEvent.md#shiftkey)
- [metaKey](ISwipeEvent.md#metakey)
- [spaceKey](ISwipeEvent.md#spacekey)
- [left](ISwipeEvent.md#left)
- [right](ISwipeEvent.md#right)
- [middle](ISwipeEvent.md#middle)
- [buttons](ISwipeEvent.md#buttons)
- [path](ISwipeEvent.md#path)
- [throughPath](ISwipeEvent.md#throughpath)
- [width](ISwipeEvent.md#width)
- [height](ISwipeEvent.md#height)
- [pointerType](ISwipeEvent.md#pointertype)
- [multiTouch](ISwipeEvent.md#multitouch)
- [pressure](ISwipeEvent.md#pressure)
- [tangentialPressure](ISwipeEvent.md#tangentialpressure)
- [tiltX](ISwipeEvent.md#tiltx)
- [tiltY](ISwipeEvent.md#tilty)
- [twist](ISwipeEvent.md#twist)
- [isCancel](ISwipeEvent.md#iscancel)
- [moveX](ISwipeEvent.md#movex)
- [moveY](ISwipeEvent.md#movey)
- [totalX](ISwipeEvent.md#totalx)
- [totalY](ISwipeEvent.md#totaly)

### Methods

- [stopDefault](ISwipeEvent.md#stopdefault)
- [stopNow](ISwipeEvent.md#stopnow)
- [stop](ISwipeEvent.md#stop)
- [getBoxPoint](ISwipeEvent.md#getboxpoint)
- [getInnerPoint](ISwipeEvent.md#getinnerpoint)
- [getLocalPoint](ISwipeEvent.md#getlocalpoint)
- [getPagePoint](ISwipeEvent.md#getpagepoint)
- [getInner](ISwipeEvent.md#getinner)
- [getLocal](ISwipeEvent.md#getlocal)
- [getPage](ISwipeEvent.md#getpage)
- [getPageMove](ISwipeEvent.md#getpagemove)
- [getInnerMove](ISwipeEvent.md#getinnermove)
- [getLocalMove](ISwipeEvent.md#getlocalmove)
- [getPageTotal](ISwipeEvent.md#getpagetotal)
- [getInnerTotal](ISwipeEvent.md#getinnertotal)
- [getLocalTotal](ISwipeEvent.md#getlocaltotal)
- [getPageBounds](ISwipeEvent.md#getpagebounds)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[origin](IDragEvent.md#origin)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IDragEvent](IDragEvent.md).[type](IDragEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[target](IDragEvent.md#target)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[current](IDragEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[bubbles](IDragEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[phase](IDragEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isStopDefault](IDragEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isStop](IDragEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isStopNow](IDragEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L20)

___

### x

• **x**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[x](IDragEvent.md#x)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:9](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L9)

___

### y

• **y**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[y](IDragEvent.md#y)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:10](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L10)

___

### altKey

• `Optional` **altKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[altKey](IDragEvent.md#altkey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:12](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L12)

___

### ctrlKey

• `Optional` **ctrlKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[ctrlKey](IDragEvent.md#ctrlkey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:13](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L13)

___

### shiftKey

• `Optional` **shiftKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[shiftKey](IDragEvent.md#shiftkey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:14](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L14)

___

### metaKey

• `Optional` **metaKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[metaKey](IDragEvent.md#metakey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:15](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L15)

___

### spaceKey

• `Optional` `Readonly` **spaceKey**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[spaceKey](IDragEvent.md#spacekey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:16](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L16)

___

### left

• `Optional` `Readonly` **left**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[left](IDragEvent.md#left)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:18](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L18)

___

### right

• `Optional` `Readonly` **right**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[right](IDragEvent.md#right)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:19](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L19)

___

### middle

• `Optional` `Readonly` **middle**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[middle](IDragEvent.md#middle)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:20](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L20)

___

### buttons

• `Optional` **buttons**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[buttons](IDragEvent.md#buttons)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:21](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L21)

___

### path

• `Optional` **path**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[path](IDragEvent.md#path)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:23](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L23)

___

### throughPath

• `Optional` **throughPath**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[throughPath](IDragEvent.md#throughpath)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:24](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L24)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[width](IDragEvent.md#width)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:39](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L39)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[height](IDragEvent.md#height)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:40](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L40)

___

### pointerType

• `Optional` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Inherited from

[IDragEvent](IDragEvent.md).[pointerType](IDragEvent.md#pointertype)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:41](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L41)

___

### multiTouch

• `Optional` **multiTouch**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[multiTouch](IDragEvent.md#multitouch)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:42](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L42)

___

### pressure

• `Optional` **pressure**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[pressure](IDragEvent.md#pressure)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:43](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L43)

___

### tangentialPressure

• `Optional` **tangentialPressure**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[tangentialPressure](IDragEvent.md#tangentialpressure)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:44](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L44)

___

### tiltX

• `Optional` **tiltX**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[tiltX](IDragEvent.md#tiltx)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:45](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L45)

___

### tiltY

• `Optional` **tiltY**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[tiltY](IDragEvent.md#tilty)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:46](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L46)

___

### twist

• `Optional` **twist**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[twist](IDragEvent.md#twist)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:47](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L47)

___

### isCancel

• `Optional` **isCancel**: `boolean`

#### Inherited from

[IDragEvent](IDragEvent.md).[isCancel](IDragEvent.md#iscancel)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:48](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L48)

___

### moveX

• **moveX**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[moveX](IDragEvent.md#movex)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:53](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L53)

___

### moveY

• **moveY**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[moveY](IDragEvent.md#movey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:54](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L54)

___

### totalX

• `Optional` **totalX**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[totalX](IDragEvent.md#totalx)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:55](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L55)

___

### totalY

• `Optional` **totalY**: `number`

#### Inherited from

[IDragEvent](IDragEvent.md).[totalY](IDragEvent.md#totaly)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:56](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L56)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IDragEvent](IDragEvent.md).[stopDefault](IDragEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IDragEvent](IDragEvent.md).[stopNow](IDragEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IDragEvent](IDragEvent.md).[stop](IDragEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEvent.ts#L23)

___

### getBoxPoint

▸ `Optional` **getBoxPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getBoxPoint](IDragEvent.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:26](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L26)

___

### getInnerPoint

▸ `Optional` **getInnerPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInnerPoint](IDragEvent.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:27](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L27)

___

### getLocalPoint

▸ `Optional` **getLocalPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocalPoint](IDragEvent.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:28](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L28)

___

### getPagePoint

▸ `Optional` **getPagePoint**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPagePoint](IDragEvent.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:29](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L29)

___

### getInner

▸ `Optional` **getInner**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInner](IDragEvent.md#getinner)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:32](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L32)

___

### getLocal

▸ `Optional` **getLocal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocal](IDragEvent.md#getlocal)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:33](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L33)

___

### getPage

▸ `Optional` **getPage**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPage](IDragEvent.md#getpage)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:34](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L34)

___

### getPageMove

▸ `Optional` **getPageMove**(`total?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `total?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPageMove](IDragEvent.md#getpagemove)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:58](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L58)

___

### getInnerMove

▸ `Optional` **getInnerMove**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInnerMove](IDragEvent.md#getinnermove)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:59](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L59)

___

### getLocalMove

▸ `Optional` **getLocalMove**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocalMove](IDragEvent.md#getlocalmove)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:60](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L60)

___

### getPageTotal

▸ `Optional` **getPageTotal**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPageTotal](IDragEvent.md#getpagetotal)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:62](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L62)

___

### getInnerTotal

▸ `Optional` **getInnerTotal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getInnerTotal](IDragEvent.md#getinnertotal)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:63](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L63)

___

### getLocalTotal

▸ `Optional` **getLocalTotal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getLocalTotal](IDragEvent.md#getlocaltotal)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:64](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L64)

___

### getPageBounds

▸ `Optional` **getPageBounds**(): [`IBoundsData`](IBoundsData.md)

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[IDragEvent](IDragEvent.md).[getPageBounds](IDragEvent.md#getpagebounds)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:66](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IUIEvent.ts#L66)
