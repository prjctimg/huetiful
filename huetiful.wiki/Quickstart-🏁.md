

## A guide to working with color programmatically

#### What's a color 🤔?

A color can be defined using different data types(arrays, strings, numbers plain objects). This allows us to work with color in almost any format and flexibility in how we want to define our color. Below are some examples listing all the supported formats of passing in color values and their respective conversion functions:

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

> ℹ️ [See here](https://culorijs.org/color-spaces
)  and the expected channel ranges or [more on converter functions](https://prjctimg.github.io/huetiful/modules/converters.html) page 🔗.

#### TailwindCSS colors🎨

As a starting point the library comes along with the default TailwindCSS palette included. This helps you get started easier when you're using [palette functions](https://prjctimg.github.io/huetiful/modules/generators.html) such as `hueShift()` and `earthtone()`

The Tailwind colors can be accessed from two wrapper functions, `tailwindColors` and `colors` , that both take the same parameters but `colors` takes both parameters at once while `tailwindColors` is curried. Here's an example showing the differences between the two functions:

```js
 import { tailwindColors , colors } from "huetiful-js";

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

### Working with arrays of color🎨

We can sort and filter colors using their property or channel values values like saturation,lightness and even contrast!
Here are some example using the filtering and sorting functions on an array of colors:

#### Sorting colors

An example of sorting colors by the relative luminance as defined by the WCAG 2.0 formula

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

#### Filtering colors

An example of filtering colors by the value of the hue angle. The function uses the Jch colorspace because of its perceptual uniformity. [George Francis explains this phenomena in detail here.](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)

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

[See more about the parameter types and other filtering functions](https://prjctimg.github.io/huetiful/modules/sortBy.html)

