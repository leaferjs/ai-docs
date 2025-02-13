# Class: Picker

## Table of contents

### Constructors

- [constructor](Picker.md#constructor)

### Properties

- [target](Picker.md#target)
- [selector](Picker.md#selector)
- [findList](Picker.md#findlist)
- [exclude](Picker.md#exclude)
- [point](Picker.md#point)

### Methods

- [getByPoint](Picker.md#getbypoint)
- [getBestMatchLeaf](Picker.md#getbestmatchleaf)
- [getPath](Picker.md#getpath)
- [getHitablePath](Picker.md#gethitablepath)
- [getThroughPath](Picker.md#getthroughpath)
- [hitBranch](Picker.md#hitbranch)
- [eachFind](Picker.md#eachfind)
- [hitChild](Picker.md#hitchild)
- [clear](Picker.md#clear)
- [destroy](Picker.md#destroy)

## Constructors

### constructor

• **new Picker**(`target`, `selector`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ILeaf`](../interfaces/ILeaf.md) |
| `selector` | [`ISelector`](../interfaces/ISelector.md) |

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L17)

## Properties

### target

• `Protected` `Optional` **target**: [`ILeaf`](../interfaces/ILeaf.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L9)

___

### selector

• `Protected` **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:10](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L10)

___

### findList

• `Protected` **findList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:12](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L12)

___

### exclude

• `Protected` **exclude**: [`ILeafList`](../interfaces/ILeafList.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L13)

___

### point

• `Protected` **point**: [`IRadiusPointData`](../interfaces/IRadiusPointData.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L15)

## Methods

### getByPoint

▸ **getByPoint**(`hitPoint`, `hitRadius`, `options?`): [`IPickResult`](../interfaces/IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `hitRadius` | `number` |
| `options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`IPickResult`](../interfaces/IPickResult.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:22](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L22)

___

### getBestMatchLeaf

▸ **getBestMatchLeaf**(`list`, `bottomList`, `ignoreHittable`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] |
| `bottomList` | [`IPickBottom`](../interfaces/IPickBottom.md)[] |
| `ignoreHittable` | `boolean` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:46](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L46)

___

### getPath

▸ **getPath**(`leaf`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:71](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L71)

___

### getHitablePath

▸ **getHitablePath**(`leaf`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:81](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L81)

___

### getThroughPath

▸ **getThroughPath**(`list`): [`LeafList`](LeafList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

[`LeafList`](LeafList.md)

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:93](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L93)

___

### hitBranch

▸ `Protected` **hitBranch**(`branch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `branch` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:114](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L114)

___

### eachFind

▸ `Protected` **eachFind**(`children`, `hitMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`ILeaf`](../interfaces/ILeaf.md)[] |
| `hitMask` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:118](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L118)

___

### hitChild

▸ `Protected` **hitChild**(`child`, `point`, `proxy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](../interfaces/ILeaf.md) |
| `point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `proxy?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:137](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L137)

___

### clear

▸ `Protected` **clear**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:146](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L146)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/partner/selector/src/Picker.ts:152](https://github.com/leaferjs/leafer/blob/a596007/packages/partner/selector/src/Picker.ts#L152)
