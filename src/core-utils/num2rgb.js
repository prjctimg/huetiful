import _ from 'lodash';

// If the value is a floating point then we treat the decimal value as the opacity of the color.

// If the value passedin is a float then the decimal is treated as opacity
// The outputn is rounded up when you pass in an integer
const num2rgb = (num) => {
    if (_.isInteger(num) && _.gte(num, 0) && _.lte(num, 0xffffff)) {
        const r = num >> 16;
        const g = (num >> 8) & 0xff;
        const b = num & 0xff;
        return _.fromPairs([
            ['r', r],
            ['g', g],
            ['b', b],
            ['alpha', 1]
        ]);
    }
    throw new Error('unknown num color: ' + num);
};


export { num2rgb }