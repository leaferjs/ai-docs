# Interface: IBranchRender

## Hierarchy

- [`ILeafRender`](ILeafRender.md)

  ↳ **`IBranchRender`**

## Table of contents

### Methods

- [\_\_renderBranch](IBranchRender.md#__renderbranch)
- [\_\_render](IBranchRender.md#__render)
- [\_\_draw](IBranchRender.md#__draw)
- [\_\_drawFast](IBranchRender.md#__drawfast)
- [\_\_clip](IBranchRender.md#__clip)
- [\_\_renderShape](IBranchRender.md#__rendershape)
- [\_\_drawShape](IBranchRender.md#__drawshape)
- [\_\_updateWorldOpacity](IBranchRender.md#__updateworldopacity)
- [\_\_updateChange](IBranchRender.md#__updatechange)

## Methods

### \_\_renderBranch

▸ `Optional` **__renderBranch**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/IBranchRender.ts:9](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/IBranchRender.ts#L9)

___

### \_\_render

▸ `Optional` **__render**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeafRender](ILeafRender.md).[__render](ILeafRender.md#__render)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:8](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L8)

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

#### Inherited from

[ILeafRender](ILeafRender.md).[__draw](ILeafRender.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:9](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L9)

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

#### Inherited from

[ILeafRender](ILeafRender.md).[__drawFast](ILeafRender.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:10](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L10)

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

#### Inherited from

[ILeafRender](ILeafRender.md).[__clip](ILeafRender.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:12](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L12)

___

### \_\_renderShape

▸ `Optional` **__renderShape**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeafRender](ILeafRender.md).[__renderShape](ILeafRender.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:13](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L13)

___

### \_\_drawShape

▸ `Optional` **__drawShape**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeafRender](ILeafRender.md).[__drawShape](ILeafRender.md#__drawshape)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:14](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L14)

___

### \_\_updateWorldOpacity

▸ `Optional` **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafRender](ILeafRender.md).[__updateWorldOpacity](ILeafRender.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:16](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L16)

___

### \_\_updateChange

▸ `Optional` **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[ILeafRender](ILeafRender.md).[__updateChange](ILeafRender.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafRender.ts:17](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/interface/src/display/module/ILeafRender.ts#L17)
