// import { token } from './lib/utils.ts'

import { diverging, sortBy, filterBy, stats, colors } from "./lib/index.ts";

// console.log(stats(colors('all', '600'), {
//     factor: ['chroma', 'hue'], colorspace: 'lch'
// }))


// console.info(filterBy(colors('all', '500'), {
//     factor: ['chroma', 'hue'], ranges: {
//         hue: ['<100'], chroma: [20]
//     }, colorspace: 'lch'
// }))


console.info(sortBy(['purple', 'blue'], { relative: true, factor: ['chroma', 'hue'] }))

