import {
  add,
  clamp,
  gt,
  inRange,
  lt,
  lte,
  stubFalse,
  stubTrue,
} from "lodash-es";
import { converter } from "culori";
import { getTemp } from "../core-utils/rgb2temperature.ts";
import type { baseColor } from "../paramTypes.ts";
import { format } from "../core-utils/format.ts";

const isCool = (color: baseColor) => {
  // Make sure the color is parseable by converter()
  const xyz = converter("xyz65")(format(color));
  console.log(xyz);
  // I want to clip colors within the
  // Double conversion from XYZ to Lab. Why though ???
  color = converter("lab65")(color);
  console.log(color);

  // i need to take account of the different channel values for certain color ranges
  let r, g, b, y;

  // Coords for red,green,yellow,blue
  y = b = { start: 0, end: clamp(color["b"], 100, 1) };
  b = { start: 0, end: clamp(color["b"], -100, 0) };
  g = { start: 0, end: clamp(color["a"], -100, 0) };
  r = { start: 0, end: clamp(color["a"], 100, 1) };
  // Check the ranges of the *a and *b component
  return inRange(color["a"], g["start"], g["end"]) &&
    inRange(color["b"], b["start"], b["end"])
    ? stubTrue()
    : stubFalse();
};

export { isCool };
