![](assets/images/logo.png)

## Table of contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Table of contents](#table-of-contents)
- [What is this ?](#what-is-this-)
  - [How does it work ?](#how-does-it-work-)
    - [Type diversity for color tokens](#type-diversity-for-color-tokens)
    - [Working with collections of color](#working-with-collections-of-color)
  - [Palette generators](#palette-generators)
  - [Predicates⚖️](#predicates️)
    - [Tip :information:](#tip-information)
    - [Querying properties of color and their values of statistical significance](#querying-properties-of-color-and-their-values-of-statistical-significance)
  - [There's more](#theres-more)
  - [Contributing](#contributing)
  - [License](#license)

<!-- /code_chunk_output -->


## What is this ?

This library aims to make it simple and straight forward to manipulate color either as individual tokens or collections of tokens. It builds off where libraries like chroma.js and d3-color leave their APIs by adding collection methods for sorting/filtering,querying values of statistical significance (i.e the farthest hue angle in a collection as compared to an `against` color token)

Its like a lodash for dealing with color in an FP inspired approach. It uses Culori under the hood for color conversions and other color related bells and whistles. It is written in JavaScript but has type declarations for common built-in parameters and function signatures.

Consider the typical parameter signature of a filtering function:

```ts

declare function filterBySaturation(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  startSaturation?: number,
  endSaturation?: number,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;

```

Focus on the `collection` parameter and the return type. All functions that took a collection color as an array prior v1.78.x can now take this overload as well for collections. These functions retain the structure of the passed in collection which was different in the previous versions since we'd only return arrays by default.

### How does it work ?

#### Type diversity for color tokens

Culori accepts color tokens as plain objects, hexadecimal strings and CSS recognized named/serialized colors only. This package extends the data types which can be treated as valid tokens namely arrays/array-like objects, `Map`s , numbers and even boolean values.

```js
import { num2rgb, toHex } from 'huetiful-js'

let cssNamedColor = 'pink'
let colorNumber = 5000
let colorObject = { l: 50, c: 20, h: 40, mode: 'lch' }
let colorObjectWithAlpha = { l: 50, c: 20, h: 40, alpha: 0.5, mode: 'lch' }
let arrColor = ['rgb', 120, 80, 50]
let arrColorWithAlpha = ['rgb', 120, 80, 50, 0.1]


// Converting CSS named colors to hex
console.log(toHex(cssNamedColor))
// #ffc0cb

// Converting a number to an RGB object
console.log(num2rgb(colorNumber, true))
// #001388

// Converting a color object to a 6 character hex (without the alpha value)
console.log(toHex(colorObject))
// #956d62

// Converting a color object with an alpha property to an 8 character hex code (including the alpha channel)
console.log(toHex(colorObjectWithAlpha))
// #956d6280

// Converting an array of channel values to a 6 character hex code.
console.log(toHex(arrColor))
// #785032

// Converting an array of channel values (including the alpha channel) to an 8 character hex
console.log(toHex(arrColorWithAlpha))
//#7850321a


```

By widening the options for valid color tokens, we can get a bit more creative since we're working with color in different flavours :smile: .

#### Working with collections of color

Think of a scenario where we have collection of color tokens that we may want to filter by contrast and then have the result returned sorted by each color's hue angle in ascending order. In this example we will simply sort colors by luminance:


```js

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

// Note that you can specify the order as either ascending (`asc`) or descending (`desc`). The default is ascending. :

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

[See the filterBy module][filterBy] for examples on filtering colors and the sortBy module for sorting functions.

### Palette generators

A few simple palette generator functions are included in the library. One of my favourites is `hueShift`  (as a color becomes lighter, its hue shifts up and darker when its hue shifts down. ) .

```js
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

[See more palette generator functions][generators]

### Predicates⚖️

Is this color cool🥶 or warm 🥵, is it achromatic (grayscale) or chromatic? Though its easy to tell colors apart visually when they're displayed on the screen📺 it can be a bit confusing to tell colors apart using code🔢. Below is an example showing how to determine if a color is gray or not:

```js

import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"


isAchromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(map(sample, isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// true



// Here are using some of Culori's functions to demonstrate this example
// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, isAchromatic));

// The last two colors are false because we can't categorize black and white as achromatic.

//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

```

Here's an example🎆 showing how we can check if a color is cool using one of the predicate functions:

```js
import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[0]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]


```

<br/>

> #### Tip :information:
>
> Another use👷 case would be passing the predicate to an array method like `filter` to filter a collection of colors removing colors that return false for the passed in predicate. In the following example we use is `isWarm` to only return warm colors:

```js
import { isWarm } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];

console.log(sample.filter(isWarm))
// [ '#00ff78' ]


```

#### Querying properties of color and their values of statistical significance

Color has different properties which our eyes take note of in order to distinguish colors from each other even when they have certain perceived similarities. For example we can get the farthest hue angle in a collection against a specified color:

```js

import { getFarthestHueFrom } from 'huetiful-js'
let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
]

console.log(getFarthestHueFrom(sample, 'lime', 'lch'))
// 112.60431681589854



```

[See more examples here from the utils module][utils]

### There's more

If you wish to explore more examples and reasoning behind this library, [you can check out the wiki][wiki]. [Or head over to the docs][modules] to play around with the API

### Contributing

Contributions are welcome thanks :blue_heart: !
See how to get started with contributing to this project.

### License

&copy; 2024, [Dean Tarisai](https://twitter.com/deantarisai)
Released under the permissive Apache-2.0 license.

[sortBy]:[https://prjctimg.github.io/huetiful/sortBy.html]
[filterBy]:[https://prjctimg.github.io/huetiful/filterBy.html]
[generators]:[https://prjctimg.github.io/huetiful/generators.html]
[colors]:[https://prjctimg.github.io/huetiful/colors.html]
[converters]:[https://prjctimg.github.io/huetiful/converters.html]
[types]:[https://prjctimg.github.io/huetiful/types.html]
[modules]:[https://prjctimg.github.io/huetiful/modules.html]
[wiki]:[https://prjctimg.github.io/huetiful/wiki]
[utils]:[https://prjctimg.github.io/huetiful/utils.html]