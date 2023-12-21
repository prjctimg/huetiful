import { HueColorSpaces } from "../../types";
import { checkArg } from "../misc";

/**
 * @function
 * Matches the lightness channel of any compliant color space
 * @param colorspace The color space to match lightness channel.
 * @returns The mode channel string passed to getChannel
 */
const matchLightnessChannel = (colorspace: HueColorSpaces | string): string => {
  // Matches any string with c or s
  colorspace = checkArg(colorspace, "jch");
  const reLightness = /(j|l)/i;
  const ch = reLightness.exec(colorspace)["0"];

  if (reLightness.test(colorspace)) {
    // @ts-ignore
    return `${colorspace}.${ch}`;
  } else {
    throw Error(`The color space ${colorspace} has no lightness channel.`);
  }
};

export { matchLightnessChannel };
