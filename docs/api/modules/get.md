[huetiful-js](../README.md) / get

# Module: get

## Functions

### get

▸ **get**(`mc`): (`color`: [`ColorToken`](alpha.md#colortoken)) => `number`

Gets the value of the specified channel on the passed in color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color. |

#### Returns

`fn`

▸ (`color`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) |

##### Returns

`number`

**`Example`**

```ts
import { get } from 'huetiful-js'

console.log(get('rgb.g')('#a1bd2f'))
// 0.7411764705882353
```

#### Defined in

[src/get.js:18](https://github.com/prjctimg/huetiful/blob/ed00af0/src/get.js#L18)
