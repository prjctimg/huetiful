[huetiful-js](../README.md) / earthtone

# Module: earthtone

## Functions

### earthtone

▸ **earthtone**(`color`, `options?`): [`ColorToken`](alpha.md#colortoken) \| [`ColorToken`](alpha.md#colortoken)[]

Creates a color scale between an earthtone and any color token using spline interpolators on the channels.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | `undefined` | The color to interpolate an earth tone with. |
| `options` | `Object` | `undefined` | Optional overrides for customising interpolation and easing functions. |
| `options.closed` | `boolean` | `false` | - |
| `options.colorspace` | `string` | `'jch'` | - |
| `options.method` | `string` | `''` | - |

#### Returns

[`ColorToken`](alpha.md#colortoken) \| [`ColorToken`](alpha.md#colortoken)[]

Collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { earthtone } from 'huetiful-js'

console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]
```

#### Defined in

[src/earthtone.js:27](https://github.com/prjctimg/huetiful/blob/ed00af0/src/earthtone.js#L27)
