import _ from 'lodash';
import chroma from 'chroma-js';
import { formatHex, lch } from '../culori.mjs';
import { adjustHue } from '../helpers/adjustHue.mjs';


/**
 * Takes a base color and returns a palette object with classic palette types and their corresponding hex values
 * @param baseColor
 * @returns palette{}
 */



const pallettes = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    splitComplimentary: [0, 150, 210],
    complimentary: [0, 180]
};

function paLetteGenerator(baseColor) {
    var _palette = {}
    _.map(pallettes, (value, key) => {
        _palette[key] = pallettes[key].map((step) => ({
            l: baseColor[0],
            c: baseColor[1],
            h: adjustHue(baseColor[2] + step)


        }))
    })
    _palette = _.forEach(_palette, (values, key) => {
        key = values.map(c => chroma.lch(c).hex())
    })
    return _palette
}


// Usage
let baseColor = [

    80,
    100,
    55
]

let f = paLetteGenerator(baseColor)


function lch2hex(lchPaletteObject) {


    _.map(lchPaletteObject, (value, index) => {
        return value.map(lchObj => chroma
            .lch(lchObj)
            .hex(lch))

        console.log(`value,index`)
    })

}
