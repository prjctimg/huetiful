---
title: Filtering colors
eleventyNavigation:
  ordering: 2
  key: Filtering colors
---

The library has a *filterBy* module which is a collection utilities for filtering colors using different factors as criteria.

All the filtering functions:

- Take a collection of colors as the first parameter.
- Have a *start* and *end* value for the factor being used as filtering criteria.
- Can take expressions as the second parameter as strings. If the second parameter (*start*) is a string the *end* parameter is ignored.
- Returns an array of colors that pass the filtering constraints.

#### filterByHue

**Parameters:**
(colors: Color[], startHue = 0, endHue = 360):Colors[]
*colors* The array of colors to filter.
 *startHue* The minimum end of the hue range.
 *endHue* The maximum end of the hue range.
 
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
 *startLuminance* The minimum end of the luminance range.
 *endLuminance* The maximum end of the luminance range.
 
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
 *startSaturation* The minimum end of the saturation range.
 *endSaturation* The maximum end of the saturation range.
 
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
*colors* The array of colors to filter.
*startTemp* The minimum end of the temperature range.
*endTemp* The maximum end of the temperature range.

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
