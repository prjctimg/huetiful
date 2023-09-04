import { formatHex } from "culori";
import {
  getFarthestHue,
  getNearestHue,
  maxHue,
  minHue,
} from "./dist/huetiful.esm.mjs";

let sample = ["purple", "yellow", "green"];
console.log(minHue(sample));
console.log(maxHue(sample));
console.log(getFarthestHue("orange", sample));
console.log(getNearestHue("orange", sample));
