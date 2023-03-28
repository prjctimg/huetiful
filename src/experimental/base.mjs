
import chroma from 'chroma-js'
import _ from 'lodash'
/**
 * Takes an object of palette instrunctions and maps back the mutated color objects
 * @param {} scheme[] Collection of values to map over
 * @param baseColor The color to generate the palette from.
 * @returns 
 */
export var base = (scheme) => (baseColor = 'blue') => {

    scheme = {
        analogous: [0, 180, 360],
        triadic: [0, 120, 240]
        ,
        tetradic: [0, 90, 180, 270], complementary: [0, 180],
        splitComplementary: [0, 150, 210]
    }


    var $ = chroma
    var colorArray = $(baseColor).lch()
    var component = _.nth



    return _.forEach(scheme, (arr) => {

        return _.map(arr, (step) => ({
            mode: 'lch',
            l: component(colorArray, 0),
            c: component(colorArray, 1),
            h: component(colorArray, 2) + step
        }))
    }
    )
}




/* 
let analogous = [20, 60, 70, 40]

console.log(base(analogous)('green')) */





