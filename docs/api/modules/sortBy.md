[huetiful-js](../README.md) / sortBy

# Module: sortBy

## Functions

### sortBy

▸ **sortBy**(`factor`, `order?`, `options?`): (`collection`: `Collection`) => `Collection`

Sorts colors according to the specified `factor`. The supported options are:

* `'contrast'` - Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color  which can be specified in the `options` object.
* `'lightness'` - Sorts colors according to their lightness.
* `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
* `'distance'` - Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.
* `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](filterBy.md#factor) | `undefined` | The factor to use for sorting the colors. |
| `order?` | ``"asc"`` \| ``"desc"`` | `undefined` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`). |
| `options` | `Object` | `undefined` |  |
| `options.against` | [`ColorToken`](alpha.md#colortoken) | `'#fff'` |  |
| `options.colorspace` | [`Colorspaces`](nearest.md#colorspaces) | `'lch'` |  |

#### Returns

`fn`

▸ (`collection`): `Collection`

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection` |

##### Returns

`Collection`

**`Example`**

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy('distance','desc',{ against:'yellow'})(sample)
)

// [ 'brown', 'red', 'green', 'purple' ]
```

#### Defined in

[src/sortBy.js:40](https://github.com/prjctimg/huetiful/blob/ed00af0/src/sortBy.js#L40)
