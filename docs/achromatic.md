## Background

A color token is considered achromatic or gray if:

- It has a falsy chroma/saturation channel when its channel values are computed in a hue based colorspace because the hue channel depends on the chroma channel for the final color to be non-gray (or colorful).
- It has a falsy hue channel (usually happens if you use a custom interpolation method other than interpolatorLinear and one of the hue channels in the interpolation has a falsy channel) which makes the hue `NaN`.
*
