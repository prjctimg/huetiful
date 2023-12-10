//@ts-nocheck
import { Factor, Order } from '../../paramTypes';

/**
 * @description Helper function for native sorting method for arrays.
 * @param factor The property to query.
 * @param order Either ascending or descending.
 * @returns A sorted array.
 */
export const customSort = (order: Order, factor?: Factor) => {
  //  Special thanks to deechris27 on youtube
  // a-b gives asc order & b-a gives desc order
  factor = factor || 'factor';
  return (a, b) => {
    if (order === 'asc') {
      return a[factor] - b[factor];
    } else if (order === 'desc') {
      return b[factor] - a[factor];
    }
  };
};
