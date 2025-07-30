# Class: Dragger

## Table of contents

### Constructors

- [constructor](Dragger.md#constructor)

### Properties

- [interaction](Dragger.md#interaction)
- [moving](Dragger.md#moving)
- [dragging](Dragger.md#dragging)
- [dragData](Dragger.md#dragdata)
- [downData](Dragger.md#downdata)
- [draggableList](Dragger.md#draggablelist)
- [realDraggableList](Dragger.md#realdraggablelist)
- [dragOverPath](Dragger.md#dragoverpath)
- [dragEnterPath](Dragger.md#dragenterpath)
- [dragStartPoints](Dragger.md#dragstartpoints)
- [autoMoveTimer](Dragger.md#automovetimer)
- [canAnimate](Dragger.md#cananimate)
- [canDragOut](Dragger.md#candragout)
- [animateWait](Dragger.md#animatewait)

### Methods

- [setDragData](Dragger.md#setdragdata)
- [getList](Dragger.md#getlist)
- [checkDrag](Dragger.md#checkdrag)
- [dragStart](Dragger.md#dragstart)
- [setDragStartPoints](Dragger.md#setdragstartpoints)
- [getDraggableList](Dragger.md#getdraggablelist)
- [drag](Dragger.md#drag)
- [dragReal](Dragger.md#dragreal)
- [dragOverOrOut](Dragger.md#dragoverorout)
- [dragEnterOrLeave](Dragger.md#dragenterorleave)
- [dragEnd](Dragger.md#dragend)
- [dragEndReal](Dragger.md#dragendreal)
- [swipe](Dragger.md#swipe)
- [drop](Dragger.md#drop)
- [dragReset](Dragger.md#dragreset)
- [checkDragEndAnimate](Dragger.md#checkdragendanimate)
- [animate](Dragger.md#animate)
- [checkDragOut](Dragger.md#checkdragout)
- [autoMoveOnDragOut](Dragger.md#automoveondragout)
- [autoMoveCancel](Dragger.md#automovecancel)
- [destroy](Dragger.md#destroy)

## Constructors

### constructor

• **new Dragger**(`interaction`): [`Dragger`](Dragger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | [`InteractionBase`](InteractionBase.md) |

#### Returns

[`Dragger`](Dragger.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:35](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L35)

## Properties

### interaction

• **interaction**: [`InteractionBase`](InteractionBase.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:15](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L15)

___

### moving

• **moving**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:17](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L17)

___

### dragging

• **dragging**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:18](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L18)

___

### dragData

• **dragData**: [`IDragEvent`](../interfaces/IDragEvent.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:20](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L20)

___

### downData

• **downData**: [`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:21](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L21)

___

### draggableList

• **draggableList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:23](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L23)

___

### realDraggableList

• **realDraggableList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:24](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L24)

___

### dragOverPath

• `Protected` **dragOverPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:25](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L25)

___

### dragEnterPath

• `Protected` **dragEnterPath**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:26](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L26)

___

### dragStartPoints

• **dragStartPoints**: [`IPointDataMap`](../interfaces/IPointDataMap.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:28](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L28)

___

### autoMoveTimer

• **autoMoveTimer**: `any`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:29](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L29)

___

### canAnimate

• **canAnimate**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:31](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L31)

___

### canDragOut

• **canDragOut**: `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:32](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L32)

___

### animateWait

• **animateWait**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:33](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L33)

## Methods

### setDragData

▸ **setDragData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:39](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L39)

___

### getList

▸ **getList**(`realDraggable?`, `hover?`): [`ILeafList`](../interfaces/ILeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `realDraggable?` | `boolean` |
| `hover?` | `boolean` |

#### Returns

[`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:46](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L46)

___

### checkDrag

▸ **checkDrag**(`data`, `canDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `canDrag` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:52](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L52)

___

### dragStart

▸ **dragStart**(`data`, `canDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `canDrag` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:73](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L73)

___

### setDragStartPoints

▸ **setDragStartPoints**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:84](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L84)

___

### getDraggableList

▸ **getDraggableList**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:89](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L89)

___

### drag

▸ **drag**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:100](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L100)

___

### dragReal

▸ **dragReal**(`isDragEnd?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDragEnd?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:118](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L118)

___

### dragOverOrOut

▸ **dragOverOrOut**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:134](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L134)

___

### dragEnterOrLeave

▸ **dragEnterOrLeave**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:148](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L148)

___

### dragEnd

▸ **dragEnd**(`data`, `speed?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `speed?` | `number` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:158](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L158)

___

### dragEndReal

▸ **dragEndReal**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:164](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L164)

___

### swipe

▸ **swipe**(`data`, `downData`, `dragData`, `endDragData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `downData` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `dragData` | [`IDragEvent`](../interfaces/IDragEvent.md) |
| `endDragData` | [`IDragEvent`](../interfaces/IDragEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:195](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L195)

___

### drop

▸ **drop**(`data`, `dropList`, `dragEnterPath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `dropList` | [`ILeafList`](../interfaces/ILeafList.md) |
| `dragEnterPath` | [`ILeafList`](../interfaces/ILeafList.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:203](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L203)

___

### dragReset

▸ **dragReset**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:210](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L210)

___

### checkDragEndAnimate

▸ **checkDragEndAnimate**(`_data`, `_speed?`): `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |
| `_speed?` | `number` |

#### Returns

`number` \| `boolean`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:217](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L217)

___

### animate

▸ **animate**(`_func?`, `_off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_func?` | [`IFunction`](../interfaces/IFunction.md) |
| `_off?` | ``"off"`` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:219](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L219)

___

### checkDragOut

▸ **checkDragOut**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:221](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L221)

___

### autoMoveOnDragOut

▸ **autoMoveOnDragOut**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IPointerEvent`](../interfaces/IPointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:223](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L223)

___

### autoMoveCancel

▸ **autoMoveCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:225](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L225)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interaction/interaction/src/Dragger.ts:229](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interaction/interaction/src/Dragger.ts#L229)
