/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import { tailwindColors } from '../colors/tailwindColors';
import { getLuminance } from '../getters_and_setters/luminance';
import { getContrast } from '../getters_and_setters/contrast';
import type { Color } from '../paramTypes';
import { IViewingConditions, cam, cfs, gamut } from 'ciecam02-ts';
import { rgb, workspace, illuminant, xyz, Vector3D } from 'ciebase-ts';
import { toHex as nativeToHex } from '../converters/toHex';
import { checkArg } from '../fp/misc';

// This module will make use of contrast ratio to create adaptive palettes

// Things I need to understand first:
// 1. What is adaptive color exactly
// 2. What makes color adaptive
// 3. What is contrast and how does it affect adaptive color
// 4. What are the specifics of contrast ratio in relation to design elements
// 5. What are the nuances of dark/light mode. How is the color corrected when we switch themes
// 6. How can this be implemented in code

// Providing a min luminance contrast ratio between text and background.
//

// adaptive returns an object of the adjusted colors
// {lightMode/darkMode:Color[]}

// Possible params
// 1. backgroundColor
// 2. foregroundColor
// Do I need constrains for the background

// First I need to declare some constants to serve as starting points
////// Adapted from Adobe color

// Convert the color to an optimized color space for creating background colors
//

// 1. I need a properly defined color object that has all the color properties I'll need for comparisons.

// 2. Smooth scale function
// - Points = A nested array of each colors channel value [[],[],[]]
// -

/////// Rough concept of adaptive color

// Dark theme factors to consider
// 1. if color is darker than background. It means that color is not legible and will be tuned up
// 2. if color is lighter than background. it means its legible

// Light theme factors to consider
// 1. if a color is lighter than background. This means color is not compliant and will be fixed up.
// 2. if a color is darker than background. It means its legible

// Constants
// - baseluminance
// - colorluminance

// Find contrast colors
// find contrast color pairs that are harmonius

// The relative luminance returned should be compliant to the defined ratio

// The correlates are channels in short  "QJMCshH"

// First convert cam to xyz then rgb

const polynomial = (x: number) => {
  return Math.sqrt(Math.sqrt((Math.pow(x, 2.25) + Math.pow(x, 4)) / 2));
};
// Pass viewing conditions

const baseCieCam = cam(
  {
    whitePoint: illuminant.D65,
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: 'average',
    discounting: false
  },
  cfs('JCh')
);

/**
 * @function
 * @description Converts any color to Jch. The color is converted to CAM then XYZ under the hood.
 * @param color Any recognizable color token
 * @param viewingConditions Optional parameters for specifying the viewing conditions.
 * @returns An array of the Jch channel values
 */
const toJch = (
  color: Color,
  viewingConditions?: IViewingConditions
): Vector3D => {
  let {
    whitePoint,
    adaptingLuminance,
    backgroundLuminance,
    surroundType,
    discounting
  } = viewingConditions || {};

  color = checkArg(color, '#000000');
  whitePoint = checkArg(whitePoint, illuminant['D65']);
  adaptingLuminance = checkArg(adaptingLuminance, 40);
  backgroundLuminance = checkArg(backgroundLuminance, 20);
  surroundType = checkArg(surroundType, 'average');
  discounting = checkArg(discounting, false);

  color = cam(viewingConditions, cfs('Jch')).toXyz(
    hexToCam(nativeToHex(color))
  );

  return color;
};
export const xyzToSrgb = (color: Vector3D) =>
  xyz(workspace['sRGB'], illuminant['D65']).toRgb(color);
const xyzGamut = gamut(xyzToSrgb, baseCieCam);
const hexToCam = (hex) => {
  return baseCieCam.fromXyz(bas.fromRgb(rgb.fromHex(nativeToHex(hex))));
};
const camToHex = (CAM) => {
  return rgb.toHex(xyzToSrgb.toRgb(xyzToSrgb.toRgb(baseCieCam.toXyz(CAM))));
};

const jch2rgb = (jch: Vector3D) =>
  xyz(baseCieCam.fromXyz({ J: jch[0], C: jch[1], h: jch[2] })).toRgb();

const adaptivePalette = (
  colors: Color[],
  { dark, light }: { light?: Color; dark?: Color }
) => {
  let { light, dark } = undefined || {};

  light = checkArg(light, tailwindColors('gray')('100'));

  // First get the contrast between the passed in color and the backgrounds
  dark = checkArg(dark, tailwindColors('stone')('800'));
  const lightContrast = getContrast(colors, light);
  const darkContrast = getContrast(colors, dark);
  const colorLuminance = getLuminance(color);
  const lightLuminance = getLuminance(light);
  const darkLuminance = getLuminance(dark);
  colors = colors.map((color) => toJch(color));
};

export const xyzToSrgb = xyz(workspace['sRGB'], illuminant['D65']);
const xyzGamut = gamut(xyzToSrgb, baseCieCam);
const hexToCam = (hex) => {
  return baseCieCam.fromXyz(xyzToSrgb.fromRgb(rgb.fromHex(nativeToHex(hex))));
};
