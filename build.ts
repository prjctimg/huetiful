// @ts-nocheck:

import { $, build } from "bun";

const baseOptions = {
    entrypoints: ["./lib/index.ts"],
    outdir: "./build",
    minify: {
      whitespace: true,
      syntax: true,
      identifiers: true,
    },
    target: "browser",
    format: "esm",
  },
  logger = (env) => console.log(`${env} build complete🏗`);

await $`sudo rm -rf build  && echo 'Cleaned build/ directory'`;

// library bundle minified
(await build({
  ...baseOptions,
  naming: "browser/huetiful.min.js",
}).then(logger("Browser ESM (minified) entire library"))) &&
  (await build({
    ...baseOptions,

    minify: false,
    target: "node",
    naming: "node/huetiful.esm.js",
  }).then(logger("Node")));
await $`bun tsup  --format=esm ./lib/index.ts --dts-only --outDir=./build`;
await $`du -sh build/*`;
