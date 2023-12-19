// This module has the default options for widely used parameters.

import {
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
  easingSmoothstep,
} from "culori";
import type { Options } from "../types";

let {
  chromaInterpolator,
  easingFunc,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator,
}: Options = {};

chromaInterpolator = interpolatorSplineNatural;
hueFixup = fixupHueShorter;
hueInterpolator = interpolatorSplineBasisClosed;
easingFunc = easingSmoothstep;

lightnessInterpolator = interpolatorSplineMonotone;

let interpolatorConfig = {
  easingFunc,
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator,
};

export { interpolatorConfig };
