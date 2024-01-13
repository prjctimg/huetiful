---
title: Generator functions
eleventyNavigation:
  order: 5
  title: Generator functions
---

# Module:📦 generators

## Table of contents📜

### References

- [ucsConverter](generators.md#ucsConverter)

### Functions🧰

- [discoverPalettes](generators.md#discoverPalettes)
- [earthtone](generators.md#earthtone)
- [hueShift](generators.md#hueShift)
- [interpolateSpline](generators.md#interpolateSpline)
- [interpolator](generators.md#interpolator)
- [pairedScheme](generators.md#pairedScheme)
- [pastel](generators.md#pastel)
- [scheme](generators.md#scheme)

## References

### ucsConverter

Re-exports [ucsConverter](converters.md#ucsConverter)

## Functions

### discoverPalettes

▸ **discoverPalettes**(`colors`, `schemeType?`): [`ColorToken`](types.md#ColorToken)[] \| `object`

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#ColorToken)[] | The array of colors to create palettes from. Preferably use 5 or more colors for better results. |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[] \| `object`

An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Example`** 📋

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

___

### earthtone

▸ **earthtone**(`color`, `colorspace?`, `options?`): [`ColorToken`](types.md#ColorToken)[]

Creates a scale of a spline based interpolation between an earthtone and a color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to interpolate an earth tone with. * |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | - |
| `options?` | [`EarthtoneOptions`](types.md#EarthtoneOptions) | Optional overrides for customising interpolation and easing functions. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

The array of colors resulting from the earthtone interpolation as hex codes.

**`Example`** 📋

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",{earthtones:'clay',iterations:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

___

### hueShift

▸ **hueShift**(`color`, `colorspace?`, `options?`): [`ColorToken`](types.md#ColorToken)[]

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to use as the base of the hueshift. Colors are internally converted to LCH. |
| `colorspace?` | [`UniformColorSpaces`](types.md#UniformColorSpaces) | - |
| `options?` | [`HueShiftOptions`](types.md#HueShiftOptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

An array of colors in hex. The length of the resultant array is the number of iterations multiplied by 2 plus the base color passed or (iterations*2)+1

**`Example`** 📋

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

___

### interpolateSpline

▸ **interpolateSpline**(`colors`, `colorspace?`, `samples?`, `kind?`, `closed?`, `options?`): [`ColorToken`](types.md#ColorToken)[]

Returns a spline based interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#ColorToken)[] | `undefined` | The array of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result. |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `samples?` | `number` | `undefined` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | `undefined` | The type of the spline interpolation method. Default is basis. |
| `closed` | `boolean` | `false` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | [`InterpolatorOptions`](types.md#InterpolatorOptions) | `undefined` | Optional channel specific overrides. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

A hexadecimal representation of the resultant color.

___

### interpolator

▸ **interpolator**(`colors`, `colorspace?`, `options?`): `Interpolator`\<[`HueColorSpaces`](types.md#HueColorSpaces)\>

#### Parameters🧮

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](types.md#ColorToken)[] |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) |
| `options?` | `object` |

#### Returns🔙

`Interpolator`\<[`HueColorSpaces`](types.md#HueColorSpaces)\>

___

### pairedScheme

▸ **pairedScheme**(`color`, `options?`): [`ColorToken`](types.md#ColorToken)[] \| [`ColorToken`](types.md#ColorToken)

pairedScheme
 Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to return a paired color scheme from. |
| `options?` | [`PairedSchemeOptions`](types.md#PairedSchemeOptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[] \| [`ColorToken`](types.md#ColorToken)

An array containing the paired scheme.

**`Example`** 📋

```ts
import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,iterations:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

___

### pastel

▸ **pastel**(`color`): [`ColorToken`](types.md#ColorToken)

Returns a random pastel variant of the passed in color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to return a pastel variant of. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)

A random pastel color.

**`Example`** 📋

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))
// #036103ff
```

___

### scheme

▸ **scheme**(`schemeType`): (`color`: [`ColorToken`](types.md#ColorToken), `easingFunc?`: (`t`: `number`) => `number`) => [`ColorToken`](types.md#ColorToken)[]

Generates a randomised classic color scheme from a single base color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | `string` | Any classic color scheme either "analogous"\|"triadic"\|"tetradic"\|"complementary"\|"splitComplementary". |

#### Returns🔙

`fn`

An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.

▸ (`color`, `easingFunc?`): [`ColorToken`](types.md#ColorToken)[]

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) |
| `easingFunc?` | (`t`: `number`) => `number` |

##### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

**`Example`** 📋

```ts
import { base } from 'huetiful-js'

console.log(base("triadic")("#a1bd2f", true))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```
