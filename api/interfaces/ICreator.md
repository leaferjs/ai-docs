# Interface: ICreator

## Table of contents

### Methods

- [image](ICreator.md#image)
- [canvas](ICreator.md#canvas)
- [hitCanvas](ICreator.md#hitcanvas)
- [hitCanvasManager](ICreator.md#hitcanvasmanager)
- [watcher](ICreator.md#watcher)
- [layouter](ICreator.md#layouter)
- [renderer](ICreator.md#renderer)
- [selector](ICreator.md#selector)
- [finder](ICreator.md#finder)
- [interaction](ICreator.md#interaction)
- [editor](ICreator.md#editor)

## Methods

### image

▸ `Optional` **image**(`options?`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:129](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L129)

___

### canvas

▸ `Optional` **canvas**(`options?`, `manager?`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](ICanvasManager.md) |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:130](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L130)

___

### hitCanvas

▸ `Optional` **hitCanvas**(`options?`, `manager?`): [`IHitCanvas`](IHitCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](ICanvasManager.md) |

#### Returns

[`IHitCanvas`](IHitCanvas.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:131](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L131)

___

### hitCanvasManager

▸ `Optional` **hitCanvasManager**(): [`IHitCanvasManager`](IHitCanvasManager.md)

#### Returns

[`IHitCanvasManager`](IHitCanvasManager.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:132](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L132)

___

### watcher

▸ `Optional` **watcher**(`target`, `options?`): [`IWatcher`](IWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `options?` | [`IWatcherConfig`](IWatcherConfig.md) |

#### Returns

[`IWatcher`](IWatcher.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:134](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L134)

___

### layouter

▸ `Optional` **layouter**(`target`, `options?`): [`ILayouter`](ILayouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `options?` | [`ILayouterConfig`](ILayouterConfig.md) |

#### Returns

[`ILayouter`](ILayouter.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:135](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L135)

___

### renderer

▸ `Optional` **renderer**(`target`, `canvas`, `options?`): [`IRenderer`](IRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options?` | [`IRendererConfig`](IRendererConfig.md) |

#### Returns

[`IRenderer`](IRenderer.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:136](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L136)

___

### selector

▸ `Optional` **selector**(`target?`, `options?`): [`ISelector`](ISelector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`ILeaf`](ILeaf.md) |
| `options?` | [`ISelectorConfig`](ISelectorConfig.md) |

#### Returns

[`ISelector`](ISelector.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:137](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L137)

___

### finder

▸ `Optional` **finder**(`target?`): [`IFinder`](IFinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IFinder`](IFinder.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:138](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L138)

___

### interaction

▸ `Optional` **interaction**(`target`, `canvas`, `selector`, `options?`): [`IInteraction`](IInteraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `canvas` | [`IInteractionCanvas`](IInteractionCanvas.md) |
| `selector` | [`ISelector`](ISelector.md) |
| `options?` | [`IInteractionConfig`](IInteractionConfig.md) |

#### Returns

[`IInteraction`](IInteraction.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:140](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L140)

___

### editor

▸ `Optional` **editor**(`options?`, `app?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IObject`](IObject.md) |
| `app?` | [`IAppBase`](IAppBase.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:142](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/app/ILeafer.ts#L142)
