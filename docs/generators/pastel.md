## default()

> **default**(`baseColor?`): [`ColorToken`](../types.md#colortoken)

Defined in: generators/pastel.ts:23

Returns a random pastel variant of the passed in color token.

:::tip
Pastel colors are those soft hued colors like baby blue,pink and mauve.

:::

### Parameters

#### baseColor?

[`ColorToken`](../types.md#colortoken)

The color to return a pastel variant of.

### Returns

[`ColorToken`](../types.md#colortoken)

### Example

```ts
import { pastel } from "huetiful-js";

console.log(pastel("green"));

// #036103ff
```
