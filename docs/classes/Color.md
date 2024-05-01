[huetiful-js](../README.md) / Color

# Class: Color

**`Example`**

```ts
import { Color } from 'huetiful-js'

let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
```

## Table of contents

### Constructors

- [constructor](Color.md#constructor)

### Methods

- [achromatic](Color.md#achromatic)
- [alpha](Color.md#alpha)
- [brighten](Color.md#brighten)
- [complimentary](Color.md#complimentary)
- [contrast](Color.md#contrast)
- [darken](Color.md#darken)
- [deficiency](Color.md#deficiency)
- [earthtone](Color.md#earthtone)
- [family](Color.md#family)
- [hueshift](Color.md#hueshift)
- [luminance](Color.md#luminance)
- [mc](Color.md#mc)
- [output](Color.md#output)
- [overtone](Color.md#overtone)
- [pair](Color.md#pair)
- [pastel](Color.md#pastel)
- [saturation](Color.md#saturation)
- [scheme](Color.md#scheme)
- [temp](Color.md#temp)
- [token](Color.md#token)
- [via](Color.md#via)

## Constructors

### constructor

• **new Color**(`c?`, `options?`): [`Color`](Color.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c?` | `any` | The color to bind. |
| `options?` | `ColorOptions` | Optional overrides and properties for the bound color. |

#### Returns

[`Color`](Color.md)

#### Defined in

[wrappers.js:323](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L323)

## Methods

### achromatic

▸ **achromatic**(): `boolean`

Returns `true` if the bound color has hue or is grayscale elsColorspaces} [colorspace='lch'] The colorspace to use when checking if the `color` is grayscale or not.

#### Returns

`boolean`

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

[wrappers.js:872](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L872)

___

### alpha

▸ **alpha**(`amount?`): `number` \| [`Color`](Color.md)

Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `string` \| `number` | The value to apply to the opacity channel. The value is normalized to the range [0,1] |

#### Returns

`number` \| [`Color`](Color.md)

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

[wrappers.js:388](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L388)

___

### brighten

▸ **brighten**(`amount`): [`Color`](Color.md)

The inverse of `darken`. Brightens the bound color by increasing the lightness channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.1`. |

#### Returns

[`Color`](Color.md)

**`Example`**

```ts
import { color } from "huetiful-js";

console.log(color('blue').brighten(0.3));
//#464646
```

#### Defined in

[wrappers.js:458](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L458)

___

### complimentary

▸ **complimentary**(`colorObj?`): `FactObject` \| [`Color`](Color.md)

Returns the complementary hue of the bound color. The function returns `'gray'` when you pass in an achromatic color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorObj?` | `boolean` | Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`. |

#### Returns

`FactObject` \| [`Color`](Color.md)

**`Example`**

```ts
import { color } from "huetiful-js";

console.log(color("pink").getComplimentaryHue(true))
// { hue: 'blue-green', color: '#97dfd7ff' }
```

#### Defined in

[wrappers.js:611](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L611)

___

### contrast

▸ **contrast**(`against?`): `number`

Gets the contrast value between the bound and  comparison ( or `against`) color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | `any` | The color to use for comparison. |

#### Returns

`number`

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('pink').contrast('yellow'))
// 1.4322318222624262
```

#### Defined in

[wrappers.js:702](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L702)

___

### darken

▸ **darken**(`amount`): [`Color`](Color.md)

Darkens the bound color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`. |

#### Returns

[`Color`](Color.md)

**`Example`**

```ts
import { color } from "huetiful-js";
console.log(color('blue'+-).darken(0.3));
//#464646
```

#### Defined in

[wrappers.js:477](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L477)

___

### deficiency

▸ **deficiency**(`options`): [`Color`](Color.md)

Simulates how a color may be perceived by people with color vision deficiency.

To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:

* 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
* 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
* 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeficiencyOptions`](../README.md#deficiencyoptions) |

#### Returns

[`Color`](Color.md)

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

[wrappers.js:931](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L931)

___

### earthtone

▸ **earthtone**(`options`): [`ColorArray`](ColorArray.md) \| [`Color`](Color.md)

Creates a color scale between an earth tone and any color token using spline interpolation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `EarthtoneOptions` |

#### Returns

[`ColorArray`](ColorArray.md) \| [`Color`](Color.md)

**`Example`**

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

#### Defined in

[wrappers.js:674](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L674)

___

### family

▸ **family**(): [`HueFamily`](../README.md#huefamily)

Gets the hue family which a color belongs to with the overtone included (if it has one.).

For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.

#### Returns

[`HueFamily`](../README.md#huefamily)

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("#310000").family())
// 'red'
```

#### Defined in

[wrappers.js:634](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L634)

___

### hueshift

▸ **hueshift**(`options`): [`ColorArray`](ColorArray.md) \| [`Color`](Color.md)

* Creates a palette of hue shifted colors from the passed in color.

Hue shifting means that:

* As a color becomes lighter, its hue shifts up (increases).
* As a color becomes darker its hue shifts down (decreases).

The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.

 The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.

  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `HueshiftOptions` | The optional overrides object to customize the `HueShiftOptions` like easing function. *@returns {ColorArray\|Color} * |

#### Returns

[`ColorArray`](ColorArray.md) \| [`Color`](Color.md)

**`Example`**

```ts
* import { color } from "huetiful-js";
 
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

[wrappers.js:586](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L586)

___

### luminance

▸ **luminance**(`amount`): `number` \| [`Color`](Color.md)

Gets the luminance of the passed in color token.

If the `amount` parameter is not passed in else it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.
  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The `luminance` value to set on the bound color. * |

#### Returns

`number` \| [`Color`](Color.md)

*
  *

**`Example`**

```ts
* import { color } from 'huetiful-js'
  *
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

[wrappers.js:752](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L752)

___

### mc

▸ **mc**(`modeChannel`, `value`): `number` \| [`Color`](Color.md)

Sets the value of the specified channel on the passed in color.

If the `amount` parameter is `undefined` it gets the value of the specified channel.
 *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modeChannel` | `string` | The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color. * |
| `value` | `string` \| `number` | The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"` * * The supported symbols `*` `+` `-` `/` |

#### Returns

`number` \| [`Color`](Color.md)

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('#a1bd2f').mc('rgb.g'))
// 0.7411764705882353
```

#### Defined in

[wrappers.js:417](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L417)

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

[wrappers.js:778](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L778)

___

### overtone

▸ **overtone**(): `string` \| ``false``

Returns the name of the hue family which is biasing the passed in color.

* If an achromatic color is passed in it returns the string `'gray'`
* If the color has no bias it returns `false`.

#### Returns

`string` \| ``false``

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

[wrappers.js:955](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L955)

___

### pair

▸ **pair**(`options`): [`ColorArray`](ColorArray.md) \| [`Color`](Color.md)

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorArray`](ColorArray.md) \| [`Color`](Color.md)

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[wrappers.js:545](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L545)

___

### pastel

▸ **pastel**(): [`Color`](Color.md)

Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.

#### Returns

[`Color`](Color.md)

**`Example`**

```ts
import { color } from 'huetiful-js';

console.log(color("green").pastel())

// #036103ff
```

#### Defined in

[wrappers.js:523](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L523)

___

### saturation

▸ **saturation**(`amount`): `number` \| [`Color`](Color.md)

Sets/Gets the saturation value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` \| `number` | The amount of `saturation` to set on the bound color token. Also supports string expressions. |

#### Returns

`number` \| [`Color`](Color.md)

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = ['lch',60,13,0.5]

console.log(color(myColor).saturation())
// 13

console.log(color(myColor).saturation("*0.3"))

// ['lch',60,19.9,0.5]
```

#### Defined in

[wrappers.js:804](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L804)

___

### scheme

▸ **scheme**(`options`): [`ColorArray`](ColorArray.md)

Returns a randomised classic color scheme from the bound color.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`ColorArray`](ColorArray.md)

**`Example`**

```ts
import { color  } from 'huetiful-js'

console.log(color("#a1bd2f").scheme("triadic"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[wrappers.js:973](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L973)

___

### temp

▸ **temp**(): ``"cool"`` \| ``"warm"``

Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'`.

#### Returns

``"cool"`` \| ``"warm"``

import { color } from 'huetiful-js'

let sample = [
"#00ffdc",
"#00ff78",
"#00c000"
];

console.log(color(sample[2]).temp());
// 'warm'

#### Defined in

[wrappers.js:898](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L898)

___

### token

▸ **token**(`options`): `any`

Parses any recognizable color to the specified `kind` of `ColorToken` type.

The `kind` option supports the following types as options:

* `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.

* `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.

The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:
 - `'hexadecimal'`
 - `'binary'`
 - `'octal'`
 - `'decimal'` exponential notation
 - `'hex'` - Parses the color token to its hexadecimal string equivalent.

If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

* `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[wrappers.js:505](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L505)

___

### via

▸ **via**(`origin`): [`Color`](Color.md)

Interpolates the bound color via the `origin` with the point `t` at `0.5`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | `any` | The color to interpolate via. value is in the range [0,1] the easing and the interpolation methods /fixups. |

#### Returns

[`Color`](Color.md)

#### Defined in

[wrappers.js:437](https://github.com/prjctimg/huetiful/blob/6a7e153/src/wrappers.js#L437)
