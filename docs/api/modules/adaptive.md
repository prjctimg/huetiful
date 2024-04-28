[huetiful-js](../README.md) / adaptive

# Module: adaptive

## Type Aliases

### AdaptivePaletteOptions

Ƭ **AdaptivePaletteOptions**: `Object`

**`Description`**

This object returns the lightMode and darkMode optimized version of a color with support to add color vision deficiency simulation to the final color result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor?` | \{ `dark?`: `ColorToken` ; `light?`: `ColorToken`  } |
| `backgroundColor.dark?` | `ColorToken` |
| `backgroundColor.light?` | `ColorToken` |
| `colorBlind?` | `boolean` |

#### Defined in

types.d.ts:50

___

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[adaptive.js:3](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/adaptive.js#L3)

## Functions

### adaptive

▸ **adaptive**(`color`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `any` |
| `options` | [`AdaptivePaletteOptions`](adaptive.md#adaptivepaletteoptions) |

#### Returns

`void`

#### Defined in

[adaptive.js:69](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/adaptive.js#L69)
