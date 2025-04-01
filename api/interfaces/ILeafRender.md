# Interface: ILeafRender

## Hierarchy

- **`ILeafRender`**

  ↳ [`ILeaf`](ILeaf.md)

  ↳ [`IBranchRender`](IBranchRender.md)

## Table of contents

### Methods

- [\_\_render](ILeafRender.md#__render)
- [\_\_draw](ILeafRender.md#__draw)
- [\_\_drawFast](ILeafRender.md#__drawfast)
- [\_\_clip](ILeafRender.md#__clip)
- [\_\_renderShape](ILeafRender.md#__rendershape)
- [\_\_updateWorldOpacity](ILeafRender.md#__updateworldopacity)
- [\_\_updateChange](ILeafRender.md#__updatechange)

## Methods

### \_\_render

▸ `Optional` **__render**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:8](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L8)

___

### \_\_draw

▸ `Optional` **__draw**(`canvas`, `options`, `originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |
| `originCanvas?` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:9](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L9)

___

### \_\_drawFast

▸ `Optional` **__drawFast**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:10](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L10)

___

### \_\_clip

▸ `Optional` **__clip**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:12](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L12)

___

### \_\_renderShape

▸ `Optional` **__renderShape**(`canvas`, `options`, `ignoreFill?`, `ignoreStroke?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |
| `ignoreFill?` | `boolean` |
| `ignoreStroke?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:13](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L13)

___

### \_\_updateWorldOpacity

▸ `Optional` **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:15](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L15)

___

### \_\_updateChange

▸ `Optional` **__updateChange**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:16](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafRender.ts#L16)
