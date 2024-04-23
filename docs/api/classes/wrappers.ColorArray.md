[huetiful-js](../README.md) / [wrappers](../modules/wrappers.md) / ColorArray

# Class: ColorArray

[wrappers](../modules/wrappers.md).ColorArray

**`Example`**

```ts
import { ColorArray } from 'huetiful-js'

let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
```

## Constructors

### constructor

• **new ColorArray**(`colors`): [`ColorArray`](wrappers.ColorArray.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `Collection` | The collection of colors to bind. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

#### Defined in

[src/wrappers.js:56](https://github.com/prjctimg/huetiful/blob/ed00af0/src/wrappers.js#L56)

## Methods

### discover

▸ **discover**(`kind`): [`ColorArray`](wrappers.ColorArray.md)

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind` | `SchemeType` | (Optional) The palette type you want to return. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

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

[src/wrappers.js:149](https://github.com/prjctimg/huetiful/blob/ed00af0/src/wrappers.js#L149)

___

### interpolator

▸ **interpolator**(`options`): [`ColorArray`](wrappers.ColorArray.md)

*  Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.
  *  {Colorspaces} [colorspace='jch'] The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
  *  {'natural' | 'monotone' | 'basis'} kind The type of the spline interpolation method. Default is basis.
  *  Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false
  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `InterpolatorOptions` | Optional channel specific overrides. * |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

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

[src/wrappers.js:111](https://github.com/prjctimg/huetiful/blob/ed00af0/src/wrappers.js#L111)

___

### nearest

▸ **nearest**(`color`, `num?`): [`ColorArray`](wrappers.ColorArray.md)

Returns the nearest color(s) in the bound collection against

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](../modules/alpha.md#colortoken) | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

An array of colors.

**`Example`**

```ts
import { load } from 'huetiful-js';

let cols = tailwindColors('all', '500')

console.log(load(cols).nearest('blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[src/wrappers.js:75](https://github.com/prjctimg/huetiful/blob/ed00af0/src/wrappers.js#L75)

___

### output

▸ **output**(): `Collection`

#### Returns

`Collection`

Returns the result value from the chain.

#### Defined in

[src/wrappers.js:158](https://github.com/prjctimg/huetiful/blob/ed00af0/src/wrappers.js#L158)
