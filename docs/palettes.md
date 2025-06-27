## colors()

> **colors**(`shade?`, `value?`): `string`[]

Defined in: palettes/index.ts:853

Returns TailwindCSS color value(s) from the default palette.

The function behaves as follows:

- If called with both `shade` and `value` parameters, it returns that color as a hex string. For example `'blue'` and `'500'` would return the equivalent of
  `blue-500`.
- If called with no parameters or just the `'all'` parameter as the `shade`, it returns an array of colors from `'050'` to `'900'` for every `shade`.
- If the `shade ` is `'all'` and the `value` is specified, it returns an array of colors at the specified `value` for each `shade`.
  :::tip
  To specify `'050'` as a number you just pass `50`. Values are all valid as string or number for example `'100'` and`100` .
  :::

### Parameters

#### shade?

The hue family to return.

[`Tailwind`](types.md#tailwind) | `"all"`

#### value?

[`ScaleValues`](types.md#scalevalues)

The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid.

### Returns

`string`[]

### Example

```ts
import { colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
console.log(colors('red'));
// [
     '#fef2f2', '#fee2e2',
     '#fecaca', '#fca5a5',
     '#f87171', '#ef4444',
     '#dc2626', '#b91c1c',
     '#991b1b', '#7f1d1d'
]

console.log(colors('red','900'));
// '#7f1d1d'
```

---

## diverging()

> **diverging**\<`Scheme`\>(`scheme?`): `Scheme`[]

Defined in: palettes/index.ts:538

A wrapper function for ColorBrewer's map of diverging color schemes.

### Type Parameters

#### Scheme

`Scheme` _extends_ [`DivergingScheme`](types.md#divergingscheme)

### Parameters

#### scheme?

The name of the scheme.

`Scheme` | `Scheme`[]

### Returns

`Scheme`[]

### Example

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

---

## nearest()

> **nearest**(`collection`, `options`): `any`

Defined in: palettes/index.ts:794

Returns the nearest color(s) in a collection as compared `against` the passed in color using the `differenceHyab` metric function.

- To get the nearest color from the Tailwind CSS default palette pass in the string `tailwind` as the `collection` parameter.
- If the `num` parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first

### Parameters

#### collection

The collection of colors to search for nearest colors.

[`Collection`](types.md#collection) | `"tailwind"`

#### options

Optional overrides.

##### against

`"cyan"`

##### num

`1`

### Returns

`any`

### Example

```ts
let cols = colors("all", "500");

console.log(nearest(cols, "blue", 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

---

## qualitative()

> **qualitative**\<`Scheme`\>(`scheme?`): `Scheme`[]

Defined in: palettes/index.ts:681

A wrapper function for ColorBrewer's map of qualitative color schemes.

### Type Parameters

#### Scheme

`Scheme` _extends_ [`QualitativeScheme`](types.md#qualitativescheme)

### Parameters

#### scheme?

The name of the scheme

`Scheme` | `Scheme`[]

### Returns

`Scheme`[]

### Example

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

---

## sequential()

> **sequential**\<`Scheme`\>(`scheme?`): `Scheme`[]

Defined in: palettes/index.ts:302

A wrapper function for ColorBrewer's map of sequential color schemes.

### Type Parameters

#### Scheme

`Scheme` _extends_ [`SequentialScheme`](types.md#sequentialscheme)

### Parameters

#### scheme?

The name of the scheme.

`Scheme` | `Scheme`[]

### Returns

`Scheme`[]

A collection of colors in the specified colorspace. The default is hex if `colorspace` is `undefined.`

### Example

```ts
import { sequential } from 'huetiful-js'

console.log(sequential("OrRd"))

// [
 '#fff7ec', '#fee8c8',
 '#fdd49e', '#fdbb84',
 '#fc8d59', '#ef6548',
 '#d7301f', '#b30000',
 '#7f0000'
]
```
