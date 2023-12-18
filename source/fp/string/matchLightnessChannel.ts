import { HueColorSpaces } from "../../types";

/**
 * @function
 * Matches the lightness channel of any compliant color space
 * @param colorSpace The color space to match lightness channel.
 * @returns The mode channel string passed to getChannel
 */
const matchLightnessChannel = (colorSpace: HueColorSpaces | string): string => {
  // Matches any string with c or s
  const reLightness = /(j|l)/i;
  const ch = reLightness.exec(colorSpace)["0"];

  if (reLightness.test(colorSpace)) {
    // @ts-ignore
    return `${colorSpace}.${ch}`;
  } else {
    throw Error(`The color space ${colorSpace} has no lightness channel.`);
  }
};

export { matchLightnessChannel };
