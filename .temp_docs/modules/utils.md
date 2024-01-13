# Module:📦 utils

## Table of contents📜

### Functions🧰

- [alpha](utils.md#alpha)
- [brighten](utils.md#brighten)
- [colorDeficiency](utils.md#colorDeficiency)
- [darken](utils.md#darken)
- [getChannel](utils.md#getChannel)
- [getComplimentaryHue](utils.md#getComplimentaryHue)
- [getContrast](utils.md#getContrast)
- [getFarthestChroma](utils.md#getFarthestChroma)
- [getFarthestContrast](utils.md#getFarthestContrast)
- [getFarthestHue](utils.md#getFarthestHue)
- [getFarthestLightness](utils.md#getFarthestLightness)
- [getHueFamily](utils.md#getHueFamily)
- [getLuminance](utils.md#getLuminance)
- [getNearestChroma](utils.md#getNearestChroma)
- [getNearestColor](utils.md#getNearestColor)
- [getNearestContrast](utils.md#getNearestContrast)
- [getNearestHue](utils.md#getNearestHue)
- [getNearestLightness](utils.md#getNearestLightness)
- [isAchromatic](utils.md#isAchromatic)
- [isCool](utils.md#isCool)
- [isWarm](utils.md#isWarm)
- [overtone](utils.md#overtone)
- [setChannel](utils.md#setChannel)
- [setLuminance](utils.md#setLuminance)

## Functions

### alpha

▸ **alpha**(`color`, `value?`): `number`

Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color with the targeted opacity/alpha channel. |
| `value?` | `string` \| `number` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns🔙

`number`

color The resulting color. Returns an 8 character hex code.

**`Example`** 📋

```ts
// Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
```

___

### brighten

▸ **brighten**(`color`, `value`, `colorspace`): [`ColorToken`](types.md#ColorToken)

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to brighten. |
| `value` | `string` \| `number` | The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5") |
| `colorspace` | `any` | - |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)

___

### colorDeficiency

▸ **colorDeficiency**(`deficiencyType?`): (`color`: [`ColorToken`](types.md#ColorToken), `severity`: `number`) => `string`

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | [`DeficiencyType`](types.md#DeficiencyType) | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |

#### Returns🔙

`fn`

The color as its simulated variant as a hexadecimal string.

▸ (`color`, `severity?`): `string`

##### Parameters🧮

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | `undefined` |
| `severity` | `number` | `1` |

##### Returns🔙

`string`

**`See`**

For a deep dive on  color vision deficiency go to

**`Example`** 📋

```ts
import { colorDeficiency, toHex } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'. 
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
```

___

### darken

▸ **darken**(`color`, `value`): [`ColorToken`](types.md#ColorToken)

Darkens the color by reducing the lightness channel. .

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to darken. |
| `value` | `string` \| `number` | The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5") |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)

color The darkened color.

**`Example`** 📋

```ts

```

___

### getChannel

▸ **getChannel**(`mc`): (`color`: [`ColorToken`](types.md#ColorToken)) => `number`

Gets the  value specifified channel on the color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns🔙

`fn`

value The value of the queried channel.

▸ (`color`): `number`

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) |

##### Returns🔙

`number`

**`Example`** 📋

```ts
import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`color`, `colorspace?`, `colorObj?`): \{ `color`: [`ColorToken`](types.md#ColorToken) ; `hue`: `string`  } \| [`ColorToken`](types.md#ColorToken)

Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | `undefined` | The color to retrieve its complimentary hue. |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is false. |

#### Returns🔙

\{ `color`: [`ColorToken`](types.md#ColorToken) ; `hue`: `string`  } \| [`ColorToken`](types.md#ColorToken)

An object with the hue family and complimentary color as keys.

**`Example`** 📋

```ts
import { getComplimentaryHue } from "huetiful-js";

console.log(getComplimentaryHue("pink", true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
```

___

### getContrast

▸ **getContrast**(`color`, `against`): `number`

Gets the contrast between the passed in colors.

#### Parameters🧮

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) |
| `against` | [`ColorToken`](types.md#ColorToken) |

#### Returns🔙

`number`

The relative luminance of the lightest color.

**`Example`** 📋

```ts
import { getContrast } from 'huetiful-js'

console.log(getContrast("black", "white"));
// 21
```

___

### getFarthestChroma

▸ **getFarthestChroma**(`collection`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

Gets the largest saturation value from the passed in colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

The largest saturation value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
```

___

### getFarthestContrast

▸ **getFarthestContrast**(`collection`, `against`, `colorObj?`): `number` \| \{ `factor`: `number` ; `name`: [`ColorToken`](types.md#ColorToken)  }

Gets the largest contrast value from the passed in colors compared against a sample color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | - |
| `against` | [`ColorToken`](types.md#ColorToken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `factor`: `number` ; `name`: [`ColorToken`](types.md#ColorToken)  }

The largest contrast value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }
```

___

### getFarthestHue

▸ **getFarthestHue**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

Gets the largest hue value from the passed in colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
```

___

### getFarthestLightness

▸ **getFarthestLightness**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | THe mode colorspace to retrieve the lightness value from. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

___

### getHueFamily

▸ **getHueFamily**(`color`, `mode?`): [`HueFamily`](types.md#HueFamily)

Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to query its shade or hue family. |
| `mode?` | [`HueColorSpaces`](types.md#HueColorSpaces) | - |

#### Returns🔙

[`HueFamily`](types.md#HueFamily)

The name of the hue family for example red or green.

**`Example`** 📋

```ts
import { getHue } from 'huetiful-js'

console.log(getHue("#310000"))
// red
```

___

### getLuminance

▸ **getLuminance**(`color`): `number`

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to query. |

#### Returns🔙

`number`

value The color's luminance value.

**`Alias`**

Gets the luminance value of that color as defined by WCAG.

**`Example`** 📋

```ts
import { getLuminance } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954
```

___

### getNearestChroma

▸ **getNearestChroma**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

Gets the smallest chroma/saturation value from the passed in colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

The smallest chroma/saturation value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
```

___

### getNearestColor

▸ **getNearestColor**(`collection`, `color`, `num?`): [`ColorToken`](types.md#ColorToken) \| [`ColorToken`](types.md#ColorToken)[]

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | [`ColorToken`](types.md#ColorToken)[] \| ``"tailwind"`` | `undefined` | The collection of colors to search for nearest colors |
| `color` | [`ColorToken`](types.md#ColorToken) | `undefined` | The color to use for distance comparison |
| `num` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the differenceHyab metric. |

#### Returns🔙

[`ColorToken`](types.md#ColorToken) \| [`ColorToken`](types.md#ColorToken)[]

An array of colors.

**`Example`** 📋

```ts
let cols = colors('all', '500')

console.log(getNearestColor(cols, 'blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

___

### getNearestContrast

▸ **getNearestContrast**(`collection`, `against`, `colorObj?`): `any`

Gets the smallest contrast value from the passed in colors compared against a sample color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | - |
| `against` | [`ColorToken`](types.md#ColorToken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false. |

#### Returns🔙

`any`

The smallest contrast value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getNearestContrast } from 'huetiful-js'

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
```

___

### getNearestHue

▸ **getNearestHue**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

Gets the smallest hue value from the passed in colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `colorspace?` | `string` | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
```

___

### getNearestLightness

▸ **getNearestLightness**(`collection`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters🧮

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#ColorToken)[] | `undefined` | - |
| `colorspace?` | [`HueColorSpaces`](types.md#HueColorSpaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns🔙

`number` \| \{ `color`: [`ColorToken`](types.md#ColorToken) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object.

**`Example`** 📋

```ts
import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

___

### isAchromatic

▸ **isAchromatic**(`color`, `mode?`): `boolean`

Checks if a color is achromatic(without hue or simply grayscale).

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to test if it is achromatic or not. |
| `mode?` | [`HueColorSpaces`](types.md#HueColorSpaces) | - |

#### Returns🔙

`boolean`

boolean Returns true if the color is achromatic else false

**`Example`** 📋

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

console.log(map(sample, isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true

console.log(map(sample, isAchromatic));

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, isAchromatic));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

___

### isCool

▸ **isCool**(`color`): `boolean`

Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to check the temperature. |

#### Returns🔙

`boolean`

True or false.

**`Example`** 📋

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

___

### isWarm

▸ **isWarm**(`color`): `boolean`

Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to check the temperature. |

#### Returns🔙

`boolean`

True or false.

**`Example`** 📋

```ts
import { isWarm } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(isWarm(sample[2]));
//true

console.log(map(sample, isWarm));

// [ false, true,  false]
```

___

### overtone

▸ **overtone**(`color`): `string` \| `boolean`

Returns the hue which is biasing the passed in color

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to query its overtone. |

#### Returns🔙

`string` \| `boolean`

The name of the overtone hue. If an achromatic color is passed in it return the string gray otherwise if the color has no bias it returns false.

**`Example`** 📋

```ts
import { overtone } from "huetiful-js";

console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
```

___

### setChannel

▸ **setChannel**(`mc`): (`color`: [`ColorToken`](types.md#ColorToken), `value`: `string` \| `number`) => [`ColorToken`](types.md#ColorToken)

Sets the value for the specified channel in a color.

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns🔙

`fn`

color The mutated color.

▸ (`color`, `value`): [`ColorToken`](types.md#ColorToken)

##### Parameters🧮

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) |
| `value` | `string` \| `number` |

##### Returns🔙

[`ColorToken`](types.md#ColorToken)

**`Example`** 📋

```ts
import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

___

### setLuminance

▸ **setLuminance**(`color`, `lum`): [`ColorToken`](types.md#ColorToken)

Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

#### Parameters🧮

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#ColorToken) | The color to set luminance |
| `lum` | `number` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns🔙

[`ColorToken`](types.md#ColorToken)

The mutated color with the modified properties.

**`Example`** 📋

```ts
import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
```
