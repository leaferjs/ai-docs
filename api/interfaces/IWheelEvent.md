# Interface: IWheelEvent

## Hierarchy

- [`IUIEvent`](IUIEvent.md)

  ↳ **`IWheelEvent`**

## Table of contents

### Properties

- [origin](IWheelEvent.md#origin)
- [type](IWheelEvent.md#type)
- [target](IWheelEvent.md#target)
- [current](IWheelEvent.md#current)
- [bubbles](IWheelEvent.md#bubbles)
- [phase](IWheelEvent.md#phase)
- [isStopDefault](IWheelEvent.md#isstopdefault)
- [isStop](IWheelEvent.md#isstop)
- [isStopNow](IWheelEvent.md#isstopnow)
- [x](IWheelEvent.md#x)
- [y](IWheelEvent.md#y)
- [altKey](IWheelEvent.md#altkey)
- [ctrlKey](IWheelEvent.md#ctrlkey)
- [shiftKey](IWheelEvent.md#shiftkey)
- [metaKey](IWheelEvent.md#metakey)
- [spaceKey](IWheelEvent.md#spacekey)
- [left](IWheelEvent.md#left)
- [right](IWheelEvent.md#right)
- [middle](IWheelEvent.md#middle)
- [buttons](IWheelEvent.md#buttons)
- [path](IWheelEvent.md#path)
- [throughPath](IWheelEvent.md#throughpath)
- [deltaX](IWheelEvent.md#deltax)
- [deltaY](IWheelEvent.md#deltay)

### Methods

- [stopDefault](IWheelEvent.md#stopdefault)
- [stopNow](IWheelEvent.md#stopnow)
- [stop](IWheelEvent.md#stop)
- [getBoxPoint](IWheelEvent.md#getboxpoint)
- [getInnerPoint](IWheelEvent.md#getinnerpoint)
- [getLocalPoint](IWheelEvent.md#getlocalpoint)
- [getPagePoint](IWheelEvent.md#getpagepoint)
- [getInner](IWheelEvent.md#getinner)
- [getLocal](IWheelEvent.md#getlocal)
- [getPage](IWheelEvent.md#getpage)

## Properties

### origin

• `Optional` **origin**: [`IObject`](IObject.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[origin](IUIEvent.md#origin)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L9)

___

### type

• `Optional` **type**: `string`

#### Inherited from

[IUIEvent](IUIEvent.md).[type](IUIEvent.md#type)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:11](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L11)

___

### target

• `Optional` **target**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[target](IUIEvent.md#target)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:12](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L12)

___

### current

• `Optional` **current**: [`IEventTarget`](IEventTarget.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[current](IUIEvent.md#current)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:13](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L13)

___

### bubbles

• `Optional` **bubbles**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[bubbles](IUIEvent.md#bubbles)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:15](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L15)

___

### phase

• `Optional` **phase**: `number`

#### Inherited from

[IUIEvent](IUIEvent.md).[phase](IUIEvent.md#phase)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L16)

___

### isStopDefault

• `Optional` **isStopDefault**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[isStopDefault](IUIEvent.md#isstopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L18)

___

### isStop

• `Optional` **isStop**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[isStop](IUIEvent.md#isstop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:19](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L19)

___

### isStopNow

• `Optional` **isStopNow**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[isStopNow](IUIEvent.md#isstopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:20](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L20)

___

### x

• **x**: `number`

#### Inherited from

[IUIEvent](IUIEvent.md).[x](IUIEvent.md#x)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L9)

___

### y

• **y**: `number`

#### Inherited from

[IUIEvent](IUIEvent.md).[y](IUIEvent.md#y)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:10](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L10)

___

### altKey

• `Optional` **altKey**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[altKey](IUIEvent.md#altkey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:12](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L12)

___

### ctrlKey

• `Optional` **ctrlKey**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[ctrlKey](IUIEvent.md#ctrlkey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:13](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L13)

___

### shiftKey

• `Optional` **shiftKey**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[shiftKey](IUIEvent.md#shiftkey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:14](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L14)

___

### metaKey

• `Optional` **metaKey**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[metaKey](IUIEvent.md#metakey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:15](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L15)

___

### spaceKey

• `Optional` `Readonly` **spaceKey**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[spaceKey](IUIEvent.md#spacekey)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:16](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L16)

___

### left

• `Optional` `Readonly` **left**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[left](IUIEvent.md#left)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:18](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L18)

___

### right

• `Optional` `Readonly` **right**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[right](IUIEvent.md#right)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:19](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L19)

___

### middle

• `Optional` `Readonly` **middle**: `boolean`

#### Inherited from

[IUIEvent](IUIEvent.md).[middle](IUIEvent.md#middle)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:20](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L20)

___

### buttons

• `Optional` **buttons**: `number`

#### Inherited from

[IUIEvent](IUIEvent.md).[buttons](IUIEvent.md#buttons)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:21](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L21)

___

### path

• `Optional` **path**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[path](IUIEvent.md#path)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:23](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L23)

___

### throughPath

• `Optional` **throughPath**: [`ILeafList`](ILeafList.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[throughPath](IUIEvent.md#throughpath)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:24](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L24)

___

### deltaX

• **deltaX**: `number`

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:87](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L87)

___

### deltaY

• **deltaY**: `number`

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:88](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L88)

## Methods

### stopDefault

▸ `Optional` **stopDefault**(): `void`

#### Returns

`void`

#### Inherited from

[IUIEvent](IUIEvent.md).[stopDefault](IUIEvent.md#stopdefault)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:21](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L21)

___

### stopNow

▸ `Optional` **stopNow**(): `void`

#### Returns

`void`

#### Inherited from

[IUIEvent](IUIEvent.md).[stopNow](IUIEvent.md#stopnow)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:22](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L22)

___

### stop

▸ `Optional` **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IUIEvent](IUIEvent.md).[stop](IUIEvent.md#stop)

#### Defined in

[leafer/packages/interface/src/event/IEvent.ts:23](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IEvent.ts#L23)

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

[IUIEvent](IUIEvent.md).[getBoxPoint](IUIEvent.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:26](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L26)

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

[IUIEvent](IUIEvent.md).[getInnerPoint](IUIEvent.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:27](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L27)

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

[IUIEvent](IUIEvent.md).[getLocalPoint](IUIEvent.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:28](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L28)

___

### getPagePoint

▸ `Optional` **getPagePoint**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[getPagePoint](IUIEvent.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:29](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L29)

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

[IUIEvent](IUIEvent.md).[getInner](IUIEvent.md#getinner)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:32](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L32)

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

[IUIEvent](IUIEvent.md).[getLocal](IUIEvent.md#getlocal)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:33](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L33)

___

### getPage

▸ `Optional` **getPage**(): [`IPointData`](IPointData.md)

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IUIEvent](IUIEvent.md).[getPage](IUIEvent.md#getpage)

#### Defined in

[leafer/packages/interface/src/event/IUIEvent.ts:34](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/event/IUIEvent.ts#L34)
