// @ts-nocheck
import 'culori';
import * as funcs from '../src/index.js';

describe('Checks if a color is achromatic or not', function () {
	it(`Returns boolean values`, function () {
		expect(['blue', 'black', 'gray'].map(funcs.achromatic)).toBe([
			false,
			false,
			true
		]);
	});
});
