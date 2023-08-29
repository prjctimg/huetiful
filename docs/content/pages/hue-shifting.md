---
title: Hue shifting
eleventyNavigation:
  ordering: 7
  key: Hue shifting
---
We can create a palette of hue shifted colors from a single base color. The *hueShift* utility can achieve the same:


#### hueShift

**Parameters:**
(color: Color,
 opts = { 
 minLightness,
 maxLightness,
 hueStep,
 num },hex = false
): Color[]
 *color* The color to use as the base of the hueshift. Colors are internally converted to LCH.
 *minLightness*  Minimum lightness value (range 0-100).
 *maxLightness*  Maximum lightness value (range 0-100).
 *num* The number of iterations to do on the color. It equals the amount of elements in the result array.
 *hueStep*  Controls how much the hue will shift at each iteration.
 *hex* Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.

**Returns:**
An array of colors.

**Description:**
Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.

**Example:**

```javascript
import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000", {}, true);

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]

```