import {
  base,
  sortByTemp,
  filterByLuminance,
  filterByTemp,
  filterBySaturation,
  getChannel,
  filterByHue,
} from "./dist/huetiful.esm.mjs";

console.log(
  sortByTemp(["#fc3ab1", "blue", "yellow", "purple", "#d31bce", "red"], "asc")
);
console.log(getChannel("lch.c")("pink"));
