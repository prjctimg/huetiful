import {
  add,
  clamp,
  concat,
  find,
  gt,
  inRange,
  lt,
  lte,
  map,
  min,
  max,
  stubFalse,
  stubTrue,
} from "lodash-es";
import hueTempMap from "../color-maps/hueTemperature.ts";
import { converter } from "culori";
import type { baseColor } from "../paramTypes.ts";
import { format } from "../core-utils/format.ts";

const isCool = (color: baseColor) => {
  color = converter("lch")(format(color));

  let concatArr = (obj) =>
    map(obj, (val, key) => concat(val["cool"], val["warm"]));

    // I'm queryingbthe hueTempMap object. I want the key that returns true
   find(hueTempMap, (val) =>{

   return inRange(color["h"], min(concatArr(val)), max(concatArr(val)))
  )}
};

export { isCool };
