huetiful-js

# huetiful-js

## Table of contents

### Classes

- [Color](classes/Color.md)
- [ColorArray](classes/ColorArray.md)

### Functions

- [achromatic](README.md#achromatic)
- [adaptive](README.md#adaptive)
- [alpha](README.md#alpha)
- [brighten](README.md#brighten)
- [color](README.md#color)
- [colors](README.md#colors)
- [complimentary](README.md#complimentary)
- [contrast](README.md#contrast)
- [darken](README.md#darken)
- [deficiency](README.md#deficiency)
- [discover](README.md#discover)
- [distribute](README.md#distribute)
- [diverging](README.md#diverging)
- [earthtone](README.md#earthtone)
- [family](README.md#family)
- [filterBy](README.md#filterby)
- [hueshift](README.md#hueshift)
- [interpolator](README.md#interpolator)
- [load](README.md#load)
- [luminance](README.md#luminance)
- [mc](README.md#mc)
- [nearest](README.md#nearest)
- [overtone](README.md#overtone)
- [pair](README.md#pair)
- [pastel](README.md#pastel)
- [qualitative](README.md#qualitative)
- [scheme](README.md#scheme)
- [sequential](README.md#sequential)
- [sortBy](README.md#sortby)
- [stats](README.md#stats)
- [temp](README.md#temp)
- [token](README.md#token)

### Type Aliases

- [AdaptivePaletteOptions](README.md#adaptivepaletteoptions)
- [Collection](README.md#collection)
- [ColorToken](README.md#colortoken)
- [Colorspaces](README.md#colorspaces)
- [DeficiencyOptions](README.md#deficiencyoptions)
- [DeficiencyType](README.md#deficiencytype)
- [DivergingScheme](README.md#divergingscheme)
- [Factor](README.md#factor)
- [FilterByOptions](README.md#filterbyoptions)
- [HueFamily](README.md#huefamily)
- [QualitativeScheme](README.md#qualitativescheme)
- [ScaleValues](README.md#scalevalues)
- [SequentialScheme](README.md#sequentialscheme)
- [SortByOptions](README.md#sortbyoptions)
- [TailwindColorFamilies](README.md#tailwindcolorfamilies)
- [TokenOptions](README.md#tokenoptions)

## Functions

### achromatic

▸ **achromatic**(`color`): `boolean`

Checks if a color token is achromatic (without hue or simply grayscale).

A color token is considered achromatic or gray if:

* It has a falsy chroma/saturation channel when its channel values are computed in a hue based colorspace because the hue channel depends on the chroma channel for the final color to be non-gray (or colorful).
* It has a falsy hue channel (usually happens if you use a custom interpolation method other than interpolatorLinear and one of the hue channels in the interpolation has a falsy channel) which makes the hue `NaN`.
* All its `[r,g,b]` channels have equal values since grays are a result of interpolating black (`['rgb',0,0,0]`) and white (`['rgb',1,1,1]`). Therefore black and white return `false` because they're not grays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color token to test if it is achromatic or not. |

#### Returns

`boolean`

True if the color token is achromatic else false.

**`Example`**

```ts
import { achromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"

achromatic('pink')
// false

let sample = [
 "#164100",
 "#ffff00",
 "#310000",
 'pink'
];

console.log(sample.map(achromatic));

// [false, false, false,false]

achromatic('gray')
// Returns true

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(achromatic));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

[achromatic.js:61](https://github.com/prjctimg/huetiful/blob/6a7e153/src/achromatic.js#L61)

___

### adaptive

▸ **adaptive**(`color`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |
| `options` | [`AdaptivePaletteOptions`](README.md#adaptivepaletteoptions) |

#### Returns

`void`

#### Defined in

[adaptive.js:69](https://github.com/prjctimg/huetiful/blob/6a7e153/src/adaptive.js#L69)

___

### alpha

▸ **alpha**(`color`, `amount`): `string` \| `number`

Returns the color token's alpha channel value if the the `amount` parameter is not passed in else it sets the color token's alpha channel with the `amount` specified.

* Also supports math expressions as a `string` for the `amount` parameter. For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color with the opacity/alpha channel to retrieve or set. |
| `amount` | `string` \| `number` | The value to apply to the opacity channel. The value is between `[0,1]` |

#### Returns

`string` \| `number`

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

[alpha.js:31](https://github.com/prjctimg/huetiful/blob/6a7e153/src/alpha.js#L31)

___

### brighten

▸ **brighten**(`color`, `amount`): `string`

The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to brighten. |
| `amount` | `number` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.1`. |

#### Returns

`string`

**`Example`**

```ts
import { brighten } from "huetiful-js";

console.log(brighten('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[lightness.js:47](https://github.com/prjctimg/huetiful/blob/6a7e153/src/lightness.js#L47)

___

### color

▸ **color**(`color`): [`Color`](classes/Color.md)

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color token to bind. |

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

[wrappers.js:992](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L992)

___

### colors

▸ **colors**(`shade`, `value`): `string` \| `string`[]

Returns TailwindCSS color value(s) from the default palette.

The function behaves as follows:

* If called with both `shade` and `value` parameters, it returns that color as a hex string. For example `'blue'` and `'500'` would return the equivalent of `blue-500`.
* If called with no parameters or just the `'all'` parameter as the `shade`, it returns an array of colors from `'050'` to `'900'` for every `shade`. 
* If the `shade ` is `'all'` and the `value` is specified, it returns an array of colors at the specified `value` for each `shade`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | [`TailwindColorFamilies`](README.md#tailwindcolorfamilies) \| ``"all"`` | The hue family to return. |
| `value` | [`ScaleValues`](README.md#scalevalues) | The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid. |

#### Returns

`string` \| `string`[]

**`Example`**

```ts
import { colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = colors("red");
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

[colors.js:53](https://github.com/prjctimg/huetiful/blob/6a7e153/src/colors.js#L53)

___

### complimentary

▸ **complimentary**(`baseColor`, `obj?`): `any`

Returns the complimentary color of the passed in color token. A complimentary color is 180 degrees away on the hue channel.

The object (if the `obj` parameter is `true`) returns:

* The complimentary color for the passed in color token
* The hue family from which the complimentary color was found.

The function is internally guarded against achromatic colors which means no action will be done on a gray color and it will be returned as is. Pure black or white (`'#000000'` and `'#ffffff'` respectively) may return unexpected results.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseColor` | `any` | `undefined` | The color to retrieve its complimentary equivalent. |
| `obj` | `boolean` | `false` | Optional boolean whether to return an object with the result color's hue family or just the result color. Default is `false`. |

#### Returns

`any`

**`Example`**

```ts
import { complimentary } from "huetiful-js";

console.log(complimentary("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complimentary("purple"))
// #005700ff
```

#### Defined in

[complimentary.js:34](https://github.com/prjctimg/huetiful/blob/6a7e153/src/complimentary.js#L34)

___

### contrast

▸ **contrast**(`a`, `b`): `number`

Gets the contrast between the passed in colors.

Swapping color `a` and `b` in the parameter list doesn't change the resulting value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | First color to query. |
| `b` | `any` | The color to compare against. |

#### Returns

`number`

**`Example`**

```ts
import { contrast } from 'huetiful-js'

console.log(contrast("black", "white"));
// 21
```

#### Defined in

[contrast.js:22](https://github.com/prjctimg/huetiful/blob/6a7e153/src/contrast.js#L22)

___

### darken

▸ **darken**(`color`, `amount`): `string`

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to darken. |
| `amount` | `number` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`. |

#### Returns

`string`

**`Example`**

```ts
import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[lightness.js:30](https://github.com/prjctimg/huetiful/blob/6a7e153/src/lightness.js#L30)

___

### deficiency

▸ **deficiency**(`color`, `options?`): `any`

Simulates how a color may be perceived by people with color vision deficiency.

To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:

* 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
* 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
* 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to return its simulated variant |
| `options` | [`DeficiencyOptions`](README.md#deficiencyoptions) |  |

#### Returns

`any`

**`Example`**

```ts
import { deficiency, token('hex') } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = deficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = deficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
```

#### Defined in

[deficiency.js:51](https://github.com/prjctimg/huetiful/blob/6a7e153/src/deficiency.js#L51)

___

### discover

▸ **discover**(`colors?`, `options?`): `any`

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes. 

The function returns different values based on the `kind` parameter passed in:

* An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
* Else it returns an object of all the palette types as keys and their values as an array of colors. 

If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | `any` | `[]` | The collection of colors to create palettes from. Preferably use 6 or more colors for better results. |
| `options` | `DiscoverOptions` | `undefined` |  |

#### Returns

`any`

**`Example`**

```ts
import { discover } from 'huetiful-js'

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

console.log(discover(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

#### Defined in

[discover.js:45](https://github.com/prjctimg/huetiful/blob/6a7e153/src/discover.js#L45)

___

### distribute

▸ **distribute**(`factor?`, `options?`): (`collection`: `any`, `options?`: `DistributionOptions`) => `any`

Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factor?` | [`Factor`](README.md#factor) | The property you want to distribute to the colors in the collection for example `hue \| luminance` |
| `options?` | `DistributionOptions` | Optional overrides to change the default configursation |

#### Returns

`fn`

▸ (`collection`, `options?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `any` |
| `options?` | `DistributionOptions` |

##### Returns

`any`

#### Defined in

[distribute.js:13](https://github.com/prjctimg/huetiful/blob/6a7e153/src/distribute.js#L13)

___

### diverging

▸ **diverging**(`scheme`): `any`

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`DivergingScheme`](README.md#divergingscheme) | The name of the scheme. |

#### Returns

`any`

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

[brewer.js:287](https://github.com/prjctimg/huetiful/blob/6a7e153/src/brewer.js#L287)

___

### earthtone

▸ **earthtone**(`baseColor`, `options`): `string` \| `string`[]

Creates a color scale between an earth tone and any color token using spline interpolation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to interpolate an earth tone with. |
| `options` | `EarthtoneOptions` | Optional overrides for customising interpolation and easing functions. |

#### Returns

`string` \| `string`[]

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[earthtone.js:27](https://github.com/prjctimg/huetiful/blob/6a7e153/src/earthtone.js#L27)

___

### family

▸ **family**(`color`): [`HueFamily`](README.md#huefamily)

Gets the hue family which a color belongs to with the overtone included (if it has one.).

For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to query its shade or hue family. |

#### Returns

[`HueFamily`](README.md#huefamily)

**`Example`**

```ts
import { family } from 'huetiful-js'

console.log(family("#310000"))
// 'red'
```

#### Defined in

[family.js:23](https://github.com/prjctimg/huetiful/blob/6a7e153/src/family.js#L23)

___

### filterBy

▸ **filterBy**(`collection`, `options?`): `any`

Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
* `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
* `'lightness'` - Returns colors in the specified lightness range.
* `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

* `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
* `luminance` - Returns colors in the specified luminance range.
* `'hue'` - Returns colors in the specified hue ranges between 0 to 360.

For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | The collection of colors to filter. |
| `options` | [`FilterByOptions`](README.md#filterbyoptions) |  |

#### Returns

`any`

**`See`**

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

**`Example`**

```ts
import { filterBy } from 'huetiful-js'

let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

// Filtering colors by their relative contrast against 'green'. 
// The collection will include colors with a relative contrast equal to 3 or greater.

console.log(filterBy('contrast','>=3')(sample,{ against:'green' }))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

[filterBy.js:63](https://github.com/prjctimg/huetiful/blob/6a7e153/src/filterBy.js#L63)

___

### hueshift

▸ **hueshift**(`baseColor`, `options?`): `string`[]

Creates a palette of hue shifted colors from the passed in color.

Hue shifting means that:

* As a color becomes lighter, its hue shifts up (increases).
* As a color becomes darker its hue shifts down (decreases).

The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.

 The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to use as the base of the palette. |
| `options` | `HueshiftOptions` | The optional overrides object. |

#### Returns

`string`[]

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

[hueshift.js:43](https://github.com/prjctimg/huetiful/blob/6a7e153/src/hueshift.js#L43)

___

### interpolator

▸ **interpolator**(`baseColors?`, `options?`): `any`

Interpolates the passed in colors and returns a collection of colors from the interpolation.

Some things to keep in mind when creating color scales using this function:

* To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object. 
* If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
* If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseColors` | `any` | `[]` | The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray. |
| `options` | `InterpolatorOptions` | `undefined` | Optional overrides. |

#### Returns

`any`

**`Example`**

```ts
import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], { num:8 }));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
```

#### Defined in

[interpolator.js:57](https://github.com/prjctimg/huetiful/blob/6a7e153/src/interpolator.js#L57)

___

### load

▸ **load**(`colors`): [`ColorArray`](classes/ColorArray.md)

A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `any` | A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token. |

#### Returns

[`ColorArray`](classes/ColorArray.md)

A new instance of the `ColorArray` class with the passed in collection bound to it.

#### Defined in

[wrappers.js:299](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L299)

___

### luminance

▸ **luminance**(`color`, `amount?`): `string` \| `number`

Gets the luminance of the passed in color token.

If the `amount` parameter is not passed in else it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to retrieve or adjust luminance. |
| `amount?` | `number` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns

`string` \| `number`

**`Example`**

```ts
import { luminance } from 'huetiful-js'

// Getting the luminance

console.log(luminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map((c) => luminance(c)));

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

// setting the luminance

let myColor = luminance('#a1bd2f', 0.5)

console.log(luminance(myColor))
// 0.4999999136285792
```

#### Defined in

[luminance.js:46](https://github.com/prjctimg/huetiful/blob/6a7e153/src/luminance.js#L46)

___

### mc

▸ **mc**(`modeChannel`): (`color`: `any`, `value?`: `string` \| `number`) => `any`

Sets the value of the specified channel on the passed in color.

If the `amount` parameter is `undefined` it gets the value of the specified channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modeChannel` | `string` | The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

▸ (`color`, `value?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |
| `value?` | `string` \| `number` |

##### Returns

`any`

**`Example`**

```ts
import { mc } from 'huetiful-js'

console.log(mc('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

[mc.js:23](https://github.com/prjctimg/huetiful/blob/6a7e153/src/mc.js#L23)

___

### nearest

▸ **nearest**(`collection`, `against`, `num?`): `any`

Returns the nearest color(s) in a collection as compared `against` the passed in color using the `differenceHyab` metric function.

* To get the nearest color from the Tailwind CSS default palette pass in the string `tailwind` as the `collection` parameter.
* If the `num` parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `any` | `undefined` | The collection of colors to search for nearest colors. |
| `against` | `any` | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

`any`

**`Example`**

```ts
let cols = colors('all', '500')

console.log(nearest(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[nearest.js:30](https://github.com/prjctimg/huetiful/blob/6a7e153/src/nearest.js#L30)

___

### overtone

▸ **overtone**(`color`): `string` \| ``false``

Returns the name of the hue family which is biasing the passed in color.

* If an achromatic color is passed in it returns the string `'gray'`
* If the color has no bias it returns `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to query its overtone. |

#### Returns

`string` \| ``false``

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

[overtone.js:29](https://github.com/prjctimg/huetiful/blob/6a7e153/src/overtone.js#L29)

___

### pair

▸ **pair**(`baseColor`, `options`): `any`

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to return a paired color scheme from. |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

`any`

**`Example`**

```ts
import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,num:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[pair.js:29](https://github.com/prjctimg/huetiful/blob/6a7e153/src/pair.js#L29)

___

### pastel

▸ **pastel**(`baseColor`): `any`

Returns a random pastel variant of the passed in color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to return a pastel variant of. |

#### Returns

`any`

A random pastel color.

**`Example`**

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
```

#### Defined in

[pastel.js:22](https://github.com/prjctimg/huetiful/blob/6a7e153/src/pastel.js#L22)

___

### qualitative

▸ **qualitative**(`scheme`): `any`

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`QualitativeScheme`](README.md#qualitativescheme) | The name of the scheme |

#### Returns

`any`

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

[brewer.js:429](https://github.com/prjctimg/huetiful/blob/6a7e153/src/brewer.js#L429)

___

### scheme

▸ **scheme**(`baseColor?`, `options`): `any`

Generates a randomised classic color scheme from the passed in color.

The classic palette types are:

* `triadic` - Picks 3 colors 120 degrees apart.
* `tetradic` - Picks 4 colors 90 degrees apart.
* `complimentary` - Picks 2 colors 180 degrees apart.
* `monochromatic` - Picks `num` amount of colors from the same hue family   .
* `analogous` - Picks 3 colors 12 degrees apart.

The `kind` parameter can either be a string or an array:

* If it is an array, each element should be a `kind` of palette. 
It will return a color map with the array elements as keys.
Duplicate values are simply ignored.
* If it is a string it will return an array of colors of the specified `kind` of palette.
* If it is falsy it will return a color map of all palettes.

Note that the `num` parameter works on the `monochromatic` palette type only.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseColor` | `string` | `'cyan'` | The color to create the palette(s) from. |
| `options` | `SchemeOptions` | `undefined` | Optional overrides. |

#### Returns

`any`

**`Example`**

```ts
import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[scheme.js:53](https://github.com/prjctimg/huetiful/blob/6a7e153/src/scheme.js#L53)

___

### sequential

▸ **sequential**(`scheme`): `any`

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`SequentialScheme`](README.md#sequentialscheme) | The name of the scheme. |

#### Returns

`any`

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

[brewer.js:53](https://github.com/prjctimg/huetiful/blob/6a7e153/src/brewer.js#L53)

___

### sortBy

▸ **sortBy**(`collection`, `options?`): `any`

Sorts colors according to the specified `factor`. The supported options are:

* `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
The contrast is tested `against` a comparison color  which can be specified in the `options` object.
* `'lightness'` - Sorts colors according to their lightness.
* `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
* `'distance'` - Sorts colors according to their distance.
The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
* `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

The return type is determined by the type of `collection`:

* Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
* `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | The `collection` of colors to sort. |
| `options` | [`SortByOptions`](README.md#sortbyoptions) |  |

#### Returns

`any`

**`Example`**

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy(sample,{ against:'yellow' kind:'distance',order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
```

#### Defined in

[sortBy.js:46](https://github.com/prjctimg/huetiful/blob/6a7e153/src/sortBy.js#L46)

___

### stats

▸ **stats**(`collection`, `options?`): `Stats`

Computes statistical values about the passed in color collection.

The topmost properties from each returned `factor` object are:

* `against` - The color being used for comparison.

Required for the `distance` and `contrast` factors.
If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
* `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).

* `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
* `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
* `mean` - The average value for the `factor`.
* `displayable` - The percentage of the displayable or colors with channel ranges that can be rendered in  that colorspace when converted to RGB.

The `mean` property can be overloaded by the `relativeMean` option:

* If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | The collection to compute stats from. Any collection with color tokens as values will work. |
| `options` | `StatsOptions` | Optional parameters to specify how the data should be computed. |

#### Returns

`Stats`

#### Defined in

[stats.js:48](https://github.com/prjctimg/huetiful/blob/6a7e153/src/stats.js#L48)

___

### temp

▸ **temp**(`color`): ``"cool"`` \| ``"warm"``

Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to check the temperature. |

#### Returns

``"cool"`` \| ``"warm"``

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

[temp.js:39](https://github.com/prjctimg/huetiful/blob/6a7e153/src/temp.js#L39)

___

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
| `options` | [`TokenOptions`](README.md#tokenoptions) |  |

#### Returns

`any`

#### Defined in

[token.js:51](https://github.com/prjctimg/huetiful/blob/6a7e153/src/token.js#L51)

## Type Aliases

### AdaptivePaletteOptions

Ƭ **AdaptivePaletteOptions**: `Object`

**`Description`**

This object returns the lightMode and darkMode optimized version of a color with support to add color vision deficiency simulation to the final color result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor?` | \{ `dark?`: `ColorToken` ; `light?`: `ColorToken`  } |
| `backgroundColor.dark?` | `ColorToken` |
| `backgroundColor.light?` | `ColorToken` |
| `colorBlind?` | `boolean` |

#### Defined in

[types.d.ts:50](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L50)

___

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[filterBy.js:3](https://github.com/prjctimg/huetiful/blob/6a7e153/src/filterBy.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[mc.js:2](https://github.com/prjctimg/huetiful/blob/6a7e153/src/mc.js#L2)

___

### Colorspaces

Ƭ **Colorspaces**: ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"oklab"`` \| ``"rgb"`` \| ``"lch"`` \| ``"jch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"oklch"`` \| ``"hsv"`` \| ``"hwb"``

The `colorspace` or `mode` to use.

#### Defined in

[types.d.ts:432](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L432)

___

### DeficiencyOptions

Ƭ **DeficiencyOptions**: `Object`

Overrides to specify the type of color blindness and filter intensity.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind?` | [`DeficiencyType`](README.md#deficiencytype) | The type of color vision deficiency. Default is `'red'` |
| `severity?` | `number` | The intensity of the filter. The exepected value is between [0,1]. Default is `0.1`. |
| `token?` | [`TokenOptions`](README.md#tokenoptions) | Specify the parsing behaviour and change output type of the `ColorToken`. |

#### Defined in

[types.d.ts:204](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L204)

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

The type of color vision defeciency.

#### Defined in

[types.d.ts:335](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L335)

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

The `diverging` color scheme in the ColorBrewer colormap.

#### Defined in

[types.d.ts:355](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L355)

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"chroma"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

The color property being queried.

#### Defined in

[types.d.ts:419](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L419)

___

### FilterByOptions

Ƭ **FilterByOptions**: `Object`

Overrides for setting filtering criterion, expected ranges and other behaviour.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | `ColorToken` | The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor. |
| `colorspace?` | [`Colorspaces`](README.md#colorspaces) | The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' \| 'contrast' \| 'distance'`. |
| `end?` | `number` \| `string` | The maximum end of the `factor` range. |
| `factor?` | ``"hue"`` | The factor to use as a filtering criterion. Default is `'hue'` |
| `start?` | `number` \| `string` | The minimum end of the `factor` range. |

#### Defined in

[types.d.ts:159](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L159)

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

Basic color families and their overtoned variants,

#### Defined in

[types.d.ts:340](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L340)

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

The `qualitative` color scheme in the ColorBrewer colormap.

#### Defined in

[types.d.ts:369](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L369)

___

### ScaleValues

Ƭ **ScaleValues**: ``"050"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"`` \| ``"950"``

The value of the Tailwind color.

#### Defined in

[types.d.ts:449](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L449)

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

The `sequential` color scheme in the ColorBrewer colormap.

#### Defined in

[types.d.ts:382](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L382)

___

### SortByOptions

Ƭ **SortByOptions**: `Object`

Options for specifying sorting conditions.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | `ColorToken` | The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor. |
| `colorspace?` | [`Colorspaces`](README.md#colorspaces) | The colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' \| 'contrast' \| 'distance'`. |
| `factor?` | [`Factor`](README.md#factor) | The factor to use for sorting the colors. |
| `order?` | ``"asc"`` \| ``"desc"`` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`). |

#### Defined in

[types.d.ts:269](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L269)

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

Color families in the default TailwindCSS palette.

#### Defined in

[types.d.ts:465](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L465)

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
| `sourceMode?` | [`Colorspaces`](README.md#colorspaces) | The mode in which the channel values are valid in. It is used for color arrays if they have the `colorspace` string ommitted. Default is `'rgb'`. |
| `targetMode?` | [`Colorspaces`](README.md#colorspaces) | The colorspace in which to return the color object or array in. Default is `'lch'`. |

#### Defined in

[types.d.ts:222](https://github.com/prjctimg/huetiful/blob/6a7e153/src/types.d.ts#L222)
