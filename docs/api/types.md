[@prjctimg/huetiful](huetiful.gitbook.io/README.md) / types

## AdaptivePaletteOptions

> **AdaptivePaletteOptions** = \{ \}

Defined in: [types.d.ts:78](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L78)

---

## BiasedHues

> **BiasedHues** = `"red-purple"` \| `"yellow-red"` \| `"green-yellow"` \| `"blue-green"` \| `"purple-blue"`

Defined in: [types.d.ts:454](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L454)

Hue biases as seen when transitioning from one hue to another on the color wheel (Lch).

---

## Collection

> **Collection** = [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `object`

Defined in: [types.d.ts:45](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L45)

Any collection with enumerable keys that can be used to iterate through it to get the values which are expected to be valid color tokens.

---

## ColorFamily

> **ColorFamily** = `"red"` \| `"green"` \| `"blue"` \| `"yellow"` \| `"red"` \| `"purple"` \| `"gray"`

Defined in: [types.d.ts:584](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L584)

The basic color families (including gray).

---

## ColorOptions

> **ColorOptions** = \{ \}

Defined in: [types.d.ts:59](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L59)

Properties on an instance of the `Color` class. Some of these properties have corresponding methods.

---

## Colorspaces

> **Colorspaces** = `"lab"` \| `"rgb"` \| `"lch"` \| `"lch65"` \| `"xyz65"` \| `"xyz"` \| `"lrgb"` \| `"hsv"`

Defined in: [types.d.ts:531](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L531)

The `colorspace` or `mode` to use.

---

## ColorToken

> **ColorToken** = `number` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| `boolean` \| `string` \| `object`

Defined in: [types.d.ts:515](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L515)

Any recognizable color token.

---

## ColorTuple

> **ColorTuple** = (`number` \| `string`)[]

Defined in: [types.d.ts:20](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L20)

An array of channel values for a color token with the `mode` (first element of type `string`) and `alpha` (last element of type `number` in the [0,1] range) being optional.

It can also be in different variants as shown below:

### Example

```ts
// The first element can either be a string `mode` which denotes the colorspace the channel values are valid in.
const colorTuple = ['rgb',0.1,0.5,0.8]
const colorTupleWithAlpha = ['rgb',0.1,0.5,0.8,0.5]
const colorTupleWithAlphaButNoMode = [0.1,0.5,0.8,0.5]
const colorTupleWithNoAlphaAndMode = [0.1,0.5,0.8]

When omitting the `mode` from the color tuple, be sure to specify the `srcMode` option in when passing it to `token()` or any function that has access to `TokenOptions`.
```

---

## DeficiencyOptions

> **DeficiencyOptions** = \{ `kind?`: [`DeficiencyType`](huetiful.gitbook.io/types.md#deficiencytype); `severity?`: `number`; `token?`: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1); \}

Defined in: [types.d.ts:273](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L273)

Overrides to specify the type of color blindness and filter intensity.

### Properties

#### kind?

> `optional` **kind**: [`DeficiencyType`](huetiful.gitbook.io/types.md#deficiencytype)

Defined in: [types.d.ts:277](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L277)

The type of color vision deficiency. Default is `'red'`

#### severity?

> `optional` **severity**: `number`

Defined in: [types.d.ts:281](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L281)

The intensity of the filter. The expected value is between [0,1]. Default is `0.1`.

#### token?

> `optional` **token**: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1)

Defined in: [types.d.ts:285](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L285)

Specify the parsing behaviour and change output type of the `ColorToken`.

---

## DeficiencyType

> **DeficiencyType** = `"red"` \| `"blue"` \| `"green"` \| `"mono"`

Defined in: [types.d.ts:449](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L449)

The type of color vision defeciency.

---

## DiscoverOptions

> **DiscoverOptions** = \{ `colorspace?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `kind?`: [`SchemeType`](huetiful.gitbook.io/types.md#schemetype)[]; `maxDistance?`: `number`; `minDistance?`: `number`; `token?`: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1); \}

Defined in: [types.d.ts:242](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L242)

Options for the `discover()` palette generator function.

### Properties

#### colorspace?

> `optional` **colorspace**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:263](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L263)

The colorspace to retrieve channel values from.

#### kind?

> `optional` **kind**: [`SchemeType`](huetiful.gitbook.io/types.md#schemetype)[]

Defined in: [types.d.ts:247](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L247)

The palette type to return.
Default is `undefined`

#### maxDistance?

> `optional` **maxDistance**: `number`

Defined in: [types.d.ts:258](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L258)

The minimum distance between colors. May affect finally palette results
Default is the `jnd` internal constant.

#### minDistance?

> `optional` **minDistance**: `number`

Defined in: [types.d.ts:252](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L252)

The minimum distance between colors. May affect finally palette results.
Default is 0

#### token?

> `optional` **token**: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1)

Defined in: [types.d.ts:267](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L267)

Specify the parsing behaviour and change output type of the `ColorToken`.

---

## DistributionOptions

> **DistributionOptions** = `Pick`\<[`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions), `"hueFixup"`\> & \{ `colorspace?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `excludeAchromatic?`: `boolean`; `excludeSelf?`: `boolean`; `extremum?`: `"min"` \| `"max"` \| `"mean"`; `factor?`: [`Factor`](huetiful.gitbook.io/types.md#factor)[]; `token?`: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1); \}

Defined in: [types.d.ts:169](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L169)

Override for factor distributed palettes.

### Type declaration

#### colorspace?

> `optional` **colorspace**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

The colorspace to distribute the specified factor in. Defaults to `lch` when the passed in mode has no `'chroma' | 'hue' | 'lightness'` channel

#### excludeAchromatic?

> `optional` **excludeAchromatic**: `boolean`

Exclude grayscale colors from the distribution operation. Default is `false`

#### excludeSelf?

> `optional` **excludeSelf**: `boolean`

Exclude the color with the specified `extremum` from the distribution operation. Default is `false`

#### extremum?

> `optional` **extremum**: `"min"` \| `"max"` \| `"mean"`

The extreme end for the `factor` we wish to distribute. If `mean` is picked, it will map the `average` value of that factor in the passed in collection.

#### factor?

> `optional` **factor**: [`Factor`](huetiful.gitbook.io/types.md#factor)[]

The factor(s) to distribute amongst each color token in the passed in collection.

#### token?

> `optional` **token**: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1)

Specify the parsing behaviour and change output type of the `ColorToken`.

---

## DivergingScheme

> **DivergingScheme** = `"Spectral"` \| `"RdYlGn"` \| `"RdBu"` \| `"PiYG"` \| `"PRGn"` \| `"RdYlBu"` \| `"BrBG"` \| `"RdGy"` \| `"PuOr"`

Defined in: [types.d.ts:464](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L464)

The `diverging` color scheme in the ColorBrewer colormap.

---

## EarthtoneOptions

> **EarthtoneOptions** = [`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions) & \{ `earthtones?`: `"light-gray"` \| `"silver"` \| `"sand"` \| `"tupe"` \| `"mahogany"` \| `"brick-red"` \| `"clay"` \| `"cocoa"` \| `"dark-brown"` \| `"dark"`; \}

Defined in: [types.d.ts:150](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L150)

Options for the `earthtone()` palette generator function.

### Type declaration

#### earthtones?

> `optional` **earthtones**: `"light-gray"` \| `"silver"` \| `"sand"` \| `"tupe"` \| `"mahogany"` \| `"brick-red"` \| `"clay"` \| `"cocoa"` \| `"dark-brown"` \| `"dark"`

- earthtone The earthtone to interpolate with.

---

## Fact\<F\>

> **Fact**\<`F`\> = `F` _extends_ `true` ? \{ `color`: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken); `factor`: `number`; \} : `number`

Defined in: [types.d.ts:30](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L30)

The value of the `factor` being queried usually a number but can also be falsy like `NaN` for edge cases or an object with the value of the factor and the color token associated with it.

### Type Parameters

#### F

`F`

---

## Factor

> **Factor** = `"luminance"` \| `"chroma"` \| `"contrast"` \| `"distance"` \| `"lightness"` \| `"hue"`

Defined in: [types.d.ts:520](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L520)

The color property being queried.

---

## FilterByOptions

> **FilterByOptions** = \{ `against?`: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken); `colorspace?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `factor?`: [`Factor`](huetiful.gitbook.io/types.md#factor)[]; `factorObject?`: `boolean`; `ranges?`: \{ \[F in Factor\]?: (number \| string)\[\] \} \| (`number` \| `string`)[]; \}

Defined in: [types.d.ts:201](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L201)

Overrides for setting filtering criterion, expected ranges and other behaviour.

### Properties

#### against?

> `optional` **against**: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [types.d.ts:232](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L232)

The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.

#### colorspace?

> `optional` **colorspace**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:236](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L236)

The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.

#### factor?

> `optional` **factor**: [`Factor`](huetiful.gitbook.io/types.md#factor)[]

Defined in: [types.d.ts:207](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L207)

The factor to use as a filtering criterion.

Default is `'hue'`

#### factorObject?

> `optional` **factorObject**: `boolean`

Defined in: [types.d.ts:213](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L213)

Return an array of `{factor:number, color:ColorToken}` objects instead of just color tokens.
Default is `false`.

#### ranges?

> `optional` **ranges**: \{ \[F in Factor\]?: (number \| string)\[\] \} \| (`number` \| `string`)[]

Defined in: [types.d.ts:223](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L223)

The targeted start and end ranges for the factor:

- If a single `factor` is specified, `ranges` is expected to be an array.
- If multiple `factor`s are specified then `ranges` is expected to be an object with the factor(s) as keys and an array of the start and end as values.
- The start and end values can be either numbers or string expressions.
  The end value is optional but the range value(s) are expected to be in an array.

---

## HueshiftOptions

> **HueshiftOptions** = `Pick`\<[`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions), `"colorspace"` \| `"easingFn"` \| `"num"` \| `"tokenOptions"`\> & \{ `hueStep?`: `number`; `maxLightness?`: `number`; `minLightness?`: `number`; \}

Defined in: [types.d.ts:422](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L422)

Options for the `hueshift()` palette generator function.

### Type declaration

#### hueStep?

> `optional` **hueStep**: `number`

The hue angle to increment each iteration with.

#### maxLightness?

> `optional` **maxLightness**: `number`

maxLightness Maximum lightness value (range 0-100).

#### minLightness?

> `optional` **minLightness**: `number`

- minLightness Minimum lightness value (range 0-100).

---

## InterpolatorOptions

> **InterpolatorOptions** = \{ `closed?`: `boolean`; `colorspace?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `easingFn?`: (`t`) => `number`; `hueFixup?`: `"longer"` \| `"shorter"`; `kind?`: `"basis"` \| `"monotone"` \| `"natural"`; `num?`: `number`; `stops?`: `number`[]; `tokenOptions?`: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1); \}

Defined in: [types.d.ts:89](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L89)

Options for customizing the color interpolator behaviour. It is extended by some palette utilities

### Properties

#### closed?

> `optional` **closed**: `boolean`

Defined in: [types.d.ts:129](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L129)

Optional parameter to return the `'closed'` variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is `false`

#### colorspace?

> `optional` **colorspace**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:100](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L100)

The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.

#### easingFn()?

> `optional` **easingFn**: (`t`) => `number`

Defined in: [types.d.ts:110](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L110)

The easing function to use.

##### Parameters

###### t

`number`

Any value between 0 and 1

##### Returns

`number`

A number.

#### hueFixup?

> `optional` **hueFixup**: `"longer"` \| `"shorter"`

Defined in: [types.d.ts:115](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L115)

The type of hue fixup to apply to the hue channels during interpolation.

#### kind?

> `optional` **kind**: `"basis"` \| `"monotone"` \| `"natural"`

Defined in: [types.d.ts:125](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L125)

The type of the spline interpolation method. Default is basis.

#### num?

> `optional` **num**: `number`

Defined in: [types.d.ts:120](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L120)

The amount of samples to return in the result collection.

#### stops?

> `optional` **stops**: `number`[]

Defined in: [types.d.ts:95](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L95)

The positions of color stops to use during interpolation. Each number in the array is assigned to the colors in the collection according to the order the colors are passed in.

Plain objects as collects do not remember insertion order so it may return unexpected results. Preferably use an ArrayLike or Map object.

#### tokenOptions?

> `optional` **tokenOptions**: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1)

Defined in: [types.d.ts:104](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L104)

Specify the parsing behaviour and change output type of the `ColorToken`.

---

## Order

> **Order** = `"asc"` \| `"desc"`

Defined in: [types.d.ts:25](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L25)

The order to insert elements back into the result collection either ascending (`'asc'`) or descending (`'desc'`).

---

## PairedSchemeOptions

> **PairedSchemeOptions** = [`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions) & \{ `hueStep?`: `number`; `via?`: [`Tone`](huetiful.gitbook.io/types.md#tone); \}

Defined in: [types.d.ts:135](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L135)

Options for the `pair()` palette generator function.

### Type declaration

#### hueStep?

> `optional` **hueStep**: `number`

The hue angle to increment each iteration with.

#### via?

> `optional` **via**: [`Tone`](huetiful.gitbook.io/types.md#tone)

The color to pass through during interpolation.

---

## QualitativeScheme

> **QualitativeScheme** = `"Set2"` \| `"Accent"` \| `"Set1"` \| `"Set3"` \| `"Dark2"` \| `"Paired"` \| `"Pastel2"` \| `"Pastel1"`

Defined in: [types.d.ts:478](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L478)

The `qualitative` color scheme in the ColorBrewer colormap.

---

## ScaleValues

> **ScaleValues** = `"050"` \| `"100"` \| `"200"` \| `"300"` \| `"400"` \| `"500"` \| `"600"` \| `"700"` \| `"800"` \| `"900"` \| `"950"`

Defined in: [types.d.ts:543](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L543)

The value of the Tailwind color.

---

## SchemeOptions

> **SchemeOptions** = `Pick`\<[`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions), `"easingFn"` \| `"colorspace"`\> & \{ `kind?`: [`SchemeType`](huetiful.gitbook.io/types.md#schemetype)[]; `token?`: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1); \}

Defined in: [types.d.ts:411](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L411)

Options for the `scheme()` palette generator function.

### Type declaration

#### kind?

> `optional` **kind**: [`SchemeType`](huetiful.gitbook.io/types.md#schemetype)[]

#### token?

> `optional` **token**: [`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1)

---

## SchemeType

> **SchemeType** = `"analogous"` \| `"triadic"` \| `"tetradic"` \| `"complementary"`

Defined in: [types.d.ts:40](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L40)

The scheme to use when creating base palettes.

---

## SequentialScheme

> **SequentialScheme** = `"OrRd"` \| `"PuBu"` \| `"BuPu"` \| `"Oranges"` \| `"BuGn"` \| `"YlOrBr"` \| `"YlGn"` \| `"Reds"` \| `"RdPu"` \| `"Greens"` \| `"YlGnBu"` \| `"Purples"` \| `"GnBu"` \| `"Greys"` \| `"YlOrRd"` \| `"PuRd"` \| `"Blues"` \| `"PuBuGn"` \| `"Viridis"`

Defined in: [types.d.ts:491](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L491)

The `sequential` color scheme in the ColorBrewer colormap.

---

## SortByOptions

> **SortByOptions** = \{ `against?`: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken); `colorspace?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `factor?`: [`Factor`](huetiful.gitbook.io/types.md#factor)[]; `factorObject?`: `boolean`; `order?`: `"asc"` \| `"desc"`; `relative?`: `boolean`; \}

Defined in: [types.d.ts:353](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L353)

Options for specifying sorting conditions.

### Properties

#### against?

> `optional` **against**: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [types.d.ts:381](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L381)

The color to compare the `factor` with.
All the `factor`s are calculated between this color and the ones in the colors array.
Only works for the `'distance'` and `'contrast'` factor.

#### colorspace?

> `optional` **colorspace**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:385](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L385)

The colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.

#### factor?

> `optional` **factor**: [`Factor`](huetiful.gitbook.io/types.md#factor)[]

Defined in: [types.d.ts:371](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L371)

The factor to use for sorting the colors.

#### factorObject?

> `optional` **factorObject**: `boolean`

Defined in: [types.d.ts:365](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L365)

Return an array of `{factor:number, color:ColorToken}` objects instead of just color tokens.
Default is `false`.

#### order?

> `optional` **order**: `"asc"` \| `"desc"`

Defined in: [types.d.ts:375](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L375)

The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`).

#### relative?

> `optional` **relative**: `boolean`

Defined in: [types.d.ts:359](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L359)

Use the `against` comparison color when ordering the color tokens.

It has no effect on `contrast` and `distance` factors because they're already relative.

---

## Stats

> **Stats** = \{ \[T in Factor\]: \{ against?: ColorToken \| null; colors?: ColorToken\[\]; extremums?: number\[\]; families?: (BiasedHues \| "gray")\[\]; mean?: number \} & \{ achromatic?: number; colorspace?: Colorspaces \} \}

Defined in: [types.d.ts:335](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L335)

The default structure of a `Stats` object as returned by `stats()` when invoked with default `options`.

---

## StatsOptions

> **StatsOptions** = \{ `against?`: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken); `colorspace?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `relative?`: `boolean`; \}

Defined in: [types.d.ts:391](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L391)

Optional parameters to specify how the data should be computed.

### Properties

#### against?

> `optional` **against**: [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [types.d.ts:395](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L395)

The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.

#### colorspace?

> `optional` **colorspace**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:399](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L399)

The colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.

#### relative?

> `optional` **relative**: `boolean`

Defined in: [types.d.ts:404](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L404)

Choose whether to use the `against` color token for factors that support it as an overload (that is, all factors except `distance` and `contrast)

---

## Tailwind

> **Tailwind** = `"indigo"` \| `"gray"` \| `"zinc"` \| `"neutral"` \| `"stone"` \| `"red"` \| `"orange"` \| `"amber"` \| `"yellow"` \| `"lime"` \| `"green"` \| `"emerald"` \| `"teal"` \| `"sky"` \| `"blue"` \| `"violet"` \| `"purple"` \| `"fuchsia"` \| `"pink"` \| `"rose"`

Defined in: [types.d.ts:559](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L559)

Color families in the default TailwindCSS palette.

---

## TokenOptions

> **TokenOptions** = \{ `kind?`: `"num"` \| `"arr"` \| `"obj"` \| `"str"`; `normalizeRgb?`: `boolean`; `numType?`: `"expo"` \| `"hex"` \| `"oct"` \| `"bin"`; `omitAlpha?`: `boolean`; `omitMode?`: `boolean`; `srcMode?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); `targetMode?`: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces); \}

Defined in: [types.d.ts:291](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L291)

Overrides to customize the parsing and output behaviour.

### Properties

#### kind?

> `optional` **kind**: `"num"` \| `"arr"` \| `"obj"` \| `"str"`

Defined in: [types.d.ts:295](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L295)

The type of color token to return. Default is `'str'`.

#### normalizeRgb?

> `optional` **normalizeRgb**: `boolean`

Defined in: [types.d.ts:314](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L314)

If `true` and the passed in color token is an array or plain object and in the `srcMode` of `'rgb'` or `'lrgb'`,
it will have all channels normalized back to [0,1] range if any of the channel values is beyond 1.

This can help the parser to recognize RGB colors in the [0,255] range which Culori doesn't handle.

Default is `true`.

#### numType?

> `optional` **numType**: `"expo"` \| `"hex"` \| `"oct"` \| `"bin"`

Defined in: [types.d.ts:319](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L319)

The type of number to return. Only valid if kind is set to `'number'`. Default is `'literal'`

#### omitAlpha?

> `optional` **omitAlpha**: `boolean`

Defined in: [types.d.ts:304](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L304)

If the `kind` is set to `'arr'` it will remove the alpha channel value from color tuple. Default is `false`.

#### omitMode?

> `optional` **omitMode**: `boolean`

Defined in: [types.d.ts:299](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L299)

If the `kind` is set to `'arr'` it will remove the mode string from color tuple. Default is `false`.

#### srcMode?

> `optional` **srcMode**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:324](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L324)

The mode in which the channel values are valid in. It is used for color arrays if they have the `colorspace` string omitted. Default is `'rgb'`.

#### targetMode?

> `optional` **targetMode**: [`Colorspaces`](huetiful.gitbook.io/types.md#colorspaces)

Defined in: [types.d.ts:329](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L329)

The colorspace in which to return the color object or array in. Default is `'lch'`.

---

## Tone

> **Tone** = `"light"` \| `"dark"`

Defined in: [types.d.ts:444](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/types.d.ts#L444)

The tone to use.
