### `core-utils`

These are the small helper utilities for doing various low level manipulations and such as querying a color's channel values.

#### `alpha`

`(color: Color, value?: number): Color | number`

```
**
 * @function
 * @description Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param color The color with the targeted opacity/alpha channel.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color The resulting color. Returns an 8 character hex code.
 */


// Example

```

#### `darken`

`(color: Color, amount: number): Color`

```
/**
 * @function
 * @description Darkens the color by reducing the lightness channel. .
 * @param   color The color to darken.
 * @param amount The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns color The darkened color.
 */
```

### `getChannel`

`(mc: string) =>
  (color: Color): number`

```
/**
 * @function
 * @description Gets the  value specifified channel on the color.
 * @param mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @param color The color being queried.
 * @returns value The value of the queried channel.
 * */
```

#### `getLuminance`

`(color: Color): number`

```
/** @alias
 * Gets the luminance value of that color as defined by WCAG.
 * @param color The color to query.
 * @returns value The color's luminance value.
 */

```

#### `setLuminance`

`(color: Color, lum: number):Color`

```
/**
 * @function
 * @description Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).
 * @param color The color to set luminance
 * @param lum The amount of luminance to set. The value range is normalised between [0,1]
 * @returns The mutated color with the modified properties
 */

```

#### `getTemp`

`(color: Color): number`

```
/**
 * @description Returns the temperature value in Kelvins of the passed in color.
 * @param color The color to query its temperature value
 * @returns The color's temperature in Kelvins.
 */

```

#### `setChannel`

`(mc: string) =>
  (color: Color, value: number | string): Color`

```
/**
 * @function
 * @description Sets the value for the specified channel in a color.
 * @param  color Any recognizable color token.
 * @param  mc The mode and channel to work with. For example 'rgb.b'.
 * @param  value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
 * @returns color The mutated color.
 */
```

#### `setTemp`

`(kelvin: number): Color`

```
/**
 * @function
 * @description Converts the temperature value (in Kelvins) to an RGB color.
 * @param kelvin The number of Kelvins. From 0 to 30,000 .
 * @returns color An RGB color object.
 */
```
