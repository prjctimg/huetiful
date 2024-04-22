huetiful-js

# huetiful-js

## Table of contents

### Classes

- [Color](classes/Color.md)
- [ColorArray](classes/ColorArray.md)

### Type Aliases

- [AdaptivePaletteOptions](README.md#adaptivepaletteoptions)
- [ColorToken](README.md#colortoken)
- [Colorspaces](README.md#colorspaces)
- [DeficiencyType](README.md#deficiencytype)
- [DistributionOptions](README.md#distributionoptions)
- [DivergingScheme](README.md#divergingscheme)
- [Factor](README.md#factor)
- [QualitativeScheme](README.md#qualitativescheme)
- [ScaleValues](README.md#scalevalues)
- [SequentialScheme](README.md#sequentialscheme)
- [TailwindColorFamilies](README.md#tailwindcolorfamilies)

### Functions

- [alpha](README.md#alpha)
- [brighten](README.md#brighten)
- [color](README.md#color)
- [colorDeficiency](README.md#colordeficiency)
- [darken](README.md#darken)
- [discoverPalettes](README.md#discoverpalettes)
- [diverging](README.md#diverging)
- [earthtone](README.md#earthtone)
- [entries](README.md#entries)
- [getChannel](README.md#getchannel)
- [getComplimentaryHue](README.md#getcomplimentaryhue)
- [getContrast](README.md#getcontrast)
- [getHueFamily](README.md#gethuefamily)
- [getLuminance](README.md#getluminance)
- [getNearestColor](README.md#getnearestcolor)
- [hueShift](README.md#hueshift)
- [interpolateSpline](README.md#interpolatespline)
- [isAchromatic](README.md#isachromatic)
- [isCool](README.md#iscool)
- [isWarm](README.md#iswarm)
- [keys](README.md#keys)
- [load](README.md#load)
- [or](README.md#or)
- [overtone](README.md#overtone)
- [pairedScheme](README.md#pairedscheme)
- [pastel](README.md#pastel)
- [qualitative](README.md#qualitative)
- [scheme](README.md#scheme)
- [sequential](README.md#sequential)
- [setChannel](README.md#setchannel)
- [setLuminance](README.md#setluminance)
- [sortBy](README.md#sortby)
- [tailwindColors](README.md#tailwindcolors)
- [token](README.md#token)
- [values](README.md#values)

## Type Aliases

### AdaptivePaletteOptions

Ƭ **AdaptivePaletteOptions**: `Object`

**`Description`**

This object returns the lightMode and darkMode optimized version of a color with support to add color vision deficiency simulation to the final color result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor?` | \{ `dark?`: [`ColorToken`](README.md#colortoken) ; `light?`: [`ColorToken`](README.md#colortoken)  } |
| `backgroundColor.dark?` | [`ColorToken`](README.md#colortoken) |
| `backgroundColor.light?` | [`ColorToken`](README.md#colortoken) |
| `colorBlind?` | `boolean` |

#### Defined in

[types/types.d.ts:60](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L60)

___

### ColorToken

Ƭ **ColorToken**: `number` \| `string` \| `ColorObject` \| `ColorTuple` \| `boolean`

Any recognizable color token.

#### Defined in

[types/types.d.ts:279](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L279)

___

### Colorspaces

Ƭ **Colorspaces**: ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"oklab"`` \| ``"rgb"`` \| ``"lch"`` \| ``"jch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"oklch"`` \| ``"hsv"`` \| ``"hwb"``

The `colorspace` or `mode` to use.

#### Defined in

[types/types.d.ts:305](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L305)

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

The type of color vision defeciency.

#### Defined in

[types/types.d.ts:208](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L208)

___

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

[types/types.d.ts:163](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L163)

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

The `diverging` color scheme in the ColorBrewer colormap.

#### Defined in

[types/types.d.ts:228](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L228)

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"chroma"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

The color property being queried.

#### Defined in

[types/types.d.ts:292](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L292)

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

The `qualitative` color scheme in the ColorBrewer colormap.

#### Defined in

[types/types.d.ts:242](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L242)

___

### ScaleValues

Ƭ **ScaleValues**: ``"050"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"`` \| ``"950"``

The value of the Tailwind color.

#### Defined in

[types/types.d.ts:322](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L322)

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

The `sequential` color scheme in the ColorBrewer colormap.

#### Defined in

[types/types.d.ts:255](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L255)

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

Color families in the default TailwindCSS palette.

#### Defined in

[types/types.d.ts:338](https://github.com/prjctimg/huetiful/blob/b15852e/types/types.d.ts#L338)

## Functions

### alpha

▸ **alpha**(`color?`, `amount`): [`ColorToken`](README.md#colortoken)

Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | `'#000'` | The color with the targeted opacity/alpha channel. |
| `amount` | `string` \| `number` | `undefined` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns

[`ColorToken`](README.md#colortoken)

Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
// Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
```

#### Defined in

[src/utils.js:318](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L318)

___

### brighten

▸ **brighten**(`color`, `amount?`): [`ColorToken`](README.md#colortoken)

The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | `undefined` | The color to brighten. |
| `amount` | `number` | `0.4` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`ColorToken`](README.md#colortoken)

The brightened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { brighten } from "huetiful-js";

console.log(brighten('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[src/utils.js:514](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L514)

___

### color

▸ **color**(`color`): [`Color`](classes/Color.md)

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color token to bind. |

#### Returns

[`Color`](classes/Color.md)

A `new Color` class with all the utilities that take a single color as the first parameter bound to its prototype.

**`Example`**

```ts
import { color } from 'huetiful-js'

let wrapper = color('cyan').getHueFamily()
 // 'blue-green'
```

#### Defined in

[src/wrappers.js:910](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L910)

___

### colorDeficiency

▸ **colorDeficiency**(`deficiencyType?`): (`color`: [`ColorToken`](README.md#colortoken), `severity?`: `number`) => [`ColorToken`](README.md#colortoken)

Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | [`DeficiencyType`](README.md#deficiencytype) | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the defeciency parameter is undefined or any falsy value. |

#### Returns

`fn`

The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.

▸ (`color`, `severity?`): [`ColorToken`](README.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) |
| `severity?` | `number` |

##### Returns

[`ColorToken`](README.md#colortoken)

**`Example`**

```ts
import { colorDeficiency, token('hex') } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
```

#### Defined in

src/adaptive.js:48

___

### darken

▸ **darken**(`color?`, `amount?`): [`ColorToken`](README.md#colortoken)

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | `'#fff'` | The color to darken. |
| `amount` | `number` | `0.3` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`ColorToken`](README.md#colortoken)

The darkened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[src/utils.js:480](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L480)

___

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

[src/generators.js:170](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L170)

___

### diverging

▸ **diverging**(`scheme`): `Collection`

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`DivergingScheme`](README.md#divergingscheme) | The name of the scheme. |

#### Returns

`Collection`

The collection of colors from the specified `scheme`.

**`Example`**

```ts
import { diverging } from 'huetiful-js'

console.log(diverging("Spectral"))
//[
 '#7fc97f', '#beaed4',
 '#fdc086', '#ffff99',
 '#386cb0', '#f0027f',
 '#bf5b17', '#666666'
]
```

#### Defined in

[src/colors.js:338](https://github.com/prjctimg/huetiful/blob/b15852e/src/colors.js#L338)

___

### earthtone

▸ **earthtone**(`color`, `colorspace?`, `options?`): `string` \| `number` \| ``true`` \| `ColorObject` \| [`ColorToken`](README.md#colortoken)[]

Creates a scale of a spline interpolation between an earthtone and a color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `any` | `undefined` | The color to interpolate an earth tone with. |
| `colorspace` | `string` | `'lch'` | - |
| `options` | `Object` | `{}` | Optional overrides for customising interpolation and easing functions. |

#### Returns

`string` \| `number` \| ``true`` \| `ColorObject` \| [`ColorToken`](README.md#colortoken)[]

Collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[src/generators.js:254](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L254)

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Defined in

[src/helpers.js:35](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L35)

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Defined in

[src/helpers.js:35](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L35)

___

### getChannel

▸ **getChannel**(`mc`): (`color`: [`ColorToken`](README.md#colortoken)) => `number`

Gets the value of the specified channel on the passed in color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

▸ (`color`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) |

##### Returns

`number`

**`Example`**

```ts
import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

[src/utils.js:175](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L175)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`color`, `colorspace`, `colorObj?`): `FactObject`

Returns the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | `undefined` | The color to retrieve its complimentary hue. |
| `colorspace` | `any` | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is `false`. |

#### Returns

`FactObject`

An object with the hue family and complimentary color as keys.

**`Example`**

```ts
import { getComplimentaryHue } from "huetiful-js";

console.log(getComplimentaryHue("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
```

#### Defined in

[src/utils.js:100](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L100)

___

### getContrast

▸ **getContrast**(`color`, `against`): `number`

Gets the contrast between the passed in colors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) |
| `against` | `any` |

#### Returns

`number`

The relative luminance of the lightest color.

**`Example`**

```ts
import { getContrast } from 'huetiful-js'

console.log(getContrast("black", "white"));
// 21
```

#### Defined in

[src/utils.js:359](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L359)

___

### getHueFamily

▸ **getHueFamily**(`color`): [`TailwindColorFamilies`](README.md#tailwindcolorfamilies)

Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to query its shade or hue family. |

#### Returns

[`TailwindColorFamilies`](README.md#tailwindcolorfamilies)

The name of the hue family for example `red` or `blue-green`.

**`Example`**

```ts
import { getHueFamily } from 'huetiful-js'

console.log(getHueFamily("#310000"))
// red
```

#### Defined in

[src/utils.js:64](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L64)

___

### getLuminance

▸ **getLuminance**(`color`): `number`

Gets the luminance value of that color as defined by WCAG.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to query. |

#### Returns

`number`

The color's luminance value.

**`Example`**

```ts
import { getLuminance,colors } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map(getLuminance));

// [
  0.3595097699638928,  0.3635745068550118,
  0.3596908494424909,  0.3662525955988395,
 0.36634113914916244, 0.32958967582076004,
 0.41393242740130043,  0.5789820793721787,
  0.6356386777636567,  0.6463720036841869,
  0.5525691083297639,  0.4961850321908156,
  0.5140644334784611,  0.4401325598899415,
 0.36299191043315415,  0.3358285501372504,
 0.34737270839643575, 0.37670102542883394,
  0.3464512307705231, 0.34012939384198054
]
```

#### Defined in

[src/utils.js:230](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L230)

___

### getNearestColor

▸ **getNearestColor**(`collection`, `against`, `num?`): `Collection`

Returns the nearest color(s) in a collection as compared `against` the passed in color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to search for nearest colors. |
| `against` | [`ColorToken`](README.md#colortoken) | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

`Collection`

A collection of colors.

**`Example`**

```ts
let cols = colors('all', '500')

console.log(getNearestColor(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[src/colors.js:36](https://github.com/prjctimg/huetiful/blob/b15852e/src/colors.js#L36)

___

### hueShift

▸ **hueShift**(`color`, `colorspace?`, `options?`): [`ColorToken`](README.md#colortoken)[]

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down) from a single color. Min and max lightness values determine how light or dark our colour will be at either extreme.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `any` | `undefined` | The color to use as the scheme of the hueshift. Colors are internally converted to LCH. |
| `colorspace` | `string` | `'lch'` | - |
| `options` | `Object` | `{}` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorToken`](README.md#colortoken)[]

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

[src/generators.js:307](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L307)

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

[src/generators.js:375](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L375)

___

### isAchromatic

▸ **isAchromatic**(`color`, `colorspace?`): `boolean`

Checks if a color is achromatic (without hue or simply grayscale).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to test if it is achromatic or not. |
| `colorspace?` | [`Colorspaces`](README.md#colorspaces) | The colorspace to use when checking if the `color` is grayscale or not. |

#### Returns

`boolean`

True if the color is achromatic else false.

**`Example`**

```ts
import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"

isAchromatic('pink')
// false

let sample = [
 "#164100",
 "#ffff00",
 "#310000",
 'pink'
];

console.log(sample.map(isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(isAchromatic));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

[src/utils.js:578](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L578)

___

### isCool

▸ **isCool**(`color`): `boolean`

Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to check the temperature. |

#### Returns

`boolean`

True if the color is cool else false.

**`Example`**

```ts
import { isCool } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]
```

#### Defined in

[src/utils.js:428](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L428)

___

### isWarm

▸ **isWarm**(`color`): `boolean`

Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to check the temperature. |

#### Returns

`boolean`

True if the color is warm else false.

**`Example`**

```ts
import { isWarm } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isWarm(sample[2]));
//true

console.log(sample.map(isWarm));

// [ false, true,  false]
```

#### Defined in

[src/utils.js:461](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L461)

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

[src/helpers.js:35](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L35)

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

[src/helpers.js:35](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L35)

___

### load

▸ **load**(`colors`): [`ColorArray`](classes/ColorArray.md)

A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `Collection` | A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token. |

#### Returns

[`ColorArray`](classes/ColorArray.md)

A new instance of the `ColorArray` class with the passed in collection bound to it.

#### Defined in

[src/wrappers.js:190](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L190)

___

### or

▸ **or**(`arg`, `def`): `any`

Returns the first truthy value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | The value to check |
| `def` | `any` | The value to cast if arg is falsy |

#### Returns

`any`

The first truthy value

#### Defined in

[src/helpers.js:44](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L44)

___

### overtone

▸ **overtone**(`color`): `string`

Returns the hue which is biasing the passed in color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to query its overtone. |

#### Returns

`string`

The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.

**`Example`**

```ts
import { overtone } from "huetiful-js";

console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
```

#### Defined in

[src/utils.js:384](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L384)

___

### pairedScheme

▸ **pairedScheme**(`color`, `options`): `string` \| `number` \| `boolean` \| `ColorObject` \| [`ColorToken`](README.md#colortoken)[]

Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to return a paired color scheme from. |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

`string` \| `number` \| `boolean` \| `ColorObject` \| [`ColorToken`](README.md#colortoken)[]

An array containing the paired scheme.Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[src/generators.js:475](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L475)

___

### pastel

▸ **pastel**(`color`): [`ColorToken`](README.md#colortoken)

Returns a random pastel variant of the passed in color as a color object in the mode `hsv`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to return a pastel variant of. |

#### Returns

[`ColorToken`](README.md#colortoken)

A random pastel color.

**`Example`**

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
```

#### Defined in

[src/generators.js:540](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L540)

___

### qualitative

▸ **qualitative**(`scheme`): `Collection`

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`QualitativeScheme`](README.md#qualitativescheme) | The name of the scheme |

#### Returns

`Collection`

The collection of colors from the specified `scheme`.

**`Example`**

```ts
import { qualitative } from 'huetiful-js'

console.log(qualitative("Accent"))
// [
 '#7fc97f', '#beaed4',
 '#fdc086', '#ffff99',
 '#386cb0', '#f0027f',
 '#bf5b17', '#666666'
]
```

#### Defined in

[src/colors.js:484](https://github.com/prjctimg/huetiful/blob/b15852e/src/colors.js#L484)

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

[src/generators.js:89](https://github.com/prjctimg/huetiful/blob/b15852e/src/generators.js#L89)

___

### sequential

▸ **sequential**(`scheme`): [`ColorToken`](README.md#colortoken) \| `Collection`

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`SequentialScheme`](README.md#sequentialscheme) | The name of the scheme. |

#### Returns

[`ColorToken`](README.md#colortoken) \| `Collection`

A collection of colors in the specified colorspace. The default is hex if `colorspace` is `undefined.`

**`Example`**

```ts
import { sequential } from 'huetiful-js

console.log(sequential("OrRd"))

// [
 '#fff7ec', '#fee8c8',
 '#fdd49e', '#fdbb84',
 '#fc8d59', '#ef6548',
 '#d7301f', '#b30000',
 '#7f0000'
]
```

#### Defined in

[src/colors.js:100](https://github.com/prjctimg/huetiful/blob/b15852e/src/colors.js#L100)

___

### setChannel

▸ **setChannel**(`mc`): (`color`: [`ColorToken`](README.md#colortoken), `value`: `string` \| `number`) => [`ColorToken`](README.md#colortoken)

Sets the value for the specified channel in a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns

`fn`

▸ (`color`, `value`): [`ColorToken`](README.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) |
| `value` | `string` \| `number` |

##### Returns

[`ColorToken`](README.md#colortoken)

**`Example`**

```ts
import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

#### Defined in

[src/utils.js:129](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L129)

___

### setLuminance

▸ **setLuminance**(`color`, `amount`): [`ColorToken`](README.md#colortoken)

Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) | The color to set luminance |
| `amount` | `any` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns

[`ColorToken`](README.md#colortoken)

The mutated color with the modified properties. Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
```

#### Defined in

[src/utils.js:252](https://github.com/prjctimg/huetiful/blob/b15852e/src/utils.js#L252)

___

### sortBy

▸ **sortBy**(`factor`, `order?`, `options?`): (`collection`: `Collection`) => `Collection`

Sorts colors according to the specified `factor`. The supported options are:

* `'contrast'` - Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color  which can be specified in the `options` object.
* `'lightness'` - Sorts colors according to their lightness.
* `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
* `'distance'` - Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.
* `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](README.md#factor) | `undefined` | The factor to use for sorting the colors. |
| `order?` | ``"asc"`` \| ``"desc"`` | `undefined` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`). |
| `options` | `Object` | `undefined` |  |
| `options.against` | [`ColorToken`](README.md#colortoken) | `'#fff'` |  |
| `options.colorspace` | [`Colorspaces`](README.md#colorspaces) | `'lch'` |  |

#### Returns

`fn`

▸ (`collection`): `Collection`

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection` |

##### Returns

`Collection`

**`Example`**

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy('distance','desc',{ against:'yellow'})(sample)
)

// [ 'brown', 'red', 'green', 'purple' ]
```

#### Defined in

[src/sortBy.js:50](https://github.com/prjctimg/huetiful/blob/b15852e/src/sortBy.js#L50)

___

### tailwindColors

▸ **tailwindColors**(`shade`, `value`): `string` \| `string`[]

Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If called with no parameters, it returns an array of colors from `050` to `900`. If called with parameter will return the specified shade value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | [`TailwindColorFamilies`](README.md#tailwindcolorfamilies) \| ``"all"`` | The hue family to return. |
| `value` | [`ScaleValues`](README.md#scalevalues) | The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid. |

#### Returns

`string` \| `string`[]

A hex string value or array of hex strings.

**`Example`**

```ts
import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
console.log(red());
// [
 '#fef2f2', '#fee2e2',
 '#fecaca', '#fca5a5',
 '#f87171', '#ef4444',
 '#dc2626', '#b91c1c',
 '#991b1b', '#7f1d1d'
]

console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'
```

#### Defined in

[src/colors.js:615](https://github.com/prjctimg/huetiful/blob/b15852e/src/colors.js#L615)

___

### token

▸ **token**(`kind`, `options?`): (`color`: [`ColorToken`](README.md#colortoken)) => [`ColorToken`](README.md#colortoken)

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
| `options.sourceMode` | [`Colorspaces`](README.md#colorspaces) | `'rgb'` |
| `options.targetMode` | [`Colorspaces`](README.md#colorspaces) | `'lch'` |

#### Returns

`fn`

▸ (`color`): [`ColorToken`](README.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](README.md#colortoken) |

##### Returns

[`ColorToken`](README.md#colortoken)

#### Defined in

[src/token.js:61](https://github.com/prjctimg/huetiful/blob/b15852e/src/token.js#L61)

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Defined in

[src/helpers.js:35](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L35)

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Defined in

[src/helpers.js:35](https://github.com/prjctimg/huetiful/blob/b15852e/src/helpers.js#L35)
