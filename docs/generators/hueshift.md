## default()

> **default**(`baseColor?`, `options?`): [`Collection`](../types.md#collection)

Defined in: generators/hueshift.ts:38

Creates a palette of hue shifted colors from the passed in color.

Hue shifting means that:

- As a color becomes lighter, its hue shifts up (increases).
- As a color becomes darker its hue shifts down (decreases).

The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extremum respectively.'

The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or simply `(num * 2) + 1`.

### Parameters

#### baseColor?

[`ColorToken`](../types.md#colortoken)

The color to use as the base of the palette.

#### options?

[`HueshiftOptions`](../types.md#hueshiftoptions) = `{}`

The optional overrides object.

### Returns

[`Collection`](../types.md#collection)

### Example

```ts
import { hueshift } from "@prjctimg/huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
 '#ffffe1', '#ffdca5',
 '#ca9a70', '#935c40',
 '#5c2418', '#3e0000',
 '#310000', '#34000f',
 '#38001e', '#3b002c',
 '#3b0c3a'
]
```
