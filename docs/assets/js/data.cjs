var data = {
  types: {
    description:
      'This module has all the types used in the library for common parameters and expected options for overidable functions.'
  },
  colors: {
    description:
      'This module has wrapper functions for different color maps. The `Color` and `ColorArray` classes which bind methods to color tokens and collections respectively are declared in this module.'
  },
  sortBy: {
    description:
      'This module has functions for sorting collections of colors using their properties like hue or saturation as the sorting factor.'
  },
  filterBy: {
    description:
      'This module has functions for filtering collections of colors using their properties like lightness and contrast as minimum and end ranges from which to return the colors.'
  },
  generators: {
    description:
      'This module has functions for generating custom color scales and create palettes from a set of defined constraints applied to targeted color channels'
  },
  converters: {
    description:
      'This module has functions for converting colors to and from all the supported color token types which are numbers,arrays (or arraylike objects),`Map` objects,plain objects,strings and boolean values.'
  },
  utils: {
    description:
      'This module has functions for querying and setting color properties. This includes fetching values (these can also be color tokens) of statistical significance from collections.'
  }
};

module.exports = data;
