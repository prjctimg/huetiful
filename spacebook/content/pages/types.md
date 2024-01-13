---
title: Types
eleventyNavigation:
  order: 7
  title: Types
---

# Module:📦 types

## Table of contents📜

### Type Aliases

- [AdaptivePaletteOptions](types.md#AdaptivePaletteOptions)
- [ColorDistanceOptions](types.md#ColorDistanceOptions)
- [ColorObject](types.md#ColorObject)
- [ColorOptions](types.md#ColorOptions)
- [ColorToken](types.md#ColorToken)
- [ColorTuple](types.md#ColorTuple)
- [Colorspaces](types.md#Colorspaces)
- [DeficiencyType](types.md#DeficiencyType)
- [DivergingScheme](types.md#DivergingScheme)
- [EarthtoneOptions](types.md#EarthtoneOptions)
- [Factor](types.md#Factor)
- [FactorMapper](types.md#FactorMapper)
- [HueColorSpaces](types.md#HueColorSpaces)
- [HueFamily](types.md#HueFamily)
- [HueShiftOptions](types.md#HueShiftOptions)
- [Interpolator](types.md#Interpolator)
- [InterpolatorOptions](types.md#InterpolatorOptions)
- [Options](types.md#Options)
- [Order](types.md#Order)
- [PairedSchemeOptions](types.md#PairedSchemeOptions)
- [QualitativeScheme](types.md#QualitativeScheme)
- [ScaleValues](types.md#ScaleValues)
- [SequentialScheme](types.md#SequentialScheme)
- [TailwindColorFamilies](types.md#TailwindColorFamilies)
- [Tone](types.md#Tone)
- [UniformColorSpaces](types.md#UniformColorSpaces)
- [callback](types.md#callback)

## Type Aliases

### AdaptivePaletteOptions

Ƭ **AdaptivePaletteOptions**: `Object`

**`Description`** ℹ

This object returns the lightMode and darkMode optimized version of a color with support to add color vision deficiency simulation to the final color result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor?` | \{ `dark?`: [`ColorToken`](types.md#ColorToken) ; `light?`: [`ColorToken`](types.md#ColorToken)  } |
| `backgroundColor.dark?` | [`ColorToken`](types.md#ColorToken) |
| `backgroundColor.light?` | [`ColorToken`](types.md#ColorToken) |
| `colorBlind?` | `boolean` |
| `viewingConditions?` | `ViewingConditions` |

___

### ColorDistanceOptions

Ƭ **ColorDistanceOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mode?` | [`Colorspaces`](types.md#Colorspaces) |
| `weights?` | [`number`, `number`, `number`, `number`] |

___

### ColorObject

Ƭ **ColorObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `mode` | [`Colorspaces`](types.md#Colorspaces) |

___

### ColorOptions

Ƭ **ColorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `colorSpace?` | [`HueColorSpaces`](types.md#HueColorSpaces) |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) |
| `contrast?` | `number` |
| `darkMode?` | [`ColorToken`](types.md#ColorToken) |
| `lightMode?` | [`ColorToken`](types.md#ColorToken) |
| `lightness?` | `number` |
| `luminance?` | `number` |
| `saturation?` | `number` |
| `temperature?` | `number` |

___

### ColorToken

Ƭ **ColorToken**: `number` \| `string` \| `object` \| [`ColorTuple`](types.md#ColorTuple)

**`Description`** ℹ

Any recognizable color token.

___

### ColorTuple

Ƭ **ColorTuple**: [`string`, `number`, `number`, `number`, number?]

___

### Colorspaces

Ƭ **Colorspaces**: ``"a98"`` \| ``"cubehelix"`` \| ``"dlab"`` \| ``"jab"`` \| ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"luv"`` \| ``"oklab"`` \| ``"rgb"`` \| [`HueColorSpaces`](types.md#HueColorSpaces)

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

___

### EarthtoneOptions

Ƭ **EarthtoneOptions**: `Omit`\<[`Options`](types.md#Options), ``"hueStep"`` \| ``"via"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"temp"`` \| ``"saturation"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

___

### FactorMapper

Ƭ **FactorMapper**: (`factor`: [`Factor`](types.md#Factor), `callback`: [`callback`](types.md#callback), `order?`: [`Order`](types.md#Order), `colorObj?`: `boolean`) => (`colors`: [`ColorToken`](types.md#ColorToken)[]) => [`ColorToken`](types.md#ColorToken)[]

#### Type declaration

▸ (`factor`, `callback`, `order?`, `colorObj?`): (`colors`: [`ColorToken`](types.md#ColorToken)[]) => [`ColorToken`](types.md#ColorToken)[]

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#Factor) |
| `callback` | [`callback`](types.md#callback) |
| `order?` | [`Order`](types.md#Order) |
| `colorObj?` | `boolean` |

##### Returns🔙

`fn`

▸ (`colors`): [`ColorToken`](types.md#ColorToken)[]

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](types.md#ColorToken)[] |

##### Returns🔙

[`ColorToken`](types.md#ColorToken)[]

___

### HueColorSpaces

Ƭ **HueColorSpaces**: [`UniformColorSpaces`](types.md#UniformColorSpaces) \| ``"hsl"`` \| ``"hsv"`` \| ``"hsi"`` \| ``"hwb"`` \| ``"okhsl"`` \| ``"okhsv"``

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

___

### HueShiftOptions

Ƭ **HueShiftOptions**: `Omit`\<[`Options`](types.md#Options), ``"via"`` \| ``"earthtones"`` \| ``""``\> & [`InterpolatorOptions`](types.md#InterpolatorOptions)

___

### Interpolator

Ƭ **Interpolator**: (`arr`: `number`[]) => (`t`: `number`) => `number`

#### Type declaration

▸ (`arr`): (`t`: `number`) => `number`

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |

##### Returns🔙

`fn`

▸ (`t`): `number`

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns🔙

`number`

___

### InterpolatorOptions

Ƭ **InterpolatorOptions**: `Pick`\<[`Options`](types.md#Options), ``"easingFunc"`` \| ``"hueInterpolator"`` \| ``"chromaInterpolator"`` \| ``"hueFixup"`` \| ``"lightnessInterpolator"``\>

___

### Options

Ƭ **Options**: `Object`

**`Description`** ℹ

The override parameters for palette functions.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chromaInterpolator?` | [`Interpolator`](types.md#Interpolator) | **`Param`** interpolation method to use on the chroma channel. |
| `earthtones?` | ``"light-gray"`` \| ``"silver"`` \| ``"sand"`` \| ``"tupe"`` \| ``"mahogany"`` \| ``"brick-red"`` \| ``"clay"`` \| ``"cocoa"`` \| ``"dark-brown"`` \| ``"dark"`` | * **`Param`** The earthtone to interpolate with. |
| `easingFunc?` | (`t`: `number`) => `number` | The easing function to use. |
| `hueFixup?` | (`arr`: `number`[]) => `number`[] |  |
| `hueInterpolator?` | [`Interpolator`](types.md#Interpolator) | **`Param`** interpolation method to use on the hue channel. |
| `hueStep?` | `number` | **`Param`** amount of hue angles to increment each iteration with. |
| `lightnessInterpolator?` | [`Interpolator`](types.md#Interpolator) | **`Param`** interpolation method to use on the lightness channel. |
| `maxLightness?` | `number` | **`Param`** Maximum lightness value (range 0-100). |
| `minLightness?` | `number` | * **`Param`** Minimum lightness value (range 0-100). |
| `samples?` | `number` | **`Param`** amount of samples to return in the result collection. |
| `via?` | [`Tone`](types.md#Tone) | **`Param`** color to pass through during interpolation. |

___

### Order

Ƭ **Order**: ``"asc"`` \| ``"desc"``

___

### PairedSchemeOptions

Ƭ **PairedSchemeOptions**: `Omit`\<[`Options`](types.md#Options), ``"earthtones"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

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
