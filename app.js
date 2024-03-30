import { fixupHueLonger, fixupHueShorter } from 'culori';
import {
  colorObjColl,
  max,
  min,
  or,
  setChannel,
  getChannel,
  brighten,
  darken
} from './src/index.js';
console.log(brighten('b2c3f1', 0.5));
console.log(darken('b2c3f1', 0.5));
