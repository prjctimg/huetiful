[huetiful-js](../README.md) / [Modules](../modules.md) / helpers

# Module::package: helpers

## Table of contents:scroll:

### Variables

- [interpolatorConfig](helpers.md#interpolatorconfig)

### Functions:toolbox:

- [adjustHue](helpers.md#adjusthue)
- [channelDifference](helpers.md#channeldifference)
- [checkArg](helpers.md#checkarg)
- [colorObj](helpers.md#colorobj)
- [colorObjArr](helpers.md#colorobjarr)
- [customConcat](helpers.md#customconcat)
- [customFindKey](helpers.md#customfindkey)
- [customSort](helpers.md#customsort)
- [eq](helpers.md#eq)
- [expressionParser](helpers.md#expressionparser)
- [filteredArr](helpers.md#filteredarr)
- [floorCeil](helpers.md#floorceil)
- [getModeChannel](helpers.md#getmodechannel)
- [gt](helpers.md#gt)
- [gte](helpers.md#gte)
- [inRange](helpers.md#inrange)
- [isInteger](helpers.md#isinteger)
- [lt](helpers.md#lt)
- [lte](helpers.md#lte)
- [matchChromaChannel](helpers.md#matchchromachannel)
- [matchComparator](helpers.md#matchcomparator)
- [matchDigits](helpers.md#matchdigits)
- [matchLightnessChannel](helpers.md#matchlightnesschannel)
- [max](helpers.md#max)
- [min](helpers.md#min)
- [normalize](helpers.md#normalize)
- [random](helpers.md#random)
- [sortedArr](helpers.md#sortedarr)

## Variables

### interpolatorConfig

• `Const` **interpolatorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chromaInterpolator` | [`Interpolator`](types.md#interpolator) |
| `easingFunc` | (`t`: `number`) => `number` |
| `hueFixup` | (`arr`: `number`[]) => `number`[] |
| `hueInterpolator` | [`Interpolator`](types.md#interpolator) |
| `lightnessInterpolator` | [`Interpolator`](types.md#interpolator) |

## Functions

### adjustHue

▸ **adjustHue**(`value`): `number`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The hue angle to normalize. |

#### Returns:back:

`number`

The normalized hue angle or passed in value if it was within [0,360]

**`Example`** :clipboard:

```ts
console.log(adjustHue(4));
// 4

console.log(adjustHue(444));
// 84
```

___

### channelDifference

▸ **channelDifference**(`color`, `modeChannel`): (`subtrahend`: [`ColorToken`](types.md#colortoken)) => `number`

Returns the channel value difference between the passed in colors. They are both converted to the colorspace in the modeChannel parameter before values are computed.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to subtract values from/ |
| `modeChannel` | `string` | The colorspace and channel string to perform the operation in. |

#### Returns:back:

`fn`

The difference between the color channel(s)

▸ (`subtrahend`): `number`

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `subtrahend` | [`ColorToken`](types.md#colortoken) |

##### Returns:back:

`number`

**`Example`** :clipboard:

```ts

```

___

### checkArg

▸ **checkArg**(`arg`, `def`): `unknown`

Returns the first truthy value.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `unknown` | The value to check |
| `def` | `unknown` | The value to cast if arg is falsy |

#### Returns:back:

`unknown`

The first truthy value

___

### colorObj

▸ **colorObj**(`factor`, `callback`): (`color`: [`ColorToken`](types.md#colortoken)) => \{ `color`: [`ColorToken`](types.md#colortoken) = color }

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | `unknown` |

#### Returns:back:

`fn`

▸ (`color`): `Object`

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |

##### Returns:back:

`Object`

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |

___

### colorObjArr

▸ **colorObjArr**(`factor`, `callback`): (`colors`: `object` \| [`ColorToken`](types.md#colortoken)[]) => \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: [`Factor`](types.md#factor)  }[]

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | `any` |

#### Returns:back:

`fn`

▸ (`colors`): \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: [`Factor`](types.md#factor)  }[]

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `colors` | `object` \| [`ColorToken`](types.md#colortoken)[] |

##### Returns:back:

\{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: [`Factor`](types.md#factor)  }[]

___

### customConcat

▸ **customConcat**(`hue`): `number`[]

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `hue` | `object` |

#### Returns:back:

`number`[]

___

### customFindKey

▸ **customFindKey**(`collection`, `factor`): `string`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` | The collection to inspect. |
| `factor` | `number` | The value to compare against |

#### Returns:back:

`string`

Returns the found element or its key, else `undefined`.

___

### customSort

▸ **customSort**(`order`, `factor?`): (`a`: `any`, `b`: `any`) => `number`

Helper function for native sorting method for arrays.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | [`Order`](types.md#order) | Either ascending or descending. |
| `factor?` | `string` | The property to query. |

#### Returns:back:

`fn`

A sorted array.

▸ (`a`, `b`): `number`

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns:back:

`number`

___

### eq

▸ **eq**(`x`, `y`): `boolean`

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns:back:

`boolean`

___

### expressionParser

▸ **expressionParser**(`color`, `modeChannel`, `expression`): `number`

Takes an arithmetic operator followed by a value and passes the result of the expression to the specified channel. Currently supports addition,subtraction,division and multiplication symbols only.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color. |
| `modeChannel` | `string` | The colorspace channel to set. |
| `expression` | `string` | The expression assignment as a string. |

#### Returns:back:

`number`

**`Example`** :clipboard:

```ts
console.log(lch('blue'));
// { mode: 'lch',l: 29.568297153444703,c: 131.2014771995311,h: 301.36428148973533}

console.log(expressionParser('blue', 'lch.l', '*0.3'));
// { mode: 'lch',l: 8.87048914603341,c: 131.2014771995311,h: 301.36428148973533 }
```

___

### filteredArr

▸ **filteredArr**(`factor`, `cb?`): (`colors`: [`ColorToken`](types.md#colortoken)[], `start`: `string` \| `number`, `end?`: `number`) => [`ColorToken`](types.md#colortoken)[]

Filters an array according to the value of a color's queried factor

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `factor` | [`Factor`](types.md#factor) | The property to query and use as filtering criteria |
| `cb?` | `unknown` | The function to use for comparison |

#### Returns:back:

`fn`

The filtered array

▸ (`colors`, `start`, `end?`): [`ColorToken`](types.md#colortoken)[]

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] |
| `start` | `string` \| `number` |
| `end?` | `number` |

##### Returns:back:

[`ColorToken`](types.md#colortoken)[]

___

### floorCeil

▸ **floorCeil**(`num`): `number`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to round up or down. |

#### Returns:back:

`number`

An integer



Rounds up or down a number based on the float value.

**`Example`** :clipboard:

```ts
console.log(floorCeil(1.45));
// 1
console.log(floorCeil(1.501));
// 2
```

___

### getModeChannel

▸ **getModeChannel**(`colorspace`, `index?`): `string`

Gets the clipped string of a passed in colorspace by removing non-channel characters.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The colorspace to get the channel keys. |
| `index?` | `number` | Optional index to return a single specified channel. |

#### Returns:back:

`string`

A string.

**`Example`** :clipboard:

```ts
console.log(getModeChannel("oklch"));
// lch

console.log(getModeChannel("okhsl", 2));
// l
```

___

### gt

▸ **gt**(`x`, `y`): `boolean`

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns:back:

`boolean`

___

### gte

▸ **gte**(`x`, `y`): `boolean`

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns:back:

`boolean`

___

### inRange

▸ **inRange**(`number`, `start`, `end?`): `boolean`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number to check. |
| `start` | `number` | The minimum or starting value. |
| `end?` | `number` | The maximum or starting value. |

#### Returns:back:

`boolean`

True if the number is in range else false.



Checks if a value is within the start and end range.

___

### isInteger

▸ **isInteger**(`num`): `boolean`

Checks if a number is an integer or float.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `string` \| `number` | The number to query |

#### Returns:back:

`boolean`

True if the number is an integer else false if it is a float.

___

### lt

▸ **lt**(`x`, `y`): `boolean`

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns:back:

`boolean`

___

### lte

▸ **lte**(`x`, `y`): `boolean`

#### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns:back:

`boolean`

___

### matchChromaChannel

▸ **matchChromaChannel**(`colorspace`): `string`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The color space to match saturation/chroma channel. |

#### Returns:back:

`string`

The mode channel string passed to getChannel()



Matches the chroma/saturation channel of any compliant color space

**`Example`** :clipboard:

```ts
import { matchChromaChannel } from 'huetiful-js'
console.log(matchChromaChannel("jch"));
// jch.c

console.log(matchChromaChannel("okhsl"));
// okhsl.s
```

___

### matchComparator

▸ **matchComparator**(`s`): `string`

Matches the comparison symbols used in the expression string.

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | The string to match. |

#### Returns:back:

`string`

The matched comparator, if any, as a string.

___

### matchDigits

▸ **matchDigits**(`s`): `string`

Gets the digits in the expression string

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | Thestring to match |

#### Returns:back:

`string`

The matched digits, if any, as a string.

___

### matchLightnessChannel

▸ **matchLightnessChannel**(`colorspace`): `string`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The color space to match lightness channel. |

#### Returns:back:

`string`

The mode channel string passed to getChannel



Matches the lightness channel of any compliant color space

**`Example`** :clipboard:

```ts
console.log(matchLightnessChannel("jch"));
// jch.j

console.log(matchLightnessChannel("okhsl"));
// okhsl.l
```

___

### max

▸ **max**(`array`): `number`

Gets the largest value in an array

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve maximum value |

#### Returns:back:

`number`

The largest number in the array

**`Example`** :clipboard:

```ts
console.log(max([0, 3, 4]));
// 4
```

___

### min

▸ **min**(`array`): `number`

Gets the smallest value in an array

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve minimum value |

#### Returns:back:

`number`

The smallest number in the array

**`Example`** :clipboard:

```ts
console.log(min([0, 3, 4]));
// 0
```

___

### normalize

▸ **normalize**(`value`, `modeChannel`): `number`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value to chec if its in the accepted range for the passed in mode channel |
| `modeChannel` | `string` | A string defining the mode and channel ranges to use for comparison |

#### Returns:back:

`number`

The normalized channel value or the passed in value if it was within range



Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.

___

### random

▸ **random**(`min`, `max`): `number`

#### Parameters:abacus:

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The lower bound. |
| `max` | `number` | The upper bound. |

#### Returns:back:

`number`

A number.



Returns a random number between minimum and maximum bounds.

___

### sortedArr

▸ **sortedArr**(`factor`, `callback`, `order`, `colorObj?`): (`colors`: [`ColorToken`](types.md#colortoken)[]) => `any`[]

Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.

#### Parameters:abacus:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](types.md#factor) | `undefined` | The property to query |
| `callback` | `unknown` | `undefined` | The function to use for comparison. |
| `order` | [`Order`](types.md#order) | `undefined` | - |
| `colorObj` | `boolean` | `false` | - |

#### Returns:back:

`fn`

An array of colors or color objects.

▸ (`colors`): `any`[]

##### Parameters:abacus:

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](types.md#colortoken)[] |

##### Returns:back:

`any`[]
