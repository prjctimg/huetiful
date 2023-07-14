
import { getChannel, getTemp, purify, rgb2num, setChannel } from '../../dist/huetiful.esm.mjs'


const color = {}
color.l = 50
color.c = 30
color.h = 80



console.log(getTemp('green'))
//console.log(purify(['slate']))
//console.log(setChannel('lab.l')(color, ''))
console.log(rgb2num('brown'))