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
| `backgroundColor?` | \{ `dark?`: [`ColorToken`](alpha.md#colortoken) ; `light?`: [`ColorToken`](alpha.md#colortoken)  } |
| `backgroundColor.dark?` | [`ColorToken`](alpha.md#colortoken) |
| `backgroundColor.light?` | [`ColorToken`](alpha.md#colortoken) |
| `colorBlind?` | `boolean` |

#### Defined in

[types/types.d.ts:45](https://github.com/prjctimg/huetiful/blob/ed00af0/types/types.d.ts#L45)

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

[src/adaptive.js:69](https://github.com/prjctimg/huetiful/blob/ed00af0/src/adaptive.js#L69)
