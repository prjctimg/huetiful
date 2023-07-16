import { converter } from 'culori';
import _ from 'lodash';


//@ts-check

/**
 * Sets/gets the opacity of a color.
 *
 * @param color
 * @param value
 * @returns
 */

const alpha = (color, value) => {
    const src = converter('rgb')(color);

    if (alpha !== undefined && _.isNumber(alpha)) {
        src['alpha'] = alpha;
    }
    return src;
};

export { alpha };
