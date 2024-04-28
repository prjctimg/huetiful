[huetiful-js](../README.md) / contrast

# Module: contrast

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[contrast.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/contrast.js#L2)

## Functions

### contrast

▸ **contrast**(`a`, `b`): `number`

Gets the contrast between the passed in colors.

Swapping color `a` and `b` in the parameter list doesn't change the resulting value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | First color to query. |
| `b` | `any` | The color to compare against. |

#### Returns

`number`

**`Example`**

```ts
import { contrast } from 'huetiful-js'

console.log(contrast("black", "white"));
// 21
```

#### Defined in

[contrast.js:22](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/contrast.js#L22)
