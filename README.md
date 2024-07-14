[![NPM publish 📦](https://github.com/xml-wizard/huetiful/actions/workflows/release-please.yml/badge.svg)](https://github.com/xml-wizard/huetiful/actions/workflows/release-please.yml)
![NPM Downloads](https://img.shields.io/npm/dt/huetiful-js?style=flat-square&logo=npm&link=https%3A%2F%2Fnpmjs.com%2Fpackage%2Fhuetiful-js)



![huetiful-logo](./logo.svg)

<h3 align='center'>JavaScript utility library for simple, fast and accessible color manipulation.</h3>


#### Features 

- [Collection methods](https://huetiful-js.com/api/collection) for manipulating colors using the values of their properties as criteria.
- [Color maps](https://huetiful-js.com/api/palettes) from Tailwind and [ColorBrewer](colorbrewer2.org) exposed as wrapper functions to help you kickstart your palettes.
- [Utilities](https://huetiful-js.com/api/utilities) for setting and querying color properties.
- [Wrapper functions](https://huetiful-js.com/api/wrappers) allowing method chaining for all the utilities in the API.
- [Color maps](https://huetiful-js.com/api/colors) for Colorbrewer, TailwindCSS and CSS named colors exposed as wrapper functions.
- [Color token parser](https://huetiful-js.com/api/converterters) for all types including numbers, strings (all CSS parseable string represantations of color), plain objects, arrays (or `ArrayLike` objects) and even boolean values.
- [Accessibility utilities]() when handling color in design.


#### Installation

> As of v3.0.0 the library is ESM only. You can [compile your own UMD build from source](https://github.com/prjctimg/huetiful) if you want it.

##### Using a package manager

Assuming you already have Node already installed, you can add the package using npm/yarn or any other Node based package manager:

```bash
npm i huetiful-js
```

Or:

```bash
yarn add huetiful-js

# For GitHub Package use @prjctimg/huetiful-js
```

###### Quick check :smile:

```js

import { achromatic, stats, colors } from 'huetiful-js';

let all = colors('all')
let grays = all.filter(achromatic)

console.log(grays)

console.log(stats(all))

```

##### In the browser and via CDNs

You can use also a CDN in this example, jsdelivr to load the library remotely:

> Make sure to set the `type` of the script tag to module when you load it in your HTML.

```js
import {...} from 'https://cdn.jsdelivr.net/npm/huetiful-js/lib/huetiful.js'

```

Or load the library as your HTML file using a `<script>` tag:

```html
# With script tag

<script type='module' src='https://cdn.jsdelivr.net/npm/huetiful-js/lib/huetiful.min.js'></script


# Or, if you like it this way

<script>

import { colors } from 'https://cdn.jsdelivr.net/npm/huetiful-js/lib/huetiful.min.js'

let myPalette = colors('all','700')

</script>



```

#### Quickstart

[See the Quickstart here](https://huetiful-js.com/quickstart)

#### Community

[See the discussions](https://github.com/xml-wizard/huetiful/discussions)

#### Contributing

This project is fully open source! Contributions of any kind are greatly appreciated! See🔍 the [contributing page on the documentation site](./CONTRIBUTING.md) file for more information on how to get started.


 <pre>
License ⚖️

 © 2024, <a href="https://deantarisai.me">Dean Tarisai</a>
 Released under the  <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.</h5>
 🧪 & 🔬 with 🥃 in Crowhill,ZW</pre>
