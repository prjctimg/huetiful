[huetiful-js](../README.md) / mc

# Module: mc

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[mc.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/mc.js#L2)

## Functions

### mc

▸ **mc**(`modeChannel`): (`color`: `any`, `value?`: `string` \| `number`) => `any`

Sets the value of the specified channel on the passed in color.

If the `amount` parameter is `undefined` it gets the value of the specified channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modeChannel` | `string` | The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

▸ (`color`, `value?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |
| `value?` | `string` \| `number` |

##### Returns

`any`

**`Example`**

```ts
import { mc } from 'huetiful-js'

console.log(mc('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

[mc.js:23](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/mc.js#L23)
