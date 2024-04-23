[huetiful-js](../README.md) / brewer

# Module: brewer

## Type Aliases

### DivergingScheme

Ƭ **DivergingScheme**: ``"Spectral"`` \| ``"RdYlGn"`` \| ``"RdBu"`` \| ``"PiYG"`` \| ``"PRGn"`` \| ``"RdYlBu"`` \| ``"BrBG"`` \| ``"RdGy"`` \| ``"PuOr"``

The `diverging` color scheme in the ColorBrewer colormap.

#### Defined in

[types/types.d.ts:195](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L195)

___

### QualitativeScheme

Ƭ **QualitativeScheme**: ``"Set2"`` \| ``"Accent"`` \| ``"Set1"`` \| ``"Set3"`` \| ``"Dark2"`` \| ``"Paired"`` \| ``"Pastel2"`` \| ``"Pastel1"``

The `qualitative` color scheme in the ColorBrewer colormap.

#### Defined in

[types/types.d.ts:209](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L209)

___

### SequentialScheme

Ƭ **SequentialScheme**: ``"OrRd"`` \| ``"PuBu"`` \| ``"BuPu"`` \| ``"Oranges"`` \| ``"BuGn"`` \| ``"YlOrBr"`` \| ``"YlGn"`` \| ``"Reds"`` \| ``"RdPu"`` \| ``"Greens"`` \| ``"YlGnBu"`` \| ``"Purples"`` \| ``"GnBu"`` \| ``"Greys"`` \| ``"YlOrRd"`` \| ``"PuRd"`` \| ``"Blues"`` \| ``"PuBuGn"`` \| ``"Viridis"``

The `sequential` color scheme in the ColorBrewer colormap.

#### Defined in

[types/types.d.ts:222](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L222)

## Functions

### diverging

▸ **diverging**(`scheme`): `Collection`

A wrapper function for ColorBrewer's map of diverging color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`DivergingScheme`](brewer.md#divergingscheme) | The name of the scheme. |

#### Returns

`Collection`

The collection of colors from the specified `scheme`.

**`Example`**

```ts
import { diverging } from 'huetiful-js'

console.log(diverging("Spectral"))
//[
 '#7fc97f', '#beaed4',
 '#fdc086', '#ffff99',
 '#386cb0', '#f0027f',
 '#bf5b17', '#666666'
]
```

#### Defined in

[src/brewer.js:287](https://github.com/prjctimg/huetiful/blob/ed00af0/src/brewer.js#L287)

___

### qualitative

▸ **qualitative**(`scheme`): `Collection`

A wrapper function for ColorBrewer's map of qualitative color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`QualitativeScheme`](brewer.md#qualitativescheme) | The name of the scheme |

#### Returns

`Collection`

The collection of colors from the specified `scheme`.

**`Example`**

```ts
import { qualitative } from 'huetiful-js'

console.log(qualitative("Accent"))
// [
 '#7fc97f', '#beaed4',
 '#fdc086', '#ffff99',
 '#386cb0', '#f0027f',
 '#bf5b17', '#666666'
]
```

#### Defined in

[src/brewer.js:429](https://github.com/prjctimg/huetiful/blob/ed00af0/src/brewer.js#L429)

___

### sequential

▸ **sequential**(`scheme`): [`ColorToken`](alpha.md#colortoken) \| `Collection`

A wrapper function for ColorBrewer's map of sequential color schemes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheme` | [`SequentialScheme`](brewer.md#sequentialscheme) | The name of the scheme. |

#### Returns

[`ColorToken`](alpha.md#colortoken) \| `Collection`

A collection of colors in the specified colorspace. The default is hex if `colorspace` is `undefined.`

**`Example`**

```ts
import { sequential } from 'huetiful-js

console.log(sequential("OrRd"))

// [
 '#fff7ec', '#fee8c8',
 '#fdd49e', '#fdbb84',
 '#fc8d59', '#ef6548',
 '#d7301f', '#b30000',
 '#7f0000'
]
```

#### Defined in

[src/brewer.js:53](https://github.com/prjctimg/huetiful/blob/ed00af0/src/brewer.js#L53)
