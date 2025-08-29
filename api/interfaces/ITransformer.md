# Interface: ITransformer

## Table of contents

### Properties

- [transforming](ITransformer.md#transforming)

### Methods

- [move](ITransformer.md#move)
- [zoom](ITransformer.md#zoom)
- [rotate](ITransformer.md#rotate)
- [transformEnd](ITransformer.md#transformend)
- [destroy](ITransformer.md#destroy)

## Properties

### transforming

• `Readonly` **transforming**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:4](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/interaction/ITransformer.ts#L4)

## Methods

### move

▸ **move**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMoveEvent`](IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:5](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/interaction/ITransformer.ts#L5)

___

### zoom

▸ **zoom**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IZoomEvent`](IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:6](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/interaction/ITransformer.ts#L6)

___

### rotate

▸ **rotate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRotateEvent`](IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:7](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/interaction/ITransformer.ts#L7)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:8](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/interaction/ITransformer.ts#L8)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/interface/src/interaction/ITransformer.ts:9](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/interaction/ITransformer.ts#L9)
