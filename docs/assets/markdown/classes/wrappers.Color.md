# Class: Color

[wrappers](../modules/wrappers.md).Color

Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.

**`Example`**

```ts
import { Color } from 'huetiful-js'

let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
```

## Table of contents

### Constructors

- [constructor](wrappers.Color.md#constructor)

### Methods

- [alpha](wrappers.Color.md#alpha)
- [color2hex](wrappers.Color.md#color2hex)
- [contrast](wrappers.Color.md#contrast)
- [deficiency](wrappers.Color.md#deficiency)
- [earthtone](wrappers.Color.md#earthtone)
- [getChannel](wrappers.Color.md#getchannel)
- [getComplimentaryHue](wrappers.Color.md#getcomplimentaryhue)
- [getHueFamily](wrappers.Color.md#gethuefamily)
- [hueShift](wrappers.Color.md#hueshift)
- [isAchromatic](wrappers.Color.md#isachromatic)
- [isCool](wrappers.Color.md#iscool)
- [isWarm](wrappers.Color.md#iswarm)
- [luminance](wrappers.Color.md#luminance)
- [output](wrappers.Color.md#output)
- [overtone](wrappers.Color.md#overtone)
- [pairedScheme](wrappers.Color.md#pairedscheme)
- [pastel](wrappers.Color.md#pastel)
- [saturation](wrappers.Color.md#saturation)
- [scheme](wrappers.Color.md#scheme)
- [setChannel](wrappers.Color.md#setchannel)
- [via](wrappers.Color.md#via)

## Constructors

### constructor

• **new Color**(`c`, `options?`): [`Color`](wrappers.Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`ColorToken`](../modules/types.md#colortoken) |
| `options?` | [`ColorOptions`](../modules/types.md#coloroptions) |

#### Returns

[`Color`](wrappers.Color.md)

#### Defined in

[wrappers.d.ts:1042](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1042)

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| [`Color`](wrappers.Color.md)

Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`number` \| [`Color`](wrappers.Color.md)

color The resulting color. Preserves the bound `ColorToken` type.

**`Example`**

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

#### Defined in

[wrappers.d.ts:1064](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1064)

___

### color2hex

▸ **color2hex**(): `string`

Returns the bound `ColorToken` as a hexadecimal string.

#### Returns

`string`

#### Defined in

[wrappers.d.ts:1109](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1109)

___

### contrast

▸ **contrast**(`against`): `number`

Gets the contrast value between the bound and  comparison ( or `against`) color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to use for comparison. |

#### Returns

`number`

The contrast value between the two colors.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('pink').contrast('yellow'))
// 1.4322318222624262
```

#### Defined in

[wrappers.d.ts:1221](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1221)

___

### deficiency

▸ **deficiency**(`deficiencyType?`, `severity?`): [`ColorToken`](../modules/types.md#colortoken)

Returns the bound color as a simulation of the specified type of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"`` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' can't perceive `'blue'` light properly. Default is `'red'` when the defeciency parameter is `undefined`. |
| `severity?` | `number` | The intensity of the filter in the range [0,1]. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

The color as its simulated variant. Preserves the bound `ColorToken` type.

**`Example`**

```ts
import { color } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = color(['rgb', 230, 100, 50, 0.5]).colorDeficiency('blue', 0.1)
console.log(tritanomaly)
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = color({ h: 20, w: 50, b: 30, mode: 'hwb' }).colorDeficiency('red')
console.log(protanopia)
// #9f9f9f
```

#### Defined in

[wrappers.d.ts:1405](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1405)

___

### earthtone

▸ **earthtone**(`options?`): [`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

Returns a spline interpolation between an `earthtone` and the bound color. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`EarthtoneOptions`](../modules/types.md#earthtoneoptions) | Optional overrides for customizing interpolation and easing functions. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

The collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the bound color.

**`Example`**

```ts
import { color } from 'huetiful-js'

let base = 'purple'

console.log(color(base).earthtone({iterations:8}))

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

#### Defined in

[wrappers.d.ts:1207](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1207)

___

### getChannel

▸ **getChannel**(`modeChannel`): `number`

Returns the specified channel value on the bound color token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeChannel` | `string` |

#### Returns

`number`

value The value of the queried channel.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('#a1bd2f').getChannel('rgb.g'))
// 0.7411764705882353
```

#### Defined in

[wrappers.d.ts:1079](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1079)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`colorObj?`): [`Color`](wrappers.Color.md) \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily) \| ``"gray"``  }

Returns the complementary hue of the bound color. The function may behave unexpectedly when you pass in an achromatic color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorObj?` | `boolean` | Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`. |

#### Returns

[`Color`](wrappers.Color.md) \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily) \| ``"gray"``  }

A custom object if `colorObj` is `true` else the complimentary color. Preserves the bound `Colortoken` type.

**`Example`**

```ts
import { color } from "huetiful-js";

console.log(color("pink").getComplimentaryHue(true))
// { hue: 'blue-green', color: '#97dfd7ff' }
```

#### Defined in

[wrappers.d.ts:1169](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1169)

___

### getHueFamily

▸ **getHueFamily**(): `string`

Returns the hue family of the bound color with the overtone included (if it has one). For achromatic colors it returns `"gray"`.

#### Returns

`string`

The name of the hue family for example `red` or `blue-green`.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("#310000").getHueFamily())
// red
```

#### Defined in

[wrappers.d.ts:1439](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1439)

___

### hueShift

▸ **hueShift**(`options?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single color. `maxLightness` and `minLightness` values determine how light or dark our colour will be at either extreme. Call `output()` to get the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`HueShiftOptions`](../modules/types.md#hueshiftoptions) | The optional overrides object to customize the `HueShiftOptions` like easing function. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

An array of colors. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the passed in `ColorToken` type.

**`Example`**

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

#### Defined in

[wrappers.d.ts:1155](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1155)

___

### isAchromatic

▸ **isAchromatic**(): `boolean`

Returns `true` if the bound color has hue or is grayscale else `false`.

#### Returns

`boolean`

True if the color is achromatic else false.

**`Example`**

```ts
import { color } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"

var test = c => color(c).isAchromatic()

test('pink')
// false

let sample = [
 "#164100",
 "#ffff00",
 "#310000",
 'pink'
];

console.log(sample.map(test));

// [false, false, false,false]

test('gray')

// true

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(test));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

[wrappers.d.ts:1339](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1339)

___

### isCool

▸ **isCool**(): `boolean`

Returns `true` if color the bound color can be roughly classified as a cool color else `false`.

#### Returns

`boolean`

**`Example`**

```ts
import { color } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(color(sample[2]).isCool());
// false
```

#### Defined in

[wrappers.d.ts:1383](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1383)

___

### isWarm

▸ **isWarm**(): `boolean`

Returns `true` if color the bound color can be roughly classified as a warm color else `false`.

#### Returns

`boolean`

**`Example`**

```ts
import { color } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(color(sample[2]).isWarm());
//true
```

#### Defined in

[wrappers.d.ts:1360](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1360)

___

### luminance

▸ **luminance**(`amount?`): `number` \| [`Color`](wrappers.Color.md)

Sets/Gets the `luminance` value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `string` \| `number` | The `luminance` value to set on the bound color. |

#### Returns

`number` \| [`Color`](wrappers.Color.md)

The `luminance` value if the method is called with no arguments else it returns a color with its `luminance `value mutated.

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = 'green';
console.log(color(myColor).luminance());
// 0.1543834296814607

console.log(color(myColor)._luminance);
// 0.1543834296814607

console.log(color(myColor).luminance(0.5));

// It returns
Color {
alpha: 1,
_color: '#008000',
_luminance: 0.5,
lightness: 46.27770902748027,
colorspace: 'lch',
_saturation: undefined,
lightMode: '#f3f4f6',
darkMode: '#1f2937'
}
```

#### Defined in

[wrappers.d.ts:1253](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1253)

___

### output

▸ **output**(): `any`

Returns the final value from the chain.

#### Returns

`any`

**`Example`**

```ts
import { color } from 'huetiful-js'

let myOutput = color(['rgb',200,34,65]).output()

console.log(myOutput)
// ['rgb',200,34,65]
```

#### Defined in

[wrappers.d.ts:1267](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1267)

___

### overtone

▸ **overtone**(): `string` \| `boolean`

Returns the hue which is biasing the passed in color.

#### Returns

`string` \| `boolean`

The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.

**`Example`**

```ts
console.log(color("fefefe").overtone())
// 'gray'

console.log(color("cyan").overtone())
// 'green'

console.log(color("blue").overtone())
// false
```

#### Defined in

[wrappers.d.ts:1425](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1425)

___

### pairedScheme

▸ **pairedScheme**(`options?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a palette that contains a base color that is incremented by a `hueStep` to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `n` degrees behind the base color. Call `output()` to get the final result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PairedSchemeOptions`](../modules/types.md#pairedschemeoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

An array containing the paired scheme.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[wrappers.d.ts:1134](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1134)

___

### pastel

▸ **pastel**(): [`Color`](wrappers.Color.md)

Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.

#### Returns

[`Color`](wrappers.Color.md)

**`Example`**

```ts
import { color } from 'huetiful-js';

console.log(color("green").pastel())

// #036103ff
```

#### Defined in

[wrappers.d.ts:1122](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1122)

___

### saturation

▸ **saturation**(`amount?`): `any`

Sets/Gets the saturation value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `string` \| `number` | The amount of `saturation` to set on the bound color token. See also the supported string expressions in the docs. |

#### Returns

`any`

The `saturation` value if the method is called with no arguments else it returns a color with its `saturation` value mutated.

**`See`**

https://huetiful-js.com/basics/string-expressions

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = ['hsl',200,0.09,0.5]

console.log(color(myColor).saturation())
// 0.3

console.log(color(myColor).saturation("*0.3"))

// ['hsl',200,0.09,0.5]
```

#### Defined in

[wrappers.d.ts:1289](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1289)

___

### scheme

▸ **scheme**(`schemeType`, `easingFunc?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a randomised classic color scheme from the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | Any classic color scheme either `"analogous"\|"triadic"\|"tetradic"\|"complementary"\|"splitComplementary"`. |
| `easingFunc?` | (`t`: `number`) => `number` | The easing function to apply to the palette. It's applied on the `hue` channel. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of colors. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the type of the bound `ColorToken` as elements of the collection.

**`Example`**

```ts
import { color  } from 'huetiful-js'

console.log(color("#a1bd2f").scheme("triadic"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[wrappers.d.ts:1454](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1454)

___

### setChannel

▸ **setChannel**(`modeChannel`, `value`): [`Color`](wrappers.Color.md)

Sets the specified channel value on the bound color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modeChannel` | `string` | - |
| `value` | `string` \| `number` | The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"` |

#### Returns

[`Color`](wrappers.Color.md)

The mutated color. Preserves the bound in `ColorToken` type.

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = color('green').setChannel('lch.h',10)

console.log(myColor.getChannel('lch.h'))
// 10
```

#### Defined in

[wrappers.d.ts:1097](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1097)

___

### via

▸ **via**(`origin`, `t?`, `options?`): `string`

Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`ColorToken`](../modules/types.md#colortoken) | The color to interpolate via. |
| `t?` | `number` | The point in the interpolation to return. Expected value is in the range [0,1] |
| `options?` | [`InterpolatorOptions`](../modules/types.md#interpolatoroptions) | Overrides object to customize the easing and the interpolation methods /fixups. |

#### Returns

`string`

The result of the interpolation. Preserves the bound `ColorToken` type.

#### Defined in

[wrappers.d.ts:1105](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1105)
