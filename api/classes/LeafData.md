# Class: LeafData

## Hierarchy

- **`LeafData`**

  ↳ [`UIData`](UIData.md)

## Implements

- [`ILeafData`](../interfaces/ILeafData.md)

## Table of contents

### Constructors

- [constructor](LeafData.md#constructor)

### Properties

- [\_\_leaf](LeafData.md#__leaf)
- [\_\_input](LeafData.md#__input)
- [\_\_middle](LeafData.md#__middle)
- [\_\_single](LeafData.md#__single)
- [\_\_naturalWidth](LeafData.md#__naturalwidth)
- [\_\_naturalHeight](LeafData.md#__naturalheight)
- [\_\_pathForRender](LeafData.md#__pathforrender)
- [\_\_useStroke](LeafData.md#__usestroke)

### Accessors

- [\_\_useNaturalRatio](LeafData.md#__usenaturalratio)
- [\_\_isLinePath](LeafData.md#__islinepath)
- [\_\_blendMode](LeafData.md#__blendmode)

### Methods

- [\_\_get](LeafData.md#__get)
- [\_\_getData](LeafData.md#__getdata)
- [\_\_setInput](LeafData.md#__setinput)
- [\_\_getInput](LeafData.md#__getinput)
- [\_\_removeInput](LeafData.md#__removeinput)
- [\_\_getInputData](LeafData.md#__getinputdata)
- [\_\_setMiddle](LeafData.md#__setmiddle)
- [\_\_getMiddle](LeafData.md#__getmiddle)
- [\_\_checkSingle](LeafData.md#__checksingle)
- [\_\_removeNaturalSize](LeafData.md#__removenaturalsize)
- [destroy](LeafData.md#destroy)

## Constructors

### constructor

• **new LeafData**(`leaf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:31](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L31)

## Properties

### \_\_leaf

• **\_\_leaf**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__leaf](../interfaces/ILeafData.md#__leaf)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:6](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L6)

___

### \_\_input

• **\_\_input**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__input](../interfaces/ILeafData.md#__input)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:7](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L7)

___

### \_\_middle

• **\_\_middle**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__middle](../interfaces/ILeafData.md#__middle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:8](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L8)

___

### \_\_single

• **\_\_single**: `boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__single](../interfaces/ILeafData.md#__single)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:10](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L10)

___

### \_\_naturalWidth

• `Optional` **\_\_naturalWidth**: `number`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__naturalWidth](../interfaces/ILeafData.md#__naturalwidth)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:12](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L12)

___

### \_\_naturalHeight

• `Optional` **\_\_naturalHeight**: `number`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__naturalHeight](../interfaces/ILeafData.md#__naturalheight)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:13](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L13)

___

### \_\_pathForRender

• `Optional` **\_\_pathForRender**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__pathForRender](../interfaces/ILeafData.md#__pathforrender)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:15](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L15)

___

### \_\_useStroke

• `Optional` **\_\_useStroke**: `boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__useStroke](../interfaces/ILeafData.md#__usestroke)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:17](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L17)

## Accessors

### \_\_useNaturalRatio

• `get` **__useNaturalRatio**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__useNaturalRatio](../interfaces/ILeafData.md#__usenaturalratio)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:18](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L18)

___

### \_\_isLinePath

• `get` **__isLinePath**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__isLinePath](../interfaces/ILeafData.md#__islinepath)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:20](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L20)

___

### \_\_blendMode

• `get` **__blendMode**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__blendMode](../interfaces/ILeafData.md#__blendmode)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:25](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L25)

## Methods

### \_\_get

▸ **__get**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__get](../interfaces/ILeafData.md#__get)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:35](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L35)

___

### \_\_getData

▸ **__getData**(): [`IObject`](../interfaces/IObject.md)

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getData](../interfaces/ILeafData.md#__getdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:43](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L43)

___

### \_\_setInput

▸ **__setInput**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__setInput](../interfaces/ILeafData.md#__setinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:55](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L55)

___

### \_\_getInput

▸ **__getInput**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getInput](../interfaces/ILeafData.md#__getinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:60](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L60)

___

### \_\_removeInput

▸ **__removeInput**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__removeInput](../interfaces/ILeafData.md#__removeinput)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:71](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L71)

___

### \_\_getInputData

▸ **__getInputData**(`names?`, `options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string`[] \| [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getInputData](../interfaces/ILeafData.md#__getinputdata)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:75](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L75)

___

### \_\_setMiddle

▸ **__setMiddle**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__setMiddle](../interfaces/ILeafData.md#__setmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:115](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L115)

___

### \_\_getMiddle

▸ **__getMiddle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__getMiddle](../interfaces/ILeafData.md#__getmiddle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:120](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L120)

___

### \_\_checkSingle

▸ **__checkSingle**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__checkSingle](../interfaces/ILeafData.md#__checksingle)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:124](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L124)

___

### \_\_removeNaturalSize

▸ **__removeNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[__removeNaturalSize](../interfaces/ILeafData.md#__removenaturalsize)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:138](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L138)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafData](../interfaces/ILeafData.md).[destroy](../interfaces/ILeafData.md#destroy)

#### Defined in

[leafer/packages/display-module/data/src/LeafData.ts:142](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display-module/data/src/LeafData.ts#L142)
