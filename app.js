import { getLuminance, setLuminance } from 'huetiful-js';
import { color2hex } from './lib/converters.esm.mjs';

console.log(getLuminance('#ffc300'));
// 0.6029021347719574

let color = color2hex(setLuminance('#ffc300', 0.7));
// #ffe180

console.log(getLuminance(color));
// 0.7666894015464744
