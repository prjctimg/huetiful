[huetiful-js](../README.md) / filterBy

# Module: filterBy

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[filterBy.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/filterBy.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[filterBy.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/filterBy.js#L2)

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"chroma"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

The color property being queried.

#### Defined in

types.d.ts:419

## Functions

### filterBy

▸ **filterBy**(`collection`, `options?`): `any`

Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
* `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
* `'lightness'` - Returns colors in the specified lightness range.
* `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

* `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
* `luminance` - Returns colors in the specified luminance range.
* `'hue'` - Returns colors in the specified hue ranges between 0 to 360.

For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | The collection of colors to filter. |
| `options` | [`FilterByOptions`](wrappers.md#filterbyoptions) |  |

#### Returns

`any`

**`See`**

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

**`Example`**

```ts
import { filterBy } from 'huetiful-js'

let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

// Filtering colors by their relative contrast against 'green'. 
// The collection will include colors with a relative contrast equal to 3 or greater.

console.log(filterBy('contrast','>=3')(sample,{ against:'green' }))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

[filterBy.js:63](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/filterBy.js#L63)
