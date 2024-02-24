# Changelog

Please note that the list of changes is not final and is still a work in progress. More information will (or may) be updated from the Git commit history in the future.

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [2.0.0 (stable)](#200-stable)
    - [Notable changes](#notable-changes)
    - [New features :toolbox:](#new-features-toolbox)
    - [Enhancements :pill:](#enhancements-pill)
    - [Bug fixes :snail:](#bug-fixes-snail)

<!-- /code_chunk_output -->



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