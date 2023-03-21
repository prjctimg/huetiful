
import chroma from 'chroma-js'
import _ from 'lodash'
/**
 * Takes an object of palette instrunctions and maps back the mutated color objects
 * @param {} steps[] Collection of values to map over
 * @param baseColor The color to generate the palette from.
 * @returns 
 */
var base = (steps = []) => (baseColor = 'blue') => {
    var $ = chroma
    var colorArray = $(baseColor).lch()
    var component = _.nth
    return _.map(steps, (step = 0) => ({
        mode: 'lch',
        l: component(colorArray, 0),
        c: component(colorArray, 1),
        h: component(colorArray, 2) + step
    }))

}

base = _.curry(base)

export default base

/* 
let analogous = [20, 60, 70, 40]

console.log(base(analogous)('green')) */


fd



