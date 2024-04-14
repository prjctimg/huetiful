[huetiful-js](../README.md) / generators

# Module: generators

## Table of contents

### Type Aliases

- [DistributionOptions](generators.md#distributionoptions)
- [Factor](generators.md#factor)

### Functions

- [discoverPalettes](generators.md#discoverpalettes)
- [distribute](generators.md#distribute)
- [earthtone](generators.md#earthtone)
- [hueShift](generators.md#hueshift)
- [interpolateSpline](generators.md#interpolatespline)
- [pairedScheme](generators.md#pairedscheme)
- [pastel](generators.md#pastel)
- [scheme](generators.md#scheme)

## Type Aliases

### DistributionOptions

Ƭ **DistributionOptions**: `Object`

Override options for factor distributed palettes.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `UniformColorSpaces` | The colorspace to distribute the specified factor in. Defaults to `lch` when the passed in mode has no `'chroma' \| 'hue' \| 'lightness'` channel |
| `excludeAchromatic?` | `boolean` | Exclude grayscale colors from the distribution operation. Default is `false` |
| `excludeSelf?` | `boolean` | Exclude the color with the specified `extremum` from the distribution operation. Default is `false` |
| `extremum?` | ``"min"`` \| ``"max"`` \| ``"mean"`` | The extreme end for the `factor` we wish to distribute. If `mean` is picked, it will map the `average` value of that factor in the passed in collection. |
| `hueFixup?` | ``"shorter"`` \| ``"longer"`` | The fixup function to use when distributing the hue factor. |

#### Defined in

[types/types.d.ts:163](https://github.com/prjctimg/huetiful/blob/cf8e303/types/types.d.ts#L163)

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"temp"`` \| ``"chroma"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

#### Defined in

[types/types.d.ts:275](https://github.com/prjctimg/huetiful/blob/cf8e303/types/types.d.ts#L275)

## Functions

### discoverPalettes

▸ **discoverPalettes**(`colors?`, `schemeType`, `colorspace?`): `Collection`

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` difference metric for a set of predefined palettes. The function does not work on achromatic colors, you may use `isAchromatic` to filter grays from your collection in the mode `colorspace` before passing it to the function.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | `Collection` | `[]` | The collection of colors to create palettes from. Preferably use 6 or more colors for better results. |
| `schemeType` | `SchemeType` | `undefined` | (Optional) The palette type you want to return. |
| `colorspace` | `string` | `'lch'` | - |

#### Returns

`Collection`

An array of colors if the `schemeType` parameter is specified else it returns a `Map` object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

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

[src/generators.js:176](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L176)

___

### distribute

▸ **distribute**(`factor?`, `options?`): (`collection`: `Collection`, `options?`: [`DistributionOptions`](generators.md#distributionoptions)) => `Collection`

Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factor?` | [`Factor`](generators.md#factor) | The property you want to distribute to the colors in the collection for example `hue \| luminance` |
| `options?` | [`DistributionOptions`](generators.md#distributionoptions) | Optional overrides to change the default configursation |

#### Returns

`fn`

▸ (`collection`, `options?`): `Collection`

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection` |
| `options?` | [`DistributionOptions`](generators.md#distributionoptions) |

##### Returns

`Collection`

#### Defined in

[src/generators.js:634](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L634)

___

### earthtone

▸ **earthtone**(`color`, `colorspace?`, `options?`): `string` \| `string`[]

Creates a scale of a spline interpolation between an earthtone and a color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `any` | `undefined` | The color to interpolate an earth tone with. |
| `colorspace` | `string` | `'lch'` | - |
| `options` | `Object` | `{}` | Optional overrides for customising interpolation and easing functions. |

#### Returns

`string` \| `string`[]

Collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[src/generators.js:260](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L260)

___

### hueShift

▸ **hueShift**(`color`, `colorspace?`, `options?`): `string`[]

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down) from a single color. Min and max lightness values determine how light or dark our colour will be at either extreme.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `any` | `undefined` | The color to use as the scheme of the hueshift. Colors are internally converted to LCH. |
| `colorspace` | `string` | `'lch'` | - |
| `options` | `Object` | `{}` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

`string`[]

A collection of the hueshifted colors. The length of the resultant array is the number of `iterations` multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the `ColorToken` type of the passed in color.

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

[src/generators.js:313](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L313)

___

### interpolateSpline

▸ **interpolateSpline**(`colors?`, `colorspace?`, `iterations`, `kind?`, `closed?`, `options?`): `any`

Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | `Collection` | `[]` | The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result. |
| `colorspace` | `string` | `'lch'` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `iterations` | `any` | `undefined` | - |
| `kind` | `string` | `'basis'` | The type of the spline interpolation method. Default is basis. |
| `closed` | `boolean` | `false` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is `false` |
| `options` | `Object` | `{}` | Optional channel specific overrides. |

#### Returns

`any`

A collection of colors resulting from the interpolation. Preserves the `ColorToken` type of the passed in color.

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

[src/generators.js:381](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L381)

___

### pairedScheme

▸ **pairedScheme**(`color`, `options`): `string` \| `string`[]

Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to return a paired color scheme from. |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

`string` \| `string`[]

An array containing the paired scheme.Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[src/generators.js:481](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L481)

___

### pastel

▸ **pastel**(`color`, `colorspace`): [`ColorToken`](accessibility.md#colortoken)

Returns a random pastel variant of the passed in color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to return a pastel variant of. |
| `colorspace` | `any` | - |

#### Returns

[`ColorToken`](accessibility.md#colortoken)

A random pastel color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
```

#### Defined in

[src/generators.js:546](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L546)

___

### scheme

▸ **scheme**(`schemeType?`): `Collection`

Generates a randomised classic color scheme from a single color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `schemeType` | `string` | `'analogous'` | Any classic color scheme either . * |

#### Returns

`Collection`

A collection of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[src/generators.js:94](https://github.com/prjctimg/huetiful/blob/cf8e303/src/generators.js#L94)
