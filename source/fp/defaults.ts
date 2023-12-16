// This module has the default options for widely used parameters.

import {
  easingSmoothstep,
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
} from "culori";
import { checkArg } from "./misc";
import type { Options } from "../types";

let {
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator,
}: Options = {};

chromaInterpolator = checkArg(chromaInterpolator, interpolatorSplineNatural);
hueFixup = checkArg(hueFixup, fixupHueShorter);
hueInterpolator = checkArg(hueInterpolator, interpolatorSplineBasisClosed);
lightnessInterpolator = checkArg(
  lightnessInterpolator,
  interpolatorSplineMonotone
);

let interpolatorConfig = {
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator,
};

export { interpolatorConfig };
