The library is split into individual modules each with functions that have the same base functionality i.e sorting collections or querying color properties. Each module has a test (or `.spec.js)` file where the unit tests are found and a declaration (or `.d.ts`) file where the API documentation is generated from.

> The reason why the types and JavaScript are in different files is because I didn't want to include a build step. As of v2.x.x the library is written in pure JS which makes testing with tools such as Jasmine easier. Also bundle size shrunk from 27Kb to just 11Kb after  removing the types from the source!

### Modules

- [accessibility](accessibility)
- [colors](colors)
- [converters](converters)
- [filterBy](filterBy)
- [generators](generators)
- [sortBy](sortBy)
- [stats](stats)
- [types](types)
- [utils](utils)
- [wrappers](wrappers)
