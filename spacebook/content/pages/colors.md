---
title: Colors
eleventyNavigation:
  key: Colors
  order: 1
  title: Colors
---

# Module:📦 colors

## Table of contents📜

### Classes🗃

- [Color](../classes/colors.Color.md)
- [ColorArray](../classes/colors.ColorArray.md)

### Functions🧰

- [color](colors.md#color)
- [colors](colors.md#colors)
- [diverging](colors.md#diverging)
- [load](colors.md#load)
- [qualitative](colors.md#qualitative)
- [sequential](colors.md#sequential)
- [tailwindColors](colors.md#tailwindColors)

## Functions

### color

▸ **color**(`color`): [`Color`](../classes/colors.Color.md)

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color token to bind. |

#### Returns🔙

[`Color`](../classes/colors.Color.md)

A new Color class with all the utilities that take a single color as the first parameter bound to its prototype.

___

### colors

▸ **colors**(`shade`, `value?`): [`ColorToken`](types.md#ColorToken) \| [`ColorToken`](types.md#ColorToken)[]

A wrapper function for the default Tailwind palette. If called with both parameters it return the hex code at the specified shade and value. Else, if called with the shade parameter as "all" it will return all colors from the shades in the palette map at the specified value (if value is undefined it will default to "500"). When called with the shade parameter only it will return all the colors from 100 to 900 of the specified shade.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | [`TailwindColorFamilies`](types.md#TailwindColorFamilies) \| ``"all"`` | Any shade in the default TailwindCSS palette e.g amber,blue. |
| `value?` | [`ScaleValues`](types.md#ScaleValues) | Any value from 100 to 900 in increments of 100 e.g "200". |

#### Returns🔙

[`ColorToken`](types.md#ColorToken) \| [`ColorToken`](types.md#ColorToken)[]

color Returns a hex code string or array of hex codes depending on how the function is called.

**`Example`** 📋

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

___

### diverging

▸ **diverging**(`scheme`): [`ColorToken`](types.md#ColorToken)[]

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`DivergingScheme`](types.md#DivergingScheme) | The name of the scheme. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

An array of colors in hex represantation.

**`Example`** 📋

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

___

### load

▸ **load**(`colors`): [`ColorArray`](../classes/colors.ColorArray.md)

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#ColorToken)[] | An array of colors to chain the array methods on. Every element in the array will be parsed as a color token. |

#### Returns🔙

[`ColorArray`](../classes/colors.ColorArray.md)

___

### qualitative

▸ **qualitative**(`scheme`): [`ColorToken`](types.md#ColorToken)[]

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`QualitativeScheme`](types.md#QualitativeScheme) | The name of the scheme |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

An array of colors in hex represantation.

**`Example`** 📋

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

___

### sequential

▸ **sequential**(`scheme`): [`ColorToken`](types.md#ColorToken)[]

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`SequentialScheme`](types.md#SequentialScheme) | The name of the scheme |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

An array of colors in hex represantation.

**`Example`** 📋

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

___

### tailwindColors

▸ **tailwindColors**(`shade`): (`val?`: [`ScaleValues`](types.md#ScaleValues)) => `string` \| `string`[]

Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,

#### Parameters🧮

| Name | Type |
| :------ | :------ |
| `shade` | `number` \| typeof `iterator` \| ``"length"`` \| ``"toString"`` \| ``"concat"`` \| ``"slice"`` \| ``"indexOf"`` \| ``"lastIndexOf"`` \| ``"charAt"`` \| ``"charCodeAt"`` \| ``"localeCompare"`` \| ``"match"`` \| ``"replace"`` \| ``"search"`` \| ``"split"`` \| ``"substring"`` \| ``"toLowerCase"`` \| ``"toLocaleLowerCase"`` \| ``"toUpperCase"`` \| ``"toLocaleUpperCase"`` \| ``"trim"`` \| ``"substr"`` \| ``"codePointAt"`` \| ``"includes"`` \| ``"endsWith"`` \| ``"normalize"`` \| ``"repeat"`` \| ``"startsWith"`` \| ``"anchor"`` \| ``"big"`` \| ``"blink"`` \| ``"bold"`` \| ``"fixed"`` \| ``"fontcolor"`` \| ``"fontsize"`` \| ``"italics"`` \| ``"link"`` \| ``"small"`` \| ``"strike"`` \| ``"sub"`` \| ``"sup"`` \| ``"valueOf"`` |

#### Returns🔙

`fn`

color A hex string value or array of hex strings.

▸ (`val?`): `string` \| `string`[]

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `val?` | [`ScaleValues`](types.md#ScaleValues) |

##### Returns🔙

`string` \| `string`[]

**`Example`** 📋

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
