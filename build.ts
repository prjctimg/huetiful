// @ts-nocheck

import { build, $ } from "bun";
import { readdirSync } from "node:fs";
import { log } from "node:console";

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
  logger = (env) => log(`${env} build complete🏗`);

await $`rm -rf build  && echo 'Cleaned build/ directory'`;

// library bundle minified
await build({
  ...baseOptions,
  naming: "browser/huetiful.min.js",
}).then(logger("Browser ESM (minified) entire library"));

// node bundle
await build({
  ...baseOptions,

  minify: false,
  target: "node",
  external: ["culori"],
  naming: "node/huetiful.esm.js",
}).then(logger("Node"));
await $`bun tsup  --format=esm ./lib/index.ts --dts-only --outDir=./build`;
await $`du -sh build/*`;
