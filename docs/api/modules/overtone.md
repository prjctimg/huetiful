[huetiful-js](../README.md) / overtone

# Module: overtone

## Functions

### overtone

▸ **overtone**(`color`): `string`

Returns the hue which is biasing the passed in color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | The color to query its overtone. |

#### Returns

`string`

The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.

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

[src/overtone.js:28](https://github.com/prjctimg/huetiful/blob/ed00af0/src/overtone.js#L28)
