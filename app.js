import {
  base,
  sortByTemp,
  filterByLuminance,
  filterByTemp,
  filterBySaturation,
  getChannel,
  filterByHue,
} from "./dist/huetiful.esm.mjs";
import { map } from "lodash-es";
import { converter } from "culori";
console.log(
  sortByTemp(["#fc3ab1", "blue", "yellow", "purple", "#d31bce", "red"], "asc")
);

const samplePastelObj = [
  {
    color: "#fea3aa",
    saturation: 0.35826771653543305,
    value: 0.996078431372549,
  },
  {
    color: "#f8b88b",
    saturation: 0.43951612903225806,
    value: 0.9725490196078431,
  },
  { color: "#faf884", saturation: 0.472, value: 0.9803921568627451 },
  {
    color: "#f2a2e8",
    saturation: 0.3305785123966942,
    value: 0.9490196078431372,
  },
  {
    color: "#b2cefe",
    saturation: 0.2992125984251969,
    value: 0.996078431372549,
  },
  {
    color: "#baed91",
    saturation: 0.3881856540084388,
    value: 0.9294117647058824,
  },
];
console.log(map(samplePastelObj, (el) => converter("lch")(el["color"])));
