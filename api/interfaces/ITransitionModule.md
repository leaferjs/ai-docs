# Interface: ITransitionModule

## Table of contents

### Properties

- [list](ITransitionModule.md#list)

### Methods

- [register](ITransitionModule.md#register)
- [get](ITransitionModule.md#get)
- [value](ITransitionModule.md#value)
- [number](ITransitionModule.md#number)
- [color](ITransitionModule.md#color)
- [gradient](ITransitionModule.md#gradient)

## Properties

### list

• **list**: [`ITransitionMap`](ITransitionMap.md)

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:5](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L5)

## Methods

### register

▸ **register**(`attrName`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `fn` | [`ITransitionFunction`](ITransitionFunction.md) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:6](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L6)

___

### get

▸ **get**(`attrName`): [`ITransitionFunction`](ITransitionFunction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |

#### Returns

[`ITransitionFunction`](ITransitionFunction.md)

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:7](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L7)

___

### value

▸ **value**(`from`, `to`, `t`, `target?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `any` |
| `to` | `any` |
| `t` | `number` |
| `target?` | [`IObject`](IObject.md) |

#### Returns

`any`

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:9](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L9)

___

### number

▸ **number**(`from`, `to`, `t`, `roundValue?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |
| `t` | `number` |
| `roundValue?` | `number` |

#### Returns

`number`

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:10](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L10)

___

### color

▸ **color**(`from`, `to`, `t`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`IColor`](../modules.md#icolor) |
| `to` | [`IColor`](../modules.md#icolor) |
| `t` | `number` |

#### Returns

`string`

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:11](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L11)

___

### gradient

▸ **gradient**(`from`, `to`, `t`, `target`): [`IGradientPaint`](IGradientPaint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`IGradientPaint`](IGradientPaint.md) |
| `to` | [`IGradientPaint`](IGradientPaint.md) |
| `t` | `number` |
| `target` | [`IObject`](IObject.md) |

#### Returns

[`IGradientPaint`](IGradientPaint.md)

#### Defined in

[ui/packages/interface/src/module/ITransition.ts:12](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/module/ITransition.ts#L12)
