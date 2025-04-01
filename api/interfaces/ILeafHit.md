# Interface: ILeafHit

## Hierarchy

- **`ILeafHit`**

  ↳ [`ILeaf`](ILeaf.md)

## Table of contents

### Methods

- [\_\_hitWorld](ILeafHit.md#__hitworld)
- [\_\_hit](ILeafHit.md#__hit)
- [\_\_hitFill](ILeafHit.md#__hitfill)
- [\_\_hitStroke](ILeafHit.md#__hitstroke)
- [\_\_hitPixel](ILeafHit.md#__hitpixel)
- [\_\_drawHitPath](ILeafHit.md#__drawhitpath)
- [\_\_updateHitCanvas](ILeafHit.md#__updatehitcanvas)

## Methods

### \_\_hitWorld

▸ `Optional` **__hitWorld**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:8](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L8)

___

### \_\_hit

▸ `Optional` **__hit**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:9](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L9)

___

### \_\_hitFill

▸ `Optional` **__hitFill**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:10](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L10)

___

### \_\_hitStroke

▸ `Optional` **__hitStroke**(`inner`, `strokeWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |
| `strokeWidth` | `number` |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:11](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L11)

___

### \_\_hitPixel

▸ **__hitPixel**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:12](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L12)

___

### \_\_drawHitPath

▸ `Optional` **__drawHitPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:13](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L13)

___

### \_\_updateHitCanvas

▸ `Optional` **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/module/ILeafHit.ts:14](https://github.com/leaferjs/leafer/blob/8d161c2/packages/interface/src/display/module/ILeafHit.ts#L14)
