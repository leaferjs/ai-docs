# Class: Transformer

## Table of contents

### Constructors

- [constructor](Transformer.md#constructor)

### Properties

- [interaction](Transformer.md#interaction)
- [moveData](Transformer.md#movedata)
- [zoomData](Transformer.md#zoomdata)
- [rotateData](Transformer.md#rotatedata)
- [transformTimer](Transformer.md#transformtimer)

### Accessors

- [transforming](Transformer.md#transforming)

### Methods

- [move](Transformer.md#move)
- [zoom](Transformer.md#zoom)
- [rotate](Transformer.md#rotate)
- [setPath](Transformer.md#setpath)
- [transformEndWait](Transformer.md#transformendwait)
- [transformEnd](Transformer.md#transformend)
- [reset](Transformer.md#reset)
- [destroy](Transformer.md#destroy)

## Constructors

### constructor

• **new Transformer**(`interaction`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | [`InteractionBase`](InteractionBase.md) |

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:16](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L16)

## Properties

### interaction

• `Protected` **interaction**: [`InteractionBase`](InteractionBase.md)

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:10](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L10)

___

### moveData

• `Protected` **moveData**: [`IMoveEvent`](../interfaces/IMoveEvent.md)

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:11](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L11)

___

### zoomData

• `Protected` **zoomData**: [`IZoomEvent`](../interfaces/IZoomEvent.md)

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:12](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L12)

___

### rotateData

• `Protected` **rotateData**: [`IRotateEvent`](../interfaces/IRotateEvent.md)

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:13](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L13)

___

### transformTimer

• `Protected` **transformTimer**: `any`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:14](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L14)

## Accessors

### transforming

• `get` **transforming**(): `boolean`

#### Returns

`boolean`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:8](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L8)

## Methods

### move

▸ **move**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IMoveEvent`](../interfaces/IMoveEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:20](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L20)

___

### zoom

▸ **zoom**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IZoomEvent`](../interfaces/IZoomEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:37](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L37)

___

### rotate

▸ **rotate**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRotateEvent`](../interfaces/IRotateEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:53](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L53)

___

### setPath

▸ **setPath**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:69](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L69)

___

### transformEndWait

▸ `Protected` **transformEndWait**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:76](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L76)

___

### transformEnd

▸ **transformEnd**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:83](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L83)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:91](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L91)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/viewport/src/interaction/Transformer.ts:95](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/viewport/src/interaction/Transformer.ts#L95)
