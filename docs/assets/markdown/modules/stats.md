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

▸ **getFarthestChroma**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest saturation value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | - |
| `colorspace?` | `string` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
```

#### Defined in

[stats.d.ts:541](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L541)

___

### getFarthestChromaFrom

▸ **getFarthestChromaFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the largest chroma/saturation difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:30](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L30)

___

### getFarthestContrast

▸ **getFarthestContrast**(`collection`, `against`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the largest contrast value from the passed in colors compared against a sample color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the largest contrast value. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:489](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L489)

___

### getFarthestHue

▸ **getFarthestHue**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the largest hue angle from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | - |
| `colorspace?` | `string` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
```

#### Defined in

[stats.d.ts:592](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L592)

___

### getFarthestHueFrom

▸ **getFarthestHueFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue angle difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:105](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L105)

___

### getFarthestLightness

▸ **getFarthestLightness**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the largest lightness value. |
| `colorspace?` | `string` | THe mode colorspace to retrieve the lightness value from. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, 'lch',true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

#### Defined in

[stats.d.ts:649](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L649)

___

### getFarthestLightnessFrom

▸ **getFarthestLightnessFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the largest lightness difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest lightness difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

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

[stats.d.ts:180](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L180)

___

### getFarthestLuminanceFrom

▸ **getFarthestLuminanceFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the largest `luminance` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:284](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L284)

___

### getMeanChroma

▸ **getMeanChroma**(`collection`, `colorspace?`): `number` \| `undefined`

Returns the average `chroma` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of color tokens to query. |
| `colorspace?` | `string` | The colorspace to fetch the `chroma` channel value from. |

#### Returns

`number` \| `undefined`

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

[stats.d.ts:316](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L316)

___

### getMeanContrast

▸ **getMeanContrast**(`collection`, `against?`): `number`

Returns the average `contrast` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of color tokens to query. |
| `against?` | [`ColorToken`](types.md#colortoken) | The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black` |

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

[stats.d.ts:441](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L441)

___

### getMeanDistance

▸ **getMeanDistance**(`collection`, `against?`): `number`

Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of color tokens to query. |
| `against?` | [`ColorToken`](types.md#colortoken) | The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`. |

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

[stats.d.ts:414](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L414)

___

### getMeanHue

▸ **getMeanHue**(`collection`, `colorspace?`, `excludeGreys?`): `number`

Returns the average `hue` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of color tokens to query. |
| `colorspace?` | `string` | The colorspace to fetch the `hue` channel value from. |
| `excludeGreys?` | `boolean` | Optional boolean to filter out achromatic colors from the passed in `collection`. |

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

[stats.d.ts:365](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L365)

___

### getMeanLightness

▸ **getMeanLightness**(`collection`, `colorspace?`): `number`

Returns the average `lightness` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of color tokens to query. |
| `colorspace?` | `string` | The colorspace to fetch the `lightness` channel value from. |

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

[stats.d.ts:340](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L340)

___

### getMeanLuminance

▸ **getMeanLuminance**(`collection`): `number`

Returns the average relative `luminance` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of color tokens to query. |

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

[stats.d.ts:389](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L389)

___

### getNearestChroma

▸ **getNearestChroma**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the smallest `chroma` / `saturation` value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the smallest chroma/saturation value. |
| `colorspace?` | `string` | The mode `colorspace` to retrieve saturation/chroma values. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest chroma/saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
```

#### Defined in

[stats.d.ts:515](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L515)

___

### getNearestChromaFrom

▸ **getNearestChromaFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the smallest chroma/saturation difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:69](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L69)

___

### getNearestContrast

▸ **getNearestContrast**(`collection`, `against`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the smallest contrast value from the passed in colors compared against a sample color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the smallest contrast value. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:462](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L462)

___

### getNearestHue

▸ **getNearestHue**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the smallest hue angle from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | - |
| `colorspace?` | `string` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
```

#### Defined in

[stats.d.ts:567](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L567)

___

### getNearestHueFrom

▸ **getNearestHueFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the smallest hue angle difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:142](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L142)

___

### getNearestLightness

▸ **getNearestLightness**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the smallest lightness value. |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, 'lch',true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

#### Defined in

[stats.d.ts:621](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L621)

___

### getNearestLightnessFrom

▸ **getNearestLightnessFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Returns the smallest `lightness` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:216](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L216)

___

### getNearestLuminanceFrom

▸ **getNearestLuminanceFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

REturns the smallest `luminance` difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

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

[stats.d.ts:250](https://github.com/prjctimg/huetiful/blob/12f39ea/types/stats.d.ts#L250)
