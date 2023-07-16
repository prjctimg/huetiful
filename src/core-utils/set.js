// ported from chroma-js Color.set

// @ts-ignore
import _ from 'lodash';
import { converter } from 'culori';
/**Sets the value for a single specifified channel in a color object.
 *
 * @param  color Any recognizable color token.
 * @param  modeChannel The mode and channel to work with. For example 'rgb.b'.
 * @returns color The mutated color.
 */



const set = mc => (color, value) => {


    const [mode, channel] = mc.split('.');
    const src = converter(mode)(color);

    if (channel) {
        if (_.isString(value)) {
            switch (value.charAt(0)) {
                case '+':
                    src[channel] += +value;
                    break;
                case '-':
                    src[channel] -= +value;
                    break;
                case '*':
                    src[channel] *= _.slice(+value, 1);
                    break;
                case '/':
                    src[channel] /= _.slice(+value, 1);
                    break;
                default:
                    src[channel] = +value;
            }
        } else if (_.isNumber(value)) {
            src[channel] = value;
        } else {
            throw new Error(`unsupported value for setChannel`);
        }

        return src;
    } else {
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
    }
};

export { set as setChannel };
