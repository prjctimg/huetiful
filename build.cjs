// esbuild script
//@ts-nocheck
var { build } = require("esbuild")

var { dependencies } = require("./package.json")

const sharedConfig = {
  entryPoints: [".//src/index.ts"],
  bundle: true,
  minify: false,
}




                                // ***Modular imports** \\

// palettes/ import
build({
  ...sharedConfig,
  entryPoints: [".//src/palettes/index.ts"],
  outfile: "dist/palettes/index.esm.mjs",

  external: Object.keys(dependencies),
})

// filterBy/ import
build({
  ...sharedConfig,
  outfile: "dist/filterBy/index.esm.mjs",
  external: Object.keys(dependencies),
  platform:'neutral'
})


// sortBy/ import
build({
  ...sharedConfig,
  entryPoints:['.//src/sortBy/index.ts'],
  outfile: "dist/sortBy/index.esm.mjs",
  external: Object.keys(dependencies),
})

// colors/ import
build({
  ...sharedConfig,
  entryPoints: [".//src/colors/index.ts"],
  outfile: "dist/colors/index.esm.mjs",
  external: Object.keys(dependencies),
})


// fp/ import
build({
  ...sharedConfig,
  entryPoints: [".//src/fp/index.ts"],
  outfile: "dist/fp/index.esm.mjs",
  external: Object.keys(dependencies),
})


// core-utils/ import
build({
  ...sharedConfig,
  entryPoints: [".//src/core-utils/index.ts"],
  outfile: "dist/core-utils/index.esm.mjs",
  minify: true,
  external: Object.keys(dependencies),
})




//Bundled CJS minified
build({
  ...sharedConfig,
  outfile: "dist/huetiful.min.cjs",
  minify: true,
  external: Object.keys(dependencies),
})



//Bundled ESM
build({
  ...sharedConfig,
  format: "esm",
  outfile: "dist/huetiful.esm.mjs",
})

//Bundled ESM minified
build({
  ...sharedConfig,
  format: "esm",
  outfile: "dist/huetiful.esm.min.mjs",
  minify: true,
  external: Object.keys(dependencies),
})

//Bundled IIFE
build({
  ...sharedConfig,
  format: "iife",
  outfile: "dist/huetiful.js",
  globalName: "huetiful",
})

//Bundled IIFE minified
build({
  ...sharedConfig,
  format: "iife",
  outfile: "dist/huetiful.min.js",
  globalName: "huetiful",
  minify: true,
})
