[huetiful-js](../README.md) / scheme

# Module: scheme

## Type Aliases

### Collection

Ƭ **Collection**\<\>: `Collection`

#### Defined in

[scheme.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/scheme.js#L3)

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[scheme.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/scheme.js#L2)

## Functions

### scheme

▸ **scheme**(`baseColor?`, `options`): `any`

Generates a randomised classic color scheme from the passed in color.

The classic palette types are:

* `triadic` - Picks 3 colors 120 degrees apart.
* `tetradic` - Picks 4 colors 90 degrees apart.
* `complimentary` - Picks 2 colors 180 degrees apart.
* `monochromatic` - Picks `num` amount of colors from the same hue family   .
* `analogous` - Picks 3 colors 12 degrees apart.

The `kind` parameter can either be a string or an array:

* If it is an array, each element should be a `kind` of palette. 
It will return a color map with the array elements as keys.
Duplicate values are simply ignored.
* If it is a string it will return an array of colors of the specified `kind` of palette.
* If it is falsy it will return a color map of all palettes.

Note that the `num` parameter works on the `monochromatic` palette type only.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseColor` | `string` | `'cyan'` | The color to create the palette(s) from. |
| `options` | `SchemeOptions` | `undefined` | Optional overrides. |

#### Returns

`any`

**`Example`**

```ts
import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[scheme.js:53](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/scheme.js#L53)
