# Class: TaskProcessor

## Implements

- [`ITaskProcessor`](../interfaces/ITaskProcessor.md)

## Table of contents

### Constructors

- [constructor](TaskProcessor.md#constructor)

### Properties

- [config](TaskProcessor.md#config)
- [list](TaskProcessor.md#list)
- [parallelList](TaskProcessor.md#parallellist)
- [parallelSuccessNumber](TaskProcessor.md#parallelsuccessnumber)
- [running](TaskProcessor.md#running)
- [isComplete](TaskProcessor.md#iscomplete)
- [timer](TaskProcessor.md#timer)
- [index](TaskProcessor.md#index)
- [delayNumber](TaskProcessor.md#delaynumber)

### Accessors

- [total](TaskProcessor.md#total)
- [finishedIndex](TaskProcessor.md#finishedindex)
- [remain](TaskProcessor.md#remain)
- [percent](TaskProcessor.md#percent)

### Methods

- [add](TaskProcessor.md#add)
- [push](TaskProcessor.md#push)
- [empty](TaskProcessor.md#empty)
- [start](TaskProcessor.md#start)
- [pause](TaskProcessor.md#pause)
- [resume](TaskProcessor.md#resume)
- [skip](TaskProcessor.md#skip)
- [stop](TaskProcessor.md#stop)
- [run](TaskProcessor.md#run)
- [runTask](TaskProcessor.md#runtask)
- [runParallelTasks](TaskProcessor.md#runparalleltasks)
- [runParallelTask](TaskProcessor.md#runparalleltask)
- [nextTask](TaskProcessor.md#nexttask)
- [setParallelList](TaskProcessor.md#setparallellist)
- [fillParallelTask](TaskProcessor.md#fillparalleltask)
- [onComplete](TaskProcessor.md#oncomplete)
- [onTask](TaskProcessor.md#ontask)
- [onParallelError](TaskProcessor.md#onparallelerror)
- [onError](TaskProcessor.md#onerror)
- [destroy](TaskProcessor.md#destroy)

## Constructors

### constructor

• **new TaskProcessor**(`config?`): [`TaskProcessor`](TaskProcessor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`ITaskProcessorConfig`](../interfaces/ITaskProcessorConfig.md) |

#### Returns

[`TaskProcessor`](TaskProcessor.md)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:52](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L52)

## Properties

### config

• **config**: [`ITaskProcessorConfig`](../interfaces/ITaskProcessorConfig.md)

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[config](../interfaces/ITaskProcessor.md#config)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:9](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L9)

___

### list

• `Protected` **list**: [`ITaskItem`](../interfaces/ITaskItem.md)[] = `[]`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:11](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L11)

___

### parallelList

• `Protected` **parallelList**: [`ITaskItem`](../interfaces/ITaskItem.md)[]

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:13](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L13)

___

### parallelSuccessNumber

• `Protected` **parallelSuccessNumber**: `number`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:14](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L14)

___

### running

• **running**: `boolean` = `false`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[running](../interfaces/ITaskProcessor.md#running)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:16](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L16)

___

### isComplete

• **isComplete**: `boolean` = `true`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[isComplete](../interfaces/ITaskProcessor.md#iscomplete)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:17](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L17)

___

### timer

• `Protected` **timer**: `any`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:19](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L19)

___

### index

• **index**: `number` = `0`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[index](../interfaces/ITaskProcessor.md#index)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:23](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L23)

___

### delayNumber

• **delayNumber**: `number` = `0`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:25](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L25)

## Accessors

### total

• `get` **total**(): `number`

#### Returns

`number`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[total](../interfaces/ITaskProcessor.md#total)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:21](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L21)

___

### finishedIndex

• `get` **finishedIndex**(): `number`

#### Returns

`number`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[finishedIndex](../interfaces/ITaskProcessor.md#finishedindex)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:27](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L27)

___

### remain

• `get` **remain**(): `number`

#### Returns

`number`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[remain](../interfaces/ITaskProcessor.md#remain)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:31](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L31)

___

### percent

• `get` **percent**(): `number`

#### Returns

`number`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[percent](../interfaces/ITaskProcessor.md#percent)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:35](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L35)

## Methods

### add

▸ **add**(`taskCallback`, `options?`): [`ITaskItem`](../interfaces/ITaskItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskCallback` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | `number` \| [`ITaskOptions`](../interfaces/ITaskOptions.md) |

#### Returns

[`ITaskItem`](../interfaces/ITaskItem.md)

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[add](../interfaces/ITaskProcessor.md#add)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:59](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L59)

___

### push

▸ **push**(`task`, `start?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`ITaskItem`](../interfaces/ITaskItem.md) |
| `start?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:94](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L94)

___

### empty

▸ **empty**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:101](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L101)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[start](../interfaces/ITaskProcessor.md#start)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:111](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L111)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[pause](../interfaces/ITaskProcessor.md#pause)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:119](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L119)

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[resume](../interfaces/ITaskProcessor.md#resume)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:125](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L125)

___

### skip

▸ **skip**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[skip](../interfaces/ITaskProcessor.md#skip)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:129](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L129)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[stop](../interfaces/ITaskProcessor.md#stop)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:134](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L134)

___

### run

▸ **run**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:143](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L143)

___

### runTask

▸ **runTask**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:159](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L159)

___

### runParallelTasks

▸ **runParallelTasks**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:177](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L177)

___

### runParallelTask

▸ **runParallelTask**(`task`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`ITaskItem`](../interfaces/ITaskItem.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:181](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L181)

___

### nextTask

▸ **nextTask**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:192](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L192)

___

### setParallelList

▸ **setParallelList**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:200](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L200)

___

### fillParallelTask

▸ **fillParallelTask**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:220](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L220)

___

### onComplete

▸ **onComplete**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:258](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L258)

___

### onTask

▸ **onTask**(`task`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`ITaskItem`](../interfaces/ITaskItem.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:263](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L263)

___

### onParallelError

▸ **onParallelError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:268](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L268)

___

### onError

▸ **onError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:279](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L279)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskProcessor](../interfaces/ITaskProcessor.md).[destroy](../interfaces/ITaskProcessor.md#destroy)

#### Defined in

[src/leafer/packages/task/src/TaskProcessor.ts:284](https://github.com/leaferjs/leafer/blob/9496e2973fd92c147ae5dbbf3c11ffcd5991c0f1/packages/task/src/TaskProcessor.ts#L284)
