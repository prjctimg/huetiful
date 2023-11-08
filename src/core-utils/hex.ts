// @ts-nocheck
import type { Color } from '../paramTypes';
import { formatHex8, formatHex } from 'culori';

/**
 *@function
 @description Converts color objects and CSS named colors to hexadecimal.
 * @param color The color to convert to hexadecimal. Works on color objects and CSS named colors.
 * @returns A hexadecimal representation of the passed in color.
 * @example
 * import { hex } from "huetiful-js";
 * 
console.log(hex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(hex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
 */
const hex = (color: Color): Color => {
  if (typeof color === 'object' && color['alpha']) {
    return formatHex8(color);
  } else {
    return formatHex(color);
  }
};

export { hex };

/*
 
 * @function
 * @description argType is a contract that checks the argument passed in and applies the relevant parsing function for the data type passed in.
 * @param arg The argument to query
 * @param mutate Boolean value to determine whether a color token should be modified to hex before being returne. This is because off precision loss if colors are first converted to hex before being manipulated since different color spaces have different gamut limits.
 * @returns A recognizable or purified color token.
 
const argType = (arg: any, mutate = false): Color => {
  const arr =
      'If the color token is an array it must have the mode channel values in the respective and a string as the last element specifying the color space the passed in values belong to. For example [255,10,50,"rgb"] ',
    obj =
      'If the color token is an object it must have the mode property defined to specify the color space the channel values belong to. For example {r:30,g:100,b:0,mode:"rgb"}',
    num = "If the color token is a number it must be between 0 and 16,777,215",
    str =
      "If the color token is a string it will be treated as a hex code which can be of length 3,4,6 or 8 characters long and begin with the # symbol"

  if (typeof arg == "number") {
    return num2rgb(arg, mutate)
  } else if (isPlainObject(arg)) {
    return mutate ? formatHex8(arg) : arg
  } else if (isArray(arg)) {
    let mode: string = last(arg),
      color = {}

    // For each channel set the color object to have the the path[channel] and value of the channel as arg[index]
    color = map(mode, (channel, index) => set(color, channel, index)) && set(color, "mode", mode)

    return formatHex(color)
  } else if (isString(arg)) {
    return (startsWith(arg, "#", 0) && arg.length === 3) || 4 || 6
      ? formatHex(arg)
      : formatHex8(arg)
  } else {
    throw Error(
      `${arg} is an unrecognized color token. ${
        typeof arg === "number"
          ? num
          : typeof arg === "string"
          ? str
          : typeof arg === "object"
          ? obj
          : isArray(arg)
          ? arr
          : ""
      }`
    )
  }
}
 */
