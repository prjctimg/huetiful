## contrast()

> **contrast**(`a`, `b`): `number`

Defined in: [accessibility/index.ts:31](https://github.com/prjctimg/huetiful/blob/1c1db632d03b1d44995cb0e0dcc96d142d7ce49a/lib/accessibility/index.ts#L31)

Gets the contrast between the passed in colors.

:::tip

Swapping color `a` and `b` in the parameter list doesn't change the resulting value. The maximum value is 21 (or the contrast between black and white).

:::

### Parameters

#### a

[`ColorToken`](types.md#colortoken) = `"white"`

First color to query. The default is `white`.

#### b

[`ColorToken`](types.md#colortoken) = `"black"`

The color to compare against. The default is `black`.

### Returns

`number`

### Example

```ts
import { contrast } from "huetiful-js";

console.log(contrast("blue", "red"));
// 21
```

---

## deficiency()

> **deficiency**(`color`, `options`): [`ColorToken`](types.md#colortoken)

Defined in: [accessibility/index.ts:64](https://github.com/prjctimg/huetiful/blob/1c1db632d03b1d44995cb0e0dcc96d142d7ce49a/lib/accessibility/index.ts#L64)

Simulates how a color may be perceived by people with color vision deficiency.

:::tip

To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:

- `'monochromacy'` - An inability to see color, only perceiving shades of gray. The `kind` is `mono`.

- `'tritanopia'` - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
- `'deuteranopia'` - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
- `'protanopia'` - An inability to distinguish the color 'red'. The `kind` is `'red'`.

:::

### Parameters

#### color

[`ColorToken`](types.md#colortoken) = `"cyan"`

The color to return its simulated variant. The default is `cyan`.

#### options

[`DeficiencyOptions`](types.md#deficiencyoptions) = `...`

The optional overrides for tweaking the final output.

### Returns

[`ColorToken`](types.md#colortoken)

### Example

```ts
import { deficiency } from "huetiful-js";

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.5

console.log(
  deficiency(["rgb", 230, 100, 50, 0.5], { kind: "blue", severity: 0.5 }),
);
// '#dd663680'
```
