[huetiful-js](../README.md) / [Modules](../modules.md) / colors

# Module: colors

## Table of contents

### Classes

- [Color](../classes/colors.Color.md)
- [ColorArray](../classes/colors.ColorArray.md)

### Functions

- [color](colors.md#color)
- [diverging](colors.md#diverging)
- [load](colors.md#load)
- [qualitative](colors.md#qualitative)
- [sequential](colors.md#sequential)
- [tailwindColors](colors.md#tailwindcolors)

## Functions

### color

▸ **color**(`color`): [`Color`](../classes/colors.Color.md)

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color token to bind. |

#### Returns

[`Color`](../classes/colors.Color.md)

A new Color class with all the utilities that take a single color as the first parameter bound to its prototype.

#### Defined in

[colors.d.ts:826](https://github.com/prjctimg/huetiful/blob/e369fbd/types/colors.d.ts#L826)

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

[colors.d.ts:616](https://github.com/prjctimg/huetiful/blob/e369fbd/types/colors.d.ts#L616)

___

### load

▸ **load**(`colors`): [`ColorArray`](../classes/colors.ColorArray.md)

A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `object` \| [`ColorToken`](types.md#colortoken)[] | An array of colors to chain the array methods on. Every element in the array will be parsed as a color token. |

#### Returns

[`ColorArray`](../classes/colors.ColorArray.md)

#### Defined in

[colors.d.ts:573](https://github.com/prjctimg/huetiful/blob/e369fbd/types/colors.d.ts#L573)

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

[colors.d.ts:636](https://github.com/prjctimg/huetiful/blob/e369fbd/types/colors.d.ts#L636)

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

[colors.d.ts:596](https://github.com/prjctimg/huetiful/blob/e369fbd/types/colors.d.ts#L596)

___

### tailwindColors

▸ **tailwindColors**(`shade`, `value?`): `string` \| `string`[]

Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,

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

[colors.d.ts:668](https://github.com/prjctimg/huetiful/blob/e369fbd/types/colors.d.ts#L668)
