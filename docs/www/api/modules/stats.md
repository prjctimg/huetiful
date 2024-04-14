[huetiful-js](../README.md) / stats

# Module: stats

## Table of contents

### Functions

- [getFarthestChroma](stats.md#getfarthestchroma)
- [getFarthestChromaFrom](stats.md#getfarthestchromafrom)
- [getFarthestContrast](stats.md#getfarthestcontrast)
- [getFarthestHue](stats.md#getfarthesthue)
- [getFarthestHueFrom](stats.md#getfarthesthuefrom)
- [getFarthestLightness](stats.md#getfarthestlightness)
- [getFarthestLightnessFrom](stats.md#getfarthestlightnessfrom)
- [getFarthestLuminanceFrom](stats.md#getfarthestluminancefrom)
- [getMeanChroma](stats.md#getmeanchroma)
- [getMeanContrast](stats.md#getmeancontrast)
- [getMeanDistance](stats.md#getmeandistance)
- [getMeanHue](stats.md#getmeanhue)
- [getMeanLightness](stats.md#getmeanlightness)
- [getMeanLuminance](stats.md#getmeanluminance)
- [getNearestChroma](stats.md#getnearestchroma)
- [getNearestChromaFrom](stats.md#getnearestchromafrom)
- [getNearestContrast](stats.md#getnearestcontrast)
- [getNearestHue](stats.md#getnearesthue)
- [getNearestHueFrom](stats.md#getnearesthuefrom)
- [getNearestLightness](stats.md#getnearestlightness)
- [getNearestLightnessFrom](stats.md#getnearestlightnessfrom)
- [getNearestLuminanceFrom](stats.md#getnearestluminancefrom)

## Functions

### getFarthestChroma

▸ **getFarthestChroma**(`collection?`, `colorspace?`, `colorObj?`): `FactObject`

Gets the largest saturation value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The collection of colors to query the color with the largest saturation value. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
```

#### Defined in

[src/stats.js:618](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L618)

___

### getFarthestChromaFrom

▸ **getFarthestChromaFrom**(`collection?`, `against?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the largest chroma/saturation difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest chroma/saturation difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestChromaFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(getFarthestChromaFrom(sample,against,mode))

       // 35
```

#### Defined in

[src/stats.js:81](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L81)

___

### getFarthestContrast

▸ **getFarthestContrast**(`collection?`, `against?`, `colorObj?`): `FactObject`

Returns the largest contrast value from the passed in colors compared against a sample color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query the color with the largest contrast value. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest contrast value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }
```

#### Defined in

[src/stats.js:563](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L563)

___

### getFarthestHue

▸ **getFarthestHue**(`collection?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the largest hue angle from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The array of colors to query the color with the largest hue value. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
```

#### Defined in

[src/stats.js:727](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L727)

___

### getFarthestHueFrom

▸ **getFarthestHueFrom**(`collection?`, `against?`, `colorspace?`, `colorObj?`): `FactObject`

Gets the largest hue angle difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest hue angle difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestHueFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(getFarthestHueFrom(sample,against,mode))

       // 35
```

#### Defined in

[src/stats.js:117](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L117)

___

### getFarthestLightness

▸ **getFarthestLightness**(`collection?`, `colorspace?`, `colorObj?`): `FactObject`

Gets the largest `lightness` value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The collection of colors to query the color with the largest `lightness` value. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode `colorspace` to retrieve the `lightness` value from. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest `lightness` value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, 'lch',true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

#### Defined in

[src/stats.js:678](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L678)

___

### getFarthestLightnessFrom

▸ **getFarthestLightnessFrom**(`collection?`, `against?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the largest `lightness` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `[]` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | `undefined` | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | `undefined` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest `lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestLightnessFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(getFarthestLightnessFrom(sample,against,mode))

       // 35
```

#### Defined in

[src/stats.js:155](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L155)

___

### getFarthestLuminanceFrom

▸ **getFarthestLuminanceFrom**(`collection?`, `against?`, `colorObj?`): `FactObject`

Returns the largest `luminance` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The largest `lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

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

[src/stats.js:310](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L310)

___

### getMeanChroma

▸ **getMeanChroma**(`collection?`, `colorspace?`): `number`

Returns the average `chroma` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of color tokens to query. |
| `colorspace?` | `HueColorSpaces` | The colorspace to fetch the `chroma` channel value from. |

#### Returns

`number`

The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.

**`Example`**

```ts
import { getMeanChroma } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ]

       console.log(getMeanChroma(sample))

       // 30
```

#### Defined in

[src/stats.js:365](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L365)

___

### getMeanContrast

▸ **getMeanContrast**(`collection?`, `against?`): `number`

Returns the average `contrast` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of color tokens to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black` |

#### Returns

`number`

The average `distance` in the passed in `collection` .

**`Example`**

```ts
import { getMeanContrast } from 'huetiful-js'

var sample = [
   { l: 40, c: 20, h: 40, mode: 'lch' },
   { l: 20, c: 30, h: 20, mode: 'lch' },
   { l: 10, c: 40, h: 10, mode: 'lch' }
 ],
 against = 'blue';

console.log(getMeanContrast(sample, against));

// 1.5960886749927419
```

#### Defined in

[src/stats.js:474](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L474)

___

### getMeanDistance

▸ **getMeanDistance**(`collection?`, `against?`): `number`

Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of color tokens to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`. |

#### Returns

`number`

The average `distance` in the passed in `collection` .

**`Example`**

```ts
import { getMeanDistance } from 'huetiful-js'

var sample = [
   { l: 40, c: 20, h: 40, mode: 'lch' },
   { l: 20, c: 30, h: 20, mode: 'lch' },
   { l: 10, c: 40, h: 10, mode: 'lch' }
 ],
 against = 'blue';

console.log(getMeanDistance(sample, against));

// 142.7183074639663
```

#### Defined in

[src/stats.js:446](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L446)

___

### getMeanHue

▸ **getMeanHue**(`collection?`, `colorspace?`, `excludeGreys?`): `number`

Returns the average `hue` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The collection of color tokens to query. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The colorspace to fetch the `hue` channel value from. |
| `excludeGreys` | `boolean` | `false` | Optional boolean to filter out achromatic colors from the passed in `collection`. Default is `false`. |

#### Returns

`number`

The average `hue` angle in the passed in `collection`.

**`Example`**

```ts
import { getMeanHue } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 10, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 6, mode: 'lch' }
       ]

       console.log(getMeanHue(sample))

       // 12
```

#### Defined in

[src/stats.js:418](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L418)

___

### getMeanLightness

▸ **getMeanLightness**(`collection?`, `colorspace?`): `number`

Returns the average `lightness` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of color tokens to query. |
| `colorspace?` | `HueColorSpaces` | The colorspace to fetch the `lightness` channel value from. |

#### Returns

`number`

The average `lightness` in the passed in `collection`.

**`Example`**

```ts
import { getMeanLightness } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ]

       console.log(getMeanLightness(sample))

       // 20
```

#### Defined in

[src/stats.js:391](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L391)

___

### getMeanLuminance

▸ **getMeanLuminance**(`collection?`): `number`

Returns the average relative `luminance` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of color tokens to query. |

#### Returns

`number`

The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.

**`Example`**

```ts
import { getMeanLuminance } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ]

       console.log(getMeanLuminance(sample))

       // 0.05158704622405754
```

#### Defined in

[src/stats.js:500](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L500)

___

### getNearestChroma

▸ **getNearestChroma**(`collection?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the smallest `chroma` / `saturation` value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The collection of colors to query the color with the smallest chroma/saturation value. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode `colorspace` to retrieve saturation/chroma values. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest chroma/saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
```

#### Defined in

[src/stats.js:590](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L590)

___

### getNearestChromaFrom

▸ **getNearestChromaFrom**(`collection?`, `against?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the smallest chroma/saturation difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest chroma/saturation difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestChromaFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(getNearestChromaFrom(sample,against,mode))

       // 5
```

#### Defined in

[src/stats.js:198](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L198)

___

### getNearestContrast

▸ **getNearestContrast**(`collection?`, `against?`, `colorObj?`): `FactObject`

Returns the smallest contrast value from the passed in colors compared against a sample color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query the color with the smallest contrast value. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest contrast value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestContrast } from 'huetiful-js'

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
```

#### Defined in

[src/stats.js:533](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L533)

___

### getNearestHue

▸ **getNearestHue**(`collection?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the smallest hue angle from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The collection of colors to query the color with the smallest hue value. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
```

#### Defined in

[src/stats.js:707](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L707)

___

### getNearestHueFrom

▸ **getNearestHueFrom**(`collection?`, `against?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the smallest hue angle difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest hue angle difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestHueFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(getNearestHueFrom(sample,against,mode))

       // 5
```

#### Defined in

[src/stats.js:235](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L235)

___

### getNearestLightness

▸ **getNearestLightness**(`collection?`, `colorspace?`, `colorObj?`): `FactObject`

Gets the smallest lightness value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `undefined` | The collection of colors to query the color with the smallest lightness value. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode `colorspace` to retrieve the lightness value from. |
| `colorObj?` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest lightness value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, 'lch',true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

#### Defined in

[src/stats.js:647](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L647)

___

### getNearestLightnessFrom

▸ **getNearestLightnessFrom**(`collection?`, `against?`, `colorspace?`, `colorObj?`): `FactObject`

Returns the smallest `lightness` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection?` | `Collection` | `[]` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | `undefined` | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `HueColorSpaces` | `undefined` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | `undefined` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest` lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestLightnessFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(getNearestLightnessFrom(sample,against,mode))

       // 5
```

#### Defined in

[src/stats.js:271](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L271)

___

### getNearestLuminanceFrom

▸ **getNearestLuminanceFrom**(`collection?`, `against?`, `colorObj?`): `FactObject`

Returns the smallest `luminance` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection?` | `Collection` | The collection of colors to query. |
| `against?` | [`ColorToken`](accessibility.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`. |

#### Returns

`FactObject`

The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestLuminanceFrom } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },

     console.log(getNearestLuminanceFrom(sample, against));

// 0.00831940271523677
```

#### Defined in

[src/stats.js:339](https://github.com/prjctimg/huetiful/blob/cf8e303/src/stats.js#L339)
