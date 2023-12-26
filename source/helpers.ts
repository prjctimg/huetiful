/** 
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

import { getChannel } from './utils';
import type {
  callback,
  Factor,
  Color,
  HueColorSpaces,
  Order,
  Options
} from './types';
import modeRanges from './color-maps/samples/modeRanges';

import {
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
  easingSmoothstep
} from 'culori/fn';

/**
 * @description Returns the first truthy value.
 * @param arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns The first truthy value
 */
function checkArg(arg: unknown, def: unknown): any {
  return arg || def;
}

let {
  chromaInterpolator,
  easingFunc,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator
}: Options = {};

chromaInterpolator = interpolatorSplineNatural;
hueFixup = fixupHueShorter;
hueInterpolator = interpolatorSplineBasisClosed;
easingFunc = easingSmoothstep;

lightnessInterpolator = interpolatorSplineMonotone;

let interpolatorConfig = {
  easingFunc,
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator
};

function getModeChannel(mode: string, key: number) {
  return mode.charAt(key);
}

/**
 * Performs arithmetic operations on colors by passing the arithmetic operator from the value if it is a string. It requires the src variable to be declared in the global scope of the invoking func.
 * @param src The color object.
 * @param channel The channel to set.
 * @param value The value to apply.
 */
function expressionParser(src: Color, channel: string, value: string): number {
  // regExp to match arithmetic operator and the value
  const reOperator = /^(\*|\+|\-|\/)/,
    reValue = /[0-9]*\.?[0-9]+/;

  // Storing the arithmetic sign and value
  const sign = reOperator.exec(value)['0'];
  const amt = reValue.exec(value)['0'];

  const cb = (value: string) => parseFloat(value);

  // Match an operator against the first truthy case and perform the relevant math operation
  switch (sign) {
    case '+':
      src[channel] += +cb(amt);
      break;
    case '-':
      src[channel] -= +cb(amt);
      break;
    case '*':
      src[channel] *= +cb(amt);
      break;
    case '/':
      src[channel] /= +cb(amt);
      break;
    default:
      src[channel] = +cb(amt);
  }
  // @ts-ignore
  return src;
}

/**
 * @function
 * Matches the chroma/saturation channel of any compliant color space
 * @param colorspace The color space to match saturation/chroma channel.
 * @returns The mode channel string passed to getChannel()
 */
function matchChromaChannel(colorspace: HueColorSpaces | string): string {
  // Matches any string with c or s
  colorspace = checkArg(colorspace, 'jch');
  const reChroma = /(s|c)/i;
  const ch = reChroma.exec(colorspace)['0'];

  if (reChroma.test(colorspace)) {
    return `${colorspace}.${ch}`;
  } else {
    throw Error(
      `The color space ${colorspace} has no chroma/saturation channel.`
    );
  }
}

/**
 * @function
 * Matches the lightness channel of any compliant color space
 * @param colorspace The color space to match lightness channel.
 * @returns The mode channel string passed to getChannel
 */
function matchLightnessChannel(colorspace: HueColorSpaces | string): string {
  // Matches any string with c or s
  colorspace = checkArg(colorspace, 'jch');
  const reLightness = /(j|l)/i;
  const ch = reLightness.exec(colorspace)['0'];

  if (reLightness.test(colorspace)) {
    // @ts-ignore
    return `${colorspace}.${ch}`;
  } else {
    throw Error(`The color space ${colorspace} has no lightness channel.`);
  }
}

function colorObj(factor: Factor, callback: callback) {
  return (color: Color) => {
    // @ts-ignore
    return { [factor]: callback(color), color: color };
  };
}

/**

 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} factor The value to compare against
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function customFindKey(collection: object, factor: number) {
  // If the color is achromatic return the string gray
  const propKeys = Object.keys(collection);

  const result: string | undefined = propKeys
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

function customConcat(hue: object) {
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

function adjustHue(value = 0) {
  if (value > 0) {
    return (value += Math.ceil(-value / 360) * 360);
  } else {
    return value % 360;
  }
}

function channelDifference(color: Color, modeChannel?: string) {
  return (subtrahend: Color) => {
    const cb = (color) => getChannel(modeChannel as string)(color);
    if (cb(color) < cb(subtrahend)) {
      return cb(subtrahend) - cb(color);
    } else {
      return cb(color) - cb(subtrahend);
    }
  };
}

// Comparison operators
function gt(x: number, y: number): boolean {
  return x > y;
}
function lt(x: number, y: number): boolean {
  return x < y;
}
function gte(x: number, y: number): boolean {
  return x >= y;
}
function lte(x: number, y: number): boolean {
  return x <= y;
}
function eq(x: number, y: number): boolean {
  return x === y;
}

/**
 * @function
 * @description Checks if a value is within the start and end range.
 * @param number The number to check.
 * @param start The minimum or starting value.
 * @param end The maximum or starting value.
 * @returns True if the number is in range else false.
 */

function inRange(number: number, start: number, end?: number): boolean {
  /* Built-in method references for those with the same name as other `lodash` methods. */
  Math.min;
  return number >= Math.min(start, end) && number < Math.max(start, end);
}

/**
 * @description Checks if a number is an integer or float.
 * @param num The number to query
 * @returns True if the number is an integer else false if it is a float.
 */
function isInteger(num: number | string) {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
}

/**
 * @function
 * @description Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.
 * @param value The value to chec if its in the accepted range for the passed in mode channel
 * @param modeChannel A string defining the mode and channel ranges to use for comparison
 * @returns The normalized channel value or the passed in value if it was within range
 */
function normalize(value: number, modeChannel: string): number {
  const [mode, channel]: string[] = modeChannel.split('.');
  const [start, end]: number[] = modeRanges[mode][channel];
  const range = inRange(value, start, end);

  if (!range) {
    if (inRange(value, 0, 1)) {
      value = end * value;
    } else if (inRange(value, 1, 100)) {
      value = end * (value / 100);
    } else {
      throw Error(
        `The value ${value} is out of range for channel ${channel} of colorspace ${mode} can only accept a value between [0,1] or [0,100] with 0.5 or 50 being half of the channel range.`
      );
    }
  }
  return value;
}

/**
 * @function
 * @description Returns a random number between minimum and maximum bounds.
 * @param min The lower bound.
 * @param max The upper bound.
 * @returns A number.
 */
function random(min: number, max: number): number {
  if (min > max) {
    const mn = min;
    const mx = max;
    max = mn;
    min = mx;
  } else {
    return Math.random() * (max - min) + min;
  }
}

const { ceil, floor } = Math;
/**
 * @function
 * Rounds up or down a number based on the float value.
 * @param num The number to round up or down.
 * @returns An integer
 */

function floorCeil(num: number): number {
  if (!isInteger(num)) {
    const strArr = num.toString().split('.');
    const float = strArr[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    const reFloorCeil = (float: string) => /^[0-4]$/.test(float.charAt(0));

    if (reFloorCeil(float)) {
      num = floor(num);
    } else {
      num = ceil(num);
    }
  }

  return num;
}

/**
 * @description Helper function for native sorting method for arrays.
 * @param factor The property to query.
 * @param order Either ascending or descending.
 * @returns A sorted array.
 */
function customSort(order: Order, factor?: Factor | string) {
  //  Special thanks to deechris27 on youtube
  // a-b gives asc order & b-a gives desc order
  factor = factor || 'factor';
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
 * @param colors The array of colors to iterate over.
 * @returns An array of objects.
 */
function colorObjArr(factor: Factor, callback) {
  return (colors: Color[]): Array<{ factor: Factor; color: Color }> => {
    const cb = colorObj(factor, callback);
    // @ts-ignore
    return colors.map((color) => cb(color));
  };
}

// from the lodash implementation of _.min and _.max
const identity = (value) => {
  return value;
};
function baseExtremum(array: number[], iteratee, comparator) {
  var index = -1,
    length = array.length;

  while (++index < length) {
    var value = array[index],
      current = iteratee(value);

    if (
      current != null &&
      (computed === undefined
        ? current === current
        : comparator(current, computed))
    ) {
      var computed = current,
        result = value;
    }
  }
  return result;
}
/**
 * @description Gets the smallest value in an array
 * @param array The array to retrieve minimum value
 * @returns The smallest number in the array
 */
function min(array: number[]): number {
  return array && array.length ? baseExtremum(array, identity, lt) : undefined;
}
/**
 * @description Gets the largest value in an array
 * @param array The array to retrieve maximum value
 * @returns The largest number in the array
 */
function max(array: number[]): number {
  return array && array.length ? baseExtremum(array, identity, gt) : undefined;
}

/**
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor The property to query
 * @param callback The function to use for comparison.
 * @returns An array of colors or color objects.
 */
function sortedArr(
  factor: Factor,
  callback: callback,
  order: Order,
  colorObj = false
) {
  return (colors: Color[]) => {
    const results: Color[] | Array<{ factor: number; color: Color }> =
      colorObjArr(factor, callback)(colors);

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
 * @description Filters an array according to the value of a color's queried factor
 * @param factor The property to query and use as filtering criteria
 * @param cb The function to use for comparison
 * @returns The filtered array
 */
const filteredArr =
  (factor: Factor, cb?: callback) =>
  (colors: Color[], start: number | string, end: number): Color[] => {
    let result: Color[];

    if (typeof start === 'number') {
      result = colorObjArr(
        factor,
        cb
      )(colors)
        .filter((color) => inRange(color[factor], start, end))
        .map((color) => color['color']);

      // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (typeof start === 'string') {
      //The pattern to match
      const reOperator = /^(>=|<=|<|>)/;

      const value = /[0-9]*\.?[0-9]+/;

      // Array
      const val = value.exec(start)['0'],
        op = reOperator.exec(start)['0'];

      const mapFilter = (test: (x: number, y: number) => boolean): Color[] => {
        return colorObjArr(
          factor,
          cb
        )(colors)
          .filter((el) => test(el[factor], parseFloat(val)))
          .map((el) => el['color']);
      };
      switch (op) {
        case '<':
          result = mapFilter(lt);

          break;
        case '>':
          result = mapFilter(gt);
          break;
        case '<=':
          result = mapFilter(lte);
          break;
        case '>=':
          result = mapFilter(gte);
          break;
      }
    }
    return result;
  };

export {
  expressionParser,
  matchLightnessChannel,
  matchChromaChannel,
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
  random,
  isInteger,
  floorCeil,
  adjustHue,
  channelDifference,
  lt,
  gt,
  gte,
  lte,
  eq,
  normalize,
  checkArg,
  getModeChannel,
  interpolatorConfig
};
