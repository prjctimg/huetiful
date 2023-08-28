---
title: Sorting colors
eleventyNavigation:
  ordering: 3
  key: Sorting colors
---
The library has a *sortBy* module which has utilities for sorting colors using different factors as criteria.

All the sorting functions:

- A collection of colors to sort according to the criteria defined by the sorting function.
- The sorting order as the optional second parameter. Default is ascending.
- Return an array of sorted colors ordered either in ascending or descending order

#### sortByLuminance

**Parameters:**
(colors:Color[], order:'asc' | 'desc'):Color[]
*colors* The array of colors to sort
 *order* The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 
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
*colors* The array of colors to sort
 *order* The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 mode The color space to compute the color distances in. All *colors* within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
 
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
*colors* The array of colors to sort
 *order* The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 
**Returns:**
An array of the sorted color values.

**Description:**
Sorts colors according to their tempertaure. Based on [Neil Bartlett's](https://github.com/neilbartlett/color-temperature) implementation.

**Example**

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
colors The array of colors to sort
 order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 
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
