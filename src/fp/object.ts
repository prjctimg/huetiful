// This module has object methods

import type { callback, factor, Color } from '../paramTypes';

// @ts-nocheck
const colorObj = (factor: factor, callback: callback) => (color: Color) => {
  return { [factor]: callback(color), name: color };
};

const find = (
  collection: object,
  predicate: (val, key?, idx?) => object | string
) => {
  let prop;
  for (prop in collection) {
    if (predicate(collection[prop], prop)) {
      return collection[prop];
    }
  }
  return false;
};

const customConcat = (hue: object) => {
  const res: number[] = [];
  const { keys } = Object;
  if (typeof hue == 'object') {
    const hueKeys = keys(hue);

    //@ts-ignore
    res.push(...hueKeys.map((key) => hue[key]));
  }
  return res;
};
export { colorObj, find, customConcat };
