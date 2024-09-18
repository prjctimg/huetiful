import { sortBy, filterBy, stats, distribute } from "../lib";
import runner, { Spec } from "./runner";
const tests: Spec[] = [
  {
    description: "Filters collections of color.",
    callback: filterBy,
    matcher: "arrayContaining",
    params: [],
    result: "",
  },
  {
    description: "Sorts collections of color.",
    callback: sortBy,
    matcher: "arrayContaining",
    params: [],
    result: "",
  },
  {
    description: "Gets the stats for a collection of color.",
    callback: stats,
    matcher: "arrayContaining",
    params: [],
    result: "",
  },
  {
    description: "Distributes factors of a collection of color.",
    callback: distribute,
    matcher: "arrayContaining",
    params: [],
    result: "",
  },
];

runner(tests);
