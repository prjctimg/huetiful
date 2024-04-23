[huetiful-js](../README.md) / filterBy

# Module: filterBy

## Type Aliases

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"chroma"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

The color property being queried.

#### Defined in

[types/types.d.ts:259](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L259)

## Functions

### filterBy

▸ **filterBy**(`factor`, `start`, `end`, `options?`): (`collection`: `Collection`) => `Collection`

Filters a collection of colors using the specified `factor` as the criteria. The supported options are:
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

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](filterBy.md#factor) | `undefined` | The factor to use as a filtering criteria. |
| `start` | `string` \| `number` | `undefined` | The minimum end of the `factor` range. |
| `end` | `string` \| `number` | `undefined` | The maximum end of the `factor` range. |
| `options` | `Object` | `undefined` | - |
| `options.against` | [`ColorToken`](alpha.md#colortoken) | `'#fff'` |  |
| `options.colorspace` | [`Colorspaces`](nearest.md#colorspaces) | `'lch'` |  |

#### Returns

`fn`

Array of filtered colors.

▸ (`collection`): `Collection`

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection` |

##### Returns

`Collection`

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

console.log(filterBy('contrast','>=3')(sample,{ against:'green' }))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

[src/filterBy.js:64](https://github.com/prjctimg/huetiful/blob/ed00af0/src/filterBy.js#L64)
