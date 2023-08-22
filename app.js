/* import { easingSmootherstep, fixupHueShorter, interpolate } from "culori";
import { tailwindColors } from "huetiful-js";

let pink = tailwindColors("pink")("500"),
  blue = tailwindColors("blue")("200"),
  tones = { dark: "#000000", light: "#ffffff" };
console.log(interpolate([pink, tones["dark"], blue], "lch")(0.8));
 */

import { map } from "lodash-es";
import { pairedScheme } from "./dist/huetiful.esm.mjs";

import { converter } from "culori";

console.log(pairedScheme("purple", 20, 20, "light"));
