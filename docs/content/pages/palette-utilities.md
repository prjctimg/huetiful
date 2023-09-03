---
title: Palette utilities
---

These are functions that return custom palettes from a single base color by mapping certain values to the color's channels.
#### base

**Parameters:**
(scheme: palette) => (color: Color, hex = false): Color[]
*scheme* Any classic color scheme either "analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"
*hex* Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.

**Returns:**
 An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.

**Description:**
Generates a randomised classic color scheme from a single base color.

**Example:**
```javascript

// Example
```

#### earthtone

**Parameters:**
(color: Color, tone: keyof earthtones, num = 1): Color[]
*color* The color to interpolate an earth tone with.
 *tone* The earthtone to interpolate with.
 *num* The number of iterations to produce from the color and earthtone.
 
 **Returns:**
 The array o colors resulting from the earthtone interpolation.
 
 **Description:**
 Creates a scale of a spline based interpolation between an earthtone and a color.
 
**Example:**
```javascript

// Example

```

#### pastel

**Parameters:**
(color: Color, hex = true): Color
*color* The color to return a pastel variant of.
 *hex* Pass in true to return an 8-character hex code else it will return an HSV color object.
 
 **Returns:**
 A random pastel color.
 
 **Description:**
 Returns a random pastel variant of the passed in color.
 
 **Example:**

```javascript



 // Example
```



##### hueshift

**Parameters:**
(color: Color, opts = {minLightness?:number,maxLightness?:number}, hex = false): Color[]
 *color* The color to use as the base of the hueshift. Colors are internally converted to LCH.
 *minLightness*  Minimum lightness value (range 0-100).
 *maxLightness*  Maximum lightness value (range 0-100).
 *num* The number of iterations to do on the color. It equals the amount of elements in the result array.
 *hueStep*  Controls how much the hue will shift at each iteration.
 *hex* Optional boolean to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 
**Returns:**
An array of hue-shifted colors.

**Description:**
Generates a palette of hue shifted colors (as a colour becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.

**Example:**
```javascript
// Example
```

#### pairedScheme

**Parameters:**
(color: Color,hueStep: number,num: number, via: tone,overrides:{}): Color[]
*color* The color to return a paired color scheme from.
 *via* The tone to interpolate through (either white or black). Default is white.
 *hueStep* The value to increment the base color's hue channel with.
 *num* The number of color samples to generate.
 *overrides* The optional overrides object to customize per channel options like interpolation methods and channel fixups.

**Returns:**
An array containing the paired scheme.

**Description:**
Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.

#### getHue

**Parameters:**
(color: Color): string

**Returns:**
 The name of the hue family for example red or green.


**Description:**
 Gets the hue family which a acolor belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 
 