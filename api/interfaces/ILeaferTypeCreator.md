# Interface: ILeaferTypeCreator

## Table of contents

### Properties

- [list](ILeaferTypeCreator.md#list)

### Methods

- [register](ILeaferTypeCreator.md#register)
- [run](ILeaferTypeCreator.md#run)

## Properties

### list

• **list**: [`ILeaferTypeList`](ILeaferTypeList.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:120](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/app/ILeafer.ts#L120)

## Methods

### register

▸ **register**(`name`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`ILeaferTypeFunction`](ILeaferTypeFunction.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:121](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/app/ILeafer.ts#L121)

___

### run

▸ **run**(`name`, `leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `leafer` | [`ILeaferBase`](ILeaferBase.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:122](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/app/ILeafer.ts#L122)
