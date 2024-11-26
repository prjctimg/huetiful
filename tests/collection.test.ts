import { sortBy, filterBy, stats } from "../lib/collection.ts";
import { colors } from "../lib/palettes.ts";
import runner, { type Spec } from "./runner.ts";

const samples = colors('all', '500')
const tests: Spec[] = [
  {
    description: "Filters collections of color.",
    callback: filterBy,
    matcher: "toEqual",
    params: [samples, { ranges: { hue: ['>=190'], factor: ['hue'] } }],
    result: "",
  },
  {
    description: "Sorts collections of color.",
    callback: sortBy,
    matcher: "toEqual",
    params: [samples, { factor: ['hue'], order: 'asc' }],
    result: "",
  },
  {
    description: "Gets the stats for a collection of color.",
    callback: stats,
    matcher: "toEqual",
    params: [samples],
    result: "",
  },
  // {
  //   description: "Distributes factors of a collection of color.",
  //   callback: distribute,
  //   matcher: "toEqual",
  //   params: [],
  //   result: "",
  // },
];

runner(tests);
