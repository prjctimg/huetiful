import { formatHex8, interpolate, samples } from "../libs/culori.mjs";
import _ from 'lodash'

//Referential transparency is a must for concise function chaining.
//Returning unary functions




let grays = interpolate(['pink', 'azure'])


/* Right now our values are scaling linearly. Can we apply an easing to the interpolated channels?
How can we dial up this function to create more creative palettes ?
*/
const colorScales = (colors = []) =>
    (mode = 'lab') =>
        (n = 3,) =>
            samples(n)
                .map(grays)
                .map(formatHex8)




var blend = ['azure', 'pink']
console.log(colorScales(blend)('lch')(6))
