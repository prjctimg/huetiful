## default()

> **default**(`collection`, `options`): [`Collection`](../types.md#collection)

Defined in: [collection/filterBy.ts:68](https://github.com/prjctimg/huetiful/blob/1c1db632d03b1d44995cb0e0dcc96d142d7ce49a/lib/collection/filterBy.ts#L68)

Filters a collection of colors using the specified `factor` as the criterion.

- The `factor` is expected to be an array of strings with each element being a valid `factor`. Every key is a `factor`, with the filtered collection as the value in the result object.

To get all the factors in the result object pass `undefined` to `factor`.

The supported options are:

- `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the `'against'` param) and the specified contrast ranges.
- `'lightness'` - Returns colors in the specified lightness range.
- `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

- `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the `'against'` param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
- `luminance` - Returns colors in the specified luminance range.
- `'hue'` - Returns colors in the specified hue ranges between 0 to 360.

For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.
But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as is else the value is treated as if in the range specified in [Culori's](https://culorijs.org/color-spaces) and will return the normalized value.

[See the color spaces page](https://culorijs.org/color-spaces/) for the expected ranges.

Supports expression strings e.g `'>=0.5'`.

The supported symbols are `== | === | != | !== | >= | <= | < | >`

### Parameters

#### collection

[`Collection`](../types.md#collection) = `[]`

The collection of colors to filter. Any object with enumerable keys and color tokens as values will work.

#### options

[`FilterByOptions`](../types.md#filterbyoptions) = `...`

Options to customise filtering behaviour.

### Returns

[`Collection`](../types.md#collection)

### Example

```ts
import { filterBy } from "huetiful-js";

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];
```
