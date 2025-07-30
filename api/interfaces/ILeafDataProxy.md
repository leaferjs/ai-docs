# Interface: ILeafDataProxy

## Hierarchy

- **`ILeafDataProxy`**

  ↳ [`ILeaf`](ILeaf.md)

## Table of contents

### Methods

- [\_\_setAttr](ILeafDataProxy.md#__setattr)
- [\_\_getAttr](ILeafDataProxy.md#__getattr)
- [\_\_realSetAttr](ILeafDataProxy.md#__realsetattr)
- [setProxyAttr](ILeafDataProxy.md#setproxyattr)
- [getProxyAttr](ILeafDataProxy.md#getproxyattr)

## Methods

### \_\_setAttr

▸ **__setAttr**(`name`, `newValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:7](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/display/module/ILeafDataProxy.ts#L7)

___

### \_\_getAttr

▸ **__getAttr**(`name`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:8](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/display/module/ILeafDataProxy.ts#L8)

___

### \_\_realSetAttr

▸ **__realSetAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### setProxyAttr

▸ **setProxyAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### getProxyAttr

▸ **getProxyAttr**(`name`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:11](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/interface/src/display/module/ILeafDataProxy.ts#L11)
