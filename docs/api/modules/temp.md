[huetiful-js](../README.md) / temp

# Module: temp

## Functions

### temp

▸ **temp**(`color`): ``"cool"`` \| ``"warm"``

Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | The color to check the temperature. |

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

[src/temp.js:38](https://github.com/prjctimg/huetiful/blob/ed00af0/src/temp.js#L38)
