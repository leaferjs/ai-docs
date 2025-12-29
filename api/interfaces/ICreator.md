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

▸ **image**(`options?`): [`ILeaferImage`](ILeaferImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILeaferImageConfig`](ILeaferImageConfig.md) |

#### Returns

[`ILeaferImage`](ILeaferImage.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:134](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L134)

___

### canvas

▸ **canvas**(`options?`, `manager?`): [`ILeaferCanvas`](ILeaferCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](ICanvasManager.md) |

#### Returns

[`ILeaferCanvas`](ILeaferCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:135](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L135)

___

### hitCanvas

▸ **hitCanvas**(`options?`, `manager?`): [`IHitCanvas`](IHitCanvas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md) |
| `manager?` | [`ICanvasManager`](ICanvasManager.md) |

#### Returns

[`IHitCanvas`](IHitCanvas.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:136](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L136)

___

### hitCanvasManager

▸ **hitCanvasManager**(): [`IHitCanvasManager`](IHitCanvasManager.md)

#### Returns

[`IHitCanvasManager`](IHitCanvasManager.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:137](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L137)

___

### watcher

▸ **watcher**(`target`, `options?`): [`IWatcher`](IWatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `options?` | [`IWatcherConfig`](IWatcherConfig.md) |

#### Returns

[`IWatcher`](IWatcher.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:139](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L139)

___

### layouter

▸ **layouter**(`target`, `options?`): [`ILayouter`](ILayouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `options?` | [`ILayouterConfig`](ILayouterConfig.md) |

#### Returns

[`ILayouter`](ILayouter.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:140](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L140)

___

### renderer

▸ **renderer**(`target`, `canvas`, `options?`): [`IRenderer`](IRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options?` | [`IRendererConfig`](IRendererConfig.md) |

#### Returns

[`IRenderer`](IRenderer.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:141](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L141)

___

### selector

▸ **selector**(`target?`, `options?`): [`ISelector`](ISelector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`ILeaf`](ILeaf.md) |
| `options?` | [`ISelectorConfig`](ISelectorConfig.md) |

#### Returns

[`ISelector`](ISelector.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:142](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L142)

___

### finder

▸ **finder**(`target?`): [`IFinder`](IFinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`ILeaf`](ILeaf.md) |

#### Returns

[`IFinder`](IFinder.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:143](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L143)

___

### interaction

▸ **interaction**(`target`, `canvas`, `selector`, `options?`): [`IInteraction`](IInteraction.md)

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

[src/leafer/packages/interface/src/app/ILeafer.ts:145](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L145)

___

### editor

▸ **editor**(`options?`, `app?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IObject`](IObject.md) |
| `app?` | [`IAppBase`](IAppBase.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:147](https://github.com/leaferjs/leafer/blob/947cdf4c0c2cf45db46a9069fbd714fc504c8c68/packages/interface/src/app/ILeafer.ts#L147)
