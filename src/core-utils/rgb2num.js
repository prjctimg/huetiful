import { converter } from "culori";

const rgb2num = (color = "blue") => {
  const rgb = converter("rgb")(color);
  return (rgb["r"] << 16) + (rgb["g"] << 8) + rgb["b"];
};

export { rgb2num };
