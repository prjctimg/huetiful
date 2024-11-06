// @ts-nocheck:

import { expect, test } from "bun:test";

export type Spec = {
	description?: string;

	matcher?: string;
	callback: unknown;
	params: unknown[];
	result: unknown;
};
export default function (specs: Spec[]) {
	for (const spec of specs) {
		test(spec?.description || "Running test...", () => {
			expect(spec.callback(...spec.params))[
				spec?.matcher || "toEqual"
			](spec.result);
		});
	}
}
