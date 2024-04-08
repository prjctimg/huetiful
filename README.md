[![Deploy GitHub Pages](https://github.com/xml-wizard/huetiful/actions/workflows/deploy-docs.yml/badge.svg?branch=main)](https://github.com/xml-wizard/huetiful/actions/workflows/deploy-docs.yml)
[![NPM publish 📦](https://github.com/xml-wizard/huetiful/actions/workflows/release-please.yml/badge.svg)](https://github.com/xml-wizard/huetiful/actions/workflows/release-please.yml)
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

- [Description](#description)
  - [Features](#features)
- [Installation](#installation)
  - [Using a package manager](#using-a-package-manager)
  - [In the browser and via CDNs](#in-the-browser-and-via-cdns)
- [Quickstart](#quickstart)
- [Community](#community)
- [Contributing](#contributing)
    - [References](#references)

<!-- /code_chunk_output -->

## Description

[huetiful-js](www.huetiful-js.com) is a **small** (~15kB) & **fast** library for color manipulation written in JavaScript. 

It is function oriented and borrows a lot of its features from color theory but tries to hide away the science from the developer.

The library aims to parse colors from as many types as possible allowing freedom to define our color tokens as we see fit as well as parse colors from other source. For instance, methods such as the HTML `Canvas` API's `getImageData()` method. The collection methods try to be as generic as possible by treating `ArrayLike` and `Map`-like objects as valid color collections so long as the values are parseable color tokens.

It uses [Culori](https://culorijs.org/api/) under the hood which provides access to low level functions for color conversions and other necessary bells and whistles that this library depends on. It works both in Node and the browser.

### Features

- [Filtering collections of colors]() by using the values of their properties as ranges. For example `distance` against a comparison color and `luminance`.
- [Sorting collections of colors in]() by their properties. For example using `saturation` or `hue` in either descending or ascending order
- [Creating custom palettes and color scales]()
- [Manipulating individual color tokens]() for example setting and querying properties
- [Predicate functions for determining the properties of a color]() e.g chromaticity or overtone.
- [Calculating values of central tendency and other statistical values]() from collections of colors
- [Wrapping collections of colors/individual color tokens]() similar to Lodash's `_.chain` utility allowing method chaining before returning our final output.
- [Color maps for Colorbrewer, TailwindCSS and CSS named colors]()
- [Converting colors across different types]() including numbers, strings (all CSS parseable string represantations of color), plain objects, arrays and even boolean values

## Installation

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

[See the Quickstart here](https://huetiful-js.com/api)

## Community

[See the discussions](https://github.com/xml-wizard/huetiful/discussions) and just say hi, or share a coding meme (whatever breaks the ice🏔️)

## Contributing

This project is fully open source! Contributions of any kind are greatly appreciated! See🔍 the [contributing page on the documentation site](https://huetiful-js.com/contributing)) file for more information on how to get started.

#### References

This project is a result of open source resources from many places all over the Internet. [See the references here](https://huetiful-js.com/references)

 <pre>
 License ⚖️

 © 2024, <a href="https://github.com/xml-wizard">xml-wizard</a>
 Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>
 🧪 & 🔬 with 🥃 in Crowhill,ZW</pre>
