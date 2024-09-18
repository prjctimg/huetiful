// @ts-nocheck

import { build } from "bun";
import { readdirSync } from "node:fs";
import { log } from "node:console";

const entryPoints = readdirSync("./lib", "utf-8")
    .filter((file) => file !== "index.ts" && file !== "types.d.ts")
    .map((file) => `./lib/${file}`),
  baseOptions = {
    entrypoints: entryPoints,
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

//   Module builds minified
await build({ ...baseOptions, naming: "browser/[dir]/[name].min.[ext]" }).then(
  logger("Browser (minified) modules")
);

// library bundle minified
await build({
  ...baseOptions,
  entrypoints: ["./lib/index.ts"],
  naming: "browser/huetiful.min.js",
}).then(logger("Browser (minified) entire library"));

// node bundle
await build({
  ...baseOptions,
  entrypoints: ["./lib/index.ts"],
  minify: false,
  target: "node",
  external: ["culori"],
  naming: "node/huetiful.esm.js",
}).then(logger("Node"));
