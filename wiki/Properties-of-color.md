# The properties of color

Color is composed of different properties that can be adjusted giving the color a different look. For the sake of brevity, we are going to focus on the most important ones

- Lightness
- Chroma (saturation)
- Hue

## Lightness

A color's lightness can be likened to its brightness. Typically we lighten a color by applying white to it or increasing the value of the lightness channel. A color's lightness has an impact on its relative luminance. If a color becomes too light it becomes a 'tint' of that hue.

## Chroma

The intensity of a color is determined by its chroma or saturation. a color with higher chroma will appear more vibrant whilst a color with low chroma is pale. If the chroma is 0 or falsy the resulting color will be grayscale. In hue based colorspaces, the hue doesn't change color's appearance if the chroma is zero. Therefore the hue channel is dependant on the chroma channel as well

## Hue

The color's hue defines its hue family for example blue or red. Hue based colorspaces map all the hue families to a cylindrical form, this means a certain hue will dominate a certain hue range. The ranges occupied by each hue family are determined by the colorspace in use. For example HSL and LCH have different ranges for red. This raises the concept of 'perceptually uniform colorspaces'. These are color models that try to mimic how humans perceive color such that the hues transition into each other in a way that seems more natural.
