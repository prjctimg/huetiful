import type { baseColor } from "../paramTypes.ts";
import { map, fromPairs } from "lodash-es";

const colorObjArr = (colors: baseColor[], keyVal = [key, cb]) =>
  map(colors, (el) => fromPairs([...[key, cb(el)]]));

export { colorObjArr };
