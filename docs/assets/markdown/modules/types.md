[huetiful-js](../README.md) / [Modules](../modules.md) / types

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

[types.d.ts:43](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L43)

___

### ColorDistanceOptions

Ƭ **ColorDistanceOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mode?` | [`Colorspaces`](types.md#colorspaces) |
| `weights?` | [`number`, `number`, `number`, `number`] |

#### Defined in

[types.d.ts:34](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L34)

___

### ColorObject

Ƭ **ColorObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `mode` | [`Colorspaces`](types.md#colorspaces) |

#### Defined in

[types.d.ts:19](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L19)

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

[types.d.ts:20](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L20)

___

### ColorToken

Ƭ **ColorToken**: `number` \| `string` \| `object` \| [`ColorTuple`](types.md#colortuple)

**`Description`**

Any recognizable color token.

#### Defined in

[types.d.ts:199](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L199)

___

### ColorTuple

Ƭ **ColorTuple**: [[`Colorspaces`](types.md#colorspaces), `number`, `number`, `number`, number?]

#### Defined in

[types.d.ts:17](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L17)

___

### Colorspaces

Ƭ **Colorspaces**: ``"a98"`` \| ``"cubehelix"`` \| ``"dlab"`` \| ``"jab"`` \| ``"lab"`` \| ``"lab65"`` \| ``"lrgb"`` \| ``"luv"`` \| ``"oklab"`` \| ``"rgb"`` \| [`HueColorSpaces`](types.md#huecolorspaces)

#### Defined in

[types.d.ts:231](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L231)

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

#### Defined in

[types.d.ts:141](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L141)

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

#### Defined in

[types.d.ts:154](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L154)

___

### EarthtoneOptions

Ƭ **EarthtoneOptions**: `Omit`\<[`Options`](types.md#options), ``"hueStep"`` \| ``"via"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

#### Defined in

[types.d.ts:132](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L132)

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"temp"`` \| ``"saturation"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"`` \| `string`

#### Defined in

[types.d.ts:210](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L210)

___

### HueColorSpaces

Ƭ **HueColorSpaces**: [`UniformColorSpaces`](types.md#uniformcolorspaces) \| ``"hsl"`` \| ``"hsv"`` \| ``"hsi"`` \| ``"hwb"`` \| ``"okhsl"`` \| ``"okhsv"``

#### Defined in

[types.d.ts:244](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L244)

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

#### Defined in

[types.d.ts:142](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L142)

___

### HueShiftOptions

Ƭ **HueShiftOptions**: `Omit`\<[`Options`](types.md#options), ``"via"`` \| ``"earthtones"`` \| ``""``\> & [`InterpolatorOptions`](types.md#interpolatoroptions)

#### Defined in

[types.d.ts:137](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L137)

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

[types.d.ts:139](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L139)

___

### InterpolatorOptions

Ƭ **InterpolatorOptions**: `Pick`\<[`Options`](types.md#options), ``"easingFn"`` \| ``"hueInterpolator"`` \| ``"chromaInterpolator"`` \| ``"hueFixup"`` \| ``"lightnessInterpolator"``\>

#### Defined in

[types.d.ts:48](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L48)

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

[types.d.ts:61](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L61)

___

### PairedSchemeOptions

Ƭ **PairedSchemeOptions**: `Omit`\<[`Options`](types.md#options), ``"earthtones"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

#### Defined in

[types.d.ts:128](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L128)

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

#### Defined in

[types.d.ts:164](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L164)

___

### ScaleValues

Ƭ **ScaleValues**: ``"050"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"`` \| ``"950"``

#### Defined in

[types.d.ts:253](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L253)

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

#### Defined in

[types.d.ts:174](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L174)

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

#### Defined in

[types.d.ts:266](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L266)

___

### Tone

Ƭ **Tone**: ``"light"`` \| ``"dark"``

#### Defined in

[types.d.ts:140](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L140)

___

### UniformColorSpaces

Ƭ **UniformColorSpaces**: ``"lch"`` \| ``"jch"`` \| ``"dlch"`` \| ``"lch"`` \| ``"lch65"`` \| ``"lchuv"`` \| ``"oklch"`` \| `string`

#### Defined in

[types.d.ts:222](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L222)

___

### callback

Ƭ **callback**: `unknown`

#### Defined in

[types.d.ts:220](https://github.com/prjctimg/huetiful/blob/9939ea7/types/types.d.ts#L220)
