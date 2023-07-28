import type { baseColor } from "../paramTypes.ts";
import { map, fromPairs, inRange, filter } from "lodash-es";

/**
 * The function should catch the el param
 * @param pairs  The
 * @returns
 */
const colorObjArr = (factor, cb) => (colors) =>
  map(colors, (el) =>
    fromPairs([
      [factor, cb(el)],
      ["name", el],
    ])
  );

const filteredArr =
  (factor: string) =>
  (colorObjArr: object[], start: number, end: number): baseColor[] =>
    map(
      filter(colorObjArr, (el) => inRange(el[factor], start, end)),
      (color) => color["name"]
    );

export { colorObjArr, filteredArr };
