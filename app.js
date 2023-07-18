import {
  alpha,
  brighten,
  darken,
  getTemp,
  purify,
} from "./src/core-utils/purify.js";

console.log(alpha("pink"));
console.log(
  purify(["slate", "blue", "#3fab0d", { l: 50, c: 80, h: 120 }, 780])
);
