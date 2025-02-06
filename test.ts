// import { token } from './lib/utils.ts'

import {
	diverging,
	sortBy,
	filterBy,
	stats,
	colors,
} from "./lib/index.ts";
import {
	achromatic,
	family,
	mc,
	token,
} from "./lib/utils.ts";

const cols = colors("all", "300").concat(
	colors("all", "800"),
);

console.log(
	filterBy(cols, {
		factor: ["hue", "chroma"],
		ranges: {
			hue: [80, 200],
		},
	}),
);
