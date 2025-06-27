[![NPM publish 📦](https://github.com/xml-wizard/huetiful/actions/workflows/release-please.yml/badge.svg)](https://github.com/prjctimg/huetiful/actions/workflows/publish.yml)

![huetiful-logo](./logo.svg)

TypeScript utility library for simple 🧮, fast ⏱️ and accessible ♿ color manipulation.

## Contents

- [What is this?](#what-is-this)
- [When should I use this](#when-should-i-use-this)
- [Install](#install)
  - [Deno](#deno)
- [Use](#use)
  - [Color conversion](#color-conversion)
  - [Builtin color maps🎨](#builtin-color-maps)
    - [Tailwind](#tailwind)
  - [Collection methods](#collection-methods)
    - [Sorting colors](#sorting-colors)
    - [Filtering colors](#filtering-colors)
  - [Palette generators](#palette-generators)
  - [Predicates⚖️](#predicates️)
- [API](#api)
- [Gotchas](#gotchas)
- [Types](#types)
  - [Community](#community)
  - [Contributing](#contributing)

## What is this?

This library uses color theory principles to provide functions that allow you to work with color as both individual tokens or collections. The source is written in TypeScript.

Under the hood it depends on Culori for all kinds of color manipulation wizadry.

## When should I use this

You can use this library when you want to do cool stuff with color and code 😎 such as:

- Parse and convert all CSS supported color strings plus `number`, `Array`, `object`, `Map`/`Set` and even `boolean`values to other color spaces.
- Query properties about color or collections of colors
- Filter colors that don't match a certain criteria
- Sort colors in a collection before manipulating them further
- Generate palettes using a single color or collection as a starting point
- Grab some color scales from Tailwind or Colorbrewer palettes

## Install

> The library uses ES modules and has no default export. If you wish to have a UMD variant (for some reason known to self), you can build from source. See [BUILD.md]() for more info

```sh
npm i @prjctimg/huetiful

# Or if you have different package manager...

# yarn add @prjctimg/huetiful

# bun add @prjctimg/huetiful
```

For Deno users, the library is available on JSR under a different alias:

```sh
deno add jsr:@prjctimg/huetiful

```

## Use

These examples are only compatible with version 3.x. Versions prior to that are deprecated.

### Color conversion

A color can be defined using different types(arrays, strings, numbers, plain objects etc). Below are examples listing all the valid color tokens:

[See more about the expected types of color tokens](https://huetiful-js/docs/guides/color)

```ts
import { token } from "@prjctimg/huetiful";

let cssNamedColor = "pink";
let colorNumber = 5000;
let colorObject = { l: 50, c: 20, h: 40, mode: "lch" };
let colorObjectWithAlpha = { l: 50, c: 20, h: 40, alpha: 0.5, mode: "lch" };
let arrColor = ["rgb", 120, 80, 50];
let arrColorWithAlpha = ["rgb", 120, 80, 50, 0.1];

let allColors = [
  cssNamedColor,
  colorNumber,
  colorObject,
  colorObjectWithAlpha,
  arrColor,
  arrColorWithAlpha,
];

let res = [];
for (const color of allColors) res.push(token(color));

console.log(res);

// ['#ffc0cb','#001388','#956d62','#956d6280','#785032',#7850321a]
```

### Builtin color maps🎨

#### Tailwind

The library comes along with the default TailwindCSS palette included. This helps you get started easier when you're using [palette generators](/docs/api/generators).

```ts
 import { colors } from "@prjctimg/huetiful";



// colors() has a builtin parameter called 'all' that returns all colors at the specified value which is '300' in this example
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

### Collection methods

We can sort and filter colors using their property or channel values values like saturation,lightness and even contrast.

See the [Factors](docs/guides/factors) page to understand how color properties or attributes are used.

Here are some example using the filtering and sorting functions on an array of colors:

#### Sorting colors

An example of sorting colors by hue angle and distance between each color in the collection as compared against 'yellow'. We get an object whose keys are the specified factors in the `factors` option:

```ts
import { sortBy } from "huetiful-js";

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

let sorted = sortBy(sample, {
  factor: ["hue", "distance"],
  order: "asc",
  against: "yellow",
});
console.log(sorted);

// {
//   hue: [
//     '#310000', '#3e0000',
//     '#4e0000', '#600000',
//     '#720000', '#ffff00',
//     '#164100', '#00c000',
//     '#007e00', '#00ff78',
//     '#00ffdc'
//   ],
//   distance: [
//     '#ffff00', '#00ff78',
//     '#00c000', '#007e00',
//     '#00ffdc', '#164100',
//     '#720000', '#600000',
//     '#4e0000', '#3e0000',
//     '#310000'
//   ]
// }
```

#### Filtering colors

An example of filtering colors by their relative contrast and luminance. In this case, we get an object whose keys are the specified `factor`s and values are the color tokens that are within the defined ranges.

```ts
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
```

[See more functions for manipulating collections](https://huetiful-js.com/docs/api/collection)

### Palette generators

Here's an example of `hueshift` and paired palettes.

```ts
import { hueshift } from "huetiful-js";

let hueShiftedPalette = hueshift("#3e0000");

console.log(hueShiftedPalette);

// [
"#ffffe1",
  "#ffdca5",
  "#ca9a70",
  "#935c40",
  "#5c2418",
  "#3e0000",
  "#310000",
  "#34000f",
  "#38001e",
  "#3b002c",
  "#3b0c3a";
// ]
```

[See more palette generator functions](https://huetiful-js.com/docs/api/palettes)

### Predicates⚖️

Is this color cool🥶 or warm 🥵, is it achromatic (grayscale) or chromatic? Though its easy to tell colors apart visually when they're displayed on the screen📺 it can be a bit confusing to tell colors apart using code🔢. Below is an example showing how to determine if a color is gray or not:

```js
import { achromatic, token } from "@prjctimg/huetiful";
import { interpolate, samples } from "culori";

achromatic("pink");
// false

let sample = ["#164100", "#ffff00", "#310000", "pink"];

console.log(map(sample, achromatic));

// [false, false, false,false]

achromatic("gray");
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
[false, true, true, true, true, true, true, true, true, true, true, false];
```

```ts
import { temp } from "@prjctimg/huetiful";

let sample = ["#00ffdc", "#00ff78", "#00c000"];

console.log(sample.map(temp));

// [ 'cool',  'warm', 'cool']
```

Another use👷 case would be passing the predicate to an array method like `filter` to filter a collection of colors removing colors that are not warm/cool:

```ts
import { temp } from "@prjctimg/huetiful";

let sample = ["#00ffdc", "#00ff78", "#00c000"];

console.log(sample.filter((c) => temp(c) === "warm"));
// [ '#00ff78' ]
```

## API

Every function in this package expects either a valid color token or collection of color tokens as input.

[See the complete documentation here](https://huetiful.gitbook.io)

### Community

[Community](https://github.com/prjctimg/huetiful/discussions)

### Contributing

[Contributing](https://github.com/prjctimg/huetiful/blob/main/contributing.md)

License ⚖️

###### This is free software. Released under the GNU GPL-3.0 license

© 2021 - 2025, [ディーン・タリサイ]("https://prjctimg.netlify.app")
