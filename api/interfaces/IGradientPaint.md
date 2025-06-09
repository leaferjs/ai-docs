# Interface: IGradientPaint

## Hierarchy

- [`IPaintBase`](IPaintBase.md)

  ↳ **`IGradientPaint`**

## Table of contents

### Properties

- [blendMode](IGradientPaint.md#blendmode)
- [visible](IGradientPaint.md#visible)
- [opacity](IGradientPaint.md#opacity)
- [type](IGradientPaint.md#type)
- [from](IGradientPaint.md#from)
- [to](IGradientPaint.md#to)
- [stretch](IGradientPaint.md#stretch)
- [stops](IGradientPaint.md#stops)

## Properties

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IPaintBase](IPaintBase.md).[blendMode](IPaintBase.md#blendmode)

#### Defined in

[ui/packages/interface/src/type/IType.ts:14](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L14)

___

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[visible](IPaintBase.md#visible)

#### Defined in

[ui/packages/interface/src/type/IType.ts:15](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L15)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IPaintBase](IPaintBase.md).[opacity](IPaintBase.md#opacity)

#### Defined in

[ui/packages/interface/src/type/IType.ts:16](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L16)

___

### type

• **type**: [`IGradientType`](../modules.md#igradienttype)

#### Overrides

[IPaintBase](IPaintBase.md).[type](IPaintBase.md#type)

#### Defined in

[ui/packages/interface/src/type/IType.ts:48](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L48)

___

### from

• `Optional` **from**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[ui/packages/interface/src/type/IType.ts:49](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L49)

___

### to

• `Optional` **to**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[ui/packages/interface/src/type/IType.ts:50](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L50)

___

### stretch

• `Optional` **stretch**: `number`

#### Defined in

[ui/packages/interface/src/type/IType.ts:51](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L51)

___

### stops

• **stops**: `string`[] \| [`IColorStop`](IColorStop.md)[]

#### Defined in

[ui/packages/interface/src/type/IType.ts:52](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/type/IType.ts#L52)
