/* eslint-disable no-ternary */
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

import { getChannel } from './utils.js';

import modeRanges from './color-maps/samples/modeRanges.js';

import {
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  easingSmoothstep,
  interpolatorLinear
} from 'culori/fn';
import { ucsConverter } from './converters.js';

/**
 * @internal
 *  Returns the first truthy value.
 * @param arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns The first truthy value
 */
function or(arg, def) {
  return arg || def;
}

// Global interpolator options defaults
let [ci, ef, hf, hi, li] = [
  interpolatorSplineNatural,
  easingSmoothstep,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorLinear
];

const interpolatorConfig = {
  ef,
  ci,
  hf,
  hi,
  li
};

/**
 * @internal
 *  Gets the clipped string of a passed in colorspace by removing non-channel characters.
 * @param cspace  The colorspace to get the channel keys.
 * @param idx Optional index to return a single specified channel.
 * @returns A string.
 * 
 @example

 console.log(getModeChannel("oklch"));
// lch

console.log(getModeChannel("okhsl", 2));
// l

 */
function getModeChannel(cspace, idx) {
  const res = cspace.substring(cspace.length - 3);

  return (idx && res.charAt(idx)) || res;
}

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
function exprParser(color = '#000', mc = '', expr = '') {
  // regExp to match arithmetic operator and the value

  var [mode, chn, op, val] = [
    ...mc.split('.'),
    /^(\*|\+|\-|\/)/.exec(expr)['0'],
    /[0-9]*\.?[0-9]+/.exec(expr)['0']
  ];

  // @ts-ignore
  color = ucsConverter(mode.toString().toLowerCase())(color);
  const cb = (value) => parseFloat(value);

  // Match an operator against the first truthy case and perform the relevant math operation
  switch (op) {
    case '+':
      color[chn] += +cb(val);
      break;
    case '-':
      color[chn] -= +cb(val);
      break;
    case '*':
      color[chn] *= +cb(val);
      break;
    case '/':
      color[chn] /= +cb(val);
      break;
    // throw error alert
  }

  // @ts-ignore
  return color;
}

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
function mcchn(colorspace) {
  // Matches any string with c or s
  colorspace = or(colorspace, 'lch');
  const reChroma = /(s|c)/i;
  // @ts-ignore
  const ch = reChroma.exec(colorspace)['0'];

  // @ts-ignore
  if (reChroma.test(colorspace)) {
    return `${colorspace}.${ch}`;
  } else {
    throw Error(
      `The color space ${colorspace} has no chroma/saturation channel.`
    );
  }
}

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
function mlchn(colorspace) {
  // Matches any string with c or s
  colorspace = or(colorspace, 'lch');
  const reLightness = /(j|l)/i;
  // @ts-ignore
  const ch = reLightness.exec(colorspace)['0'];

  // @ts-ignore
  if (reLightness.test(colorspace)) {
    // @ts-ignore
    return `${colorspace}.${ch}`;
  } else {
    throw Error(`The color space ${colorspace} has no lightness channel.`);
  }
}

/**
 * 
 * @param factor The factor being queried
 * @param callback The function to compute the factor value. It must have an arity of one and take a color as its argument.
 * @example

 let col = 'purple';
console.log(colorObj('saturation', getChannel('lch.c'))(col));
// { saturation: 66.82572352143816, color: 'purple' }

 */
function colorObj(factor, callback) {
  /**
   * @param color The color to query its factor
   * @returns An object
   */
  return (color) => {
    // @ts-ignore
    return { [factor]: callback(color), color: color };
  };
}

/**
 * @internal
 * @param collection The collection to inspect.
 * @param predicate The function invoked per iteration.
 * @param factor The value to compare against
 * @returns Returns the found element or its key, else `undefined`.
 */
function customFindKey(collection, factor) {
  // If the color is achromatic return the string gray
  const propKeys = Object.keys(collection);

  const result = propKeys
    .filter((key) => {
      const hueVals = customConcat(collection[key]);
      // @ts-ignore
      const minVal = min(...hueVals);
      // @ts-ignore
      const maxVal = max(...hueVals);
      // Capture the min and max values and see if the passed in color is within that range
      return inRange(factor, minVal, maxVal);
    })
    .toString();

  return result;
}

function customConcat(hue) {
  const res = [];
  const { keys } = Object;
  if (typeof hue == 'object') {
    const hueKeys = keys(hue);

    //@ts-ignore
    res.push(...hueKeys.map((key) => hue[key]));
  }
  // @ts-ignore
  return res.flat(1);
}

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
function adjustHue(value) {
  return (value > 0 && (value += Math.ceil(-value / 360) * 360)) || value % 360;
}

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
function chnDiff(color, modeChannel) {
  /**
   * @param subtrahend The color to use as subtrahend
   * @returns The difference between the color channel(s)
   */
  return (subtrahend) => {
    const cb = (color) => getChannel(modeChannel)(color);
    if (cb(color) < cb(subtrahend)) {
      return cb(subtrahend) - cb(color);
    } else {
      return cb(color) - cb(subtrahend);
    }
  };
}

// Comparison operators

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
function gt(x, y) {
  return x > y;
}

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
function lt(x, y) {
  return x < y;
}

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
function gte(x, y) {
  return x >= y;
}

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
function lte(x, y) {
  return x <= y;
}

/**
 * Checks if x is equal to y
 * @param x The value to compare
 * @param y The value to compare against
 * @returns True if x is equal to y else false.
 *
 * eq(4,5)
 * // false
 */
function eq(x, y) {
  return x === y;
}

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
function neq(x, y) {
  return !(x === y);
}

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

function inRange(number, start, end) {
  /* Built-in method references for those with the same name as other `lodash` methods. */

  return gte(number, Math.min(start, end)) && lt(number, Math.max(start, end));
}

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
function isInt(num) {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
}

/**
 * @internal
 * Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.
 * @param value The value to chec if its in the accepted range for the passed in mode channel
 * @param modeChannel A string defining the mode and channel ranges to use for comparison
 * @returns The normalized channel value or the passed in value if it was within range
 *
 */
function norm(value, modeChannel) {
  const [mode, chn] = modeChannel.split('.');
  const [start, end] = modeRanges[mode][chn];
  const range = inRange(value, start, end);

  if (!range) {
    if (lte(value, 1)) {
      value = end * value;
    } else {
      value = (lte(end, 100) && end * (value / 100)) || end * (value / end);
    }
  }
  return value;
}

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
function rand(min, max) {
  if (min > max) {
    var [mn, mx] = [min, max];
    max = mn;
    min = mx;
  } else {
    return Math.random() * (max - min) + min;
  }
}

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

function floorCeil(num) {
  if (!isInt(num)) {
    const strArr = num.toString().split('.');
    const float = strArr[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    const reFloorCeil = (float) => /^[0-4]$/.test(float.charAt(0));

    if (reFloorCeil(float)) {
      num = Math.floor(num);
    } else {
      num = Math.ceil(num);
    }
  }

  return num;
}

/**
 * @internal
 * Helper function for native sorting method for arrays.
 * @param factor The property to query.
 * @param order Either ascending or descending.
 * @returns A sorted array.
 */
function customSort(order = 'asc', factor = 'factor') {
  // a-b gives asc order & b-a gives desc order

  return (a, b) => {
    if (order === 'asc') {
      return a[factor] - b[factor];
    } else if (order === 'desc') {
      return b[factor] - a[factor];
    }
  };
}

/*
 * @function
 * Creates a custom object with a factor to pass to the predicate function.
 * @param factor The quality being queried.
 * @param cb The callback function for computing the factor's start.
 * @returns An array of objects.
 */
function colorObjArr(factor, callback) {
  /**
   * @param collection The array or object of colors to iterate over. If an object is passed, its values are expected to be valid color tokens.
   */
  return (collection) => {
    const cb = colorObj(factor, callback);
    // @ts-ignore
    return Object.keys(collection).map((color) => cb(collection[color]));
  };
}

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
function min(array = []) {
  return array.reduce((a, b) => Math.min(a, b), Infinity);
}
/**
 * @internal
 *  Gets the largest value in an array
 * @param array The array to retrieve maximum value
 * @returns The largest number in the array
 * @example
 * console.log(max([0, 3, 4]));
// 4
 */
function max(array = []) {
  // @ts-ignore
  array = or(array, []);
  return array.reduce((a, b) => Math.max(a, b), -Infinity);
}

/**
 * @internal
 * Gets the digits in the expression string
 * @param s The string to match
 * @returns The matched digits, if any, as a number.
 */
function reNum(s) {
  s = s.toString();
  var reDigits = /[0-9]*\.?[0-9]+/;
  return (reDigits.test(s) && Number(reDigits.exec(s)['0'])) || undefined;
}

/**
 * @internal
 * Matches the comparison symbols used in the expression string.
 * @param s The string to match.
 * @returns The matched comparator, if any, as a string.
 */
function reOp(s) {
  s = s.toString();
  var reComparator = /^(>=|<=|<|>|={1,2}|!={0,2})/;

  return (reComparator.test(s) && reComparator.exec(s)['0']) || undefined;
}

/**
 * @internal
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor The property to query
 * @param callback The function to use for comparison.
 * @returns An array of colors or color objects.
 */
function sortedArr(
  factor = 'factor',
  callback,
  order = 'asc',
  colorObj = false
) {
  return (collection) => {
    const results = colorObjArr(factor, callback)(collection);

    // Assign the value of colorObj to results variable
    // Sort the array using our customSort helper function
    results.sort(customSort(order, factor));

    // colorObj parameter is true return the array of color objects
    // else just return the color's name value.
    if (colorObj) {
      return results;
    } else {
      return results.map((color) => color['color']);
    }
  };
}

/**
 * @internal
 *  Filters an array according to the value of a color's queried factor
 * @param factor The property to query and use as filtering criteria
 * @param cb The function to use for comparison
 * @returns The filtered array
 */
function filteredArr(factor, cb) {
  return (collection, start, end) => {
    let result;

    if (typeof start === 'number') {
      result = colorObjArr(
        factor,
        cb
      )(collection)
        .filter((color) => inRange(color[factor], start, end))
        .map((color) => color['color']);

      // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (typeof start === 'string') {
      //The patterns to match

      const val = reNum(start),
        op = reOp(start);

      if (op) {
        const mapFilter = (test) => {
          return colorObjArr(
            factor,
            cb
          )(collection)
            .filter((el) => test(el[factor], parseFloat(val.toString())))
            .map((el) => el['color']);
        };
        // object with comparison symbols as keys
        var comparisonSymbols = {
          '!=': neq,
          '==': eq,
          '>=': gte,
          '<=': lte,
          '>': gt,
          '<': lt,
          '===': eq,
          '!==': neq
        };
        result = mapFilter(comparisonSymbols[op]);
      }
    }
    return result;
  };
}

export {
  exprParser,
  mlchn,
  mcchn,
  min,
  max,
  customSort,
  colorObjArr,
  sortedArr,
  filteredArr,
  customFindKey,
  colorObj,
  customConcat,
  inRange,
  rand,
  isInt,
  floorCeil,
  adjustHue,
  chnDiff,
  lt,
  neq,
  gt,
  gte,
  lte,
  eq,
  norm,
  or,
  getModeChannel,
  interpolatorConfig,
  reOp,
  reNum
};
