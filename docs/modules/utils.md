[huetiful-js](../README.md) / [Modules](../modules.md) / utils

# Module::package: utils

## Table of contents:scroll:

### Functions:toolbox:

- [alpha](utils.md#alpha)
- [brighten](utils.md#brighten)
- [colorDeficiency](utils.md#colordeficiency)
- [darken](utils.md#darken)
- [getChannel](utils.md#getchannel)
- [getComplimentaryHue](utils.md#getcomplimentaryhue)
- [getContrast](utils.md#getcontrast)
- [getFarthestChroma](utils.md#getfarthestchroma)
- [getFarthestContrast](utils.md#getfarthestcontrast)
- [getFarthestHue](utils.md#getfarthesthue)
- [getFarthestLightness](utils.md#getfarthestlightness)
- [getHueFamily](utils.md#gethuefamily)
- [getLuminance](utils.md#getluminance)
- [getNearestChroma](utils.md#getnearestchroma)
- [getNearestColor](utils.md#getnearestcolor)
- [getNearestContrast](utils.md#getnearestcontrast)
- [getNearestHue](utils.md#getnearesthue)
- [getNearestLightness](utils.md#getnearestlightness)
- [isAchromatic](utils.md#isachromatic)
- [isCool](utils.md#iscool)
- [isWarm](utils.md#iswarm)
- [overtone](utils.md#overtone)
- [setChannel](utils.md#setchannel)
- [setLuminance](utils.md#setluminance)

## Functions

### alpha

▸ **alpha**(`color`, `value?`): `number`

Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color with the targeted opacity/alpha channel. |
| `value?` | `string` \| `number` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns:back:

`number`

color The resulting color. Returns an 8 character hex code.

**`Example`** :clipboard:

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

▸ **brighten**(`color`, `value`, `colorspace`): [`ColorToken`](types.md#colortoken)

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to brighten. |
| `value` | `string` \| `number` | The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5") |
| `colorspace` | `any` | - |

#### Returns:back:

[`ColorToken`](types.md#colortoken)

___

### colorDeficiency

▸ **colorDeficiency**(`deficiencyType?`): (`color`: [`ColorToken`](types.md#colortoken), `severity`: `number`) => `string`

Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | [`DeficiencyType`](types.md#deficiencytype) | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value. |

#### Returns:back:

`fn`

The color as its simulated variant as a hexadecimal string.

▸ (`color`, `severity?`): `string`

##### Parameters:abacus:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | `undefined` |
| `severity` | `number` | `1` |

##### Returns:back:

`string`

**`See`**

For a deep dive on  color vision deficiency go to

**`Example`** :clipboard:

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

▸ **darken**(`color`, `value`): [`ColorToken`](types.md#colortoken)

Darkens the color by reducing the lightness channel. .

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to darken. |
| `value` | `string` \| `number` | The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5") |

#### Returns:back:

[`ColorToken`](types.md#colortoken)

color The darkened color.

**`Example`** :clipboard:

```ts

```

___

### getChannel

▸ **getChannel**(`mc`): (`color`: [`ColorToken`](types.md#colortoken)) => `number`

Gets the  value specifified channel on the color.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns:back:

`fn`

value The value of the queried channel.

▸ (`color`): `number`

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |

##### Returns:back:

`number`

**`Example`** :clipboard:

```ts
import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`color`, `colorspace?`, `colorObj?`): \{ `color`: [`ColorToken`](types.md#colortoken) ; `hue`: `string`  } \| [`ColorToken`](types.md#colortoken)

Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | `undefined` | The color to retrieve its complimentary hue. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is false. |

#### Returns:back:

\{ `color`: [`ColorToken`](types.md#colortoken) ; `hue`: `string`  } \| [`ColorToken`](types.md#colortoken)

An object with the hue family and complimentary color as keys.

**`Example`** :clipboard:

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

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `against` | [`ColorToken`](types.md#colortoken) |

#### Returns:back:

`number`

The relative luminance of the lightest color.

**`Example`** :clipboard:

```ts
import { getContrast } from 'huetiful-js'

console.log(getContrast("black", "white"));
// 21
```

___

### getFarthestChroma

▸ **getFarthestChroma**(`colors`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest saturation value from the passed in colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to query the color with the largest saturation value. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest saturation value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
```

___

### getFarthestContrast

▸ **getFarthestContrast**(`colors`, `against`, `colorObj?`): `number` \| \{ `factor`: `number` ; `name`: [`ColorToken`](types.md#colortoken)  }

Gets the largest contrast value from the passed in colors compared against a sample color.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to query the color with the largest contrast value. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `factor`: `number` ; `name`: [`ColorToken`](types.md#colortoken)  }

The largest contrast value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }
```

___

### getFarthestHue

▸ **getFarthestHue**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue value from the passed in colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to query the color with the largest hue value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
```

___

### getFarthestLightness

▸ **getFarthestLightness**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to query the color with the largest lightness value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | THe mode colorspace to retrieve the lightness value from. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

___

### getHueFamily

▸ **getHueFamily**(`color`, `mode?`): [`HueFamily`](types.md#huefamily)

Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to query its shade or hue family. |
| `mode?` | [`HueColorSpaces`](types.md#huecolorspaces) | - |

#### Returns:back:

[`HueFamily`](types.md#huefamily)

The name of the hue family for example red or green.

**`Example`** :clipboard:

```ts
import { getHue } from 'huetiful-js'

console.log(getHue("#310000"))
// red
```

___

### getLuminance

▸ **getLuminance**(`color`): `number`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to query. |

#### Returns:back:

`number`

value The color's luminance value.

**`Alias`**

Gets the luminance value of that color as defined by WCAG.

**`Example`** :clipboard:

```ts
import { getLuminance } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954
```

___

### getNearestChroma

▸ **getNearestChroma**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest chroma/saturation value from the passed in colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to query the color with the smallest chroma/saturation value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest chroma/saturation value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
```

___

### getNearestColor

▸ **getNearestColor**(`collection`, `color`, `samples?`): [`ColorToken`](types.md#colortoken) \| [`ColorToken`](types.md#colortoken)[]

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | [`ColorToken`](types.md#colortoken)[] \| ``"tailwind"`` \| ``"material"`` | `undefined` | The collection of colors to search for nearest colors |
| `color` | [`ColorToken`](types.md#colortoken) | `undefined` | The color to use for distance comparison |
| `samples` | `number` | `1` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order. |

#### Returns:back:

[`ColorToken`](types.md#colortoken) \| [`ColorToken`](types.md#colortoken)[]

An array of colors.

**`Example`** :clipboard:

```ts

```

___

### getNearestContrast

▸ **getNearestContrast**(`colors`, `against`, `colorObj?`): `any`

Gets the smallest contrast value from the passed in colors compared against a sample color.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | The array of colors to query the color with the smallest contrast value. |
| `against` | [`ColorToken`](types.md#colortoken) | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false. |

#### Returns:back:

`any`

The smallest contrast value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getNearestContrast } from 'huetiful-js'

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
```

___

### getNearestHue

▸ **getNearestHue**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest hue value from the passed in colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to query the color with the smallest hue value. |
| `colorspace?` | `string` | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Example`** :clipboard:

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
```

___

### getNearestLightness

▸ **getNearestLightness**(`colors`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] | `undefined` | The array of colors to query the color with the smallest lightness value. |
| `colorspace?` | [`HueColorSpaces`](types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns:back:

`number` \| \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object.

**`Example`** :clipboard:

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

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to test if it is achromatic or not. |
| `mode?` | [`HueColorSpaces`](types.md#huecolorspaces) | - |

#### Returns:back:

`boolean`

boolean Returns true if the color is achromatic else false

**`Example`** :clipboard:

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

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to check the temperature. |

#### Returns:back:

`boolean`

True or false.

**`Example`** :clipboard:

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

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to check the temperature. |

#### Returns:back:

`boolean`

True or false.

**`Example`** :clipboard:

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

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to query its overtone. |

#### Returns:back:

`string` \| `boolean`

The name of the overtone hue. If an achromatic color is passed in it return the string gray otherwise if the color has no bias it returns false.

**`Example`** :clipboard:

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

▸ **setChannel**(`mc`): (`color`: [`ColorToken`](types.md#colortoken), `value`: `string` \| `number`) => [`ColorToken`](types.md#colortoken)

Sets the value for the specified channel in a color.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns:back:

`fn`

color The mutated color.

▸ (`color`, `value`): [`ColorToken`](types.md#colortoken)

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |
| `value` | `string` \| `number` |

##### Returns:back:

[`ColorToken`](types.md#colortoken)

**`Example`** :clipboard:

```ts
import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

___

### setLuminance

▸ **setLuminance**(`color`, `lum`): [`ColorToken`](types.md#colortoken)

Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to set luminance |
| `lum` | `number` | The amount of luminance to set. The value range is normalised between [0,1] |

#### Returns:back:

[`ColorToken`](types.md#colortoken)

The mutated color with the modified properties.

**`Example`** :clipboard:

```ts
import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
```
