/**
 * @module
 * @license
 * helpers.ts - Helper functions for huetiful-js.
 * Contains colors from TailwindCSS released under the MIT permissive licence.
 * Contains parts of chroma.js released under the Apache-2.0 license.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import type { callback, Factor, ColorToken, HueColorSpaces, Order, Colorspaces } from './types';
import { fixupHueShorter, easingSmoothstep } from 'culori/fn';
/**
 * @internal
 *  Returns the first truthy value.
 * @param arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns The first truthy value
 */
declare function or(arg: unknown, def: unknown): unknown;
declare const interpolatorConfig: {
    ef: typeof easingSmoothstep;
    ci: import("culori/src/interpolate/Interpolator").Interpolator;
    hf: typeof fixupHueShorter;
    hi: import("culori/src/interpolate/Interpolator").Interpolator;
    li: (arr: number[]) => (t: number) => number;
};
/**
 * @internal
 *  Gets the clipped string of a passed in colorspace by removing non-channel characters.
 * @param colorspace  The colorspace to get the channel keys.
 * @param index Optional index to return a single specified channel.
 * @returns A string.
 *
 @example

 console.log(getModeChannel("oklch"));
// lch

console.log(getModeChannel("okhsl", 2));
// l

 */
declare function getModeChannel(colorspace: Colorspaces | string, index?: number): string;
/**
 * @internal
 * Takes an arithmetic operator followed by a value and passes the result of the expression to the specified channel. Currently supports addition,subtraction,division and multiplication symbols only.
 * @param color The color.
 * @param mc The colorspace channel to set.
 * @param expr The expression assignment as a string.
 * @example
 *
 * console.log(lch('blue'));
// { mode: 'lch',l: 29.568297153444703,c: 131.2014771995311,h: 301.36428148973533}

console.log(exprParser('blue', 'lch.l', '*0.3'));
// { mode: 'lch',l: 8.87048914603341,c: 131.2014771995311,h: 301.36428148973533 }

 */
declare function exprParser(color: ColorToken, mc: string, expr: string): number;
/**
 * @internal
 * Matches the chroma/saturation channel of any compliant color space
 * @param colorspace The color space to match saturation/chroma channel. Default is Lch
 * @returns The mode channel string passed to getChannel()
 * @example
 *
 * import { mcc } from 'huetiful-js'
 * console.log(mcc("jch"));
// jch.c

console.log(mcc("okhsl"));
// okhsl.s
 */
declare function mcchn(colorspace: HueColorSpaces | string): string;
/**
 * @internal
 * @function
 * Matches the lightness channel of any compliant color space
 * @param colorspace The color space to match lightness channel. Default is Lch
 * @returns The mode channel string passed to getChannel
 *
 * @example
 *
 * console.log(matchLightnessChannel("jch"));
// jch.j

console.log(matchLightnessChannel("okhsl"));
// okhsl.l
 */
declare function mlchn(colorspace: HueColorSpaces | string): string;
/**
 *
 * @param factor The factor being queried
 * @param callback The function to compute the factor value. It must have an arity of one and take a color as its argument.
 * @example

 let col = 'purple';
console.log(colorObj('saturation', getChannel('lch.c'))(col));
// { saturation: 66.82572352143816, color: 'purple' }

 */
declare function colorObj(factor: Factor, callback: callback): (color: ColorToken) => {
    [x: string]: any;
    color: ColorToken;
};
/**
 * @internal
 * @param collection The collection to inspect.
 * @param predicate The function invoked per iteration.
 * @param factor The value to compare against
 * @returns Returns the found element or its key, else `undefined`.
 */
declare function customFindKey(collection: object, factor: number): string;
declare function customConcat(hue: object): number[];
/**
 * @internal
 *
 * @param value The hue angle to normalize.
 * @returns The normalized hue angle or passed in value if it was within [0,360]
 *
 * @example
 *
 * console.log(adjustHue(4));
// 4

console.log(adjustHue(444));
// 84
 */
declare function adjustHue(value: number): number;
/**
 * @internal
 * Returns the channel value difference between the passed in colors. They are both converted to the colorspace in the modeChannel parameter before values are computed.
 * @param color The color to subtract values from/
 * @param modeChannel The colorspace and channel string to perform the operation in.
 * @example
 *
console.log(chnDiff
  ('blue', 'okhsl.l')('pink'));
// 0.4794739863155694
 *
 */
declare function chnDiff(color: ColorToken, modeChannel: string): (subtrahend: ColorToken) => number;
/**
 * Checks if x is greater than y
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is greater than y else false.
 *
 * @example
 *
 * gt(5,10)
 * // false
 */
declare function gt(x: number, y: number): boolean;
/**
 * Checks if x is less than y.
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is less than y else false.
 *
 * @example
 * lt(2,8)
 * // true
 */
declare function lt(x: number, y: number): boolean;
/**
 * Checks if x is greater than or equal to y.
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is greater than or equal to x else false.
 *
 * @example
 * gte(5,5)
 * // true
 *
 * gte(6,5)
 * // true
 *
 * gte(4,5)
 * // false
 */
declare function gte(x: number, y: number): boolean;
/**
 * Checks if x is less than or equal to y.
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is less than or equal to y else false.
 *
 * @example
 *
 * lte(5,5)
 * // true
 *
 * lte(6,5)
 * // false
 *
 * lte(4,5)
 * // true
 */
declare function lte(x: number, y: number): boolean;
/**
 * Checks if x is equal to y
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is equal to y else false.
 *
 * eq(4,5)
 * // false
 */
declare function eq(x: number, y: number): boolean;
/**
 * Checks if x is not equal to y. The inverse of `eq`
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is not equal to y else false.
 *
 * @example
 * neq(5,5)
 * // false
 *
 * neq(4,5)
 * // true
 */
declare function neq(x: number, y: number): boolean;
/**
 * @internal
 * Checks if a value is within the start and end range.
 * @param number The number to check.
 * @param start The minimum or starting value.
 * @param end The maximum or starting value.
 * @returns True if the number is in range else false.
 *
 * @example
 *
 * inRange(5,6,10)
 * // true
 *
 * inRange(-3,0)
 * // false
 */
declare function inRange(number: number, start: number, end?: number): boolean;
/**
 * @internal
 * Checks if a number is an integer or float.
 * @param num The number to query
 * @returns True if the number is an integer else false if it is a float.
 *
 * @example
 *
 * isInt(2)
 * // true
 *
 * isInt(2.01)
 * // false
 */
declare function isInt(num: number | string): boolean;
/**
 * @internal
 * Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.
 * @param value The value to chec if its in the accepted range for the passed in mode channel
 * @param modeChannel A string defining the mode and channel ranges to use for comparison
 * @returns The normalized channel value or the passed in value if it was within range
 *
 */
declare function norm(value: number, modeChannel: string): number;
/**
 * @internal
 * Returns a random number between minimum and maximum bounds.
 * @param min The lower bound.
 * @param max The upper bound.
 * @returns A number.
 *
 * @example
 *
 * rand(5,15)
 * // 6
 */
declare function rand(min: number, max: number): number;
/**
 * @internal
 * Rounds up or down a number based on the float value.
 * @param num The number to round up or down.
 * @returns An integer
 * @example
 *
 * console.log(floorCeil(1.45));
// 1
console.log(floorCeil(1.501));
// 2

 */
declare function floorCeil(num: number): number;
/**
 * @internal
 * Helper function for native sorting method for arrays.
 * @param factor The property to query.
 * @param order Either ascending or descending.
 * @returns A sorted array.
 */
declare function customSort(order: Order, factor?: Factor | string): (a: {
    [x: string]: number;
}, b: {
    [x: string]: number;
}) => number;
declare function colorObjArr(factor: Factor, callback: any): (collection: ColorToken[] | object | object) => Array<{
    factor: Factor;
    color: ColorToken;
}>;
/**
 * @internal
 *  Gets the smallest value in an array
 * @param array The array to retrieve minimum value
 * @returns The smallest number in the array
 * @example
 * console.log(min([0, 3, 4]));
// 0
 *
 */
declare function min(array: number[]): number;
/**
 * @internal
 *  Gets the largest value in an array
 * @param array The array to retrieve maximum value
 * @returns The largest number in the array
 * @example
 * console.log(max([0, 3, 4]));
// 4
 */
declare function max(array: number[]): number;
/**
 * @internal
 * Gets the digits in the expression string
 * @param s The string to match
 * @returns The matched digits, if any, as a number.
 */
declare function reNum(s: string): number;
/**
 * @internal
 * Matches the comparison symbols used in the expression string.
 * @param s The string to match.
 * @returns The matched comparator, if any, as a string.
 */
declare function reOp(s: string): string;
/**
 * @internal
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor The property to query
 * @param callback The function to use for comparison.
 * @returns An array of colors or color objects.
 */
declare function sortedArr(factor: Factor, callback: callback, order: Order, colorObj?: boolean): (collection: ColorToken[] | object) => any[];
/**
 * @internal
 *  Filters an array according to the value of a color's queried factor
 * @param factor The property to query and use as filtering criteria
 * @param cb The function to use for comparison
 * @returns The filtered array
 */
declare function filteredArr(factor: Factor, cb?: callback): (collection: ColorToken[] | object, start: number | string, end?: number) => ColorToken[];
export { exprParser, mlchn, mcchn, min, max, customSort, colorObjArr, sortedArr, filteredArr, customFindKey, colorObj, customConcat, inRange, rand, isInt, floorCeil, adjustHue, chnDiff, lt, neq, gt, gte, lte, eq, norm, or, getModeChannel, interpolatorConfig, reOp, reNum };
