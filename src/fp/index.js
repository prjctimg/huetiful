/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef {import('../types.js').InterpolatorOptions} InterpolatorOptions
 * @typedef {import('../types.js').TailwindColorFamilies} TailwindColorFamilies
 */

import limits from '../maps/limits.js';

import {
	interpolatorSplineNatural,
	fixupHueShorter,
	interpolatorSplineBasisClosed,
	easingSmoothstep,
	interpolatorLinear
} from 'culori/fn';
import { mc } from '../mc.js';

var { keys, entries, values } = Object;

/**
 * @public
 *  Returns the first truthy value.
 * @param arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns The first truthy value
 */
function or(arg, def) {
	return arg || def;
}

/**
 * Helper func to return fact(s)
 * @param {any} t The factor either array string or undef
 * @param {*} z callback that takes a factor as its only argument
 *
 */
function wtf(t, z) {
	var p = {};
	// if factor is an array add each factor as a key to the object
	if (isArray(t)) {
		for (const k of values(t)) {
			p[k] = z(k);
		}
	} else if (typeof t === 'string') {
		// @ts-ignore
		p = z(t);
	} else if (typeof t == undefined) {
		for (const k of [
			'hue',
			'chroma',
			'lightness',
			'distance',
			'contrast',
			'luminance'
		]) {
			p[k] = z(k);
		}
	}

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
	const o = m.substring(m.length - 3);

	return (i && o.charAt(i)) || o;
}

function exprParser(c = {}, mc = '', w = '') {
	// regExp to match arithmetic operator and the value

	var [m, y, w, q] = [
		...mc.split('.'),
		// @ts-ignore
		/^(\*|\+|\-|\/)/.exec(w)['0'],
		// @ts-ignore
		/[0-9]*\.?[0-9]+/.exec(w)['0']
	];

	// @ts-ignore

	const g = (s) => parseFloat(s);

	// Match an operator against the first truthy case and perform the relevant math operation

	switch (w) {
		case '+':
			c[y] += +g(q);
			break;
		case '-':
			c[y] -= +g(q);
			break;
		case '*':
			c[y] *= +g(q);
			break;
		case '/':
			c[y] /= +g(q);
			break;
		// throw error alert
	}

	return c;
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
	var x, e, d;
	if (c === 'l') {
		x = /(j|l)/i;
		e = `The color space ${m} has no lightness channel.`;
	} else {
		x = /(s|c)/i;
		e = `The color space ${m} has no chroma/saturation channel.`;
	}

	d = x.exec(m)['0'];

	// @ts-ignore
	return x.test(m) ? (f && `${m}.${d}`) || d : Error(e);
}

function colorObj(a, b) {
	return (c) => {
		return { [a]: b(c), color: c };
	};
}

function customFindKey(u, v) {
	// If the color is achromatic return the string gray
	const k = keys(u);

	const o = k
		.filter((a) => {
			const t = customConcat(u[a]);

			const mn = min(...t);

			const mx = max(...t);
			// Capture the min and max values and see if the passed in color is within that range
			return inRange(v, mn, mx);
		})
		.toString();

	return o;
}

function customConcat(h) {
	const res = [];

	if (typeof h == 'object') {
		const k = keys(h);

		//@ts-ignore
		res.push(...k.map((v) => h[v]));
	}

	return res.flat(1);
}

function adjustHue(x) {
	return (x > 0 && (x += Math.ceil(-x / 360) * 360)) || x % 360;
}

function chnDiff(x, s) {
	return (y) => {
		const cb = (color) => mc(s)(color);
		if (cb(x) < cb(y)) {
			return cb(y) - cb(x);
		} else {
			return cb(x) - cb(y);
		}
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
	return !(x === y);
}

function inRange(n, s, e) {
	/* Built-in method references for those with the same name as other `lodash` methods. */

	return gte(n, Math.min(s, e)) && lt(n, Math.max(s, e));
}

function isInt(n) {
	const r = /^-?[0-9]+$/;
	return r.test(n.toString());
}

function norm(v, mc) {
	const [m, c] = mc.split('.');
	const [s, e] = limits[m][c];
	const r = inRange(v, s, e);

	if (!r) {
		if (lte(v, 1)) {
			v = e * v;
		} else {
			v = (lte(e, 100) && e * (v / 100)) || e * (v / e);
		}
	}
	return v;
}

function rand(mn, mx) {
	if (mn > mx) {
		var [mn, mx] = [mn, mx];
		mx = mn;
		mn = mx;
	} else {
		return Math.random() * (mx - mn) + mn;
	}
}

function floorCeil(n) {
	if (!isInt(n)) {
		const c = n.toString().split('.');
		const v = c[1];

		//If the decimal value is .4  and below it will be rounded down else it will be rounded up.
		const r = (o) => /^[0-4]$/.test(o.charAt(0));

		if (r(v)) {
			n = Math.floor(n);
		} else {
			n = Math.ceil(n);
		}
	}

	return n;
}

function customSort(o = 'asc', x = 'factor') {
	// a-b gives asc order & b-a gives desc order

	return (a, b) => {
		if (o === 'asc' || 'min') {
			return a[x] - b[x];
		} else if (o === 'desc' || 'max') {
			return b[x] - a[x];
		}
	};
}

function colorObjColl(a = 'factor', b) {
	var u = colorObj(a, b);
	/**
	 * @param collection The array or object of colors to iterate over. If an object is passed, its values are expected to be valid color tokens.
	 */
	return (collection) => {
		// Check if the collection is an array else treat it like a plain object
		// Convert object into a Map which remembers sorting order in a more predictable way

		return map(collection, u);
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
 * Iterates over any collection invoking `cb` on every element in the `collection`.
 * @param {Collection} u The collection to map over.
 * @param {(a)=>any} cb The callback function invoked per element in the collection. The callback is expected to be unary.
 * @returns {Collection}
 *
 */
function map(u, cb) {
	var o, p;
	p = u instanceof Map ? new Map() || (u instanceof Set && new Set()) : false;
	if (p) {
		for (const [a, b] of entries(u)) {
			u.set(a, cb(b));
		}
	} else if (isArray(u)) {
		o = new Array(u.length);
		for (const [a, b] of entries(u)) {
			o[a] = cb(b);
		}
	} else {
		for (const [a, b] of entries(u)) {
			o = {};
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

function reNum(s) {
	s = s.toString();
	var re = /[0-9]*\.?[0-9]+/;
	// @ts-ignore
	return (re.test(s) && Number(re.exec(s)['0'])) || undefined;
}

function reOp(s) {
	s = s.toString();
	var re = /^(>=|<=|<|>|={1,2}|!={0,2})/;

	// @ts-ignore
	return (re.test(s) && re.exec(s)['0']) || undefined;
}
function sortedColl(f = 'factor', cb, o = 'asc', obj = false) {
	return (c) => {
		var r = colorObjColl(f, cb)(c),
			u;

		// If the collection is not an Array  insert the sorted elements
		// Sort the array using our customSort helper function

		if (isArray(c)) {
			// @ts-ignore
			u = r.sort(customSort(o, f));

			return (obj === true && u) || u.map((w) => w['color']);
		} else {
			u = new Map();
			values(r)
				// @ts-ignore
				.sort(customSort(o, f))
				.map((v, z) => {
					var [k, v] = entries(c)[z];
					if (v === v) {
						u.set(k, v);
					}
				});

			if (obj === false) {
				entries(u).map((v) => u.set(v[0], v[1]['color']));
			}
		}
		return u;
	};
}

function filteredColl(f, cb) {
	return (c, s, e) => {
		let o;

		if (typeof s === 'number') {
			o = colorObjColl(
				f,
				cb
			)(c)
				// @ts-ignore
				.filter((j) => inRange(j[f], s, e))
				.map((j) => j['color']);

			// If string, split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
		} else if (typeof s === 'string') {
			//The patterns to match

			const v = reNum(s),
				w = reOp(s);

			if (w) {
				const mapFilter = (j) => {
					return (
						colorObjColl(
							f,
							cb
						)(c)
							// @ts-ignore
							.filter((l) => j(l[f], parseFloat(v.toString())))
							.map((l) => l['color'])
					);
				};
				// object with comparison symbols as keys
				var u = {
					'!=': neq,
					'==': eq,
					'>=': gte,
					'<=': lte,
					'>': gt,
					'<': lt,
					'===': eq,
					'!==': neq
				};
				o = mapFilter(u[w]);
			}
		}

		return o;
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

export {
	clamp,
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
	wtf
};
