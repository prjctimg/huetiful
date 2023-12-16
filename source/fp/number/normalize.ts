import { inRange } from "./inRange";
import modeRanges from "../../color-maps/samples/modeRanges";

/**
 * @function
 * @description Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.
 * @param value The value to chec if its in the accepted range for the passed in mode channel
 * @param modeChannel A string defining the mode and channel ranges to use for comparison
 * @returns The normalized channel value or the passed in value if it was within range
 */
const normalize = (value: number, modeChannel: string): number => {
  const [mode, channel] = modeChannel.split(".");
  const [start, end] = modeRanges[mode][channel];
  const range = inRange(value, start, end);

  if (!range) {
    if (inRange(value, 0, 1)) {
      value = end * value;
    } else if (inRange(value, 1)) {
      value = end * (value / 100);
    } else {
      throw Error(
        `The value ${value} is out of range for channel ${channel} of colorspace ${mode} can only accept a value between [0,1] or [0,100] with 0.5 or 50 being half of the channel range.`
      );
    }
  }
  return value;
};

export { normalize };
