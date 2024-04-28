[huetiful-js](../README.md) / token

# Module: token

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[token.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/token.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[token.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/token.js#L2)

___

### TokenOptions

Ƭ **TokenOptions**: `Object`

Overrides to customize the parsing and output behaviour.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind?` | ``"number"`` \| ``"array"`` \| ``"object"`` \| ``"hex"`` | The type of color token to return. Default is `'hex'`. |
| `numberType?` | ``"literal"`` \| ``"hex"`` \| ``"octal"`` \| ``"binary"`` \| ``"decimal"`` | The type of number to return. Only valid if kind is set to `'number'`. Default is `'literal'` |
| `omitMode?` | `boolean` | If the `kind` is set to `'array'` it will remove the mode string from color tuple. Default is `false`. |
| `sourceMode?` | [`Colorspaces`](nearest.md#colorspaces) | The mode in which the channel values are valid in. It is used for color arrays if they have the `colorspace` string ommitted. Default is `'rgb'`. |
| `targetMode?` | [`Colorspaces`](nearest.md#colorspaces) | The colorspace in which to return the color object or array in. Default is `'lch'`. |

#### Defined in

types.d.ts:222

## Functions

### token

▸ **token**(`color`, `options?`): `any`

Parses any recognizable color to the specified `kind` of `ColorToken` type.

The `kind` option supports the following types as options:

* `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.

* `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.

The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:
 - `'hexadecimal'`
 - `'binary'`
 - `'octal'`
 - `'decimal'` exponential notation

* `'hex'` - Parses the color token to its hexadecimal string equivalent.

If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

* `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color token to parse or convert. |
| `options` | [`TokenOptions`](token.md#tokenoptions) |  |

#### Returns

`any`

#### Defined in

[token.js:51](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/token.js#L51)
