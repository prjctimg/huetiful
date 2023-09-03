//This module contains getNearestHue,getFarthestHue,minHue and maxHue which are collection based utils that return the color with the queried factor.

import { Color, factor } from "../paramTypes";
import { getChannel } from "../core-utils/get.ts";
import { fromPairs, get, head, map, subtract, tail } from "lodash-es";
import { colorObjArr, sortedArr } from "../core-utils/helpers";

//  Globals

const { abs } = Math;
const factor: factor = "hue";
const mode = "lch.h";
// The hue value of our color which we are using for comparison
const targetHue = (color: Color): number => getChannel(mode)(color);

// The callback to invoke per color in the passed in collection.
// Return the absolute value since hue is a cyclic value which can either be  in clockwise/anti-clockwise.
//This means that the color object with the smallest hue value is the  nearest color/hue.
const cb = (color: Color) => (subtrahend: Color) =>
  abs(subtract(targetHue(color), getChannel(mode)(subtrahend)));

/**
 *@function
 @description
 * @param color
 * @param colors
 * @returns
 */
const getNearestHue = (color: Color, colors: Color[]): number =>
  get(tail(sortedArr(factor, cb(color))(colors)), factor);

/**
 *@function
 @description
 * @param color
 * @param colors
 * @returns
 */
const getFarthestHue = (color: Color, colors: Color[]): number =>
  get(head(sortedArr(factor, cb(color))(colors)), factor);
const minHue = (first) => {
  second;
};
const maxHue = (first) => {
  second;
};

export { getFarthestHue, getNearestHue, maxHue, minHue };
