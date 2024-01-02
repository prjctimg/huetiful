[huetiful-js](../README.md) / [Modules](../modules.md) / [colors](../modules/colors.md) / ColorArray

# Class: ColorArray

[colors](../modules/colors.md).ColorArray

## Hierarchy

- `Array`

  ↳ **`ColorArray`**

## Table of contents

### Constructors

- [constructor](colors.ColorArray.md#constructor)

### Properties

- [[unscopables]](colors.ColorArray.md#[unscopables])
- [length](colors.ColorArray.md#length)
- [[species]](colors.ColorArray.md#[species])

### Methods

- [[iterator]](colors.ColorArray.md#[iterator])
- [concat](colors.ColorArray.md#concat)
- [copyWithin](colors.ColorArray.md#copywithin)
- [discoverPalettes](colors.ColorArray.md#discoverpalettes)
- [entries](colors.ColorArray.md#entries)
- [every](colors.ColorArray.md#every)
- [fill](colors.ColorArray.md#fill)
- [filter](colors.ColorArray.md#filter)
- [filterByContrast](colors.ColorArray.md#filterbycontrast)
- [filterByDistance](colors.ColorArray.md#filterbydistance)
- [filterByHue](colors.ColorArray.md#filterbyhue)
- [filterByLightness](colors.ColorArray.md#filterbylightness)
- [filterByLuminance](colors.ColorArray.md#filterbyluminance)
- [filterBySaturation](colors.ColorArray.md#filterbysaturation)
- [find](colors.ColorArray.md#find)
- [findIndex](colors.ColorArray.md#findindex)
- [forEach](colors.ColorArray.md#foreach)
- [getFarthestHue](colors.ColorArray.md#getfarthesthue)
- [getFarthestLightness](colors.ColorArray.md#getfarthestlightness)
- [getNearestHue](colors.ColorArray.md#getnearesthue)
- [getNearestLightness](colors.ColorArray.md#getnearestlightness)
- [indexOf](colors.ColorArray.md#indexof)
- [interpolateSpline](colors.ColorArray.md#interpolatespline)
- [join](colors.ColorArray.md#join)
- [keys](colors.ColorArray.md#keys)
- [lastIndexOf](colors.ColorArray.md#lastindexof)
- [map](colors.ColorArray.md#map)
- [output](colors.ColorArray.md#output)
- [pop](colors.ColorArray.md#pop)
- [push](colors.ColorArray.md#push)
- [reduce](colors.ColorArray.md#reduce)
- [reduceRight](colors.ColorArray.md#reduceright)
- [reverse](colors.ColorArray.md#reverse)
- [shift](colors.ColorArray.md#shift)
- [slice](colors.ColorArray.md#slice)
- [some](colors.ColorArray.md#some)
- [sort](colors.ColorArray.md#sort)
- [sortByContrast](colors.ColorArray.md#sortbycontrast)
- [sortByDistance](colors.ColorArray.md#sortbydistance)
- [sortByHue](colors.ColorArray.md#sortbyhue)
- [sortByLightness](colors.ColorArray.md#sortbylightness)
- [sortByLuminance](colors.ColorArray.md#sortbyluminance)
- [sortBySaturation](colors.ColorArray.md#sortbysaturation)
- [splice](colors.ColorArray.md#splice)
- [toLocaleString](colors.ColorArray.md#tolocalestring)
- [toString](colors.ColorArray.md#tostring)
- [unshift](colors.ColorArray.md#unshift)
- [values](colors.ColorArray.md#values)
- [from](colors.ColorArray.md#from)
- [isArray](colors.ColorArray.md#isarray)
- [of](colors.ColorArray.md#of)

## Constructors

### constructor

• **new ColorArray**(`colors`): [`ColorArray`](colors.ColorArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | [`ColorToken`](../modules/types.md#colortoken)[] |

#### Returns

[`ColorArray`](colors.ColorArray.md)

#### Overrides

Array.constructor

## Properties

### [unscopables]

• `Readonly` **[unscopables]**: `Object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `[unscopables]?` | `boolean` | Is an object whose properties have the value 'true' when they will be absent when used in a 'with' statement. |
| `length?` | `boolean` | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |
| `[iterator]?` | {} | - |
| `concat?` | {} | - |
| `copyWithin?` | {} | - |
| `entries?` | {} | - |
| `every?` | {} | - |
| `fill?` | {} | - |
| `filter?` | {} | - |
| `find?` | {} | - |
| `findIndex?` | {} | - |
| `forEach?` | {} | - |
| `indexOf?` | {} | - |
| `join?` | {} | - |
| `keys?` | {} | - |
| `lastIndexOf?` | {} | - |
| `map?` | {} | - |
| `pop?` | {} | - |
| `push?` | {} | - |
| `reduce?` | {} | - |
| `reduceRight?` | {} | - |
| `reverse?` | {} | - |
| `shift?` | {} | - |
| `slice?` | {} | - |
| `some?` | {} | - |
| `sort?` | {} | - |
| `splice?` | {} | - |
| `toLocaleString?` | {} | - |
| `toString?` | {} | - |
| `unshift?` | {} | - |
| `values?` | {} | - |

#### Inherited from

Array.[unscopables]

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.[species]

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`any`\>

Iterator

#### Returns

`IterableIterator`\<`any`\>

#### Inherited from

Array.[iterator]

___

### concat

▸ **concat**(`...items`): `any`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`\<`any`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`any`[]

#### Inherited from

Array.concat

▸ **concat**(`...items`): `any`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `any`[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`any`[]

#### Inherited from

Array.concat

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`ColorArray`](colors.ColorArray.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

#### Inherited from

Array.copyWithin

___

### discoverPalettes

▸ **discoverPalettes**(`schemeType?`): `object` \| [`ColorToken`](../modules/types.md#colortoken)[]

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |

#### Returns

`object` \| [`ColorToken`](../modules/types.md#colortoken)[]

An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Example`**

```ts
import { discoverPalettes } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
 "#4e0000",
 "#3e0000",
 "#310000",
]

console.log(load(sample).discoverPalettes(sample, "tetradic").output())
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

___

### entries

▸ **entries**(): `IterableIterator`\<[`number`, `any`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, `any`]\>

#### Inherited from

Array.entries

___

### every

▸ **every**\<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`ColorArray`](colors.ColorArray.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

#### Inherited from

Array.fill

___

### filter

▸ **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

▸ **filter**(`predicate`, `thisArg?`): `any`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`any`[]

#### Inherited from

Array.filter

___

### filterByContrast

▸ **filterByContrast**(`against`, `startContrast?`, `endContrast?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | `undefined` | - |
| `startContrast` | `number` | `0.05` | The minimum end of the contrast range. |
| `endContrast?` | `number` | `undefined` | The maximum end of the contrast range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

**`Example`**

```ts
import { filterByContrast } from 'huetiful-js'

let sample = [
'#00ffdc',
'#00ff78',
'#00c000',
'#007e00',
'#164100',
'#ffff00',
'#310000',
'#3e0000',
'#4e0000',
'#600000',
'#720000',
]

console.log(filterByContrast(sample, 'green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

___

### filterByDistance

▸ **filterByDistance**(`against`, `startDistance?`, `endDistance?`, `mode?`, `weights?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | `undefined` | - |
| `startDistance` | `number` | `0.05` | The minimum end of the distance range. |
| `endDistance?` | `number` | `undefined` | The maximum end of the distance range. |
| `mode?` | [`ColorSpaces`](../modules/types.md#colorspaces) | `undefined` | The color space to calculate the distance in . |
| `weights?` | [`number`, `number`, `number`, `number`] | `undefined` | The weighting values to pass to the Euclidean function. Default is [1,1,1,0]. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

**`Example`**

```ts
import { filterByDistance } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
]

console.log(filterByDistance(sample, "yellow", 0.1))
// [ '#ffff00' ]
```

___

### filterByHue

▸ **filterByHue**(`startHue?`, `endHue?`): [`ColorArray`](colors.ColorArray.md)

Returns colors in the specified hue ranges between 0 to 360.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startHue` | `number` | `0` | The minimum end of the hue range. |
| `endHue` | `number` | `360` | The maximum end of the hue range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of the filtered colors.

**`Example`**

```ts
let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

filterByHue(sample, 20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
```

___

### filterByLightness

▸ **filterByLightness**(`startLightness?`, `endLightness?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified lightness range. The range is between 0 and 100.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startLightness` | `number` | `5` | The minimum end of the lightness range. |
| `endLightness` | `number` | `100` | The maximum end of the lightness range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

**`Example`**

```ts
import { filterByLightness } from 'huetiful-js'
let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

filterByLightness(sample, 20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
```

___

### filterByLuminance

▸ **filterByLuminance**(`startLuminance?`, `endLuminance?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified luminance range. The range is normalised to [0,1].

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startLuminance` | `number` | `0.05` | The minimum end of the luminance range. |
| `endLuminance` | `number` | `1` | The maximum end of the luminance range. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

**`Example`**

```ts
import { filterByLuminance } from 'huetiful-js'
let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

filterByLuminance(sample, 0.4, 0.9)

// [ '#00ffdc', '#00ff78' ]
```

___

### filterBySaturation

▸ **filterBySaturation**(`startSaturation?`, `endSaturation?`, `mode?`): [`ColorArray`](colors.ColorArray.md)

Returns an array of colors in the specified saturation range. The range is normalised to [0,1].

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startSaturation` | `number` | `0.05` | The minimum end of the saturation range. |
| `endSaturation` | `number` | `1` | The maximum end of the saturation range. |
| `mode?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

Array of filtered colors.

**`Example`**

```ts
import { filterByContrast } from 'huetiful-js'

let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

console.log(filterByContrast(sample, 'green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

___

### find

▸ **find**\<`S`\>(`predicate`, `thisArg?`): `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `obj`: `any`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`S`

#### Inherited from

Array.find

▸ **find**(`predicate`, `thisArg?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `obj`: `any`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`any`

#### Inherited from

Array.find

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `obj`: `any`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

___

### getFarthestHue

▸ **getFarthestHue**(`colorSpace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorSpace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(output).getFarthestHue('lch'))
// 273.54920266436477
```

___

### getFarthestLightness

▸ **getFarthestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest lightness value in the colors passed in or a custom object.

**`Example`**

```ts
import { maxLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getFarthestLightness('lch', true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

___

### getNearestHue

▸ **getNearestHue**(`colorSpace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest hue value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorSpace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | The mode color space to perform the computation in. |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(sample).getNearestHue('lch'))
// 12.462831644544274
```

___

### getNearestLightness

▸ **getNearestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness value from the passed in colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colorspace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | `undefined` | - |
| `colorObj` | `boolean` | `false` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest lightness value in the colors passed in or a custom object.

**`Example`**

```ts
import { minLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getNearestLightness('lch', true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `any` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

___

### interpolateSpline

▸ **interpolateSpline**(`colorspace?`, `samples?`, `kind?`, `closed?`, `options?`): [`ColorToken`](../modules/types.md#colortoken)[]

Returns a spline based interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `samples?` | `number` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | The type of the spline interpolation method. Default is basis. |
| `closed?` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | [`InterpolatorOptions`](../modules/types.md#interpolatoroptions) | Optional channel specific overrides. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken)[]

A hexadecimal representation of the resultant color.

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

___

### keys

▸ **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

Array.keys

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `any` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

___

### map

▸ **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

___

### output

▸ **output**(): [`ColorToken`](../modules/types.md#colortoken)

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

Returns the result value from the chain.

**`Method`**

___

### pop

▸ **pop**(): `any`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`any`

#### Inherited from

Array.pop

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `any`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

___

### reduce

▸ **reduce**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`any`

#### Inherited from

Array.reduce

▸ **reduce**(`callbackfn`, `initialValue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` |
| `initialValue` | `any` |

#### Returns

`any`

#### Inherited from

Array.reduce

▸ **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `any`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`any`

#### Inherited from

Array.reduceRight

▸ **reduceRight**(`callbackfn`, `initialValue`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `any` |
| `initialValue` | `any` |

#### Returns

`any`

#### Inherited from

Array.reduceRight

▸ **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

___

### reverse

▸ **reverse**(): `any`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`any`[]

#### Inherited from

Array.reverse

___

### shift

▸ **shift**(): `any`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`any`

#### Inherited from

Array.shift

___

### slice

▸ **slice**(`start?`, `end?`): `any`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`any`[]

#### Inherited from

Array.slice

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

___

### sort

▸ **sort**(`compareFn?`): [`ColorArray`](colors.ColorArray.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `any`, `b`: `any`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`ColorArray`](colors.ColorArray.md)

#### Inherited from

Array.sort

___

### sortByContrast

▸ **sortByContrast**(`against`, `order?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
import { sortByContrast } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(sortByContrast(sample, 'yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(sortByContrast(sample, 'yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
```

___

### sortByDistance

▸ **sortByDistance**(`against`, `order?`, `options?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `options?` | [`ColorDistanceOptions`](../modules/types.md#colordistanceoptions) | - |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
import { sortByDistance } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc', {
   mode: 'lch',
 })
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc', {
   mode: 'lch',
 })
)

// [ 'green', 'brown', 'red', 'purple' ]
```

___

### sortByHue

▸ **sortByHue**(`order`, `colorspace?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `order` | ``"asc"`` \| ``"desc"`` | `undefined` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace` | `string` | `'jch'` | The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = sortByHue(sample);
console.log(sorted)
// [
 '#310000', '#3e0000',
 '#4e0000', '#600000',
 '#720000', '#ffff00',
 '#164100', '#00c000',
 '#007e00', '#00ff78',
 '#00ffdc'
]

let sortedDescending = sortByHue(sample,'desc');
console.log(sortedDescending)
// [
 '#00ffdc', '#00ff78',
 '#007e00', '#00c000',
 '#164100', '#ffff00',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

___

### sortByLightness

▸ **sortByLightness**(`order?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their lightness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
import { sortByLightness } from "huetiful-js";

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
]

sortByLightness(sample)

// [
 '#310000', '#3e0000',
 '#4e0000', '#600000',
 '#720000', '#164100',
 '#007e00', '#00c000',
 '#00ff78', '#00ffdc',
 '#ffff00'
]

sortByLightness(sample,'desc')

// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

___

### sortByLuminance

▸ **sortByLuminance**(`order?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to the relative brightness as defined by WCAG definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
import { sortByLuminance } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = sortByLuminance(sample)
console.log(sorted)
// [
 '#310000', '#3e0000',
 '#4e0000', '#600000',
 '#720000', '#164100',
 '#007e00', '#00c000',
 '#00ff78', '#00ffdc',
 '#ffff00'
]

let sortedDescending = sortByLuminance(sample, "desc");
console.log(sortedDescending)
// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

___

### sortBySaturation

▸ **sortBySaturation**(`order`, `mode?`): [`ColorArray`](colors.ColorArray.md)

Sorts colors according to their saturation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `mode?` | [`HueColorSpaces`](../modules/types.md#huecolorspaces) | The mode color space to compute the saturation value in. The default is jch . |

#### Returns

[`ColorArray`](colors.ColorArray.md)

An array of the sorted color values.

**`Example`**

```ts
import { sortBySaturation } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = sortBySaturation(sample);
console.log(sorted);

// [
 '#310000', '#3e0000',
 '#164100', '#4e0000',
 '#600000', '#720000',
 '#00ffdc', '#007e00',
 '#00ff78', '#00c000',
 '#ffff00'
]

let sortedDescending = sortBySaturation(sample,'desc');
console.log(sortedDescending)
// [
 '#ffff00', '#00c000',
 '#00ff78', '#007e00',
 '#00ffdc', '#720000',
 '#600000', '#4e0000',
 '#164100', '#3e0000',
 '#310000'
]
```

___

### splice

▸ **splice**(`start`, `deleteCount?`): `any`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`any`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

▸ **splice**(`start`, `deleteCount`, `...items`): `any`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `any`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`any`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `any`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

___

### values

▸ **values**(): `IterableIterator`\<`any`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<`any`\>

#### Inherited from

Array.values

___

### from

▸ **from**\<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`\<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

▸ **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`\<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

▸ **from**\<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

▸ **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

___

### isArray

▸ **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

___

### of

▸ **of**\<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of
