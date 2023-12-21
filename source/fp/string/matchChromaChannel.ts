import { HueColorSpaces } from "../../types";
import { checkArg } from "../misc";

/**
 * @function
 * Matches the chroma/saturation channel of any compliant color space
 * @param colorspace The color space to match saturation/chroma channel.
 * @returns The mode channel string passed to getChannel()
 */
const matchChromaChannel = (colorspace: HueColorSpaces | string): string => {
  // Matches any string with c or s

  colorspace = checkArg(colorspace, "jch");
  const reChroma = /(s|c)/i;
  const ch = reChroma.exec(colorspace)["0"];

  if (reChroma.test(colorspace)) {
    return `${colorspace}.${ch}`;
  } else {
    throw Error(
      `The color space ${colorspace} has no chroma/saturation channel.`
    );
  }
};

export { matchChromaChannel };
