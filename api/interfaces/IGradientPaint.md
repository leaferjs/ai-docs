# Interface: IGradientPaint

## Hierarchy

- [`IPaintBase`](IPaintBase.md)

  ↳ **`IGradientPaint`**

  ↳↳ [`IStrokeGradientPaint`](IStrokeGradientPaint.md)

## Table of contents

### Properties

- [blendMode](IGradientPaint.md#blendmode)
- [visible](IGradientPaint.md#visible)
- [opacity](IGradientPaint.md#opacity)
- [style](IGradientPaint.md#style)
- [editing](IGradientPaint.md#editing)
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

[src/ui/packages/interface/src/type/IType.ts:17](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L17)

___

### visible

• `Optional` **visible**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[visible](IPaintBase.md#visible)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:18](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L18)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IPaintBase](IPaintBase.md).[opacity](IPaintBase.md#opacity)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:19](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L19)

___

### style

• `Optional` **style**: [`IStrokeStyle`](IStrokeStyle.md)

#### Inherited from

[IPaintBase](IPaintBase.md).[style](IPaintBase.md#style)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:21](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L21)

___

### editing

• `Optional` **editing**: `boolean`

#### Inherited from

[IPaintBase](IPaintBase.md).[editing](IPaintBase.md#editing)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:22](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L22)

___

### type

• **type**: [`IGradientType`](../modules.md#igradienttype)

#### Overrides

[IPaintBase](IPaintBase.md).[type](IPaintBase.md#type)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:56](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L56)

___

### from

• `Optional` **from**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:57](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L57)

___

### to

• `Optional` **to**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:58](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L58)

___

### stretch

• `Optional` **stretch**: `number`

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:59](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L59)

___

### stops

• **stops**: `string`[] \| [`IColorStop`](IColorStop.md)[]

#### Defined in

[src/ui/packages/interface/src/type/IType.ts:60](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/interface/src/type/IType.ts#L60)
