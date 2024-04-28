[huetiful-js](../README.md) / sortBy

# Module: sortBy

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[sortBy.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/sortBy.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[sortBy.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/sortBy.js#L2)

## Functions

### sortBy

▸ **sortBy**(`collection`, `options?`): `any`

Sorts colors according to the specified `factor`. The supported options are:

* `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
The contrast is tested `against` a comparison color  which can be specified in the `options` object.
* `'lightness'` - Sorts colors according to their lightness.
* `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
* `'distance'` - Sorts colors according to their distance.
The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
* `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

The return type is determined by the type of `collection`:

* Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
* `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | The `collection` of colors to sort. |
| `options` | [`SortByOptions`](wrappers.md#sortbyoptions) |  |

#### Returns

`any`

**`Example`**

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy(sample,{ against:'yellow' kind:'distance',order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
```

#### Defined in

[sortBy.js:46](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/sortBy.js#L46)
