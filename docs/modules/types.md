[huetiful-js](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### Type Aliases

- [AdaptivePaletteOptions](types.md#adaptivepaletteoptions)
- [ColorDistanceOptions](types.md#colordistanceoptions)
- [ColorObject](types.md#colorobject)
- [ColorOptions](types.md#coloroptions)
- [ColorSpaces](types.md#colorspaces)
- [ColorTemp](types.md#colortemp)
- [ColorToken](types.md#colortoken)
- [ColorTuple](types.md#colortuple)
- [DeficiencyType](types.md#deficiencytype)
- [DivergingScheme](types.md#divergingscheme)
- [EarthtoneOptions](types.md#earthtoneoptions)
- [Factor](types.md#factor)
- [FactorMapper](types.md#factormapper)
- [HueColorSpaces](types.md#huecolorspaces)
- [HueFamily](types.md#huefamily)
- [HueMap](types.md#huemap)
- [HueShiftOptions](types.md#hueshiftoptions)
- [Interpolator](types.md#interpolator)
- [InterpolatorOptions](types.md#interpolatoroptions)
- [Options](types.md#options)
- [Order](types.md#order)
- [PairedSchemeOptions](types.md#pairedschemeoptions)
- [QualitativeScheme](types.md#qualitativescheme)
- [ScaleValues](types.md#scalevalues)
- [SequentialScheme](types.md#sequentialscheme)
- [Tone](types.md#tone)
- [UniformColorSpaces](types.md#uniformcolorspaces)
- [ViewingConditions](types.md#viewingconditions)
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
| `viewingConditions?` | [`ViewingConditions`](types.md#viewingconditions) |

___

### ColorDistanceOptions

Ƭ **ColorDistanceOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mode?` | [`ColorSpaces`](types.md#colorspaces) |
| `weights?` | [`number`, `number`, `number`, `number`] |

___

### ColorObject

Ƭ **ColorObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |
| `mode` | [`ColorSpaces`](types.md#colorspaces) |

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
| `illuminant?` | ``"D50"`` \| ``"D65"`` |
| `lightMode?` | [`ColorToken`](types.md#colortoken) |
| `lightness?` | `number` |
| `luminance?` | `number` |
| `saturation?` | `number` |
| `temperature?` | `number` |

___

### ColorSpaces

Ƭ **ColorSpaces**: ``"a98"`` \| ``"cubehelix"`` \| ``"dlab"`` \| ``"dlch"`` \| ``"hsi"`` \| ``"hsl"`` \| ``"hsv"`` \| ``"hwb"`` \| ``"jab"`` \| ``"jch"`` \| ``"lab"`` \| ``"lab65"`` \| ``"lch"`` \| ``"lch65"`` \| ``"lchuv"`` \| ``"lrgb"`` \| ``"luv"`` \| ``"okhsl"`` \| ``"okhsv"`` \| ``"oklab"`` \| ``"rgb"``

___

### ColorTemp

Ƭ **ColorTemp**: ``"warm"`` \| ``"cool"`` \| ``"daylight"`` \| ``"incadescent"`` \| ``"fluorescent"``

___

### ColorToken

Ƭ **ColorToken**: `number` \| `string` \| `object` \| [`ColorTuple`](types.md#colortuple)

**`Description`**

Any recognizable color token.

___

### ColorTuple

Ƭ **ColorTuple**: [`string`, `number`, `number`, `number`, number?]

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

Ƭ **HueColorSpaces**: ``"jch"`` \| ``"hsl"`` \| ``"hsv"`` \| ``"hsi"`` \| ``"oklch"`` \| ``"lch"`` \| ``"hwb"`` \| ``"okhsl"`` \| ``"okhsv"`` \| ``"lch65"`` \| ``"lchuv"`` \| ``"dlch"``

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

___

### HueMap

Ƭ **HueMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amber` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `amber.100` | `string` |
| `amber.200` | `string` |
| `amber.300` | `string` |
| `amber.400` | `string` |
| `amber.50` | `string` |
| `amber.500` | `string` |
| `amber.600` | `string` |
| `amber.700` | `string` |
| `amber.800` | `string` |
| `amber.900` | `string` |
| `blue` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `blue.100` | `string` |
| `blue.200` | `string` |
| `blue.300` | `string` |
| `blue.400` | `string` |
| `blue.50` | `string` |
| `blue.500` | `string` |
| `blue.600` | `string` |
| `blue.700` | `string` |
| `blue.800` | `string` |
| `blue.900` | `string` |
| `emerald` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `emerald.100` | `string` |
| `emerald.200` | `string` |
| `emerald.300` | `string` |
| `emerald.400` | `string` |
| `emerald.50` | `string` |
| `emerald.500` | `string` |
| `emerald.600` | `string` |
| `emerald.700` | `string` |
| `emerald.800` | `string` |
| `emerald.900` | `string` |
| `fuchsia` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `fuchsia.100` | `string` |
| `fuchsia.200` | `string` |
| `fuchsia.300` | `string` |
| `fuchsia.400` | `string` |
| `fuchsia.50` | `string` |
| `fuchsia.500` | `string` |
| `fuchsia.600` | `string` |
| `fuchsia.700` | `string` |
| `fuchsia.800` | `string` |
| `fuchsia.900` | `string` |
| `gray` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `gray.100` | `string` |
| `gray.200` | `string` |
| `gray.300` | `string` |
| `gray.400` | `string` |
| `gray.50` | `string` |
| `gray.500` | `string` |
| `gray.600` | `string` |
| `gray.700` | `string` |
| `gray.800` | `string` |
| `gray.900` | `string` |
| `green` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `green.100` | `string` |
| `green.200` | `string` |
| `green.300` | `string` |
| `green.400` | `string` |
| `green.50` | `string` |
| `green.500` | `string` |
| `green.600` | `string` |
| `green.700` | `string` |
| `green.800` | `string` |
| `green.900` | `string` |
| `indigo` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `indigo.100` | `string` |
| `indigo.200` | `string` |
| `indigo.300` | `string` |
| `indigo.400` | `string` |
| `indigo.50` | `string` |
| `indigo.500` | `string` |
| `indigo.600` | `string` |
| `indigo.700` | `string` |
| `indigo.800` | `string` |
| `indigo.900` | `string` |
| `lime` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `lime.100` | `string` |
| `lime.200` | `string` |
| `lime.300` | `string` |
| `lime.400` | `string` |
| `lime.50` | `string` |
| `lime.500` | `string` |
| `lime.600` | `string` |
| `lime.700` | `string` |
| `lime.800` | `string` |
| `lime.900` | `string` |
| `neutral` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `neutral.100` | `string` |
| `neutral.200` | `string` |
| `neutral.300` | `string` |
| `neutral.400` | `string` |
| `neutral.50` | `string` |
| `neutral.500` | `string` |
| `neutral.600` | `string` |
| `neutral.700` | `string` |
| `neutral.800` | `string` |
| `neutral.900` | `string` |
| `orange` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `orange.100` | `string` |
| `orange.200` | `string` |
| `orange.300` | `string` |
| `orange.400` | `string` |
| `orange.50` | `string` |
| `orange.500` | `string` |
| `orange.600` | `string` |
| `orange.700` | `string` |
| `orange.800` | `string` |
| `orange.900` | `string` |
| `pink` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `pink.100` | `string` |
| `pink.200` | `string` |
| `pink.300` | `string` |
| `pink.400` | `string` |
| `pink.50` | `string` |
| `pink.500` | `string` |
| `pink.600` | `string` |
| `pink.700` | `string` |
| `pink.800` | `string` |
| `pink.900` | `string` |
| `purple` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `purple.100` | `string` |
| `purple.200` | `string` |
| `purple.300` | `string` |
| `purple.400` | `string` |
| `purple.50` | `string` |
| `purple.500` | `string` |
| `purple.600` | `string` |
| `purple.700` | `string` |
| `purple.800` | `string` |
| `purple.900` | `string` |
| `red` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `red.100` | `string` |
| `red.200` | `string` |
| `red.300` | `string` |
| `red.400` | `string` |
| `red.50` | `string` |
| `red.500` | `string` |
| `red.600` | `string` |
| `red.700` | `string` |
| `red.800` | `string` |
| `red.900` | `string` |
| `rose` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `rose.100` | `string` |
| `rose.200` | `string` |
| `rose.300` | `string` |
| `rose.400` | `string` |
| `rose.50` | `string` |
| `rose.500` | `string` |
| `rose.600` | `string` |
| `rose.700` | `string` |
| `rose.800` | `string` |
| `rose.900` | `string` |
| `sky` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `sky.100` | `string` |
| `sky.200` | `string` |
| `sky.300` | `string` |
| `sky.400` | `string` |
| `sky.50` | `string` |
| `sky.500` | `string` |
| `sky.600` | `string` |
| `sky.700` | `string` |
| `sky.800` | `string` |
| `sky.900` | `string` |
| `stone` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `stone.100` | `string` |
| `stone.200` | `string` |
| `stone.300` | `string` |
| `stone.400` | `string` |
| `stone.50` | `string` |
| `stone.500` | `string` |
| `stone.600` | `string` |
| `stone.700` | `string` |
| `stone.800` | `string` |
| `stone.900` | `string` |
| `teal` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `teal.100` | `string` |
| `teal.200` | `string` |
| `teal.300` | `string` |
| `teal.400` | `string` |
| `teal.50` | `string` |
| `teal.500` | `string` |
| `teal.600` | `string` |
| `teal.700` | `string` |
| `teal.800` | `string` |
| `teal.900` | `string` |
| `violet` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `violet.100` | `string` |
| `violet.200` | `string` |
| `violet.300` | `string` |
| `violet.400` | `string` |
| `violet.50` | `string` |
| `violet.500` | `string` |
| `violet.600` | `string` |
| `violet.700` | `string` |
| `violet.800` | `string` |
| `violet.900` | `string` |
| `yellow` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `yellow.100` | `string` |
| `yellow.200` | `string` |
| `yellow.300` | `string` |
| `yellow.400` | `string` |
| `yellow.50` | `string` |
| `yellow.500` | `string` |
| `yellow.600` | `string` |
| `yellow.700` | `string` |
| `yellow.800` | `string` |
| `yellow.900` | `string` |
| `zinc` | \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `50`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string`  } |
| `zinc.100` | `string` |
| `zinc.200` | `string` |
| `zinc.300` | `string` |
| `zinc.400` | `string` |
| `zinc.50` | `string` |
| `zinc.500` | `string` |
| `zinc.600` | `string` |
| `zinc.700` | `string` |
| `zinc.800` | `string` |
| `zinc.900` | `string` |

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

Ƭ **ScaleValues**: ``"100"`` \| ``"50"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"``

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

___

### Tone

Ƭ **Tone**: ``"light"`` \| ``"dark"``

___

### UniformColorSpaces

Ƭ **UniformColorSpaces**: ``"lch"`` \| ``"jch"``

___

### ViewingConditions

Ƭ **ViewingConditions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adaptingLuminance?` | `number` |
| `backgroundLuminance?` | `number` |
| `discounting?` | `boolean` |
| `surroundType?` | ``"dim"`` \| ``"dark"`` \| ``"average"`` |
| `whitePoint?` | `Illuminant` |

___

### callback

Ƭ **callback**: `unknown`
