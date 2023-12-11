//@ts-nocheck
// Pastels.mjs. - This module creates pastel versions of a color. It will take an arr or single value , tweak it and then return the result. Optional overrides for min max values when iterating over an arr.
import type { ColorToken } from "../types";
import { averageNumber, modeHsv, useMode } from "culori/fn";
import { min, max } from "../fp/array/min_max.ts";
import { random } from "../fp/number/random.ts";
import { toHex } from "../converters/toHex.js";

const samplePastelObj = [
  {
    color: "#fea3aa",
    saturation: 0.35826771653543305,
    value: 0.996078431372549,
  },
  {
    color: "#f8b88b",
    saturation: 0.43951612903225806,
    value: 0.9725490196078431,
  },
  { color: "#faf884", saturation: 0.472, value: 0.9803921568627451 },
  {
    color: "#f2a2e8",
    saturation: 0.3305785123966942,
    value: 0.9490196078431372,
  },
  {
    color: "#b2cefe",
    saturation: 0.2992125984251969,
    value: 0.996078431372549,
  },
  {
    color: "#baed91",
    saturation: 0.3881856540084388,
    value: 0.9294117647058824,
  },
];

const sampleSaturation = samplePastelObj.map((el) => el["saturation"]);
const sampleValues = samplePastelObj.map((el) => el["value"]);

const pastelSample = {
  averageSaturation: averageNumber(sampleValues),
  averageValue: averageNumber(sampleSaturation),
  minSampleSaturation: min(sampleSaturation),
  maxSampleSaturation: max(sampleSaturation),
  minSampleValue: min(sampleValues),
  maxSampleValue: max(sampleValues),
};

//Normalize the s and v channels between low and max values for each

/**
 * @function
 * @description Returns a random pastel variant of the passed in color.
 * @param color The color to return a pastel variant of.
 * @returns A random pastel color.
 * @example
 * 
 * 
import { pastel } from 'huetiful-js'

console.log(pastel("green"))
// #036103ff
 */
const pastel = (color: ColorToken): ColorToken => {
  const toHsv = useMode(modeHsv);
  color = toHsv(toHex(color));
  // For now we're simply returning an hsv object with the s and v channel set to the averages

  return toHex({
    h: color["h"],
    s: pastelSample["averageSaturation"],
    v: random(pastelSample["minSampleValue"], pastelSample["maxSampleValue"]),
    mode: "hsv",
  });
};

export { pastel };
