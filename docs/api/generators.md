[@prjctimg/huetiful](huetiful.gitbook.io/README.md) / generators

## discover()

> **discover**(`colors`, `options`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [generators/index.ts:391](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L391)

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.

The function returns different values based on the `kind` parameter passed in:

- An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
- Else it returns an object of all the palette types as keys and their values as an array of colors.
  :::caution
  If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
  :::

### Parameters

#### colors

[`Collection`](huetiful.gitbook.io/types.md#collection) = `[]`

The collection of colors to create palettes from. Preferably use 6 or more colors for better results.

#### options

[`DiscoverOptions`](huetiful.gitbook.io/types.md#discoveroptions) = `...`

### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

### Example

```ts
import { discover } from "huetiful-js";

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
];

console.log(discover(sample, { kind: "tetradic" }));
// [ '#ffff00', '#00ffdc', '#310000', '#720000' ]
```

---

## earthtone()

> **earthtone**(`baseColor?`, `options?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[]

Defined in: [generators/index.ts:463](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L463)

Creates a color scale between an earth tone and any color token using spline interpolation.

### Parameters

#### baseColor?

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to interpolate an earth tone with.

#### options?

[`EarthtoneOptions`](huetiful.gitbook.io/types.md#earthtoneoptions) = `{}`

Optional overrides for customising interpolation and easing functions.

### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[]

### Example

```ts
import { earthtone } from "huetiful-js";

console.log(earthtone("pink", "lch", { earthtones: "clay", samples: 5 }));
// [ '#6a5c52', '#8d746a', '#b38d86', '#d9a6a6', '#ffc0cb' ]
```

---

## hueshift()

> **hueshift**(`baseColor?`, `options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [generators/index.ts:83](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L83)

Creates a palette of hue shifted colors from the passed in color.

:::tip

Hue shifting means that:

- As a color becomes lighter, its hue shifts up (increases).
- As a color becomes darker its hue shifts down (decreases).

The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extremum respectively.'

:::

The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or simply `(num * 2) + 1`.

### Parameters

#### baseColor?

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to use as the base of the palette.

#### options?

[`HueshiftOptions`](huetiful.gitbook.io/types.md#hueshiftoptions) = `{}`

The optional overrides object.

### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

### Example

```ts
import { hueshift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
 '#ffffe1', '#ffdca5',
 '#ca9a70', '#935c40',
 '#5c2418', '#3e0000',
 '#310000', '#34000f',
 '#38001e', '#3b002c',
 '#3b0c3a'
]
```

---

## interpolator()

> **interpolator**(`baseColors`, `options`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[]

Defined in: [generators/index.ts:290](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L290)

Interpolates the passed in colors and returns a color scale that is evenly split into `num` amount of samples.

The interpolation behaviour can be overidden allowing us to get slightly different effects from the same `baseColors`.

The behaviour of the interpolation can be customized by:

- Changing the `kind` of interpolation

  - natural
  - basis
  - monotone

- Changing the easing function (`easingFn`)

:::tip

- To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
- If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
- If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
  :::

### Parameters

#### baseColors

[`Collection`](huetiful.gitbook.io/types.md#collection) = `[]`

The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.

#### options

[`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions) = `{}`

Optional overrides to customize parameters such as interpolation methods and per channel eeasings.

### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[]

### Example

```ts
import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], { num:8 }));

// [
 '#ffc0cb', '#ff9ebe',
 '#f97bbb', '#ed57bf',
 '#d830c9', '#b800d9',
 '#8700eb', '#0000ff'
]
```

---

## pair()

> **pair**(`baseColor?`, `options?`): `string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\>

Defined in: [generators/index.ts:219](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L219)

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

### Parameters

#### baseColor?

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to return a paired color scheme from.

#### options?

[`PairedSchemeOptions`](huetiful.gitbook.io/types.md#pairedschemeoptions)

The optional overrides object to customize per channel options like interpolation methods and channel fixups.

### Returns

`string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\>

### Example

```ts
import { pair } from "huetiful-js";

console.log(pair("green", { hueStep: 6, num: 4, tone: "dark" }));
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

---

## pastel()

> **pastel**(`baseColor?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [generators/index.ts:171](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L171)

Returns a random pastel variant of the passed in color token.

:::tip
Pastel colors are those soft hued colors like baby blue,pink and mauve.

:::

### Parameters

#### baseColor?

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to return a pastel variant of.

### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

### Example

```ts
import { pastel } from "huetiful-js";

console.log(pastel("green"));

// #036103ff
```

---

## scheme()

> **scheme**(`baseColor?`, `options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [generators/index.ts:527](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/generators/index.ts#L527)

Generates a randomised classic scheme from the passed in color.

The `kind` parameter can either be an array or `undefined`:

- If it is an array, each element should be a valid `kind` of scheme.
  It will return a color map with the array elements (which are valid schemes) as keys.
  Duplicate schemes are simply ignored.
- If it is falsy it will return a color map of all palettes.

The classic schemes are are:

- `triadic` - Picks 3 colors 120 degrees apart.
- `tetradic` - Picks 4 colors 90 degrees apart.
- `complimentary` - Picks 2 colors 180 degrees apart.
- `mono` - Picks `num` amount of colors from the same hue family .
- `analogous` - Picks 3 colors 12 degrees apart.

Note that the `num` parameter works on the `monochromatic` palette type only. Other schemes will return a constant amount of samples.

### Parameters

#### baseColor?

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to create the palette(s) from.

#### options?

[`SchemeOptions`](huetiful.gitbook.io/types.md#schemeoptions) = `...`

Optional overrides.

### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

### Example

```ts
import { scheme } from "huetiful-js";

console.log(scheme("triadic")("#a1bd2f"));
// [ '#a1bd2f', '#00caff', '#ff78c9' ]
```
