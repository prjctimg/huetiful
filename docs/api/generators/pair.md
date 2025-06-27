## default()

> **default**(`baseColor?`, `options?`): `string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](../types.md#colortuple) \| [`ColorToken`](../types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](../types.md#colortoken)\> \| `Set`\<[`ColorToken`](../types.md#colortoken)\>

Defined in: generators/pair.ts:26

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

### Parameters

#### baseColor?

[`ColorToken`](../types.md#colortoken)

The color to return a paired color scheme from.

#### options?

[`PairedSchemeOptions`](../types.md#pairedschemeoptions)

The optional overrides object to customize per channel options like interpolation methods and channel fixups.

### Returns

`string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](../types.md#colortuple) \| [`ColorToken`](../types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](../types.md#colortoken)\> \| `Set`\<[`ColorToken`](../types.md#colortoken)\>

### Example

```ts
import { pair } from "huetiful-js";

console.log(pair("green", { hueStep: 6, num: 4, tone: "dark" }));
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```
