/**
 * 
 * @license
 * helpers.js - Helper functions for huetiful-js.
 Copyright 2024 Dean Tarisai.
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
  interpolatorLinear,
  converter
} from 'culori/fn';

var { keys, entries, values } = Object;

/**
 * @public
 *  Returns the first truthy value.
 * @param arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns The first truthy value
 */
function or(arg, def) {
  return typeof arg === 'undefined' ? def : arg;
}

// Global interpolator options defaults
let [ci, ef, hf, hi, li] = [
  interpolatorSplineNatural,
  easingSmoothstep,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorLinear
];

const pltrconfg = {
  ef,
  ci,
  hf,
  hi,
  li
};

function gmchn(cspace, idx) {
  const res = cspace.substring(cspace.length - 3);

  return (idx && res.charAt(idx)) || res;
}

function exprParser(color = '#000', mc = '', expr = '') {
  // regExp to match arithmetic operator and the value

  var [mode, chn, op, val] = [
    ...mc.split('.'),
    // @ts-ignore
    /^(\*|\+|\-|\/)/.exec(expr)['0'],
    // @ts-ignore
    /[0-9]*\.?[0-9]+/.exec(expr)['0']
  ];

  // @ts-ignore
  color = converter(mode.toLowerCase())(color);
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

  return color;
}

function mcchn(colorspace) {
  // Matches any string with c or s
  colorspace = or(colorspace, 'lch');
  const reChroma = /(s|c)/i;

  // @ts-ignore
  const ch = reChroma.exec(colorspace)['0'];

  if (reChroma.test(colorspace)) {
    return `${colorspace}.${ch}`;
  } else {
    throw Error(
      `The color space ${colorspace} has no chroma/saturation channel.`
    );
  }
}

function mlchn(colorspace) {
  // Matches any string with c or s
  colorspace = or(colorspace, 'lch');
  const reLightness = /(j|l)/i;

  // @ts-ignore
  const ch = reLightness.exec(colorspace)['0'];

  if (reLightness.test(colorspace)) {
    return `${colorspace}.${ch}`;
  } else {
    throw Error(`The color space ${colorspace} has no lightness channel.`);
  }
}

function colorObj(factor, callback) {
  return (color) => {
    return { [factor]: callback(color), color: color };
  };
}

function customFindKey(collection, factor) {
  // If the color is achromatic return the string gray
  const propKeys = keys(collection);

  const result = propKeys
    .filter((key) => {
      const hueVals = customConcat(collection[key]);

      const minVal = min(...hueVals);

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

  return res.flat(1);
}

function adjustHue(value) {
  return (value > 0 && (value += Math.ceil(-value / 360) * 360)) || value % 360;
}

function chnDiff(color, modeChannel) {
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

function gt(x, y) {
  return x > y;
}

function lt(x, y) {
  return x < y;
}

function gte(x, y) {
  return x >= y;
}

function lte(x, y) {
  return x <= y;
}

function eq(x, y) {
  return x === y;
}

function neq(x, y) {
  return !(x === y);
}

function inRange(number, start, end) {
  /* Built-in method references for those with the same name as other `lodash` methods. */

  return gte(number, Math.min(start, end)) && lt(number, Math.max(start, end));
}

function isInt(num) {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
}

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

function rand(min, max) {
  if (min > max) {
    var [mn, mx] = [min, max];
    max = mn;
    min = mx;
  } else {
    return Math.random() * (max - min) + min;
  }
}

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

function colorObjColl(factor = 'factor', callback = (arg) => arg.toString()) {
  var cb = colorObj(factor, callback),
    res;
  /**
   * @param collection The array or object of colors to iterate over. If an object is passed, its values are expected to be valid color tokens.
   */
  return (collection) => {
    // Check if the collection is an array else treat it like a plain object
    // Convert object into a Map which remembers sorting order in a more predictable way

    if (Array.isArray(collection) && gte(collection.length, 1)) {
      res = collection.map(cb);
    } else if (typeof collection === 'object') {
      res = new Map();

      for (const [key, klr] of entries(collection)) {
        res.set(key, cb(klr));
      }
    } else {
      throw new Error(`The type of ${typeof collection} is not iterable`);
    }
    return res;
  };
}

function min(array = []) {
  return array.reduce((a, b) => Math.min(a, b), Infinity);
}

function max(array = []) {
  array = or(array, []);
  return array.reduce((a, b) => Math.max(a, b), -Infinity);
}

function reNum(s) {
  s = s.toString();
  var reDigits = /[0-9]*\.?[0-9]+/;
  // @ts-ignore
  return (reDigits.test(s) && Number(reDigits.exec(s)['0'])) || undefined;
}

function reOp(s) {
  s = s.toString();
  var reComparator = /^(>=|<=|<|>|={1,2}|!={0,2})/;

  // @ts-ignore
  return (reComparator.test(s) && reComparator.exec(s)['0']) || undefined;
}
function sortedColl(
  factor = 'factor',
  callback,
  order = 'asc',
  colorObj = false
) {
  return (collection) => {
    var objColl = colorObjColl(factor, callback)(collection),
      res;

    // If the collection is not an Array  insert the sorted elements
    // Sort the array using our customSort helper function

    if (Array.isArray(collection)) {
      // @ts-ignore
      res = objColl.sort(customSort(order, factor));

      return (colorObj === true && res) || res.map((color) => color['color']);
    } else {
      res = new Map();
      values(objColl)
        // @ts-ignore
        .sort(customSort(order, factor))
        .map((val, key) => {
          var [k, v] = entries(collection)[key];
          if (val === v) {
            res.set(k, val);
          }
        });

      if (colorObj === false) {
        entries(res).map((v) => res.set(v[0], v[1]['color']));
      }
    }
    return res;
  };
}

function filteredColl(factor, cb) {
  return (collection, start, end) => {
    let result;

    if (typeof start === 'number') {
      result = colorObjColl(
        factor,
        cb
      )(collection)
        // @ts-ignore
        .filter((color) => inRange(color[factor], start, end))
        .map((color) => color['color']);

      // If string, split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (typeof start === 'string') {
      //The patterns to match

      const val = reNum(start),
        op = reOp(start);

      if (op) {
        const mapFilter = (test) => {
          return (
            colorObjColl(
              factor,
              cb
            )(collection)
              // @ts-ignore
              .filter((el) => test(el[factor], parseFloat(val.toString())))
              .map((el) => el['color'])
          );
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

function clamp(value, min = -Infinity, max = Infinity) {
  if (typeof value === 'number') {
    if (gt(value, max)) {
      return max;
    } else if (lt(value, min)) {
      return min;
    } else {
      return value;
    }
  } else {
    throw Error(`${value} is not a number`);
  }
}

export {
  clamp,
  exprParser,
  mlchn,
  mcchn,
  min,
  max,
  customSort,
  colorObjColl,
  sortedColl,
  filteredColl,
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
  gmchn,
  pltrconfg,
  reOp,
  reNum,
  entries,
  values,
  keys
};
