[@prjctimg/huetiful](huetiful.gitbook.io/README.md) / collection/distribute

## default()

> **default**\<`Options`\>(`collection`, `options?`): [`Collection`](huetiful.gitbook.io/types.md#collection)

Defined in: [collection/distribute.ts:27](https://github.com/prjctimg/huetiful/blob/0b456f741596cb40d2578e331d8e03e4c0a4eeb5/lib/collection/distribute.ts#L27)

distributes the `factor`(s) of a color in the collection at the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.

### Type Parameters

#### Options

`Options` _extends_ [`DistributionOptions`](huetiful.gitbook.io/types.md#distributionoptions)

### Parameters

#### collection

[`Collection`](huetiful.gitbook.io/types.md#collection)

the property you want to distribute to the colors in the collection for example `hue | luminance`

#### options?

`Options`

optional overrides to change the default configursation

### Returns

[`Collection`](huetiful.gitbook.io/types.md#collection)
