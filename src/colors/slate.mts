import _ from 'lodash';
import tailwindColors from '../color-maps/tailwindColors.mjs';

/**Wrapper function that returns Tailwind color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade tone.
 * @param {Number | String} val The tone value of the shade. Values are in incrementals of 100. Both numeric ( numeric1(00)) and its string equivalent (('100)') are valid.
 * @returns {Array|String} A hex string value or array of hex strings.
 * @function slate
 */
export default function slate(val: keyof ScaleValues): string | string[] | ReferenceError {
    let slate = tailwindColors.indigo;
    return _.isUndefined(val)
        ? _.map(slate)
        : _.has(slate, val)
        ? slate[val]
        : ReferenceError(
              `${val} is not a recognized token. Tokens for accessing a single color value are in increments of 100. Example purple(300)`
          );
}
