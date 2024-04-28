[huetiful-js](../README.md) / lightness

# Module: lightness

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[lightness.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/lightness.js#L2)

## Functions

### brighten

▸ **brighten**(`color`, `amount`): `string`

The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to brighten. |
| `amount` | `number` | The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.1`. |

#### Returns

`string`

**`Example`**

```ts
import { brighten } from "huetiful-js";

console.log(brighten('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[lightness.js:47](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/lightness.js#L47)

___

### darken

▸ **darken**(`color`, `amount`): `string`

Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to darken. |
| `amount` | `number` | The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`. |

#### Returns

`string`

**`Example`**

```ts
import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646
```

#### Defined in

[lightness.js:30](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/lightness.js#L30)
