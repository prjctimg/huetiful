
### The `filterBy` module

The library has a `filterBy` module which is a collection utilities for filtering colors using different factors as criteria.

All the filtering functions:

- Take a collection of colors as the first parameter.
- Have a `start` and `end` value for the factor being used as filtering criteria.
- Can take expressions as the second parameter as strings. If the second param (`start`) is a string the `end` param is ignored.
- Returns an array of colors that pass the filtering constraints.

#### `filterByHue`

`(colors: Color[], startHue = 0, endHue = 360):Colors[]`

```javascript
import { filterByHue } from "huetiful-js";
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
 * Returns colors in the specified hue ranges between 0 to 360.
 * @param colors The array of colors to filter.
 * @param  startHue The minimum end of the hue range.
 * @param  endHue The maximum end of the hue range.
 * @returns  Array of the filtered colors.
 */
filterByHue(sample, 20, 80);

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]

```

#### `filterByLuminance`

`(
  colors:Color[],
  startLuminance = 0.05,
  endLuminance = 1
): Color[]`

```javascript
import { filterByLuminance } from "huetiful-js";
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
 *  @function
 * Returns an array of colors in the specified luminance range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startLuminance The minimum end of the luminance range.
 * @param  endLuminance The maximum end of the luminance range.
 * @returns Array of filtered colors.
 */

filterByLuminance(sample, 0.4, 0.9);

// [ '#00ffdc', '#00ff78' ]

```

#### `filterBySaturation`

`(colors, startSaturation = 0.05, endSaturation = 1):Color[]`

```javascript
import { filterBySaturation } from "huetiful-js";
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
 *  @function
 * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startSaturation The minimum end of the saturation range.
 * @param  endSaturation The maximum end of the saturation range.
 * @returns Array of filtered colors.
 */

filterBySaturation(sample, 0.1, 0.8);

// [
  '#00ffdc', '#007e00',
  '#164100', '#310000',
  '#3e0000', '#4e0000',
  '#600000', '#720000'
]

```

#### `filterByTemp`

`(colors, startTemp = 1000, endTemp = 6000):Color[]`

```javascript
import { filterByTemp } from "huetiful-js";
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

- @function
- @description Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.
- @param colors The array of colors to filter.
- @param startTemp The minimum end of the temperature range.
- @param endTemp The maximum end of the temperature range.
- @returns Array of the filtered colors.
  */

filterByTemp(sample, 1000, 20000);

// [
'#00c000', '#007e00',
'#164100', '#ffff00',
'#310000', '#3e0000',
'#4e0000', '#600000',
'#720000'
]
```
