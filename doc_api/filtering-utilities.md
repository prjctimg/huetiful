### The `filterBy` module

The library has a `filterBy` module which is a collection utilities for filtering colors using different factors as criteria.

All the filtering functions:

- Take a collection of colors as the first parameter.
- Have a `start` and `end` value for the factor being used as filtering criteria.
- Can take expressions as the second parameter as strings. If the second param (`start`) is a string the `end` param is ignored.
- Returns an array of colors that pass the filtering constraints.

#### `filterByHue`

```
import { filterByHue } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

filterByHue(sample, 20, 80);

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]

```

#### `filterByLuminance`

```
import { filterByLuminance } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

filterByLuminance(sample, 0.4, 0.9);

// [ '#00ffdc', '#00ff78' ]

```

#### `filterBySaturation`

```
import { filterBySaturation } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

ilterBySaturation(sample, 0.1, 0.8);

// [
  '#00ffdc', '#007e00',
  '#164100', '#310000',
  '#3e0000', '#4e0000',
  '#600000', '#720000'
]

```

#### `filterByTemp`

`import { filterByTemp } from "huetiful-js";
let sample = [
"#00ffdc",
"#00ff78",
"#00c000",
"#007e00",
"#164100",
"#ffff00",
"#310000",
"#3e0000",
"#4e0000",
"#600000",
"#720000",
];

filterByTemp(sample, 1000, 20000);

// [
'#00c000', '#007e00',
'#164100', '#ffff00',
'#310000', '#3e0000',
'#4e0000', '#600000',
'#720000'
]

```

```
