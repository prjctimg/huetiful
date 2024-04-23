[huetiful-js](../README.md) / interpolator

# Module: interpolator

## Functions

### interpolator

▸ **interpolator**(`colors?`, `options?`): `any`

Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | `Collection` | `[]` | The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray. |
| `options` | `InterpolatorOptions` | `undefined` | Optional overrides. |

#### Returns

`any`

A collection of colors resulting from the interpolation.

**`Example`**

```ts
import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], 'lch', 8));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
```

#### Defined in

[src/interpolator.js:50](https://github.com/prjctimg/huetiful/blob/ed00af0/src/interpolator.js#L50)
