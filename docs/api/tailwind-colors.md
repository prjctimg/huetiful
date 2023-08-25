### `tailwindColors` utility

The library comes along with the default TailwindCSS palette in the form of a curried wrapper function that takes the Tailwind shade as its first parameter and the value i.e `500` as the second parameter.

```javascript
import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
red();
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


red(100)
// '#fee2e2'

red('900')
// '#7f1d1d'


```

### The `colors` utility

`(shade: keyof HueMap,val: keyof ScaleValues): Color | Color[]`

`colors` is similar to `tailwindColors` except that it is not curried but takes the exact parameters. It differs because it has an additional `all` parameter that allows us to extract all colors from the palette at the specified value

```javascript

/**
 * @function
 * @description A wrapper function for the default Tailwind palette. If called with both parameters it return the hex code at the specified shade and value. Else, if called with the shade parameter as "all" it will return all colors from the shades in the palette map at the specified value (if value is undefined it will default to "500"). When called with the shade parameter only it will return all the colors from 100 to 900 of the specified shade.
 * @param shade Any shade in the default TailwindCSS palette e.g amber,blue.
 * @param val Any value from 100 to 900 in increments of 100 e.g "200".
 * @returns color Returns a hex code string or array of hex codes depending on how the function is called.
 */

import { colors } from "huetiful-js";

let all300 = colors("all", 300);

//[
  '#cbd5e1', '#d1d5db', '#d4d4d8',
  '#d4d4d4', '#d6d3d1', '#fca5a5',
  '#fdba74', '#fcd34d', '#fde047',
  '#bef264', '#86efac', '#6ee7b7',
  '#5eead4', '#7dd3fc', '#93c5fd',
  '#c4b5fd', '#d8b4fe', '#f0abfc',
  '#f9a8d4', '#fda4af'
]


colors("red");

// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


colors("red", 100);

// #fee2e2
```
