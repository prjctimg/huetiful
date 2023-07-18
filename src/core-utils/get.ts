import { converter } from "culori";
import { split, get } from "lodash-es";
import type { baseColor } from "../paramTypes.ts";

/**
 * Gets the  value specifified channel on the color.
 * @param mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @param color The color being queried.
 * @returns value The value of the queried channel.
 * */
const getChannel =
  (mc: string) =>
  (color: baseColor): number => {
    const [mode, channel] = split(mc, ".");
    const src = converter(mode)(color);

    return channel
      ? get(src, channel)
      : Error(`unknown channel ${channel} in mode ${mode}`);
  };

export { getChannel };
