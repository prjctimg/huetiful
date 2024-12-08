import { mc, token } from "../lib/utils.ts";
import runner, { type Spec } from "./runner.ts";




const str = '#ffc3003f', arr = ['rgb', 0.4, 0.3, 0.1, 0.7], obj = { r: 0.2, g: 0.4, b: 0.5, mode: 'rgb' }, fn_mc = (a: string, b: string) => mc(a)(b)
const specs: Spec[] = [{
    description: "converts an object to a number",
    callback: token,
    params: [obj, { kind: 'num', }]
},
{
    description: "converts a hex string to an array of channel values",
    callback: token,
    params: [str, { kind: 'arr', targetMode: 'lab' }]
},
{
    description: "converts an array to a 6 character hex string (without the alpha channel). ",
    callback: token,
    params: [arr, { kind: 'str', omitAlpha: true }]
},
{
    description: "converts an array to an object without alpha and mode properties",
    callback: token,
    params: [arr, { kind: 'obj', omitMode: true, omitAlpha: true }]
},
{
    description: "converts an object to an array of channel values with no mode string.",
    callback: token,
    params: [obj, { kind: 'arr', omitMode: true }]
},
{
    description: "converts an array to a number",
    params: [arr, { kind: 'num' }],
    callback: token
},


// modeChannel tests
{
    description: 'gets the channel value of a color object',
    callback: fn_mc,
    params: ['lch.l', obj]
}, {
    description: 'sets the channel value of a color object',
    callback: fn_mc,
    params: ['lch.h', obj, '*0.2']
}
];


runner(specs)