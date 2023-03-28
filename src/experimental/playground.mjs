import { classicPalettes } from '../color-fns/classicPalettes.mjs';
import hueShift from "../color-fns/hueShift.mjs";
import _ from 'lodash'

// Combining classic palettes witjh the hueShift function

let palettes = classicPalettes()

// I want to compose a flow of data while pass params at the end

const d = _.forEach(palettes, palette => _.map(hueShift(palette)))

console.log(d)