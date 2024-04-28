[huetiful-js](../README.md) / deficiency

# Module: deficiency

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[deficiency.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/deficiency.js#L2)

___

### DeficiencyOptions

Ƭ **DeficiencyOptions**: `Object`

Overrides to specify the type of color blindness and filter intensity.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `kind?` | [`DeficiencyType`](deficiency.md#deficiencytype) | The type of color vision deficiency. Default is `'red'` |
| `severity?` | `number` | The intensity of the filter. The exepected value is between [0,1]. Default is `0.1`. |
| `token?` | [`TokenOptions`](token.md#tokenoptions) | Specify the parsing behaviour and change output type of the `ColorToken`. |

#### Defined in

types.d.ts:204

___

### DeficiencyType

Ƭ **DeficiencyType**: ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"``

The type of color vision defeciency.

#### Defined in

types.d.ts:335

## Functions

### deficiency

▸ **deficiency**(`color`, `options?`): `any`

Simulates how a color may be perceived by people with color vision deficiency.

To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:

* 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
* 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
* 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `any` | The color to return its simulated variant |
| `options` | [`DeficiencyOptions`](deficiency.md#deficiencyoptions) |  |

#### Returns

`any`

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

[deficiency.js:51](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/deficiency.js#L51)
