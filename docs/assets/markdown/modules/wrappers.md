# Module: wrappers

## Table of contents

### Classes

- [Color](../classes/wrappers.Color.md)
- [ColorArray](../classes/wrappers.ColorArray.md)

### Functions

- [color](wrappers.md#color)
- [load](wrappers.md#load)

## Functions

### color

▸ **color**(`color`): [`Color`](../classes/wrappers.Color.md)

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color token to bind. |

#### Returns

[`Color`](../classes/wrappers.Color.md)

A new Color class with all the utilities that take a single color as the first parameter bound to its prototype.

**`Example`**

```ts

```

#### Defined in

[wrappers.d.ts:1468](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1468)

___

### load

▸ **load**(`collection`): [`ColorArray`](../classes/wrappers.ColorArray.md)

A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> |

#### Returns

[`ColorArray`](../classes/wrappers.ColorArray.md)

#### Defined in

[wrappers.d.ts:1025](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1025)
