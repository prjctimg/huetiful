[huetiful-js](../README.md) / interpolator

# Module: interpolator

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[interpolator.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/interpolator.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[interpolator.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/interpolator.js#L2)

## Functions

### interpolator

▸ **interpolator**(`baseColors?`, `options?`): `any`

Interpolates the passed in colors and returns a collection of colors from the interpolation.

Some things to keep in mind when creating color scales using this function:

* To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object. 
* If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
* If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseColors` | `any` | `[]` | The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray. |
| `options` | `InterpolatorOptions` | `undefined` | Optional overrides. |

#### Returns

`any`

**`Example`**

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

#### Defined in

[interpolator.js:57](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/interpolator.js#L57)
