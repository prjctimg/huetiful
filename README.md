
![](./huetiful-logo.png)

 #### JavaScript library for general purpose color manipulations.


The aim of this project is to help designers and developers alike  work with color more programatically using utilities based on color theory. Though not necessarily a requiement, a basic background of color spaces, properties of color and any other color theory related information will make the library's use cases appear more simpler.

This project is inspired by projects such as [chroma-js](),[colorBrewer.org](),[TailwindCSS]() and borrows some of the reasoning behind them to build functionality. In fact this library uses [Culori]() as its core dependency because it provides a rich API of low level functions written in JavaScript to perform color conversions and other general purpose color manipulations.

## Getting started

The library is available on npm as a package: Links to CDNs will be added soon.

> Note: Assuming you already have NodeJS installed
Use [npm](https://www.npmjs.com/package/huetiful-js) to install the package.

```bash
npm i huetiful-js
```

For use in the browser use [CDN]() to load the package (UMD)

```html

Code sample
```

## Quick examples

Below are short walkthroughs to demonstrate how the functions can be used in example scenerios.

### Colors

A color can be defined in various formats. This gives us more flexibility in how we want to define our color. Below are examples listing all the supported formats of passing in color values and their respective conversion functions:

```js
// Examples 

```

Note that toHex takes any color format and returns the hex string represantation of it:

```js
// Example

```

We can even mix different color formats with no problem at all:

```js

```


For more information on the color spaces supported by the library and the expected ranges, checkout the [Color Spaces page on the Culori docs]() . Or checkout the docs about [Color conversions]()

> All the functions are internally guarded by `toHex()` so you don't have to worry about converting colors back and fourth.

#### Tailwind

As a starting point the library comes along with the default [TailwindCSS]() palette included.. This helps you get started easier when you're using [palette functions]() such as `hueShift()` and `earthtone()`

The Tailwind colors are in the form of two wrapper functions that both take the same parameters but with a few differences: one is curried by default and the other is a tweaked variant of the same functionality but with a few improvements. Below are some examples showing the differences between the two functions:

```js
// Some examples

```

We can even return the whole scale `(050 - 900)` of a shade as an array of hex strings. The order of elements is in order with the scale values:


## Working with collections of colors

The library has functions for sorting and filtering colors using their property values like saturation,lightness and even temperaure in Kelvins. Below is an example of using the filtering and sorting functions on an array of colors:


```js
// example

```
[See more about the parameter types and other sorting/filtering functions]()


### Palette functions

A small collection of simple palette functions are included in the library. One of my favourites is the `hueShift()` function which was inspired by (special thanks) [George Francis's implementation in this post]()

```js

// Example

```
There's more where that came from. [See the palettes docs]()


### Predicates

Is this color cool or warm, is it achromatic (grayscale) or chromatic? Though its easy to tell colors apart visually when they're displayed on the screen it can be a bit confusing to tell colors apart using code. Below are examples of demonstrating how to determine if a color is gray or not:

```js


```

Here's an example of filtering an array of colors and returning an array of colors that are warm:


```js

// Example

```

### Property getters

And what if we wanted to get the color with the smallest luminance in a collection of colors:

```js

// EXAMPLE
```

Or maybe we want to know which color has the furthest hue distance in our sample collection against our target color:

```

// Example

```



## What's next

The list of functions goes on beyond this. And since the library is pure JavaScript, you can hook it up with your creative coding library of choice like [p5js]() or [runejs](). The possibilities are limited by the imagination of the user.

[See the full docs here]()

## Contributing

First of all, thank you for using huetiful-js! Its people like you that make open source software better for the community!
Contributions are welcome! Help make this project better and easier to use for other developers by sharing your ideas and stomping out bugs and feature suggestions. Please see the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started.

> ## License
>
> Copyright (c) 2023
> Dean Tarisai and contributors
> huetiful-js is released under the [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) license.
>
> This project makes extensive use of open source resources and its inception would have had been null if it wasn't for their pioneering. See the [LICENSE](./LICENSE.md) for the full list of open source licenses.