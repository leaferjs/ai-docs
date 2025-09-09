# Interface: IEffectModule

## Table of contents

### Methods

- [shadow](IEffectModule.md#shadow)
- [innerShadow](IEffectModule.md#innershadow)
- [blur](IEffectModule.md#blur)
- [backgroundBlur](IEffectModule.md#backgroundblur)
- [getShadowSpread](IEffectModule.md#getshadowspread)
- [isTransformShadow](IEffectModule.md#istransformshadow)
- [renderTransformShadow](IEffectModule.md#rendertransformshadow)

## Methods

### shadow

▸ **shadow**(`ui`, `current`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape` | [`ICachedShape`](ICachedShape.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:9](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L9)

___

### innerShadow

▸ **innerShadow**(`ui`, `current`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape` | [`ICachedShape`](ICachedShape.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:10](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L10)

___

### blur

▸ **blur**(`ui`, `current`, `origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `origin` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:11](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L11)

___

### backgroundBlur

▸ **backgroundBlur**(`ui`, `current`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `shape` | [`ICachedShape`](ICachedShape.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:12](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L12)

___

### getShadowSpread

▸ **getShadowSpread**(`ui`, `shadow`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `shadow` | [`ILeafShadowEffect`](ILeafShadowEffect.md)[] |

#### Returns

`number`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:15](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L15)

___

### isTransformShadow

▸ **isTransformShadow**(`shadow`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | [`ILeafShadowEffect`](ILeafShadowEffect.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:16](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L16)

___

### renderTransformShadow

▸ **renderTransformShadow**(`ui`, `current`, `fromCanvas`, `fromWorld`, `shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `current` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromCanvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `fromWorld` | [`IBoundsData`](IBoundsData.md) |
| `shadow` | [`ILeafShadowEffect`](ILeafShadowEffect.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IEffect.ts:17](https://github.com/leaferjs/leafer-ui/blob/60106e52e15189ef407f949c7d78e5668e97d1c6/packages/interface/src/module/IEffect.ts#L17)
