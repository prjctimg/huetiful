[huetiful-js](../README.md) / pair

# Module: pair

## Functions

### pair

▸ **pair**(`color`, `options`): `string` \| `number` \| `boolean` \| `ColorObject` \| [`ColorToken`](alpha.md#colortoken)[]

Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | The color to return a paired color scheme from. |
| `options` | `PairedSchemeOptions` | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

`string` \| `number` \| `boolean` \| `ColorObject` \| [`ColorToken`](alpha.md#colortoken)[]

An array containing the paired scheme.Preserves the `ColorToken` type of the passed in color.

**`Example`**

```ts
import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[src/pair.js:26](https://github.com/prjctimg/huetiful/blob/ed00af0/src/pair.js#L26)
