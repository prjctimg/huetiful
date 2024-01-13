# Class: Color

[colors](../modules/colors.md).Color

## Table of contents

### Constructors

- [constructor](colors.Color.md#constructor)

### Methods

- [alpha](colors.Color.md#alpha)
- [brighten](colors.Color.md#brighten)
- [contrast](colors.Color.md#contrast)
- [darken](colors.Color.md#darken)
- [deficiency](colors.Color.md#deficiency)
- [earthtone](colors.Color.md#earthtone)
- [getChannel](colors.Color.md#getChannel)
- [getComplimentaryHue](colors.Color.md#getComplimentaryHue)
- [getFarthestChroma](colors.Color.md#getFarthestChroma)
- [getFarthestHue](colors.Color.md#getFarthestHue)
- [getFarthestLightness](colors.Color.md#getFarthestLightness)
- [getHue](colors.Color.md#getHue)
- [getNearestChroma](colors.Color.md#getNearestChroma)
- [getNearestHue](colors.Color.md#getNearestHue)
- [getNearestLightness](colors.Color.md#getNearestLightness)
- [hueShift](colors.Color.md#hueShift)
- [isAchromatic](colors.Color.md#isAchromatic)
- [isCool](colors.Color.md#isCool)
- [isWarm](colors.Color.md#isWarm)
- [luminance](colors.Color.md#luminance)
- [output](colors.Color.md#output)
- [ovetone](colors.Color.md#ovetone)
- [pairedScheme](colors.Color.md#pairedScheme)
- [pastel](colors.Color.md#pastel)
- [saturation](colors.Color.md#saturation)
- [scheme](colors.Color.md#scheme)
- [setChannel](colors.Color.md#setChannel)
- [toHex](colors.Color.md#toHex)
- [via](colors.Color.md#via)

## Constructors

### constructor

• **new Color**(`c`, `options?`): [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`ColorToken`](../modules/types.md#ColorToken) |
| `options?` | [`ColorOptions`](../modules/types.md#ColorOptions) |

#### Returns

[`Color`](colors.Color.md)

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`number` \| [`Color`](colors.Color.md)

___

### brighten

▸ **brighten**(`amount`, `colorspace`): [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` |
| `colorspace` | `any` |

#### Returns

[`Color`](colors.Color.md)

___

### contrast

▸ **contrast**(`against`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `against` | [`Color`](colors.Color.md) \| ``"lightMode"`` \| ``"darkMode"`` |

#### Returns

`number`

___

### darken

▸ **darken**(`amount`): [`Color`](colors.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` |

#### Returns

[`Color`](colors.Color.md)

___

### deficiency

▸ **deficiency**(`deficiencyType?`, `severity?`): [`ColorToken`](../modules/types.md#ColorToken)

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deficiencyType?` | ``"red"`` \| ``"green"`` \| ``"blue"`` \| ``"monochromacy"`` | `undefined` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |
| `severity` | `number` | `1` | The intensity of the filter. The exepected value is between [0,1]. For example 0.5 |

#### Returns

[`ColorToken`](../modules/types.md#ColorToken)

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

▸ **earthtone**(`options?`): [`ColorToken`](../modules/types.md#ColorToken) \| [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`EarthtoneOptions`](../modules/types.md#EarthtoneOptions) |

#### Returns

[`ColorToken`](../modules/types.md#ColorToken) \| [`ColorArray`](colors.ColorArray.md)

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

▸ **getComplimentaryHue**(`mode?`, `colorObj?`): [`ColorToken`](../modules/types.md#ColorToken) \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `hue`: [`HueFamily`](../modules/types.md#HueFamily)  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode?` | [`HueColorSpaces`](../modules/types.md#HueColorSpaces) |
| `colorObj?` | `boolean` |

#### Returns

[`ColorToken`](../modules/types.md#ColorToken) \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `hue`: [`HueFamily`](../modules/types.md#HueFamily)  }

___

### getFarthestChroma

▸ **getFarthestChroma**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#ColorToken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

___

### getFarthestHue

▸ **getFarthestHue**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#ColorToken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

___

### getFarthestLightness

▸ **getFarthestLightness**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#ColorToken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

___

### getHue

▸ **getHue**(): [`HueFamily`](../modules/types.md#HueFamily)

#### Returns

[`HueFamily`](../modules/types.md#HueFamily)

___

### getNearestChroma

▸ **getNearestChroma**(`colors`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#ColorToken)[] |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

___

### getNearestHue

▸ **getNearestHue**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#ColorToken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

___

### getNearestLightness

▸ **getNearestLightness**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#ColorToken)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#ColorToken) ; `factor`: `number`  }

___

### hueShift

▸ **hueShift**(`options?`): [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`HueShiftOptions`](../modules/types.md#HueShiftOptions) |

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
| `options?` | [`PairedSchemeOptions`](../modules/types.md#PairedSchemeOptions) |

#### Returns

[`ColorArray`](colors.ColorArray.md)

___

### pastel

▸ **pastel**(): [`Color`](colors.Color.md)

#### Returns

[`Color`](colors.Color.md)

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

▸ **scheme**(`scheme`, `easingFunc?`): [`ColorToken`](../modules/types.md#ColorToken)[] \| [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheme` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` |
| `easingFunc?` | (`t`: `number`) => `number` |

#### Returns

[`ColorToken`](../modules/types.md#ColorToken)[] \| [`ColorArray`](colors.ColorArray.md)

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

___

### toHex

▸ **toHex**(): [`Color`](colors.Color.md)

#### Returns

[`Color`](colors.Color.md)

___

### via

▸ **via**(`origin`, `t?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`ColorToken`](../modules/types.md#ColorToken) |
| `t?` | `number` |
| `options?` | `Object` |
| `options.chromaInterpolator` | [`Interpolator`](../modules/types.md#Interpolator) |
| `options.easingFunc` | (`t`: `number`) => `number` |
| `options.hueFixup` | (`arr`: `number`[]) => `number`[] |
| `options.hueInterpolator` | [`Interpolator`](../modules/types.md#Interpolator) |
| `options.lightnessInterpolator` | [`Interpolator`](../modules/types.md#Interpolator) |

#### Returns

`string`
