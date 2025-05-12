# Class: ZoomEvent

## Hierarchy

- [`UIEvent`](UIEvent.md)

  ↳ **`ZoomEvent`**

## Implements

- [`IZoomEvent`](../interfaces/IZoomEvent.md)

## Table of contents

### Constructors

- [constructor](ZoomEvent.md#constructor)

### Properties

- [origin](ZoomEvent.md#origin)
- [type](ZoomEvent.md#type)
- [phase](ZoomEvent.md#phase)
- [isStopDefault](ZoomEvent.md#isstopdefault)
- [isStop](ZoomEvent.md#isstop)
- [isStopNow](ZoomEvent.md#isstopnow)
- [x](ZoomEvent.md#x)
- [y](ZoomEvent.md#y)
- [path](ZoomEvent.md#path)
- [throughPath](ZoomEvent.md#throughpath)
- [altKey](ZoomEvent.md#altkey)
- [ctrlKey](ZoomEvent.md#ctrlkey)
- [shiftKey](ZoomEvent.md#shiftkey)
- [metaKey](ZoomEvent.md#metakey)
- [buttons](ZoomEvent.md#buttons)
- [target](ZoomEvent.md#target)
- [current](ZoomEvent.md#current)
- [bubbles](ZoomEvent.md#bubbles)
- [BEFORE\_ZOOM](ZoomEvent.md#before_zoom)
- [START](ZoomEvent.md#start)
- [ZOOM](ZoomEvent.md#zoom)
- [END](ZoomEvent.md#end)
- [scale](ZoomEvent.md#scale)

### Accessors

- [spaceKey](ZoomEvent.md#spacekey)
- [left](ZoomEvent.md#left)
- [right](ZoomEvent.md#right)
- [middle](ZoomEvent.md#middle)

### Methods

- [stopDefault](ZoomEvent.md#stopdefault)
- [stopNow](ZoomEvent.md#stopnow)
- [stop](ZoomEvent.md#stop)
- [getBoxPoint](ZoomEvent.md#getboxpoint)
- [getInnerPoint](ZoomEvent.md#getinnerpoint)
- [getLocalPoint](ZoomEvent.md#getlocalpoint)
- [getPagePoint](ZoomEvent.md#getpagepoint)
- [getInner](ZoomEvent.md#getinner)
- [getLocal](ZoomEvent.md#getlocal)
- [getPage](ZoomEvent.md#getpage)
- [changeName](ZoomEvent.md#changename)

## Constructors

### constructor

• **new ZoomEvent**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Inherited from

[UIEvent](UIEvent.md).[constructor](UIEvent.md#constructor)

#### Defined in

[ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L31)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[origin](../interfaces/IZoomEvent.md#origin)

#### Inherited from

[UIEvent](UIEvent.md).[origin](UIEvent.md#origin)

#### Defined in

[leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[type](../interfaces/IZoomEvent.md#type)

#### Inherited from

[UIEvent](UIEvent.md).[type](UIEvent.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[phase](../interfaces/IZoomEvent.md#phase)

#### Inherited from

[UIEvent](UIEvent.md).[phase](UIEvent.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[isStopDefault](../interfaces/IZoomEvent.md#isstopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[isStopDefault](UIEvent.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[isStop](../interfaces/IZoomEvent.md#isstop)

#### Inherited from

[UIEvent](UIEvent.md).[isStop](UIEvent.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[isStopNow](../interfaces/IZoomEvent.md#isstopnow)

#### Inherited from

[UIEvent](UIEvent.md).[isStopNow](UIEvent.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L18)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[x](../interfaces/IZoomEvent.md#x)

#### Inherited from

[UIEvent](UIEvent.md).[x](UIEvent.md#x)

#### Defined in

[ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[y](../interfaces/IZoomEvent.md#y)

#### Inherited from

[UIEvent](UIEvent.md).[y](UIEvent.md#y)

#### Defined in

[ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[path](../interfaces/IZoomEvent.md#path)

#### Inherited from

[UIEvent](UIEvent.md).[path](UIEvent.md#path)

#### Defined in

[ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[throughPath](../interfaces/IZoomEvent.md#throughpath)

#### Inherited from

[UIEvent](UIEvent.md).[throughPath](UIEvent.md#throughpath)

#### Defined in

[ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[altKey](../interfaces/IZoomEvent.md#altkey)

#### Inherited from

[UIEvent](UIEvent.md).[altKey](UIEvent.md#altkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[ctrlKey](../interfaces/IZoomEvent.md#ctrlkey)

#### Inherited from

[UIEvent](UIEvent.md).[ctrlKey](UIEvent.md#ctrlkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[shiftKey](../interfaces/IZoomEvent.md#shiftkey)

#### Inherited from

[UIEvent](UIEvent.md).[shiftKey](UIEvent.md#shiftkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[metaKey](../interfaces/IZoomEvent.md#metakey)

#### Inherited from

[UIEvent](UIEvent.md).[metaKey](UIEvent.md#metakey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[buttons](../interfaces/IZoomEvent.md#buttons)

#### Inherited from

[UIEvent](UIEvent.md).[buttons](UIEvent.md#buttons)

#### Defined in

[ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[target](../interfaces/IZoomEvent.md#target)

#### Inherited from

[UIEvent](UIEvent.md).[target](UIEvent.md#target)

#### Defined in

[ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[current](../interfaces/IZoomEvent.md#current)

#### Inherited from

[UIEvent](UIEvent.md).[current](UIEvent.md#current)

#### Defined in

[ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[bubbles](../interfaces/IZoomEvent.md#bubbles)

#### Inherited from

[UIEvent](UIEvent.md).[bubbles](UIEvent.md#bubbles)

#### Defined in

[ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L29)

___

### BEFORE\_ZOOM

▪ `Static` **BEFORE\_ZOOM**: `string` = `'zoom.before_zoom'`

#### Defined in

[ui/packages/event/src/ZoomEvent.ts:9](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/ZoomEvent.ts#L9)

___

### START

▪ `Static` **START**: `string` = `'zoom.start'`

#### Defined in

[ui/packages/event/src/ZoomEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/ZoomEvent.ts#L11)

___

### ZOOM

▪ `Static` **ZOOM**: `string` = `'zoom'`

#### Defined in

[ui/packages/event/src/ZoomEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/ZoomEvent.ts#L12)

___

### END

▪ `Static` **END**: `string` = `'zoom.end'`

#### Defined in

[ui/packages/event/src/ZoomEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/ZoomEvent.ts#L13)

___

### scale

• `Readonly` **scale**: `number`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[scale](../interfaces/IZoomEvent.md#scale)

#### Defined in

[ui/packages/event/src/ZoomEvent.ts:15](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/ZoomEvent.ts#L15)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[spaceKey](../interfaces/IZoomEvent.md#spacekey)

#### Inherited from

UIEvent.spaceKey

#### Defined in

[ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[left](../interfaces/IZoomEvent.md#left)

#### Inherited from

UIEvent.left

#### Defined in

[ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[right](../interfaces/IZoomEvent.md#right)

#### Inherited from

UIEvent.right

#### Defined in

[ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[middle](../interfaces/IZoomEvent.md#middle)

#### Inherited from

UIEvent.middle

#### Defined in

[ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[stopDefault](../interfaces/IZoomEvent.md#stopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[stopDefault](UIEvent.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[stopNow](../interfaces/IZoomEvent.md#stopnow)

#### Inherited from

[UIEvent](UIEvent.md).[stopNow](UIEvent.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[stop](../interfaces/IZoomEvent.md#stop)

#### Inherited from

[UIEvent](UIEvent.md).[stop](UIEvent.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/fd13609/packages/event/src/Event.ts#L36)

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

[IZoomEvent](../interfaces/IZoomEvent.md).[getBoxPoint](../interfaces/IZoomEvent.md#getboxpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getBoxPoint](UIEvent.md#getboxpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L36)

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

[IZoomEvent](../interfaces/IZoomEvent.md).[getInnerPoint](../interfaces/IZoomEvent.md#getinnerpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getInnerPoint](UIEvent.md#getinnerpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L40)

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

[IZoomEvent](../interfaces/IZoomEvent.md).[getLocalPoint](../interfaces/IZoomEvent.md#getlocalpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getLocalPoint](UIEvent.md#getlocalpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L44)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[getPagePoint](../interfaces/IZoomEvent.md#getpagepoint)

#### Inherited from

[UIEvent](UIEvent.md).[getPagePoint](UIEvent.md#getpagepoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L48)

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

[IZoomEvent](../interfaces/IZoomEvent.md).[getInner](../interfaces/IZoomEvent.md#getinner)

#### Inherited from

[UIEvent](UIEvent.md).[getInner](UIEvent.md#getinner)

#### Defined in

[ui/packages/event/src/UIEvent.ts:53](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L53)

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

[IZoomEvent](../interfaces/IZoomEvent.md).[getLocal](../interfaces/IZoomEvent.md#getlocal)

#### Inherited from

[UIEvent](UIEvent.md).[getLocal](UIEvent.md#getlocal)

#### Defined in

[ui/packages/event/src/UIEvent.ts:54](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L54)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IZoomEvent](../interfaces/IZoomEvent.md).[getPage](../interfaces/IZoomEvent.md#getpage)

#### Inherited from

[UIEvent](UIEvent.md).[getPage](UIEvent.md#getpage)

#### Defined in

[ui/packages/event/src/UIEvent.ts:55](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L55)

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

[UIEvent](UIEvent.md).[changeName](UIEvent.md#changename)

#### Defined in

[ui/packages/event/src/UIEvent.ts:58](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/event/src/UIEvent.ts#L58)
