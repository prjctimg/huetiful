[huetiful-js](../README.md) / temp

# Module: temp

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[temp.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/temp.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[temp.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/temp.js#L2)

## Functions

### temp

▸ **temp**(`color`): ``"cool"`` \| ``"warm"``

Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to check the temperature. |

#### Returns

``"cool"`` \| ``"warm"``

True if the color is cool else false.

**`Example`**

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

#### Defined in

[temp.js:39](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/temp.js#L39)
