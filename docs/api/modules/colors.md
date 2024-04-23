[huetiful-js](../README.md) / colors

# Module: colors

## Type Aliases

### ScaleValues

Ƭ **ScaleValues**: ``"050"`` \| ``"100"`` \| ``"200"`` \| ``"300"`` \| ``"400"`` \| ``"500"`` \| ``"600"`` \| ``"700"`` \| ``"800"`` \| ``"900"`` \| ``"950"``

The value of the Tailwind color.

#### Defined in

[types/types.d.ts:289](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L289)

___

### TailwindColorFamilies

Ƭ **TailwindColorFamilies**: ``"indigo"`` \| ``"gray"`` \| ``"zinc"`` \| ``"neutral"`` \| ``"stone"`` \| ``"red"`` \| ``"orange"`` \| ``"amber"`` \| ``"yellow"`` \| ``"lime"`` \| ``"green"`` \| ``"emerald"`` \| ``"teal"`` \| ``"sky"`` \| ``"blue"`` \| ``"violet"`` \| ``"purple"`` \| ``"fuchsia"`` \| ``"pink"`` \| ``"rose"``

Color families in the default TailwindCSS palette.

#### Defined in

[types/types.d.ts:305](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L305)

## Functions

### colors

▸ **colors**(`shade`, `value`): `string` \| `string`[]

Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If called with no parameters, it returns an array of colors from `050` to `900`. If called with parameter will return the specified shade value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shade` | [`TailwindColorFamilies`](colors.md#tailwindcolorfamilies) \| ``"all"`` | The hue family to return. |
| `value` | [`ScaleValues`](colors.md#scalevalues) | The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid. |

#### Returns

`string` \| `string`[]

A hex string value or array of hex strings.

**`Example`**

```ts
import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
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

[src/colors.js:48](https://github.com/prjctimg/huetiful/blob/ed00af0/src/colors.js#L48)
