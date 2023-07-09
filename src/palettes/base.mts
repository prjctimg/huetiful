import _ from 'lodash';
import chroma from 'chroma-js';
import type { baseColor } from './palettes';

var $ = chroma;

function adjustHue(value: number): number {
    if (value < 0) value += Math.ceil(-value / 360) * 360;

    return value % 360;
}

export default function base(baseColor: baseColor) {
    baseColor = $(baseColor).lch();
    const palettes = {};

    const targetHueSteps = {
        analogous: [0, 180, 360],
        triadic: [0, 120, 240],
        tetradic: [0, 90, 180, 270],

        complementary: [0, 180],
        splitComplementary: [0, 150, 210]
    };

    var component = _.nth;

    _.each(targetHueSteps, (value, key) => {
        palettes[key] = targetHueSteps[key].map((step) => ({
            l: component(baseColor, 0),
            c: component(baseColor, 1),
            h: adjustHue(component(baseColor, 2) + step)
        }));
    });

    return palettes;
}
