[huetiful-js](../README.md) / wrappers

# Module: wrappers

## Classes

- [Color](../classes/wrappers.Color.md)
- [ColorArray](../classes/wrappers.ColorArray.md)

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[wrappers.js:6](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/wrappers.js#L6)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[wrappers.js:5](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/wrappers.js#L5)

___

### FilterByOptions

Ƭ **FilterByOptions**: `Object`

Overrides for setting filtering criterion, expected ranges and other behaviour.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | `ColorToken` | The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor. |
| `colorspace?` | [`Colorspaces`](nearest.md#colorspaces) | The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' \| 'contrast' \| 'distance'`. |
| `end?` | `number` \| `string` | The maximum end of the `factor` range. |
| `factor?` | ``"hue"`` | The factor to use as a filtering criterion. Default is `'hue'` |
| `start?` | `number` \| `string` | The minimum end of the `factor` range. |

#### Defined in

types.d.ts:159

___

### SortByOptions

Ƭ **SortByOptions**: `Object`

Options for specifying sorting conditions.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | `ColorToken` | The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor. |
| `colorspace?` | [`Colorspaces`](nearest.md#colorspaces) | The colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' \| 'contrast' \| 'distance'`. |
| `factor?` | [`Factor`](filterBy.md#factor) | The factor to use for sorting the colors. |
| `order?` | ``"asc"`` \| ``"desc"`` | The arrangement order of the colors either `asc \| desc`. Default is ascending (`asc`). |

#### Defined in

types.d.ts:269

## Functions

### color

▸ **color**(`color`): [`Color`](../classes/wrappers.Color.md)

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color token to bind. |

#### Returns

[`Color`](../classes/wrappers.Color.md)

A `new Color` class with all the utilities that take a single color as the first parameter bound to its prototype.

**`Example`**

```ts
import { color } from 'huetiful-js'

let wrapper = color('cyan').getHueFamily()
 // 'blue-green'
```

#### Defined in

[wrappers.js:995](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/wrappers.js#L995)

___

### load

▸ **load**(`colors`): [`ColorArray`](../classes/wrappers.ColorArray.md)

A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `any` | A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token. |

#### Returns

[`ColorArray`](../classes/wrappers.ColorArray.md)

A new instance of the `ColorArray` class with the passed in collection bound to it.

#### Defined in

[wrappers.js:299](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/wrappers.js#L299)
