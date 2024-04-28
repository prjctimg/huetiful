[huetiful-js](../README.md) / earthtone

# Module: earthtone

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[earthtone.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/earthtone.js#L2)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[earthtone.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/earthtone.js#L3)

## Functions

### earthtone

▸ **earthtone**(`baseColor`, `options`): `string` \| `string`[]

Creates a color scale between an earth tone and any color token using spline interpolation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to interpolate an earth tone with. |
| `options` | `EarthtoneOptions` | Optional overrides for customising interpolation and easing functions. |

#### Returns

`string` \| `string`[]

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[earthtone.js:27](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/earthtone.js#L27)
