import { formatHex } from "culori";
import {
  alpha,
  brighten,
  darken,
  getFarthestHue,
  getNearestHue,
  maxHue,
  minHue,
  setChannel,
} from "./dist/huetiful.esm.mjs";

let sample = ["purple", "yellow", "green"];
console.log(alpha("orange", "+0.4"));
console.log(alpha("orange", 0.3));
/* console.log(darken("orange", 0.1));
console.log(brighten("orange", "+0.5"));
 */
console.log(setChannel("lch.h")("orange", "*0.8"));
