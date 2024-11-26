// import { token } from './lib/utils.ts'

import { diverging, sortBy, filterBy, stats, colors } from "./lib/index.ts";

console.log(stats(colors('all', '600'), {
    factor: ['chroma', 'hue']
}))


console.log(filterBy(colors('all', '500'), {
    factor: ['chroma', 'hue'], ranges: {
        hue: ['<100'], chroma: [20]
    }, colorspace: 'lch'
}))