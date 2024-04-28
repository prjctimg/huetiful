[huetiful-js](../README.md) / stats

# Module: stats

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[stats.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/stats.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[stats.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/stats.js#L2)

## Functions

### stats

▸ **stats**(`collection`, `options?`): `Stats`

Computes statistical values about the passed in color collection.

The topmost properties from each returned `factor` object are:

* `against` - The color being used for comparison.

Required for the `distance` and `contrast` factors.
If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
* `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).

* `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
* `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
* `mean` - The average value for the `factor`.
* `displayable` - The percentage of the displayable or colors with channel ranges that can be rendered in  that colorspace when converted to RGB.

The `mean` property can be overloaded by the `relativeMean` option:

* If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | The collection to compute stats from. Any collection with color tokens as values will work. |
| `options` | `StatsOptions` | Optional parameters to specify how the data should be computed. |

#### Returns

`Stats`

#### Defined in

[stats.js:48](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/stats.js#L48)
