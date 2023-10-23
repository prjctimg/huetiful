// @ts-nocheck
import { inRange } from "lodash-es"
import { interpolate } from "culori"
import type { Color } from "../paramTypes.ts"
import { rgb2num } from "../core-utils/rgb2num.ts"
import { getChannel } from "../core-utils/get.ts"
import { matchChromaChannel } from "../core-utils/helpers.ts"

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
  const black = "#000000",
    white = "#FFFFFF"

  const cb = (mc: string) => getChannel(mc)(color)
  // 1) Interpolate between white and black and then get the range of the colors from rgb2num. Use rgb mode internally.
  // create the grayscale function
  const gray = interpolate([black, white])

  //Capture the min and max t for grayscale colors
  const t_min = 0.001
  const t_max = 0.998

  // Capture the approx. min and max number range of grey
  const min = rgb2num(gray(t_min))
  const max = rgb2num(gray(t_max))

  // Store the value of chroma and saturation channels.
  const checkHsl = cb("hsl.s")
  const checkLch = cb("lch.c")

  // 2) Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel
  //   OR
  // 2)Check if the color's numerical represantation is within the defined ranges.
  if (
    (checkHsl || checkLch) === (undefined || null || 0) ||
    inRange(rgb2num(color), min, max)
  ) {
    return true
  } else {
    return false
  }
}

export { isAchromatic }
