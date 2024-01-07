[huetiful-js](../README.md) / [Modules](../modules.md) / helpers

# Module: helpers

## Table of contents

### Variables

- [interpolatorConfig](helpers.md#interpolatorconfig)

### Functions

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The hue angle to normalize. |

#### Returns

`number`

The normalized hue angle or passed in value if it was within [0,360]

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color to subtract values from/ |
| `modeChannel` | `string` | The colorspace and channel string to perform the operation in. |

#### Returns

`fn`

The difference between the color channel(s)

▸ (`subtrahend`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `subtrahend` | [`ColorToken`](types.md#colortoken) |

##### Returns

`number`

**`Example`**

```ts

```

___

### checkArg

▸ **checkArg**(`arg`, `def`): `unknown`

Returns the first truthy value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `unknown` | The value to check |
| `def` | `unknown` | The value to cast if arg is falsy |

#### Returns

`unknown`

The first truthy value

___

### colorObj

▸ **colorObj**(`factor`, `callback`): (`color`: [`ColorToken`](types.md#colortoken)) => \{ `color`: [`ColorToken`](types.md#colortoken) = color }

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | `unknown` |

#### Returns

`fn`

▸ (`color`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) |

___

### colorObjArr

▸ **colorObjArr**(`factor`, `callback`): (`collection`: `object` \| [`ColorToken`](types.md#colortoken)[]) => \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: [`Factor`](types.md#factor)  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](types.md#factor) |
| `callback` | `any` |

#### Returns

`fn`

▸ (`collection`): \{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: [`Factor`](types.md#factor)  }[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#colortoken)[] |

##### Returns

\{ `color`: [`ColorToken`](types.md#colortoken) ; `factor`: [`Factor`](types.md#factor)  }[]

___

### customConcat

▸ **customConcat**(`hue`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `hue` | `object` |

#### Returns

`number`[]

___

### customFindKey

▸ **customFindKey**(`collection`, `factor`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `object` | The collection to inspect. |
| `factor` | `number` | The value to compare against |

#### Returns

`string`

Returns the found element or its key, else `undefined`.

___

### customSort

▸ **customSort**(`order`, `factor?`): (`a`: `any`, `b`: `any`) => `number`

Helper function for native sorting method for arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | [`Order`](types.md#order) | Either ascending or descending. |
| `factor?` | `string` | The property to query. |

#### Returns

`fn`

A sorted array.

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`number`

___

### eq

▸ **eq**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

___

### expressionParser

▸ **expressionParser**(`color`, `modeChannel`, `expression`): `number`

Takes an arithmetic operator followed by a value and passes the result of the expression to the specified channel. Currently supports addition,subtraction,division and multiplication symbols only.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color. |
| `modeChannel` | `string` | The colorspace channel to set. |
| `expression` | `string` | The expression assignment as a string. |

#### Returns

`number`

**`Example`**

```ts
console.log(lch('blue'));
// { mode: 'lch',l: 29.568297153444703,c: 131.2014771995311,h: 301.36428148973533}

console.log(expressionParser('blue', 'lch.l', '*0.3'));
// { mode: 'lch',l: 8.87048914603341,c: 131.2014771995311,h: 301.36428148973533 }
```

___

### filteredArr

▸ **filteredArr**(`factor`, `cb?`): (`collection`: `object` \| [`ColorToken`](types.md#colortoken)[], `start`: `string` \| `number`, `end?`: `number`) => [`ColorToken`](types.md#colortoken)[]

Filters an array according to the value of a color's queried factor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factor` | [`Factor`](types.md#factor) | The property to query and use as filtering criteria |
| `cb?` | `unknown` | The function to use for comparison |

#### Returns

`fn`

The filtered array

▸ (`collection`, `start`, `end?`): [`ColorToken`](types.md#colortoken)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#colortoken)[] |
| `start` | `string` \| `number` |
| `end?` | `number` |

##### Returns

[`ColorToken`](types.md#colortoken)[]

___

### floorCeil

▸ **floorCeil**(`num`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to round up or down. |

#### Returns

`number`

An integer

**`Function`**

Rounds up or down a number based on the float value.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The colorspace to get the channel keys. |
| `index?` | `number` | Optional index to return a single specified channel. |

#### Returns

`string`

A string.

**`Example`**

```ts
console.log(getModeChannel("oklch"));
// lch

console.log(getModeChannel("okhsl", 2));
// l
```

___

### gt

▸ **gt**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

___

### gte

▸ **gte**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

___

### inRange

▸ **inRange**(`number`, `start`, `end?`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number to check. |
| `start` | `number` | The minimum or starting value. |
| `end?` | `number` | The maximum or starting value. |

#### Returns

`boolean`

True if the number is in range else false.

**`Function`**

Checks if a value is within the start and end range.

___

### isInteger

▸ **isInteger**(`num`): `boolean`

Checks if a number is an integer or float.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `string` \| `number` | The number to query |

#### Returns

`boolean`

True if the number is an integer else false if it is a float.

___

### lt

▸ **lt**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

___

### lte

▸ **lte**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

___

### matchChromaChannel

▸ **matchChromaChannel**(`colorspace`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The color space to match saturation/chroma channel. |

#### Returns

`string`

The mode channel string passed to getChannel()

**`Function`**

Matches the chroma/saturation channel of any compliant color space

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | The string to match. |

#### Returns

`string`

The matched comparator, if any, as a string.

___

### matchDigits

▸ **matchDigits**(`s`): `string`

Gets the digits in the expression string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | Thestring to match |

#### Returns

`string`

The matched digits, if any, as a string.

___

### matchLightnessChannel

▸ **matchLightnessChannel**(`colorspace`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace` | `string` | The color space to match lightness channel. |

#### Returns

`string`

The mode channel string passed to getChannel

**`Function`**

Matches the lightness channel of any compliant color space

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve maximum value |

#### Returns

`number`

The largest number in the array

**`Example`**

```ts
console.log(max([0, 3, 4]));
// 4
```

___

### min

▸ **min**(`array`): `number`

Gets the smallest value in an array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve minimum value |

#### Returns

`number`

The smallest number in the array

**`Example`**

```ts
console.log(min([0, 3, 4]));
// 0
```

___

### normalize

▸ **normalize**(`value`, `modeChannel`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value to chec if its in the accepted range for the passed in mode channel |
| `modeChannel` | `string` | A string defining the mode and channel ranges to use for comparison |

#### Returns

`number`

The normalized channel value or the passed in value if it was within range

**`Function`**

Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.

___

### random

▸ **random**(`min`, `max`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The lower bound. |
| `max` | `number` | The upper bound. |

#### Returns

`number`

A number.

**`Function`**

Returns a random number between minimum and maximum bounds.

___

### sortedArr

▸ **sortedArr**(`factor`, `callback`, `order`, `colorObj?`): (`collection`: `object` \| [`ColorToken`](types.md#colortoken)[]) => `any`[]

Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](types.md#factor) | `undefined` | The property to query |
| `callback` | `unknown` | `undefined` | The function to use for comparison. |
| `order` | [`Order`](types.md#order) | `undefined` | - |
| `colorObj` | `boolean` | `false` | - |

#### Returns

`fn`

An array of colors or color objects.

▸ (`collection`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `object` \| [`ColorToken`](types.md#colortoken)[] |

##### Returns

`any`[]
