// @ts-nocheck

import { Vector3D } from "ciebase-ts";
import type { Color, ColorSpaces } from "../types";
import { toHex } from "./toHex";
import "culori/all";
import { converter } from "culori/fn";
import { checkArg } from "../fp/misc";
import { getModeChannel } from "../fp/misc";
/**
 * @function
 * @description Returns an array of channel values in the mode color space.
 * @param color Any recognizable color token.
 * @param mode The mode color space to return channel values for
 * @returns An array of channel values excluding the alpha channel.
 */
const colorToVector3D = (color: Color, mode?: ColorSpaces) => {
  mode = checkArg(mode, "rgb");
  color = toHex(color);

  const colorObject: Color = converter(mode)(color);
  const result: Vector3D = Object.keys(colorObject).map(
    (key) => colorObject[getModeChannel(mode, key)]
  );

  return result;
};

export { colorToVector3D };
