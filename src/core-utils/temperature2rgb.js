/**
 
* Converts any number between 1 and 30000 to a color. 
 * https://github.com/neilbartlett/color-temperature
 */

//ported from chroma-js

import _ from 'lodash';
const temperature2rgb = (kelvin) => {
    //Hue change starts at approx 655 Kelvins ???
    const eps = 655;
    const { log } = Math;
    // Checking if the passed in value is within a problematic range that returns negative values on the blue channel.
    _.inRange(kelvin, 400, 650) ? (kelvin = eps) : kelvin;

    const temp = _.divide(kelvin, 100);
    let r, g, b;
    if (_.lt(temp, 66)) {
        r = 255;
        g = _.lt(temp, 6)
            ? 0
            : _.add(
                _.subtract(
                    -155.25485562709179,
                    _.multiply(0.44596950469579133, (g = _.subtract(temp, 2)))
                ),
                _.multiply(104.49216199393888, log(g))
            );

        b = _.lt(temp, 20)
            ? 0
            : _.sum([
                -254.76935184120902,
                _.multiply(0.8274096064007395, (b = _.subtract(temp, 10))),
                _.multiply(115.67994401066147, log(b))
            ]);
    } else {
        r = _.subtract(
            _.add(351.97690566805693, _.multiply(0.114206453784165, (r = _.subtract(temp, 55)))),
            _.multiply(40.25366309332127, log(r))
        );
        g = _.subtract(
            _.add(325.4494125711974, _.multiply(0.07943456536662342, (g = _.subtract(temp, 50)))),
            _.multiply(28.0852963507957, log(g))
        );
        b = 255;
    }
    return _.fromPairs([
        ['r', r],
        ['g', g],
        ['b', b],
        ['mode', 'rgb']
    ]);
};

export { temperature2rgb };
