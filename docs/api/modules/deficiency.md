[huetiful-js](../README.md) / deficiency

# Module: deficiency

## Type Aliases

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

The type of color vision defeciency.

#### Defined in

[types/types.d.ts:175](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L175)

## Functions

### deficiency

▸ **deficiency**(`kind?`): (`color`: [`ColorToken`](alpha.md#colortoken), `severity?`: `number`) => [`ColorToken`](alpha.md#colortoken)

Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind?` | [`DeficiencyType`](deficiency.md#deficiencytype) | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the deficiency parameter is undefined or any falsy value. |

#### Returns

`fn`

The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.

▸ (`color`, `severity?`): [`ColorToken`](alpha.md#colortoken)

##### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) |
| `severity?` | `number` |

##### Returns

[`ColorToken`](alpha.md#colortoken)

**`Example`**

```ts
import { deficiency, token('hex') } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = deficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = deficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
```

#### Defined in

[src/deficiency.js:43](https://github.com/prjctimg/huetiful/blob/ed00af0/src/deficiency.js#L43)
