[huetiful-js](../README.md) / [Modules](../modules.md) / [colors](../modules/colors.md) / IColor

# Class: IColor

[colors](../modules/colors.md).IColor

## Table of contents

### Constructors

- [constructor](colors.IColor.md#constructor)

### Methods

- [alpha](colors.IColor.md#alpha)
- [brighten](colors.IColor.md#brighten)
- [contrast](colors.IColor.md#contrast)
- [darken](colors.IColor.md#darken)
- [deficiency](colors.IColor.md#deficiency)
- [earthtone](colors.IColor.md#earthtone)
- [getChannel](colors.IColor.md#getchannel)
- [getComplimentaryHue](colors.IColor.md#getcomplimentaryhue)
- [getFarthestChroma](colors.IColor.md#getfarthestchroma)
- [getFarthestHue](colors.IColor.md#getfarthesthue)
- [getFarthestLightness](colors.IColor.md#getfarthestlightness)
- [getHue](colors.IColor.md#gethue)
- [getNearestChroma](colors.IColor.md#getnearestchroma)
- [getNearestHue](colors.IColor.md#getnearesthue)
- [getNearestLightness](colors.IColor.md#getnearestlightness)
- [hueShift](colors.IColor.md#hueshift)
- [isAchromatic](colors.IColor.md#isachromatic)
- [isCool](colors.IColor.md#iscool)
- [isWarm](colors.IColor.md#iswarm)
- [luminance](colors.IColor.md#luminance)
- [output](colors.IColor.md#output)
- [ovetone](colors.IColor.md#ovetone)
- [pairedScheme](colors.IColor.md#pairedscheme)
- [pastel](colors.IColor.md#pastel)
- [saturation](colors.IColor.md#saturation)
- [scheme](colors.IColor.md#scheme)
- [setChannel](colors.IColor.md#setchannel)
- [toHex](colors.IColor.md#tohex)
- [via](colors.IColor.md#via)

## Constructors

### constructor

• **new IColor**(`c`, `options?`): [`IColor`](colors.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`ColorToken`](../modules/types.md#colortoken) |
| `options?` | [`ColorOptions`](../modules/types.md#coloroptions) |

#### Returns

[`IColor`](colors.IColor.md)

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| [`IColor`](colors.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`number` \| [`IColor`](colors.IColor.md)

___

### brighten

▸ **brighten**(`amount`, `colorspace`): [`IColor`](colors.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` |
| `colorspace` | `any` |

#### Returns

[`IColor`](colors.IColor.md)

___

### contrast

▸ **contrast**(`against`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `against` | [`IColor`](colors.IColor.md) \| ``"lightMode"`` \| ``"darkMode"`` |

#### Returns

`number`

___

### darken

▸ **darken**(`amount`): [`IColor`](colors.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` |

#### Returns

[`IColor`](colors.IColor.md)

___

### deficiency

▸ **deficiency**(`deficiencyType?`, `severity?`): [`ColorToken`](../modules/types.md#colortoken)

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deficiencyType?` | ``"red"`` \| ``"green"`` \| ``"blue"`` \| ``"monochromacy"`` | `undefined` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |
| `severity` | `number` | `1` | The intensity of the filter. The exepected value is between [0,1]. For example 0.5 |

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

___

### earthtone

▸ **earthtone**(`options?`): [`ColorToken`](../modules/types.md#colortoken) \| [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`EarthtoneOptions`](../modules/types.md#earthtoneoptions) |

#### Returns

[`ColorToken`](../modules/types.md#colortoken) \| [`ColorArray`](colors.ColorArray.md)

___

### getChannel

▸ **getChannel**(`channel`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`number`

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`mode?`, `colorObj?`): [`ColorToken`](../modules/types.md#colortoken) \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily)  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) |
| `colorObj?` | `boolean` |

#### Returns

[`ColorToken`](../modules/types.md#colortoken) \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily)  }

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

___

### getHue

▸ **getHue**(): [`HueFamily`](../modules/types.md#huefamily)

#### Returns

[`HueFamily`](../modules/types.md#huefamily)

___

### getNearestChroma

▸ **getNearestChroma**(`colors`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

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

___

### hueShift

▸ **hueShift**(`options?`): [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`HueShiftOptions`](../modules/types.md#hueshiftoptions) |

#### Returns

[`ColorArray`](colors.ColorArray.md)

___

### isAchromatic

▸ **isAchromatic**(): `boolean`

#### Returns

`boolean`

___

### isCool

▸ **isCool**(): `boolean`

#### Returns

`boolean`

___

### isWarm

▸ **isWarm**(): `boolean`

#### Returns

`boolean`

___

### luminance

▸ **luminance**(`amount?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `number` |

#### Returns

`number`

___

### output

▸ **output**(): `any`

#### Returns

`any`

___

### ovetone

▸ **ovetone**(): `string` \| `boolean`

#### Returns

`string` \| `boolean`

___

### pairedScheme

▸ **pairedScheme**(`options?`): [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PairedSchemeOptions`](../modules/types.md#pairedschemeoptions) |

#### Returns

[`ColorArray`](colors.ColorArray.md)

___

### pastel

▸ **pastel**(): [`IColor`](colors.IColor.md)

#### Returns

[`IColor`](colors.IColor.md)

___

### saturation

▸ **saturation**(`amount?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`any`

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

___

### setChannel

▸ **setChannel**(`modeChannel`, `value`): [`IColor`](colors.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeChannel` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`IColor`](colors.IColor.md)

___

### toHex

▸ **toHex**(): [`IColor`](colors.IColor.md)

#### Returns

[`IColor`](colors.IColor.md)

___

### via

▸ **via**(`origin`, `t?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`ColorToken`](../modules/types.md#colortoken) |
| `t?` | `number` |
| `options?` | `Object` |
| `options.chromaInterpolator` | [`Interpolator`](../modules/types.md#interpolator) |
| `options.easingFunc` | (`t`: `number`) => `number` |
| `options.hueFixup` | (`arr`: `number`[]) => `number`[] |
| `options.hueInterpolator` | [`Interpolator`](../modules/types.md#interpolator) |
| `options.lightnessInterpolator` | [`Interpolator`](../modules/types.md#interpolator) |

#### Returns

`string`
