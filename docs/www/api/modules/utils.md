[huetiful-js](../README.md) / utils

# Module: utils

## Table of contents

### Functions

- [alpha](utils.md#alpha)
- [brighten](utils.md#brighten)
- [darken](utils.md#darken)
- [getChannel](utils.md#getchannel)
- [getComplimentaryHue](utils.md#getcomplimentaryhue)
- [getContrast](utils.md#getcontrast)
- [getHueFamily](utils.md#gethuefamily)
- [getLuminance](utils.md#getluminance)
- [isAchromatic](utils.md#isachromatic)
- [isCool](utils.md#iscool)
- [isWarm](utils.md#iswarm)
- [overtone](utils.md#overtone)
- [setChannel](utils.md#setchannel)
- [setLuminance](utils.md#setluminance)

## Functions

### alpha

▸ **alpha**(`color?`, `amount`): [`ColorToken`](accessibility.md#colortoken)

Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | `'#000'` | The color with the targeted opacity/alpha channel. |
| `amount` | `string` \| `number` | `undefined` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns

[`ColorToken`](accessibility.md#colortoken)

Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
// Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
```

#### Defined in

[src/utils.js:326](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L326)

___

### brighten

▸ **brighten**(`color`, `amount?`): [`ColorToken`](accessibility.md#colortoken)

The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | `undefined` | The color to brighten. |
| `amount` | `number` | `0.4` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`ColorToken`](accessibility.md#colortoken)

The brightened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { brighten } from "huetiful-js";

console.log(brighten('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[src/utils.js:521](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L521)

___

### darken

▸ **darken**(`color?`, `amount?`): [`ColorToken`](accessibility.md#colortoken)

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | `'#fff'` | The color to darken. |
| `amount` | `number` | `0.3` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`ColorToken`](accessibility.md#colortoken)

The darkened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[src/utils.js:488](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L488)

___

### getChannel

▸ **getChannel**(`mc`): (`color`: [`ColorToken`](accessibility.md#colortoken)) => `number`

Gets the value of the specified channel on the passed in color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

▸ (`color`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) |

##### Returns

`number`

**`Example`**

```ts
import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

[src/utils.js:184](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L184)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`color`, `colorspace`, `colorObj?`): `FactObject`

Returns the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | `undefined` | The color to retrieve its complimentary hue. |
| `colorspace` | `any` | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is `false`. |

#### Returns

`FactObject`

An object with the hue family and complimentary color as keys.

**`Example`**

```ts
import { getComplimentaryHue } from "huetiful-js";

console.log(getComplimentaryHue("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
```

#### Defined in

[src/utils.js:109](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L109)

___

### getContrast

▸ **getContrast**(`color`, `against`): `number`

Gets the contrast between the passed in colors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) |
| `against` | `any` |

#### Returns

`number`

The relative luminance of the lightest color.

**`Example`**

```ts
import { getContrast } from 'huetiful-js'

console.log(getContrast("black", "white"));
// 21
```

#### Defined in

[src/utils.js:366](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L366)

___

### getHueFamily

▸ **getHueFamily**(`color`): `TailwindColorFamilies`

Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to query its shade or hue family. |

#### Returns

`TailwindColorFamilies`

The name of the hue family for example `red` or `blue-green`.

**`Example`**

```ts
import { getHueFamily } from 'huetiful-js'

console.log(getHueFamily("#310000"))
// red
```

#### Defined in

[src/utils.js:73](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L73)

___

### getLuminance

▸ **getLuminance**(`color`): `number`

Gets the luminance value of that color as defined by WCAG.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to query. |

#### Returns

`number`

The color's luminance value.

**`Example`**

```ts
import { getLuminance,colors } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map(getLuminance));

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
```

#### Defined in

[src/utils.js:239](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L239)

___

### isAchromatic

▸ **isAchromatic**(`color`, `colorspace?`): `boolean`

Checks if a color is achromatic (without hue or simply grayscale).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to test if it is achromatic or not. |
| `colorspace?` | `HueColorSpaces` | The colorspace to use when checking if the `color` is grayscale or not. |

#### Returns

`boolean`

True if the color is achromatic else false.

**`Example`**

```ts
import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"

isAchromatic('pink')
// false

let sample = [
 "#164100",
 "#ffff00",
 "#310000",
 'pink'
];

console.log(sample.map(isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(isAchromatic));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

[src/utils.js:584](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L584)

___

### isCool

▸ **isCool**(`color`): `boolean`

Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to check the temperature. |

#### Returns

`boolean`

True if the color is cool else false.

**`Example`**

```ts
import { isCool } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]
```

#### Defined in

[src/utils.js:436](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L436)

___

### isWarm

▸ **isWarm**(`color`): `boolean`

Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to check the temperature. |

#### Returns

`boolean`

True if the color is warm else false.

**`Example`**

```ts
import { isWarm } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isWarm(sample[2]));
//true

console.log(sample.map(isWarm));

// [ false, true,  false]
```

#### Defined in

[src/utils.js:469](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L469)

___

### overtone

▸ **overtone**(`color`): `string`

Returns the hue which is biasing the passed in color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to query its overtone. |

#### Returns

`string`

The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.

**`Example`**

```ts
import { overtone } from "huetiful-js";

console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
```

#### Defined in

[src/utils.js:390](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L390)

___

### setChannel

▸ **setChannel**(`mc`): (`color`: [`ColorToken`](accessibility.md#colortoken), `value`: `string` \| `number`) => [`ColorToken`](accessibility.md#colortoken)

Sets the value for the specified channel in a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns

`fn`

▸ (`color`, `value`): [`ColorToken`](accessibility.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) |
| `value` | `string` \| `number` |

##### Returns

[`ColorToken`](accessibility.md#colortoken)

**`Example`**

```ts
import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

#### Defined in

[src/utils.js:138](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L138)

___

### setLuminance

▸ **setLuminance**(`color`, `amount`): [`ColorToken`](accessibility.md#colortoken)

Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](accessibility.md#colortoken) | The color to set luminance |
| `amount` | `any` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns

[`ColorToken`](accessibility.md#colortoken)

The mutated color with the modified properties. Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
```

#### Defined in

[src/utils.js:260](https://github.com/prjctimg/huetiful/blob/cf8e303/src/utils.js#L260)
