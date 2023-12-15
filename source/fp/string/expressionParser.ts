import { Color } from '../../types';

/**
 * Performs arithmetic operations on colors by passing the arithmetic operator from the value if it is a string. It requires the src variable to be declared in the global scope of the invoking func.
 * @param src The color object.
 * @param channel The channel to set.
 * @param value The value to apply.
 */
function expressionParser(src: Color, channel: string, value: string): number {
  // regExp to match arithmetic operator and the value
  const reOperator = /^(\*|\+|\-|\/)/;
  const reValue = /[0-9]*\.?[0-9]+/;

  // Storing the arithmetic sign and value
  const sign = reOperator.exec(value);
  const amt = reValue.exec(value);

  const cb = (amt: string) => parseFloat(amt);

  // Match an operator against the first truthy case and perform the relevant math operation
  switch (sign['0']) {
    case '+':
      src[channel] += +cb(amt['0']);
      break;
    case '-':
      src[channel] -= +cb(amt['0']);
      break;
    case '*':
      src[channel] *= +cb(amt['0']);
      break;
    case '/':
      src[channel] /= +cb(amt['0']);
      break;
    default:
      src[channel] = +cb(amt['0']);
  }
  // @ts-ignore
  return src;
}
export { expressionParser };
