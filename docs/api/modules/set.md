[huetiful-js](../README.md) / set

# Module: set

## Functions

### set

▸ **set**(`mc`): (`color`: [`ColorToken`](alpha.md#colortoken), `value`: `string` \| `number`) => [`ColorToken`](alpha.md#colortoken)

Sets the value for the specified channel in a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mc` | `string` | The mode and channel to work with. For example 'rgb.b'. |

#### Returns

`fn`

▸ (`color`, `value`): [`ColorToken`](alpha.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) |
| `value` | `string` \| `number` |

##### Returns

[`ColorToken`](alpha.md#colortoken)

**`Example`**

```ts
import { set } from 'huetiful-js'

let myColor = set('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
```

#### Defined in

[src/set.js:20](https://github.com/prjctimg/huetiful/blob/ed00af0/src/set.js#L20)
