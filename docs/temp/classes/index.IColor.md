[huetiful-js - v1.7.87](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / IColor

# Class: IColor

[index](../modules/index.md).IColor

## Table of contents

### Constructors

- [constructor](index.IColor.md#constructor)

### Methods

- [alpha](index.IColor.md#alpha)
- [brighten](index.IColor.md#brighten)
- [contrast](index.IColor.md#contrast)
- [darken](index.IColor.md#darken)
- [deficiency](index.IColor.md#deficiency)
- [earthtone](index.IColor.md#earthtone)
- [getChannel](index.IColor.md#getchannel)
- [getComplimentaryHue](index.IColor.md#getcomplimentaryhue)
- [getFarthestChroma](index.IColor.md#getfarthestchroma)
- [getFarthestHue](index.IColor.md#getfarthesthue)
- [getFarthestLightness](index.IColor.md#getfarthestlightness)
- [getHue](index.IColor.md#gethue)
- [getNearestChroma](index.IColor.md#getnearestchroma)
- [getNearestHue](index.IColor.md#getnearesthue)
- [getNearestLightness](index.IColor.md#getnearestlightness)
- [hueShift](index.IColor.md#hueshift)
- [isAchromatic](index.IColor.md#isachromatic)
- [isCool](index.IColor.md#iscool)
- [isWarm](index.IColor.md#iswarm)
- [luminance](index.IColor.md#luminance)
- [output](index.IColor.md#output)
- [ovetone](index.IColor.md#ovetone)
- [pairedScheme](index.IColor.md#pairedscheme)
- [pastel](index.IColor.md#pastel)
- [saturation](index.IColor.md#saturation)
- [scheme](index.IColor.md#scheme)
- [setChannel](index.IColor.md#setchannel)
- [toHex](index.IColor.md#tohex)
- [via](index.IColor.md#via)

## Constructors

### constructor

• **new IColor**(`c`, `options?`): [`IColor`](index.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Color`](../modules/types.md#color) |
| `options?` | [`ColorOptions`](../modules/types.md#coloroptions) |

#### Returns

[`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1413

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| [`IColor`](index.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`number` \| [`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1460

___

### brighten

▸ **brighten**(`amount`, `colorspace`): [`IColor`](index.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` |
| `colorspace` | `any` |

#### Returns

[`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1485

___

### contrast

▸ **contrast**(`against`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `against` | [`IColor`](index.IColor.md) \| ``"lightMode"`` \| ``"darkMode"`` |

#### Returns

`number`

#### Defined in

src/colors.ts:1526

___

### darken

▸ **darken**(`amount`): [`IColor`](index.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` |

#### Returns

[`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1489

___

### deficiency

▸ **deficiency**(`deficiencyType?`, `severity?`): [`Color`](../modules/types.md#color)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deficiencyType?` | ``"red"`` \| ``"green"`` \| ``"blue"`` \| ``"monochromacy"`` | `undefined` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |
| `severity` | `number` | `1` | The intensity of the filter. The exepected value is between [0,1]. For example 0.5 |

#### Returns

[`Color`](../modules/types.md#color)

The color as its simulated variant as a hexadecimal string.

**`Function`**

**`Description`**

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

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

src/colors.ts:1604

___

### earthtone

▸ **earthtone**(`options?`): [`Color`](../modules/types.md#color) \| [`ColorArray`](index.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`EarthtoneOptions`](../modules/types.md#earthtoneoptions) |

#### Returns

[`Color`](../modules/types.md#color) \| [`ColorArray`](index.ColorArray.md)

#### Defined in

src/colors.ts:1521

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

src/colors.ts:1468

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`mode?`, `colorObj?`): [`Color`](../modules/types.md#color) \| \{ `color`: [`Color`](../modules/types.md#color) ; `hue`: [`HueFamily`](../modules/types.md#huefamily)  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) |
| `colorObj?` | `boolean` |

#### Returns

[`Color`](../modules/types.md#color) \| \{ `color`: [`Color`](../modules/types.md#color) ; `hue`: [`HueFamily`](../modules/types.md#huefamily)  }

#### Defined in

src/colors.ts:1514

___

### getFarthestChroma

▸ **getFarthestChroma**(`colors`, `colorObj?`): `number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](../modules/types.md#color)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Defined in

src/colors.ts:1627

___

### getFarthestHue

▸ **getFarthestHue**(`colors`, `colorObj?`): `number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](../modules/types.md#color)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Defined in

src/colors.ts:1615

___

### getFarthestLightness

▸ **getFarthestLightness**(`colors`, `colorObj?`): `number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](../modules/types.md#color)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Defined in

src/colors.ts:1630

___

### getHue

▸ **getHue**(): [`HueFamily`](../modules/types.md#huefamily)

#### Returns

[`HueFamily`](../modules/types.md#huefamily)

#### Defined in

src/colors.ts:1636

___

### getNearestChroma

▸ **getNearestChroma**(`colors`): `number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](../modules/types.md#color)[] |

#### Returns

`number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Defined in

src/colors.ts:1621

___

### getNearestHue

▸ **getNearestHue**(`colors`, `colorObj?`): `number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](../modules/types.md#color)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Defined in

src/colors.ts:1618

___

### getNearestLightness

▸ **getNearestLightness**(`colors`, `colorObj?`): `number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](../modules/types.md#color)[] |
| `colorObj?` | `boolean` |

#### Returns

`number` \| \{ `color`: [`Color`](../modules/types.md#color) ; `factor`: `number`  }

#### Defined in

src/colors.ts:1624

___

### hueShift

▸ **hueShift**(`options?`): [`ColorArray`](index.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`HueShiftOptions`](../modules/types.md#hueshiftoptions) |

#### Returns

[`ColorArray`](index.ColorArray.md)

#### Defined in

src/colors.ts:1508

___

### isAchromatic

▸ **isAchromatic**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/colors.ts:1571

___

### isCool

▸ **isCool**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/colors.ts:1577

___

### isWarm

▸ **isWarm**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/colors.ts:1574

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

src/colors.ts:1542

___

### output

▸ **output**(): `any`

#### Returns

`any`

#### Defined in

src/colors.ts:1553

___

### ovetone

▸ **ovetone**(): `string` \| `boolean`

#### Returns

`string` \| `boolean`

#### Defined in

src/colors.ts:1633

___

### pairedScheme

▸ **pairedScheme**(`options?`): [`ColorArray`](index.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PairedSchemeOptions`](../modules/types.md#pairedschemeoptions) |

#### Returns

[`ColorArray`](index.ColorArray.md)

#### Defined in

src/colors.ts:1502

___

### pastel

▸ **pastel**(): [`IColor`](index.IColor.md)

#### Returns

[`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1498

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

src/colors.ts:1557

___

### scheme

▸ **scheme**(`scheme`, `easingFunc?`): [`Color`](../modules/types.md#color)[] \| [`ColorArray`](index.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheme` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` |
| `easingFunc?` | (`t`: `number`) => `number` |

#### Returns

[`Color`](../modules/types.md#color)[] \| [`ColorArray`](index.ColorArray.md)

#### Defined in

src/colors.ts:1639

___

### setChannel

▸ **setChannel**(`modeChannel`, `value`): [`IColor`](index.IColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeChannel` | `string` |
| `value` | `string` \| `number` |

#### Returns

[`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1473

___

### toHex

▸ **toHex**(): [`IColor`](index.IColor.md)

#### Returns

[`IColor`](index.IColor.md)

#### Defined in

src/colors.ts:1494

___

### via

▸ **via**(`origin`, `t?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`Color`](../modules/types.md#color) |
| `t?` | `number` |
| `options?` | `Object` |
| `options.chromaInterpolator` | [`Interpolator`](../modules/types.md#interpolator) |
| `options.easingFunc` | (`t`: `number`) => `number` |
| `options.hueFixup` | (`arr`: `number`[]) => `number`[] |
| `options.hueInterpolator` | [`Interpolator`](../modules/types.md#interpolator) |
| `options.lightnessInterpolator` | [`Interpolator`](../modules/types.md#interpolator) |

#### Returns

`string`

#### Defined in

src/colors.ts:1478
