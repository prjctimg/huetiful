## default()

> **default**(`collection`, `options?`): [`Collection`](../types.md#collection)

Defined in: collection/sortBy.ts:55

Sorts colors according to the specified `factor(s)`. The supported options are:

- The `factor` is expected to be an array of strings with each element being a valid `factor`. Every key is a `factor`, with the sorted collection as the value in the result object.

To get all the factors in the result object pass `undefined` to `factor`.

- `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
  The contrast is tested `against` a comparison color which can be specified in the `options` object.
- `'lightness'` - Sorts colors according to their lightness.
- `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
- `'distance'` - Sorts colors according to their distance.
  The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
- `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

The return type is determined by the type of `collection`:

- Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
- `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.

### Parameters

#### collection

[`Collection`](../types.md#collection) = `[]`

The `collection` of colors to sort. Any object with enumerable keys and color tokens as values will work.

#### options?

[`SortByOptions`](../types.md#sortbyoptions)

The optional overrides to customize the sorting behaviour.

### Returns

[`Collection`](../types.md#collection)

### Example

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy(sample,{ against:'yellow' kind:['distance'],order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
```
