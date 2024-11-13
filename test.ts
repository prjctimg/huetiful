import { token } from './lib/utils.ts'

console.log(token({ l: 5, c: 45, h: 87, mode: 'lch' }, { kind: 'arr', omitAlpha: false }))