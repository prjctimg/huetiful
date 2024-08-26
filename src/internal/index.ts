// @ts-nocheck
/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef {import('../types.js').InterpolatorOptions} InterpolatorOptions
 * @typedef {import('../types.js').TailwindColorFamilies} TailwindColorFamilies
 */

import { limits } from '../constants/index.js';

import {
	interpolatorSplineNatural,
	fixupHueShorter,
	interpolatorSplineBasisClosed,
	easingSmoothstep,
	interpolatorLinear
} from 'culori/fn';
import { mc } from '../utils/index.js';

let { keys, entries, values } = Object;

/**
 *
 *  Returns the first truthy value.
 * @param  arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns  The first truthy value
 */
function or(arg, def) {
	return arg || def;
}

/**
 * Logical AND expression for `a` and `b`.

 */
function and(a, b) {
	return a && b;
}

/**
 * Helper func to return fact(s)
 * @param {any} t The factor either array string or undef
 * @param {*} z callback that takes a factor as its only argument
 * @param y = Optional array of factor keys
 * @returns {Collection}
 */
function factorIterator(
	t,
	z,
	y = ['hue', 'chroma', 'lightness', 'distance', 'contrast', 'luminance']
) {
	let p = {};

	if (isArray(t)) {
		for (const k of values(t)) {
			p[k] = z(k);
		}
	} else if (eq(typeof t, 'string')) {
		p = z(t);
	} else {
		for (const k of y) {
			p[k] = z(k);
		}
	}
	// if factor is an array add each factor as a key to the object
	return p;
}

let [ci, ef, hf, hi, li] = [
	interpolatorSplineNatural,
	easingSmoothstep,
	fixupHueShorter,
	interpolatorSplineBasisClosed,
	interpolatorLinear
];

/**
 * Defaults for the interpolator.
 *
 * ef => easing function
 *
 * ci => chroma interpolator
 *
 * hf => hue fixup method
 *
 * hi => hue interpolator
 *
 * li => lightness interpolator
 */
const pltrconfg = {
	ef,
	ci,
	hf,
	hi,
	li
};

function gmchn(m = '', i) {
	m = m.replace(/\d|ok/g, '');

	return or(and(i, m.charAt(i)), m.split(''));
}

function mult(x, y) {
	return x * y;
}

function give(x, y) {
	return x / y;
}

function add(x, y) {
	return x + y;
}

function take(x, y) {
	return x - y;
}

function exprParser(a, b) {
	// regExp to match arithmetic operator and the value

	// Create operator map
	let u = {
		'!=': neq,
		'==': eq,
		'>=': gte,
		'<=': lte,
		'>': gt,
		'<': lt,
		'===': eq,
		'!==': neq,
		'!': not,
		'/': give,
		'*': mult,
		'+': add,
		'-': take
	};

	return and(eq(typeof b, 'string'), u[reOp(b)](a, reNum(b)));

	// @ts-ignore
}

/**
 * Gets the chroma or lightness channel from the specified `m` or colorspace.
 * @param {'c'|'l' | string} c The channel key to get
 * @param {string} m The colorspace
 * @param {boolean} f Whether to return full mode channel string or key only
 * @returns {string}
 */
function mcchn(c, m, f = true) {
	// Matches any string with c or s
	m = or(m, 'lch');
	let x, e, d;

	if (eq(c, 'l')) {
		x = /(j|l)/i;
		e = `The color space ${m} has no lightness channel.`;
	} else {
		x = /(s|c)/i;
		e = `The color space ${m} has no chroma/saturation channel.`;
	}

	d = x.exec(m)['0'];

	// @ts-ignore
	return x.test(m) ? or(and(f, `${m}.${d}`), d) : Error(e);
}

function colorObj(a, b) {
	return (c) => {
		return { [a]: b(c), color: c };
	};
}

function customFindKey(u, v) {
	// If the color is achromatic return the string gray
	return keys(u)
		.filter((a) => {
			const t = customConcat(u[a]);

			const [mn, mx] = [min(...t), max(...t)];

			// Capture the min and max values and see if the passed in color is within that range
			return inRange(v, mn, mx);
		})
		.toString();
}

function customConcat(h = {}) {
	return and(
		eq(typeof h, 'object'),
		(() => {
			let res = [];
			const k = keys(h);

			//@ts-ignore

			for (const g of k) {
				res.push(...h[g]);
			}

			return res.flat(1);
		})()
	);
}

function adjustHue(val) {
	if (val < 0) val += Math.ceil(-val / 360) * 360;

	return val % 360;
	// return or(and(lt(x, 0), (x += Math.ceil(mult(give(-x, 360)), 360))), x % 360);
}

function chnDiff(x, s) {
	return (y) => {
		const cb = (color) => mc(s)(color);

		return or(and(lt(cb(x), cb(y)), take(cb(y), cb(x))), take(cb(x), cb(y)));
	};
}

// Comparison operators

function gt(x, y) {
	return x > y;
}

function lt(x, y) {
	return x < y;
}

function gte(x, y) {
	return x >= y;
}

function lte(x, y) {
	return x <= y;
}

function eq(x, y) {
	return x === y;
}

function neq(x, y) {
	return not(eq(x, y));
}

function not(x) {
	return !x;
}
function inRange(n, s, e) {
	/* Built-in method references for those with the same name as other `lodash` methods. */

	return and(gte(n, Math.min(s, e)), lt(n, Math.max(s, e)));
}

function isInt(n) {
	return /^-?[0-9]+$/.test(n.toString());
}

function norm(v, mc = '') {
	const channel = mc.split('.'),
		[start, end] = limits[channel[0]][channel[1]];

	return and(
		not(inRange(v, start, end)),
		or(
			and(lte(v, 1), (v = mult(end, v))),
			or(and(lte(end, 100), mult(end, give(v, 100))), mult(end, give(v, end)))
		)
	);
}

function rand(mn, mx) {
	return Math.random() * Math.abs(mx - mn + mn);
}

function floorCeil(n) {
	return and(
		not(isInt(n)),
		or(
			and(
				eq(/^[0-4]$/.test(n.toString().split('.')[1].charAt(0)), true),
				Math.floor(n)
			),
			Math.ceil(n)
		)
	);

	//If the decimal value is .4  and below it will be rounded down else it will be rounded up.
}

function customSort(o = 'asc', x = 'factor') {
	// a-b gives asc order & b-a gives desc order

	return (a, b) => {
		return or(
			and(eq(o, or('asc', 'min')), a[x] - b[x]),
			and(eq(o, or('desc', 'max')), b[x] - a[x])
		);
	};
}

function colorObjColl(a = 'factor', b) {
	let u = colorObj(a, b);
	/**
	 * @param collection The array or object of colors to iterate over. If an object is passed, its values are expected to be valid color tokens.
	 */
	return (z) => {
		// Check if the collection is an array else treat it like a plain object
		// Convert object into a Map which remembers sorting order in a more predictable way

		return map(z, u);
	};
}

/**
 * Checks if value is an array.
 * @param {any} x The value to check.
 * @returns {boolean}
 */
function isArray(x) {
	return Array.isArray(x);
}

/**
 * Checks if the value is an instance of a `Map`.
 * @param {any} x The value to check.
 * @returns {boolean}
 */
function isMap(x) {
	return x instanceof Map;
}

/**
 * Checks if the value is an instance of a `Set`.
 * @param {any} x The value to check.
 * @returns {boolean}
 */
function isSet(x) {
	return x instanceof Set;
}

/**
 * Iterates over any collection invoking `cb` on every element in the `collection`.
 * @param {Collection} u The collection to map over.
 * @param {(a)=>any} cb The callback function invoked per element in the collection. The callback is expected to be unary.
 * @returns {Collection}
 *
 */
function map(u, cb) {
	let o, p;
	p = or(or(and(isMap(u), new Map()), and(isSet(u), new Set())), false);
	if (p) {
		for (const [a, b] of entries(u)) {
			p.set(a, cb(b));
		}
		o = p;
	} else if (isArray(u)) {
		o = new Array(u.length);
		for (const [a, b] of entries(u)) {
			o[a] = cb(b);
		}
	} else {
		o = {};
		for (const [a, b] of entries(u)) {
			o[a] = cb(b);
		}
	}
	// @ts-ignore
	return o;
}

function min(x) {
	return x.reduce((a, b) => Math.min(a, b), Infinity);
}

function max(x) {
	return x.reduce((a, b) => Math.max(a, b), -Infinity);
}

function reNum(s = '') {
	s = s.toString();
	let re = /[0-9]*\.?[0-9]+/;
	// @ts-ignore
	return or(and(re.test(s), Number(re.exec(s)['0'])), undefined);
}

function reOp(s) {
	s = s.toString();
	let re = /^(\*|\+|\-|\/|>=|<=|<|>|={1,2}|!={0,2})/;

	// @ts-ignore
	return or(and(re.test(s), re.exec(s)['0']), undefined);
}
function sortedColl(f = 'factor', cb, o = 'asc', obj = false) {
	return (c) => {
		let r = colorObjColl(f, cb)(c),
			u;

		// If the collection is not an Array  insert the sorted elements
		// Sort the array using our customSort helper function
		return or(
			and(
				isArray(c),
				(() => {
					// @ts-ignore
					u = r.sort(customSort(o, f));

					return or(
						and(eq(obj, true), u),
						u.map((w) => w['color'])
					);
				})()
			),
			(() => {
				u = new Map();
				let t = values(r)
					// @ts-ignore
					.sort(customSort(o, f));

				for (const [z, v] of entries(t)) {
					u.set(z, v);
				}

				if (eq(obj, false)) {
					for (const [z, v] of entries(u)) {
						u.set(z, v['color']);
					}
				}
				return u;
			})()
		);
	};
}

function filteredColl(f, cb) {
	return (c, s, e) => {
		return or(
			and(
				eq((typeof s, 'number')),
				(() => {
					return (
						colorObjColl(
							f,
							cb
						)(c)
							// @ts-ignore
							.filter((j) => inRange(j[f], s, e))
							.map((j) => j['color'])
					);

					// If string, split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
				})()
			),

			(() => {
				//The patterns to match

				const v = reNum(s),
					w = reOp(s);

				return and(
					w,
					colorObjColl(
						f,
						cb
					)(c)
						// @ts-ignore
						.filter((l) => {
							return {
								'!=': neq,
								'==': eq,
								'>=': gte,
								'<=': lte,
								'>': gt,
								'<': lt,
								'===': eq,
								'!==': neq,
								'!': not,
								'/': give,
								'*': mult,
								'+': add,
								'-': take
							}[w](l[f], parseFloat(v.toString()));
						})
						.map((l) => l['color'])
				);

				// object with comparison symbols as keys
			})()
		);
	};
}

function clamp(v, mn = -Infinity, mx = Infinity) {
	if (typeof v === 'number') {
		if (gt(v, mx)) {
			return mx;
		} else if (lt(v, mn)) {
			return mn;
		} else {
			return v;
		}
	} else {
		throw Error(`${v} is not a number`);
	}
}

/**
 * Parses the colorspace of the passed in color token. Meant for arrays and color objects.
 * @param {*} c The color token
 * @returns {import('../types.js').Colorspaces}
 */
function getSrcMode(c) {
	return or(
		or(and(and(isArray(c), neq(typeof c[0], 'number')), c[0]), c?.mode),
		'rgb'
	);
}

function isValidArgs(argsList, minArgs = 1) {
	const len = argsList?.length;

	if (gte(len, minArgs)) {
		return true;
	} else {
		throw new Error(
			`Color token collection cannot have a length smaller than 1 or be of type ${typeof argsList}`
		);
	}
}

export {
	isValidArgs,
	map,
	clamp,
	not,
	getSrcMode,
	exprParser,
	mcchn,
	min,
	max,
	customSort,
	colorObjColl,
	sortedColl,
	filteredColl,
	customFindKey,
	colorObj,
	customConcat,
	inRange,
	rand,
	isInt,
	floorCeil,
	adjustHue,
	chnDiff,
	lt,
	neq,
	gt,
	gte,
	lte,
	eq,
	norm,
	or,
	gmchn,
	pltrconfg,
	isArray,
	reOp,
	reNum,
	entries,
	values,
	keys,
	factorIterator,
	and,
	give,
	add,
	take
};
