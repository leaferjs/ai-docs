# Interface: IRenderer

## Hierarchy

- [`IControl`](IControl.md)

  ↳ **`IRenderer`**

## Implemented by

- [`Renderer`](../classes/Renderer.md)

## Table of contents

### Properties

- [target](IRenderer.md#target)
- [canvas](IRenderer.md#canvas)
- [updateBlocks](IRenderer.md#updateblocks)
- [FPS](IRenderer.md#fps)
- [totalTimes](IRenderer.md#totaltimes)
- [times](IRenderer.md#times)
- [running](IRenderer.md#running)
- [rendering](IRenderer.md#rendering)
- [waitAgain](IRenderer.md#waitagain)
- [changed](IRenderer.md#changed)
- [ignore](IRenderer.md#ignore)
- [config](IRenderer.md#config)

### Methods

- [start](IRenderer.md#start)
- [stop](IRenderer.md#stop)
- [destroy](IRenderer.md#destroy)
- [update](IRenderer.md#update)
- [requestLayout](IRenderer.md#requestlayout)
- [checkRender](IRenderer.md#checkrender)
- [render](IRenderer.md#render)
- [renderAgain](IRenderer.md#renderagain)
- [renderOnce](IRenderer.md#renderonce)
- [partRender](IRenderer.md#partrender)
- [clipRender](IRenderer.md#cliprender)
- [fullRender](IRenderer.md#fullrender)
- [addBlock](IRenderer.md#addblock)
- [mergeBlocks](IRenderer.md#mergeblocks)

## Properties

### target

• **target**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:29](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L29)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:30](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L30)

___

### updateBlocks

• **updateBlocks**: [`IBounds`](IBounds.md)[]

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:31](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L31)

___

### FPS

• **FPS**: `number`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:33](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L33)

___

### totalTimes

• **totalTimes**: `number`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:34](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L34)

___

### times

• **times**: `number`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:35](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L35)

___

### running

• **running**: `boolean`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:37](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L37)

___

### rendering

• **rendering**: `boolean`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:38](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L38)

___

### waitAgain

• **waitAgain**: `boolean`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:40](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L40)

___

### changed

• **changed**: `boolean`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:41](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L41)

___

### ignore

• **ignore**: `boolean`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:42](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L42)

___

### config

• **config**: [`IRendererConfig`](IRendererConfig.md)

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:44](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L44)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/control/IControl.ts#L3)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:4](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/control/IControl.ts#L4)

___

### update

▸ **update**(`change?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `change?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:46](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L46)

___

### requestLayout

▸ **requestLayout**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:48](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L48)

___

### checkRender

▸ **checkRender**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:50](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L50)

___

### render

▸ **render**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:51](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L51)

___

### renderAgain

▸ **renderAgain**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:52](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L52)

___

### renderOnce

▸ **renderOnce**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:53](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L53)

___

### partRender

▸ **partRender**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:54](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L54)

___

### clipRender

▸ **clipRender**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBounds`](IBounds.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:55](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L55)

___

### fullRender

▸ **fullRender**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L56)

___

### addBlock

▸ **addBlock**(`block`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [`IBounds`](IBounds.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:58](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L58)

___

### mergeBlocks

▸ **mergeBlocks**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/renderer/IRenderer.ts:59](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/renderer/IRenderer.ts#L59)
