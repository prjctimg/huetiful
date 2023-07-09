// Pastels.mjs. - This module creates pastel versions of a color. It will take an arr or single value , tweak it and then return the result. Optional overrides for min max values when iterating over an arr.

import chroma from 'chroma-js';
import _ from 'lodash';
import purify from '../core-utils/purify.mjs';
import { getChannel, setChannel } from '../core-utils/helpers.mjs';
import { convertHsvToRgb, formatHex } from 'culori';
import type { Colors, Range } from '../colors/colors';

/** 

 * @function pastel
 *  Returns the pastel variant of the passed in color.
 * @param 
 *
 *
 *
 *
 *  * saturationRange An array of the start and end range of saturation normalized between [0...1]. The raw range is between 0.92 and 0.99 (rounded to 2s.f)
 *
 *
 *
 * @param {Array} saturationRange An array of the start and end range of value normalized between [0...1]. The raw range is between 0.29 and 0.43 (rounded to 2s.f)
 */
export default function pastel(
    colors: Colors,
    saturationRange: Range,
    valueRange: Range
): string[] {
    let colorHSVArr = _.map(colors, (val) => chroma(val).hsv());

    // Extracted from Wikipedia from Pastels
    var samplePastels = [
        {
            color: '#fea3aa',
            saturation: 0.35826771653543305,
            value: 0.996078431372549
        },
        {
            color: '#f8b88b',
            saturation: 0.43951612903225806,
            value: 0.9725490196078431
        },
        { color: '#faf884', saturation: 0.472, value: 0.9803921568627451 },
        {
            color: '#f2a2e8',
            saturation: 0.3305785123966942,
            value: 0.9490196078431372
        },
        {
            color: '#b2cefe',
            saturation: 0.2992125984251969,
            value: 0.996078431372549
        },
        {
            color: '#baed91',
            saturation: 0.3881856540084388,
            value: 0.9294117647058824
        }
    ];

    let sampleSaturation = _.map(samplePastels, (val) => val.saturation);
    let sampleValues = _.map(samplePastels, (val) => val.value);

    // Use these values as the ranges for pastel. If values are exceeded they should be clamped to max. All colors have to be in hsv for computaion. The function returns hex values. It can also take an array of colors. it wll then get the meta for the value and saturation channels. it will compute the mean values for each and tweak the colors accordingly
    // The channels could also be eased for smoother.
    let averageSaturation = _.mean(sampleValues);
    let averageValue = _.mean(sampleSaturation);
    let minSampleSaturation = _.min(sampleSaturation);
    let maxSampleSaturation = _.max(sampleSaturation);
    let minSampleValue = _.min(sampleValues);
    let maxSampleValue = _.max(sampleValues);

    return _.map(colorHSVArr, (val) => {
        //We do the computations in the HSV color space.
        let mode = 'hsv';

        //Store the colors value and saturation channels.
        let v = getChannel(val)('hsv.v');
        let s = getChannel(val)('hsv.s');

        // Clamping the value and saturation channels to the ranges that produce pastel colors. This is the default behaviour but it can be overridden.
        let clampedSat = _.clamp(
            v,
            _.random(minSampleValue, maxSampleValue),
            _.random(maxSampleValue, minSampleValue)
        );
        let clampedVal = _.clamp(s, minSampleSaturation, maxSampleSaturation);
        console.log(`The clamped value is ${clampedVal}`);
        console.log(`The clamped saturation is ${clampedSat}`);

        setChannel(val)('hsv.s')(clampedSat);
        setChannel(val)('hsv.v')(clampedVal);

        return chroma(val, mode).hex();
    });
}

console.log(pastel(['blue', 'pink', 'green', 'yellow', 'orange', 'magenta', 'violet']));
console.log(['blue', 'pink', 'green', 'ye   llow', 'orange', 'magenta', 'violet'].map(formatHex));

/* 

console.log(averageSaturation)
console.log(averageValue)
console.log(maxSaturation)
console.log(minSaturation)
console.log(maxValue)
console.log(minValue)
 */
