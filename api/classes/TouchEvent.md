# Class: TouchEvent

## Hierarchy

- [`UIEvent`](UIEvent.md)

  ↳ **`TouchEvent`**

## Implements

- [`ITouchEvent`](../interfaces/ITouchEvent.md)

## Table of contents

### Constructors

- [constructor](TouchEvent.md#constructor)

### Properties

- [origin](TouchEvent.md#origin)
- [type](TouchEvent.md#type)
- [phase](TouchEvent.md#phase)
- [isStopDefault](TouchEvent.md#isstopdefault)
- [isStop](TouchEvent.md#isstop)
- [isStopNow](TouchEvent.md#isstopnow)
- [x](TouchEvent.md#x)
- [y](TouchEvent.md#y)
- [path](TouchEvent.md#path)
- [throughPath](TouchEvent.md#throughpath)
- [altKey](TouchEvent.md#altkey)
- [ctrlKey](TouchEvent.md#ctrlkey)
- [shiftKey](TouchEvent.md#shiftkey)
- [metaKey](TouchEvent.md#metakey)
- [buttons](TouchEvent.md#buttons)
- [target](TouchEvent.md#target)
- [current](TouchEvent.md#current)
- [bubbles](TouchEvent.md#bubbles)

### Accessors

- [spaceKey](TouchEvent.md#spacekey)
- [left](TouchEvent.md#left)
- [right](TouchEvent.md#right)
- [middle](TouchEvent.md#middle)

### Methods

- [stopDefault](TouchEvent.md#stopdefault)
- [stopNow](TouchEvent.md#stopnow)
- [stop](TouchEvent.md#stop)
- [isHoldKeys](TouchEvent.md#isholdkeys)
- [getBoxPoint](TouchEvent.md#getboxpoint)
- [getInnerPoint](TouchEvent.md#getinnerpoint)
- [getLocalPoint](TouchEvent.md#getlocalpoint)
- [getPagePoint](TouchEvent.md#getpagepoint)
- [getInner](TouchEvent.md#getinner)
- [getLocal](TouchEvent.md#getlocal)
- [getPage](TouchEvent.md#getpage)
- [changeName](TouchEvent.md#changename)

## Constructors

### constructor

• **new TouchEvent**(`params`): [`TouchEvent`](TouchEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

[`TouchEvent`](TouchEvent.md)

#### Inherited from

[UIEvent](UIEvent.md).[constructor](UIEvent.md#constructor)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:31](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L31)

## Properties

### origin

• `Readonly` **origin**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[origin](../interfaces/ITouchEvent.md#origin)

#### Inherited from

[UIEvent](UIEvent.md).[origin](UIEvent.md#origin)

#### Defined in

[src/leafer/packages/event/src/Event.ts:7](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[type](../interfaces/ITouchEvent.md#type)

#### Inherited from

[UIEvent](UIEvent.md).[type](UIEvent.md#type)

#### Defined in

[src/leafer/packages/event/src/Event.ts:9](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L9)

___

### phase

• `Readonly` **phase**: `number`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[phase](../interfaces/ITouchEvent.md#phase)

#### Inherited from

[UIEvent](UIEvent.md).[phase](UIEvent.md#phase)

#### Defined in

[src/leafer/packages/event/src/Event.ts:14](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L14)

___

### isStopDefault

• **isStopDefault**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[isStopDefault](../interfaces/ITouchEvent.md#isstopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[isStopDefault](UIEvent.md#isstopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:16](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L16)

___

### isStop

• **isStop**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[isStop](../interfaces/ITouchEvent.md#isstop)

#### Inherited from

[UIEvent](UIEvent.md).[isStop](UIEvent.md#isstop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:17](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L17)

___

### isStopNow

• **isStopNow**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[isStopNow](../interfaces/ITouchEvent.md#isstopnow)

#### Inherited from

[UIEvent](UIEvent.md).[isStopNow](UIEvent.md#isstopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:18](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L18)

___

### x

• `Readonly` **x**: `number`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[x](../interfaces/ITouchEvent.md#x)

#### Inherited from

[UIEvent](UIEvent.md).[x](UIEvent.md#x)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:10](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L10)

___

### y

• `Readonly` **y**: `number`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[y](../interfaces/ITouchEvent.md#y)

#### Inherited from

[UIEvent](UIEvent.md).[y](UIEvent.md#y)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:11](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L11)

___

### path

• `Readonly` **path**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[path](../interfaces/ITouchEvent.md#path)

#### Inherited from

[UIEvent](UIEvent.md).[path](UIEvent.md#path)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:13](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L13)

___

### throughPath

• `Optional` `Readonly` **throughPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[throughPath](../interfaces/ITouchEvent.md#throughpath)

#### Inherited from

[UIEvent](UIEvent.md).[throughPath](UIEvent.md#throughpath)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:14](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L14)

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[altKey](../interfaces/ITouchEvent.md#altkey)

#### Inherited from

[UIEvent](UIEvent.md).[altKey](UIEvent.md#altkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:16](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L16)

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[ctrlKey](../interfaces/ITouchEvent.md#ctrlkey)

#### Inherited from

[UIEvent](UIEvent.md).[ctrlKey](UIEvent.md#ctrlkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:17](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L17)

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[shiftKey](../interfaces/ITouchEvent.md#shiftkey)

#### Inherited from

[UIEvent](UIEvent.md).[shiftKey](UIEvent.md#shiftkey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:18](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L18)

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[metaKey](../interfaces/ITouchEvent.md#metakey)

#### Inherited from

[UIEvent](UIEvent.md).[metaKey](UIEvent.md#metakey)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:19](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L19)

___

### buttons

• `Readonly` **buttons**: `number`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[buttons](../interfaces/ITouchEvent.md#buttons)

#### Inherited from

[UIEvent](UIEvent.md).[buttons](UIEvent.md#buttons)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:25](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L25)

___

### target

• `Readonly` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[target](../interfaces/ITouchEvent.md#target)

#### Inherited from

[UIEvent](UIEvent.md).[target](UIEvent.md#target)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:27](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L27)

___

### current

• `Readonly` **current**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[current](../interfaces/ITouchEvent.md#current)

#### Inherited from

[UIEvent](UIEvent.md).[current](UIEvent.md#current)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:28](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L28)

___

### bubbles

• `Readonly` **bubbles**: `boolean` = `true`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[bubbles](../interfaces/ITouchEvent.md#bubbles)

#### Inherited from

[UIEvent](UIEvent.md).[bubbles](UIEvent.md#bubbles)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:29](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L29)

## Accessors

### spaceKey

• `get` **spaceKey**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[spaceKey](../interfaces/ITouchEvent.md#spacekey)

#### Inherited from

UIEvent.spaceKey

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:20](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L20)

___

### left

• `get` **left**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[left](../interfaces/ITouchEvent.md#left)

#### Inherited from

UIEvent.left

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:22](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L22)

___

### right

• `get` **right**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[right](../interfaces/ITouchEvent.md#right)

#### Inherited from

UIEvent.right

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:23](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L23)

___

### middle

• `get` **middle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[middle](../interfaces/ITouchEvent.md#middle)

#### Inherited from

UIEvent.middle

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:24](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L24)

## Methods

### stopDefault

▸ **stopDefault**(): `void`

#### Returns

`void`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[stopDefault](../interfaces/ITouchEvent.md#stopdefault)

#### Inherited from

[UIEvent](UIEvent.md).[stopDefault](UIEvent.md#stopdefault)

#### Defined in

[src/leafer/packages/event/src/Event.ts:25](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L25)

___

### stopNow

▸ **stopNow**(): `void`

#### Returns

`void`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[stopNow](../interfaces/ITouchEvent.md#stopnow)

#### Inherited from

[UIEvent](UIEvent.md).[stopNow](UIEvent.md#stopnow)

#### Defined in

[src/leafer/packages/event/src/Event.ts:30](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L30)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[stop](../interfaces/ITouchEvent.md#stop)

#### Inherited from

[UIEvent](UIEvent.md).[stop](UIEvent.md#stop)

#### Defined in

[src/leafer/packages/event/src/Event.ts:36](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/event/src/Event.ts#L36)

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

[ITouchEvent](../interfaces/ITouchEvent.md).[isHoldKeys](../interfaces/ITouchEvent.md#isholdkeys)

#### Inherited from

[UIEvent](UIEvent.md).[isHoldKeys](UIEvent.md#isholdkeys)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:37](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L37)

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

[ITouchEvent](../interfaces/ITouchEvent.md).[getBoxPoint](../interfaces/ITouchEvent.md#getboxpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getBoxPoint](UIEvent.md#getboxpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:41](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L41)

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

[ITouchEvent](../interfaces/ITouchEvent.md).[getInnerPoint](../interfaces/ITouchEvent.md#getinnerpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getInnerPoint](UIEvent.md#getinnerpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:45](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L45)

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

[ITouchEvent](../interfaces/ITouchEvent.md).[getLocalPoint](../interfaces/ITouchEvent.md#getlocalpoint)

#### Inherited from

[UIEvent](UIEvent.md).[getLocalPoint](UIEvent.md#getlocalpoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:49](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L49)

___

### getPagePoint

▸ **getPagePoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[getPagePoint](../interfaces/ITouchEvent.md#getpagepoint)

#### Inherited from

[UIEvent](UIEvent.md).[getPagePoint](UIEvent.md#getpagepoint)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:53](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L53)

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

[ITouchEvent](../interfaces/ITouchEvent.md).[getInner](../interfaces/ITouchEvent.md#getinner)

#### Inherited from

[UIEvent](UIEvent.md).[getInner](UIEvent.md#getinner)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:58](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L58)

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

[ITouchEvent](../interfaces/ITouchEvent.md).[getLocal](../interfaces/ITouchEvent.md#getlocal)

#### Inherited from

[UIEvent](UIEvent.md).[getLocal](UIEvent.md#getlocal)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:59](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L59)

___

### getPage

▸ **getPage**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ITouchEvent](../interfaces/ITouchEvent.md).[getPage](../interfaces/ITouchEvent.md#getpage)

#### Inherited from

[UIEvent](UIEvent.md).[getPage](UIEvent.md#getpage)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:60](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L60)

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

[UIEvent](UIEvent.md).[changeName](UIEvent.md#changename)

#### Defined in

[src/ui/packages/event/src/UIEvent.ts:63](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/event/src/UIEvent.ts#L63)
