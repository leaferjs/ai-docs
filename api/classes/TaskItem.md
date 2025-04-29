# Class: TaskItem

## Implements

- [`ITaskItem`](../interfaces/ITaskItem.md)

## Table of contents

### Constructors

- [constructor](TaskItem.md#constructor)

### Properties

- [id](TaskItem.md#id)
- [parent](TaskItem.md#parent)
- [parallel](TaskItem.md#parallel)
- [time](TaskItem.md#time)
- [isComplete](TaskItem.md#iscomplete)
- [isCancel](TaskItem.md#iscancel)
- [task](TaskItem.md#task)

### Methods

- [run](TaskItem.md#run)
- [complete](TaskItem.md#complete)
- [cancel](TaskItem.md#cancel)

## Constructors

### constructor

• **new TaskItem**(`task?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `task?` | [`IFunction`](../interfaces/IFunction.md) |

#### Defined in

[leafer/packages/task/src/TaskItem.ts:23](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L23)

## Properties

### id

• `Readonly` **id**: `number`

#### Defined in

[leafer/packages/task/src/TaskItem.ts:11](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L11)

___

### parent

• **parent**: [`TaskProcessor`](TaskProcessor.md)

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[parent](../interfaces/ITaskItem.md#parent)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:13](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L13)

___

### parallel

• **parallel**: `boolean` = `true`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[parallel](../interfaces/ITaskItem.md#parallel)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:15](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L15)

___

### time

• **time**: `number` = `1`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[time](../interfaces/ITaskItem.md#time)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:16](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L16)

___

### isComplete

• **isComplete**: `boolean`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[isComplete](../interfaces/ITaskItem.md#iscomplete)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:18](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L18)

___

### isCancel

• **isCancel**: `boolean`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[isCancel](../interfaces/ITaskItem.md#iscancel)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:19](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L19)

___

### task

• `Private` **task**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:21](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L21)

## Methods

### run

▸ **run**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[run](../interfaces/ITaskItem.md#run)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:28](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L28)

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[complete](../interfaces/ITaskItem.md#complete)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:36](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L36)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Implementation of

[ITaskItem](../interfaces/ITaskItem.md).[cancel](../interfaces/ITaskItem.md#cancel)

#### Defined in

[leafer/packages/task/src/TaskItem.ts:42](https://github.com/leaferjs/leafer/blob/27a24ec/packages/task/src/TaskItem.ts#L42)
