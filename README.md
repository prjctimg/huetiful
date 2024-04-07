[![Deploy static content to Pages](https://github.com/xml-wizard/huetiful/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/xml-wizard/huetiful/actions/workflows/deploy-docs.yml)
[![NPM publish 📦](https://github.com/xml-wizard/huetiful/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/xml-wizard/huetiful/actions/workflows/npm-publish.yml)
![NPM Downloads](https://img.shields.io/npm/dm/huetiful-js?style=social&logo=npm&link=https%3A%2F%2Fnpmjs.com%2Fpackage%2Fhuetiful-js%20)
![GitHub Repo stars](https://img.shields.io/github/stars/xml-wizard/huetiful?style=social&logo=github)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/huetiful-js?style=social)](https://bundlephobia.com/package/huetiful-js)
[![twitter](https://img.shields.io/twitter/follow/deantarisai?style=social)](https://twitter.com/deantarisai)

<img alt='Logo for huetiful-js' src='./docs/assets/img/logo.svg' width='800'>

<p align='center'>
<br>
<br>
<a href="https://huetiful-js.com">📜 API</a>
 ·
<a href="https://github.com/xml-wizard/huetiful/issues/new?template=---bug-report.md">🐞 Report Bug</a>
·
<a href="https://github.com/xml-wizard/huetiful/issues/new?template=---feature-request.md">🍩 Request Feature</a>
    ·
<a href="https://github.com/xml-wizard/huetiful/wiki">🧠 Wiki </a>
</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What's this ?](#whats-this-)
  - [Features include](#features-include)
- [Installation and usage](#installation-and-usage)
  - [Using a package manager](#using-a-package-manager)
  - [In the browser and via CDNs](#in-the-browser-and-via-cdns)
- [Quickstart](#quickstart)
- [Community](#community)
- [Contributing](#contributing)
- [References](#references)
  - [License ⚖️](#license-️)

<!-- /code_chunk_output -->

## What's this ?

[huetiful-js](www.huetiful-js.com) is a small (~15kB) and fast function oriented library for a color manipulations written in JavaScript. It is based on color theory but tries to hide away the complexities of color science from the developer.

The library aims to parse colors from as many types as possible allowing freedom to define our color tokens as we see fit as well as parse color data from methods such as the Canvas API's `getImageData` method. The collection methods are fully generic making it possible to treat `ArrayLike` and `Map` like objects as valid color collections so long as the values are parseable color tokens.

It uses [Culori](https://culorijs.org/api/) under the hood which provides access to low level functions for color conversions and other necessary bells and whistles that this library depends on.

It works both in Node and the browser.

### Features include

- Filtering and sorting colors by their properties e.g `saturation` and `hue`
- Creating custom palettes and color scales
- Manipulating individual color tokens for example setting and querying properties
- Predicate functions for determining the properties of a color e.g chromaticity or overtone.
- Calculating values of central tendency and other statistical values from collections of colors
- Wrapping collections of colors/individual color tokens similar to Lodash's `_.chain` utility allowing method chaining before returning our final output.
- Color maps for Colorbrewer, TailwindCSS and CSS named colors
- Converting colors across different types including numbers, strings (all CSS parseable string represantations of color), plain objects, arrays and even boolean values


## Installation and usage

### Using a package manager

> Note that the library is ESM and UMD only.

Assuming you already have Node already installed, you can add the package using npm/yarn or any other Node based package manager:

```bash
npm i huetiful-js
```

Or:

```bash
yarn install huetiful-js
```

### In the browser and via CDNs

You can use also a CDN in this example, jsdelivr to load the library remotely:

```js
import {...} from 'https://cdn.jsdelivr.net/npm/huetiful-js/lib/huetiful.esm.js'

```

Or load the library as a UMD glabal (`huetiful`) in your HTML file using a `<script>` tag:

```html
# With script tag

<script src='https://cdn.jsdelivr.net/npm/huetiful-js/dist/huetiful.umd.js'></script>

```

## Quickstart

[See the Quickstart section here](https://huetiful-js.com/api)

## Community

[See the discussions and just say hi, or share a coding meme(whatever breaks the ice🏔️)](https://github.com/xml-wizard/huetiful/discussions)

## Contributing

This project is fully open source! Contributions of any kind are greatly appreciated! See🔍 the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started.

## References

This project is a result of open source resources from many places all over the Internet:

- [Coloring with code: A programmatic approach by George Francis](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)
- [Introducing Adaptive Color Palettes](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/thinking-design/introducing-adaptive-color-palettes-111b5842fc88&ved=2ahUKEwj5xNSuy-6DAxV8REEAHVKaAMwQFnoECB0QAQ&usg=AOvVaw2ufCwph7oofZCFawA0WPr-)
- [Culori API docs](https://culorijs.org/api/)
- [chroma.js](https://npmjs.com/package/chroma.js)

### License ⚖️

 <pre>
 © 2024,Dean Tarisai
 Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>
 🧪 & 🔬 with 🥃 in Crowhill,ZW</pre>
