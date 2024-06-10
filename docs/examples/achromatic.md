## Examples

```js

import { achromatic } from "huetiful-js";

 achromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(sample.map(achromatic));

// [false, false, false,false]

achromatic('gray')
// Returns true

// We can expand this example by interpolating between black and white and then getting some samples to iterate through.

import { interpolator } from "huetiful-js"

// we create an interpolation using black and white with 12 samples
let grays = interpolator(["black", "white"],{ num:12 });

console.log(grays.map(achromatic));

//
 [false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]



```
