// @ts-nocheck
import { formatHex8, interpolate, lerp } from '../libs/culori.mjs'
/**Interpolates  between two resultant interpolations. The function takes two sets of params and has 3 t control variables
 * @param c1 First array of colors to be initially interpolated
 * * @param t1 First control variable for the interpolation of colors in the first array
 * * @param c2 Second array of colors to be initially interpolated
 * * @param t2 Second control variable for the interpolation of colors in the second array
 * * @param mode Color space to perform the interpolation in. Default is LAB
 * * @param _t The third control variable the final color interpolation. Default is 1 
 */
export const bilerp = ([...c1], t1 = 1) =>
    ([...c2], t2 = 1) => (t3 = 1) =>
        (mode = 'lab', overrides = {}) => {

            let lerp1 = interpolate(c1, mode)(t1)
            let lerp2 = interpolate(c2, mode)(t2)

            return interpolate([lerp1, lerp2], mode, overrides)(t3)
        }

// Must apply an overrides object that determines the fine tuning of the interpolations


// Testing the output
let c1 = ['blue', 'yellow',]
let c2 = ['green', 'purple', 'pink']
console.log(formatHex8(bilerp(c1, 0.3)(c2, 0.4)('lch')(0.9)))


