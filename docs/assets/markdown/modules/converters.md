[huetiful-js](../README.md) / [Modules](../modules.md) / converters

# Module: converters

## Table of contents

### Functions

- [color2hex](converters.md#color2hex)
- [color2num](converters.md#color2num)
- [color2tuple](converters.md#color2tuple)
- [num2color](converters.md#num2color)
- [temp2color](converters.md#temp2color)
- [toCIE](converters.md#tocie)
- [toDIN99](converters.md#todin99)
- [toITP](converters.md#toitp)
- [toJab](converters.md#tojab)
- [toJch](converters.md#tojch)
- [toOk](converters.md#took)
- [ucsConverter](converters.md#ucsconverter)

## Functions

### color2hex

▸ **color2hex**(`color`): `string`

Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), numbers from 0 to 166,777,215 and arrays in the form of [string,number,number,number,numer?] the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to convert to hexadecimal. Works on color objects and CSS named colors. |

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

[converters.d.ts:95](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L95)

___

### color2num

▸ **color2num**(`color`): `number`

Returns the numerical equivalent of a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to convert to its numerical equivalent. |

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

[converters.d.ts:121](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L121)

___

### color2tuple

▸ **color2tuple**(`color`, `colorspace?`): `any`[]

Returns an array of channel values in the mode color space. It does not mutate the values of the passed in color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| `object` | Expects the color to be in hexadecimal represantation or as a plain color object. Use a converter suitable for the color token type you're expecting to convert it to hexadecimal format e.g `num2color`. |
| `colorspace?` | `string` | The mode color space to return channel values for. You can omit this parameter if you pass in a color object with the `mode` property. |

#### Returns

`any`[]

An array of channel values with the colorspace as first element and the alpha channel if its explicitly defined in the passed in color.

**`Example`**

```ts
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

[converters.d.ts:159](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L159)

___

### num2color

▸ **num2color**(`num`, `colorspace?`): [`ColorToken`](types.md#colortoken)

Returns the color equivalent of any number between 0 and 16,777,215 as a hexadecimal string or color object if the `colorspace` is specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to convert. |
| `colorspace?` | `string` | - |

#### Returns

[`ColorToken`](types.md#colortoken)

color A color object or hex string.

**`Example`**

```ts
import { num2color } from 'huetiful-js'

console.log(num2color(900))
// #000384
```

#### Defined in

[converters.d.ts:108](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L108)

___

### temp2color

▸ **temp2color**(`kelvin`, `colorspace?`): [`ColorToken`](types.md#colortoken)

Converts the temperature value (in Kelvins) to a color as a hexadecimal string else a color object in the mode `colorspace`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kelvin` | `number` | The number of Kelvins. From 0 to 30,000 . |
| `colorspace?` | `string` | Optional parameter to return a color object in the mode `colorspace` hexadecimal string. Default is `'rgb'` |

#### Returns

[`ColorToken`](types.md#colortoken)

color The color as a hexadecimal  or RGB color object.

**`Example`**

```ts
import { temp2color } from 'huetiful-js'

console.log(temp2color(2542))
// #ffa44a
```

#### Defined in

[converters.d.ts:135](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L135)

___

### toCIE

▸ **toCIE**(`colorspace?`): (`color`: `string`) => `object`

Returns the passed in color as a plain object in the specified CIE colorspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `any` | The CIE colorspace to use. |

#### Returns

`fn`

▸ (`color`): `object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

##### Returns

`object`

**`See`**

https://culorijs.org/color-spaces/

#### Defined in

[converters.d.ts:28](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L28)

___

### toDIN99

▸ **toDIN99**(`colorspace?`): (`color`: `string`) => `object`

Returns the passed in color as a plain object in the specified DIN99 colorspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `Pick`\<`string`, ``"dlch"`` \| ``"dlab"``\> | The DIN99 colorspace to use. |

#### Returns

`fn`

▸ (`color`): `object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

##### Returns

`object`

**`See`**

https://culorijs.org/color-spaces/

#### Defined in

[converters.d.ts:56](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L56)

___

### toITP

▸ **toITP**(`color`): `object`

Returns the passed in color as a plain object in the ITP colorspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats. |

#### Returns

`object`

**`See`**

https://culorijs.org/color-spaces/ For expected ranges and channels.

#### Defined in

[converters.d.ts:65](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L65)

___

### toJab

▸ **toJab**(`color`): `object`

Returns the passed in color as a plain object in the Jab colorspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats. |

#### Returns

`object`

**`See`**

https://culorijs.org/color-spaces/ For expected ranges and channels.

#### Defined in

[converters.d.ts:79](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L79)

___

### toJch

▸ **toJch**(`color`): `object`

Returns the passed in color as a plain object in the Jch colorspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats. |

#### Returns

`object`

**`See`**

https://culorijs.org/color-spaces/ For expected ranges and channels.

#### Defined in

[converters.d.ts:72](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L72)

___

### toOk

▸ **toOk**(`colorspace?`): (`color`: `string`) => `object`

Returns the passed in color as a plain object in the specified Ok colorspace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The Ok colorspace to use. |

#### Returns

`fn`

▸ (`color`): `object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

##### Returns

`object`

**`See`**

https://culorijs.org/color-spaces/

#### Defined in

[converters.d.ts:18](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L18)

___

### ucsConverter

▸ **ucsConverter**(`colorspace`): `ConvertFn`

Converter function with mode definitions for uniform color spaces. The function is curried to return a converter in the passed colospace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The mode converter to return. |

#### Returns

`ConvertFn`

The converter function in the mode colorspace.

#### Defined in

[converters.d.ts:8](https://github.com/prjctimg/huetiful/blob/c14365d/types/converters.d.ts#L8)
