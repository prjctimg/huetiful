import { converter } from 'culori';
import _ from 'lodash';

/**
 * Gets the specifified channel on the color. Can be used to perform checks on channel values before applying color corrections
 * @param color Any recognizable color token
 * @param channel The channel to be retrieved */
const get =
    (mc) =>
        (color) => {
            const [mode, channel] = _.split(mc, '.');
            const src = converter(mode)(color);

            return channel ? _.get(src, channel) : Error(`unknown channel ${channel} in mode ${mode}`);
        };

export { get as getChannel };
