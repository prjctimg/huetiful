## default()

> **default**(`baseColor?`, `options?`): [`ColorToken`](../types.md#colortoken) \| [`ColorToken`](../types.md#colortoken)[]

Defined in: generators/earthtone.ts:17

Creates a color scale between an earth tone and any color token using spline interpolation.

### Parameters

#### baseColor?

[`ColorToken`](../types.md#colortoken)

The color to interpolate an earth tone with.

#### options?

[`EarthtoneOptions`](../types.md#earthtoneoptions) = `{}`

Optional overrides for customising interpolation and easing functions.

### Returns

[`ColorToken`](../types.md#colortoken) \| [`ColorToken`](../types.md#colortoken)[]

### Example

```ts
import { earthtone } from "huetiful-js";

console.log(earthtone("pink", "lch", { earthtones: "clay", samples: 5 }));
// [ '#6a5c52', '#8d746a', '#b38d86', '#d9a6a6', '#ffc0cb' ]
```
