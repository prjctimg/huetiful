[huetiful-js](../README.md) / [Modules](../modules.md) / [colors](../modules/colors.md) / ColorArray

# Class: ColorArray

[colors](../modules/colors.md).ColorArray

## Table of contents

### Constructors

- [constructor](colors.ColorArray.md#constructor)

### Methods

- [discoverPalettes](colors.ColorArray.md#discoverpalettes)
- [filterByContrast](colors.ColorArray.md#filterbycontrast)
- [filterByDistance](colors.ColorArray.md#filterbydistance)
- [filterByHue](colors.ColorArray.md#filterbyhue)
- [filterByLightness](colors.ColorArray.md#filterbylightness)
- [filterByLuminance](colors.ColorArray.md#filterbyluminance)
- [filterBySaturation](colors.ColorArray.md#filterbysaturation)
- [getFarthestHue](colors.ColorArray.md#getfarthesthue)
- [getFarthestLightness](colors.ColorArray.md#getfarthestlightness)
- [getNearestHue](colors.ColorArray.md#getnearesthue)
- [getNearestLightness](colors.ColorArray.md#getnearestlightness)
- [interpolateSpline](colors.ColorArray.md#interpolatespline)
- [output](colors.ColorArray.md#output)
- [sortByContrast](colors.ColorArray.md#sortbycontrast)
- [sortByDistance](colors.ColorArray.md#sortbydistance)
- [sortByHue](colors.ColorArray.md#sortbyhue)
- [sortByLightness](colors.ColorArray.md#sortbylightness)
- [sortByLuminance](colors.ColorArray.md#sortbyluminance)
- [sortBySaturation](colors.ColorArray.md#sortbysaturation)

## Constructors

### constructor

• **new ColorArray**(`colors`): [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |

#### Returns

[`ColorArray`](colors.ColorArray.md)

## Methods

### discoverPalettes

▸ **discoverPalettes**(`schemeType?`): `object` \| [`ColorToken`](../modules/types.md#colortoken)[]

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |

#### Returns

`object` \| [`ColorToken`](../modules/types.md#colortoken)[]

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

console.log(load(sample).discoverPalettes(sample, "tetradic").output())
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

___

### filterByContrast

▸ **filterByContrast**(`against`, `startContrast?`, `endContrast?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | `undefined` | - |
| `startContrast` | `number` | `0.05` | The minimum end of the contrast range. |
| `endContrast?` | `number` | `undefined` | The maximum end of the contrast range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

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

___

### filterByDistance

▸ **filterByDistance**(`against`, `startDistance?`, `endDistance?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | `undefined` | - |
| `startDistance` | `number` | `0.05` | The minimum end of the distance range. |
| `endDistance?` | `number` | `undefined` | The maximum end of the distance range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

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

___

### filterByHue

▸ **filterByHue**(`startHue?`, `endHue?`): [`ColorArray`](colors.ColorArray.md)

Returns colors in the specified hue ranges between 0 to 360.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startHue` | `number` | `0` | The minimum end of the hue range. |
| `endHue` | `number` | `360` | The maximum end of the hue range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of the filtered colors.

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

___

### filterByLightness

▸ **filterByLightness**(`startLightness?`, `endLightness?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified lightness range. The range is between 0 and 100.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startLightness` | `number` | `5` | The minimum end of the lightness range. |
| `endLightness` | `number` | `100` | The maximum end of the lightness range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

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

___

### filterByLuminance

▸ **filterByLuminance**(`startLuminance?`, `endLuminance?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified luminance range. The range is normalised to [0,1].

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startLuminance` | `number` | `0.05` | The minimum end of the luminance range. |
| `endLuminance` | `number` | `1` | The maximum end of the luminance range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

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

___

### filterBySaturation

▸ **filterBySaturation**(`startSaturation?`, `endSaturation?`, `mode?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified saturation range. The range is normalised to [0,1].

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startSaturation` | `number` | `0.05` | The minimum end of the saturation range. |
| `endSaturation` | `number` | `1` | The maximum end of the saturation range. |
| `mode?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

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

___

### getFarthestHue

▸ **getFarthestHue**(`colorSpace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorSpace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(output).getFarthestHue('lch'))
// 273.54920266436477
```

___

### getFarthestLightness

▸ **getFarthestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object.

**`Example`**

```ts
import { maxLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getFarthestLightness('lch', true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

___

### getNearestHue

▸ **getNearestHue**(`colorSpace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest hue value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorSpace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(sample).getNearestHue('lch'))
// 12.462831644544274
```

___

### getNearestLightness

▸ **getNearestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object.

**`Example`**

```ts
import { minLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getNearestLightness('lch', true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

___

### interpolateSpline

▸ **interpolateSpline**(`colorspace?`, `samples?`, `kind?`, `closed?`, `options?`): [`ColorToken`](../modules/types.md#colortoken)[]

Returns a spline based interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `samples?` | `number` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | The type of the spline interpolation method. Default is basis. |
| `closed?` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | [`InterpolatorOptions`](../modules/types.md#interpolatoroptions) | Optional channel specific overrides. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken)[]

A hexadecimal representation of the resultant color.

___

### output

▸ **output**(): [`ColorToken`](../modules/types.md#colortoken)

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

Returns the result value from the chain.

**`Method`**

___

### sortByContrast

▸ **sortByContrast**(`against`, `order?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
import { sortByContrast } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(sortByContrast(sample, 'yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(sortByContrast(sample, 'yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
```

___

### sortByDistance

▸ **sortByDistance**(`against`, `order?`, `options?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `options?` | [`ColorDistanceOptions`](../modules/types.md#colordistanceoptions) | - |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

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

___

### sortByHue

▸ **sortByHue**(`order`, `colorspace`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

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

___

### sortByLightness

▸ **sortByLightness**(`order?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their lightness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

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

___

### sortByLuminance

▸ **sortByLuminance**(`order?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to the relative brightness as defined by WCAG definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

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

___

### sortBySaturation

▸ **sortBySaturation**(`order`, `mode?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their saturation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `mode?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | The mode color space to compute the saturation value in. The default is jch . |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

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