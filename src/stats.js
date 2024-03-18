/**
 * @license
 * stats.js - Functions for computing statistical data from collections of colors.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { differenceHyab, averageNumber, averageAngle } from 'culori/fn';
import {
  getLuminance,
  getChannel,
  getContrast,
  mlchn,
  mcchn,
  chnDiff,
  sortedColl,
  or
} from './index.js';

function lightnessPredicate(cspace) {
  return getChannel(`${mlchn(cspace)}`);
}

function contrastPredicate(color) {
  return (against) => getContrast(color, against);
}

function huePredicate(cspace) {
  return (c) => getChannel(`${or(cspace, 'jch')}.h`)(c);
}
function chromaPredicate(colorspace) {
  return (color) => getChannel(mcchn(colorspace))(color);
}

// the baseFunc could be channelDiff
function getFarthestChromaFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'saturation',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}
function getFarthestHueFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'hue',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}
function getFarthestLightnessFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'lightness',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}
function getNearestChromaFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'saturation',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}
function getNearestHueFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'hue',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}
function getNearestLightnessFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'lightness',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}
function getFarthestLuminanceFrom(collection, against, colorObj) {
  var cb = (a) => (b) => Math.abs(getLuminance(a) - getLuminance(b));
  return baseFunc('luminance', collection, cb(against), 'desc', colorObj);
}
function getNearestLuminanceFrom(collection, against, colorObj) {
  var cb = (a) => (b) => Math.abs(getLuminance(a) - getLuminance(b));
  return baseFunc('luminance', collection, cb(against), 'asc', colorObj);
}
function getMeanChroma(collection = [], colorspace = 'lch') {
  var cb = getChannel(mcchn(colorspace));
  return averageNumber(Object.values(collection).map(cb));
}
function getMeanLightness(collection = [], colorspace = 'lch') {
  var cb = getChannel(mlchn(colorspace));
  return averageNumber(Object.values(collection).map(cb));
}
function getMeanHue(collection, colorspace = 'lch') {
  var cb = (cb = getChannel(`${colorspace}.h`));
  return averageAngle(Object.values(collection).map(cb));
}
function getMeanDistance(collection, against = '#fff') {
  var cb = (x) => (y) => differenceHyab()(x, y);
  return averageNumber(Object.values(collection).map(cb(against)));
}
function getMeanContrast(collection, against = '#fff') {
  var cb = (x) => (y) => getContrast(x, y);

  return averageNumber(Object.values(collection).map(cb(against)));
}
function getMeanLuminance(collection) {
  return averageNumber(Object.values(collection).map(getLuminance));
}

// The baseFunc for getting specifified factor extremums
function baseFunc(fctr, collection, cb, order, colorObj) {
  const result = sortedColl(
    fctr,
    cb,
    order,
    true
  )(collection).filter((el) => el[fctr] !== undefined);

  return (colorObj && result[0]) || result[0][fctr];
}

function getNearestContrast(collection, against, colorObj) {
  return baseFunc(
    'contrast',
    collection,
    contrastPredicate(against),
    'asc',
    colorObj
  );
}

function getFarthestContrast(collection, against, colorObj) {
  return baseFunc(
    'contrast',
    collection,
    contrastPredicate(against),
    'desc',
    colorObj
  );
}

function getNearestChroma(collection, colorspace, colorObj = false) {
  return baseFunc(
    'saturation',
    collection,
    chromaPredicate(colorspace),
    'asc',
    colorObj
  );
}

function getFarthestChroma(collection, colorspace, colorObj = false) {
  return baseFunc(
    'saturation',
    collection,
    chromaPredicate(colorspace),
    'desc',
    colorObj
  );
}
function getNearestLightness(collection = [], colorspace, colorObj = false) {
  const fctr = 'lightness';
  return baseFunc(
    fctr,
    collection,
    lightnessPredicate(colorspace),
    'asc',
    colorObj
  );
}

function getFarthestLightness(collection, colorspace, colorObj = false) {
  const fctr = 'lightness';
  return baseFunc(
    fctr,
    collection,
    lightnessPredicate(colorspace),
    'desc',
    colorObj
  );
}

function getNearestHue(collection, colorspace, colorObj = false) {
  return baseFunc('hue', collection, huePredicate(colorspace), 'asc', colorObj);
}
function getFarthestHue(collection, colorspace, colorObj = false) {
  return baseFunc(
    'hue',
    collection,
    huePredicate(colorspace),
    'desc',
    colorObj
  );
}

export {
  getFarthestChroma,
  getNearestChroma,
  getFarthestContrast,
  getNearestContrast,
  getFarthestHue,
  getNearestHue,
  getFarthestChromaFrom,
  getFarthestHueFrom,
  getFarthestLightnessFrom,
  getNearestChromaFrom,
  getNearestHueFrom,
  getNearestLightnessFrom,
  getFarthestLuminanceFrom,
  getNearestLuminanceFrom,
  getMeanChroma,
  getMeanHue,
  getMeanDistance,
  getMeanContrast,
  getMeanLuminance,
  getMeanLightness,
  getFarthestLightness,
  getNearestLightness
};
