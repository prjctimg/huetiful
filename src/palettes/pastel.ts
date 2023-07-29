// Pastels.mjs. - This module creates pastel versions of a color. It will take an arr or single value , tweak it and then return the result. Optional overrides for min max values when iterating over an arr.
import { baseColor } from "../paramTypes.ts";
import { converter, mapper } from "culori";
import { map, min, max, mean, set } from "lodash-es";
const sampleSaturation = map(samplePastelObj, (el) => el["saturation"]);
const sampleValues = map(samplePastelObj, (el) => el["value"]);
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

/** 

 * @function
 *  Returns the pastel variant of the passed in color.
 *  @param  saturation An array of the start and end range of saturation normalized between [0...1]. The raw range is between 0.92 and 0.99 (rounded to 2s.f)
 * @param value
 */

const pastelSample = {
  averageSaturation: mean(sampleValues),
  averageValue: mean(sampleSaturation),
  minSampleSaturation: min(sampleSaturation),
  maxSampleSaturation: max(sampleSaturation),
  minSampleValue: min(sampleValues),
  maxSampleValue: max(sampleValues),








};




//Normalize the s and v channels between low and max values for each
const pastelMapper = (
  color: baseColor,
  value: number,
  saturation: number,
  mode = "hsv"
): baseColor => {

 color = converter('hsv')(color)

 // For now we're simply returning an hsv object with the s and v channel set to the averages
  return {
    h:color['h']
    s:pastelSample['averageSaturation'],
    v:pastelSample['averageValue'],
  };
};

