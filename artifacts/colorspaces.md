# About colorspaces

This library makes use of the predefined colorspaces provided by Culori. Information about the expected channel ranges, supported colorspaces and other related information on how the library handles them  [can be found here]()

## Channel range normalization

Because of how Culori defines its colorspaces it may feel unintuitive to, let's say for example pass RGB channel values in the range [0,1] since most developers are familiar of the [0,255] range, which isn't compatible with Culori and will return unexpected results:

```js

import { formatHex } from 'culori';

// The range [0,1] expected by Culori
let colorA = { r: 1, g: 0.5, b: 0.05, mode: 'rgb' };
console.log(formatHex(colorA));
// #ff800d

// Also a valid range but not supported by Culori
let colorB = { r: 100, g: 58, b: 43.51, mode: 'rgb' };
console.log(formatHex(colorB));
// #ffffff


```

Note that `colorB` is returned as pure white. This same color token will return the correct color if we pass it to the `toHex` converter, which is generic:

```js

import { toHex } from 'huetiful-js';

let colorB = { r: 100, g: 58, b: 43.51, mode: 'rgb' };

console.log(toHex(colorB));

//


```

The `toHex` utility will treat the color to be in the range [0,255] if any of the channel values is greater than 1. This is in contrast to the way Culori handles such a scenario where it will just clamp the values to the [0,1] ranges. The formula is very simple: `channel / 255` which will give us our channel value in the supported range. This behaviour also applies to color tokens passed as arrays.

## Quirks in interpolating black or white with chromatic colors

When interpolating colors, be aware that any color with an explicit channel that is falsy (mainly `NaN`) with in the color array will affect all colors to be grayscale or just black. I encountered this scenario when trying to implement the Jch colorspace in the hueShift function (because of miscalculating the lightness channel value during lightness mapping).

```js

import {
  interpolate,

} from 'culori';

let colorA = { l: 0.5, c: 48, h: 43.51, mode: 'lch' };
let colorB = { l: 0.5, c: NaN, h: 43.51, mode: 'lch' };

console.log(
  interpolate([colorA, colorB], 'lch')(0.5)
);
// { mode: 'lch', l: 0.5, c: NaN, h: 43.51 }

```

### Supported colorspaces

huetiful-js supports all the colorspaces that are used in CSS plus a few extra ones that are used under the hood by other colorspaces such as XYZ colorspace. See here for the full list of bootstrapped CSS colorspaces.
