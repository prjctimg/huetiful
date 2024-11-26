// @ts-nocheck:

import { expect } from "jsr:@std/expect";

export type Spec = {
	description?: string;

	matcher?: string;
	callback: unknown;
	params: unknown[];
};
export default function (specs: Spec[]) {
	for (const spec of specs)
		Deno.test(spec?.description || "Running test...", () => {
			expect(spec?.callback(...spec?.params)).toBeTruthy()
		});

}
