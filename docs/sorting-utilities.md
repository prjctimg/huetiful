### The `sortBy` module

The library has a `sortBy` module which has utilities for sorting colors using different factors as criteria.

All the sorting functions:

- A collection of colors to sort according to the criteria defined by the sorting function.
- The sorting order as the optional second parameter. Default is ascending.
- Return an array of sorted colors ordered either in ascending or descending order

#### `sortByLuminance`

`(colors:Color[], order:'asc' | 'desc'):Color[]`

```
import { sortByLuminance } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

/**
 * @function
 * @description Sorts colors according to the relative brightness as defined by WCAG definition.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.

 */

sortByLuminance(sample)
// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#164100',
  '#007e00', '#00c000',
  '#00ff78', '#00ffdc',
  '#ffff00'
]

sortByLuminance(sample, "desc");

// [
  '#ffff00', '#00ffdc',
  '#00ff78', '#00c000',
  '#007e00', '#164100',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

```

#### `sortBySaturation`

`(colors:Color[], order:'asc' | 'desc'):Color[]`

```
import { sortBySaturation } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];


/**
 * @function
 * @description Sorts colors according to their saturation.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.
 */

sortBySaturation(sample);


// [
  '#310000', '#3e0000',
  '#164100', '#4e0000',
  '#600000', '#720000',
  '#00ffdc', '#007e00',
  '#00ff78', '#00c000',
  '#ffff00'
]

sortBySaturation(sample);
// [
  '#ffff00', '#00c000',
  '#00ff78', '#007e00',
  '#00ffdc', '#720000',
  '#600000', '#4e0000',
  '#164100', '#3e0000',
  '#310000'
]

```

#### `sortByHue`

`(colors:Color[], order:'asc' | 'desc'):Color[]`

```
import { sortByHue } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];


/**
 * @function
 * @description Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
 * @param  colors The array of colors to sort
 * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns  An array of the sorted color values.
 * @param mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
 */

sortByHue(sample);



sortByHue(sample,'desc');






```

#### `sortByTemp`

`(colors:Color[], order:'asc' | 'desc'):Color[]`

```
import { sortByTemp } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];


/**
 * @function
 * @description Sorts colors according to temperature value in Kelvins according to the temperatu. Achromatic colors may return awkward results.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 */

sortByTemp(sample)


sortByTemp(sample,'desc')



```
