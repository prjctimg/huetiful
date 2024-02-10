// eslint-disable-next-line no-undef
var { build } = require('esbuild');
var { dependencies } = require('./package.json');

const sharedConfig = {
  entryPoints: ['.//src/index.ts'],
  bundle: true,
  minify: false
};

var moduleNames = [
  'sortBy',
  'filterBy',
  'colors',
  'generators',
  'utils',
  'helpers',
  'converters'
];

for (let idx = 0; idx < moduleNames.length; idx++) {
  // ESM builds
  build({
    entryPoints: [`./src/${moduleNames[idx]}.ts`],
    format: 'esm',
    bundle: true,
    outfile: `./lib/${moduleNames[idx]}.esm.mjs`,
    external: Object.keys(dependencies),
    entryPoints: [`./src/${moduleNames[idx]}.ts`],
    minify: false,
    keepNames: true
  });

  //Bundled ESM
  build({
    entryPoints: [`./src/${moduleNames[idx]}.ts`],
    bundle: true,
    platform: 'browser',
    format: 'esm',
    minify: true,
    outfile: `./lib/${moduleNames[idx]}.esm.min.mjs`
  });

  console.log(`[info] ${moduleNames[idx]}.ts has been built`);
}

//Bundled IIFE
build({
  ...sharedConfig,
  platform: 'browser',
  format: 'iife',
  outfile: './lib/huetiful.umd.js',
  globalName: 'huetiful',
  minify: true
});
console.log(`[info] UMD build successful`);

//Bundled ESM
build({
  entryPoints: [`./src/index.ts`],
  bundle: true,
  platform: 'browser',
  format: 'esm',
  minify: true,
  outfile: `./lib/huetiful.esm.min.mjs`
});
console.log(`[info] ESM build (bundled & minified) successful`);

// ESM no bundle
build({
  ...sharedConfig,
  platform: 'node',
  format: 'esm',
  outfile: './lib/huetiful.esm.mjs',
  external: Object.keys(dependencies)
});
console.log(`[info] ESM build (no bundle) successful`);

console.log(`Build completed successfully`);
