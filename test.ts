import {
	stats,
	colors,
	distribute,
} from "./lib/index.ts";

const cols = colors("all", "600");

// console.log(stats(cols));
console.log(
	distribute(cols, {
		factor: ["hue"],
		extremum: "min",
	}),
);
