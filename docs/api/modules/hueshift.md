[huetiful-js](../README.md) / hueshift

# Module: hueshift

## Functions

### hueshift

▸ **hueshift**(`color`, `options?`): [`ColorToken`](alpha.md#colortoken)[]

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down) from a single color. Min and max lightness values determine how light or dark our colour will be at either extreme.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to use as the scheme of the hueshift. Colors are internally converted to LCH. |
| `options` | `HueShiftOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorToken`](alpha.md#colortoken)[]

A collection of the hueshifted colors. The length of the resultant array is the number of `iterations` multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { hueShift } from "huetiful-js";

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

#### Defined in

[src/hueshift.js:33](https://github.com/prjctimg/huetiful/blob/ed00af0/src/hueshift.js#L33)
