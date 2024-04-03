// @ts-nocheck
import { build, formats } from 'documentation';
import { readdirSync, writeFileSync } from 'fs';
import { src, dest, series } from 'gulp';

// Get all the modules wxcluding the barrel module (index.js)
var pages = [
  'wrappers',
  'converters',
  'utils',
  'colors',
  'stats',
  'generators',
  'accessibility',
  'sortBy',
  'filterBy'
];

pages.map((page) =>
  build([`./src/${page}.js`], {
    hljs: { highlightAuto: true, languages: ['javascript', 'typescript'] }
  })
    .then(formats.md)
    .then((o) => writeFileSync(`./tmp/api/${page.concat('.md')}`, o))
);
