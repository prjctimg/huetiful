[huetiful-js](../README.md) / darken

# Module: darken

## Functions

### brighten

▸ **brighten**(`color`, `amount?`): [`ColorToken`](alpha.md#colortoken)

The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | `undefined` | The color to brighten. |
| `amount` | `number` | `0.4` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`ColorToken`](alpha.md#colortoken)

The brightened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { brighten } from "huetiful-js";

console.log(brighten('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[src/darken.js:48](https://github.com/prjctimg/huetiful/blob/ed00af0/src/darken.js#L48)

___

### darken

▸ **darken**(`color?`, `amount?`): [`ColorToken`](alpha.md#colortoken)

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | `'#fff'` | The color to darken. |
| `amount` | `number` | `0.3` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`. |

#### Returns

[`ColorToken`](alpha.md#colortoken)

The darkened color. Preserves the `ColorToken` type of the pased in color.

**`Example`**

```ts
import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[src/darken.js:19](https://github.com/prjctimg/huetiful/blob/ed00af0/src/darken.js#L19)
