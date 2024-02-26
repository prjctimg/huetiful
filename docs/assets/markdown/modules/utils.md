[huetiful-js](../README.md) / [Modules](../modules.md) / utils

# Module: utils

## Table of contents

### Functions

- [alpha](utils.md#alpha)
- [brighten](utils.md#brighten)
- [colorDeficiency](utils.md#colordeficiency)
- [darken](utils.md#darken)
- [getChannel](utils.md#getchannel)
- [getComplimentaryHue](utils.md#getcomplimentaryhue)
- [getContrast](utils.md#getcontrast)
- [getFarthestChroma](utils.md#getfarthestchroma)
- [getFarthestChromaFrom](utils.md#getfarthestchromafrom)
- [getFarthestContrast](utils.md#getfarthestcontrast)
- [getFarthestHue](utils.md#getfarthesthue)
- [getFarthestHueFrom](utils.md#getfarthesthuefrom)
- [getFarthestLightness](utils.md#getfarthestlightness)
- [getFarthestLightnessFrom](utils.md#getfarthestlightnessfrom)
- [getHueFamily](utils.md#gethuefamily)
- [getLuminance](utils.md#getluminance)
- [getNearestChroma](utils.md#getnearestchroma)
- [getNearestChromaFrom](utils.md#getnearestchromafrom)
- [getNearestColor](utils.md#getnearestcolor)
- [getNearestContrast](utils.md#getnearestcontrast)
- [getNearestHue](utils.md#getnearesthue)
- [getNearestHueFrom](utils.md#getnearesthuefrom)
- [getNearestLightness](utils.md#getnearestlightness)
- [getNearestLightnessFrom](utils.md#getnearestlightnessfrom)
- [isAchromatic](utils.md#isachromatic)
- [isCool](utils.md#iscool)
- [isWarm](utils.md#iswarm)
- [overtone](utils.md#overtone)
- [setChannel](utils.md#setchannel)
- [setLuminance](utils.md#setluminance)

## Functions

### alpha

▸ **alpha**(`color`, `value?`): `number`

Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color with the targeted opacity/alpha channel. |
| `value?` | `string` \| `number` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns

`number`

color The resulting color. Returns an 8 character hex code.

**`Example`**

```ts
// Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
```

#### Defined in

[utils.d.ts:354](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L354)

___

### brighten

▸ **brighten**(`color`, `amount?`, `colorspace?`, `hex?`): `string` \| `object`

The inverse of `darken`. It brightens the passed in color by increasing the lightness channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to brighten. |
| `amount?` | `number` | The amount to brighten with. The value is expected to be in the range `[0,100]` |
| `colorspace?` | `string` | The mode colorspace to brighten the color in. Only uniform colorspaces are supported. |
| `hex?` | `boolean` | Optional boolean to return a hex string (if `true`) or a color obect in the mode `colorspace`. |

#### Returns

`string` \| `object`

The brightened color as a hex string or color object in the colorspace specified if `hex` is set to `false`.

**`Example`**

```ts
import { brighten } from "huetiful-js";
console.log(brighten('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[utils.d.ts:478](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L478)

___

### colorDeficiency

▸ **colorDeficiency**(`deficiencyType?`): (`color`: [`ColorToken`](types.md#colortoken), `severity?`: `number`) => `string`

Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | [`DeficiencyType`](types.md#deficiencytype) | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |

#### Returns

`fn`

The color as its simulated variant as a hexadecimal string.

▸ (`color`, `severity?`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `severity?` | `number` |

##### Returns

`string`

**`Example`**

```ts
import { colorDeficiency, color2hex } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
```

#### Defined in

[utils.d.ts:559](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L559)

___

### darken

▸ **darken**(`color`, `amount`, `colorspace?`): `string`

Darkens the color by reducing the lightness channel. .

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to darken. |
| `amount` | `string` \| `number` | The amount to darken with. The value is expected to be in the range `[0,1]` |
| `colorspace?` | `string` | The mode colorspace to darken the color in. Only uniform colorspaces are supported |

#### Returns

`string`

color The darkened color as a hex string

**`Example`**

```ts
import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[utils.d.ts:458](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L458)

___

### getChannel

▸ **getChannel**(`mc`): (`color`: [`ColorToken`](types.md#colortoken)) => `number`

Gets the  value specifified channel on the color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

value The value of the queried channel.

▸ (`color`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |

##### Returns

`number`

**`Example`**

```ts
import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

[utils.d.ts:290](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L290)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`color`, `colorObj?`): \{ `color`: [`ColorToken`](types.md#colortoken) ; `hue`: `string`  } \| [`ColorToken`](types.md#colortoken)

Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to retrieve its complimentary hue. |
| `colorObj?` | `boolean` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is false. |

#### Returns

\{ `color`: [`ColorToken`](types.md#colortoken) ; `hue`: `string`  } \| [`ColorToken`](types.md#colortoken)

An object with the hue family and complimentary color as keys.

**`Example`**

```ts
import { getComplimentaryHue } from "huetiful-js";

console.log(getComplimentaryHue("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
```

#### Defined in

[utils.d.ts:248](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L248)

___

### getContrast

▸ **getContrast**(`color`, `against`): `number`

Gets the contrast between the passed in colors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `against` | [`ColorToken`](types.md#colortoken) |

#### Returns

`number`

The relative luminance of the lightest color.

**`Example`**

```ts
import { getContrast } from 'huetiful-js'

console.log(getContrast("black", "white"));
// 21
```

#### Defined in

[utils.d.ts:368](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L368)

___

### getFarthestChroma

▸ **getFarthestChroma**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest saturation value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | - |
| `colorspace?` | `string` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest saturation value in the colors passed in or a custom object.

**`Example`**

```ts
import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
```

#### Defined in

[utils.d.ts:171](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L171)

___

### getFarthestChromaFrom

▸ **getFarthestChromaFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest chroma/saturation difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest chroma/saturation difference in the colors passed in or a custom object.

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

[utils.d.ts:607](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L607)

___

### getFarthestContrast

▸ **getFarthestContrast**(`collection`, `against`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest contrast value from the passed in colors compared against a sample color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the largest contrast value. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest contrast value in the colors passed in or a custom object.

**`Example`**

```ts
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }
```

#### Defined in

[utils.d.ts:119](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L119)

___

### getFarthestHue

▸ **getFarthestHue**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue angle from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | - |
| `colorspace?` | `string` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
```

#### Defined in

[utils.d.ts:222](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L222)

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
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest hue angle difference in the colors passed in or a custom object.

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

[utils.d.ts:682](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L682)

___

### getFarthestLightness

▸ **getFarthestLightness**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the largest lightness value. |
| `colorspace?` | `string` | THe mode colorspace to retrieve the lightness value from. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object.

**`Example`**

```ts
import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, 'lch',true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

#### Defined in

[utils.d.ts:434](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L434)

___

### getFarthestLightnessFrom

▸ **getFarthestLightnessFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest lightness difference in the colors passed in or a custom object.

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

[utils.d.ts:758](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L758)

___

### getHueFamily

▸ **getHueFamily**(`color`): [`HueFamily`](types.md#huefamily)

Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to query its shade or hue family. |

#### Returns

[`HueFamily`](types.md#huefamily)

The name of the hue family for example `red` or `blue-green`.

**`Example`**

```ts
import { getHueFamily } from 'huetiful-js'

console.log(getHueFamily("#310000"))
// red
```

#### Defined in

[utils.d.ts:23](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L23)

___

### getLuminance

▸ **getLuminance**(`color`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to query. |

#### Returns

`number`

value The color's luminance value.

**`Alias`**

Gets the luminance value of that color as defined by WCAG.

**`Example`**

```ts
import { getLuminance,colors } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map(getLuminance));

// [
  0.3595097699638928,  0.3635745068550118,
  0.3596908494424909,  0.3662525955988395,
 0.36634113914916244, 0.32958967582076004,
 0.41393242740130043,  0.5789820793721787,
  0.6356386777636567,  0.6463720036841869,
  0.5525691083297639,  0.4961850321908156,
  0.5140644334784611,  0.4401325598899415,
 0.36299191043315415,  0.3358285501372504,
 0.34737270839643575, 0.37670102542883394,
  0.3464512307705231, 0.34012939384198054
]
```

#### Defined in

[utils.d.ts:317](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L317)

___

### getNearestChroma

▸ **getNearestChroma**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest chroma/saturation value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the smallest chroma/saturation value. |
| `colorspace?` | `string` | The mode `colorspace` to retrieve saturation/chroma values. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest chroma/saturation value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
```

#### Defined in

[utils.d.ts:145](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L145)

___

### getNearestChromaFrom

▸ **getNearestChromaFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest chroma/saturation difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest chroma/saturation difference in the colors passed in or a custom object.

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

[utils.d.ts:646](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L646)

___

### getNearestColor

▸ **getNearestColor**(`collection`, `against`, `num?`): [`ColorToken`](types.md#colortoken) \| [`ColorToken`](types.md#colortoken)[]

Returns the nearest color(s) in a collection against

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`ColorToken`](types.md#colortoken)[] \| ``"tailwind"`` | The collection of colors to search for nearest colors |
| `against` | [`ColorToken`](types.md#colortoken) | The color to use for distance comparison. |
| `num?` | `number` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

[`ColorToken`](types.md#colortoken) \| [`ColorToken`](types.md#colortoken)[]

An array of colors.

**`Example`**

```ts
let cols = colors('all', '500')

console.log(getNearestColor(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[utils.d.ts:575](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L575)

___

### getNearestContrast

▸ **getNearestContrast**(`collection`, `against`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest contrast value from the passed in colors compared against a sample color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the smallest contrast value. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest contrast value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNearestContrast } from 'huetiful-js'

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
```

#### Defined in

[utils.d.ts:92](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L92)

___

### getNearestHue

▸ **getNearestHue**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest hue angle from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | - |
| `colorspace?` | `string` | The mode `colorspace` to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
```

#### Defined in

[utils.d.ts:197](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L197)

___

### getNearestHueFrom

▸ **getNearestHueFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest hue angle difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest hue angle difference in the colors passed in or a custom object.

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

[utils.d.ts:719](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L719)

___

### getNearestLightness

▸ **getNearestLightness**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query the color with the smallest lightness value. |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, 'lch',true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

#### Defined in

[utils.d.ts:406](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L406)

___

### getNearestLightnessFrom

▸ **getNearestLightnessFrom**(`collection`, `against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness difference between the colors in a collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> | The collection of colors to query. |
| `against` | [`ColorToken`](types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest lightness difference in the colors passed in or a custom object.

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

[utils.d.ts:794](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L794)

___

### isAchromatic

▸ **isAchromatic**(`color`, `colorspace?`): `boolean`

Checks if a color is achromatic(without hue or simply grayscale).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to test if it is achromatic or not. |
| `colorspace?` | `string` | The colorspace to use when checking if the `color` is grayscale or not. |

#### Returns

`boolean`

True if the color is achromatic else false.

**`Example`**

```ts
import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"

isAchromatic('pink')
// false

let sample = [
 "#164100",
 "#ffff00",
 "#310000",
 'pink'
];

console.log(map(sample, isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true

console.log(map(sample, isAchromatic));

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, isAchromatic));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

[utils.d.ts:533](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L533)

___

### isCool

▸ **isCool**(`color`): `boolean`

Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to check the temperature. |

#### Returns

`boolean`

True if the color is cool else false.

**`Example`**

```ts
import { isCool } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]
```

#### Defined in

[utils.d.ts:50](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L50)

___

### isWarm

▸ **isWarm**(`color`): `boolean`

Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to check the temperature. |

#### Returns

`boolean`

True if the color is warm else false.

**`Example`**

```ts
import { isWarm } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isWarm(sample[2]));
//true

console.log(map(sample, isWarm));

// [ false, true,  false]
```

#### Defined in

[utils.d.ts:75](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L75)

___

### overtone

▸ **overtone**(`color`): `string` \| `boolean`

Returns the hue which is biasing the passed in color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to query its overtone. |

#### Returns

`string` \| `boolean`

The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.

**`Example`**

```ts
import { overtone } from "huetiful-js";

console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
```

#### Defined in

[utils.d.ts:387](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L387)

___

### setChannel

▸ **setChannel**(`mc`): (`color`: [`ColorToken`](types.md#colortoken), `value`: `number` \| `string`) => [`ColorToken`](types.md#colortoken)

Sets the value for the specified channel in a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns

`fn`

color The mutated color.

▸ (`color`, `value`): [`ColorToken`](types.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `value` | `number` \| `string` |

##### Returns

[`ColorToken`](types.md#colortoken)

**`Example`**

```ts
import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

#### Defined in

[utils.d.ts:274](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L274)

___

### setLuminance

▸ **setLuminance**(`color`, `lum`): [`ColorToken`](types.md#colortoken)

Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to set luminance |
| `lum` | `number` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns

[`ColorToken`](types.md#colortoken)

The mutated color with the modified properties.

**`Example`**

```ts
import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
```

#### Defined in

[utils.d.ts:333](https://github.com/prjctimg/huetiful/blob/9939ea7/types/utils.d.ts#L333)
