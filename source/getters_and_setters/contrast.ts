import { wcagContrast } from "culori/fn";
import type { Color } from "../types";
import { toHex } from "../converters/toHex";

/**
 * @function
 * @description Gets the relative luminance of the lightest color
 * @param color
 * @param against
 * @returns The relative luminance of the lightest color.
 * @example
 *
 * import { getContrast } from 'huetiful-js'
 *
 * console.log(getContrast("black", "white"));
 * // 21
 */
const getContrast = (color: Color, against: Color): number => {
  // @ts-ignore
  return wcagContrast(toHex(color), toHex(against));
};

export { getContrast };
