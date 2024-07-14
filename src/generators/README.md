# Generators

When doing algorithmic art or anything that involves color in the design process, most oftenly we want a way to create samples from which we can pick the colors of our project. Of course one could reach out to the variety of tools out there but wghat if you wanted to have this functionality implemented inside your code ? 

This module exposes utilities for generating color scales either from a single base color or a collection of color tokens. This makes it possible to extract and create palettes from many sources. The utilities basically are just mappers that target certain channels and tweak their values to achieve a certain look for example pastels and hueshifted palettes.

For example we can use color quantisation on images to reduce the palette size and pick our palettes. This idea can further be strained to work with existing color systems e.g Material Design or TailwindCSS so that the colors can be synchronized with the design from our code!

## Further reading

Some of the utilities of this module were modified from the [original source from George Francis' post](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)

Also check out some of the latest guidelines of working with color in [Google Material Design: Color](https://m3.material.io/styles/color/system/overview)