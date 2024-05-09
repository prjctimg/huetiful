export type ColorToken = import('../types.js').Collection;
export type Collection = import('../types.js').Collection;
export type InterpolatorOptions = import('../types.js').InterpolatorOptions;
export type TailwindColorFamilies = import('../types.js').TailwindColorFamilies;
export function clamp(v: any, mn?: number, mx?: number): number;
export function exprParser(c?: {}, mc?: string, w?: string): {};
export function mlchn(m: any): string;
export function mcchn(m: any): string;
export function min(x: any): any;
export function max(x: any): any;
export function customSort(o?: string, x?: string): (a: any, b: any) => number;
export function colorObjColl(a: string, b: any): (collection: any) => any;
export function sortedColl(f: string, cb: any, o?: string, obj?: boolean): (c: any) => any;
export function filteredColl(f: any, cb: any): (c: any, s: any, e: any) => any;
export function customFindKey(u: any, v: any): string;
export function colorObj(a: any, b: any): (c: any) => {
    [x: number]: any;
    color: any;
};
export function customConcat(h: any): any[];
export function inRange(n: any, s: any, e: any): boolean;
export function rand(mn: any, mx: any): any;
export function isInt(n: any): boolean;
export function floorCeil(n: any): any;
export function adjustHue(x: any): any;
export function chnDiff(x: any, mc: any): (y: any) => number;
export function lt(x: any, y: any): boolean;
export function neq(x: any, y: any): boolean;
export function gt(x: any, y: any): boolean;
export function gte(x: any, y: any): boolean;
export function lte(x: any, y: any): boolean;
export function eq(x: any, y: any): boolean;
export function norm(v: any, mc: any): any;
/**
 * @public
 *  Returns the first truthy value.
 * @param arg The value to check
 * @param def The value to cast if arg is falsy
 * @returns The first truthy value
 */
export function or(arg: any, def: any): any;
export function gmchn(m: any, i: any): any;
export namespace pltrconfg {
    export { ef };
    export { ci };
    export { hf };
    export { hi };
    export { li };
}
/**
 * Checks if value is an array.
 * @param {any} x The value to check.
 * @returns {boolean}
 */
export function isArray(x: any): boolean;
export function reOp(s: any): string;
export function reNum(s: any): number;
export var entries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
};
export var values: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};
export var keys: {
    (o: object): string[];
    (o: {}): string[];
};
declare let ef: typeof easingSmoothstep;
declare let ci: import("culori/src/interpolate/Interpolator.js").Interpolator;
declare let hf: typeof fixupHueShorter;
declare let hi: import("culori/src/interpolate/Interpolator.js").Interpolator;
declare let li: (arr: number[]) => (t: number) => number;
import { easingSmoothstep } from 'culori/fn';
import { fixupHueShorter } from 'culori/fn';
export {};
