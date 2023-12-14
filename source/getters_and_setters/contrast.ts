// @ts-nocheck

import { wcagContrast } from "culori/fn";
import type { Color } from "../types";

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
const getContrast = (color: Color, against: Color): number =>
  wcagContrast(color, against);

export { getContrast };
