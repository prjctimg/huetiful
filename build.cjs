/* eslint-disable @typescript-eslint/no-var-requires */
// esbuild script
//@ts-nocheck

// eslint-disable-next-line no-undef
var { build } = require('esbuild');



const sharedConfig = {
  entryPoints: ['.//src/index.ts'],
  bundle: true,
  minify: false
};

// ***Modular imports** \\

// palettes/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/palettes/index.ts'],
  outfile: 'dist/palettes/index.esm.mjs',


});

// filterBy/ import
build({
  ...sharedConfig,
  format: 'esm',
  outfile: 'dist/filterBy/index.esm.mjs',

  platform: 'neutral'
});

// sortBy/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/sortBy/index.ts'],
  outfile: 'dist/sortBy/index.esm.mjs',

});

// colors/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/colors/index.ts'],
  outfile: 'dist/colors/index.esm.mjs',

});

// fp/ import
build({
  ...sharedConfig,
  format: 'esm',
  entryPoints: ['.//src/fp/index.ts'],
  outfile: 'dist/fp/index.esm.mjs'
});

// core-utils/ import
build({
  format: 'esm',
  ...sharedConfig,
  entryPoints: ['.//src/core-utils/index.ts'],
  outfile: 'dist/core-utils/index.esm.mjs',

});

//Bundled CJS minified
build({
  ...sharedConfig,
  outfile: 'dist/huetiful.min.cjs',
  minify: true,

});

//Bundled ESM
build({
  ...sharedConfig,
  format: 'esm',
  outfile: 'dist/huetiful.esm.mjs'
});

//Bundled ESM minified
build({
  ...sharedConfig,
  format: 'esm',
  outfile: 'dist/huetiful.esm.min.mjs',
  minify: true,

});

//Bundled IIFE
build({
  ...sharedConfig,
  format: 'iife',
  outfile: 'dist/huetiful.js',
  globalName: 'huetiful',
  minify: false
});

//Bundled IIFE minified
build({
  ...sharedConfig,
  format: 'iife',
  outfile: 'dist/huetiful.min.js',
  globalName: 'huetiful',
  minify: true
});
