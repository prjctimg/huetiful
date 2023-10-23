import { formatHex, formatHex8 } from "culori"
import {
  minLightness,
  maxLightness,
  getFarthestLightness,
  getNearestLightness,
} from "./dist/huetiful.esm.mjs"

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness("green", sample))

console.log(getNearestLightness("green", sample))
console.log(minLightness(sample, true))
console.log(maxLightness(sample, "hsl", true))
