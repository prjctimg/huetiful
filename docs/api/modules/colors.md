[huetiful-js](../README.md) / colors

# Module: colors

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[colors.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/colors.js#L3)

___

### ScaleValues

Ƭ **ScaleValues**: ``"050"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"`` \| ``"950"``

The value of the Tailwind color.

#### Defined in

types.d.ts:449

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

Color families in the default TailwindCSS palette.

#### Defined in

types.d.ts:465

## Functions

### colors

▸ **colors**(`shade`, `value`): `string` \| `string`[]

Returns TailwindCSS color value(s) from the default palette.

The function behaves as follows:

* If called with both `shade` and `value` parameters, it returns that color as a hex string. For example `'blue'` and `'500'` would return the equivalent of `blue-500`.
* If called with no parameters or just the `'all'` parameter as the `shade`, it returns an array of colors from `'050'` to `'900'` for every `shade`. 
* If the `shade ` is `'all'` and the `value` is specified, it returns an array of colors at the specified `value` for each `shade`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | [`TailwindColorFamilies`](colors.md#tailwindcolorfamilies) \| ``"all"`` | The hue family to return. |
| `value` | [`ScaleValues`](colors.md#scalevalues) | The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid. |

#### Returns

`string` \| `string`[]

**`Example`**

```ts
import { colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = colors("red");
console.log(red());
// [
 '#fef2f2', '#fee2e2',
 '#fecaca', '#fca5a5',
 '#f87171', '#ef4444',
 '#dc2626', '#b91c1c',
 '#991b1b', '#7f1d1d'
]

console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'
```

#### Defined in

[colors.js:53](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/colors.js#L53)
