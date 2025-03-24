# Interface: IWatcher

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`IWatcher`**

## Implemented by

- [`Watcher`](../classes/Watcher.md)

## Table of contents

### Properties

- [target](IWatcher.md#target)
- [totalTimes](IWatcher.md#totaltimes)
- [disabled](IWatcher.md#disabled)
- [running](IWatcher.md#running)
- [changed](IWatcher.md#changed)
- [hasVisible](IWatcher.md#hasvisible)
- [hasAdd](IWatcher.md#hasadd)
- [hasRemove](IWatcher.md#hasremove)
- [childrenChanged](IWatcher.md#childrenchanged)
- [config](IWatcher.md#config)
- [updatedList](IWatcher.md#updatedlist)

### Methods

- [start](IWatcher.md#start)
- [stop](IWatcher.md#stop)
- [destroy](IWatcher.md#destroy)
- [disable](IWatcher.md#disable)
- [update](IWatcher.md#update)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:14](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L14)

___

### totalTimes

• **totalTimes**: `number`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:16](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L16)

___

### disabled

• **disabled**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:18](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L18)

___

### running

• **running**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:19](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L19)

___

### changed

• **changed**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:20](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L20)

___

### hasVisible

• **hasVisible**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:22](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L22)

___

### hasAdd

• **hasAdd**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:23](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L23)

___

### hasRemove

• **hasRemove**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:24](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L24)

___

### childrenChanged

• `Readonly` **childrenChanged**: `boolean`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:25](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L25)

___

### config

• **config**: [`IWatcherConfig`](IWatcherConfig.md)

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:27](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L27)

___

### updatedList

• **updatedList**: [`ILeafList`](ILeafList.md)

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:29](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L29)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/control/IControl.ts#L3)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:4](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/control/IControl.ts#L4)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:31](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L31)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/watcher/IWatcher.ts:33](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/watcher/IWatcher.ts#L33)
