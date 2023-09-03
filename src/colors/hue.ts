//This module contains getNearestHue,getFarthestHue,minHue and maxHue which are collection based utils that return the color with the queried factor.

import { converter } from "culori";
import { Color, factor } from "../paramTypes";
import { getChannel } from "../core-utils/get.ts";

const getNearestHue = (color: Color, colors: Color[]) => {
  const factor: factor = "hue";
  const cb = getChannel("lch.h");

  // First store the hue value of the color being used as a comparison.
  const targetHue = cb(color);
};
const getFarthestHue = (first) => {
  second;
};
const minHue = (first) => {
  second;
};
const maxHue = (first) => {
  second;
};

export { getFarthestHue, getNearestHue, maxHue, minHue };
