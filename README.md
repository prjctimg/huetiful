

[![Deploy GitHub Pages](https://github.com/prjctimg/huetiful/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/prjctimg/huetiful/actions/workflows/static.yml)
[![NPM publish 📦](https://github.com/prjctimg/huetiful/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/prjctimg/huetiful/actions/workflows/npm-publish.yml)
![NPM Downloads](https://img.shields.io/npm/dt/huetiful-js?style=social&logo=npm&link=https%3A%2F%2Fnpmjs.com%2Fpackage%2Fhuetiful-js%20)
![GitHub Repo stars](https://img.shields.io/github/stars/prjctimg/huetiful?style=social&logo=github)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/huetiful-js?style=social)](https://bundlephobia.com/package/huetiful-js)
[![twitter](https://img.shields.io/twitter/follow/deantarisai?style=social)](https://twitter.com/deantarisai)

  <p align='center'>
    <img alt="logo" title="sine_cos_rotation" src="./docs/assets/images/logo.png">
  
  </p>
  <h6>*Image wih by Rune.js using sine and cosine rotation with hueshifted colors</h6>
<h3 align='center'>huetiful-js</h3>

<p align='center'>TypeScript library for general purpose color manipulations and generating custom color scales.
<br>
<br>
 <a href="https://prjctimg.github.io/huetiful">📜 Docs</a>
    ·
    <a href="https://github.com/prjctimg/prjctimg/issues/new?template=---bug-report.md">🐞 Report Bug</a>
    ·
    <a href="https://github.com/prjctimg/huetiful/issues/new?template=---feature-request.md">🍩 Request Feature</a>
    ·
    <a href="https://github.com/prjctimg/huetiful/wiki">🧠 Wiki </a>
</p>

## Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=3 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

  - [What's this ?](#whats-this-)
    - [The code :computer:](#the-code-computer)
  - [What does it do ?](#what-does-it-do-)
    - [Fetching values of statistical significance](#fetching-values-of-statistical-significance)
    - [Sorting and filtering collections of colors using their properties](#sorting-and-filtering-collections-of-colors-using-their-properties)
    - [Querying and setting color properties](#querying-and-setting-color-properties)
  - [Generating custom color scales](#generating-custom-color-scales)
    - [Referencing bundled color maps](#referencing-bundled-color-maps)
    - [Converting colors from a wide range of data types](#converting-colors-from-a-wide-range-of-data-types)
- [What else :thinking:](#what-else-thinking)
  - [Installation and usage](#installation-and-usage)
    - [Node](#node)
    - [Browser](#browser)
    - [Quickstart](#quickstart)
    - [Documentation 📜](#documentation-)
  - [Community](#community)
  - [Contributing](#contributing)
  - [References 🔗](#references-)
    - [License ⚖️](#license-️)

<!-- /code_chunk_output -->



 
<br>

#### What's this ?

This project builds off Culori's function oriented API to provide you with a collection of utilities for manipulating colors as collections and single color tokens.

The library takes advantage of ES6 features to make working with collections of color more flexible.

##### The code :computer:
Here's an example of the `filterBySaturation` function, (pay attention to the collection parameter) for now.

``` ts
// types/filterBy.d.ts
declare function filterBySaturation(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  startSaturation?: number,
  endSaturation?: number,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;

```

`collection` can take any object with a `length` property (like `Array`) or a plain object (which is not nested) with each `value` per `key:value` pair a valid [ColorToken][colortoken]. Every function that took an array (before v1.79.x) can take the above signature as a collection.


It is written in JavaScript (with types).


#### What does it do ?

Some of the key features include methods for:

##### Fetching values of statistical significance

```js


```

##### Sorting and filtering collections of colors using their properties

##### Querying and setting color properties

```js

// -  (i.e the smallest hue angle in a collection or the color with the smallest hue angle difference against a specified color).

```

 [See the utils module here][converters]

#### Generating custom color scales 

```js
using spline interpolation methods, easings and with support for creating `closed` color scales for cyclic data,[hueshifted palettes][hueshift],paired schemes.
```

[See the generators module here][generators]

##### Referencing bundled color maps

```js

// TailwindCSS

// colorBrewer


// uigradients.json


```
[See the expected arguments for these wrapper funcions here][colors]


##### Converting colors from a wide range of data types

```js


```

### What else :thinking:

The library is function oriented and tries to be as general purpose as possible to allow usage in wider contexts for example the collection methods take both objects and arrays. It also has a lazy chain wrapper similar to the Lodash `_.chain` utility that binds collection methods to the passed in collection allowing you to overload operations before calling the final output.

```js

// load


// color


```

 With a focus on applying color theory reasoning, this library can be a Swiss army knife allowing you to work with color in a more programmatic way.


<a href='https://prjctimg.github.io/huetiful'><button style='padding:6px;background:#bf3cd3;border:0.1px'>Go to the docs</button></a>
 

#### Installation and usage

##### Node

The library🧾 is on npm as a package📦 for use in NodeJS:

```bash
npm i huetiful-js
```

You can use a CDN in this example, jsdelivr to load the library remotely:

```js
import {...} from 'https://cdn.jsdelivr.net/npm/huetiful-js/lib/huetiful.esm.mjs'

```

##### Browser

Or load the library as a UMD glabal (`huetiful`) in your HTML file using a `<script>` tag:

```html
# With script tag

<script src='https://cdn.jsdelivr.net/npm/huetiful-js/dist/huetiful.umd.js'></script>
```

##### Quickstart

[See the Quickstart section on the Wiki](https://github.com/prjctimg/huetiful/wiki/Quickstart-%F0%9F%8F%81) to see some examples and demonstrations of the library.

##### Documentation 📜

[See the full docs here](https://prjctimg.github.io/huetiful)
<br>

#### Community

[See the discussions and just say hi, or share a coding meme(whatever breaks the ice🏔️)](https://github.com/prjctimg/huetiful/discussions)

#### Contributing

This project is fully open source! Contributions of any kind are greatly appreciated! See🔍 the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started.

<img alt="logo" title="huetiful-js" src="./docs/assets/images/logo_v1.png">

#### References 🔗

- [Coloring with code: A programmatic approach by George Francis][inspiration-post]
- [Programming Design Systems: Rune Madsen][programming-design-systems]
- [Introducing Adaptive Color Palettes][adaptive-palettes-blog]
- [Culori API docs](https://culorijs.org/api/)

##### License ⚖️

 <pre>
 <h5 align='center'>Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>

 <h6 align='center'> 🧪 & 🔬 with 🥃 in Crowhill,ZW</h6>

 <h6 align='center'>© 2024,Dean Tarisai</h6></pre>

[adaptive-palettes-blog]:[https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/thinking-design/introducing-adaptive-color-palettes-111b5842fc88&ved=2ahUKEwj5xNSuy-6DAxV8REEAHVKaAMwQFnoECB0QAQ&usg=AOvVaw2ufCwph7oofZCFawA0WPr-]
[generators]:[https://prjctimg.github.io/huetiful/generators.html]
[converters]:[https://prjctimg.github.io/huetiful/utils.html]
[programming-design-systems]:[https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://programmingdesignsystems.com/&ved=2ahUKEwi42O3hy-6DAxXqV0EAHTmpCqEQFnoECBsQAQ&usg=AOvVaw0l2PlWPxOi8UrhBYO1mc9q]
[inspiration-post]:[https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/]
[colortoken]:[https://prjctimg.github.io/huetiful/types.html#colortoken]
[hueshift]:[https://prjctimg.github.io/huetiful/generators.html#hueshift]

