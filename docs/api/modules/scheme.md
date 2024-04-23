[huetiful-js](../README.md) / scheme

# Module: scheme

## Functions

### scheme

▸ **scheme**(`kind?`): `Collection`

Generates a randomised classic color scheme from a single color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `kind` | `string` | `'analogous'` | Any classic color scheme either . * |

#### Returns

`Collection`

A collection of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[src/scheme.js:23](https://github.com/prjctimg/huetiful/blob/ed00af0/src/scheme.js#L23)
