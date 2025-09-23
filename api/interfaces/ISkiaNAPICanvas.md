# Interface: ISkiaNAPICanvas

## Table of contents

### Methods

- [encodeSync](ISkiaNAPICanvas.md#encodesync)
- [encode](ISkiaNAPICanvas.md#encode)
- [toBuffer](ISkiaNAPICanvas.md#tobuffer)
- [toDataURL](ISkiaNAPICanvas.md#todataurl)
- [toDataURLAsync](ISkiaNAPICanvas.md#todataurlasync)

## Methods

### encodeSync

▸ **encodeSync**(`format`, `quality?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"webp"`` \| ``"jpeg"`` |
| `quality?` | `number` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:25](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L25)

▸ **encodeSync**(`format`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"png"`` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:26](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L26)

___

### encode

▸ **encode**(`format`, `quality?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:28](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L28)

▸ **encode**(`format`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"png"`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:29](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L29)

___

### toBuffer

▸ **toBuffer**(`mime`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | ``"image/png"`` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:31](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L31)

▸ **toBuffer**(`mime`, `quality?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`any`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:32](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L32)

___

### toDataURL

▸ **toDataURL**(`mime?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime?` | ``"image/png"`` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:34](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L34)

▸ **toDataURL**(`mime`, `quality?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`string`

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:35](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L35)

___

### toDataURLAsync

▸ **toDataURLAsync**(`mime?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime?` | ``"image/png"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:37](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L37)

▸ **toDataURLAsync**(`mime`, `quality?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mime` | `string` |
| `quality?` | `number` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/leafer/packages/interface/src/canvas/ISkiaCanvas.ts:38](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/interface/src/canvas/ISkiaCanvas.ts#L38)
