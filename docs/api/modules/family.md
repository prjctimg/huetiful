[huetiful-js](../README.md) / family

# Module: family

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[family.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/family.js#L3)

___

### HueFamily

Ƭ **HueFamily**: ``"red-purple"`` \| ``"red"`` \| ``"yellow-red"`` \| ``"yellow"`` \| ``"green-yellow"`` \| ``"green"`` \| ``"blue-green"`` \| ``"blue"`` \| ``"purple-blue"`` \| ``"purple"``

Basic color families and their overtoned variants,

#### Defined in

types.d.ts:340

## Functions

### family

▸ **family**(`color`): [`HueFamily`](family.md#huefamily)

Gets the hue family which a color belongs to with the overtone included (if it has one.).

For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to query its shade or hue family. |

#### Returns

[`HueFamily`](family.md#huefamily)

**`Example`**

```ts
import { family } from 'huetiful-js'

console.log(family("#310000"))
// 'red'
```

#### Defined in

[family.js:23](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/family.js#L23)
