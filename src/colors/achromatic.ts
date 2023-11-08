// @ts-nocheck
import type { Color } from "../paramTypes.ts"
import { getChannel } from "../core-utils/get.ts"


/**
 * @function
 * @description Checks if a color is achromatic(without hue or simply grayscale).
 * @param color The color to test if it is achromatic or not.
 * @returns boolean Returns true if the color is achromatic else false
 * @example 
 * 
 * import { isAchromatic } from "huetiful-js";
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

 */
const isAchromatic = (color: Color): boolean => {
  const cb = (mc: string) => getChannel(mc)(color)

  // Store the value of chroma and saturation channels.
  const checkHsl = cb("hsl.s")
  const checkLch = cb("lch.c")

  // 2) Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel
  //   OR
  // 2)Check if the color's numerical represantation is within the defined ranges.
  if ((checkHsl || checkLch) === (undefined || null || 0)) {
    return true
  } else {
    return false
  }
}

export { isAchromatic }
