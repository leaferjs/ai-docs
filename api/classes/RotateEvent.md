# Class: RotateEvent

## Hierarchy

- [`UIEvent`](UIEvent.md)

  ↳ **`RotateEvent`**

## Implements

- [`IRotateEvent`](../interfaces/IRotateEvent.md)

## Table of contents

### Constructors

- [constructor](RotateEvent.md#constructor)

### Properties

- [origin](RotateEvent.md#origin)
- [type](RotateEvent.md#type)
- [phase](RotateEvent.md#phase)
- [isStopDefault](RotateEvent.md#isstopdefault)
- [isStop](RotateEvent.md#isstop)
- [isStopNow](RotateEvent.md#isstopnow)
- [BEFORE\_ROTATE](RotateEvent.md#before_rotate)
- [START](RotateEvent.md#start)
- [ROTATE](RotateEvent.md#rotate)
- [END](RotateEvent.md#end)
- [rotation](RotateEvent.md#rotation)
- [x](RotateEvent.md#x)
- [y](RotateEvent.md#y)
- [path](RotateEvent.md#path)
- [throughPath](RotateEvent.md#throughpath)
- [altKey](RotateEvent.md#altkey)
- [ctrlKey](RotateEvent.md#ctrlkey)
- [shiftKey](RotateEvent.md#shiftkey)
- [metaKey](RotateEvent.md#metakey)
- [buttons](RotateEvent.md#buttons)
- [target](RotateEvent.md#target)
- [current](RotateEvent.md#current)
- [bubbles](RotateEvent.md#bubbles)

### Accessors

- [spaceKey](RotateEvent.md#spacekey)
- [left](RotateEvent.md#left)
- [right](RotateEvent.md#right)
- [middle](RotateEvent.md#middle)

### Methods

- [stopDefault](RotateEvent.md#stopdefault)
- [stopNow](RotateEvent.md#stopnow)
- [stop](RotateEvent.md#stop)
- [getBoxPoint](RotateEvent.md#getboxpoint)
- [getInnerPoint](RotateEvent.md#getinnerpoint)
- [getLocalPoint](RotateEvent.md#getlocalpoint)
- [getPagePoint](RotateEvent.md#getpagepoint)
- [getInner](RotateEvent.md#getinner)
- [getLocal](RotateEvent.md#getlocal)
- [getPage](RotateEvent.md#getpage)
- [changeName](RotateEvent.md#changename)

## Constructors

### constructor

• **new RotateEvent**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Inherited from

[UIEvent](UIEvent.md).[constructor](UIEvent.md#constructor)

#### Defined in

[ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L31)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[origin](../interfaces/IRotateEvent.md#origin)

#### Inherited from

[UIEvent](UIEvent.md).[origin](UIEvent.md#origin)

#### Defined in

[leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[type](../interfaces/IRotateEvent.md#type)

#### Inherited from

[UIEvent](UIEvent.md).[type](UIEvent.md#type)

#### Defined in

[leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[phase](../interfaces/IRotateEvent.md#phase)

#### Inherited from

[UIEvent](UIEvent.md).[phase](UIEvent.md#phase)

#### Defined in

[leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[isStopDefault](../interfaces/IRotateEvent.md#isstopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[isStopDefault](UIEvent.md#isstopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[isStop](../interfaces/IRotateEvent.md#isstop)

#### Inherited from

[UIEvent](UIEvent.md).[isStop](UIEvent.md#isstop)

#### Defined in

[leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[isStopNow](../interfaces/IRotateEvent.md#isstopnow)

#### Inherited from

[UIEvent](UIEvent.md).[isStopNow](UIEvent.md#isstopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L18)

___

### BEFORE\_ROTATE

▪ `Static` **BEFORE\_ROTATE**: `string` = `'rotate.before_rotate'`

#### Defined in

[ui/packages/event/src/RotateEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/RotateEvent.ts#L10)

___

### START

▪ `Static` **START**: `string` = `'rotate.start'`

#### Defined in

[ui/packages/event/src/RotateEvent.ts:12](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/RotateEvent.ts#L12)

___

### ROTATE

▪ `Static` **ROTATE**: `string` = `'rotate'`

#### Defined in

[ui/packages/event/src/RotateEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/RotateEvent.ts#L13)

___

### END

▪ `Static` **END**: `string` = `'rotate.end'`

#### Defined in

[ui/packages/event/src/RotateEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/RotateEvent.ts#L14)

___

### rotation

• `Readonly` **rotation**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[rotation](../interfaces/IRotateEvent.md#rotation)

#### Defined in

[ui/packages/event/src/RotateEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/RotateEvent.ts#L16)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[x](../interfaces/IRotateEvent.md#x)

#### Inherited from

[UIEvent](UIEvent.md).[x](UIEvent.md#x)

#### Defined in

[ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[y](../interfaces/IRotateEvent.md#y)

#### Inherited from

[UIEvent](UIEvent.md).[y](UIEvent.md#y)

#### Defined in

[ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[path](../interfaces/IRotateEvent.md#path)

#### Inherited from

[UIEvent](UIEvent.md).[path](UIEvent.md#path)

#### Defined in

[ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[throughPath](../interfaces/IRotateEvent.md#throughpath)

#### Inherited from

[UIEvent](UIEvent.md).[throughPath](UIEvent.md#throughpath)

#### Defined in

[ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[altKey](../interfaces/IRotateEvent.md#altkey)

#### Inherited from

[UIEvent](UIEvent.md).[altKey](UIEvent.md#altkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[ctrlKey](../interfaces/IRotateEvent.md#ctrlkey)

#### Inherited from

[UIEvent](UIEvent.md).[ctrlKey](UIEvent.md#ctrlkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[shiftKey](../interfaces/IRotateEvent.md#shiftkey)

#### Inherited from

[UIEvent](UIEvent.md).[shiftKey](UIEvent.md#shiftkey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[metaKey](../interfaces/IRotateEvent.md#metakey)

#### Inherited from

[UIEvent](UIEvent.md).[metaKey](UIEvent.md#metakey)

#### Defined in

[ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[buttons](../interfaces/IRotateEvent.md#buttons)

#### Inherited from

[UIEvent](UIEvent.md).[buttons](UIEvent.md#buttons)

#### Defined in

[ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[target](../interfaces/IRotateEvent.md#target)

#### Inherited from

[UIEvent](UIEvent.md).[target](UIEvent.md#target)

#### Defined in

[ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[current](../interfaces/IRotateEvent.md#current)

#### Inherited from

[UIEvent](UIEvent.md).[current](UIEvent.md#current)

#### Defined in

[ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[bubbles](../interfaces/IRotateEvent.md#bubbles)

#### Inherited from

[UIEvent](UIEvent.md).[bubbles](UIEvent.md#bubbles)

#### Defined in

[ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L29)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[spaceKey](../interfaces/IRotateEvent.md#spacekey)

#### Inherited from

UIEvent.spaceKey

#### Defined in

[ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[left](../interfaces/IRotateEvent.md#left)

#### Inherited from

UIEvent.left

#### Defined in

[ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[right](../interfaces/IRotateEvent.md#right)

#### Inherited from

UIEvent.right

#### Defined in

[ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[middle](../interfaces/IRotateEvent.md#middle)

#### Inherited from

UIEvent.middle

#### Defined in

[ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[stopDefault](../interfaces/IRotateEvent.md#stopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[stopDefault](UIEvent.md#stopdefault)

#### Defined in

[leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[stopNow](../interfaces/IRotateEvent.md#stopnow)

#### Inherited from

[UIEvent](UIEvent.md).[stopNow](UIEvent.md#stopnow)

#### Defined in

[leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[stop](../interfaces/IRotateEvent.md#stop)

#### Inherited from

[UIEvent](UIEvent.md).[stop](UIEvent.md#stop)

#### Defined in

[leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Event.ts#L36)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getBoxPoint](../interfaces/IRotateEvent.md#getboxpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getBoxPoint](UIEvent.md#getboxpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:36](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L36)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getInnerPoint](../interfaces/IRotateEvent.md#getinnerpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getInnerPoint](UIEvent.md#getinnerpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:40](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L40)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getLocalPoint](../interfaces/IRotateEvent.md#getlocalpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getLocalPoint](UIEvent.md#getlocalpoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:44](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L44)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[getPagePoint](../interfaces/IRotateEvent.md#getpagepoint)

#### Inherited from

[UIEvent](UIEvent.md).[getPagePoint](UIEvent.md#getpagepoint)

#### Defined in

[ui/packages/event/src/UIEvent.ts:48](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L48)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getInner](../interfaces/IRotateEvent.md#getinner)

#### Inherited from

[UIEvent](UIEvent.md).[getInner](UIEvent.md#getinner)

#### Defined in

[ui/packages/event/src/UIEvent.ts:53](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L53)

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

[IRotateEvent](../interfaces/IRotateEvent.md).[getLocal](../interfaces/IRotateEvent.md#getlocal)

#### Inherited from

[UIEvent](UIEvent.md).[getLocal](UIEvent.md#getlocal)

#### Defined in

[ui/packages/event/src/UIEvent.ts:54](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L54)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IRotateEvent](../interfaces/IRotateEvent.md).[getPage](../interfaces/IRotateEvent.md#getpage)

#### Inherited from

[UIEvent](UIEvent.md).[getPage](UIEvent.md#getpage)

#### Defined in

[ui/packages/event/src/UIEvent.ts:55](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L55)

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

[ui/packages/event/src/UIEvent.ts:58](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/event/src/UIEvent.ts#L58)
