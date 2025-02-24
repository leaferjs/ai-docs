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
- [showHitView](Debug.md#showhitview)
- [showBoundsView](Debug.md#showboundsview)
- [name](Debug.md#name)
- [repeatMap](Debug.md#repeatmap)

### Accessors

- [filter](Debug.md#filter)
- [exclude](Debug.md#exclude)

### Methods

- [get](Debug.md#get)
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

[leafer/packages/debug/src/Debug.ts:20](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L20)

## Properties

### enable

▪ `Static` **enable**: `boolean`

#### Defined in

[leafer/packages/debug/src/Debug.ts:5](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L5)

___

### filterList

▪ `Static` **filterList**: `string`[] = `[]`

#### Defined in

[leafer/packages/debug/src/Debug.ts:7](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L7)

___

### excludeList

▪ `Static` **excludeList**: `string`[] = `[]`

#### Defined in

[leafer/packages/debug/src/Debug.ts:8](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L8)

___

### showWarn

▪ `Static` **showWarn**: `boolean` = `true`

#### Defined in

[leafer/packages/debug/src/Debug.ts:11](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L11)

___

### showRepaint

▪ `Static` **showRepaint**: `boolean`

#### Defined in

[leafer/packages/debug/src/Debug.ts:12](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L12)

___

### showHitView

▪ `Static` **showHitView**: `string` \| `boolean` \| `string`[]

#### Defined in

[leafer/packages/debug/src/Debug.ts:13](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L13)

___

### showBoundsView

▪ `Static` **showBoundsView**: `string` \| `boolean` \| `string`[]

#### Defined in

[leafer/packages/debug/src/Debug.ts:14](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L14)

___

### name

• **name**: `string`

#### Defined in

[leafer/packages/debug/src/Debug.ts:16](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L16)

___

### repeatMap

• **repeatMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md) = `{}`

#### Defined in

[leafer/packages/debug/src/Debug.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L18)

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

[leafer/packages/debug/src/Debug.ts:28](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L28)

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

[leafer/packages/debug/src/Debug.ts:32](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L32)

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

[leafer/packages/debug/src/Debug.ts:24](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L24)

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

[leafer/packages/debug/src/Debug.ts:37](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L37)

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

[leafer/packages/debug/src/Debug.ts:45](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L45)

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

[leafer/packages/debug/src/Debug.ts:49](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L49)

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

[leafer/packages/debug/src/Debug.ts:53](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L53)

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

[leafer/packages/debug/src/Debug.ts:60](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/debug/src/Debug.ts#L60)
