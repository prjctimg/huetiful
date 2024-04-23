[huetiful-js](../README.md) / family

# Module: family

## Functions

### family

▸ **family**(`color`): [`TailwindColorFamilies`](colors.md#tailwindcolorfamilies)

Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | The color to query its shade or hue family. |

#### Returns

[`TailwindColorFamilies`](colors.md#tailwindcolorfamilies)

The name of the hue family for example `red` or `blue-green`.

**`Example`**

```ts
import { family } from 'huetiful-js'

console.log(family("#310000"))
// 'red'
```

#### Defined in

[src/family.js:21](https://github.com/prjctimg/huetiful/blob/ed00af0/src/family.js#L21)
