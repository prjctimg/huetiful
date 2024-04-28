[huetiful-js](../README.md) / overtone

# Module: overtone

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[overtone.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/overtone.js#L3)

## Functions

### overtone

▸ **overtone**(`color`): `string` \| ``false``

Returns the name of the hue family which is biasing the passed in color.

* If an achromatic color is passed in it returns the string `'gray'`
* If the color has no bias it returns `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to query its overtone. |

#### Returns

`string` \| ``false``

**`Example`**

```ts
import { overtone } from "huetiful-js";

console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
```

#### Defined in

[overtone.js:29](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/overtone.js#L29)
