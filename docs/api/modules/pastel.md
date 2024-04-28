[huetiful-js](../README.md) / pastel

# Module: pastel

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[pastel.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/pastel.js#L2)

## Functions

### pastel

▸ **pastel**(`baseColor`): `any`

Returns a random pastel variant of the passed in color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to return a pastel variant of. |

#### Returns

`any`

A random pastel color.

**`Example`**

```ts
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
```

#### Defined in

[pastel.js:22](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/pastel.js#L22)
