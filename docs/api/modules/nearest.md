[huetiful-js](../README.md) / nearest

# Module: nearest

## Type Aliases

### Colorspaces

Ƭ **Colorspaces**: ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"oklab"`` \| ``"rgb"`` \| ``"lch"`` \| ``"jch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"oklch"`` \| ``"hsv"`` \| ``"hwb"``

The `colorspace` or `mode` to use.

#### Defined in

[types/types.d.ts:272](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L272)

## Functions

### nearest

▸ **nearest**(`collection`, `against`, `num?`): `Collection`

Returns the nearest color(s) in a collection as compared `against` the passed in color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to search for nearest colors. |
| `against` | [`ColorToken`](alpha.md#colortoken) | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

`Collection`

A collection of colors.

**`Example`**

```ts
let cols = colors('all', '500')

console.log(nearest(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[src/nearest.js:27](https://github.com/prjctimg/huetiful/blob/ed00af0/src/nearest.js#L27)
