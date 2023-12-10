[huetiful-js](../README.md) / paramTypes

# Module: paramTypes

## Table of contents

### Type Aliases

- [Color](paramTypes.md#color)
- [ColorSpaces](paramTypes.md#colorspaces)
- [ColorTemp](paramTypes.md#colortemp)
- [DivergingScheme](paramTypes.md#divergingscheme)
- [EarthtoneOptions](paramTypes.md#earthtoneoptions)
- [Factor](paramTypes.md#factor)
- [FactorMapper](paramTypes.md#factormapper)
- [Hue](paramTypes.md#hue)
- [HueColorSpaces](paramTypes.md#huecolorspaces)
- [HueMap](paramTypes.md#huemap)
- [HueShiftOptions](paramTypes.md#hueshiftoptions)
- [Interpolator](paramTypes.md#interpolator)
- [Options](paramTypes.md#options)
- [Order](paramTypes.md#order)
- [PairedSchemeOptions](paramTypes.md#pairedschemeoptions)
- [QualitativeScheme](paramTypes.md#qualitativescheme)
- [ScaleValues](paramTypes.md#scalevalues)
- [SequentialScheme](paramTypes.md#sequentialscheme)
- [Tone](paramTypes.md#tone)
- [callback](paramTypes.md#callback)

## Type Aliases

### Color

Ƭ **Color**: `number` \| `string` \| `object` \| [`string`, `number`, `number`, `number`, number?]

#### Defined in

paramTypes.d.ts:133

___

### ColorSpaces

Ƭ **ColorSpaces**: ``"a98"`` \| ``"cubehelix"`` \| ``"dlab"`` \| ``"dlch"`` \| ``"hsi"`` \| ``"hsl"`` \| ``"hsv"`` \| ``"hwb"`` \| ``"jab"`` \| ``"jch"`` \| ``"lab"`` \| ``"lab65"`` \| ``"lch"`` \| ``"lch65"`` \| ``"lchuv"`` \| ``"lrgb"`` \| ``"luv"`` \| ``"okhsl"`` \| ``"okhsv"`` \| ``"oklab"`` \| ``"rgb"``

#### Defined in

paramTypes.d.ts:168

___

### ColorTemp

Ƭ **ColorTemp**: ``"warm"`` \| ``"cool"`` \| ``"daylight"`` \| ``"incadescent"`` \| ``"fluorescent"``

#### Defined in

paramTypes.d.ts:466

___

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

#### Defined in

paramTypes.d.ts:92

___

### EarthtoneOptions

Ƭ **EarthtoneOptions**: `Omit`\<[`Options`](paramTypes.md#options), ``"hueStep"`` \| ``"via"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

#### Defined in

paramTypes.d.ts:72

___

### Factor

Ƭ **Factor**: ``"luminance"`` \| ``"temp"`` \| ``"saturation"`` \| ``"contrast"`` \| ``"distance"`` \| ``"lightness"`` \| ``"hue"``

#### Defined in

paramTypes.d.ts:148

___

### FactorMapper

Ƭ **FactorMapper**: (`factor`: [`Factor`](paramTypes.md#factor), `callback`: [`callback`](paramTypes.md#callback), `order?`: [`Order`](paramTypes.md#order), `colorObj`: `any`) => (`colors`: [`Color`](paramTypes.md#color)[]) => [`Color`](paramTypes.md#color)[]

#### Type declaration

▸ (`factor`, `callback`, `order?`, `colorObj?`): (`colors`: [`Color`](paramTypes.md#color)[]) => [`Color`](paramTypes.md#color)[]

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `factor` | [`Factor`](paramTypes.md#factor) | `undefined` |
| `callback` | [`callback`](paramTypes.md#callback) | `undefined` |
| `order?` | [`Order`](paramTypes.md#order) | `undefined` |
| `colorObj` | `any` | `false` |

##### Returns

`fn`

▸ (`colors`): [`Color`](paramTypes.md#color)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](paramTypes.md#color)[] |

##### Returns

[`Color`](paramTypes.md#color)[]

#### Defined in

paramTypes.d.ts:161

___

### Hue

Ƭ **Hue**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

#### Defined in

paramTypes.d.ts:80

___

### HueColorSpaces

Ƭ **HueColorSpaces**: ``"hsl"`` \| ``"hsv"`` \| ``"hsi"`` \| ``"oklch"`` \| ``"lch"`` \| ``"hwb"``

#### Defined in

paramTypes.d.ts:191

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

#### Defined in

paramTypes.d.ts:205

___

### HueShiftOptions

Ƭ **HueShiftOptions**: `Omit`\<[`Options`](paramTypes.md#options), ``"via"`` \| ``"earthtones"`` \| ``""``\>

#### Defined in

paramTypes.d.ts:77

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

paramTypes.d.ts:78

___

### Options

Ƭ **Options**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chromaInterpolator?` | [`Interpolator`](paramTypes.md#interpolator) | **`Param`** interpolation method to use on the chroma channel. |
| `earthtones?` | ``"light-gray"`` \| ``"silver"`` \| ``"sand"`` \| ``"tupe"`` \| ``"mahogany"`` \| ``"brick-red"`` \| ``"clay"`` \| ``"cocoa"`` \| ``"dark-brown"`` \| ``"dark"`` | * **`Param`** The earthtone to interpolate with. |
| `easingFunc?` | (`t`: `number`) => `number` | The easing function to use. |
| `hueFixup?` | (`arr`: `number`[]) => `number`[] |  |
| `hueInterpolator?` | [`Interpolator`](paramTypes.md#interpolator) | **`Param`** interpolation method to use on the hue channel. |
| `hueStep?` | `number` | **`Param`** amount of hue angles to increment each iteration with. |
| `iterations?` | `number` | **`Param`** amount of samples to return in the result collection. |
| `lightnessInterpolator?` | [`Interpolator`](paramTypes.md#interpolator) | **`Param`** interpolation method to use on the lightness channel. |
| `maxLightness?` | `number` | **`Param`** Maximum lightness value (range 0-100). |
| `minLightness?` | `number` | * **`Param`** Minimum lightness value (range 0-100). |
| `via?` | [`Tone`](paramTypes.md#tone) | **`Param`** color to pass through during interpolation. |

#### Defined in

paramTypes.d.ts:1

___

### Order

Ƭ **Order**: ``"asc"`` \| ``"desc"``

#### Defined in

paramTypes.d.ts:157

___

### PairedSchemeOptions

Ƭ **PairedSchemeOptions**: `Omit`\<[`Options`](paramTypes.md#options), ``"earthtones"`` \| ``"maxLightness"`` \| ``"minLightness"``\>

#### Defined in

paramTypes.d.ts:68

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

#### Defined in

paramTypes.d.ts:102

___

### ScaleValues

Ƭ **ScaleValues**: ``"100"`` \| ``"50"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"``

#### Defined in

paramTypes.d.ts:193

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

#### Defined in

paramTypes.d.ts:112

___

### Tone

Ƭ **Tone**: ``"light"`` \| ``"dark"``

#### Defined in

paramTypes.d.ts:79

___

### callback

Ƭ **callback**: (`arg`: [`Color`](paramTypes.md#color), `colorSpace?`: [`HueColorSpaces`](paramTypes.md#huecolorspaces)) => `number`

#### Type declaration

▸ (`arg`, `colorSpace?`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`Color`](paramTypes.md#color) |
| `colorSpace?` | [`HueColorSpaces`](paramTypes.md#huecolorspaces) |

##### Returns

`number`

#### Defined in

paramTypes.d.ts:159
