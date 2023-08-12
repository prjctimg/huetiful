#### `base`

`(scheme: palette) =>
  (color: Color, hex = false):Color[]`

```


/**
 * @function
 * @description Generates a randomised classic color scheme from a single base color.
 * @param  scheme {"analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"} Any classic color scheme either
 * @param hex Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 * @returns An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.
 */

```

#### `earthtone`

`(color: Color, tone: keyof earthtones, num = 1): Color[]`

```
/**
 * @description Creates a scale of a spline based interpolation between an earthtone and a color.
 * @param color The color to interpolate an earth tone with.
 * @param tone The earthtone to interpolate with.
 * @param num The number of iterations to produce from the color and earthtone.
 * @returns The array o colors resulting from the earthtone interpolation.
 */


```

#### `pastel`

`(color: Color, hex = true): Color`

```



/**
 * @description Returns a random pastel variant of the passed in color.
 * @param color The color to return a pastel variant of.
 * @param hex Pass in true to return an 8-character hex code else it will return an HSV color object.
 * @returns A random pastel color.
 */
```

##### `hueshift`

`(color: Color, opts = {minLightness?:number,maxLightness?:number}, hex = false): Color[]`

```
/**
 * @description Generates a palette of hue shifted colors (as a colour becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the base of the hueshift. Colors are internally converted to LCH.
 * @param minLightness  Minimum lightness value (range 0-100).
 * @param maxLightness  Maximum lightness value (range 0-100).
 * @param num The number of iterations to do on the color. It equals the amount of elements in the result array.
 * @param hueStep  Controls how much the hue will shift at each iteration.
 * @param hex Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 * @returns An array of colors.
 */

```
