// esbuild script
//@ts-nocheck
import { build } from 'esbuild'


const sharedConfig = {
    entryPoints: ['.//src/core-utils/index.js'],
    bundle: true,
    minify: false,
    //  external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
}



//Bundled CJS
build({ ...sharedConfig, outfile: 'dist/huetiful.cjs', format: 'cjs' })


//Bundled CJS minified
build({ ...sharedConfig, outfile: 'dist/huetiful.cjs', minify: true })


//Bundled ESM
build({ ...sharedConfig, format: 'esm', outfile: 'dist/huetiful.esm.mjs' })


//Bundled ESM minified
build({ ...sharedConfig, format: 'esm', outfile: 'dist/huetiful.esm.mjs', "minify": true })


//Bundled IIFE
build({ ...sharedConfig, format: 'iife', outfile: 'dist/huetiful.js', globalName: "huetiful" })



//Bundled IIFE minified
build({ ...sharedConfig, format: 'iife', outfile: 'dist/huetiful.js', globalName: "huetiful", "minify": true })

//  Add UMD global.