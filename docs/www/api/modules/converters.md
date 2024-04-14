[huetiful-js](../README.md) / converters

# Module: converters

## Table of contents

### Functions

- [color2hex](converters.md#color2hex)
- [color2num](converters.md#color2num)
- [color2tuple](converters.md#color2tuple)
- [num2color](converters.md#num2color)
- [temp2color](converters.md#temp2color)
- [tuple2object](converters.md#tuple2object)

## Functions

### color2hex

▸ **color2hex**(`color`): `string`

Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), any `number` from 0 to 166,777,215 and arrays in the form of `[string,number,number,number,number?]` the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to convert to hexadecimal. Works on color objects and CSS named colors. |

#### Returns

`string`

A hexadecimal representation of the passed in color.

**`Example`**

```ts
import { color2hex } from "huetiful-js";

console.log(color2hex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(color2hex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
```

#### Defined in

[src/converters.js:31](https://github.com/prjctimg/huetiful/blob/cf8e303/src/converters.js#L31)

___

### color2num

▸ **color2num**(`color`): `number`

Returns the numerical equivalent of a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to convert to its numerical equivalent. |

#### Returns

`number`

value The numerical value of the color from 0 to 16,777,215.

**`Example`**

```ts
import { color2num } from 'huetiful-js'

console.log(color2num("b2c3f1"))
// 11715569
```

#### Defined in

[src/converters.js:122](https://github.com/prjctimg/huetiful/blob/cf8e303/src/converters.js#L122)

___

### color2tuple

▸ **color2tuple**(`color`, `colorspace?`, `omitMode?`): `any`[]

Returns an array of channel values in the mode color space. It does not mutate the values of the passed in color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| `ColorObject` | Expects the color to be in hexadecimal represantation or as a plain color object. Use a converter suitable for the color token type you're expecting to convert it to hexadecimal format e.g `num2color` if you want to convert the number to a supported color token. |
| `colorspace?` | `Colorspaces` | The mode color space to return channel values for. You can omit this parameter if you pass in a color object with the `mode` property. |
| `omitMode?` | `boolean` | optional boolean to exclude the mode from the final tuple. Default is `false`. |

#### Returns

`any`[]

An array of channel values with the colorspace as first element and the alpha channel as the fifth element in the array if its explicitly defined in the passed in color.

**`Example`**

```ts
import { color2tuple } from 'huetiful-js'

let rgbColor = {
 r: 0.4,
 g: 0.3,
 b: 0.7,
 mode: "rgb",
};

console.log(color2tuple(rgbColor));

// [ 'rgb', 0.4, 0.3, 0.7 ]
```

#### Defined in

[src/converters.js:212](https://github.com/prjctimg/huetiful/blob/cf8e303/src/converters.js#L212)

___

### num2color

▸ **num2color**(`num`, `colorspace`): `never`

Returns the color equivalent of any `number` between 0 and 16,777,215 as a hexadecimal string or color object if the `colorspace` is specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to convert. |
| `colorspace` | `Colorspaces` | The optional colorspace to return the resulting color in. The color token is returned as a plain color object. |

#### Returns

`never`

color A color object or hex string.

**`Example`**

```ts
import { num2color } from 'huetiful-js'

console.log(num2color(900))
// #000384
```

#### Defined in

[src/converters.js:86](https://github.com/prjctimg/huetiful/blob/cf8e303/src/converters.js#L86)

___

### temp2color

▸ **temp2color**(`kelvin?`, `colorspace`): `string` \| `ColorObject`

Converts the temperature value (in Kelvins) to a color as a hexadecimal string else a color object in the mode `colorspace`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `kelvin` | `number` | `1000` | The number of Kelvins. From 0 to 30,000 . |
| `colorspace` | `Colorspaces` | `undefined` | Optional parameter to return a color object in the mode `colorspace` hexadecimal string. Default is `'rgb'` |

#### Returns

`string` \| `ColorObject`

The color as a hexadecimal  or plain color object.

**`Example`**

```ts
import { temp2color } from 'huetiful-js'

console.log(temp2color(2542))
// #ffa44a
```

#### Defined in

[src/converters.js:142](https://github.com/prjctimg/huetiful/blob/cf8e303/src/converters.js#L142)

___

### tuple2object

▸ **tuple2object**(`arr?`, `targetMode?`): `ColorObject`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `ColorTuple` | `[]` | An array with the channels values and optional `colorspace` to specify the mode where such values |
| `targetMode?` | `Colorspaces` | `undefined` | The colorspace to return the values in. If `undefined` it will use the mode in the passed in array. |

#### Returns

`ColorObject`

The color object.

#### Defined in

[src/converters.js:242](https://github.com/prjctimg/huetiful/blob/cf8e303/src/converters.js#L242)
