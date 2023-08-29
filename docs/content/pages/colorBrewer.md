---
title: ColorBrewer color schemes
eleventyNavigation:
  ordering: 8
  key: Using divergent,sequential and qualitative palettes
---

You can retrieve precomputed color schemes from the ColorBrewer project as arrays of hex codes with the hues included in the scale as the only parameter.

#### sequential

**Parameters:**
(scheme: sequentialScheme): Color[] | "black"
*scheme* The name of the scheme.

**Returns:**
An array of colors in hex representation or the string 'black' when an invalid scheme is passed as an argument.

**Description:**
A wrapper function for ColorBrewer's map of sequential color schemes.

**Example:**
```javascript
import { sequential } from "huetiful-js";

let accent = sequential("OrRd");
console.log(accent);

//[
  '#fff7ec', '#fee8c8',
  '#fdd49e', '#fdbb84',
  '#fc8d59', '#ef6548',
  '#d7301f', '#b30000',
  '#7f0000'
]
```

#### qualitative

**Parameters:**
(scheme: qualitativeScheme): Color[] | "black"
*scheme* The name of the scheme.

**Returns:**
An array of colors in hex representation or the string 'black' when an invalid scheme is passed as an argument.

**Description:**
A wrapper function for ColorBrewer's map of qualitative color schemes.

**Example:**
```javascript
import { qualitative } from "huetiful-js";

let accent = qualitative("Accent");
console.log(accent);

//[
  '#7fc97f', '#beaed4',
  '#fdc086', '#ffff99',
  '#386cb0', '#f0027f',
  '#bf5b17', '#666666'
]

```

#### diverging

**Parameters:**
(scheme: divergingScheme): Color[] | "black"
*scheme* The name of the scheme.
**Returns:**
An array of colors in hex representation or the string 'black' when an invalid scheme is passed as an argument.
**Description:**
A wrapper function for ColorBrewer's map of diverging color schemes.

**Example:**

```javascript
import { diverging } from "huetiful-js";

let accent = diverging("BrBG");
console.log(accent);

//[
  '#543005', '#8c510a',
  '#bf812d', '#dfc27d',
  '#f6e8c3', '#f5f5f5',
  '#c7eae5', '#80cdc1',
  '#35978f', '#01665e',
  '#003c30'
]
```