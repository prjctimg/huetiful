[huetiful-js](../README.md) / contrast

# Module: contrast

## Functions

### contrast

▸ **contrast**(`a`, `b`): `number`

Gets the contrast between the passed in colors. Swapping color `a` and `b` in the parameter list doesn't change the resulting value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ColorToken`](alpha.md#colortoken) | First color to query. |
| `b` | [`ColorToken`](alpha.md#colortoken) | The color to compare against. |

#### Returns

`number`

**`Example`**

```ts
import { contrast } from 'huetiful-js'

console.log(contrast("black", "white"));
// 21
```

#### Defined in

[src/contrast.js:20](https://github.com/prjctimg/huetiful/blob/ed00af0/src/contrast.js#L20)
