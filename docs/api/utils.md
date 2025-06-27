## achromatic()

> **achromatic**(`color`): `boolean`

Defined in: utils/index.ts:244

Checks if a color token is achromatic (without hue or simply grayscale).

### Parameters

#### color

[`ColorToken`](types.md#colortoken)

The color token to test if it is achromatic or not.

### Returns

`boolean`

### Example

```ts
import { achromatic } from "huetiful-js";
S;
achromatic("pink");
// false

let sample = ["#164100", "#ffff00", "#310000", "pink"];

console.log(sample.map(achromatic));

// [false, false, false,false]

achromatic("gray");
// Returns true

// We can expand this example by interpolating between black and white and then getting some samples to iterate through.

import { interpolator } from "huetiful-js";

// we create an interpolation using black and white with 12 samples
let grays = interpolator(["black", "white"], { num: 12 });

console.log(grays.map(achromatic));

//
[false, true, true, true, true, true, true, true, true, true, true, false];
```

---

## alpha()

> **alpha**\<`Amount`\>(`color`, `amount`): `Amount` _extends_ `undefined` ? `number` : [`ColorToken`](types.md#colortoken)

Defined in: utils/index.ts:82

Sets and retrieves the color token's alpha (or opacity).

If the the `amount` argument is passed in, it sets the color token's alpha channel with the `amount` specified
and returns the color as a hex string.

:::tip

- Also supports math expressions as a `string` for the `amount` parameter.
  For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value.
  In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.

:::

If the `alpha` channel is `undefined`, it defaults to `1`.

### Type Parameters

#### Amount

`Amount`

### Parameters

#### color

[`ColorToken`](types.md#colortoken) = `"cyan"`

The color with the opacity/alpha channel to retrieve or set.

#### amount

`Amount` = `undefined`

The value to apply to the opacity channel. The value is between `[0,1]`

### Returns

`Amount` _extends_ `undefined` ? `number` : [`ColorToken`](types.md#colortoken)

### Example

```ts
import { alpha } from "huetiful-js";

// Getting the alpha
console.log(alpha("#a1bd2f0d"));
// 0.050980392156862744

// Setting the alpha

const myColor = alpha("b2c3f1", 0.5);

console.log(myColor);

// #b2c3f180
```

---

## family()

> **family**(`color`, `bias`): \{ `bias`: `false` \| [`ColorFamily`](types.md#colorfamily); `hue`: `never`; \}

Defined in: utils/index.ts:630

Returns the hue family which the passed in color belongs to with the "overtone" included (if it has one.).

For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.

### Parameters

#### color

[`ColorToken`](types.md#colortoken)

The color to query its shade or hue family.

#### bias

`boolean` = `false`

Returns the name of the hue family which is biasing the passed in color using the `'lch'` colorspace. If it has no bias it returns `false` on the `bias` property of the returned object.
:::note

This `bias` parameter replaces the `overtone()` function prior version `3.0.x`.

:::

### Returns

\{ `bias`: `false` \| [`ColorFamily`](types.md#colorfamily); `hue`: `never`; \}

#### bias

> **bias**: `false` \| [`ColorFamily`](types.md#colorfamily)

#### hue

> **hue**: `never`

### Example

```ts
import { family } from "huetiful-js";

console.log(family("#310000"));

// 'red'
```

---

## lightness()

> **lightness**(`color`, `options?`): [`ColorToken`](types.md#colortoken)

Defined in: utils/index.ts:286

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

### Parameters

#### color

[`ColorToken`](types.md#colortoken)

The color to darken or lighten.

#### options?

`LightnessOptions`

Specify options such as whether to darken or highlight.

### Returns

[`ColorToken`](types.md#colortoken)

### Example

```ts
import { lightness } from "huetiful-js";

// darkening a color
console.log(lightness("blue", 0.3, true));

// '#464646'

// brightening a color, we can omit the final param
// because it's false by default.
console.log(brighten("blue", 0.3));
//#464646
```

---

## luminance()

> **luminance**\<`Amount`\>(`color?`, `amount?`): `Amount` _extends_ `number` ? [`ColorToken`](types.md#colortoken) : `number`

Defined in: utils/index.ts:563

Sets/Gets the luminance of the passed in color token.

If the `amount` argument is passed in, it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.

If the `amount` argument is not passed in however, it will simply return the color token's luminance.

### Type Parameters

#### Amount

`Amount`

### Parameters

#### color?

[`ColorToken`](types.md#colortoken)

The color to retrieve or adjust luminance.

#### amount?

`number` = `undefined`

The amount of luminance to set. The value range is normalised between [0,1]

### Returns

`Amount` _extends_ `number` ? [`ColorToken`](types.md#colortoken) : `number`

### Example

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

---

## mc()

> **mc**(`modeChannel`): \<`Value`\>(`color?`, `value?`) => `Value` _extends_ `number` ? [`ColorToken`](types.md#colortoken) : `number`

Defined in: utils/index.ts:171

Sets the value of the specified channel on the passed in color.

If the `amount` parameter is `undefined` it gets the value of the specified channel.

### Parameters

#### modeChannel

`string` = `""`

The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color.

### Returns

> \<`Value`\>(`color?`, `value?`): `Value` _extends_ `number` ? [`ColorToken`](types.md#colortoken) : `number`

#### Type Parameters

##### Value

`Value` _extends_ `unknown`

#### Parameters

##### color?

[`ColorToken`](types.md#colortoken)

##### value?

`Value`

#### Returns

`Value` _extends_ `number` ? [`ColorToken`](types.md#colortoken) : `number`

### Example

```ts
import { mc } from "huetiful-js";

console.log(mc("rgb.g")("#a1bd2f"));
// 0.7411764705882353
```

---

## temp()

> **temp**(`color`): `"warm"` \| `"cool"`

Defined in: utils/index.ts:686

Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'` using the `'lch'` colorspace.

### Parameters

#### color

[`ColorToken`](types.md#colortoken) = `"cyan"`

The color to check the temperature.
True if the color is cool else false.

### Returns

`"warm"` \| `"cool"`

### Example

```ts
import { temp } from "huetiful-js";

let sample = ["#00ffdc", "#00ff78", "#00c000"];

console.log(temp(sample[2]));
// 'cool'

console.log(map(sample, temp));

// [ 'cool',  'warm', 'cool']
```

---

## token()

> **token**(`color`, `options?`): [`ColorToken`](types.md#colortoken)

Defined in: utils/index.ts:337

Parses any recognizable color to the specified `kind`.

The `kind` option supports the following types as options (case-insensitive):

- `'arr'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.

- `'num'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.

The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'num'`:

- `'hex'` - Hexadecimal number
- `'bin'` - Binary number
- `'oct'` - Octal number
- `'expo'` - Decimal exponential notation

- `'str'` - Parses the color token to its hexadecimal string equivalent.

- `'obj'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.t

:::tip

If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

:::

### Parameters

#### color

[`ColorToken`](types.md#colortoken) = `"cyan"`

The color token to parse or convert.

#### options?

[`TokenOptions`](types.md#tokenoptions-1)

Options to customize the parsing and output behaviour.

### Returns

[`ColorToken`](types.md#colortoken)
