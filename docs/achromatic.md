### Achromaticity in color

These are a subtype of colors that have no `hue`. Also known as grays, these colors can be found by interpolating black and white.

We can use the `isAchromatic` utility to check if a color is achromatic or not.

```
import {isAchromatic} from '`hue`tiful-js';

isAchromatic('pink')
// Returns false

isAchromatic('gray')
// Returns true

```

For a color to be classified as being achromatic, it needs a falsy value on the `saturation/chroma` channel such as 0, `NaN` or `undefined`. This is because the `hue` depends on the `saturation` channel to be true or not be gray. This means that altering the `hue` or `lightness` channel whilst `saturation` is falsy will only return a grey color and black or white (at the extreme ends of the `lightness` channel).

Further reading:[Wikipedia]()
