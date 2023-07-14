import { converter } from 'culori';
import _ from 'lodash';
import type { baseColor } from '../colors/colors';

const alpha = (color: baseColor, alpha: number): baseColor => {
    const src = converter('rgb')(color);

    if (alpha !== undefined && _.isNumber(alpha)) {
        src['alpha'] = alpha;
    }
    return src;
};

export { alpha };
