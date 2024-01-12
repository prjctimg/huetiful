---
title: Types.
date: Last Modified 
permalink: /types.html
eleventyNavigation:
  order: 7
  title: Type declarations.
---

# Module: types

## Table of contents

### Type Aliases

- [AdaptivePaletteOptions](types.md#adaptivepaletteoptions)
- [ColorDistanceOptions](types.md#colordistanceoptions)
- [ColorObject](types.md#colorobject)
- [ColorOptions](types.md#coloroptions)
- [ColorToken](types.md#colortoken)
- [ColorTuple](types.md#colortuple)
- [Colorspaces](types.md#colorspaces)
- [DeficiencyType](types.md#deficiencytype)
- [DivergingScheme](types.md#divergingscheme)
- [EarthtoneOptions](types.md#earthtoneoptions)
- [Factor](types.md#factor)
- [FactorMapper](types.md#factormapper)
- [HueColorSpaces](types.md#huecolorspaces)
- [HueFamily](types.md#huefamily)
- [HueShiftOptions](types.md#hueshiftoptions)
- [Interpolator](types.md#interpolator)
- [InterpolatorOptions](types.md#interpolatoroptions)
- [Options](types.md#options)
- [Order](types.md#order)
- [PairedSchemeOptions](types.md#pairedschemeoptions)
- [QualitativeScheme](types.md#qualitativescheme)
- [ScaleValues](types.md#scalevalues)
- [SequentialScheme](types.md#sequentialscheme)
- [TailwindColorFamilies](types.md#tailwindcolorfamilies)
- [Tone](types.md#tone)
- [UniformColorSpaces](types.md#uniformcolorspaces)
- [callback](types.md#callback)

## Type Aliases

### AdaptivePaletteOptions

Ƭ **AdaptivePaletteOptions**: `Object`

**`Description`**

This object returns the lightMode and darkMode optimized version of a color with support to add color vision deficiency simulation to the final color result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor?` | \{ `dark?`: [`ColorToken`](types.md#colortoken) ; `light?`: [`ColorToken`](types.md#colortoken)  } |
| `backgroundColor.dark?` | [`ColorToken`](types.md#colortoken) |
| `backgroundColor.light?` | [`ColorToken`](types.md#colortoken) |
| `colorBlind?` | `boolean` |
| `viewingConditions?` | `ViewingConditions` |

___

### ColorDistanceOptions

Ƭ **ColorDistanceOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mode?` | [`Colorspaces`](types.md#colorspaces) |
| `weights?` | [`number`, `number`, `number`, `number`] |

___

### ColorObject

Ƭ **ColorObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `mode` | [`Colorspaces`](types.md#colorspaces) |

___

### ColorOptions

Ƭ **ColorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `colorSpace?` | [`HueColorSpaces`](types.md#huecolorspaces) |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) |
| `contrast?` | `number` |
| `darkMode?` | [`ColorToken`](types.md#colortoken) |
| `lightMode?` | [`ColorToken`](types.md#colortoken) |
| `lightness?` | `number` |
| `luminance?` | `number` |
| `saturation?` | `number` |
| `temperature?` | `number` |

___

### ColorToken

Ƭ **ColorToken**: `number` \| `string` \| `object` \| [`ColorTuple`](types.md#colortuple)

**`Description`**

Any recognizable color token.

___

### ColorTuple

Ƭ **ColorTuple**: [`string`, `number`, `number`, `number`, number?]

___

### Colorspaces

Ƭ **Colorspaces**: ``"a98"`` \| ``"cubehelix"`` \| ``"dlab"`` \| ``"jab"`` \| ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"luv"`` \| ``"oklab"`` \| ``"rgb"`` \| [`HueColorSpaces`](types.md#huecolorspaces)

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

___

### EarthtoneOptions

Ƭ **EarthtoneOptions**: `Omit`\<[`Options`](types.md#options), ``"hueStep"`` \| ``"via"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"temp"`` \| ``"saturation"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

___

### FactorMapper

Ƭ **FactorMapper**: (`factor`: [`Factor`](types.md#factor), `callback`: [`callback`](types.md#callback), `order?`: [`Order`](types.md#order), `colorObj?`: `boolean`) => (`colors`: [`ColorToken`](types.md#colortoken)[]) => [`ColorToken`](types.md#colortoken)[]

#### Type declaration

▸ (`factor`, `callback`, `order?`, `colorObj?`): (`colors`: [`ColorToken`](types.md#colortoken)[]) => [`ColorToken`](types.md#colortoken)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | [`callback`](types.md#callback) |
| `order?` | [`Order`](types.md#order) |
| `colorObj?` | `boolean` |

##### Returns

`fn`

▸ (`colors`): [`ColorToken`](types.md#colortoken)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] |

##### Returns

[`ColorToken`](types.md#colortoken)[]

___

### HueColorSpaces

Ƭ **HueColorSpaces**: [`UniformColorSpaces`](types.md#uniformcolorspaces) \| ``"hsl"`` \| ``"hsv"`` \| ``"hsi"`` \| ``"hwb"`` \| ``"okhsl"`` \| ``"okhsv"``

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

___

### HueShiftOptions

Ƭ **HueShiftOptions**: `Omit`\<[`Options`](types.md#options), ``"via"`` \| ``"earthtones"`` \| ``""``\> & [`InterpolatorOptions`](types.md#interpolatoroptions)

___

### Interpolator

Ƭ **Interpolator**: (`arr`: `number`[]) => (`t`: `number`) => `number`

#### Type declaration

▸ (`arr`): (`t`: `number`) => `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |

##### Returns

`fn`

▸ (`t`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns

`number`

___

### InterpolatorOptions

Ƭ **InterpolatorOptions**: `Pick`\<[`Options`](types.md#options), ``"easingFunc"`` \| ``"hueInterpolator"`` \| ``"chromaInterpolator"`` \| ``"hueFixup"`` \| ``"lightnessInterpolator"``\>

___

### Options

Ƭ **Options**: `Object`

**`Description`**

The override parameters for palette functions.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chromaInterpolator?` | [`Interpolator`](types.md#interpolator) | **`Param`** interpolation method to use on the chroma channel. |
| `earthtones?` | ``"light-gray"`` \| ``"silver"`` \| ``"sand"`` \| ``"tupe"`` \| ``"mahogany"`` \| ``"brick-red"`` \| ``"clay"`` \| ``"cocoa"`` \| ``"dark-brown"`` \| ``"dark"`` | * **`Param`** The earthtone to interpolate with. |
| `easingFunc?` | (`t`: `number`) => `number` | The easing function to use. |
| `hueFixup?` | (`arr`: `number`[]) => `number`[] |  |
| `hueInterpolator?` | [`Interpolator`](types.md#interpolator) | **`Param`** interpolation method to use on the hue channel. |
| `hueStep?` | `number` | **`Param`** amount of hue angles to increment each iteration with. |
| `lightnessInterpolator?` | [`Interpolator`](types.md#interpolator) | **`Param`** interpolation method to use on the lightness channel. |
| `maxLightness?` | `number` | **`Param`** Maximum lightness value (range 0-100). |
| `minLightness?` | `number` | * **`Param`** Minimum lightness value (range 0-100). |
| `samples?` | `number` | **`Param`** amount of samples to return in the result collection. |
| `via?` | [`Tone`](types.md#tone) | **`Param`** color to pass through during interpolation. |

___

### Order

Ƭ **Order**: ``"asc"`` \| ``"desc"``

___

### PairedSchemeOptions

Ƭ **PairedSchemeOptions**: `Omit`\<[`Options`](types.md#options), ``"earthtones"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

___

### ScaleValues

Ƭ **ScaleValues**: ``"50"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"``

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

___

### Tone

Ƭ **Tone**: ``"light"`` \| ``"dark"``

___

### UniformColorSpaces

Ƭ **UniformColorSpaces**: ``"lch"`` \| ``"jch"`` \| ``"dlch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"lchuv"`` \| ``"oklch"``

___

### callback

Ƭ **callback**: `unknown`
