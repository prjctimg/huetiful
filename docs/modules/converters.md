[huetiful-js](../README.md) / [Modules](../modules.md) / converters

# Module::package: converters

## Table of contents:scroll:

### Functions:toolbox:

- [num2rgb](converters.md#num2rgb)
- [rgb2num](converters.md#rgb2num)
- [temp2Color](converters.md#temp2color)
- [toColorTuple](converters.md#tocolortuple)
- [toHex](converters.md#tohex)
- [ucsConverter](converters.md#ucsconverter)

## Functions

### num2rgb

▸ **num2rgb**(`num`, `hex?`): [`ColorToken`](types.md#colortoken)

Returns the RGB color equivalent of any number between 0 and 16,777,215.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | The number to convert to RGB |
| `hex` | `boolean` | `false` | - |

#### Returns:back:

[`ColorToken`](types.md#colortoken)

color An RGB color object or hex string.

**`Example`** :clipboard:

```ts
import { num2rgb } from 'huetiful-js'

console.log(num2rgb(900, true))
// #000384
```

___

### rgb2num

▸ **rgb2num**(`color`): `number`

Returns the numerical equivalent of a color.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to convert to its numerical equivalent. |

#### Returns:back:

`number`

value The numerical value of the color from 0 to 16,777,215.

**`Example`** :clipboard:

```ts
import { rgb2num } from 'huetiful-js'

console.log(rgb2num("b2c3f1"))
// 11715569
```

___

### temp2Color

▸ **temp2Color**(`kelvin`, `hex?`): [`ColorToken`](types.md#colortoken)

Converts the temperature value (in Kelvins) to an RGB color.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `kelvin` | `number` | `undefined` | The number of Kelvins. From 0 to 30,000 . |
| `hex` | `boolean` | `false` | Optional boolean parameter to either return an RGB color object or hexadecimal string. Default is true. |

#### Returns:back:

[`ColorToken`](types.md#colortoken)

color The color as a hexadecimal  or RGB color object.

**`Example`** :clipboard:

```ts
import { temp2Color } from 'huetiful-js'

console.log(temp2Color(2542))
// #ffa44a
```

___

### toColorTuple

▸ **toColorTuple**(`color`, `mode`): [`ColorTuple`](types.md#colortuple)

Returns an array of channel values in the mode color space.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | Any recognizable color token. |
| `mode` | [`ColorSpaces`](types.md#colorspaces) | The mode color space to return channel values for |

#### Returns:back:

[`ColorTuple`](types.md#colortuple)

An array of channel values with the colorspace as first element and the alpha channel if its explicitly defined in the passed in color.

**`Example`** :clipboard:

```ts
let rgbColor = {
 r: 0.4,
 g: 0.3,
 b: 0.7,
 mode: "rgb",
};
console.log(toColorTuple(rgbColor,'rgb'));

// [ 'rgb', 0.4, 0.3, 0.7 ]
```

___

### toHex

▸ **toHex**(`color`): `string`

Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), numbers from 0 to 166,777,215 and arrays in the form of [string,number,number,number,numer?] the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to convert to hexadecimal. Works on color objects and CSS named colors. |

#### Returns:back:

`string`

A hexadecimal representation of the passed in color.

**`Example`** :clipboard:

```ts
import { toHex } from "huetiful-js";

console.log(toHex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(toHex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
```

___

### ucsConverter

▸ **ucsConverter**(`colorspace`): `ConvertFn`\<`any`\>

Converter function with mode definitions for uniform color spaces. The function is curried to return a converter in the passed colospace.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | [`UniformColorSpaces`](types.md#uniformcolorspaces) | The mode converter to return. |

#### Returns:back:

`ConvertFn`\<`any`\>

The converter function in the mode colorspace.
