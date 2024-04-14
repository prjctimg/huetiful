[huetiful-js](../README.md) / colors

# Module: colors

## Table of contents

### Functions

- [diverging](colors.md#diverging)
- [getNearestColor](colors.md#getnearestcolor)
- [qualitative](colors.md#qualitative)
- [sequential](colors.md#sequential)
- [tailwindColors](colors.md#tailwindcolors)

## Functions

### diverging

▸ **diverging**(`scheme`): `Collection`

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | `DivergingScheme` | The name of the scheme. |

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

[src/colors.js:344](https://github.com/prjctimg/huetiful/blob/cf8e303/src/colors.js#L344)

___

### getNearestColor

▸ **getNearestColor**(`collection`, `against`, `num?`): `Collection`

Returns the nearest color(s) in a collection as compared `against` the passed in color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to search for nearest colors. |
| `against` | [`ColorToken`](accessibility.md#colortoken) | `undefined` | The color to use for distance comparison. |
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

[src/colors.js:42](https://github.com/prjctimg/huetiful/blob/cf8e303/src/colors.js#L42)

___

### qualitative

▸ **qualitative**(`scheme`): `Collection`

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | `QualitativeScheme` | The name of the scheme |

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

[src/colors.js:490](https://github.com/prjctimg/huetiful/blob/cf8e303/src/colors.js#L490)

___

### sequential

▸ **sequential**(`scheme`): [`ColorToken`](accessibility.md#colortoken) \| `Collection`

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | `SequentialScheme` | The name of the scheme. |

#### Returns

[`ColorToken`](accessibility.md#colortoken) \| `Collection`

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

[src/colors.js:106](https://github.com/prjctimg/huetiful/blob/cf8e303/src/colors.js#L106)

___

### tailwindColors

▸ **tailwindColors**(`shade`, `value`): `string` \| `string`[]

Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If called with no parameters, it returns an array of colors from `050` to `900`. If called with parameter will return the specified shade value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | `TailwindColorFamilies` \| ``"all"`` | The hue family to return. |
| `value` | `ScaleValues` | The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid. |

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

[src/colors.js:621](https://github.com/prjctimg/huetiful/blob/cf8e303/src/colors.js#L621)
