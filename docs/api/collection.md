[@prjctimg/huetiful](huetiful.gitbook.io/README.md) / collection

## Functions

### distribute()

> **distribute**\<`Options`\>(`collection`, `options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [collection/distribute.ts:27](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/collection/distribute.ts#L27)

distributes the `factor`(s) of a color in the collection at the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.

#### Type Parameters

##### Options

`Options` _extends_ [`DistributionOptions`](huetiful.gitbook.io/types.md#distributionoptions)

#### Parameters

##### collection

[`Collection`](huetiful.gitbook.io/types.md#collection)

the property you want to distribute to the colors in the collection for example `hue | luminance`

##### options?

`Options`

optional overrides to change the default configursation

#### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

---

### filterBy()

> **filterBy**(`collection`, `options`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [collection/filterBy.ts:68](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/collection/filterBy.ts#L68)

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

#### Parameters

##### collection

[`Collection`](huetiful.gitbook.io/types.md#collection) = `[]`

The collection of colors to filter. Any object with enumerable keys and color tokens as values will work.

##### options

[`FilterByOptions`](huetiful.gitbook.io/types.md#filterbyoptions) = `...`

Options to customise filtering behaviour.

#### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

#### Example

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

---

### sortBy()

> **sortBy**(`collection`, `options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [collection/sortBy.ts:55](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/collection/sortBy.ts#L55)

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

#### Parameters

##### collection

[`Collection`](huetiful.gitbook.io/types.md#collection) = `[]`

The `collection` of colors to sort. Any object with enumerable keys and color tokens as values will work.

##### options?

[`SortByOptions`](huetiful.gitbook.io/types.md#sortbyoptions)

The optional overrides to customize the sorting behaviour.

#### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

#### Example

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy(sample,{ against:'yellow' kind:['distance'],order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
```

---

### stats()

> **stats**(`collection`, `options?`): [`Stats`](huetiful.gitbook.io/types.md#stats)

Defined in: [collection/stats.ts:51](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/collection/stats.ts#L51)

Computes statistical values about the specified `factor(s)` from the passedin collection.

The properties from each returned `factor` object are:

- `against` - The color being used for comparison. Required for the `distance` and `contrast` factors.
  If `relativeMean` is `false`, other factors that take the comparison color token as an overload (`contrast | distance`) will have this property's value as `null`.
- `colorspace` - The colorspace in which the `factors` were computed in. It has no effect on the `contrast` or `distance` factors (for now).

- `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
- `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
- `mean` - The average value for the `factor`.

The `mean` property can be overloaded by the `relativeMean` option:

- If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
  For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from the passed in collection."

These properties are available at the topmost level of the resultant object:

- `achromatic` - The amount of colors which are gray out of the total colors in the collection as a value in the range [0,1].
- `colorspace` - The colorspace in which the values were computed from, expected to be hue based.
  Defaults to `lch` if an invalid mode like `rgb` is used.

- The `factor` is expected to be an array of strings with each element being a valid `factor`. Every key is a `factor`, with the stats of that `factor` as the value in the result object.

To get all the factors in the result object pass `undefined` to `factor`.

#### Parameters

##### collection

[`Collection`](huetiful.gitbook.io/types.md#collection) = `[]`

The collection to compute stats from. Any collection with color tokens as values will work.

##### options?

[`StatsOptions`](huetiful.gitbook.io/types.md#statsoptions)

The optional overrides to customize the computing behaviour for the factors.

#### Returns

[`Stats`](huetiful.gitbook.io/types.md#stats)
