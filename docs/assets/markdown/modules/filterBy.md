# Module: filterBy

## Table of contents

### Functions

- [filterByContrast](filterBy.md#filterbycontrast)
- [filterByDistance](filterBy.md#filterbydistance)
- [filterByHue](filterBy.md#filterbyhue)
- [filterByLightness](filterBy.md#filterbylightness)
- [filterByLuminance](filterBy.md#filterbyluminance)
- [filterBySaturation](filterBy.md#filterbysaturation)

## Functions

### filterByContrast

▸ **filterByContrast**(`collection`, `against`, `startContrast?`, `endContrast?`): [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to filter. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `startContrast?` | `number` | The minimum end of the contrast range.Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endContrast?` | `number` | The maximum end of the contrast range. |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Collection of filtered colors.

**`Example`**

```ts
import { filterByContrast } from 'huetiful-js'

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

console.log(filterByContrast(sample, 'green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

[filterBy.d.ts:215](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/filterBy.d.ts#L215)

___

### filterByDistance

▸ **filterByDistance**(`collection`, `against`, `startDistance?`, `endDistance?`): [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges. Uses the differenceHyab metric for calculating the distances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to filter. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `startDistance?` | `number` | The minimum end of the distance range.Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endDistance?` | `number` | The maximum end of the distance range. |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Collection of filtered colors.

**`Example`**

```ts
import { filterByDistance } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
]

console.log(filterByDistance(sample, "yellow", 0.1))
// [ '#ffff00' ]
```

#### Defined in

[filterBy.d.ts:180](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/filterBy.d.ts#L180)

___

### filterByHue

▸ **filterByHue**(`collection`, `startHue?`, `endHue?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns colors in the specified hue ranges between 0 to 360.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to filter. |
| `startHue?` | `number` | The minimum end of the hue range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endHue?` | `number` | The maximum end of the hue range. |
| `colorspace?` | `string` | - |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Array of the filtered colors.

**`Example`**

```ts
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

filterByHue(sample, 20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
```

#### Defined in

[filterBy.d.ts:150](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/filterBy.d.ts#L150)

___

### filterByLightness

▸ **filterByLightness**(`collection`, `startLightness?`, `endLightness?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns colors in the specified lightness range.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to filter. |
| `startLightness?` | `number` | The minimum end of the lightness range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endLightness?` | `number` | The maximum end of the lightness range. |
| `colorspace?` | `string` | The mode colorspace to retrieve the lightness value from. The default is lch65 |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Collection of filtered colors.

**`Example`**

```ts
import { filterByLightness } from 'huetiful-js'
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

filterByLightness(sample, 20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
```

#### Defined in

[filterBy.d.ts:118](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/filterBy.d.ts#L118)

___

### filterByLuminance

▸ **filterByLuminance**(`collection`, `startLuminance?`, `endLuminance?`): [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns colors in the specified luminance range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to filter. |
| `startLuminance?` | `number` | The minimum end of the luminance range.Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endLuminance?` | `number` | The maximum end of the luminance range. |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Array of filtered colors.

**`Example`**

```ts
import { filterByLuminance } from 'huetiful-js'
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

filterByLuminance(sample, 0.4, 0.9)

// [ '#00ffdc', '#00ff78' ]
```

#### Defined in

[filterBy.d.ts:81](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/filterBy.d.ts#L81)

___

### filterBySaturation

▸ **filterBySaturation**(`collection`, `startSaturation?`, `endSaturation?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Returns colors in the specified saturation range.

@ The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `startSaturation` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to filter. |
| `startSaturation?` | `number` | The minimum end of the saturation range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `endSaturation?` | `number` | The maximum end of the saturation range. |
| `colorspace?` | `string` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

[`ColorToken`](types.md#colortoken)[] \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\>

Collection of filtered colors.

**`Example`**

```ts
import { filterBySaturation } from 'huetiful-js'

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
 '#720000'
];

console.log(filterBySaturation(sample, 0.1));

// [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
```

#### Defined in

[filterBy.d.ts:47](https://github.com/prjctimg/huetiful/blob/b7fc63c/types/filterBy.d.ts#L47)
