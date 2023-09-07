---
title: Array methods
eleventyNavigation:
  key: Array methods
---
## Filtering colors

The library has a *filterBy* module which is a collection utilities for filtering colors using different factors as criteria.

All the filtering functions:

- Take a collection of colors as the first parameter.
- Have a *start* and *end* value for the factor being used as filtering criteria.
- Can take expressions as the second parameter as strings. If the second parameter (*start*) is a string the *end* parameter is ignored.
- Returns an array of colors that pass the filtering constraints.

#### filterByDistance

 **Parameters:**
 (colors: Color[],against: Color,startDistance = 0.05,endDistance?: number,
  { mode?: ColorSpaces; weights?: [number, number, number, number] }
 *startDistance* **The minimum end of the distance range.**
 *endDistance* **The maximum end of the distance range.**
 *weights* **The weighting values to pass to the Euclidean function. Default is [1,1,1,0].**
 *mode* **The color space to calculate the distance in .**

 **Returns:**
  Array of filtered colors.
  
 **Description:**
  Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
  
  **Example:**

  ```javascript
  
  // Example
  
  
  ```

#### filterByContrast

 **Parameters:**
   (colors: Color[], against: Color, startContrast = 0.05, endContrast?: number): Color[]
  *colors* **The array of colors to filter.**
 *startContrast* **The minimum end of the contrast range.**
 *endContrast* **The maximum end of the contrast range.**

  **Returns:**
 Array of filtered colors.

 **Description:**
 Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

  **Example:**

```javascript

//Example

```

#### filterByHue

**Parameters:**
(colors: Color[], startHue = 0, endHue = 360):Colors[]
*colors* **The array of colors to filter.**
 *startHue* **The minimum end of the hue range.**
 *endHue* **The maximum end of the hue range.**

 **Returns:**
Array of the filtered colors.

**Description**
Returns colors in the specified hue ranges between 0 to 360.

**Example:**

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



filterByHue(sample, 20, 80);

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]

```

#### filterByLuminance

**Parameters:**
(colors: Color[], startLuminance = 0.05, endLuminance = 1):Colors[]
*colors* The array of colors to filter.
 *startLuminance* **The minimum end of the luminance range.**
 *endLuminance* **The maximum end of the luminance range.**

 **Returns:**
Array of the filtered colors.

**Description**
Returns colors in the specified luminance range.The range is normalized to [0,1]

**Example:**

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



filterByLuminance(sample, 0.4, 0.9);

// [ '#00ffdc', '#00ff78' ]

```

#### filterBySaturation

**Parameters:**
(colors, startSaturation = 0.05, endSaturation = 1):Color[]
*colors* The array of colors to filter.
 *startSaturation* **The minimum end of the saturation range.**
 *endSaturation* **The maximum end of the saturation range.**

 **Returns:**
Array of the filtered colors.

**Description:**
Returns an array of colors in the specified saturation range. The range is normalized to [0,1]

**Example:**

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



filterBySaturation(sample, 0.1, 0.8);

// [
  '#00ffdc', '#007e00',
  '#164100', '#310000',
  '#3e0000', '#4e0000',
  '#600000', '#720000'
]

```

#### filterByTemp

**Parameters:**
(colors, startTemp = 1000, endTemp = 6000):Color[]
*colors* **The array of colors to filter.**
*startTemp* **The minimum end of the temperature range.**
*endTemp* **The maximum end of the temperature range.**

**Returns:**
Array of the filtered colors.
  
**Description:**
Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.

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


filterByTemp(sample, 1000, 20000);

// [
'#00c000', '#007e00',
'#164100', '#ffff00',
'#310000', '#3e0000',
'#4e0000', '#600000',
'#720000'
]
```

#### filterByLightness

**Parameters:**
(colors,startLightness = 5,endLightness = 100): Color[]
*colors* **The array of colors to filter.**
*startLightness* **The minimum end of the lightness range.**
*endLightness* **The maximum end of the lightness range.**

**Returns:**
Array of the filtered colors.
  
**Description:**
Returns an array of colors in the specified lightness range. The range is between 0 and 100.

```javascript
import { filterByLightness } from "huetiful-js";
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


filterByLightness(sample, 20, 80);

// [ '#00c000', '#007e00', '#164100', '#720000' ]
```

## Sorting colors

The library has a *sortBy* module which has utilities for sorting colors using different factors as criteria.

All the sorting functions:

- A collection of colors to sort according to the criteria defined by the sorting function.
- The sorting order as the optional second parameter. Default is ascending.
- Return an array of sorted colors ordered either in ascending or descending order

#### sortByLuminance

**Parameters:**
(colors:Color[], order:'asc' | 'desc'):Color[]
*colors* **The array of colors to sort**
 *order* **The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')**

**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to their luminance value as per WCAG definition.

**Example:**

```javascript
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

 

let sorted = sortByLuminance(sample)
console.log(sorted)
// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#164100',
  '#007e00', '#00c000',
  '#00ff78', '#00ffdc',
  '#ffff00'
]

let sortedDescending = sortByLuminance(sample, "desc");
console.log(sortedDescending)
// [
  '#ffff00', '#00ffdc',
  '#00ff78', '#00c000',
  '#007e00', '#164100',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

```

#### sortBySaturation

**Parameters:**
(colors:Color[], order:'asc' | 'desc'):Color[]
colors The array of colors to sort
 order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')

**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to their saturation.

**Example:**

```javascript
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

let sorted = sortBySaturation(sample);
console.log(sorted);

// [
  '#310000', '#3e0000',
  '#164100', '#4e0000',
  '#600000', '#720000',
  '#00ffdc', '#007e00',
  '#00ff78', '#00c000',
  '#ffff00'
]

let sortedDescending = sortBySaturation(sample,'desc');
console.log(sortedDescending)
// [
  '#ffff00', '#00c000',
  '#00ff78', '#007e00',
  '#00ffdc', '#720000',
  '#600000', '#4e0000',
  '#164100', '#3e0000',
  '#310000'
]

```

#### sortByHue

**Parameters:**
(colors:Color[], order:'asc' | 'desc'):Color[]
*colors* **The array of colors to sort**
 *order* **The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')**
 *mode* **The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.**

**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported.

**Example:**

```javascript
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


let sorted = sortByHue(sample);
console.log(sorted)


let sortedDescending = sortByHue(sample,'desc');
console.log(sortedDescending)

```

#### sortByTemp

**Parameters:**
(colors:Color[], order:'asc' | 'desc'):Color[]
*colors* **The array of colors to sort**
*order* **The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')**

**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to their tempertaure. Based on [Neil Bartlett's](https://github.com/neilbartlett/color-temperature) implementation.

**Example:**

```javascript
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

let sorted = sortByTemp(sample)
console.log(sorted)

let sortedDescending = sortByTemp(sample,'desc')
console.log(sortedDescending)
```

#### sortByLightness

**Parameters:**
(colors:Color[], order:'asc' | 'desc'):Color[]
*colors* **The array of colors to sort**
*order* **The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')**

**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to their lightness.

**Example:**

```javascript

import { sortByLightness } from "huetiful-js";
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
]

sortByLightness(sample)

//


sortByLightness(sample,'desc')

//


```

#### sortByDistance

**Parameters:**
(colors: Color[],against: Color,order?: "asc" | "desc",{ mode?: ColorSpaces, weights?: [number, number, number, number] }): Color[]
 *colors* **The array of colors to sort.**
 *against* **The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.**
 *order* **The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')**
 *weights* **The weighting values to pass to the Euclidean function. Default is [1,1,1,0].**
 *mode* **The color space to calculate the distance in.**

**Returns:**

**Description:**
Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is compared against a color which is used for comparison for all the colors in the array.

**Example:**

```javascript

//Example

```

#### sortByContrast

**Parameters:**
(colors: Color[],against: Color,order: "asc" | "desc"): Color[]
*colors* **The array of colors to sort**
*order* **The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')**

**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

**Example:**

```javascript

//Example
```
