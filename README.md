![npm](https://img.shields.io/npm/dm/huetiful-js)
![License](https://img.shields.io/npm/l/huetiful-js)
![GitHub issues](https://img.shields.io/github/issues/prjctimg/huetiful)
![GitHub Repo stars](https://img.shields.io/github/stars/prjctimg/huetiful)


![](./huetiful-logo.png)

JavaScript library for simple color manipulations based on the Culori API.

### What you can do with this package

- Filter collections of color according to different properties i.e hue,saturation etc
- Sort colors according to their properties like luminance andf hue.
- Create colors from templated values like pastels, hueshifted color scales etc
- Reference to all colors in the default TailwindCSS palette with every shade as a function!
- Categorize colors using their properties such as temperature and achromaticity
- And much more. See the docs [here](https://huetiful-docs.vercel.app
## Installation

Use [npm](https://www.npmjs.com/package/huetiful-js) to install the package.

```bash
npm i huetiful-js
```


## Getting started
The aim of this project is to help designers work with color more programmatically using utilities based on color theory.

As a starting point, the library comes along with the TailwindCSS default palette 🎨. This helps you to get started easier when using palette utilities such as `hueShift()` and `earthtone()` by providing a starting point that is defined within your design system (if you're using Tailwind color system, that is) . The palette is in the form of two wrapper functions, tailwindColors and colors which both take the same two parameters shade and value. This allows us to make dynamic changes to our palettes using JavaScript. 

Libraries before this one that have achieved this functionality are chroma. js , colors-js and d3 to name a few. 

The library has functions for [filtering]() and [sorting]() arrays of colors. 

Here's an example of filtering colors from the getImageData method on the HTML Canvas API:

// Example

It also has functions for getting values of statistical significance like minimum and maximum saturation values in a collection of colors or the color with the farthestHue in a collection of colors compared against a base color. 

Using assumptions such as these we can define the palette of our design system to behave in a certain manner. 

Here's a basic example of a palette wherby I only want the achromatic and cool colors.

// Example


And then maybe I want a certain hueRange only:

// Example

After that, I want to render the colors ordered by luminance in descending order:

// Example



And since it's just plain JavaScript you may hook it up with your favourite creative coding library e.g P5.js . Here's an example of making a flowfield with hue-shifted colors:

// Example




Accuracy of the functions is still a work in progress since most functions use a brute approach of simple math to obtain values needed for internal comparisons. 

Under the hood, the utilities are mostly higher order functions that use Culori for color conversions and interpolation. The choice for using this library was because of its comprehensive API which has many functions for doing low level wizardry with colors.



To be honest, I haven't uncovered other use cases but I think functionality of a tool can be widened by the programmer's creativity/imagination.

## Contributing

First of all, thank you for using huetiful-js! Its people like you that make open source software better for the community!
Contributions are welcome! Help make this project better and easier to use for other developers by sharing your ideas and stomping out bugs and feature suggestions. For any major changes, please open an issue first to discuss what you would like to change.

## License

Released under the [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) license.

