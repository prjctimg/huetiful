[huetiful-js](../README.md) / alpha

# Module: alpha

## Type Aliases

### ColorToken

Ƭ **ColorToken**: `number` \| `ColorObject` \| `ColorTuple` \| `boolean` \| `string`

Any recognizable color token.

#### Defined in

[types/types.d.ts:246](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L246)

## Functions

### alpha

▸ **alpha**(`color?`, `amount`): [`ColorToken`](alpha.md#colortoken)

Returns the color token's alpha channel value if the the `amount` parameter is not passed in else it sets the color token's alpha channel with the `amount` specified.

* Also supports expressions for the `amount` parameter. For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `* , - , / , +`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | `'#000'` | The color with the targeted opacity/alpha channel. |
| `amount` | `string` \| `number` | `undefined` | The value to apply to the opacity channel. The value is between [0,1] |

#### Returns

[`ColorToken`](alpha.md#colortoken)

Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
// Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
```

#### Defined in

[src/alpha.js:31](https://github.com/prjctimg/huetiful/blob/ed00af0/src/alpha.js#L31)
