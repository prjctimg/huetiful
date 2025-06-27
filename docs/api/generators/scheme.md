## default()

> **default**(`baseColor?`, `options?`): [`Collection`](../types.md#collection)

Defined in: generators/scheme.ts:48

Generates a randomised classic scheme from the passed in color.

The `kind` parameter can either be an array or `undefined`:

- If it is an array, each element should be a valid `kind` of scheme.
  It will return a color map with the array elements (which are valid schemes) as keys.
  Duplicate schemes are simply ignored.
- If it is falsy it will return a color map of all palettes.

The classic schemes are are:

- `triadic` - Picks 3 colors 120 degrees apart.
- `tetradic` - Picks 4 colors 90 degrees apart.
- `complimentary` - Picks 2 colors 180 degrees apart.
- `mono` - Picks `num` amount of colors from the same hue family .
- `analogous` - Picks 3 colors 12 degrees apart.

Note that the `num` parameter works on the `monochromatic` palette type only. Other schemes will return a constant amount of samples.

### Parameters

#### baseColor?

[`ColorToken`](../types.md#colortoken)

The color to create the palette(s) from.

#### options?

[`SchemeOptions`](../types.md#schemeoptions) = `...`

Optional overrides.

### Returns

[`Collection`](../types.md#collection)

### Example

```ts
import { scheme } from "huetiful-js";

console.log(scheme("triadic")("#a1bd2f"));
// [ '#a1bd2f', '#00caff', '#ff78c9' ]
```
