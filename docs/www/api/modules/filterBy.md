[huetiful-js](../README.md) / filterBy

# Module: filterBy

## Table of contents

### Functions

- [filterByChroma](filterBy.md#filterbychroma)
- [filterByContrast](filterBy.md#filterbycontrast)
- [filterByDistance](filterBy.md#filterbydistance)
- [filterByHue](filterBy.md#filterbyhue)
- [filterByLightness](filterBy.md#filterbylightness)
- [filterByLuminance](filterBy.md#filterbyluminance)

## Functions

### filterByChroma

▸ **filterByChroma**(`collection`, `start?`, `end?`, `colorspace?`): `Collection`

Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.

But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
  * 
  * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
  * 
  *

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `any` | `undefined` | - |
| `start` | `string` \| `number` | `0.05` | The minimum end of the `chroma` range. * |
| `end` | `string` \| `number` | `100` | The maximum end of the `chroma` range. * |
| `colorspace` | `HueColorSpaces` | `'lch'` | The color space to fetch the `chroma` value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

`Collection`

Collection of filtered colors.

**`See`**

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.

**`Example`**

```ts
import { filterByChroma } from 'huetiful-js'

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

console.log(filterByChroma(sample, 0.1));

// [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
```

#### Defined in

[src/filterBy.js:107](https://github.com/prjctimg/huetiful/blob/cf8e303/src/filterBy.js#L107)

___

### filterByContrast

▸ **filterByContrast**(`collection?`, `against?`, `start?`, `end?`): `Collection`

Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `[]` | The collection of colors to filter. |
| `against` | `string` | `'#fff'` | - |
| `start` | `string` \| `number` | `1` | The minimum end of the contrast range. |
| `end` | `string` \| `number` | `21` | The maximum end of the contrast range. |

#### Returns

`Collection`

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

[src/filterBy.js:333](https://github.com/prjctimg/huetiful/blob/cf8e303/src/filterBy.js#L333)

___

### filterByDistance

▸ **filterByDistance**(`collection`, `against`, `start?`, `end?`): `Collection`

Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to filter. |
| `against` | `any` | `undefined` | - |
| `start` | `string` \| `number` | `0.05` | The minimum end of the `distance` range. |
| `end` | `string` \| `number` | `Infinity` | The maximum end of the `distance` range. |

#### Returns

`Collection`

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

[src/filterBy.js:288](https://github.com/prjctimg/huetiful/blob/cf8e303/src/filterBy.js#L288)

___

### filterByHue

▸ **filterByHue**(`collection`, `start?`, `end?`, `colorspace?`): `Collection`

Returns colors in the specified hue ranges between 0 to 360.

 Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to filter. |
| `start` | `string` \| `number` | `0` | The minimum end of the 'hue' range. |
| `end` | `string` \| `number` | `360` | The maximum end of the hue range. |
| `colorspace` | `string` | `'lch'` | - |

#### Returns

`Collection`

A collection of the filtered colors.

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

[src/filterBy.js:250](https://github.com/prjctimg/huetiful/blob/cf8e303/src/filterBy.js#L250)

___

### filterByLightness

▸ **filterByLightness**(`collection`, `start?`, `end`, `colorspace?`): `Collection`

Returns colors in the specified lightness range.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 

But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 *

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to filter. |
| `start` | `string` \| `number` | `0.05` | The minimum end of the lightness range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== \| === \| != \| !== \| >= \| <= \| < \| >` |
| `end` | `string` \| `number` | `undefined` | The maximum end of the lightness range. |
| `colorspace` | `HueColorSpaces` | `'lch'` | The mode colorspace to retrieve the lightness value from. The default is lch65 |

#### Returns

`Collection`

Collection of filtered colors.

**`See`**

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.

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

[src/filterBy.js:202](https://github.com/prjctimg/huetiful/blob/cf8e303/src/filterBy.js#L202)

___

### filterByLuminance

▸ **filterByLuminance**(`collection`, `start?`, `end?`): `any`

Returns colors in the specified luminance range.
Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` | The collection of colors to filter. |
| `start` | `string` \| `number` | `0.05` | The minimum end of the luminance range. |
| `end` | `string` \| `number` | `1` | The maximum end of the luminance range. |

#### Returns

`any`

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

[src/filterBy.js:160](https://github.com/prjctimg/huetiful/blob/cf8e303/src/filterBy.js#L160)
