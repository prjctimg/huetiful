[huetiful-js](../README.md) / ColorArray

# Class: ColorArray

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

- [constructor](ColorArray.md#constructor)

### Methods

- [discoverPalettes](ColorArray.md#discoverpalettes)
- [getNearestColor](ColorArray.md#getnearestcolor)
- [interpolateSpline](ColorArray.md#interpolatespline)
- [output](ColorArray.md#output)

## Constructors

### constructor

• **new ColorArray**(`colors`): [`ColorArray`](ColorArray.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `Collection` | The collection of colors to bind. |

#### Returns

[`ColorArray`](ColorArray.md)

#### Defined in

[src/wrappers.js:71](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L71)

## Methods

### discoverPalettes

▸ **discoverPalettes**(`schemeType`): [`ColorArray`](ColorArray.md)

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | `SchemeType` | (Optional) The palette type you want to return. |

#### Returns

[`ColorArray`](ColorArray.md)

A collection of colors if the `schemeType` parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Example`**

```ts
import { load } from 'huetiful-js'

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

[src/wrappers.js:170](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L170)

___

### getNearestColor

▸ **getNearestColor**(`color`, `num?`): [`ColorArray`](ColorArray.md)

Returns the nearest color(s) in the bound collection against

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](../README.md#colortoken) | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

[`ColorArray`](ColorArray.md)

An array of colors.

**`Example`**

```ts
import { load } from 'huetiful-js';

let cols = tailwindColors('all', '500')

console.log(load(cols).getNearestColor('blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[src/wrappers.js:92](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L92)

___

### interpolateSpline

▸ **interpolateSpline**(`colorspace?`, `samples`, `kind`, `closed`, `options`): [`ColorArray`](ColorArray.md)

*  Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.
  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | [`Colorspaces`](../README.md#colorspaces) | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. * |
| `samples` | `any` | - |
| `kind` | ``"basis"`` \| ``"monotone"`` \| ``"natural"`` | The type of the spline interpolation method. Default is basis. * |
| `closed` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false * |
| `options` | `Pick`\<`InterpolatorOptions`, ``"easingFn"`` \| ``"hueFixup"`` \| ``"domain"``\> | Optional channel specific overrides. * |

#### Returns

[`ColorArray`](ColorArray.md)

The discovered palettes.Respects the `ColorToken` type of the first color in the array of colors to interpolate
  *
  *

**`Example`**

```ts
*
  * import { load } from 'huetiful-js';

console.log(load(['pink', 'blue']).interpolateSpline('lch', 8));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
  *
```

#### Defined in

[src/wrappers.js:128](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L128)

___

### output

▸ **output**(): `Collection`

#### Returns

`Collection`

Returns the result value from the chain.

#### Defined in

[src/wrappers.js:179](https://github.com/prjctimg/huetiful/blob/b15852e/src/wrappers.js#L179)
