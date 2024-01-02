[huetiful-js](../README.md) / [Modules](../modules.md) / filterBy

# Module::package: filterBy

## Table of contents:scroll:

### Functions:toolbox:

- [filterByContrast](filterBy.md#filterbycontrast)
- [filterByDistance](filterBy.md#filterbydistance)
- [filterByHue](filterBy.md#filterbyhue)
- [filterByLightness](filterBy.md#filterbylightness)
- [filterByLuminance](filterBy.md#filterbyluminance)
- [filterBySaturation](filterBy.md#filterbysaturation)

## Functions

### filterByContrast

▸ **filterByContrast**(`colors`, `against`, `startContrast?`, `endContrast?`): [`ColorToken`](types.md#colortoken)[]

Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to filter. |
| `against` | [`ColorToken`](types.md#colortoken) | `undefined` | - |
| `startContrast` | `number` | `1` | The minimum end of the contrast range. |
| `endContrast` | `number` | `21` | The maximum end of the contrast range. |

#### Returns:back:

[`ColorToken`](types.md#colortoken)[]

Array of filtered colors.

**`Example`** :clipboard:

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

▸ **filterByDistance**(`colors`, `against`, `startDistance?`, `endDistance?`, `colorspace?`, `weights?`): [`ColorToken`](types.md#colortoken)[]

Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to filter. |
| `against` | [`ColorToken`](types.md#colortoken) | `undefined` | - |
| `startDistance` | `number` | `0.05` | The minimum end of the distance range. |
| `endDistance?` | `number` | `undefined` | The maximum end of the distance range. |
| `colorspace?` | [`ColorSpaces`](types.md#colorspaces) | `undefined` | The color space to calculate the distance in . |
| `weights?` | [`number`, `number`, `number`, `number`] | `undefined` | The weighting values to pass to the Euclidean function. Default is [1,1,1,0]. |

#### Returns:back:

[`ColorToken`](types.md#colortoken)[]

Array of filtered colors.

**`Example`** :clipboard:

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

▸ **filterByHue**(`colors`, `startHue?`, `endHue?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[]

Returns colors in the specified hue ranges between 0 to 360.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to filter. |
| `startHue` | `number` | `0` | The minimum end of the hue range. |
| `endHue` | `number` | `360` | The maximum end of the hue range. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | - |

#### Returns:back:

[`ColorToken`](types.md#colortoken)[]

Array of the filtered colors.

**`Example`** :clipboard:

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

▸ **filterByLightness**(`colors`, `startLightness?`, `endLightness?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[]

Returns an array of colors in the specified lightness range. The range is between 0 and 100.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to filter. |
| `startLightness` | `number` | `5` | The minimum end of the lightness range. |
| `endLightness` | `number` | `100` | The maximum end of the lightness range. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The mode colorspace to retrieve the lightness value from. The default is lch65 |

#### Returns:back:

[`ColorToken`](types.md#colortoken)[]

Array of filtered colors.

**`Example`** :clipboard:

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

▸ **filterByLuminance**(`colors`, `startLuminance?`, `endLuminance?`): [`ColorToken`](types.md#colortoken)[]

Returns an array of colors in the specified luminance range. The range is normalised to [0,1].

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to filter. |
| `startLuminance` | `number` | `0.05` | The minimum end of the luminance range. |
| `endLuminance` | `number` | `1` | The maximum end of the luminance range. |

#### Returns:back:

[`ColorToken`](types.md#colortoken)[]

Array of filtered colors.

**`Example`** :clipboard:

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

▸ **filterBySaturation**(`colors`, `startSaturation?`, `endSaturation?`, `colorspace?`): [`ColorToken`](types.md#colortoken)[]

Returns an array of colors in the specified saturation range. The range is normalised to [0,1].

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to filter. |
| `startSaturation` | `number` | `0.05` | The minimum end of the saturation range. |
| `endSaturation` | `number` | `1` | The maximum end of the saturation range. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns:back:

[`ColorToken`](types.md#colortoken)[]

Array of filtered colors.

**`Example`** :clipboard:

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
