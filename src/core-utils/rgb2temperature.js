/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature and chroma-js
 **/

//  @ts-nocheck
import { converter } from 'culori';
import { gte, divide, map, set, multiply, round, add } from 'lodash-es';
import { temperature2rgb } from './temperature2rgb';

/**
 * Returns the temperature value in Kelvins of the passed in color token.
 * @param color {baseColor}
 * @returns {number}
 */

const rgb2temperature = (color) => {
    const rgb = converter('rgb')(color);
    const rgbLimit = 255;

    map(rgb, (val, key) => set(rgb, key, multiply(val, rgbLimit)));

    let minTemp = 1000;
    let maxTemp = 40000;
    const eps = 0.4;
    let temp;
    while (maxTemp - minTemp > eps) {
        temp = add(maxTemp, multiply(minTemp, 0.5));
        const rgb = temperature2rgb(temp);
        if (gte(divide(rgb['b'], rgb['r']), divide(['b'], rgb['r']))) {
            maxTemp = temp;
        } else {
            minTemp = temp;
        }
    }
    return round(temp);
};

export { rgb2temperature as getTemp };
