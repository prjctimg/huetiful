[![Deploy static content to Pages](https://github.com/xml-wizard/huetiful/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/xml-wizard/huetiful/actions/workflows/deploy-docs.yml)
[![NPM publish 📦](https://github.com/xml-wizard/huetiful/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/xml-wizard/huetiful/actions/workflows/npm-publish.yml)
![NPM Downloads](https://img.shields.io/npm/dm/huetiful-js?style=social&logo=npm&link=https%3A%2F%2Fnpmjs.com%2Fpackage%2Fhuetiful-js%20)
![GitHub Repo stars](https://img.shields.io/github/stars/xml-wizard/huetiful?style=social&logo=github)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/huetiful-js?style=social)](https://bundlephobia.com/package/huetiful-js)
[![twitter](https://img.shields.io/twitter/follow/deantarisai?style=social)](https://twitter.com/deantarisai)


<div style='background:linear-gradient(to right bottom,#f97316,#ec4899,#3b82f6,#22c55e);width:100vw;height:50vh;'></div>
  <h4 align='center' style='font-family:monospace;'>huetiful-js</h4>
  <h3 style='color:#6b7280;font-weight:600;font-family:monospace' align='center'>Function oriented library <span style='color:black;'>for</span> <span style='color:#3b82f6;'>color</span> <span style='color:#ec4899;'>manipulation</span>🧪</h3>
<p align='center'>
<br>
<br>
 <a href="https://huetiful-js.com">📜 Docs</a>
    ·
    <a href="https://github.com/xml-wizard/huetiful/issues/new?template=---bug-report.md">🐞 Report Bug</a>
    ·
    <a href="https://github.com/xml-wizard/huetiful/issues/new?template=---feature-request.md">🍩 Request Feature</a>
    ·
    <a href="https://github.com/xml-wizard/huetiful/wiki">🧠 Wiki </a>
</p>



## Table of contents

- [What is this ?](#what-is-this-)
  - [Installation and usage](#installation-and-usage)
    - [Node](#node)
    - [Browser](#browser)
    - [Quickstart](#quickstart)
  - [How does it work ?](#how-does-it-work-)
    - [Type diversity for color tokens](#type-diversity-for-color-tokens)
    - [Working with collections of color](#working-with-collections-of-color)
  - [Palette generators](#palette-generators)
  - [Predicates](#predicates)
    - [Querying properties of color and their values of statistical significance](#querying-properties-of-color-and-their-values-of-statistical-significance)
  - [Functional with a hint of OOP via method chaining](#functional-with-a-hint-of-oop-via-method-chaining)
  - [There's more](#theres-more)
    - [Community](#community)
    - [Contributing](#contributing)
    - [References 🔗](#references-)
      - [License ⚖️](#license-️)

## What is this ?

This library aims to make it simple and straight forward to manipulate color either as individual tokens or collections of tokens. It builds off where libraries like chroma.js and d3-color leave their APIs by adding collection methods for sorting/filtering ,querying values of statistical significance and setting/getting different property values of color.

Its like a lodash for dealing with color . It uses Culori under the hood for color conversions and other color related bells and whistles. It is written in JavaScript but has type declarations for common built-in parameters and function signatures.

Consider the typical parameter signature of a filtering function:

```ts

declare function filterByChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  startSaturation?: number,
  endSaturation?: number,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;

```

Focus on the `collection` parameter and the return type of the above function declaration. All functions that took a collection color as an array prior v1.78.x can support this overload as well for collections. These functions retain the structure of the passed in collection which was different in the previous versions since we'd only return arrays by default. This means if you pass in an object as a collection the function will return a `Map`. See more about this behavior on the [collection methods page on our wiki](https://github.com/xml-wizard/huetiful/wiki/collection-methods)

#### Installation and usage

##### Node

The library🧾 is on npm as a package📦 for use in NodeJS:

```bash
npm i huetiful-js
```

You can use a CDN in this example, jsdelivr to load the library remotely:

```ts
import {...} from 'https://cdn.jsdelivr.net/npm/huetiful-js/lib/huetiful.esm.mjs'

```

##### Browser

Or load the library as a UMD glabal (`huetiful`) in your HTML file using a `<script>` tag:

```html
# With script tag

<script src='https://cdn.jsdelivr.net/npm/huetiful-js/dist/huetiful.umd.js'></script>
```

##### Quickstart

[See the Quickstart section on the Wiki](https://github.com/xml-wizard/huetiful/wiki/Quickstart) to see some examples and demonstrations of the library.

### How does it work ?

#### Type diversity for color tokens

Culori accepts color tokens as plain objects, hexadecimal strings and CSS recognized named/serialized colors only. This package extends the data types which can be treated as valid tokens namely arrays/array-like objects, `Map`s , numbers and even boolean values.

```ts
import { num2color, color2hex } from 'huetiful-js'

let cssNamedColor = 'pink'
let colorNumber = 5000
let colorObject = { l: 50, c: 20, h: 40, mode: 'lch' }
let colorObjectWithAlpha = { l: 50, c: 20, h: 40, alpha: 0.5, mode: 'lch' }
let arrColor = ['rgb', 120, 80, 50]
let arrColorWithAlpha = ['rgb', 120, 80, 50, 0.1]


// Converting CSS named colors to hex
console.log(color2hex(cssNamedColor))
// #ffc0cb

// Converting a number to hexadecimal
console.log(num2color(colorNumber))
// #001388

// Converting a color object to a 6 character hex (without the alpha value)
console.log(color2hex(colorObject))
// #956d62

// Converting a color object with an alpha property to an 8 character hex code (including the alpha channel)
console.log(color2hex(colorObjectWithAlpha))
// #956d6280

// Converting an array of channel values to a 6 character hex code.
console.log(color2hex(arrColor))
// #785032

// Converting an array of channel values (including the alpha channel) to an 8 character hex
console.log(color2hex(arrColorWithAlpha))
//#7850321a


```

By widening the options for valid color tokens, we can get a bit more creative since we're working with color in different flavours :smile: .

#### Working with collections of color

Think of a scenario where we have collection of color tokens that we may want to filter by contrast and then have the result returned sorted by each color's hue angle in ascending order. In this example we will simply sort colors by luminance:

```ts

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

[See the filterBy module](https://huetiful-js.com/filterBy.html) for examples on filtering colors and the sortBy module for sorting functions.

### Palette generators

A few simple palette generator functions are included in the library. One of my favourites is `hueShift`  (as a color becomes lighter, its hue shifts up and darker when its hue shifts down. ) .

```ts
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

[See more palette generator functions](https://huetiful-js.com/generators.html)

### Predicates

Is this color cool🥶 or warm 🥵, is it achromatic (grayscale) or chromatic? Though its easy to tell colors apart visually when they're displayed on the screen📺 it can be a bit confusing to tell colors apart using code. Below is an example showing how to determine if a color is gray or not:

```ts

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



// Here we are using some of Culori's functions to demonstrate this example
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

```ts
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

> **Tip**
>
> Another use👷 case would be passing the predicate to an array method like `filter` to filter a collection of colors removing colors that return false for the passed in predicate. In the following example we use is `isWarm` to only return warm colors:

```ts
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

```ts

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

[See more examples here from the utils module](https://huetiful-js.com/utils.html)

### Functional with a hint of OOP via method chaining

Libraries like chroma.js popularized the read-manipulate-output chains when working with color. This library extends that idea by chaining collection methods to a `ColorArray` class. The actual class is not publicly exported because its still experimental but you can access it via the `load` wrapper function which simply takes the collection to bind to the `new ColorArray`. Color tokens also have a chain for binding them to all functions that take a single color as the initial parameter. This chain returns a `new Color` instance that's accessible via the `color` function. See the example below:

```ts

import { load, color } from 'huetiful-js';

var myLazyChain = load([
  'blue',
  '#ff3c00',
  ['rgb', 200, 30, 50],
  { l: 5, c: 10, h: 60, mode: 'lch' }
])
  .sortByHue('desc')
  .output();

console.log(myLazyChain);

//['blue', ['rgb', 200, 30, 50], { l: 5, c: 10, h: 60, mode: 'lch' }, '#ff3c00'];

var myLazyChainTwo = color(['hsl', 100, 0, 43]).isAchromatic();

console.log(myLazyChainTwo);

// true

```

### There's more

If you wish to explore more examples and reasoning behind this library, [you can check out the wiki](https://huetiful-js.com/wiki) [Or head over to the docs](https://huetiful-js.com/modules.html) to play around with the API

#### Community

[See the discussions and just say hi, or share a coding meme(whatever breaks the ice🏔️)](https://github.com/xml-wizard/huetiful/discussions)

#### Contributing

This project is fully open source! Contributions of any kind are greatly appreciated! See🔍 the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started.

<img alt="logo" title="huetiful-js" src="./docs/assets/img/logo_v1.png">

#### References 🔗

- [Coloring with code: A programmatic approach by George Francis](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)
- [Introducing Adaptive Color Palettes](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/thinking-design/introducing-adaptive-color-palettes-111b5842fc88&ved=2ahUKEwj5xNSuy-6DAxV8REEAHVKaAMwQFnoECB0QAQ&usg=AOvVaw2ufCwph7oofZCFawA0WPr-)
- [Culori API docs](https://culorijs.org/api/)

##### License ⚖️

 <pre>
 © 2024,Dean Tarisai
 Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>
 🧪 & 🔬 with 🥃 in Crowhill,ZW</pre>
