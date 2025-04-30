# Interface: IPlugin

## Hierarchy

- [`IObject`](IObject.md)

  ↳ **`IPlugin`**

## Table of contents

### Properties

- [name](IPlugin.md#name)
- [importVersion](IPlugin.md#importversion)
- [import](IPlugin.md#import)

### Methods

- [run](IPlugin.md#run)
- [onLeafer](IPlugin.md#onleafer)

## Properties

### name

• `Optional` **name**: `string`

#### Defined in

[leafer/packages/interface/src/plugin/IPlugin.ts:5](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/plugin/IPlugin.ts#L5)

___

### importVersion

• **importVersion**: `string`

#### Defined in

[leafer/packages/interface/src/plugin/IPlugin.ts:6](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/plugin/IPlugin.ts#L6)

___

### import

• **import**: `string`[]

#### Defined in

[leafer/packages/interface/src/plugin/IPlugin.ts:7](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/plugin/IPlugin.ts#L7)

## Methods

### run

▸ **run**(`LeaferUI`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `LeaferUI` | [`IObject`](IObject.md) |
| `config` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/plugin/IPlugin.ts:8](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/plugin/IPlugin.ts#L8)

___

### onLeafer

▸ `Optional` **onLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](ILeaferBase.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/plugin/IPlugin.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/interface/src/plugin/IPlugin.ts#L9)
