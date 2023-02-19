import { nearest, differenceEuclidean } from '../culori.mjs'
import { named } from '../colors/named.mjs'

const names = Object.keys(named);


let nearestColors = nearest(names, differenceEuclidean());

let x = nearestColors('lch(50% 80 80)');




console.log(x)