---
title: Working with achromatic colors
eleventyNavigation:
  ordering: 6
  key: Working with achromatic colors
---



These are a subtype of colors that have no *hue*. Also known as grays, these colors can be found by interpolating black and white. 

We can use the *isAchromatic* utility to check if a color is achromatic or not.

**Parameters:**
(color:Color):boolean
color The color to test if it is achromatic or not.

**Returns:**
Returns true if the color is achromatic else false

**Description:**
Checks if a color is achromatic(without hue or simply grayscale).

```javascript
import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"


isAchromatic('pink')
// false

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

console.log(map(sample, isAchromatic));

// [
  false, false, false,
  false, false, false,
  false, false, false,
  false, false
]

isAchromatic('gray')
// Returns true


console.log(map(sample, isAchromatic));


// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, isAchromatic));

// 
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

```

In the above code, we used *isAchromatic* against different samples of achromatic as well as chromatic colors. The *samples* array contained chromatic colors whilst `grays` holds the achromatic colors. Notice that at the last and first index when we tested for achromatic colors we had `false` values instead of *true*. This is because pure white/black are not achromatic.

> For a color to be classified as being achromatic, it needs a falsy value on the **saturation** / **chroma** channel such as 0, **NaN** or **undefined**. This is because the `hue` depends on the **saturation** channel to be true or not be gray. This means that altering the **hue** or **lightness** channel whilst **saturation** is falsy will only return a gray color and black or white (at the extreme ends of the **lightness** channel) .
