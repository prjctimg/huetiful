[huetiful-js](../README.md) / nearest

# Module: nearest

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[nearest.js:4](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/nearest.js#L4)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[nearest.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/nearest.js#L3)

___

### Colorspaces

Ƭ **Colorspaces**: ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"oklab"`` \| ``"rgb"`` \| ``"lch"`` \| ``"jch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"oklch"`` \| ``"hsv"`` \| ``"hwb"``

The `colorspace` or `mode` to use.

#### Defined in

types.d.ts:432

## Functions

### nearest

▸ **nearest**(`collection`, `against`, `num?`): `any`

Returns the nearest color(s) in a collection as compared `against` the passed in color using the `differenceHyab` metric function.

* To get the nearest color from the Tailwind CSS default palette pass in the string `tailwind` as the `collection` parameter.
* If the `num` parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `any` | `undefined` | The collection of colors to search for nearest colors. |
| `against` | `any` | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

`any`

**`Example`**

```ts
let cols = colors('all', '500')

console.log(nearest(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[nearest.js:30](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/nearest.js#L30)
