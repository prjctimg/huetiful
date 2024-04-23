[huetiful-js](../README.md) / complimentary

# Module: complimentary

## Functions

### complimentary

▸ **complimentary**(`color`, `colorspace`, `obj?`): `string` \| `number` \| `boolean` \| `ColorObject` \| [[`Colorspaces`](nearest.md#colorspaces), `number`, `number`, `number`, number?] \| `number`[] \| \{ `color`: [`ColorToken`](alpha.md#colortoken) ; `factor`: `number`  }

Returns the complementary color (180 degrees from that color) of the passed in color token.

The object (if the `obj` parameter is `true`) returns:

* The complimentary color for the passed in color token
* The hue family from which the complimentary color was found.

The function is internally guarded against achromatic colors which means no action will be done on a gray color and it will be returned as is. Pure black or white (`'#000000'` and `'#ffffff'` respectively) may return unexpected results.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`ColorToken`](alpha.md#colortoken) | `undefined` | The color to retrieve its complimentary hue. |
| `colorspace` | `any` | `undefined` | - |
| `obj` | `boolean` | `false` | Optional boolean whether to return an object with the result color hue family or just the result color. Default is `false`. |

#### Returns

`string` \| `number` \| `boolean` \| `ColorObject` \| [[`Colorspaces`](nearest.md#colorspaces), `number`, `number`, `number`, number?] \| `number`[] \| \{ `color`: [`ColorToken`](alpha.md#colortoken) ; `factor`: `number`  }

**`Example`**

```ts
import { complementary } from "huetiful-js";

console.log(complementary("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complementary("purple"))
// #005700ff
```

#### Defined in

[src/complimentary.js:35](https://github.com/prjctimg/huetiful/blob/ed00af0/src/complimentary.js#L35)
