// eslint-disable-next-line no-undef
var { build } = require('esbuild');
var { dependencies } = require('./package.json');

///// For Node (no external deps)
build({
	legalComments: 'inline',
	entryPoints: [`./src/index.js`],
	format: 'esm',
	bundle: true,
	outfile: `./lib/huetiful.esm.js`,
	external: Object.keys(dependencies),
	minify: false
}).then(() => console.log(`ESM build for Node done.`));

/////  For browser (bundled with Culori)

// not minified
build({
	entryPoints: [`./src/index.js`],
	format: 'esm',
	bundle: true,
	outfile: `./lib/huetiful.js`,
	minify: false
}).then(() => console.log(`ESM build for browser done.`));

// minified
build({
	entryPoints: [`./src/index.js`],
	format: 'esm',
	bundle: true,
	outfile: `./lib/huetiful.min.js`,
	minify: true,
	keepNames: true,
	minifyWhitespace: true,
	minifySyntax: true
}).then(() => console.log(`ESM build (minified) for browser done.`));
