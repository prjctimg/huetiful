import { converter, interpolate, wcagLuminance } from 'culori';
import _ from 'lodash';

import type { baseColor } from '../colors/colors';

const getLuminance = (color: baseColor) => wcagLuminance(color);

const { pow, abs } = Math;
// @ts-nocheck

const luminance = function (color, lum) {
    const white = '#ffffff',
        black = '#000000';

    const EPS = 1e-7;
    let MAX_ITER = 20;

    if (lum !== undefined && _.isNumber(lum)) {
        // return pure black/white
        (_.eq(lum, 0) && _.defaultTo(lum, black)) || (_.eq(lum, 1) && _.defaultTo(!lum, white));

        // compute new color using...

        let cur_lum = wcagLuminance(color);
        const mode = 'rgb';
        color = converter(mode)(color);

        const test = (low, high) => {
            const mid = interpolate([low, high])(0.5);
            const lm = wcagLuminance(mid);
            if (_.lt(abs(lum - lm), EPS) || !MAX_ITER--) {
                // close enough
                return mid;
            }
            return _.gt(lm, lum) ? test(low, mid) : test(mid, high);
        };
        const rgb = cur_lum > lum ? test(black, color) : test(color, white);
        color = rgb;
        return color;
    }
    //   spreading the array values (r,g,b)

    return rgb2luminance(...color);
};

const rgb2luminance = (r, g, b) => {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const luminance_x = (x) => {
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
};

export { luminance as setLuminance };
export { getLuminance };
