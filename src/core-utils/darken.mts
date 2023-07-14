import { converter, formatHex } from 'culori';
import type { baseColor } from '../colors/colors';
// ported froma chroma-js brighten

const darken = (color: baseColor, amount) => {
    _.defaultTo(amount, 1);
    const mode = 'lab';
    const Kn = 18;
    const lab = converter(mode)(color);
    lab['l'] -= Kn * amount;
    return formatHex(converter(mode)(lab));
};

const brighten = function (color, amount = 1) {
    return darken(color, -amount);
};

export { brighten, darken };
