import { mc, token } from "../lib/utils.ts";
import runner, { type Spec } from "./runner.ts";




const str = '#ffc300', arr = ['rgb', 0.4, 0.3, 0.1], obj = { r: 0.2, g: 0.4, b: 0.5, mode: 'rgb' }, fn_mc = (a: string, b: string) => mc(a)(b)
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
    description: "converts an array to a hex string",
    callback: token,
    params: [arr, { kind: 'str' }]
},
{
    description: "converts an array to an object",
    callback: token,
    params: [arr, { kind: 'obj' }]
},
{
    description: "converts an object to an array",
    callback: token,
    params: [obj, { kind: 'arr' }]
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
}
];


runner(specs)