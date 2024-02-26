import { lstatSync } from 'node:fs';

console.log(lstatSync('./README.md'));
