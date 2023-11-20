
![Logo](./huetiful-logo.png)

#### JavaScript library for general purpose color manipulations

The aim of this project is to help designers and developers alike  work with color more programatically using utilities based on color theory. Though not necessarily a requirement, a basic background of color spaces, properties of color and any other color theory related information will make the library's use cases appear more simpler.

This project is inspired by projects such a [chroma-js](https://gka.github.io/chroma.js),[colorbrewer](https://colorbrewer2.org),[TailwindCSS](https://tailwindcss.com) and borrows some of the reasoning behind them to build functionality. In fact this library uses [Culori](https://culorijs.org) as its core dependency because it provides a rich API of low level functions written in JavaScript to perform color conversions and other general purpose color manipulations.

## Getting started

The library is available on npm as a package: Links to CDNs will be added soon.

> Note: Assuming you already have NodeJS installed
Use [npm](https://www.npmjs.com/package/huetiful-js) to install the package.

```bash
npm i huetiful-js
```

For use in the browser, you can use a CDN [you can use jsdelivr]() to load the library.

```html
https://cdn.jsdelivr.net/npm/huetiful-js/dist/huetiful.min.js

# With script tag 

<script type='module' src='https://cdn.jsdelivr.net/npm/huetiful-js/dist/huetiful.esm.min.mjs'></script>
```

## Overview

Below are short walkthroughs to demonstrate how the functions can be used in example scenerios.

### Colors

#### What's a color ?

A color can be defined in various formats. This gives us more flexibility in how we want to define our color. Below are examples listing all the supported formats of passing in color values and their respective conversion functions:

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

Note that toHex takes any color format and returns the hex string represantation of it:

We can even mix different color formats with no problem at all:

For more information on the color spaces supported by the library and the expected ranges, checkout the [Color Spaces page on the Culori docs](https://culorijs.org/color-spaces) . Or checkout the library's [Color conversions](https://huetiful-docs.vercel.app/blog/color-spaces-and-converters) page.

> All the functions are internally guarded by `toHex()` so you don't have to worry about converting colors back and fourth.

#### Tailwind colors

As a starting point the library comes along with the default TailwindCSS palette included.. This helps you get started easier when you're using [palette functions](https://huetiful-docs.vercel.app/blog/palette-utilities) such as `hueShift()` and `earthtone()`

The Tailwind colors are in the form of two wrapper functions that both take the same parameters but with a few differences: one is curried by default and the other is a tweaked variant of the same functionality but with a few improvements. Below are some examples showing the differences between the two functions:

```js
 import { tailwindColors,colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
console.log(red());
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'

  ////// example for colors() //////

// colors() has a builtin parameter called 'all' that returns all colors at the specified value
let all300 = colors("all", 300);

console.log(all300)
//[
  '#cbd5e1', '#d1d5db', '#d4d4d8',
  '#d4d4d4', '#d6d3d1', '#fca5a5',
  '#fdba74', '#fcd34d', '#fde047',
  '#bef264', '#86efac', '#6ee7b7',
  '#5eead4', '#7dd3fc', '#93c5fd',
  '#c4b5fd', '#d8b4fe', '#f0abfc',
  '#f9a8d4', '#fda4af'
]

let red = colors("red");
console.log(red);

// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]

let red100 = colors("red", 100);

console.log(red100)
// #fee2e2

```



### Working with collections of colors

The library has functions for sorting and filtering colors using their property values like saturation,lightness and even temperaure in Kelvins. Below are some examples of using the filtering and sorting functions on an array of colors:

#### Sorting colors

Below is an example of sorting colors by the relative luminance as defined by WCAG 2.0. 
> Note that you can specify the order as either ascending (`asc`) or descending (`desc`). The default is ascending. :

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

#### Filtering colors

Below is an example of filtering colors by their hue angle. The function uses LCH internally because its more perceptually uniform than HSL. [George Francis explains this phenomena in detail here.](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)

```js
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

filterByHue(sample, 20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]

 // We can even use expressions as the condition e.g '>=50' which means return the colors with a hue angle greater than or equal to 50

 // Here are some examples
console.log(filterByHue(sample, '>100')
)
// [ '#00ffdc', '#00ff78', '#00c000', '#007e00', '#164100' ]

console.log(filterByHue(sample, '<=100')
)
// [ '#ffff00', '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]

```
[See more about the parameter types and other filtering functions](https://huetiful-docs.vercel.app/blog/sorting-color)

### Palette functions

A small collection of simple palette functions are included in the library. One of my favourites is the `hueShift()`  (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) .
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

There's more where that came from. [See the palettes page]()

### Predicates

Is this color cool or warm, is it achromatic (grayscale) or chromatic? Though its easy to tell colors apart visually when they're displayed on the screen it can be a bit confusing to tell colors apart using code. Below is an example of demonstrating how to determine if a color is gray or not:

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

Here's an example showing how we can check if a color is cool using one of the predicates:


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
Another use case would be passing the predicate to an array method like `filter` to filter a collection of colors removing colors that return false for the passed in predicate. In the following example we use is warm to only return warm colors:

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

### Get the temperature right

And what if we wanted to get the color with the smallest/largest temperature range in Kelvins:

```js
import { minTemp,maxTemp } from 'huetiful-js'

console.log(minTemp("#a1bd2f"))
// 2528

console.log(maxTemp("b2c3f1"))
// 20107
```

Or maybe we want to know which color has the furthest hue distance in our sample collection against our target color:

```js

import { getFarthestHue } from 'huetiful-js'
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

console.log(getFarthestHue('lime', sample, 'lch'))
// 112.60431681589854

```

## What's next

The list of functions goes on beyond this. And since the library is pure JavaScript, you can hook it up with your creative coding library of choice like p5js or runejs. The possibilities are limited by the imagination of the user.


[See the full docs here](https:huetiful-docs.vercel.app)

## Need help ?

See some unexpected results? [Check the issue tracker](https://github.com/prjctimg/huetiful/issues) to open an issue or search for the problem to see if your issue already exists or has been resolved.

Would like to join the chat and share ideas and suggestions ? [See the discussions and just say hi, or share a coding meme(whatever breaks the ice)](https://github.com/prjctimg/huetiful/discussions)

## Contributing

First of all, thank you for using huetiful-js! Its people like you that make open source software better for the community!
Contributions are welcome! Help make this project better and easier to use for other developers by sharing your ideas and stomping out bugs and feature suggestions. Please see the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started.

## References

[Coloring with code: A programmatic approach by George Francis](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)

> ## License
>
> Copyright (c) 2023
> Dean Tarisai and contributors
> huetiful-js is released under the [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) license.
>
> This project makes extensive use of open source resources and its inception would have had been null if it wasn't for their pioneering. See the [LICENSES](./LICENSE.md) for the full list of open source licenses.
