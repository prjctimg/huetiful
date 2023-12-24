import { Color } from "../types";
import { HueColorSpaces } from "../types";
import { checkArg } from "./misc";

/**
 * Performs arithmetic operations on colors by passing the arithmetic operator from the value if it is a string. It requires the src variable to be declared in the global scope of the invoking func.
 * @param src The color object.
 * @param channel The channel to set.
 * @param value The value to apply.
 */
function expressionParser(src: Color, channel: string, value: string): number {
  // regExp to match arithmetic operator and the value
  const reOperator = /^(\*|\+|\-|\/)/,
    reValue = /[0-9]*\.?[0-9]+/;

  // Storing the arithmetic sign and value
  const sign = reOperator.exec(value)["0"];
  const amt = reValue.exec(value)["0"];

  const cb = (value: string) => parseFloat(value);

  // Match an operator against the first truthy case and perform the relevant math operation
  switch (sign) {
    case "+":
      src[channel] += +cb(amt);
      break;
    case "-":
      src[channel] -= +cb(amt);
      break;
    case "*":
      src[channel] *= +cb(amt);
      break;
    case "/":
      src[channel] /= +cb(amt);
      break;
    default:
      src[channel] = +cb(amt);
  }
  // @ts-ignore
  return src;
}

/**
 * @function
 * Matches the chroma/saturation channel of any compliant color space
 * @param colorspace The color space to match saturation/chroma channel.
 * @returns The mode channel string passed to getChannel()
 */
function matchChromaChannel(colorspace: HueColorSpaces | string): string {
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
}

/**
 * @function
 * Matches the lightness channel of any compliant color space
 * @param colorspace The color space to match lightness channel.
 * @returns The mode channel string passed to getChannel
 */
function matchLightnessChannel(colorspace: HueColorSpaces | string): string {
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
}

export { expressionParser, matchLightnessChannel, matchChromaChannel };
