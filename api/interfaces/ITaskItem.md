# Interface: ITaskItem

## Implemented by

- [`TaskItem`](../classes/TaskItem.md)

## Table of contents

### Properties

- [parent](ITaskItem.md#parent)
- [parallel](ITaskItem.md#parallel)
- [isComplete](ITaskItem.md#iscomplete)
- [isCancel](ITaskItem.md#iscancel)
- [time](ITaskItem.md#time)

### Methods

- [run](ITaskItem.md#run)
- [complete](ITaskItem.md#complete)
- [cancel](ITaskItem.md#cancel)

## Properties

### parent

• **parent**: [`ITaskProcessor`](ITaskProcessor.md)

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:29](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L29)

___

### parallel

• **parallel**: `boolean`

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:30](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L30)

___

### isComplete

• **isComplete**: `boolean`

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:31](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L31)

___

### isCancel

• **isCancel**: `boolean`

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:32](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L32)

___

### time

• **time**: `number`

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:33](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L33)

## Methods

### run

▸ **run**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:34](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L34)

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:35](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L35)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/task/ITaskProcessor.ts:36](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/task/ITaskProcessor.ts#L36)
