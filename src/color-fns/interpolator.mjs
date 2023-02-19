// LAB interpolator function with custom interpolation params
import { formatHex8, interpolate, interpolatorSplineBasis } from '../libs/culori.mjs'


// We can apply custom interpolation methods per channel


let bluered = interpolate(['white', 'black'])


console.log(
    formatHex8(bluered(0.5))
)

