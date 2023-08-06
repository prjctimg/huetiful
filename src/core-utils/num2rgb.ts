//@ts-nocheck

import { lte, gte, isInteger, fromPairs, isEqual } from "lodash-es";
import { Color } from "../paramTypes.ts";
import { formatHex, formatHex8 } from "culori";

// If the value is a floating point then we treat the decimal value as the opacity of the color.

// If the value passedin is a float then the decimal is treated as opacity
// The outputn is rounded up when you pass in an integer

/**
 * @function
 *  Returns the RGB color equivalent of any number between 0 and 16,777,215.
 * @param num The number to convert to RGB
 * @returns color An RGB color object or hex string.
 */
const num2rgb = (num: number, hex = false): Color => {
  if (isInteger(num) && gte(num, 0) && lte(num, 0xffffff)) {
    const r = num >> 16;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;
    let output = fromPairs([
      ["r", r],
      ["g", g],
      ["b", b],
      ["alpha", 1],
      ["mode", "rgb"],
    ]);

    return hex ? formatHex8(output) : output;
  }
  throw new Error("unknown num color: " + num);
};

export { num2rgb };
