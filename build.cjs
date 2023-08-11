// esbuild script
//@ts-nocheck
var { build } = require("esbuild");

var { dependencies } = require("./package.json");

const sharedConfig = {
  entryPoints: [".//src/index.ts"],
  bundle: true,
  minify: false,
  external: Object.keys(dependencies),
};

//Bundled CJS
build({ ...sharedConfig, outfile: "dist/huetiful.cjs", format: "cjs" });

//Bundled CJS minified
build({ ...sharedConfig, outfile: "dist/huetiful.min.cjs", minify: true });

//Bundled ESM
build({ ...sharedConfig, format: "esm", outfile: "dist/huetiful.esm.mjs" });

//Bundled ESM minified
build({
  ...sharedConfig,
  format: "esm",
  outfile: "dist/huetiful.esm.min.mjs",
  minify: true,
});

//Bundled IIFE
build({
  ...sharedConfig,
  format: "iife",
  outfile: "dist/huetiful.js",
  globalName: "huetiful",
});

//Bundled IIFE minified
build({
  ...sharedConfig,
  format: "iife",
  outfile: "dist/huetiful.min.js",
  globalName: "huetiful",
  minify: true,
});
