# Module:📦 filterBy

## Table of contents📜

### Functions🧰

- [filterByContrast](filterBy.md#filterByContrast)
- [filterByDistance](filterBy.md#filterByDistance)
- [filterByHue](filterBy.md#filterByHue)
- [filterByLightness](filterBy.md#filterByLightness)
- [filterByLuminance](filterBy.md#filterByLuminance)
- [filterBySaturation](filterBy.md#filterBySaturation)

## Functions

### filterByContrast

▸ **filterByContrast**(`collection`, `against`, `startContrast?`, `endContrast?`): [`ColorToken`](types.md#ColorToken)[]

Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `against` | [`ColorToken`](types.md#ColorToken) | `undefined` | - |
| `startContrast` | `number` | `1` | The minimum end of the contrast range. |
| `endContrast` | `number` | `21` | The maximum end of the contrast range. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

Array of filtered colors.

**`Example`** 📋

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

___

### filterByDistance

▸ **filterByDistance**(`collection`, `against`, `startDistance?`, `endDistance?`): [`ColorToken`](types.md#ColorToken)[]

Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges. Uses the differenceHyab metric for calculating the distances.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `against` | [`ColorToken`](types.md#ColorToken) | `undefined` | - |
| `startDistance` | `number` | `0.05` | The minimum end of the distance range. |
| `endDistance?` | `number` | `undefined` | The maximum end of the distance range. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

Array of filtered colors.

**`Example`** 📋

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

___

### filterByHue

▸ **filterByHue**(`collection`, `startHue?`, `endHue?`, `colorspace?`): [`ColorToken`](types.md#ColorToken)[]

Returns colors in the specified hue ranges between 0 to 360.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `startHue` | `number` | `0` | The minimum end of the hue range. |
| `endHue` | `number` | `360` | The maximum end of the hue range. |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | - |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

Array of the filtered colors.

**`Example`** 📋

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

___

### filterByLightness

▸ **filterByLightness**(`collection`, `startLightness?`, `endLightness?`, `colorspace?`): [`ColorToken`](types.md#ColorToken)[]

Returns an array of colors in the specified lightness range. The range is between 0 and 100.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `startLightness` | `number` | `5` | The minimum end of the lightness range. |
| `endLightness` | `number` | `100` | The maximum end of the lightness range. |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | The mode colorspace to retrieve the lightness value from. The default is lch65 |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

Array of filtered colors.

**`Example`** 📋

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

___

### filterByLuminance

▸ **filterByLuminance**(`collection`, `startLuminance?`, `endLuminance?`): [`ColorToken`](types.md#ColorToken)[]

Returns an array of colors in the specified luminance range. The range is normalised to [0,1].

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `startLuminance` | `number` | `0.05` | The minimum end of the luminance range. |
| `endLuminance` | `number` | `1` | The maximum end of the luminance range. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

Array of filtered colors.

**`Example`** 📋

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

___

### filterBySaturation

▸ **filterBySaturation**(`collection`, `startSaturation?`, `endSaturation?`, `colorspace?`): [`ColorToken`](types.md#ColorToken)[]

Returns an array of colors in the specified saturation range. The range is normalised to [0,1].

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `startSaturation` | `number` | `0.05` | The minimum end of the saturation range. |
| `endSaturation` | `number` | `1` | The maximum end of the saturation range. |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

Array of filtered colors.

**`Example`** 📋

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
