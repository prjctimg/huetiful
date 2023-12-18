// this module returns a simplified wrapper function over the different types of interpolator funcs exposed by Culori
import {
  easingSmoothstep,
  interpolate,
  interpolatorSplineBasis,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
  interpolatorSplineMonotoneClosed,
  interpolatorSplineNatural,
  interpolatorSplineNaturalClosed,
  samples as nativeSamples,
} from "culori/fn";
import { checkArg, matchChromaChannel, matchLightnessChannel } from "../fp";
import { Color, HueColorSpaces, InterpolatorOptions } from "../types";
import { toHex } from "../converters";

/**
 * @function
 * @description Returns a spline based interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.
 * @param colors The array of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result.
 * @param mode The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
 * @param kind The type of the spline interpolation method. Default is basis.
 * @param closed Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false
 * @param options Optional channel specific overrides.
 * @returns A hexadecimal representation of the resultant color.
 */
const interpolateSpline = (
  colors: Color[],
  mode?: HueColorSpaces,
  samples?: number,
  kind?: "natural" | "monotone" | "basis",
  closed = false,
  options?: InterpolatorOptions
): Color[] => {
  let {
    chromaInterpolator,
    hueFixup,
    hueInterpolator,
    lightnessInterpolator,
    easingFunc,
  } = checkArg(options, {}) as InterpolatorOptions;
  // Set the internal defaults
  easingFunc = checkArg(easingFunc, easingSmoothstep);
  kind = checkArg(kind, "basis");

  let func;
  switch (kind) {
    case "basis":
      func = closed ? interpolatorSplineBasisClosed : interpolatorSplineBasis;
      break;
    case "monotone":
      func = closed
        ? interpolatorSplineMonotoneClosed
        : interpolatorSplineMonotone;
      break;
    case "natural":
      func = closed
        ? interpolatorSplineNaturalClosed
        : interpolatorSplineNatural;
      break;
  }
  // @ts-ignore
  let f = interpolate([...colors, easingFunc], mode, {
    h: {
      //@ts-ignore
      fixup: hueFixup,
      use: checkArg(hueInterpolator, func),
    },
    [matchChromaChannel(mode as string)]: {
      use: checkArg(chromaInterpolator, func),
    },
    [matchLightnessChannel(mode as string)]: {
      use: checkArg(lightnessInterpolator, func),
    },
  });

  // make sure samples is an absolute integer
  samples =
    typeof samples === "number" && samples >= 1
      ? samples
      : Math.ceil(Math.abs(samples));

  let result: string[];
  if (samples > 1) {
    result = nativeSamples(samples).map((s) => toHex(f(s)));
  } else {
    //@ts-ignore
    result = result.push(toHex(f(0.5)));
  }
  return result;
};

export { interpolateSpline };
