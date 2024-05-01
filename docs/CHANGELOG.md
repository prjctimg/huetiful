# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.3.0](https://github.com/xml-wizard/huetiful/compare/v2.2.0...v2.3.0) (2024-04-08)


### Features

* fixed icon not rendering ([54c66d6](https://github.com/xml-wizard/huetiful/commit/54c66d6430b3b981e41f8228edbb71a56c66165f))

## [2.2.0](https://github.com/xml-wizard/huetiful/compare/v2.1.0...v2.2.0) (2024-03-26)


### Features

* added distribution function ([9432c30](https://github.com/xml-wizard/huetiful/commits/9432c300618f412b0f7d04727005a70f0b1fff36))


### Documentation changes

* moved docs to generators.js from declaration file ([a994e94](https://github.com/xml-wizard/huetiful/commits/a994e9418588a767bb282bc2f6ea0900e0d4948c))


### Bug fixes

* fixed base distribution function to handle overrides with defaults ([f8c7c7c](https://github.com/xml-wizard/huetiful/commits/f8c7c7cd951bbd107fae2e686039edc40c672b45))
* fixed type errors in generators ([fce44cb](https://github.com/xml-wizard/huetiful/commits/fce44cbbe004e2cbfada167a32ad1292f7128585))

## [2.2.0](https://github.com/xml-wizard/huetiful/compare/v2.1.1...v2.2.0) (2024-03-28)


### Features

* added release-please-npm.yml workflow to publish when a new release is merged ([fce329a](https://github.com/xml-wizard/huetiful/commit/fce329a84a60b2eb44adcdb16799bb8235e33fc5))

### 2.0.0 (stable)

##### Notable changes

- Stylish new look on the docs :rocket: . [See the updated docs :scroll: here][home]
- The codebase is now pure JavaScript. Types now live seperately in `.d.ts` files. This is eliminate the need for a build step just to be able to test our code. It will also make it possible to run this library on [NPM+Runkit][npm]
- More automated workflow. Testing,publishing to NPM and deploying the docs is all automated via GitHub Actions
- Full test coverage of the public API with Jasmine :herb:
- Updated the contributing guidelines. See the [CONTRIBUTING :open_hands: file](./CONTRIBUTING.md) here
- Wiki with some example use cases and in depth explanations of some the library behaviours.

##### New features :toolbox:

- **Added 6 utilities:** 

1. `getFarthestChromaFrom`
2. `getFarthestHueFrom`
3. `getFarthestLightnessFrom`
4. `getNearestChromaFrom`
5. `getNearestHueFrom`
6. `getNearestLightnessFrom`

Which are similar to i.e `getNearestChroma` but take an additional against param which takes every color in the collection as a subtrahend and returning the specified extremum of the factor being queried.

##### Enhancements :pill:

- The array methods for example any function that took an array as the first argument now accepts any `ArrayLike` objects as well as plain objects and `Map` objects. In short its fully generic. If a plain object is passed as the collection it returns a `Map`. This is true for in `filterBy` functions which will return a `Map` with the falsy colors removed. In `sortBy` functions, an ordered `Map` is returned because this object remembers insertion order and is more effecient if you want to perform frequent actions on the collection.
- Converters have been enhanced to take an additional `colorspace` parameter for example `num2rgb`. [See the updated converters here][converters]
- `isAchromatic` now checks if a color is achromatic in additional colorspaces as well. This is optional via a second param `colorspace`. The default colorspace is 'lch'

##### Bug fixes :snail:

- Fixed precision issue when working with color tokens as plain objects. by first converting all colors to hex.

... And more!!!


[npm]: https://npmjs.org/package/huetiful-js
[home]: https://prjctimg.io/huetiful
[converters]: https://prjctimg.io/huetiful/converters.html
