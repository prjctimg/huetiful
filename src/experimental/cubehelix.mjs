import chroma from 'chroma-js'



var $ = chroma
let x = $.cubehelix().start(150).rotations(-2.5).gamma(0.7).lightness([0.2, 0.85]).scale().colors(13)

console.log(x)



