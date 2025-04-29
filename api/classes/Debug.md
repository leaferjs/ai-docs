# Class: Debug

## Table of contents

### Constructors

- [constructor](Debug.md#constructor)

### Properties

- [enable](Debug.md#enable)
- [filterList](Debug.md#filterlist)
- [excludeList](Debug.md#excludelist)
- [showWarn](Debug.md#showwarn)
- [showRepaint](Debug.md#showrepaint)
- [showBounds](Debug.md#showbounds)
- [name](Debug.md#name)
- [repeatMap](Debug.md#repeatmap)

### Accessors

- [filter](Debug.md#filter)
- [exclude](Debug.md#exclude)

### Methods

- [get](Debug.md#get)
- [drawRepaint](Debug.md#drawrepaint)
- [drawBounds](Debug.md#drawbounds)
- [log](Debug.md#log)
- [tip](Debug.md#tip)
- [warn](Debug.md#warn)
- [repeat](Debug.md#repeat)
- [error](Debug.md#error)

## Constructors

### constructor

• **new Debug**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[leafer/packages/debug/src/Debug.ts:22](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L22)

## Properties

### enable

▪ `Static` **enable**: `boolean`

#### Defined in

[leafer/packages/debug/src/Debug.ts:8](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L8)

___

### filterList

▪ `Static` **filterList**: `string`[] = `[]`

#### Defined in

[leafer/packages/debug/src/Debug.ts:10](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L10)

___

### excludeList

▪ `Static` **excludeList**: `string`[] = `[]`

#### Defined in

[leafer/packages/debug/src/Debug.ts:11](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L11)

___

### showWarn

▪ `Static` **showWarn**: `boolean` = `true`

#### Defined in

[leafer/packages/debug/src/Debug.ts:14](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L14)

___

### showRepaint

▪ `Static` **showRepaint**: `string` \| `boolean`

#### Defined in

[leafer/packages/debug/src/Debug.ts:15](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L15)

___

### showBounds

▪ `Static` **showBounds**: `string` \| `boolean`

#### Defined in

[leafer/packages/debug/src/Debug.ts:16](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L16)

___

### name

• **name**: `string`

#### Defined in

[leafer/packages/debug/src/Debug.ts:18](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L18)

___

### repeatMap

• **repeatMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md) = `{}`

#### Defined in

[leafer/packages/debug/src/Debug.ts:20](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L20)

## Accessors

### filter

• `Static` `set` **filter**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:30](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L30)

___

### exclude

• `Static` `set` **exclude**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:34](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L34)

## Methods

### get

▸ `Static` **get**(`name`): [`Debug`](Debug.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Debug`](Debug.md)

#### Defined in

[leafer/packages/debug/src/Debug.ts:26](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L26)

___

### drawRepaint

▸ `Static` **drawRepaint**(`canvas`, `bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:38](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L38)

___

### drawBounds

▸ `Static` **drawBounds**(`leaf`, `canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:44](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L44)

___

### log

▸ **log**(`...messages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:54](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L54)

___

### tip

▸ **tip**(`...messages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:62](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L62)

___

### warn

▸ **warn**(`...messages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:66](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L66)

___

### repeat

▸ **repeat**(`name`, `...messages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:70](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L70)

___

### error

▸ **error**(`...messages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `unknown`[] |

#### Returns

`void`

#### Defined in

[leafer/packages/debug/src/Debug.ts:77](https://github.com/leaferjs/leafer/blob/27a24ec/packages/debug/src/Debug.ts#L77)
