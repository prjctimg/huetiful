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
  const { r, g, b } = color;
  // Make sure the color is parseable by converter()

  // Double conversion from XYZ to Lab. Why though ???
  color = converter("lab65")(format(color));

  // Capture the cool and warm ranges (starts and ends)
  const cool = { start: -100, end: -20 };
  const warm = { start: 40, end: 100 };

  const isACool =
    inRange(g, cool["start"], cool["end"]) &&
    inRange(b, cool["start"], cool["end"]);
  const isAWarm =
    inRange(g, warm["start"], warm["end"]) &&
    inRange(b, warm["start"], warm["end"]);

  // i need to take account of the different channel values for certain color ranges
  const isCoolColor = isACool && gt(color["a"], 0);
  const isWarmColor = isAWarm && gt(color["a"], 0);
  return isCoolColor || isWarmColor;
};

export { isCool };
