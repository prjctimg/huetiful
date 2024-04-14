[huetiful-js](../README.md) / [wrappers](../modules/wrappers.md) / ColorArray

# Class: ColorArray

[wrappers](../modules/wrappers.md).ColorArray

**`Example`**

```ts
import { ColorArray } from 'huetiful-js'

let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
```

## Table of contents

### Constructors

- [constructor](wrappers.ColorArray.md#constructor)

### Methods

- [discoverPalettes](wrappers.ColorArray.md#discoverpalettes)
- [filterByChroma](wrappers.ColorArray.md#filterbychroma)
- [filterByContrast](wrappers.ColorArray.md#filterbycontrast)
- [filterByDistance](wrappers.ColorArray.md#filterbydistance)
- [filterByHue](wrappers.ColorArray.md#filterbyhue)
- [filterByLightness](wrappers.ColorArray.md#filterbylightness)
- [filterByLuminance](wrappers.ColorArray.md#filterbyluminance)
- [getFarthestChromaFrom](wrappers.ColorArray.md#getfarthestchromafrom)
- [getFarthestHue](wrappers.ColorArray.md#getfarthesthue)
- [getFarthestHueFrom](wrappers.ColorArray.md#getfarthesthuefrom)
- [getFarthestLightness](wrappers.ColorArray.md#getfarthestlightness)
- [getFarthestLightnessFrom](wrappers.ColorArray.md#getfarthestlightnessfrom)
- [getFarthestLuminanceFrom](wrappers.ColorArray.md#getfarthestluminancefrom)
- [getMeanChroma](wrappers.ColorArray.md#getmeanchroma)
- [getMeanContrast](wrappers.ColorArray.md#getmeancontrast)
- [getMeanDistance](wrappers.ColorArray.md#getmeandistance)
- [getMeanHue](wrappers.ColorArray.md#getmeanhue)
- [getMeanLightness](wrappers.ColorArray.md#getmeanlightness)
- [getMeanLuminance](wrappers.ColorArray.md#getmeanluminance)
- [getNearestChromaFrom](wrappers.ColorArray.md#getnearestchromafrom)
- [getNearestColor](wrappers.ColorArray.md#getnearestcolor)
- [getNearestHue](wrappers.ColorArray.md#getnearesthue)
- [getNearestHueFrom](wrappers.ColorArray.md#getnearesthuefrom)
- [getNearestLightness](wrappers.ColorArray.md#getnearestlightness)
- [getNearestLightnessFrom](wrappers.ColorArray.md#getnearestlightnessfrom)
- [getNearestLuminanceFrom](wrappers.ColorArray.md#getnearestluminancefrom)
- [interpolateSpline](wrappers.ColorArray.md#interpolatespline)
- [output](wrappers.ColorArray.md#output)
- [sortByChroma](wrappers.ColorArray.md#sortbychroma)
- [sortByContrast](wrappers.ColorArray.md#sortbycontrast)
- [sortByDistance](wrappers.ColorArray.md#sortbydistance)
- [sortByHue](wrappers.ColorArray.md#sortbyhue)
- [sortByLightness](wrappers.ColorArray.md#sortbylightness)
- [sortByLuminance](wrappers.ColorArray.md#sortbyluminance)

## Constructors

### constructor

• **new ColorArray**(`colors`): [`ColorArray`](wrappers.ColorArray.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `Collection` | The collection of colors to bind. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

#### Defined in

[src/wrappers.js:95](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L95)

## Methods

### discoverPalettes

▸ **discoverPalettes**(`schemeType`): [`ColorArray`](wrappers.ColorArray.md)

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | `SchemeType` | (Optional) The palette type you want to return. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

A collection of colors if the `schemeType` parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
 "#4e0000",
 "#3e0000",
 "#310000",
]

console.log(load(sample).discoverPalettes(sample, "tetradic").output())
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

#### Defined in

[src/wrappers.js:581](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L581)

___

### filterByChroma

▸ **filterByChroma**(`start`, `end`, `colorspace?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a `collection` of colors in the specified `saturation/chroma` range from the bound collection.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `string` \| `number` | The minimum end of the `saturation/chroma` range. |
| `end` | `string` \| `number` | The maximum end of the `saturation/chroma` range. |
| `colorspace?` | `HueColorSpaces` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

Collection of filtered colors.

**`See`**

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.

**`Example`**

```ts
import { load } from 'huetiful-js'

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

console.log(load(sample).filterByChroma(0.1));

// [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
```

#### Defined in

[src/wrappers.js:713](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L713)

___

### filterByContrast

▸ **filterByContrast**(`against`, `start`, `end`): [`ColorArray`](wrappers.ColorArray.md)

Returns collection of colors within the specified contrast range. The contrast is tested against a comparison (`'against'`) color and the specified contrast ranges.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. |
| `start` | `string` \| `number` | The minimum end of the contrast range. Default is `1`. |
| `end` | `string` \| `number` | The maximum end of the contrast range. The default is `21`. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

Collection of filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'

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

console.log(load(sample).filterByContrast('green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

[src/wrappers.js:837](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L837)

___

### filterByDistance

▸ **filterByDistance**(`against`, `start?`, `end?`): [`ColorArray`](wrappers.ColorArray.md)

Returns colors with the specified distance range from the bound `collection`. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | `undefined` | The color to compare against. |
| `start` | `string` \| `number` | `0.05` | The minimum end of the distance range. |
| `end` | `string` \| `number` | `Infinity` | The maximum end of the distance range. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

Collection of filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'

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

console.log(load(sample)filterByDistance("yellow", 0.1))
// [ '#ffff00' ]
```

#### Defined in

[src/wrappers.js:793](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L793)

___

### filterByHue

▸ **filterByHue**(`start?`, `end?`): [`ColorArray`](wrappers.ColorArray.md)

Returns colors in the specified hue ranges between 0 to 360.
Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `string` \| `number` | `0` | The minimum end of the `hue` range. |
| `end` | `string` \| `number` | `360` | The maximum end of the `hue` range. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

A collecion of the filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'

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

load(sample).filterByHue(20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
```

#### Defined in

[src/wrappers.js:880](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L880)

___

### filterByLightness

▸ **filterByLightness**(`start`, `end`): [`ColorArray`](wrappers.ColorArray.md)

Returns a `collection` of colors in the specified `lightness` range.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `string` \| `number` | The minimum end of the `lightness` range. |
| `end` | `string` \| `number` | The maximum end of the `lightness` range. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

Collection of filtered colors.

**`See`**

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.

**`Example`**

```ts
import { load } from 'huetiful-js'
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

load(sample).filterByLightness(20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
```

#### Defined in

[src/wrappers.js:760](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L760)

___

### filterByLuminance

▸ **filterByLuminance**(`start?`, `end?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a `collection` of colors in the specified luminance range. The range is normalised to [0,1].
Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `start` | `string` \| `number` | `0.05` | The minimum end of the luminance range. |
| `end` | `string` \| `number` | `1` | The maximum end of the luminance range. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

Collection of filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'
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

load(sample).filterByLuminance(0.4, 0.9)

// [ '#00ffdc', '#00ff78' ]
```

#### Defined in

[src/wrappers.js:915](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L915)

___

### getFarthestChromaFrom

▸ **getFarthestChromaFrom**(`against`, `colorspace?`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the largest chroma/saturation difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The largest chroma/saturation difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },
     mode='lch'

     console.log(load(sample).getFarthestChromaFrom(against,mode))

     // 35
```

#### Defined in

[src/wrappers.js:153](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L153)

___

### getFarthestHue

▸ **getFarthestHue**(`colorspace?`, `colorObj?`): `FactObject`

Returns the largest hue angle from the bound collection.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`FactObject`

The largest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(sample).getFarthestHue('lch'))
// 273.54920266436477
```

#### Defined in

[src/wrappers.js:601](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L601)

___

### getFarthestHueFrom

▸ **getFarthestHueFrom**(`against`, `colorspace?`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the largest hue angle difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The largest hue angle difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },
     mode='lch'

     console.log(load(sample).getFarthestHueFrom(against,mode))

     // 35
```

#### Defined in

[src/wrappers.js:304](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L304)

___

### getFarthestLightness

▸ **getFarthestLightness**(`colorspace?`, `colorObj?`): `FactObject`

Returns the largest `lightness` value from the bound collection.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with `factor` (lightness) and `name` of the color as keys. Default is false. |

#### Returns

`FactObject`

The largest `lightness` value in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getFarthestLightness('lch', true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

#### Defined in

[src/wrappers.js:671](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L671)

___

### getFarthestLightnessFrom

▸ **getFarthestLightnessFrom**(`against`, `colorspace?`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the largest lightness difference between the colors the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The largest lightness difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },
     mode='lch'

     console.log(load(sample)getFarthestLightnessFrom(against,mode))

     // 35
```

#### Defined in

[src/wrappers.js:216](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L216)

___

### getFarthestLuminanceFrom

▸ **getFarthestLuminanceFrom**(`against`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the largest `luminance` difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The largest lightness difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestLuminanceFrom } from 'huetiful-js'
var sample = [
 { l: 40, c: 20, h: 40, mode: 'lch' },
 { l: 20, c: 10, h: 20, mode: 'lch' },
 { l: 10, c: 40, h: 10, mode: 'lch' }
],
against = { l: 5, c: 5, h: 5, mode: 'lch' };

console.log(getFarthestLuminanceFrom(sample, against));
// 0.10644205738623673
```

#### Defined in

[src/wrappers.js:359](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L359)

___

### getMeanChroma

▸ **getMeanChroma**(`colorspace?`): `number`

Returns the average `chroma` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | The colorspace to fetch the `chroma` channel value from. |

#### Returns

`number`

The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 30, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ]

     console.log(color(sample).getMeanChroma())

     // 30
```

#### Defined in

[src/wrappers.js:385](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L385)

___

### getMeanContrast

▸ **getMeanContrast**(`against`): `number`

Returns the average `contrast` from the bound `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black` |

#### Returns

`number`

The average `distance` in the passed in `collection` .

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample = [
 { l: 40, c: 20, h: 40, mode: 'lch' },
 { l: 20, c: 30, h: 20, mode: 'lch' },
 { l: 10, c: 40, h: 10, mode: 'lch' }
],
against = 'blue';

console.log(load(sample).getMeanContrast(against));

// 1.5960886749927419
```

#### Defined in

[src/wrappers.js:412](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L412)

___

### getMeanDistance

▸ **getMeanDistance**(`against`): `number`

Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`. |

#### Returns

`number`

The average `distance` in the passed in `collection` .

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample = [
 { l: 40, c: 20, h: 40, mode: 'lch' },
 { l: 20, c: 30, h: 20, mode: 'lch' },
 { l: 10, c: 40, h: 10, mode: 'lch' }
],
against = 'blue';

console.log(load(against).getMeanDistance(sample));

// 142.7183074639663
```

#### Defined in

[src/wrappers.js:510](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L510)

___

### getMeanHue

▸ **getMeanHue**(`colorspace?`, `excludeGreys`): `number`

Returns the average `hue` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | The colorspace to fetch the `hue` channel value from. |
| `excludeGreys` | `boolean` | Optional boolean to filter out achromatic colors from the passed in `collection`. |

#### Returns

`number`

The average `hue` angle in the passed in `collection`.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 10, mode: 'lch' },
       { l: 20, c: 30, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 6, mode: 'lch' }
     ]

     console.log(load(sample).getMeanHue())

     // 12
```

#### Defined in

[src/wrappers.js:461](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L461)

___

### getMeanLightness

▸ **getMeanLightness**(`colorspace?`): `number`

Returns the average `lightness` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | `'lch'` | The colorspace to fetch the `lightness` channel value from. |

#### Returns

`number`

The average `lightness` in the passed in `collection`.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 30, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ]

     console.log(load(sample).getMeanLightness())

     // 20
```

#### Defined in

[src/wrappers.js:435](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L435)

___

### getMeanLuminance

▸ **getMeanLuminance**(): `number`

Returns the average relative `luminance` from the bound `collection` of colors.

#### Returns

`number`

The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 30, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ]

     console.log(load(sample).getMeanLuminance())

     // 0.05158704622405754
```

#### Defined in

[src/wrappers.js:484](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L484)

___

### getNearestChromaFrom

▸ **getNearestChromaFrom**(`against`, `colorspace?`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the smallest chroma/saturation difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The smallest chroma/saturation difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },
     mode='lch'

     console.log(load(sample).getNearestChromaFrom(against,mode))

     // 5
```

#### Defined in

[src/wrappers.js:185](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L185)

___

### getNearestColor

▸ **getNearestColor**(`color`, `num?`): [`ColorArray`](wrappers.ColorArray.md)

Returns the nearest color(s) in the bound collection against

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](../modules/accessibility.md#colortoken) | `undefined` | The color to use for distance comparison. |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

An array of colors.

**`Example`**

```ts
import { load } from 'huetiful-js';

let cols = tailwindColors('all', '500')

console.log(load(cols).getNearestColor('blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[src/wrappers.js:116](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L116)

___

### getNearestHue

▸ **getNearestHue**(`colorspace?`, `colorObj?`): `FactObject`

Returns the smallest `hue` angle from the bound `collection`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`FactObject`

The smallest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(sample).getNearestHue('lch'))
// 12.462831644544274
```

#### Defined in

[src/wrappers.js:623](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L623)

___

### getNearestHueFrom

▸ **getNearestHueFrom**(`against`, `colorspace?`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the smallest `hue` angle difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The smallest hue angle difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },
     mode='lch'

     console.log(load(sample).getNearestHueFrom(against,mode))

     // 5
```

#### Defined in

[src/wrappers.js:275](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L275)

___

### getNearestLightness

▸ **getNearestLightness**(`colorspace?`, `colorObj?`): `FactObject`

Returns the smallest `lightness` value from the bound collection.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`FactObject`

The smallest `lightness` value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNeareastLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getNearestLightness('lch', true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

#### Defined in

[src/wrappers.js:647](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L647)

___

### getNearestLightnessFrom

▸ **getNearestLightnessFrom**(`against`, `colorspace?`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the smallest lightness difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The smallest lightness difference in the colors passed in or a custom object.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },
     mode='lch'

     console.log(load(sample).getNearestLightnessFrom(against,mode))

     // 5
```

#### Defined in

[src/wrappers.js:245](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L245)

___

### getNearestLuminanceFrom

▸ **getNearestLuminanceFrom**(`against`, `colorObj?`): `FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

Gets the smallest `luminance` difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject` \| [`ColorArray`](wrappers.ColorArray.md)

The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
       { l: 40, c: 20, h: 40, mode: 'lch' },
       { l: 20, c: 10, h: 20, mode: 'lch' },
       { l: 10, c: 40, h: 10, mode: 'lch' }
     ],
     against = { l: 5, c: 5, h: 5, mode: 'lch' },

   console.log(load(sample).getNearestLuminanceFrom(against));

// 0.00831940271523677
```

#### Defined in

[src/wrappers.js:331](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L331)

___

### interpolateSpline

▸ **interpolateSpline**(`colorspace?`, `samples`, `kind`, `closed`, `options`): [`ColorArray`](wrappers.ColorArray.md)

*  Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.
  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. * |
| `samples` | `any` | - |
| `kind` | ``"basis"`` \| ``"monotone"`` \| ``"natural"`` | The type of the spline interpolation method. Default is basis. * |
| `closed` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false * |
| `options` | `Pick`\<`InterpolatorOptions`, ``"easingFn"`` \| ``"hueFixup"`` \| ``"domain"``\> | Optional channel specific overrides. * |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The discovered palettes.Respects the `ColorToken` type of the first color in the array of colors to interpolate
  *
  *

**`Example`**

```ts
*
  * import { load } from 'huetiful-js';

console.log(load(['pink', 'blue']).interpolateSpline('lch', 8));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
  *
```

#### Defined in

[src/wrappers.js:539](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L539)

___

### output

▸ **output**(): `Collection`

#### Returns

`Collection`

Returns the result value from the chain.

#### Defined in

[src/wrappers.js:1162](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1162)

___

### sortByChroma

▸ **sortByChroma**(`order?`, `colorspace?`): [`ColorArray`](wrappers.ColorArray.md)

Sorts colors in the bound collection according to their saturation. Achromatic colors are not supported as they lack a truthy `chroma` or saturation channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | `Order` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | `HueColorSpaces` | The mode color space to compute the saturation value in. The default is jch . |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = load(sample).sortByChroma();
console.log(sorted);

// [
 '#310000', '#3e0000',
 '#164100', '#4e0000',
 '#600000', '#720000',
 '#00ffdc', '#007e00',
 '#00ff78', '#00c000',
 '#ffff00'
]

let sortedDescending = sortByChroma(sample,'desc');
console.log(sortedDescending)
// [
 '#ffff00', '#00c000',
 '#00ff78', '#007e00',
 '#00ffdc', '#720000',
 '#600000', '#4e0000',
 '#164100', '#3e0000',
 '#310000'
]
```

#### Defined in

[src/wrappers.js:1086](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1086)

___

### sortByContrast

▸ **sortByContrast**(`against`, `order?`): [`ColorArray`](wrappers.ColorArray.md)

Sorts colors in the bound collection according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare against. |
| `order?` | `Order` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(load(sample).sortByContrast('yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(load(sample).sortByContrast('yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
```

#### Defined in

[src/wrappers.js:1111](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1111)

___

### sortByDistance

▸ **sortByDistance**(`against`, `order?`): [`ColorArray`](wrappers.ColorArray.md)

Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | `Order` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 load(sample)sortByDistance('yellow', 'asc')
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc', {
   mode: 'lch',
 })
)

// [ 'green', 'brown', 'red', 'purple' ]
```

#### Defined in

[src/wrappers.js:989](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L989)

___

### sortByHue

▸ **sortByHue**(`order?`, `colorspace?`): [`ColorArray`](wrappers.ColorArray.md)

Sorts colors in the bound collection according to hue angles. It works with any color space with a hue channel. Note that hue values between `hsl` and `lch` do not align. Achromatic colors are not supported.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `order?` | `Order` | `'asc'` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | `HueColorSpaces` | `undefined` | The colorspace to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

A collection of the sorted color values.

**`Example`**

```ts
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sortedDescending = load(sample)sortByHue('desc');
console.log(sortedDescending)
// [
 '#00ffdc', '#00ff78',
 '#007e00', '#00c000',
 '#164100', '#ffff00',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

[src/wrappers.js:1153](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1153)

___

### sortByLightness

▸ **sortByLightness**(`order?`): [`ColorArray`](wrappers.ColorArray.md)

Sorts colors in the bound collection according to their lightness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | `Order` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from "huetiful-js";

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
]

load(sample).sortByLightness('desc')

// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

[src/wrappers.js:958](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L958)

___

### sortByLuminance

▸ **sortByLuminance**(`order?`): [`ColorArray`](wrappers.ColorArray.md)

Sorts colors in the bound collection according to the relative brightness as defined by WCAG.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | `Order` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sortedDescending = load(sample).sortByLuminance("desc");
console.log(sortedDescending)
// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

[src/wrappers.js:1033](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1033)
