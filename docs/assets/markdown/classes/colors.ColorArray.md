# Class: ColorArray

[colors](../modules/colors.md).ColorArray

Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).

**`Example`**

```ts
import { ColorArray } from 'huetiful-js'

let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
```

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `object` \| [`ColorToken`](../modules/types.md#colortoken)[] | The collection of colors to bind. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

#### Defined in

[colors.d.ts:36](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L36)

## Methods

### discoverPalettes

▸ **discoverPalettes**(`schemeType?`): `object` \| `string`[]

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |

#### Returns

`object` \| `string`[]

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

#### Defined in

[colors.d.ts:94](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L94)

___

### filterByContrast

▸ **filterByContrast**(`against`, `startContrast?`, `endContrast?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `startContrast?` | `number` | The minimum end of the contrast range. |
| `endContrast?` | `number` | The maximum end of the contrast range. |

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

#### Defined in

[colors.d.ts:321](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L321)

___

### filterByDistance

▸ **filterByDistance**(`against`, `startDistance?`, `endDistance?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `startDistance?` | `number` | The minimum end of the distance range. |
| `endDistance?` | `number` | The maximum end of the distance range. |

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

#### Defined in

[colors.d.ts:287](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L287)

___

### filterByHue

▸ **filterByHue**(`startHue?`, `endHue?`): [`ColorArray`](colors.ColorArray.md)

Returns colors in the specified hue ranges between 0 to 360.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startHue?` | `number` | The minimum end of the hue range. |
| `endHue?` | `number` | The maximum end of the hue range. |

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

#### Defined in

[colors.d.ts:351](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L351)

___

### filterByLightness

▸ **filterByLightness**(`startLightness?`, `endLightness?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified lightness range. The range is between 0 and 100.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startLightness?` | `number` | The minimum end of the lightness range. |
| `endLightness?` | `number` | The maximum end of the lightness range. |

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

#### Defined in

[colors.d.ts:261](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L261)

___

### filterByLuminance

▸ **filterByLuminance**(`startLuminance?`, `endLuminance?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified luminance range. The range is normalised to [0,1].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startLuminance?` | `number` | The minimum end of the luminance range. |
| `endLuminance?` | `number` | The maximum end of the luminance range. |

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

#### Defined in

[colors.d.ts:379](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L379)

___

### filterBySaturation

▸ **filterBySaturation**(`startSaturation?`, `endSaturation?`, `colorspace?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified saturation range.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass startSaturation as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startSaturation?` | `number` | The minimum end of the saturation range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endSaturation?` | `number` | The maximum end of the saturation range. |
| `colorspace?` | `Omit`\<`string`, ``"hwb"``\> | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

**`Example`**

```ts
import { filterBySaturation } from 'huetiful-js'

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
 '#720000'
];

console.log(filterBySaturation(sample, 0.1));

// [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
```

#### Defined in

[colors.d.ts:229](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L229)

___

### getFarthestHue

▸ **getFarthestHue**(`colorSpace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorSpace?` | `string` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

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

#### Defined in

[colors.d.ts:111](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L111)

___

### getFarthestLightness

▸ **getFarthestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

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

#### Defined in

[colors.d.ts:187](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L187)

___

### getNearestHue

▸ **getNearestHue**(`colorSpace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest hue value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorSpace?` | `string` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

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

#### Defined in

[colors.d.ts:136](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L136)

___

### getNearestLightness

▸ **getNearestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

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

#### Defined in

[colors.d.ts:161](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L161)

___

### interpolateSpline

▸ **interpolateSpline**(`colorspace?`, `samples?`, `kind?`, `closed?`, `options?`): `string`[]

Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `samples?` | `number` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | The type of the spline interpolation method. Default is basis. |
| `closed?` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | `Pick`\<[`InterpolatorOptions`](../modules/types.md#interpolatoroptions), ``"easingFn"`` \| ``"hueFixup"``\> | Optional channel specific overrides. |

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

[colors.d.ts:61](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L61)

___

### output

▸ **output**(): [`ColorToken`](../modules/types.md#colortoken)

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

Returns the result value from the chain.

**`Method`**

#### Defined in

[colors.d.ts:627](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L627)

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

#### Defined in

[colors.d.ts:576](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L576)

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

#### Defined in

[colors.d.ts:457](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L457)

___

### sortByHue

▸ **sortByHue**(`order?`, `colorspace?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | `string` | The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

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

#### Defined in

[colors.d.ts:622](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L622)

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

#### Defined in

[colors.d.ts:427](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L427)

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

#### Defined in

[colors.d.ts:510](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L510)

___

### sortBySaturation

▸ **sortBySaturation**(`order`, `mode?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their saturation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `mode?` | `string` | The mode color space to compute the saturation value in. The default is jch . |

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

#### Defined in

[colors.d.ts:558](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/colors.d.ts#L558)
