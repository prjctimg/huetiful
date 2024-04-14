[huetiful-js](../README.md) / sortBy

# Module: sortBy

## Table of contents

### Functions

- [sortByChroma](sortBy.md#sortbychroma)
- [sortByContrast](sortBy.md#sortbycontrast)
- [sortByDistance](sortBy.md#sortbydistance)
- [sortByHue](sortBy.md#sortbyhue)
- [sortByLightness](sortBy.md#sortbylightness)
- [sortByLuminance](sortBy.md#sortbyluminance)

## Functions

### sortByChroma

▸ **sortByChroma**(`collection?`, `order?`, `colorspace?`): `Collection`

Sorts colors according to the intensity of their `chroma` in the specified `colorspace`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The `collection` of colors to sort. |
| `order?` | `Order` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`) |
| `colorspace?` | `HueColorSpaces` | The `mode` colorspace to compute the saturation value in. The default is lch . |

#### Returns

`Collection`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { sortByChroma } from "huetiful-js";
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

let sorted = sortByChroma(sample);
console.log(sorted);

// [
 '#310000', '#3e0000',
 '#164100', '#4e0000',
 '#600000', '#720000',
 '#00ffdc', '#007e00',
 '#00ff78', '#00c000',
 '#ffff00'
]

let sortedDescending = sortByChroma(sample,'desc');
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

[src/sortBy.js:80](https://github.com/prjctimg/huetiful/blob/cf8e303/src/sortBy.js#L80)

___

### sortByContrast

▸ **sortByContrast**(`collection?`, `against?`, `order?`): `Collection`

Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The `collection` of colors to sort. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | `Order` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`) |

#### Returns

`Collection`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

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

[src/sortBy.js:265](https://github.com/prjctimg/huetiful/blob/cf8e303/src/sortBy.js#L265)

___

### sortByDistance

▸ **sortByDistance**(`collection?`, `against?`, `order?`): `Collection`

Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The `collection` of colors to sort.. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | `Order` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`). |

#### Returns

`Collection`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { sortByDistance } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc')
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(sortByDistance(sample, 'yellow', 'asc'))

// [ 'green', 'brown', 'red', 'purple' ]
```

#### Defined in

[src/sortBy.js:292](https://github.com/prjctimg/huetiful/blob/cf8e303/src/sortBy.js#L292)

___

### sortByHue

▸ **sortByHue**(`collection?`, `order?`, `colorspace?`): `any`

Sorts colors according to their hue angle values. It works with any `colorspace` with a hue channel.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The `collection` of colors to sort. Achromatic colors are not supported because when displayed on the screen, the colors would be grayscale (so visually, there's no sign of hue). This behaviour is because the `hue` channel is dependant on the `lightness` and `saturation / chroma` channels . For example, a falsy value like `0` or `undefined` turns the color grayscale whilst lightness at both extremes renders a color totally white (max) or black (min). |
| `order?` | `Order` | `undefined` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`) |
| `colorspace` | `HueColorSpaces` | `'lch'` | The mode `colorspace` to compute the color distances in. All colors within the collection will be converted to mode. Note that hue values between modes like `hsl` and `lch` do not align so you may get weird results if you mix colors with different colorspaces. |

#### Returns

`any`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

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

[src/sortBy.js:242](https://github.com/prjctimg/huetiful/blob/cf8e303/src/sortBy.js#L242)

___

### sortByLightness

▸ **sortByLightness**(`collection?`, `order?`, `colorspace?`): `Collection`

Sorts colors according to their lightness.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The `collection` of colors to sort. |
| `order?` | `Order` | `undefined` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`) |
| `colorspace` | `HueColorSpaces` | `'lch'` | The mode colorspace to use for filtering color lightness. Defaut is lch65 |

#### Returns

`Collection`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

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

[src/sortBy.js:186](https://github.com/prjctimg/huetiful/blob/cf8e303/src/sortBy.js#L186)

___

### sortByLuminance

▸ **sortByLuminance**(`collection?`, `order?`): `Collection`

Sorts colors according to their relative brightness as defined by the WCAG3 definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The `collection` of colors to sort. |
| `order?` | `Order` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`) |

#### Returns

`Collection`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

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

[src/sortBy.js:133](https://github.com/prjctimg/huetiful/blob/cf8e303/src/sortBy.js#L133)
