import { filterByDistance, getTemp } from "./dist/huetiful.esm.mjs";

import chroma from "chroma-js";

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

/* console.log(filterByDistance(sample, "green", ">4"));
 */

console.log(getTemp("brown"));
console.log(chroma("brown").temperature());
