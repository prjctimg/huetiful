[![Deploy GitHub Pages](https://github.com/prjctimg/huetiful/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/prjctimg/huetiful/actions/workflows/static.yml)
[![NPM publish 📦](https://github.com/prjctimg/huetiful/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/prjctimg/huetiful/actions/workflows/npm-publish.yml)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/huetiful-js)](https://bundlephobia.com/package/huetiful-js)

[![twitter](https://img.shields.io/twitter/follow/deantarisai?style=social)](https://twitter.com/deantarisai)

  <p align='center'>
    <img alt="logo" title="sine_cos_rotation" src="./logo.png">
  
  </p>
  <cite>*Image made by Rune.js using sine and cosine rotation with hueshifted colors</cite>
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

### Table of Contents

  - [What's this ?](#whats-this-)
  - [What does it do ?](#what-does-it-do-)
  - [Installation and usage](#installation-and-usage)
    - [Node](#node)
    - [Browser](#browser)
    - [Quickstart](#quickstart)
    - [Documentation 📜](#documentation-)
- [Community](#community)
  - [Contributing](#contributing)
  - [References 🔗](#references-)
    - [License](#license)

<br>

#### What's this ?

This project builds off Culori's function oriented API to provide you with a rich collection of utilities for manipulating color. It is a Typescript library for color manipulations that works both in Node and the browser.

#### What does it do ?

Some of the key features include methods for:

- Sorting and filtering collections of colors using their properties
- Querying and setting color properties
- Fetching values of statistical significance (i.e the smallest hue angle in a collection)
- Generating custom color scales using spline interpolation methods, easings and with support for creating `closed` color scales for cyclic data
- Referencing the default TailwindCSS palette and ColorBrewer color scales
- Converting colors from a wide range of data types like arrays,strings,numbers and plain objects to a widely recognized format like hex
- And more...

The library is function oriented and tries to be as generic as possible to allow usage in wider contexts for example the collection methods take both objects and arrays. It also has a lazy chain wrapper similar to the Lodash `_.chain` utility that binds collection methods to the passed in collection allowing you to overload operations before calling the final output. With a focus on applying color theory reasoning, this library can be a Swiss army knife allowing you to work with color in a more programmatic way.

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

<img alt="logo" title="huetiful-js" src="./logo_v1.png">

#### References 🔗

- [Coloring with code: A programmatic approach by George Francis](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)
- [Programming Design Systems: Rune Madsen](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://programmingdesignsystems.com/&ved=2ahUKEwi42O3hy-6DAxXqV0EAHTmpCqEQFnoECBsQAQ&usg=AOvVaw0l2PlWPxOi8UrhBYO1mc9q)
- [Introducing Adaptive Color Palettes](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medium.com/thinking-design/introducing-adaptive-color-palettes-111b5842fc88&ved=2ahUKEwj5xNSuy-6DAxV8REEAHVKaAMwQFnoECB0QAQ&usg=AOvVaw2ufCwph7oofZCFawA0WPr-)
- [Culori API docs](https://culorijs.org/api/)

##### License ⚖️


 <pre>
 <h5 align='center'>Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>

 <h6 align='center'> 🧪 & 🔬 with 🥃 in Crowhill,ZW</h6>

 <h6 align='center'>© 2024,Dean Tarisai</h6></pre>
