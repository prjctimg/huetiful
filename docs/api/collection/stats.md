[@prjctimg/huetiful](huetiful.gitbook.io/README.md) / collection/stats

## default()

> **default**(`collection`, `options?`): [`Stats`](huetiful.gitbook.io/types.md#stats)

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

### Parameters

#### collection

[`Collection`](huetiful.gitbook.io/types.md#collection) = `[]`

The collection to compute stats from. Any collection with color tokens as values will work.

#### options?

[`StatsOptions`](huetiful.gitbook.io/types.md#statsoptions)

The optional overrides to customize the computing behaviour for the factors.

### Returns

[`Stats`](huetiful.gitbook.io/types.md#stats)
