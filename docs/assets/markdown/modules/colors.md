# Module: colors

## Table of contents

### Functions

- [colorDeficiency](colors.md#colordeficiency)
- [diverging](colors.md#diverging)
- [getNearestColor](colors.md#getnearestcolor)
- [qualitative](colors.md#qualitative)
- [sequential](colors.md#sequential)
- [tailwindColors](colors.md#tailwindcolors)

## Functions

### colorDeficiency

▸ **colorDeficiency**(`deficiencyType?`): (`color`: [`ColorToken`](types.md#colortoken), `severity?`: `number`) => `string`

Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | `DeficiencyType` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the defeciency parameter is undefined or any falsy value. |

#### Returns

`fn`

The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.

▸ (`color`, `severity?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `severity?` | `number` |

##### Returns

`string`

**`Example`**

```ts
import { colorDeficiency, color2hex } from 'huetiful-js'

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

[colors.d.ts:51](https://github.com/prjctimg/huetiful/blob/12f39ea/types/colors.d.ts#L51)

___

### diverging

▸ **diverging**(`scheme`): [`ColorToken`](types.md#colortoken)[]

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`DivergingScheme`](types.md#divergingscheme) | The name of the scheme. |

#### Returns

[`ColorToken`](types.md#colortoken)[]

An array of colors in hex represantation.

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

[colors.d.ts:97](https://github.com/prjctimg/huetiful/blob/12f39ea/types/colors.d.ts#L97)

___

### getNearestColor

▸ **getNearestColor**(`collection`, `against`, `num?`): [`ColorToken`](types.md#colortoken) \| [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns the nearest color(s) in a collection against

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`ColorToken`](types.md#colortoken)[] \| ``"tailwind"`` | The collection of colors to search for nearest colors |
| `against` | [`ColorToken`](types.md#colortoken) | The color to use for distance comparison. |
| `num?` | `number` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

[`ColorToken`](types.md#colortoken) \| [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

An cllection of colors.

**`Example`**

```ts
let cols = colors('all', '500')

console.log(getNearestColor(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[colors.d.ts:23](https://github.com/prjctimg/huetiful/blob/12f39ea/types/colors.d.ts#L23)

___

### qualitative

▸ **qualitative**(`scheme`): [`ColorToken`](types.md#colortoken)[]

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`QualitativeScheme`](types.md#qualitativescheme) | The name of the scheme |

#### Returns

[`ColorToken`](types.md#colortoken)[]

An array of colors in hex represantation.

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

[colors.d.ts:117](https://github.com/prjctimg/huetiful/blob/12f39ea/types/colors.d.ts#L117)

___

### sequential

▸ **sequential**(`scheme`): [`ColorToken`](types.md#colortoken)[]

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`SequentialScheme`](types.md#sequentialscheme) | The name of the scheme |

#### Returns

[`ColorToken`](types.md#colortoken)[]

An array of colors in hex represantation.

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

[colors.d.ts:77](https://github.com/prjctimg/huetiful/blob/12f39ea/types/colors.d.ts#L77)

___

### tailwindColors

▸ **tailwindColors**(`shade`, `value?`): `string` \| `string`[]

Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If invoked with no parameters, it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,

#### Parameters

| Name | Type |
| :------ | :------ |
| `shade` | [`TailwindColorFamilies`](types.md#tailwindcolorfamilies) \| ``"all"`` |
| `value?` | [`ScaleValues`](types.md#scalevalues) |

#### Returns

`string` \| `string`[]

color A hex string value or array of hex strings.

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

[colors.d.ts:150](https://github.com/prjctimg/huetiful/blob/12f39ea/types/colors.d.ts#L150)
