[huetiful-js](../README.md) / [Modules](../modules.md) / generators

# Module: generators

## Table of contents

### Functions

- [discoverPalettes](generators.md#discoverpalettes)
- [earthtone](generators.md#earthtone)
- [hueShift](generators.md#hueshift)
- [interpolateSpline](generators.md#interpolatespline)
- [interpolator](generators.md#interpolator)
- [pairedScheme](generators.md#pairedscheme)
- [pastel](generators.md#pastel)
- [scheme](generators.md#scheme)

## Functions

### discoverPalettes

▸ **discoverPalettes**(`colors`, `schemeType?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[] \| `object`

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` difference metric for a set of predefined palettes. The function does not work on achromatic colors, you may use `isAchromatic` to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `object` \| [`ColorToken`](types.md#colortoken)[] | The collection of colors to create palettes from. Preferably use 6 or more colors for better results. |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |
| `colorspace?` | `string` | - |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `object`

An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Example`**

```ts
import { discoverPalettes } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
 "#4e0000",
 "#3e0000",
 "#310000",
]

console.log(discoverPalettes(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

#### Defined in

[generators.d.ts:66](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L66)

___

### earthtone

▸ **earthtone**(`color`, `colorspace?`, `options?`): [`ColorToken`](types.md#colortoken)[]

Creates a scale of a spline interpolation between an earthtone and a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to interpolate an earth tone with. * |
| `colorspace?` | `string` | - |
| `options?` | [`EarthtoneOptions`](types.md#earthtoneoptions) | Optional overrides for customising interpolation and easing functions. |

#### Returns

[`ColorToken`](types.md#colortoken)[]

The array of colors resulting from the earthtone interpolation as hex codes.

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[generators.d.ts:86](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L86)

___

### hueShift

▸ **hueShift**(`color`, `colorspace?`, `options?`): [`ColorToken`](types.md#colortoken)[]

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single scheme color. Min and max lightness value determine how light or dark our colour will be at either extreme.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to use as the scheme of the hueshift. Colors are internally converted to LCH. |
| `colorspace?` | `string` | - |
| `options?` | [`HueShiftOptions`](types.md#hueshiftoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorToken`](types.md#colortoken)[]

An array of colors in hexadecimal. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`

**`Example`**

```ts
import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
 '#ffffe1', '#ffdca5',
 '#ca9a70', '#935c40',
 '#5c2418', '#3e0000',
 '#310000', '#34000f',
 '#38001e', '#3b002c',
 '#3b0c3a'
]
```

#### Defined in

[generators.d.ts:112](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L112)

___

### interpolateSpline

▸ **interpolateSpline**(`colors`, `colorspace?`, `iterations?`, `kind?`, `closed?`, `options?`): `string`[]

Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `object` \| [`ColorToken`](types.md#colortoken)[] | The array of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result. |
| `colorspace?` | `string` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `iterations?` | `number` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | The type of the spline interpolation method. Default is basis. |
| `closed?` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | `Pick`\<[`InterpolatorOptions`](types.md#interpolatoroptions), ``"easingFn"`` \| ``"hueFixup"``\> | Optional channel specific overrides. |

#### Returns

`string`[]

A hexadecimal representation of the resultant color.

**`Example`**

```ts
import { interpolateSpline } from 'huetiful-js';

console.log(interpolateSpline(['pink', 'blue'], 'lch', 8));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
```

#### Defined in

[generators.d.ts:141](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L141)

___

### interpolator

▸ **interpolator**(`colors`, `colorspace?`, `options?`): (`t`: `number`) => `FindColorByMode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] |
| `colorspace?` | `string` |
| `options?` | `object` |

#### Returns

`fn`

▸ (`t`): `FindColorByMode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns

`FindColorByMode`

#### Defined in

[generators.d.ts:152](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L152)

___

### pairedScheme

▸ **pairedScheme**(`color`, `options?`): [`ColorToken`](types.md#colortoken)[] \| [`ColorToken`](types.md#colortoken)

Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to return a paired color scheme from. |
| `options?` | [`PairedSchemeOptions`](types.md#pairedschemeoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| [`ColorToken`](types.md#colortoken)

An array containing the paired scheme.

**`Example`**

```ts
import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[generators.d.ts:200](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L200)

___

### pastel

▸ **pastel**(`color`): [`ColorToken`](types.md#colortoken)

Returns a random pastel variant of the passed in color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to return a pastel variant of. |

#### Returns

[`ColorToken`](types.md#colortoken)

A random pastel color.

**`Example`**

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))
// #036103ff
```

#### Defined in

[generators.d.ts:217](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L217)

___

### scheme

▸ **scheme**(`schemeType`): (`color`: [`ColorToken`](types.md#colortoken), `easingFunc?`: (`t`: `number`) => `number`) => [`ColorToken`](types.md#colortoken)[]

Generates a randomised classic color scheme from a single scheme color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | `string` | Any classic color scheme either "analogous"\|"triadic"\|"tetradic"\|"complementary"\|"splitComplementary". |

#### Returns

`fn`

An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.

▸ (`color`, `easingFunc?`): [`ColorToken`](types.md#colortoken)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `easingFunc?` | (`t`: `number`) => `number` |

##### Returns

[`ColorToken`](types.md#colortoken)[]

**`Example`**

```ts
import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f", true))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[generators.d.ts:36](https://github.com/prjctimg/huetiful/blob/c14365d/types/generators.d.ts#L36)
