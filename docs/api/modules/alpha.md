[huetiful-js](../README.md) / alpha

# Module: alpha

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[alpha.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/alpha.js#L2)

## Functions

### alpha

▸ **alpha**(`color`, `amount`): `string` \| `number`

Returns the color token's alpha channel value if the the `amount` parameter is not passed in else it sets the color token's alpha channel with the `amount` specified.

* Also supports math expressions as a `string` for the `amount` parameter. For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color with the opacity/alpha channel to retrieve or set. |
| `amount` | `string` \| `number` | The value to apply to the opacity channel. The value is between `[0,1]` |

#### Returns

`string` \| `number`

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

[alpha.js:31](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/alpha.js#L31)
