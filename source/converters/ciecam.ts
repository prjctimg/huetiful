/* eslint-disable @typescript-eslint/no-unused-vars */

import { rgb, illuminant, xyz, workspace, Vector3D } from "ciebase-ts";
import { cfs, cam, IJchProps } from "ciecam02-ts";
import { toHex as nativeToHex } from "./toHex";
import { Color } from "../types";
import { normalize } from "../fp";

// Pass viewing conditions

const baseCieCam = cam(
  {
    whitePoint: illuminant["D65"],
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: "average",
    discounting: false,
  },
  cfs("JCh")
);

const xyzConverter = xyz(workspace["WideGamutRGB"], illuminant["D65"]);

// this func takes output from hexToCAM

/**
 * @function
 * @description Converts any recognizable color token to a JCh color object. It is the inverse of camToColor.
 * @param color The color to convert
 * @returns A JCh color object.
 */
const colorToCam = (color: Color) => {
  return baseCieCam.fromXyz(
    xyzConverter.fromRgb(rgb.fromHex(nativeToHex(color)))
  );
};

/**
 * @function
 * @description Converts a JCh color object to a widely recognized color token (which is hexadecimal format).
 * @param CAM The JCh color object to convert.
 * @returns The color's hexadesimal representation.
 */
const camToColor = (CAM: IJchProps) => {
  return rgb.toHex(xyzConverter.toRgb(baseCieCam.toXyz(CAM)));
};

export { colorToCam, camToColor, baseCieCam };
