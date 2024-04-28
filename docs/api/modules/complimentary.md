[huetiful-js](../README.md) / complimentary

# Module: complimentary

## Type Aliases

### ColorToken

Ƭ **ColorToken**\<\>: `Collection`

#### Defined in

[complimentary.js:2](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/complimentary.js#L2)

## Functions

### complimentary

▸ **complimentary**(`baseColor`, `obj?`): `any`

Returns the complimentary color of the passed in color token. A complimentary color is 180 degrees away on the hue channel.

The object (if the `obj` parameter is `true`) returns:

* The complimentary color for the passed in color token
* The hue family from which the complimentary color was found.

The function is internally guarded against achromatic colors which means no action will be done on a gray color and it will be returned as is. Pure black or white (`'#000000'` and `'#ffffff'` respectively) may return unexpected results.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseColor` | `any` | `undefined` | The color to retrieve its complimentary equivalent. |
| `obj` | `boolean` | `false` | Optional boolean whether to return an object with the result color's hue family or just the result color. Default is `false`. |

#### Returns

`any`

**`Example`**

```ts
import { complimentary } from "huetiful-js";

console.log(complimentary("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complimentary("purple"))
// #005700ff
```

#### Defined in

[complimentary.js:34](https://github.com/prjctimg/huetiful/blob/5e5fb86/src/complimentary.js#L34)
