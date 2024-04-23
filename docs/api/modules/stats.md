[huetiful-js](../README.md) / stats

# Module: stats

## Functions

### stats

▸ **stats**(`collection`, `options?`): `Stats`

Computes statistical values about the passed in color collection and returns an object.

The topmost properties are:

* `against` - The color being used for comparison. Required for the `distance` and `contrast` factors.
* `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast | distance` factors.

 For each `factor`, there is an object with the following signature:
* `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
* `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
* `mean` - The average value for the `factor`.

If the `against` option is specified, it will also affect the final extremums for all the factors. This is because the `against` parameter will be used as a subtrahend for calculating the distance between each `extremum`. For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest factor from thr passed in collection."

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection to compute stats from. Any collection with color tokens as values will work. |
| `options` | `Object` | `undefined` | Optional parameters to specify how the data should be computed. |
| `options.against` | [`ColorToken`](alpha.md#colortoken) | `null` |  |
| `options.colorspace` | [`Colorspaces`](nearest.md#colorspaces) | `'lch'` |  |

#### Returns

`Stats`

#### Defined in

[src/stats.js:33](https://github.com/prjctimg/huetiful/blob/ed00af0/src/stats.js#L33)
