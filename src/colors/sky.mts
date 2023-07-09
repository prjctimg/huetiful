import _ from 'lodash';
import tailwindColors from '../color-maps/tailwindColors.mjs';

/**Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,
 * @param {Number | String} val The tone value of the shade. Values are in incrementals of 100. Both numeric (100) and its string equivalent ('100') are valid.
 * @returns {Array|String}A hex string value or array of hex strings.
 */
export default function sky(val: keyof ScaleValues): string | string[] | ReferenceError {
    let sky = tailwindColors.sky;
    return _.isUndefined(val)
        ? _.map(sky)
        : _.has(sky, val)
        ? sky[val]
        : ReferenceError(
              `${val} is not a recognized token. Tokens for accessing a single color value are in increments of 100. Example purple(300)`
          );
}
