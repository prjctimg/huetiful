[@prjctimg/huetiful](huetiful.gitbook.io/README.md) / wrappers

## Color

Defined in: [wrappers/index.ts:300](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L300)

Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.

### Example

```ts
import { Color } from "huetiful-js";

let wrapper = new Color("pink");

console.log(wrapper.color2hex());
// #ffc0cb
```

### Constructors

#### Constructor

> **new Color**(`c`, `options?`): [`Color`](huetiful.gitbook.io/wrappers.md#color)

Defined in: [wrappers/index.ts:305](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L305)

##### Parameters

###### c

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken) = `"cyan"`

The color to bind.

###### options?

[`ColorOptions`](huetiful.gitbook.io/types.md#coloroptions)

Optional overrides and properties for the bound color.

##### Returns

[`Color`](huetiful.gitbook.io/wrappers.md#color)

### Methods

#### achromatic()

> **achromatic**(): `boolean`

Defined in: [wrappers/index.ts:722](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L722)

Returns `true` if the bound color has hue or is grayscale elsColorspaces} [colorspace='lch'] The colorspace to use when checking if the `color` is grayscale or not.

##### Returns

`boolean`

##### Example

```ts
import { color } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori";

var test = (c) => color(c).isAchromatic();

test("pink");
// false

let sample = ["#164100", "#ffff00", "#310000", "pink"];

console.log(sample.map(test));

// [false, false, false,false]

test("gray");

// true

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(test));

//
[false, true, true, true, true, true, true, true, true, true, true, false];
```

#### alpha()

> **alpha**(`amount?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:383](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L383)

Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.

##### Parameters

###### amount?

The value to apply to the opacity channel. The value is normalized to the range [0,1]

`string` | `number`

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from 'huetiful-js';

// Getting the alpha
console.log(color('#a1bd2f0d').alpha())
// 0.050980392156862744

// Setting the alpha
let myColor = color('b2c3f1')alpha(0.5)

console.log(myColor)

// #b2c3f180
```

#### contrast()

> **contrast**(`against?`): `number`

Defined in: [wrappers/index.ts:607](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L607)

Gets the contrast value between the bound and comparison ( or `against`) color.

##### Parameters

###### against?

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to use for comparison. The default is `'black'`.

##### Returns

`number`

##### Example

```ts
import { color } from "huetiful-js";

console.log(color("pink").contrast("yellow"));
// 1.4322318222624262
```

#### deficiency()

> **deficiency**(`options?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:777](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L777)

Simulates how a color may be perceived by people with color vision deficiency.

To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:

- 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
- 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
- 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.

##### Parameters

###### options?

[`DeficiencyOptions`](huetiful.gitbook.io/types.md#deficiencyoptions)

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = color(["rgb", 230, 100, 50, 0.5]).colorDeficiency(
  "blue",
  0.1,
);
console.log(tritanomaly);
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = color({ h: 20, w: 50, b: 30, mode: "hwb" }).colorDeficiency(
  "red",
);
console.log(protanopia);
// #9f9f9f
```

#### earthtone()

> **earthtone**(`options?`): `string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\>

Defined in: [wrappers/index.ts:592](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L592)

Creates a color scale between an earth tone and any color token using spline interpolation.

##### Parameters

###### options?

[`EarthtoneOptions`](huetiful.gitbook.io/types.md#earthtoneoptions)

##### Returns

`string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\>

##### Example

```ts
import { color } from 'huetiful-js'

let base = 'purple'

console.log(color(base).earthtone({num:8}))

ColorArray {
colors: [
 '#352a21', '#3e2825',
 '#4c2624', '#5f2028',
 '#741033', '#860040',
 '#940049', '#99004b'
]
}

console.log(color(base).earthtone({ iterations:8 }).output())
// call output() to only get results array

// [
 '#352a21', '#3e2825',
 '#4c2624', '#5f2028',
 '#741033', '#860040',
 '#940049', '#99004b'
]
```

#### family()

> **family**(): \{ `bias`: `false` \| [`ColorFamily`](huetiful.gitbook.io/types.md#colorfamily); `hue`: `never`; \}

Defined in: [wrappers/index.ts:551](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L551)

Gets the hue family which a color belongs to with the overtone included (if it has one.).

For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.

##### Returns

\{ `bias`: `false` \| [`ColorFamily`](huetiful.gitbook.io/types.md#colorfamily); `hue`: `never`; \}

###### bias

> **bias**: `false` \| [`ColorFamily`](huetiful.gitbook.io/types.md#colorfamily)

###### hue

> **hue**: `never`

##### Example

```ts
import { color } from "huetiful-js";

console.log(color("#310000").family());
// 'red'
```

#### hueshift()

> **hueshift**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [wrappers/index.ts:535](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L535)

- Creates a palette of hue shifted colors from the passed in color.

Hue shifting means that:

- As a color becomes lighter, its hue shifts up (increases).
- As a color becomes darker its hue shifts down (decreases).

The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.

The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.

##### Parameters

###### options?

[`HueshiftOptions`](huetiful.gitbook.io/types.md#hueshiftoptions)

The optional overrides object to customize the `HueShiftOptions` like easing function.

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

##### Example

```ts
import { color } from "huetiful-js";

 let hueShiftedPalette = color("#3e0000").hueShift({ iterations:1 });

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

#### lightness()

> **lightness**(`amount?`, `darken?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:439](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L439)

Darkens the bound color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

##### Parameters

###### amount?

`number`

The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`.

###### darken?

`any` = `undefined`

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";
console.log(color("blue").darken(0.3));
//#464646
```

#### luminance()

> **luminance**(`amount?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:644](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L644)

Gets the luminance of the passed in color token.

If the `amount` parameter is not passed in else it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.

##### Parameters

###### amount?

`number`

The `luminance` value to set on the bound color.

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";

let myColor = "green";
console.log(color(myColor).luminance());
// 0.1543834296814607

console.log(color(myColor)._luminance);
// 0.1543834296814607

console.log(color(myColor).luminance(0.5));
```

#### mc()

> **mc**(`modeChannel`, `value?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:404](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L404)

Sets the value of the specified channel on the passed in color.

If the `amount` parameter is `undefined` it gets the value of the specified channel.

-

##### Parameters

###### modeChannel

`string`

The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color.

-

###### value?

The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`

-
- The supported symbols `*` `+` `-` `/`

`string` | `number`

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";

console.log(color("#a1bd2f").mc("rgb.g"));
// 0.7411764705882353
```

#### output()

> **output**(): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:808](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L808)

Returns the final value from the chain.

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";

let myOutput = color(["rgb", 200, 34, 65]).output();

console.log(myOutput);
// ['rgb',200,34,65]
```

#### pair()

> **pair**(`options?`): `string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\>

Defined in: [wrappers/index.ts:501](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L501)

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

##### Parameters

###### options?

[`PairedSchemeOptions`](huetiful.gitbook.io/types.md#pairedschemeoptions)

The optional overrides object to customize per channel options like interpolation methods and channel fixups.

##### Returns

`string` \| `number` \| `boolean` \| `object` \| [`ColorTuple`](huetiful.gitbook.io/types.md#colortuple) \| [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)[] \| `Map`\<`string` \| `number`, [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\> \| `Set`\<[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)\>

##### Example

```ts
import { color } from "huetiful-js";

console.log(
  color("green").pairedScheme({ hueStep: 6, samples: 4, tone: "dark" }),
);
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### pastel()

> **pastel**(): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:483](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L483)

Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";

console.log(color("green").pastel());

// #036103ff
```

#### saturation()

> **saturation**(`amount?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:667](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L667)

Sets/Gets the saturation value of the bound color.

##### Parameters

###### amount?

`number`

The amount of `saturation` to set on the bound color token. Also supports string expressions.

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

##### Example

```ts
import { color } from "huetiful-js";

let myColor = ["lch", 60, 13, 0.5];

console.log(color(myColor).saturation());
// 13

console.log(color(myColor).saturation("*0.3"));

// ['lch',60,19.9,0.5]
```

#### scheme()

> **scheme**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [wrappers/index.ts:791](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L791)

Returns a randomised classic color scheme from the bound color.

##### Parameters

###### options?

[`SchemeOptions`](huetiful.gitbook.io/types.md#schemeoptions)

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

##### Example

```ts
import { color } from "huetiful-js";

console.log(color("#a1bd2f").scheme("triadic"));
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### temp()

> **temp**(): `"warm"` \| `"cool"`

Defined in: [wrappers/index.ts:745](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L745)

Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'`.

##### Returns

`"warm"` \| `"cool"`

##### Example

```ts
import { color } from "huetiful-js";

let sample = ["#00ffdc", "#00ff78", "#00c000"];

console.log(color(sample[2]).temp());
// 'warm'
```

#### token()

> **token**(`options?`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:466](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L466)

Parses any recognizable color to the specified `kind` of `ColorToken` type.

The `kind` option supports the following types as options:

- `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.

- `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.

The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:

- `'hexadecimal'`
- `'binary'`
- `'octal'`
- `'decimal'` exponential notation
- `'hex'` - Parses the color token to its hexadecimal string equivalent.

If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

- `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.

##### Parameters

###### options?

[`TokenOptions`](huetiful.gitbook.io/types.md#tokenoptions-1)

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

#### via()

> **via**(`origin`): [`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

Defined in: [wrappers/index.ts:417](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L417)

Interpolates the bound color via the `origin` with the point `t` at `0.5`.

##### Parameters

###### origin

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

The color to interpolate via.
value is in the range [0,1]
the easing and the interpolation methods /fixups.

##### Returns

[`ColorToken`](huetiful.gitbook.io/types.md#colortoken)

---

## ColorArray\<C, Options\>

Defined in: [wrappers/index.ts:62](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L62)

Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).

:::tip

The `ColorArray` class is also exposed via a wrapper function `load()`,
if you prefer not to explicitly instantiate a `new ColorArray`.

:::

### Example

```ts
import { ColorArray } from "huetiful-js";
let sample = ["blue", "pink", "yellow", "green"];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling `.output()`
// [ 'blue', 'green', 'yellow', 'pink' ]
```

### Type Parameters

#### C

`C` _extends_ [`Collection`](huetiful.gitbook.io/types.md#collection)

#### Options

`Options` _extends_ `object`

### Constructors

#### Constructor

> **new ColorArray**\<`C`, `Options`\>(`colors`, `implicitReturn?`): [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:69](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L69)

##### Parameters

###### colors

`C`

The collection of colors to bind.

###### implicitReturn?

`boolean`

##### Returns

[`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

### Methods

#### discover()

> **discover**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:157](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L157)

Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.

The function returns different values based on the `kind` parameter passed in:

- An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
- Else it returns an object of all the palette types as keys and their values as an array of colors.

If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.

##### Parameters

###### options?

[`DiscoverOptions`](huetiful.gitbook.io/types.md#discoveroptions)

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

##### Example

```ts
import { load } from "huetiful-js";

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

console.log(load(sample).discover({ kind: "tetradic" }).output());
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

#### filterBy()

> **filterBy**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:207](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L207)

Filters a collection of colors using the specified `factor` as the criterion. The supported options are:

- `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
- `'lightness'` - Returns colors in the specified lightness range.
- `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

- `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
- `luminance` - Returns colors in the specified luminance range.
- `'hue'` - Returns colors in the specified hue ranges between 0 to 360.

:::tip

For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.
But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
:::

##### Parameters

###### options?

[`FilterByOptions`](huetiful.gitbook.io/types.md#filterbyoptions)

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

##### See

https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

##### Example

```ts
import { filterBy } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];
// Filtering colors by their relative contrast against 'green'.
// The collection will include colors with a relative contrast equal to 3 or greater.

console.log(
  load(sample).filterBy({ start: ">=3", factor: "contrast", against: "green" }),
);
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### interpolator()

> **interpolator**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:120](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L120)

Interpolates the passed in colors and returns a collection of colors from the interpolation.

:::tip

- To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
- If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
- If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
  :::

##### Parameters

###### options?

[`InterpolatorOptions`](huetiful.gitbook.io/types.md#interpolatoroptions)

Optional channel specific overrides.

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

##### Example

```ts
import { load } from 'huetiful-js';

  *
```

#### nearest()

> **nearest**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:95](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L95)

Returns the nearest color(s) in the bound collection against
the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.

##### Parameters

###### options?

`NearestOptions`

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

##### Example

```ts
import { load, colors } from "huetiful-js";

let cols = colors("all", "500");

console.log(load(cols).nearest("blue", 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### output()

> **output**(): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [wrappers/index.ts:282](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L282)

Returns the result value from the chain.
Can be omitted from invocation when `implicitReturn` is set to true.

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)

#### sortBy()

> **sortBy**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:240](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L240)

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

##### Parameters

###### options?

[`SortByOptions`](huetiful.gitbook.io/types.md#sortbyoptions)

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

##### Example

```ts
import { sortBy } from 'huetiful-js';

let sample = ['purple', 'green', 'red', 'brown']

console.log(
 load(sample).sortBy({ against:'yellow' factor:'distance',order:'desc'})
)

// [ 'brown', 'red', 'green', 'purple' ]
```

#### stats()

> **stats**(`options?`): [`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>

Defined in: [wrappers/index.ts:269](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/wrappers/index.ts#L269)

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

##### Parameters

###### options?

[`StatsOptions`](huetiful.gitbook.io/types.md#statsoptions)

Optional parameters to specify how the data should be computed.

##### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection) \| [`ColorArray`](huetiful.gitbook.io/wrappers.md#colorarray)\<`C`, `Options`\>
