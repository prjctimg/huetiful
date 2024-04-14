[huetiful-js](../README.md) / [wrappers](../modules/wrappers.md) / Color

# Class: Color

[wrappers](../modules/wrappers.md).Color

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
- [brighten](wrappers.Color.md#brighten)
- [color2hex](wrappers.Color.md#color2hex)
- [contrast](wrappers.Color.md#contrast)
- [darken](wrappers.Color.md#darken)
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

• **new Color**(`c?`, `options?`): [`Color`](wrappers.Color.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c?` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to bind. |
| `options?` | `ColorOptions` | Optional overrides and properties for the bound color. |

#### Returns

[`Color`](wrappers.Color.md)

#### Defined in

[src/wrappers.js:1199](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1199)

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| [`Color`](wrappers.Color.md)

Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `string` \| `number` | The value to apply to the opacity channel. The value is normalized to the range [0,1] |

#### Returns

`number` \| [`Color`](wrappers.Color.md)

The resulting color or value of the alpha channel. Preserves the bound `ColorToken` type.

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

[src/wrappers.js:1264](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1264)

___

### brighten

▸ **brighten**(`amount`): [`Color`](wrappers.Color.md)

The inverse of `darken`. Brightens the bound color by increasing the lightness channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`Color`](wrappers.Color.md)

The brightened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { color } from "huetiful-js";

console.log(color('blue').brighten(0.3, 'lch'));
//#464646
```

#### Defined in

[src/wrappers.js:1350](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1350)

___

### color2hex

▸ **color2hex**(): `string`

Returns the bound `ColorToken` as a hexadecimal string.

#### Returns

`string`

#### Defined in

[src/wrappers.js:1380](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1380)

___

### contrast

▸ **contrast**(`against?`): `number`

Gets the contrast value between the bound and  comparison ( or `against`) color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to use for comparison. |

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

[src/wrappers.js:1555](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1555)

___

### darken

▸ **darken**(`amount`): [`Color`](wrappers.Color.md)

Darkens the bound color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`Color`](wrappers.Color.md)

The darkened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { color } from "huetiful-js";
console.log(color('blue'+-).darken(0.3, 'lch'));
//#464646
```

#### Defined in

[src/wrappers.js:1370](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1370)

___

### deficiency

▸ **deficiency**(`deficiencyType`, `severity?`): [`Color`](wrappers.Color.md)

Returns the bound color as a simulation of the specified type of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deficiencyType` | [`DeficiencyType`](../modules/accessibility.md#deficiencytype) | `undefined` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' can't perceive `'blue'` light properly. Default is `'red'` when the defeciency parameter is `undefined`. |
| `severity` | `number` | `1` | The intensity of the filter in the range [0,1]. |

#### Returns

[`Color`](wrappers.Color.md)

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

[src/wrappers.js:1815](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1815)

___

### earthtone

▸ **earthtone**(`options`): [`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

Returns a spline interpolation between an `earthtone` and the bound color. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `EarthtoneOptions` | Optional overrides for customizing interpolation and easing functions. |

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

[src/wrappers.js:1524](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1524)

___

### getChannel

▸ **getChannel**(`mc`): `number`

Returns the specified channel value on the bound color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color. |

#### Returns

`number`

The value of the queried channel.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('#a1bd2f').getChannel('rgb.g'))
// 0.7411764705882353
```

#### Defined in

[src/wrappers.js:1290](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1290)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`colorspace`, `colorObj?`): `FactObject` \| [`Color`](wrappers.Color.md)

Returns the complementary hue of the bound color. The function returns `'gray'` when you pass in an achromatic color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `UniformColorSpaces` | The colorspace to fetch the complimentary color from. Only supports uniform colorspaces. |
| `colorObj?` | `boolean` | Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`. |

#### Returns

`FactObject` \| [`Color`](wrappers.Color.md)

A custom object if `colorObj` is `true` else the complimentary color. Preserves the bound `Colortoken` type.

**`Example`**

```ts
import { color } from "huetiful-js";

console.log(color("pink").getComplimentaryHue(true))
// { hue: 'blue-green', color: '#97dfd7ff' }
```

#### Defined in

[src/wrappers.js:1479](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1479)

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

[src/wrappers.js:1856](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1856)

___

### hueShift

▸ **hueShift**(`options`): [`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

Returns a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single color. `maxLightness` and `minLightness` values determine how light or dark our colour will be at either extreme. Call `output()` to get the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `HueShiftOptions` | The optional overrides object to customize the `HueShiftOptions` like easing function. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

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

[src/wrappers.js:1451](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1451)

___

### isAchromatic

▸ **isAchromatic**(`colorspace?`): `boolean`

Returns `true` if the bound color has hue or is grayscale else `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `HueColorSpaces` | The colorspace to use when checking if the `color` is grayscale or not. |

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

[src/wrappers.js:1731](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1731)

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

[src/wrappers.js:1787](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1787)

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

[src/wrappers.js:1759](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1759)

___

### luminance

▸ **luminance**(`amount`): `number` \| [`Color`](wrappers.Color.md)

Sets/Gets the `luminance` value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | The `luminance` value to set on the bound color. |

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

// Color {
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

[src/wrappers.js:1607](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1607)

___

### output

▸ **output**(): [`ColorToken`](../modules/accessibility.md#colortoken)

Returns the final value from the chain.

#### Returns

[`ColorToken`](../modules/accessibility.md#colortoken)

**`Example`**

```ts
import { color } from 'huetiful-js'

let myOutput = color(['rgb',200,34,65]).output()

console.log(myOutput)
// ['rgb',200,34,65]
```

#### Defined in

[src/wrappers.js:1633](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1633)

___

### overtone

▸ **overtone**(): `string`

Returns the hue which is biasing the passed in color.

#### Returns

`string`

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

[src/wrappers.js:1837](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1837)

___

### pairedScheme

▸ **pairedScheme**(`options`): [`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

Returns a palette that contains a base color that is incremented by a `hueStep` to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `n` degrees behind the base color. Call `output()` to get the final result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md) \| [`Color`](wrappers.Color.md)

An array containing the paired scheme.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[src/wrappers.js:1419](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1419)

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

[src/wrappers.js:1400](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1400)

___

### saturation

▸ **saturation**(`amount`): `number` \| [`Color`](wrappers.Color.md)

Sets/Gets the saturation value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | The amount of `saturation` to set on the bound color token. See also the supported string expressions in the docs. |

#### Returns

`number` \| [`Color`](wrappers.Color.md)

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

[src/wrappers.js:1660](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1660)

___

### scheme

▸ **scheme**(`schemeType`, `easingFunc?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a randomised classic color scheme from the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` \| ``"splitComplementary"`` | Any classic color scheme. |
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

[src/wrappers.js:1876](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1876)

___

### setChannel

▸ **setChannel**(`mc`, `value`): [`Color`](wrappers.Color.md)

Sets the specified channel value on the bound color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example `'rgb.b'`. |
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

[src/wrappers.js:1313](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1313)

___

### via

▸ **via**(`origin`, `t`, `options`): [`Color`](wrappers.Color.md)

Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`ColorToken`](../modules/accessibility.md#colortoken) | The color to interpolate via. |
| `t` | `number` | The point in the interpolation to return. Expected value is in the range [0,1] |
| `options` | `InterpolatorOptions` | Overrides object to customize the easing and the interpolation methods /fixups. |

#### Returns

[`Color`](wrappers.Color.md)

The result of the interpolation. Preserves the bound `ColorToken` type.

#### Defined in

[src/wrappers.js:1328](https://github.com/prjctimg/huetiful/blob/cf8e303/src/wrappers.js#L1328)
