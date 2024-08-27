## Classes

### ColorArray

Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument). \*

#### Example

```ts
* import { ColorArray } from 'huetiful-js'
*
let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
```

#### Constructors

##### new ColorArray()

> **new ColorArray**(`colors`): [`ColorArray`](index.md#colorarray)

###### Parameters

• **colors**: `any`

The collection of colors to bind.

###### Returns

[`ColorArray`](index.md#colorarray)

###### Defined in

[wrappers/index.ts:50](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L50)

#### Methods

##### discover()

> **discover**(`options`): [`ColorArray`](index.md#colorarray)

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.

The function returns different values based on the `kind` parameter passed in:

- An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
- Else it returns an object of all the palette types as keys and their values as an array of colors.

If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.

###### Parameters

• **options**: `any`

###### Returns

[`ColorArray`](index.md#colorarray)

###### Example

```ts
import { load } from 'huetiful-js';

let sample = [
	'#ffff00',
	'#00ffdc',
	'#00ff78',
	'#00c000',
	'#007e00',
	'#164100',
	'#720000',
	'#600000',
	'#4e0000',
	'#3e0000',
	'#310000'
];

console.log(load(sample).discover({ kind: 'tetradic' }).output());
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

###### Defined in

[wrappers/index.ts:144](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L144)

##### filterBy()

> **filterBy**(`options`): `Collection`

Filters a collection of colors using the specified `factor` as the criterion. The supported options are:

- `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

- `'lightness'` - Returns colors in the specified lightness range.

- `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

- `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.

- `luminance` - Returns colors in the specified luminance range.

- `'hue'` - Returns colors in the specified hue ranges between 0 to 360.

For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.
But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.

###### Parameters

• **options**: `any`

###### Returns

`Collection`

###### See

[https://culorijs.org/color-spaces/](https://culorijs.org/color-spaces/) For the expected ranges per colorspace.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

###### Example

```ts
import { filterBy } from 'huetiful-js';

let sample = [
	'#00ffdc',
	'#00ff78',
	'#00c000',
	'#007e00',
	'#164100',
	'#ffff00',
	'#310000',
	'#3e0000',
	'#4e0000',
	'#600000',
	'#720000'
];

// Filtering colors by their relative contrast against 'green'.
// The collection will include colors with a relative contrast equal to 3 or greater.

console.log(
	load(sample).filterBy({ start: '>=3', factor: 'contrast', against: 'green' })
);
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

###### Defined in

[wrappers/index.ts:193](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L193)

##### interpolator()

> **interpolator**(`options`): [`ColorArray`](index.md#colorarray)

Interpolates the passed in colors and returns a collection of colors from the interpolation.

Some things to keep in mind when creating color scales using this function:

- To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
- If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
- If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.

###### Parameters

• **options**: `any`

Optional channel specific overrides.

###### Returns

[`ColorArray`](index.md#colorarray)

###### Example

```ts
import { load } from 'huetiful-js';

 console.log(load(['pink', 'blue']).interpolateSpline({num:8, colorspace:'lch'}));

 // [
'#ffc0cb', '#ff9ebe',
'#f97bbb', '#ed57bf',
'#d830c9', '#b800d9',
'#8700eb', '#0000ff'
 ]
 *
```

###### Defined in

[wrappers/index.ts:101](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L101)

##### nearest()

> **nearest**(`against`, `num`): [`ColorArray`](index.md#colorarray)

Returns the nearest color(s) in the bound collection against

###### Parameters

• **against**: `any`

The color to use for distance comparison.

• **num**: `any`

The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.

###### Returns

[`ColorArray`](index.md#colorarray)

###### Example

```ts
import { load, colors } from 'huetiful-js';

let cols = colors('all', '500');

console.log(load(cols).nearest('blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

###### Defined in

[wrappers/index.ts:69](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L69)

##### output()

> **output**(): `any`

###### Returns

`any`

Returns the result value from the chain.

###### Defined in

[wrappers/index.ts:268](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L268)

##### sortBy()

> **sortBy**(`options`): `Collection`

Sorts colors according to the specified `factor`. The supported options are:

- `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
  The contrast is tested `against` a comparison color which can be specified in the `options` object.
- `'lightness'` - Sorts colors according to their lightness.
- `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
- `'distance'` - Sorts colors according to their distance.
  The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
- `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

The return type is determined by the type of `collection`:

- Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
- `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.

###### Parameters

• **options**: `any`

###### Returns

`Collection`

###### Example

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 load(sample).sortBy({ against:'yellow' factor:'distance',order:'desc'})
)

// [ 'brown', 'red', 'green', 'purple' ]
```

###### Defined in

[wrappers/index.ts:227](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L227)

##### stats()

> **stats**(`options`): \{}

Computes statistical values about the passed in color collection.

The topmost properties from each returned `factor` object are:

- `against` - The color being used for comparison.

Required for the `distance` and `contrast` factors.
If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.

- `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).

- `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.

- `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.

- `mean` - The average value for the `factor`.

- `displayable` - The percentage of the displayable or colors with channel ranges that can be rendered in that colorspace when converted to RGB.

The `mean` property can be overloaded by the `relativeMean` option:

- If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
  For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."

###### Parameters

• **options**: `any`

Optional parameters to specify how the data should be computed.

###### Returns

\{}

###### Defined in

[wrappers/index.ts:257](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/wrappers/index.ts#L257)

## Functions

### achromatic()

> **achromatic**(`color`): `boolean`

Checks if a color token is achromatic (without hue or simply grayscale).

#### Parameters

• **color**: `any`

The color token to test if it is achromatic or not.

#### Returns

`boolean`

#### Example

```ts
import { achromatic } from 'huetiful-js';

achromatic('pink');
// false

let sample = ['#164100', '#ffff00', '#310000', 'pink'];

console.log(sample.map(achromatic));

// [false, false, false,false]

achromatic('gray');
// Returns true

// We can expand this example by interpolating between black and white and then getting some samples to iterate through.

import { interpolator } from 'huetiful-js';

// we create an interpolation using black and white with 12 samples
let grays = interpolator(['black', 'white'], { num: 12 });

console.log(grays.map(achromatic));

//
[false, true, true, true, true, true, true, true, true, true, true, false];
```

#### Defined in

[utils/index.ts:247](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L247)

---

### alpha()

> **alpha**(`color`, `amount`): `any`

Returns the color token's alpha channel value.

If the the `amount` parameter is passed in, it sets the color token's alpha channel with the `amount` specified
and returns the color as a hex string.

- Also supports math expressions as a `string` for the `amount` parameter.
  For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value.
  In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.

#### Parameters

• **color**: `any`

The color with the opacity/alpha channel to retrieve or set.

• **amount**: `any` = `undefined`

The value to apply to the opacity channel. The value is between `[0,1]`

#### Returns

`any`

#### Example

```ts
// Getting the alpha
console.log(alpha('#a1bd2f0d'));
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5);

console.log(myColor);

// #b2c3f180
```

#### Defined in

[utils/index.ts:86](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L86)

---

### colors()

> **colors**(`shade`, `value`): `any`

Returns TailwindCSS color value(s) from the default palette.

The function behaves as follows:

- If called with both `shade` and `value` parameters, it returns that color as a hex string. For example `'blue'` and `'500'` would return the equivalent of `blue-500`.
- If called with no parameters or just the `'all'` parameter as the `shade`, it returns an array of colors from `'050'` to `'900'` for every `shade`.

Note that to specify `'050'` as a number you just pass `50`. Values are all valid as string or number for example `'100'` and`100` .

- If the `shade ` is `'all'` and the `value` is specified, it returns an array of colors at the specified `value` for each `shade`.

#### Parameters

• **shade**: `string` = `"all"`

The hue family to return.

• **value**: `any` = `undefined`

The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid.

#### Returns

`any`

#### Example

```ts
import { colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
console.log(colors('red'));
// [
 '#fef2f2', '#fee2e2',
 '#fecaca', '#fca5a5',
 '#f87171', '#ef4444',
 '#dc2626', '#b91c1c',
 '#991b1b', '#7f1d1d'
]

console.log(colors('red','900'));
// '#7f1d1d'
```

#### Defined in

[palettes/index.ts:864](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/palettes/index.ts#L864)

---

### complimentary()

> **complimentary**\<`Color`, `Options`>(`baseColor`, `options`?): `ColorToken`

Returns the complimentary color of the passed in color token. A complimentary color is 180 degrees away on the hue channel.

The object (if the `obj` parameter is `true`) returns:

- The complimentary color for the passed in color token
- The hue family from which the complimentary color was found.

The function is not guarded against achromatic colors which means no action will be done on a gray color and it will be returned as is. Pure black or white (`'#000000'` and `'#ffffff'` respectively) may return unexpected results.

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **Options** _extends_ `ComplimentaryOptions`

#### Parameters

• **baseColor**: `Color`

The color to retrieve its complimentary equivalent.

• **options?**: `Options`

#### Returns

`ColorToken`

#### Example

```ts
import { complimentary } from 'huetiful-js';

console.log(complimentary('pink', true));
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complimentary('purple'));
// #005700
```

#### Defined in

[utils/index.ts:760](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L760)

---

### contrast()

> **contrast**(`a`, `b`): `number`

Gets the contrast between the passed in colors.

Swapping color `a` and `b` in the parameter list doesn't change the resulting value.

#### Parameters

• **a**: `any`

First color to query.

• **b**: `any`

The color to compare against.

#### Returns

`number`

#### Example

```ts
import { contrast } from 'huetiful-js';

console.log(contrast('black', 'white'));
// 21
```

#### Defined in

[accessibility/index.ts:33](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/accessibility/index.ts#L33)

---

### deficiency()

> **deficiency**(`color`, `options`): `Error`

Simulates how a color may be perceived by people with color vision deficiency.

To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:

- 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
- 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
- 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.

#### Parameters

• **color**: `any`

The color to return its simulated variant

• **options**: `any`

#### Returns

`Error`

#### Example

```ts
import { deficiency } from 'huetiful-js';

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.5

console.log(
	deficiency(['rgb', 230, 100, 50, 0.5], { kind: 'blue', severity: 0.5 })
);
// '#dd663680'
```

#### Defined in

[accessibility/index.ts:141](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/accessibility/index.ts#L141)

---

### discover()

> **discover**(`colors`, `options`): `Collection`

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.

The function returns different values based on the `kind` parameter passed in:

- An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
- Else it returns an object of all the palette types as keys and their values as an array of colors.

If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.

#### Parameters

• **colors**: `Collection` = `[]`

The collection of colors to create palettes from. Preferably use 6 or more colors for better results.

• **options**: `DiscoverOptions`

#### Returns

`Collection`

#### Example

```ts
import { discover } from 'huetiful-js';

let sample = [
	'#ffff00',
	'#00ffdc',
	'#00ff78',
	'#00c000',
	'#007e00',
	'#164100',
	'#720000',
	'#600000',
	'#4e0000',
	'#3e0000',
	'#310000'
];

console.log(discover(sample, { kind: 'tetradic' }));
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

#### Defined in

[generators/index.ts:388](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L388)

---

### distribute()

> **distribute**\<`Iterable`, `Options`>(`collection`, `options`?): `Collection`

Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.

#### Type Parameters

• **Iterable** _extends_ `Collection`

• **Options** _extends_ `DistributionOptions`

#### Parameters

• **collection**: `Iterable`

• **options?**: `Options`

#### Returns

`Collection`

#### Defined in

[collection/index.ts:265](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/collection/index.ts#L265)

---

### diverging()

> **diverging**(`scheme`): `any`

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters

• **scheme**: `any`

The name of the scheme.

#### Returns

`any`

The collection of colors from the specified `scheme`.

#### Example

```ts
import { diverging } from 'huetiful-js'

console.log(diverging("Spectral"))
//[
 '#7fc97f', '#beaed4',
 '#fdc086', '#ffff99',
 '#386cb0', '#f0027f',
 '#bf5b17', '#666666'
]
```

#### Defined in

[palettes/index.ts:558](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/palettes/index.ts#L558)

---

### earthtone()

> **earthtone**(`baseColor`, `options`): `ColorToken` | `ColorToken`\[]

Creates a color scale between an earth tone and any color token using spline interpolation.

#### Parameters

• **baseColor**: `ColorToken`

The color to interpolate an earth tone with.

• **options**: `EarthtoneOptions`

Optional overrides for customising interpolation and easing functions.

#### Returns

`ColorToken` | `ColorToken`\[]

#### Example

```ts
import { earthtone } from 'huetiful-js';

console.log(earthtone('pink', 'lch', { earthtones: 'clay', samples: 5 }));
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[generators/index.ts:462](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L462)

---

### family()

> **family**\<`Color`, `HueFamily`>(`color`): `HueFamily`

Gets the hue family which a color belongs to with the overtone included (if it has one.).

For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **HueFamily** _extends_ `never`

#### Parameters

• **color**: `Color`

The color to query its shade or hue family.

#### Returns

`HueFamily`

#### Example

```ts
import { family } from 'huetiful-js';

console.log(family('#310000'));
// 'red'
```

#### Defined in

[utils/index.ts:640](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L640)

---

### filterBy()

> **filterBy**\<`Iterable`, `Options`>(`collection`, `options`): `Collection`

Filters a collection of colors using the specified `factor` as the criterion. The supported options are:

- `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

- `'lightness'` - Returns colors in the specified lightness range.

- `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

- `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.

- `luminance` - Returns colors in the specified luminance range.

- `'hue'` - Returns colors in the specified hue ranges between 0 to 360.

For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.
But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.

#### Type Parameters

• **Iterable** _extends_ `Collection`

• **Options** _extends_ `FilterByOptions`

#### Parameters

• **collection**: `Iterable`

The collection of colors to filter.

• **options**: `Options`

#### Returns

`Collection`

#### See

[https://culorijs.org/color-spaces/](https://culorijs.org/color-spaces/) For the expected ranges per colorspace.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Example

```ts
import { filterBy } from 'huetiful-js';

let sample = [
	'#00ffdc',
	'#00ff78',
	'#00c000',
	'#007e00',
	'#164100',
	'#ffff00',
	'#310000',
	'#3e0000',
	'#4e0000',
	'#600000',
	'#720000'
];
```

#### Defined in

[collection/index.ts:361](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/collection/index.ts#L361)

---

### hueshift()

> **hueshift**(`baseColor`, `options`): `Collection`

Creates a palette of hue shifted colors from the passed in color.

Hue shifting means that:

- As a color becomes lighter, its hue shifts up (increases).
- As a color becomes darker its hue shifts down (decreases).

The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.

The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.

#### Parameters

• **baseColor**: `any`

The color to use as the base of the palette.

• **options**: `HueshiftOptions`

The optional overrides object.

#### Returns

`Collection`

#### Example

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

#### Defined in

[generators/index.ts:81](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L81)

---

### interpolator()

> **interpolator**(`baseColors`, `options`): `ColorToken`\[]

Interpolates the passed in colors and returns a color scale that is evenly split into `num` amount of samples.

The interpolation behaviour can be overidden allowing us to get slightly different effects from the same `baseColors`.

The behaviour of the interpolation can be customized by:

- Changing the `kind` of interpolation

  - natural
  - basis
  - monotone

- Changing the easing function (`easingFn`)

  -

Some things to keep in mind when creating color scales using this function:

- To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
- If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
- If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.

#### Parameters

• **baseColors**: `Collection` = `[]`

The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.

• **options**: `InterpolatorOptions` = `undefined`

Optional overrides.

#### Returns

`ColorToken`\[]

#### Example

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

#### Defined in

[generators/index.ts:288](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L288)

---

### lightness()

> **lightness**(`color`, `amount`, `darken`): `ColorToken`

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

• **color**: `any`

The color to darken.

• **amount**: `any`

The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`.

• **darken**: `boolean` = `false`

#### Returns

`ColorToken`

#### Example

```ts
import { lightness } from 'huetiful-js';

// darkening a color
console.log(lightness('blue', 0.3, true));

// '#464646'

// brightening a color, we can omit the final param
// because it's false by default.
console.log(brighten('blue', 0.3));
//#464646
```

#### Defined in

[utils/index.ts:286](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L286)

---

### luminance()

> **luminance**\<`Color`, `Amount`>(`color`, `amount`?): `Amount` _extends_ `number` ? `ColorToken` : `number`

Gets the luminance of the passed in color token.

If the `amount` parameter is not passed in else it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **Amount**

#### Parameters

• **color**: `Color`

The color to retrieve or adjust luminance.

• **amount?**: `number`

The amount of luminance to set. The value range is normalised between \[0,1]

#### Returns

`Amount` _extends_ `number` ? `ColorToken` : `number`

#### Example

```ts
import { luminance } from 'huetiful-js'

// Getting the luminance

console.log(luminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map((c) => luminance(c)));

// [
  0.3595097699638928,  0.3635745068550118,
  0.3596908494424909,  0.3662525955988395,
 0.36634113914916244, 0.32958967582076004,
 0.41393242740130043,  0.5789820793721787,
  0.6356386777636567,  0.6463720036841869,
  0.5525691083297639,  0.4961850321908156,
  0.5140644334784611,  0.4401325598899415,
 0.36299191043315415,  0.3358285501372504,
 0.34737270839643575, 0.37670102542883394,
  0.3464512307705231, 0.34012939384198054
]

// setting the luminance

let myColor = luminance('#a1bd2f', 0.5)

console.log(luminance(myColor))
// 0.4999999136285792
```

#### Defined in

[utils/index.ts:572](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L572)

---

### mc()

> **mc**\<`Color`, `Value`>(`modeChannel`): (`color`, `value`?) => `Value` _extends_ `string` | `number` ? `ColorToken` : `number`

Sets the value of the specified channel on the passed in color.

If the `amount` parameter is `undefined` it gets the value of the specified channel.

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **Value**

#### Parameters

• **modeChannel**: `string`

The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color.

#### Returns

`Function`

##### Parameters

• **color**: `Color`

• **value?**: `string` | `number`

##### Returns

`Value` _extends_ `string` | `number` ? `ColorToken` : `number`

#### Example

```ts
import { mc } from 'huetiful-js';

console.log(mc('rgb.g')('#a1bd2f'));
// 0.7411764705882353
```

#### Defined in

[utils/index.ts:159](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L159)

---

### nearest()

> **nearest**(`collection`, `options`): `unknown`

Returns the nearest color(s) in a collection as compared `against` the passed in color using the `differenceHyab` metric function.

- To get the nearest color from the Tailwind CSS default palette pass in the string `tailwind` as the `collection` parameter.
- If the `num` parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first

#### Parameters

• **collection**: `any`

The collection of colors to search for nearest colors.

• **options**: `any`

#### Returns

`unknown`

#### Example

```ts
let cols = colors('all', '500');

console.log(nearest(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[palettes/index.ts:812](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/palettes/index.ts#L812)

---

### overtone()

> **overtone**\<`Color`, `Bias`>(`color`): `Bias` | `false`

Returns the name of the hue family which is biasing the passed in color using the `'lch'` colorspace.

- If an achromatic color is passed in it returns the string `'gray'`
- If the color has no bias it returns `false`.

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **Bias** _extends_ `ColorFamily`

#### Parameters

• **color**: `Color`

The color to query its overtone.

#### Returns

`Bias` | `false`

#### Example

```ts
import { overtone } from 'huetiful-js';

console.log(overtone('fefefe'));
// 'gray'

console.log(overtone('cyan'));
// 'green'

console.log(overtone('blue'));
// false
```

#### Defined in

[utils/index.ts:723](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L723)

---

### pair()

> **pair**\<`Color`, `Options`>(`baseColor`, `options`?): `Collection`

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **Options** _extends_ `PairedSchemeOptions`

#### Parameters

• **baseColor**: `Color`

The color to return a paired color scheme from.

• **options?**: `Options`

The optional overrides object to customize per channel options like interpolation methods and channel fixups.

#### Returns

`Collection`

#### Example

```ts
import { pair } from 'huetiful-js';

console.log(pair('green', { hueStep: 6, num: 4, tone: 'dark' }));
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[generators/index.ts:211](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L211)

---

### pastel()

> **pastel**(`baseColor`, `options`): `ColorToken`

Returns a random pastel variant of the passed in color token.

#### Parameters

• **baseColor**: `ColorToken`

The color to return a pastel variant of.

• **options**: `TokenOptions` = `undefined`

#### Returns

`ColorToken`

A random pastel color.

#### Example

```ts
import { pastel } from 'huetiful-js';

console.log(pastel('green'));

// #036103ff
```

#### Defined in

[generators/index.ts:154](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L154)

---

### qualitative()

> **qualitative**(`scheme`): `any`

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters

• **scheme**: `any`

The name of the scheme

#### Returns

`any`

The collection of colors from the specified `scheme`.

#### Example

```ts
import { qualitative } from 'huetiful-js'

console.log(qualitative("Accent"))
// [
 '#7fc97f', '#beaed4',
 '#fdc086', '#ffff99',
 '#386cb0', '#f0027f',
 '#bf5b17', '#666666'
]
```

#### Defined in

[palettes/index.ts:700](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/palettes/index.ts#L700)

---

### scheme()

> **scheme**(`baseColor`, `options`): `Collection`

Generates a randomised classic color scheme from the passed in color.

The classic palette types are:

- `triadic` - Picks 3 colors 120 degrees apart.
- `tetradic` - Picks 4 colors 90 degrees apart.
- `complimentary` - Picks 2 colors 180 degrees apart.
- `monochromatic` - Picks `num` amount of colors from the same hue family .
- `analogous` - Picks 3 colors 12 degrees apart.

The `kind` parameter can either be a string or an array:

- If it is an array, each element should be a `kind` of palette.
  It will return a color map with the array elements as keys.
  Duplicate values are simply ignored.
- If it is a string it will return an array of colors of the specified `kind` of palette.
- If it is falsy it will return a color map of all palettes.

Note that the `num` parameter works on the `monochromatic` palette type only.

#### Parameters

• **baseColor**: `ColorToken` = `...`

The color to create the palette(s) from.

• **options**: `SchemeOptions` = `{}`

Optional overrides.

#### Returns

`Collection`

#### Example

```ts
import { scheme } from 'huetiful-js';

console.log(scheme('triadic')('#a1bd2f'));
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[generators/index.ts:528](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/generators/index.ts#L528)

---

### sequential()

> **sequential**(`scheme`): `any`

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters

• **scheme**: `any`

The name of the scheme.

#### Returns

`any`

A collection of colors in the specified colorspace. The default is hex if `colorspace` is `undefined.`

#### Example

```ts
import { sequential } from 'huetiful-js

console.log(sequential("OrRd"))

// [
 '#fff7ec', '#fee8c8',
 '#fdd49e', '#fdbb84',
 '#fc8d59', '#ef6548',
 '#d7301f', '#b30000',
 '#7f0000'
]
```

#### Defined in

[palettes/index.ts:324](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/palettes/index.ts#L324)

---

### sortBy()

> **sortBy**\<`Iterable`, `Options`>(`collection`, `options`?): `Collection`

Sorts colors according to the specified `factor`. The supported options are:

- `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
  The contrast is tested `against` a comparison color which can be specified in the `options` object.
- `'lightness'` - Sorts colors according to their lightness.
- `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
- `'distance'` - Sorts colors according to their distance.
  The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
- `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.

The return type is determined by the type of `collection`:

- Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
- `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.

#### Type Parameters

• **Iterable** _extends_ `Collection`

• **Options** _extends_ `SortByOptions`

#### Parameters

• **collection**: `Iterable`

The `collection` of colors to sort.

• **options?**: `Options`

#### Returns

`Collection`

#### Example

```ts
import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortBy(sample,{ against:'yellow' kind:'distance',order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
```

#### Defined in

[collection/index.ts:209](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/collection/index.ts#L209)

---

### stats()

> **stats**\<`Iterable`, `Options`>(`collection`, `options`): \{}

Computes statistical values about the passed in color collection.

The properties from each returned `factor` object are:

- `against` - The color being used for comparison.

Required for the `distance` and `contrast` factors.
If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.

- `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).

- `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.

- `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.

- `mean` - The average value for the `factor`.

The `mean` property can be overloaded by the `relativeMean` option:

- If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
  For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."

These properties are available at the topmost level of the resultant object:

- `achromatic` - The amount of colors which are gray out of the total colors in the collection as a value in the range \[0,1].
- `colorspace` - The colorspace in which the values were computed from, expected to be hue based.
  Defaults to `lch` if an invalid mode like `rgb` is used.

#### Type Parameters

• **Iterable** _extends_ `Collection`

• **Options** _extends_ `StatsOptions`

#### Parameters

• **collection**: `Iterable`

The collection to compute stats from. Any collection with color tokens as values will work.

• **options**: `Options`

#### Returns

\{}

#### Defined in

[collection/index.ts:64](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/collection/index.ts#L64)

---

### temp()

> **temp**\<`Color`>(`color`): `"cool"` | `"warm"`

Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'` using the `'lch'` colorspace.

#### Type Parameters

• **Color** _extends_ `ColorToken`

#### Parameters

• **color**: `Color`

The color to check the temperature.
True if the color is cool else false.

#### Returns

`"cool"` | `"warm"`

#### Example

```ts
import { isCool } from 'huetiful-js';

let sample = ['#00ffdc', '#00ff78', '#00c000'];

console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]
```

#### Defined in

[utils/index.ts:687](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L687)

---

### token()

> **token**\<`Color`, `Options`>(`color`, `options`?): `ColorToken`

Parses any recognizable color to the specified `kind` of `ColorToken` type.

The `kind` option supports the following types as options:

- `'arr'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.

- `'num'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.

The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:

- `'hex'` - Hexadecimal number
- `'bin'` - Binary number
- `'oct'` - Octal number
- `'expo'` - Decimal exponential notation

* `'str'` - Parses the color token to its hexadecimal string equivalent.

If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

- `'obj'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.
- `'temp'` - Parses the color token to its RGB equivalent and expects the value to be between 0 and 30,000

#### Type Parameters

• **Color** _extends_ `ColorToken`

• **Options** _extends_ `TokenOptions`

#### Parameters

• **color**: `Color`

The color token to parse or convert.

• **options?**: `Options`

Options to customize the parsing and output behaviour.

#### Returns

`ColorToken`

#### Defined in

[utils/index.ts:330](https://github.com/prjctimg/huetiful/blob/90f1e45a5c2d0fd159db83c3ad3adaabea19bee1/src/utils/index.ts#L330)
