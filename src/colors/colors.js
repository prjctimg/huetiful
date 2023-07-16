import _, { get } from 'lodash';
import tailwindColors from '../color-maps/tailwindColors.js';


export default function colors(hue, val) {
    // Store the TailwindCSS color map
    let defaultHue = 'all';

    // First do an AND check on hue and val params. If true return the hue at the specified value.
    // If only the hue is defined return the whole array of hex codes for that color.
    // If only the value is defined return that color value for every hue.
    //Else throw a ReferenceError
    return _.isEqual(hue, defaultHue)
        ? _.map(tailwindColors, (hueType) => _.get(hueType, [val || '500']))
        : hue && val
            ? _.get(tailwindColors[hue], val)
            : hue && _.isUndefined(val)
                ? _.values(tailwindColors[hue])
                : _.isUndefined(hue) && _.isUndefined(val)
                    ? _.forEach(tailwindColors)
                    : ReferenceError(
                        `${val} is not a recognized token. Tokens for accessing a single color value are in increments of 100. Example purple(300)`
                    );
}
