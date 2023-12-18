// This module has the default options for widely used parameters.

import {
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
} from "culori";
import type { Options } from "../types";

let {
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator,
}: Options = {};

chromaInterpolator = interpolatorSplineNatural;
hueFixup = fixupHueShorter;
hueInterpolator = interpolatorSplineBasisClosed;
lightnessInterpolator = interpolatorSplineMonotone;

let interpolatorConfig = {
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator,
};

export { interpolatorConfig };
