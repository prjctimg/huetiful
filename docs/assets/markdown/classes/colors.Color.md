# Class: Color

[colors](../modules/colors.md).Color

Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.

**`Example`**

```ts
import { Color } from 'huetiful-js'

let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
```

## Table of contents

### Constructors

- [constructor](colors.Color.md#constructor)

### Methods

- [alpha](colors.Color.md#alpha)
- [color2hex](colors.Color.md#color2hex)
- [contrast](colors.Color.md#contrast)
- [deficiency](colors.Color.md#deficiency)
- [earthtone](colors.Color.md#earthtone)
- [getChannel](colors.Color.md#getchannel)
- [getComplimentaryHue](colors.Color.md#getcomplimentaryhue)
- [getFarthestChroma](colors.Color.md#getfarthestchroma)
- [getFarthestHue](colors.Color.md#getfarthesthue)
- [getFarthestLightness](colors.Color.md#getfarthestlightness)
- [getHueFamily](colors.Color.md#gethuefamily)
- [getNearestChroma](colors.Color.md#getnearestchroma)
- [getNearestHue](colors.Color.md#getnearesthue)
- [getNearestLightness](colors.Color.md#getnearestlightness)
- [hueShift](colors.Color.md#hueshift)
- [isAchromatic](colors.Color.md#isachromatic)
- [isCool](colors.Color.md#iscool)
- [isWarm](colors.Color.md#iswarm)
- [luminance](colors.Color.md#luminance)
- [output](colors.Color.md#output)
- [ovetone](colors.Color.md#ovetone)
- [pairedScheme](colors.Color.md#pairedscheme)
- [pastel](colors.Color.md#pastel)
- [saturation](colors.Color.md#saturation)
- [scheme](colors.Color.md#scheme)
- [setChannel](colors.Color.md#setchannel)
- [via](colors.Color.md#via)

## Constructors

### constructor

• **new Color**(`c`, `options?`): [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`ColorToken`](../modules/types.md#colortoken) |
| `options?` | [`ColorOptions`](../modules/types.md#coloroptions) |

#### Returns

[`Color`](colors.Color.md)

#### Defined in

[colors.d.ts:745](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L745)

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`number` \| [`Color`](colors.Color.md)

#### Defined in

[colors.d.ts:746](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L746)

___

### color2hex

▸ **color2hex**(): [`Color`](colors.Color.md)

Converts any color token to hexadecimal.

#### Returns

[`Color`](colors.Color.md)

string

#### Defined in

[colors.d.ts:761](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L761)

___

### contrast

▸ **contrast**(`against`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `against` | [`Color`](colors.Color.md) \| ``"lightMode"`` \| ``"darkMode"`` |

#### Returns

`number`

#### Defined in

[colors.d.ts:831](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L831)

___

### deficiency

▸ **deficiency**(`deficiencyType?`, `severity?`): [`ColorToken`](../modules/types.md#colortoken)

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"`` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |
| `severity?` | `number` | The intensity of the filter. The exepected value is between [0,1]. For example 0.5 |

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

The color as its simulated variant as a hexadecimal string.

**`See`**

For a deep dive on  color vision deficiency go to

**`Example`**

```ts
import { colorDeficiency, toHex } from 'huetiful-js'

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

[colors.d.ts:861](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L861)

___

### earthtone

▸ **earthtone**(`options?`): [`ColorToken`](../modules/types.md#colortoken) \| [`ColorArray`](colors.ColorArray.md)

Creates a scale of a spline interpolation between an earthtone and a color. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`EarthtoneOptions`](../modules/types.md#earthtoneoptions) | Optional overrides for customising interpolation and easing functions. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken) \| [`ColorArray`](colors.ColorArray.md)

The array of colors resulting from the earthtone interpolation as hex codes.

#### Defined in

[colors.d.ts:830](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L830)

___

### getChannel

▸ **getChannel**(`channel`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`number`

#### Defined in

[colors.d.ts:747](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L747)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`mode?`, `colorObj?`): [`ColorToken`](../modules/types.md#colortoken) \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily)  }

Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is false. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken) \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily)  }

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

[colors.d.ts:815](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L815)

___

### getFarthestChroma

▸ **getFarthestChroma**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Defined in

[colors.d.ts:901](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L901)

___

### getFarthestHue

▸ **getFarthestHue**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Defined in

[colors.d.ts:865](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L865)

___

### getFarthestLightness

▸ **getFarthestLightness**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Defined in

[colors.d.ts:910](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L910)

___

### getHueFamily

▸ **getHueFamily**(): [`HueFamily`](../modules/types.md#huefamily)

#### Returns

[`HueFamily`](../modules/types.md#huefamily)

#### Defined in

[colors.d.ts:920](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L920)

___

### getNearestChroma

▸ **getNearestChroma**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Defined in

[colors.d.ts:883](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L883)

___

### getNearestHue

▸ **getNearestHue**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Defined in

[colors.d.ts:874](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L874)

___

### getNearestLightness

▸ **getNearestLightness**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Defined in

[colors.d.ts:892](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L892)

___

### hueShift

▸ **hueShift**(`options?`): [`ColorArray`](colors.ColorArray.md)

Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single scheme color. Min and max lightness value determine how light or dark our colour will be at either extreme. Call `output()` to get the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`HueShiftOptions`](../modules/types.md#hueshiftoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of colors in hexadecimal. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`

**`Example`**

```ts
import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
 '#ffffe1', '#ffdca5',
 '#ca9a70', '#935c40',
 '#5c2418', '#3e0000',
 '#310000', '#34000f',
 '#38001e', '#3b002c',
 '#3b0c3a'
]
```

#### Defined in

[colors.d.ts:799](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L799)

___

### isAchromatic

▸ **isAchromatic**(): `boolean`

#### Returns

`boolean`

#### Defined in

[colors.d.ts:835](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L835)

___

### isCool

▸ **isCool**(): `boolean`

#### Returns

`boolean`

#### Defined in

[colors.d.ts:837](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L837)

___

### isWarm

▸ **isWarm**(): `boolean`

#### Returns

`boolean`

#### Defined in

[colors.d.ts:836](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L836)

___

### luminance

▸ **luminance**(`amount?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `number` |

#### Returns

`number`

#### Defined in

[colors.d.ts:832](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L832)

___

### output

▸ **output**(): `any`

#### Returns

`any`

#### Defined in

[colors.d.ts:833](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L833)

___

### ovetone

▸ **ovetone**(): `string` \| `boolean`

#### Returns

`string` \| `boolean`

#### Defined in

[colors.d.ts:919](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L919)

___

### pairedScheme

▸ **pairedScheme**(`options?`): [`ColorArray`](colors.ColorArray.md)

Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color. Call `output()` to get the final result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PairedSchemeOptions`](../modules/types.md#pairedschemeoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array containing the paired scheme.

**`Example`**

```ts
import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[colors.d.ts:778](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L778)

___

### pastel

▸ **pastel**(): [`Color`](colors.Color.md)

Returns the pastel variant of the bound color token.

#### Returns

[`Color`](colors.Color.md)

string

#### Defined in

[colors.d.ts:766](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L766)

___

### saturation

▸ **saturation**(`amount?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`any`

#### Defined in

[colors.d.ts:834](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L834)

___

### scheme

▸ **scheme**(`scheme`, `easingFunc?`): [`ColorToken`](../modules/types.md#colortoken)[] \| [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheme` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` |
| `easingFunc?` | (`t`: `number`) => `number` |

#### Returns

[`ColorToken`](../modules/types.md#colortoken)[] \| [`ColorArray`](colors.ColorArray.md)

#### Defined in

[colors.d.ts:921](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L921)

___

### setChannel

▸ **setChannel**(`modeChannel`, `value`): [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeChannel` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`Color`](colors.Color.md)

#### Defined in

[colors.d.ts:748](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L748)

___

### via

▸ **via**(`origin`, `t?`, `options?`): `string`

Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`ColorToken`](../modules/types.md#colortoken) | The color to interpolate via. |
| `t?` | `number` | The point in the interpolation to return. Expected value is in the range [0,1] |
| `options?` | [`InterpolatorOptions`](../modules/types.md#interpolatoroptions) | Overrides object to customize the easing and the interpolation method /fixups. |

#### Returns

`string`

The result of the interpolation as a hexadecimal string.

#### Defined in

[colors.d.ts:756](https://github.com/prjctimg/huetiful/blob/0fffa9d/types/colors.d.ts#L756)
