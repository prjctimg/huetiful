/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 **/

//  @ts-nocheck
import { converter } from 'culori';
import _ from 'lodash';
import type { baseColor } from '../colors/colors.js';
import { temperature2rgb } from './temperature2rgb.mjs';

/**
 * Returns the temperature value in Kelvins of the passed in color token.
 * @param color {baseColor}
 * @returns {number}
 */

const rgb2temperature = (color: baseColor) => {
    const rgb = converter('rgb')(color);
    const rgbLimit = 255;
    _.map(rgb, (val, key) => _.set(rgb, key, _.multiply(val, rgbLimit)));

    let minTemp = 1000;
    let maxTemp = 40000;
    const eps = 0.4;
    let temp;
    while (maxTemp - minTemp > eps) {
        temp = _.add(maxTemp, _.multiply(minTemp, 0.5));
        const rgb = temperature2rgb(temp);
        if (_.gte(_.divide(rgb['b'], rgb['r']), _.divide(['b'], rgb['r']))) {
            maxTemp = temp;
        } else {
            minTemp = temp;
        }
    }
    return _.round(temp);
};

export { rgb2temperature as getTemp };
