[huetiful-js](../README.md) / [Modules](../modules.md) / sortBy

# Module: sortBy

## Table of contents

### Functions

- [sortByContrast](sortBy.md#sortbycontrast)
- [sortByDistance](sortBy.md#sortbydistance)
- [sortByHue](sortBy.md#sortbyhue)
- [sortByLightness](sortBy.md#sortbylightness)
- [sortByLuminance](sortBy.md#sortbyluminance)
- [sortBySaturation](sortBy.md#sortbysaturation)

## Functions

### sortByContrast

▸ **sortByContrast**(`colors`, `against`, `order?`): [`ColorToken`](types.md#colortoken)[]

Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to sort |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `order?` | [`Order`](types.md#order) | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorToken`](types.md#colortoken)[]

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

▸ **sortByDistance**(`colors`, `against`, `order?`, `options?`): [`ColorToken`](types.md#colortoken)[]

Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to sort. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `options?` | [`ColorDistanceOptions`](types.md#colordistanceoptions) | - |

#### Returns

[`ColorToken`](types.md#colortoken)[]

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

▸ **sortByHue**(`colors`, `order?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[]

Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to sort |
| `order?` | [`Order`](types.md#order) | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

#### Returns

[`ColorToken`](types.md#colortoken)[]

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

▸ **sortByLightness**(`colors`, `order?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[]

Sorts colors according to their lightness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to sort |
| `order?` | [`Order`](types.md#order) | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | The mode colorspace to use for filtering color lightness. Defaut is lch65 |

#### Returns

[`ColorToken`](types.md#colortoken)[]

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

▸ **sortByLuminance**(`colors`, `order`): [`ColorToken`](types.md#colortoken)[]

Sorts colors according to the relative brightness as defined by WCAG definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to sort |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorToken`](types.md#colortoken)[]

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

▸ **sortBySaturation**(`colors`, `order`, `mode?`): [`ColorToken`](types.md#colortoken)[]

Sorts colors according to their saturation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to sort |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `mode?` | [`HueColorSpaces`](types.md#huecolorspaces) | The mode color space to compute the saturation value in. The default is jch . |

#### Returns

[`ColorToken`](types.md#colortoken)[]

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
