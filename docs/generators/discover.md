## default()

> **default**(`colors`, `options`): [`Collection`](../types.md#collection)

Defined in: generators/discover.ts:38

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.

The function returns different values based on the `kind` parameter passed in:

- An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
- Else it returns an object of all the palette types as keys and their values as an array of colors.
  :::caution
  If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
  :::

### Parameters

#### colors

[`Collection`](../types.md#collection) = `[]`

The collection of colors to create palettes from. Preferably use 6 or more colors for better results.

#### options

[`DiscoverOptions`](../types.md#discoveroptions) = `...`

### Returns

[`Collection`](../types.md#collection)

### Example

```ts
import { discover } from "@prjctimg/huetiful-js";

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
];

console.log(discover(sample, { kind: "tetradic" }));
// [ '#ffff00', '#00ffdc', '#310000', '#720000' ]
```
