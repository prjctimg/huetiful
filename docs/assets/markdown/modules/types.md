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
- [HueColorSpaces](types.md#huecolorspaces)
- [HueFamily](types.md#huefamily)
- [HueShiftOptions](types.md#hueshiftoptions)
- [Interpolator](types.md#interpolator)
- [InterpolatorOptions](types.md#interpolatoroptions)
- [Options](types.md#options)
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

#### Defined in

[types.d.ts:42](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L42)

___

### ColorDistanceOptions

Ƭ **ColorDistanceOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mode?` | [`Colorspaces`](types.md#colorspaces) |
| `weights?` | [`number`, `number`, `number`, `number`] |

#### Defined in

[types.d.ts:33](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L33)

___

### ColorObject

Ƭ **ColorObject**: `Object`

#### Index signature

▪ [channel: `string`]: `number` \| `undefined`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `colorspace` | [`Colorspaces`](types.md#colorspaces) |

#### Defined in

[types.d.ts:206](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L206)

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

#### Defined in

[types.d.ts:19](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L19)

___

### ColorToken

Ƭ **ColorToken**: `number` \| `string` \| [`ColorObject`](types.md#colorobject) \| [`ColorTuple`](types.md#colortuple)

**`Description`**

Any recognizable color token.

#### Defined in

[types.d.ts:204](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L204)

___

### ColorTuple

Ƭ **ColorTuple**: [[`Colorspaces`](types.md#colorspaces), `number`, `number`, `number`, number?]

#### Defined in

[types.d.ts:17](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L17)

___

### Colorspaces

Ƭ **Colorspaces**: ``"a98"`` \| ``"cubehelix"`` \| ``"dlab"`` \| ``"jab"`` \| ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"luv"`` \| ``"oklab"`` \| ``"rgb"`` \| [`HueColorSpaces`](types.md#huecolorspaces)

#### Defined in

[types.d.ts:244](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L244)

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

#### Defined in

[types.d.ts:146](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L146)

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

#### Defined in

[types.d.ts:159](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L159)

___

### EarthtoneOptions

Ƭ **EarthtoneOptions**: `Omit`\<[`Options`](types.md#options), ``"hueStep"`` \| ``"via"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

#### Defined in

[types.d.ts:137](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L137)

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"temp"`` \| ``"saturation"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"`` \| `string`

#### Defined in

[types.d.ts:223](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L223)

___

### HueColorSpaces

Ƭ **HueColorSpaces**: [`UniformColorSpaces`](types.md#uniformcolorspaces) \| ``"hsl"`` \| ``"hsv"`` \| ``"hsi"`` \| ``"hwb"`` \| ``"okhsl"`` \| ``"okhsv"``

#### Defined in

[types.d.ts:257](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L257)

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

#### Defined in

[types.d.ts:147](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L147)

___

### HueShiftOptions

Ƭ **HueShiftOptions**: `Omit`\<[`Options`](types.md#options), ``"via"`` \| ``"earthtones"`` \| ``""``\> & [`InterpolatorOptions`](types.md#interpolatoroptions)

#### Defined in

[types.d.ts:142](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L142)

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

#### Defined in

[types.d.ts:144](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L144)

___

### InterpolatorOptions

Ƭ **InterpolatorOptions**: `Pick`\<[`Options`](types.md#options), ``"easingFn"`` \| ``"hueInterpolator"`` \| ``"chromaInterpolator"`` \| ``"hueFixup"`` \| ``"lightnessInterpolator"`` \| ``"domain"``\>

#### Defined in

[types.d.ts:47](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L47)

___

### Options

Ƭ **Options**: `Object`

**`Description`**

The override parameters for palette functions.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chromaInterpolator?` | [`Interpolator`](types.md#interpolator) | **`Param`** interpolation method to use on the chroma channel. |
| `domain?` | [`number`, number?] | **`Param`** The color stops in the range [0,1] passed in as an array. The color scale returned is from the start (which is element at index 0) up to the optional end which defaults to 1. |
| `earthtones?` | ``"light-gray"`` \| ``"silver"`` \| ``"sand"`` \| ``"tupe"`` \| ``"mahogany"`` \| ``"brick-red"`` \| ``"clay"`` \| ``"cocoa"`` \| ``"dark-brown"`` \| ``"dark"`` | * **`Param`** The earthtone to interpolate with. |
| `easingFn?` | (`t`: `number`) => `number` | The easing function to use. |
| `hueFixup?` | (`arr`: `number`[]) => `number`[] |  |
| `hueInterpolator?` | [`Interpolator`](types.md#interpolator) | **`Param`** interpolation method to use on the hue channel. |
| `hueStep?` | `number` | **`Param`** amount of hue angles to increment each iteration with. |
| `iterations?` | `number` | **`Param`** amount of samples to return in the result collection. |
| `lightnessInterpolator?` | [`Interpolator`](types.md#interpolator) | **`Param`** interpolation method to use on the lightness channel. |
| `maxLightness?` | `number` | **`Param`** Maximum lightness value (range 0-100). |
| `minLightness?` | `number` | * **`Param`** Minimum lightness value (range 0-100). |
| `via?` | [`Tone`](types.md#tone) | **`Param`** color to pass through during interpolation. |

#### Defined in

[types.d.ts:61](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L61)

___

### PairedSchemeOptions

Ƭ **PairedSchemeOptions**: `Omit`\<[`Options`](types.md#options), ``"earthtones"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

#### Defined in

[types.d.ts:133](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L133)

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

#### Defined in

[types.d.ts:169](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L169)

___

### ScaleValues

Ƭ **ScaleValues**: ``"050"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"`` \| ``"950"``

#### Defined in

[types.d.ts:266](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L266)

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

#### Defined in

[types.d.ts:179](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L179)

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

#### Defined in

[types.d.ts:279](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L279)

___

### Tone

Ƭ **Tone**: ``"light"`` \| ``"dark"``

#### Defined in

[types.d.ts:145](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L145)

___

### UniformColorSpaces

Ƭ **UniformColorSpaces**: ``"lch"`` \| ``"jch"`` \| ``"dlch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"lchuv"`` \| ``"oklch"`` \| `string`

#### Defined in

[types.d.ts:235](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L235)

___

### callback

Ƭ **callback**: `unknown`

#### Defined in

[types.d.ts:233](https://github.com/prjctimg/huetiful/blob/12f39ea/types/types.d.ts#L233)
