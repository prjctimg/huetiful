[huetiful-js](../README.md) / token

# Module: token

## Functions

### token

▸ **token**(`kind`, `options?`): (`color`: [`ColorToken`](alpha.md#colortoken)) => [`ColorToken`](alpha.md#colortoken)

Returns a converter function that parses any recognizable color to the specified `kind` of `ColorToken` type.

It supports the following types as options:

* `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.

* `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215` in hexadecimal, binary, octal or decimal exponential notations if specified in the `numberType` parameter in the ``options` object.

* `'hex'` - Parses the color token to its hexadecimal string equivalent. If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

* `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.

@param {'number'|'array'|'object'|'hex'} kind
@param options Optional overrides to customize `kind` specific parameters.
@returns {(color:ColorToken)=>ColorToken} The color token in the specified `kind`.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `kind` | ``"number"`` \| ``"object"`` \| ``"array"`` \| ``"hex"`` | `undefined` |
| `options` | `Object` | `undefined` |
| `options.numberType` | ``"hex"`` \| ``"literal"`` \| ``"octal"`` \| ``"binary"`` \| ``"decimal"`` | `'literal'` |
| `options.omitMode` | `boolean` | `false` |
| `options.sourceMode` | [`Colorspaces`](nearest.md#colorspaces) | `'rgb'` |
| `options.targetMode` | [`Colorspaces`](nearest.md#colorspaces) | `'lch'` |

#### Returns

`fn`

▸ (`color`): [`ColorToken`](alpha.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) |

##### Returns

[`ColorToken`](alpha.md#colortoken)

#### Defined in

[src/token.js:43](https://github.com/prjctimg/huetiful/blob/ed00af0/src/token.js#L43)
