// Earthtone is a palette rule that tries generate balanced palettes by taking a baseColor andthen generating a a palette against a basePalette

import { base } from './base.mjs'

import _ from 'lodash'
import chroma from 'chroma-js'


var earthTones = (baseColor) => {



    // The base colors for generating earthtones
    const basePalette = ['#635147', '#882d17', '#cc7722', '#a52a2a']


    // For each color (referred to as baseColor from now on) in basePalette pass it to base() and then map the paletteType hue values to the hue channel of the baseColor
    _.map(basePalette, value => base(analogous)(value))

    _.map(basePalette, (value) => {
        chroma(value).lch()
    })



    return basePalette

}

console.log(earthTones())