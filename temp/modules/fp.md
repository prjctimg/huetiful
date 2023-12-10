[huetiful-js](../README.md) / fp

# Module: fp

## Table of contents

### Functions

- [adjustHue](fp.md#adjusthue)
- [colorObj](fp.md#colorobj)
- [colorObjArr](fp.md#colorobjarr)
- [customConcat](fp.md#customconcat)
- [customFindKey](fp.md#customfindkey)
- [customSort](fp.md#customsort)
- [expressionParser](fp.md#expressionparser)
- [filteredArr](fp.md#filteredarr)
- [floorCeil](fp.md#floorceil)
- [gt](fp.md#gt)
- [gte](fp.md#gte)
- [inRange](fp.md#inrange)
- [isInt](fp.md#isint)
- [lt](fp.md#lt)
- [lte](fp.md#lte)
- [matchChromaChannel](fp.md#matchchromachannel)
- [max](fp.md#max)
- [min](fp.md#min)
- [normalize](fp.md#normalize)
- [random](fp.md#random)
- [sortedArr](fp.md#sortedarr)

## Functions

### adjustHue

▸ **adjustHue**(`value?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `0` |

#### Returns

`number`

#### Defined in

fp/number/adjustHue.ts:3

___

### colorObj

▸ **colorObj**(`factor`, `callback`): (`color`: [`Color`](paramTypes.md#color)) => \{ `name`: [`Color`](paramTypes.md#color) = color }

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](paramTypes.md#factor) |
| `callback` | [`callback`](paramTypes.md#callback) |

#### Returns

`fn`

▸ (`color`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](paramTypes.md#color) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | [`Color`](paramTypes.md#color) |

#### Defined in

fp/object/colorObj.ts:4

___

### colorObjArr

▸ **colorObjArr**(`factor`, `callback`): (`colors`: [`Color`](paramTypes.md#color)[]) => \{ `factor`: [`Factor`](paramTypes.md#factor) ; `name`: [`Color`](paramTypes.md#color)  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | [`Factor`](paramTypes.md#factor) |
| `callback` | `any` |

#### Returns

`fn`

▸ (`colors`): \{ `factor`: [`Factor`](paramTypes.md#factor) ; `name`: [`Color`](paramTypes.md#color)  }[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](paramTypes.md#color)[] |

##### Returns

\{ `factor`: [`Factor`](paramTypes.md#factor) ; `name`: [`Color`](paramTypes.md#color)  }[]

#### Defined in

fp/array/colorObjArr.ts:16

___

### customConcat

▸ **customConcat**(`hue`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `hue` | `object` |

#### Returns

`number`[]

#### Defined in

fp/object/customConcat.ts:3

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

#### Defined in

fp/object/customFindKey.ts:14

___

### customSort

▸ **customSort**(`order`, `factor?`): (`a`: `any`, `b`: `any`) => `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | [`Order`](paramTypes.md#order) | Either ascending or descending. |
| `factor?` | [`Factor`](paramTypes.md#factor) | The property to query. |

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

**`Description`**

Helper function for native sorting method for arrays.

#### Defined in

fp/array/customSort.ts:10

___

### expressionParser

▸ **expressionParser**(`src`, `channel`, `value`): `number`

Performs arithmetic operations on colors by passing the arithmetic operator from the value if it is a string. It requires the src variable to be declared in the global scope of the invoking func.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Color`](paramTypes.md#color) | The color object. |
| `channel` | `string` | The channel to set. |
| `value` | `string` | The value to apply. |

#### Returns

`number`

#### Defined in

fp/string/expressionParser.ts:10

___

### filteredArr

▸ **filteredArr**(`factor`, `cb?`): (`colors`: [`Color`](paramTypes.md#color)[], `start`: `string` \| `number`, `end`: `number`) => [`Color`](paramTypes.md#color)[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factor` | [`Factor`](paramTypes.md#factor) | The property to query and use as filtering criteria |
| `cb?` | [`callback`](paramTypes.md#callback) | The function to use for comparison |

#### Returns

`fn`

The filtered array

▸ (`colors`, `start`, `end`): [`Color`](paramTypes.md#color)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](paramTypes.md#color)[] |
| `start` | `string` \| `number` |
| `end` | `number` |

##### Returns

[`Color`](paramTypes.md#color)[]

**`Description`**

Filters an array according to the value of a color's queried factor

#### Defined in

fp/array/filteredArr.ts:14

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

#### Defined in

fp/number/floorCeil.ts:10

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

#### Defined in

fp/number/comparison.ts:4

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

#### Defined in

fp/number/comparison.ts:6

___

### inRange

▸ **inRange**(`number`, `start`, `end?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |
| `start` | `number` |
| `end?` | `number` |

#### Returns

`boolean`

#### Defined in

fp/number/inRange.ts:3

___

### isInt

▸ **isInt**(`num`): `boolean`

Checks if a number is a float.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to query |

#### Returns

`boolean`

True if the number is an integer else false

#### Defined in

fp/number/isInt.ts:6

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

#### Defined in

fp/number/comparison.ts:5

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

#### Defined in

fp/number/comparison.ts:7

___

### matchChromaChannel

▸ **matchChromaChannel**(`colorSpace`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorSpace` | `string` | The color space to match saturation/chroma channel. |

#### Returns

`string`

The mode channel string passed to getChannel()

**`Function`**

Matches the chroma/saturation channel of any compliant color space

#### Defined in

fp/string/matchChromaChannel.ts:9

___

### max

▸ **max**(`array`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve maximum value |

#### Returns

`number`

The largest number in the array

**`Description`**

Gets the largest value in an array

#### Defined in

fp/array/min_max.ts:43

___

### min

▸ **min**(`array`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array to retrieve minimum value |

#### Returns

`number`

The smallest number in the array

**`Description`**

Gets the smallest value in an array

#### Defined in

fp/array/min_max.ts:35

___

### normalize

▸ **normalize**(`num`, `start`, `end`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `start` | `number` |
| `end` | `number` |

#### Returns

`number`

**`Description`**

Normalizes passed in values to 0 and 1

#### Defined in

fp/number/normalize.ts:6

___

### random

▸ **random**(`min`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

fp/number/random.ts:1

___

### sortedArr

▸ **sortedArr**(`factor`, `callback`, `order`, `colorObj?`): (`colors`: [`Color`](paramTypes.md#color)[]) => `any`[]

Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `factor` | [`Factor`](paramTypes.md#factor) | `undefined` | The property to query |
| `callback` | [`callback`](paramTypes.md#callback) | `undefined` | The function to use for comparison. |
| `order` | [`Order`](paramTypes.md#order) | `undefined` | - |
| `colorObj` | `boolean` | `false` | - |

#### Returns

`fn`

An array of colors or color objects.

▸ (`colors`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`Color`](paramTypes.md#color)[] |

##### Returns

`any`[]

#### Defined in

fp/array/sortedArr.ts:12
