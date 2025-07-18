## default()

> **default**\<`Options`\>(`collection`, `options?`): [`Collection`](../types.md#collection)

Defined in: collection/distribute.ts:27

distributes the `factor`(s) of a color in the collection at the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.

### Type Parameters

#### Options

`Options` _extends_ [`DistributionOptions`](../types.md#distributionoptions)

### Parameters

#### collection

[`Collection`](../types.md#collection)

the property you want to distribute to the colors in the collection for example `hue | luminance`

#### options?

`Options`

optional overrides to change the default configursation

### Returns

[`Collection`](../types.md#collection)
