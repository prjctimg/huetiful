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

import limits from './color-maps/samples/modeRanges.js';

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

const pltrconfg = {
  ef,
  ci,
  hf,
  hi,
  li
};

function gmchn(m, i) {
  const res = m.substring(m.length - 3);

  return (i && res.charAt(i)) || res;
}

function exprParser(c = '#000', mc = '', expr = '') {
  // regExp to match arithmetic operator and the value

  var [mode, chn, op, val] = [
    ...mc.split('.'),
    // @ts-ignore
    /^(\*|\+|\-|\/)/.exec(expr)['0'],
    // @ts-ignore
    /[0-9]*\.?[0-9]+/.exec(expr)['0']
  ];

  // @ts-ignore
  c = converter(mode.toLowerCase())(c);
  const cb = (value) => parseFloat(value);

  // Match an operator against the first truthy case and perform the relevant math operation
  switch (op) {
    case '+':
      c[chn] += +cb(val);
      break;
    case '-':
      c[chn] -= +cb(val);
      break;
    case '*':
      c[chn] *= +cb(val);
      break;
    case '/':
      c[chn] /= +cb(val);
      break;
    // throw error alert
  }

  return c;
}

function mcchn(m) {
  // Matches any string with c or s
  m = or(m, 'lch');
  const reChroma = /(s|c)/i;

  // @ts-ignore
  const ch = reChroma.exec(m)['0'];

  if (reChroma.test(m)) {
    return `${m}.${ch}`;
  } else {
    throw Error(`The color space ${m} has no chroma/saturation channel.`);
  }
}

function mlchn(m) {
  // Matches any string with c or s
  m = or(m, 'lch');
  const rl = /(j|l)/i;

  // @ts-ignore
  const ch = rl.exec(m)['0'];

  if (rl.test(m)) {
    return `${m}.${ch}`;
  } else {
    throw Error(`The color space ${m} has no lightness channel.`);
  }
}

function colorObj(fctr, cb) {
  return (c) => {
    return { [fctr]: cb(c), color: c };
  };
}

function customFindKey(col, fctr) {
  // If the color is achromatic return the string gray
  const k = keys(col);

  const res = k
    .filter((key) => {
      const t = customConcat(col[key]);

      const mn = min(...t);

      const mx = max(...t);
      // Capture the min and max values and see if the passed in color is within that range
      return inRange(fctr, mn, mx);
    })
    .toString();

  return res;
}

function customConcat(h) {
  const res = [];

  if (typeof h == 'object') {
    const k = keys(h);

    //@ts-ignore
    res.push(...k.map((v) => h[v]));
  }

  return res.flat(1);
}

function adjustHue(x) {
  return (x > 0 && (x += Math.ceil(-x / 360) * 360)) || x % 360;
}

function chnDiff(x, mc) {
  return (y) => {
    const cb = (color) => getChannel(mc)(color);
    if (cb(x) < cb(y)) {
      return cb(y) - cb(x);
    } else {
      return cb(x) - cb(y);
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

function inRange(n, s, e) {
  /* Built-in method references for those with the same name as other `lodash` methods. */

  return gte(n, Math.min(s, e)) && lt(n, Math.max(s, e));
}

function isInt(n) {
  const r = /^-?[0-9]+$/;
  return r.test(n.toString());
}

function norm(v, mc) {
  const [m, c] = mc.split('.');
  const [s, e] = limits[m][c];
  const r = inRange(v, s, e);

  if (!r) {
    if (lte(v, 1)) {
      v = e * v;
    } else {
      v = (lte(e, 100) && e * (v / 100)) || e * (v / e);
    }
  }
  return v;
}

function rand(mn, mx) {
  if (mn > mx) {
    var [mn, mx] = [mn, mx];
    mx = mn;
    mn = mx;
  } else {
    return Math.random() * (mx - mn) + mn;
  }
}

function floorCeil(n) {
  if (!isInt(n)) {
    const c = n.toString().split('.');
    const v = c[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    const r = (float) => /^[0-4]$/.test(float.charAt(0));

    if (r(v)) {
      n = Math.floor(n);
    } else {
      n = Math.ceil(n);
    }
  }

  return n;
}

function customSort(o = 'asc', fctr = 'factor') {
  // a-b gives asc order & b-a gives desc order

  return (a, b) => {
    if (o === 'asc' || 'min') {
      return a[fctr] - b[fctr];
    } else if (o === 'desc' || 'max') {
      return b[fctr] - a[fctr];
    }
  };
}

function colorObjColl(fctr = 'factor', cb = (a) => a.toString()) {
  var _cb = colorObj(fctr, cb);
  /**
   * @param collection The array or object of colors to iterate over. If an object is passed, its values are expected to be valid color tokens.
   */
  return (collection) => {
    // Check if the collection is an array else treat it like a plain object
    // Convert object into a Map which remembers sorting order in a more predictable way

    return map(collection, _cb);
  };
}

/**
 * Checks if value is an array.
 * @param {any} x The value to check.
 * @returns {boolean}
 */
function isArray(x) {
  return Array.isArray(x);
}

/**
 * Checks if the value is an instance of a `Map`.
 * @param {any} x The value to check.
 * @returns {boolean}
 */
function isMap(x) {
  return x instanceof Map;
}

/**
 * Iterates over any collection invoking `cb` on every element in the `collection`.
 * @param {Map<any,ColorToken>|Array<ColorToken|{[key:string]:ColorToken}>} collection The collection to map over.
 * @param {(a)=>any} cb The callback function invoked per element in the collection. The callback is expected to be unary.
 * @returns {Collection}
 *
 */
function map(collection, cb) {
  var _o;
  if (collection instanceof Map) {
    _o = new Map();
    for (const [a, b] of entries(collection)) {
      _o.set(a, cb(b));
    }
  } else if (isArray(collection)) {
    _o = new Array(collection.length);
    for (const [a, b] of entries(collection)) {
      _o[a] = cb(b);
    }
  } else {
    for (const [a, b] of entries(collection)) {
      _o = {};
      _o[a] = cb(b);
    }
  }
  return _o;
}

function min(x = []) {
  return x.reduce((a, b) => Math.min(a, b), Infinity);
}

function max(x = []) {
  x = or(x, []);
  return x.reduce((a, b) => Math.max(a, b), -Infinity);
}

function reNum(s) {
  s = s.toString();
  var re = /[0-9]*\.?[0-9]+/;
  // @ts-ignore
  return (re.test(s) && Number(re.exec(s)['0'])) || undefined;
}

function reOp(s) {
  s = s.toString();
  var re = /^(>=|<=|<|>|={1,2}|!={0,2})/;

  // @ts-ignore
  return (re.test(s) && re.exec(s)['0']) || undefined;
}
function sortedColl(f = 'factor', cb, o = 'asc', obj = false) {
  return (c) => {
    var r = colorObjColl(f, cb)(c),
      res;

    // If the collection is not an Array  insert the sorted elements
    // Sort the array using our customSort helper function

    if (isArray(c)) {
      // @ts-ignore
      res = r.sort(customSort(o, f));

      return (obj === true && res) || res.map((color) => color['color']);
    } else {
      res = new Map();
      values(r)
        // @ts-ignore
        .sort(customSort(o, f))
        .map((v, z) => {
          var [k, v] = entries(c)[z];
          if (v === v) {
            res.set(k, v);
          }
        });

      if (obj === false) {
        entries(res).map((v) => res.set(v[0], v[1]['color']));
      }
    }
    return res;
  };
}

function filteredColl(f, cb) {
  return (c, s, e) => {
    let _o;

    if (typeof s === 'number') {
      _o = colorObjColl(
        f,
        cb
      )(c)
        // @ts-ignore
        .filter((color) => inRange(color[f], s, e))
        .map((color) => color['color']);

      // If string, split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (typeof s === 'string') {
      //The patterns to match

      const v = reNum(s),
        op = reOp(s);

      if (op) {
        const mapFilter = (j) => {
          return (
            colorObjColl(
              f,
              cb
            )(c)
              // @ts-ignore
              .filter((l) => j(l[f], parseFloat(v.toString())))
              .map((l) => l['color'])
          );
        };
        // object with comparison symbols as keys
        var sym_ = {
          '!=': neq,
          '==': eq,
          '>=': gte,
          '<=': lte,
          '>': gt,
          '<': lt,
          '===': eq,
          '!==': neq
        };
        _o = mapFilter(sym_[op]);
      }
    }

    return _o;
  };
}

function clamp(v, mn = -Infinity, mx = Infinity) {
  if (typeof v === 'number') {
    if (gt(v, mx)) {
      return mx;
    } else if (lt(v, mn)) {
      return mn;
    } else {
      return v;
    }
  } else {
    throw Error(`${v} is not a number`);
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
