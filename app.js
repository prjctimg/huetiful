import {
  base,
  filterByLuminance,
  filterByTemp,
  filterBySaturation,
  getChannel,
  filterByHue,
} from "./dist/huetiful.esm.mjs";

console.log(
  filterByHue(
    ["#fc3ab1", "blue", "yellow", "purple", "#d31bce", "red"],
    10,
    200
  )
);
console.log(getChannel("lch.c")("pink"));
