// @ts-nocheck
import { Factor, Color, callback } from '../../paramTypes';
import { gt, gte, lt, lte } from '../number/comparison';
import { inRange } from '../number/inRange';
import { colorObjArr } from './colorObjArr';

/**
 * @description Filters an array according to the value of a color's queried factor
 * @param factor The property to query and use as filtering criteria
 * @param cb The function to use for comparison
 * @returns The filtered array
 */
const filteredArr =
  (factor: Factor, cb?: callback) =>
  (colors: Color[], start: number | string, end: number): Color[] => {
    let result: Color[];

    if (typeof start === 'number') {
      result = colorObjArr(
        factor,
        cb
      )(colors)
        .filter((color) => inRange(color[factor], start, end))
        .map((color) => color['name']);

      return result;

      // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (typeof start === 'string') {
      //The pattern to match
      const reOperator = /^(>=|<=|<|>)/;

      const value = /[0-9]*\.?[0-9]+/;

      // Array
      const val = value.exec(start),
        op = reOperator.exec(start);

      const mapFilter = (test: (x: number, y: number) => boolean): Color[] => {
        return colorObjArr(
          factor,
          cb
        )(colors)
          .filter((el) => test(el[factor], parseFloat(val['0'])))
          .map((el) => el['name']);
      };
      switch (op['0']) {
        case '<':
          result = mapFilter(lt);

          break;
        case '>':
          result = mapFilter(gt);
          break;
        case '<=':
          result = mapFilter(lte);
          break;
        case '>=':
          result = mapFilter(gte);
          break;
      }
    }
    return result;
  };

export { filteredArr };
