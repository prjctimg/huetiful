## default()

> **default**(`baseColors`, `options`): [`ColorToken`](../types.md#colortoken) \| [`ColorToken`](../types.md#colortoken)[]

Defined in: generators/interpolator.ts:54

Interpolates the passed in colors and returns a color scale that is evenly split into `num` amount of samples.

The interpolation behaviour can be overidden allowing us to get slightly different effects from the same `baseColors`.

The behaviour of the interpolation can be customized by:

- Changing the `kind` of interpolation

  - natural
  - basis
  - monotone

- Changing the easing function (`easingFn`)

- To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
- If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
- If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.

### Parameters

#### baseColors

[`Collection`](../types.md#collection) = `[]`

The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.

#### options

[`InterpolatorOptions`](../types.md#interpolatoroptions) = `{}`

Optional overrides to customize parameters such as interpolation methods and per channel eeasings.

### Returns

[`ColorToken`](../types.md#colortoken) \| [`ColorToken`](../types.md#colortoken)[]

### Example

```ts
import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], { num:8 }));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
```
