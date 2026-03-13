# Interface: IPathArrowModule

## Table of contents

### Properties

- [list](IPathArrowModule.md#list)
- [fillList](IPathArrowModule.md#filllist)

### Methods

- [addArrows](IPathArrowModule.md#addarrows)
- [updateArrow](IPathArrowModule.md#updatearrow)
- [register](IPathArrowModule.md#register)
- [get](IPathArrowModule.md#get)

## Properties

### list

• **list**: [`IPathDataArrowMap`](IPathDataArrowMap.md)

#### Defined in

[src/ui/packages/interface/src/module/IPathArrow.ts:6](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/module/IPathArrow.ts#L6)

___

### fillList

• **fillList**: [`IPathDataArrowMap`](IPathDataArrowMap.md)

#### Defined in

[src/ui/packages/interface/src/module/IPathArrow.ts:7](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/module/IPathArrow.ts#L7)

## Methods

### addArrows

▸ **addArrows**(`ui`, `updateCache?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |
| `updateCache?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPathArrow.ts:8](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/module/IPathArrow.ts#L8)

___

### updateArrow

▸ **updateArrow**(`ui`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPathArrow.ts:9](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/module/IPathArrow.ts#L9)

___

### register

▸ **register**(`name`, `data`, `fillData?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | [`IPathDataArrow`](IPathDataArrow.md) |
| `fillData?` | [`IPathDataArrow`](IPathDataArrow.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/module/IPathArrow.ts:10](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/module/IPathArrow.ts#L10)

___

### get

▸ **get**(`name`): [`IPathDataArrow`](IPathDataArrow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IPathDataArrow`](IPathDataArrow.md)

#### Defined in

[src/ui/packages/interface/src/module/IPathArrow.ts:11](https://github.com/leaferjs/leafer-ui/blob/9d7de1104c165457fe25d60dc1beec0b12eed985/packages/interface/src/module/IPathArrow.ts#L11)
