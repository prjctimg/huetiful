//@ts-nocheck

import chroma from 'chroma-js';
import { formatHex } from 'culori';
import { map } from '../core-utils/map.mjs';
import _ from 'lodash';
import type { baseColor, Colors } from './palettes.js';

function adjustHue(value = 0) {
    if (value < 0) value += Math.ceil(-value / 360) * 360;

    return value % 360;
}

const opts = {};

/**
 * Creates a palette of hue shifted colors(As a colour becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param base {number} color object containing Hue channel. Preferably LCH
 * @param mode {string}  Color space to compute the palette in.
 * @param minLightness {number} Minimum lightness value (range 0-100).
 * @param maxLightness {number} Maximum lightness value (range 0-100).
 * @param hueStep {number} Controlos how much the hue will shift at each color.
 *
 * @returns {Colors}
 */

// Can we also map palette types to create hue shifted variants per each color in the palette ?
export default function hueShift(color: baseColor) {
    var input = chroma(base).lch();

    //Provide defaults for the base color to prevent adjustHue from throwing an error when it tries to access an unidentified property on the base object.

    // Store the base color in an array.
    const palette = [base];

    //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
    _.range(1, 6).map((val) => {
        //adjustHue checks hue values are clamped.
        const hueDark = adjustHue(_.nth(input, 2) - hueStep * val);
        const hueLight = adjustHue(_.nth(input, 2) + hueStep * val);

        // Here we use map to calculate our lightness values which takes a number that exists in range [0,1].
        const lightnessDark = map(val)(0)(4)(_.nth(input, 0))(minLightness);

        const lightnessLight = map(val)(0)(4)(_.nth(input, 0))(maxLightness);

        const chroma = _.nth(input, 1);

        palette.push({ l: lightnessDark, c: chroma, h: hueDark, mode: 'lch' });

        palette.unshift({ l: lightnessLight, c: chroma, h: hueLight, mode: 'lch' });
    });

    return palette.map((color) => formatHex(color));
}
