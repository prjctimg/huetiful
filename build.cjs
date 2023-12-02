/* eslint-disable @typescript-eslint/no-var-requires */
// esbuild script
//@ts-nocheck

// eslint-disable-next-line no-undef
var { build } = require('esbuild');
var { dependencies } = require('./package.json')


const sharedConfig = {
  entryPoints: ['.//src/index.ts'],
  bundle: true,
  minify: false,
  minifySyntax: true

};


// commonJS import
build({
  format: 'cjs',
  ...sharedConfig,
  entryPoints: ['.//src/index.ts'],
  outfile: 'dist/index.cjs',

});



//Bundled ESM
build({
  ...sharedConfig,
  external: Object.keys(dependencies),
  format: 'esm',
  outfile: 'dist/index.esm.mjs'

});


//Bundled IIFE
build({
  ...sharedConfig,
  platform: 'browser',
  format: 'iife',
  outfile: 'dist/index.umd.js',
  globalName: 'huetiful',
  minifySyntax: true

});

build({
  ...sharedConfig,
  platform: 'browser',
  format: 'iife',
  outfile: 'dist/index.umd.js',
  globalName: 'huetiful',
  minifySyntax: true, minify: true

});

