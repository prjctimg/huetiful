import _iterator from './helpers/iterator.js';
import * as helpers from '../src/helpers.js';
import { getChannel } from '../src/index.js';

describe(`This test suite is for the helper functions`, () => {
  var data = {};

  it(`Expects the output to be a sorted Map`, () => {
    expect(
      helpers.sortedColl(
        'hue',
        getChannel('lch.h')
      )({ green: 'green', cyan: 'cyan', yellow: 'yellow' })
    ).toBeInstanceOf(Map);
  });

  it(`Expects the type of output of colorObjColl to be a Map when collection is an object`, () => {
    expect(
      helpers.colorObjColl()({ green: 'green', cyan: 'cyan', yellow: 'yellow' })
    ).toBeInstanceOf(Map);
  });

  it(`Expects the type of output of colorObjColl to be an Array`, () => {
    expect(helpers.colorObjColl()(['green', 'cyan', 'yellow'])).toBeInstanceOf(
      Array
    );
  });

  // _iterator(helpers, data);
});
