# Interface: IDropEvent

## Hierarchy

- [`IPointerEvent`](IPointerEvent.md)

  ↳ **`IDropEvent`**

## Implemented by

- [`DropEvent`](../classes/DropEvent.md)

## Table of contents

### Properties

- [origin](IDropEvent.md#origin)
- [type](IDropEvent.md#type)
- [target](IDropEvent.md#target)
- [current](IDropEvent.md#current)
- [bubbles](IDropEvent.md#bubbles)
- [phase](IDropEvent.md#phase)
- [isStopDefault](IDropEvent.md#isstopdefault)
- [isStop](IDropEvent.md#isstop)
- [isStopNow](IDropEvent.md#isstopnow)
- [x](IDropEvent.md#x)
- [y](IDropEvent.md#y)
- [altKey](IDropEvent.md#altkey)
- [ctrlKey](IDropEvent.md#ctrlkey)
- [shiftKey](IDropEvent.md#shiftkey)
- [metaKey](IDropEvent.md#metakey)
- [spaceKey](IDropEvent.md#spacekey)
- [left](IDropEvent.md#left)
- [right](IDropEvent.md#right)
- [middle](IDropEvent.md#middle)
- [buttons](IDropEvent.md#buttons)
- [path](IDropEvent.md#path)
- [throughPath](IDropEvent.md#throughpath)
- [width](IDropEvent.md#width)
- [height](IDropEvent.md#height)
- [pointerType](IDropEvent.md#pointertype)
- [multiTouch](IDropEvent.md#multitouch)
- [pressure](IDropEvent.md#pressure)
- [tangentialPressure](IDropEvent.md#tangentialpressure)
- [tiltX](IDropEvent.md#tiltx)
- [tiltY](IDropEvent.md#tilty)
- [twist](IDropEvent.md#twist)
- [isCancel](IDropEvent.md#iscancel)
- [list](IDropEvent.md#list)
- [data](IDropEvent.md#data)

### Methods

- [stopDefault](IDropEvent.md#stopdefault)
- [stopNow](IDropEvent.md#stopnow)
- [stop](IDropEvent.md#stop)
- [isHoldKeys](IDropEvent.md#isholdkeys)
- [getBoxPoint](IDropEvent.md#getboxpoint)
- [getInnerPoint](IDropEvent.md#getinnerpoint)
- [getLocalPoint](IDropEvent.md#getlocalpoint)
- [getPagePoint](IDropEvent.md#getpagepoint)
- [getInner](IDropEvent.md#getinner)
- [getLocal](IDropEvent.md#getlocal)
- [getPage](IDropEvent.md#getpage)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[origin](IPointerEvent.md#origin)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[type](IPointerEvent.md#type)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[target](IPointerEvent.md#target)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[current](IPointerEvent.md#current)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[bubbles](IPointerEvent.md#bubbles)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[phase](IPointerEvent.md#phase)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isStopDefault](IPointerEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isStop](IPointerEvent.md#isstop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isStopNow](IPointerEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L20)

___

### x

• **x**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[x](IPointerEvent.md#x)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:9](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L9)

___

### y

• **y**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[y](IPointerEvent.md#y)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:10](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L10)

___

### altKey

• `Optional` **altKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[altKey](IPointerEvent.md#altkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:12](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L12)

___

### ctrlKey

• `Optional` **ctrlKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[ctrlKey](IPointerEvent.md#ctrlkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:13](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L13)

___

### shiftKey

• `Optional` **shiftKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[shiftKey](IPointerEvent.md#shiftkey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:14](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L14)

___

### metaKey

• `Optional` **metaKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[metaKey](IPointerEvent.md#metakey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:15](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L15)

___

### spaceKey

• `Optional` `Readonly` **spaceKey**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[spaceKey](IPointerEvent.md#spacekey)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:16](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L16)

___

### left

• `Optional` `Readonly` **left**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[left](IPointerEvent.md#left)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:18](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L18)

___

### right

• `Optional` `Readonly` **right**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[right](IPointerEvent.md#right)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:19](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L19)

___

### middle

• `Optional` `Readonly` **middle**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[middle](IPointerEvent.md#middle)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:20](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L20)

___

### buttons

• `Optional` **buttons**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[buttons](IPointerEvent.md#buttons)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:21](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L21)

___

### path

• `Optional` **path**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[path](IPointerEvent.md#path)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:23](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L23)

___

### throughPath

• `Optional` **throughPath**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[throughPath](IPointerEvent.md#throughpath)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:24](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L24)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[width](IPointerEvent.md#width)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:41](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L41)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[height](IPointerEvent.md#height)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:42](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L42)

___

### pointerType

• `Optional` **pointerType**: [`PointerType`](../modules.md#pointertype)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[pointerType](IPointerEvent.md#pointertype)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:43](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L43)

___

### multiTouch

• `Optional` **multiTouch**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[multiTouch](IPointerEvent.md#multitouch)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:44](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L44)

___

### pressure

• `Optional` **pressure**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[pressure](IPointerEvent.md#pressure)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:45](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L45)

___

### tangentialPressure

• `Optional` **tangentialPressure**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[tangentialPressure](IPointerEvent.md#tangentialpressure)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:46](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L46)

___

### tiltX

• `Optional` **tiltX**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[tiltX](IPointerEvent.md#tiltx)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:47](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L47)

___

### tiltY

• `Optional` **tiltY**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[tiltY](IPointerEvent.md#tilty)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:48](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L48)

___

### twist

• `Optional` **twist**: `number`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[twist](IPointerEvent.md#twist)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:49](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L49)

___

### isCancel

• `Optional` **isCancel**: `boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isCancel](IPointerEvent.md#iscancel)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:50](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L50)

___

### list

• **list**: [`ILeafList`](ILeafList.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:72](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L72)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:73](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L73)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[stopDefault](IPointerEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[stopNow](IPointerEvent.md#stopnow)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[stop](IPointerEvent.md#stop)

#### Defined in

[src/leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IEvent.ts#L23)

___

### isHoldKeys

▸ **isHoldKeys**(`shortcutKeys?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortcutKeys?` | [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys) |

#### Returns

`boolean`

#### Inherited from

[IPointerEvent](IPointerEvent.md).[isHoldKeys](IPointerEvent.md#isholdkeys)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:26](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L26)

___

### getBoxPoint

▸ **getBoxPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getBoxPoint](IPointerEvent.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:28](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L28)

___

### getInnerPoint

▸ **getInnerPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getInnerPoint](IPointerEvent.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:29](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L29)

___

### getLocalPoint

▸ **getLocalPoint**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getLocalPoint](IPointerEvent.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:30](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L30)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getPagePoint](IPointerEvent.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:31](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L31)

___

### getInner

▸ **getInner**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getInner](IPointerEvent.md#getinner)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:34](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L34)

___

### getLocal

▸ **getLocal**(`relative?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getLocal](IPointerEvent.md#getlocal)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:35](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L35)

___

### getPage

▸ **getPage**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IPointerEvent](IPointerEvent.md).[getPage](IPointerEvent.md#getpage)

#### Defined in

[src/leafer/packages/interface/src/event/IUIEvent.ts:36](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/event/IUIEvent.ts#L36)
