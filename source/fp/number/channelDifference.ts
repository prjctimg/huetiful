import { getChannel } from "../../getters_and_setters/get";
import { Color } from "../../types";

const channelDifference =
  (color: Color, modeChannel?: string) => (subtrahend: Color) => {
    const cb = (color) => getChannel(modeChannel as string)(color);
    if (cb(color) < cb(subtrahend)) {
      return cb(subtrahend) - cb(color);
    } else {
      return cb(color) - cb(subtrahend);
    }
  };

export { channelDifference };
