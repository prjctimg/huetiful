[huetiful-js - v1.7.87](../README.md) / [Modules](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [ColorArray](../classes/index.ColorArray.md)
- [IColor](../classes/index.IColor.md)

### Variables

- [interpolatorConfig](index.md#interpolatorconfig)

### Functions

- [adjustHue](index.md#adjusthue)
- [alpha](index.md#alpha)
- [brighten](index.md#brighten)
- [channelDifference](index.md#channeldifference)
- [checkArg](index.md#checkarg)
- [color](index.md#color)
- [colorDeficiency](index.md#colordeficiency)
- [colorObj](index.md#colorobj)
- [colorObjArr](index.md#colorobjarr)
- [colors](index.md#colors)
- [customConcat](index.md#customconcat)
- [customFindKey](index.md#customfindkey)
- [customSort](index.md#customsort)
- [darken](index.md#darken)
- [discoverPalettes](index.md#discoverpalettes)
- [diverging](index.md#diverging)
- [earthtone](index.md#earthtone)
- [eq](index.md#eq)
- [expressionParser](index.md#expressionparser)
- [filterByContrast](index.md#filterbycontrast)
- [filterByDistance](index.md#filterbydistance)
- [filterByHue](index.md#filterbyhue)
- [filterByLightness](index.md#filterbylightness)
- [filterByLuminance](index.md#filterbyluminance)
- [filterBySaturation](index.md#filterbysaturation)
- [filteredArr](index.md#filteredarr)
- [floorCeil](index.md#floorceil)
- [getChannel](index.md#getchannel)
- [getComplimentaryHue](index.md#getcomplimentaryhue)
- [getContrast](index.md#getcontrast)
- [getFarthestChroma](index.md#getfarthestchroma)
- [getFarthestContrast](index.md#getfarthestcontrast)
- [getFarthestHue](index.md#getfarthesthue)
- [getFarthestLightness](index.md#getfarthestlightness)
- [getHueFamily](index.md#gethuefamily)
- [getLuminance](index.md#getluminance)
- [getModeChannel](index.md#getmodechannel)
- [getNearestChroma](index.md#getnearestchroma)
- [getNearestColor](index.md#getnearestcolor)
- [getNearestContrast](index.md#getnearestcontrast)
- [getNearestHue](index.md#getnearesthue)
- [getNearestLightness](index.md#getnearestlightness)
- [gt](index.md#gt)
- [gte](index.md#gte)
- [hueShift](index.md#hueshift)
- [inRange](index.md#inrange)
- [interpolateSpline](index.md#interpolatespline)
- [interpolator](index.md#interpolator)
- [isAchromatic](index.md#isachromatic)
- [isCool](index.md#iscool)
- [isInteger](index.md#isinteger)
- [isWarm](index.md#iswarm)
- [load](index.md#load)
- [lt](index.md#lt)
- [lte](index.md#lte)
- [matchChromaChannel](index.md#matchchromachannel)
- [matchLightnessChannel](index.md#matchlightnesschannel)
- [max](index.md#max)
- [min](index.md#min)
- [normalize](index.md#normalize)
- [num2rgb](index.md#num2rgb)
- [overtone](index.md#overtone)
- [pairedScheme](index.md#pairedscheme)
- [pastel](index.md#pastel)
- [qualitative](index.md#qualitative)
- [random](index.md#random)
- [rgb2num](index.md#rgb2num)
- [scheme](index.md#scheme)
- [sequential](index.md#sequential)
- [setChannel](index.md#setchannel)
- [setLuminance](index.md#setluminance)
- [sortByContrast](index.md#sortbycontrast)
- [sortByDistance](index.md#sortbydistance)
- [sortByHue](index.md#sortbyhue)
- [sortByLightness](index.md#sortbylightness)
- [sortByLuminance](index.md#sortbyluminance)
- [sortBySaturation](index.md#sortbysaturation)
- [sortedArr](index.md#sortedarr)
- [tailwindColors](index.md#tailwindcolors)
- [temp2Color](index.md#temp2color)
- [toColorTuple](index.md#tocolortuple)
- [toHex](index.md#tohex)

## Variables

### interpolatorConfig

• `Const` **interpolatorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chromaInterpolator` | [`Interpolator`](types.md#interpolator) |
| `easingFunc` | (`t`: `number`) => `number` |
| `hueFixup` | (`arr`: `number`[]) => `number`[] |
| `hueInterpolator` | [`Interpolator`](types.md#interpolator) |
| `lightnessInterpolator` | [`Interpolator`](types.md#interpolator) |

#### Defined in

src/helpers.ts:61

## Functions

### adjustHue

▸ **adjustHue**(`value?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `0` |

#### Returns

`number`

#### Defined in

src/helpers.ts:233

___

### alpha

▸ **alpha**(`color`, `value?`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color with the targeted opacity/alpha channel. |
| `value?` | `string` \| `number` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns

`number`

color The resulting color. Returns an 8 character hex code.

**`Function`**

**`Description`**

Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted

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

src/utils.ts:571

___

### brighten

▸ **brighten**(`color`, `value`, `colorspace`): [`Color`](types.md#color)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to brighten. |
| `value` | `string` \| `number` | The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5") |
| `colorspace` | `any` | - |

#### Returns

[`Color`](types.md#color)

#### Defined in

src/utils.ts:741

___

### channelDifference

▸ **channelDifference**(`color`, `modeChannel?`): (`subtrahend`: [`Color`](types.md#color)) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |
| `modeChannel?` | `string` |

#### Returns

`fn`

▸ (`subtrahend`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `subtrahend` | [`Color`](types.md#color) |

##### Returns

`number`

#### Defined in

src/helpers.ts:241

___

### checkArg

▸ **checkArg**(`arg`, `def`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `unknown` | The value to check |
| `def` | `unknown` | The value to cast if arg is falsy |

#### Returns

`any`

The first truthy value

**`Description`**

Returns the first truthy value.

#### Defined in

src/helpers.ts:42

___

### color

▸ **color**(`color`): [`IColor`](../classes/index.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |

#### Returns

[`IColor`](../classes/index.IColor.md)

#### Defined in

src/colors.ts:1647

___

### colorDeficiency

▸ **colorDeficiency**(`deficiencyType?`): (`color`: [`Color`](types.md#color), `severity`: `number`) => `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | [`DeficiencyType`](types.md#deficiencytype) | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |

#### Returns

`fn`

The color as its simulated variant as a hexadecimal string.

▸ (`color`, `severity?`): `string`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | `undefined` |
| `severity` | `number` | `1` |

##### Returns

`string`

**`Function`**

**`Description`**

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

**`See`**

For a deep dive on  color vision deficiency go to

**`Example`**

```ts
import { colorDeficiency, toHex } from 'huetiful-js'

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

src/utils.ts:858

___

### colorObj

▸ **colorObj**(`factor`, `callback`): (`color`: [`Color`](types.md#color)) => \{ `color`: [`Color`](types.md#color) = color }

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | `unknown` |

#### Returns

`fn`

▸ (`color`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |

#### Defined in

src/helpers.ts:185

___

### colorObjArr

▸ **colorObjArr**(`factor`, `callback`): (`colors`: [`Color`](types.md#color)[]) => \{ `color`: [`Color`](types.md#color) ; `factor`: [`Factor`](types.md#factor)  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | `any` |

#### Returns

`fn`

▸ (`colors`): \{ `color`: [`Color`](types.md#color) ; `factor`: [`Factor`](types.md#factor)  }[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](types.md#color)[] |

##### Returns

\{ `color`: [`Color`](types.md#color) ; `factor`: [`Factor`](types.md#factor)  }[]

#### Defined in

src/helpers.ts:391

___

### colors

▸ **colors**(`shade`, `val?`): [`Color`](types.md#color) \| [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | `string` | Any shade in the default TailwindCSS palette e.g amber,blue. |
| `val?` | [`ScaleValues`](types.md#scalevalues) | Any value from 100 to 900 in increments of 100 e.g "200". |

#### Returns

[`Color`](types.md#color) \| [`Color`](types.md#color)[]

color Returns a hex code string or array of hex codes depending on how the function is called.

**`Function`**

**`Description`**

A wrapper function for the default Tailwind palette. If called with both parameters it return the hex code at the specified shade and value. Else, if called with the shade parameter as "all" it will return all colors from the shades in the palette map at the specified value (if value is undefined it will default to "500"). When called with the shade parameter only it will return all the colors from 100 to 900 of the specified shade.

**`Example`**

```ts
import { colors } from "huetiful-js";

let all300 = colors("all", 300);

console.log(all300)
//[
 '#cbd5e1', '#d1d5db', '#d4d4d8',
 '#d4d4d4', '#d6d3d1', '#fca5a5',
 '#fdba74', '#fcd34d', '#fde047',
 '#bef264', '#86efac', '#6ee7b7',
 '#5eead4', '#7dd3fc', '#93c5fd',
 '#c4b5fd', '#d8b4fe', '#f0abfc',
 '#f9a8d4', '#fda4af'
]

let red = colors("red");
console.log(red);

// [
 '#fef2f2', '#fee2e2',
 '#fecaca', '#fca5a5',
 '#f87171', '#ef4444',
 '#dc2626', '#b91c1c',
 '#991b1b', '#7f1d1d'
]

let red100 = colors("red", 100);

console.log(red100)
// #fee2e2
```

#### Defined in

src/colors.ts:1327

___

### customConcat

▸ **customConcat**(`hue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hue` | `object` |

#### Returns

`any`

#### Defined in

src/helpers.ts:220

___

### customFindKey

▸ **customFindKey**(`collection`, `factor`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` | The collection to inspect. |
| `factor` | `number` | The value to compare against |

#### Returns

`string`

Returns the found element or its key, else `undefined`.

#### Defined in

src/helpers.ts:201

___

### customSort

▸ **customSort**(`order`, `factor?`): (`a`: `any`, `b`: `any`) => `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | [`Order`](types.md#order) | Either ascending or descending. |
| `factor?` | `string` | The property to query. |

#### Returns

`fn`

A sorted array.

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`number`

**`Description`**

Helper function for native sorting method for arrays.

#### Defined in

src/helpers.ts:370

___

### darken

▸ **darken**(`color`, `value`): [`Color`](types.md#color)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to darken. |
| `value` | `string` \| `number` | The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5") |

#### Returns

[`Color`](types.md#color)

color The darkened color.

**`Function`**

**`Description`**

Darkens the color by reducing the lightness channel. .

**`Example`**

```ts

```

#### Defined in

src/utils.ts:718

___

### discoverPalettes

▸ **discoverPalettes**(`colors`, `schemeType?`): [`Color`](types.md#color)[] \| `object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to create palettes from. Preferably use 5 or more colors for better results. |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |

#### Returns

[`Color`](types.md#color)[] \| `object`

An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Function`**

**`Description`**

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

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

src/generators.ts:158

___

### diverging

▸ **diverging**(`scheme`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`DivergingScheme`](types.md#divergingscheme) | The name of the scheme. |

#### Returns

[`Color`](types.md#color)[]

An array of colors in hex represantation.

**`Function`**

**`Description`**

A wrapper function for ColorBrewer's map of diverging color schemes.

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

src/colors.ts:1048

___

### earthtone

▸ **earthtone**(`color`, `colorspace?`, `options?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to interpolate an earth tone with. * |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | - |
| `options?` | [`EarthtoneOptions`](types.md#earthtoneoptions) | Optional overrides for customising interpolation and easing functions. |

#### Returns

[`Color`](types.md#color)[]

The array of colors resulting from the earthtone interpolation as hex codes.

**`Function`**

**`Description`**

Creates a scale of a spline based interpolation between an earthtone and a color.

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",{earthtones:'clay',iterations:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

src/generators.ts:229

___

### eq

▸ **eq**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

src/helpers.ts:265

___

### expressionParser

▸ **expressionParser**(`color`, `channel`, `value`): `number`

Performs arithmetic operations on colors by passing the arithmetic operator from the value if it is a string. It requires the src variable to be declared in the global scope of the invoking func.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color object. |
| `channel` | `string` | The channel to set. |
| `value` | `string` | The value to apply. |

#### Returns

`number`

#### Defined in

src/helpers.ts:96

___

### filterByContrast

▸ **filterByContrast**(`colors`, `against`, `startContrast?`, `endContrast?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to filter. |
| `against` | [`Color`](types.md#color) | `undefined` | - |
| `startContrast` | `number` | `1` | The minimum end of the contrast range. |
| `endContrast` | `number` | `21` | The maximum end of the contrast range. |

#### Returns

[`Color`](types.md#color)[]

Array of filtered colors.

**`Function`**

Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

**`Example`**

```ts
import { filterByContrast } from 'huetiful-js'

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

console.log(filterByContrast(sample, 'green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

src/filterBy.ts:289

___

### filterByDistance

▸ **filterByDistance**(`colors`, `against`, `startDistance?`, `endDistance?`, `colorspace?`, `weights?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to filter. |
| `against` | [`Color`](types.md#color) | `undefined` | - |
| `startDistance` | `number` | `0.05` | The minimum end of the distance range. |
| `endDistance?` | `number` | `undefined` | The maximum end of the distance range. |
| `colorspace?` | [`ColorSpaces`](types.md#colorspaces) | `undefined` | The color space to calculate the distance in . |
| `weights?` | [`number`, `number`, `number`, `number`] | `undefined` | The weighting values to pass to the Euclidean function. Default is [1,1,1,0]. |

#### Returns

[`Color`](types.md#color)[]

Array of filtered colors.

**`Function`**

Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

**`Example`**

```ts
import { filterByDistance } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
]

console.log(filterByDistance(sample, "yellow", 0.1))
// [ '#ffff00' ]
```

#### Defined in

src/filterBy.ts:236

___

### filterByHue

▸ **filterByHue**(`colors`, `startHue?`, `endHue?`, `colorspace?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to filter. |
| `startHue` | `number` | `0` | The minimum end of the hue range. |
| `endHue` | `number` | `360` | The maximum end of the hue range. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | - |

#### Returns

[`Color`](types.md#color)[]

Array of the filtered colors.

**`Function`**

Returns colors in the specified hue ranges between 0 to 360.

**`Example`**

```ts
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

filterByHue(sample, 20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
```

#### Defined in

src/filterBy.ts:194

___

### filterByLightness

▸ **filterByLightness**(`colors`, `startLightness?`, `endLightness?`, `colorspace?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to filter. |
| `startLightness` | `number` | `5` | The minimum end of the lightness range. |
| `endLightness` | `number` | `100` | The maximum end of the lightness range. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The mode colorspace to retrieve the lightness value from. The default is lch65 |

#### Returns

[`Color`](types.md#color)[]

Array of filtered colors.

**`Function`**

**`Description`**

Returns an array of colors in the specified lightness range. The range is between 0 and 100.

**`Example`**

```ts
import { filterByLightness } from 'huetiful-js'
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

filterByLightness(sample, 20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
```

#### Defined in

src/filterBy.ts:151

___

### filterByLuminance

▸ **filterByLuminance**(`colors`, `startLuminance?`, `endLuminance?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to filter. |
| `startLuminance` | `number` | `0.05` | The minimum end of the luminance range. |
| `endLuminance` | `number` | `1` | The maximum end of the luminance range. |

#### Returns

[`Color`](types.md#color)[]

Array of filtered colors.

**`Function`**

**`Description`**

Returns an array of colors in the specified luminance range. The range is normalised to [0,1].

**`Example`**

```ts
import { filterByLuminance } from 'huetiful-js'
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

filterByLuminance(sample, 0.4, 0.9)

// [ '#00ffdc', '#00ff78' ]
```

#### Defined in

src/filterBy.ts:107

___

### filterBySaturation

▸ **filterBySaturation**(`colors`, `startSaturation?`, `endSaturation?`, `colorspace?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to filter. |
| `startSaturation` | `number` | `0.05` | The minimum end of the saturation range. |
| `endSaturation` | `number` | `1` | The maximum end of the saturation range. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

[`Color`](types.md#color)[]

Array of filtered colors.

**`Function`**

**`Description`**

Returns an array of colors in the specified saturation range. The range is normalised to [0,1].

**`Example`**

```ts
import { filterByContrast } from 'huetiful-js'

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

console.log(filterByContrast(sample, 'green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

src/filterBy.ts:59

___

### filteredArr

▸ **filteredArr**(`factor`, `cb?`): (`colors`: [`Color`](types.md#color)[], `start`: `string` \| `number`, `end`: `number`) => [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factor` | [`Factor`](types.md#factor) | The property to query and use as filtering criteria |
| `cb?` | `unknown` | The function to use for comparison |

#### Returns

`fn`

The filtered array

▸ (`colors`, `start`, `end`): [`Color`](types.md#color)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](types.md#color)[] |
| `start` | `string` \| `number` |
| `end` | `number` |

##### Returns

[`Color`](types.md#color)[]

**`Description`**

Filters an array according to the value of a color's queried factor

#### Defined in

src/helpers.ts:477

___

### floorCeil

▸ **floorCeil**(`num`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to round up or down. |

#### Returns

`number`

An integer

**`Function`**

Rounds up or down a number based on the float value.

#### Defined in

src/helpers.ts:346

___

### getChannel

▸ **getChannel**(`mc`): (`color`: [`Color`](types.md#color)) => `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

value The value of the queried channel.

▸ (`color`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |

##### Returns

`number`

**`Function`**

**`Description`**

Gets the  value specifified channel on the color.

**`Example`**

```ts
import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

src/utils.ts:440

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`color`, `colorspace?`, `colorObj?`): \{ `color`: [`Color`](types.md#color) ; `hue`: `string`  } \| [`Color`](types.md#color)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | `undefined` | The color to retrieve its complimentary hue. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is false. |

#### Returns

\{ `color`: [`Color`](types.md#color) ; `hue`: `string`  } \| [`Color`](types.md#color)

An object with the hue family and complimentary color as keys.

**`Function`**

**`Description`**

Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

**`Example`**

```ts
import { getComplimentaryHue } from "huetiful-js";

console.log(getComplimentaryHue("pink", true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
```

#### Defined in

src/utils.ts:368

___

### getContrast

▸ **getContrast**(`color`, `against`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |
| `against` | [`Color`](types.md#color) |

#### Returns

`number`

The relative luminance of the lightest color.

**`Function`**

**`Description`**

Gets the contrast between the passed in colors.

**`Example`**

```ts
import { getContrast } from 'huetiful-js'

console.log(getContrast("black", "white"));
// 21
```

#### Defined in

src/utils.ts:606

___

### getFarthestChroma

▸ **getFarthestChroma**(`colors`, `colorObj?`): `number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to query the color with the largest saturation value. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

The largest saturation value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the largest saturation value from the passed in colors.

**`Example`**

```ts
import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
```

#### Defined in

src/utils.ts:298

___

### getFarthestContrast

▸ **getFarthestContrast**(`colors`, `against`, `colorObj?`): `number` \| \{ `factor`: `number` ; `name`: [`Color`](types.md#color)  }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to query the color with the largest contrast value. |
| `against` | [`Color`](types.md#color) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `factor`: `number` ; `name`: [`Color`](types.md#color)  }

The largest contrast value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the largest contrast value from the passed in colors compared against a sample color.

**`Example`**

```ts
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }
```

#### Defined in

src/utils.ts:237

___

### getFarthestHue

▸ **getFarthestHue**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to query the color with the largest hue value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the largest hue value from the passed in colors.

**`Example`**

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
```

#### Defined in

src/utils.ts:344

___

### getFarthestLightness

▸ **getFarthestLightness**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to query the color with the largest lightness value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | THe mode colorspace to retrieve the lightness value from. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the largest lightness value from the passed in colors.

**`Example`**

```ts
import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

#### Defined in

src/utils.ts:691

___

### getHueFamily

▸ **getHueFamily**(`color`, `mode?`): [`HueFamily`](types.md#huefamily)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to query its shade or hue family. |
| `mode?` | [`HueColorSpaces`](types.md#huecolorspaces) | - |

#### Returns

[`HueFamily`](types.md#huefamily)

The name of the hue family for example red or green.

**`Function`**

**`Description`**

Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

**`Example`**

```ts
import { getHue } from 'huetiful-js'

console.log(getHue("#310000"))
// red
```

#### Defined in

src/utils.ts:53

___

### getLuminance

▸ **getLuminance**(`color`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to query. |

#### Returns

`number`

value The color's luminance value.

**`Alias`**

Gets the luminance value of that color as defined by WCAG.

**`Example`**

```ts
import { getLuminance } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954
```

#### Defined in

src/utils.ts:465

___

### getModeChannel

▸ **getModeChannel**(`colorspace`, `index?`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The colorspace to get the channel keys. |
| `index?` | `number` | Optional index to return a single specified channel. |

#### Returns

`string`

A string.

**`Description`**

Gets the clipped string of a passed in colorspace by removing non-channel characters.

**`Example`**

```ts
console.log(getModeChannel("oklch"));
// lch

console.log(getModeChannel("okhsl", 2));
// l
```

#### Defined in

src/helpers.ts:84

___

### getNearestChroma

▸ **getNearestChroma**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to query the color with the smallest chroma/saturation value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

The smallest chroma/saturation value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the smallest chroma/saturation value from the passed in colors.

**`Example`**

```ts
import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
```

#### Defined in

src/utils.ts:268

___

### getNearestColor

▸ **getNearestColor**(`collection`, `color`, `samples?`): [`Color`](types.md#color) \| [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | [`Color`](types.md#color)[] \| ``"tailwind"`` \| ``"material"`` | `undefined` | The collection of colors to search for nearest colors |
| `color` | [`Color`](types.md#color) | `undefined` | The color to use for distance comparison |
| `samples` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order. |

#### Returns

[`Color`](types.md#color) \| [`Color`](types.md#color)[]

An array of colors.

**`Example`**

```ts

```

#### Defined in

src/utils.ts:913

___

### getNearestContrast

▸ **getNearestContrast**(`colors`, `against`, `colorObj?`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to query the color with the smallest contrast value. |
| `against` | [`Color`](types.md#color) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false. |

#### Returns

`any`

The smallest contrast value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the smallest contrast value from the passed in colors compared against a sample color.

**`Example`**

```ts
import { getNearestContrast } from 'huetiful-js'

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
```

#### Defined in

src/utils.ts:204

___

### getNearestHue

▸ **getNearestHue**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to query the color with the smallest hue value. |
| `colorspace?` | `string` | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the smallest hue value from the passed in colors.

**`Example`**

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
```

#### Defined in

src/utils.ts:321

___

### getNearestLightness

▸ **getNearestLightness**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to query the color with the smallest lightness value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`Color`](types.md#color) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object.

**`Function`**

**`Description`**

Gets the smallest lightness value from the passed in colors.

**`Example`**

```ts
import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

#### Defined in

src/utils.ts:657

___

### gt

▸ **gt**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

src/helpers.ts:253

___

### gte

▸ **gte**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

src/helpers.ts:259

___

### hueShift

▸ **hueShift**(`color`, `colorspace?`, `options?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to use as the base of the hueshift. Colors are internally converted to LCH. |
| `colorspace?` | [`UniformColorSpaces`](types.md#uniformcolorspaces) | - |
| `options?` | [`HueShiftOptions`](types.md#hueshiftoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`Color`](types.md#color)[]

An array of colors in hex. The length of the resultant array is the number of iterations multiplied by 2 plus the base color passed or (iterations*2)+1

**`Function`**

**`Description`**

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.

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

src/generators.ts:283

___

### inRange

▸ **inRange**(`number`, `start`, `end?`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number to check. |
| `start` | `number` | The minimum or starting value. |
| `end?` | `number` | The maximum or starting value. |

#### Returns

`boolean`

True if the number is in range else false.

**`Function`**

**`Description`**

Checks if a value is within the start and end range.

#### Defined in

src/helpers.ts:278

___

### interpolateSpline

▸ **interpolateSpline**(`colors`, `colorspace?`, `samples?`, `kind?`, `closed?`, `options?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | `undefined` | The array of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `samples?` | `number` | `undefined` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | `undefined` | The type of the spline interpolation method. Default is basis. |
| `closed` | `boolean` | `false` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | [`InterpolatorOptions`](types.md#interpolatoroptions) | `undefined` | Optional channel specific overrides. |

#### Returns

[`Color`](types.md#color)[]

A hexadecimal representation of the resultant color.

**`Function`**

**`Description`**

Returns a spline based interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.

#### Defined in

src/generators.ts:367

___

### interpolator

▸ **interpolator**(`colors`, `colorspace?`, `options?`): `Interpolator`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](types.md#color)[] |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) |
| `options?` | `object` |

#### Returns

`Interpolator`\<`any`\>

#### Defined in

src/generators.ts:433

___

### isAchromatic

▸ **isAchromatic**(`color`, `mode?`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to test if it is achromatic or not. |
| `mode?` | [`HueColorSpaces`](types.md#huecolorspaces) | - |

#### Returns

`boolean`

boolean Returns true if the color is achromatic else false

**`Function`**

**`Description`**

Checks if a color is achromatic(without hue or simply grayscale).

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

console.log(map(sample, isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true

console.log(map(sample, isAchromatic));

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, isAchromatic));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

src/utils.ts:803

___

### isCool

▸ **isCool**(`color`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to check the temperature. |

#### Returns

`boolean`

True or false.

**`Function`**

**`Description`**

Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.

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

src/utils.ts:115

___

### isInteger

▸ **isInteger**(`num`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `string` \| `number` | The number to query |

#### Returns

`boolean`

True if the number is an integer else false if it is a float.

**`Description`**

Checks if a number is an integer or float.

#### Defined in

src/helpers.ts:289

___

### isWarm

▸ **isWarm**(`color`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to check the temperature. |

#### Returns

`boolean`

True or false.

**`Function`**

**`Description`**

Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.

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

console.log(map(sample, isWarm));

// [ false, true,  false]
```

#### Defined in

src/utils.ts:146

___

### load

▸ **load**(`colors`): [`ColorArray`](../classes/index.ColorArray.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | An array of colors to chain the array methods on. Every element in the array will be parsed as a color token. |

#### Returns

[`ColorArray`](../classes/index.ColorArray.md)

**`Description`**

A class that takes an array of colors and exposes all the utilities that handle collections of colors as methods. The methods can be chained as long as `this` being returned can be iterated on. Works like Array object.

#### Defined in

src/colors.ts:769

___

### lt

▸ **lt**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

src/helpers.ts:256

___

### lte

▸ **lte**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

src/helpers.ts:262

___

### matchChromaChannel

▸ **matchChromaChannel**(`colorspace`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The color space to match saturation/chroma channel. |

#### Returns

`string`

The mode channel string passed to getChannel()

**`Function`**

Matches the chroma/saturation channel of any compliant color space

**`Example`**

```ts
import { matchChromaChannel } from 'huetiful-js'
console.log(matchChromaChannel("jch"));
// jch.c

console.log(matchChromaChannel("okhsl"));
// okhsl.s
```

#### Defined in

src/helpers.ts:142

___

### matchLightnessChannel

▸ **matchLightnessChannel**(`colorspace`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The color space to match lightness channel. |

#### Returns

`string`

The mode channel string passed to getChannel

**`Function`**

Matches the lightness channel of any compliant color space

**`Example`**

```ts
console.log(matchLightnessChannel("jch"));
// jch.j

console.log(matchLightnessChannel("okhsl"));
// okhsl.l
```

#### Defined in

src/helpers.ts:171

___

### max

▸ **max**(`array`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve maximum value |

#### Returns

`number`

The largest number in the array

**`Description`**

Gets the largest value in an array

#### Defined in

src/helpers.ts:436

___

### min

▸ **min**(`array`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve minimum value |

#### Returns

`number`

The smallest number in the array

**`Description`**

Gets the smallest value in an array

#### Defined in

src/helpers.ts:428

___

### normalize

▸ **normalize**(`value`, `modeChannel`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value to chec if its in the accepted range for the passed in mode channel |
| `modeChannel` | `string` | A string defining the mode and channel ranges to use for comparison |

#### Returns

`number`

The normalized channel value or the passed in value if it was within range

**`Function`**

**`Description`**

Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.

#### Defined in

src/helpers.ts:301

___

### num2rgb

▸ **num2rgb**(`num`, `hex?`): [`Color`](types.md#color)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | The number to convert to RGB |
| `hex` | `boolean` | `false` | - |

#### Returns

[`Color`](types.md#color)

color An RGB color object or hex string.

**`Function`**

**`Description`**

Returns the RGB color equivalent of any number between 0 and 16,777,215.

**`Example`**

```ts
import { num2rgb } from 'huetiful-js'

console.log(num2rgb(900, true))
// #000384
```

#### Defined in

src/converters.ts:123

___

### overtone

▸ **overtone**(`color`): `string` \| `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to query its overtone. |

#### Returns

`string` \| `boolean`

The name of the overtone hue. If an achromatic color is passed in it return the string gray otherwise if the color has no bias it returns false.

**`Function`**

**`Description`**

Returns the hue which is biasing the passed in color

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

src/utils.ts:628

___

### pairedScheme

▸ **pairedScheme**(`color`, `options?`): [`Color`](types.md#color)[] \| [`Color`](types.md#color)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to return a paired color scheme from. |
| `options?` | [`PairedSchemeOptions`](types.md#pairedschemeoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`Color`](types.md#color)[] \| [`Color`](types.md#color)

An array containing the paired scheme.

**`Function`**

pairedScheme

**`Description`**

Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.

**`Example`**

```ts
import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,iterations:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

src/generators.ts:480

___

### pastel

▸ **pastel**(`color`): [`Color`](types.md#color)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to return a pastel variant of. |

#### Returns

[`Color`](types.md#color)

A random pastel color.

**`Function`**

**`Description`**

Returns a random pastel variant of the passed in color.

**`Example`**

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))
// #036103ff
```

#### Defined in

src/generators.ts:538

___

### qualitative

▸ **qualitative**(`scheme`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`QualitativeScheme`](types.md#qualitativescheme) | The name of the scheme |

#### Returns

[`Color`](types.md#color)[]

An array of colors in hex represantation.

**`Function`**

**`Description`**

A wrapper function for ColorBrewer's map of qualitative color schemes.

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

src/colors.ts:1192

___

### random

▸ **random**(`min`, `max`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The lower bound. |
| `max` | `number` | The upper bound. |

#### Returns

`number`

A number.

**`Function`**

**`Description`**

Returns a random number between minimum and maximum bounds.

#### Defined in

src/helpers.ts:327

___

### rgb2num

▸ **rgb2num**(`color`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to convert to its numerical equivalent. |

#### Returns

`number`

value The numerical value of the color from 0 to 16,777,215.

**`Function`**

**`Description`**

Returns the numerical equivalent of a color.

**`Example`**

```ts
import { rgb2num } from 'huetiful-js'

console.log(rgb2num("b2c3f1"))
// 11715569
```

#### Defined in

src/converters.ts:155

___

### scheme

▸ **scheme**(`schemeType`): (`color`: [`Color`](types.md#color), `easingFunc?`: (`t`: `number`) => `number`) => [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | `string` | Any classic color scheme either "analogous"\|"triadic"\|"tetradic"\|"complementary"\|"splitComplementary". |

#### Returns

`fn`

An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.

▸ (`color`, `easingFunc?`): [`Color`](types.md#color)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |
| `easingFunc?` | (`t`: `number`) => `number` |

##### Returns

[`Color`](types.md#color)[]

**`Function`**

**`Description`**

Generates a randomised classic color scheme from a single base color.

**`Example`**

```ts
import { base } from 'huetiful-js'

console.log(base("triadic")("#a1bd2f", true))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

src/generators.ts:88

___

### sequential

▸ **sequential**(`scheme`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`SequentialScheme`](types.md#sequentialscheme) | The name of the scheme |

#### Returns

[`Color`](types.md#color)[]

An array of colors in hex represantation.

**`Function`**

**`Description`**

A wrapper function for ColorBrewer's map of sequential color schemes.

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

src/colors.ts:812

___

### setChannel

▸ **setChannel**(`mc`): (`color`: [`Color`](types.md#color), `value`: `string` \| `number`) => [`Color`](types.md#color)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns

`fn`

color The mutated color.

▸ (`color`, `value`): [`Color`](types.md#color)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](types.md#color) |
| `value` | `string` \| `number` |

##### Returns

[`Color`](types.md#color)

**`Function`**

**`Description`**

Sets the value for the specified channel in a color.

**`Example`**

```ts
import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

#### Defined in

src/utils.ts:405

___

### setLuminance

▸ **setLuminance**(`color`, `lum`): [`Color`](types.md#color)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to set luminance |
| `lum` | `number` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns

[`Color`](types.md#color)

The mutated color with the modified properties.

**`Function`**

**`Description`**

Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

**`Example`**

```ts
import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
```

#### Defined in

src/utils.ts:486

___

### sortByContrast

▸ **sortByContrast**(`colors`, `against`, `order?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to sort |
| `against` | [`Color`](types.md#color) | - |
| `order?` | [`Order`](types.md#order) | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`Color`](types.md#color)[]

An array of the sorted color values.

**`Function`**

**`Description`**

Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

**`Example`**

```ts
import { sortByContrast } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(sortByContrast(sample, 'yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(sortByContrast(sample, 'yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
```

#### Defined in

src/sortBy.ts:307

___

### sortByDistance

▸ **sortByDistance**(`colors`, `against`, `order?`, `options?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to sort. |
| `against` | [`Color`](types.md#color) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `options?` | [`ColorDistanceOptions`](types.md#colordistanceoptions) | - |

#### Returns

[`Color`](types.md#color)[]

An array of the sorted color values.

**`Function`**

**`Description`**

Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist

**`Example`**

```ts
import { sortByDistance } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc', {
   mode: 'lch',
 })
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc', {
   mode: 'lch',
 })
)

// [ 'green', 'brown', 'red', 'purple' ]
```

#### Defined in

src/sortBy.ts:348

___

### sortByHue

▸ **sortByHue**(`colors`, `order?`, `colorspace?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to sort |
| `order?` | [`Order`](types.md#order) | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

#### Returns

[`Color`](types.md#color)[]

An array of the sorted color values.

**`Function`**

**`Description`**

Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported

**`Example`**

```ts
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = sortByHue(sample);
console.log(sorted)
// [
 '#310000', '#3e0000',
 '#4e0000', '#600000',
 '#720000', '#ffff00',
 '#164100', '#00c000',
 '#007e00', '#00ff78',
 '#00ffdc'
]

let sortedDescending = sortByHue(sample,'desc');
console.log(sortedDescending)
// [
 '#00ffdc', '#00ff78',
 '#007e00', '#00c000',
 '#164100', '#ffff00',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

src/sortBy.ts:271

___

### sortByLightness

▸ **sortByLightness**(`colors`, `order?`, `colorspace?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to sort |
| `order?` | [`Order`](types.md#order) | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | The mode colorspace to use for filtering color lightness. Defaut is lch65 |

#### Returns

[`Color`](types.md#color)[]

An array of the sorted color values.

**`Function`**

**`Description`**

Sorts colors according to their lightness.

**`Example`**

```ts
import { sortByLightness } from "huetiful-js";

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
]

sortByLightness(sample)

// [
 '#310000', '#3e0000',
 '#4e0000', '#600000',
 '#720000', '#164100',
 '#007e00', '#00c000',
 '#00ff78', '#00ffdc',
 '#ffff00'
]

sortByLightness(sample,'desc')

// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

src/sortBy.ts:210

___

### sortByLuminance

▸ **sortByLuminance**(`colors`, `order`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to sort |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`Color`](types.md#color)[]

An array of the sorted color values.

**`Function`**

**`Description`**

Sorts colors according to the relative brightness as defined by WCAG definition.

**`Example`**

```ts
import { sortByLuminance } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = sortByLuminance(sample)
console.log(sorted)
// [
 '#310000', '#3e0000',
 '#4e0000', '#600000',
 '#720000', '#164100',
 '#007e00', '#00c000',
 '#00ff78', '#00ffdc',
 '#ffff00'
]

let sortedDescending = sortByLuminance(sample, "desc");
console.log(sortedDescending)
// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

src/sortBy.ts:157

___

### sortBySaturation

▸ **sortBySaturation**(`colors`, `order`, `mode?`): [`Color`](types.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`Color`](types.md#color)[] | The array of colors to sort |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `mode?` | [`HueColorSpaces`](types.md#huecolorspaces) | The mode color space to compute the saturation value in. The default is jch . |

#### Returns

[`Color`](types.md#color)[]

An array of the sorted color values.

**`Function`**

**`Description`**

Sorts colors according to their saturation.

**`Example`**

```ts
import { sortBySaturation } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = sortBySaturation(sample);
console.log(sorted);

// [
 '#310000', '#3e0000',
 '#164100', '#4e0000',
 '#600000', '#720000',
 '#00ffdc', '#007e00',
 '#00ff78', '#00c000',
 '#ffff00'
]

let sortedDescending = sortBySaturation(sample,'desc');
console.log(sortedDescending)
// [
 '#ffff00', '#00c000',
 '#00ff78', '#007e00',
 '#00ffdc', '#720000',
 '#600000', '#4e0000',
 '#164100', '#3e0000',
 '#310000'
]
```

#### Defined in

src/sortBy.ts:95

___

### sortedArr

▸ **sortedArr**(`factor`, `callback`, `order`, `colorObj?`): (`colors`: [`Color`](types.md#color)[]) => `any`[]

Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](types.md#factor) | `undefined` | The property to query |
| `callback` | `unknown` | `undefined` | The function to use for comparison. |
| `order` | [`Order`](types.md#order) | `undefined` | - |
| `colorObj` | `boolean` | `false` | - |

#### Returns

`fn`

An array of colors or color objects.

▸ (`colors`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](types.md#color)[] |

##### Returns

`any`[]

#### Defined in

src/helpers.ts:446

___

### tailwindColors

▸ **tailwindColors**(`shade`): (`val?`: [`ScaleValues`](types.md#scalevalues)) => `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `shade` | keyof [`HueMap`](types.md#huemap) |

#### Returns

`fn`

color A hex string value or array of hex strings.

▸ (`val?`): `string` \| `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `val?` | [`ScaleValues`](types.md#scalevalues) |

##### Returns

`string` \| `string`[]

**`Function`**

**`Description`**

Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,

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

src/colors.ts:1383

___

### temp2Color

▸ **temp2Color**(`kelvin`, `hex?`): [`Color`](types.md#color)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `kelvin` | `number` | `undefined` | The number of Kelvins. From 0 to 30,000 . |
| `hex` | `boolean` | `false` | Optional boolean parameter to either return an RGB color object or hexadecimal string. Default is true. |

#### Returns

[`Color`](types.md#color)

color The color as a hexadecimal  or RGB color object.

**`Function`**

**`Description`**

Converts the temperature value (in Kelvins) to an RGB color.

**`Example`**

```ts
import { temp2Color } from 'huetiful-js'

console.log(temp2Color(2542))
// #ffa44a
```

#### Defined in

src/converters.ts:179

___

### toColorTuple

▸ **toColorTuple**(`color`, `mode`): [`ColorTuple`](types.md#colortuple)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | Any recognizable color token. |
| `mode` | [`ColorSpaces`](types.md#colorspaces) | The mode color space to return channel values for |

#### Returns

[`ColorTuple`](types.md#colortuple)

An array of channel values with the colorspace as first element and the alpha channel if its explicitly defined in the passed in color.

**`Function`**

**`Description`**

Returns an array of channel values in the mode color space.

**`Example`**

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

#### Defined in

src/converters.ts:239

___

### toHex

▸ **toHex**(`color`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](types.md#color) | The color to convert to hexadecimal. Works on color objects and CSS named colors. |

#### Returns

`string`

A hexadecimal representation of the passed in color.

**`Function`**

**`Description`**

Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), numbers from 0 to 166,777,215 and arrays in the form of [string,number,number,number,numer?] the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.

**`Example`**

```ts
import { toHex } from "huetiful-js";

console.log(toHex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(toHex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
```

#### Defined in

src/converters.ts:36
