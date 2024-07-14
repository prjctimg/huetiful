# Quickstart

## Introduction

Color has a significant impact in visual design. Its absence or presence can symbolify a certain emotion or mood. This quick start guide aims to highlight some of the factors we can take into consideration when we are working with colors programmatically in our projects.

### The palette

Before we start, we need some colors to work with. But where do we get them ? The library contains several color maps from popular sources such as Tailwind and the Colorbrewer project. In the following code sample, we're going to retrieve all colors at the value `'500'` from the default Tailwind palette:

```js

import { colors } from 'huetiful-js'

let palette = colors('all','500')
let base = colors('orange','700')

```

Now that we have our collection of colors (`palette`) and our base color (`base`), we can move on.

### Getting and setting a color's properties

A color has attributes that affect its appearance on the screen. The ones we will focus on are:

- hue
- chroma (or saturation)
- lightness
- luminance

Each of these factors can be set and retrieved. All the above factors except luminance can be manipulated by the `mc` helper function. The snippet assumes we have our variables from above:

```js
import { mc } from 'huetiful-js'

// Getting the value of a channel. We specify the channel like so 'lch.h' or the colorspace followed by the channel we want to query/manipulate.

let baseHue = mc('lch.h')(base)
console.log(baseHue)
// 47.284166883381715



// Setting the value on a target channel is easy, we just specify a value after the color parameter

let newBaseHue = mc('lch.h')(base,80)
console.log(mc('lch.h')(newBaseHue))
// 80


// We can even retrieve target channels in a batch. 
// In this example we will get all the lightness and chroma channels
// It will return a one dimensional array with each element containing our targeted channels

let channels = palette.map((c)=>[mc('lch.l')(c),mc('lch.c')(c)])
console.log(channels)

// output 

[
  [ 48.16002128494665, 14.84659692797594 ],
  [ 47.80679165550187, 8.705188648429003 ],
  [ 47.869538692013, 5.186054040784232 ],
  [ 48.44110466540339, 0 ],
  [ 48.16672412153919, 4.346185212359284 ],
  [ 55.785231176004174, 77.26551009641032 ],
  [ 64.49630350411789, 84.56809605520037 ]...
]

```

Setting a color's luminance usually involves mixing it with black (to decrease it) or with white (to increase it):

```js
import { luminance } from 'huetiful-js'


// Here we are querying a color's luminance
console.log(luminance(base))

// 0.1527647179437487


// We can even check all the luminance values from a collection
console.log(palette.map(c=>luminance(c)))

// [
  0.17064187593603225, 0.16718939998127905,
  0.16726105741652897,  0.1714411007328226,
  0.16886033852304275,  0.2290232193127885,
   0.3245913194871378, 0.43890358994810874,
   0.4975015604562451, 0.48149192159915893,
  0.41080737992576033,  0.3639306191994719,
  0.37182875718495256, 0.32886821345425216,
   0.2354889123162347, 0.19797080780440895,
  0.21537230458266993,  0.2536402652485162,
  0.24767504361547918,  0.2359626229572308
]


// Setting the color's luminace just requires us to add one more parameter to the function call
console.log(base)
// #c2410c

let modifiedLuminance = luminance(base,0.7)
console.log(modifiedLuminance)
// #bf5a3c

```

## Querying a color's attributes

Color's have many attributes we can consider when designing. The ones we will focus on are:

- chromaticity
- temperature
- hue family

### Chromaticity

A color can either be chromatic or achromatic (or gray). Being able to distinguish between the two can be useful when we are generating color scales in colorspaces that have certain colors that are not in the RGB gamut for example LCh or have certain falsy values on their channels.

> Actually, colors with a falsy chroma channel are grayscale in appearance because the hue channel depends on that channel for the resultant color to be chromatic or appear colorful.

```js
import { achromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"


achromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(map(sample, achromatic));

// [false, false, false,false]

achromatic('gray')
// true



// Here we are using some of Culori's functions to demonstrate this example
// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, achromatic));

// The last two colors are false because we can't categorize black and white as achromatic.

//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]


```

## Getting functional: Working with collections of color

We can perform operations on any iterable collections as long as the collection's values are valid or parseable color tokens. Some of the collection operations exposed by this library include:

- Sorting
- Filtering
- Querying collection metadata
- Generating palettes

### Sorting

We can sort collections of colors using their attribute or property values as the criterion for the operation. In the following example we'll see how to go about this:

```js
import { sortBy } from "huetiful-js";

// Before sorting
console.log(palette)

// [
  '#64748b', '#6b7280', '#71717a',
  '#737373', '#78716c', '#ef4444',
  '#f97316', '#f59e0b', '#eab308',
  '#84cc16', '#22c55e', '#10b981',
  '#14b8a6', '#0ea5e9', '#3b82f6',
  '#8b5cf6', '#a855f7', '#d946ef',
  '#ec4899', '#f43f5e'
]

// This variable stores our sorted palette
let sortedPalette = sortBy(palette, { factor:'hue', order:'desc' })
console.log(sortedPalette)
// After sorting

// [
  '#f43f5e', '#ef4444', '#f97316',
  '#f59e0b', '#eab308', '#84cc16',
  '#22c55e', '#10b981', '#14b8a6',
  '#0ea5e9', '#64748b', '#6b7280',
  '#3b82f6', '#71717a', '#737373',
  '#78716c', '#8b5cf6', '#a855f7',
  '#d946ef', '#ec4899'
]


```

We can even sort our palette using different factors and we'll get an object whose keys are the factors we specified and values are the sorted collections:

```js
// To specify multiple factors we pass an array of the factors we want
// The against property is used when we are doing a 'relative sort'
// or when we are dealing with the 'contrast' and 'distance' factors
sortedPalette = sortBy(palette, { factor:['hue','luminance','contrast'],against:'yellow' })
console.log(sortedPalette)


// {
  hue: [
    '#f43f5e', '#ef4444', '#f97316',
    '#f59e0b', '#eab308', '#84cc16',
    '#22c55e', '#10b981', '#14b8a6',
    '#0ea5e9', '#64748b', '#6b7280',
    '#3b82f6', '#71717a', '#737373',
    '#78716c', '#8b5cf6', '#a855f7',
    '#d946ef', '#ec4899'
  ],
  luminance: [
    '#6b7280', '#71717a', '#78716c',
    '#64748b', '#737373', '#8b5cf6',
    '#a855f7', '#ef4444', '#3b82f6',
    '#f43f5e', '#ec4899', '#d946ef',
    '#f97316', '#0ea5e9', '#10b981',
    '#14b8a6', '#22c55e', '#f59e0b',
    '#84cc16', '#eab308'
  ],
  contrast: [
    '#eab308', '#84cc16', '#f59e0b',
    '#22c55e', '#14b8a6', '#10b981',
    '#0ea5e9', '#f97316', '#d946ef',
    '#ec4899', '#f43f5e', '#3b82f6',
    '#ef4444', '#a855f7', '#8b5cf6',
    '#737373', '#64748b', '#78716c',
    '#71717a', '#6b7280'
  ]
}


```

### Filtering

We can filter out colors that don't meet the specified start and end ranges of the factor(s) we are using as filtering criterion. The parameter signature for the `sortBy` function is similar to that of the `fiterBy` function except for a few specifics.

In the following example we will filter out colors that don't have a relative contrast against our `base` color which is above 4 and below 10:

```js
import { filterBy } from 'huetiful-js'


// Note that we are using string expressions to specify our ranges. 
// Plain numbers would work quite fine as well
let filteredPalette = filterBy(palette,{ factor:'contrast', against:base, ranges:['>4','>=10' ]})

console.log(filteredPalette)

// [ '#64748b', '#6b7280', '#71717a', '#737373', '#78716c' ]

```

When specifying multiple factors, we'll need to define an additional `ranges` object in our `options` to specify the ranges for each factor:

```js
filteredPalette = filterBy(palette, {
 against: 'yellow',
 factor: ['hue', 'luminance', 'contrast'],
 ranges: { hue: [200, 300], luminance: [0.4, 0.6], contrast: ['<2'] }
});


// {
  hue: [ '#64748b', '#6b7280', '#71717a', '#0ea5e9', '#3b82f6' ],
  luminance: [ '#f59e0b', '#eab308', '#84cc16', '#22c55e' ],
  contrast: [ '#f59e0b', '#eab308', '#84cc16' ]
}

```

### Generating palettes

A few simple palette generator functions are included in the library. One of my favourites is `hueshift`  (as a color becomes lighter, its hue shifts up and darker when its hue shifts down. ) .

```js
import { hueshift } from "huetiful-js";

let hueShiftedPalette = hueshift('cyan');

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

### Querying collection metadata

Color has different properties which our eyes take note of in order to distinguish colors from each other even when they have certain perceived similarities. For example we can get the farthest hue angle in a collection against a specified color:

```js
// 
import { stats } from 'huetiful-js'




```

## Method chaining

Feeling lazy or maybe you just don't like nesting function calls ? We got you covered. The API exposes two wrapper functions, one for individual color tokens (`Color` class) and the other for collections of colors (`ColorArray` class). These two classes are not publicly exported but are accessible through two wrapper functions; `load` which simply returns a `new ColorArray` and `color` which returns a `new Color`.

Below is a simple example of how to use these functions

> If the function invoked returns a color token `color` will return `this` (except for the converter functions which will just return the out). The `load` function will return `this` as well if the invoked function on the chain returns a collection. To get the final output from both of these functions we must explicitly call the `output()` method which will return the final expected result.

```js

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

### Where to go next ?

We've barely scratched the surface! Dig into the API for more functions and examples.

##### License ⚖️

 <pre>
 © 2024,<a href='https://deantarisai.me'>Dean Tarisai</a> & <a href='https://github.com/xml-wizard/huetiful'>xml-wizard contributors</a>
 Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>
 🧪 & 🔬 with 🥃 in Crowhill,ZW
 </pre>
