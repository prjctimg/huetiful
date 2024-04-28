[huetiful-js](../README.md) / pair

# Module: pair

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[pair.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/pair.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[pair.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/pair.js#L2)

## Functions

### pair

▸ **pair**(`baseColor`, `options`): `any`

Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
The colors are then spline interpolated via white or black.

A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `any` | The color to return a paired color scheme from. |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

`any`

**`Example`**

```ts
import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,num:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[pair.js:29](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/pair.js#L29)
