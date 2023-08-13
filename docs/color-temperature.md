Colors can be classified into warm and cool colors which in turn have ranges(in Kelvins). For example blue is a cool color and the blue hue is found within a certain numerical range (degrees if we are looking at the `hue` channel). Using assumptions such as these allows us to determine which colors we want in our designs.

We can use `isWarm` and `isCool` to determine if a color is approximately warm or cool. The utilities rely on `hue` ranges to determine the temperature of the color.

#### `isWarm`

`(color: Color):boolean`

```javascript

import { isWarm } from 'huetiful-js'

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


/**
 * @function
 * @description Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 */
isWarm("#3e0000");
//true

map(sample, isWarm);


// [
  false, true,  false,
  false, false, false,
  true,  true,  true,
  true,  true
]

```

#### `isCool`

`(color: Color):boolean`

```javascript
import { isCool } from 'huetiful-js'

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

/**
 * @function
 * @description Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 */
isCool("#3e0000");
// false

map(sample, isCool);

// [
  true,  false, true,
  true,  true,  true,
  false, false, false,
  false, false
]




```

#### `minTemp`

`(color: Color): number`

```javascript
/**
 * @function
 * @description Checks the approximate minimum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
 * @param color The color to check its minimum temperature.
 * @returns The minimum temperature in Kelvins.
 */




```

#### `maxTemp`

`(color: Color): number`

```javascript
/**
 * @function
 * @description Checks the approximate maximum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
 * @param color The color to check its maximum temperature.
 * @returns The maximum temperature in Kelvins.
 */
```

Please note that precision of the utilities is limited and improvement suggestions are welcome. Feel free to open an issue for suggestions.
