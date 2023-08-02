/**
 
* Converts any number between 1 and 30000 to a color. 
 * https://github.com/neilbartlett/color-temperature
 */

//ported from chroma-js

import {
  subtract,
  multiply,
  add,
  divide,
  sum,
  inRange,
  lt,
  fromPairs,
} from "lodash-es";

/**
 *Converts the temperature value (in Kelvins) to an RGB color object.
 * @param kelvin The number of Kelvins. From 0 to 30,000 .
 * @returns color An RGB color object.
 */
const temperature2rgb = (kelvin: number) => {
  //Hue change starts at approx 655 Kelvins ???
  const eps = 655;
  const { log } = Math;
  // Checking if the passed in value is within a problematic range that returns negative values on the blue channel.
  inRange(kelvin, 400, 650) ? (kelvin = eps) : kelvin;

  const temp = divide(kelvin, 100);
  let r, g, b;
  if (lt(temp, 66)) {
    r = 255;
    g = lt(temp, 6)
      ? 0
      : add(
          subtract(
            -155.25485562709179,
            multiply(0.44596950469579133, (g = subtract(temp, 2)))
          ),
          multiply(104.49216199393888, log(g))
        );

    b = lt(temp, 20)
      ? 0
      : sum([
          -254.76935184120902,
          multiply(0.8274096064007395, (b = subtract(temp, 10))),
          multiply(115.67994401066147, log(b)),
        ]);
  } else {
    r = subtract(
      add(
        351.97690566805693,
        multiply(0.114206453784165, (r = subtract(temp, 55)))
      ),
      multiply(40.25366309332127, log(r))
    );
    g = subtract(
      add(
        325.4494125711974,
        multiply(0.07943456536662342, (g = subtract(temp, 50)))
      ),
      multiply(28.0852963507957, log(g))
    );
    b = 255;
  }
  return fromPairs([
    ["r", r],
    ["g", g],
    ["b", b],
    ["mode", "rgb"],
  ]);
};

export { temperature2rgb as setTemp };
